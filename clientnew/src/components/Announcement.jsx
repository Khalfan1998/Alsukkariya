import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 40px;
    background: url("https://i.postimg.cc/5yDzf6dR/background-fill.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: 2000px 100px;
    color: white;
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
