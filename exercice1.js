// Inutile de modifier le code suivant

let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

const list = document.querySelector('#listeCourse');
const completeList = document.getElementById('complete-list');

function addItemElement(itemText) {
    const newItem = document.createElement('li');
    const hideElement = document.createElement('a');
    const deleteElement = document.createElement('a');

    newItem.innerHTML = itemText;
    hideElement.innerHTML = 'M ';
    deleteElement.innerHTML = 'S ';
    newItem.prepend(hideElement);
    newItem.prepend(deleteElement);

    list.appendChild(newItem);
    completeList.innerHTML = articles.join(', ');

    hideElement.addEventListener("click", function (e) {
        this.parentElement.style.opacity = '0';
    });

    deleteElement.addEventListener("click", function (e) {
        this.parentElement.remove();
    })
}


// Ajout d'un nouvel élément dans la liste
document.querySelector('button').addEventListener('click', function (e) {
    const item = document.querySelector('input').value;
    if (item.length > 0) {
        articles.push(item);
        addItemElement(item);
    }
});

// Supprime le dernier élément dans la liste
document.querySelector('#delete-last-item').addEventListener('click', function (e) {
    articles.pop();
    list.lastChild.remove();
});


for (let article of articles) {
    addItemElement(article);
}














