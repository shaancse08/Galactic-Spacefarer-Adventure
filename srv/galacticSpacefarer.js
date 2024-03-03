const cds = require("@sap/cds");
const {
  onBeforeGalacicSpaceFarerUpdate, onAfterGalacticSpaceFarerCreation
} = require("./src/controllers/galacticSpacefarerOperations");

module.exports = cds.service.impl(async (srv) => {
  /**
   * Validation before creating any Galactic Spacefarer
   */
  // srv.before(["CREATE", "UPDATE"], "GalacticSpacefarer", onBeforeGalacicSpaceFarerUpdate);

    /**
   * After Creating Success message to the Spacefarer
   */
    srv.after("CREATE", "GalacticSpacefarer", onAfterGalacticSpaceFarerCreation);
});
