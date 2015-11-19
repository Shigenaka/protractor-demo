'use strict';

describe('Twitter login form', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/');

        var emailInput = element(by.model('email'));
        emailInput.sendKeys('test@example.com');
        var passwordInput = element(by.model('password'));
        passwordInput.sendKeys('password');
    })

    it('should have a page title of "Twitter"', function() {
        expect(browser.getTitle()).toEqual('Twitter');
    });

    it('should disable the sign-in button when invalid', function() {

    })

    it('should let the user sign in to an account', function() {
        var signInButton = element(by.buttonText('Sign-in'));
        signInButton.click();
    })
});
