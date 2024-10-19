const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.querySelector("#btn")
const firstPassword = document.querySelector("#password1")
const secondPassword = document.querySelector("#password2")

function generatePassword() {
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    randomOne = Math.floor(Math.random() * characters.length)
    randomTwo = Math.floor(Math.random() * characters.length)

    for (let i = 0; i < 15; i++) {
        randomOne = Math.floor(Math.random() * characters.length)
        randomTwo = Math.floor(Math.random() * characters.length)
        firstPassword.textContent += characters[randomOne];
        secondPassword.textContent += characters[randomTwo]
    }
}

btnEl.addEventListener("click", generatePassword)




