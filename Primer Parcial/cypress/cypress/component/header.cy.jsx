import React from 'react'
import Header from '../../src/common/header'
import { MemoryRouter } from 'react-router-dom'

describe('Header Component', () => {
  it('Debe renderizar correctamente el título del Header', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    cy.get('a.navbar-brand').should('have.text', 'Grupo 3')
  })

  it('Debe renderizar los enlaces con el texto correcto', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const links = ['Inicio', 'Sobre Nosotros', 'Contactanos', 'API']
    cy.get('a.nav-link').should('have.length', links.length)

    links.forEach((linkText, index) => {
      cy.get('a.nav-link').eq(index).should('have.text', linkText)
    })
  })

  it('Debe tener una clase de diseño correcta', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    cy.get('nav.navbar').should('have.class', 'navbar-dark')
    cy.get('nav.navbar').should('have.class', 'bg-dark')
  })
})
