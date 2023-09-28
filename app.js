// Recuperer l'api questionnaire
fetch("https://batman-api.sayna.space/questions")
  .then((response) => response.json())
  .then((data) => {
    const numberOfQuestions = data.length;
    const startButton = document.querySelector(".start");
    const quizzBox = document.querySelector(".box");
    const qrBox = document.querySelector(".QR");

    let quizzStarted = false;
    let questionNumberAt = 0; // ex: Question 3/15 | but 0 default

    qrBox.style.zIndex = "-100";

    // --------------------- Traitements Quizz -----------------------------
    console.log(quizzStarted);
    // Gestionnaire d'événements pour le clic sur le bouton start
    startButton.addEventListener("click", function () {
      // Changez la valeur de quizzStateStart à true pour demarrer le quiz
      quizzStarted = true;

      // Changer le background de quizzBox en none
      quizzBox.style.background = "none";
      qrBox.style.display = "block";
      startButton.innerText = "question suivante";
    });
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la récupération des données depuis l'API :",
      error
    );
  });
