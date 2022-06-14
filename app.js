const rangeForm = document.querySelector("#rangeForm");
const rangeInput = document.querySelector(".rangeInput");
const userForm =  document.querySelector("#userForm");
const userInput = document.querySelector(".userInput");

const result = document.querySelector(".result");

function onRangeForm() {
  let rangeNum = rangeInput.value;
  userInput.max = rangeNum;  
  localStorage.setItem("rangeNum", rangeNum); 
  console.log(rangeNum);
}

rangeForm.addEventListener("input", onRangeForm);

function onResult(userNum, randomNum){
  const resultText = `You chose: ${userNum}, the machine chose: ${randomNum}`

  if(parseInt(userNum) === randomNum){
    result.innerText = ` ${resultText} \n You won! `;
  }else if(parseInt(userNum) > randomNum){
    result.innerText = ` ${resultText} \n You lost! `;
  }else if(parseInt(userNum) < randomNum){
    result.innerText = ` ${resultText} \n You lost! `;
  }else {
    result.innerText = ` ${resultText} \n You lost! `;
  }
}

function onSubmit(e){
  e.preventDefault();
  let userNum = userInput.value;
  let rangeNum = rangeInput.value; 
  let randomNum = Math.floor(Math.random() * rangeNum + 1);
  console.log(randomNum);
  onResult(userNum, randomNum);
}

userForm.addEventListener("submit", onSubmit);


