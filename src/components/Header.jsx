function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <span className="navbar-brand mb-0 mx-auto h1">Email.ai</span>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <img src="user-profile-avatar-svgrepo-com.svg" width="25px" height="25px"/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header