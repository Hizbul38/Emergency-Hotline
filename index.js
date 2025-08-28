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
const historyList = document.getElementById('history-list');
const historyTemplate = document.getElementById('history-template');
const clearBtn = document.getElementById('clear-history');

for (const btn of callBtns) {
    btn.addEventListener('click', () => {
        if (availableCoin >= 20) {
            // Coin কমানো
            availableCoin -= 20;
            availableCoins.textContent = availableCoin;

            // Service info নেওয়া
            const service = btn.dataset.service;
            const number = btn.dataset.number;

            // Alert দেখানো
            alert(`📞 Calling...\n${service} ${number}`);

            // সময়
            const now = new Date();
            const timeString = now.toLocaleTimeString();

            // Template clone করে history বানানো
            const historyItem = historyTemplate.cloneNode(true);
            historyItem.classList.remove('hidden');
            historyItem.querySelector('.history-service').textContent = service;
            historyItem.querySelector('.history-number').textContent = number;
            historyItem.querySelector('.history-time').textContent = timeString;

            // History এ যোগ করা
            historyList.prepend(historyItem);

        } else {
            alert('❌ Not enough Coins! You need minimum 20 coins for calling');
        }
    });
}

// Clear history button
clearBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
});


