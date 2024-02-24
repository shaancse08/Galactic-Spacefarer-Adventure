using GalacticService as service from '../../srv/galacticSpacefarer';

annotate service.GalacticSpacefarer with @(UI: {
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
            $Type: 'UI.DataField',
            Value: stardustCollection,
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
            Value: originPlanet,
        },
    ],
    HeaderInfo  : {
        $Type : 'UI.HeaderInfoType',
        TypeName: '{@i18n>SpaceFarer}',
        TypeNamePlural : '{@i18n>SpaceFarers}'
    },

});


annotate service.GalacticSpacefarer with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'name',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'spacefarerNickName',
                Value: spacefarerNickName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'email',
                Value: email,
            },
            {
                $Type: 'UI.DataField',
                Label: 'stardustCollection',
                Value: stardustCollection,
            },
            {
                $Type: 'UI.DataField',
                Label: 'wormholeNavigationSkill',
                Value: wormholeNavigationSkill,
            },
            {
                $Type: 'UI.DataField',
                Label: 'originPlanet',
                Value: originPlanet,
            },
            {
                $Type: 'UI.DataField',
                Label: 'spacesuitColor',
                Value: spacesuitColor,
            },
        ],
    },
    UI.Facets                     : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : '{@i18n>GeneralInformation}',
        Target: '@UI.FieldGroup#GeneratedGroup1'
    }]
);
