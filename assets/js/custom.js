
// TABS JS

function makeTabActive() {

    var url = window.location.href;

    var indexof = url.indexOf("#");

    if (indexof > 0) {

        var activeTab = url.substring(indexof + 1);

        if (typeof activeTab != 'undefined' && activeTab != '' && activeTab != '#') {

            // to dispaly give tab content

            jQuery(".tab-pane").removeClass("active in show");

            jQuery("#" + activeTab).addClass("active in show")

            // to make active given tab

            jQuery(".nav-tabs li a").removeClass("active");

            jQuery(".nav-tabs li a[href='#" + activeTab + "']").addClass("active");
        }
    }
}

// Show back to top button when scrolling
window.addEventListener('scroll', function() {
    var toTopButton = document.querySelector('.toplink');
    if (window.scrollY > 200) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
});


// Email JS Contact Form 
function Send() {
    if (document.getElementById("name").value == "") {
        alert("Please enter your name");
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("phone").value == "") {
        alert("Please enter your phone number");
        document.getElementById("phone").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Please enter your email address");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("businessname").value == "") {
        alert("Please enter your business name");
        document.getElementById("businessname").focus();
        return false;
    }
    if (document.getElementById("how_hear").value == "") {
        alert("Please select how you heard about us");
        document.getElementById("how_hear").focus();
        return false;
    }
    if (document.getElementById("address").value == "") {
        alert("Please enter your address");
        document.getElementById("address").focus();
        return false;
    }
    if (document.getElementById("message").value == "") {
        alert("Please enter your message");
        document.getElementById("message").focus();
        return false;
    }
    var params = {
        name: document.getElementById("name").value,
        lname: document.getElementById("lname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        businessname: document.getElementById("businessname").value,
        how_hear: document.getElementById("how_hear").value,
        address: document.getElementById("address").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_y60e7mg";
    const templateID = "template_4asymqb";
    // emailjs.send("Service_ID", "Template_ID", formData)  Email - infobpoaustralia@gmail.com; Password: Dt7@2021
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log('Email sent successfully:', response.status, response.text);
            alert("Thank you, " + params.name + "! Your message has been sent successfully.");
            console.log(JSON.stringify(params, null, 2));
            document.getElementById("contactpage").reset();
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("Sorry ...!, " + params.name + ". Oops! Something went wrong. Please try again later.");
        });
    return false;
  /* 
  // Email js Template Form Design Code
    <p>&nbsp;</p>
    <p>You got a new message from {{name}} {{lname}}:</p>
    <p>Phonenumber: {{phone}}</p>
    <p>Email: {{email}}</p>
    <p>Business Name: {{businessname}}</p>
    <p>How did you hear about us?: {{how_hear}}</p>
    <p>Address: {{address}}</p>
    <p>Message:</p>
    <p style="padding: 12px; font-style: italic;">{{message}}</p>
    <p>&nbsp;</p>
  */
}
