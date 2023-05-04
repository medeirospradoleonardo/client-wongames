/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessa a pagina de wishlist nao logado
    cy.visit('/wishlist')

    // redireciona e faz signIn
    cy.signIn()

    // verifica se a wishlist ta vazia
    cy.findByText(/Your wishlist is empty/i).should('exist')

    // vou pegar um jogo e adicionar na wishlist
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findAllByLabelText(/add to wishlist/i).click()
    })

    // verificar se o jogo esta la
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remover esse jogo
    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    // verificar se esta vazio
    cy.findByText(/Your wishlist is empty/i).should('exist')
  })
})