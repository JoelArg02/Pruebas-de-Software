describe('Add Task Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Debe cargar la página de inicio y mostrar el título correcto', () => {
        cy.title().should('eq', 'Grupo 3 - Inicio');
    });

    it('Debe agregar una tarea y mostrarla en la tabla', () => {
        const task = 'Test Task';

        cy.get('input[placeholder="Escribe tu tarea..."]').should('exist').type(task);
        cy.get('button').contains('Agregar').click();

        cy.get('table tbody tr', { timeout: 5000 }).should('have.length', 1).and('contain', task);
    });

    it('No debe agregar una tarea si el campo está vacío', () => {
        cy.contains('Agregar').click();
        cy.get('table tbody tr').should('have.length', 0);
    });

    it('Debe agregar múltiples tareas y mostrarlas en orden', () => {
        const tasks = ['Task 1', 'Task 2', 'Task 3'];
        tasks.forEach(task => {
            cy.get('input[placeholder="Escribe tu tarea..."]').type(task);
            cy.get('button').contains('Agregar').click();
        });
        cy.get('table tbody tr').should('have.length', tasks.length);
        tasks.forEach((task, index) => {
            cy.get(`table tbody tr:nth-child(${index + 1}) td:nth-child(2)`).should('contain', task);
        });
    });
});
