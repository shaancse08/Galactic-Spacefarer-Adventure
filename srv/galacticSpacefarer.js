const cds = require("@sap/cds");
const {
  onBeforeGalacicSpaceCreate,
} = require("./src/controllers/galacticSpacefarerOperations");

module.exports = cds.service.impl(async (srv) => {
  /**
   * Validation before creating any Galactic Spacefarer
   */
  srv.before("CREATE", "GalacticSpacefarer", onBeforeGalacicSpaceCreate);
});
