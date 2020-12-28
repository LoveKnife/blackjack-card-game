const suits = ["Spades","Hearts","Diamonds","Clubs"];
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let deck = [];

function createDeck(){
    deck = []
    for(let i=0;i<values.length;i++){
        for(let x=0;x<values.length;x++){
            let weight = parseInt(values[i]);
            if(values[i] == "J" || values[i] == "Q" || values[i] =="K")
            weight = 10;
            if(values[i] == "A")
            weight = 11;
            let card = {Value: values[i], Suit: suits[x], Weight: weight};
            deck.push(card);
        }
    }
}

function shuffle(){
    //for 1000 turns: switch the values of two random cards
    for(let i=0;i<1000;i++){
        let loc1 = Math.floor((Math.random() * deck.length));
        let loc2 = Math.floor((Math.random() * deck.length));
        let temp = deck[loc1];

        deck[loc1] = deck[loc2];
        deck[loc2] = temp
    }
}