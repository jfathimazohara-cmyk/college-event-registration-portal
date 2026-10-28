
document.getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let selectedEvent = document.getElementById("event").value;

        document.getElementById("message").textContent =
            "Thank you, " + name +
            "! Your registration for " +
            selectedEvent + " is successful.";

        this.reset();

    });
