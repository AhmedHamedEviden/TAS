import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";


import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { Voorbeeld } from "../../functions/Invullen/Voorbeeld";
import { SideBar } from "../../functions/lists/sidebar";


export class SideBarPage{
  readonly page: Page;

  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    
  }

    async ReturnSideBarItem(index: number,tab: number){
            const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
            if (targetTab){
            return await new SideBar(targetTab).ReturnSideBarItem(index);
            }
            {return}
    }
    async ReturnAllSideBarItems(index: number,tab: number){
      const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
      if (targetTab){
      return await new SideBar(targetTab).ReturnSideBarItems(index);
      }
      {return}
}


   

}