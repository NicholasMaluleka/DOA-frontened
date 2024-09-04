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

  goToBackend1(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_f8oeVtOuBZNKRkqx(bh);
      //appendnew_next_goToBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K4qFnKvfsDEDVqLG');
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
      bh = this.sd_VVLJsIZ571Px3sUH(bh);
      //appendnew_next_getFromBackend1
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

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_r0hNEVnYUHmLNOnp(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wMkFBIk2OjUNSacB');
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
      bh = this.sd_Tqk3Dzb8GXk0vtWT(bh);
      //appendnew_next_goToBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K1yY8BQ3wKpL38V8');
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
      bh = this.sd_Zr7ApbrY8BVw3K4z(bh);
      //appendnew_next_getFromBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZcNzfwk6naOYxFo7');
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
      bh = this.sd_jffnr601fhHLO0XP(bh);
      //appendnew_next_goToBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RJSFcX8NqqDom8gU');
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
      bh = this.sd_tYyqa5w3E6nFbTzM(bh);
      //appendnew_next_getFromBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yt2V8geXkD4yLN2r');
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
      bh = this.sd_zhKlkYUSe5CBZxj5(bh);
      //appendnew_next_goToBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wSC63hskqYtAcCtA');
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
      bh = this.sd_DGCheBYkhJP8zW8Q(bh);
      //appendnew_next_getFromBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_00HKennhYNyoALGA');
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
      bh = this.sd_qfp37w3njmYTT5Af(bh);
      //appendnew_next_goToBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mEufV89LRcfYkTXY');
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
      bh = this.sd_xXk9gr1CsBwveIKY(bh);
      //appendnew_next_getFromBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oXM8QNYpWlsuUEN9');
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
            this.goToBackend1();
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
            this.goToBackend2();
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
            this.goToBackend3();
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
            this.goToBackend4();
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
            this.goToBackend5();
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
      sessionStorage.setItem('idClaimer', JSON.stringify(bh.result));
      this.getFromBackend1();
      bh = this.sd_wrqepYnBF7p3QZbY(bh);
      //appendnew_next_sd_PpZPbeWFr2FVYypN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PpZPbeWFr2FVYypN');
    }
  }

  sd_wrqepYnBF7p3QZbY(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('claimer id Upload Successful', 'Ok', {
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
      this.page.idclaimerFile = JSON.parse(sessionStorage.getItem('idClaimer'));
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
      const page = this.page;
      console.log(page.policyClaimsForm);
      //appendnew_next_sd_r0hNEVnYUHmLNOnp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r0hNEVnYUHmLNOnp');
    }
  }

  sd_Tqk3Dzb8GXk0vtWT(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_3qgYgK3Vl1q6kEU2(bh);
      //appendnew_next_sd_Tqk3Dzb8GXk0vtWT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tqk3Dzb8GXk0vtWT');
    }
  }

  sd_3qgYgK3Vl1q6kEU2(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_iGhT9Gvd4kWwRArI(bh);
      //appendnew_next_sd_3qgYgK3Vl1q6kEU2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3qgYgK3Vl1q6kEU2');
    }
  }

  async sd_iGhT9Gvd4kWwRArI(bh) {
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
      bh = this.sd_8IuEk1GWzdNIbGmu(bh);
      //appendnew_next_sd_iGhT9Gvd4kWwRArI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iGhT9Gvd4kWwRArI');
    }
  }

  sd_8IuEk1GWzdNIbGmu(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('idDeceased', JSON.stringify(bh.result));
      this.getFromBackend2();
      bh = this.sd_RzKzqQE9uM1rIutw(bh);
      //appendnew_next_sd_8IuEk1GWzdNIbGmu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8IuEk1GWzdNIbGmu');
    }
  }

  sd_RzKzqQE9uM1rIutw(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Deceased Id Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_RzKzqQE9uM1rIutw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RzKzqQE9uM1rIutw');
    }
  }

  sd_Zr7ApbrY8BVw3K4z(bh) {
    try {
      this.page.idDeceasedFile = JSON.parse(
        sessionStorage.getItem('idDeceased')
      );
      //appendnew_next_sd_Zr7ApbrY8BVw3K4z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zr7ApbrY8BVw3K4z');
    }
  }

  sd_jffnr601fhHLO0XP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_GLrgtD3yeIvXLGwW(bh);
      //appendnew_next_sd_jffnr601fhHLO0XP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jffnr601fhHLO0XP');
    }
  }

  sd_GLrgtD3yeIvXLGwW(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_FlDtETcu2ZQPzsxt(bh);
      //appendnew_next_sd_GLrgtD3yeIvXLGwW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GLrgtD3yeIvXLGwW');
    }
  }

  async sd_FlDtETcu2ZQPzsxt(bh) {
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
      bh = this.sd_7OcEDNg4nVFoFeIL(bh);
      //appendnew_next_sd_FlDtETcu2ZQPzsxt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FlDtETcu2ZQPzsxt');
    }
  }

  sd_7OcEDNg4nVFoFeIL(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('deathCetificatify', JSON.stringify(bh.result));
      this.getFromBackend3();
      bh = this.sd_BzWZskEmqd87Usvw(bh);
      //appendnew_next_sd_7OcEDNg4nVFoFeIL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7OcEDNg4nVFoFeIL');
    }
  }

  sd_BzWZskEmqd87Usvw(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Death Cetificatify Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_BzWZskEmqd87Usvw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BzWZskEmqd87Usvw');
    }
  }

  sd_tYyqa5w3E6nFbTzM(bh) {
    try {
      this.page.deathCetificatifyFile = JSON.parse(
        sessionStorage.getItem('deathCetificatify')
      );
      //appendnew_next_sd_tYyqa5w3E6nFbTzM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tYyqa5w3E6nFbTzM');
    }
  }

  sd_zhKlkYUSe5CBZxj5(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_LiY1hThPamh9WiR1(bh);
      //appendnew_next_sd_zhKlkYUSe5CBZxj5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zhKlkYUSe5CBZxj5');
    }
  }

  sd_LiY1hThPamh9WiR1(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_95lPDlxlAcLOMpzB(bh);
      //appendnew_next_sd_LiY1hThPamh9WiR1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LiY1hThPamh9WiR1');
    }
  }

  async sd_95lPDlxlAcLOMpzB(bh) {
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
      bh = this.sd_5PNk7v84esOuVLao(bh);
      //appendnew_next_sd_95lPDlxlAcLOMpzB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_95lPDlxlAcLOMpzB');
    }
  }

  sd_5PNk7v84esOuVLao(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('bi1663', JSON.stringify(bh.result));
      this.getFromBackend4();
      bh = this.sd_swXrcG28dC5Nd7BU(bh);
      //appendnew_next_sd_5PNk7v84esOuVLao
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5PNk7v84esOuVLao');
    }
  }

  sd_swXrcG28dC5Nd7BU(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_swXrcG28dC5Nd7BU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_swXrcG28dC5Nd7BU');
    }
  }

  sd_DGCheBYkhJP8zW8Q(bh) {
    try {
      this.page.bi1663File = JSON.parse(sessionStorage.getItem('bi1663'));
      //appendnew_next_sd_DGCheBYkhJP8zW8Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DGCheBYkhJP8zW8Q');
    }
  }

  sd_qfp37w3njmYTT5Af(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_0OAlFItkLPiY1Swy(bh);
      //appendnew_next_sd_qfp37w3njmYTT5Af
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qfp37w3njmYTT5Af');
    }
  }

  sd_0OAlFItkLPiY1Swy(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_C7aNRl1zTiQotpoI(bh);
      //appendnew_next_sd_0OAlFItkLPiY1Swy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0OAlFItkLPiY1Swy');
    }
  }

  async sd_C7aNRl1zTiQotpoI(bh) {
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
      bh = this.sd_ASlXUnbVzsb7BCdM(bh);
      //appendnew_next_sd_C7aNRl1zTiQotpoI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C7aNRl1zTiQotpoI');
    }
  }

  sd_ASlXUnbVzsb7BCdM(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('bankDetails', JSON.stringify(bh.result));
      this.getFromBackend5();
      bh = this.sd_SjfZLro6q7uB6B9X(bh);
      //appendnew_next_sd_ASlXUnbVzsb7BCdM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ASlXUnbVzsb7BCdM');
    }
  }

  sd_SjfZLro6q7uB6B9X(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_SjfZLro6q7uB6B9X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SjfZLro6q7uB6B9X');
    }
  }

  sd_xXk9gr1CsBwveIKY(bh) {
    try {
      this.page.bankDetailsFile = JSON.parse(
        sessionStorage.getItem('bankDetails')
      );
      //appendnew_next_sd_xXk9gr1CsBwveIKY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xXk9gr1CsBwveIKY');
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
