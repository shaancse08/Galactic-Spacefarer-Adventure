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
            Value: originPlanet,
        },
    ],
    HeaderInfo     : {
        $Type         : 'UI.HeaderInfoType',
        TypeName      : '{@i18n>SpaceFarer}',
        TypeNamePlural: '{@i18n>SpaceFarers}',
        Title         : {
            $Type: 'UI.DataField',
            Value: name
        },
        ImageUrl      : imageUrl
    },
});

annotate service.Department with @(UI.FieldGroup #department: {
    $Type: 'UI.FieldGroupType',
    Data : [
        {
            $Type: 'UI.DataField',
            Value: name
        },
        {
            $Type: 'UI.DataField',
            Value: description
        }
    ]
});

annotate service.Position with @(UI.FieldGroup #position: {
    $Type: 'UI.FieldGroupType',
    Data : [{
        $Type: 'UI.DataField',
        Value: currentPosition
    }]
});


annotate service.GalacticSpacefarer with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
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
                Value: originPlanet,
            },
            {
                $Type: 'UI.DataField',
                Value: spacesuitColor,
            },
        ],
    },
    UI.Facets                     : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : '{@i18n>GeneralInformation}',
            Target: '@UI.FieldGroup#GeneratedGroup1'
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet2',
            Label : '{@i18n>DepartmentDetails}',
            Target: 'department/@UI.FieldGroup#department',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet3',
            Label : '{@i18n>PositionDetails}',
            Target: 'position/@UI.FieldGroup#position',
        }
    ]
);
