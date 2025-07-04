import { getCharacters } from "./api.js";
import { renderCharacters, showLoading, showError } from "./ui.js";


document.addEventListener("DOMContentLoaded", init);

async function init() {
    const container = document.getElementById("characters");
    try {
        showLoading(container, true);
        const data = await getCharacters();
        renderCharacters(data.items, container);
    } catch (err) {
        showError(container, err.message);
    } finally {
        showLoading(container, false);
    }
}
