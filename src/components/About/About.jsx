import { Link } from "react-router-dom";
import adminisis from '../../assets/img/adminisis.png'
import dashboard from '../../assets/img/dashboard.png'
import clientes from '../../assets/img/clientes.png'
import pagos from '../../assets/img/pagos.png'
import dashboard_cajas from '../../assets/img/dashboard_cajas.png'
import formclientadd from '../../assets/img/formclientadd.png'
import consunption from '../../assets/img/consunption.png'
import formpayment from '../../assets/img/formpayment.png'
import historial from '../../assets/img/historial.png'
import reportform from '../../assets/img/reportform.png'
export default function About() {
  return (
    <div className="about">
      <div>
        <h1>¿Qué es el SACC?</h1>
        <p>
          Es un software de administración y control de clientes para proveedores ISP. <br />
          Y su función principal es la de controlar que sus clientes paguen en tiempo y forma sin cortes excesivos y controlados por el usuario.
        </p>
      </div>
      <div>
        <h1>Requerimientos</h1>
        <ul>
          <li>
            IP Pública
          </li>
          <li>
            Servidor o PC con conexión a internet
          </li>
          <li>
            Router Mikrotik con SO RouterOS
          </li>
          <li>
            Cuenta de whatsapp
          </li>
          <li>
            Si desea la versión portable deberá en todo momento disponer de una buena conexión a internet para evitar errores en la conexión.
          </li>
        </ul>
      </div>
      <div>
        <h1>¿Cómo funciona?</h1>
        <p>
          El SACC establece una conexión con la API de <Link to="https://mikrotik.com/">Mikrotik</Link>, de esta forma administra junto con la base de datos las fechas de pago, los días de suspención del servicio y la habilitación del servicio de internet a sus clientes.
        </p>
      </div>
      <div>
        <h1>¿Qué incluye la versión 1.1.0?</h1>
        <p>
          La versión 1.1.0 incluye de momento los siguientes módulos:
        </p>
        <ul style={{ marginTop: -30 }}>
          <li>Dashboard general</li>
          <li>Metodo de administración por Queues, Firewall y Leases</li>
          <li>Mensajes de alerta hasta 2 días antes de la fecha de pago</li>
          <li>Mensajes de alerta el día de pago</li>
          <li>Mensajes de alerta el día de suspención</li>
          <li>Mensajes de bienvenida al agregar a un cliente</li>
          <li>Mensajes de información al agregar pagos</li>
          <li>Módulo de clientes (Agregar, Actualizar, Bajas, Suspención)</li>
          <li>Módulo de cajas (Autorizar pagos, Eliminar pagos, Rechazar pagos, Dashboard)</li>
          <li>Módulo de reportes (Agregar, Actualizar, Finalizar)</li>
          <li>Gráfica de consumo de su mikrotik por interfaces</li>
          <li>Base de datos gratis hasta los 100 clientes</li>
          <li>Mantenibilidad 100% (Seguiremos agregando nuevas funciones sin costo)</li>
          <li>Soporte técnico gratuito</li>
        </ul>
      </div>
      <div>
        <h1>Precios</h1>
        <p>Se manejaran distintos precios según el tamaño de su clientela si usted cuenta con:</p>
        <ul style={{ marginTop: -30 }}>
          <li>Menos de 100 clientes: GRATIS (el soporte es por ticket).</li>
          <li>Más de 100 clientes y menos de 500: MXN$300.00.</li>
          <li>Más de 500 clientes y menos de 1000: MXN$600.00.</li>
          <li>Más de 1000 clientes: MXN$1,000.00.</li>
        </ul>
        {/* <p>Manejamos estos precios con el fin de protejer el espacio de nuestro hosting</p> */}
      </div>
      <div>
        <h1>Galeria</h1> <br />
        <div className="galery">
          <div className="card-img">
            <img src={adminisis} alt="" style={{ width: "100%" }}/>
            <h4>Inicio de sesión</h4> <br />
          </div>
          <div className="card-img">
            <img src={dashboard} alt="" style={{ width: "100%" }}/>
            <h4>Home dashboard</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={clientes} alt="" style={{ width: "100%" }}/>
            <h4>Lista de clientes</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={formclientadd} alt="" style={{ width: "100%" }}/>
            <h4>Formulario de registro</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={historial} alt="" style={{ width: "100%" }}/>
            <h4>Historial del cliente</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={pagos} alt="" style={{ width: "100%" }}/>
            <h4>Lista de pagos</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={formpayment} alt="" style={{ width: "100%" }}/>
            <h4>Formulario de pago</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={consunption} alt="" style={{ width: "100%" }}/>
            <h4>Consumo del cliente</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={reportform} alt="" style={{ width: "100%" }}/>
            <h4>Formulario de reporte</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
          <div className="card-img">
            <img src={dashboard_cajas} alt="" style={{ width: "100%" }}/>
            <h4>Dashboard de cajas</h4> <br />
            {/* <p>Se inicia inicialmente con un usuario y contraseña establecidos por el proveedor.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}