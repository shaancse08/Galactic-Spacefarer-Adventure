namespace galactic.spacefarer;

using {cuid} from '@sap/cds/common';
using {reusable.validations as types} from './reusableTypesandValidations';


/**
 * The following entity pertains to Galactic spacefarers, encompassing associations with the Department, Planet, and Positions.
 * Within this entity, the email field must be unique, disallowing duplicate emails. Additionally,
 * the Star Dust Collection Status field is marked as @readonly, as its value will be dynamically calculated based on
 * the Star Dust Collection point.
 */
@assert.unique: {email: [email]}
entity GalacticSpacefarer : cuid {
  name                     : String(40)     @Core.Immutable;
  spacefarerNickName       : String(100) @Core.Immutable;
  email                    : types.email @Core.Immutable;
  stardustCollection       : Integer;
  stardustCollectionStatus : String(2)      @readonly;
  wormholeNavigationSkill  : Integer;
  originPlanet             : Association to Planet;
  spacesuitColor           : String(20)      @Core.Immutable;
  imageUrl                 : String;
  department               : Composition of Department;
  position                 : Association to Position;
}

/**
 * The following entity pertains to Intergalactic departments, encompassing comprehensive details about each department.
 */
entity Department : cuid {
  name        : String;
  description : String;
}

/**
 * The following entity pertains to Intergalactic Positions, encompassing comprehensive details about each position.
 */
entity Position : cuid {
  currentPosition : String;
}

/**
 * The following celestial entities represent planets, with Earth being the current focus
 * 1. Earth
 * 2. Asgard
 * 3. Xandar
 * 4. Hala
 * 5. Zen-Whoberi
 * These are the planets currently available.
 */
entity Planet : cuid {
  name : String @Core.Immutable;
}
