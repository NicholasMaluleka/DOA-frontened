// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { password_pop_upComponent } from 'app/components/Client/password_pop_up.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-client_profile',
  templateUrl: './client_profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class client_profileComponent {
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
      this.sd_8sFTNmL33d2ytW8a(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8sFTNmL33d2ytW8a(bh) {
    try {
      bh = this.sd_HylJdYhI60EDK1IM(bh);
      //appendnew_next_sd_8sFTNmL33d2ytW8a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8sFTNmL33d2ytW8a');
    }
  }

  enterPassword(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WYWVvPFjrnA4FKdK(bh);
      //appendnew_next_enterPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OpmZ1T2tFVSwDzss');
    }
  }
  //appendnew_flow_client_profileComponent_start

  sd_HylJdYhI60EDK1IM(bh) {
    try {
      bh = this.sd_yfOFbavH9ohBUvy1(bh);
      //appendnew_next_sd_HylJdYhI60EDK1IM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HylJdYhI60EDK1IM');
    }
  }

  sd_yfOFbavH9ohBUvy1(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_sDChkTyL4lAwKMl2(bh);
      //appendnew_next_sd_yfOFbavH9ohBUvy1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yfOFbavH9ohBUvy1');
    }
  }

  sd_sDChkTyL4lAwKMl2(bh) {
    try {
      const page = this.page; // setTimeout(() => {
      // page.currentUser = page.user
      //  console.log("page user" , page.currentUser)
      //  console.log("bene",page.currentUser.beneficaries);
      //  }, 1000)

      page.currentUser = page.user;
      console.log('page user', page.currentUser);
      console.log('bene', page.currentUser.beneficaries);

      //appendnew_next_sd_sDChkTyL4lAwKMl2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sDChkTyL4lAwKMl2');
    }
  }

  sd_WYWVvPFjrnA4FKdK(bh) {
    try {
      const password_pop_upDialog = this.__page_injector__.get(MatDialog);
      const password_pop_upDialogRef = password_pop_upDialog.open(
        password_pop_upComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WYWVvPFjrnA4FKdK');
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
  //appendnew_flow_client_profileComponent_Catch
}
