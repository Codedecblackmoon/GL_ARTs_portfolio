import './nav.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i  id="bar" className="fa-solid fa-bars"></i></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="About_us.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contact_us.htmlddd">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
        )
    };

export default Navbar