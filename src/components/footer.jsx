import styled from "styled-components";

const Footer = ()=> {
    return(
        <FootWrapp>
            Card-Oⓒ2024_ppurio <br />
            공서연,김동휘,노경민,주희연,조희연
        </FootWrapp>
    )
}

const FootWrapp = styled.footer`
width:100%;
height:100px;

background: #EAEAEA;
color:#7F7F7F;
font-size:9px;
padding:10px;

`

export default Footer;
