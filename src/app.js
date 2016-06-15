import angular from 'angular';
import 'angular-ui-router';
import 'bootstrap-less/js/bootstrap';

import cEnableHtml5Mode from 'components/enable-html5-mode/_build/index';
import cScrollToTopOnStateChange from 'components/scroll-to-top-on-state-change/_build/index';
import cCloseMenuOnStateChange from 'components/close-menu-on-state-change/_build/index';
import cHandleInvalidRoutes from 'components/handle-invalid-routes/_build/index';
import cHandleExceptions from 'components/handle-exceptions/_build/index';
import cHandleStateChangeErrors from 'components/handle-state-change-errors/_build/index';

import cConfigureAppState from 'components/configure-app-state/_build/index';
import cConfigureAppPublicState from 'components/configure-app-public-state/_build/index';

import cConferenceDay from 'components/conference-day/_build/index';
import cContact from 'components/contact/_build/index';
import cHomepage from 'components/homepage/_build/index';
import cLocation from 'components/location/_build/index';
import cSponsors from 'components/sponsors/_build/index';
import cTeam from 'components/team/_build/index';
import cWorkshopDay from 'components/workshop-day/_build/index';
import cTerms from 'components/terms/_build/index';
import cCodeOfConduct from 'components/code-of-conduct/_build/index';


/**************************************************************************
 * Define Angular application
 *************************************************************************/

var ngModule = angular.module('app', [
  'ui.router'
]);

ngModule.run(function () {
  console.log('Angular bootstrapped!');
});

/**************************************************************************
 * Initialize components and pass component specific options
 *************************************************************************/

cEnableHtml5Mode(ngModule, { baseUrl: 'components/enable-html5-mode' });
cScrollToTopOnStateChange(ngModule, { baseUrl: 'components/scroll-to-top-on-state-change' });
cCloseMenuOnStateChange(ngModule, { baseUrl: 'components/close-menu-on-state-change' });

cHandleInvalidRoutes(ngModule, { baseUrl: 'components/handle-invalid-routes' });
cHandleExceptions(ngModule, { baseUrl: 'components/handle-exceptions' });
cHandleStateChangeErrors(ngModule, { baseUrl: 'components/handle-state-change-errors' });

cConfigureAppState(ngModule, { baseUrl: 'components/configure-app-state' });
cConfigureAppPublicState(ngModule, { baseUrl: 'components/configure-app-public-state' });

cConferenceDay(ngModule, { baseUrl: '/components/conference-day' });
cContact(ngModule, { baseUrl: '/components/contact' });
cHomepage(ngModule, { baseUrl: '/components/homepage' });
cLocation(ngModule, { baseUrl: '/components/location' });
cSponsors(ngModule, { baseUrl: '/components/sponsors' });
cTeam(ngModule, { baseUrl: '/components/team' });
cWorkshopDay(ngModule, { baseUrl: '/components/workshop-day' });
cTerms(ngModule, { baseUrl: '/components/terms' });
cCodeOfConduct(ngModule, { baseUrl: '/components/code-of-conduct' });

/**************************************************************************
 * Guidelines
 *************************************************************************/

/**
 * To add dependencies to your Angular application:
 *
 * First install the dependency:
 * jspm install angular-ui-router
 *
 * Then instantiate ngModule like this:
 * var ngModule = angular.module('app', [
 *   'ui.router'
 * ]);
 */

/**
 * To add Angular Express components:
 *
 * First install the component:
 * ngx init component-name
 *
 * Then import the component: *
 * import componentName from 'components/component-name/_build/index';
 *
 * And instantiate it:
 * componentName(ngModule, {baseUrl: '/components/component-name'});
 */

/**
 * Use static imports to load Angular Express components:
 *
 * - avoid having to load a System.import polyfill in the browser
 * - make everything work out of the box when using jspm bundle-sfx
 *
 * When using System.import the browser will complain that System.import
 * is undefined when using a bundle-sfx (because you need to provide
 * a polyfill).
 */
