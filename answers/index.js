const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "You miss 100% of the shots you dont take. - Wayne Gretzky",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Everything youve ever wanted is on the other side of fear. - George Addair"
  ];

const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}