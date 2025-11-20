document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const isJournal = path.includes('journal.html');

    if (isJournal) {
        loadJournal();
    } else {
        loadCV();
    }

    setupChat();
});

async function loadCV() {
    try {
        const response = await fetch('data/cv.json');
        const data = await response.json();
        const text = data.text;

        // Simple parsing logic based on the structure of the text
        // This is a basic parser and might need refinement based on exact text format
        const sections = parseCVText(text);
        renderCV(sections);
    } catch (error) {
        console.error('Error loading CV:', error);
    }
}

function parseCVText(text) {
    const lines = text.split('\n');
    const sections = {};
    let currentSection = 'Header';
    sections[currentSection] = [];

    const sectionKeywords = [
        'Summary', 'Technical Skills', 'Experience', 'Projects',
        'Education', 'Publications', 'Certifications',
        'Achievements', 'Extracurricular Activities', 'Interests', 'Non Related Referees'
    ];

    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return;

        if (sectionKeywords.includes(trimmedLine)) {
            currentSection = trimmedLine;
            sections[currentSection] = [];
        } else {
            sections[currentSection].push(trimmedLine);
        }
    });

    return sections;
}

function renderCV(sections) {
    const container = document.getElementById('cv-content');
    if (!container) return;

    // Header
    const headerData = sections['Header'] || [];
    if (headerData.length > 0) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'section header-section';
        headerDiv.innerHTML = `
            <h1>${headerData[0]}</h1>
            <p>${headerData[1] || ''}</p>
            <p>${headerData[2] || ''}</p>
        `;
        container.appendChild(headerDiv);
    }

    // Other Sections
    for (const [title, lines] of Object.entries(sections)) {
        if (title === 'Header') continue;

        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';

        const titleElem = document.createElement('h2');
        titleElem.textContent = title;
        sectionDiv.appendChild(titleElem);

        const contentDiv = document.createElement('div');

        // Basic formatting: if line starts with bullet, make it a list item
        // otherwise paragraph
        let ul = null;

        lines.forEach(line => {
            if (line.startsWith('•') || line.startsWith('-')) {
                if (!ul) {
                    ul = document.createElement('ul');
                    ul.style.paddingLeft = '1.5rem';
                    contentDiv.appendChild(ul);
                }
                const li = document.createElement('li');
                li.textContent = line.substring(1).trim();
                ul.appendChild(li);
            } else {
                ul = null; // Reset list if non-list item appears
                const p = document.createElement('p');
                p.textContent = line;
                // Check if it looks like a date/company line
                if (line.match(/\d{4}/)) {
                    p.className = 'company';
                    p.style.color = 'black';
                }
                contentDiv.appendChild(p);
            }
        });

        sectionDiv.appendChild(contentDiv);
        container.appendChild(sectionDiv);
    }
}

async function loadJournal() {
    try {
        const response = await fetch('data/journal.json');
        const items = await response.json();
        const list = document.getElementById('journal-list');

        if (!list) return;

        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'journal-item';
            li.innerHTML = `
                <span class="date">${item.date}</span>
                <a href="${item.link}" target="_blank">${item.name}</a>
            `;
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading journal:', error);
    }
}

function setupChat() {
    const widget = document.getElementById('chat-widget');
    const header = document.getElementById('chat-header');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const messages = document.getElementById('chat-messages');
    let sessionId = null;

    if (!widget || !header) return;

    header.addEventListener('click', () => {
        widget.classList.toggle('open');
    });

    async function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        // Add user message
        addMessage(text, 'user');
        input.value = '';

        // Show loading state (optional)
        const loadingId = addMessage("Typing...", 'bot', true);

        try {
            // Call backend API
            // Assuming backend is running on port 8000, same as frontend for now if using proxy, 
            // or we need to point to the backend URL.
            // Since we are running python http.server for frontend and uvicorn for backend,
            // they will be on different ports (frontend 8000, backend likely 8000 too? No, can't be same).
            // I'll assume backend is on 8000 and frontend on 8080 or similar, OR 
            // for this local setup, I'll point to http://localhost:8000/api/chat 
            // but I need to make sure frontend is not blocking it.
            // Actually, the user said "backend is hosted on vercel", but "Current build to run locally".
            // If I run `python main.py`, it runs on 8000.
            // If I run `python -m http.server`, it defaults to 8000.
            // I should run frontend on a different port, e.g., 3000.

            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: text,
                    session_id: sessionId
                })
            });

            const data = await response.json();

            // Remove loading message
            removeMessage(loadingId);

            if (data.reply) {
                addMessage(data.reply, 'bot');
                sessionId = data.session_id;
            } else {
                addMessage("Sorry, I encountered an error.", 'bot');
            }

        } catch (error) {
            console.error('Chat error:', error);
            removeMessage(loadingId);
            addMessage("Sorry, I couldn't connect to the server.", 'bot');
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(text, sender, isLoading = false) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.textContent = text;
        if (isLoading) {
            div.id = 'loading-msg';
            div.style.fontStyle = 'italic';
        }
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
        return div.id;
    }

    function removeMessage(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
}
