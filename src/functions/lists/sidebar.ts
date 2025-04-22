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
    readonly allCategories: Locator

    
    constructor(private page:Page) {
        // this.tab1 = this.newTab[1];
        // this.tab2 = this.newTab[2];
        // this.tab3 = this.newTab[3];
        // this.tab4 = this.newTab[4];
        this.page=page;
        this.parentLocator = this.page.locator('[class="page-wrapper"]');
        this.allSideBarItems = this.parentLocator.locator('[data-block="dropdown"] [id="ui-id-1"]');
        this.sidebarPerItem = this.parentLocator.locator('[data-block="dropdown"] [data-appearance="default"]>ul>li');
        this.allCategories = this.parentLocator.locator('[data-block="dropdown"] [id="ui-id-1"]'); // Top level categories like 'Meubilair'

    }
     /**
     * Finds a category by its name and returns all subcategory names under it.
     * @param categoryName The name of the main category to find (e.g., "Meubilair")
     */

     

    async ReturnSideBarItem(index: number) {
        const getSideBarItems = extractSidebarItems(this.sidebarPerItem.nth(index));
        return getSideBarItems;
    }
    async ReturnSideBarItems(index: number) {
        const getSideBarItems = extractSidebarItems(this.allSideBarItems.nth(index));
        return getSideBarItems;
    }


// try some new code

async getSubCategories(categoryName: string, index: number): Promise<{ [key: string]: string[] }> {
    const subcategories: string[] = [];

    const categoryLinks = this.page.locator(`[data-block="dropdown"] ul li a`, { hasText: categoryName });
    const categoryLink = categoryLinks.nth(index);

    await categoryLink.waitFor({ state: 'visible', timeout: 5000 });
    await categoryLink.hover();
    await this.page.waitForTimeout(300);

    const parentLi = categoryLink.locator('..');
    const nestedUl = parentLi.locator('ul > li > a');

    if (await nestedUl.first().isVisible({ timeout: 3000 })) {
      const count = await nestedUl.count();
      for (let i = 0; i < count; i++) {
        const item = nestedUl.nth(i);
        const text = (await item.textContent())?.trim();
        if (text) {
          subcategories.push(text);
        }
      }
    } else {
      console.warn(`⚠️ No subcategories found under '${categoryName}'`);
    }

    return { [categoryName]: subcategories }; // Return as object
}

  }

  


      
     

  




  