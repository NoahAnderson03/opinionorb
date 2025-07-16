import type { Idea } from '@/types';

export const CATEGORIES = [
  "Productivity",
  "SaaS",
  "Entrepreneurship",
  "Self Improvement",
  "Tech Discovery",
  "Marketing"
];

const mockPosts: Omit<Idea, 'id' | 'createdAt'>[] = [
  {
    title: "I'm drowning in tabs. Is there a better way to manage research?",
    subreddit: "Productivity",
    category: "Productivity",
    upvotes: 1245,
    comments: [
      "Same here. I have 5 projects open and each one has 20+ tabs.",
      "I wish there was an app that could group tabs by project and save them as a session.",
      "Tried OneTab but it's too basic. Need something with search and notes.",
      "What about a visual bookmarking tool that takes screenshots of the pages?",
    ],
    summary: "Users are overwhelmed by browser tabs when managing multiple research projects and are looking for a solution that can group tabs by project, save sessions, and include features like search and note-taking. Existing tools like OneTab are considered too basic.",
    complaints: "Current tab management methods are disorganized and lead to having an excessive number of tabs open. Tools like OneTab lack advanced features such as search and note integration.",
    featureRequests: "An app that groups tabs by project, saves them as sessions, includes search functionality, and allows for adding notes. A visual bookmarking tool that takes screenshots of pages was also suggested.",
  },
  {
    title: "My biggest complaint with current project management tools",
    subreddit: "SaaS",
    category: "SaaS",
    upvotes: 832,
    comments: [
      "They are all so bloated. I need something simple for my small team.",
      "I wish there was an app that was just a kanban board, but with really good time tracking.",
      "The pricing is always per-user. It's too expensive for part-time collaborators.",
      "I hate the constant notifications. I want a tool that promotes deep work, not distraction.",
    ],
    summary: "Users find current project management tools to be bloated, expensive (especially with per-user pricing), and distracting due to excessive notifications. There is a demand for a simpler tool, specifically a Kanban board with robust time tracking, that is more affordable for teams with part-time members and promotes focused work.",
    complaints: "Existing project management tools are too complex and feature-heavy ('bloated'). Per-user pricing models are costly and not suitable for teams with occasional collaborators. Constant notifications are a major source of distraction.",
    featureRequests: "A simple Kanban board application with excellent time tracking capabilities. A tool that is designed to minimize distractions and promote deep work. More flexible pricing that isn't strictly per-user.",
  },
  {
    title: "What's a small problem in your life you would pay to have solved?",
    subreddit: "Entrepreneur",
    category: "Entrepreneurship",
    upvotes: 2109,
    comments: [
      "Finding a reliable house cleaner that uses eco-friendly products.",
      "I wish there was an app that would scan my fridge and suggest recipes for the week.",
      "A service that summarizes my favorite newsletters into a 5-minute daily audio brief.",
      "Managing my personal finances. All apps are either too simple or too complex.",
    ],
    summary: "Users expressed willingness to pay for solutions to everyday problems, including finding reliable eco-friendly house cleaners, meal planning based on available ingredients, and better personal finance management. A key idea that emerged was a service to create a daily 5-minute audio summary of their favorite newsletters.",
    complaints: "Difficulty finding trustworthy and specialized home services. Existing recipe apps don't account for ingredients on hand. Personal finance apps are either too basic or overly complicated. Keeping up with newsletters is time-consuming.",
    featureRequests: "An app to scan a refrigerator's contents and suggest recipes. A service that provides daily audio summaries of selected newsletters. A personal finance app that strikes a balance between simplicity and powerful features.",
  },
  {
    title: "How do you track your habits without feeling like a failure?",
    subreddit: "selfimprovement",
    category: "Self Improvement",
    upvotes: 987,
    comments: [
      "Streaks are demotivating. If I miss one day, I give up completely.",
      "I wish there was an app that focused on consistency over perfection. Like, 'you did it 20/30 days this month, great job!'",
      "Most habit trackers are just checklists. I want something that helps me understand WHY I failed.",
      "Journaling helps, but it's not integrated with my tracker.",
    ],
    summary: "Users find traditional habit trackers demotivating, particularly the emphasis on maintaining perfect streaks. They desire an app that encourages consistency over perfection, provides insights into why they might have missed a habit, and integrates journaling to better understand their behaviors.",
    complaints: "Streak-based systems are discouraging and can lead to giving up after a single missed day. Most trackers are simple checklists and lack depth or analytical features.",
    featureRequests: "A habit tracking app that rewards overall consistency rather than perfect streaks. Features that help users analyze and understand the reasons behind their failures. Integration of a journaling component within the habit tracker.",
  },
  {
    title: "What's the most underrated website you know?",
    subreddit: "InternetIsBeautiful",
    category: "Tech Discovery",
    upvotes: 3480,
    comments: [
      "Radio.garden - listen to radio stations from all over the world.",
      "I wish there was an app that was like a StumbleUpon for cool, obscure websites like this.",
      "A web archive that actually works well on mobile would be a game changer.",
      "Flightradar24 is amazing for tracking planes.",
    ],
    summary: "In a discussion about discovering underrated websites, users shared examples like Radio.garden and Flightradar24. This sparked a desire for a modern content discovery app, similar to the old StumbleUpon, that would help users find interesting and obscure websites. A mobile-friendly web archive was also mentioned as a needed tool.",
    complaints: "Discovering new and interesting websites is difficult. Web archiving services often have poor mobile user experiences.",
    featureRequests: "An application that helps users discover cool, obscure websites, functioning as a modern 'StumbleUpon'. A web archive service with a high-quality, functional mobile interface.",
  },
  {
    title: "The state of social media scheduling tools in 2024",
    subreddit: "SaaS",
    category: "SaaS",
    upvotes: 654,
    comments: [
      "They all lack good analytics for TikTok and Shorts.",
      "I wish there was an app that suggested the best time to post based on my specific audience's activity, not just general advice.",
      "The content creation part is still so manual. I want AI to help me write 10 variations of a post.",
      "Buffer is clean but expensive. Later is good for visuals but weak on text-based platforms.",
    ],
    summary: "Users are dissatisfied with the current social media scheduling tools, citing a lack of good analytics for short-form video platforms like TikTok and YouTube Shorts. They are looking for smarter features, such as AI-powered copy generation and personalized posting time suggestions based on their own audience data, rather than generic best practices.",
    complaints: "Poor analytics for TikTok and YouTube Shorts. Content creation is a manual and time-consuming process. Existing tools are either too expensive (Buffer) or have platform-specific weaknesses (Later).",
    featureRequests: "An app with AI to assist in writing multiple variations of social media posts. A feature that analyzes a user's specific audience to suggest optimal posting times. Better analytics for video platforms.",
  },
   {
    title: "What's a marketing task you absolutely hate doing?",
    subreddit: "Marketing",
    category: "Marketing",
    upvotes: 789,
    comments: [
      "Reporting. It's so tedious to pull data from 5 different sources.",
      "I wish there was an app that created a beautiful, automated marketing report dashboard for my clients.",
      "Writing ad copy variations. I'd pay for an AI that's actually good at it.",
      "Manually checking for brand mentions across the web.",
    ],
    summary: "Marketers find reporting to be a major pain point due to the tedious work of consolidating data from multiple sources. There's a strong desire for a tool that can automate this process and generate attractive client-facing dashboards. Other hated tasks include writing ad copy and manually monitoring brand mentions.",
    complaints: "Marketing reporting is tedious and involves pulling data from many different platforms. Writing numerous ad copy variations is a time-consuming and uncreative task. Manually searching for brand mentions is inefficient.",
    featureRequests: "An app to create beautiful, automated marketing report dashboards for clients. A high-quality AI tool specifically for generating ad copy. An automated brand-mention monitoring service.",
  },
  {
    title: "My simple system for getting more done",
    subreddit: "Productivity",
    category: "Productivity",
    upvotes: 1502,
    comments: [
      "This is great, but it requires a lot of manual setup in different apps.",
      "I wish there was an app that combined a simple to-do list with a calendar and a notes section, without being as complex as Notion.",
      "The key is timeboxing. But my calendar app doesn't make it easy.",
      "I've found that the best system is the one you can stick to. For me, that's pen and paper.",
    ],
    summary: "Users are seeking a unified productivity app that is simpler than complex tools like Notion but more integrated than using separate to-do, calendar, and note apps. The discussion highlights a need for an app that combines these core features and makes techniques like timeboxing easier to implement.",
    complaints: "Productivity systems often require cumbersome manual setup across multiple applications. Calendar apps often lack good support for timeboxing techniques. Tools like Notion can be too complex for users who need a simpler solution.",
    featureRequests: "An all-in-one productivity app that integrates a to-do list, calendar, and notes in a simple, user-friendly interface. Better features for timeboxing within a calendar.",
  },
  {
    title: "Looking for a SaaS idea? Solve one of my problems.",
    subreddit: "Entrepreneur",
    category: "Entrepreneurship",
    upvotes: 1843,
    comments: [
      "Please, someone build a better customer support tool for startups. Intercom is too expensive.",
      "I wish there was an app for managing company swag. Ordering, inventory, shipping... it's a mess.",
      "A simple, no-code tool to build internal dashboards. All the current ones require a developer.",
      "A service to automatically handle GDPR/CCPA compliance for small websites.",
    ],
    summary: "Entrepreneurs are looking for SaaS solutions to specific business problems, highlighting that existing tools are often too expensive or complex. Key ideas include a more affordable customer support tool for startups, an app to manage company merchandise logistics, a no-code internal dashboard builder, and an automated service for data privacy compliance.",
    complaints: "Customer support tools like Intercom are too expensive for startups. Managing company swag (ordering, inventory, shipping) is a logistical nightmare. Building internal dashboards typically requires developer resources.",
    featureRequests: "A cost-effective alternative to Intercom for customer support. A dedicated application for managing company swag logistics. A simple, no-code tool for creating internal dashboards. An automated GDPR/CCPA compliance service for small businesses.",
  },
];

// Add unique IDs and realistic timestamps
export const getRedditPosts = (): Idea[] => {
  return mockPosts.map((post, index) => ({
    ...post,
    id: `post_${index + 1}`,
    createdAt: new Date(
      Date.now() - (index * 1000 * 60 * 60 * 24 * 3 + Math.random() * 1000 * 60 * 60 * 24)
    ).toISOString(),
  }));
};
