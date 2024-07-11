import '../styles/Header.css'
import profilePicture from '../assets/profile-picture.png'
import { FaTiktok, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} alt="profile-picture" />
            <h3>Raka Febrian Syahputra</h3>
            <p>Frontend Developer - Backend Developer - UI/UX Designer</p>
            <div className="socialMedia">
                <a href="https://www.instagram.com/rakafebriansy">
                    <FaInstagram />
                </a>
                <a href="">
                    <FaTiktok />
                </a>
                <a href="">
                    <FaTwitter />
                </a>
                <a href="">
                    <FaFacebook />
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header