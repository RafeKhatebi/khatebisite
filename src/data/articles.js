import bacImage from "../assets/img/web1.png";
import comImage from "../assets/img/web1.png";
import web1Image from "../assets/img/web1.png";
import web2Image from "../assets/img/web1.png";

// Mock articles data
export const articlesData = [
  {
    id: 1,
    slug: "machine-learning-fundamentals",
    title: {
      en: "Machine Learning Fundamentals: A Comprehensive Guide",
      fa: "مبانی یادگیری ماشین: راهنمای جامع",
      ps: "د ماشین زده کړې بنسټونه: بشپړ لارښود",
    },
    excerpt: {
      en: "An in-depth exploration of machine learning concepts, algorithms, and practical applications in modern software development.",
      fa: "بررسی عمیق مفاهیم یادگیری ماشین، الگوریتم‌ها و کاربردهای عملی در توسعه نرم‌افزار مدرن.",
      ps: "د ماشین زده کړې د مفکورو، الګوریتمونو او د عصري سافټویر پراختیا کې عملي کارونو ژوره څیړنه.",
    },
    content: {
      en: "Machine learning has revolutionized the way we approach problem-solving in computer science. This comprehensive guide covers fundamental concepts, algorithms, and practical applications that every developer should understand.",
      fa: "یادگیری ماشین روش ما را در حل مسائل علوم کامپیوتر متحول کرده است. این راهنمای جامع مفاهیم بنیادی، الگوریتمها و کاربردهای عملی را پوشش میدهد.",
      ps: "د ماشین زده کړې زموږ د کمپیوټر ساینس کې د ستونزو د حل کولو لاره بدله کړې. دا بشپړ لارښود بنسټیز مفکورې، الګوریتمونه او عملي کارونه پوښي.",
    },
    category: "ai",
    author: "Rafe Ahmad Khatebi",
    publishedAt: "2024-01-15",
    image: bacImage,
    readTime: 8,
  },
  {
    id: 2,
    slug: "react-performance-optimization",
    title: {
      en: "React Performance Optimization Techniques",
      fa: "تکنیک‌های بهینه‌سازی عملکرد React",
      ps: "د React د فعالیت د ښه کولو تخنیکونه",
    },
    excerpt: {
      en: "Learn advanced techniques to optimize React applications for better performance and user experience.",
      fa: "تکنیک‌های پیشرفته برای بهینه‌سازی اپلیکیشن‌های React جهت عملکرد و تجربه کاربری بهتر را یاد بگیرید.",
      ps: "د غوره فعالیت او د کاروونکي تجربې لپاره د React غوښتنلیکونو د ښه کولو پرمختللي تخنیکونه زده کړئ.",
    },
    content: {
      en: "React performance optimization is crucial for creating smooth user experiences...",
      fa: "بهینه‌سازی عملکرد React برای ایجاد تجربیات کاربری روان بسیار مهم است...",
      ps: "د React د فعالیت ښه کول د اسانه کاروونکي تجربو د رامینځته کولو لپاره خورا مهم دی...",
    },
    category: "programming",
    author: "Rafe Ahmad Khatebi",
    publishedAt: "2024-02-10",
    image: web1Image,
    readTime: 6,
  },
  {
    id: 3,
    slug: "ai-ethics-research",
    title: {
      en: "Ethical Considerations in AI Development",
      fa: "ملاحظات اخلاقی در توسعه هوش مصنوعی",
      ps: "د مصنوعي هوښیارتیا په پراختیا کې اخلاقي پاملرنې",
    },
    excerpt: {
      en: "Exploring the ethical implications and responsibilities in artificial intelligence research and development.",
      fa: "بررسی پیامدهای اخلاقی و مسئولیت‌ها در تحقیق و توسعه هوش مصنوعی.",
      ps: "د مصنوعي هوښیارتیا په څیړنه او پراختیا کې د اخلاقي اغیزو او مسئولیتونو څیړنه.",
    },
    content: {
      en: "As AI becomes more prevalent in our daily lives, ethical considerations become paramount...",
      fa: "با گسترش هوش مصنوعی در زندگی روزمره ما، ملاحظات اخلاقی اهمیت بالایی پیدا می‌کند...",
      ps: "لکه څنګه چې مصنوعي هوښیارتیا زموږ په ورځني ژوند کې ډیریږي، اخلاقي پاملرنې خورا مهمې کیږي...",
    },
    category: "research",
    author: "Rafe Ahmad Khatebi",
    publishedAt: "2024-03-05",
    image: comImage,
    readTime: 10,
  },
  {
    id: 4,
    slug: "web-development-trends",
    title: {
      en: "Modern Web Development Trends",
      fa: "روندهای مدرن توسعه وب",
      ps: "د ویب پراختیا عصري بهیرونه",
    },
    excerpt: {
      en: "Exploring the latest trends and technologies shaping the future of web development.",
      fa: "بررسی آخرین روندها و فناوریهای شکلدهنده آینده توسعه وب.",
      ps: "د ویب پراختیا راتلونکي ته د شکل ورکوونکو وروستیو بهیرونو او ټیکنالوژیو څیړنه.",
    },
    content: {
      en: "Web development continues to evolve with new frameworks and methodologies...",
      fa: "توسعه وب با چارچوبها و روششناسیهای جدید به تکامل ادامه میدهد...",
      ps: "د ویب پراختیا د نویو چوکاټونو او میتودولوژیو سره وده ته دوام ورکوي...",
    },
    category: "programming",
    author: "Rafe Ahmad Khatebi",
    publishedAt: "2024-04-01",
    image: web2Image,
    readTime: 7,
  },
];

export const categories = [
  { id: "all", key: "allCategories" },
  { id: "ai", key: "ai" },
  { id: "programming", key: "programming" },
  { id: "research", key: "research" },
];
