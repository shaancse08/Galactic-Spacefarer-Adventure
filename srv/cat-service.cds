using galactic.spacefarer as spacefarer from '../db/data-model';

@path: '/GalacticSRV'
service GalacticService {
    entity GalacticSpacefarer as projection on spacefarer.GalacticSpacefarer;

    @readonly
    entity Department as projection on spacefarer.Department;

    @readonly
    entity Position   as projection on spacefarer.Position;
}





