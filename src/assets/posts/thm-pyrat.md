# TRYHACKME: pyrat Write-Up

**Difficulty:** Easy  
**Category:** Web Exploitation

---

This is my walkthrough of the *pyrat* machine from TryHackMe.

### Enumeration

I started with an nmap scan:

```bash
nmap -sC -sV -p- 10.10.10.75
