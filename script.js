// fonction qui "doit" générer 52 cartes
function createDeck() {
    // déclaration du tableau de cartes puis du tableau de symboles
    let cartePoker = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let symbolePoker = ["♢", "♠︎", "♣︎", "♡"];
    for (let i = 0; i < cartePoker.length; i++){
        let result1 = cartePoker[Math.floor(Math.random() * cartePoker.length)];
        let result2 = symbolePoker[Math.floor(Math.random() * symbolePoker.length)];
        let finalResult = result1 + result2;
        return finalResult;
    }
}

console.log(createDeck());