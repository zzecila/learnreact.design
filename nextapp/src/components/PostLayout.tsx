import { jsx } from '@emotion/core'
import React from 'react'
import { FunctionComponent } from 'react'
import { NextSeo } from 'next-seo'
import { MDXProvider } from '@mdx-js/react'

type LayoutProps = {
  meta: any
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold my-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold my-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-bold" {...props} />,
  ul: (props: any) => <ul className="list-outside list-disc ml-5" {...props} />,
  ol: (props: any) => (
    <ol className="list-outside list-decimal ml-5" {...props} />
  ),
  a: (props: any) => <a className="underline" {...props} />,
  p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
  hr: (props: any) => <hr className="my-6" {...props} />,
}

export const PostLayout: FunctionComponent<LayoutProps> = ({
  children,
  meta,
}) => {
  const { title, description, titleAppendSiteName = false, url, ogImage } =
    meta || {}
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />
      <MDXProvider components={components}>
        <div className="prose md:prose-xl max-w-screen-md mt-0 mx-auto leading-6">
          {title && <h1 className="text-xl leading-tight">{title}</h1>}
          {children}
        </div>
      </MDXProvider>
    </>
  )
}
