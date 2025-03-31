import React, { Fragment } from 'react'
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer2 from '../../components/footer2/Footer2'
import Navbar from '../../components/Navbar/Navbar'

const BlogDetailsFull = () => {
  return (
    <Fragment>
      {/* <Navbar3 /> */}
      <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />

      <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
      <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'} />
      {/* <Footer2/> */}
      <Scrollbar />
    </Fragment>
  )
}
export default BlogDetailsFull
