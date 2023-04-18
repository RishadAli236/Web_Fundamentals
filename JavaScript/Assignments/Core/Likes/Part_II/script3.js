var neilLikeCount = 9;
var neilPost = document.querySelector(".neil");
console.log(neilPost);

var nicholeLikeCount = 12;
var nicholePost = document.querySelector(".nichole");
console.log(nicholePost);

var jimLikeCount = 9;
var jimPost = document.querySelector(".jim");
console.log(jimPost);

function increaseNeilLikes(){
    neilLikeCount++;
    neilPost.innerText = neilLikeCount;
}

function increaseNicholeLikes(){
    nicholeLikeCount++;
    nicholePost.innerText = nicholeLikeCount;
}

function increaseJimLikes(){
    jimLikeCount++;
    jimPost.innerText = jimLikeCount;
}


