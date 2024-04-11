const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");


async function example(){
 

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();
  try{
    
   await driver.get("file:///c%3A/Munka/12c-varga/tesztelesprojekt/index.html"); //Az elérési útvonalat környezettől függően változtatni kell
   await driver.manage().setTimeouts({ implicit: 3000 });
   var title = await driver.getTitle();
   console.log('Az oldal címe:', title, "ennek hossza: ", title.length);
   assert.strictEqual(title, "Számtani, mértani sorozatok");
    
   var source = await driver.getPageSource();
   console.log('Az oldal forrásának hossza:', source.length);

   var bsize = await driver.manage().window().getSize()
   console.log('A böngészőablak szélessége: ', bsize['width'], ' , magassága pedig: ', bsize['height']);
   
   let elements = await driver.findElements(By.className('navbar-brand mb-0 h1'));
   console.log("Az oldal menüpontjai:")
   for(let e of elements) {
       console.log(await e.getText());
  
    }
    
    await driver.manage().setTimeouts({ implicit: 4000 });

    //driver.findElement(By.css("body")).sendKeys(Key.CONTROL, Key.END);
    var element =driver.findElement(By.name("mertans"));
    driver.executeScript("arguments[0].scrollIntoView();",element);
    driver.executeScript("arguments[0].click();", element)
    //await driver.findElement(By.name("mertans")).click();

    await driver.manage().setTimeouts({ implicit: 3000 });
    driver.executeScript("document.getElementById('mt_a1').setAttribute('value', '1')");
    driver.executeScript("document.getElementById('mt_q').setAttribute('value', '2')");
    driver.executeScript("document.getElementById('mt_n').setAttribute('value', '10')");
    var element2 =driver.findElement(By.name("mt_szamol"));
    driver.executeScript("arguments[0].scrollIntoView();",element2);
    driver.executeScript("arguments[0].click();", element2)
    //await driver.findElement(By.id("mt_szamol")).click();
    await driver.manage().setTimeouts({ implicit: 3000 });
    var answer = driver.findElement(By.id("mt_an")).getText();
    await driver.manage().setTimeouts({ implicit: 3000 });
    assert.strictEqual(answer, "512");

  } finally {
    
    
    driver.quit();
  }

}
example()