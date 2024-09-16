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
  selector: 'bh-deactivated_account',
  templateUrl: './deactivated_account.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class deactivated_accountComponent {
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
      this.sd_msN30qTp5BtyqpDg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_msN30qTp5BtyqpDg(bh) {
    try {
      bh = this.sd_0vvYStOku8M1qqYm(bh);
      //appendnew_next_sd_msN30qTp5BtyqpDg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_msN30qTp5BtyqpDg');
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
      bh = this.sd_uC2qFcxqD9N6NFNN(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U8Z7w7xLtX7M82tf');
    }
  }
  //appendnew_flow_deactivated_accountComponent_start

  sd_0vvYStOku8M1qqYm(bh) {
    try {
      //appendnew_next_sd_0vvYStOku8M1qqYm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0vvYStOku8M1qqYm');
    }
  }

  sd_uC2qFcxqD9N6NFNN(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.result);

      //appendnew_next_sd_uC2qFcxqD9N6NFNN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uC2qFcxqD9N6NFNN');
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
  //appendnew_flow_deactivated_accountComponent_Catch
}
