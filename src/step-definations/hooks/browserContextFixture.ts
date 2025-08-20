import { context } from "@cucumber/cucumber"
import { BrowserContext , Page } from "@playwright/test"

export const pageFixture = {

    // @ts-ignore
    page: undefined as Page,

    // @ts-ignore
    context: undefined as BrowserContext,


    // About comment is from cucumber, which suprresses the errro though they are right
}
