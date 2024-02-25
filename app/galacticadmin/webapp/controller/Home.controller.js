sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.app.galacticadmin.controller.Home", {
      onInit: function () {},

      /**
       * This method will be triggered when we select any column in teh Spacefarer table
       * @param {*} oEvent Will be provided by the Framework
       */
      onTableItemSelect: function (oEvent) {
        // getting the Selcted Ite mID to navigate to the Details Page
        const { ID } = oEvent.getSource().getSelectedContexts()[0].getObject();
      },
    });
  }
);
