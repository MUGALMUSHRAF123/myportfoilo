document.getElementById("downloadButton").addEventListener("click", function() {
    window.open("Resume.pdf", "_blank");
});




document.getElementById("DownloadButton").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "Resume.pdf"; 
    downloadLink.download = "Resume.pdf"; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var text = document.getElementById('text').value;
  
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + text + '\nMessage: ' + message;
  
    alert('Form submitted successfully:\n\n' + body);
  
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
    document.getElementById('message').value = '';
});

  