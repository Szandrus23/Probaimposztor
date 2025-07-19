const szavak = ["alma", "körte", "nap", "autó", "kutya", "hegy", "tenger", "piros", "hó", "villamos"];
let szerepek = [];
let impostorIndex = -1;

function startGame() {
  const playerCount = parseInt(document.getElementById("playerCount").value);
  if (playerCount < 3 || playerCount > 10) {
    alert("3 és 10 közötti játékos szám szükséges!");
    return;
  }

  const word = szavak[Math.floor(Math.random() * szavak.length)];
  impostorIndex = Math.floor(Math.random() * playerCount);
  szerepek = [];

  for (let i = 0; i < playerCount; i++) {
    if (i === impostorIndex) {
      szerepek.push({ id: i + 1, text: "Te vagy az IMPOSZTOR! Nem ismered a szót!" });
    } else {
      szerepek.push({ id: i + 1, text: `A szó: ${word}` });
    }
  }

  showCards();
}

function showCards() {
  const gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";

  szerepek.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.textContent = `Játékos ${s.id} mutatása`;
    btn.onclick = () => {
      alert(s.text);
      btn.disabled = true;
    };
    gameDiv.appendChild(btn);
    gameDiv.appendChild(document.createElement("br"));
  });

  document.getElementById("revealBtn").style.display = "inline-block";
  document.getElementById("newGameBtn").style.display = "inline-block";
}

function revealImpostor() {
  alert(`Az IMPOSTOR a ${impostorIndex + 1}. játékos volt!`);
}
