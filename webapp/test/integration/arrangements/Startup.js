sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("shoppingassist.ShopNavigator.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "shoppingassist.ShopNavigator",
          async: true,
          manifest: true
        }
      });
    }

  });
});
