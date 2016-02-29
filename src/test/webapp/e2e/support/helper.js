var Helper = function(){
};

Helper.prototype.setup = function(browser, url, width, height){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular();
    browser.driver.manage().window().setSize(width, height);
    //browser.sleep(50);
    //sut.browser.get(url).then(function(result) {
    //    callback(result)
    //});
};
module.exports = new Helper();