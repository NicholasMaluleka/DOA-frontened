// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-toolbar',
  templateUrl: './toolbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class toolbarComponent {
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
      this.sd_WDYF8MZP3j9BoXiB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_WDYF8MZP3j9BoXiB(bh) {
    try {
      bh = this.sd_rLCXQSvPqfkOfsHZ(bh);
      //appendnew_next_sd_WDYF8MZP3j9BoXiB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WDYF8MZP3j9BoXiB');
    }
  }

  fetchLoggedInUser(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Mv5hhEcSyXa5t9za(bh);
      //appendnew_next_fetchLoggedInUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gN5MD46W6jTr2O9K');
    }
  }

  getInitials(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_vACip4EWiEU7Jst2(bh);
      //appendnew_next_getInitials
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nCf96LCnFmmRA50x');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9CWPhdafRN2uiO3R(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lmjfVOm0jgPaxNTJ');
    }
  }
  //appendnew_flow_toolbarComponent_start

  sd_rLCXQSvPqfkOfsHZ(bh) {
    try {
      bh = this.sd_rXrGjoBSlzR0uWPY(bh);
      //appendnew_next_sd_rLCXQSvPqfkOfsHZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rLCXQSvPqfkOfsHZ');
    }
  }

  sd_rXrGjoBSlzR0uWPY(bh) {
    try {
      bh = this.sd_MQDVqrXGwtTycRuD(bh);
      //appendnew_next_sd_rXrGjoBSlzR0uWPY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rXrGjoBSlzR0uWPY');
    }
  }

  sd_MQDVqrXGwtTycRuD(bh) {
    try {
      let outputVariables = this.fetchLoggedInUser();

      bh = this.sd_4JmschuK1J95rMwA(bh);
      //appendnew_next_sd_MQDVqrXGwtTycRuD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MQDVqrXGwtTycRuD');
    }
  }

  sd_4JmschuK1J95rMwA(bh) {
    try {
      this.page.navItem = 'Home';
      this.page.selectedItem = 0;
      this.page.name = this.page.user.name;
      this.page.surname = this.page.user.surname;
      bh = this.sd_iVhqs9Yhhcc5HWXd(bh);
      //appendnew_next_sd_4JmschuK1J95rMwA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4JmschuK1J95rMwA');
    }
  }

  sd_iVhqs9Yhhcc5HWXd(bh) {
    try {
      let outputVariables = this.getInitials();

      //appendnew_next_sd_iVhqs9Yhhcc5HWXd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iVhqs9Yhhcc5HWXd');
    }
  }

  sd_Mv5hhEcSyXa5t9za(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      this.sd_u1ldiWMdVjhTr00C(bh);
      //appendnew_next_sd_Mv5hhEcSyXa5t9za
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mv5hhEcSyXa5t9za');
    }
  }

  sd_u1ldiWMdVjhTr00C(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.user.role);
      //appendnew_next_sd_u1ldiWMdVjhTr00C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u1ldiWMdVjhTr00C');
    }
  }

  sd_vACip4EWiEU7Jst2(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_qiIi6bjjT1iVNTcP(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_3c1Lvfj2yO6nDjXf(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vACip4EWiEU7Jst2');
    }
  }

  sd_qiIi6bjjT1iVNTcP(bh) {
    try {
      const page = this.page;
      page.name = page.name.charAt(0).toUpperCase();
      page.surname = page.surname.charAt(0).toUpperCase();

      //appendnew_next_sd_qiIi6bjjT1iVNTcP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qiIi6bjjT1iVNTcP');
    }
  }

  sd_3c1Lvfj2yO6nDjXf(bh) {
    try {
      const page = this.page;
      page.name = (page.user.firstName?.charAt(0) || '').toUpperCase();
      page.surname = (page.user.lastName?.charAt(0) || '').toUpperCase();
      //appendnew_next_sd_3c1Lvfj2yO6nDjXf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3c1Lvfj2yO6nDjXf');
    }
  }

  sd_9CWPhdafRN2uiO3R(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      bh = this.sd_DjDQoaspFOVHyxuo(bh);
      //appendnew_next_sd_9CWPhdafRN2uiO3R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9CWPhdafRN2uiO3R');
    }
  }

  async sd_DjDQoaspFOVHyxuo(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_DjDQoaspFOVHyxuo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DjDQoaspFOVHyxuo');
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
  //appendnew_flow_toolbarComponent_Catch
}
