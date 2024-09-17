// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay_management',
  templateUrl: './pay_management.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_managementComponent implements AfterViewInit {
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
      this.sd_H6aJaOAoVp4vq6dU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_H6aJaOAoVp4vq6dU(bh) {
    try {
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_H6aJaOAoVp4vq6dU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H6aJaOAoVp4vq6dU');
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
      return this.errorHandler(bh, e, 'sd_YmLJJATuCRfSkQUz');
    }
  }

  cardsFilter(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_7diO4Gn0urLXDAf6(bh);
      //appendnew_next_cardsFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jq8cIy67f6yRxXmD');
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
      bh = this.sd_c9z9zMbt03zMNBq1(bh);
      //appendnew_next_setClientData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_61UKXyNOabPg4ItU');
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
      bh = this.sd_sEEfqfrbKc6PncYs(bh);
      //appendnew_next_goToViewPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C9Skm2DHnQpJXDAK');
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
      bh = this.sd_UqGhBvQPon07bGFI(bh);
      //appendnew_next_sendUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KrM20LgHX16CJOuJ');
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
      return this.errorHandler(bh, e, 'sd_IJb4gnvvTJfK3E63');
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
      bh = this.sd_1xg11F8aWQBYU9Ef(bh);
      //appendnew_next_getRowColor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_huDbdJ9Pi7C7l1SX');
    }
  }
  //appendnew_flow_pay_managementComponent_start

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.table = [];
      this.page.searchValue = '';
      this.page.backupapplicationsDatasource = undefined;
      this.page.currentPageIndex = undefined;
      bh = this.sd_nIWaz3kqf6y3N9bn(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Arzy8uB4k1GWBhCI');
    }
  }

  sd_nIWaz3kqf6y3N9bn(bh) {
    try {
      this.page.paginator = MatPaginatorModule;
      bh = this.sd_50cMX6H4SfXx91KF(bh);
      //appendnew_next_sd_nIWaz3kqf6y3N9bn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nIWaz3kqf6y3N9bn');
    }
  }

  sd_50cMX6H4SfXx91KF(bh) {
    try {
      bh = this.sd_0S5xz4kOPvdicmdq(bh);
      //appendnew_next_sd_50cMX6H4SfXx91KF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_50cMX6H4SfXx91KF');
    }
  }

  sd_0S5xz4kOPvdicmdq(bh) {
    try {
      bh = this.sd_gKIcVTMlDc071Xta(bh);
      //appendnew_next_sd_0S5xz4kOPvdicmdq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0S5xz4kOPvdicmdq');
    }
  }

  sd_gKIcVTMlDc071Xta(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_aLNDbQf84ZZgYS7k(bh);
      //appendnew_next_sd_gKIcVTMlDc071Xta
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gKIcVTMlDc071Xta');
    }
  }

  sd_aLNDbQf84ZZgYS7k(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-monthly-payments';
      bh = this.sd_tZj98HRMrxvqzJnn(bh);
      //appendnew_next_sd_aLNDbQf84ZZgYS7k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLNDbQf84ZZgYS7k');
    }
  }

  async sd_tZj98HRMrxvqzJnn(bh) {
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
      bh = this.sd_mSUodGizS2HbDJrx(bh);
      bh = this.sd_N1aALxkUGzCMyqIq(bh);
      //appendnew_next_sd_tZj98HRMrxvqzJnn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tZj98HRMrxvqzJnn');
    }
  }

  sd_mSUodGizS2HbDJrx(bh) {
    try {
      const page = this.page;
      page.table = page.result;

      // page.table = bh.tableDataSource
      // page.table.policyActive = page.policyActiveStatus

      // page.table.forEach ( (item) => {
      //     if(item.policyActive === true){
      //         item.policyActive = "Active"
      //     } else {
      //     item.policyActive = "Deactivated"
      // }
      // })

      page.backupapplicationsDatasource = page.table;
      page.table.paginator = page.paginator;
      console.log('page.table ', page.table);

      bh = this.sd_cSgr6Vttfp6vdarU(bh);
      //appendnew_next_sd_mSUodGizS2HbDJrx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mSUodGizS2HbDJrx');
    }
  }

  sd_cSgr6Vttfp6vdarU(bh) {
    try {
      this.page.table.paginator = bh.tableDataSource.paginator;
      this.page.table.sort = bh.tableDataSource.sort;
      this.page.backupapplicationsDatasource = undefined;
      this.page.user = this.page.user;
      //appendnew_next_sd_cSgr6Vttfp6vdarU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cSgr6Vttfp6vdarU');
    }
  }

  sd_N1aALxkUGzCMyqIq(bh) {
    try {
      const page = this.page;
      console.log('payments ==>', page.result);
      //appendnew_next_sd_N1aALxkUGzCMyqIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N1aALxkUGzCMyqIq');
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
              (row.name && row.surname.toLowerCase().includes(searchValue)) ||
              (row.surname &&
                row.surname.toLowerCase().includes(searchValue)) ||
              (row.policyNumber &&
                row.policyNumber
                  .toString()
                  .toLowerCase()
                  .includes(searchValue)) || // Convert policyNumber to string
              (row.event && row.event.toLowerCase().includes(searchValue)) ||
              (row.date && row.date.toLowerCase().includes(searchValue)) ||
              (row.loggedBY && row.loggedBY.toLowerCase().includes(searchValue))
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
      return this.errorHandler(bh, e, 'sd_AcZlV0st0RdhUgzm');
    }
  }

  sd_7diO4Gn0urLXDAf6(bh) {
    try {
      const page = this.page;
      if (!page.backupapplicationsDatasource) {
        page.backupapplicationsDatasource = [...page.table];
      }

      const filteredResults = page.backupapplicationsDatasource.filter(
        (row) => {
          return (
            row.event &&
            row.event.toLowerCase() === bh.input.event.toLowerCase()
          );
        }
      );

      page.table = filteredResults;

      //appendnew_next_sd_7diO4Gn0urLXDAf6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7diO4Gn0urLXDAf6');
    }
  }

  async sd_c9z9zMbt03zMNBq1(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.setVariable(bh.input.row);

      bh = this.sd_KuuhBRGHKT9ixMsa(bh);
      //appendnew_next_sd_c9z9zMbt03zMNBq1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c9z9zMbt03zMNBq1');
    }
  }

  sd_KuuhBRGHKT9ixMsa(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.row));
      //appendnew_next_sd_KuuhBRGHKT9ixMsa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KuuhBRGHKT9ixMsa');
    }
  }

  async sd_sEEfqfrbKc6PncYs(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/view-payments');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_sEEfqfrbKc6PncYs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sEEfqfrbKc6PncYs');
    }
  }

  sd_UqGhBvQPon07bGFI(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.row));
      //appendnew_next_sd_UqGhBvQPon07bGFI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UqGhBvQPon07bGFI');
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
      return this.errorHandler(bh, e, 'sd_GNFPyM3JOScm1d7o');
    }
  }

  sd_2VNGqvcKee34lvOz_9(bh) {
    try {
      const page = this.page; // page.table.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9z0TUmIphR7dUFhM');
    }
  }

  sd_1xg11F8aWQBYU9Ef(bh) {
    try {
      const page = this.page;
      if (bh.input.row.packageType == 'Package 1') {
        return 'lightblue'; // Change to the color you want for this condition
      }
      return ''; // Default color (no color change)

      //appendnew_next_sd_1xg11F8aWQBYU9Ef
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1xg11F8aWQBYU9Ef');
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
  //appendnew_flow_pay_managementComponent_Catch
}
