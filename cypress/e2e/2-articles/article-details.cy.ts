let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle();
  });
  it.skip('и видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it.skip('и видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it.skip('и оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('test');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('И ставит оценку', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
