// Declaration des variables et constantes
const quizzTittle = document.querySelector(".q-title");
const quizzBox = document.querySelector(".box");
const illustrationBox = document.querySelector(".illustration");
const qrBox = document.querySelector(".QR");
const question = document.querySelector(".question");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalButton = document.querySelector(".modal-btn");
const selectedArea = [
  document.querySelector(".area-1"),
  document.querySelector(".area-2"),
  document.querySelector(".area-3"),
];
const selectedResponse = [
  document.querySelector("#response-1"),
  document.querySelector("#response-2"),
  document.querySelector("#response-3"),
];
const response = [
  document.querySelector(".response-1"),
  document.querySelector(".response-2"),
  document.querySelector(".response-3"),
];
const startButton = document.querySelector(".start");

let quizzEnded = false;
let questionNumberAt = 0; // ex: Question 3/15 | but 0 default
let playerScore = 0;
let responsesValues = [false, false, false];

// Recuperer l'api questionnaire
fetch("https://batman-api.sayna.space/questions")
  .then((response) => response.json())
  .then((data) => {
    const numberOfQuestions = data.length;

    // --------------------- Traitements Quizz -----------------------------
    checkSelectedArea();

    // Gestionnaire d'événements pour le clic sur le bouton start
    startButton.addEventListener("click", function () {
      if (quizzEnded) {
        modal.style.display = "block";
        checkResult();
      } else {
        // Changez la valeur de quizzStateStart à true pour demarrer le quiz
        checkQuizzResponse();

        if (questionNumberAt != 0) {
          quizzAreaColor();
        }

        // Ajoutez une pause de 1 seconde avant de changer la couleur des champs
        setTimeout(function () {
          // Enlever le background de quizzBox, afficher le box QR, modifier le texte du boutton
          quizzBox.style.background = "none";
          qrBox.style.display = "flex";

          if (questionNumberAt >= 11) {
            startButton.innerText = "Voir résultats";
            quizzEnded = true;
          } else {
            startButton.innerText = "question suivante";
          }

          if (questionNumberAt < numberOfQuestions) {
            questionNumberAt += 1;
            quizzResetAreaColor();
            updateQuizzTittle();
            setQuestion();
            setResponse();
            setIllustration();

            responsesValues = [false, false, false];
            uncheckAllAreas();
          }
        }, 1000); // 1000 millisecondes = 1 seconde
      }
    });

    modalButton.addEventListener("click", function () {
      resetQuizz();
    });

    // ---------- Les qlq fonctions utiles ----------
    // Fonction pour mettre a jour le contenu de quizzTittle
    function updateQuizzTittle() {
      quizzTittle.innerText = questionNumberAt + "/" + numberOfQuestions;
    }

    function resetQuizz() {
      modal.style.display = "none";
      playerScore = 0;
      questionNumberAt = 0;
      quizzEnded = false;
      quizzBox.style.background = "flex";
      quizzBox.style.backgroundImage =
        "url(assets/Illustrations/Batgame_2.png)";
      qrBox.style.display = "none";
      startButton.innerText = "démarrer le quizz";
      quizzTittle.innerText = "Connaissez vous bien le chevalier noir ?";
      illustrationBox.style.backgroundImage = "none";
    }

    // Fonction pour definir la question correspondante
    function setQuestion() {
      // Récupérer la question à afficher
      switch (questionNumberAt) {
        case 1:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 2:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 3:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 4:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 5:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 6:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 7:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 8:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 9:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 10:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 11:
          question.innerText = data[questionNumberAt - 1].question;
          break;
        case 12:
          question.innerText = data[questionNumberAt - 1].question;
          break;
      }
    }

    // Fonction pour definir la réponse correspondante
    function setResponse() {
      // Récupérer la réponse à afficher
      switch (questionNumberAt) {
        case 1:
          setValuesOfResponse();
          break;
        case 2:
          setValuesOfResponse();
          break;
        case 3:
          setValuesOfResponse();
          break;
        case 4:
          setValuesOfResponse();
          break;
        case 5:
          setValuesOfResponse();
          break;
        case 6:
          setValuesOfResponse();
          break;
        case 7:
          setValuesOfResponse();
          break;
        case 8:
          setValuesOfResponse();
          break;
        case 9:
          setValuesOfResponse();
          break;
        case 10:
          setValuesOfResponse();
          break;
        case 11:
          setValuesOfResponse();
          break;
        case 12:
          setValuesOfResponse();
          break;
      }
    }

    function setValuesOfResponse() {
      response[0].innerText = data[questionNumberAt - 1].response[0].text;
      response[1].innerText = data[questionNumberAt - 1].response[1].text;
      response[2].innerText = data[questionNumberAt - 1].response[2].text;
    }

    // Fonction pour changer l'illustration en fonction de la question
    function setIllustration() {
      switch (questionNumberAt) {
        case 1:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_3.png')";
          break;
        case 2:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_4.png')";
          break;
        case 3:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_5.png')";
          break;
        case 4:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_10.png')";
          break;
        case 5:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_11.png')";
          break;
        case 6:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_18.png')";
          break;
        case 7:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_12.png')";
          break;
        case 8:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_19.png')";
          break;
        case 9:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_20.png')";
          break;
        case 10:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_21.png')";
          break;
        case 11:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_7.png')";
          break;
        case 12:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_6.png')";
          break;

        default:
          break;
      }
    }

    function checkSelectedArea() {
      // Écoutez l'événement de clic sur chaque zone
      selectedArea[0].addEventListener("click", () => {
        selectedResponse[0].checked = !selectedResponse[0].checked;
        responsesValues[0] = !responsesValues[0];
      });

      selectedArea[1].addEventListener("click", () => {
        selectedResponse[1].checked = !selectedResponse[1].checked;
        responsesValues[1] = !responsesValues[1];
      });

      selectedArea[2].addEventListener("click", () => {
        selectedResponse[2].checked = !selectedResponse[2].checked;
        responsesValues[2] = !responsesValues[2];
      });
    }

    function uncheckAllAreas() {
      selectedResponse[0].checked = false;
      selectedResponse[1].checked = false;
      selectedResponse[2].checked = false;
    }

    function checkQuizzResponse() {
      switch (questionNumberAt) {
        case 1:
          quizzResponseCondition();
          break;
        case 2:
          quizzResponseCondition();
          break;
        case 3:
          quizzResponseCondition();
          break;
        case 4:
          quizzResponseCondition();
          break;
        case 5:
          quizzResponseCondition();
          break;
        case 6:
          quizzResponseCondition();
          break;
        case 7:
          quizzResponseCondition();
          break;
        case 8:
          quizzResponseCondition();
          break;
        case 9:
          quizzResponseCondition();
          break;
        case 10:
          quizzResponseCondition();
          break;
        case 11:
          quizzResponseCondition();
          break;
        case 12:
          quizzResponseCondition();
          break;
      }
    }

    function quizzResponseCondition() {
      if (
        data[questionNumberAt - 1].response[0].isGood == responsesValues[0] &&
        data[questionNumberAt - 1].response[1].isGood == responsesValues[1] &&
        data[questionNumberAt - 1].response[2].isGood == responsesValues[2]
      ) {
        playerScore += 1;
      }
    }

    function quizzAreaColor() {
      data[questionNumberAt - 1].response[0].isGood == true
        ? (selectedArea[0].style.backgroundColor = "#4BB543")
        : (selectedArea[0].style.backgroundColor = "#e15c5a");
      data[questionNumberAt - 1].response[1].isGood == true
        ? (selectedArea[1].style.backgroundColor = "#4BB543")
        : (selectedArea[1].style.backgroundColor = "#e15c5a");
      data[questionNumberAt - 1].response[2].isGood == true
        ? (selectedArea[2].style.backgroundColor = "#4BB543")
        : (selectedArea[2].style.backgroundColor = "#e15c5a");
    }

    function quizzResetAreaColor() {
      selectedArea[0].style.backgroundColor = "#757575";
      selectedArea[1].style.backgroundColor = "#757575";
      selectedArea[2].style.backgroundColor = "#757575";
    }

    function checkResult() {
      if (playerScore <= 4) {
        modalTitle.innerText =
          playerScore +
          "/" +
          numberOfQuestions +
          " ce n'est pas tout a fait ça...";
        modalText.innerText =
          "Oula ! Heureusement que le Riddler est sous les verrous... Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller, rien n'est perdu !";
      } else if (playerScore > 4 && playerScore <= 8) {
        modalTitle.innerText =
          playerScore + "/" + numberOfQuestions + " pas mal !";
        modalText.innerText =
          "Encore un peu d'entrainement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute vos connaissances sont là. A vous de les consolider, foncez Gotham est votre terrain de chasse !";
      } else if (playerScore > 8) {
        modalTitle.innerText =
          playerScore + "/" + numberOfQuestions + " bravo !";
        modalText.innerText =
          "Vous étes véritablement un super fan de l'univers de Batman ! Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains !";
      }
    }
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la récupération des données depuis l'API :",
      error
    );
  });
