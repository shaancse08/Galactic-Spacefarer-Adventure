sap.ui.define(
  ["./BaseController"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController) {
    "use strict";

    return BaseController.extend("com.app.galacticadmin.controller.Details", {
      onInit: function () {
        // Attaching a Route Pattern Match Event to capture the Spacefarer ID
        this.getRouter().attachRoutePatternMatched(
          this.onLoaadSpaceFarerDetails,
          this
        );
      },

      /**
       * This method will be triggered everytime we change the Route Pattern
       * @param {*} oEvent Events will be provided by teh Framework
       */
      onLoaadSpaceFarerDetails: function (oEvent) {
        // getting the Route Name
        const sRouteName = oEvent.getParameter("name");
        // if teh Route is not RouteDetails Then return
        if (sRouteName !== "RouteDetails") {
          return;
        }
        // Getting the Spacefarer ID
        const sSpaceFarerID = oEvent.getParameter("arguments").id,
        oDetailsPage = this.getView();
        // Preparing the Element Binding For Getting Data in Object Page
        oDetailsPage.bindElement({
          path: `/GalacticSpacefarer(${sSpaceFarerID})`,
          parameters : {'expand' : "department,originPlanet,position"}
        });
      },
    });
  }
);
