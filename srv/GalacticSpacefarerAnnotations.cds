using {GalacticService} from '../app/services';


annotate GalacticService.GalacticSpacefarer with @odata.draft.enabled;

annotate GalacticService.GalacticSpacefarer with {
    name                     @title: '{i18n>Name}';
    spacefarerNickName       @title: '{i18n>SpacefarerNickName}';
    email                    @title: '{i18n>Email}';
    stardustCollection       @title: '{i18n>StardustCollection}';
    wormholeNavigationSkill  @title: '{i18n>WormholeNavigationSkill}';
    originPlanet             @title: '{i18n>OriginPlanet}';
    spacesuitColor           @title: '{i18n>SpaceSuitColor}';
    stardustCollectionStatus @title: '{i18n>StarDustCollectionStatus}';
};
