import adminisis from '../../assets/img/adminisis.png'
import idea from '../../assets/img/idea.png'
import isisinternet from '../../assets/img/isisinternet.jpeg'
export default function Home() {
  return (
    <div className="section1">
      {/* <img src={adminisis} alt="" /> */}
      <div className="content">
        <div className="content-title">
          <h1>
            Sistema de Administración y Control de Clientes
          </h1>
          {/* <p style={{ marginBlock: "10px" }}>
              Administra tus clientes de forma segura y eficaz
          </p> */}
          <p style={{ marginBlock: "20px" }}>
            Versión 1.1.0 se lanzará el 15 de diciembre del 2023 a las 12:00pm
          </p>
        </div>
      </div>
      <div className="grid-1">
          {/* <strong>
            Proyecto inpulsado por
          </strong> */}
          <div>
            <img src={idea} alt="idea"/>
            <img src={isisinternet} alt="isisinternet"/>
          </div>
        </div>
    </div>
  )
}