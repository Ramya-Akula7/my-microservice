const API_BASE = '/api';

async function checkHealth() {
    try {
        const response = await fetch(`${API_BASE}/health`);
        const data = await response.json();
        document.getElementById('status').innerHTML = 
            `<span class="status up">✓ Status: ${data.status}</span><br>
             Service: ${data.service}<br>
             Timestamp: ${new Date(data.timestamp).toLocaleString()}`;
    } catch (error) {
        document.getElementById('status').innerHTML = 
            `<span class="status" style="background:#fef2f2;color:#991b1b;">✗ Status: DOWN</span>`;
    }
}

async function viewServerInfo() {
    try {
        const response = await fetch(`${API_BASE}/info`);
        const data = await response.json();
        document.getElementById('info').innerHTML = 
            `<strong>Server Info:</strong><br>
             ${data.info}<br>
             <strong>Version:</strong> ${data.version}`;
    } catch (error) {
        document.getElementById('info').innerHTML = 'Failed to load server info';
    }
}

async function sendMessage() {
    const text = document.getElementById('messageText').value.trim();
    if (!text) {
        alert('Please enter a message');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        
        if (response.ok) {
            document.getElementById('messageText').value = '';
            loadMessages();
        }
    } catch (error) {
        alert('Failed to send message');
    }
}

async function loadMessages() {
    try {
        const response = await fetch(`${API_BASE}/messages`);
        const messages = await response.json();
        
        const messagesDiv = document.getElementById('messages');
        if (messages.length === 0) {
            messagesDiv.innerHTML = '<p>No messages yet. Send your first message!</p>';
            return;
        }
        
        messagesDiv.innerHTML = messages.map(msg => `
            <div class="message-item">
                <strong>#${msg.id}</strong>: ${msg.text}
                <div class="timestamp">${new Date(msg.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
    } catch (error) {
        document.getElementById('messages').innerHTML = 'Failed to load messages';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkHealth();
    loadMessages();
    viewServerInfo();
    
    // Auto-refresh every 30 seconds
    setInterval(checkHealth, 30000);
    setInterval(loadMessages, 10000);
});
