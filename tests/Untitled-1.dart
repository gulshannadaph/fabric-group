//2. How do you handle a dropdown in Selenium?
Select dropdown = new Select(driver.findElement(By.id("dropdownId")));
dropdown.selectByVisibleText("OptionText");

//3. How do you perform a right-click action in Selenium?
Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("elementId"));
actions.contextClick(element).perform();

//4. How do you switch to a new window in Selenium?
String mainWindow = driver.getWindowHandle();
Set<String> windows = driver.getWindowHandles();
for (String window : windows) {
    if (!window.equals(mainWindow)) {
        driver.switchTo().window(window);
    }
}

//5. How do you take a screenshot in Selenium?
File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenshot, new File("screenshot.png"));

//6. How do you wait for an element to be visible in Selenium?
WebDriverWait wait = new WebDriverWait(driver, 10);
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementId")));

//7. How do you handle alerts in Selenium?
Alert alert = driver.switchTo().alert();
alert.accept();

//8. How do you perform drag and drop action in Selenium?
Actions actions = new Actions(driver);
WebElement source = driver.findElement(By.id("sourceElementId"));
WebElement target = driver.findElement(By.id("targetElementId"));
actions.dragAndDrop(source, target).perform();

//9. How do you handle frames in Selenium?
driver.switchTo().frame("frameName");
driver.switchTo().defaultContent();

//10. How do you handle cookies in Selenium?
driver.manage().deleteAllCookies();
driver.manage().addCookie(new Cookie("cookieName", "cookieValue"));
driver.manage().getCookies();

//11. How do you handle multiple windows in Selenium?
String mainWindow = driver.getWindowHandle();
Set<String> windows = driver.getWindowHandles();
for (String window : windows) {
    if (!window.equals(mainWindow)) {
        driver.switchTo().window(window);
    }
}

//12. How do you handle synchronization in Selenium?
WebDriverWait wait = new WebDriverWait(driver, 10);
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementId")));

//13. How do you handle dropdowns in Selenium?
Select dropdown = new Select(driver.findElement(By.id("dropdownId")));
dropdown.selectByVisibleText("OptionText");

//14. How do you handle checkboxes in Selenium?
WebElement checkbox = driver.findElement(By.id("checkboxId"));
checkbox.click();

//15. How do you handle radio buttons in Selenium?
WebElement radioButton = driver.findElement(By.id("radioButtonId"));
radioButton.click();

//16. How do you handle keyboard events in Selenium?
Actions actions = new Actions(driver);
actions.sendKeys(Keys.ENTER).perform();

//17. How do you handle mouse events in Selenium?
Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("elementId"));
actions.moveToElement(element).perform();

//18. How do you handle popups in Selenium?
Alert alert = driver.switchTo().alert(); 
alert.accept();

//19. How do you handle iframes in Selenium?
driver.switchTo().frame("frameName");

//20. How do you handle web tables in Selenium?
WebElement table = driver.findElement(By.id("tableId"));
List<WebElement> rows = table.findElements(By.tagName("tr"));

