sap.ui.define([], function () {
  "use strict";
  return {

    /**
     * This is a generic promise to create any thing in OData
     * @param {*} oModel OdataModel Object
     * @param {*} oPayload oPayload for Create Operation
     * @param {*} sPath Path for Create Operation
     * @returns 
     */
    createRecord: (oModel, oPayload, sPath) => {
      return new Promise((resolve, reject) => {
        oModel.create(sPath, oPayload, {
          success: function (oSuccessData) {
            resolve(oSuccessData);
          },
          error: function (oErrorData) {
            reject(oErrorData);
          },
        });
      });
    },

      /**
       * This method is a generic method to delete record.
       * @param {*} oModel Model Object
       * @param {*} sKey Key to be deleted
       */
      deleteRecord: function (oModel, sPath, sKey) {
        return new Promise((resolve, reject) => {
          oModel.remove(`${sPath}/${sKey}`, {
            success: function (oSuccessData) {
              resolve(oSuccessData);
            },
            error: function (oErrorData) {
              reject(oErrorData);
            },
          });
        });
      },    

  };
});
