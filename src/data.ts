import {
  BookOpen,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Clock3,
  Code2,
  Compass,
  FileUser,
  FolderOpen,
  Layers3,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  MonitorCheck,
  PanelsTopLeft,
  Route,
  Sparkles,
  Sprout,
  Target,
  Users,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const challenges = [
  {
    icon: Layers3,
    title: "Too many tools. Too little clarity.",
    text: "AI is everywhere. Knowing how to actually use it is another story.",
  },
  {
    icon: Compass,
    title: "Unsure what to learn next.",
    text: "You want skills that matter, not another never-ending tutorial list.",
  },
  {
    icon: Clock3,
    title: "A schedule that is already full.",
    text: "Finding time for focused learning can feel like a challenge itself.",
  },
  {
    icon: FolderOpen,
    title: "Learning, but nothing to show.",
    text: "You need practical projects that turn knowledge into visible skills.",
  },
  {
    icon: Route,
    title: "An unclear next career step.",
    text: "A better resume, a new direction, a fresh start. Where do you begin?",
  },
  {
    icon: BriefcaseBusiness,
    title: "Curious about new possibilities.",
    text: "Freelancing and flexible work sound promising, but you need a starting point.",
  },
];

export const journey = [
  {
    icon: Compass,
    title: "Clarify your goals",
    text: "Start with where you are.",
  },
  {
    icon: BookOpen,
    title: "Learn relevant skills",
    text: "Focus on what matters.",
  },
  {
    icon: Code2,
    title: "Apply your knowledge",
    text: "Turn learning into doing.",
  },
  {
    icon: PanelsTopLeft,
    title: "Showcase your abilities",
    text: "Make your progress visible.",
  },
  {
    icon: Sprout,
    title: "Build new opportunities",
    text: "Take your next step forward.",
  },
];

export type TopicCategory = "all" | "technology" | "career";

export type LearningTopic = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  category: Exclude<TopicCategory, "all">;
  description: string;
  idea: string;
};

export const learningTopics: LearningTopic[] = [
  {
    id: "ai-fundamentals",
    icon: Bot,
    title: "AI Fundamentals & ChatGPT",
    summary: "Understand the tools. Start with the basics.",
    category: "technology",
    description:
      "Explore what generative AI can and cannot do, how ChatGPT works in everyday tasks, and why checking its answers matters.",
    idea: "Ask AI to explain a concept you are learning in three different ways. Check its explanation against a reliable source.",
  },
  {
    id: "prompting",
    icon: WandSparkles,
    title: "Prompting & AI Productivity",
    summary: "Ask better questions. Make room for better work.",
    category: "technology",
    description:
      "Explore clear prompting, useful context, and simple AI-assisted workflows for research, planning, and everyday productivity.",
    idea: "Take one recurring task and write a prompt with a goal, context, constraints, and an example of the output you need.",
  },
  {
    id: "ai-testing",
    icon: MonitorCheck,
    title: "AI for Software Testing",
    summary: "Bring a practical AI lens to quality assurance.",
    category: "technology",
    description:
      "Discover how AI can help brainstorm test scenarios and review coverage, while keeping human judgment and verification at the centre.",
    idea: "Describe a sample login page and ask AI for test cases. Review the suggestions and add the edge cases it missed.",
  },
  {
    id: "selenium-java",
    icon: Code2,
    title: "Selenium & Java Foundations",
    summary: "Explore the building blocks of test automation.",
    category: "technology",
    description:
      "Explore Java fundamentals, manual testing concepts, web elements, and how Selenium supports browser automation.",
    idea: "On a local practice page, plan a simple test for entering text, clicking a button, and verifying the result.",
  },
  {
    id: "power-bi",
    icon: ChartNoAxesCombined,
    title: "Power BI & Data Dashboards",
    summary: "Turn everyday data into a clearer story.",
    category: "technology",
    description:
      "Explore data preparation, useful charts, and the thinking behind a clear, purposeful Power BI dashboard.",
    idea: "Use a small sample expense dataset to sketch a dashboard that answers three specific questions.",
  },
  {
    id: "career-planning",
    icon: Target,
    title: "Career Readiness & Skill Planning",
    summary: "Give your learning a little more direction.",
    category: "career",
    description:
      "Reflect on your current skills, explore role requirements, and plan manageable learning priorities instead of chasing every trend.",
    idea: "Compare three relevant job descriptions. Identify one recurring skill and plan a small project to practise it.",
  },
  {
    id: "resume-linkedin",
    icon: FileUser,
    title: "Resume & LinkedIn Improvement",
    summary: "Help your experience tell a stronger story.",
    category: "career",
    description:
      "Explore clear, honest ways to describe projects, communicate your strengths, and make your professional profile easier to understand.",
    idea: "Rewrite one project description to explain the problem, your contribution, and the actual result. Do not invent metrics.",
  },
  {
    id: "interviews",
    icon: MessagesSquare,
    title: "Interview Preparation",
    summary: "Prepare your stories. Practise your answers.",
    category: "career",
    description:
      "Explore common interview questions, structured examples, and ways to reflect on both technical and behavioural conversations.",
    idea: "Record a two-minute answer about a challenge you solved. Listen for clarity, specific actions, and what you learned.",
  },
  {
    id: "communication",
    icon: MessageCircle,
    title: "Communication & Confidence",
    summary: "Express your ideas with more clarity.",
    category: "career",
    description:
      "Explore practical habits for professional writing, explaining technical ideas, and building confidence through consistent practice.",
    idea: "Explain a technical topic to a non-technical friend in one minute. Ask which part was clear and which part needs work.",
  },
  {
    id: "freelancing",
    icon: BriefcaseBusiness,
    title: "Freelancing & Digital Services",
    summary: "Explore possibilities with realistic expectations.",
    category: "career",
    description:
      "Explore how practical skills may translate into useful services, responsible client communication, and ethical freelance opportunities. Income is not guaranteed.",
    idea: "Choose one skill you already have. Describe a small service, the problem it could solve, and a sample project to demonstrate it.",
  },
];

export const climbSteps = [
  {
    letter: "C",
    title: "Clarify",
    description: "Understand your goals and your current skill level.",
  },
  {
    letter: "L",
    title: "Learn",
    description: "Choose relevant AI and practical technology skills.",
  },
  {
    letter: "I",
    title: "Implement",
    description: "Put ideas into practice. Build projects that matter.",
  },
  {
    letter: "M",
    title: "Market",
    description:
      "Present your skills through your resume, portfolio, and profile.",
  },
  {
    letter: "B",
    title: "Build",
    description: "Work toward career growth and new opportunities.",
  },
];

export const audiences = [
  "Students and job seekers",
  "Early-career professionals",
  "Career changers looking for a fresh direction",
  "People returning after a career break",
  "Professionals who want to put AI into practice",
  "Homemakers and people exploring remote work or freelancing",
];

export const benefits = [
  {
    icon: Sparkles,
    title: "Beginner-friendly AI learning",
    text: "Simple explanations and practical AI insights that help you start with confidence.",
  },
  {
    icon: Compass,
    title: "Career-focused guidance",
    text: "Skill roadmaps and ideas for your resume, LinkedIn profile, interviews, and next steps.",
  },
  {
    icon: BookOpen,
    title: "Practical learning resources",
    text: "Project suggestions and exercises to help you put your learning to work.",
  },
  {
    icon: Users,
    title: "Community learning & updates",
    text: "Useful resources and updates on AI, technology, and professional opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Ideas that connect to the real world",
    text: "Thoughtful ways to apply your skills, solve problems, and explore ethical digital services.",
  },
];

export const faqs = [
  {
    question: "Is the community free?",
    answer:
      "Yes. Joining the AI Career Catalyst WhatsApp community is free. Any future paid training will be clearly identified, priced separately, and completely optional.",
  },
  {
    question: "Do I need prior AI knowledge?",
    answer:
      "No. Beginners are welcome, and you can start with the fundamentals. Curiosity and a willingness to practise are a good place to begin.",
  },
  {
    question: "Will this help me get a job?",
    answer:
      "The community can help you learn relevant skills and prepare for opportunities, but jobs and career outcomes are not guaranteed. Results depend on your skills, effort, experience, and market conditions.",
  },
  {
    question: "Can I learn while working full-time?",
    answer:
      "Yes. The resources are intended to support practical learning at your own pace. Your progress will depend on your available time and consistency, so start with a manageable commitment.",
  },
  {
    question: "Will I earn money after joining?",
    answer:
      "No income is guaranteed. You can explore how practical skills may support career development or potential freelance services, depending on your capabilities and market demand. Joining is not an offer of employment or paid work.",
  },
  {
    question: "Is this suitable for homemakers and career-break professionals?",
    answer:
      "Yes. The learning resources can also be relevant to homemakers, people returning to work, and those exploring flexible opportunities. Start with your current skills, available time, and personal goals.",
  },
];

export const navLinks = [
  { href: "#community", label: "The Community" },
  { href: "#learn", label: "What You'll Learn" },
  { href: "#about", label: "About Seema" },
  { href: "#faq", label: "FAQs" },
];
