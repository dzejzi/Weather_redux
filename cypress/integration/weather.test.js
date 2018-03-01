describe('Weather Application', function () {
    //run cors before test
    it('should contains input element', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.AppInputSearch input')
    })

    it('should show loader when entering text', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.AppInputSearch input').type('London');
        cy.get('svg.lds-spinner');
        //cy.wait(5000)
    });

    it('should show list with search results', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.AppInputSearch input').type('London');
        cy.get('.AppInputSearch ul').contains('London')
    })

    it('should click to li and path should include /city/XX/London', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.AppInputSearch input').type('London');
        cy.contains('London').click();
        cy.url().should('include', '/city');
        cy.url().should('include', 'London')
    })

    it('should come back to homepage', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.AppInputSearch input').type('London');
        cy.contains('London').click();
        cy.get('.City__iconWrapper__icon').click()
        cy.url().should('be', '/')
    })

})