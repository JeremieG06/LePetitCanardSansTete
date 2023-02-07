let nomProduit = document.querySelector(".nomProduit");
let categorie = document.querySelector(".categorie");
let quantite = document.querySelector(".quantite");
let paht = document.querySelector(".paht");
let margeht = document.querySelector(".margeht");
let pvht = document.querySelector(".pvht");
let pvttc = document.querySelector(".pvttc");
let tauxAlcool = document.querySelector(".tauxAlcool");
let tva = document.querySelector(".tva");
let buttonAjouter = document.querySelector(".buttonAjouter");
let form = document.querySelector(".form");
let copynouvelArticle = document.querySelector(".copynouvelArticle");
let extra = document.querySelector(".extra");
let table = document.querySelector("table");
let updateInput1 = document.querySelector(".updateInput1");
let updateInput2 = document.querySelector(".updateInput2");
let updateInput3 = document.querySelector(".updateInput3");
let updateInput4 = document.querySelector(".updateInput4");
let updateInput5 = document.querySelector(".updateInput5");
let updateInput6 = document.querySelector(".updateInput6");

categorie.addEventListener("input", function () {
  if (categorie.value == "Boisson Alcoolisée") {
    tauxAlcool.style.display = "";
  } else {
    tauxAlcool.style.display = "none";
  }
});

//remplissage du formulaire
form.addEventListener("submit", function (e) {
  // Faire en sorte que le formulaire ne recharge pas la page
  e.preventDefault();

  //création de l'array
  let articles = [];

  //récupération des données
  let data = new FormData(form);
  let article = {
    nomProduit: data.get("nomProduit"),
    categorie: data.get("categorie"),
    quantite: data.get("quantite"),
    paht: data.get("paht"),
    pvht: data.get("pvht"),
    pvttc: data.get("pvttc"),
    tva: data.get("tva"),
    tauxAlcool: data.get("tauxAlcool"),
  };

  // calcul de la marge
  article.margeht = article.pvht - article.paht;

  //remplissage auto du taux de tva
  if (article.categorie == "Boisson Alcoolisée") {
    article.tva = "20%";
  } else if (article.categorie == "Boisson Non-Alcoolisée") {
    article.tva = "5.5%";
  } else article.tva = "10%";

  //calcul de la tva
  if (article.categorie == "Boisson Alcoolisée") {
    article.pvttc = article.pvht * 1.2;
  } else if (article.categorie == "Boisson Non-Alcoolisée") {
    article.pvttc = article.pvht * 1.055;
  } else article.pvttc = article.pvht * 1.1;

  //remplissage de l'array
  articles.push(article);

  // Vider l'input
  e.target.reset();

  function displayItem() {
    //remplissage du tableau
    articles.forEach(function (article) {
      let tr = document.createElement("tr");

      //table data
      let nomProduit = document.createElement("td");
      nomProduit.textContent = article.nomProduit;
      tr.appendChild(nomProduit);

      let categorie = document.createElement("td");
      categorie.textContent = article.categorie;
      tr.appendChild(categorie);

      let quantite = document.createElement("td");
      quantite.textContent = article.quantite;
      if (article.quantite <= 5) {
        quantite.style.backgroundColor = "red";
      } else {
        quantite.style.backgroundColor = "white";
      }
      tr.appendChild(quantite);

      let paht = document.createElement("td");
      paht.textContent = `${article.paht} €`;
      tr.appendChild(paht);

      let pvht = document.createElement("td");
      pvht.textContent = `${article.pvht} €`;
      tr.appendChild(pvht);

      let margeht = document.createElement("td");
      margeht.textContent = `${article.margeht} €`;
      tr.appendChild(margeht);

      let tva = document.createElement("td");
      tva.textContent = article.tva;
      tr.appendChild(tva);

      let pvttc = document.createElement("td");
      pvttc.textContent = `${article.pvttc} €`;
      tr.appendChild(pvttc);

      let tauxAlcool = document.createElement("td");
      tauxAlcool.textContent = `${article.tauxAlcool}%`;
      tr.appendChild(tauxAlcool);

      //creation des boutons
      let boutonModif = document.createElement("button");
      boutonModif.textContent = "Modifier";
      boutonModif.className = "modif";

      // bouton modifier
      boutonModif.addEventListener("click", function () {
        nomProduit.innerHTML = `<input type="text" name="nomProduit" value=${nomProduit.valueInput} class="updateInput1" placeholder="Votre produit"/>`;
        categorie.innerHTML = `<select name="categorie" class="updateInput2">
          <option value="Boisson Alcoolisée">Boisson Alcoolisée</option>
          <option value="Boisson Non-Alcoolisée">Boisson Non-Alcoolisée</option>
          <option value="Plat/Dessert">Plat/Dessert</option>
        </select>`;
        quantite.innerHTML = `<input type="number" name="quantite" min="0" value=${quantite.valueInput} class="updateInput3" placeholder="En stock" />`;
        paht.innerHTML = `<input type="number" name="paht" min="O" value=${paht.valueInput} class="updateInput4" placeholder="Prix d'Achat HT" /> €`;
        pvht.innerHTML = `<input type="number" name="pvht" min="O" value=${pvht.valueInput} class="updateInput5" placeholder="Prix de Vente HT" /> €`;
        tauxAlcool.innerHTML = `<input
          type="number"
          name="tauxAlcool"
          min="0" value=${tauxAlcool.valueInput} class="updateInput6" placeholder="Taux d'Alcool" />%`;

        updateInput1.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            if (!updateInput1.value) {
              alert("Veuillez entrer votre article.");
            } else {
              nomProduit.innerHTML = updateInput1.value;
              nomProduit.valueInput = updateInput1.value;
              categorie.innerHTML = updateInput2.value;
              categorie.valueInput = updateInput2.value;
              quantite.innerHTML = updateInput3.value;
              quantite.valueInput = updateInput3.value;
              paht.innerHTML = updateInput4.value;
              paht.valueInput = updateInput4.value;
              pvht.innerHTML = updateInput5.value;
              pvht.valueInput = updateInput5.value;
              tauxAlcool.innerHTML = updateInput6.value;
              tauxAlcool.valueInput = updateInput6.value;
            }
          }
        });
        updateInput2.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            if (!updateInput2.value) {
              alert("Veuillez entrer votre article.");
            } else {
              nomProduit.innerHTML = updateInput1.value;
              nomProduit.valueInput = updateInput1.value;
              categorie.innerHTML = updateInput2.value;
              categorie.valueInput = updateInput2.value;
              quantite.innerHTML = updateInput3.value;
              quantite.valueInput = updateInput3.value;
              paht.innerHTML = updateInput4.value;
              paht.valueInput = updateInput4.value;
              pvht.innerHTML = updateInput5.value;
              pvht.valueInput = updateInput5.value;
              tauxAlcool.innerHTML = updateInput6.value;
              tauxAlcool.valueInput = updateInput6.value;
            }
          }
        });
        updateInput3.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            if (!updateInput3.value) {
              alert("Veuillez entrer votre article.");
            } else {
              nomProduit.innerHTML = updateInput1.value;
              nomProduit.valueInput = updateInput1.value;
              categorie.innerHTML = updateInput2.value;
              categorie.valueInput = updateInput2.value;
              quantite.innerHTML = updateInput3.value;
              quantite.valueInput = updateInput3.value;
              paht.innerHTML = updateInput4.value;
              paht.valueInput = updateInput4.value;
              pvht.innerHTML = updateInput5.value;
              pvht.valueInput = updateInput5.value;
              tauxAlcool.innerHTML = updateInput6.value;
              tauxAlcool.valueInput = updateInput6.value;
            }
          }
        });
        updateInput4.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            if (!updateInput4.value) {
              alert("Veuillez entrer votre article.");
            } else {
              nomProduit.innerHTML = updateInput1.value;
              nomProduit.valueInput = updateInput1.value;
              categorie.innerHTML = updateInput2.value;
              categorie.valueInput = updateInput2.value;
              quantite.innerHTML = updateInput3.value;
              quantite.valueInput = updateInput3.value;
              paht.innerHTML = updateInput4.value;
              paht.valueInput = updateInput4.value;
              pvht.innerHTML = updateInput5.value;
              pvht.valueInput = updateInput5.value;
              tauxAlcool.innerHTML = updateInput6.value;
              tauxAlcool.valueInput = updateInput6.value;
            }
          }
        });
        updateInput5.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            if (!updateInput5.value) {
              alert("Veuillez entrer votre article.");
            } else {
              nomProduit.innerHTML = updateInput1.value;
              nomProduit.valueInput = updateInput1.value;
              categorie.innerHTML = updateInput2.value;
              categorie.valueInput = updateInput2.value;
              quantite.innerHTML = updateInput3.value;
              quantite.valueInput = updateInput3.value;
              paht.innerHTML = updateInput4.value;
              paht.valueInput = updateInput4.value;
              pvht.innerHTML = updateInput5.value;
              pvht.valueInput = updateInput5.value;
              tauxAlcool.innerHTML = updateInput6.value;
              tauxAlcool.valueInput = updateInput6.value;
            }
          }
        });
        updateInput6.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            if (!updateInput6.value) {
              alert("Veuillez entrer votre article.");
            } else {
              nomProduit.innerHTML = updateInput1.value;
              nomProduit.valueInput = updateInput1.value;
              categorie.innerHTML = updateInput2.value;
              categorie.valueInput = updateInput2.value;
              quantite.innerHTML = updateInput3.value;
              quantite.valueInput = updateInput3.value;
              paht.innerHTML = updateInput4.value;
              paht.valueInput = updateInput4.value;
              pvht.innerHTML = updateInput5.value;
              pvht.valueInput = updateInput5.value;
              tauxAlcool.innerHTML = updateInput6.value;
              tauxAlcool.valueInput = updateInput6.value;
            }
          }
        });
      });

      let boutonSupp = document.createElement("button");
      boutonSupp.textContent = "Supprimer";
      boutonSupp.addEventListener("click", () => {
        if (confirm("Voulez vous supprimer l'article ?")) {
          tr.remove();
        }
      });

      let editDataBouton = document.createElement("td");
      editDataBouton.appendChild(boutonModif);
      tr.appendChild(editDataBouton);

      let suppDataBouton = document.createElement("td");
      suppDataBouton.appendChild(boutonSupp);
      tr.appendChild(suppDataBouton);

      table.appendChild(tr);
    });
  }

  //Getting the data back
  let stock = JSON.parse(localStorage.getItem("Articles en stock")) || [];

  // Afficher dans l'html les informations du tableau
  displayItem();
  //adding new line to the local storage listing
  stock.push(article);

  console.log(stock);

  //adding to local storage again to update it
  localStorage.setItem("Articles en stock", JSON.stringify(stock));
});

//extra button function
extra.addEventListener("click", function () {
  let audio = new Audio("./media/quack.mp3");
  audio.play();
});
