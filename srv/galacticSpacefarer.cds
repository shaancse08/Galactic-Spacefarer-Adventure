using galactic.spacefarer as spacefarer from '../db/data-model';

@path: '/GalacticSRV'
service GalacticService @(requires: 'authenticated-user') {
    @(restrict: [{
        grant: ['*'],
        where: 'originPlanet.name = $user.Planet'
    }])
    entity GalacticSpacefarer as projection on spacefarer.GalacticSpacefarer;

    entity Department         as projection on spacefarer.Department;

    @readonly
    entity Position           as projection on spacefarer.Position;

    entity Planet as projection on spacefarer.Planet;
}
