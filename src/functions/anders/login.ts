import {Page,Locator} from "@playwright/test";
import { context } from "../../hooks/hooks";



export class LoginInFunction {
  private readonly newTab = context.pages();
  readonly tab1 = this.newTab[1];
  readonly tab2 = this.newTab[2];
  readonly tab3 = this.newTab[3];
  readonly tab4 = this.newTab[4];
  readonly username: Locator
  readonly password: Locator;
  readonly submitbutton: Locator

  constructor( private page: Page) {
    this.page = page;
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.username = this.page.locator('[title="E-mail"]');
    this.password = this.page.locator('[title="Wachtwoord"]');
    this.submitbutton = this.page.locator('[type="submit"]');

  }

  async PageSize(pageIndex: number) {
    const pageSize = await this.newTab[pageIndex].setViewportSize({
      width: 1920,
      height: 1080,
    });
    return pageSize;
  }

  async fillinUsername(username: string): Promise<void>{
    await this.username.fill(username);
  }
  async fillinPassword(password: string){
    await this.password.fill(password);
  }
  async PressSubMitButton(){
    // await this.page.waitForLoadState("load");
    // await this.page.waitForTimeout(500);
    await this.submitbutton.nth(1).waitFor({ state: "visible" });
    await this.submitbutton.nth(1).click();
  }
     }



    
     

  