using {
    GalacticService,
    GalacticAdminService
} from '../app/services';

annotate GalacticService.Department with @readonly;


annotate GalacticService.Department with {
    description @title: '{i18n>Description}';
    name        @title: '{i18n>Name}';
};

annotate GalacticAdminService.Department with {
    description @title: '{i18n>Description}';
    name        @title: '{i18n>Name}';
};
