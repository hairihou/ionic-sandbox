describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/tabs/tab1');
    cy.contains('segment1');
    cy.contains('segment2');
    cy.contains('segment3');
  });
});
