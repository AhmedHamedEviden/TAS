import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/TASapp.index";
import TASapp from "../../pageObjects/TASapp/TASapp.index";





setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Druk op type: {string} met naam: {string} met index: {string} op tab: {string}', async (type,button,index, tab) => {
    if(button == "n.v.t."){
    }else{
    const tasApp = new TASapp(page);
    await tasApp.drukOpPage.DrukOpTypeKnop(type,button,index, tab)}
    log.silly("Druk op type: " + type + " met naam: " + button + " met index: " + index + " op tab: " + tab);
    
});

Then('Header button: {string} value: {string} met index: {string} op tab: {string}', async (type,button,index, tab) => {
    const tasApp = new TASapp(page);
    await tasApp.drukOpPage.headernavigatie(type,index,button,tab);
    log.silly("Druk op Header button: " + type + " value: " + button + " met index: " + index + " op tab: " + tab);


    
    
});


export { };



