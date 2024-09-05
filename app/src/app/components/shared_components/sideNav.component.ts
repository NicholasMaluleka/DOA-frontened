// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-sideNav',
  templateUrl: './sideNav.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sideNavComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_wARCmmNIoX96hHca(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wARCmmNIoX96hHca(bh) {
    try {
      bh = this.sd_Y29YZPnIqCM7xqBL(bh);
      //appendnew_next_sd_wARCmmNIoX96hHca
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wARCmmNIoX96hHca');
    }
  }

  navItems(index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index };
      bh.local = {};
      bh = this.sd_Vv4k2QfXOzRe20p9(bh);
      //appendnew_next_navItems
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JDGzCVesMEFQzPNO');
    }
  }

  getNavItem(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_7vowlKMfIquTljAp(bh);
      //appendnew_next_getNavItem
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kXF6N2DjyQhut0P3');
    }
  }
  //appendnew_flow_sideNavComponent_start

  sd_Y29YZPnIqCM7xqBL(bh) {
    try {
      bh = this.sd_J9mMNs3JHkGQ8Dpf(bh);
      //appendnew_next_sd_Y29YZPnIqCM7xqBL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y29YZPnIqCM7xqBL');
    }
  }

  sd_J9mMNs3JHkGQ8Dpf(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_kM51QV4KRuw3NP4S(bh);
      //appendnew_next_sd_J9mMNs3JHkGQ8Dpf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J9mMNs3JHkGQ8Dpf');
    }
  }

  sd_kM51QV4KRuw3NP4S(bh) {
    try {
      this.page.navItem = JSON.parse(sessionStorage.getItem('navItem'));
      bh = this.sd_ZHyVAET40BbWJoWQ(bh);
      //appendnew_next_sd_kM51QV4KRuw3NP4S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kM51QV4KRuw3NP4S');
    }
  }

  sd_ZHyVAET40BbWJoWQ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_b3dzn7MpxnUPDSJw(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_f8zH5EWAPPgeiqT0(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'director',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jrEzCa63HbYBkHlw(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZHyVAET40BbWJoWQ');
    }
  }

  sd_b3dzn7MpxnUPDSJw(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Home', icon: 'home', route: '/dashboard/home' },
        { label: 'Claims', icon: 'description', route: '/dashboard/claims' },
        {
          label: 'Register Client',
          icon: 'edit',
          route: '/dashboard/register',
        },
        { label: 'Schedules', icon: 'today', route: '/dashboard/schedules' },
        { label: 'Reports', icon: 'folder_open' },
        { label: 'Audit Logs', icon: 'trending_up' },
      ];
      bh = this.sd_2tPXtu9NFHtoLXpa(bh);
      //appendnew_next_sd_b3dzn7MpxnUPDSJw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b3dzn7MpxnUPDSJw');
    }
  }

  sd_2tPXtu9NFHtoLXpa(bh) {
    try {
      this.page.navItem = this.page.navItem;
      this.page.selectedItem = 0;
      this.page.name = this.page.user.name;
      this.page.surname = this.page.user.surname;
      bh = this.sd_jIwsW9y1obE9SE6s(bh);
      //appendnew_next_sd_2tPXtu9NFHtoLXpa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2tPXtu9NFHtoLXpa');
    }
  }

  sd_jIwsW9y1obE9SE6s(bh) {
    try {
      this.page.navItem = 'Home';
      this.page.selectedItem = 0;
      //appendnew_next_sd_jIwsW9y1obE9SE6s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jIwsW9y1obE9SE6s');
    }
  }

  sd_f8zH5EWAPPgeiqT0(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        {
          label: 'Policy details',
          icon: 'description',
          route: '/dashboard/client_plan_details',
        },
        {
          label: 'Payment History',
          icon: 'edit',
          route: '/dashboard/payments',
        },
        { label: 'Claims', icon: 'today', route: '/claims' },
        {
          label: 'Profile',
          icon: 'Profile',
          route: '/dashboard/client_profile',
        },
      ];
      bh = this.sd_NQPqzgmJ8fI8o7Rm(bh);
      //appendnew_next_sd_f8zH5EWAPPgeiqT0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f8zH5EWAPPgeiqT0');
    }
  }

  sd_NQPqzgmJ8fI8o7Rm(bh) {
    try {
      this.page.navItem = this.page.navItem;
      this.page.selectedItem = 0;
      this.page.name = this.page.user.firstName;
      this.page.surname = this.page.user.lastName;
      bh = this.sd_jIwsW9y1obE9SE6s(bh);
      //appendnew_next_sd_NQPqzgmJ8fI8o7Rm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NQPqzgmJ8fI8o7Rm');
    }
  }

  sd_jrEzCa63HbYBkHlw(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Home', icon: 'home', route: '/dashboard/director_home' },
        { label: 'Claims', icon: 'description' },
        { label: 'Schedules', icon: 'today', route: '/dashboard/schedules_p' },
      ];
      bh = this.sd_NQPqzgmJ8fI8o7Rm(bh);
      //appendnew_next_sd_jrEzCa63HbYBkHlw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jrEzCa63HbYBkHlw');
    }
  }

  sd_Vv4k2QfXOzRe20p9(bh) {
    try {
      sessionStorage.setItem('navItem', JSON.stringify(bh.input.index.label));
      //appendnew_next_sd_Vv4k2QfXOzRe20p9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vv4k2QfXOzRe20p9');
    }
  }

  sd_7vowlKMfIquTljAp(bh) {
    try {
      this.page.navItem = JSON.parse(sessionStorage.getItem('navItem'));
      //appendnew_next_sd_7vowlKMfIquTljAp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7vowlKMfIquTljAp');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_sideNavComponent_Catch
}
