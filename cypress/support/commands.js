//file-upload icin asagideki kod lazim
import 'cypress-file-upload'

//cy.clickIfVisible('locate')  bunu da stepdef e ekleriz. tirnak icine locate veririz.

Cypress.Commands.add("verifyTextInElements", (elementLocator, textToVerify, textToVerify2) => {
  const normalizedText = textToVerify.toLowerCase();
  const normalizedText2 = textToVerify2.toLowerCase();

  cy.get(elementLocator)
    .should("be.visible", { timeout: 10000 })
    .each(($element) => {
      cy.wrap($element)
        .invoke("text")
        .then((elementText) => {
          const normalizedElementText = elementText.toLowerCase();
          cy.log(normalizedElementText);
          expect(normalizedElementText).to.satisfy((text) => {
            // İstenen iki metni içeren kontrol
            return text.includes(normalizedText) || text.includes(normalizedText2);
          });
        });
    });
});

Cypress.Commands.add('login', (username,password) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})