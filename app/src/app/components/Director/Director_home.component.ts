// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Director_home',
  templateUrl: './Director_home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Director_homeComponent implements AfterViewInit {
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
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_te02262PadOVdBQa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_te02262PadOVdBQa(bh) {
    try {
      bh = this.sd_g20K44VauFfaOpff(bh);
      //appendnew_next_sd_te02262PadOVdBQa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_te02262PadOVdBQa');
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
      return this.errorHandler(bh, e, 'sd_EOOl0suzk2zorUn4');
    }
  }

  //appendnew_flow_Director_homeComponent_start

  sd_g20K44VauFfaOpff(bh) {
    try {
      this.page.pending = undefined;
      this.page.fullyApproved = undefined;
      this.page.partiallyApproved = undefined;
      bh = this.sd_mz1IWTdoY8DlKhOp(bh);
      //appendnew_next_sd_g20K44VauFfaOpff
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g20K44VauFfaOpff');
    }
  }

  sd_mz1IWTdoY8DlKhOp(bh) {
    try {
      this.page.policy = false;
      this.page.beneficary = false;
      bh = this.sd_E7IQfy5NNUPvzaM4(bh);
      //appendnew_next_sd_mz1IWTdoY8DlKhOp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mz1IWTdoY8DlKhOp');
    }
  }

  sd_E7IQfy5NNUPvzaM4(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_wZUJIhWIXJFnWRft(bh);
      //appendnew_next_sd_E7IQfy5NNUPvzaM4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E7IQfy5NNUPvzaM4');
    }
  }

  sd_wZUJIhWIXJFnWRft(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-claims';
      bh = this.sd_wRkEQPA58LbJRwyA(bh);
      //appendnew_next_sd_wZUJIhWIXJFnWRft
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wZUJIhWIXJFnWRft');
    }
  }

  async sd_wRkEQPA58LbJRwyA(bh) {
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
      //appendnew_next_sd_wRkEQPA58LbJRwyA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wRkEQPA58LbJRwyA');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      console.log('claims ->', page.result);

      page.partiallyApproved = page.result.filter(
        (item) => item.status === 'partially approved'
      ).length;
      page.pending = page.result.filter(
        (item) => item.status === 'pending'
      ).length;
      page.fullyApproved = page.result.filter(
        (item) => item.status === 'fully approved'
      ).length;

      // console.log('Partially Approved:', page.partiallyApproved);
      // console.log('Pending:', page.pending);
      // console.log('Fully Approved:', page.fullyApproved);

      bh.local.dataSource = new MatTableDataSource(page.result);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YvaTHSGf7egGC3tV');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uZzjwpp2GETspjYJ');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C9omM9ov77Yt9zDx');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JUTEttAqqLDvbfqP');
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
  //appendnew_flow_Director_homeComponent_Catch
}
