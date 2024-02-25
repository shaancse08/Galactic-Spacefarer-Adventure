sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
  function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("my.application.controller.BaseController", {
      // just this.getRouter() ...
      getRouter: function () {
        // ... instead of
        return UIComponent.getRouterFor(this);
      },

      // just this.getModel() ...
      getModel: function (sName) {
        // ... instead of
        return this.getView().getModel(sName);
      },

      // just this.setModel() ...
      setModel: function (oModel, sName) {
        // ... instead of
        return this.getView().setModel(oModel, sName);
      },

      // just this.getResoureBundle() ...
      getResourceBundle: function () {
        // ... instead of
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
      },

      getView: function(){
        return this.getView();
      }
    });
  }
);
