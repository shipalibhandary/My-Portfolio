function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#certificates">Certificates</a>
                    <a href="#contact">Contact</a>
                </div>

                <a href="/Shipali-Resume.pdf" target="_blank" className="resume-btn">
                   View Resume
                </a>
            </nav>
        </header>
    );
}

export default Navbar;