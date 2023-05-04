/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    // visitar a home
    cy.visit('/')

    // procurar um jogo e clicar no botao de carrinho
    cy.addToCartByIndex(0)

    // procurar outro jogo e clicao no botao de carrinho
    cy.addToCartByIndex(1)

    // procurar outro jogo e clicao no botao de carrinho
    cy.addToCartByIndex(2)

    // verifica se o icone do carrinho tem o numero de jogos
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    // abre o carrinho e verifica se tem 3 items
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    // fecha o carrinho
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    // procura pelo jogo adicionado e remove
    cy.removeFromCartByIndex(0)

    // procura pelo jogo adicionado e remove
    cy.removeFromCartByIndex(1)

    // procura pelo jogo adicionado e remove
    cy.removeFromCartByIndex(2)

    // verifica se o icone do carrinho nao tem nada
    cy.findAllByLabelText(/cart items/i).should('not.exist')

    // abre o carrinho e verifica se ta vazio
    cy.findAllByLabelText(/shopping cart/i).first().click()

    cy.getByDataCy('cart-list').within(() => {
      // cy.findAllByRole('heading', { name: 'Your cart is empty', hidden: true }).should('exist')
      cy.findAllByRole('heading', { name: 'Your cart is empty' }).should('exist')
    })
  })
})