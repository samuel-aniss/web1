import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title:
    "Aniss Samuel — Ethical Hacker, Smart Contract Auditor & Web3 Developer",
  author: "Aniss Samuel",
  description:
    " Web3 Software Engineer with over 5 years blockchain experience. I specialize in UI design, web3 application development and maintenance, Smart contract auditing.",

  lang: "en",
  siteLogo: "/aniss-big.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/samuel_aniss" },
    // { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://https://github.com/samuel-aniss" },
    { text: "Email", href: "mailto:lordflex2004@gmail.com" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/canonical.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Aniss Samuel",
    specialty: "Ethical Hacker, Smart Contract Auditor & Web3 Developer",
    summary:
      "Web 3 Developer with over 5 years blockchain experience. I specialize in UI design, web3 application development and maintenance, Smart contract auditing.",
    email: "lordflex2004@gmail.com",
  },
  experience: [
    {
      company: "Legit Drops Dao",
      position: "Lead Web3 Developer",
      startDate: "November 2020",
      endDate: "December 2022",
      summary: [
        "Designed and deployed smart contracts for tokens and NFTs on EVM chains (Ethereum, Polygon), Solana, and Algorand, optimizing gas costs and security to reduce deployment expenses by 30%",

        "Launched ERC-20, ERC-721, and custom Solana programs, driving primary sales for NFT collections.",

        "Implemented on-chain analytics (Firebase + The Graph) to track user behavior, improving retention by 30%",

        "Mentored developers in smart contract security and multi-chain development best practices.",
      ],
    },
    {
      company: "Underground Hacker",
      position: "",
      startDate: "December 2022",
      endDate: "September 2024",
      summary: [
        "Conducted smart contract audits and penetration testing for Web3 projects, identifying critical vulnerabilities in DeFi protocols, NFTs, and blockchain applications.",
        "Performed security assessments on Ethereum, Solana, and other EVM-compatible chains to detect exploits like reentrancy, oracle manipulation, and flash loan attacks.",
        "Advised DAOs and Web3 startups on security best practices, including secure key management, multi-sig setups, and incident response planning.",
        "Researched emerging Web3 threats (e.g., MEV, bridge hacks, phishing scams) and contributed findings to open-source security communities.",
      ],
    },
    {
      company: "Freelancer",
      position: "Frontend Developer/Backend/Web3Developer",
      startDate: "September 2024",
      endDate: "Till Date",
      summary: [
        "Deliver full-stack and Web3 solutions for clients, building secure, scalable dApps with React, Node.js, and smart contracts (Solidity/Rust).",
        "Architect and deploy smart contracts for DeFi, NFTs, and DAOs, with audits for vulnerabilities like reentrancy and front-running.",
        "Develop responsive front-ends (Next.js, Ethers.js, Web3.js) with seamless wallet integrations (MetaMask, WalletConnect).",
        "Design and optimize backend APIs (Express, Firebase, Moralis) for blockchain data indexing and real-time updates.",
        "Implement Web3 security best practices, including multi-sig wallets, gas optimization, and phishing protection.",
        "Collaborate with startups and DAOs to troubleshoot Web3 stack issues, from RPC nodes to Layer 2 bridging.",
      ],
    },
  ],
  projects: [
    {
      name: "Solana Wallet Drainer (Security Research)",
      summary:
        "A proof-of-concept tool demonstrating Solana wallet vulnerabilities, designed for educational audits and white-hat security testing. Highlights risks of malicious token approvals and phishing attacks.",

      linkSource: "https://github.com/samuel-aniss/AutoDrainTokenTarget",
      image: "/solanadrain.png",
    },
    {
      name: "Auto Nft Minter",
      summary:
        "A personalized NFT minter specially developed during the sei chain boom",

      linkSource: "https://github.com/samuel-aniss",
      image: "/seimintbot.png",
    },
    {
      name: "Hacker Frontrunner Bot",
      summary:
        "A specialized tool developed to frotrun hackers and claim EVM tokens ",

      linkSource: "https://github.com/samuel-aniss",
      image: "/frontrunner.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Aniss Samuel, a Web3 engineer and security-focused developer who builds at the intersection of decentralized tech and covert systems. With expertise in smart contracts (EVM/Solana/Algorand), zero-trust architectures, and cross-platform obfuscation, I specialize in creating solutions that are as hard to trace as they are high-performance.

From launching various NFT projects to engineering anti-forensic mobile frameworks, I bridge the gap between cutting-edge blockchain protocols and off-grid security. My work prioritizes gas efficiency, OpSec resilience, and user sovereignty, whether I’m deploying a DAO or hardening a Flutter app against intrusion.    `,
    image: "/aniss-big.jpg",
  },
};

// #5755ff
