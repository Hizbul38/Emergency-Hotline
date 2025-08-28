// love feature

let availableHeart = 0;
const availableHearts = document.getElementById('available-heart');
const loveBtns = document.querySelectorAll('.love-btn');

for( const btn of loveBtns) {
btn.addEventListener('click', () => {
    availableHeart++;
    availableHearts.textContent = availableHeart;
})
}

// call feature


let availableCoin = 100;
const availableCoins = document.getElementById('available-coin');
const callBtns = document.querySelectorAll('.call-btn');

for(const btn of callBtns){
    btn.addEventListener('click', () => {
        if(availableCoin >= 20){
            availableCoin -= 20;
        } else{
            alert('❌Not enough Coins! you need minimum 20 coins for calling')
        }
        availableCoins.textContent = availableCoin;
        const service = btn.dataset.service;
        const number = btn.dataset.number;

        const data = {
            name: 'National Emergency',
            number
        }
        

        alert(`📞 Calling...\n${service} ${number}`);
    })
}

// history feature

const historyData = []

