document.querySelector(".ukeButton").addEventListener("click", function()
{ 
    var ukeVid = document.querySelector(".ukeVideo"); 
    if(ukeVid.style.display=="none") { 
        ukeVid.style.display = "inline-block";
    } 
    else {
         ukeVid.style.display="none";
        //  document.querySelector(".ukeButton").innerHTML = "Hide Ukulele";
    }
}); 

document.querySelector(".submitButton").addEventListener("click", function() { 
    let subtn= document.querySelector(".submitButton"); 
    let inpulVal = subtn.value
    if (subtn.value != " "){ 
        alert ("Thanks for your feedback!"); 
        console.log(subtn.value);
    }  
    else if (subtn.value.length == 0){ 
        alert("Input your message then press Submit!");
    }
    


})