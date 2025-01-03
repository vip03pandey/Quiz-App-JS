document.addEventListener('DOMContentLoaded',()=>{
    const startBtn=  document.getElementById("start-btn")
    const nextBtn=  document.getElementById("next-btn")
    const restartBtn=  document.getElementById("restart-btn")
    const questionContainer=  document.getElementById("question-container")
    const questionText=  document.getElementById("question-text")
    const choicesList=  document.getElementById("choices-list")
    const resultContainer=  document.getElementById("result-container")
    const scoreDisplay=  document.getElementById("score")
   
   
    const questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Who wrote 'Hamlet'?",
        choices: [
          "Charles Dickens",
          "Jane Austen",
          "William Shakespeare",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
    ];
    let currentquestionIndex=0;
    let score=0;
    startBtn.addEventListener('click',startQuiz);

    function startQuiz(){
        startBtn.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        showQuestion();
    }
    function showQuestion(){
        nextBtn.classList.add('hidden');
        questionText.textContent=questions[currentquestionIndex].question;
        choicesList.innerHTML=""
        questions[currentquestionIndex].choices.forEach(choice=>{
            const li=document.createElement('li');
            li.textContent=choice;
            li.addEventListener('click',()=>selectAnswer(choice));
            choicesList.appendChild(li);
        })
    }
    function selectAnswer(choice){
        const correctAnswer=questions[currentquestionIndex].answer;
        Array.from(choicesList.children).forEach(li=>li.classList.remove('selected'));
        const selectedAnswer=Array.from(choicesList.children).find(li=>li.textContent===choice);
        selectedAnswer.classList.add('selected');
        if(choice===correctAnswer){
            score++;
        }
        nextBtn.classList.remove('hidden');
    }
    nextBtn.addEventListener('click',()=>{
        currentquestionIndex++;
        if(currentquestionIndex<questions.length){
            showQuestion();
        }
        else{
            showResult()
        }
    })
    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent=`${score} out of ${questions.length}`
    }
    restartBtn.addEventListener('click',()=>{
        currentquestionIndex=0;
        score=0;
        resultContainer.classList.add('hidden');
        startQuiz();
    })
})