
import logo from './wwflogo1.jpg';
const Navbar = () => {
    return (
        <div className="nature-image">
            <nav className = "navbar">
                <img src={ logo }  alt="" className="logo-image" href="/"></img>
                <div className="links">
                    <a href="/" className="class-link">Home</a>
                    <a href="#about" className="class-link">About Us</a>
                    <a href="#contact" className="class-link">Contact Us</a>
                </div>
            </nav>
            <a href="https://rzp.io/l/tR3rsFi" className="donate-button">DONATE</a>
        </div> 
    );
}
 
export default Navbar;
