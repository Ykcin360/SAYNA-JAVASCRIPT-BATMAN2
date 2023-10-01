// Recuperer l'api questionnaire
fetch("https://batman-api.sayna.space/questions")
  .then((response) => response.json())
  .then((data) => {
    const numberOfQuestions = data.length;
    const quizzTittle = document.querySelector(".q-title");
    const quizzBox = document.querySelector(".box");
    const illustrationBox = document.querySelector(".illustration");
    const qrBox = document.querySelector(".QR");
    const question = document.querySelector(".question");
    const response = [
      document.querySelector(".response-1"),
      document.querySelector(".response-2"),
      document.querySelector(".response-3"),
    ];
    const startButton = document.querySelector(".start");

    let quizzStarted = false;
    let questionNumberAt = 0; // ex: Question 3/15 | but 0 default

    // --------------------- Traitements Quizz -----------------------------
    // Gestionnaire d'événements pour le clic sur le bouton start
    startButton.addEventListener("click", function () {
      // Changez la valeur de quizzStateStart à true pour demarrer le quiz
      quizzStarted = true;

      // Enlever le background de quizzBox, afficher le box QR, modifier le texte du boutton
      quizzBox.style.background = "none";
      qrBox.style.display = "flex";
      startButton.innerText = "question suivante";

      if (questionNumberAt < numberOfQuestions) {
        questionNumberAt += 1;
        updateQuizzTittle();
        setQuestion();
        setResponse();
        setIllustration();
      }
    });

    // ---------- Les qlq fonctions utiles ----------
    // Fonction pour mettre a jour le contenu de quizzTittle
    function updateQuizzTittle() {
      quizzTittle.innerText = questionNumberAt + "/" + numberOfQuestions;
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

        default:
          question.innerText = "";
          break;
      }
    }

    // Fonction pour definir la réponse correspondante
    function setResponse() {
      // Récupérer la réponse à afficher
      switch (questionNumberAt) {
        case 1:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 2:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 3:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 4:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 5:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 6:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 7:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 8:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 9:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 10:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 11:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;
        case 12:
          response[0].innerText = data[questionNumberAt - 1].response[0].text;
          response[1].innerText = data[questionNumberAt - 1].response[1].text;
          response[2].innerText = data[questionNumberAt - 1].response[2].text;
          break;

        default:
          question.innerText = "";
          break;
      }
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
            "url('assets/Illustrations/Batgame_10.png')";
          break;
        case 9:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_11.png')";
          break;
        case 10:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_12.png')";
          break;
        case 11:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_13.png')";
          break;
        case 12:
          illustrationBox.style.backgroundImage =
            "url('assets/Illustrations/Batgame_14.png')";
          break;

        default:
          break;
      }
    }
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la récupération des données depuis l'API :",
      error
    );
  });
