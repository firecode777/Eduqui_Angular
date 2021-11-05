const quizData = [
    {
      Pergunta: "Quanto é 2+2 ?",
      a: "4",
      b: "2",
      c: "3",
      d: "5",
      correta: "a",
    },
    {
      Pergunta: "Quanto é 10-3 ?",
      a: "1",
      b: "9",
      c: "7",
      d: "5",
      correta: "c",
    },
    {
      Pergunta: "Quanto é 5x5 ?",
      a: "20",
      b: "25",
      c: "10",
      d: "30",
      correta: "b",
    },
    {
      Pergunta: "Quanto é 10 dividido por 2 ?",
      a: "5",
      b: "10",
      c: "4",
      d: "8",
      correta: "a",
    }
  ] 

  const quiz= document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.resposta')
  const questionEls = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')

   let currentQuiz = 0;
   let pontuacao = 0
   loadQuiz()

   function loadQuiz() {
     deselectAnswer()

     const currentQuizData = quizData[currentQuiz]
     questionEls.innerText = currentQuizData.Pergunta
     a_text.innerText = currentQuizData.a
     b_text.innerText = currentQuizData.b
     c_text.innerText = currentQuizData.c
     d_text.innerText = currentQuizData.d
   }

   function deselectAnswer() {
       answerEls.forEach(answerEl => answerEl.checked = false)
   }

   function getSelected() {
       let resposta
       answerEls.forEach(answerEls => {
           if(answerEls.checked) {
             resposta = answerEls.id  
           }
       })
       return resposta
   }

   submitBtn.addEventListener('click', () => {
       const resposta = getSelected()
       if(resposta === quizData[currentQuiz].correta) {
           pontuacao++
       }
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você acertou ${pontuação}/${quizData.length} respostas corretamente
           <button onclick="location.reload()">Recarregar`
       }
   })