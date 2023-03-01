const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach(container => {
    const submitButton = container.querySelector('button[type="submit"]');
    const resultDiv = container.querySelector('.result');
    const correctAnswer = container.dataset.correctAnswer;

    submitButton.addEventListener('click', event => {
        event.preventDefault();
        const selectedAnswer = container.querySelector('input[name^="answer"]:checked').dataset.answer;
        if (selectedAnswer === correctAnswer) {
            resultDiv.textContent = 'Resposta correta!';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'Resposta incorreta. A resposta correta é "' + correctAnswer + '"';
            resultDiv.style.color = 'red';
        }
    });
});
