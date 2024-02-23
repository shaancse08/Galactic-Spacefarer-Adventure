const cds = require("@sap/cds");
const {
  onBeforeGalacicSpaceCreate, onAfterGalacticSpaceFarerCreation,
} = require("./src/controllers/galacticSpacefarerOperations");

module.exports = cds.service.impl(async (srv) => {
  /**
   * Validation before creating any Galactic Spacefarer
   */
  srv.before("CREATE", "GalacticSpacefarer", onBeforeGalacicSpaceCreate);

    /**
   * After Creating Success message to the Spacefarer
   */
    srv.after("CREATE", "GalacticSpacefarer", onAfterGalacticSpaceFarerCreation);
});
