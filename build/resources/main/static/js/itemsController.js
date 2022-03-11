class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
//        this.currentId = currentId;
    }

    addItem(name, description, imageUrl) {
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };
        
        this.items.push(item);
        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
        this.save({name, description,imageUrl });
        console.log("Saved Item: " + this.items);
    }

    loadItemsFromLocalStorage(){
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems);
            for (let i=0; i<items.length; i++) {
                let item = items[i];
                this.items.push(item);
            }
        }
    }

    save({name, description, imageUrl}){
        const data = { name,  description, imageUrl };

        fetch('http://localhost:8080/item', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {console.log('Success:', data);
        })
        .catch((error) => {console.error('Error:', error);
        });
    }

     update(id, name, description, imageUrl){
        const data = { name, description, imageUrl };

        fetch('http://localhost:8080/item/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
     }

    delete(itemId){
         fetch('http://localhost:8080/item/' + itemId, {
             method: 'DELETE',
             headers: {
                 'Content-type': 'application/json'
             }
         })
         .then(response => console.log("Success:", response))
         .catch((error) => {
             console.error("Error:", error);
         })
    }


    findById(itemId){
        //TODO implement this method
    }

}

// test
// const instance = new ItemController();
// instance.addItem("Cake", "Strawberry","image.png");
// instance.addItem("Cakessss", "Strawberry","image.png");
// console.log(instance);