const itemsController = new ItemsController();

const updateItemForm = document.querySelector('#updateItemForm');

let clickedBtnId;
function reply_click(clicked_id) {
     clickedBtnId = clicked_id;
}

updateItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const updateItemName = document.querySelector("#updateItemNameInput");
    const updateItemDescription = document.querySelector("#updateItemkDescription");
    const updateItemImageUrl = document.querySelector("#updateItemImageUrl");

//    itemsController.loadItemsFromLocalStorage();
    itemsController.update(clickedBtnId, updateItemName.value, updateItemDescription.value, updateItemImageUrl.value);

    // Clear the form
//    newItemName.value = '';
//    newItemDescription.value = '';
//    newItemImageUrl.value = '';

//    localStorage.removeItem("itemId");
//    location.href="/items";
})