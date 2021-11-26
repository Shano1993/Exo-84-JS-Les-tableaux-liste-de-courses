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

let listeCourse = document.getElementById('listeCourse');

for (let i = 0; i < articles.length; i++) {
    let elemLi = document.createElement('li');
    elemLi.innerHTML = articles[i];
    listeCourse.appendChild(elemLi);
}


let buttonDel = document.createElement('button');
buttonDel.innerHTML = "Supprimer";
listeCourse.prepend(buttonDel);

let buttonAdd = document.createElement('button');
buttonAdd.innerHTML = "Ajouter";
listeCourse.prepend(buttonAdd);

let champ = document.createElement('input');
listeCourse.prepend(champ);

buttonAdd.addEventListener("click", function () {

})

buttonDel.addEventListener("click", function () {

})























