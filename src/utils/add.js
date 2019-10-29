export default function add(event, key, arrayEssence) {
  const formEssence = event.target;
  arrayEssence.push({
    name: formEssence.name.value,
    balance: formEssence.count.value,
  });
  let serialArrayEssence = JSON.stringify(arrayEssence);
  localStorage.setItem(key, serialArrayEssence);
  formEssence.reset();
  return arrayEssence;
}
