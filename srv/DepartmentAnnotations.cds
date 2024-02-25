using { GalacticService } from '../app/services';

// annotate GalacticService.Department with @readonly;


annotate GalacticService.Department with {
    description @title: '{i18n>Description}';
    name        @title: '{i18n>Name}';
};