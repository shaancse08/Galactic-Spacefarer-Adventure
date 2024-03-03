using galactic.spacefarer as spacefarer from '../db/data-model';

/**
 * Enhanced the user experience by creating two separate services for the same entity, specifically for the Galactic service.
 * The GalacticSpacefarer entity is configured as *Insertable, Updatable, and Deletable, providing Normal users with access
 * to create and delete functionalities. While attempting these actions may result in a forbidden *error,
 * adhering to SAP Fiori UX principles ensures that users only see buttons relevant to their permissions.
 * This approach aligns with the design philosophy of not *displaying buttons to users if the functionality does not apply to them.
 */

@path: '/GalacticSRV'
service GalacticService @(requires: 'authenticated-user') {
    entity GalacticSpacefarer as projection on spacefarer.GalacticSpacefarer;
    entity Department         as projection on spacefarer.Department;
    entity Position           as projection on spacefarer.Position;
    entity Planet             as projection on spacefarer.Planet;
}


@path: '/GalacticAdminSRV'
service GalacticAdminService @(requires: 'authenticated-user') {
    entity GalacticSpacefarer as projection on spacefarer.GalacticSpacefarer;
    entity Department         as projection on spacefarer.Department;
    entity Position           as projection on spacefarer.Position;
    entity Planet             as projection on spacefarer.Planet;
    action triggerOnBoardingProcess(data : GalacticSpacefarer) returns String;
}
