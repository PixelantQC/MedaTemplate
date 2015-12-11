//Objects

module.exports = {
  'Confirm HCP Modal' : function (browser) {
    browser
      .url(browser.globals.url)
      .maximizeWindow()
    browser.globals.confirmHCP(browser);
  },
  'Go to fist product link' : function (browser) {
    browser.globals.goToProductInfo(browser, 1, 'cb12-boost-chewing-gum');
    browser.globals.confirmHCP(browser);
  },
  'Go to second product link' : function (browser) {
    browser.globals.goToProductInfo(browser, 2, 'dermatix');
    browser.globals.confirmHCP(browser);
  },
  'Go to third product link' : function (browser) {
    browser.globals.goToProductInfo(browser, 3, 'endwarts');
    browser.globals.confirmHCP(browser);
  },
  'Go to fourth product link' : function (browser) {
    browser.globals.goToProductInfo(browser, 4, 'hcpproduct-example');
    browser.globals.confirmHCP(browser);
  },
  'Go to fifth product link' : function (browser) {
    browser.globals.goToProductInfo(browser, 5, 'one-product-different-content-example-rx');
    browser.globals.confirmHCP(browser);
  },
  'Go to sixth product link' : function (browser) {
    browser.globals.goToProductInfo(browser, 6, 'public-and-hcp-example');
    browser.end();
  },
}
