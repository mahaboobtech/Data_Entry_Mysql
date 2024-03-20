function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;

    // Client-side validation
    if (!validateEmail(email)) {
        document.getElementById("message").innerText = "Please enter a valid email address.";
        document.getElementById("message").style.color = "red";
        return;
    }

    if (!validateAge(age)) {
        document.getElementById("message").innerText = "Please enter a valid age (positive integer).";
        document.getElementById("message").style.color = "red";
        return;
    }

    var formData = {
        name: name,
        email: email,
        age: age,
        dob: dob
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("message").innerText = "Data submitted successfully";
            document.getElementById("message").style.color = "green";
        } else {
            document.getElementById("message").innerText = "Error occurred. Data not submitted.";
            document.getElementById("message").style.color = "red";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById("message").innerText = "Error occurred. Data not submitted.";
        document.getElementById("message").style.color = "red";
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateAge(age) {
    return !isNaN(age) && parseInt(age) > 0;
}
