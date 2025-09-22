// Articles data - update this with your new articles from localStorage
export const articlesData = [
  // Add your articles here from localStorage
  {
    slug: "The Rise of the Information Society: Transformations and Challenges",
    title: {
      en: "The Rise of the Information Society: Transformations and Challenges",
      fa: "",
      ps: "",
    },
    excerpt: {
      en: "The Rise of the Information Society: Transformations and Challenges",
      fa: "",
      ps: "",
    },
    content: {
      en: "The Rise of the Information Society: Transformations and Challenges\nAs the twentieth century drew to a close, countries around the globe began undergoing profound changes driven by the increasing importance of information. This global shift towards what is now termed the \"information society\" transcends boundaries of size, development level, or political system — from Singapore's vibrant economy to Japan's vast technological landscape, and from developing nations like Thailand to established powers in North America and Europe.\n\nCharacteristics of Information Societies\nInformation societies are defined by three core traits: the recognition of information as a key economic resource, widespread and intensive public use of information, and the emergence of a specialized information sector encompassing content creation, distribution channels, and processing industries. This societal model represents the latest phase in humanity's long economic evolution—moving from agriculture through industrialization to a knowledge and service-based economy.\n\nEconomic and Employment Shifts\nThe rapid advancement of information and communication technologies is reshaping labor markets. Many traditional clerical roles are disappearing due to automation, yet new opportunities arise in highly skilled, information-intensive professions. While this evolution promises greater efficiency and innovation, it also introduces new social challenges, including job insecurity and the merging boundaries of work and personal life.\n\nThe Complexity of Measuring Information Societies\nDespite their significance, quantifying and defining information societies pose challenges. Information itself is intangible and globally distributed, complicating efforts to capture the full scope of these economies in traditional statistics or regulatory frameworks. The globalization of information flows further blurs national boundaries, creating both opportunities and regulatory dilemmas.\n\nThe Information Industry Ecosystem\nThe information economy can be broken down into three segments: content creators such as authors and artists; delivery networks including telecommunications and broadcasting; and processing industries that manufacture hardware and software. Together, these segments fuel the complex machinery behind today's information-rich environments.\n\nEvolving Professions and Organizational Impact\nInformation professionals—librarians, archivists, and information scientists—are adapting to technological and conceptual shifts by acquiring new skills essential for managing digital resources. Meanwhile, organizations leverage information to enhance efficiency, spur innovation, improve risk management, and deliver better public services in health and education.\n\nSocial Equity and Access\nAccess to information is a critical social issue. While citizens increasingly rely on information to make consumer choices and exercise civic rights, disparities in access risk creating an \"information divide.\" Policymakers must consider how to ensure equitable information access to prevent social exclusion.\n\nPolicy and Global Coordination\nGovernments and international bodies like UNESCO are actively developing policies aimed at harnessing the benefits of information societies while addressing the accompanying economic, social, and infrastructural challenges. These efforts are vital to ensuring that the transformation toward an information-based world supports inclusive growth and sustainability.",
      fa: "",
      ps: "",
    },
    category: "research",
    author: "Rafe Ahmad Khatebi",
    publishedAt: "2025-09-22",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROz09fthMgFUMgPypwrS5qEk2_6k3mgb5Y6A&s",
    readTime: 5,
    id: 1758555043907,
  },
  {
    slug: "data-recovery-disk-management",
    title: {
      en: "Data Deletion, Recovery, and Disk Space  Management in Windows ",
      fa: "",
      ps: "",
    },
    excerpt: {
      en: "Data Deletion, Recovery, and Disk Space \nManagement in Windows ",
      fa: "",
      ps: "",
    },
    content: {
      en: "Data Deletion, Recovery, and Disk Space \nManagement in Windows \n1. Introduction \nData is one of the most critical assets for individuals and organizations. Understanding how data \ndeletion works, how to recover lost files, and how to optimize storage is essential for \ncybersecurity, data management, and system performance. This guide covers the principles of \ndata deletion, recovery methods, and practical strategies to free disk space in Windows 10 and \n11. \n2. Data Deletion: What Really Happens \n2.1 Soft Deletion \n• When a file is deleted, it first moves to Recycle Bin/Trash, remaining fully intact until \npermanently removed. \n• Emptying the Recycle Bin removes only the file reference, marking the space as \navailable but leaving the actual data on the disk. \n• Deleted files can often be recovered until their physical space is overwritten. \nAnalogy: Removing a file reference is like tearing the label off a VHS tape—the content is still \nthere but “invisible” to standard file managers. \n2.2 Secure Deletion \n• Secure deletion overwrites the file’s physical location multiple times to ensure \nirrecoverability. \n• Important when handling sensitive or confidential data. \n• SSDs use TRIM, marking blocks for immediate erasure, making recovery more difficult, \nwhile HDDs leave data recoverable longer. \n3. Data Recovery \n3.1 Definition \nData recovery is the process of retrieving lost, corrupted, deleted, or inaccessible data from \nstorage devices like HDDs, SSDs, USB drives, memory cards, CDs/DVDs, and RAID \nsubsystems (IBM, 2021). \n3.2 Causes of Data Loss \n• Accidental deletion \n• Formatting or reinstallation \n• Logical failures: corrupted partitions, file system damage, firmware issues (Disklabs \nDigital Forensics, 2022) \n• Physical damage: head crashes, PCB failures, scratched optical media \n3.3 Types of Data Recovery \n1. Logical Recovery: Restores files from software-level corruption (e.g., partition table \nerrors, system file damage). \n2. Physical Recovery: Salvages data from damaged hardware components. \n3. Optical Recovery: Specialized techniques for CDs, DVDs, and other laser-written \nmedia. \n4. Instant Recovery: Redirects users to backup servers while restoration occurs in the \nbackground. \n5. Formatted Drive Recovery: Scans formatted drives for remnants of original files. \n6. Partition Recovery: Recovers lost or corrupted partitions. \n7. Forensic Recovery: Extracts encrypted, hidden, or deleted data for investigative \npurposes. \n3.4 Recovery Process \nData recovery generally follows four phases (Dolphin Data Lab, 2012): \n1. Repair the Drive: Hardware fixes like replacing heads, PCB, or spindle motor. \n2. Drive Imaging: Clone the drive to prevent further data loss. \n3. Logical Recovery: Repair file system, partitions, and master boot record (MBR). \n4. File Reconstruction: Restore corrupted or fragmented files, verifying integrity. \n4. Freeing Disk Space in Windows 10 & 11 \n4.1 Common Techniques \n1. Disk Cleanup Tool: Removes temporary files, system cache, and old Windows updates. \n2. Storage Sense: Automatically deletes temporary files and empty Recycle Bin content. \n3. Uninstall Unnecessary Programs: Remove applications that are rarely used. \n4. Delete Old User Files: Clean Downloads, Documents, and Desktop folders. \n5. Move Files to External Storage or Cloud: Offload large files to free local storage. \n6. Disable Hibernation: Frees space occupied by hibernation file (hiberfil.sys). \n7. Delete Previous Windows Installations: After upgrading OS, Windows.old can \nconsume 20-30GB+. \n4.2 Professional Recommendations \n• Always backup important files before deletion or cleanup. \n• Use disk analysis tools to identify large, duplicate, or redundant files. \n• Schedule regular storage maintenance to prevent system slowdown. \n5. Best Practices for Data Security & Maintenance \n1. Regular Backups: Maintain multiple backup copies (local & cloud). \n2. Disaster Recovery Plans: Prepare for hardware failures or data corruption. \n3. Software & Security Measures: Antivirus, firewalls, encryption, and access control. \n4. Training & Awareness: Educate employees on secure handling of data. \n6. References \n1. IBM. (2021). Data Recovery Explained. [https://www.ibm.com](https://www.ibm.com) \n2. Disklabs Digital Forensics. (2022). What is Logical Failure? [Archived] \n3. Streetdirectory.com. (2022). What Happens When Drives Experience Logical Failure? \n4. Dolphin Data Lab. (2012). Stanley Morgan, Four Phases of Data Recovery. \n5. Gutmann, P. (1996). Secure Deletion of Data from Magnetic and Solid-State Memory. \nUniversity of Auckland. \n6. Vasconcelos, P. (2019). DIY Data Recovery Could Mean 'Bye-Bye'. Ontrack Data \nRecovery. \n7. Washington Post. (2018). Electronics-recycling innovator is going to prison. \n8. [https://www.calpcc.com/data-deletion-and-recovery/](https://www.calpcc.com/data-deletion-and-recovery/) \n9. [https://en.wikipedia.org/wiki/Data_recovery](https://en.wikipedia.org/wiki/Data_recovery) \n10. [https://www.geeksforgeeks.org/techtips/what-is-data-recovery/](https://www.geeksforgeeks.org/techtips/what-is-data-recovery/) \nfarsi links: \n11. https://www.shahrsakhtafzar.com/fa/articles-guides/software/51312-permanent-file\ndeletion-with-apps \n12. [https://www.beytoote.com/computer/tarfand-c/recover-files2-software.html](https://www.beytoote.com/computer/tarfand-c/recover-files2-software.html)",
      fa: "",
      ps: "",
    },
    category: "research",
    author: "Rafe Ahmad Khatebi",
    publishedAt: "2025-09-22",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRqY35_Pp5govnFAoLHt1VAreyqECun25aA&s",
    readTime: 8,
    id: 1758555900764,
  },
];

export const categories = [
  { id: "all", key: "allCategories" },
  { id: "ai", key: "ai" },
  { id: "programming", key: "programming" },
  { id: "research", key: "research" },
];
