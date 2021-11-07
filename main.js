//Question 1
function getTheTable () {
    return document.getElementById("myTable");
    
}

console.log(getTheTable());

//Question 2
function getAllParagraphs () {
    return document.querySelectorAll("#myPage p");
}

console.log(getAllParagraphs());

//Question 3
function makeItalic () {
    var x = document.querySelectorAll("p.even");
    for (var i = 0; i < x.length; i++) {
        x.item(i).style.fontStyle="italic";
    } 
}

//Question 4
function createBorders () {
    var x = document.querySelector("td");
    x.style.border ="2px solid #000";
    return document.getElementById("myTable");   
}

console.log(createBorders());

//Question 5



//Question 6
function changeBgColor (color) {
    document.getElementById("myPage").style.backgroundColor=color;
    return document.getElementById("myPage");
}

console.log(changeBgColor());