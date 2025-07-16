export function renderCharacters(char, container) {
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  char.forEach(c => {
    const div = document.createElement("div");
    div.id = `${c.id}`;
    div.className = "card";
    div.innerHTML = `
    <img class= "char-img" src="${c.image}" alt="${c.name}" />
    <div class="inner-card">
    <h2>${c.name}</h2>
    <p><span class="key">Gender:</span> ${c.gender}</p>
    <p><span class="key">Race:</span> ${c.race}</p>
    <p><span class="key">Base KI:</span> ${c.ki}</p>
    <p><span class="key">Max KI:</span> ${c.maxKi}</p>
    <p><span class="key">Affiliation:</span> ${c.affiliation}</p>
    </div>
    `;
    frag.appendChild(div);
  });
  container.appendChild(frag);
}

export function showLoading(container, loading) {
  let spinnerOverlay = document.querySelector(".spinner-overlay");
  if (loading) {
    if(!spinnerOverlay) {
      spinnerOverlay = document.createElement("div");
      spinnerOverlay.className = "spinner-overlay";
      spinnerOverlay.innerHTML = `<div class="spinner"><img src="../assets/logo.png" alt="Loading..."></div>`;
      document.body.appendChild(spinnerOverlay);
    }
  } else {
    if (spinnerOverlay) {
      spinnerOverlay.style.opacity = "0";
      setTimeout(() => spinnerOverlay.remove(), 300);
    }
  }
}

export function showError(container, msg) {
  container.textContent = `Error: ${msg}`;
}