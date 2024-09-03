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
      bh = this.sd_QLcNVEufXDm9yCzk(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tsaZEG85KHCWHmbM');
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
      bh = this.sd_WZ8an64kmH8B5AaN(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LjjP5ZHsyUqvEgKy');
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
      bh = this.sd_yVtEMq57dPK4i8ud(bh);
      //appendnew_next_upload3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PTQevViJvxBFEZ5d');
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
      bh = this.sd_fpp1hQhsd3hhemZc(bh);
      //appendnew_next_upload4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8oc0KCLAijvS6r6c');
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
      bh = this.sd_uHZiBJcz5vdJ0oUF(bh);
      //appendnew_next_upload5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aHsFT3oNRF3wfbSJ');
    }
  }

  goToBackend(filename: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filename };
      bh.local = {};
      bh = this.sd_f8oeVtOuBZNKRkqx(bh);
      //appendnew_next_goToBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K4qFnKvfsDEDVqLG');
    }
  }

  getFromBackend(file: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { file };
      bh.local = {};
      bh = this.sd_VVLJsIZ571Px3sUH(bh);
      //appendnew_next_getFromBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l93cX96HBR9CW1SP');
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
      bh = this.sd_06WYv6qvZkpO8AyS(bh);
      //appendnew_next_populate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ovXzkOsbueGFsAMq');
    }
  }

  sd_wMkFBIk2OjUNSacB(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_r0hNEVnYUHmLNOnp(bh);
      //appendnew_next_sd_wMkFBIk2OjUNSacB
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wMkFBIk2OjUNSacB');
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

  sd_QLcNVEufXDm9yCzk(bh) {
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
            this.goToBackend('idClaimer');
          }
        });
      }
      //appendnew_next_sd_QLcNVEufXDm9yCzk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QLcNVEufXDm9yCzk');
    }
  }

  sd_WZ8an64kmH8B5AaN(bh) {
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
      //appendnew_next_sd_WZ8an64kmH8B5AaN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WZ8an64kmH8B5AaN');
    }
  }

  sd_yVtEMq57dPK4i8ud(bh) {
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
            this.goToBackend('deathCetificatify');
          }
        });
      }
      //appendnew_next_sd_yVtEMq57dPK4i8ud
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yVtEMq57dPK4i8ud');
    }
  }

  sd_fpp1hQhsd3hhemZc(bh) {
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
            this.goToBackend('bi1663');
          }
        });
      }
      //appendnew_next_sd_fpp1hQhsd3hhemZc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fpp1hQhsd3hhemZc');
    }
  }

  sd_uHZiBJcz5vdJ0oUF(bh) {
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
            this.goToBackend('bankDetails');
          }
        });
      }
      //appendnew_next_sd_uHZiBJcz5vdJ0oUF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uHZiBJcz5vdJ0oUF');
    }
  }

  sd_f8oeVtOuBZNKRkqx(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_yWU7xpXirWVpkKq3(bh);
      //appendnew_next_sd_f8oeVtOuBZNKRkqx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f8oeVtOuBZNKRkqx');
    }
  }

  sd_yWU7xpXirWVpkKq3(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_oVZ7tX3dTddZKKri(bh);
      //appendnew_next_sd_yWU7xpXirWVpkKq3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yWU7xpXirWVpkKq3');
    }
  }

  async sd_oVZ7tX3dTddZKKri(bh) {
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
      bh = this.sd_PpZPbeWFr2FVYypN(bh);
      //appendnew_next_sd_oVZ7tX3dTddZKKri
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oVZ7tX3dTddZKKri');
    }
  }

  sd_PpZPbeWFr2FVYypN(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem(bh.input.filename, JSON.stringify(bh.result));
      this.getFromBackend(bh.input.filename);
      bh = this.sd_wrqepYnBF7p3QZbY(bh);
      //appendnew_next_sd_PpZPbeWFr2FVYypN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PpZPbeWFr2FVYypN');
    }
  }

  sd_wrqepYnBF7p3QZbY(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Upload Successful', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_wrqepYnBF7p3QZbY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wrqepYnBF7p3QZbY');
    }
  }

  sd_VVLJsIZ571Px3sUH(bh) {
    try {
      this.page.userFile = JSON.parse(sessionStorage.getItem('bh.input.file'));
      //appendnew_next_sd_VVLJsIZ571Px3sUH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VVLJsIZ571Px3sUH');
    }
  }

  sd_06WYv6qvZkpO8AyS(bh) {
    try {
      const page = this.page;
      console.log('helllow', page.policyClaimsForm);
      bh = this.sd_YC50j0rU933miL4a(bh);
      //appendnew_next_sd_06WYv6qvZkpO8AyS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_06WYv6qvZkpO8AyS');
    }
  }

  sd_YC50j0rU933miL4a(bh) {
    try {
      const page = this.page;
      page.name = page.policyClaimsForm.value.depsId.firstName;
      page.surname = page.policyClaimsForm.value.depsId.lastName;
      page.idnum = page.policyClaimsForm.value.depsId.idNumber;
      page.gender = page.policyClaimsForm.value.depsId.gender;

      console.log('value', page.name);
      //appendnew_next_sd_YC50j0rU933miL4a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YC50j0rU933miL4a');
    }
  }

  sd_r0hNEVnYUHmLNOnp(bh) {
    try {
      //appendnew_next_sd_r0hNEVnYUHmLNOnp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r0hNEVnYUHmLNOnp');
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
