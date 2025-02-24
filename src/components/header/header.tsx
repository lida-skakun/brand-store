import "./header.scss"

export function Header() {
    return (
        <div className="headerMenu">
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
        </div>
    )
}
