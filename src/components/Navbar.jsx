import styles from "../styles/Navbar.module.css"
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <header>
            <nav>
            <div className={styles.logo}>
                <img src={logo} alt="logo" className={styles.logo}/>
            </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" data-page="home" className={styles.active}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/" data-page="movies">Films</Link>
                    </li>
                    <li className={styles.authRequired} style={{display: "none"}}>
                        <Link to="/" data-page="add-movie">Ajouter</Link>
                    </li>
                    <li className={styles.guestOnly} style={{display: "block"}}>
                        <Link to="/login" data-page="login">Connexion</Link>
                    </li>
                    <li className={styles.guestOnly} style={{display: "block"}}>
                        <Link to="/register" data-page="register">Inscription</Link>
                    </li>
                    <li className={styles.authRequired} style={{display: "none"}}>
                        <Link to="/" id="logout">Déconnexion</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }