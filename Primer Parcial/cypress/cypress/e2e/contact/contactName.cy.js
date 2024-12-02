it('debería permitir llenar solo el campo Nombre y dejar los otros vacíos', () => {
    cy.visit('http://localhost:3000/contact');
  
    // Escribir solo en el campo Nombre
    cy.get('input#formName').type('Juan Pérez').should('have.value', 'Juan Pérez');
  
    // Asegurarse de que los otros campos estén vacíos
    cy.get('input#formEmail').should('have.value', '');
    cy.get('textarea#formMessage').should('have.value', '');
  
    // Intentar enviar el formulario
    cy.get('button[type="submit"]').click();
  
    // Verificar que el formulario no se envió
    cy.get('form').then(($form) => {
      expect($form[0].checkValidity()).to.be.false; // Validación HTML5
    });
  });
  