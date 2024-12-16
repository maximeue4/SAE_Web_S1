// menu tablette ou téléphone

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})

// ajouter au panier dans le local storage

localStorage.setItem("panier", '');

function AjouterPanier(nb_produits) {
    localStorage.panier += nb_produits+',';
}
