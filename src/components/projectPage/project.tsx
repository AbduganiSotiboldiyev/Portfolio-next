import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import {Box,Typography,Button} from "@mui/material"
import { ProjectPageProps } from '../../interface/projectpage.interface';
import Image1 from 'next/legacy/image'
import { useRouter } from 'next/router';
const responsive  ={
    mobile: {
        breakpoint: { max: 4000, min: 0 },
    items: 1
  }
}
const Projects = ({project} : ProjectPageProps) => {
  
 
  const router = useRouter()
  return (
    <Box className="project_container" >
      <Box sx={{height: {xs:"60vh",lg: "120vh"}}} >
          <Typography pt={4}  textAlign={"center"} sx={{ fontWeight:"500",fontSize:{xs :"28px",sm:"30px",md:"40px", lg:"60px" } }}> Projects </Typography>
           <Carousel responsive={responsive} >
            {project.map(item => (
              
              <Box key={item.id} sx={{height: {xs:"60vh",lg: "120vh"}}}>
                <Button onClick={() => router.push(`${item.proAdress}`) } sx={{cursor :"pointer", display: "block", textAlign: "center", margin: "20px auto", fontSize:{xs:"20px", sm:"24px", md:"28px", lg:"32px"},letterSpacing:"14px"}}>{item.proName}</Button>
                <Box  width={{xs:"75vw", lg:"36.5vw"}}  sx={{boxShadow: "8px 2px 18px 2px grey",borderRadius:"15px", margin : "0 auto"}}>
                  <Box>
                      <Image1 width={700} height={480}  priority={true}  className='project_slider_img' src={item.proImage.url} alt='rasm' style={{borderRadius:"15px" }}/>
                  </Box>
                  <Box width={"50%"} textAlign={"center"} margin={"0 auto"}  mt={5}>
                            <Typography sx={{ fontWeight:"200",fontSize:{xs :"12px",sm:"14px",md:"18px", lg:"24px" } }} fontWeight={"500"} mb={5}>{item.proDescription.slice(0,50)}...  </Typography>
                            <Typography sx={{ fontWeight:"200",fontSize:{xs :"10px",sm:"12px",md:"16px", lg:"20px" } }} color={"gray"} mb={5}>{item.information.text.slice(0,80)}... </Typography>
                            <div dangerouslySetInnerHTML = {{__html : item.information.html}}></div>  
                            <Button onClick={() => router.push(`portfolio/${item.project}`)} sx={{mb:"10px"}}>Read More</Button>                   
                  </Box> 
                </Box>

              </Box>
              


            ) )}
            

          </Carousel>

      </Box>
    </Box>
  )
}

export default Projects