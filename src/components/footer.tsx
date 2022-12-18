import { Link } from "react-router-dom";
import styles from "./footer.module.css";

//Assets
import PokemonPic from "../assets/pokemon.png";
import LocationPic from "../assets/location.png";
import ItemsPic from "../assets/pokeball.png";

const Footer = () => {
    return( 
    <footer className={styles.footer}>

        <Link onClick={(event) => event.preventDefault()} className= {styles.footerLink} to ="/pokemons">
            <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball"/>
            Pokemons
        </Link>
        <Link onClick={(event) => event.preventDefault()}  className= {styles.footerLink} to ="/items">
            <img className={styles.footerIcon} src={ItemsPic} alt="Items"/>
            Items
        </Link>
        <Link onClick={(event) => event.preventDefault()} className= {styles.footerLink} to ="/location">
            <img className={styles.footerIcon} src={LocationPic} alt="Location"/>
            Map
        </Link>
    </footer>
    );
};

export default Footer;