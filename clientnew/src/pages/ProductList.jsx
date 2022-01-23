import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
//import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import Navbarmobile from '../components/Navbarmobile'


const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
`
const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display:"flex", flexDirection:"column" })}
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
  
`;

const FooterContainer = styled.div`
background-color: white;

`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ paddingBottom: "5%" })}
`

const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")
    const id = location.pathname.split("/")[2]
    const [product,setProduct] = useState({});
    const dispatch = useDispatch()
  
    useEffect(()=>{
      const getProduct = async ()=>{
        try {
          const res = await publicRequest.get("/products/find/" + id)
          setProduct(res.data);
        } catch {}
      }
      getProduct();
    },[id])
    

    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }
    console.log(filters)
    
    return (
        <Container>
             <NavbarContainer>
          <Navbar/>
          
          </NavbarContainer>
          <Navbarmobile/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product:</FilterText>
                    <Select name="color"onChange={handleFilters}>
                        <Option disabled>
                            options
                        </Option>
                        <Option>
                            Show All
                        </Option>
                        <Option>
                            Large
                        </Option>
                        <Option>
                            Galaxy
                        </Option>
                        
                    </Select>
                
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                        <Select onChange={e=>setSort(e.target.value)}>
                            <Option value="newest">
                                Newest
                            </Option>
                            <Option value="asc">
                                Price (asc)
                            </Option>
                            <Option value="desc">
                                Price (desc)
                            </Option>
                        </Select>
                </Filter>
            </FilterContainer>
            <Products cat = {cat} filters= {filters} sort = {sort}/>
           
            <br/>
            <br/>
            <FooterContainer>
      <Footer/>
      </FooterContainer>
        </Container>
        
    )
}

export default ProductList
