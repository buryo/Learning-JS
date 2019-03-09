(function(){
    const questions = [];
    let keepScore = score();

    //Tracking the score
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.answer = correctAnswer;
    }

    // log the question and its corresponding answers
    Question.prototype.askQuestion = function () {
        console.log(this.question);
        let i = 1;
        this.answers.forEach(function (answer) {
            console.log(i + ': ' +answer);
            i++;
        });
    };

    // check if answer to the question is correct
    Question.prototype.answerQuestion = function(question, userAnswer, score) {
        // putting the index of the right answer into a variable
        let answerIndex = question.answers.indexOf(userAnswer);

        // check if the value of the index is the same as user answer
        if (question.answers[answerIndex] === question.answer){
            console.log(userAnswer + ' is correct!');
            this.displayScore(score(true));
            return true;
        }else{
            console.log(userAnswer + ' was not correct!');
            this.displayScore(score(false));
            return false;
        }
    };

    Question.prototype.displayScore = function(sc) {
        console.log('Your current score is now: ' + sc);
        console.log('*************************');
    };

    // question | answers | answer
    let q1 = new Question('What is 1+1', [2, 1, 5], 2);
    let q2 = new Question('What is 3+1', [1, 2, 4], 4);
    let q3 = new Question('What is 5+1', [3, 5, 6], 6);
    let q4 = new Question('What is 3+3', [3, 5, 6], 6);
    let q5 = new Question('What is 11+1', [13, 17, 12], 12);
    let q6 = new Question('What is 5+6', [14, 12, 11], 11);
    let q7 = new Question('What is 7+6', [13, 12, 14], 13);
    let q8 = new Question('What color was the cat (Tom) from Tom & Jerry', ['brown', 'gray', 'black'], 'gray');

    // Pushing the questions into an array
    questions.push(q1, q2, q3, q4, q5, q6, q7, q8);

    // ask the question
    (function(){
        // putting the answer in a variable
        let answer = '';

        // keep asking questions while the user answer is not 'exit'
        while (answer !== 'exit'){
            let repeatQuestion = 1;
            let selectedQuestion = Math.floor(Math.random() * questions.length);

            // repeat the question if answer was wrong
            while (repeatQuestion === 1) {
                questions[selectedQuestion].askQuestion();
                answer = prompt("Please enter your answer");

                // convert the answer to numbers if input was a number, else lowerCase the string
                isNaN(answer) === false ? answer = parseInt(answer) : answer = answer.toLowerCase();

                if (answer !== 'exit'){
                    // if question was correct disable repeat
                    if (questions[selectedQuestion].answerQuestion(questions[selectedQuestion], answer, keepScore)) {
                        repeatQuestion = 0;
                    }
                } else{
                    console.log('Exit successful =)');
                    repeatQuestion = 0;
                }
            }
        }
    })();
})();





