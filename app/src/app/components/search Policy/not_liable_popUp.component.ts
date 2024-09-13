// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { searchPolicyComponent } from 'app/components/search Policy/searchPolicy.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-not_liable_popUp',
  templateUrl: './not_liable_popUp.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class not_liable_popUpComponent {
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
      this.sd_vAEJ7x7wX3VsNnyY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_vAEJ7x7wX3VsNnyY(bh) {
    try {
      bh = this.sd_XY12q4d53x5iqhRe(bh);
      //appendnew_next_sd_vAEJ7x7wX3VsNnyY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vAEJ7x7wX3VsNnyY');
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
      bh = this.sd_q2pkm2A4LJsq5EtE(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UKizHnzOgtYKw3H3');
    }
  }
  //appendnew_flow_not_liable_popUpComponent_start

  sd_XY12q4d53x5iqhRe(bh) {
    try {
      bh = this.sd_lS83v7VUWTNHJP19(bh);
      //appendnew_next_sd_XY12q4d53x5iqhRe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XY12q4d53x5iqhRe');
    }
  }

  async sd_lS83v7VUWTNHJP19(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.getVariable();
      this.page.result = outputVariables.local.data;

      this.sd_nIBEkUJ06L1x5eST(bh);
      //appendnew_next_sd_lS83v7VUWTNHJP19
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lS83v7VUWTNHJP19');
    }
  }

  sd_nIBEkUJ06L1x5eST(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.result);
      //appendnew_next_sd_nIBEkUJ06L1x5eST
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nIBEkUJ06L1x5eST');
    }
  }

  sd_q2pkm2A4LJsq5EtE(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.result);

      bh = this.sd_CbMWHQ8FiBKb759g(bh);
      //appendnew_next_sd_q2pkm2A4LJsq5EtE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q2pkm2A4LJsq5EtE');
    }
  }

  sd_CbMWHQ8FiBKb759g(bh) {
    try {
      const searchPolicyDialog = this.__page_injector__.get(MatDialog);
      const searchPolicyDialogRef = searchPolicyDialog.open(
        searchPolicyComponent,
        { width: '40%' }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CbMWHQ8FiBKb759g');
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
  //appendnew_flow_not_liable_popUpComponent_Catch
}
