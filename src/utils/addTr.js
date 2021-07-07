export default function addTr(event, key, arrayEssence) {
  const formEssence = event.target;
  arrayEssence.push({
    fromAccountName: formEssence.from.value,
    toAccountName: formEssence.to.value,
    count: formEssence.count.value,
    comment: formEssence.comment.value,
  });
  let serialArrayEssence = JSON.stringify(arrayEssence);
  localStorage.setItem(key, serialArrayEssence);
  formEssence.reset();
  return arrayEssence;
}
