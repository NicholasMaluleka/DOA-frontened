// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-client_claim_form',
  templateUrl: './client_claim_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class client_claim_formComponent {
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
      this.sd_PiQavN0P6CM1ZSuF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PiQavN0P6CM1ZSuF(bh) {
    try {
      bh = this.sd_qNp8Tafga8zcs2Tx(bh);
      //appendnew_next_sd_PiQavN0P6CM1ZSuF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PiQavN0P6CM1ZSuF');
    }
  }

  upload1(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_PxnKHFtUiUE6Ezgr(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eaMbugEjSr6BdxcD');
    }
  }

  goToBackend1(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_5khnoqzpKbg2Y0rb(bh);
      //appendnew_next_goToBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XXsnkh2tsBkA97A5');
    }
  }

  getFromBackend1(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3oPD9URBTiO6W2ii(bh);
      //appendnew_next_getFromBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lzibvu44Pm3wNe3u');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3VDakwnzEcR5Oup5(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X2tvjc7ajLK5WAAA');
    }
  }

  populate(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UkF2eDdSpGZvRsan(bh);
      //appendnew_next_populate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j83i6QAg4YSl7WWy');
    }
  }

  upload2(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_73ee5xtOkNsq3vEP(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pnK15mb77etqH7CA');
    }
  }

  goToBackend2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wewTvU6WhQBBHSBk(bh);
      //appendnew_next_goToBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0gyGvv2o2gESE0mo');
    }
  }

  getFromBackend2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WyVw5UYJyDWtPxLj(bh);
      //appendnew_next_getFromBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4lucjcs88Ubhv4yg');
    }
  }

  upload3(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_nxwEEqrPL0IsvOXM(bh);
      //appendnew_next_upload3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zmI786a5vGe11uPb');
    }
  }

  goToBackend3(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Q96oFHFmSpuBzor1(bh);
      //appendnew_next_goToBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qec5RH4oOdWPuIV7');
    }
  }

  getFromBackend3(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_982Nnir9Q9jmnsmb(bh);
      //appendnew_next_getFromBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RX8XtGMlBpC2EQ6l');
    }
  }

  upload4(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_3nxucOPj5bOTxXO3(bh);
      //appendnew_next_upload4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lTrUptBcNX171K8e');
    }
  }

  goToBackend4(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VnNfCHQyLJ455x5S(bh);
      //appendnew_next_goToBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o8djo4nrd8QAXzN6');
    }
  }

  getFromBackend4(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wPEJ9ypn913YDfdT(bh);
      //appendnew_next_getFromBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B5AvWxdnrvMX1dam');
    }
  }

  upload5(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_zzVnICILwtHgCSRq(bh);
      //appendnew_next_upload5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ik2gtOwWj2LZYzQp');
    }
  }

  goToBackend5(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6sc5R5XAOkzwnQL4(bh);
      //appendnew_next_goToBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7D1Kba18fzfeup7M');
    }
  }

  getFromBackend5(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6wYXUnDjB7qDVWsp(bh);
      //appendnew_next_getFromBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ql7WKBKTcyqku29v');
    }
  }
  //appendnew_flow_client_claim_formComponent_start

  sd_qNp8Tafga8zcs2Tx(bh) {
    try {
      bh = this.sd_37zMadhqe6cOjrj2(bh);
      //appendnew_next_sd_qNp8Tafga8zcs2Tx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qNp8Tafga8zcs2Tx');
    }
  }

  sd_37zMadhqe6cOjrj2(bh) {
    try {
      this.page.policyClaimsForm = undefined;
      this.page.policy = undefined;
      this.page.policyholder = true;
      this.page.beneficiary = false;
      this.page.date = undefined;
      this.page.desname = undefined;
      this.page.name = undefined;
      this.page.loading = false;
      this.page.uploadedFile1 = undefined;
      this.page.id = undefined;
      this.page.showId = false;
      this.page.showIddes = false;
      this.page.iddes = undefined;
      this.page.deathCetificatify = undefined;
      this.page.showbi1663 = false;
      this.page.bi1663 = undefined;
      this.page.showbankDetails = false;
      this.page.bankDetails = undefined;
      this.page.mes = 'READING DOCUMENT';
      this.page.fileURL = undefined;
      this.page.idclaimerfilename = undefined;
      bh = this.sd_n3Yjb7EcHOgLqxD2(bh);
      //appendnew_next_sd_37zMadhqe6cOjrj2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_37zMadhqe6cOjrj2');
    }
  }

  sd_n3Yjb7EcHOgLqxD2(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_n3ZmIInEaqwuOf5e(bh);
      //appendnew_next_sd_n3Yjb7EcHOgLqxD2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n3Yjb7EcHOgLqxD2');
    }
  }

  sd_n3ZmIInEaqwuOf5e(bh) {
    try {
      const page = this.page;
      page.fileURL = 'http://localhost:8081/api/download/';
      // console.log(page.newClient[0].policyNumber)

      page.policyno = page.user.policyNumber;
      console.log('users', page.user);
      bh = this.sd_zPjBtt8sz0eTZp6R(bh);
      //appendnew_next_sd_n3ZmIInEaqwuOf5e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n3ZmIInEaqwuOf5e');
    }
  }

  sd_zPjBtt8sz0eTZp6R(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.benAndDepenArrayForSelectors(bh);
      //appendnew_next_sd_zPjBtt8sz0eTZp6R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zPjBtt8sz0eTZp6R');
    }
  }

  benAndDepenArrayForSelectors(bh) {
    try {
      const page = this.page;
      // Dependency
      page.deparray = page.user.dependencies;
      // selector deps list
      page.ids = [
        { value: page.deparray[0], viewValue: page.deparray[0]?.idNumber },
        { value: page.deparray[1], viewValue: page.deparray[1]?.idNumber },
        { value: page.deparray[2], viewValue: page.deparray[2]?.idNumber },
      ];

      bh = this.forms(bh);
      //appendnew_next_benAndDepenArrayForSelectors
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LyXmTCpxaT7G7Ddd');
    }
  }

  forms(bh) {
    try {
      const page = this.page; // decesed details
      page.deceased = new FormGroup({
        firstName: new FormControl(page.name),
        lastName: new FormControl(''),
        idNum: new FormControl(''),
        gender: new FormControl(''),
        dateOfDeath: new FormControl('', [Validators.required]),
      });

      //claims form with all information including claimer details
      page.policyClaimsForm = new FormGroup({
        firstName: new FormControl(page.user.firstName),
        lastName: new FormControl(page.user.lastName),
        idNum: new FormControl(page.user.idNumber),
        gender: new FormControl(page.user.gender),
        packageType: new FormControl(page.user.packageType),
        payoutAmount: new FormControl(''),
        deceased: page.deceased,
        deceased2: new FormControl(''),
        idClaimer2: new FormControl(''),
        idDeceased2: new FormControl(''),
        bi16632: new FormControl(''),
        deathCetificatify2: new FormControl(''),
        bankDetails2: new FormControl(''),
        status: new FormControl('pending'),
        depsId: new FormControl(),
      });

      page.date = new Date();

      console.log('page.deceased', page.deceased);

      bh.url = page.ssdUrl + 'get-users';
      bh = this.sd_eeDqEW48y1aYDdzq(bh);
      //appendnew_next_forms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vil0sp4ZguItd5eA');
    }
  }

  async sd_eeDqEW48y1aYDdzq(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_DGtQxckWxt0Ra1cO(bh);
      //appendnew_next_sd_eeDqEW48y1aYDdzq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eeDqEW48y1aYDdzq');
    }
  }

  sd_DGtQxckWxt0Ra1cO(bh) {
    try {
      const page = this.page;
      page.policy = page.policyno;
      page.clients = page.result.filter((item) => item.role === 'client');
      page.claim = page.clients.find(
        (client) => client.policyNumber == page.policy
      );
      console.log('claimer', page.claim);
      this.sd_n35N3qgHD6dTmjSZ(bh);
      //appendnew_next_sd_DGtQxckWxt0Ra1cO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DGtQxckWxt0Ra1cO');
    }
  }

  sd_n35N3qgHD6dTmjSZ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.clients);
      //appendnew_next_sd_n35N3qgHD6dTmjSZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n35N3qgHD6dTmjSZ');
    }
  }

  sd_PxnKHFtUiUE6Ezgr(bh) {
    try {
      const page = this.page;
      bh.upload1 = document.getElementById('upload1') as HTMLInputElement;
      if (bh.upload1) {
        bh.upload1.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            page.file = input.files[0];
            page.uploadedFile1 = new FormData();
            page.uploadedFile1.append('file', page.file);
            page.id = page.file.name;
            page.showId = true;

            this.goToBackend1();
          }
        });
      }

      //appendnew_next_sd_PxnKHFtUiUE6Ezgr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PxnKHFtUiUE6Ezgr');
    }
  }

  sd_5khnoqzpKbg2Y0rb(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_p4B7idTFiqPSmL4H(bh);
      //appendnew_next_sd_5khnoqzpKbg2Y0rb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5khnoqzpKbg2Y0rb');
    }
  }

  sd_p4B7idTFiqPSmL4H(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-id';
      page.loading = true;

      bh = this.sd_qE3ziIXUvXb5u3JI(bh);
      //appendnew_next_sd_p4B7idTFiqPSmL4H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p4B7idTFiqPSmL4H');
    }
  }

  async sd_qE3ziIXUvXb5u3JI(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile1,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Ne8LGVdDti9HKdaS(bh);
      //appendnew_next_sd_qE3ziIXUvXb5u3JI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qE3ziIXUvXb5u3JI');
    }
  }

  sd_Ne8LGVdDti9HKdaS(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_LP359cqvRdXBlyZJ(bh);
      //appendnew_next_sd_Ne8LGVdDti9HKdaS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ne8LGVdDti9HKdaS');
    }
  }

  async sd_LP359cqvRdXBlyZJ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_JrbSwQTnHKOe06CO(bh);
      } else {
        bh = await this.sd_YWEx409WHZc5ptpT(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LP359cqvRdXBlyZJ');
    }
  }

  sd_JrbSwQTnHKOe06CO(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid ID', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_lNRBNADEwAftcDMX(bh);
      //appendnew_next_sd_JrbSwQTnHKOe06CO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JrbSwQTnHKOe06CO');
    }
  }

  sd_lNRBNADEwAftcDMX(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_5y2VR92b81XEz9tD(bh);
      //appendnew_next_sd_lNRBNADEwAftcDMX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lNRBNADEwAftcDMX');
    }
  }

  async sd_5y2VR92b81XEz9tD(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile1,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_nUpeEDzTzWMcBbWd(bh);
      //appendnew_next_sd_5y2VR92b81XEz9tD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5y2VR92b81XEz9tD');
    }
  }

  sd_nUpeEDzTzWMcBbWd(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('idClaimer', JSON.stringify(page.res));
      this.getFromBackend1();
      bh = this.sd_l3dQSb0lFtyKLJ9h(bh);
      //appendnew_next_sd_nUpeEDzTzWMcBbWd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nUpeEDzTzWMcBbWd');
    }
  }

  sd_l3dQSb0lFtyKLJ9h(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('ID has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_l3dQSb0lFtyKLJ9h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l3dQSb0lFtyKLJ9h');
    }
  }

  sd_YWEx409WHZc5ptpT(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_40HsiI8hJlXS22BP(bh);
      //appendnew_next_sd_YWEx409WHZc5ptpT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YWEx409WHZc5ptpT');
    }
  }

  sd_40HsiI8hJlXS22BP(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showId = false;
      //appendnew_next_sd_40HsiI8hJlXS22BP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_40HsiI8hJlXS22BP');
    }
  }

  sd_3oPD9URBTiO6W2ii(bh) {
    try {
      this.page.idclaimerFile = JSON.parse(sessionStorage.getItem('idClaimer'));
      bh = this.sd_PbHhgGm66YTklFyZ(bh);
      //appendnew_next_sd_3oPD9URBTiO6W2ii
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3oPD9URBTiO6W2ii');
    }
  }

  sd_PbHhgGm66YTklFyZ(bh) {
    try {
      const page = this.page;
      page.idclaimerfilename = page.idclaimerFile.filename;
      //appendnew_next_sd_PbHhgGm66YTklFyZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PbHhgGm66YTklFyZ');
    }
  }

  sd_3VDakwnzEcR5Oup5(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'add-claim';
      console.log('The val', page.policyClaimsForm.value);
      bh.body = page.policyClaimsForm.value;
      bh.body['policyNo'] = page.policyno;
      bh.body.claimNumber = `CN-${page.policyno}`;

      delete bh.body.deathCetificatify2;
      delete bh.body.deceased2;
      delete bh.body.idClaimer2;
      delete bh.body.idDeceased2;
      delete bh.body.bi16632;
      delete bh.body.bankDetails2;
      delete bh.body.depsId;
      console.log('This is bh body', bh.body);
      bh = this.fileInForm(bh);
      //appendnew_next_sd_3VDakwnzEcR5Oup5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3VDakwnzEcR5Oup5');
    }
  }

  fileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value['ID'] = page.id;
      page.policyClaimsForm.value['IDfile'] = page.idclaimerfilename;
      page.policyClaimsForm.value['IDDeceased'] = page.iddes;
      page.policyClaimsForm.value['IDDeceasedfile'] = page.idDeceasedfilename;
      page.policyClaimsForm.value['DeathCertificate'] = page.deathCetificatify;
      page.policyClaimsForm.value['DeathCertificatefile'] =
        page.deathCetificatifyfilename;
      page.policyClaimsForm.value['bi1663'] = page.bi1663;
      page.policyClaimsForm.value['bi1663file'] = page.bi1663filename;
      page.policyClaimsForm.value['bankDetails'] = page.bankDetails;
      page.policyClaimsForm.value['bankDetailsfile'] = page.bankDetailsfilename;

      console.log('The val', page.policyClaimsForm.value);
      bh = this.sd_fusyotj2BipM6rO4(bh);
      //appendnew_next_fileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W355p2xBTUlYo2Vf');
    }
  }

  async sd_fusyotj2BipM6rO4(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ywG8tkpWlVm7FdHY(bh);
      //appendnew_next_sd_fusyotj2BipM6rO4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fusyotj2BipM6rO4');
    }
  }

  sd_ywG8tkpWlVm7FdHY(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Claim Added', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_MRDIkFrFByrv0Qxz(bh);
      //appendnew_next_sd_ywG8tkpWlVm7FdHY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywG8tkpWlVm7FdHY');
    }
  }

  async sd_MRDIkFrFByrv0Qxz(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/client_claims');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_MRDIkFrFByrv0Qxz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MRDIkFrFByrv0Qxz');
    }
  }

  sd_UkF2eDdSpGZvRsan(bh) {
    try {
      const page = this.page;
      page.deceased.patchValue({
        firstName: page.policyClaimsForm.value.depsId.firstName,
        lastName: page.policyClaimsForm.value.depsId.lastName,
        idNum: page.policyClaimsForm.value.depsId.idNumber,
        gender: page.policyClaimsForm.value.depsId.gender,
      });
      bh = this.sd_DbkzD1Oop0ECjWgI(bh);
      //appendnew_next_sd_UkF2eDdSpGZvRsan
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UkF2eDdSpGZvRsan');
    }
  }

  sd_DbkzD1Oop0ECjWgI(bh) {
    try {
      const page = this.page;
      page.year = parseInt(new Date().getFullYear().toString().slice(-2));
      page.birthyear = parseInt(
        page.policyClaimsForm.value.depsId.idNumber.slice(0, 2)
      );
      page.years = page.birthyear - page.year;

      if (page.user.packageType == 'Package 1') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 1500';
        } else {
          page.payamount = 'R 3000';
        }
      }
      if (page.user.packageType == 'Package 2') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 2500';
        } else {
          page.payamount = 'R 5000';
        }
      }
      if (page.user.packageType == 'Package 3') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 4000';
        } else {
          page.payamount = 'R 10000';
        }
      }
      page.policyClaimsForm.patchValue({
        payoutAmount: page.payamount,
      });
      //appendnew_next_sd_DbkzD1Oop0ECjWgI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DbkzD1Oop0ECjWgI');
    }
  }

  sd_73ee5xtOkNsq3vEP(bh) {
    try {
      const page = this.page;
      bh.upload2 = document.getElementById('upload2') as HTMLInputElement;
      if (bh.upload2) {
        bh.upload2.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            page.file = input.files[0];
            page.uploadedFile2 = new FormData();
            page.uploadedFile2.append('file', page.file);
            page.iddes = page.file.name;
            page.showIddes = true;

            this.goToBackend2();
          }
        });
      }

      //appendnew_next_sd_73ee5xtOkNsq3vEP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_73ee5xtOkNsq3vEP');
    }
  }

  sd_wewTvU6WhQBBHSBk(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_mfoU0xKdTFiLcrfz(bh);
      //appendnew_next_sd_wewTvU6WhQBBHSBk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wewTvU6WhQBBHSBk');
    }
  }

  sd_mfoU0xKdTFiLcrfz(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-id';
      page.loading = true;

      bh = this.sd_LZJJZ6TTNFPHtebO(bh);
      //appendnew_next_sd_mfoU0xKdTFiLcrfz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfoU0xKdTFiLcrfz');
    }
  }

  async sd_LZJJZ6TTNFPHtebO(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile2,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_tsW8lZBnVEbfRsXw(bh);
      //appendnew_next_sd_LZJJZ6TTNFPHtebO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LZJJZ6TTNFPHtebO');
    }
  }

  sd_tsW8lZBnVEbfRsXw(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_MvsjtWPguAm4UPCg(bh);
      //appendnew_next_sd_tsW8lZBnVEbfRsXw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tsW8lZBnVEbfRsXw');
    }
  }

  async sd_MvsjtWPguAm4UPCg(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_s0pOGCbxS3iDT0HA(bh);
      } else {
        bh = await this.sd_nfyEelLSfvwLBxfj(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MvsjtWPguAm4UPCg');
    }
  }

  sd_s0pOGCbxS3iDT0HA(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_cFaCMy4DZV75DBan(bh);
      //appendnew_next_sd_s0pOGCbxS3iDT0HA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s0pOGCbxS3iDT0HA');
    }
  }

  sd_cFaCMy4DZV75DBan(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_18W5H0dOnfGzmtRm(bh);
      //appendnew_next_sd_cFaCMy4DZV75DBan
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cFaCMy4DZV75DBan');
    }
  }

  async sd_18W5H0dOnfGzmtRm(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile2,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Uu3tgDJTOP1kdw5g(bh);
      //appendnew_next_sd_18W5H0dOnfGzmtRm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_18W5H0dOnfGzmtRm');
    }
  }

  sd_Uu3tgDJTOP1kdw5g(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('idDeceased', JSON.stringify(page.res));
      this.getFromBackend2();
      bh = this.sd_3HJsYol77bzL8LeN(bh);
      //appendnew_next_sd_Uu3tgDJTOP1kdw5g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Uu3tgDJTOP1kdw5g');
    }
  }

  sd_3HJsYol77bzL8LeN(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('ID has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_3HJsYol77bzL8LeN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3HJsYol77bzL8LeN');
    }
  }

  sd_nfyEelLSfvwLBxfj(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_4EE4NvtdfAAqABCT(bh);
      //appendnew_next_sd_nfyEelLSfvwLBxfj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nfyEelLSfvwLBxfj');
    }
  }

  sd_4EE4NvtdfAAqABCT(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showIddes = false;
      //appendnew_next_sd_4EE4NvtdfAAqABCT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4EE4NvtdfAAqABCT');
    }
  }

  sd_WyVw5UYJyDWtPxLj(bh) {
    try {
      this.page.idDeceasedFile = JSON.parse(
        sessionStorage.getItem('idDeceased')
      );
      bh = this.sd_44ZVLUe7U6XdYr4k(bh);
      //appendnew_next_sd_WyVw5UYJyDWtPxLj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WyVw5UYJyDWtPxLj');
    }
  }

  sd_44ZVLUe7U6XdYr4k(bh) {
    try {
      const page = this.page;
      page.idDeceasedfilename = page.idDeceasedFile.filename;
      //appendnew_next_sd_44ZVLUe7U6XdYr4k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_44ZVLUe7U6XdYr4k');
    }
  }

  sd_nxwEEqrPL0IsvOXM(bh) {
    try {
      const page = this.page;
      bh.upload3 = document.getElementById('upload3') as HTMLInputElement;
      if (bh.upload3) {
        bh.upload3.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            page.file3 = input.files[0];
            page.uploadedFile3 = new FormData();
            page.uploadedFile3.append('file', page.file3);
            page.deathCetificatify = page.file3.name;
            page.showdeathCetificatify = true;

            this.goToBackend3();
          }
        });
      }

      //appendnew_next_sd_nxwEEqrPL0IsvOXM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nxwEEqrPL0IsvOXM');
    }
  }

  sd_Q96oFHFmSpuBzor1(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_2khXacsujptwBtLe(bh);
      //appendnew_next_sd_Q96oFHFmSpuBzor1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q96oFHFmSpuBzor1');
    }
  }

  sd_2khXacsujptwBtLe(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-death-certificate';
      page.loading = true;

      bh = this.sd_o6UVMiTVHBuHN4aM(bh);
      //appendnew_next_sd_2khXacsujptwBtLe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2khXacsujptwBtLe');
    }
  }

  async sd_o6UVMiTVHBuHN4aM(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile3,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ljD3WlkR4nR0nJTg(bh);
      //appendnew_next_sd_o6UVMiTVHBuHN4aM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o6UVMiTVHBuHN4aM');
    }
  }

  sd_ljD3WlkR4nR0nJTg(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_KLaNrFQDEnF8MX4J(bh);
      //appendnew_next_sd_ljD3WlkR4nR0nJTg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ljD3WlkR4nR0nJTg');
    }
  }

  async sd_KLaNrFQDEnF8MX4J(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_cD4R2NV3b0OC28Ll(bh);
      } else {
        bh = await this.sd_smT3a7j6jt8yaBiH(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KLaNrFQDEnF8MX4J');
    }
  }

  sd_cD4R2NV3b0OC28Ll(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_z4s2zTiMY3XzjD0p(bh);
      //appendnew_next_sd_cD4R2NV3b0OC28Ll
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cD4R2NV3b0OC28Ll');
    }
  }

  sd_z4s2zTiMY3XzjD0p(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_FlZAGikPa1MP0lYo(bh);
      //appendnew_next_sd_z4s2zTiMY3XzjD0p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z4s2zTiMY3XzjD0p');
    }
  }

  async sd_FlZAGikPa1MP0lYo(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile3,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_WuwUSZUIW6SHhWhX(bh);
      //appendnew_next_sd_FlZAGikPa1MP0lYo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FlZAGikPa1MP0lYo');
    }
  }

  sd_WuwUSZUIW6SHhWhX(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('deathCetificatify', JSON.stringify(page.res));
      this.getFromBackend3();
      bh = this.sd_uaJ6miQN25EAdeUI(bh);
      //appendnew_next_sd_WuwUSZUIW6SHhWhX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WuwUSZUIW6SHhWhX');
    }
  }

  sd_uaJ6miQN25EAdeUI(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Death Certificate has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_uaJ6miQN25EAdeUI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaJ6miQN25EAdeUI');
    }
  }

  sd_smT3a7j6jt8yaBiH(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_R0TmSkOCt6KeBOzq(bh);
      //appendnew_next_sd_smT3a7j6jt8yaBiH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_smT3a7j6jt8yaBiH');
    }
  }

  sd_R0TmSkOCt6KeBOzq(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showdeathCetificatify = false;
      //appendnew_next_sd_R0TmSkOCt6KeBOzq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R0TmSkOCt6KeBOzq');
    }
  }

  sd_982Nnir9Q9jmnsmb(bh) {
    try {
      this.page.deathCetificatifyFile = JSON.parse(
        sessionStorage.getItem('deathCetificatify')
      );
      bh = this.sd_soByUd0NmBNgnhsu(bh);
      //appendnew_next_sd_982Nnir9Q9jmnsmb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_982Nnir9Q9jmnsmb');
    }
  }

  sd_soByUd0NmBNgnhsu(bh) {
    try {
      const page = this.page;
      page.deathCetificatifyfilename = page.deathCetificatifyFile.filename;
      //appendnew_next_sd_soByUd0NmBNgnhsu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_soByUd0NmBNgnhsu');
    }
  }

  sd_3nxucOPj5bOTxXO3(bh) {
    try {
      const page = this.page;
      bh.upload4 = document.getElementById('upload4') as HTMLInputElement;
      if (bh.upload4) {
        bh.upload4.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            page.file4 = input.files[0];
            page.uploadedFile4 = new FormData();
            page.uploadedFile4.append('file', page.file4);
            page.bi1663 = page.file4.name;
            page.showbi1663 = true;

            this.goToBackend4();
          }
        });
      }

      //appendnew_next_sd_3nxucOPj5bOTxXO3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3nxucOPj5bOTxXO3');
    }
  }

  sd_VnNfCHQyLJ455x5S(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_sjdHcjXEEIYbkjVm(bh);
      //appendnew_next_sd_VnNfCHQyLJ455x5S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VnNfCHQyLJ455x5S');
    }
  }

  sd_sjdHcjXEEIYbkjVm(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-doc';
      page.loading = true;

      bh = this.sd_2KaUyUcFhEDpNac1(bh);
      //appendnew_next_sd_sjdHcjXEEIYbkjVm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sjdHcjXEEIYbkjVm');
    }
  }

  async sd_2KaUyUcFhEDpNac1(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile4,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_QrFOU4XrjWDme9mt(bh);
      //appendnew_next_sd_2KaUyUcFhEDpNac1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2KaUyUcFhEDpNac1');
    }
  }

  sd_QrFOU4XrjWDme9mt(bh) {
    try {
      const page = this.page;
      page.loading = true;

      bh = this.sd_p8Z6QmT4kLvX2v3l(bh);
      //appendnew_next_sd_QrFOU4XrjWDme9mt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QrFOU4XrjWDme9mt');
    }
  }

  async sd_p8Z6QmT4kLvX2v3l(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_eYs4cYC8qnGFQysa(bh);
      } else {
        bh = await this.sd_w2g2tTfbmqK2wPyA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p8Z6QmT4kLvX2v3l');
    }
  }

  sd_eYs4cYC8qnGFQysa(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_P1x5hwR7zK2XSXhe(bh);
      //appendnew_next_sd_eYs4cYC8qnGFQysa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eYs4cYC8qnGFQysa');
    }
  }

  sd_P1x5hwR7zK2XSXhe(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_5OwvkSRVRODJRV33(bh);
      //appendnew_next_sd_P1x5hwR7zK2XSXhe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P1x5hwR7zK2XSXhe');
    }
  }

  async sd_5OwvkSRVRODJRV33(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile4,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_uQ2ta4AT7dJGjfF6(bh);
      //appendnew_next_sd_5OwvkSRVRODJRV33
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5OwvkSRVRODJRV33');
    }
  }

  sd_uQ2ta4AT7dJGjfF6(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('bi1663', JSON.stringify(page.res));
      this.getFromBackend4();
      bh = this.sd_WamSMfSAwtQ40Qcm(bh);
      //appendnew_next_sd_uQ2ta4AT7dJGjfF6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQ2ta4AT7dJGjfF6');
    }
  }

  sd_WamSMfSAwtQ40Qcm(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_WamSMfSAwtQ40Qcm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WamSMfSAwtQ40Qcm');
    }
  }

  sd_w2g2tTfbmqK2wPyA(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_WsQWFkZpYTmyduU5(bh);
      //appendnew_next_sd_w2g2tTfbmqK2wPyA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w2g2tTfbmqK2wPyA');
    }
  }

  sd_WsQWFkZpYTmyduU5(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showbi1663 = false;
      //appendnew_next_sd_WsQWFkZpYTmyduU5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WsQWFkZpYTmyduU5');
    }
  }

  sd_wPEJ9ypn913YDfdT(bh) {
    try {
      this.page.bi1663File = JSON.parse(sessionStorage.getItem('bi1663'));
      bh = this.sd_bMD9PJo4pOaPvjCY(bh);
      //appendnew_next_sd_wPEJ9ypn913YDfdT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wPEJ9ypn913YDfdT');
    }
  }

  sd_bMD9PJo4pOaPvjCY(bh) {
    try {
      const page = this.page;
      page.bi1663filename = page.bi1663File.filename;
      //appendnew_next_sd_bMD9PJo4pOaPvjCY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bMD9PJo4pOaPvjCY');
    }
  }

  sd_zzVnICILwtHgCSRq(bh) {
    try {
      const page = this.page;
      bh.upload5 = document.getElementById('upload5') as HTMLInputElement;
      if (bh.upload5) {
        bh.upload5.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            page.file5 = input.files[0];
            page.uploadedFile5 = new FormData();
            page.uploadedFile5.append('file', page.file5);
            page.bankDetails = page.file5.name;
            page.showbankDetails = true;

            this.goToBackend5();
          }
        });
      }

      //appendnew_next_sd_zzVnICILwtHgCSRq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zzVnICILwtHgCSRq');
    }
  }

  sd_6sc5R5XAOkzwnQL4(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_8GPDFmqkBu3Gj4Jy(bh);
      //appendnew_next_sd_6sc5R5XAOkzwnQL4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6sc5R5XAOkzwnQL4');
    }
  }

  sd_8GPDFmqkBu3Gj4Jy(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-bank-statement';
      page.loading = true;

      bh = this.sd_jhzXDCIg5uWpdK5F(bh);
      //appendnew_next_sd_8GPDFmqkBu3Gj4Jy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8GPDFmqkBu3Gj4Jy');
    }
  }

  async sd_jhzXDCIg5uWpdK5F(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile5,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_aeaV09qHXYT8zfS1(bh);
      //appendnew_next_sd_jhzXDCIg5uWpdK5F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jhzXDCIg5uWpdK5F');
    }
  }

  sd_aeaV09qHXYT8zfS1(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_dknOnK0KaoTtUxXE(bh);
      //appendnew_next_sd_aeaV09qHXYT8zfS1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aeaV09qHXYT8zfS1');
    }
  }

  async sd_dknOnK0KaoTtUxXE(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_J4rvyg7A7tCs8Xee(bh);
      } else {
        bh = await this.sd_4vRz6aQfuFLSY8Lm(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dknOnK0KaoTtUxXE');
    }
  }

  sd_J4rvyg7A7tCs8Xee(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_t6r7SrhN7R7PePIS(bh);
      //appendnew_next_sd_J4rvyg7A7tCs8Xee
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J4rvyg7A7tCs8Xee');
    }
  }

  sd_t6r7SrhN7R7PePIS(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_qcIw5zhvQL6QMZDv(bh);
      //appendnew_next_sd_t6r7SrhN7R7PePIS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t6r7SrhN7R7PePIS');
    }
  }

  async sd_qcIw5zhvQL6QMZDv(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile5,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_aI7RSXUCxplR25t0(bh);
      //appendnew_next_sd_qcIw5zhvQL6QMZDv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qcIw5zhvQL6QMZDv');
    }
  }

  sd_aI7RSXUCxplR25t0(bh) {
    try {
      const page = this.page;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      page.loading = false;
      sessionStorage.setItem('bankDetails', JSON.stringify(page.res));
      this.getFromBackend5();
      page.loading = false;
      bh = this.sd_NtulvwwJ2kNpWD82(bh);
      //appendnew_next_sd_aI7RSXUCxplR25t0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aI7RSXUCxplR25t0');
    }
  }

  sd_NtulvwwJ2kNpWD82(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Bank Details has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_NtulvwwJ2kNpWD82
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NtulvwwJ2kNpWD82');
    }
  }

  sd_4vRz6aQfuFLSY8Lm(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_n8N1PrmtcAhunlAo(bh);
      //appendnew_next_sd_4vRz6aQfuFLSY8Lm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4vRz6aQfuFLSY8Lm');
    }
  }

  sd_n8N1PrmtcAhunlAo(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showbankDetails = false;
      //appendnew_next_sd_n8N1PrmtcAhunlAo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8N1PrmtcAhunlAo');
    }
  }

  sd_6wYXUnDjB7qDVWsp(bh) {
    try {
      this.page.bankDetailsFile = JSON.parse(
        sessionStorage.getItem('bankDetails')
      );
      bh = this.sd_UwjbGxNF17NFOfnQ(bh);
      //appendnew_next_sd_6wYXUnDjB7qDVWsp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6wYXUnDjB7qDVWsp');
    }
  }

  sd_UwjbGxNF17NFOfnQ(bh) {
    try {
      const page = this.page;
      page.bankDetailsfilename = page.bankDetailsFile.filename;
      //appendnew_next_sd_UwjbGxNF17NFOfnQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UwjbGxNF17NFOfnQ');
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
  //appendnew_flow_client_claim_formComponent_Catch
}
