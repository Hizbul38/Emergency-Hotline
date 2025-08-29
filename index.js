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

// copy feature

let totalCopyNumber = 0;
const totalCopyNumbers = document.getElementById('copy-number');
const copyBtns =document.querySelectorAll('.copy-btn')

for( const btn of copyBtns){
    btn.addEventListener('click', () =>{
        totalCopyNumber++;
        totalCopyNumbers.textContent = totalCopyNumber;
    })
}

function copyNumber(elementId){
    var number = document.querySelectorAll(elementId).innerText;
    navigator.clipboard.writeText(number).then(function (){
        alert('Number copied:' + number)
    })
}


// call feature


let availableCoin = 100;
const availableCoins = document.getElementById('available-coin');
const callBtns = document.querySelectorAll('.call-btn');
const historyList = document.getElementById('history-list');
const historyTemplate = document.getElementById('history-template');
const clearBtn = document.getElementById('clear-history');

for (const btn of callBtns) {
    btn.addEventListener('click', () => {
        if (availableCoin >= 20) {

            availableCoin -= 20;
            availableCoins.textContent = availableCoin;

            const service = btn.dataset.service;
            const number = btn.dataset.number;

            alert(`📞 Calling...\n${service} ${number}`);

            const now = new Date();
            const timeString = now.toLocaleTimeString();

            const historyItem = historyTemplate.cloneNode(true);
            historyItem.classList.remove('hidden');
            historyItem.querySelector('.history-service').textContent = service;
            historyItem.querySelector('.history-number').textContent = number;
            historyItem.querySelector('.history-time').textContent = timeString;
            historyList.prepend(historyItem);

        } else {
            alert('❌ Not enough Coins! You need minimum 20 coins for calling');
        }
    });
}

clearBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
});


