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
    { title: 'What I Do', icon: 'laptop', content: 'I’m passionate about teaching machines to see, hear, and think—specializing in Natural Language Processing, Computer Vision, and Audio Signal Analysis. With over four years of experience building machine learning solutions, my work supports millions of users across different products.' },
    { title: 'Beyond the Code', icon: 'pawn', content: 'I had the honor of representing Team Sri Lanka at the Asian University Chess Championship and earned University Colors for my performance. It turns out, strategizing moves on the board is great training for AI architecture—both require patience, pattern recognition, and knowing exactly when to make a sacrifice for the win!' }
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
      details: [
        'Lead the AI team building ML solutions for credit risk and financial document processing.',
        'Automated financial data extraction into balanced statements, cutting manual work by 70-80%.',
        'Built risk rating models covering 250K corporate entities across AUS and NZ.',
        'Automated end-to-end financial analysis, turning analysts from report writers into reviewers.'
      ]
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
    'AI Orchestration Bootcamp (LLMs, RAGs, Agents) – Cohort Six - SenzMate',
    'AWS Academy Graduate - Data Engineering',
    'Duke University - Explainable AI (XAI) Specialization',
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
    date: "Feb 22, 2026",
    name: "I Built CarVault — A Personal Vehicle Management App, Now Live on Google Play",
    link: "articles/CarValut/index.html"
  },
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
    date: "Dec 08, 2025",
    name: "Explainable AI (XAI) Specialization",
    link: "articles/xAI-certificate/index.html"
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

// Monochrome line icons (24x24, drawn with currentColor)
const ICONS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9s1.3-6.3 3.8-9z"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  pawn: '<circle cx="12" cy="6" r="3"/><path d="M9.5 9h5"/><path d="M10.5 9c0 4-2.5 6-3.5 9h10c-1-3-3.5-5-3.5-9"/><path d="M6 21h12"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8"/><path d="M18 14.3c2.1.8 3.5 2.9 3.5 5.7"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5"/><path d="M22 9v6"/>',
  rocket: '<path d="M12 3c3 2.5 4.5 6 4.5 10v3h-9v-3C7.5 9 9 5.5 12 3z"/><circle cx="12" cy="10" r="1.5"/><path d="M7.5 14L5 17v3l2.5-1.5"/><path d="M16.5 14l2.5 3v3l-2.5-1.5"/><path d="M10.5 19.5L12 22l1.5-2.5"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 13.9L7 22l5-3 5 3-1.5-8.1"/>',
  trophy: '<path d="M8 4h8v6a4 4 0 0 1-8 0V4z"/><path d="M8 6H5a3 3 0 0 0 3 4"/><path d="M16 6h3a3 3 0 0 1-3 4"/><path d="M12 14v7"/><path d="M8 21h8"/>',
  star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 16v4"/><path d="M17 18h4"/>'
};

function createIcon(name, size = 22) {
  const span = document.createElement('span');
  span.className = 'icon';
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
  return span;
}

function createSection(title, iconName) {
  const section = document.createElement('section');
  section.className = 'section';

  const h2 = document.createElement('h2');
  h2.textContent = title;
  if (iconName) h2.appendChild(createIcon(iconName, 24));
  section.appendChild(h2);
  return section;
}

function renderCV(data) {
  const container = document.getElementById('cv-content');
  if (!container) return;

  container.innerHTML = '';

  // Hero (text only)
  const hero = document.createElement('header');
  hero.className = 'hero';
  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = data.title;
  const heroName = document.createElement('h1');
  heroName.textContent = data.name;
  const lede = document.createElement('p');
  lede.className = 'lede';
  lede.textContent = data.headline;
  hero.append(eyebrow, heroName, lede);
  container.appendChild(hero);

  // Hello World Section (Summary)
  const helloSection = createSection('Hello World!', 'globe');

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
    if (item.icon) {
      h3.className = 'with-icon';
      h3.appendChild(createIcon(item.icon, 18));
    }
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
  connectHeader.textContent = 'Let’s Connect!';
  connectHeader.className = 'with-icon';
  connectHeader.appendChild(createIcon('users', 18));
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

  const expSection = createSection('Professional Experience', 'briefcase');
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

  const eduSection = createSection('Education', 'cap');
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

  const projectSection = createSection('Key Projects', 'rocket');
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

  const pubSection = createSection('Publications', 'file');
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

  const certSection = createSection('Certifications', 'award');
  const certList = document.createElement('ul');
  certList.className = 'mono-list';
  data.certifications.forEach((cert) => {
    const li = document.createElement('li');
    li.textContent = cert;
    certList.appendChild(li);
  });
  certSection.appendChild(certList);
  container.appendChild(certSection);

  const achieveSection = createSection('Notable Achievements', 'trophy');
  const achieveList = document.createElement('ul');
  achieveList.className = 'mono-list';
  data.achievements.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    achieveList.appendChild(li);
  });
  achieveSection.appendChild(achieveList);
  container.appendChild(achieveSection);

  const actSection = createSection('Extracurricular', 'star');
  const actList = document.createElement('ul');
  actList.className = 'mono-list';
  data.activities.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    actList.appendChild(li);
  });
  actSection.appendChild(actList);
  container.appendChild(actSection);

  const interestSection = createSection('Interests', 'target');
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

  // Monochrome icon on the nav button (replaces the emoji in the markup)
  if (toggleBtn) {
    toggleBtn.textContent = '';
    toggleBtn.append(createIcon('sparkle', 16), 'Pamudu AI');
  }

  if (!widget) return;

  // The conversation itself is the Virtual Pamudu app (a deepagents agent
  // streamed over AG-UI, with a CopilotKit UI), shown here in an iframe.
  // Source: https://github.com/pamudu123/virtual-pamudu
  const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
  const CHAT_URL = isLocal
    ? 'http://localhost:3000/embed'
    : 'https://virtual-pamudu.vercel.app/embed';

  // Every page still ships the markup of the old built-in chat. Replace it.
  widget
    .querySelectorAll('#chat-messages, #chat-suggestions, .chat-input-area')
    .forEach((el) => el.remove());
  ['chatSessionId', 'chatMessages'].forEach((key) => localStorage.removeItem(key));

  const frame = document.createElement('iframe');
  frame.id = 'chat-frame';
  frame.className = 'chat-frame';
  frame.title = 'Pamudu AI chat';
  frame.setAttribute('allow', 'clipboard-write');
  widget.appendChild(frame);

  // Load the app only once the panel is first opened.
  let frameLoaded = false;
  function loadFrame() {
    if (frameLoaded) return;
    frame.src = CHAT_URL;
    frameLoaded = true;
  }

  function toggleChat(forceOpen) {
    const open = typeof forceOpen === 'boolean' ? forceOpen : !widget.classList.contains('open');
    widget.classList.toggle('open', open);
    document.body.classList.toggle('chat-open', open);
    if (open) {
      localStorage.setItem('chatOpen', 'true');
      loadFrame();
    } else {
      localStorage.removeItem('chatOpen');
    }
  }

  // Restore state
  if (localStorage.getItem('chatOpen') === 'true') toggleChat(true);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleChat();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(false));

  // New Chat: reloading the app starts a fresh conversation.
  const newChatBtn = document.getElementById('chat-new');
  if (newChatBtn) {
    newChatBtn.addEventListener('click', () => {
      frameLoaded = true;
      frame.src = CHAT_URL;
    });
  }

  // Info popup
  const infoBtn = document.getElementById('chat-info-btn');
  const infoPopup = document.getElementById('chat-info-popup');

  if (infoBtn && infoPopup) {
    infoBtn.textContent = '2.0';
    infoPopup.innerHTML = `
      <div class="popup-title">Pamudu AI 2.0</div>
      <div class="popup-tagline">Rebuilt from the ground up ✨</div>
      <div class="popup-section">
        <div class="popup-label">What's new:</div>
        <ul>
          <li>Answers stream in as they are written. <span class="new-badge">NEW</span></li>
          <li>Projects, articles, videos and experience shown as cards. <span class="new-badge">NEW</span></li>
          <li>It can ask you a question to tailor the answer. <span class="new-badge">NEW</span></li>
          <li>Follow-up question suggestions.</li>
        </ul>
      </div>
      <div class="popup-section">
        <div class="popup-label">Under the hood:</div>
        <ul>
          <li>Deep agent with sub-agents for code and content research.</li>
          <li>Live data from GitHub, Medium and YouTube.</li>
          <li>Send Pamudu a message, with your review before it goes.</li>
        </ul>
      </div>
    `;

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
}
