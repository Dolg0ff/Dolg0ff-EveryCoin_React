export default function add(event, key, arrayEssence) {
    const formEssence = event.target;
    if(formEssence.name.value !== '' && formEssence.count.value !== 0){
      arrayEssence.push({
      name: formEssence.name.value,
      count: formEssence.count.value,
    });
    }
    else if(formEssence.name.value === '' || formEssence.from.value === '' || formEssence.to.value === ''){
      alert('Введите название аккаунта');
    }
    else if(formEssence.from.value !== '' && formEssence.to.value !== '' && formEssence.count.value !== 0){
      arrayEssence.push({
      fromEssenceName: formEssence.from.value,
      toEssenceName: formEssence.to.value,
      count: formEssence.count.value,
      comment: formEssence.comment.value,
    });
    }
    else if(formEssence.count.value === 0){
      alert('Введите сумму транзакции');
    }
    let serialArrayEssence = JSON.stringify(arrayEssence);
    localStorage.setItem(key, serialArrayEssence);
    formEssence.reset();
    return arrayEssence;
  }