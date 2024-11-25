document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '/'; // Redirect to login if no token
        return;
    }

    // const decodedToken = jwt.decode(token);
    // if (decodedToken && Date.now() >= decodedToken.exp * 1000) {
    //     window.location.href = '/';  // Redirect to login if token is expired
    //     return;
    // }

    fetch('/dashboard', {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (!response.ok) throw new Error('Access denied');
            return response.json();
        })
        .then(data => console.log('Welcome:', data.user))
        .catch(err => {
            console.error(err);
            window.location.href = '/'; // Redirect to login on error
        });
});

const buttons = document.querySelectorAll('#calculator button');
const input = document.getElementById('result');

buttons.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.value;
        if (element.value === '=') {

            try {
                input.value = eval(input.value);
            }
            catch (err) {
                input.value = 'Error';
            }
            return;
        }
        if (element.value === 'AC') {
            input.value = input.value.slice(0, -1);
            return;
        }
        if (element.value === 'DC') {
            input.value = '';
            return;
        }
        if (['+', '-', '*', '/'].includes(value)) {
            // Avoid adding multiple operators in a row
            const lastChar = input.value.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) {
                input.value = input.value.slice(0, -1); // Replace the last operator
            }
        }

        input.value += value;

    })
});