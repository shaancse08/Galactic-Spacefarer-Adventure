const { sendMail, MailConfig } = require("@sap-cloud-sdk/mail-client");
/**
 * Below method will do the validation before creating the Spacefarer
 * SpaceFarer needs to have 100 StarDustCollection To embark the journey
 * If the SpabeFarer from Earth, Asgard and Wakanda then they will be getting extra 2 points of
 * Skill which is maximum of 5 and 800 points of StarDustCollections
 * @param {*} req Will be provided by the Framework
 */
const onBeforeGalacicSpaceCreate = async (req) => {
  const { stardustCollection, wormholeNavigationSkill, originPlanet } =
      req.data,
    aEligiblePlanets = ["Earth", "Asgard", "Wakanda"];

  if (stardustCollection < 100) {
    req.error({
      code: "400",
      message:
        "You currently lack the sufficient stardust accumulation required to embark on a cosmic journey.",
    });
  }

  if (aEligiblePlanets.includes(originPlanet)) {
    const newSkill = wormholeNavigationSkill + 2;
    req.data.stardustCollection = stardustCollection + 800;
    req.data.wormholeNavigationSkill = newSkill > 5 ? 5 : newSkill;
  }
};

const onAfterGalacticSpaceFarerCreation = (req) => {
  const { email } = req;
  const mailConfig = {
    from: "shaancse08@gmail.com",
    to: email,
    subject: "Your Space Journey Begins!",
    text: "We are thrilled to inform you that your journey to becoming a spacefarer has officially begun! This is an exciting time, and we are delighted to have you on board for this extraordinary adventure.",
  };
  sendMail({ destinationName: 'GalacticMailTransfer' }, [mailConfig])
};

module.exports = {
  onBeforeGalacicSpaceCreate,
  onAfterGalacticSpaceFarerCreation,
};
