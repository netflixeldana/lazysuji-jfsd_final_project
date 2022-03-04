const itemsController = new ItemsController(0);

const newItemForm = document.querySelector('#newItemForm');

newItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newItemName = document.querySelector("#newItemNameInput");
    const newItemDescription = document.querySelector("#newItemkDescription");
    const newItemImageUrl = document.querySelector("#newItemImageUrl");

    itemsController.loadItemsFromLocalStorage();
    itemsController.addItem(newItemName.value, newItemDescription.value, newItemImageUrl.value);

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';
    newItemImageUrl.value = '';
})