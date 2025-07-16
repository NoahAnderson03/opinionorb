# **App Name**: Demand Decoder

## Core Features:

- User Authentication: User authentication and onboarding to store user preferences and selected categories of interest.
- Category/Interest Filter: Allow users to select multiple interests, stored in user profiles.
- Reddit Data Scraper: Extract top posts + comments from Reddit via Reddit API/Pushshift based on chosen categories and filtered by upvotes, date, and keywords. The following subreddits were specifically requested: r/Entrepreneur, r/SaaS, r/Productivity, r/selfimprovement, r/InternetIsBeautiful
- AI Summarization Tool: Use an LLM to process Reddit posts/comments to extract common complaints, feature requests, and "I wish there was an app that..." patterns to distill ideas.
- Dashboard UI: A clean dashboard UI displaying idea summaries, filterable by category, date, and popularity, allowing users to save/like ideas.

## Style Guidelines:

- Primary color: HSL(210, 60%, 50%) - A vibrant blue, evoking trust and intelligence, without being a cliche like teal. Hex code: #3385E8
- Background color: HSL(210, 20%, 95%) - A very light blue-tinted gray provides a clean, unobtrusive backdrop. Hex code: #F0F5FA
- Accent color: HSL(180, 50%, 50%) - A contrasting teal green, drawing the eye to actionable elements. Hex code: #4DD0E1
- Body and headline font: 'Inter' - a grotesque-style sans-serif offering a modern, machined, neutral appearance suitable for both headlines and body text.
- Use simple, modern icons from a library like Feather or Lucide to represent categories and actions, maintaining a clean and consistent look.
- Employ a card-based layout for idea summaries, ensuring a modular and responsive design that adapts well to different screen sizes.
- Subtle animations, like fade-ins and transitions, should be used to enhance the user experience without being distracting.