import styles from "../styles/Navbar.module.css"
import logo from "../assets/logo.png";


export default function Navbar() {
    return (
        <header>
            <nav>
            <div className={styles.logo}>
                <img src={logo} alt="logo" className={styles.logo}/>
            </div>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#" data-page="home" className={styles.active}>Accueil</a>
                    </li>
                    <li>
                        <a href="#" data-page="movies">Films</a>
                    </li>
                    <li className={styles.authRequired} style={{display: "none"}}>
                        <a href="#" data-page="add-movie">Ajouter</a>
                    </li>
                    <li className={styles.guestOnly} style={{display: "block"}}>
                        <a href="#" data-page="login">Connexion</a>
                    </li>
                    <li className={styles.guestOnly} style={{display: "block"}}>
                        <a href="#" data-page="register">Inscription</a>
                    </li>
                    <li className={styles.authRequired} style={{display: "none"}}>
                        <a href="#" id="logout">Déconnexion</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }