// Creating function to display the main screen
function displayTheater() {
  let container = document.createElement("div");
  document.body.appendChild(container);
  let mainScreen = document.createElement("div");
  container.appendChild(mainScreen);

  let firstTitle = document.createElement("h1");
  firstTitle.textContent = "Cinéma Le Dauphin";
  mainScreen.appendChild(firstTitle);
  let para = document.createElement("p");
  para.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)";
  mainScreen.appendChild(para);

  let seeFilmButton = document.createElement("input");
  seeFilmButton.type = "button";
  seeFilmButton.value = "Voir les films à l'affiche cette semaine";
  container.appendChild(seeFilmButton);
}
// calling the function
displayTheater();


// 2.2
// Array for differents movies
let movieArray = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "VF"],
  ["UN VIOLENT DESIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "VF"]
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "VOSTFR"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "VOSTFR"]
];


// 2.3
// function to display array
function createReturnTable(array) {
  let i = 1;
  let j = 0;

  let headerData = array[0];
  let currentElement;
  let currentElement2;

  let textTable = document.createElement("table");
  document.body.appendChild(textTable);

  let textHead = document.createElement("thead");
  textTable.appendChild(textHead);

  let textHeadTR = document.createElement("tr");
  textHead.appendChild(textHeadTR);
  let textTH;

  let textBody = document.createElement("tbody");
  textTable.appendChild(textBody);
  let textTR;
  let textTD;

  while (j < headerData.length) {
    currentElement = headerData[j];
    textTH = document.createElement("th");
    textHeadTR.appendChild(textTH);
    textTH.textContent = currentElement;
    j++;
  }

  while (i < array.length) {
    currentElement = array[i];
    textTR = document.createElement("tr");
    textBody.appendChild(textTR);
    j = 0;

    while (j < currentElement.length) {
      currentElement2 = currentElement[j];
      textTD = document.createElement("td");
      textTR.appendChild(textTD);
      textTD.textContent = currentElement2;
      j++;
    }
    i++;
  }
};


// 2.4

seeFilmButton.addEventListener("click", function() {
    container.style.display = "none";
    createReturnTable(movieArray);
});
