import { articlesData } from '../data/articles.js'

export const initializeData = () => {
  // Clear existing data to force refresh
  localStorage.removeItem('siteData')
  
  const defaultData = {
    settings: {
      siteName: 'Rafe Ahmad Khatebi',
      siteDescription: 'Full Stack Web Developer',
      email: 'rkhatibi2003@gmail.com',
      phone: '+93 728 958 423',
      location: 'Herat, Afghanistan',
      bio: "Full Stack Web Developer passionate about building high-performance, SEO-friendly, and responsive web applications. Experienced in React, TypeScript, Tailwind CSS, PHP (Laravel), and MySQL.",
      yearsExperience: '3+',
      projectsCompleted: '15+',
      clientsSatisfied: '10+',
      cvFile: '/src/assets/new-cv-2025.pdf',
      github: 'RafeKhatebi',
      linkedin: 'khatebi2003'
    },
    skills: [
      { id: 1, name: 'React.js', level: 95, category: 'Frontend', color: '#61DAFB' },
      { id: 2, name: 'TypeScript', level: 90, category: 'Frontend', color: '#3178C6' },
      { id: 3, name: 'Tailwind CSS', level: 95, category: 'Frontend', color: '#06B6D4' },
      { id: 4, name: 'Laravel', level: 88, category: 'Backend', color: '#FF2D20' },
      { id: 5, name: 'PHP', level: 85, category: 'Backend', color: '#777BB4' },
      { id: 6, name: 'MySQL', level: 80, category: 'Database', color: '#4479A1' }
    ],
    experiences: [
      {
        id: 1,
        position: 'Full Stack Web Developer',
        company: 'Novatech Company',
        location: 'Herat, Afghanistan',
        period: '05/2025 - 09/2025',
        responsibilities: [
          'Developed and maintained full-stack web applications using React, TypeScript, and Laravel',
          'Optimized application performance, reducing page load time by 30%'
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: 'Personal Website',
        description: 'Modern, responsive personal website with multi-language support',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
        technologies: ['React 18', 'Vite', 'Tailwind CSS', 'i18next'],
        demo_url: 'https://github.com/RafeKhatebi',
        github_url: 'https://github.com/RafeKhatebi',
        featured: true
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Computer Science',
        school: 'Herat University',
        location: 'Herat, Afghanistan',
        period: '2022 - Present',
        details: '7th Semester, GPA: 92.95%'
      }
    ],
    articles: JSON.parse(localStorage.getItem('siteData'))?.articles || articlesData,
    messages: []
  }

  localStorage.setItem('siteData', JSON.stringify(defaultData))
  return defaultData
}