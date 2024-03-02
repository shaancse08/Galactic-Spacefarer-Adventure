sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"
  ],
  function (Controller, UIComponent, Fragment, MessageBox) {
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

      getView: function () {
        return this.getView();
      },

      /**
       * For loading any Fragment
       *
       * @param {*} sFragmentName   The path to the fragment
       * @returns   oFragment       The fragment
       */
      loadFragment: async function (sFragmentName) {
        const that = this;
        const oFragment = await Fragment.load({
          id: that.getView().getId(),
          name: `com.app.galacticadmin.fragments.${sFragmentName}`,
          controller: that,
        });
        that.getView().addDependent(oFragment);
        return oFragment;
      },
      /**
       * This is a generic method to handle error from call backs.
       * @param {*} oErrorData ErrorData from call back will be passed here
       */
      onErrorHandling: function (oErrorData) {
        // Bey default if no error is matching it will print Technical Error.
        let sErrorMessage = this.getResourceBundle().getText("TechnicalError");
        // If Error is coming from Backend and it has Response Text then we will fetch the proper error message and
        // Print it in the Message Box.
        if (oErrorData["responseText"]) {
          const { error } = JSON.parse(oErrorData.responseText);
          sErrorMessage = error.message.value;
        }
        MessageBox.error(sErrorMessage, {
          title: "Error", // default
          actions: sap.m.MessageBox.Action.CLOSE, // default
        });
      },
    });
  }
);
