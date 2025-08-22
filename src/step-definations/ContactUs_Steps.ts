import { When, Then } from "@cucumber/cucumber"
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


When('I type a first name', async () => {

    const firstName_textField = pageFixture.page.getByPlaceholder("First Name")
    await firstName_textField.fill("Rahul")

});

When('I type a last name', async () => {

    const lastName_textField = pageFixture.page.getByPlaceholder("Last Name")
    await lastName_textField.fill("Rabada")

});

When('I enter a email address', async () => {

    const email_textField = pageFixture.page.getByPlaceholder("Email Address")
    await email_textField.fill("test@test.com")

});


When('I type a comment', async () => {

    const comments_textField = pageFixture.page.getByPlaceholder("Comments")
    await comments_textField.fill("I would like to get in touch, please let me know your availability")

});


When('I click on the submit button', async () => {

    const submitButton = pageFixture.page.locator('input[value="SUBMIT"]');
    await submitButton.click();
});


When('I type a specific first name {string}', async (firsName: string) => {
    const firstName_textField = pageFixture.page.getByPlaceholder("First Name")
    await firstName_textField.fill(firsName)
});


When('I type a specific last name {string}', async (lastName: string) => {
    const lastName_textField = pageFixture.page.getByPlaceholder("Last Name")
    await lastName_textField.fill(lastName)
});


When('I enter a specific email address {string}', async (email: string) => {
    const email_textField = pageFixture.page.getByPlaceholder("Email Address")
    await email_textField.fill(email)

});


When('I type specific text {string} and a number {int} within the comment input field', async (comment: string, days: number) => {
    const comments_textField = pageFixture.page.getByPlaceholder("Comments")
    await comments_textField.fill(`${comment} ${days}`)
});


Then('I should be presented with a successful contact us submission message', async () => {

    const messageText = await pageFixture.page.getByText('Thank You for your Message!').textContent();
    expect(messageText).toEqual("Thank You for your Message!")

});


Then('I should be presented with a unsuccessful message', async () => {

    const errorMessage = await (await pageFixture.page.waitForSelector("body")).textContent()
    expect(errorMessage).toMatch(/Error: (all fields are required|Invalid email address)/)

});


// Random data - faker data

When('I type a random first name', async () => {
    
    const randomFirstName = faker.person.firstName();
    const firstName_textField = pageFixture.page.getByPlaceholder("First Name")
    await firstName_textField.fill(randomFirstName)
});


When('I type a random last name', async () =>  {
    const randomLastName = faker.person.lastName();
    const lastName_textField = pageFixture.page.getByPlaceholder("Last Name")
    await lastName_textField.fill(randomLastName)

});


When('I enter a random email address', async () =>  {    
    
    const randomEmail = faker.internet.email();
    const email_textField = pageFixture.page.getByPlaceholder("Email Address");
    await email_textField.fill(randomEmail);
    
});



