import "./Hero.css"
import transition from "./transition";
function Hero () {

    return(
        <>
            <section className="hero">
                <div className="hero-inner">
                    <h1>WELCOME TO SAMTECH</h1>
                    <h2>LOREM IMPSUM KODEM!</h2>
                    
                </div>
            </section>
            
        </>
    );
}
export default transition(Hero);