document.addEventListener('DOMContentLoaded', () => {

    const url = window.location.href;
    const urlSite = new URL(url).pathname.split('/').pop().split('.')[0];
    
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
        fetch(`/${urlSite}`, {
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
    