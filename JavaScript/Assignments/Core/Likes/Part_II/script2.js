var neilLikeCount = 9;
var neilPost = document.querySelector(".neil");
console.log(neilPost);

var nicholeLikeCount = 12;
var nicholePost = document.querySelector(".nichole");
console.log(nicholePost);

var jimLikeCount = 9;
var jimPost = document.querySelector(".jim");
console.log(jimPost);

function increaseLikes(element){
    console.log(element.className);
    if(element.className == "neil-btn"){
        neilLikeCount++;
        neilPost.innerText = neilLikeCount;
    }
    else if(element.className == "nichole-btn"){
        nicholeLikeCount++;
        nicholePost.innerText = nicholeLikeCount;
    }
    else if(element.className == "jim-btn"){
        jimLikeCount++;
        jimPost.innerText = jimLikeCount;
    }


}



