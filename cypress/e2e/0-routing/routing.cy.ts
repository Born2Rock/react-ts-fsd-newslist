import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('юзер открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('юзер открывает несуществующий маршрут', () => {
      cy.visit('/sdfsdf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });
    it('юзер открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Пользователь открывает страницу списка статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
