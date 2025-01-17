const { marked } = require('marked');


const worksData = [
  {
    id: "1",
    title: "Designing a Dashboard",
    img: "http://localhost:5173/assets/rec.png",
    subText: "A dashboard with clean design principles.",
    content: "# Dashboard Design\nThis is a **case study** about dashboard design.",
    date: new Date().toISOString(),
    category: "Design",
  },
  {
    id: "2",
    title: "Creative Portfolio",
    img: "http://localhost:5173/assets/rec.png",
    subText: "Showcasing creative work.",
    content: "## Creative Work\nThis portfolio highlights *creative projects*.",
    date: new Date().toLocaleDateString(), 
    category: "Art",
  },
  {
    id: "4",
    title: "Creative Portfolio",
    img: "http://localhost:5173/assets/rec.png",
    subText: "Showcasing creative work.",
    content: "## Creative Work\nThis portfolio highlights *creative projects*.",
    date: new Date().toLocaleDateString(),
    category: "Art",
  },
  {
    id: "5",
    title: "Creative Portfolio",
    img: "http://localhost:5173/assets/rec.png",
    subText: "Showcasing creative work.",
    content: "## Creative Work\nThis portfolio highlights *creative projects*.",
    date: new Date().toLocaleDateString(),
    category: "Art",
  },
  {
    id: "6",
    title: "Creative Portfolio",
    img: "http://localhost:5173/assets/rec.png",
    subText: "Showcasing creative work.",
    content: "## Creative Work\nThis portfolio highlights *creative projects*.",
    date: new Date().toLocaleDateString(),
    category: "Art",
  },
];

const blogsData = [
  {
    id: "1",
    title: "Understanding React Hooks",
    subText: "A beginner's guide to understanding React hooks and how to use them in your projects.",
    content: "### React Hooks\nThis blog explains the use of `React` hooks.",
    date: new Date().toISOString(),
    category: "Development",
  },
  {
    id: "2",
    title: "CSS Grid vs Flexbox",
    subText: "Comparing CSS Grid and Flexbox to decide the best tool for your layouts.",
    content: "## CSS Tips\nLearn when to use **CSS Grid** and *Flexbox*.",
    date: new Date().toISOString(),
    category: "Frontend",
  },
  {
    id: "3",
    title: "Understanding React Hooks",
    subText: "A beginner's guide to understanding React hooks and how to use them in your projects.",
    content: "### React Hooks\nThis blog explains the use of `React` hooks.",
    date: new Date().toISOString(),
    category: "Development",
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox",
    subText: "Comparing CSS Grid and Flexbox to decide the best tool for your layouts.",
    content: "## CSS Tips\nLearn when to use **CSS Grid** and *Flexbox*.",
    date: new Date().toISOString(),
    category: "Frontend",
  },
  {
    id: "5",
    title: "Understanding React Hooks",
    subText: "A beginner's guide to understanding React hooks and how to use them in your projects.",
    content: "### React Hooks\nThis blog explains the use of `React` hooks.",
    date: new Date().toISOString(),
    category: "Development",
  },
  {
    id: "6",
    title: "CSS Grid vs Flexbox",
    subText: "Comparing CSS Grid and Flexbox to decide the best tool for your layouts.",
    content: "## CSS Tips\nLearn when to use **CSS Grid** and *Flexbox*.",
    date: new Date().toISOString(),
    category: "Frontend",
  },
];

module.exports = { worksData, blogsData };
