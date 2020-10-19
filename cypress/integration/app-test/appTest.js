/// <reference types="cypress" />

context("app test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("count test", () => {
    cy.server();
    cy.route("GET", "http://swapi.dev/api/films").as("getComment");

    cy.wait("@getComment").then(async () => {
      for (let n = 0; n < Math.floor(Math.random() * 20); n++) {
        cy.get(".voteBTN")
          .eq(Math.floor(Math.random() * Cypress.$(".voteBTN").length))
          .click();
      }

      var countClicked = 0;

      for (let n = 0; n < Cypress.$(".voteBTN").length; n++) {
        cy.get(".countItem")
          .eq(n)
          .invoke("text")
          .then((val1) => {
            countClicked += parseInt(val1);
            if (n === Cypress.$(".voteBTN").length - 1) {
              cy.log(countClicked);
              cy.get(".allCount").should("have.text", parseInt(countClicked));
            }
          });
      }
    });
  });
});
