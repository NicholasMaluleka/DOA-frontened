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
  selector: 'bh-edit_profile',
  templateUrl: './edit_profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_profileComponent {
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
      this.sd_JgyRBkRN3y1TgJS6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_JgyRBkRN3y1TgJS6(bh) {
    try {
      bh = this.sd_zZbFXjqfFF4D2qLR(bh);
      //appendnew_next_sd_JgyRBkRN3y1TgJS6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JgyRBkRN3y1TgJS6');
    }
  }

  //appendnew_flow_edit_profileComponent_start

  sd_zZbFXjqfFF4D2qLR(bh) {
    try {
      bh = this.sd_sGVgbYoEJQipBrIL(bh);
      //appendnew_next_sd_zZbFXjqfFF4D2qLR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zZbFXjqfFF4D2qLR');
    }
  }

  sd_sGVgbYoEJQipBrIL(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_T0Ka7kjZZVs9T6c2(bh);
      //appendnew_next_sd_sGVgbYoEJQipBrIL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGVgbYoEJQipBrIL');
    }
  }

  sd_T0Ka7kjZZVs9T6c2(bh) {
    try {
      const page = this.page;
      page.user;
      console.log('page user', page.user);

      //appendnew_next_sd_T0Ka7kjZZVs9T6c2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T0Ka7kjZZVs9T6c2');
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
  //appendnew_flow_edit_profileComponent_Catch
}
