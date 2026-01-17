<div align="center">

# 🧠 Daemon CLI

### A terminal-first AI assistant with chat, tool calling, and autonomous agents

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Gemini-API-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

</div>

## ✨ What is Daemon?

**Daemon CLI** is a developer-focused AI assistant that lives directly in your terminal. It enables natural language interaction, structured tool execution, and agentic workflows — all while maintaining secure authentication and persistent memory.

> **Think of it as:** ChatGPT + Tools + Agents — but native to your shell.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 💬 **Interactive AI Chat** | Streaming responses with natural language processing |
| 🛠️ **Tool Calling** | Structured inputs for safe execution |
| 🤖 **Agent Mode** | Generate & modify full applications autonomously |
| 🔐 **Secure Authentication** | GitHub OAuth (Web) + Device authorization (CLI) |
| 🧠 **Persistent Memory** | PostgreSQL-backed conversation history |
| ⚙️ **Modular Architecture** | Extensible CLI design |
| ☁️ **Cloud Deployed** | Backend & client on Vercel |

---

## 🧰 Tech Stack

### ⚙️ CLI / Backend

<table>
<tr>
<td>

- 🟢 **Node.js** - Runtime environment
- 🔷 **TypeScript** - Type-safe development
- 🧭 **Commander.js** - CLI framework
- 🤖 **AI SDK + Gemini API** - LLM, streaming, tool calling
- 🔐 **Better Auth** - OAuth & device flow
- 🗄️ **Prisma ORM** - Database toolkit
- 🐘 **PostgreSQL** - Relational database

</td>
</tr>
</table>

### 🌐 Client (Auth & Onboarding)

<table>
<tr>
<td>

- ⚛️ **Next.js** - React framework
- 🎨 **Tailwind CSS** - Utility-first styling
- 🧩 **shadcn/ui** - Beautiful components
- 🔑 **GitHub OAuth** - Authentication

</td>
</tr>
</table>

### ☁️ Deployment

- ▲ **Vercel** - Client + server hosting
- 📦 **npm** - Global CLI distribution

---

## 🏗️ Project Structure

```
daemon/
├── client/              # Next.js app (GitHub login & onboarding)
├── server/
│   ├── src/
│   │   ├── cli/         # CLI entry point & commands
│   │   ├── ai/          # AI service (Gemini, tools)
│   │   ├── config/      # Tool & agent configuration
│   │   ├── service/     # Chat, auth, persistence logic
│   │   └── lib/         # Prisma & auth helpers
│   ├── prisma/          # Schema & migrations
│   ├── package.json
│   └── .env
```

---

## 🔐 Authentication Flow

Daemon uses a **two-step authentication model** to securely link a user account with a terminal session.

### 1️⃣ GitHub OAuth Login (Web)

**Used for:**
- Account creation
- OAuth consent
- Identity verification

**Flow:**
1. Open the Daemon client (Next.js app)
2. Sign in using GitHub
3. User account is created on the backend

> ⚠️ **Important:** This step alone does NOT authenticate the CLI.

### 2️⃣ Device Authorization (CLI – REQUIRED)

After web login, you must explicitly authorize your terminal:

```bash
daemon login
```

**Flow:**
1. CLI generates a device code
2. A verification URL is shown
3. Open the URL in your browser
4. Approve the device
5. CLI stores a secure access token locally

✔️ Links your terminal to your GitHub account  
✔️ Required for chat, tools, and agent modes

### 3️⃣ Start Using the CLI

```bash
daemon wakeup
```

**You now have:**
- ✅ An authenticated CLI session
- ✅ Persistent chat memory
- ✅ Access to tools & agents

### 🧠 Why Two Steps?

| Step | Purpose |
|------|---------|
| **GitHub OAuth** | Verify user identity |
| **`daemon login`** | Authorize the terminal |

This keeps CLI access **secure**, **revocable**, and **browser-independent**.

---

## 🛠️ Local Development Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/daemon.git
cd daemon/server
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Make the CLI Executable

```bash
chmod +x src/cli/main.js
```

### 4️⃣ Link the CLI Globally

```bash
npm link
```

Now you can run:

```bash
daemon wakeup
```

from anywhere! 🎉

---

## ⚙️ How the CLI Works

### bin Configuration (`package.json`)

```json
{
  "bin": {
    "daemon": "./src/cli/main.js"
  }
}
```

This tells npm to execute `main.js` when `daemon` is run.

### Shebang (`main.js`)

```javascript
#!/usr/bin/env node
```

Allows Node.js to execute the file as a native CLI command.

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=8000

DATABASE_URL=<your-postgresql-url>

BETTER_AUTH_SECRET=<your-secret-key>
BETTER_AUTH_URL=http://localhost:8000

GITHUB_CLIENT_ID=<your-github-client-id>
GITHUB_CLIENT_SECRET=<your-github-client-secret>

GOOGLE_GENERATIVE_AI_API_KEY=<your-gemini-api-key>
DAEMON_MODEL=gemini-2.5-flash
```

---

## 🗄️ Database Setup (Prisma)

```bash
npx prisma generate
npx prisma migrate dev
```

---

## 🧪 Running Daemon CLI

### Authenticate

```bash
daemon login
```

### Start the Assistant

```bash
daemon wakeup
```

### Available Modes

| Mode | Description |
|------|-------------|
| 💬 **Chat mode** | Interactive conversations |
| 🛠️ **Tool calling mode** | Execute structured commands |
| 🤖 **Agent mode** | Application generator |

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

<div align="center">

**Made with ❤️ for developers who live in the terminal**

</div>