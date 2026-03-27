const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return;
    }


    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }


    if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return;
    }

    alert("Form submitted successfully");

    document.getElementById("contactForm").reset();

});