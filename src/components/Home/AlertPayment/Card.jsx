import mensajeria from '../../../assets/img/mensajeria.gif';
import CardPicture from '../../Cards/CardPicture';

export default function Card() {
    return (
        <CardPicture width="70%">
            <img src={mensajeria} alt="" style={{ width: '100%' }}/>
        </CardPicture>
    )
}