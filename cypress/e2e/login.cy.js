describe('Login Page Tests', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  // Before every test, go to the login page
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // Test 1: Login with correct username and password
  it('Should login successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith'); 
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

  // should show a success message
    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  // Test 2: Correct username, wrong password - Negative test
  it('Should fail login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('superSecretPassword!');
    cy.get('button[type="submit"]').click();

    // should show an error message about the password
    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  // Test 3: Wrong username, correct password - Negative test
  it('Should fail login with invalid username', () => {
    cy.get('#username').type('Tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // should show an error message about the username
    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  // Test 4: Attempt login with both fields empty - Negative test
  it('Should show error when username and password are empty', () => {
    cy.get('button[type="submit"]').click();

    // should still show an error (probably about the username)
    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

    // Test 5: Attempt login with Username field empty - Negative test
  it('Should show error when username are empty', () => {
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
  
    // should still show an error (probably about the username)
    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
    });

    // Test 6: Attempt login with Password field empty - Negative test
  it('Should show error when password are empty', () => {
    cy.get('#username').type('tomsmith');
    cy.get('button[type="submit"]').click();
  
    // should still show an error (probably about the password)
    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
    });
});