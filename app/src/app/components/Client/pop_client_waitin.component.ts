// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pop_client_waitin',
  templateUrl: './pop_client_waitin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pop_client_waitinComponent {
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
      this.sd_xpxDZUCLD7uu5WSC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xpxDZUCLD7uu5WSC(bh) {
    try {
      bh = this.sd_LeZ1LidYRNpvKkRY(bh);
      //appendnew_next_sd_xpxDZUCLD7uu5WSC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xpxDZUCLD7uu5WSC');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_neUrSXi3mYEISp3Q(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fpRqyIjFtSpGj9yq');
    }
  }
  //appendnew_flow_pop_client_waitinComponent_start

  sd_LeZ1LidYRNpvKkRY(bh) {
    try {
      //appendnew_next_sd_LeZ1LidYRNpvKkRY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LeZ1LidYRNpvKkRY');
    }
  }

  sd_neUrSXi3mYEISp3Q(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.close);

      //appendnew_next_sd_neUrSXi3mYEISp3Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_neUrSXi3mYEISp3Q');
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
  //appendnew_flow_pop_client_waitinComponent_Catch
}
