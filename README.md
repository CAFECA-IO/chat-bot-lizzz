This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project Introduction

This project is dedicated to implementing an AI chatroom where the frontend displays a conversation
window.

Users can engage in conversations with our chatbot within this window.

It's important to note that the responses from the chatbot are not predetermined by us; instead, we
integrate with OpenAI's API.

User messages are sent to ChatGPT 3.5, and the bot's responses are received from it.

By the way, our chatbot is named Lizzz.

# Getting Started

0. Configure settings based on the instructions in these documents:

   - [development-environment](https://github.com/CAFECA-IO/WorkGuidelines/blob/main/newbie/development-environment.md)
   - [Pre commit 前的準備](https://github.com/CAFECA-IO/KnowledgeManagement/blob/master/survey/PreCommit.md)

1. Download packages:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit
   the file.

5. [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
   [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
   in `pages/api/hello.ts`.

6. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
   [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

7. Before commit, you can run this command in the terminal:
   ```base
   pre-commit run --all-files
   ```
