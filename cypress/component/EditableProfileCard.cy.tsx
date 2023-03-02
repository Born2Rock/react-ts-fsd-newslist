import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from '../../src/features/EditableProfileCard';

const USER_ID = '4';

describe('EditableProfileCard.cy.ts', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
              },
            },
          },
        }}
      >
        <EditableProfileCard id="1" />
      </TestProvider>,
    );
  });
});
