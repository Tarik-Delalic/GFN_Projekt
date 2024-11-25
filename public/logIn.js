const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const submittBtn = document.getElementById('submittBtn');

submittBtn.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;

    fetch('/admin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    }).then(response => response.json()).then(data => console.log(data));
})