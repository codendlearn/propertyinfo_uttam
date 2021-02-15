import Box from '@material-ui/core/Box'
import React from 'react'
import './App.css'
import ButtonAppBar from './components/AppBar'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import PropertiesList from './components/PropertiesList'
import {SectionItem} from './components/SectionItem'

import pic1 from './images/pic01.jpg'
import pic2 from './images/pic02.jpg'
import pic3 from './images/pic03.jpg'

function App() {
  return (
    <Box>

      <div id="page-wrapper">
        <ButtonAppBar />
        <HeroBanner />

        <section id="wrapper">
          <SectionItem
            id="one"
            styleType="wrapper spotlight style1"
            imageUrl={pic1}
            title="MAGNA ARCU FEUGIAT"
            description="description of the first section.description of the first section.description of the first section.description of the first section.description of the first section." />

          <SectionItem
            id="two"
            styleType="wrapper alt spotlight style2"
            imageUrl={pic2}
            title="Tempus adipiscing"
            description="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
            turpis ante, nullam sit amet turpis non, sollicitudin posuere
            urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
            dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
            cursus." />


          <SectionItem
            id="three"
            styleType="wrapper spotlight style3"
            imageUrl={pic3}
            title="Nullam dignissim"
            description="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
            turpis ante, nullam sit amet turpis non, sollicitudin posuere
            urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
            dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
            cursus." />

          <PropertiesList />
        </section>

        <Footer />
      </div >
    </Box >
  )
}

export default App
