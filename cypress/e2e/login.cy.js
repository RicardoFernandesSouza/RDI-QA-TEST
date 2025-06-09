describe('Login Page Tests', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  // Hook that runs before each test to navigate to the login page
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // Test case: Successful login with valid credentials
  it('Should login successfully with valid credentials', () => {
    cy.get('#username').type('Ricardo'); 
    cy.get('#password').type('Senha123');
    cy.get('button[type="submit"]').click();

  // Assert that the success message is displayed
    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  // Assert that the success message is displayed
  it('Should fail login with invalid password', () => {
    cy.get('#username').type('Ricardo');
    cy.get('#password').type('Senha124');
    cy.get('button[type="submit"]').click();

    // Assert that an error message about invalid password is shown
    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  // Test case: Login failure with invalid username and valid password
  it('Should fail login with invalid username', () => {
    cy.get('#username').type('Ricardooo');
    cy.get('#password').type('Senha123');
    cy.get('button[type="submit"]').click();

    // Assert that an error message about invalid username is shown
    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  // Test case: Attempt login with both fields empty
  it('Should show error when username and password are empty', () => {
    cy.get('button[type="submit"]').click();

    // Assert that a generic error message is shown
    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });
});