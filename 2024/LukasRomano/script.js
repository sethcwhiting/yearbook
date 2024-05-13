function gradeQuiz() {
    let score = 0;

    // Check answers for each question
    if (document.getElementById('q1').value == '4') {
        score++;
    }
    // Repeat the above code for the remaining 9 questions

    document.getElementById('result').innerText = 'Your score is: ' + score + '/10';
}

