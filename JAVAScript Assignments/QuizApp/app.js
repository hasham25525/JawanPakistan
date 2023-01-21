var ques1 = {
    Question: "MS word is software of __",
    CorrectAns: "Microsoft",
    Options: ["Apple", "Android", "Google", "Microsoft"],
}
var ques2 = {
    Question: "Which is the word processing software?",
    CorrectAns: "MS word 2007",
    Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
}

var ques3 = {
    Question: "MS Word is __ software.    ",
    CorrectAns: "Word processing",
    Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
    ],
}
var ques4 = {
    Question: "The valid format of MS Word is __",
    CorrectAns: ".doc",
    Options: [".exe", ".doc", ".png", " .jpeg"],
}
var ques5 = {
    Question: "What program is used in MS-Word to check the spelling?",
    CorrectAns: "Spelling & Grammar",
    Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
}
var ques6 = {
    Question: "A word gets selected by clicking it",
    CorrectAns: "Twice",
    Options: [" Once", "Twice", "Three times", "Four times"],
}
var ques7 = {
    Question: "The center the selected text, the shortcut key is",
    CorrectAns: "Ctrl + E",
    Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
}
var ques8 = {
    Question: "Which option is not available in Microsoft office button?",
    CorrectAns: "Bold",
    Options: ["Bold", "New", "Save", "Open"],
}
var ques9 = {
    Question:
        "___ is the change the way text warps around the selected object.",
    CorrectAns: "Text wrapping",
    Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
}
var ques10 = {
    Question: "A major step before taking print of the document is",
    CorrectAns: "Both b and c",
    Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
    ],
}

var questions = [
    ques1,
    ques2,
    ques3,
    ques4,
    ques5,
    ques6,
    ques7,
    ques8,
    ques9,
    ques10];


let i = questions.length;

document.getElementById('question').innerHTML = questions[i.Question];


// }



function next() {
    i++;

    document.getElementById('question').innerHTML = ques1.Question;
    document.getElementById('question').innerHTML = ques1.Question

}