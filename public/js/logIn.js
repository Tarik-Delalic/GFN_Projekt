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
    }).then(response => {
        if (!response.ok) throw new Error('Login failed');
        return response.json();
    }).then(data => {
        localStorage.setItem('token', data.token);
        console.log('Logged in successfully!!!');
        window.location.replace('/dashboard.html');
    }).catch(err =>{
        alert('Wrong password or email!!')
        console.error(err)
    } )
})

fetch('/dashboard', {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})
    .then(response => {
        if (!response.ok) throw new Error('Access denied');
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));