export default function getFormData(formElement) {
    return {
      name: formElement.name.value,
      count: formElement.count.value,
    };
  }