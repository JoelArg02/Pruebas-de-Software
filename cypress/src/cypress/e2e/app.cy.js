describe('Lista de Tareas', () => {
    beforeEach(() => {
      // Navega a la URL de tu aplicación
      cy.visit('http://localhost:3000'); // Asegúrate de que el servidor esté corriendo
    });
  
    it('Debe mostrar el título de la aplicación', () => {
      // Verifica que el título de la aplicación esté presente
      cy.contains('h1', 'Lista de Tareas');
    });
  
    it('Debe permitir agregar una tarea', () => {
      // Escribe en el campo de texto
      cy.get('input[placeholder="Escribe tu tarea..."]').type('Comprar leche');
      
      // Haz clic en el botón "Agregar"
      cy.contains('button', 'Agregar').click();
      
      // Verifica que la tarea se agregó a la tabla
      cy.get('table tbody tr').should('have.length', 1);
      cy.get('table tbody tr td').eq(1).should('contain', 'Comprar leche');
    });
  
    it('Debe agregar múltiples tareas y listarlas correctamente', () => {
      const tareas = ['Comprar leche', 'Estudiar Cypress', 'Hacer ejercicio'];
      
      tareas.forEach((tarea) => {
        // Escribe una tarea y haz clic en "Agregar"
        cy.get('input[placeholder="Escribe tu tarea..."]').type(tarea);
        cy.contains('button', 'Agregar').click();
      });
  
      // Verifica que todas las tareas están listadas en la tabla
      cy.get('table tbody tr').should('have.length', tareas.length);
      tareas.forEach((tarea, index) => {
        cy.get('table tbody tr').eq(index).should('contain', tarea);
      });
    });
  
    it('Debe limpiar el campo de texto después de agregar una tarea', () => {
      // Escribe una tarea y haz clic en "Agregar"
      cy.get('input[placeholder="Escribe tu tarea..."]').type('Hacer limpieza');
      cy.contains('button', 'Agregar').click();
  
      // Verifica que el campo de texto está vacío
      cy.get('input[placeholder="Escribe tu tarea..."]').should('have.value', '');
    });
  });
  