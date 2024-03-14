import isisinternet from '../../../assets/img/isisinternet.png';
import ciberchata from '../../../assets/img/CiberChata.png';
import gchconectados from '../../../assets/img/gch.png';
import { Brands } from "../../../components/Styled/Styled";

const company = [
    gchconectados,
    isisinternet,
    ciberchata
];

export default function Logotipos() {
    return (
        <Brands>
            { company.map((company, index) => (
                <img 
                    key={index}
                    src={company} alt={company} 
                    style={{ 
                        width: '80%', 
                        filter: 'grayscale(100%)', 
                        zIndex: '-10'
                    }}
                />
            ))}
        </Brands>
    );
}