// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);

function addItemCard(item){
    const itemHtml = '<div class="card" style="width: 20rem;">\n' +
    '   <img src="'+item.imageUrl+'" width="300" height="250"  alt="product image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">'+item.name+'</h5>\n' +
    '        <p class="card-text">'+item.description+'</p>\n' +
    '        <a href="#" class="btn btn-primary btn-delete" id="'+item.id+'">Delete</a>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHtml;

    let deleteButton = document.getElementsByClassName("btn-delete");
    for(let i = 0; i < deleteButton.length; i++) {
        let deleteBtn = deleteButton[i];
        deleteBtn.addEventListener("click", () => {
//            let item = deleteBtn.parentElement.parentElement;
//            console.log(deleteBtn.id);
            itemsController.delete(deleteBtn.id);
            location.reload();
        })
    }

//    let updateButton = document.getElementsByClassName("btn-update");
//    for(let i = 0; i < updateButton.length; i++) {
//        let updateBtn = updateButton[i];
//        updateBtn.addEventListener("click", () => {
////            let item = updateBtn.parentElement.parentElement;
//            // Get the id of the item selected to be updated and store it in localStorage
////            localStorage.setItem("itemId", JSON.stringify(item.id));
////            itemsController.update(updateBtn.id, )
//
//            // Redirect to update page
////            location.href="/form";
//        })
//    }
}

//function loadStorageSampleData(){
//    if(!localStorage.getItem("items")){
//        const sampleItems = [{'name':'juice',
//        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
//        'description':'Orange and Apple juice fresh and delicious'},
//        {'name':'Ruffles Chicken',
//        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
//        'description':'Ruffles Potato Chips - Chicken'}];
//        localStorage.setItem("items", JSON.stringify(sampleItems));
//    }
//}

function loadCardsListFromItemsController(){
    for(let i = 0; i < itemsController.items.length; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

// ***Function for adding products/posts from localStorage/Database***
function loadItemsFromDatabase() {
    fetch('http://localhost:8080/item/all')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            itemsController.items.push(data[i]);
        }
    })
    .then(() => {
        loadCardsListFromItemsController();
    })
    .catch((error) => {
        console.log('Error: ', error);
    })
}

loadItemsFromDatabase();


// const it = {
//     name: 'Cakessss',
//     description: 'Strawberry',
//     imageUrl: 'image.png'
// };

// const instance = new ItemController();
// instance.addItem("Cake", "Strawberry","image.png");
// instance.addItem("Cakessss", "Strawberry","image.png");
// console.log(instance);

// addItemCard(instance.items[0]);
