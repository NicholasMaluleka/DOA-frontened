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
  selector: 'bh-client_view_claim',
  templateUrl: './client_view_claim.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class client_view_claimComponent {
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
      this.sd_dfFKsPO9eitEjN7M(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dfFKsPO9eitEjN7M(bh) {
    try {
      bh = this.sd_wpYrgOag9aqCjhHl(bh);
      //appendnew_next_sd_dfFKsPO9eitEjN7M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dfFKsPO9eitEjN7M');
    }
  }

  //appendnew_flow_client_view_claimComponent_start

  sd_wpYrgOag9aqCjhHl(bh) {
    try {
      bh = this.sd_fJ8m3FaaUfnjTh9C(bh);
      //appendnew_next_sd_wpYrgOag9aqCjhHl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wpYrgOag9aqCjhHl');
    }
  }

  sd_fJ8m3FaaUfnjTh9C(bh) {
    try {
      bh = this.sd_c8NOjDUYzS2u7cWO(bh);
      //appendnew_next_sd_fJ8m3FaaUfnjTh9C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fJ8m3FaaUfnjTh9C');
    }
  }

  sd_c8NOjDUYzS2u7cWO(bh) {
    try {
      localStorage.setItem('claim', JSON.stringify(this.page.claim));
      bh = this.forms(bh);
      //appendnew_next_sd_c8NOjDUYzS2u7cWO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c8NOjDUYzS2u7cWO');
    }
  }

  forms(bh) {
    try {
      const page = this.page;
      console.log('claimeee', page.claim);
      // // decesed details
      // page.deceased = new FormGroup({
      //       firstName :new FormControl(''),
      //       lastName: new FormControl( ''),
      //       idNum :new FormControl( ''),
      //        gender: new FormControl(''),

      //     })
      //     // documents
      //   // page.idClaimer=new FormGroup({
      //   //   filename: new FormControl(""),
      //   //   })
      //   //    page.idDecesed =new FormGroup({

      //   //   })
      //   //     page.bi1662 =new FormGroup({

      //   //   })
      //   //     page.deathCertificate =new FormGroup({

      //   //   })
      //   //     page.bankDetails =new FormGroup({

      //   //   })
      //     //claims form with all information including claimer details
      // page.policyClaimsForm = new FormGroup({
      //     firstName :new FormControl(page.user.firstName),
      //     lastName:new FormControl(page.user.lastName),
      //     idNum:new FormControl( page.user.idNumber),
      //     gender:new FormControl( page.user.gender),
      //     packageType : new FormControl( page.user.packageType),
      //     payoutAmount :new FormControl( ''),
      //     deceased: page.deceased,
      //     deceased2 :new FormControl(''),
      //     // idClaimer: page.idClaimer,
      //     idClaimer2:new FormControl(''),

      //      idDeceased2:new FormControl(''),

      //      bi16632:new FormControl(''),
      //     // deathCertificate:page.deathCertificate,
      //     deathCetificatify2:new FormControl(''),
      //     // bankDetails :page.bankDetails,
      //      bankDetails2:new FormControl(''),
      //      status:new FormControl('pending'),
      //      depsId : new FormControl ()
      //  })

      //  page.date = new Date()

      //    console.log("page.deceased", page.deceased)

      // // bh.url = page.ssdUrl + 'get-users'
      //appendnew_next_forms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6nloMKrs7E7KI7sJ');
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
  //appendnew_flow_client_view_claimComponent_Catch
}
