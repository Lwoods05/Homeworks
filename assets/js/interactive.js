const STATUS_STYLES = {
    stable: { background: '#dcfce7', color: '#059669', label: 'Stable' },
    warning: { background: '#fef3c7', color: '#b45309', label: 'Warning' },
    critical: { background: '#fee2e2', color: '#c0392b', label: 'Critical' },
    offline: { background: '#e2e8f0', color: '#334155', label: 'Offline' },
    secure: { background: '#e0f2fe', color: '#0284c7', label: 'Secure' },
};

const TROUBLESHOOTING_TIPS = [
    'Always check the cable and power connection before opening the case.',
    'Boot into safe mode to isolate whether a driver or startup app is the culprit.',
    'Run a full malware scan whenever a system suddenly slows down.',
    'Check Event Viewer logs for clues before reinstalling the OS.',
    'Reseat RAM sticks if a machine won\'t POST or beeps on startup.',
];

function initializeTipGenerator() {
    const tipButton = document.querySelector('.spark-tip-btn');
    const tipOutput = document.querySelector('.spark-tip-output');

    if (!tipButton || !tipOutput) {
        return;
    }

    let lastIndex = -1;

    tipButton.addEventListener('click', () => {
        let nextIndex = Math.floor(Math.random() * TROUBLESHOOTING_TIPS.length);

        while (nextIndex === lastIndex && TROUBLESHOOTING_TIPS.length > 1) {
            nextIndex = Math.floor(Math.random() * TROUBLESHOOTING_TIPS.length);
        }

        lastIndex = nextIndex;
        tipOutput.textContent = TROUBLESHOOTING_TIPS[nextIndex];
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
