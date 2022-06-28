// je selectionne le bouton et un paragraphe pour l'affichage

let btn = document.querySelector(".btn");
let song = document.querySelector(".text-song");

// Quand on clique sur le bouton ...
// (utilisation d'une fonctions fléchée)

btn.addEventListener("click", () => {
  // ... on récupére la valeur de l'input ...

  let value = document.getElementById("in").value;

  // je renvoie un entier avec parseInt

  let valueUser = parseInt(value);

  // les parties de la chanson

  let songPart1 = " bolées de cidre sur le mur, ";
  let songPart2 = " bolées sans alcool. ";
  let songPart3 = "Bois en un et au suivant ! ";
  let songPart4 = " bolées de cidre sur le mur.";
  let songPart5 = "Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur."

  // ... et si la valeur est supérieur à 2 et inférieur ou égal à 99 ...

  if (valueUser > 2 && valueUser <= 99) {

    //... on affiche ...
    // (utilisation des littéraux de gabarit)

    song.innerText = `${valueUser} ${songPart1} ${valueUser} ${songPart2} \n${songPart3} ${valueUser - 1
      } ${songPart4}`;

    // sinon si la valeur est égal à 0 ...
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
    song.innerText = "Vous devez choisir une valeur entre 0 et 99";
  }
});
