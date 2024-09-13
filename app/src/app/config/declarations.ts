// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-not_liable_popUpComponent
import { not_liable_popUpComponent } from '../components/search Policy/not_liable_popUp.component';
//CORE_REFERENCE_IMPORT-view_detailsComponent
import { view_detailsComponent } from '../components/Director/view_details.component';
//CORE_REFERENCE_IMPORT-pop_client_waitinComponent
import { pop_client_waitinComponent } from '../components/Client/pop_client_waitin.component';
//CORE_REFERENCE_IMPORT-toolbar_2Component
import { toolbar_2Component } from '../components/shared_components/toolbar_2.component';
//CORE_REFERENCE_IMPORT-client_view_claimComponent
import { client_view_claimComponent } from '../components/Client/client_view_claim.component';
//CORE_REFERENCE_IMPORT-Notifications
import { Notifications } from '../sd-services/Notifications';
//CORE_REFERENCE_IMPORT-edit_profileComponent
import { edit_profileComponent } from '../components/Client/edit_profile.component';
//CORE_REFERENCE_IMPORT-password_pop_upComponent
import { password_pop_upComponent } from '../components/Client/password_pop_up.component';
//CORE_REFERENCE_IMPORT-confirm_identityComponent
import { confirm_identityComponent } from '../components/Client/confirm_identity.component';
//CORE_REFERENCE_IMPORT-director_noteComponent
import { director_noteComponent } from '../components/Director/director_note.component';
//CORE_REFERENCE_IMPORT-director_claimsComponent
import { director_claimsComponent } from '../components/Director/director_claims.component';
//CORE_REFERENCE_IMPORT-view_documentComponent
import { view_documentComponent } from '../components/Authentication/view_document.component';
//CORE_REFERENCE_IMPORT-schedules_pComponent
import { schedules_pComponent } from '../components/Director/schedules_p.component';
//CORE_REFERENCE_IMPORT-paymentsComponent
import { paymentsComponent } from '../components/Client/payments.component';
//CORE_REFERENCE_IMPORT-client_claim_formComponent
import { client_claim_formComponent } from '../components/Client/client_claim_form.component';
//CORE_REFERENCE_IMPORT-client_claimsComponent
import { client_claimsComponent } from '../components/Client/client_claims.component';
//CORE_REFERENCE_IMPORT-Director_homeComponent
import { Director_homeComponent } from '../components/Director/Director_home.component';
//CORE_REFERENCE_IMPORT-client_profileComponent
import { client_profileComponent } from '../components/Client/client_profile.component';
//CORE_REFERENCE_IMPORT-client_plan_detailsComponent
import { client_plan_detailsComponent } from '../components/Client/client_plan_details.component';
//CORE_REFERENCE_IMPORT-edit_claimComponent
import { edit_claimComponent } from '../components/Admin Dashboard/edit_claim.component';
//CORE_REFERENCE_IMPORT-sideNavComponent
import { sideNavComponent } from '../components/shared_components/sideNav.component';
//CORE_REFERENCE_IMPORT-toolbarComponent
import { toolbarComponent } from '../components/shared_components/toolbar.component';
//CORE_REFERENCE_IMPORT-searchPolicyComponent
import { searchPolicyComponent } from '../components/search Policy/searchPolicy.component';
//CORE_REFERENCE_IMPORT-payment_formComponent
import { payment_formComponent } from '../components/Admin Dashboard/payment_form.component';
//CORE_REFERENCE_IMPORT-variables
import { variables } from '../sd-services/variables';
//CORE_REFERENCE_IMPORT-view_paymentsComponent
import { view_paymentsComponent } from '../components/Admin Dashboard/view_payments.component';
//CORE_REFERENCE_IMPORT-edit_personalInfoComponent
import { edit_personalInfoComponent } from '../components/Admin Dashboard/edit_personalInfo.component';
//CORE_REFERENCE_IMPORT-claims_registerComponent
import { claims_registerComponent } from '../components/Admin claims/claims_register.component';
//CORE_REFERENCE_IMPORT-authorizationService
import { authorizationService } from '../services/authorization/authorization.service';
//CORE_REFERENCE_IMPORT-claimsComponent
import { claimsComponent } from '../components/Admin Dashboard/claims.component';
//CORE_REFERENCE_IMPORT-schedulesComponent
import { schedulesComponent } from '../components/Admin Dashboard/schedules.component';
//CORE_REFERENCE_IMPORT-randomNumber
import { randomNumber } from '../sd-services/randomNumber';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/Admin Dashboard/home.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loader/loader.component';
//CORE_REFERENCE_IMPORT-reset_passwordComponent
import { reset_passwordComponent } from '../components/Authentication/reset_password.component';
//CORE_REFERENCE_IMPORT-otp
import { otp } from '../sd-services/otp';
//CORE_REFERENCE_IMPORT-verify_codeComponent
import { verify_codeComponent } from '../components/Authentication/verify_code.component';
//CORE_REFERENCE_IMPORT-forgot_passwordComponent
import { forgot_passwordComponent } from '../components/Authentication/forgot_password.component';
//CORE_REFERENCE_IMPORT-contact_usComponent
import { contact_usComponent } from '../components/Landing/contact_us.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/Landing/landing.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/Admin Dashboard/dashboard.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/Authentication/login.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/Authentication/register.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-not_liable_popUpComponent
  not_liable_popUpComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_detailsComponent
  view_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pop_client_waitinComponent
  pop_client_waitinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolbar_2Component
  toolbar_2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-client_view_claimComponent
  client_view_claimComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-edit_profileComponent
  edit_profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-password_pop_upComponent
  password_pop_upComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_identityComponent
  confirm_identityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-director_noteComponent
  director_noteComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-director_claimsComponent
  director_claimsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_documentComponent
  view_documentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-schedules_pComponent
  schedules_pComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-paymentsComponent
  paymentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-client_claim_formComponent
  client_claim_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-client_claimsComponent
  client_claimsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Director_homeComponent
  Director_homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-client_profileComponent
  client_profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-client_plan_detailsComponent
  client_plan_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-edit_claimComponent
  edit_claimComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sideNavComponent
  sideNavComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolbarComponent
  toolbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchPolicyComponent
  searchPolicyComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-payment_formComponent
  payment_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_paymentsComponent
  view_paymentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-edit_personalInfoComponent
  edit_personalInfoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claims_registerComponent
  claims_registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claimsComponent
  claimsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-schedulesComponent
  schedulesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
  loaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reset_passwordComponent
  reset_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verify_codeComponent
  verify_codeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-forgot_passwordComponent
  forgot_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-contact_usComponent
  contact_usComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-Notifications
  Notifications,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-variables
  variables,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-authorizationService
  authorizationService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-randomNumber
  randomNumber,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-otp
  otp,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'dashboard',
    component: dashboardComponent,
    canActivate: [authorizationService],
    children: [
      { path: 'home', component: homeComponent },
      { path: 'schedules', component: schedulesComponent },
      { path: 'claims', component: claimsComponent },
      { path: 'register', component: registerComponent },
      { path: 'view-payments', component: view_paymentsComponent },
      { path: 'edit-personalinfo', component: edit_personalInfoComponent },
      { path: 'client_plan_details', component: client_plan_detailsComponent },
      { path: 'client_profile', component: client_profileComponent },
      { path: 'claim-register', component: claims_registerComponent },
      { path: 'client_claims', component: client_claimsComponent },
      { path: 'client_claim_form', component: client_claim_formComponent },
      { path: 'payments', component: paymentsComponent },
      { path: 'schedules_p', component: schedules_pComponent },
      { path: 'edit_profile', component: edit_profileComponent },
      { path: 'director_home', component: Director_homeComponent },
      { path: 'director_claims', component: director_claimsComponent },
      { path: 'client_view_claim', component: client_view_claimComponent },
    ],
  },
  { path: 'DOAServices', component: landingComponent },
  { path: 'contact-us', component: contact_usComponent },
  { path: 'login', component: loginComponent },
  { path: 'forgot-password', component: forgot_passwordComponent },
  { path: 'verify-code', component: verify_codeComponent },
  { path: 'reset-password', component: reset_passwordComponent },
  { path: 'view', component: view_documentComponent },
  { path: 'confirm', component: confirm_identityComponent },
  { path: 'not-liable', component: not_liable_popUpComponent },
  { path: '', redirectTo: '/DOAServices', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
