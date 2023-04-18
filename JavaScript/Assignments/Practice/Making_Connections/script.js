function changeName(){
    var profileName = document.querySelector(".profile-name");
    profileName.innerText = "Rishad Yasin";
}

function acceptRequest(element){
    //remove user form request list
    element.parentElement.remove(); 

    //decrease connection requests number
    var requestNumber = document.querySelector(".request-number").innerText; 
    requestNumber--;
    document.querySelector(".request-number").innerText = requestNumber;

    //increase connections number
    connectionsCount = document.querySelector(".connections-count").innerText;
    connectionsCount++;
    document.querySelector(".connections-count").innerText = connectionsCount;
}

function rejectRequest(element){
    //remove user form request list
    element.parentElement.remove(); 

    //decrease connection requests number
    var requestNumber = document.querySelector(".request-number").innerText; 
    requestNumber--;
    document.querySelector(".request-number").innerText = requestNumber;
    
}

