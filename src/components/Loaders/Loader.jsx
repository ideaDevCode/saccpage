import styled from "styled-components";
import sacc from '../../assets/img/sacc.png';


const Container = styled.div`
    width: 95vw;
    height: 100dvh;
    display: grid;
    place-content: center;
`;

export default function Loader() {
    return <Container>
        <img 
            src={sacc} 
            alt="sacc.png" 
            width={80} 
        />
    </Container>
}