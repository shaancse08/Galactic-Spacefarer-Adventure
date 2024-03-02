sap.ui.define(
  ["./BaseController", "com/app/galacticadmin/controller/ServiceOperation"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController, ServiceOperation) {
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
        oDetailsPage = this.getView().byId("Details");
        // Preparing the Element Binding For Getting Data in Object Page
        oDetailsPage.bindElement({
          path: `/GalacticSpacefarer(${sSpaceFarerID})`,
          parameters : {'expand' : "department,originPlanet,position"}
        });
      },
      /**
       * This method will be triggered when Admin wants to delete any
       * Spacefarer from the Galaxy
       */
      onDeleteSpacefarer: async function(){
        // Getting the Spacefarer ID and Details Pag Object
        const oDetailsPage = this.getView().byId("Details"),
        {ID: spacefarerId} = oDetailsPage.getBindingContext().getObject(),
        oModel = this.getView().getModel(),
        sPath = "/GalacticSpacefarer";
        try {
          // Calling the Delete operation
          await ServiceOperation.deleteRecord(oModel, sPath, spacefarerId);
          // Navigating Back to the Home Screen Once Deleted
          this.getRouter().navTo("RouteHome");
        } catch (error) {
          // Handling the Errors
          this.onErrorHandling(error);
        }
      }
    });
  }
);
