const { sendMail, MailConfig } = require("@sap-cloud-sdk/mail-client");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
/**
 * Below method will do the validation before creating the Spacefarer
 * SpaceFarer needs to have 100 StarDustCollection To embark the journey
 * If the SpabeFarer from Earth, Asgard and Wakanda then they will be getting extra 2 points of
 * Skill which is maximum of 5 and 800 points of StarDustCollections
 * @param {*} req Will be provided by the Framework
 */
const onBeforeGalacicSpaceFarerUpdate = async (req) => {
  // Getting teh Event as this method for both Create and Update
  const sEvent = req.event;
  // Getting the Relevent Data from the Request
  const { stardustCollection, wormholeNavigationSkill, originPlanet_ID } =
    req.data,

    aEligiblePlanets = ["fdc3e7d9-73a0-4f9c-a508-481b6e579fd6", "e794898c-f49e-4ae0-b247-28ad57528cc5"];

  // If Stardust collection is less than 100 then not eligible
  if (stardustCollection < 100 && sEvent === "CREATE") {
    req.error({
      code: "400",
      message:
        "You currently lack the sufficient stardust accumulation required to embark on a cosmic journey.",
    });
  }

  // Setting up the Stardust Collection Status Value
  if (stardustCollection < 350) {
    req.data.stardustCollectionStatus = 1;
  } else if (stardustCollection < 500) {
    req.data.stardustCollectionStatus = 2;
  } else {
    req.data.stardustCollectionStatus = 3;
  }

  // Giving some bonus Skill Points
  if (aEligiblePlanets.includes(originPlanet_ID)) {
    let newSkill = 0;
    newSkill =
      sEvent === "CREATE"
        ? wormholeNavigationSkill + 2
        : wormholeNavigationSkill;
    req.data.stardustCollection =
      sEvent === "CREATE" ? stardustCollection + 800 : stardustCollection;
    req.data.wormholeNavigationSkill = newSkill > 5 ? 5 : newSkill;
  }
};

/**
 * This method will be triggered when a new Spacefarer created successfully.
 * And here using the Cloud SDK Mail client we will be sending mails to the newly created
 * spacefarer.
 * @param {*} req Will be supplied by Framework, which has all the Request Data
 */
const onAfterGalacticSpaceFarerCreation = (req) => {
  // Getting teh email_id
  const { email } = req;
  // Preparing the mail configuration
  const mailConfig = {
    from: "shaancse08@gmail.com",
    to: email,
    subject: "Your Space Journey Begins!",
    text: "We are thrilled to inform you that your journey to becoming a spacefarer has officially begun! This is an exciting time, and we are delighted to have you on board for this extraordinary adventure.",
  };
  // Sending mails
  sendMail({ destinationName: "GalacticMailTransfer" }, [mailConfig]);
};


const onTriggerWorkflowAction = async (req) => {
  const { ID, name, spacefarerNickName, email, stardustCollection, wormholeNavigationSkill, originPlanet_ID, spacesuitColor, department_ID, position_ID } = req.data.data;
  try {
    let response = await executeHttpRequest(
      {
        destinationName: "TriggerWorkflow",
      },
      {
        method: "POST",
        url: "",
        data: {
          definitionId: "us10.trial-xhma0rrx.galacticspacefareronboarding.newGalacticSpacefarerProcess",
          context: {
            farerdetails: {
              ID,
              name,
              spacefarerNickName,
              email,
              stardustCollection,
              wormholeNavigationSkill,
              originPlanet_ID,
              spacesuitColor,
              department_ID,
              position_ID
            }
          }
        }
      }
    );
    let data = response.data.d.results;
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  onBeforeGalacicSpaceFarerUpdate,
  onAfterGalacticSpaceFarerCreation,
  onTriggerWorkflowAction
};
