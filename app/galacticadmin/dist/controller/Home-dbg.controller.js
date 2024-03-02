sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/app/galacticadmin/controller/ServiceOperation",
    "sap/m/MessageToast",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController, JSONModel, ServiceOperation, MessageToast) {
    "use strict";

    return BaseController.extend("com.app.galacticadmin.controller.Home", {
      onInit: function () {
        this.initialSetUp();
      },

      /**
       * here we will be doing all kind of initial setup including localModel Initiation
       */
      initialSetUp: function () {
        const oLocalModel = {
          createPayload: {
            name: "",
            spacefarerNickName: "",
            email: "",
            stardustCollection: 0,
            wormholeNavigationSkill: 0,
            originPlanet_ID: "2a139a62-8094-46ed-85f4-024b3963f5b1",
            spacesuitColor: "",
            department_ID: "10b034d9-6b72-4f42-bdbd-956d6d485161",
            position_ID: "250c24c9-4616-4e14-97e8-64cb144796f2",
          },
        };

        this.getView().setModel(new JSONModel(oLocalModel), "localModel");
      },

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
          id: ID,
        });
      },
      /**
       * This method will be triggered when we click on creat Space farer button
       */
      onCreateGalacticSpacefarer: async function () {
        /**
         * Creating the Dialo Object if not present
         * using the loadFragment method
         * And opening it.
         */
        if (!this.oCreateDialog) {
          this.oCreateDialog = await this.loadFragment("CreateSpacefarer");
        }
        this.oCreateDialog.open();
      },
      /**
       * This method will be triggered when we click on Button Submit
       * for Data Post for new Spacefarer
       */
      onSubmitData: async function () {
        // Getting the Payload for Create Operation
        const oPayload = this.getView()
            .getModel("localModel")
            .getProperty("/createPayload"),
          // Model Object Preparation
          oModel = this.getView().getModel(),
          // Path Build
          sPath = "/GalacticSpacefarer";

          // Closing the Dialog and Refresh the Model
        this.oCreateDialog.close();
        this.initialSetUp();

        // Calling the Post Promise using try catch
        try {
          await ServiceOperation.createRecord(oModel, oPayload, sPath);
          MessageToast.show(
            this.getResourceBundle().getText("SuccessSpaceFarerCreated")
          );
          // Closing the Dialog
        } catch (oErrorData) {
          // Closing the Dialog
          this.onErrorHandling(oErrorData);
        }
      },
      /**
       *
       * @param {*} oEvent Will provided by framework
       */
      onDialogClose: function (oEvent) {
        // getting the Dialog Object
        const oDialog = oEvent.getSource().getParent();
        // Closing the Dialog
        oDialog.isOpen() && oDialog.close();
      },
    });
  }
);
