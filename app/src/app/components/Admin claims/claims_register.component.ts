// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { view_documentComponent } from 'app/components/Authentication/view_document.component'; //_splitter_
import { director_noteComponent } from 'app/components/Director/director_note.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-claims_register',
  templateUrl: './claims_register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class claims_registerComponent implements AfterViewInit {
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

  populate2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HwSEW31qlijbdmJp(bh);
      //appendnew_next_populate2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uvJwIne7tLU7d9Q9');
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
      bh = this.sd_i0xoEvpROPITU08N(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pN2ygQATPeLmzpIS');
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
      bh = this.sd_HAh8e2O6WlsOH6LR(bh);
      //appendnew_next_goToBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iwimDeYXL6XcUkV4');
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
      bh = this.sd_K6MUoKvNOAgAhK6i(bh);
      //appendnew_next_getFromBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y6PJt16z1WJHehyF');
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
      bh = this.sd_G0j8bBjdh9weyiHG(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S1gyKckXWRyS9lSM');
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
      bh = this.sd_aT3O0eRMOtZ6LC7u(bh);
      //appendnew_next_upload3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4TFoVZaDvBKch2t');
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
      bh = this.sd_LhQRZFr5wXEAmZrZ(bh);
      //appendnew_next_goToBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IgOlwuw484mmQ8YO');
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
      bh = this.sd_9yKA7QsBVt0HSigs(bh);
      //appendnew_next_getFromBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CjvWQiUircLfJOvq');
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
      bh = this.sd_6uNK0kYpEsVrH7Ly(bh);
      //appendnew_next_goToBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7HMhDMyc2AKX2ucm');
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
      bh = this.sd_HpMne9ieeprru1TK(bh);
      //appendnew_next_getFromBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wMUpwRzmLCauob6u');
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
      bh = this.sd_pO4AAHrTGJHGxcJs(bh);
      //appendnew_next_upload4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u4KB9PPIAMtnXNDe');
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
      bh = this.sd_1u0zIChRYRVWLz4w(bh);
      //appendnew_next_upload5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RW6hTM1nuBoZ7wzr');
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
      bh = this.sd_ch1LeIg0VFOP5L4f(bh);
      //appendnew_next_goToBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_32LyDrjbYafwmVLT');
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
      bh = this.sd_gL8y6GZoB2NS2hdX(bh);
      //appendnew_next_getFromBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ERMjX0BVtHqKFxGa');
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
      bh = this.sd_Q24KK8CQ39Px5KnJ(bh);
      //appendnew_next_goToBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MQwP9s86fj7L1r2c');
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
      bh = this.sd_shJhZakxr7p6z9TR(bh);
      //appendnew_next_getFromBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_21mSynYSb6vu6Khf');
    }
  }

  checkIfIsReview(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_0ZC8jSwPtvUkjiBJ(bh);
      //appendnew_next_checkIfIsReview
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j9GOsDaRPX1qn2HK');
    }
  }

  reviewPatch(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      this.sd_3UFHNmHQ6gr6Z6rE(bh);
      bh = this.sd_tTEL46pK2xh7B0lI(bh);
      //appendnew_next_reviewPatch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TKthgYuBJaq7ONFh');
    }
  }

  open(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_sZzw2GvSrAzcQ1Zs(bh);
      //appendnew_next_open
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M9HeUA5hjXD09RPR');
    }
  }

  updateClaim(claim: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { claim };
      bh.local = {};
      bh = this.sd_p3ivOtVgfXm0I0Z5(bh);
      //appendnew_next_updateClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d6vseXRHCyuRWjnv');
    }
  }

  addReason(value: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value };
      bh.local = {};
      bh = this.sd_6K1LlQR7ORYPgDAJ(bh);
      //appendnew_next_addReason
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3FCYJiLfE5GXt05I');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_dMv4RgmBK75eHTvZ(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cAN8JzyGJi1Oq1V5');
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
      this.page.claimStatuses = undefined;
      this.page.docs = undefined;
      this.page.fileURL = undefined;
      this.page.updatedClaim = undefined;
      this.page.value = undefined;
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
      bh = this.sd_YYpzaqPjgqnQDOvA(bh);
      //appendnew_next_sd_VS9kuSjxODDIjqLl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VS9kuSjxODDIjqLl');
    }
  }

  sd_YYpzaqPjgqnQDOvA(bh) {
    try {
      let outputVariables = this.checkIfIsReview();

      bh = this.sd_FZutB5HUJlZZ3mXi(bh);
      //appendnew_next_sd_YYpzaqPjgqnQDOvA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YYpzaqPjgqnQDOvA');
    }
  }

  async sd_FZutB5HUJlZZ3mXi(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          this.page.selectedClaim,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = this.benAndDepenArrayForSelectors(bh);
      } else {
        bh = await this.sd_0dgCvNhXnv2EDp9O(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FZutB5HUJlZZ3mXi');
    }
  }

  benAndDepenArrayForSelectors(bh) {
    try {
      const page = this.page; // Dependency

      page.fileURL = page.ssdUrl + 'download/';

      page.deparray = page.newClient[0].dependencies;
      console.log('depnarray', page.deparray);
      // beneficary
      page.benarray = page.newClient[0].beneficaries;
      console.log('benearray', page.benarray);

      page.docs = [];

      page.ids = [
        { value: page.deparray[0], viewValue: page.deparray[0].idNumber },
        { value: page.deparray[1], viewValue: page.deparray[1].idNumber },
        { value: page.deparray[2], viewValue: page.deparray[2].idNumber },
      ];

      page.beIds = [
        { value: page.benarray[0], viewValue: page.benarray[0].idNumber },
        { value: page.benarray[1], viewValue: page.benarray[1].idNumber },
      ];

      bh = this.sd_s7IAxRYDHIXfSJ12(bh);
      //appendnew_next_benAndDepenArrayForSelectors
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VmZ87Aum2rOPCu6Y');
    }
  }

  async sd_s7IAxRYDHIXfSJ12(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.checked.policyHolder,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.forms(bh);
      } else {
        bh = await this.benForm(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s7IAxRYDHIXfSJ12');
    }
  }

  benForm(bh) {
    try {
      const page = this.page; // decesed details

      console.log('BEN');

      page.deceased = new FormGroup({
        firstName: new FormControl(page.newClient[0].firstName),
        lastName: new FormControl(page.newClient[0].lastName),
        idNum: new FormControl(page.newClient[0].idNumber),
        gender: new FormControl(page.newClient[0].gender),
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
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        idNum: new FormControl(''),
        gender: new FormControl(''),
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
        beIds: new FormControl(),
      });

      page.date = new Date();

      console.log('page.deceased', page.deceased);

      bh.url = page.ssdUrl + 'get-users';
      bh = this.sd_lc7a7aI8KJ997bHn(bh);
      //appendnew_next_benForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bymc6jPBYuJm79rv');
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
      bh = this.sd_7BWzeJjISBuILSaE(bh);
      //appendnew_next_sd_2zMKByS1YzyZkcY2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2zMKByS1YzyZkcY2');
    }
  }

  sd_7BWzeJjISBuILSaE(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_7BWzeJjISBuILSaE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7BWzeJjISBuILSaE');
    }
  }

  forms(bh) {
    try {
      const page = this.page; // decesed details

      console.log('PH');

      page.deceased = new FormGroup({
        firstName: new FormControl(''),
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
      page.bi1662 = new FormGroup({
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
        bi1662: page.bi1662,
        bi16632: new FormControl(''),
        deathCertificate: page.deathCertificate,
        deathCetificatify2: new FormControl(''),
        bankDetails: page.bankDetails,
        bankDetails2: new FormControl(''),
        status: new FormControl('pending'),
        depsId: new FormControl(),
        beIds: new FormControl(),
        //  claimReason: new FormControl()
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

  sd_0dgCvNhXnv2EDp9O(bh) {
    try {
      let outputVariables = this.reviewPatch();

      this.sd_vlg7Jz5xPnAHOlgA(bh);
      //appendnew_next_sd_0dgCvNhXnv2EDp9O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0dgCvNhXnv2EDp9O');
    }
  }

  sd_vlg7Jz5xPnAHOlgA(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.selectedClaim);
      //appendnew_next_sd_vlg7Jz5xPnAHOlgA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vlg7Jz5xPnAHOlgA');
    }
  }

  sd_gTV26jkDQkSajvI6(bh) {
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
      //appendnew_next_sd_gTV26jkDQkSajvI6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTV26jkDQkSajvI6');
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

      console.log('The val', page.deathCetificatifyFile);
      bh = this.deceasedIdFileInForm(bh);
      //appendnew_next_deathCetificatifyFileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OMTsTOK7oXNTPdug');
    }
  }

  deceasedIdFileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.idDecesed._id = page.idclaimerFile._id;
      page.policyClaimsForm.value.idDecesed.filename =
        page.idDeceasedFile.filename;
      page.policyClaimsForm.value.idDecesed.length = page.idDeceasedFile.length;
      page.policyClaimsForm.value.idDecesed.chunkSize =
        page.idDeceasedFile.chunkSize;
      bh = this.idClaimerFileAddedOnForm(bh);
      //appendnew_next_deceasedIdFileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NKq8I2oKOKqsJyCT');
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
      return this.errorHandler(bh, e, 'sd_kv8fOzN3JZKLGL8Y');
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
      return this.errorHandler(bh, e, 'sd_snQrUVCSE6LP6Dgp');
    }
  }

  bi1663FileInForm(bh) {
    try {
      const page = this.page;
      page.policyClaimsForm.value.bi1662._id = page.bi1663File._id;
      page.policyClaimsForm.value.bi1662.filename = page.bi1663File.filename;
      page.policyClaimsForm.value.bi1662.length = page.bi1663File.length;
      page.policyClaimsForm.value.bi1662.chunkSize = page.bi1663File.chunkSize;
      bh = this.sd_6AIl6tNP9HfXh7UZ(bh);
      //appendnew_next_bi1663FileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JR3eNMxvH2KitFQv');
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
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_EZV9KScHEbVQ3VZL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EZV9KScHEbVQ3VZL');
    }
  }

  sd_YRFsW4mmP13CYVr4(bh) {
    try {
      const page = this.page; // page.name = page.policyClaimsForm.value.depsId.firstName
      // page.surname = page.policyClaimsForm.value.depsId.lastName
      // page.idnum = page.policyClaimsForm.value.depsId.idNumber
      // page.gender = page.policyClaimsForm.value.depsId.gender

      // patchValue({

      // })
      page.deceased.patchValue({
        firstName: page.policyClaimsForm.value.depsId.firstName,
        lastName: page.policyClaimsForm.value.depsId.lastName,
        idNum: page.policyClaimsForm.value.depsId.idNumber,
        gender: page.policyClaimsForm.value.depsId.gender,
      });
      //appendnew_next_sd_YRFsW4mmP13CYVr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YRFsW4mmP13CYVr4');
    }
  }

  sd_HwSEW31qlijbdmJp(bh) {
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
      //appendnew_next_sd_HwSEW31qlijbdmJp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HwSEW31qlijbdmJp');
    }
  }

  sd_i0xoEvpROPITU08N(bh) {
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
      console.log('page.uploadedFile1', page.uploadedFile1);
      //appendnew_next_sd_i0xoEvpROPITU08N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i0xoEvpROPITU08N');
    }
  }

  sd_HAh8e2O6WlsOH6LR(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_tEq1F4UeJuAdbLVa(bh);
      //appendnew_next_sd_HAh8e2O6WlsOH6LR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HAh8e2O6WlsOH6LR');
    }
  }

  sd_tEq1F4UeJuAdbLVa(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_pm7IM6MBn4iCRAJX(bh);
      //appendnew_next_sd_tEq1F4UeJuAdbLVa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tEq1F4UeJuAdbLVa');
    }
  }

  async sd_pm7IM6MBn4iCRAJX(bh) {
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
      bh = this.sd_b1QBlwuGwfmxrU8X(bh);
      //appendnew_next_sd_pm7IM6MBn4iCRAJX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pm7IM6MBn4iCRAJX');
    }
  }

  sd_b1QBlwuGwfmxrU8X(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('idClaimer', JSON.stringify(bh.result));
      this.getFromBackend1();

      let file = JSON.parse(sessionStorage.getItem('idClaimer'));

      page.docs[0] = {
        name: 'idClaimer',
        ...file,
      };
      bh = this.sd_jr3k8kNfVkjaB5Ka(bh);
      //appendnew_next_sd_b1QBlwuGwfmxrU8X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b1QBlwuGwfmxrU8X');
    }
  }

  sd_jr3k8kNfVkjaB5Ka(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('claimer id Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_jr3k8kNfVkjaB5Ka
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jr3k8kNfVkjaB5Ka');
    }
  }

  sd_K6MUoKvNOAgAhK6i(bh) {
    try {
      this.page.idclaimerFile = JSON.parse(sessionStorage.getItem('idClaimer'));
      //appendnew_next_sd_K6MUoKvNOAgAhK6i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K6MUoKvNOAgAhK6i');
    }
  }

  sd_G0j8bBjdh9weyiHG(bh) {
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
      //appendnew_next_sd_G0j8bBjdh9weyiHG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G0j8bBjdh9weyiHG');
    }
  }

  sd_aT3O0eRMOtZ6LC7u(bh) {
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

      //appendnew_next_sd_aT3O0eRMOtZ6LC7u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aT3O0eRMOtZ6LC7u');
    }
  }

  sd_LhQRZFr5wXEAmZrZ(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_TEc7ZPzpUyYtkEba(bh);
      //appendnew_next_sd_LhQRZFr5wXEAmZrZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LhQRZFr5wXEAmZrZ');
    }
  }

  sd_TEc7ZPzpUyYtkEba(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_HziKCOhAlC4JYwNt(bh);
      //appendnew_next_sd_TEc7ZPzpUyYtkEba
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TEc7ZPzpUyYtkEba');
    }
  }

  async sd_HziKCOhAlC4JYwNt(bh) {
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
      bh = this.sd_naVFzQoHG9PNzmpr(bh);
      //appendnew_next_sd_HziKCOhAlC4JYwNt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HziKCOhAlC4JYwNt');
    }
  }

  sd_naVFzQoHG9PNzmpr(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('idDeceased', JSON.stringify(bh.result));
      this.getFromBackend2();

      let file = JSON.parse(sessionStorage.getItem('idDeceased'));

      page.docs[1] = {
        name: 'idDeceased',
        ...file,
      };
      bh = this.sd_ByY2JldcpCcfHzI8(bh);
      //appendnew_next_sd_naVFzQoHG9PNzmpr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_naVFzQoHG9PNzmpr');
    }
  }

  sd_ByY2JldcpCcfHzI8(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Deceased Id Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_ByY2JldcpCcfHzI8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ByY2JldcpCcfHzI8');
    }
  }

  sd_9yKA7QsBVt0HSigs(bh) {
    try {
      this.page.idDeceasedFile = JSON.parse(
        sessionStorage.getItem('idDeceased')
      );
      //appendnew_next_sd_9yKA7QsBVt0HSigs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9yKA7QsBVt0HSigs');
    }
  }

  sd_6uNK0kYpEsVrH7Ly(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_quK7nLtPiswS8Hr6(bh);
      //appendnew_next_sd_6uNK0kYpEsVrH7Ly
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6uNK0kYpEsVrH7Ly');
    }
  }

  sd_quK7nLtPiswS8Hr6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_cXQZgmIjNnXGhMfB(bh);
      //appendnew_next_sd_quK7nLtPiswS8Hr6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_quK7nLtPiswS8Hr6');
    }
  }

  async sd_cXQZgmIjNnXGhMfB(bh) {
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
      bh = this.sd_PEs3jZ0F7V9TKive(bh);
      //appendnew_next_sd_cXQZgmIjNnXGhMfB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cXQZgmIjNnXGhMfB');
    }
  }

  sd_PEs3jZ0F7V9TKive(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('deathCetificatify', JSON.stringify(bh.result));
      this.getFromBackend3();
      console.log('bh', bh.results);

      let file = JSON.parse(sessionStorage.getItem('deathCetificatify'));

      page.docs[2] = {
        name: 'deathCetificatify',
        ...file,
      };
      bh = this.sd_8oQKKQYPcqVuI8TK(bh);
      //appendnew_next_sd_PEs3jZ0F7V9TKive
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PEs3jZ0F7V9TKive');
    }
  }

  sd_8oQKKQYPcqVuI8TK(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Death Cetificatify Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_8oQKKQYPcqVuI8TK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8oQKKQYPcqVuI8TK');
    }
  }

  sd_HpMne9ieeprru1TK(bh) {
    try {
      this.page.deathCetificatifyFile = JSON.parse(
        sessionStorage.getItem('deathCetificatify')
      );
      //appendnew_next_sd_HpMne9ieeprru1TK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HpMne9ieeprru1TK');
    }
  }

  sd_pO4AAHrTGJHGxcJs(bh) {
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
      //appendnew_next_sd_pO4AAHrTGJHGxcJs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pO4AAHrTGJHGxcJs');
    }
  }

  sd_1u0zIChRYRVWLz4w(bh) {
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
      //appendnew_next_sd_1u0zIChRYRVWLz4w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1u0zIChRYRVWLz4w');
    }
  }

  sd_ch1LeIg0VFOP5L4f(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_VmKFEeemCRTBGk6S(bh);
      //appendnew_next_sd_ch1LeIg0VFOP5L4f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ch1LeIg0VFOP5L4f');
    }
  }

  sd_VmKFEeemCRTBGk6S(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_rXIAeUYF30BWCUSh(bh);
      //appendnew_next_sd_VmKFEeemCRTBGk6S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VmKFEeemCRTBGk6S');
    }
  }

  async sd_rXIAeUYF30BWCUSh(bh) {
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
      bh = this.sd_qAqklLHl7YggpvdV(bh);
      //appendnew_next_sd_rXIAeUYF30BWCUSh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rXIAeUYF30BWCUSh');
    }
  }

  sd_qAqklLHl7YggpvdV(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('bi1663', JSON.stringify(bh.result));
      this.getFromBackend4();

      let file = JSON.parse(sessionStorage.getItem('bi1663'));

      page.docs[3] = {
        name: 'bi1663',
        ...file,
      };
      bh = this.sd_lg9wvNZgvdJI59fo(bh);
      //appendnew_next_sd_qAqklLHl7YggpvdV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qAqklLHl7YggpvdV');
    }
  }

  sd_lg9wvNZgvdJI59fo(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_lg9wvNZgvdJI59fo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lg9wvNZgvdJI59fo');
    }
  }

  sd_gL8y6GZoB2NS2hdX(bh) {
    try {
      this.page.bi1663File = JSON.parse(sessionStorage.getItem('bi1663'));
      //appendnew_next_sd_gL8y6GZoB2NS2hdX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gL8y6GZoB2NS2hdX');
    }
  }

  sd_Q24KK8CQ39Px5KnJ(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_GIH7bU9nx5ZqjZdu(bh);
      //appendnew_next_sd_Q24KK8CQ39Px5KnJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q24KK8CQ39Px5KnJ');
    }
  }

  sd_GIH7bU9nx5ZqjZdu(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_lZOqKwyx0IZ5HCE1(bh);
      //appendnew_next_sd_GIH7bU9nx5ZqjZdu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GIH7bU9nx5ZqjZdu');
    }
  }

  async sd_lZOqKwyx0IZ5HCE1(bh) {
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
      bh = this.sd_lbjf2VgcIKFjsixy(bh);
      //appendnew_next_sd_lZOqKwyx0IZ5HCE1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lZOqKwyx0IZ5HCE1');
    }
  }

  sd_lbjf2VgcIKFjsixy(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('bankDetails', JSON.stringify(bh.result));
      this.getFromBackend5();

      let file = JSON.parse(sessionStorage.getItem('bankDetails'));

      page.docs[4] = {
        name: 'bankDetails',
        ...file,
      };
      bh = this.sd_rzesD82YORPSFkNR(bh);
      //appendnew_next_sd_lbjf2VgcIKFjsixy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lbjf2VgcIKFjsixy');
    }
  }

  sd_rzesD82YORPSFkNR(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 Upload Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_rzesD82YORPSFkNR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rzesD82YORPSFkNR');
    }
  }

  sd_shJhZakxr7p6z9TR(bh) {
    try {
      this.page.bankDetailsFile = JSON.parse(
        sessionStorage.getItem('bankDetails')
      );
      //appendnew_next_sd_shJhZakxr7p6z9TR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_shJhZakxr7p6z9TR');
    }
  }

  sd_0ZC8jSwPtvUkjiBJ(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.routeData = route.snapshot.queryParams;
      bh = this.sd_yo4JoCQiVtNoLyHc(bh);
      //appendnew_next_sd_0ZC8jSwPtvUkjiBJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0ZC8jSwPtvUkjiBJ');
    }
  }

  async sd_yo4JoCQiVtNoLyHc(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          bh.routeData,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_HbEDqAM5kG7ivWOE(bh);
      } else {
        bh = await this.sd_EiyEHm1Q0suBYnul(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yo4JoCQiVtNoLyHc');
    }
  }

  sd_HbEDqAM5kG7ivWOE(bh) {
    try {
      localStorage.removeItem('claim');
      //appendnew_next_sd_HbEDqAM5kG7ivWOE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HbEDqAM5kG7ivWOE');
    }
  }

  sd_EiyEHm1Q0suBYnul(bh) {
    try {
      this.page.selectedClaim = JSON.parse(localStorage.getItem('claim'));
      //appendnew_next_sd_EiyEHm1Q0suBYnul
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EiyEHm1Q0suBYnul');
    }
  }

  sd_3UFHNmHQ6gr6Z6rE(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.selectedClaim);
      //appendnew_next_sd_3UFHNmHQ6gr6Z6rE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3UFHNmHQ6gr6Z6rE');
    }
  }

  sd_tTEL46pK2xh7B0lI(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_UmdtwXC1AB0nhAbw(bh);
      //appendnew_next_sd_tTEL46pK2xh7B0lI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tTEL46pK2xh7B0lI');
    }
  }

  sd_UmdtwXC1AB0nhAbw(bh) {
    try {
      const page = this.page;
      bh.claimKeys = Object.keys(page.selectedClaim);

      page.docs = [];

      bh.claimKeys.forEach((key) => {
        if (page.selectedClaim[key]?.filename) {
          let doc = { ...page.selectedClaim[key], name: key };
          page.docs.push(doc);
        }
      });

      console.log('DOCS: ', page.docs);

      page.fileURL = page.ssdUrl + 'download/';

      console.log('URL:', page.ssdUrl);
      bh = this.sd_xLAtfgHKTyGPt8n2(bh);
      //appendnew_next_sd_UmdtwXC1AB0nhAbw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UmdtwXC1AB0nhAbw');
    }
  }

  sd_xLAtfgHKTyGPt8n2(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_ypuYcwTSxbHCyLl9(bh);
      //appendnew_next_sd_xLAtfgHKTyGPt8n2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xLAtfgHKTyGPt8n2');
    }
  }

  async sd_ypuYcwTSxbHCyLl9(bh) {
    try {
      if (
        this.sdService.operators['null'](
          this.page.selectedClaim.depsId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.ben1Form(bh);
      } else {
        bh = await this.forms1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ypuYcwTSxbHCyLl9');
    }
  }

  ben1Form(bh) {
    try {
      const page = this.page; // decesed details

      console.log('BEN');
      // console.log(page.user.role)

      if (page.user.role === 'admin') {
        page.claimStatuses = [
          { value: 'partially approved', viewValue: 'Partially Approve' },
          { value: 'rejected', viewValue: 'Reject' },
        ];
      } else if (page.user.role === 'director') {
        page.claimStatuses = [
          { value: 'approved', viewValue: 'Approve' },
          { value: 'rejected', viewValue: 'Reject' },
        ];
      }

      page.deceased = new FormGroup({
        firstName: new FormControl(page.selectedClaim.deceased.firstName),
        lastName: new FormControl(page.selectedClaim.deceased.lastName),
        idNum: new FormControl(page.selectedClaim.deceased.idNum),
        gender: new FormControl(page.selectedClaim.deceased.gender),
        dateOfDeath: new FormControl(page.selectedClaim.deceased.dateOfDeath, [
          Validators.required,
        ]),
        status: new FormControl(page.selectedClaim, [Validators.required]),
      });

      // documents
      page.idClaimer = new FormGroup({
        _id: new FormControl(page.selectedClaim.idClaimer._id),
        filename: new FormControl(page.selectedClaim.idClaimer.filename),
        // chunkSize: new FormControl(page.selectedClaim.idClaimer.chunkSize?.length),
        length: new FormControl(page.selectedClaim.idClaimer.length),
      });

      page.idDecesed = new FormGroup({
        _id: new FormControl(page.selectedClaim.idDecesed._id),
        filename: new FormControl(page.selectedClaim.idDecesed.filename),
        // chunkSize: new FormControl(page.selectedClaim.idDecesed.chunkSize?.length),
        length: new FormControl(page.selectedClaim.idDecesed.length),
      });

      page.bi1663 = new FormGroup({
        _id: new FormControl(page.selectedClaim.bi1662._id),
        filename: new FormControl(page.selectedClaim.bi1662.filename),
        // chunkSize: new FormControl(page.selectedClaim.bi1662.chunkSize?.length),
        length: new FormControl(page.selectedClaim.bi1662.length),
      });

      page.deathCertificate = new FormGroup({
        _id: new FormControl(page.selectedClaim.deathCertificate._id),
        filename: new FormControl(page.selectedClaim.deathCertificate.filename),
        // chunkSize: new FormControl(page.selectedClaim.deathCertificate.chunkSize?.length),
        length: new FormControl(page.selectedClaim.deathCertificate.length),
      });

      page.bankDetails = new FormGroup({
        _id: new FormControl(page.selectedClaim.bankDetails._id),
        filename: new FormControl(page.selectedClaim.bankDetails.filename),
        // chunkSize: new FormControl(page.selectedClaim.bankDetails.chunkSize?.length),
        length: new FormControl(page.selectedClaim.bankDetails.length),
      });

      //claims form with all information including claimer details
      page.policyClaimsForm = new FormGroup({
        firstName: new FormControl(page.selectedClaim.firstName),
        lastName: new FormControl(page.selectedClaim.lastName),
        idNum: new FormControl(page.selectedClaim.idNum),
        gender: new FormControl(page.selectedClaim.gender),
        packageType: new FormControl(page.selectedClaim.packageType),
        payoutAmount: new FormControl(page.selectedClaim.payoutAmount),
        deceased: page.deceased,
        status: new FormControl(page.deceased.value.status),
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
        depsId: new FormControl(page.selectedClaim.depsId),
        beIds: new FormControl(page.selectedClaim.beIds),
        _id: new FormControl(page.selectedClaim._id),
        claimNumber: new FormControl(page.selectedClaim.claimNumber),
      });

      page.deceased.get('status')?.valueChanges.subscribe((value) => {
        page.value = { status: value };
        if (
          (page.user.role == 'admin' && value == 'partially approved') ||
          (page.user.role === 'admin' && value == 'rejected')
        ) {
          page.deceased.get('status')?.disable();
          page.policyClaimsForm.value.status = page.value.status;
        } else if (
          (page.user.role === 'director' && value === 'approved') ||
          (page.user.role === 'director' && value === 'rejected')
        ) {
          page.deceased.get('status')?.disable();
          page.policyClaimsForm.value.status = page.value.status;
        }
      });

      page.date = new Date();

      console.log('page.deceased', page.deceased);

      bh.url = page.ssdUrl + 'get-users';
      bh = this.sd_H2rfObg2GTiF2OJI(bh);
      //appendnew_next_ben1Form
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KqW8tRDm0M48Qng2');
    }
  }

  async sd_H2rfObg2GTiF2OJI(bh) {
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
      bh = this.sd_duOxmO19SUtDVgxP(bh);
      //appendnew_next_sd_H2rfObg2GTiF2OJI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H2rfObg2GTiF2OJI');
    }
  }

  sd_duOxmO19SUtDVgxP(bh) {
    try {
      const page = this.page;
      page.clients = page.result.filter((item) => item.role === 'client');
      page.claim = page.clients.find(
        (client) => client.policyNumber == page.policy
      );
      //appendnew_next_sd_duOxmO19SUtDVgxP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_duOxmO19SUtDVgxP');
    }
  }

  forms1(bh) {
    try {
      const page = this.page;
      page.value = {};

      if (page.user.role === 'admin') {
        page.claimStatuses = [
          { value: 'partially approved', viewValue: 'Partially Approve' },
          { value: 'rejected', viewValue: 'Reject' },
        ];
      } else if (page.user.role === 'director') {
        page.claimStatuses = [
          { value: 'approved', viewValue: 'Approve' },
          { value: 'rejected', viewValue: 'Reject' },
        ];
      }

      page.deceased = new FormGroup({
        firstName: new FormControl(page.selectedClaim.deceased.firstName),
        lastName: new FormControl(page.selectedClaim.deceased.lastName),
        idNum: new FormControl(page.selectedClaim.deceased.idNum),
        gender: new FormControl(page.selectedClaim.deceased.gender),
        dateOfDeath: new FormControl(page.selectedClaim.deceased.dateOfDeath),
        // status: new FormControl({value: page.selectedClaim.status, disabled: true}),
        status: new FormControl(page.selectedClaim.status),
      });

      // documents
      page.idClaimer = new FormGroup({
        _id: new FormControl(page.selectedClaim.idClaimer._id),
        filename: new FormControl(page.selectedClaim.idClaimer.filename),
        // chunkSize: new FormControl(page.selectedClaim.idClaimer.chunkSize.length),
        length: new FormControl(page.selectedClaim.idClaimer.length),
      });

      page.idDecesed = new FormGroup({
        _id: new FormControl(page.selectedClaim.idDecesed._id),
        filename: new FormControl(page.selectedClaim.idDecesed.filename),
        // chunkSize: new FormControl(page.selectedClaim.idDecesed.chunkSize.length),
        length: new FormControl(page.selectedClaim.idDecesed.length),
      });

      page.bi1662 = new FormGroup({
        _id: new FormControl(page.selectedClaim.bi1662._id),
        filename: new FormControl(page.selectedClaim.bi1662.filename),
        // chunkSize: new FormControl(page.selectedClaim.bi1662.chunkSize.length),
        length: new FormControl(page.selectedClaim.bi1662.length),
      });

      page.deathCertificate = new FormGroup({
        _id: new FormControl(page.selectedClaim.deathCertificate._id),
        filename: new FormControl(page.selectedClaim.deathCertificate.filename),
        // chunkSize: new FormControl(page.selectedClaim.deathCertificate.chunkSize.length),
        length: new FormControl(page.selectedClaim.deathCertificate.length),
      });

      page.bankDetails = new FormGroup({
        _id: new FormControl(page.selectedClaim.bankDetails._id),
        filename: new FormControl(page.selectedClaim.bankDetails.filename),
        // chunkSize: new FormControl(page.selectedClaim.bankDetails.chunkSize.length),
        length: new FormControl(page.selectedClaim.bankDetails.length),
      });

      //claims form with all information including claimer details
      page.policyClaimsForm = new FormGroup({
        firstName: new FormControl(page.selectedClaim.firstName),
        lastName: new FormControl(page.selectedClaim.lastName),
        idNum: new FormControl(page.selectedClaim.idNum),
        gender: new FormControl(page.selectedClaim.gender),
        packageType: new FormControl(page.selectedClaim.packageType),
        payoutAmount: new FormControl(page.selectedClaim.payoutAmount),
        deceased: page.deceased,
        deceased2: new FormControl(''),
        idClaimer: page.idClaimer,
        idClaimer2: new FormControl(''),
        idDecesed: page.idDecesed,
        idDeceased2: new FormControl(''),
        bi1662: page.bi1662,
        bi16632: new FormControl(''),
        deathCertificate: page.deathCertificate,
        deathCetificatify2: new FormControl(''),
        bankDetails: page.bankDetails,
        bankDetails2: new FormControl(''),
        depsId: new FormControl(page.selectedClaim.depsId),
        beIds: new FormControl(page.selectedClaim.beIds),
        claimNumber: new FormControl(page.selectedClaim.claimNumber),
        status: new FormControl(page.value?.status),
        _id: new FormControl(page.selectedClaim._id),
      });

      page.deceased.get('status')?.valueChanges.subscribe((value) => {
        page.value = { status: value };
        if (
          (page.user.role == 'admin' && value == 'partially approved') ||
          (page.user.role === 'admin' && value == 'rejected')
        ) {
          page.deceased.get('status')?.disable();
          page.policyClaimsForm.value.status = page.value.status;
          if (page.user.role === 'director' && value === 'partially approved') {
            page.deceased.get('status')?.enable();
          }
        } else if (
          (page.user.role === 'director' && value === 'approved') ||
          (page.user.role === 'director' && value === 'rejected')
        ) {
          page.deceased.get('status')?.disable();
          page.policyClaimsForm.value.status = page.value.status;
        }
      });

      page.date = new Date();

      bh.url = page.ssdUrl + 'get-users';
      bh = this.sd_H2rfObg2GTiF2OJI(bh);
      //appendnew_next_forms1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QHKgZNl5Jio19cV7');
    }
  }

  sd_sZzw2GvSrAzcQ1Zs(bh) {
    try {
      const view_documentDialog = this.__page_injector__.get(MatDialog);
      const view_documentDialogRef = view_documentDialog.open(
        view_documentComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sZzw2GvSrAzcQ1Zs');
    }
  }

  sd_p3ivOtVgfXm0I0Z5(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Jp5WhdAT8tH6NXXw(bh);
      //appendnew_next_sd_p3ivOtVgfXm0I0Z5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p3ivOtVgfXm0I0Z5');
    }
  }

  sd_Jp5WhdAT8tH6NXXw(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update_claim';

      page.updatedClaim = page.policyClaimsForm.value;
      page.updatedClaim.status = page.value.status;

      console.log('page.updatedClaim', page.updatedClaim);
      bh = this.sd_9j0Sbn07mNgWcy1F(bh);
      //appendnew_next_sd_Jp5WhdAT8tH6NXXw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jp5WhdAT8tH6NXXw');
    }
  }

  async sd_9j0Sbn07mNgWcy1F(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.updatedClaim,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_aaERlUkwBglNdw0w(bh);
      //appendnew_next_sd_9j0Sbn07mNgWcy1F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9j0Sbn07mNgWcy1F');
    }
  }

  sd_aaERlUkwBglNdw0w(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.res.lastErrorObject.updatedExisting,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_e6cgpzrBPGD5XQ4t(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aaERlUkwBglNdw0w');
    }
  }

  sd_e6cgpzrBPGD5XQ4t(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('CLAIM UPDATED SUCCESSFULY', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_v6ld535K0dqcmZGj(bh);
      //appendnew_next_sd_e6cgpzrBPGD5XQ4t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e6cgpzrBPGD5XQ4t');
    }
  }

  async sd_v6ld535K0dqcmZGj(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.user.role,
          'director',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_nzrNljXRVpixxCrc(bh);
      } else {
        bh = await this.sd_nZ3fyQZGNTByR3Yl(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v6ld535K0dqcmZGj');
    }
  }

  sd_nzrNljXRVpixxCrc(bh) {
    try {
      const page = this.page;
      page.sendMsg = page.ssdUrl + 'send-message';
      page.getUsers = page.ssdUrl + 'get-users';

      bh = this.sd_jQUYu0lvcMzZSRhu(bh);
      //appendnew_next_sd_nzrNljXRVpixxCrc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nzrNljXRVpixxCrc');
    }
  }

  async sd_jQUYu0lvcMzZSRhu(bh) {
    try {
      let requestOptions = {
        url: this.page.getUsers,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_0JdhwakS1r4tZGSu(bh);
      //appendnew_next_sd_jQUYu0lvcMzZSRhu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jQUYu0lvcMzZSRhu');
    }
  }

  sd_0JdhwakS1r4tZGSu(bh) {
    try {
      const page = this.page;
      page.users.find((item) => {
        if (item.idNumber === page.updatedClaim.idNum) {
          page.userEmail = item.email;
        }
      });

      bh.body = {
        email: page.userEmail,
        subject: 'Claim update',
        message: `Your claim has been ${page.updatedClaim.status}. Please login to the system to see more details.`,
      };
      bh = this.sd_iLRwB3gmY1wyNMMJ(bh);
      //appendnew_next_sd_0JdhwakS1r4tZGSu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0JdhwakS1r4tZGSu');
    }
  }

  async sd_iLRwB3gmY1wyNMMJ(bh) {
    try {
      let requestOptions = {
        url: this.page.sendMsg,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.sendMsgres = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_nZ3fyQZGNTByR3Yl(bh);
      //appendnew_next_sd_iLRwB3gmY1wyNMMJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iLRwB3gmY1wyNMMJ');
    }
  }

  async sd_nZ3fyQZGNTByR3Yl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/claims');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_nZ3fyQZGNTByR3Yl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nZ3fyQZGNTByR3Yl');
    }
  }

  sd_6K1LlQR7ORYPgDAJ(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_WhX0AWiqqtFEb3rr(bh);
      //appendnew_next_sd_6K1LlQR7ORYPgDAJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6K1LlQR7ORYPgDAJ');
    }
  }

  sd_WhX0AWiqqtFEb3rr(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.user.role,
          'director',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ZUohxf8XSY12QfLL(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ZUohxf8XSY12QfLL(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WhX0AWiqqtFEb3rr');
    }
  }

  sd_ZUohxf8XSY12QfLL(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.value,
          'rejected',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SHTSpPSJUWaQ9ceQ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZUohxf8XSY12QfLL');
    }
  }

  sd_SHTSpPSJUWaQ9ceQ(bh) {
    try {
      const director_noteDialog = this.__page_injector__.get(MatDialog);
      const director_noteDialogRef = director_noteDialog.open(
        director_noteComponent,
        { height: '300px', width: '400px' }
      );
      director_noteDialogRef.afterClosed().subscribe((event) => {
        this.page.resFromPop = event;
        this.sd_1m4XSqRry2h3n56Z(bh);

        //appendnew_next_sd_SHTSpPSJUWaQ9ceQ;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SHTSpPSJUWaQ9ceQ');
    }
  }

  async sd_1m4XSqRry2h3n56Z(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.getVariable();
      this.page.popupClaimReason = outputVariables.local.data;

      bh = this.sd_UIrQhv0U3JraGvFH(bh);
      //appendnew_next_sd_1m4XSqRry2h3n56Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1m4XSqRry2h3n56Z');
    }
  }

  sd_UIrQhv0U3JraGvFH(bh) {
    try {
      const page = this.page;
      page.updatedClaim = page.policyClaimsForm.value;
      page.updatedClaim.claimReason = page.popupClaimReason;

      //appendnew_next_sd_UIrQhv0U3JraGvFH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UIrQhv0U3JraGvFH');
    }
  }

  sd_dMv4RgmBK75eHTvZ(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_5wzAXg1SAFazVW4X(bh);
      //appendnew_next_sd_dMv4RgmBK75eHTvZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dMv4RgmBK75eHTvZ');
    }
  }

  sd_5wzAXg1SAFazVW4X(bh) {
    try {
      const page = this.page;
      if (page.deceased.get('status')?.value !== 'pending') {
        page.deceased.get('status')?.disable();
      }

      if (
        page.deceased.get('status')?.value === 'partially approved' &&
        page.user.role === 'director'
      ) {
        page.deceased.get('status')?.enable();
      }
      //appendnew_next_sd_5wzAXg1SAFazVW4X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5wzAXg1SAFazVW4X');
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
