/// <reference path="../support/index.d.ts" />

import { genreFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  it('should render filters columns', () => {
    cy.visit('/games')

    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(sortFields)
    cy.getFields(genreFields)
  })
})