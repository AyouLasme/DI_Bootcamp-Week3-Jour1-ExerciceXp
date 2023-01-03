/**
 * @author: Lasme Ayou Emeline
 * @description:
 */

/********************************** Exercice1 : Debut *********************************** */

// Recuperation du div et affichage dans la console
const container = document.querySelector('#container');
  console.log(container);

  // Changez le nom "Pete" en "Richard"
  const liste = document.querySelectorAll('.list li');
  liste.forEach((li) => {
    if (li.textContent === 'Pete') {
      li.textContent = 'Richard';
    }
  });

  // Remplacez chaque prénom dans les deux <ul> par votre nom
  const nom = 'Your Name';

  
  liste.forEach((li) => {
    li.textContent = nom;
  });

  // Supprimez le <li> qui contient le nœud de texte "Sarah"
  liste.forEach((li) => {
    if (li.textContent === 'Sarah') {
      li.remove();
    }
  });

  // Bonus : Ajoutez une classe appelée student_list aux deux <ul>
  const eList = document.querySelectorAll('.list');
  eList.forEach((list) => {
    list.classList.add('student_list');
  });

  // Bonus : Ajoutez les classes university et attendance au premier <ul>
  const premiereListe = document.querySelector('.list');
  premiereListe.classList.add('university', 'attendance');

  /********************************** Exercice1 : Fin *********************************** */


/********************************** Exercice2 : Debut *********************************** */

  // sélectionner la div
const div = document.querySelector('div');

// ajouter une couleur d'arrière-plan "bleu clair" et un peu de rembourrage à la <div>
div.style.backgroundColor = '#82ccdd';
div.style.padding = '10px';

// cacher le premier élément li
const premierLi = document.querySelector('li');
premierLi.style.display = 'none';

// ajouter une bordure au second élément li
const deuxiemeLi = document.querySelectorAll('li')[1];
deuxiemeLi.style.border = '1px solid orangered';

// modifier la taille de la police de tout le corps
document.body.style.fontSize = '50px';

// bonus : afficher une alerte si la couleur de fond de la div est "bleu clair"
if (div.style.backgroundColor === '#82ccdd') {
  alert(`Bonjour ${premierLi.textContent} et ${deuxiemeLi.textContent}`);
}

/********************************** Exercice2 : Fin *********************************** */


/********************************** Exercice3 : Debut *********************************** */

// sélectionner la div
const div = document.querySelector('#navBar');

//Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , à l'aide de la setAttribut eméthode .
div.setAttribute('id', 'socialNetworkNavigation');

//  créez une nouvelle <li> balise (utilisez la createElement méthode)
const nouvelleLi = document.createElement('li');

// créer un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
const nouveauNoeudDeText = document.createTextNode('Déconnexion');

// ajouter le nœud de texte au nœud de liste nouvellement créé
nouvelleLi.appendChild(nouveauNoeudDeText);

// ajouter ce nœud de liste mis à jour à la liste non ordonnée
const listeNonOrdonnée = document.querySelector('ul');
listeNonOrdonnée.appendChild(newLi);

// Bonus : afficher le texte des premier et dernier éléments li de la liste
const premiereLi = ul.firstElementChild;
const derniereLi = ul.lastElementChild;
console.log(premiereLi.textContent); // afficher "Profile"
console.log(derniereLi.textContent); // afficher "Déconnexion"

/********************************** Exercice3 : Fin *********************************** */



/********************************** Exercice4 : Debut *********************************** */

// créer le tableau de livres
const allBooks = [
    {
      title: 'Cinquante Nuance De Grey',
      author: ' E. L. James',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dnz7XeMKTIJ3RRqkHy-IZ34lMZktwf_DSGLMm-1A&s',
      alreadyRead: true
    },
    {
      title: 'Chronique du tueur de roi',
      author: 'J. K. Rowling',
      image: 'https://www.babelio.com/couv/cvt_Chronique-du-tueur-de-roi-2eme-journee-Partie-1--_1113.jpg',
      alreadyRead: false
    }
  ];
  
  // sélectionner le div
  const div = document.querySelector('.listBooks');
  
  // parcourir le tableau de livres et générer du HTML pour chaque livre
  allBooks.forEach((book) => {
    // créer le HTML pour chaque livre
    const livreHtml = `
      <div class="book">
        <h2>${book.title}</h2>
        <p>Written by ${book.author}</p>
        <img src="${book.image}" width="100" />
        <p>${book.alreadyRead ? 'Already read' : 'Not read yet'}</p>
      </div>
    `;
  
    // ajouter le HTML généré au div
    div.innerHTML += livreHtml;
  });
  
  // sélectionner tous les éléments p du div
  const tousLesElements = div.querySelectorAll('p');
  
  // mettre en surbrillance en rouge tous les éléments p qui indiquent que le livre a déjà été lu
  tousLesElements.forEach((p) => {
    if (p.textContent === 'Already read') {
      p.style.color = 'red';
    }
  });

  /********************************** Exercice4 : Fin *********************************** */

  
  
