package org.wakanda.wastudio.button.api;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.wakanda.qa.widgets.template.TestCasesTemplateWidget;

public class TestCasesButtonAPI extends TestCasesTemplateWidget {

	public TestCasesButtonAPI(eBrowser browserName,String soluString,boolean launchServerOnlyOneTime) {
		super(browserName, soluString,launchServerOnlyOneTime);
	}
	
	//------------------------------------------------------------------------
	// Generic API
	//------------------------------------------------------------------------
	
	@Test
	public void testButton_hide() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("hide")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("display");
		assertEquals("none", myResult);
	}
	
	@Test
	public void testButton_show() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("hide")).click();
		getWebDriver().findElement(By.id("show")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("display");
		assertEquals("block", myResult);
	}
	
	@Test
	public void testButton_toggle() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("toggle")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("display");
		assertEquals("none", myResult);
	}
	
	@Test
	public void testButton_toggle_back() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("toggle")).click();
		getWebDriver().findElement(By.id("toggle")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("display");
		assertEquals("block", myResult);
	}
	
	@Test
	public void testButton_addClass() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("addClass")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("button1")).getAttribute("className").contains("toto");
		assertEquals(true, myResult);
	}
	
	@Test
	public void testButton_removeClass() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("addClass")).click();
		getWebDriver().findElement(By.id("removeClass")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("button1")).getAttribute("className").contains("toto");
		assertEquals(false, myResult);
	}
	
	@Test
	public void testButton_move() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("move")).click();
		Thread.sleep(500);
		
		WebElement myElement = getWebDriver().findElement(By.id("button1"));
		assertEquals("0px", myElement.getCssValue("top"));
		assertEquals("0px", myElement.getCssValue("left"));
	}
	
	@Test
	public void testButton_resize_smaller() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("resize_smaller")).click();
		Thread.sleep(500);

		WebElement myElement = getWebDriver().findElement(By.id("button1"));
		assertEquals("50", myElement.getAttribute("offsetWidth"));
		assertEquals("50", myElement.getAttribute("offsetHeight"));
	}
	
	@Test
	public void testButton_resize_bigger() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("resize_bigger")).click();
		Thread.sleep(500);

		WebElement myElement = getWebDriver().findElement(By.id("button1"));
		assertEquals("300", myElement.getAttribute("offsetWidth"));
		assertEquals("300", myElement.getAttribute("offsetHeight"));
	}
	
	@Test
	public void testButton_setWidth() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setWidth")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("button1")).getAttribute("offsetWidth");
		assertEquals("100", myResult);
	}
	
	@Test
	public void testButton_getWidth() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("getWidth")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("82", myResult);
	}
	
	@Test
	public void testButton_setHeight() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setHeight")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("button1")).getAttribute("offsetHeight");
		assertEquals("100", myResult);
	}
	
	@Test
	public void testButton_getHeight() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("getHeight")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("28", myResult);
	}
	
	@Test
	public void testButton_setLeft() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setLeft")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("button1")).getAttribute("offsetLeft");
		assertEquals("100", myResult);
	}
	
	@Test
	public void testButton_setRight() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setRight")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("right");
		assertEquals("100px", myResult);
	}

	@Test
	public void testButton_setTop() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setTop")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("button1")).getAttribute("offsetTop");
		assertEquals("100", myResult);
	}

	@Test
	public void testButton_setBottom() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setBottom")).click();
		Thread.sleep(500);

		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("bottom");
		assertEquals("100px", myResult);
	}
	
	@Test
	public void testButton_getPosition() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("getPosition")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("button1")).getAttribute("innerHTML").contains("undefined");
		assertEquals(false, myResult);
	}
	
	@Test
	public void testButton_destroy() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("destroy")).click();
		Thread.sleep(500);
		
		try{
			getWebDriver().findElement(By.id("button1"));
			assertTrue(false);
		}catch(Exception e){}
	}
	
	@Test
	public void testButton_disable() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("disable")).click();
		getWebDriver().findElement(By.id("button1")).click();
		Thread.sleep(500);
		
		String myValue = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("", myValue);
	}
	
	@Test
	public void testButton_enable() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("disable")).click();
		getWebDriver().findElement(By.id("enable")).click();
		getWebDriver().findElement(By.id("button1")).click();
		Thread.sleep(500);
		
		String myValue = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("Clicked", myValue);
	}
	
	@Test
	public void testButton_getTheme() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("getTheme")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("inherited default", myResult);
	}
	
	@Test
	public void testButton_setBackgroundColor() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setBackgroundColor")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("background-color").replaceAll("\\s","");
		assertEquals("rgba(101,0,146,1)", myResult);
	}
	
	@Test
	public void testButton_setTextColor() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setTextColor")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("button1")).getCssValue("color").replaceAll("\\s","");
		assertEquals("rgba(101,0,146,1)", myResult);
	}
	
	@Test
	public void testButton_setParent() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setParent")).click();
		Thread.sleep(500);
		
		getWebDriver().findElement(By.id("richText1")).findElement(By.id("button1"));
	}
	
	@Test
	public void testButton_getParent() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setParent")).click();
		getWebDriver().findElement(By.id("getParent")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("richText1", myResult);
	}
	
	@Ignore
	public void testButton_setErrorDiv() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setErrorDiv")).click();
		getWebDriver().findElement(By.id("setErrorMessage")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML").contains("error");
		assertEquals(true, myResult);
	}
	
	@Ignore
	public void testButton_getErrorDiv() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setErrorDiv")).click();
		getWebDriver().findElement(By.id("getErrorDiv")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML").contains("richText1");
		assertEquals(true, myResult);
	}
	
	@Ignore
	public void testButton_setErrorMessage() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setErrorDiv")).click();
		getWebDriver().findElement(By.id("setErrorMessage")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML").contains("error");
		assertEquals(true, myResult);
	}
	
	@Ignore
	public void testButton_clearErrorMessage() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setErrorDiv")).click();
		getWebDriver().findElement(By.id("setErrorMessage")).click();
		getWebDriver().findElement(By.id("clearErrorMessage")).click();
		Thread.sleep(500);
		
		Boolean myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML").contains("error");
		assertEquals(false, myResult);
	}
	
	@Ignore
	public void testButton_clear() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setValue_true")).click();
		getWebDriver().findElement(By.id("clear")).click();
		getWebDriver().findElement(By.id("getValue")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals(false, myResult);
	}
	
	@Ignore
	public void testButton_setLabelText() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setLabelText")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("label1")).getAttribute("innerHTML");
		assertEquals("toto", myResult);
	}
	
	@Ignore
	public void testButton_setLabelTextColor() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/buttonAPI.html");
		getWebDriver().findElement(By.id("setLabelTextColor")).click();
		Thread.sleep(500);
		
		String myResult = getWebDriver().findElement(By.id("label1")).getCssValue("color").replaceAll("\\s","");
		assertEquals("rgba(101,0,146,1)", myResult);
	}
	
}
