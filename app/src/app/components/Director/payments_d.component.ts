// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { payment_formComponent } from 'app/components/Admin Dashboard/payment_form.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-payments_d',
  templateUrl: './payments_d.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class payments_dComponent {
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
      this.sd_9z4kKM1PE3e4RN3b(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9z4kKM1PE3e4RN3b(bh) {
    try {
      bh = this.getService(bh);
      //appendnew_next_sd_9z4kKM1PE3e4RN3b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9z4kKM1PE3e4RN3b');
    }
  }

  getPayments(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FyqhvPJiuzFQzMWS(bh);
      //appendnew_next_getPayments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i0FIIeIZDp3klPb2');
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
      return this.errorHandler(bh, e, 'sd_zEsrzaohteBBktOl');
    }
  }

  openPaymentForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_JF8zYoMjPIGC2h8x(bh);
      //appendnew_next_openPaymentForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cxdIT81fgoargxzH');
    }
  }

  edit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_fKJqbaIqJqDAzHOI(bh);
      //appendnew_next_edit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pl37Y4z7koGad6pS');
    }
  }

  editInfo(index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index };
      bh.local = {};
      bh = this.sd_cOHbR48LEvxqAFrn(bh);
      //appendnew_next_editInfo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VEQAnSUtSydOZLIe');
    }
  }

  disable(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kFc5f3Gf2avlG90G(bh);
      //appendnew_next_disable
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xEXlx68zrxjwqXCn');
    }
  }

  getLoggedInUser(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_cM1LLeKG6LwG1aw4(bh);
      //appendnew_next_getLoggedInUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PvjyrGKiNqHHm3tE');
    }
  }
  //appendnew_flow_payments_dComponent_start

  async getService(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.getVariable();
      this.page.userData = outputVariables.local.data;

      bh = this.getPay(bh);
      //appendnew_next_getService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zh96OVkyeR1jLr1B');
    }
  }

  getPay(bh) {
    try {
      let outputVariables = this.getPayments();

      bh = this.sd_01uPj3aBCNdKLCpU(bh);
      //appendnew_next_getPay
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4kh7W81vqUC6bb6i');
    }
  }

  sd_01uPj3aBCNdKLCpU(bh) {
    try {
      this.page.userData = this.page.userData;
      this.page.backupapplicationsDatasource = undefined;
      this.page.loading = false;
      this.page.table = this.page.table;
      this.page.disabled = false;
      bh = this.sd_VB1Cs2Hdw0zhe84d(bh);
      //appendnew_next_sd_01uPj3aBCNdKLCpU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_01uPj3aBCNdKLCpU');
    }
  }

  sd_VB1Cs2Hdw0zhe84d(bh) {
    try {
      let outputVariables = this.getPayments();

      bh = this.sd_0o8PDiaDEB3nqRPI(bh);
      //appendnew_next_sd_VB1Cs2Hdw0zhe84d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VB1Cs2Hdw0zhe84d');
    }
  }

  sd_0o8PDiaDEB3nqRPI(bh) {
    try {
      let outputVariables = this.getLoggedInUser();

      //appendnew_next_sd_0o8PDiaDEB3nqRPI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0o8PDiaDEB3nqRPI');
    }
  }

  sd_FyqhvPJiuzFQzMWS(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_cRior6oRKbCxo4mM(bh);
      //appendnew_next_sd_FyqhvPJiuzFQzMWS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FyqhvPJiuzFQzMWS');
    }
  }

  sd_cRior6oRKbCxo4mM(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-monthly-payments';

      page.loading = true;
      bh = this.sd_jBNN3TGAlh7XIXe1(bh);
      //appendnew_next_sd_cRior6oRKbCxo4mM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cRior6oRKbCxo4mM');
    }
  }

  async sd_jBNN3TGAlh7XIXe1(bh) {
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
      bh = this.sd_KO3ihOLw71tkfGsY(bh);
      //appendnew_next_sd_jBNN3TGAlh7XIXe1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jBNN3TGAlh7XIXe1');
    }
  }

  sd_KO3ihOLw71tkfGsY(bh) {
    try {
      const page = this.page;
      page.table = page.result.filter((user: any) => {
        return page.userData.policyNumber == user.policyNumber;
      });

      page.backupapplicationsDatasource = page.table;
      console.log('from api', page.table);

      page.loading = false;

      bh = this.sd_jlBjIqs4avkWqbpE(bh);
      //appendnew_next_sd_KO3ihOLw71tkfGsY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KO3ihOLw71tkfGsY');
    }
  }

  sd_jlBjIqs4avkWqbpE(bh) {
    try {
      let outputVariables = this.disable();

      //appendnew_next_sd_jlBjIqs4avkWqbpE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jlBjIqs4avkWqbpE');
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
            const dateStr = new Date(row.date)
              .toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
              .toLowerCase();

            return (
              (row.amount &&
                row.amount.toString().toLowerCase().includes(searchValue)) ||
              (row.date && dateStr.includes(searchValue)) ||
              (row.policyNumber &&
                row.policyNumber.toString().toLowerCase().includes(searchValue))
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
      return this.errorHandler(bh, e, 'sd_PPL9omPWIYajHnvn');
    }
  }

  sd_JF8zYoMjPIGC2h8x(bh) {
    try {
      sessionStorage.setItem('payment_event', JSON.stringify('Log a payment'));
      bh = this.sd_4HrGe1a6N8r6FaG5(bh);
      //appendnew_next_sd_JF8zYoMjPIGC2h8x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JF8zYoMjPIGC2h8x');
    }
  }

  sd_4HrGe1a6N8r6FaG5(bh) {
    try {
      const payment_formDialog = this.__page_injector__.get(MatDialog);
      const payment_formDialogRef = payment_formDialog.open(
        payment_formComponent,
        { height: '75vh', width: '50vw' }
      );
      payment_formDialogRef.beforeClosed().subscribe((event) => {
        this.sd_mS0I9S5f5Sq9xLMO(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4HrGe1a6N8r6FaG5');
    }
  }

  sd_mS0I9S5f5Sq9xLMO(bh) {
    try {
      let outputVariables = this.getPayments();

      //appendnew_next_sd_mS0I9S5f5Sq9xLMO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mS0I9S5f5Sq9xLMO');
    }
  }

  sd_fKJqbaIqJqDAzHOI(bh) {
    try {
      sessionStorage.setItem('payment_event', JSON.stringify('Edit payment'));
      bh = this.sd_ZOY6NteDQq5iR2QN(bh);
      //appendnew_next_sd_fKJqbaIqJqDAzHOI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fKJqbaIqJqDAzHOI');
    }
  }

  sd_ZOY6NteDQq5iR2QN(bh) {
    try {
      const payment_formDialog = this.__page_injector__.get(MatDialog);
      const payment_formDialogRef = payment_formDialog.open(
        payment_formComponent,
        { height: '75vh', width: '50vw' }
      );
      payment_formDialogRef.beforeClosed().subscribe((event) => {
        this.sd_fKWdN82aoaB2POmT(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZOY6NteDQq5iR2QN');
    }
  }

  sd_fKWdN82aoaB2POmT(bh) {
    try {
      let outputVariables = this.getPayments();

      //appendnew_next_sd_fKWdN82aoaB2POmT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fKWdN82aoaB2POmT');
    }
  }

  sd_cOHbR48LEvxqAFrn(bh) {
    try {
      sessionStorage.setItem('edit_info', JSON.stringify(bh.input.index));
      //appendnew_next_sd_cOHbR48LEvxqAFrn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cOHbR48LEvxqAFrn');
    }
  }

  sd_kFc5f3Gf2avlG90G(bh) {
    try {
      const page = this.page; // if (page.table)
      console.log('result', page.result);

      page.result.forEach((item: any) => {
        if (item.date == new Date()) {
          page.disabled = true;
        }
      });
      //appendnew_next_sd_kFc5f3Gf2avlG90G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kFc5f3Gf2avlG90G');
    }
  }

  sd_cM1LLeKG6LwG1aw4(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_cM1LLeKG6LwG1aw4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cM1LLeKG6LwG1aw4');
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
  //appendnew_flow_payments_dComponent_Catch
}
