import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";


export class DrukOpTypeButton {
  readonly parentLocator: Locator;
  readonly headerBlock: Locator;
  readonly hamburgerMenu: Locator;
  readonly logo: Locator;
  readonly zoekenInvullen: Locator;
  readonly accountLogo: Locator;
  readonly winkelMandje: Locator;
  private readonly newTab = context.pages();
  readonly tab0 = this.newTab[0];
  readonly tab1 = this.newTab[1];
  readonly tab2 = this.newTab[2];
  readonly tab3 = this.newTab[3];
  readonly tab4 = this.newTab[4];


  constructor(private page: Page) {
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.page = page;
    this.parentLocator = this.page.locator('[class="page-wrapper"]');
    this.headerBlock = this.parentLocator.locator('[class="header content"]');
    this.hamburgerMenu = this.headerBlock.locator('[data-block="dropdown"]>span>div>div>div');
    this.logo=this.headerBlock.locator('[class="logo"]');
    this.zoekenInvullen = this.headerBlock.locator('[placeholder="Zoeken"]');
    this.accountLogo = this.headerBlock.locator('[class="header__account-icon"]');
    this.winkelMandje = this.headerBlock.locator('[class="action showcart"]');
    
     
  }

  async drukOpTypeButton(type: string,text: string,index: number) {
    await this.page.waitForLoadState("load");
    
    if (type == "label" && text != "Yes" && text  != "No") {
      await this.page.waitForTimeout(200);
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").nth(index).click()  
      await this.page.waitForTimeout(200);

    }

    else if(type == "radio" ){
      await this.page.waitForTimeout(200);
      await this.page.locator("[value='" + `${text}` + "'] ").nth(index).waitFor({state: 'visible'});
      await this.page.locator("[value='" + `${text}` + "'] ").nth(index).click();  
      await this.page.waitForTimeout(200);
      
    }

    else  if (type == "button" && index == 9999){
      await this.page.waitForTimeout(200)
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").click();
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(200);
    }
    else  if (type == "button" && index != 9999){
      await this.page.waitForTimeout(200)
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").nth(index).click();
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(800);
    }

    else if(type == "checkbox" ){
      await this.page.waitForTimeout(500)
      const button = this.parentLocator.locator("label:has-text('" + `${text}` + "')");
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }

    else if(type == "aria label" ){
      const button = this.parentLocator.locator("[aria-label='" + `${text}` + "']");
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(10000);
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }
  
  }

  async DrukHeaderButtons(button: string, index: number, value: string) {
    await this.page.waitForLoadState("load");

    switch (button) {
        case "Hamburger menu":
            await this.page.waitForTimeout(800);
            await this.hamburgerMenu.nth(index).hover({timeout: 2000});
            await this.hamburgerMenu.nth(index).waitFor({ state: "visible" });
            await this.hamburgerMenu.nth(index).click();
            break;

        case "Logo":
            await this.page.waitForTimeout(500);
            await this.logo.nth(index).click();
            break;

        case "Zoeken":
            await this.page.waitForTimeout(500);
            await this.zoekenInvullen.nth(index).waitFor({ state: "visible" });
            await this.zoekenInvullen.nth(index).click();
            await this.zoekenInvullen.nth(index).fill(value);
            await this.zoekenInvullen.nth(index).press("Enter");

            break;

        case "Account":
            await this.page.waitForTimeout(500);
            await this.accountLogo.nth(index).waitFor({ state: "visible" });
            await this.accountLogo.nth(index).click();
            break;

        case "Winkelmandje":
            await this.page.waitForTimeout(500);
            await this.winkelMandje.nth(index).waitFor({ state: "visible" });
            await this.winkelMandje.nth(index).click();
            break;

        default:
            throw new Error(`Unknown button name: ${button}`);
    }
}

  }

