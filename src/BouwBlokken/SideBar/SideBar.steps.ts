import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import TASapp from "../../pageObjects/TASapp/TASapp.index";






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









export { };



