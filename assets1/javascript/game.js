


var words = ["witch", "ghost", "pumpkin", "candy"];
var wordSelection = words[Math.floor(Math.random() * words.length)];
var letters = [];
var hereButton = document.getElementById("here");
var currentWordP = document.getElementById("currentWord");
var lettersRemP = document.getElementById("lettersRem");
var lettersGuessedP = document.getElementById("lettersGuessed");
var pictureHelpP = document.getElementById("pictureHelp");
var imgWitchV = document.getElementById("imgWitch");
var imgGhostV = document.getElementById("imgGhost");
var imgPumpkinV = document.getElementById("imgPumpkin");
var imgCandyV = document.getElementById("imgCandy");
var myAudio = document.getElementById("myAudio");

String.prototype.replaceAt = function (index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

var words = [{ word: "witch", image: "assets1/images/0.png" },
{ word: "ghost", image: "assets1/images/1.png" },
{ word: "pumpkin", image: "assets1/images/2.png" },
{ word: "candy", image: "assets1/images/3.png" }
]

// cantidad de _ dependiendo de la palabra seleccionada randomly
hereButton.onclick = function () {

    wordSelection = words[Math.floor(Math.random() * words.length)].word;

    console.log("wordSelection" + wordSelection);

    lettersGuessed.textContent = "";

    letters = [];
    for (var i = 0; i < wordSelection.length; i++) {
        letters.push(" _ ");

        console.log(letters);
        currentWordP.textContent = letters;
    }
    // que cuente cuantas letra FALTAN POR ADIVINAR 
    var remainingLetters = wordSelection.length;
    lettersRemP.textContent = remainingLetters;
    console.log(remainingLetters);

    // Dependiendo de wordSelection [o,1,2,3] asignar a cada palabra una imagen y desplegarlas en pictureHelpP

    // Cuando yo le pique a una tecla: 
    // 1. Si la letra forma parte de mi palabra = la escriba en el "_" correcto. 
    // 2. Si la letra NO forma parte de mi palabra = la escruba en "Letters Guessed"
    document.onkeyup = function (event) {

        console.log(event.key);
        if (wordSelection.includes(event.key)) {
            var indices = [];
            var idx = wordSelection.indexOf(event.key);
            lettersRemP.textContent = remainingLetters - 1;

            // var n = remainingLetters;
            // while (remainingLetters > 0) {
            //     n --;
            // }

            console.log("should exec 1");
            while (idx != -1) {
                indices.push(idx);
                idx = wordSelection.indexOf(event.key, idx + 1);

                // MAKE IT A LOOP 

            }

            console.log("should exec 2");
            wordSelection.split('').forEach((element, i) => {
                console.log(element);
                console.log(i);
                if (element === event.key) {
                    console.log("is changing " + letters);
                    letters[i] = event.key;
                    console.log("changed " + letters);
                }
            });

            currentWordP.textContent = letters;
            console.log("word: " + letters);

            const result = letters.filter(function (c) {
                return c === " _ ";
            });

            lettersRemP.textContent = result.length;




        } else {
            lettersGuessed.append(event.key + ", ");




        }






    }
}
