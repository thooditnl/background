package StepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

/**
 * Created by THOODI on 2/23/2017.
 */
public class TestClass {
    private static WebDriver driver = null;

    @Before
    public void setUp() {
        System.out.println("Before Method");
        driver = new FirefoxDriver();
        //Put a Implicit wait, this means that any search for elements on the page could take the time the implicit wait is set for before throwing exception
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page() {
        driver.get("http://www.store.demoqa.com");
     }

    @When("^User Navigate to LogIn Page$")
    public void user_Navigate_to_LogIn_Page(){
        driver.findElement(By.xpath(".//*[@id='account']/a")).click();
    }

    @And("^User enters \"(.*?)\" and \"(.*?)\"$")
    public void user_enters_and(String arg1, String arg2) {
        driver.findElement(By.id("log")).sendKeys(arg1);
        driver.findElement(By.id("pwd")).sendKeys(arg2);
        driver.findElement(By.id("login")).click();

    }

    @Then("^Message displayed Login Successfully$")
    public void message_displayed_Login_Successfully(){
        System.out.println("Message displayed Login Successfully");

    }

    @When("^User LogOut(\\d+) from the Application$")
    public void user_LogOut_from_the_Application(int arg1){
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement (By.xpath(".//*[@id='account_logout']/a")).click();
        System.out.println("User Logout : "+ arg1 + "from the application");
    }

    @Then("^Message displayed LogOut(\\d+) Successfully$")
    public void message_displayed_LogOut_Successfully(int arg1){
        System.out.println("Message Displayed logout  "+ arg1 + "Successfully");
    }

    @Then("^i closed at (\\d+)\\.(\\d+) pm$")
    public void i_closed_at_pm(int arg1, int arg2){
        System.out.println("I closed at :"+ arg1 +":"+ arg2);
    }

    @After
    public void cleanUp() {
        System.out.println("After Method");
        driver.close();
    }
}
