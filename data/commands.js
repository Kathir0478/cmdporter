import emailjs from "emailjs-com"

const experiences = [
    {
        name: "intern",
        title: "AI Research Intern",
        company: "Blubridge",
        duration: "28.05.2025 - 29.06.2025",
        overview: `
        During my internship at Blubridge, I had the opportunity to work at the intersection of research and engineering. 
    I contributed to designing and training transformer-based architectures inspired by GPT models, focusing on both 
    scalability and efficiency. The experience helped me understand how theoretical ML research translates into 
    real-world model development, optimization, and deployment.
        `,
        description: `
  Role: Implementing an LLM like GPT from scratch

  Responsibilities:
    • Implemented GPT-like architecture from scratch
    • Worked with Distributed Data Parallel (DDP) for multi-GPU training
    • Enhanced research-to-code documentation workflow
    • Wrote and optimized custom PyTorch functions
    • Designed and experimented with custom learning functions for model improvement
    • Participated in weekly research discussions and model evaluation sessions

  Key Learnings:
    • Hands-on experience with distributed training pipelines (DDP, UDA)
    • Improved understanding of model scaling, gradient synchronization, and performance tuning
    • Strengthened ability to interpret, reproduce, and extend concepts from academic papers

  Technologies: Python, PyTorch, Transformers, CUDA, Git, Jupyter, LangChain
        `,
    },
]

const skillsData = [
    {
        name: "frontend",
        title: "Frontend Development",
        overview: `
        I specialize in crafting responsive, visually appealing, and high-performance user interfaces.
    My frontend development focuses on building intuitive digital experiences using modern frameworks
    and clean design principles that prioritize scalability and accessibility.`,
        description: `
  
  Languages: JavaScript, TypeScript, HTML, CSS
  Frameworks: React, Next.js
  Tools: Tailwind CSS, Framer Motion
  Concepts: Responsive Design, Component Architecture, State Management
  Strengths: Building dynamic UIs with a focus on performance, accessibility, and user experience
  Collaboration: Cross-functional teamwork, Agile sprints, version control with Git & GitHub
  Mindset: Adaptable, detail-oriented, and driven by clean design principles
        `,
    },
    {
        name: "backend",
        title: "Backend Development",
        overview: `
    I’m experienced in building efficient, secure, and maintainable backend systems that serve as
    the backbone of scalable applications. My focus lies in designing APIs, managing data flows, and 
    optimizing server-side logic to deliver seamless user experiences.`,
        description: `
  Languages: Python, Java, JavaScript
  Frameworks: Node.js, Express
  Databases: MongoDB, MySQL, SQL
  Core Areas: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Networking, Database Manipulation
  APIs: RESTful API design, middleware integration, authentication & routing
  Tools: Render, GitHub, version control, and deployment management
  Approach: Strong problem-solving foundation, scalable architecture design, and structured documentation workflow
        `,
    },
    {
        name: "devops",
        title: "DevOps & Deployment",
        overview: `
    I have hands-on experience managing deployment pipelines and optimizing software delivery workflows.
    My DevOps skill set ensures that applications are not only functional but also reliable, automated, 
    and efficiently deployed across various platforms.`,
        description: `
  Platforms: Vercel, Render, Docker
  Tools: Git, GitHub, CI/CD pipelines, containerization
  Practices: Agile methodologies, sprint planning, task prioritization, and project management
  Infrastructure: Linux systems, server management, and distributed environments
  Mindset: Focused on automation, efficient workflows, and deployment optimization
  Soft Skills: Leadership, adaptability, and critical thinking for smooth collaboration and delivery
        `,
    },
    {
        name: "ai-ml",
        title: "AI & Machine Learning",
        overview: `
    My AI and Machine Learning expertise bridges research and implementation. I’ve worked on
    transformer-based models, distributed training, and integrating LLMs into real-world applications.
    I’m particularly passionate about understanding the mechanics of large models and optimizing them
    for efficiency and practical use.`,

        description: `  
  Frameworks: TensorFlow, PyTorch
  Tools & APIs: LangChain, OpenAI API, Gemini API
  Concepts: LLMs, Distributed Training (DDP, UDA), NLP, Model Fine-Tuning
  Experience: Implementing GPT-like architectures, integrating AI models into web systems
  Databases: Qdrant (Vector Storage), MongoDB for data pipelines
  Skills: Research-to-code translation, creating custom PyTorch functions and learning modules
  Focus Areas: Generative AI, Intelligent Agents, and end-to-end ML workflow deployment
        `,
    },
];

const projectsData = [
    {
        name: "ai-youtube-filter",
        title: "AI-Powered YouTube Filtering Extension",
        description: `
A Chrome extension that intelligently filters and recommends YouTube videos based on user prompts and session preferences.`,
        overview: `
This extension uses NLP and machine learning to analyze YouTube video titles, descriptions, captions, and comments. 
Users can define prompts and focus sessions to curate their video recommendations, all while preserving YouTube’s native recommendation engine. 
It delivers a distraction-free experience with dynamic DOM updates and real-time filtering.`,
        features: [
            "User-defined video filtering",
            "Session-based recommendations",
            "NLP-powered semantic analysis",
            "Dynamic UI injection",
            "Neutral recommendation enforcement",
            "Gamified focus sessions"
        ],
        technologies: [
            "JavaScript", "Tailwind CSS", "NLP", "Machine Learning", "Chrome Extension", "LangChain"
        ],
        github: "https://github.com/Kathir0478/extension"
    },
    {
        name: "web-emotion-analyzer",
        title: "Website Emotion and Vulnerability Analyzer",
        description: `
An AI-driven tool that evaluates websites for emotional tone, semantic meaning, and potential security risks.`,
        overview: `
The analyzer processes URLs to assess sentiment, trustworthiness, and hidden vulnerabilities using NLP pipelines and heuristic engines. 
It empowers users to make informed decisions before visiting unfamiliar websites by offering emotion mapping, context extraction, and vulnerability insights.`,
        features: [
            "Emotion and sentiment analysis",
            "Semantic context extraction",
            "Vulnerability detection",
            "Trustworthiness scoring",
            "Pre-access content evaluation"
        ],
        technologies: [
            "Python", "NLP", "Heuristic Analysis", "Web Scraping"
        ],
        github: "#"
    },
    {
        name: "corpus-chatbot",
        title: "Corpus-Based Enterprise Chatbot Generator",
        description: `
A low-code AI platform that creates domain-specific chatbots for businesses using NLP and knowledge bases.`,
        overview: `
This tool allows small businesses to generate customized chatbots by ingesting PDFs and building knowledge bases. 
It integrates LangChain, FAISS, and GPT models to deliver intelligent, context-aware responses without requiring coding knowledge. 
It also supports continuous knowledge updates and domain-tuned personalization.`,
        features: [
            "PDF ingestion and processing",
            "Automated knowledge base creation",
            "Domain-specific chatbot generation",
            "Low-code interface for non-developers",
            "Dynamic updates and fine-tuning"
        ],
        technologies: [
            "Python", "LangChain", "OpenAI GPT-3.5", "FAISS", "FastAPI", "Node.js", "React", "Tailwind CSS", "MongoDB", "Express.js"
        ],
        github: "https://github.com/Kathir0478/corpus-chatbot"
    },
    {
        name: "review-summarizer",
        title: "AI Review Classification and Summarizer",
        description: `
A sentiment-driven NLP solution that filters, classifies, and summarizes product reviews for e-commerce platforms.`,
        overview: `
This tool leverages machine learning and Gemini Pro API to detect spam, analyze emotional polarity, and produce concise summaries of customer reviews. 
It enhances user experience and business intelligence by transforming raw feedback into actionable insights.`,
        features: [
            "Sentiment and emotion classification",
            "Spam detection and filtering",
            "AI-driven review summarization",
            "Insight extraction and analytics",
            "Real-time review processing"
        ],
        technologies: [
            "Python", "NLP", "Gemini Pro API", "Machine Learning"
        ],
        github: "https://github.com/Kathir0478/walmart"
    },
    {
        name: "home-fitness-tracker",
        title: "Home Fitness Tracker and Recommendation App",
        description: `
A personalized fitness tracking platform that helps users monitor workouts and receive adaptive recommendations.`,
        overview: `
This full-stack web app enables users to log workouts, set fitness goals, and analyze progress using performance-based analytics. 
It integrates multiple APIs to provide exercise datasets and tailored recommendations, creating a personalized health companion.`,
        features: [
            "Workout tracking and goal setting",
            "Personalized recommendations",
            "Progress analytics dashboard",
            "Integration with exercise APIs",
            "Adaptive performance feedback"
        ],
        technologies: [
            "React", "Node.js", "Express.js", "MongoDB", "LangChain", "FAISS", "Gemini API", "Tailwind CSS", "Framer Motion"
        ],
        github: "https://github.com/Kathir0478/homefitness"
    },
    {
        name: "entrepreneur-network",
        title: "Entrepreneurial Recommendation Platform",
        description: `
An AI-based collaboration platform that connects entrepreneurs through profile matching and skill-based recommendations.`,
        overview: `
This ML-powered system uses embeddings and NLP-driven similarity scoring to match entrepreneurs with compatible collaborators. 
It integrates a full-stack React + Node.js interface backed by Flask APIs for real-time inference and matchmaking.`,
        features: [
            "Profile embedding generation",
            "Semantic similarity scoring",
            "Intelligent collaboration recommendations",
            "Full-stack web interface",
            "Real-time ML inference"
        ],
        technologies: [
            "Python", "Flask", "Machine Learning", "React", "Node.js", "Tailwind CSS", "MongoDB", "Express.js"
        ],
        github: "https://github.com/Kathir0478/smart-networking-engine"
    },
    {
        name: "recruitment-analytics",
        title: "Recruitment Analytics Platform",
        description: `
An AI-powered recruitment system that automates candidate evaluation using embeddings and vector search.`,
        overview: `
This intelligent hiring platform parses resumes, generates embeddings, and uses Qdrant for vector similarity matching to assess candidates against job requirements. 
It offers REST APIs for seamless integration into hiring systems, streamlining shortlisting and improving hiring accuracy.`,
        features: [
            "Resume parsing and scoring",
            "Vector similarity-based matching",
            "Automated candidate evaluation",
            "REST API endpoints",
            "Scalable and fair recruitment pipeline"
        ],
        technologies: [
            "Python", "Flask", "Qdrant", "REST APIs", "React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"
        ],
        github: "https://github.com/Kathir0478/hiracle"
    }
];


const commands = {
    help: `
Available Commands:
═══════════════════════════════════════════════════════════════

  INFORMATION:
    about              - Show personal information and bio
    experience         - List all work experiences
    experience --name  - View details of a specific experience
    skills             - Show all skill categories
    skills --name      - View details of a specific skill set
    projects           - List all projects
    projects --name    - View detailed info about a specific project
    contact            - Send a message directly

  MEDIA:
    listen             - Play a short audio message
    portfolio          - Open the portfolio link

  SYSTEM:
    clear              - Clear the screen
    toggle             - Switch between terminal themes
    colors             - Customize terminal colors
    exit               - Exit the terminal
    help               - Show this help menu

═══════════════════════════════════════════════════════════════

Examples:
  experience --senior-developer   - View details of a senior developer role
  skills --frontend               - View frontend skills in detail
  projects --cmd-portfolio       - View the CMD Portfolio project
  toggle --theme green --bg #000000 --text #00FF00
                                  - Change terminal theme colors
  colors --bg #1a1a1a --text #00ff00
                                  - Customize background and text colors
  listen                         - Play an audio message

═══════════════════════════════════════════════════════════════

Tip: Use "--name" to explore details for any experience, skill, or project.
`,
    about: `
ABOUT ME

Name:        dood
Title:       Full Stack Developer & AI Enthusiast
Location:    Chennai, TamilNadu ,India

Bio:
  I'm a dedicated student and developer with a strong passion for
  problem-solving and creating meaningful digital experiences.
  My journey in technology began in high school, and ever since, I've
  been captivated by the endless possibilities that code offers.
  I thrive on turning ideas from paper into real-world, impactful
  solutions—especially in the field of AI.

Specializations:
  • Full-Stack Web Development
  • AI/ML Model Implementation
  • Distributed Training (DDP, UDA)
  • Scalable System Design & Optimization
  • Research-to-Code Translation

Highlights:
  • 10+ Projects Completed
  • 7+ Hackathons Participated
  • Experienced in transforming research into deployable models
  • Hands-on with custom PyTorch functions and LLM architecture

Interests:
  • Hackathons & Coding Competitions
  • Exploring Cutting-Edge AI Research
  • Badminton, Travel, and Tech Blogging
  • Open Source & Mentorship
═══════════════════════════════════════════════════════════════

Type 'experience' to see my work history
Type 'skills' to see my technical skills
Type 'projects' to see my portfolio projects

`,

    experience: `

WORK EXPERIENCE

${experiences
            .map(
                (exp) => `  [${exp.name.toUpperCase()}]
    ${exp.title} @ ${exp.company}
    ${exp.duration}
    ${exp.overview}`,
            )
            .join("\n\n")}

═══════════════════════════════════════════════════════════════

Use: experience --name  (e.g., experience --senior-developer)
     to see detailed information about each position

`,

    skills: `

TECHNICAL SKILLS

${skillsData
            .map(
                (skill) => `  [${skill.name}]
    ${skill.title}
    ${skill.overview}`,
            )
            .join("\n\n")}

═══════════════════════════════════════════════════════════════

Use: skills --name  (e.g., skills --frontend)
     to see detailed information about each skill category

`,

    projects: `

PORTFOLIO PROJECTS

${projectsData
            .map(
                (proj) => `  [${proj.name}]
    ${proj.title} - ${proj.description}`,
            )
            .join("\n\n")}

═══════════════════════════════════════════════════════════════

Use: projects --name  (e.g., projects --cmd-portfolio)
     to see detailed information about each project

`,

    contact: `
CONTACT FORM

To send me a message, use the following format:

  contact --name "Your Name" --email "your@email.com" --subject "Message Subject" --message "Your message here"

Example:
  contact --name "Kathir" --email "kathir200420@gmail.com" --subject "Collaboration Opportunity" --message "Hey, I’d love to discuss a project idea with you!"

═══════════════════════════════════════════════════════════════

Contact Information:
  • Email:    kathir200420@gmail.com
  • Phone:    +91 735-877-2583
  • Location: Chennai, Tamil Nadu, India

Availability:
  Motivated and enthusiastic fresher seeking full-time opportunities
  to apply skills in AI, Data Science, and Software Development.
  Always open to innovative collaborations, freelance work, or
  meaningful discussions around technology and problem-solving.

Note:
  Your message will be securely sent via EmailJS and delivered directly to my inbox.
  I usually respond within 24–48 hours. 
`,


    listen: `

AUDIO MESSAGE

Playing audio message...
Please wait for the audio to finish.

`,

    portfolio: `

 OPEN PORTFOLIO

  Opens the portfolio in your browser so you can explore projects, skills, and work experience.

  `,

    clear: "CLEAR_SCREEN",

    exit: `

GOODBYE!

Thanks for visiting my portfolio!
Feel free to reach out anytime.

See you next time!

`,

    toggle: `

THEME CUSTOMIZATION

Available themes:
  • green   - Classic green terminal
  • white   - White text on black
  • cyan    - Cyan text on black
  • amber   - Amber text on black

Use: toggle --theme green --bg #000000 --text #00FF00

Or customize with:
  toggle --bg #000000 --text #00FF00

Current theme has been switched!

`,

    colors: `

COLOR CUSTOMIZATION

Customize your terminal colors:

  colors --bg #000000 --text #00FF00

Parameters:
  --bg    Background color (hex code)
  --text  Text color (hex code)
  
Examples:
  colors --bg #1a1a1a --text #00ff00    (classic green-on-black)
  colors --bg #0a0e27 --text #00d4ff    (deep blue with cyan text)
  colors --bg #1e1e1e --text #ffff00    (dark background with bright yellow)
  colors --bg #2b1a1a --text #ff5555    (dark red theme)
  colors --bg #0d1f2d --text #00ffcc    (navy blue with teal text)
  colors --bg #1c1c1c --text #ff00ff    (black with vibrant magenta)
  colors --bg #121212 --text #ff9900    (dark grey with orange highlights)
  colors --bg #001f1f --text #00ff99    (dark teal background with neon green)
  colors --bg #2a2a2a --text #00aaff    (charcoal background with bright blue)
  colors --bg #0f0f0f --text #ffffff    (classic black-and-white)

═══════════════════════════════════════════════════════════════

Your custom colors have been applied!

`,
}

export async function getCommandResponse(input, { setBgColor, setTextColor, setTheme, onAudioComplete } = {}) {
    const parts = input.trim().split(/\s+(?=--|\S)/)
    const baseCommand = parts[0].toLowerCase()

    if (baseCommand === "listen") {
        setTimeout(() => {
            const audio = new Audio("/pfaudio.mp3")
            audio.play().catch((err) => {
                console.log("[v0] Audio playback error:", err.message)
            })

            // Handle audio completion
            audio.addEventListener("ended", () => {
                if (onAudioComplete) {
                    onAudioComplete()
                }
            })
        }, 100)

        return `

AUDIO MESSAGE

Playing audio message from portfolio...
Please wait for the audio to finish.

`
    }

    // Open portfolio URL (same tab) if developer has configured NEXT_PUBLIC_PORTFOLIO_URL
    if (baseCommand === "portfolio") {
        try {
            const url = (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_PORTFOLIO_URL) || null
            if (url) {
                if (typeof window !== "undefined") {
                    window.location.href = url
                }
                return `

    OPEN PORTFOLIO

    Opening: ${url}

    `
            }

            return `

    OPEN PORTFOLIO

    No portfolio URL configured. Set NEXT_PUBLIC_PORTFOLIO_URL in .env.local

    `
        } catch (err) {
            console.warn("portfolio command failed", err)
            return `

    OPEN PORTFOLIO

    Failed to open portfolio URL (see console).

    `
        }
    }

    // Handle experience command with details
    if (baseCommand === "experience") {
        if (parts.length > 1 && parts[1].startsWith("--")) {
            const expName = parts[1].substring(2).toLowerCase()
            const exp = experiences.find((e) => e.name === expName)
            if (exp) {
                return `

${exp.title.toUpperCase()}

Company:     ${exp.company}
Duration:    ${exp.duration}
${exp.description}

═══════════════════════════════════════════════════════════════

`
            }
            return `

Experience '${expName}' not found. Use 'experience' to see available options.

`
        }
        return commands.experience
    }

    // Handle skills command with details
    if (baseCommand === "skills") {
        if (parts.length > 1 && parts[1].startsWith("--")) {
            const skillName = parts[1].substring(2).toLowerCase()
            const skill = skillsData.find((s) => s.name === skillName)
            if (skill) {
                return `

${skill.title.toUpperCase()}
${skill.description}

═══════════════════════════════════════════════════════════════

`
            }
            return `

Skill category '${skillName}' not found. Use 'skills' to see available options.

`
        }
        return commands.skills
    }

    // Handle projects command with details
    if (baseCommand === "projects") {
        if (parts.length > 1 && parts[1].startsWith("--")) {
            const projName = parts[1].substring(2).toLowerCase()
            const proj = projectsData.find((p) => p.name === projName)
            if (proj) {
                return `

${proj.title.toUpperCase()}

${proj.description}
${proj.overview}

${proj.features.map((f, i) => `  • ${f}`).join("\n")}

${proj.technologies.length > 0 ? `\nTechnologies: ${proj.technologies.join(", ")}\n` : ""}

GitHub:      ${proj.github}
═══════════════════════════════════════════════════════════════

`
            }
            return `

Project '${projName}' not found. Use 'projects' to see available options.

`
        }
        return commands.projects
    }

    // Handle contact command

    if (baseCommand === "contact") {
        const params = {}
        for (let i = 1; i < parts.length; i++) {
            if (parts[i].startsWith("--")) {
                const key = parts[i].substring(2)
                const value = parts[i + 1]?.replace(/^["']|["']$/g, "") || ""
                params[key] = value
                i++
            }
        }

        if (params.name && params.email && params.message) {
            try {
                await emailjs.send(
                    "service_09a1mur", // 🔧 your EmailJS service ID
                    "template_3j31avt", // 🔧 your EmailJS template ID
                    {
                        from_name: params.name,
                        from_email: params.email,
                        subject: params.subject || "(No Subject)",
                        message: params.message,
                    },
                    "yGcfX1PbfjqRMJdPW" // 🔧 your EmailJS public key
                )

                return `
MESSAGE SENT ✓

From:       ${params.name}
Email:      ${params.email}
Subject:    ${params.subject || "(No Subject)"}
Message:    ${params.message}

Status:     ✅ Successfully delivered to dood@example.com

═══════════════════════════════════════════════════════════════

Thank you for reaching out! I'll get back to you soon.
`
            } catch (err) {
                console.error("Email send failed:", err)
                return `
MESSAGE FAILED ❌

From:       ${params.name}
Email:      ${params.email}
Message:    ${params.message}

Status:     ❌ Delivery failed due to a network or server issue.

═══════════════════════════════════════════════════════════════

Please try again later or contact manually at dood@example.com.
`
            }
        }

        // If any param missing
        return commands.contact
    }


    // Handle toggle command
    if (baseCommand === "toggle") {
        const themes = {
            green: { bg: "#000000", text: "#00FF00" },
            white: { bg: "#000000", text: "#FFFFFF" },
            cyan: { bg: "#000000", text: "#00FFFF" },
            amber: { bg: "#000000", text: "#FFBF00" },
        }

        let bgColor = null
        let textColor = null

        // Parse theme name
        if (parts.length > 1 && parts[1].startsWith("--theme")) {
            const themeName = parts[2]?.toLowerCase()
            if (themes[themeName]) {
                bgColor = themes[themeName].bg
                textColor = themes[themeName].text
            }
        }

        // Parse custom colors
        for (let i = 1; i < parts.length; i++) {
            if (parts[i] === "--bg") {
                bgColor = parts[i + 1]
                i++
            } else if (parts[i] === "--text") {
                textColor = parts[i + 1]
                i++
            }
        }

        if (bgColor && textColor) {
            setBgColor?.(bgColor)
            setTextColor?.(textColor)
            return `

THEME CHANGED

Background: ${bgColor}
Text Color: ${textColor}

═══════════════════════════════════════════════════════════════

`
        }
        return commands.toggle
    }

    // Handle colors command
    if (baseCommand === "colors") {
        let bgColor = null
        let textColor = null

        for (let i = 1; i < parts.length; i++) {
            if (parts[i] === "--bg") {
                bgColor = parts[i + 1]
                i++
            } else if (parts[i] === "--text") {
                textColor = parts[i + 1]
                i++
            }
        }

        if (bgColor && textColor) {
            setBgColor?.(bgColor)
            setTextColor?.(textColor)
            return `

COLORS UPDATED

Background: ${bgColor}
Text Color: ${textColor}

Your terminal colors have been customized!

═══════════════════════════════════════════════════════════════

`
        }
        return commands.colors
    }

    // Handle basic commands
    if (commands[baseCommand]) {
        return commands[baseCommand]
    }

    return `

'${input}' is not recognized as an internal or external command,
operable program or batch file.

Type 'help' for available commands.

`
}
