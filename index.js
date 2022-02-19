const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
  small.in
}
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function checkPasswordsMatch(input, input2){
  if(input.value !== input2.value){
    showError(input2, 'Passwords do not match')
  }
}

function isValidEmail(eInput){
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(re.test(eInput)){
    showSuccess(eInput)
  }else{
    showError(eInput,`${capitilize(eInput)}; enter a Valid` )
  }
}
function required(inputArray){
  inputArray.forEach((input)=>{
    if(input.value.trim()===''){
      showError(input, `${capitilize(input)} is Required`)
    }else{
      showSuccess(input)
    }
  })
}
function capitilize(input){
  return input.id.charAt(0).toUpperCase() + `${(input.id).slice(1)}`
}
function lengthRequired(input, min, max){
  if(input.value.length <min || input.value.length> max){
    showError(input, `${capitilize(input)}: Min of ${min}, Max of ${max}`)
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  required([username, email, password, password2])
  lengthRequired(username, 3, 15)
  lengthRequired(password, 6,25)
  checkPasswordsMatch(password, password2)
  isValidEmail(email)

})
