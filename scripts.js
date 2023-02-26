let player = {
    name: "Per",
    chips: 200
}
let sum 
let cards = []
let hasBlackJack = false ; let isAlive = false 
let message = ""
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    //card from 1-11 ; 11 12 13->as 11
    let rand = Math.floor(Math.random()*13) +1 
    if (rand === 11 || rand===12 || rand===13) return 10 
    else if (rand===1) return 11
    else return rand
}

function startGame() {
    isAlive = true 
    firstCard = getRandomCard() ; secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard , secondCard] 
    renderGame() 
}

function renderGame() {
    cardsEl.innerText = "Cards: " 
    for (let i=0 ; i<cards.length ; i++) { 
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum   
        if(sum < 21) message = "Draw New Card"
        else if (sum === 21) {
            message = "Youv'e won BlackJack!"
            hasBlackJack = true 
        }
        else {
            message = "Youv'e LOST BlackJack!"
            isAlive = false
        }
    messageEl.textContent = message
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
} 
