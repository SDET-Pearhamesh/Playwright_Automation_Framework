import { When } from "@cucumber/cucumber"
import { pageFixture } from "./hooks/browserContextFixture";


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

// When('I click on the submit button', async () => {
           

// });

