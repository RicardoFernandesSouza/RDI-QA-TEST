describe('Login Page Tests', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Should login successfully with valid credentials', () => {
    cy.get('#username').type('Ricardo');
    cy.get('#password').type('Senha123');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('Should fail login with invalid password', () => {
    cy.get('#username').type('Ricardo');
    cy.get('#password').type('Senha124');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Should fail login with invalid username', () => {
    cy.get('#username').type('Ricardooo');
    cy.get('#password').type('Senha123');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Should show error when username and password are empty', () => {
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });
});