// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { view_documentComponent } from 'app/components/Authentication/view_document.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_9qBlAyTvanNO52sj(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9qBlAyTvanNO52sj(bh) {
    try {
      bh = this.sd_QZIhirkF1KOOozB7(bh);
      //appendnew_next_sd_9qBlAyTvanNO52sj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qBlAyTvanNO52sj');
    }
  }

  login(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_bqB5zlGIrtB9lvJY(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_71FwAex7k56plSj9');
    }
  }

  countCharacters(e: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e };
      bh.local = {};
      bh = this.sd_3Oob5ybAQPyPJtB0(bh);
      //appendnew_next_countCharacters
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DE42D8ZhYJoLHtIk');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_QZIhirkF1KOOozB7(bh) {
    try {
      this.page.loginForm = {};
      this.page.passLength = 0;
      this.page.pattern = undefined;
      this.page.characterCount = 0;
      this.page.loading = false;
      //appendnew_next_sd_QZIhirkF1KOOozB7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QZIhirkF1KOOozB7');
    }
  }

  sd_bqB5zlGIrtB9lvJY(bh) {
    try {
      const view_documentDialog = this.__page_injector__.get(MatDialog);
      const view_documentDialogRef = view_documentDialog.open(
        view_documentComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bqB5zlGIrtB9lvJY');
    }
  }

  sd_3Oob5ybAQPyPJtB0(bh) {
    try {
      const page = this.page;
      page.characterCount = bh.input.e.target.value.length;

      // console.log("Character", page.characterCount)
      //appendnew_next_sd_3Oob5ybAQPyPJtB0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3Oob5ybAQPyPJtB0');
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
  //appendnew_flow_loginComponent_Catch
}
