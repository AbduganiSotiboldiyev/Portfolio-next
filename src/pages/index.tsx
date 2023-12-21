// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import Layout from '@/layout/layout'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <Layout>
//       Salom
//     </Layout>
//   )
// }

import { About, Hero, Projects } from '@/components'
import { AboutMe } from '@/interface/aboutme.interface'
import { PortfolioType } from '@/interface/portfolio.interface'
import { Project } from '@/interface/projects.interface'


import Layout from '@/layout/layout'
// import SEO from '@/layout/seo/seo'
import { PortfolioServece } from '@/services/porfolio-service'
import { Box } from '@mui/material'

import { GetServerSideProps } from 'next'
import Head from 'next/head'



const IndexPage = ({apps, aboutmes,project} : HomePageProps) => {
  

  return (
    
      <Layout>
        
          <Hero apps={apps}/>
          <About aboutmes = {aboutmes}/>
          <Projects project = {project}/>
      </Layout>

  
  )
}

export default IndexPage

export const getServerSideProps : GetServerSideProps<HomePageProps> = async () => {

  const apps = await PortfolioServece.getAllApps()
  const aboutmes = await PortfolioServece.getAboutMe()
  const project = await PortfolioServece.getProjects()
  return {
    props: {
      apps,
      aboutmes,
      project
    }
  }
}


interface HomePageProps {
  apps: PortfolioType[],
  aboutmes : AboutMe[],
  project : Project[]
}