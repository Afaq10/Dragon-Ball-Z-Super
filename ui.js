export function renderCharacters(char, container) {
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  char.forEach(c => {
    const div = document.createElement("div");
    div.id = `${c.id}`;
    div.className = "card";
    div.innerHTML = `
    <img class= "char-img" src="${c.image}" alt="${c.name}" />
    <h2>${c.name}</h2>
    <p>Gender: ${c.gender}</p>
    <p>Race: ${c.race}</p>
    <p>Base KI: ${c.ki}</p>
    <p>Max KI: ${c.maxKi}</p>
    <p>Affiliation: ${c.affiliation}</p>
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