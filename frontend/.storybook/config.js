import * as React from 'react'

import { configure } from '@storybook/react'
import { setAddon, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import { BrowserRouter as Router } from 'react-router-dom'

addDecorator(withKnobs)
setAddon(JSXAddon)

const withStoryStyles = storyFn => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
      }}
    >
      <div style={{ margin: 'auto', maxHeight: '100%' }}>{storyFn()}</div>
    </div>
  )
}

const withRouter = storyFn => <Router>{storyFn()}</Router>

// automatically import all files ending in *.stories.js
const reqComponents = require.context('../src', true, /stories.tsx$/)
function loadStories() {
  addDecorator(withStoryStyles)
  addDecorator(withRouter)
  reqComponents.keys().forEach(reqComponents)
}

configure(loadStories, module)
