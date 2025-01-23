document.addEventListener('DOMContentLoaded', function() {
    const clickToStart = document.getElementById('clickToStart');

    document.addEventListener('click', function() {
        if (clickToStart) {
            clickToStart.style.display = 'none';
        }

        const enableAudioPrompt = document.createElement('div');
        enableAudioPrompt.style.position = 'absolute';
        enableAudioPrompt.style.top = '50%';
        enableAudioPrompt.style.left = '50%';
        enableAudioPrompt.style.transform = 'translate(-50%, -50%)';
        enableAudioPrompt.style.textAlign = 'center';

        const promptText = document.createElement('p');
        promptText.textContent = 'Enable Audio';
        enableAudioPrompt.appendChild(promptText);

        const yesButton = document.createElement('button');
        yesButton.textContent = 'Yes';
        enableAudioPrompt.appendChild(yesButton);

        const noButton = document.createElement('button');
        noButton.textContent = 'No';
        enableAudioPrompt.appendChild(noButton);

        document.body.appendChild(enableAudioPrompt);
    }, { once: true });
});