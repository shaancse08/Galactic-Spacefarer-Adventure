namespace galactic.spacefarer;

using {cuid} from '@sap/cds/common';
using {reusable.validations as types} from './reusableTypesandValidations';


@assert.unique: {email: [email]}
entity GalacticSpacefarer : cuid {
  name                     : String      @Core.Immutable;
  spacefarerNickName       : String(100)  @Core.Immutable;
  email                    : types.email @Core.Immutable;
  stardustCollection       : Integer;
  stardustCollectionStatus : String      @readonly;
  wormholeNavigationSkill  : Integer;
  originPlanet             : String(15)      @Core.Immutable;
  spacesuitColor           : String      @Core.Immutable;
  imageUrl                 : String;
  department               : Composition of Department;
  position                 : Association to Position;
}


entity Department : cuid {
  name        : String;
  description : String;
}


entity Position : cuid {
  currentPosition : String;
}
