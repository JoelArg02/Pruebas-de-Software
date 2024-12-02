describe('Delete Task Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Debe permitir eliminar una tarea existente', () => {
        const task = 'Task to Delete';


        cy.get('input[placeholder="Escribe tu tarea..."]').type(task);
        cy.get('button').contains('Agregar').click();


        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.contains('Borrar').click();
        });


        cy.get('table tbody tr').should('have.length', 0);
    });
});
