describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Debe cargar la página de inicio y mostrar el título correcto', () => {
        cy.title().should('eq', 'Grupo 3 - Inicio');
    });

    it('Should add a task and display it in the table', () => {
        const task = 'Test Task';

        cy.get('input[placeholder="Escribe tu tarea..."]').should('exist').type(task);
        cy.get('button').contains('Agregar').click();

        cy.get('table tbody tr', { timeout: 5000 }).should('have.length', 1).and('contain', task);
    });
    it('Should not add a task if the input is empty', () => {
        cy.contains('Agregar').click();
        cy.get('table tbody tr').should('have.length', 0);
    });

    it('Should add multiple tasks and display them in order', () => {
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
