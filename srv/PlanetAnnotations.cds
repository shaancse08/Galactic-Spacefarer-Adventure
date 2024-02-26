using { GalacticService, GalacticAdminService } from '../app/services';

annotate GalacticService.Planet with @readonly;


annotate GalacticService.Planet with {
    name        @title: '{i18n>Name}';
};


annotate GalacticAdminService.Planet with {
    name        @title: '{i18n>Name}';
};