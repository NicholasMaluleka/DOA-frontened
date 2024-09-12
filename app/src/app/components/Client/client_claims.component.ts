// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { confirm_identityComponent } from 'app/components/Client/confirm_identity.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-client_claims',
  templateUrl: './client_claims.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class client_claimsComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_VMC5DARm4dBG3dvW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VMC5DARm4dBG3dvW(bh) {
    try {
      bh = this.sd_LQE3G3t79OKB77YW(bh);
      //appendnew_next_sd_VMC5DARm4dBG3dvW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VMC5DARm4dBG3dvW');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M3drRgI1y5V60jRP');
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
      return this.errorHandler(bh, e, 'sd_oUeZwV1i0MYgVzO2');
    }
  }

  confirmPassword(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_cCg7LMjTO95FMIW9(bh);
      //appendnew_next_confirmPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8p3lE7t0dTRlGArU');
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
      bh = this.sd_QasqNkT1ft9xx3g5(bh);
      //appendnew_next_reviewClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7HQQDsDhZXQKqYFH');
    }
  }
  //appendnew_flow_client_claimsComponent_start

  sd_LQE3G3t79OKB77YW(bh) {
    try {
      this.page.policy = false;
      this.page.beneficary = false;
      this.page.table = [];
      bh = this.sd_myiuVnSFhK0HbGI0(bh);
      //appendnew_next_sd_LQE3G3t79OKB77YW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LQE3G3t79OKB77YW');
    }
  }

  sd_myiuVnSFhK0HbGI0(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_FoSgwmKArXDOcqFz(bh);
      //appendnew_next_sd_myiuVnSFhK0HbGI0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_myiuVnSFhK0HbGI0');
    }
  }

  sd_FoSgwmKArXDOcqFz(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-claims';
      bh = this.sd_GfFItPYnXvt20WMT(bh);
      //appendnew_next_sd_FoSgwmKArXDOcqFz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FoSgwmKArXDOcqFz');
    }
  }

  async sd_GfFItPYnXvt20WMT(bh) {
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
      bh = this.sd_hY08ja6AKvpvkp18(bh);
      //appendnew_next_sd_GfFItPYnXvt20WMT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GfFItPYnXvt20WMT');
    }
  }

  sd_hY08ja6AKvpvkp18(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_hY08ja6AKvpvkp18
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hY08ja6AKvpvkp18');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      console.log('page.user - >', page.user.policyNumber);
      console.log('claims ->', page.result);

      console.log(
        page.result.filter((item) => item.policyNo == page.user.policyNumber)
      );
      page.result.filter((item) => {
        if (item.policyNo == page.user.policyNumber) {
          console.log('data for 1 client', item);
          page.table.push(item);
        }
      });
      console.log('rwertyui', page.table);

      bh.local.dataSource = new MatTableDataSource(page.table);

      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ewibpE2HRRTaNjqr');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iw16Ap6n1OZdQybn');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8IpBDXEbcQrR5lnR');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      bh = this.sd_xKCCTWKzvgDN0rx7_3(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0ZN5qFklMgCuMciZ');
    }
  }

  sd_xKCCTWKzvgDN0rx7_3(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4MqNGVDylH570Nxm');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iw1WrnpOhdkNJtBD');
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
      return this.errorHandler(bh, e, 'sd_7mN6JoRHJyTzxwUD');
    }
  }

  sd_cCg7LMjTO95FMIW9(bh) {
    try {
      const confirm_identityDialog = this.__page_injector__.get(MatDialog);
      const confirm_identityDialogRef = confirm_identityDialog.open(
        confirm_identityComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cCg7LMjTO95FMIW9');
    }
  }

  sd_QasqNkT1ft9xx3g5(bh) {
    try {
      localStorage.setItem('claim', JSON.stringify(bh.input.claim));
      bh = this.sd_dxNlwJcweptzBBD0(bh);
      //appendnew_next_sd_QasqNkT1ft9xx3g5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QasqNkT1ft9xx3g5');
    }
  }

  sd_dxNlwJcweptzBBD0(bh) {
    try {
      const page = this.page;
      bh.routeData = { isReview: true };
      bh = this.sd_qJzUhzTofMKIqPSC(bh);
      //appendnew_next_sd_dxNlwJcweptzBBD0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dxNlwJcweptzBBD0');
    }
  }

  async sd_qJzUhzTofMKIqPSC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/client_view_claim');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_qJzUhzTofMKIqPSC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qJzUhzTofMKIqPSC');
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
  //appendnew_flow_client_claimsComponent_Catch
}
