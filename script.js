const funFacts = [
    "The Sun accounts for 99.86% of the mass in the solar system.",
    "Jupiter has the shortest day of all the planets.",
    "Venus is the hottest planet in the solar system.",
    "One day on Venus is longer than one year on Earth.",
    "Mars is home to the tallest mountain in the solar system."
];

document.addEventListener('DOMContentLoaded', () => {
    const funFactBtn = document.getElementById('funFactBtn');
    const funFactP = document.getElementById('funFact');

    if (funFactBtn && funFactP) {
        funFactBtn.addEventListener('click', () => {
            const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
            funFactP.textContent = randomFact;
        });
    }
});