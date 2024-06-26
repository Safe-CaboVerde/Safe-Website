import BackGroundImage from "../../assets/background-call-to-action.webp"
import "./CallToAction.css"

const CallToAction = () => {
  function RedirectToContact(){
    window.open('https://wa.me/2389853428', '_blank');
  }
  return (
    <section className="call-to-action">
        <h2 className="action-title">Faça a escolha certa para proteger os seus bens</h2>
        <div className="call-to-action-container"></div>
        <p className="action-description">Não perca mais tempo! Peça o seu orçamento sem compromisso agora mesmo e conte com profissionais qualificados.</p>
        <button className="cta-button-white" onClick={RedirectToContact} >Contactar Agora</button>
      <img src={BackGroundImage} alt='back-ground-image'/>
    </section>
  )
}

export default CallToAction;