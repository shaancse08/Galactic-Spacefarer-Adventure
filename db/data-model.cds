namespace galactic.spacefarer;

using {cuid} from '@sap/cds/common';
using {reusable.validations as types} from './reusableTypesandValidations';


@assert.unique: {email: [email]}
entity GalacticSpacefarer : cuid {
  name                    : String;
  spacefarerNickName      : String(10);
  email                   : types.email;
  stardustCollection      : Integer;
  wormholeNavigationSkill : Integer;
  originPlanet            : String;
  spacesuitColor          : String;
  department              : Composition of  Department;
  position                : Association to Position;
}


entity Department : cuid {
  name        : String;
  description : String;
}


entity Position : cuid {
  currentPosition : String;
}

