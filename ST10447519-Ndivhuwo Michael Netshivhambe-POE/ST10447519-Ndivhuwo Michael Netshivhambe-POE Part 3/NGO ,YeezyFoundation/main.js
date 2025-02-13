// how to accept user input

//EASY WAY= window prompt
//2.PROFESSIONAL WAY = HTML textbox

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = 'Hello ${username}'
}

const firstname = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages = []
    if (firstname.value=== '' || firstname.value===null){
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
    e.preventDefault()
})