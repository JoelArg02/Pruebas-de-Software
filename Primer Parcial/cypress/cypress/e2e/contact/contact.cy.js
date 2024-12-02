it('debería permitir escribir en los campos del formulario', () => {
    cy.visit('/contact');
  
    cy.get('input#formName').type('Juan Pérez').should('have.value', 'Juan Pérez');
  
    cy.get('input#formEmail').type('juan.perez@example.com').should('have.value', 'juan.perez@example.com');
  
    cy.get('textarea#formMessage').type('Este es un mensaje de prueba.').should('have.value', 'Este es un mensaje de prueba.');
  });
  

  it('debería validar que el campo Email contenga un "@" antes de enviar', () => {
    cy.visit('/contact');
    
    cy.get('input#formEmail').type('juan.perezexample.com');
    cy.get('button[type="submit"]').click();
    
    cy.get('form').then(($form) => {
      expect($form[0].checkValidity()).to.be.false; // Validación HTML5
    });
  
    // Corregir el email y reintentar
    cy.get('input#formEmail').clear().type('juan.perez@example.com');
    cy.get('button[type="submit"]').click();
    
    // Verificar que ahora sea válido
    cy.get('form').then(($form) => {
      expect($form[0].checkValidity()).to.be.true; // Validación HTML5
    });
  });
  