import api from './services/api'
// import './assets/style/app.css'

import './pages/profile'

alert('bye world!!!!')


const apiTest = new api()

const alertMessage = (message) => {
    alert(message)
}

console.log('Wow, it is working! OMG!')


document.getElementById('start-game').addEventListener('click', ()=> {
    alertMessage('Hey the game is about to beginning!')
    apiTest.post();
})



document.getElementById('root').appendChild(document.createTextNode('Hello'))
