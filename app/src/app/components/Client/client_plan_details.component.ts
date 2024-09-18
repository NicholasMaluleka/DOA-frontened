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

  getUser(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PFdTz4I6dOb2yMqv(bh);
      //appendnew_next_getUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZzO8qt1EjGeKdHcY');
    }
  }

  trialCount(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6RSb6nxAwpXrwseu(bh);
      //appendnew_next_trialCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LSwMzdiGToM9VNKD');
    }
  }
  //appendnew_flow_client_plan_detailsComponent_start

  sd_nZBvna9VGICI6IZ7(bh) {
    try {
      this.page.currentUser = undefined;
      this.page.found = undefined;
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
      bh = this.sd_ypBsNDgkftViziaA(bh);
      //appendnew_next_sd_E2exTTghxPJnNphQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E2exTTghxPJnNphQ');
    }
  }

  sd_ypBsNDgkftViziaA(bh) {
    try {
      let outputVariables = this.getUser();

      bh = this.sd_qnYHCTmsJirepfQj(bh);
      //appendnew_next_sd_ypBsNDgkftViziaA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ypBsNDgkftViziaA');
    }
  }

  sd_qnYHCTmsJirepfQj(bh) {
    try {
      const page = this.page; // this.getUser()
      // console.log("found on trial ==>", page.found)

      // for (let i = 0; page.found.trialCount > 6; i++) {
      //     console.log("new count ==>", page.found.trialCount)
      //     this.getUser()
      //     this.trialCount();
      //     this.getUser()
      // }
      //appendnew_next_sd_qnYHCTmsJirepfQj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qnYHCTmsJirepfQj');
    }
  }

  sd_PFdTz4I6dOb2yMqv(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_cQVVjgYXSJHbIBp4(bh);
      //appendnew_next_sd_PFdTz4I6dOb2yMqv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PFdTz4I6dOb2yMqv');
    }
  }

  sd_cQVVjgYXSJHbIBp4(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-users';
      bh = this.sd_2puEQLJbFWmZ193K(bh);
      //appendnew_next_sd_cQVVjgYXSJHbIBp4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cQVVjgYXSJHbIBp4');
    }
  }

  async sd_2puEQLJbFWmZ193K(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_uOEBnPp8FRIMrEGc(bh);
      //appendnew_next_sd_2puEQLJbFWmZ193K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2puEQLJbFWmZ193K');
    }
  }

  sd_uOEBnPp8FRIMrEGc(bh) {
    try {
      const page = this.page;
      page.found = page.result.find((users: any) => {
        return page.user._id == users._id;
      });

      console.log('get api ==>', page.found);
      bh = this.sd_nJ73V46etiDL4nqC(bh);
      //appendnew_next_sd_uOEBnPp8FRIMrEGc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uOEBnPp8FRIMrEGc');
    }
  }

  sd_nJ73V46etiDL4nqC(bh) {
    try {
      const page = this.page;
      console.log('lets gooooooo ==>', page.found);
      //  this.getUser()

      setTimeout(() => {
        for (let i = 0; i <= 6; i++) {
          this.trialCount();
          // page.found.trialCount++
          console.log('new count ==>', i);
        }
      }, 9000);

      //appendnew_next_sd_nJ73V46etiDL4nqC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nJ73V46etiDL4nqC');
    }
  }

  sd_6RSb6nxAwpXrwseu(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_96b0CjYaTghPx4w6(bh);
      //appendnew_next_sd_6RSb6nxAwpXrwseu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6RSb6nxAwpXrwseu');
    }
  }

  sd_96b0CjYaTghPx4w6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + `trial-increment`;

      bh.body = {
        _id: page.user._id,
        trialCount: page.user.trialCount++,
      };
      bh = this.sd_XORYuuJA8VhZwrnQ(bh);
      //appendnew_next_sd_96b0CjYaTghPx4w6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_96b0CjYaTghPx4w6');
    }
  }

  async sd_XORYuuJA8VhZwrnQ(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ZSIshdbOpfm66OgO(bh);
      //appendnew_next_sd_XORYuuJA8VhZwrnQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XORYuuJA8VhZwrnQ');
    }
  }

  sd_ZSIshdbOpfm66OgO(bh) {
    try {
      const page = this.page;
      console.log('new trial count ==>', page.result);
      //appendnew_next_sd_ZSIshdbOpfm66OgO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZSIshdbOpfm66OgO');
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
