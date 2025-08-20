import { setDefaultTimeout } from "@cucumber/cucumber";

// If cucumber time is too low this affect playwright timeouts
// We will set "--require src/utils/cucumber-timeouts.ts" in script section in package.json so it applied to entire script

setDefaultTimeout(60000); // 60 Seconds



