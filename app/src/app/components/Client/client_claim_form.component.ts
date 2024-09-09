// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //_splitter_
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

  populate2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nsLME7WgAVVodWLW(bh);
      //appendnew_next_populate2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NmV9iXXzB0gokAZe');
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

  upload2(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_FI84TGbT75vwA7et(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WCxdLs5ArZ5kjXEK');
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
      bh = this.sd_6v56ozONeXLjjrlv(bh);
      //appendnew_next_upload3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8VDT9gx1zEcf0fce');
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
      bh = this.sd_rIocvYAynFrNBRhC(bh);
      //appendnew_next_goToBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lWF4l4xUDmnMvpx3');
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
      bh = this.sd_vaSZMZ6cbFM75eCs(bh);
      //appendnew_next_getFromBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FQIgjNR2FdwVDvRk');
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
      bh = this.sd_prE5JKEBKZxPl1Hm(bh);
      //appendnew_next_goToBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F6whCttWtBkIwTHk');
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
      bh = this.sd_cTQM1ews8f491wu1(bh);
      //appendnew_next_getFromBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WKlCweVLuaAFSxJc');
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
      bh = this.sd_YFzc5D0e3ZnKmkIy(bh);
      //appendnew_next_upload4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_houwI8ihnjMC8RV8');
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
      bh = this.sd_hAV6j2lg8RUkJagP(bh);
      //appendnew_next_upload5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mz2TWXQYdMMPObGq');
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
      bh = this.sd_DqtdBUuDMXCrxZe0(bh);
      //appendnew_next_goToBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zcKpA2BoEMprjNIU');
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
      bh = this.sd_tCJpi7kCEwW36SRu(bh);
      //appendnew_next_getFromBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5ahl3qYrJllslZBF');
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
      bh = this.sd_8MTZARhBAQJWoRUE(bh);
      //appendnew_next_goToBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DBT5hOJFUizWQFIy');
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
      return this.errorHandler(bh, e, 'sd_WW3fnpni5l8xxyfo');
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
      const page = this.page; // Dependency
      page.deparray = page.user.dependencies;
      console.log('depnarray', page.deparray);
      // beneficary

      page.ids = [
        { value: page.deparray[0], viewValue: page.deparray[0].idNumber },
        { value: page.deparray[1], viewValue: page.deparray[1].idNumber },
        { value: page.deparray[2], viewValue: page.deparray[2].idNumber },
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
        firstName: new FormControl(page.user.firstName),
        lastName: new FormControl(page.user.lastName),
        idNum: new FormControl(page.user.idNumber),
        gender: new FormControl(page.user.gender),
        packageType: new FormControl(page.user.packageType),
        payoutAmount: new FormControl(''),
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
      page.policy = 35855297;
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

  sd_nsLME7WgAVVodWLW(bh) {
    try {
      const page = this.page; // page.name1 = page.policyClaimsForm.value.beIds.firstName
      // page.surname1 = page.policyClaimsForm.value.beIds.lastName
      // page.idnum1 = page.policyClaimsForm.value.beIds.idNumber
      // page.gender1 = page.policyClaimsForm.value.beIds.gender

      page.policyClaimsForm.patchValue({
        firstName: page.policyClaimsForm.value.beIds.firstName,
        lastName: page.policyClaimsForm.value.beIds.lastName,
        idNum: page.policyClaimsForm.value.beIds.idNumber,
        gender: page.policyClaimsForm.value.beIds.gender,
      });
      //appendnew_next_sd_nsLME7WgAVVodWLW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nsLME7WgAVVodWLW');
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
            bh.file = input.files[0];
            page.uploadedFile1 = new FormData();
            page.uploadedFile1.append('file', bh.file);
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
      bh.url = page.ssdUrl + 'upload';

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
      bh = this.sd_Kqc6WzWwm9zzqnSk(bh);
      //appendnew_next_sd_qE3ziIXUvXb5u3JI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qE3ziIXUvXb5u3JI');
    }
  }

  sd_Kqc6WzWwm9zzqnSk(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('idClaimer', JSON.stringify(bh.result));
      this.getFromBackend1();
      console.log('data to use', page.idclaimerFile);

      bh = this.sd_YWEx409WHZc5ptpT(bh);
      //appendnew_next_sd_Kqc6WzWwm9zzqnSk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kqc6WzWwm9zzqnSk');
    }
  }

  sd_YWEx409WHZc5ptpT(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('claimer id Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_YWEx409WHZc5ptpT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YWEx409WHZc5ptpT');
    }
  }

  sd_3oPD9URBTiO6W2ii(bh) {
    try {
      this.page.idclaimerFile = JSON.parse(sessionStorage.getItem('idClaimer'));
      //appendnew_next_sd_3oPD9URBTiO6W2ii
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3oPD9URBTiO6W2ii');
    }
  }

  sd_FI84TGbT75vwA7et(bh) {
    try {
      const page = this.page;
      bh.upload2 = document.getElementById('upload2') as HTMLInputElement;
      if (bh.upload2) {
        bh.upload2.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile2 = new FormData();
            page.uploadedFile2.append('file', bh.file);
            this.goToBackend2();
          }
        });
      }
      //appendnew_next_sd_FI84TGbT75vwA7et
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FI84TGbT75vwA7et');
    }
  }

  sd_6v56ozONeXLjjrlv(bh) {
    try {
      const page = this.page;
      bh.upload3 = document.getElementById('upload3') as HTMLInputElement;
      if (bh.upload3) {
        bh.upload3.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile3 = new FormData();
            page.uploadedFile3.append('file', bh.file);
            this.goToBackend3();
          }
        });
      }

      //appendnew_next_sd_6v56ozONeXLjjrlv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6v56ozONeXLjjrlv');
    }
  }

  sd_rIocvYAynFrNBRhC(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_f55zoNvUGGWrTWC5(bh);
      //appendnew_next_sd_rIocvYAynFrNBRhC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rIocvYAynFrNBRhC');
    }
  }

  sd_f55zoNvUGGWrTWC5(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_kqDJ2BiotifqExKK(bh);
      //appendnew_next_sd_f55zoNvUGGWrTWC5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f55zoNvUGGWrTWC5');
    }
  }

  async sd_kqDJ2BiotifqExKK(bh) {
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
      bh = this.sd_RgxzFFTTyWkfgomq(bh);
      //appendnew_next_sd_kqDJ2BiotifqExKK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kqDJ2BiotifqExKK');
    }
  }

  sd_RgxzFFTTyWkfgomq(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('idDeceased', JSON.stringify(bh.result));
      this.getFromBackend2();
      bh = this.sd_ip9jfBvGXmplXnvG(bh);
      //appendnew_next_sd_RgxzFFTTyWkfgomq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RgxzFFTTyWkfgomq');
    }
  }

  sd_ip9jfBvGXmplXnvG(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Deceased Id Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_ip9jfBvGXmplXnvG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ip9jfBvGXmplXnvG');
    }
  }

  sd_vaSZMZ6cbFM75eCs(bh) {
    try {
      this.page.idDeceasedFile = JSON.parse(
        sessionStorage.getItem('idDeceased')
      );
      //appendnew_next_sd_vaSZMZ6cbFM75eCs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vaSZMZ6cbFM75eCs');
    }
  }

  sd_prE5JKEBKZxPl1Hm(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_thDxeQbDwCfzEA7N(bh);
      //appendnew_next_sd_prE5JKEBKZxPl1Hm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_prE5JKEBKZxPl1Hm');
    }
  }

  sd_thDxeQbDwCfzEA7N(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_20Gl4jiFtBLsuQOG(bh);
      //appendnew_next_sd_thDxeQbDwCfzEA7N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_thDxeQbDwCfzEA7N');
    }
  }

  async sd_20Gl4jiFtBLsuQOG(bh) {
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
      bh = this.sd_qaZdy6OTBx6ajuJL(bh);
      //appendnew_next_sd_20Gl4jiFtBLsuQOG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_20Gl4jiFtBLsuQOG');
    }
  }

  sd_qaZdy6OTBx6ajuJL(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('deathCetificatify', JSON.stringify(bh.result));
      this.getFromBackend3();
      console.log('bh', bh.results);
      bh = this.sd_V1ht4BqD8D7UWsta(bh);
      //appendnew_next_sd_qaZdy6OTBx6ajuJL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qaZdy6OTBx6ajuJL');
    }
  }

  sd_V1ht4BqD8D7UWsta(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Death Cetificatify Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_V1ht4BqD8D7UWsta
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V1ht4BqD8D7UWsta');
    }
  }

  sd_cTQM1ews8f491wu1(bh) {
    try {
      this.page.deathCetificatifyFile = JSON.parse(
        sessionStorage.getItem('deathCetificatify')
      );
      //appendnew_next_sd_cTQM1ews8f491wu1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cTQM1ews8f491wu1');
    }
  }

  sd_YFzc5D0e3ZnKmkIy(bh) {
    try {
      const page = this.page;
      bh.upload4 = document.getElementById('upload4') as HTMLInputElement;
      if (bh.upload4) {
        bh.upload4.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile4 = new FormData();
            page.uploadedFile4.append('file', bh.file);
            this.goToBackend4();
          }
        });
      }
      //appendnew_next_sd_YFzc5D0e3ZnKmkIy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YFzc5D0e3ZnKmkIy');
    }
  }

  sd_hAV6j2lg8RUkJagP(bh) {
    try {
      const page = this.page;
      bh.upload5 = document.getElementById('upload5') as HTMLInputElement;
      if (bh.upload5) {
        bh.upload5.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile5 = new FormData();
            page.uploadedFile5.append('file', bh.file);
            this.goToBackend5();
          }
        });
      }
      //appendnew_next_sd_hAV6j2lg8RUkJagP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hAV6j2lg8RUkJagP');
    }
  }

  sd_DqtdBUuDMXCrxZe0(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_igQ9AGmdPHqsp3mS(bh);
      //appendnew_next_sd_DqtdBUuDMXCrxZe0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DqtdBUuDMXCrxZe0');
    }
  }

  sd_igQ9AGmdPHqsp3mS(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_ro9SM1ckM63pVVbE(bh);
      //appendnew_next_sd_igQ9AGmdPHqsp3mS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_igQ9AGmdPHqsp3mS');
    }
  }

  async sd_ro9SM1ckM63pVVbE(bh) {
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
      bh = this.sd_4iLB4CCHB6QntvKg(bh);
      //appendnew_next_sd_ro9SM1ckM63pVVbE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ro9SM1ckM63pVVbE');
    }
  }

  sd_4iLB4CCHB6QntvKg(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('bi1663', JSON.stringify(bh.result));
      this.getFromBackend4();
      bh = this.sd_HUAgQoECNnJ5TwfY(bh);
      //appendnew_next_sd_4iLB4CCHB6QntvKg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4iLB4CCHB6QntvKg');
    }
  }

  sd_HUAgQoECNnJ5TwfY(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_HUAgQoECNnJ5TwfY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HUAgQoECNnJ5TwfY');
    }
  }

  sd_tCJpi7kCEwW36SRu(bh) {
    try {
      this.page.bi1663File = JSON.parse(sessionStorage.getItem('bi1663'));
      //appendnew_next_sd_tCJpi7kCEwW36SRu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tCJpi7kCEwW36SRu');
    }
  }

  sd_8MTZARhBAQJWoRUE(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_m0NfI52jottco5YU(bh);
      //appendnew_next_sd_8MTZARhBAQJWoRUE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8MTZARhBAQJWoRUE');
    }
  }

  sd_m0NfI52jottco5YU(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_dl2txXlIpObERM05(bh);
      //appendnew_next_sd_m0NfI52jottco5YU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m0NfI52jottco5YU');
    }
  }

  async sd_dl2txXlIpObERM05(bh) {
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
      bh = this.sd_SaAfqj4OuBwMyE93(bh);
      //appendnew_next_sd_dl2txXlIpObERM05
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dl2txXlIpObERM05');
    }
  }

  sd_SaAfqj4OuBwMyE93(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('bankDetails', JSON.stringify(bh.result));
      this.getFromBackend5();
      bh = this.sd_VW3IpS841FBYi5EL(bh);
      //appendnew_next_sd_SaAfqj4OuBwMyE93
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SaAfqj4OuBwMyE93');
    }
  }

  sd_VW3IpS841FBYi5EL(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Bank Details Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_VW3IpS841FBYi5EL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VW3IpS841FBYi5EL');
    }
  }

  sd_6wYXUnDjB7qDVWsp(bh) {
    try {
      this.page.bankDetailsFile = JSON.parse(
        sessionStorage.getItem('bankDetails')
      );
      //appendnew_next_sd_6wYXUnDjB7qDVWsp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6wYXUnDjB7qDVWsp');
    }
  }

  sd_3VDakwnzEcR5Oup5(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'add-claim';
      console.log('The val', page.deathCetificatifyFile);
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
      bh = this.deathCetificatifyFileInForm(bh);
      //appendnew_next_sd_3VDakwnzEcR5Oup5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3VDakwnzEcR5Oup5');
    }
  }

  deathCetificatifyFileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.deathCertificate._id =
        page.deathCetificatifyFile._id;
      page.policyClaimsForm.value.deathCertificate.filename =
        page.deathCetificatifyFile.filename;
      page.policyClaimsForm.value.deathCertificate.length =
        page.deathCetificatifyFile.length;
      page.policyClaimsForm.value.deathCertificate.chunkSize =
        page.deathCetificatifyFile.chunkSize;

      // console.log("The val",page.deathCetificatifyFile)
      bh = this.deceasedIdFileInForm(bh);
      //appendnew_next_deathCetificatifyFileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W355p2xBTUlYo2Vf');
    }
  }

  deceasedIdFileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.idDecesed._id = page.idDeceasedFile._id;
      page.policyClaimsForm.value.idDecesed.filename =
        page.idDeceasedFile.filename;
      page.policyClaimsForm.value.idDecesed.length = page.idDeceasedFile.length;
      page.policyClaimsForm.value.idDecesed.chunkSize =
        page.idDeceasedFile.chunkSize;
      bh = this.idClaimerFileAddedOnForm(bh);
      //appendnew_next_deceasedIdFileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6iqpA1CG6gycQF5w');
    }
  }

  idClaimerFileAddedOnForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.idClaimer._id = page.idclaimerFile._id;
      page.policyClaimsForm.value.idClaimer.filename =
        page.idclaimerFile.filename;
      page.policyClaimsForm.value.idClaimer.length = page.idclaimerFile.length;
      page.policyClaimsForm.value.idClaimer.chunkSize =
        page.idclaimerFile.chunkSize;
      bh = this.bankDetailsFileInForm(bh);
      //appendnew_next_idClaimerFileAddedOnForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ndLSUnWZ8jgL6mNH');
    }
  }

  bankDetailsFileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.bankDetails._id = page.bankDetailsFile._id;
      page.policyClaimsForm.value.bankDetails.filename =
        page.bankDetailsFile.filename;
      page.policyClaimsForm.value.bankDetails.length =
        page.bankDetailsFile.length;
      page.policyClaimsForm.value.bankDetails.chunkSize =
        page.bankDetailsFile.chunkSize;
      bh = this.bi1663FileInForm(bh);
      //appendnew_next_bankDetailsFileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T1o02bn4GYSlB8H0');
    }
  }

  bi1663FileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.bi1662._id = page.bi1663File._id;
      page.policyClaimsForm.value.bi1662.filename = page.bi1663File.filename;
      page.policyClaimsForm.value.bi1662.length = page.bi1663File.length;
      page.policyClaimsForm.value.bi1662.chunkSize = page.bi1663File.chunkSize;
      bh = this.sd_syfc0wxD9q4EkuN1(bh);
      //appendnew_next_bi1663FileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PnL7snCyYfbYIdIG');
    }
  }

  sd_syfc0wxD9q4EkuN1(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_fusyotj2BipM6rO4(bh);
      //appendnew_next_sd_syfc0wxD9q4EkuN1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_syfc0wxD9q4EkuN1');
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
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_MRDIkFrFByrv0Qxz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MRDIkFrFByrv0Qxz');
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
