

function readXmlFile() {
    var xhttp = new XMLHttpRequest();
    var xmlFilePath ="xml/movies.xml";

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(this.responseText, "text/xml");
            var employeeDataDiv = document.getElementById("movieData");

            var elements = doc.getElementsByTagName("movie");
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var image = element.getElementsByTagName("image")[0].textContent;
                var name = element.getElementsByTagName("name")[0].textContent;


                var employeeInfo = document.createElement("div");

                employeeInfo.innerHTML =
                                         "<h3>" + name + "</h3>" +"<img src=\""+image+"\">";


                employeeDataDiv.appendChild(employeeInfo);
            }
        }
    };

    xhttp.open("GET", xmlFilePath, true);
    xhttp.send();
}

// Call the function to read the XML file
readXmlFile();

function showSubscribeForm() {
    alert("Subscribe form will appear here.");
}

// JavaScript code for handling the form and validation
document.getElementById('openFormButton').addEventListener('click', function () {
    document.getElementById('popupFormContainer').style.display = 'block';
});

function closeForm() {
    document.getElementById('popupFormContainer').style.display = 'none';
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // You can add more specific validation for the email here if needed
    const newsletterSummary = `Dear ${name}, you have successfully subscribed for a personalized newsletter`;
    alert(newsletterSummary);

    closeForm();
    return false; // Prevent form submission
}


