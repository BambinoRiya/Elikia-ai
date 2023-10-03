import Image1 from "../../assets/levis.png";
import Image2 from "../../assets/levis-demo.png";
import Image3 from "../../assets/lady-justice.png"
import "./Home.css"



function Home(){
  return (
    <section>
      <header>
      <div className="logo-container">
      <img src={Image1} alt="Logo" className="logo"/>
      </div>

      <div className="contact-container">
        <a href="/contact" className="contact-link">
        <span className="contact-text">CONTACT</span>
        </a>
    </div>
      </header>
      <div className="content">
        <div className="info">
        <h2>Your <span className="green-text">legal guide.</span>  Just a <br /> <span className="green-text">chat</span> away</h2>
        </div>
        </div>

      <div className="justice-container">
      <img src={Image3}  alt="Lady Justice" className="lady-justice"/> </div>

      <div className="demo-cointainer"><img src={Image2} className="demo"/></div>
        
      
      <a href="#" className="use-ai-btn">Try For Free</a>
    </section>
  )
}

export default Home