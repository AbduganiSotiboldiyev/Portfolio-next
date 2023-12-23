import Layout from '@/layout/layout'
import React from 'react'
import About from '../../components/aboutPage/aboutPage'
import { GetServerSideProps } from 'next'
import { PortfolioServece } from '@/services/porfolio-service'
import { AboutMe } from '@/interface/aboutme.interface'
import SEO from '@/layout/seo/seo'

const AboutPage = ({aboutmes} : AboutPagePropsBlog) => {
  return (
    <SEO metaTitle='About Me'>
      <Layout>
        <About aboutmes={aboutmes}/>
      </Layout>

    </SEO>
  )
}

export default AboutPage

export const getServerSideProps : GetServerSideProps<AboutPagePropsBlog> = async () => {
  const aboutmes = await PortfolioServece.getAboutMe()
  return {
    props : {
      aboutmes
    }
  }
}

interface AboutPagePropsBlog {
  aboutmes: AboutMe[]
}