describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });
  afterEach(() => {});
  it.skip('и упали с ошибкой', () => {
    cy.getByTestId('sdfsdfsdf').should('exist');
  });
  it('и статьи успешно подгружаются', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
