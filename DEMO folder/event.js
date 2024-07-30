function handleOffline() {
    var statusElement=document.getElementById('status');
    statusElement.innerText='Status:offline';
    alert('the web page site  in offline');
    
}
function handleOnline(params) {
    var statusElement=document.getElementById('status');
statusElement.innerText='Status:online';
    alert('the web page site in online')
}

window.addEventListener('status',handleOffline);
window.addEventListener('status',handleOnline);
if(! navigator.onLine){
    handleOffline();
}
else{
    handleOnline();
}


document.addEventListener("DOMContentLoaded", function() {
    var inputElement = document.getElementById("myInput");
    var formElement = document.getElementById("myForm");
   

    
    inputElement.addEventListener("change", function() {
        console.log("Input value changed");
        alert('Text will be changed')
        formElement.submit();
        
        
    });
});



