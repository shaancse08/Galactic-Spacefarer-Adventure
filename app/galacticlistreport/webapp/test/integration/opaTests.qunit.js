sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/galacticlistreport/test/integration/FirstJourney',
		'com/app/galacticlistreport/test/integration/pages/GalacticSpacefarerList',
		'com/app/galacticlistreport/test/integration/pages/GalacticSpacefarerObjectPage'
    ],
    function(JourneyRunner, opaJourney, GalacticSpacefarerList, GalacticSpacefarerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/galacticlistreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheGalacticSpacefarerList: GalacticSpacefarerList,
					onTheGalacticSpacefarerObjectPage: GalacticSpacefarerObjectPage
                }
            },
            opaJourney.run
        );
    }
);