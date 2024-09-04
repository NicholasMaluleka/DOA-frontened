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
  selector: 'bh-claims_register',
  templateUrl: './claims_register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class claims_registerComponent {
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
      this.sd_WDAEQKzleIjERFxE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_WDAEQKzleIjERFxE(bh) {
    try {
      bh = this.sd_TLAQgRUW9oXzXEcO(bh);
      //appendnew_next_sd_WDAEQKzleIjERFxE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WDAEQKzleIjERFxE');
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
      bh = this.sd_A1Wr14zLLqs6uutS(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oVWN5hesljR2IK5P');
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
      bh = this.sd_YWBBpNhT8mEsn0XY(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ESlRYSrxni83Lk1n');
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
      bh = this.sd_pUZd5brDLfxDY9nW(bh);
      //appendnew_next_upload3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OLADvzXeWaO3ZTtw');
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
      bh = this.sd_9crRaYB1ZXxRqrmw(bh);
      //appendnew_next_upload4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_leOqbWcrKX4eQ30A');
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
      bh = this.sd_lCY05B3hcQihXT6N(bh);
      //appendnew_next_upload5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c5Gk9Ev5TpeQAeGg');
    }
  }

  goToBackend(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TSu86hfsjgCp5cvx(bh);
      //appendnew_next_goToBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G9JFId2X1sYxnuIp');
    }
  }

  getFromBackend(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Tn0YzwnHML4TBlxM(bh);
      //appendnew_next_getFromBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JWayLjn4fVI4jP4O');
    }
  }

  start(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gTV26jkDQkSajvI6(bh);
      //appendnew_next_start
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pmcf2QLXpNt1xmib');
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
      bh = this.sd_YRFsW4mmP13CYVr4(bh);
      //appendnew_next_populate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLg7SMgOK7JFbf8d');
    }
  }
  //appendnew_flow_claims_registerComponent_start

  sd_TLAQgRUW9oXzXEcO(bh) {
    try {
      bh = this.sd_8uegiEQyOnacegW8(bh);
      //appendnew_next_sd_TLAQgRUW9oXzXEcO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TLAQgRUW9oXzXEcO');
    }
  }

  sd_8uegiEQyOnacegW8(bh) {
    try {
      this.page.policyClaimsForm = undefined;
      this.page.policyNo = undefined;
      this.page.policyholder = true;
      this.page.beneficiary = false;
      this.page.date = undefined;
      this.page.desname = undefined;
      this.page.name = undefined;
      bh = this.sd_RAZi7XEL1v8YuoKq(bh);
      //appendnew_next_sd_8uegiEQyOnacegW8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8uegiEQyOnacegW8');
    }
  }

  sd_RAZi7XEL1v8YuoKq(bh) {
    try {
      this.page.checked = JSON.parse(localStorage.getItem('check'));
      bh = this.sd_tRNzeK7FO7O5eZY6(bh);
      //appendnew_next_sd_RAZi7XEL1v8YuoKq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RAZi7XEL1v8YuoKq');
    }
  }

  sd_tRNzeK7FO7O5eZY6(bh) {
    try {
      this.page.newClient = JSON.parse(localStorage.getItem('client'));
      bh = this.sd_t7WBGNUYn2Qn9klf(bh);
      //appendnew_next_sd_tRNzeK7FO7O5eZY6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tRNzeK7FO7O5eZY6');
    }
  }

  sd_t7WBGNUYn2Qn9klf(bh) {
    try {
      const page = this.page;
      if (page.checked.policyHolder == true) {
        page.beneficiary = false;
        page.policyHolder = true;
      } else {
        page.beneficiary = true;
        page.policyHolder = false;
      }

      page.policyNo = page.newClient[0].policyNumber;
      bh = this.sd_VS9kuSjxODDIjqLl(bh);
      //appendnew_next_sd_t7WBGNUYn2Qn9klf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t7WBGNUYn2Qn9klf');
    }
  }

  sd_VS9kuSjxODDIjqLl(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.benAndDepenArrayForSelectors(bh);
      //appendnew_next_sd_VS9kuSjxODDIjqLl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VS9kuSjxODDIjqLl');
    }
  }

  benAndDepenArrayForSelectors(bh) {
    try {
      const page = this.page; // Dependency
      page.deparray = page.newClient[0].dependencies;
      console.log('depnarray', page.deparray);
      // beneficary
      page.benarray = page.newClient[0].beneficaries;
      console.log('benearray', page.benarray);

      page.ids = [
        { value: page.deparray[0], viewValue: page.deparray[0].idNumber },
        { value: page.deparray[1], viewValue: page.deparray[1].idNumber },
        { value: page.deparray[2], viewValue: page.deparray[2].idNumber },
      ];

      page.beIds = [
        { value: page.benarray[0], viewValue: page.benarray[0].idNumber },
        { value: page.benarray[1], viewValue: page.benarray[1].idNumber },
      ];

      bh = this.forms(bh);
      //appendnew_next_benAndDepenArrayForSelectors
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VmZ87Aum2rOPCu6Y');
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
      // documents
      page.idClaimer = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });
      page.idDecesed = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });
      page.bi1663 = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });
      page.deathCertificate = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });
      page.bankDetails = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });
      //claims form with all information including claimer details
      page.policyClaimsForm = new FormGroup({
        firstName: new FormControl(page.newClient[0].firstName),
        lastName: new FormControl(page.newClient[0].lastName),
        idNum: new FormControl(page.newClient[0].idNumber),
        gender: new FormControl(page.newClient[0].gender),
        packageType: new FormControl(page.newClient[0].packageType),
        payoutAmount: new FormControl('R110'),
        deceased: page.deceased,
        deceased2: new FormControl(''),
        idClaimer: page.idClaimer,
        idClaimer2: new FormControl(''),
        idDecesed: page.idDecesed,
        idDeceased2: new FormControl(''),
        bi1663: page.bi1663,
        bi16632: new FormControl(''),
        deathCertificate: page.deathCertificate,
        deathCetificatify2: new FormControl(''),
        bankDetails: page.bankDetails,
        bankDetails2: new FormControl(''),
        status: new FormControl('pending'),
        depsId: new FormControl(),
      });

      page.date = new Date();

      console.log('page.deceased', page.deceased);

      bh.url = page.ssdUrl + 'get-users';
      bh = this.sd_lc7a7aI8KJ997bHn(bh);
      //appendnew_next_forms
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fT4QY8oO9nWmGN5R');
    }
  }

  async sd_lc7a7aI8KJ997bHn(bh) {
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
      bh = this.sd_2zMKByS1YzyZkcY2(bh);
      //appendnew_next_sd_lc7a7aI8KJ997bHn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lc7a7aI8KJ997bHn');
    }
  }

  sd_2zMKByS1YzyZkcY2(bh) {
    try {
      const page = this.page;
      page.clients = page.result.filter((item) => item.role === 'client');
      page.claim = page.clients.find(
        (client) => client.policyNumber == page.policy
      );
      //appendnew_next_sd_2zMKByS1YzyZkcY2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2zMKByS1YzyZkcY2');
    }
  }

  sd_A1Wr14zLLqs6uutS(bh) {
    try {
      const page = this.page;
      bh.upload1 = document.getElementById('upload1') as HTMLInputElement;
      if (bh.upload1) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend();
          }
        });
      }
      //appendnew_next_sd_A1Wr14zLLqs6uutS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A1Wr14zLLqs6uutS');
    }
  }

  sd_YWBBpNhT8mEsn0XY(bh) {
    try {
      const page = this.page;
      bh.upload2 = document.getElementById('upload2') as HTMLInputElement;
      if (bh.upload2) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend('idDeceased');
          }
        });
      }
      //appendnew_next_sd_YWBBpNhT8mEsn0XY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YWBBpNhT8mEsn0XY');
    }
  }

  sd_pUZd5brDLfxDY9nW(bh) {
    try {
      const page = this.page;
      bh.upload3 = document.getElementById('upload3') as HTMLInputElement;
      if (bh.upload3) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend();
          }
        });
      }
      //appendnew_next_sd_pUZd5brDLfxDY9nW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pUZd5brDLfxDY9nW');
    }
  }

  sd_9crRaYB1ZXxRqrmw(bh) {
    try {
      const page = this.page;
      bh.upload4 = document.getElementById('upload4') as HTMLInputElement;
      if (bh.upload4) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend();
          }
        });
      }
      //appendnew_next_sd_9crRaYB1ZXxRqrmw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9crRaYB1ZXxRqrmw');
    }
  }

  sd_lCY05B3hcQihXT6N(bh) {
    try {
      const page = this.page;
      bh.upload5 = document.getElementById('upload5') as HTMLInputElement;
      if (bh.upload5) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend();
          }
        });
      }
      //appendnew_next_sd_lCY05B3hcQihXT6N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lCY05B3hcQihXT6N');
    }
  }

  sd_TSu86hfsjgCp5cvx(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_PiBJufNI6QNt0H7V(bh);
      //appendnew_next_sd_TSu86hfsjgCp5cvx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TSu86hfsjgCp5cvx');
    }
  }

  sd_PiBJufNI6QNt0H7V(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';
      bh = this.sd_ahbu4USkyYKL2xBq(bh);
      //appendnew_next_sd_PiBJufNI6QNt0H7V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PiBJufNI6QNt0H7V');
    }
  }

  async sd_ahbu4USkyYKL2xBq(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_6N0vQtF18oIc3AFm(bh);
      //appendnew_next_sd_ahbu4USkyYKL2xBq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ahbu4USkyYKL2xBq');
    }
  }

  sd_6N0vQtF18oIc3AFm(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('file', JSON.stringify(bh.result));
      this.getFromBackend();
      bh = this.sd_ZAUmVBnJi09jiYus(bh);
      //appendnew_next_sd_6N0vQtF18oIc3AFm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6N0vQtF18oIc3AFm');
    }
  }

  sd_ZAUmVBnJi09jiYus(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Upload Successful', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_ZAUmVBnJi09jiYus
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZAUmVBnJi09jiYus');
    }
  }

  sd_Tn0YzwnHML4TBlxM(bh) {
    try {
      this.page.userFile = JSON.parse(sessionStorage.getItem('file'));
      //appendnew_next_sd_Tn0YzwnHML4TBlxM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tn0YzwnHML4TBlxM');
    }
  }

  sd_gTV26jkDQkSajvI6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'add-claim';

      bh.body = page.policyClaimsForm.value;
      bh.body.policyNo = page.policyNo;
      bh.body.claimNumber = `CN-${page.policyNo}`;

      delete bh.body.deathCetificatify2;
      delete bh.body.deceased2;
      delete bh.body.idClaimer2;
      delete bh.body.idDeceased2;
      delete bh.body.bi16632;
      delete bh.body.bankDetails2;

      console.log('This is bh body', bh.body);
      bh = this.sd_6AIl6tNP9HfXh7UZ(bh);
      //appendnew_next_sd_gTV26jkDQkSajvI6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTV26jkDQkSajvI6');
    }
  }

  sd_6AIl6tNP9HfXh7UZ(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_GDDWmjjIVPTba5A7(bh);
      //appendnew_next_sd_6AIl6tNP9HfXh7UZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6AIl6tNP9HfXh7UZ');
    }
  }

  async sd_GDDWmjjIVPTba5A7(bh) {
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
      bh = this.sd_wZzTriFZ4B4Kx6yx(bh);
      //appendnew_next_sd_GDDWmjjIVPTba5A7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GDDWmjjIVPTba5A7');
    }
  }

  sd_wZzTriFZ4B4Kx6yx(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Claim Added', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_EZV9KScHEbVQ3VZL(bh);
      //appendnew_next_sd_wZzTriFZ4B4Kx6yx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wZzTriFZ4B4Kx6yx');
    }
  }

  async sd_EZV9KScHEbVQ3VZL(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/claims');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_EZV9KScHEbVQ3VZL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EZV9KScHEbVQ3VZL');
    }
  }

  sd_YRFsW4mmP13CYVr4(bh) {
    try {
      const page = this.page;
      page.name = page.policyClaimsForm.value.depsId.firstName;
      page.surname = page.policyClaimsForm.value.depsId.lastName;
      page.idnum = page.policyClaimsForm.value.depsId.idNumber;
      page.gender = page.policyClaimsForm.value.depsId.gender;

      //appendnew_next_sd_YRFsW4mmP13CYVr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YRFsW4mmP13CYVr4');
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
  //appendnew_flow_claims_registerComponent_Catch
}
