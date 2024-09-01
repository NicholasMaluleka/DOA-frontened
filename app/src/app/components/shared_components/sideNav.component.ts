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
      bh = this.sd_rD9EfBH7W7rmhjwX(bh);
      //appendnew_next_sd_Y29YZPnIqCM7xqBL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y29YZPnIqCM7xqBL');
    }
  }

  sd_rD9EfBH7W7rmhjwX(bh) {
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
      bh = this.sd_jIwsW9y1obE9SE6s(bh);
      //appendnew_next_sd_rD9EfBH7W7rmhjwX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rD9EfBH7W7rmhjwX');
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
