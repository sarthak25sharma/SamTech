import "./Hero.css"
import transition from "./transition";
function Hero_About () {

    return(
        <>
            <section className="hero">
                <div className="hero-inner">
                    <h1>ABOUT US</h1>
                    <h2>LOREM IMPSUM KODEM!</h2>
                    
                </div>
            </section>
            
        </>
    );
}
export default transition(Hero_About);