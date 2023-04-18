var count = 0;
var likeCount = document.querySelector(".like-count span");

function increaseLikes(){
    count ++;
    likeCount.innerText = count;
}