import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

function Card ({title,label,picture}){
    return(
        <CardWrapper style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <CardLabel>{title}</CardLabel>
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 10px 10px 10px #e2e3e9;
    }
`
const CardImage = styled.img`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold
`
const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}
export default Card;