import { Locator } from "@playwright/test";

export async function extractSidebarItems(locator: Locator): Promise<string[]> {
  const innerTextList: string[] = [];
  const values = await locator.innerText();
  const textParts = values.split('\n');
  textParts.forEach(part => {
      innerTextList.push(part.trim());
     
    });
    console.log(innerTextList);
    return innerTextList;
 
}


