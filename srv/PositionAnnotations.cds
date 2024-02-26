using {
    GalacticService,
    GalacticAdminService
} from '../app/services';

annotate GalacticService.Position with @readonly;


annotate GalacticService.Position with {
    currentPosition @title: '{i18n>CurrentPosition}'
};

annotate GalacticAdminService.Position with {
    currentPosition @title: '{i18n>CurrentPosition}'
};
