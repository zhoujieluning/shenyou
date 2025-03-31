import React, { Fragment } from 'react'
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.png'
import Footer2 from '../../components/footer2/Footer2'
import Navbar from '../../components/Navbar/Navbar'

const BlogPageFullwidth = () => {
  return (
    <Fragment>
      {/* <Navbar3 Logo={Logo} /> */}
      <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />

      <PageTitle pageTitle={''} pagesub={''} />
      <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'} />
      {/* <Footer2 /> */}
      <Scrollbar />
    </Fragment>
  )
}
export default BlogPageFullwidth
