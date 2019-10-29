export default function updateLocalStorage(key, arrayEssence) {
    const serialArrayEssence = JSON.stringify(arrayEssence);
    localStorage.setItem(key, serialArrayEssence);
  }