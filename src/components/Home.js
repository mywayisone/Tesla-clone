import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title= "New Car Series"
            description= "Your Dream Car is a Step Away"
            backgroundImg="joey.jpg"
            leftButton = "custom order"
            rightButton = " existing inventory"
        />
        <Section 
            title= "New Benz Model"
            description= "Get Yours at Affordable Price"
            backgroundImg="benz.jpg"
            leftButton = "custom order"
            rightButton = " existing inventory"
        />
        <Section 
            title= "HYUNDA 440"
            description = "Her birthday is at the corner? surprise her with this..."
            backgroundImg= "audi.jpg"
            leftButton= "custom order"
            rightButton = "existing inventory"
        />
        <Section 
            title ="BENTLY 554"
            description="Looks so slick..."
            backgroundImg="benzy.jpg"
            leftButton= "custom order"
            rightButton="existing inventory"
        />
        <Section 
            title ="Accessories"
            backgroundImg="benzy.jpg"
            leftButton= "shop now"
            
        />
    </Container>
  )
}

export default Home
const Container = styled.div`
    height : 100vh;
`