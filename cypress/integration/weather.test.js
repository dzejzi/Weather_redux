describe('Weather Application', function () {
    //run cors before test
    it('should contains form elements', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form')
        cy.get('input.LoginForm__form__input')
        cy.get('button.LoginForm__form__button')
    });

    it('should show error messages', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('qwerty');
        cy.get('form.LoginForm__form input:nth-child(3)').type('uiop');
        cy.contains('Submit').click(); 
        cy.get('form.LoginForm__form span').contains('Please enter'); 
    });

    it('should login to application', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
    });

    it('should show cookieBanner', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.clearLocalStorage()
        cy.get('div.CookieBanner')
    });

    it('should not show cookieBanner', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.clearLocalStorage();
        cy.contains('Accept').click();
        cy.get('div').not('CookieBanner')
    });


    it('should contains input element', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.contains('Accept').click();
        cy.get('.AppInputSearch input')
    })

    it('should show loader when entering text', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.contains('Accept').click();
        cy.get('.AppInputSearch input').type('London');
        cy.get('svg.lds-spinner');
        //cy.wait(5000)
    });

    it('should show list with search results', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.contains('Accept').click();
        cy.get('.AppInputSearch input').type('London');
        cy.get('.AppInputSearch ul').contains('London')
    })

    it('should click to li and path should include /city/XX/London', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.contains('Accept').click();
        cy.get('.AppInputSearch input').type('London');
        cy.contains('London').click();
        cy.url().should('include', '/city');
        cy.url().should('include', 'London')
    })

    it('should come back to homepage', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.contains('Accept').click();
        cy.get('.AppInputSearch input').type('London');
        cy.contains('London').click();
        cy.get('.City__iconWrapper__icon').click()
        cy.url().should('be', '/')
    })

    it('after refresh it should visit login', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('form.LoginForm__form input:first').type('akra');
        cy.get('form.LoginForm__form input:nth-child(3)').type('akra');
        cy.contains('Submit').click(); 
        cy.url().should('be', '/') 
        cy.contains('Accept').click();
        cy.reload();
        cy.url().should('be', 'http://localhost:3000/login') 
    })

})