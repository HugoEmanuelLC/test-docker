import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="container_section">
                <h1>Hugo Clavinas</h1>
                <h2>Developpeur <span>full stack</span></h2>
                <p>Bienvenue sur mon portfolio !</p>
                <NavLink to={"about"} className={"btn"}>En savoir plus</NavLink>
            </div>
        </section>
    )
}
export default Hero;