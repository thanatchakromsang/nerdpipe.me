import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { Feature } from '.'

// tslint:disable:max-line-length
const contents = [
  {
    imageUrl:
      'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7c/Gibbon_Blank_Stare.png/revision/latest?cb=20161217233125',
    header: 'Develop with existing tools',
    description: 'Code offline with Jekyll, sync with GitHub',
  },
  {
    imageUrl:
      'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest?cb=20160503014517',
    header: 'Edit in the cloud',
    description: 'Easy for non-technical clients, writers, and producers',
  },
  {
    imageUrl:
      'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest?cb=20120921151658',
    header: 'Free your content',
    description: 'Access by API or generate static sites to S3, GitHub, FTP',
  },
]

storiesOf('Feature', module).add('default', () => (
  <Feature contents={contents} />
))
