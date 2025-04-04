const questions = [
    {
        "question": "Welche Eigenschaft in CSS wird verwendet, um die Textfarbe festzulegen?",
        "answer_1": "background-color",
        "answer_2": "font-color",
        "answer_3": "text-color",
        "answer_4": "color",
        "right_answer": 4
    },
    {
        "question": "Wie können Variablen in JavaScript deklariert werden?",
        "answer_1": "var, let, const",
        "answer_2": "declare, define, create",
        "answer_3": "new, make, set",
        "answer_4": "variable, set, const",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut in HTML wird verwendet, um einem Tag eine eindeutige Identität zuzuweisen?",
        "answer_1": "class",
        "answer_2": "id",
        "answer_3": "name",
        "answer_4": "identity",
        "right_answer": 2
    },
    {
        "question": "Welche Methode in JavaScript wird verwendet, um ein Element basierend auf seiner ID zu finden?",
        "answer_1": "getElementById",
        "answer_2": "querySelector",
        "answer_3": "findElement",
        "answer_4": "getID",
        "right_answer": 1
    },
    {
        "question": "Welches HTML-Tag wird verwendet, um einen Absatz zu erstellen?",
        "answer_1": "<paragraph>",
        "answer_2": "<text>",
        "answer_3": "<p>",
        "answer_4": "<para>",
        "right_answer": 3
    },
    {
        "question": "Mit welchem CSS-Wert wird ein Element zentriert?",
        "answer_1": "text-align: center;",
        "answer_2": "align: middle;",
        "answer_3": "justify-content: center;",
        "answer_4": "center-align: true;",
        "right_answer": 1
    },
    {
        "question": "Welche Schleife gibt es in JavaScript?",
        "answer_1": "for",
        "answer_2": "while",
        "answer_3": "do...while",
        "answer_4": "Alle oben genannten",
        "right_answer": 4
    },
    {
        "question": "Welche Erweiterung wird üblicherweise für JavaScript-Dateien verwendet?",
        "answer_1": ".java",
        "answer_2": ".js",
        "answer_3": ".script",
        "answer_4": ".javascript",
        "right_answer": 2
    },
    {
        "question": "Welches HTML-Attribut wird verwendet, um ein Bild hinzuzufügen?",
        "answer_1": "source",
        "answer_2": "src",
        "answer_3": "data",
        "answer_4": "img",
        "right_answer": 2
    }
]

let currentQuestion = 0;


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

