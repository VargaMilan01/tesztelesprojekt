const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");



async function example(){
 

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();
  try{
    
   await driver.get("file:///c%3A/Munka/12c-varga/tesztelesprojekt/index.html"); //Az elérési útvonalat környezettől függően változtatni kell
   await driver.manage().setTimeouts({ implicit: 5000 });
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

  
    let elements2 = await driver.findElements(By.id('1'));
    console.log("A számtani sorozat alpontjai:")
    for(let e of elements2) {
        console.log(await e.getText());
   
     }
    

    
     let elements3 = await driver.findElements(By.id('2'));
     console.log("A mértani sorozat alpontjai:")
     for(let e of elements3) {
         console.log(await e.getText());
    
      }
    
      let elements4 = await driver.findElements(By.id('3'));
      console.log("A számolás alpontjai:")
      for(let e of elements4) {
          console.log(await e.getText());
     
       }
      await driver.sleep(2000);
      let prevb = await driver.findElement(By.className('carousel-control-prev'));
      console.log('Carousel vissza gombjának megnyomása');
      await prevb.click();
      await driver.sleep(2000);
      let nextb = await driver.findElement(By.className('carousel-control-next'));
      console.log('Carousel előre gombjának megnyomása');
      await nextb.click();
      await driver.sleep(2000);

      let szamtanisz = await driver.findElement(By.id('szamtanisz'));
      console.log('Navbar számtani sorozathoz vezető linkjének megynomása');
      await szamtanisz.click();
      await driver.sleep(2000);

    
    //let nav = await driver.findElement(By.className('navbar'));
    //driver.executeScript("return arguments[0].parentNode;", nav)
    


    //driver.findElement(By.css("body")).sendKeys(Key.CONTROL, Key.END);
    //var element = await driver.findElement(By.name("mertans"));
    //await driver.executeScript("arguments[0].scrollIntoView();",element);
    //await driver.executeScript("arguments[0].click();", element)
    //await driver.findElement(By.name("mertans")).click();


    //await driver.executeScript("document.getElementById('mt_a1').setAttribute('value', '1')");
    //await driver.executeScript("document.getElementById('mt_q').setAttribute('value', '2')");
    //await driver.executeScript("document.getElementById('mt_n').setAttribute('value', '10')");
    //var element2 = await driver.findElement(By.id("mt_szamol"));
    //await driver.executeScript("arguments[0].scrollIntoView();",element2);
    //await driver.executeScript("arguments[0].click();", element2)
    //await driver.findElement(By.id("mt_szamol")).click();

    //var text = await driver.executeScript("return document.getElementById('mt_an').innerHTML").toString();
    //console.log(text);

   

  } finally {
    
    
    driver.quit();
  }

  
}
example()