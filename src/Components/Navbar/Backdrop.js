import styled from "styled-components";


const Back = styled.div`
position: fixed;
width: 100%;
height: 100%;
z-index:999;
top: 0;
left: 0;
background-color: transparent;
`
const Backdrop = ({ show, clicked }) =>
    show ? (
        < Back
            onClick={clicked}
        ></Back>
    ) : null;

export default Backdrop