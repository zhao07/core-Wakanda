package org.wakanda.qa.widgets.chart.runtime;

import static org.junit.Assert.assertEquals;

import org.apache.commons.lang.StringUtils;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.wakanda.qa.widgets.template.TestCasesTemplate;

public class TestCasesChartEvents extends TestCasesTemplate {

	public TestCasesChartEvents(eBrowser browserName,String soluString,boolean launchServerOnlyOneTime) {
		super(browserName, soluString,launchServerOnlyOneTime);
	}

	//------------------------------------------------------------------------
	// Desktop Events
	//------------------------------------------------------------------------
	
	@Test
	public void testChart_onStartResize() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('.ui-resizable-se').simulate('mouseover');" +
				"$('.ui-resizable-se').simulate('drag', {dx:150, dy:150});");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "startResize"));
	}

	@Test
	public void testChart_onResize() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('.ui-resizable-se').simulate('mouseover');" +
				"$('.ui-resizable-se').simulate('drag', {dx:150, dy:150});");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, true, stack.contains("onResize"));
	}

	@Test
	public void testChart_onStopResize() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('.ui-resizable-se').simulate('mouseover');" +
				"$('.ui-resizable-se').simulate('drag', {dx:150, dy:150});");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "stopResize"));
	}
	
	@Test
	public void testChart_onClick() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('#canvas1').simulate('click');");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "click"));
	}
	
	@Test
	public void testChart_onDoubleClick() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('#canvas1').simulate('dblclick');");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "dblclick"));
	}

	@Test
	public void testChart_onMouseDown() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('#canvas1').simulate('mousedown');");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "mousedown"));
	}
	
	@Test
	public void testChart_onMouseOut() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('#canvas1').simulate('mouseout');");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "mouseout"));
	}

	@Test
	public void testChart_onMouseOver() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('#canvas1').simulate('mouseover');");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "mouseover"));
	}

	@Test
	public void testChart_onMouseUp() throws InterruptedException
	{
		getWebDriver().get("http://127.0.0.1:8081/chartEvents.html");
		JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
		js.executeScript("$('#canvas1').simulate('mouseup');");
		Thread.sleep(500);

		String stack = getWebDriver().findElement(By.id("richText1")).getAttribute("innerHTML");
		assertEquals("StackTrace: "+stack, 1, StringUtils.countMatches(stack, "mouseup"));
	}

}
