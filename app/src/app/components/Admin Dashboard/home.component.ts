// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  AfterViewInit,
  Component,
  Injector,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent implements OnChanges, AfterViewInit {
  @ViewChild(MatPaginator, { read: MatPaginator })
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
      this.sd_1t0DhsI5kAmqEWqm(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1t0DhsI5kAmqEWqm(bh) {
    try {
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_1t0DhsI5kAmqEWqm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1t0DhsI5kAmqEWqm');
    }
  }

  onFilter(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_5(bh);
      //appendnew_next_onFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c9oNeYPHHXzRmfhx');
    }
  }

  cardsFilter(plan: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { plan };
      bh.local = {};
      bh = this.sd_cDHK0KhL1bspOFcv(bh);
      //appendnew_next_cardsFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k3j5KbTZTS6UvlPT');
    }
  }

  setClientData(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_iLkoHwTtrAd37cM8(bh);
      //appendnew_next_setClientData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yN9biohu3MCF1RRs');
    }
  }

  goToViewPayment(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WnahUlnrdMBkCHsS(bh);
      //appendnew_next_goToViewPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oYuxO86FKvA3jf09');
    }
  }

  sendUser(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_eVczpAOdwofO12md(bh);
      //appendnew_next_sendUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nrUbOI69LYzRt4La');
    }
  }

  onPageChange(ev: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { ev };
      bh.local = {};
      bh = this.sd_av9XUpIkWkjumDhd(bh);
      //appendnew_next_onPageChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aw4OH46OM1EzQrTS');
    }
  }

  updateApplicationToShow(itemsPerPage: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { itemsPerPage };
      bh.local = {};
      bh = this.sd_0myDzscgXXTxK4WK(bh);
      //appendnew_next_updateApplicationToShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6Uycp6i4VVxlHjZ2');
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_2DIjYQbf6CS17DYx(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PifxfaDM06rskNkb');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_9(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0fGu5LvUcHdhb2Ac');
    }
  }

  getRowColor(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_Vk8d9TXjHuPW2ccT(bh);
      //appendnew_next_getRowColor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MPNk5xxpnKSeR1Jn');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.table = [];
      this.page.searchValue = '';
      this.page.backupapplicationsDatasource = undefined;
      this.page.currentPageIndex = undefined;
      bh = this.sd_MVMh0WBg4s6QqZUr(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PqjDEZrkZowpbFwi');
    }
  }

  sd_MVMh0WBg4s6QqZUr(bh) {
    try {
      this.page.paginator = MatPaginatorModule;
      bh = this.sd_FQOoBfBlmATSyjPd(bh);
      //appendnew_next_sd_MVMh0WBg4s6QqZUr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVMh0WBg4s6QqZUr');
    }
  }

  sd_FQOoBfBlmATSyjPd(bh) {
    try {
      bh = this.sd_S0vzAMRd3kpQdYu4(bh);
      //appendnew_next_sd_FQOoBfBlmATSyjPd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FQOoBfBlmATSyjPd');
    }
  }

  sd_S0vzAMRd3kpQdYu4(bh) {
    try {
      bh = this.sd_SqQamlbgHC0CMDv2(bh);
      //appendnew_next_sd_S0vzAMRd3kpQdYu4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S0vzAMRd3kpQdYu4');
    }
  }

  sd_SqQamlbgHC0CMDv2(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_7gioBFKVWHaZ95Yw(bh);
      //appendnew_next_sd_SqQamlbgHC0CMDv2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqQamlbgHC0CMDv2');
    }
  }

  sd_7gioBFKVWHaZ95Yw(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-users';
      bh = this.sd_RRKQV3ETWYI7Umxb(bh);
      //appendnew_next_sd_7gioBFKVWHaZ95Yw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7gioBFKVWHaZ95Yw');
    }
  }

  async sd_RRKQV3ETWYI7Umxb(bh) {
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
      bh = this.sd_sQz2RUgYmK2eNRYZ(bh);
      //appendnew_next_sd_RRKQV3ETWYI7Umxb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RRKQV3ETWYI7Umxb');
    }
  }

  sd_sQz2RUgYmK2eNRYZ(bh) {
    try {
      const page = this.page;
      bh.tableDataSource = page.result.filter((user: any) => {
        return user.role == 'client';
      });

      page.table = bh.tableDataSource;
      page.backupapplicationsDatasource = page.table;
      page.table.paginator = page.paginator;
      console.log('bh', bh);

      bh = this.sd_Q9kpfJBrwcNwMSIq(bh);
      //appendnew_next_sd_sQz2RUgYmK2eNRYZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sQz2RUgYmK2eNRYZ');
    }
  }

  sd_Q9kpfJBrwcNwMSIq(bh) {
    try {
      this.page.table.paginator = bh.tableDataSource.paginator;
      this.page.table.sort = bh.tableDataSource.sort;
      this.page.backupapplicationsDatasource = undefined;
      this.page.user = this.page.user;
      //appendnew_next_sd_Q9kpfJBrwcNwMSIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q9kpfJBrwcNwMSIq');
    }
  }

  sd_iBlFYTlpoczCmWts_5(bh) {
    try {
      const page = this.page;
      if (!page.backupapplicationsDatasource) {
        page.backupapplicationsDatasource = [...page.table];
      }

      const searchValue = (
        bh.input.filterEvent.target as HTMLInputElement
      ).value
        .trim()
        .toLowerCase();
      page.searchValue = searchValue;

      if (searchValue) {
        const searchResults = page.backupapplicationsDatasource.filter(
          (row) => {
            return (
              (row.firstName &&
                row.firstName.toLowerCase().includes(searchValue)) ||
              (row.lastName &&
                row.lastName.toLowerCase().includes(searchValue)) ||
              (row.policyNumber &&
                row.policyNumber
                  .toString()
                  .toLowerCase()
                  .includes(searchValue)) || // Convert policyNumber to string
              (row.packageType &&
                row.packageType.toLowerCase().includes(searchValue))
            );
          }
        );
        page.table = searchResults;
      } else {
        // Reset to original data if search value is empty
        page.table = [...page.backupapplicationsDatasource];
      }

      //appendnew_next_sd_iBlFYTlpoczCmWts_5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_26B83wPaElPthlwe');
    }
  }

  sd_cDHK0KhL1bspOFcv(bh) {
    try {
      const page = this.page;
      if (!page.backupapplicationsDatasource) {
        page.backupapplicationsDatasource = [...page.table];
      }

      const filteredResults = page.backupapplicationsDatasource.filter(
        (row) => {
          return (
            row.packageType &&
            row.packageType.toLowerCase() === bh.input.plan.toLowerCase()
          );
        }
      );

      page.table = filteredResults;

      //appendnew_next_sd_cDHK0KhL1bspOFcv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cDHK0KhL1bspOFcv');
    }
  }

  async sd_iLkoHwTtrAd37cM8(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.setVariable(bh.input.row);

      bh = this.sd_ApqA9ISLMNGfknzq(bh);
      //appendnew_next_sd_iLkoHwTtrAd37cM8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iLkoHwTtrAd37cM8');
    }
  }

  sd_ApqA9ISLMNGfknzq(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.row));
      //appendnew_next_sd_ApqA9ISLMNGfknzq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ApqA9ISLMNGfknzq');
    }
  }

  async sd_WnahUlnrdMBkCHsS(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/view-payments');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_WnahUlnrdMBkCHsS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WnahUlnrdMBkCHsS');
    }
  }

  sd_eVczpAOdwofO12md(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.row));
      //appendnew_next_sd_eVczpAOdwofO12md
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eVczpAOdwofO12md');
    }
  }

  sd_av9XUpIkWkjumDhd(bh) {
    try {
      const page = this.page;
      page.currentPageIndex = bh.input.ev.pageIndex;
      console.log('current', page.currentPageIndex);
      bh = this.sd_CdCXJ8wOH3CkcJYj(bh);
      //appendnew_next_sd_av9XUpIkWkjumDhd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_av9XUpIkWkjumDhd');
    }
  }

  sd_CdCXJ8wOH3CkcJYj(bh) {
    try {
      let outputVariables = this.updateApplicationToShow(undefined);

      //appendnew_next_sd_CdCXJ8wOH3CkcJYj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CdCXJ8wOH3CkcJYj');
    }
  }

  sd_0myDzscgXXTxK4WK(bh) {
    try {
      const page = this.page;
      bh.startIndex = page.currentPageIndex * bh.input.itemsPerPage;
      bh.endIndex = bh.startIndex + bh.input.itemsPerPage;
      page.table = page.backupapplicationsDatasource.slice(
        bh.startIndex,
        bh.endIndex
      );
      //appendnew_next_sd_0myDzscgXXTxK4WK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0myDzscgXXTxK4WK');
    }
  }

  sd_2DIjYQbf6CS17DYx(bh) {
    try {
      let outputVariables = this.onPageChange(undefined);

      //appendnew_next_sd_2DIjYQbf6CS17DYx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2DIjYQbf6CS17DYx');
    }
  }

  sd_xKCCTWKzvgDN0rx7_9(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_9(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wuV2zSw5nsWGD6kg');
    }
  }

  sd_2VNGqvcKee34lvOz_9(bh) {
    try {
      const page = this.page; // page.table.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7VuYIUgtmhqPsXpX');
    }
  }

  sd_Vk8d9TXjHuPW2ccT(bh) {
    try {
      const page = this.page;
      if (bh.input.row.packageType == 'Package 1') {
        return 'lightblue'; // Change to the color you want for this condition
      }
      return ''; // Default color (no color change)

      //appendnew_next_sd_Vk8d9TXjHuPW2ccT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vk8d9TXjHuPW2ccT');
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
  //appendnew_flow_homeComponent_Catch
}
