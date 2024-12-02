import React from 'react'
import EditableRow from './index'

describe('<EditableRow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EditableRow />)
  })
})