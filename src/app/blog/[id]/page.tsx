import BlogDetail from '@/components/blog-detail';
import React from 'react'

const BlogDetailPage = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;

  return (
    <BlogDetail id={id} />
  )
}

export default BlogDetailPage
