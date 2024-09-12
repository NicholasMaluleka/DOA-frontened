// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-director_note',
  templateUrl: './director_note.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class director_noteComponent {
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
      this.sd_YaFI8fIg4QwcqbFx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_YaFI8fIg4QwcqbFx(bh) {
    try {
      bh = this.sd_hI1KPbm7rk2dmQrb(bh);
      //appendnew_next_sd_YaFI8fIg4QwcqbFx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YaFI8fIg4QwcqbFx');
    }
  }

  submitReason(claimReasonForm: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { claimReasonForm };
      bh.local = {};
      bh = this.sd_eyL91f59WAQyvIHG(bh);
      //appendnew_next_submitReason
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KYMMjBWOQl3atc0u');
    }
  }
  //appendnew_flow_director_noteComponent_start

  sd_hI1KPbm7rk2dmQrb(bh) {
    try {
      bh = this.sd_vBGO5pFkOgxf4DI6(bh);
      //appendnew_next_sd_hI1KPbm7rk2dmQrb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hI1KPbm7rk2dmQrb');
    }
  }

  sd_vBGO5pFkOgxf4DI6(bh) {
    try {
      bh = this.sd_COsIOP5j2voU7oLf(bh);
      //appendnew_next_sd_vBGO5pFkOgxf4DI6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vBGO5pFkOgxf4DI6');
    }
  }

  sd_COsIOP5j2voU7oLf(bh) {
    try {
      const page = this.page;
      page.claimReasonForm = new FormGroup({
        reason: new FormControl('', Validators.required),
      });
      //appendnew_next_sd_COsIOP5j2voU7oLf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_COsIOP5j2voU7oLf');
    }
  }

  async sd_eyL91f59WAQyvIHG(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.setVariable(
        bh.input.claimReasonForm.value.reason
      );
      this.page.popupClaimReason = outputVariables.input.data;

      bh = this.sd_JWkVETAPkm9oMRNp(bh);
      //appendnew_next_sd_eyL91f59WAQyvIHG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eyL91f59WAQyvIHG');
    }
  }

  sd_JWkVETAPkm9oMRNp(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.input.claimReasonForm.value.reason);

      //appendnew_next_sd_JWkVETAPkm9oMRNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JWkVETAPkm9oMRNp');
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
  //appendnew_flow_director_noteComponent_Catch
}
