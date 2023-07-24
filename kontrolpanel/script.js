function showTab(tabName) {
    const tabs = document.getElementsByClassName("tab");
    for (const tab of tabs) {
      tab.classList.remove("active");
    }
  
    const contents = document.getElementsByClassName("content");
    for (const content of contents) {
      content.style.display = "none";
    }
  
    document.getElementById(tabName + "Content").style.display = "flex";
    document
      .querySelector('.tab[data-tab="' + tabName + '"]')
      .classList.add("active");
  }
  
  const numbersContent = document.getElementById("numbersContent");
  for (let i = 1; i <= 31; i++) {
    const numberContainer = document.createElement("div");
    numberContainer.className = "number-container";
    numbersContent.appendChild(numberContainer);
  
    const numberDiv = document.createElement("div");
    numberDiv.className = "number-content boxborder";
    numberDiv.textContent = i;
    numberContainer.appendChild(numberDiv);
  
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "bottom";
    bottomDiv.textContent = "Ready";
    numberContainer.appendChild(bottomDiv);
  }
  
  // Create month elements
  const monthsContent = document.getElementById("monthsContent");
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylul",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  for (const month of months) {
    const monthContainer = document.createElement("div");
    monthContainer.className = "months-container";
    monthsContent.appendChild(monthContainer);
  
    const monthDiv = document.createElement("div");
    monthDiv.className = "months-content boxborder";
    monthDiv.textContent = month;
    monthContainer.appendChild(monthDiv);
  
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "bottom";
    bottomDiv.textContent = "Ready";
    monthContainer.appendChild(bottomDiv);
  }
  
  function startCountdown(container) {
    const bottomElement = container.querySelector(".bottom");
    const backgroundEl = container.querySelector(".boxborder");
    bottomElement.style.backgroundColor = "#4733f7";
    backgroundEl.style.backgroundColor = "#4733f7";
    backgroundEl.style.color = "#1e1e1e";
  
    let count = 240;
    const countdownInterval = setInterval(() => {
      const minutes = Math.floor(count / 60);
      const seconds = count % 60;
      bottomElement.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      count--;
  
      if (count < 0) {
        clearInterval(countdownInterval);
        bottomElement.innerText = "Ready";
  
        removeInlineStyles(bottomElement);
        removeInlineStyles(backgroundEl);
  
        container.addEventListener("click", handleClick);
      }
    }, 1000);
  
    container.removeEventListener("click", handleClick);
  }
  
  function handleStartAll() {
    const numberContainers = document.querySelectorAll(".number-container");
  
    for (let i = 0; i < numberContainers.length; i++) {
      const container = numberContainers[i];
      const bottomElement = container.querySelector(".bottom");
  
      if (bottomElement.hasAttribute("style")) continue;
  
      startCountdown(container);
    }
  
    const monthContainers = document.querySelectorAll(".months-container");
  
    for (let i = 0; i < monthContainers.length; i++) {
      const container = monthContainers[i];
      const bottomElement = container.querySelector(".bottom");
  
      if (bottomElement.hasAttribute("style")) continue;
  
      startCountdown(container);
    }
  }
  
  function removeInlineStyles(element) {
    element.removeAttribute("style");
  }
  
  const numberContainers = document.querySelectorAll(".number-container");
  
  numberContainers.forEach((container) => {
    container.addEventListener("click", handleClick);
  });
  
  function handleClick() {
    startCountdown(this);
  }
  
  const monthContainers = document.querySelectorAll(".months-container");
  
  monthContainers.forEach((container) => {
    container.addEventListener("click", handleClick);
  });
  