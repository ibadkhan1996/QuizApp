// Create Questions Array & Object
var questions = [
    {
        question: "To declare an object, we use:",
        answer: "{ }",
        options: [
            "[ ]",
            "( )",
            "{ }",
            "< >",
        ]
    },
    {
        question: "What is the standard way to create constructor function?",
        answer: "function Foo( )",
        options: [
            "function Foo( )",
            "function foo( )",
            "func Foo( )",
            "function Foo",
        ]
    },
    {
        question: "If a function lies in an object, what we call it?",
        answer: "Method",
        options: [
            "Array",
            "Constructor Function",
            "Method",
            "None of above",
        ]
    },
    {
        question: "Which is the right way to add property to an object?",
        answer: 'objectName.propertyName = "propertyValue"',
        options: [
            'objectName.appendChild = propertyName: propertyValue;',
            'objectName.propertyName = "propertyValue"',
            'objectName.innerHTML = propertyName: propertyValue;',
            'objectName{i} = propertyName: propertyValue;',
        ]
    },
    {
        question: "Syntax to delete a property from an object?",
        answer: "delete objectName.propertyName;",
        options: [
            "objectName.propertyName.remove();",
            "propertyName = propertyValue.remove();",
            "delete objectName.propertyName;",
            "&lt;del&gt;propertyName&lt;/del&gt;",
        ]
    },
    {
        question: "Correct Syntax to check if a property exists in an object?",
        answer: '"propertyName" in objectName;',
        options: [
            '"propertyName" in objectName;',
            '"propertyName" for objectName;',
            'propertyName in "objectName";',
            '"propertyName" find objectName;',
        ]
    }
]

// Ask student Name
var askName = prompt("Enter your full name");

// Inserting questions in HTML Element
function dispQues(e) {
    var ques = document.getElementById("ques");
    ques.innerHTML = questions[e].question;
    var opt = document.getElementsByClassName("opt");
    for (var i = 0; i < opt.length; i++) {
        opt[i].innerHTML = questions[e].options[i];
    }
}

// Question Count
var quesCount = 0;
// Next Question Function
function nextQues(e) {
    scoreFunc();
    quesCount++;
    dispQues(quesCount);
    if (quesCount == questions.length - 1) {
        e.className += " disabled";
        var finishBtn = document.createElement("a");
        finishBtn.innerHTML = "Finish";
        finishBtn.setAttribute("href", "#");
        finishBtn.setAttribute("class", "btn btn-success");
        finishBtn.setAttribute("onclick", "finishQuiz(this)");
        e.parentNode.appendChild(finishBtn);
    }
    removeActiveClass();
}

// Finish Quiz Function
function finishQuiz(e) {
    e.className += " disabled";
    scoreFunc();
    result(score);
    if(score >= 30){
    certificate();
    }
}

// Add Active Class to option
var val;
function addActiveClass(e) {
    removeActiveClass();
    e.classList.add("active");
    val = e.innerHTML;
}

// Remove Active Class from other options
function removeActiveClass() {
    var activeClass = document.getElementsByClassName("active");
    for (var i = 0; i < activeClass.length; i++) {
        activeClass[i].classList.remove("active");
    }
}

// Score Function
var score = 0;
function scoreFunc() {
    if (val == questions[quesCount].answer) {
        score += 10;
        console.log(score);
        console.log("correct answer");
    }
    else {
        console.log("wrong answer");
    }
}

// Result Function
function result(e) {
    if (e >= 30) {
        alert("Congrats, " + askName + "! you've passed the quiz & earned a certificate");
        alert("You scored " + e + " points in Javascript Objects quiz");
        // alert("You've earn a certificate");
    }
    else {
        alert("Sorry, " + askName + "! you didn't passed the quiz");
        alert("You scored " + e + " points in Javascript Objects quiz");
        alert("Pass the quiz to earn a certificate");
    }
}

// Alternativ way to display whole new page
function certificate() {
    // Empty the body
    var res = document.getElementsByTagName("body");
    res[0].innerHTML = "";    

    // Create Date object
    var quizDate = new Date();
    var dateString = quizDate.toString();
    var sliceDate = (dateString.slice(4, 10) + ", " + dateString.slice(11, 15));

    // Create Main Card div
    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card text-center");

    // Create Card Body div
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    // Create Card Title
    var cardTitle = document.createElement("h2");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = ("SMIT WEB & MOBILE");
    cardTitle.style.fontWeight = "bold";

    // Create Card Text 'certifies that'
    var cardText = document.createElement("p");
    cardText.innerHTML = ("certifies that");
    cardText.setAttribute("class", "cardText");

    // Create Student Name Heading
    var studentName = document.createElement("h2");
    studentName.innerHTML = (askName.slice(0, 1)).toUpperCase() + (askName.slice(1)).toLowerCase();
    studentName.setAttribute("class", "names");

    // Create Card Text 'has successfully...'
    var cardText2 = document.createElement("p");
    cardText2.innerHTML = ("has successfully completed the online quiz of");
    cardText2.setAttribute("class", "cardText");

    // Create Quiz Name Heading
    var quizName = document.createElement("h2");
    quizName.innerHTML = "Javascript Objects";
    quizName.setAttribute("class", "names");
    quizName.style.marginTop = "5px";

    // Create Card Text 'an online non-credit...'
    var cardText3 = document.createElement("p");
    cardText3.innerHTML = (("an online non-credit quiz authorized by <b>SMIT</b> and offered through <b>Ibad Khan's Quiz App</b>") + "<br/> on <b>" + sliceDate + "</b>");
    cardText3.setAttribute("class", "cardText");

    // Create Signature and Stamp
    var signature = document.createElement("p");
    var teacher = "M. Ali Mughal";
    signature.innerHTML = ("<br/><br/><br/>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;<br/>" + teacher + "<br/><b style='font-size: 14px;'>Head of Department, SMIT</b>");

    // Append Items
    res[0].appendChild(cardDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(studentName);
    cardBodyDiv.appendChild(cardText2);
    cardBodyDiv.appendChild(quizName);
    cardBodyDiv.appendChild(cardText3);
    cardBodyDiv.appendChild(signature);

    // Console Anything to debug
    console.log(res[0]);
}