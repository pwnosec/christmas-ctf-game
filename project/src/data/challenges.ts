import { Lock, Shield, Bug, Wifi, Key, Network, Terminal, FileWarning } from 'lucide-react';

export const challenges = [
  {
    id: 1,
    title: "Santa's Password Vault",
    icon: Lock,
    difficulty: "Easy",
    points: 100,
    category: "Cryptography",
    description: "Crack the password to Santa's secret vault",
    challenge: `
      Santa uses a simple password system for his vault:
      - It's a 6-character string
      - Contains only lowercase letters and numbers
      - The sum of all numbers in the password equals 13
      - First and last characters are letters
      - Middle characters are numbers
      
      Encrypted vault content: "HoHoHo_S3cur3_V4ult"
      Encryption algorithm: XOR with password repeated
      
      Find the password and decrypt the vault!
    `,
    hint: "Try analyzing common patterns in Santa's passwords..."
  },
  {
    id: 2,
    title: "Workshop Firewall",
    icon: Shield,
    difficulty: "Medium",
    points: 200,
    category: "Network Security",
    description: "Configure security rules for the workshop",
    challenge: `
      Configure the Workshop Firewall rules:
      1. Block all incoming traffic except:
         - TCP ports 80, 443 (web access)
         - TCP port 22 (elf SSH access)
         - UDP port 53 (DNS)
      2. Allow only IPs from the North Pole range (192.168.1.0/24)
      3. Rate limit incoming connections to prevent DDoS
      4. Log all blocked attempts
      
      Submit your iptables-compatible ruleset!
    `,
    hint: "Remember to consider both INPUT and FORWARD chains..."
  },
  {
    id: 3,
    title: "Elf Bug Bounty",
    icon: Bug,
    difficulty: "Hard",
    points: 300,
    category: "Bug Hunting",
    description: "Find vulnerabilities in the gift system",
    challenge: `
      The gift management system has several vulnerabilities:
      1. SQL injection in search function
      2. XSS in gift comments
      3. IDOR in gift assignments
      4. Broken access control
      
      Find and document all vulnerabilities with PoC!
    `,
    hint: "Check input validation and user role verification..."
  },
  {
    id: 4,
    title: "Reindeer Network",
    icon: Wifi,
    difficulty: "Medium",
    points: 250,
    category: "Wireless Security",
    description: "Secure the sleigh's communication network",
    challenge: `
      Analyze captured sleigh network traffic:
      - Find unauthorized access attempts
      - Identify weak encryption
      - Detect signal interference
      - Implement secure protocols
      
      File: sleigh_network_capture.pcap
      Goal: Secure all reindeer communications!
    `,
    hint: "Look for unusual patterns in beacon frames..."
  },
  {
    id: 5,
    title: "North Pole Access",
    icon: Key,
    difficulty: "Easy",
    points: 150,
    category: "Access Control",
    description: "Manage workshop access permissions",
    challenge: `
      Review and fix access control:
      1. Implement RBAC for workshop areas
      2. Set up MFA for sensitive zones
      3. Create audit logging
      4. Design emergency access protocol
      
      Current access log provided. Find all violations!
    `,
    hint: "Check for privilege escalation paths..."
  },
  {
    id: 6,
    title: "Gift Database",
    icon: Network,
    difficulty: "Hard",
    points: 350,
    category: "Database Security",
    description: "Protect children's wish list database",
    challenge: `
      Secure the gift database:
      1. Find and fix SQL injection vulnerabilities
      2. Implement proper data encryption
      3. Set up backup procedures
      4. Create access controls
      
      Database dump provided. Find all weaknesses!
    `,
    hint: "Look for unescaped user inputs..."
  },
  {
    id: 7,
    title: "Command Center",
    icon: Terminal,
    difficulty: "Medium",
    points: 200,
    category: "System Security",
    description: "Secure Santa's command center",
    challenge: `
      Analyze command center security:
      1. Review shell scripts for vulnerabilities
      2. Check for command injection
      3. Audit system calls
      4. Implement secure logging
      
      Source code provided. Find the backdoor!
    `,
    hint: "Check for unusual environment variables..."
  },
  {
    id: 8,
    title: "Malware Scanner",
    icon: FileWarning,
    difficulty: "Hard",
    points: 400,
    category: "Malware Analysis",
    description: "Detect and remove Christmas malware",
    challenge: `
      Analyze suspicious files:
      1. Reverse engineer malware samples
      2. Create detection signatures
      3. Implement automated scanning
      4. Design removal procedures
      
      Samples provided. Find the malware family!
    `,
    hint: "Look for obfuscated strings in the binary..."
  }
];