// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_details',
  templateUrl: './view_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_detailsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_h9VqLGxMOlv114JT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_h9VqLGxMOlv114JT(bh) {
    try {
      bh = this.sd_EPv8E8w74Can2h3n(bh);
      //appendnew_next_sd_h9VqLGxMOlv114JT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h9VqLGxMOlv114JT');
    }
  }

  back(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mIONi4GoXRNcXsqI(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bMh07wbp5IaDnEw9');
    }
  }
  //appendnew_flow_view_detailsComponent_start

  sd_EPv8E8w74Can2h3n(bh) {
    try {
      bh = this.sd_Sk2cP18TarbWTOrJ(bh);
      //appendnew_next_sd_EPv8E8w74Can2h3n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EPv8E8w74Can2h3n');
    }
  }

  sd_Sk2cP18TarbWTOrJ(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('userData'));
      bh = this.sd_rnxKHPDUwmxRSbuK(bh);
      //appendnew_next_sd_Sk2cP18TarbWTOrJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sk2cP18TarbWTOrJ');
    }
  }

  sd_rnxKHPDUwmxRSbuK(bh) {
    try {
      const page = this.page;
      console.log('duser', page.userData);

      page.currentUser = page.userData;

      console.log('page user', page.currentUser);
      //console.log("bene",page.currentUser.beneficaries);
      //appendnew_next_sd_rnxKHPDUwmxRSbuK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rnxKHPDUwmxRSbuK');
    }
  }

  async sd_mIONi4GoXRNcXsqI(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/director_home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_mIONi4GoXRNcXsqI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mIONi4GoXRNcXsqI');
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
  //appendnew_flow_view_detailsComponent_Catch
}
