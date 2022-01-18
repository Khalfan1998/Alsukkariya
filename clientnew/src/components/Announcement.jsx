import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 40px;
    background-color: lightgrey;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({ display: "none" })}
`

const Announcement = () => {
    return (
        <Container>
            Free Shipping on Orders Over 10 BHD!
        </Container>
    )
}

export default Announcement
