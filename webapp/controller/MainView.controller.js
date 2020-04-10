sap.ui.define([
  "shoppingassist/ShopNavigator/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("shoppingassist.ShopNavigator.controller.MainView", {

    onInit: function(){
      var otable = this.getView().byId("productList");
      var oModel = new sap.ui.model.json.JSONModel();
      oModel.loadData("model/Products.json");
      otable.setModel(oModel);
    },

    onCalculation: function(){
      var otable = this.getView().byId("productList").getSelectedItems();
      console.log(otable);
    }

    //AJAX call for backend (POST request)
    //schicke liste mit selektierten Produkten

  });
});
