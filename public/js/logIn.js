const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const submittBtn = document.getElementById('submittBtn');



const hashString = async (message)=>{
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

submittBtn.addEventListener('click', async () => {
    const email = emailField.value;
    const password = passwordField.value;
    
    const hashedPassword = await hashString(password);
    
    
    fetch('/admin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: hashedPassword })
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