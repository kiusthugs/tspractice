import React, { ReactElement } from 'react'

type HeadingProps = {title: string}

//HeadingProps.title = string
//title is prop from app
const Heading = ({title}: HeadingProps): ReactElement => {
  return (
    <div>{title}</div>
  )
}

export default Heading