sap.ui.define(
  ["./BaseController"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController) {
    "use strict";

    return BaseController.extend("com.app.galacticadmin.controller.Home", {
      onInit: function () {},

      /**
       * This method will be triggered when we select any column in teh Spacefarer table
       * And we will navigate to the Details Page
       * @param {*} oEvent Will be provided by the Framework
       */
      onTableItemSelect: function (oEvent) {
        // getting the Selcted Ite mID to navigate to the Details Page
        const { ID } = oEvent.getSource().getSelectedContexts()[0].getObject();
        // Navigating to the Details Page
        this.getRouter().navTo("RouteDetails", {
          id: ID
        })
      },
    });
  }
);
