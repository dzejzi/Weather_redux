describe('Weather Application', function(){
    it('should contains 3 buttons with cities', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('.weatherApp ul').should('contain', 'San Francisco');
        cy.get('.weatherApp ul').should('contain', 'Los Angeles');
        cy.get('.weatherApp ul').should('contain', 'San Diego');
    })

    it('should redirect to correct city', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('San Francisco').click();
        cy.url().should('include', '/city')
        cy.url().should('include', 'San_Francisco')     
    })

    it('should come back to homepage', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('San Francisco').click();
        cy.get('.City__iconWrapper__icon').click()
        cy.url().should('be', '/')  
    })


})