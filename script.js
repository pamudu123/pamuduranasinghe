const CV_DATA = {
  name: 'Pamudu Ranasinghe',
  title: 'Lead AI Engineer',
  headline: 'AI generalist across NLP, computer vision, audio, and embedded ML delivering products used by millions.',
  contacts: [
    { label: 'LinkedIn', value: 'LinkedIn (for the professional stuff)', link: 'https://www.linkedin.com/in/pamudu-ranasinghe/' },
    { label: 'YouTube', value: 'YouTube (for visual demos)', link: 'https://www.youtube.com/@pamudu123ranasinghe7' },
    { label: 'Google Scholar', value: 'Google Scholar (for the deep dives)', link: 'https://scholar.google.com/citations?user=v1CeOs0AAAAJ&hl=en' },
    { label: 'Email', value: 'Email (for everything else!)', link: 'mailto:pamuduranasinghe9@gmail.com' }
  ],
  summary: [
    { title: 'Hi there! 👋', content: 'Hi, I’m Pamudu. I’m a Lead AI Engineer who loves turning complex code into practical innovations. Proudly exploring the world of tech from the beautiful island of Sri Lanka 🇱🇰.' },
    { title: 'What I Do 💻', content: 'I’m passionate about teaching machines to see, hear, and think—specializing in Natural Language Processing, Computer Vision, and Audio Signal Analysis. With over four years of experience building machine learning solutions, my work supports millions of users across different products.' },
    { title: 'Beyond the Code ♟', content: 'I had the honor of representing Team Sri Lanka at the Asian University Chess Championship and earned University Colors for my performance. It turns out, strategizing moves on the board is great training for AI architecture—both require patience, pattern recognition, and knowing exactly when to make a sacrifice for the win!' }
  ],
  skills: [
    { label: 'Languages', items: ['Python', 'C++', 'Matlab', 'Java', 'C'] },
    { label: 'Frameworks', items: ['LangChain', 'LangGraph', 'CrewAI', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Stable-Baselines3', 'Docling'] },
    { label: 'Libraries', items: ['Hugging Face', 'MediaPipe', 'Timm', 'Ragas'] },
    { label: 'Tools', items: ['Git', 'Docker', 'AWS', 'GCP', 'DVC', 'Neptune.ai', 'Jenkins', 'MVTec Halcon'] }
  ],
  experience: [
    {
      role: 'Lead AI Engineer',
      company: 'CreditSource',
      companyLink: 'https://creditsource.com.au/',
      location: 'Australia',
      period: 'Aug 2025 - Present',
      details: ['Leading the AI team to build machine learning solutions for credit risk and financial document processing.']
    },
    {
      role: 'Software Engineer (AI/ML)',
      company: [
        { text: 'UnitedHealth Group', link: 'https://www.unitedhealthgroup.com/' },
        ' (via ',
        { text: 'Virtusa', link: 'https://www.virtusa.com/' },
        ')'
      ],
      location: 'USA',
      period: 'Jul 2024 - Aug 2025',
      details: [
        [
          'Worked with the core team to build ',
          { text: 'Advocate Assist', link: 'https://www.unitedhealthgroup.com/uhg/what-we-do/artificial-intelligence.html' },
          ', handling 10M+ daily interactions.'
        ],
        'Built a document parser for tables and text, contributing to a patent.',
        'Created an internal MCP server unifying services into a reusable platform with authentication and modular design.',
        'Designed metric-driven, agentic workflows using LLM judges to evaluate response quality and relevance.',
        'Aligned model-based evaluations with human review, reducing manual effort on complex queries.'
      ]
    },
    {
      role: 'Freelance AI Consultant',
      company: [
        { text: 'vcLABs', link: 'https://visualconceptlabs.com/' },
        ' (',
        { text: 'Dialog TV', link: 'https://www.dialog.lk/dialog-television' },
        ')'
      ],
      location: 'Sri Lanka',
      period: 'Jun 2024 - Jan 2025',
      details: [
        'Fine-tuned and deployed Open Source LLM model for internal use.',
        'Forecasted channel viewership and built ad scheduling tools.',
        'Designed a format-agnostic scheduling extractor, reducing manual work significantly.'
      ]
    },
    {
      role: 'AI Consultant',
      company: 'PekoeAI',
      companyLink: 'https://www.pekoe.ai/',
      location: 'Singapore',
      period: 'Mar 2023 - Jun 2024',
      details: [
        'Developed a real-time speech recognition system on Jetson Nano.',
        'Built OCR and tracking for rapidly moving tea sample boxes on a conveyor belt.',
        'Researched AI-generated tea samples with user feedback.',
        'Innovated an LLM-based approach to automate tea grading assistance.',
        'Focused on semi-supervised learning and deep vision models for tea classification.'
      ]
    },
    {
      role: 'Freelance AI & Software Developer',
      company: 'Upwork, Fiverr',
      location: 'Remote',
      period: 'Nov 2020 - Feb 2023',
      details: [
        'Developed industrial surveillance with 14 cameras.',
        'Built theft detection and website monitoring tools.',
        'Worked on mental health ML tools and psychological game dashboards.',
        'Improved wind turbine prediction using AutoML.'
      ]
    },
    {
      role: 'AI/ML Intern',
      company: 'Aizenit Technologies',
      companyLink: 'https://www.aizenit.com/',
      location: 'UK',
      period: 'Oct 2022 - Jan 2023',
      details: [
        'Fine-tuned LayoutLM and Donut for document parsing.',
        'Built deep learning models for table extraction.',
        'Focused on latency optimisation and Azure ML.'
      ]
    },
    {
      role: 'Computer Vision Intern',
      company: 'Ansell Lanka',
      companyLink: 'https://www.ansell.com/',
      location: 'Sri Lanka',
      period: 'Aug 2022 - Oct 2022',
      details: [
        'Used YOLO, CNNs, and Autoencoders for vision tasks.',
        'Built cloud-based pipelines and processed 3D sensor data.',
        'Worked hands-on with industrial cameras and profilers.'
      ]
    },
    {
      role: 'Electronics Intern',
      company: 'Dialog Axiata PLC',
      companyLink: 'https://www.dialog.lk/',
      location: 'Sri Lanka',
      period: 'Jul 2022',
      details: [
        'Gained exposure to wireless communication systems.',
        'Experienced 5G rollout in Colombo.'
      ]
    }
  ],
  projects: [
    {
      name: 'Y-Net for hybrid music source separation',
      tech: 'PyTorch, Neptune.ai',
      details: ['Novel dual-domain architecture for end-to-end source separation; awarded Best Final Year Project at University of Peradeniya.']
    },
    {
      name: 'Low Light Image Enhancement for Autonomous Driving',
      tech: 'TensorFlow, U-Net, Jetson Nano',
      details: ['State-of-the-art low-light enhancement outperforming prior models in SSIM.']
    },
    {
      name: 'AI approach for FRA test in Transformers',
      tech: 'MATLAB, K-means, PCA',
      details: ['Analyzed FRA results independent of winding arrangements and transformer specs.']
    },
    {
      name: 'AI Goalkeeper',
      tech: 'OpenCV, YOLOv7, LSTM',
      details: ['Time-series prediction plus detection/pose estimation to predict penalty kicks; 5M+ impressions and 600+ shares.']
    },
    {
      name: 'IoT Monitoring System for Nursing Homes',
      tech: 'Signal processing, anomaly detection, One-Class SVM, Random Forest',
      details: ['ESP32-based monitoring of pamper wetness with real-time alerts; built with 40 ML engineers across 21 countries.']
    },
    {
      name: '2022 FIFA World Cup Predictor',
      tech: 'Python, scikit-learn',
      details: ['Predicted 3 of 4 semifinalists and the top three teams overall.']
    },
    {
      name: 'Project ISORT',
      tech: 'TensorFlow, CNN, Raspberry Pi',
      details: ['Plastic sorting and shredding machine; placed 2nd in IESL Undergraduate Inventor of the Year 2021.']
    }
  ],
  education: [
    {
      school: 'University of Moratuwa',
      degree: 'MSc in Data Science & AI - Computer Science & Engineering',
      location: 'Moratuwa, Sri Lanka',
      period: '2025 - 2026'
    },
    {
      school: 'University of Peradeniya',
      degree: 'BSc Engineering (Hons.) - Electrical & Electronic Engineering',
      location: 'Peradeniya, Sri Lanka',
      period: '2017 - 2023'
    },
    {
      school: 'Dharmasoka College',
      degree: 'Primary and Secondary Education',
      location: 'Ambalangoda, Sri Lanka',
      period: '2003 - 2016'
    }
  ],
  publications: [
    { title: 'Predicting Penalty Kick Direction Using Multi-modal Deep Learning with Pose-Guided Attention', venue: 'International Sports Analytics Conference and Exhibition - Springer Nature Switzerland (Pages 179-192)', link: 'https://arxiv.org/pdf/2509.26088' },
    { title: 'Hybrid Y-Net Architecture for Singing Voice Separation', venue: '2023 31st European Signal Processing Conference', link: 'https://arxiv.org/pdf/2303.02599' },
    { title: 'Deep Learning Based Low Light Enhancements for Advanced Driver-Assistance Systems', venue: '2023 IEEE 17th International Conference on Industrial and Information Systems', link: 'https://www.researchgate.net/publication/373873684_Deep_learning_based_low_light_enhancements_for_Advanced_Driver-Assistance_Systems_at_Night' },
    { title: 'AI Approach for FRA Based Condition Assessment of Power Transformers', venue: '2023 IEEE 17th International Conference on Industrial and Information Systems', link: 'https://www.researchgate.net/publication/374064186_AI_Approach_for_FRA_Based_Condition_Assessment_of_Power_Transformers' },
    { title: 'ChessEye: An Integrated Framework for Accurate and Efficient Chessboard Reconstruction', venue: '2023 9th Moratuwa Engineering Research Conference (MERCon)', link: 'https://www.researchgate.net/publication/376768951_ChessEye_An_Integrated_Framework_for_Accurate_and_Efficient_Chessboard_Reconstruction#fullTextFileContent' }
  ],
  certifications: [
    'Training Program on Artificial Intelligence in Embedded Systems - University of Moratuwa',
    'Oracle Certified Java Program - SLIIT',
    'AWS Academy Graduate - Data Engineering',
    'DeepLearning.AI - Neural Networks and Deep Learning (Specialization)',
    'DeepLearning.AI - Natural Language Processing (Specialization)',
    'DeepLearning.AI - Generative Adversarial Networks (Specialization)',
    'DeepLearning.AI - Generative AI with Large Language Models',
    'Stanford University - Machine Learning'
  ],
  achievements: [
    'Inter University Chess Championship - Second Place (2021)',
    'Asian University Chess Championship - 8th Place, Team Sri Lanka (2021)',
    'IEEE Electronic Design Competition - Second Place (2020)',
    'University Colors (2021, 2022)',
    'Southern Province Colors (2014, 2015)',
    'School Colors (2010 - 2015)'
  ],
  activities: [
    'Chess Team Vice Captain, University of Peradeniya (2021 - 2022)',
    'Programming Team Lead, Taprobane 2.0 by SEDS Sri Lanka (2021 - 2022)',
    'System Programmer, IEEE Microwave Theory & Techniques Society (2020 - 2021)',
    'AIESEC in Kandy (2018 - 2019)'
  ],
  interests: ['Travel', 'Exploring new technology', 'Graphic design', 'Playing chess']
};

const JOURNAL_DATA = [
  {
    date: "Dec 21, 2025",
    name: "The Remote Work Paradox: A Quantitative Analysis of Professional Work-Life Balance in 2025",
    link: "articles/remote-work-paradox/index.html"
  },
  {
    date: "Dec 17, 2025",
    name: "US Patent Filed: Structured Data Extraction from PDFs",
    link: "articles/uhg-patent-submission/index.html"
  },
  {
    date: "Nov 26, 2025",
    name: "Deep Learning Approach for Generalizable AI Image Detection",
    link: "https://medium.com/@pamudu1111/technical-report-generalizable-ai-image-detection-8b0d901f3c2a"
  },
  {
    date: "Nov 8, 2025",
    name: "Building and running LLM systems isn't as simple as it looks",
    link: "articles/llm-systems/index.html"
  },
  {
    date: "Jul 26, 2025",
    name: "LLMs in Practice: How I Choose the Right Model",
    link: "https://medium.com/@pamudu1111/llms-in-practice-how-i-choose-the-right-model-f87a49f2b861"
  },
  {
    date: "Jul 10, 2025",
    name: "AI is trained on our words, but somehow, it still doesn't sound like us",
    link: "articles/ai-writing-disconnect/index.html"
  },
  {
    date: "Jul 04, 2025",
    name: "The AI Talent Wars: How Experience and Youth are Shaping the Future",
    link: "articles/ai-talent-wars/index.html"
  },
  {
    date: "Mar 09, 2025",
    name: "LLMs on Maths??",
    link: "articles/llm-next-word-prediction/index.html"
  },
  {
    date: "Sep 24, 2024",
    name: "Automated Election Vote Counting",
    link: "https://medium.com/@pamudu1111/automated-election-vote-counting-7b89900f7333"
  },
  {
    date: "Dec 31, 2023",
    name: "Guess The Country",
    link: "https://medium.com/@pamudu1111/guess-the-country-4b983ff36616"
  }
]; document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'me';

  if (page === 'me') {
    renderCV(CV_DATA);
  } else if (page === 'journal') {
    renderJournal(JOURNAL_DATA);
  }

  setupChat();
});

function createSection(title) {
  const section = document.createElement('section');
  section.className = 'section';

  const h2 = document.createElement('h2');
  h2.textContent = title;
  section.appendChild(h2);
  return section;
}

function renderCV(data) {
  const container = document.getElementById('cv-content');
  if (!container) return;

  container.innerHTML = '';

  // Hello World Section (Replaces Hero + Summary)
  const helloSection = createSection('Hello World! 🌎');

  // Intro (First summary item)
  if (data.summary.length > 0) {
    const p = document.createElement('p');
    p.textContent = data.summary[0].content;
    p.style.marginBottom = '1.5rem';
    helloSection.appendChild(p);
  }

  // Other Summary Sections
  for (let i = 1; i < data.summary.length; i++) {
    const item = data.summary[i];
    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    h3.style.marginTop = '1.5rem';
    h3.style.marginBottom = '0.5rem';
    h3.style.fontSize = '1.1rem';
    helloSection.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = item.content;
    helloSection.appendChild(p);
  }

  // Let's Connect
  const connectHeader = document.createElement('h3');
  connectHeader.textContent = 'Let’s Connect! 🤝';
  connectHeader.style.marginTop = '1.5rem';
  connectHeader.style.marginBottom = '0.5rem';
  connectHeader.style.fontSize = '1.1rem';
  helloSection.appendChild(connectHeader);

  const contacts = document.createElement('ul');
  contacts.className = 'link-list';
  data.contacts.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.link || '#';
    a.textContent = item.value;
    if ((item.link || '').startsWith('http')) a.target = '_blank';
    li.appendChild(a);
    contacts.appendChild(li);
  });
  helloSection.appendChild(contacts);

  container.appendChild(helloSection);

  const expSection = createSection('Professional Experience 👨‍💻');
  const expList = document.createElement('ul');
  expList.className = 'resume-list';
  data.experience.forEach((job) => {
    const li = document.createElement('li');
    const title = document.createElement('div');
    title.className = 'role-line';

    const roleText = document.createTextNode(`${job.role} @ `);
    title.appendChild(roleText);

    if (Array.isArray(job.company)) {
      job.company.forEach(part => {
        if (typeof part === 'string') {
          title.appendChild(document.createTextNode(part));
        } else {
          const a = document.createElement('a');
          a.href = part.link;
          a.target = '_blank';
          a.textContent = part.text;
          a.style.color = 'inherit';
          a.style.textDecoration = 'none';
          title.appendChild(a);
        }
      });
    } else if (job.companyLink) {
      const a = document.createElement('a');
      a.href = job.companyLink;
      a.target = '_blank';
      a.textContent = job.company;
      a.style.color = 'inherit';
      a.style.textDecoration = 'none';
      title.appendChild(a);
    } else {
      title.appendChild(document.createTextNode(job.company));
    }

    title.appendChild(document.createTextNode(`, ${job.location}`));

    const dates = document.createElement('div');
    dates.className = 'date-line';
    dates.textContent = job.period;
    const ul = document.createElement('ul');
    job.details.forEach((detail) => {
      const bullet = document.createElement('li');
      if (Array.isArray(detail)) {
        detail.forEach(part => {
          if (typeof part === 'string') {
            bullet.appendChild(document.createTextNode(part));
          } else if (part.text && part.link) {
            const a = document.createElement('a');
            a.href = part.link;
            a.target = '_blank';
            a.textContent = part.text;
            a.style.color = 'inherit';
            a.style.textDecoration = 'none';
            a.style.cursor = 'pointer';
            bullet.appendChild(a);
          }
        });
      } else {
        bullet.textContent = detail;
      }
      ul.appendChild(bullet);
    });
    li.appendChild(title);
    li.appendChild(dates);
    li.appendChild(ul);
    expList.appendChild(li);
  });
  expSection.appendChild(expList);
  container.appendChild(expSection);

  const eduSection = createSection('Education 🎓');
  const eduList = document.createElement('ul');
  eduList.className = 'resume-list';

  data.education.forEach((edu) => {
    const li = document.createElement('li');

    const degreeDiv = document.createElement('div');
    degreeDiv.style.fontWeight = '700';
    degreeDiv.textContent = edu.degree;

    const schoolDiv = document.createElement('div');
    schoolDiv.textContent = `${edu.school}, ${edu.period}`;

    li.appendChild(degreeDiv);
    li.appendChild(schoolDiv);
    eduList.appendChild(li);
  });

  eduSection.appendChild(eduList);
  container.appendChild(eduSection);

  const projectSection = createSection('Key Projects 🚀');
  const projectList = document.createElement('ul');
  projectList.className = 'resume-list';

  data.projects.forEach((project) => {
    const li = document.createElement('li');

    const titleDiv = document.createElement('div');
    titleDiv.style.fontWeight = '700';
    titleDiv.textContent = project.name;
    li.appendChild(titleDiv);

    const ul = document.createElement('ul');
    ul.style.listStyle = 'circle';
    ul.style.paddingLeft = '1.2rem';
    ul.style.marginTop = '0.3rem';

    project.details.forEach((detail) => {
      const detailLi = document.createElement('li');
      detailLi.textContent = detail;
      detailLi.style.marginBottom = '0.3rem';
      ul.appendChild(detailLi);
    });

    if (project.tech) {
      const techLi = document.createElement('li');
      techLi.textContent = `Tech Stack: ${project.tech}`;
      techLi.style.fontStyle = 'italic';
      ul.appendChild(techLi);
    }

    li.appendChild(ul);
    projectList.appendChild(li);
  });

  projectSection.appendChild(projectList);
  container.appendChild(projectSection);

  const pubSection = createSection('Publications 📝');
  const pubList = document.createElement('ul');
  pubList.className = 'mono-list';
  data.publications.forEach((pub) => {
    const li = document.createElement('li');
    if (pub.link) {
      const a = document.createElement('a');
      a.href = pub.link;
      a.target = '_blank';
      a.textContent = `${pub.title} — ${pub.venue}`;
      a.style.textDecoration = 'none';
      a.style.color = 'inherit';
      li.appendChild(a);
    } else {
      li.textContent = `${pub.title} — ${pub.venue}`;
    }
    pubList.appendChild(li);
  });
  pubSection.appendChild(pubList);
  container.appendChild(pubSection);

  const certSection = createSection('Certifications 📜');
  const certList = document.createElement('ul');
  certList.className = 'mono-list';
  data.certifications.forEach((cert) => {
    const li = document.createElement('li');
    li.textContent = cert;
    certList.appendChild(li);
  });
  certSection.appendChild(certList);
  container.appendChild(certSection);

  const achieveSection = createSection('Notable Achievements 🏆');
  const achieveList = document.createElement('ul');
  achieveList.className = 'mono-list';
  data.achievements.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    achieveList.appendChild(li);
  });
  achieveSection.appendChild(achieveList);
  container.appendChild(achieveSection);

  const actSection = createSection('Extracurricular 🌟');
  const actList = document.createElement('ul');
  actList.className = 'mono-list';
  data.activities.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    actList.appendChild(li);
  });
  actSection.appendChild(actList);
  container.appendChild(actSection);

  const interestSection = createSection('Interests 🎯');
  const chips = document.createElement('div');
  chips.className = 'contact-row';
  data.interests.forEach((interest) => {
    const span = document.createElement('span');
    span.className = 'contact-chip';
    span.textContent = interest;
    chips.appendChild(span);
  });
  interestSection.appendChild(chips);
  container.appendChild(interestSection);
}

function renderJournal(items) {
  const list = document.getElementById('journal-list');
  if (!list) return;

  list.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'journal-item';
    li.innerHTML = `
      <a href="${item.link}" target="${item.link.startsWith('http') ? '_blank' : '_self'}">${item.name}</a>
      <div class="date">${item.date}</div>
    `;
    list.appendChild(li);
  });
}

function setupChat() {
  const widget = document.getElementById('chat-widget');
  const toggleBtn = document.getElementById('chat-toggle');
  const closeBtn = document.getElementById('chat-close');
  const messages = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const suggestions = document.getElementById('chat-suggestions');

  if (!widget || !messages || !input || !sendBtn) return;

  const API_URL = "https://virtual-pamudu-git-main-pamudu-ranasinghes-projects.vercel.app";

  // Session ID from localStorage (will be created on first message)
  let sessionId = localStorage.getItem('chatSessionId');

  // Create session from backend
  async function createSession() {
    try {
      const res = await fetch(`${API_URL}/sessions`, { method: "POST" });
      const data = await res.json();
      sessionId = data.session_id;
      localStorage.setItem('chatSessionId', sessionId);
      return sessionId;
    } catch (error) {
      console.error("Failed to create session:", error);
      return null;
    }
  }

  // Restore state
  const isChatOpen = localStorage.getItem('chatOpen') === 'true';
  const savedMessages = JSON.parse(localStorage.getItem('chatMessages') || '[]');

  if (isChatOpen) {
    widget.classList.add('open');
    document.body.classList.add('chat-open');
    if (savedMessages.length > 0) {
      messages.innerHTML = '';
      savedMessages.forEach(msg => addMessage(msg.text, msg.sender, false, false));
    }
  }

  // Event Listeners
  if (toggleBtn) toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleChat();
  });

  if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(false));

  // New Chat Button
  const newChatBtn = document.getElementById('chat-new');
  if (newChatBtn) {
    newChatBtn.addEventListener('click', async () => {
      // Clear messages
      messages.innerHTML = `
        <div class="message bot">
          <div class="message-content">Hey there! 👋 I'm Pamudu's AI assistant. Ask me anything about his work, projects, or experience!</div>
        </div>
      `;
      // Create new session from backend
      localStorage.removeItem('chatSessionId');
      sessionId = null;
      localStorage.removeItem('chatMessages');
      input.focus();
    });
  }

  // Info Popup Toggle
  const infoBtn = document.getElementById('chat-info-btn');
  const infoPopup = document.getElementById('chat-info-popup');

  if (infoBtn && infoPopup) {
    infoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      infoPopup.classList.toggle('show');
    });

    // Close popup when clicking anywhere else
    document.addEventListener('click', (e) => {
      if (!infoPopup.contains(e.target) && e.target !== infoBtn) {
        infoPopup.classList.remove('show');
      }
    });
  }

  sendBtn.addEventListener('click', () => sendMessage());
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Suggestion Chips
  if (suggestions) {
    suggestions.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.textContent;
        input.value = text;
        sendMessage();
      });
    });
  }

  function toggleChat(forceOpen) {
    if (typeof forceOpen === 'boolean') {
      if (forceOpen) {
        widget.classList.add('open');
        document.body.classList.add('chat-open');
        localStorage.setItem('chatOpen', 'true');
        setTimeout(() => input.focus(), 100);
      } else {
        widget.classList.remove('open');
        document.body.classList.remove('chat-open');
        localStorage.removeItem('chatOpen');
      }
    } else {
      if (widget.classList.contains('open')) {
        toggleChat(false);
      } else {
        toggleChat(true);
      }
    }
  }

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    addMessage(text, 'user');

    input.disabled = true;
    sendBtn.disabled = true;

    const botMsgId = addMessage('', 'bot', true);
    const botMsgEl = document.getElementById(botMsgId);
    const contentEl = botMsgEl.querySelector('.message-content');

    try {
      // Ensure we have a session
      if (!sessionId) {
        contentEl.innerHTML = `<div class="thinking-indicator"><div class="spinner"></div><span>Creating session...</span></div>`;
        sessionId = await createSession();
        if (!sessionId) {
          throw new Error("Failed to create session");
        }
      }

      contentEl.innerHTML = `<div class="thinking-indicator"><div class="spinner"></div><span>Thinking...</span></div>`;

      const response = await fetch(`${API_URL}/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: text })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullAnswer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const eventData = JSON.parse(line.slice(6));

              if (eventData.type === "status") {
                contentEl.innerHTML = `
                  <div class="thinking-indicator">
                    <div class="spinner"></div>
                    <span>${eventData.message}</span>
                  </div>
                `;
              } else if (eventData.type === "result") {
                fullAnswer = eventData.answer || "";
                let html = renderResponse(fullAnswer);

                // Render citations if present
                if (eventData.citations && eventData.citations.length > 0) {
                  html += renderCitations(eventData.citations);
                }

                contentEl.innerHTML = html;
              }
            } catch (e) {
              console.error("Error parsing event:", e);
            }
          }
        }
        messages.scrollTop = messages.scrollHeight;
      }

      saveChatState();

    } catch (err) {
      console.error(err);
      contentEl.textContent = "Sorry, I couldn't reach the backend. Please try again later.";
      contentEl.style.color = "red";
    } finally {
      // Re-enable input
      input.disabled = false;
      sendBtn.disabled = false;
      input.focus();
      // Ensure specific typing indicator is gone if we finished
      if (contentEl.innerHTML.includes("thinking-indicator") && contentEl.textContent.trim().length === 0) {
        contentEl.textContent = "No response received.";
      }
    }
  }

  function addMessage(text, sender, isLoading = false, save = true) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.id = 'msg-' + Math.random().toString(36).substr(2, 9);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    if (isLoading) {
      contentDiv.innerHTML = `
            <div class="thinking-indicator">
                <div class="spinner"></div>
                <span>Thinking...</span>
            </div>
       `;
    } else {
      contentDiv.textContent = text;
      // If validating Markdown for restored messages, we might need to re-render:
      if (sender === 'bot') {
        contentDiv.innerHTML = renderResponse(text);
      }
    }

    div.appendChild(contentDiv);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;

    if (save && !isLoading) {
      saveChatState();
    }
    return div.id;
  }

  function renderResponse(text) {
    // 1. Markdown rendering
    let html = window.marked ? window.marked.parse(text) : text;

    // 2. Citation rendering (e.g. [📄 Resume])
    // Regex looking for brackets with emoji or text
    // We'll trust the bot to format loosely like [📄 Source Name]
    html = html.replace(/\[(📄|🐙|🔗|video)\s?([^\]]+)\]/g, (match, icon, name) => {
      return `<a href="#" class="citation-chip" onclick="return false;">${icon} ${name}</a>`;
    });

    return html;
  }

  function renderCitations(citations) {
    if (!citations || citations.length === 0) return '';

    const getIcon = (sourceType) => {
      switch (sourceType) {
        case 'github': return '🐙';
        case 'brain': return '📄';
        case 'url': return '🔗';
        default: return '📄';
      }
    };

    let html = '<div class="citations-container">';
    citations.forEach(citation => {
      const icon = getIcon(citation.source_type);
      // Remove file extensions from source name
      let name = citation.source_name || 'Source';
      name = name.replace(/\.(md|yaml|yml|txt)$/i, '');

      const url = citation.url || '';
      const sourceType = citation.source_type || '';

      // Make clickable only if it has a URL and is not a brain/local file source
      if (url && sourceType !== 'brain') {
        html += `<a href="${url}" target="_blank" class="citation-chip citation-link">${icon} ${name}</a>`;
      } else {
        html += `<span class="citation-chip">${icon} ${name}</span>`;
      }
    });
    html += '</div>';

    return html;
  }

  function saveChatState() {
    const msgs = [];
    const msgDivs = messages.querySelectorAll('.message');
    msgDivs.forEach(div => {
      // access the text content or innerHTML depending on complexity
      // For simplicity in this demo, let's grab the raw text if possible, 
      // but since we store markdown, we should ideally store the raw source.
      // However, we are only extracting from DOM.
      // To properly support history, we'd need to store the raw "fullAnswer" string in a data attribute.
      // For now, we'll just save the innerHTML which is okay for display-only history.
      const contentEl = div.querySelector('.message-content');
      const isUser = div.classList.contains('user');
      // We skip the thinking/loading content
      if (contentEl.querySelector('.thinking-indicator')) return;

      msgs.push({
        text: isUser ? contentEl.textContent : contentEl.innerHTML, // Store HTML for bot to preserve markdown on restore
        sender: isUser ? 'user' : 'bot'
      });
    });
    // Filter out welcome message duplicate if needed, but array should be fine
    localStorage.setItem('chatMessages', JSON.stringify(msgs));
  }
}
