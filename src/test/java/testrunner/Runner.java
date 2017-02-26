package testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by THOODI on 2/23/2017.
 */

    @CucumberOptions(
            features = "features"
            ,glue={"StepDefination"}
//        ,dryRun = true  //checks the impementation for every steps in feature file to the corresponding steps defination.
            ,monochrome = false   //displays output console in a readable format.
            ,format = {"pretty",
            "html:target/cucumber-html-report"}  //generating the reports
//        ,strict = true  // will fail execution if there are undefined or pending steps.
      //      ,tags =    {"@tag1"}         // what tags should be executed like smoke , sanity, system.
    )
    public class Runner extends AbstractTestNGCucumberTests {
        public Runner() {
        }
    }

