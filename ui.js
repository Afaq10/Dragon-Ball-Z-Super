export function renderCharacters(char, container) {
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  char.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <img src="${c.image}" alt="${c.name}" />
    <h3>${c.name}</h3>
    `;
    frag.appendChild(div);
  });
  container.appendChild(frag);
}

export function showLoading(container, loading) {
  container.innerContent = leading ? "Loading..." : "";
}

export function showError(container, msg) {
  container.innerContent = `Error: ${msg}`;
}