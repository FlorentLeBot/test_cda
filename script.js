// je selectionne le bouton et un paragraphe pour l'affichage

let btn = document.querySelector(".btn");
let song = document.querySelector(".text-song");


btn.addEventListener("click", () => {
  // ... je récupére la valeur de l'input ...

  let value = document.getElementById("in").value;

  // je renvoie un entier avec parseInt

  let valueUser = parseInt(value);

  // les parties de la chanson

  let songPart1 = " bolées de cidre sur le mur, ";
  let songPart2 = " bolées sans alcool. ";
  let songPart3 = "Bois en un et au suivant ! ";
  let songPart4 = " bolées de cidre sur le mur.";
  let songPart5 = "Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur."

  // création d'un élément i 

  if (typeof fa === 'undefined') {
    let fa = document.createElement('i');
    fa.classList.add("fa-solid");
    fa.classList.add("fa-music");
    fa.setAttribute('id', 'fa')
    new_elt = fa
    new_elt.style.color = 'white';
    document.getElementById('div_parent').appendChild(new_elt);
  }

  // ... et si la valeur est supérieur à 2 et inférieur ou égal à 99 ...


  if (valueUser > 2 && valueUser <= 99) {

    //... on affiche ...
    // (utilisation des littéraux de gabarit)

    song.innerText = `${valueUser} ${songPart1} ${valueUser} ${songPart2} \n${songPart3} ${valueUser - 1
      } ${songPart4}`;

  } else if (valueUser == 0) {

    //... on affiche ...
    // (utilisation de la concaténation)

    valueUser = "Plus de ";
    song.innerText =
      valueUser +
      songPart1 +
      "\n" +
      songPart5;

    // sinon si la valeur est égale à 1 ...

  } else if (valueUser == 1) {

    //... on affiche ...
    // (utilisation de replace pour enlever le s)
    // il n'y a qu'un seul s dans la chaîne de caractère du coup j'ai utilisé replace sinon j'aurai fait une variable "s"

    song.innerText = `${valueUser} ${songPart1.replace(
      "s",
      ""
    )} ${valueUser} ${songPart2.replace(
      "s",
      ""
    )} \n${songPart3} ${String(valueUser).replace("1", "Plus de ")} ${songPart4}`;

    // sinon si la valeur est égale à 2 ...

  } else if (valueUser == 2) {
    song.innerText = `${valueUser} ${songPart1} ${valueUser} ${songPart2} \n${songPart3} ${valueUser - 1
      } ${songPart4.replace(
        "s",
        "")}`;

    // sinon on affiche ...

  } else {

    // je supprime l'élément i

    let elem = document.getElementById('fa');
    let del = elem.parentNode.removeChild(elem);

    song.innerText = "Vous devez choisir une valeur entre 0 et 99";
  }
});


const container = document.querySelector(".box");
const form = document.querySelector(".form")
const label = document.querySelector("label")
const mainColor = "#157573";
const secondaryColor = "#213745";
const textColor = "rgba(245, 195, 110, 1)"

// applique du style au survole

container.addEventListener("mouseenter", () => {
  container.style.background = mainColor;
  form.style.background = mainColor;
  label.style.background = mainColor;
  label.style.color = textColor;
});

// et en dehors

container.addEventListener("mouseout", () => {
  container.style.background = secondaryColor;
  form.style.background = secondaryColor;
  label.style.background = secondaryColor;
});

// je mets des bordures après 2 secondes

setTimeout(() => {
  container.style.borderRadius = "300px";
}, 2000);
