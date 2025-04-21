import {Locator, Page} from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../../hooks/hooks";
import { extractSidebarItems } from "../../helpers/listFunctions/GetsideBarItems";
const log: Logger<ILogObj> = new Logger();


export class SideBar {
    // private readonly newTab = context.pages();
    // readonly tab0 = this.newTab[0];
    // readonly tab1 = this.newTab[1];
    // readonly tab2 = this.newTab[2];
    // readonly tab3 = this.newTab[3];
    // readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator
    readonly sidebarPerItem: Locator;
    readonly allSideBarItems: Locator

    
    constructor(private page:Page) {
        // this.tab1 = this.newTab[1];
        // this.tab2 = this.newTab[2];
        // this.tab3 = this.newTab[3];
        // this.tab4 = this.newTab[4];
        this.page=page;
        this.parentLocator = this.page.locator('[class="page-wrapper"]');
        this.allSideBarItems = this.parentLocator.locator('[data-block="dropdown"] [id="ui-id-1"]');
        this.sidebarPerItem = this.parentLocator.locator('[data-block="dropdown"] [data-appearance="default"]>ul>li');
    }

    async ReturnSideBarItem(index: number) {
        const getSideBarItems = extractSidebarItems(this.sidebarPerItem.nth(index));
        return getSideBarItems;
    }
    async ReturnSideBarItems(index: number) {
        const getSideBarItems = extractSidebarItems(this.allSideBarItems.nth(index));
        return getSideBarItems;
    }

    

  }


      
     

  




  