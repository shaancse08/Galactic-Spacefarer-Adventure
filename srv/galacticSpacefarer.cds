using galactic.spacefarer as spacefarer from '../db/data-model';

@path: '/GalacticSRV'
service GalacticService @(requires: 'authenticated-user') {
    @(restrict: [
        {
            grant: [
                'READ',
                'UPDATE'
            ],
            where: 'originPlanet.name = $user.Planet'
        },
        {
            grant: ['*'],
            to   : 'Admin'
        }
    ])
    entity GalacticSpacefarer as projection on spacefarer.GalacticSpacefarer;

    @(restrict: [
        {
            grant: ['READ'],
            to   : 'PlanetUser'
        },
        {
            grant: ['*'],
            to   : 'Admin'
        }
    ])
    entity Department         as projection on spacefarer.Department;

    @(restrict: [
        {
            grant: ['READ'],
            to   : 'PlanetUser'
        },
        {
            grant: ['*'],
            to   : 'Admin'
        }
    ])
    entity Position           as projection on spacefarer.Position;

    @(restrict: [
        {
            grant: ['READ'],
            to   : 'PlanetUser'
        },
        {
            grant: ['*'],
            to   : 'Admin'
        }
    ])
    entity Planet             as projection on spacefarer.Planet;
}
