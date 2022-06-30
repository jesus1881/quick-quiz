const startBtn = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-grid');
const nextButton = document.getElementById('next-btn')
let mixQuestion, currentQuestion


var question =[
  {
    question: 'What does a tag need for it to link to sources?',
    answers:[
      {text: 'href=""', correct:true},
      {text: 'src=""', correct:false},
      {text: 'link=""', correct:false},
      {text: 'url=""', correct:false}
    ]
  },
  {
    question: 'What is used to make a button work when clicked?',
    answers:[
      {text: '< button >', correct:false},
      {text: 'var button = true', correct:false},
      {text: 'addEventListner', correct:true},
      {text: 'querySelector', correct:false}
    ]
  },
  {
    question: 'What file should I make if I wanted to set up the foundation?',
    answers:[
      {text: '.js', correct:false},
      {text: '.html', correct:true},
      {text: '.css', correct:false},
      {text: 'jQuery', correct:false}
    ]
  },
  {
    question: 'When do we use flex?',
    answers:[
      {text: 'So we can color the page', correct:false},
      {text: 'To add a function', correct:false},
      {text: 'To show off', correct:false},
      {text: 'So we can fit content, regardless of size', correct:true}
    ]
  },
  {
    question: 'Random Question: In Pokemon who is the yellow pokemon?',
    answers:[
      {text: 'Pikachu', correct:true},
      {text: 'Yellow Flash', correct:false},
      {text: 'Charizard', correct:false},
      {text: 'Bulbasaur', correct:false}
    ]
  
  }
]

function startGame(){
  startBtn.classList.add('hide')
  mixQuestion = question.sort(() => Math.random()- .5)
  currentQuestion = 0
  questionContainerEl.classList.remove('hide')
  nextQuestion()
}

function nextQuestion(){
  resetContainer()
  showQuestion(mixQuestion[currentQuestion])
}

function showQuestion (question){
  questionEl.innerText =  question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtnEl.appendChild(button)
    console.log(button)
  })
}

function resetContainer() {
  nextButton.classList.add('hide')
  while(answerBtnEl.firstChild){
    answerBtnEl.removeChild
    (answerBtnEl.firstChild)
  }
  document.body.classList.remove('wrong','correct')
}

function selectAnswer(e){
  const selectBtn = e.target
  const correct = selectBtn.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBtnEl.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
  })
  if(mixQuestion.length > currentQuestion + 1){
    nextButton.classList.remove("hide");
  }else{
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

function showScores(){
  scoreBtn.classList.add('hide')
  scoreBoard.classList.remove('hide')
}

function setStatusClass(element, correct){
  clearStatus(element)
  if(correct){
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatus(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

startBtn.addEventListener('click', startGame);


nextButton.addEventListener("click", () => {
  currentQuestion++;
  nextQuestion();
});

