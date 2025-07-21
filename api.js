const BASE_URL = "https://dragonball-api.com/api";

async function request(endpoint, { method = "GET", body = null } = {}) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json"},
    ...(body && { body: JSON.stringify(body) })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || res.statusText);
  }
  return res.json();
}

export function getCharacters(page = 1, limit = 12) {
  const params = new URLSearchParams({ page, limit });
  return request(`characters?${params}`);
}

export function getCharacterById(id) {
  return request(`characters/${id}`);
}