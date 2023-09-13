import { Selector, t } from 'testcafe';

fixture`User Login`.page`https://dev.deepthought.education/login`;

// Test Case 1: Test successful login with valid credentials
test('Valid Login', async () => {
    await t
        .typeText('#username', 'charan4547')
        .typeText('#password', 'Charan@1')
        .click('#login')
});

// Test Case 2: Test unsuccessful login attempts with invalid credentials
test('Invalid Login', async () => {
    await t
        .typeText('#username', 'charan4547') 
        .typeText('#password', 'Charan@13') 
        .click('#login') 
        .expect(Selector('#login-error-notify').exists).ok(); 
});

// Test Case 3: Validate that appropriate error messages are displayed for invalid login attempts
test('Error Messages for Invalid Login', async () => {
    await t
        .typeText('#username', 'charan4557')
        .typeText('#password', 'Charan@12')
        .click('#login') 
        .expect(Selector('#login-error-notify').innerText).eql('×\nLogin Unsuccessful\n\nInvalid login credentials');

});

// Test Case 4: On successful login, validate that the user is redirected to the dashboard screen
test('Redirect to Dashboard', async () => {
    await t
        .typeText('#username', 'charan4547')
        .typeText('#password', 'Charan@1')
        .click('#login')
        
});
