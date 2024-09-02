// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-searchPolicy',
  templateUrl: './searchPolicy.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class searchPolicyComponent {
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
      this.sd_2pkBa5MBR75O7Is9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2pkBa5MBR75O7Is9(bh) {
    try {
      bh = this.sd_1H9eZKXPIZpHkx8G(bh);
      //appendnew_next_sd_2pkBa5MBR75O7Is9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2pkBa5MBR75O7Is9');
    }
  }

  find(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_7reQ1uGtj2XhgmOg(bh);
      //appendnew_next_find
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rU0R3WzeGLC0CJEH');
    }
  }
  //appendnew_flow_searchPolicyComponent_start

  sd_1H9eZKXPIZpHkx8G(bh) {
    try {
      bh = this.sd_txpmGjlMyQdX6vLy(bh);
      //appendnew_next_sd_1H9eZKXPIZpHkx8G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1H9eZKXPIZpHkx8G');
    }
  }

  sd_txpmGjlMyQdX6vLy(bh) {
    try {
      bh = this.sd_xeoRoLeihzWy8efa(bh);
      //appendnew_next_sd_txpmGjlMyQdX6vLy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_txpmGjlMyQdX6vLy');
    }
  }

  sd_xeoRoLeihzWy8efa(bh) {
    try {
      const page = this.page;
      page.searchPolicyForm = new FormGroup({
        search: new FormControl('', Validators.required),
      });
      //appendnew_next_sd_xeoRoLeihzWy8efa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xeoRoLeihzWy8efa');
    }
  }

  sd_7reQ1uGtj2XhgmOg(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_RJfWSc1iaoIPZp3C(bh);
      //appendnew_next_sd_7reQ1uGtj2XhgmOg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7reQ1uGtj2XhgmOg');
    }
  }

  sd_RJfWSc1iaoIPZp3C(bh) {
    try {
      const page = this.page;
      console.log(page.searchPolicyForm.value);
      bh.url = page.ssdUrl + 'get-users';
      bh = this.sd_bvvL7YmEZnHQdKek(bh);
      //appendnew_next_sd_RJfWSc1iaoIPZp3C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RJfWSc1iaoIPZp3C');
    }
  }

  async sd_bvvL7YmEZnHQdKek(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ux8rhjGFxIE2uNBH(bh);
      //appendnew_next_sd_bvvL7YmEZnHQdKek
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvvL7YmEZnHQdKek');
    }
  }

  sd_ux8rhjGFxIE2uNBH(bh) {
    try {
      const page = this.page;
      page.clients = page.result.filter(
        (item) => item.policyNumber == page.searchPolicyForm.value.search
      );

      bh = this.sd_uK9SFyo7OgJzOK8J(bh);
      //appendnew_next_sd_ux8rhjGFxIE2uNBH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ux8rhjGFxIE2uNBH');
    }
  }

  sd_uK9SFyo7OgJzOK8J(bh) {
    try {
      localStorage.setItem('client', JSON.stringify(this.page.clients));
      bh = this.sd_GrC07KTLi0xBLPf5(bh);
      //appendnew_next_sd_uK9SFyo7OgJzOK8J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uK9SFyo7OgJzOK8J');
    }
  }

  async sd_GrC07KTLi0xBLPf5(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/claim-register');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_IO4IqWL9nrM5vCKf(bh);
      //appendnew_next_sd_GrC07KTLi0xBLPf5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GrC07KTLi0xBLPf5');
    }
  }

  sd_IO4IqWL9nrM5vCKf(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.clients);

      //appendnew_next_sd_IO4IqWL9nrM5vCKf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IO4IqWL9nrM5vCKf');
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
  //appendnew_flow_searchPolicyComponent_Catch
}
