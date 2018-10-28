import * as React from 'react'
import styled from 'styled-components'

import UnstyledGrid from '@material-ui/core/Grid'

interface Props {
  contents: Content[]
}

interface Content {
  imageUrl: string
  header: string
  description: string
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 0;
  background: linear-gradient(180deg, #3f51b5 12rem, #f7f8fa 8rem, #f7f8fa);
`

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
`

const Grid = styled(UnstyledGrid)`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`

export const Feature = (props: Props) => {
  const { contents } = props
  return (
    <Wrapper>
      <Grid container spacing={24}>
        {contents.map(content => (
          <Grid item xs>
            <Image src={content.imageUrl} />
            <h5>{content.header}</h5>
            <p>{content.description}</p>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}
