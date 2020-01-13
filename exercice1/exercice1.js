let fishList = [
["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"],
["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
["Aulopiformes", "Congridae", "Congre", "Conger conger"],
["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"],
];


function tableReturn(array){
  let i = 1;
  let j = 0;
  let headerData = array[0];
  let currentElement;

  let textTable = document.createElement("table");
  document.body.appendChild(textTable);

  let textHead = document.createElement("thead");
  textTable.appendChild(textHead);

  let textHeadTR = document.createElement("tr");
  textHead.appendChild(textHeadTR);

  let textBody = document.createElement("tbody");
  textTable.appendChild(textBody);

  while (j < headerData.length) {
    currentElement = headerData[j];
    let textTH = document.createElement("th");
    textHeadTR.appendChild(textTH);
    textTH.textContent = currentElement;
    textTH.style.color = "red";
    j++;
  }

  while (i < array.length) {
    currentElement = array[i];
    let textTR = document.createElement("tr");
    textBody.appendChild(textTR);
    let textTD = document.createElement("td");
      textTR.appendChild(textTD);
      textTD.textContent = currentElement;
      i++;
  }
}

// Appel de la fonction
tableReturn(fishList);
