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
  container.innerContent = loading ? "Loading..." : "";
}

export function showError(container, msg) {
  container.innerContent = `Error: ${msg}`;
}