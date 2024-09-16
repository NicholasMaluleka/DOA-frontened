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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_DtSf30GmPf1zASFg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
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

  sd_DtSf30GmPf1zASFg(bh) {
    try {
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_DtSf30GmPf1zASFg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DtSf30GmPf1zASFg');
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
      return this.errorHandler(bh, e, 'sd_RgrRsjkQxtdhlIGG');
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
      bh = this.sd_jUtqxXGUHR3Ix0Lu(bh);
      //appendnew_next_cardsFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xonWNp48Jx1i3JWy');
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
      bh = this.sd_dPYwQs8rtUpA4383(bh);
      //appendnew_next_setClientData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zNzdsMdk0ZtrCGyq');
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
      bh = this.sd_KjgezfRoGPixtYr3(bh);
      //appendnew_next_goToViewPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m7mJ7BjRmuTPSjzn');
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
      bh = this.sd_dgfJkNIqDpLKo5oO(bh);
      //appendnew_next_sendUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kylVKcKkEMf4pF5t');
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
      bh = this.sd_qI2FoGMy5nrfZfbX(bh);
      //appendnew_next_getRowColor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iACRgndCNMEHCJxu');
    }
  }
  //appendnew_flow_Director_homeComponent_start

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

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.table = [];
      this.page.searchValue = '';
      this.page.backupapplicationsDatasource = undefined;
      this.page.currentPageIndex = undefined;
      this.page.currentDate = undefined;
      this.page.timeDifference = undefined;
      this.page.differenceInMonths = undefined;
      this.page.outsideTrialAccounts = undefined;
      bh = this.sd_rTJJURMTnWuDRATt(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yTELKnjwO60pudmG');
    }
  }

  sd_rTJJURMTnWuDRATt(bh) {
    try {
      this.page.paginator = MatPaginatorModule;
      bh = this.sd_n0wQGYnJGEpnYFkl(bh);
      //appendnew_next_sd_rTJJURMTnWuDRATt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rTJJURMTnWuDRATt');
    }
  }

  sd_n0wQGYnJGEpnYFkl(bh) {
    try {
      bh = this.sd_l91cknpNzAKaPZLc(bh);
      //appendnew_next_sd_n0wQGYnJGEpnYFkl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n0wQGYnJGEpnYFkl');
    }
  }

  sd_l91cknpNzAKaPZLc(bh) {
    try {
      bh = this.sd_QQnZ9ChWWAFoC0Zg(bh);
      //appendnew_next_sd_l91cknpNzAKaPZLc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l91cknpNzAKaPZLc');
    }
  }

  sd_QQnZ9ChWWAFoC0Zg(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_xjiBFP9fYiGVt0sO(bh);
      //appendnew_next_sd_QQnZ9ChWWAFoC0Zg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QQnZ9ChWWAFoC0Zg');
    }
  }

  sd_xjiBFP9fYiGVt0sO(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-users';
      bh = this.sd_8HpC5ye2Nr9muhxi(bh);
      //appendnew_next_sd_xjiBFP9fYiGVt0sO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xjiBFP9fYiGVt0sO');
    }
  }

  async sd_8HpC5ye2Nr9muhxi(bh) {
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
      bh = this.sd_2lLCrjneGLoT2O1S(bh);
      //appendnew_next_sd_8HpC5ye2Nr9muhxi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8HpC5ye2Nr9muhxi');
    }
  }

  sd_2lLCrjneGLoT2O1S(bh) {
    try {
      const page = this.page;
      bh.tableDataSource = page.result.filter((user: any) => {
        return user.role == 'client';
      });

      page.table = bh.tableDataSource;
      page.backupapplicationsDatasource = page.table;
      page.table.paginator = page.paginator;
      console.log('bh', page.table);

      page.currentDate = new Date();

      page.trialAccounts = page.table.filter((item) => {
        page.registeredDate = new Date(item.registeredDate);
        console.log('page.registeredDate', page.registeredDate);

        page.timeDifference =
          page.currentDate.getTime() - page.registeredDate.getTime();
        console.log('timeDifference', page.timeDifference);

        page.differenceInMonths =
          page.timeDifference / (1000 * 3600 * 24 * 30.436875); // Convert milliseconds to months
        console.log('m', page.differenceInMonths);
        return page.differenceInMonths <= 6;
      }).length;

      page.outsideTrialAccounts = page.table.filter((item) => {
        page.registeredDate = new Date(item.registeredDate);
        page.timeDifference =
          page.currentDate.getTime() - page.registeredDate.getTime();
        page.differenceInMonths =
          page.timeDifference / (1000 * 3600 * 24 * 30.436875); // Convert milliseconds to months

        return page.differenceInMonths > 6;
      }).length;

      page.allAccounts = page.table.length;

      console.log('Trial Accounts:', page.trialAccounts);
      console.log('Outside Trial Accounts:', page.outsideTrialAccounts);
      console.log('All Accounts:', page.allAccounts);

      bh = this.sd_CNo2sWBcD8FWpCtC(bh);
      //appendnew_next_sd_2lLCrjneGLoT2O1S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2lLCrjneGLoT2O1S');
    }
  }

  sd_CNo2sWBcD8FWpCtC(bh) {
    try {
      this.page.table.paginator = bh.tableDataSource.paginator;
      this.page.table.sort = bh.tableDataSource.sort;
      this.page.backupapplicationsDatasource = undefined;
      //appendnew_next_sd_CNo2sWBcD8FWpCtC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CNo2sWBcD8FWpCtC');
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
      return this.errorHandler(bh, e, 'sd_7rjTzg6eMUQI2VKx');
    }
  }

  sd_jUtqxXGUHR3Ix0Lu(bh) {
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

      //appendnew_next_sd_jUtqxXGUHR3Ix0Lu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jUtqxXGUHR3Ix0Lu');
    }
  }

  async sd_dPYwQs8rtUpA4383(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.setVariable(bh.input.row);

      bh = this.sd_8PEw6bn53fcAWyPF(bh);
      //appendnew_next_sd_dPYwQs8rtUpA4383
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPYwQs8rtUpA4383');
    }
  }

  sd_8PEw6bn53fcAWyPF(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.row));
      //appendnew_next_sd_8PEw6bn53fcAWyPF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8PEw6bn53fcAWyPF');
    }
  }

  async sd_KjgezfRoGPixtYr3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/view-payments');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_KjgezfRoGPixtYr3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KjgezfRoGPixtYr3');
    }
  }

  sd_dgfJkNIqDpLKo5oO(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.row));
      //appendnew_next_sd_dgfJkNIqDpLKo5oO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dgfJkNIqDpLKo5oO');
    }
  }

  sd_qI2FoGMy5nrfZfbX(bh) {
    try {
      const page = this.page;
      console.log('input', bh.input.row.packageType == 'Package 1');
      if (bh.input.row.packageType == 'Package 1') {
        return 'lightblue'; // Change to the color you want for this condition
      }
      return ''; // Default color (no color change)

      //appendnew_next_sd_qI2FoGMy5nrfZfbX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qI2FoGMy5nrfZfbX');
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
