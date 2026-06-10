
function launchBrowser(){
    let browserName = "Chrome"
    if(browserName === "Chrome"){
        console.log("Launching Chrome Browser");
    } else 
    {
        console.log("Launching Default Browser");
    }
}
launchBrowser()
function runTests(){
    testType = "Smoke"
    switch(testType){
        case "Smoke":
            console.log("Running Smoke Tests");
            break;
        case "Regression":
            console.log("Running Regression Tests");
            break;
        case "Sanity":
            console.log("Running Sanity Tests");
            break;
        default:
            console.log("Running Default Tests");
    }
}
runTests()