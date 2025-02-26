import "./header.scss"

function Header() {
    return (
        <header className="headerMenu">
            <h5>LINEN LIFE</h5>
            <nav className="headerMenu_navigation">
                <ul>
                    <li>New Arriwals</li>
                    <li>All products</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <button className="headerMenu_button">Log in</button>
        </header>
    )
}

export default Header
