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

  it('Should display URL card upon page load', () => {
    cy.get('section').find(':nth-child(1)').should('be.visible')
  });

  it('Should display the form and corresponding button', () => {
    cy.get('form').find('[placeholder="Title..."]').should('be.visible')
    .get('form').find('[placeholder="URL to Shorten..."]').should('be.visible')
    .get('form').find('button').should('be.visible')
  });

  it('Should display the form placeholders', () => {
    cy.get('form').find('[placeholder="Title..."]').invoke('attr', 'placeholder').should('contain', 'Title')
      .get('form').find('[placeholder="URL to Shorten..."]').invoke('attr', 'placeholder').should('contain', 'URL to Shorten')
  });

});
