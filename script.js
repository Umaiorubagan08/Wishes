const quotes = [
    "You’ve been working so hard. Even when you're tired, remember that every small effort brings you closer to your dream. It will all be worth it in the end.",
    "Some days may feel heavy, and the road ahead might seem long. But look how far you’ve come already. The strength inside you will help you get through.",
    "There will be times when you want to give up. But in those moments, remember you’re stronger than you think. Just keep going, step by step.",
    "When life feels tough and impossible, remember that the hardest climbs lead to the most beautiful views. You’re almost there.",
    "I know you feel overwhelmed sometimes, but take a moment to see how much you’ve grown. You’re not the same as you were yesterday, and that’s something beautiful.",
    "The nights may feel long, and the days may be hard. But every challenge, every tear, and every setback is getting you ready for the success that’s coming.",
    "The journey might not be easy, but you’re not alone. Keep your heart full of hope, because you’re closer to your dream than you’ve ever been.",
    "Just like you enjoy your egg biryani, pizza, and Dairy Milk chocolate, enjoy every step of your journey. Sometimes, the best things come when you least expect them.",
    "Like the K-dramas you love, life has its ups and downs, but each moment is part of a beautiful story. Keep writing your success, one step at a time.",
  ];
  
  let currentQuote = 0;

  function showMessage() {
      const messageBox = document.getElementById("message-box");
      const messageText = document.getElementById("message-text");
      const countdown = document.getElementById("countdown");  // Countdown element
  
      messageBox.style.display = "flex";
  
      function displayQuote() {
          if (currentQuote < quotes.length) {
              messageText.innerText = quotes[currentQuote];
              countdown.innerText = "Next quote in 5 seconds..."; // Show countdown message
              let secondsLeft = 5;  // Countdown from 5 seconds
  
              const countdownInterval = setInterval(() => {
                  secondsLeft--;
                  countdown.innerText = `Next quote in ${secondsLeft} seconds...`;
  
                  if (secondsLeft === 0) {
                      clearInterval(countdownInterval);  // Stop the countdown
                      currentQuote++;
                      setTimeout(displayQuote, 1000); // Wait for 1 second before displaying next quote
                  }
              }, 1000); // Update countdown every 1 second
          }
      }
  
      displayQuote();
  }
  
  function closeMessage() {
      const messageBox = document.getElementById("message-box");
      const countdown = document.getElementById("countdown");
  
      messageBox.style.display = "none";
      countdown.style.display = "none";  // Hide the countdown when closing
  }