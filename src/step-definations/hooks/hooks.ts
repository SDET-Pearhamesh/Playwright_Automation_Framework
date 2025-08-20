import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";

let browser: Browser;


// BeforeAll hook: Runs once before all scenarios
BeforeAll(async function(){
console.log("\n Execution test suite ....");
})


// AfterAll hook: Runs once after all scenarios
AfterAll(async function(){
console.log("\n Finished execution of test suite ....");
})


// Before hook: Runs once before each scenarios
Before(async function(){

    browser = await chromium.launch({headless: false});
    pageFixture.context = await browser.newContext({viewport: { width: 1920, height: 1080}});
    pageFixture.page = await pageFixture.context.newPage();
})


// After hook: Runs once after each scenarios
After(async function(){

    await pageFixture.page.close();
    await browser.close();
})