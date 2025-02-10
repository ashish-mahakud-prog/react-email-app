function Header() {
    return (
        <>
            <div className="header container">
                <header className="p-3 mb-3">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="nav justify-content-center ">
                                <li><a href="#" className="text-decoration-none text-light px-2 ">Menu</a></li>
                                <li><a href="#" className="text-decoration-none text-light px-2 ">Create new Mail</a>
                                </li>
                            </ul>
                            <a href="/" className="logo d-flex align-items-center text-light text-decoration-none">
                                Email.ai
                            </a>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle text-light" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Ashish M.
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Profile</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header