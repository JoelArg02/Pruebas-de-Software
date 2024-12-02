describe('Edit Task Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Debe permitir editars una tarea existente', () => {
        const task = 'Editable Task';
        const updatedTask = 'Updated Task';

        cy.get('input[placeholder="Escribe tu tarea..."]').type(task);
        cy.get('button').contains('Agregar').click();

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.contains('Editar').click();
            cy.get('input').clear().type(updatedTask);
            cy.contains('Guardar').click();
        });

        cy.get('table tbody tr:nth-child(1) td:nth-child(2)').should('contain', updatedTask);
    });
});
