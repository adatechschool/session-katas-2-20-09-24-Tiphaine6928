// fonction qui génére aléatoirement 1 carte avec un numéro et un symbole
function createDeck() {
    // déclaration du tableau de cartes puis du tableau de symboles
    let numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let symbole = ["♢", "♠︎", "♣︎", "♡"];
    for (let i = 0; i < numero.length; i++){
        let result1 = numero[Math.floor(Math.random() * numero.length)];
        let result2 = symbole[Math.floor(Math.random() * symbole.length)];
        let finalResult = result1 + result2;
        return finalResult;
    }
}

// boucle for qui exécute 52 fois la fonction createDeck() 
for (let x = 0; x < 52; x++){
    console.log(createDeck());
}
