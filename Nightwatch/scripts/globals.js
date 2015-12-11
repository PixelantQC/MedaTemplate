//Objects

//Modal HCP
var modal = '.modal-dialog';
var confirm = '.modal-content p.align-center a';

//Products
var productContent = '.item.active .item-content';
var productLink = '.item.active .item-link h5';
var productView = '.view';

module.exports = {
  url: 'http://medatemplate.typo3konsult.se/hcp/products/',

  confirmHCP: function (browser) {
    browser
      .waitForElementVisible(modal, 3000, 'HCP modal show up?')
      .click(confirm)
      .pause(2000)
      .waitForElementVisible(productView, 1000, 'Product view show up?')
  },

  goToProductInfo: function (browser, productNumber, productUrl) {
    browser
      .click('.products-list-view-wrapper .item:nth-child(' + productNumber + ')')
      .pause(2000)
      .waitForElementVisible(productContent, 1000, 'Product content show up?')
      .assert.cssClassPresent('.products-list-view-wrapper .item:nth-child(' + productNumber + ')', 'active', 'First item is active now?')
      .click(productLink)
      .pause(2000)
      .waitForElementVisible('body', 1000, 'Product info page is loaded?')
      .assert.urlContains(productUrl, 'Are we on product info page?')
      .execute(function () { window.history.back() })
      .waitForElementVisible('body', 1000, 'Got back to all products page?')
  }
}
