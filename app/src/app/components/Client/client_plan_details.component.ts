// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-client_plan_details',
  templateUrl: './client_plan_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class client_plan_detailsComponent {
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
      this.sd_4mQrEz9Ka3TQFfDH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4mQrEz9Ka3TQFfDH(bh) {
    try {
      bh = this.sd_nZBvna9VGICI6IZ7(bh);
      //appendnew_next_sd_4mQrEz9Ka3TQFfDH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4mQrEz9Ka3TQFfDH');
    }
  }

  //appendnew_flow_client_plan_detailsComponent_start

  sd_nZBvna9VGICI6IZ7(bh) {
    try {
      this.page.currentUser = undefined;
      bh = this.sd_l7TWElTpIXp7E4HJ(bh);
      //appendnew_next_sd_nZBvna9VGICI6IZ7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nZBvna9VGICI6IZ7');
    }
  }

  sd_l7TWElTpIXp7E4HJ(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_E2exTTghxPJnNphQ(bh);
      //appendnew_next_sd_l7TWElTpIXp7E4HJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l7TWElTpIXp7E4HJ');
    }
  }

  sd_E2exTTghxPJnNphQ(bh) {
    try {
      const page = this.page;

      page.currentUser = page.user;

      console.log('page user', page.currentUser);
      console.log('bene', page.currentUser.beneficaries);
      //appendnew_next_sd_E2exTTghxPJnNphQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E2exTTghxPJnNphQ');
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
  //appendnew_flow_client_plan_detailsComponent_Catch
}
