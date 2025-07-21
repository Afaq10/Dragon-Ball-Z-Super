import { getCharacters } from "./api.js";
import { renderCharacters, appendCharacters, showLoading, showError } from "./ui.js";

let currentPage = 1;
const initialCards = 12;
const cardsLimit = 8;
let isLoading = true;
const breakPoint = document.getElementById("break");


document.addEventListener("DOMContentLoaded", init);

async function init() {
    const container = document.getElementById("characters");

    await loadCharacters(container, initialCards, currentPage);


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(async (entry) => {
            if (entry.isIntersecting && !isLoading) {
                await loadCharacters(container, cardsLimit, currentPage);
            }
        });
    }, {
        threshold: 0.1,
    });
    observer.observe(breakPoint);
}


async function loadCharacters(container, limit, page) {
    try {
        if (page === 1) {
        showLoading(container, true);
        const data = await getCharacters(page, limit);
        renderCharacters(data.items, container);
        currentPage = 2;
    } else {
        const data = await getCharacters(page, limit);
        appendCharacters(data.items, container);
        currentPage++;
        if (data.items.length < limit) {
            breakPoint.style.display = "none";
        }
    }
    } catch (err) {
        showError(container, err.message);
    } finally {
        isLoading = false;
        showLoading(container, false);
    }
}

