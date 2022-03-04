// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);

function addItemCard(item){
    const itemHtml = '<div class="card" style="width: 20rem;">\n' +
    '   <img src="'+item.iamgeUrl+'" width="300" height="250"  alt="product image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">'+item.name+'</h5>\n' +
    '        <p class="card-text">'+item.description+'</p>\n' +
    '        <a href="#" class="btn btn-primary">Add</a>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHtml;
}

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Ruffles Chicken',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(let i = 0; i < itemsController.items.length; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

// loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();



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
