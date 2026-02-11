import logo from "../assets/cpp-logo.png"

function Header() {
    return (
        <header>
            <img className="cpp-logo" src={logo} alt="logo" />
            <h1>Program Matcher</h1>
            <span>Spring 2026</span>
        </header>
    )
}

export default Header