import BackGroundImage from "../../assets/background-call-to-action.jpg"
import "./CallToAction.css"

const CallToAction = () => {
  return (
    <section className="call-to-action">
        <h2 className="action-title">Titulo para chamar atenção</h2>
        <div className="call-to-action-container"></div>
        <p className="action-description">Lorem ipsum dolor sit amet consectetur. Nulla adipiscing cras in felis viverra id congue odio id. </p>
        <button className="cta-button-wite">Contactar Agora</button>
      <img src={BackGroundImage} alt='back-ground-image'/>
    </section>
  )
}

export default CallToAction;