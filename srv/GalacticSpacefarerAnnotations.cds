using {
    GalacticService,
    GalacticAdminService
} from '../app/services';


annotate GalacticService.GalacticSpacefarer with @odata.draft.enabled;

annotate GalacticService.GalacticSpacefarer with @(Capabilities: {
    InsertRestrictions: {
        $Type     : 'Capabilities.InsertRestrictionsType',
        Insertable: false,
    },
    DeleteRestrictions: {
        $Type    : 'Capabilities.DeleteRestrictionsType',
        Deletable: false
    },
    UpdateRestrictions: {
        $Type    : 'Capabilities.UpdateRestrictionsType',
        Updatable: true
    },
});

annotate GalacticService.GalacticSpacefarer with @(restrict: [
    {
        grant: '*',
        to   : 'Admin'
    },
    {
        grant: [
            'READ',
            'UPDATE'
        ],
        where: 'originPlanet.name = $user.Planet'
    }
]);

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


annotate GalacticAdminService.GalacticSpacefarer with @(Capabilities: {
    ReadRestrictions : {
        $Type : 'Capabilities.ReadRestrictionsType',
        Readable: true
    },
    UpdateRestrictions : {
        $Type : 'Capabilities.UpdateRestrictionsType',
        Updatable: true
    },
    DeleteRestrictions : {
        $Type : 'Capabilities.DeleteRestrictionsType',
        Deletable: true
    },
    InsertRestrictions : {
        $Type : 'Capabilities.InsertRestrictionsType',
        Insertable: true
    },
});


annotate GalacticAdminService.GalacticSpacefarer with @(restrict: [{
    grant: '*',
    to   : 'Admin'
}]);

annotate GalacticAdminService.GalacticSpacefarer with {
    name                     @title: '{i18n>Name}';
    spacefarerNickName       @title: '{i18n>SpacefarerNickName}';
    email                    @title: '{i18n>Email}';
    stardustCollection       @title: '{i18n>StardustCollection}';
    wormholeNavigationSkill  @title: '{i18n>WormholeNavigationSkill}';
    originPlanet             @title: '{i18n>OriginPlanet}';
    spacesuitColor           @title: '{i18n>SpaceSuitColor}';
    stardustCollectionStatus @title: '{i18n>StarDustCollectionStatus}';
};

annotate GalacticAdminService.GalacticSpacefarer with @(UI: {
    SelectionFields: [
        email,
        spacesuitColor
    ],
    LineItem       : [
        {
            $Type: 'UI.DataField',
            Value: name,
        },
        {
            $Type: 'UI.DataField',
            Value: spacefarerNickName,
        },
        {
            $Type: 'UI.DataField',
            Value: email,
        },
        {
            $Type      : 'UI.DataField',
            Value      : stardustCollection,
            Criticality: stardustCollectionStatus,
        },
        {
            $Type: 'UI.DataField',
            Value: wormholeNavigationSkill,
        },
        {
            $Type: 'UI.DataField',
            Value: spacesuitColor,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Origin Planet',
            Value: originPlanet.name,
        },
    ]
});
