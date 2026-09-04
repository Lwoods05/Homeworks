const STATUS_STYLES = {
    stable: { background: '#dcfce7', color: '#059669', label: 'Stable' },
    warning: { background: '#fef3c7', color: '#b45309', label: 'Warning' },
    critical: { background: '#fee2e2', color: '#c0392b', label: 'Critical' },
    offline: { background: '#e2e8f0', color: '#334155', label: 'Offline' },
    secure: { background: '#e0f2fe', color: '#0284c7', label: 'Secure' },
};

const GITHUB_API_URL = 'https://api.github.com/users/Lwoods05';

function initializeTipGenerator() {
    const tipButton = document.querySelector('.spark-tip-btn');
    const tipOutput = document.querySelector('.spark-tip-output');

    if (!tipButton || !tipOutput) {
        return;
    }

    tipButton.addEventListener('click', () => {
        tipOutput.textContent = 'Loading GitHub profile...';

        fetch(GITHUB_API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                tipOutput.textContent = `${data.login} has ${data.public_repos} public repos and ${data.followers} followers on GitHub!`;
            })
            .catch((error) => {
                console.error('Could not load GitHub profile:', error);
                tipOutput.textContent = 'Sorry, GitHub info is unavailable right now. Please try again later.';
            });
    });
}

function initializeStatusPreview() {
    const statusInput = document.getElementById('status-input');
    const statusPreview = document.querySelector('.status-preview');

    if (!statusInput || !statusPreview) {
        return;
    }

    statusInput.addEventListener('input', () => {
        const statusKey = statusInput.value.trim().toLowerCase();
        const status = STATUS_STYLES[statusKey];

        if (status) {
            statusPreview.style.backgroundColor = status.background;
            statusPreview.style.color = status.color;
            statusPreview.textContent = `System status: ${status.label}`;
        } else if (statusKey === '') {
            statusPreview.style.backgroundColor = '';
            statusPreview.style.color = '';
            statusPreview.textContent = 'Your system status preview will update here as you type.';
        } else {
            statusPreview.style.backgroundColor = '';
            statusPreview.style.color = '';
            statusPreview.textContent = 'Try "stable", "warning", "critical", "offline", or "secure".';
        }
    });
}

function createSkillListItem(skillText) {
    const listItem = document.createElement('li');
    listItem.className = 'skill-list-item';

    const skillLabel = document.createElement('span');
    skillLabel.textContent = skillText;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'skill-remove-btn';
    removeButton.setAttribute('aria-label', `Remove skill: ${skillText}`);
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(skillLabel);
    listItem.appendChild(removeButton);

    return listItem;
}

function initializeSkillChecklist() {
    const skillInput = document.getElementById('skill-input');
    const addSkillButton = document.querySelector('.skill-add-btn');
    const skillList = document.querySelector('.skill-list');

    if (!skillInput || !addSkillButton || !skillList) {
        return;
    }

    const addSkill = () => {
        const skillText = skillInput.value.trim();

        if (skillText === '') {
            return;
        }

        skillList.appendChild(createSkillListItem(skillText));
        skillInput.value = '';
        skillInput.focus();
    };

    addSkillButton.addEventListener('click', addSkill);

    skillInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addSkill();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTipGenerator();
    initializeStatusPreview();
    initializeSkillChecklist();
});
