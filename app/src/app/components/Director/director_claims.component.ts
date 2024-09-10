// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-director_claims',
  templateUrl: './director_claims.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class director_claimsComponent {
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
      this.sd_7sfvrZ225CdMM51S(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7sfvrZ225CdMM51S(bh) {
    try {
      bh = this.sd_X2z6Q7gxw2cH9K2m(bh);
      //appendnew_next_sd_7sfvrZ225CdMM51S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7sfvrZ225CdMM51S');
    }
  }

  reviewClaim(claim: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { claim };
      bh.local = {};
      bh = this.sd_fKkfwlIf7mttK70r(bh);
      //appendnew_next_reviewClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3a6vRGUftf6Uud1I');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zOO7GKwbgVVdr2mG');
    }
  }
  //appendnew_flow_director_claimsComponent_start

  sd_X2z6Q7gxw2cH9K2m(bh) {
    try {
      bh = this.sd_VsyrzifyF9Fd71Id(bh);
      //appendnew_next_sd_X2z6Q7gxw2cH9K2m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X2z6Q7gxw2cH9K2m');
    }
  }

  sd_VsyrzifyF9Fd71Id(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_uZVk7eyG3VD3vVTZ(bh);
      //appendnew_next_sd_VsyrzifyF9Fd71Id
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VsyrzifyF9Fd71Id');
    }
  }

  sd_uZVk7eyG3VD3vVTZ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-claims';
      bh = this.sd_IqnGomeuZ48sddWO(bh);
      //appendnew_next_sd_uZVk7eyG3VD3vVTZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uZVk7eyG3VD3vVTZ');
    }
  }

  async sd_IqnGomeuZ48sddWO(bh) {
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
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_IqnGomeuZ48sddWO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IqnGomeuZ48sddWO');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      console.log('claims ->', page.result);

      page.approvedDataSource = [];
      page.pendingDataSource = [];
      page.rejectedDataSource = [];
      page.partiallyApprovedDataSource = [];

      page.result.forEach((claim) => {
        if (claim.status === 'approved') {
          page.approvedDataSource.push(claim);
        } else if (claim.status === 'pending') {
          page.pendingDataSource.push(claim);
        } else if (claim.status === 'rejected') {
          page.rejectedDataSource.push(claim);
        } else if (claim.status === 'partially approved') {
          page.partiallyApprovedDataSource.push(claim);
        }
      });

      console.log('approvedDataSource', page.approvedDataSource);
      console.log('rejectedDataSource', page.rejectedDataSource);
      console.log('pendingDataSource', page.pendingDataSource);

      bh.local.dataSource = new MatTableDataSource(page.result);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTyFlloAKlzhDpwx');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vdk5GATzN4wO7kSy');
    }
  }

  sd_fKkfwlIf7mttK70r(bh) {
    try {
      localStorage.setItem('claim', JSON.stringify(bh.input.claim));
      bh = this.sd_PJMQyzTsYR7RtJz0(bh);
      //appendnew_next_sd_fKkfwlIf7mttK70r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fKkfwlIf7mttK70r');
    }
  }

  sd_PJMQyzTsYR7RtJz0(bh) {
    try {
      const page = this.page;
      bh.routeData = { isReview: true };
      bh = this.sd_tfnpqIVszDlWKqET(bh);
      //appendnew_next_sd_PJMQyzTsYR7RtJz0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PJMQyzTsYR7RtJz0');
    }
  }

  async sd_tfnpqIVszDlWKqET(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/claim-register');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.routeData),
        });
      //appendnew_next_sd_tfnpqIVszDlWKqET
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tfnpqIVszDlWKqET');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TnQfs6igqZqjFNen');
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
  //appendnew_flow_director_claimsComponent_Catch
}
