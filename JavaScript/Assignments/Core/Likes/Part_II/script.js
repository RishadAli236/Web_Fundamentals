var array =[9,12,9]; //array to store number of likes
var count = 0;

function increaseNeilLikes(){
    count = array[0];
    count++;
    document.querySelector(".neil").innerText = count;
    array[0] = count;
    // console.log(array);
}

function increaseNicholeLikes(){
    count = array[1];
    count++;
    document.querySelector(".nichole").innerText = count;
    array[1] = count;
    // console.log(array);
}

function increaseJimLikes(){
    count = array[2];
    count++;
    document.querySelector(".jim").innerText = count;
    array[2] = count;
    // console.log(array);
}


