const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");



async function example(){
 

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

 
   await driver.get("file:///c%3A/Munka/12c-varga/tesztelesprojekt/index.html"); //Az elérési útvonalat környezettől függően változtatni kell

   var title = await driver.getTitle();
   console.log('Az oldal címe:', title, "ennek hossza: ", title.length);
    
   var source = await driver.getPageSource();
   console.log('Az oldal forrásának hossza:', source.length);

   var bsize = await driver.manage().window().getSize()
   console.log('A böngészőablak szélessége: ', bsize['width'], ' , magassága pedig: ', bsize['height']);
   
   let elements = await driver.findElements(By.className('navbar-brand mb-0 h1'));
   for(let e of elements) {
       console.log(await e.getText());
  
    }

}
example()