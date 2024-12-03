
it('debería verificar que al enviar el formualrio los campos se vacien', () =>{
    cy.visit('http://localhost:3000/contact');

    //llenar los campos 
    cy.get('input#formName').type('Juan Pérez');
    cy.get('input#formEmail').type('juan.perez@example.com');
    cy.get('textarea#formMessage').type('Este es un mensaje de prueba.');
    cy.get('button[type="submit"]').click();

    cy.get('input#formName').should('have.value', '');
    cy.get('input#formEmail').should('have.value', '');
    cy.get('textarea#formMessage').should('have.value', '');

});