describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/') 
  })

  it('displays the text "Hello World!" as the main heading', () => {
    cy.contains('h1', 'Hello World!').should('be.visible')
  })

  it('verifies the text "Hello World!" is properly styled', () => {
    cy.contains('h1', 'Hello World!')
      .should('have.css', 'font-size', '32px')
      .should('have.css', 'font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif')
      .should('have.css', 'text-align', 'center')
  })

  //it('verifies that the landing page does not display additional text', () => {
   // cy.contains('body').should('be.empty')
  

  it('verifies that the landing page loads efficiently', () => {
    cy.window().then((win) => {
      const { performance } = win
      if (performance) {
        const { timing } = performance
        expect(timing.responseEnd - timing.navigationStart).to.be.lessThan(2000) // Adjust the threshold as per your requirements
      }
    })
 })
})