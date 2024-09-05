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
import { searchPolicyComponent } from 'app/components/search Policy/searchPolicy.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-claims',
  templateUrl: './claims.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class claimsComponent implements AfterViewInit {
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
      this.sd_Z1DToX7LS6YU49Dk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Z1DToX7LS6YU49Dk(bh) {
    try {
      bh = this.sd_f4qlWKJDct97cBFV(bh);
      //appendnew_next_sd_Z1DToX7LS6YU49Dk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z1DToX7LS6YU49Dk');
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
      return this.errorHandler(bh, e, 'sd_NnBo2ElmEPMQhdin');
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
      return this.errorHandler(bh, e, 'sd_Ax3NUpSHKes7P69O');
    }
  }

  openBeneficary(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_R4PZGnmiLIdMHbq5(bh);
      //appendnew_next_openBeneficary
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7kDEC5bWU42VY8uN');
    }
  }

  openPolicy(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_LhywbXVhiP5VbipK(bh);
      //appendnew_next_openPolicy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d5Bmgxud8M60Ezv8');
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
      bh = this.sd_bAHaN07ntqi6vQZb(bh);
      //appendnew_next_reviewClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6uxXfPKiwYlVASPF');
    }
  }
  //appendnew_flow_claimsComponent_start

  sd_f4qlWKJDct97cBFV(bh) {
    try {
      this.page.policy = false;
      this.page.beneficary = false;
      bh = this.sd_VR4tz5tQLO9fBnmI(bh);
      //appendnew_next_sd_f4qlWKJDct97cBFV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f4qlWKJDct97cBFV');
    }
  }

  sd_VR4tz5tQLO9fBnmI(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_gSvpKSvplT90yV3v(bh);
      //appendnew_next_sd_VR4tz5tQLO9fBnmI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VR4tz5tQLO9fBnmI');
    }
  }

  sd_gSvpKSvplT90yV3v(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-claims';
      bh = this.sd_7iqhFUJtamXGE2xs(bh);
      //appendnew_next_sd_gSvpKSvplT90yV3v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gSvpKSvplT90yV3v');
    }
  }

  async sd_7iqhFUJtamXGE2xs(bh) {
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
      //appendnew_next_sd_7iqhFUJtamXGE2xs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7iqhFUJtamXGE2xs');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      console.log('claims ->', page.result);

      bh.local.dataSource = new MatTableDataSource(page.result);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GwgX5mNFcON59xzn');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3pY8tDHomR137FNx');
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
      return this.errorHandler(bh, e, 'sd_9CSVHoYiwzqvTVDq');
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
      return this.errorHandler(bh, e, 'sd_P1x3dimC6AnShOit');
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
      return this.errorHandler(bh, e, 'sd_nJkzHFDq629hbd1F');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WATRVjI05gX4Sh1T');
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
      return this.errorHandler(bh, e, 'sd_HIDdQSP0NPnkAAKL');
    }
  }

  sd_R4PZGnmiLIdMHbq5(bh) {
    try {
      const searchPolicyDialog = this.__page_injector__.get(MatDialog);
      const searchPolicyDialogRef = searchPolicyDialog.open(
        searchPolicyComponent,
        { width: '40%' }
      );
      searchPolicyDialogRef.afterOpened().subscribe((event) => {
        this.sd_aNCFGIa8P3FmUQlu(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R4PZGnmiLIdMHbq5');
    }
  }

  sd_aNCFGIa8P3FmUQlu(bh) {
    try {
      const page = this.page;
      page.check = {
        beneficiary: true,
        policyHolder: false,
      };
      bh = this.sd_3zlIvBo0PpuXde25(bh);
      //appendnew_next_sd_aNCFGIa8P3FmUQlu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aNCFGIa8P3FmUQlu');
    }
  }

  sd_3zlIvBo0PpuXde25(bh) {
    try {
      localStorage.setItem('check', JSON.stringify(this.page.check));
      //appendnew_next_sd_3zlIvBo0PpuXde25
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3zlIvBo0PpuXde25');
    }
  }

  sd_LhywbXVhiP5VbipK(bh) {
    try {
      const searchPolicyDialog = this.__page_injector__.get(MatDialog);
      const searchPolicyDialogRef = searchPolicyDialog.open(
        searchPolicyComponent,
        { width: '40%' }
      );
      searchPolicyDialogRef.afterOpened().subscribe((event) => {
        this.sd_UDh5XCgUWp8UrqTK(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LhywbXVhiP5VbipK');
    }
  }

  sd_UDh5XCgUWp8UrqTK(bh) {
    try {
      const page = this.page;
      page.check = {
        beneficiary: false,
        policyHolder: true,
      };
      bh = this.sd_2WWUBCfUnObCGa7z(bh);
      //appendnew_next_sd_UDh5XCgUWp8UrqTK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UDh5XCgUWp8UrqTK');
    }
  }

  sd_2WWUBCfUnObCGa7z(bh) {
    try {
      localStorage.setItem('check', JSON.stringify(this.page.check));
      //appendnew_next_sd_2WWUBCfUnObCGa7z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2WWUBCfUnObCGa7z');
    }
  }

  sd_bAHaN07ntqi6vQZb(bh) {
    try {
      const page = this.page;
      console.log('CLAIM POLICY: ', bh.input.claim);
      //appendnew_next_sd_bAHaN07ntqi6vQZb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bAHaN07ntqi6vQZb');
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
  //appendnew_flow_claimsComponent_Catch
}
