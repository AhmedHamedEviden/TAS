import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import TASapp from "../../pageObjects/TASapp/TASapp.index";
import { expect } from "playwright/test";
import fixtures from "../../fixtures/keukenapparaten_fixtures.json";
// OR if no assert needed
const allFixtures = fixtures as { [key: string]: string[] };






setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Print sideBar item voor index: {string} op tab: {string}', async (index,tab) => {
    const tasApp = new TASapp(page);
    await tasApp.sideBarPage.ReturnSideBarItem(index,tab);
    log.silly("Return sideBar items voor index: " + index + " op tab: " + tab);
   
});

Then('Print alle sideBar items voor index: {string} op tab: {string}', async (index,tab) => {
    const tasApp = new TASapp(page);
    await tasApp.sideBarPage.ReturnAllSideBarItems(index,tab);
    log.silly("Return sideBar items voor index: " + index + " op tab: " + tab);
   
});

Then('Sub categories voor categorie: {string} met index: {string} op tab: {string}', async (categoryName: string, index: number, tab: number) => {
    const tasApp = new TASapp(page);
    const result = await tasApp.sideBarPage.getSubCategories(categoryName, index, tab);


    if (!result) {
        throw new Error(`No subcategories found for category '${categoryName}'`);
    }
    expect(result[categoryName]).toEqual(allFixtures[categoryName]);
});


// Then('Sub categories voor categorie: {string} met index: {string} op tab: {string}', async (categoryName,index,tab) => {
//     const tasApp = new TASapp(page);
//     expect(await tasApp.sideBarPage.getSubCategories(categoryName,index,tab)).toMatch(fixtures.json);
//     log.silly("Sub categories voor categorie: " + categoryName + " met index: " + index + " op tab: " + tab);
    
   
// });









export { };



