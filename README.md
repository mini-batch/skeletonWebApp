# Skeleton MERN Project

Disclaimer: This project is largely for personal use/learning. It will be adapted over time as I learn and implement best practices. Learning full stack is a lot, and there is a lot of bloated setup that gets in the way of actually being able to make something,
hence I want a repo that can be used to quickstart a project for prototyping.

----

## What's in the box?
- Simple Mongo, Express, React, Node project setup
- Jest for testing
- Mongodb-memory-server for test databases ******(needs installing)
- eslint with basic rules
- 
- Example project directory structure:
  - root/
    - backend/
      - controllers/
      - models/
      - requests/
      - tests/
      - utils/
    - frontend/
      - public/
      - src/
        - assets/
        - components/
        - services/

### npm commands
Run the following npm commands from the associated directory with "npm run \<command\>".
#### root/
- "dev": "concurrently 'cd ./backend && npm run dev' 'cd ./frontend && npm run dev'"
- "dev:front": "cd ./frontend && npm run dev"
- "dev:back": "cd ./backend && npm run dev"

#### backend/
- "start": "cross-env NODE_ENV=production node index.js",
- "dev": "cross-env NODE_ENV=development nodemon index.js",
- "build:ui": "rm -rf dist && cd ../frontend/ && npm run build && cp dist ../backend/",
- "test": "jest"

#### frontend/
- "dev": "vite",
- "build": "vite build",
- "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
- "preview": "vite preview"
