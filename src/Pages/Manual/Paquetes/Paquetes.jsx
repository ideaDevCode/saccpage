import { useState } from "react";
import { Code, DisplayFourth, DisplayThree, Paragraph } from "../../../components/Styled/Styled";
import CardPicture from "../../../components/Cards/CardPicture";
import menu_paquetes from "../../../assets/img/menu-paquetes.png"
import paquete_agregar from "../../../assets/img/paquete-agregar.gif"
import paquete_editar from "../../../assets/img/paquete-editar.gif"
import paquete_eliminar from "../../../assets/img/paquete-eliminar.gif"

export default function Paquetes(){
    const[copied, setCopied] =  useState(false)
    return<>
    <DisplayThree>Configuración de Paquetes</DisplayThree>
    <Paragraph>
        Los paquetes son una parte fundamental de la configuración, ya que son los servicios que se ofrecen a los clientes. A continuación, se detalla cómo agregar un nuevo paquete:
        <br /><br />
        Para ubicar este apartado, debemos dirigirnos al menú que se encuentra en la parte superior izquierda de la pantalla. Este menú se representa con un icono de tres barras horizontales.
        <br /><br />
        Haz clic en el icono del menú para desplegar las opciones disponibles. Verás que, en primera instancia, se encuentra el apartado de "Paquetes".
        <CardPicture>
            <img src={menu_paquetes} alt="menu-paquetes" style={{width: '100%'}} loading="lazy" />
        </CardPicture>
    </Paragraph>
        <br /><br />
    <DisplayFourth>Agregar Paquete:</DisplayFourth>
    <Paragraph>
        <ol>
            <li style={{marginTop: '20px'}} >Dentro de la sección de paquetes, busca y haz clic en el botón "Agregar". Este botón te permitirá comenzar a crear un nuevo paquete.</li>
            <li style={{marginTop: '20px'}}>Se desplegará un formulario que contiene los siguientes campos:
                <ul style={{marginLeft: '20px'}}>
                    <li style={{marginTop: '5px'}}><strong>Nombre del paquete:</strong> Ingresa el nombre del nuevo paquete.</li>
                    <li style={{marginTop: '5px'}}><strong>Ancho de banda:</strong> Indica el ancho de banda que ofrece este paquete.</li>
                    <li style={{marginTop: '5px'}}><strong>Precio:</strong> Especifica el costo que tendrá para el cliente este paquete.</li>
                </ul>
            </li>
            <li style={{marginTop: '20px'}}>Una vez que hayas completado todos los campos del formulario, presiona el botón "Agregar".</li>
            <li style={{marginTop: '20px'}}>Aparecerá una notificación confirmando que el paquete se agregó correctamente. Además, el nuevo paquete se mostrará en la lista o tabla de paquetes disponible en la interfaz.</li>
        </ol>
        <CardPicture>
            <img src={paquete_agregar} alt="Agregar-paquete" style={{width: '100%'}} loading="lazy" />
        </CardPicture>
    </Paragraph><br /><br />
    <DisplayFourth>Editar Paquete:</DisplayFourth>
    <Paragraph>
        <ol>
            <li style={{marginTop: '20px'}}>Para editar un paquete existente, localiza el paquete que deseas editar en la lista. Junto a cada paquete, verás un icono de un lápiz. Haz clic en este icono para editar el paquete correspondiente.</li>
            <li style={{marginTop: '20px'}}>Se abrirá nuevamente el formulario con la información del paquete seleccionado. Realiza las modificaciones necesarias.</li>
            <li style={{marginTop: '20px'}}>Una vez que hayas editado los detalles del paquete, presiona el botón "Editar".</li>
            <li style={{marginTop: '20px'}}>Aparecerá una notificación confirmando que los cambios se realizaron con éxito. Es importante tener en cuenta que al editar un paquete, los cambios también se aplicarán a cada uno de los clientes que tienen ese paquete asignado.</li>
        </ol>
        <CardPicture>
            <img src={paquete_editar} alt="Agregar-editar" style={{width: '100%'}} loading="lazy" />
        </CardPicture>
    </Paragraph><br /><br />
    <DisplayFourth>Eliminar Paquete:</DisplayFourth>
    <Paragraph>
        <ol>
            <li style={{marginTop: '20px'}}>Para eliminar un paquete existente, localiza el paquete que deseas eliminar en la lista. Junto a cada paquete, verás un icono de un contenedor de basura. Haz clic en este icono para eliminar el paquete correspondiente.</li>
            <li style={{marginTop: '20px'}}>Se mostrará una alerta de confirmación preguntando si realmente deseas eliminar ese paquete. Confirma la eliminación haciendo clic en "Eliminar".</li>
            <li style={{marginTop: '20px'}}>Aparecerá una notificación confirmando que el paquete ha sido eliminado exitosamente.</li>
        </ol>
        <CardPicture>
            <img src={paquete_eliminar} alt="Agregar-eliminar" style={{width: '100%'}} loading="lazy" />
        </CardPicture><br /><br />
        Es importante tener en cuenta que no se podrá eliminar un paquete si está siendo utilizado por algún cliente. En ese caso, será necesario primero desasignar el paquete de los clientes correspondientes antes de poder eliminarlo.
    </Paragraph>
    </>
}