texterPerant.style.display = "none"
noItems.style.display = "block"
const inPro = ()=>{



const texterPerant = document.getElementById('texterPerant')
const noItems = document.getElementById('noItems')
console.log(texterPerant)

var word = prompt("Enter Word");
var reverse = "";
texterPerant.children[0].innerHTML = word;
for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}


if (!word) {
    noItems.style.display = "block"
    texterPerant.style.display = "none"
    return
    // continue
    
} 

texterPerant.style.display = "flex"
noItems.style.display = "none"


    if (word === reverse) {
        
        console.log('It s palidorme');
        texterPerant.className = "text match";
        texterPerant.children[1].innerHTML = "It Is Palindrome";

    } else {
        
        console.log('It s not palidorme');
        texterPerant.className = "text Nomatch";
        texterPerant.children[1].innerHTML = "It Is not Palindrome";


    }
}

console.log(window.location.href);