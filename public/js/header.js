const header = document.getElementById('header');
header.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div class="container-fluid">
                <a class="navbar-brand">MyApp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="dashboard.html">Calculator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="fractal.html">Fractal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="rockPaperScissors.html">RockPaperScissors</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="tetris.html">Tetris</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="pingPong.html">PingPong</a>
                        </li>
                        <li class="nav-item ms-auto">
                            <button class="btn btn-outline-danger btn-sm" id="btnLogout">Logout</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>`;

const logoutBtn = document.getElementById('btnLogout');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = '/';
})