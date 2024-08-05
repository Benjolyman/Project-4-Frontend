const NavBar = () => {
    return (
        <>
            <body>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            Summoner DB
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active"
                                        aria-current="page"
                                        href="/champions"
                                    >
                                        Champions
                                    </a>
                                </li>
                            </ul>

                            <a href="/auth/sign-in" class="btn btn-dark">
                                Sign In
                            </a>
                            <a href="/auth/sign-up" class="btn btn-dark">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </nav>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                    crossorigin="anonymous"
                ></script>
            </body>
        </>
    );
};

export default NavBar