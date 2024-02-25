using galactic.spacefarer as spacefarer from '../db/data-model';

@path: '/GalacticSRV'
service GalacticService @(requires: 'authenticated-user') {

    entity GalacticSpacefarer as projection on spacefarer.GalacticSpacefarer;
    entity Department         as projection on spacefarer.Department;
    entity Position           as projection on spacefarer.Position;
    entity Planet             as projection on spacefarer.Planet;
}



