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

  it('Should be able to type text in the form inputs', () => {
    cy.get('form').find('[placeholder="Title..."]').type('Test')
      .get('form').find('[placeholder="URL to Shorten..."]').type('testURL.com/example/wowzers')
  });

});

describe('Show main view of URL Shortener App', () => {

  beforeEach(() => {

    cy.fixture('mockData.json')
      .then(mockData => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: mockData
        })
      })

    cy.fixture('postMockdata.json')
      .then(mockData => {
        cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should be able to add a new url and it render to the main page', () => {
    cy.get('form').find('[placeholder="Title..."]').type('test title')
      .get('form').find('[placeholder="URL to Shorten..."]').type('testURL.com/example/wowzers25387092608731985794')
      .get('form').find('button').click()
      .get('section > :nth-child(2)').find('[data-cy=title]').should('contain', 'test title')
      .get('section > :nth-child(2)').find('[data-cy=short-url]').should('contain', 'http://localhost:3001/useshorturl/2')
      .get('section > :nth-child(2)').find('[data-cy=long-url]').should('contain', 'https://testURL.com/example/wowzers25387092608731985794')
  });

});
