describe('Show main view of URL Shortener App', () => {

  beforeEach(() => {
    cy.fixture('mockData.json')
      .then(mockData => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display the title upon page load', () => {
    cy.contains('h1', 'URL Shortener')
  });

});
