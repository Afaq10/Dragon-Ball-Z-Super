import { getCharacters } from "./api.js";
import { renderCharacters, showError } from "./ui.js";

export function setupSearch(container) {
    const searchInput = document.getElementById("search");
    const breakPoint = document.getElementById("break");

    if (!searchInput) {
        console.error("Search input field not found in DOM.");
        return;
    }

    let charactersData = [];

    async function fetchData(container) {
        try {
            const data = await getCharacters(1, 58);
            return data.items;
        } catch (err) {
            showError(container , err.message);
            return [];
        }
    }

    fetchData(container).then(items => {
        charactersData = items;
        const initialCharacters = items.slice(0, 4);

        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase().trim();

            if (value === "") {
                renderCharacters(initialCharacters, container);
                breakPoint.style.display = "block";
                return;
            }
            
            const filtered = charactersData.filter(character =>
            character.name.toLowerCase().includes(value));

            if (filtered.length === 0){
                container.innerHTML = `<p>Nothing found for: ${value}</p>`
            } else {
                renderCharacters(filtered, container);
                breakPoint.style.display = "none";
            }
        });
    });
}