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
      bh = this.sd_2V5D2n28pUkU7tCx(bh);
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

  upload1(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_n4hbMh10Eh3z3ZsU(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GPMxiYwAHW5mcTLG');
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
      bh = this.sd_TCg0MA5sCko3aWQh(bh);
      //appendnew_next_goToBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g3pyJj48j834jEvI');
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
      bh = this.sd_n6Kfln4aV96ozLG0(bh);
      //appendnew_next_getFromBackend1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w4xmd0ohQzJQ2yEp');
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
      bh = this.sd_BmPWz1VDSzl4brQG(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Em1vOdfMEJ8s3HQp');
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
      bh = this.sd_VEJHUpqnMMqY74Ix(bh);
      //appendnew_next_goToBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aU0Zzwoqe2CxVNau');
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
      bh = this.sd_etlERJRr2he1KIA9(bh);
      //appendnew_next_getFromBackend2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cG6OLBbbJnyGx17V');
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
      bh = this.sd_c0R9DuWKyrUGeBUV(bh);
      //appendnew_next_upload3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hxQnprRmARpZj6zV');
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
      bh = this.sd_vprqtHXSLnaUznHL(bh);
      //appendnew_next_goToBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qou4s0Qzgx0yyj89');
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
      bh = this.sd_zOzYuojeT4wvbvTJ(bh);
      //appendnew_next_getFromBackend3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3Vxa7F2M3Q8j4u5q');
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
      bh = this.sd_LXObBzwaRqR61Jqk(bh);
      //appendnew_next_upload4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2OeZZceBHpduKz76');
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
      bh = this.sd_cxxe2TLoSCvtqnNn(bh);
      //appendnew_next_goToBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DU7tkUKDDCiQlKRa');
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
      bh = this.sd_V7KAHoxPKIn498z1(bh);
      //appendnew_next_getFromBackend4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lQRp7otYHu2k6FIb');
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
      bh = this.sd_R1vMQTyO0uOzv33b(bh);
      //appendnew_next_upload5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A4ieF4I6nYcolXIT');
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
      bh = this.sd_ONu5zn9LOqoT8qaM(bh);
      //appendnew_next_goToBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3G76a3FUpNh3YFzw');
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
      bh = this.sd_7xTXSTkRD7MJjbAf(bh);
      //appendnew_next_getFromBackend5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CkI94gGI0K26rsvw');
    }
  }

  disabled(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_neIC7BNFCyHTAt2a(bh);
      //appendnew_next_disabled
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CJakOjzWChnqchWN');
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
      this.page.notification = undefined;
      this.page.mes = 'READING DOCUMENT';
      this.page.disabled = true;
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
      bh = this.sd_hGyKu4GCZrIhOO7t(bh);
      //appendnew_next_sd_tRNzeK7FO7O5eZY6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tRNzeK7FO7O5eZY6');
    }
  }

  sd_hGyKu4GCZrIhOO7t(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_t7WBGNUYn2Qn9klf(bh);
      //appendnew_next_sd_hGyKu4GCZrIhOO7t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hGyKu4GCZrIhOO7t');
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

      page.notification = {
        status: 'pending',
        notificationID: `NOT-${new Date().getTime()}`,
        claimNumber: `CN-${page.policyNo}`,
        addedBy: page.user.role,
      };
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
        bh = this.benAndDepenArrayForSelectorsAndYear(bh);
      } else {
        bh = await this.sd_0dgCvNhXnv2EDp9O(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FZutB5HUJlZZ3mXi');
    }
  }

  benAndDepenArrayForSelectorsAndYear(bh) {
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
        { value: page.deparray[0], viewValue: page.deparray[0]?.idNumber },
        { value: page.deparray[1], viewValue: page.deparray[1]?.idNumber },
        { value: page.deparray[2], viewValue: page.deparray[2]?.idNumber },
      ];

      page.beIds = [
        { value: page.benarray[0], viewValue: page.benarray[0]?.idNumber },
        { value: page.benarray[1], viewValue: page.benarray[1]?.idNumber },
      ];
      page.year = parseInt(new Date().getFullYear().toString().slice(-2));

      bh = this.sd_s7IAxRYDHIXfSJ12(bh);
      //appendnew_next_benAndDepenArrayForSelectorsAndYear
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
        bh = await this.sd_MsyP7rUIfmYVgK6U(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s7IAxRYDHIXfSJ12');
    }
  }

  sd_MsyP7rUIfmYVgK6U(bh) {
    try {
      const page = this.page;
      page.year = parseInt(new Date().getFullYear().toString().slice(-2));
      page.birthyear = parseInt(page.newClient[0].idNumber.slice(0, 2));
      page.years = page.birthyear - page.year;

      if (page.newClient[0].packageType == 'Package 1') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 1500';
        } else {
          page.payamount = 'R 3000';
        }
      }
      if (page.newClient[0].packageType == 'Package 2') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 2500';
        } else {
          page.payamount = 'R 5000';
        }
      }
      if (page.newClient[0].packageType == 'Package 3') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 4000';
        } else {
          page.payamount = 'R 10000';
        }
      }
      // page.policyClaimsForm.patchValue({
      //   payoutAmount: page.payamount,
      // });
      console.log('payout', page.newClient[0].packageType);
      console.log('yearcurrent', page.year);
      console.log('from id', page.birthyear);
      bh = this.benForm(bh);
      //appendnew_next_sd_MsyP7rUIfmYVgK6U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MsyP7rUIfmYVgK6U');
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
      //   // documents
      // page.idClaimer=new FormGroup({
      //  _id: new FormControl(""),
      //   filename: new FormControl(""),
      //   chunkSize: new FormControl(""),
      //   length: new FormControl(""),

      //   })
      //    page.idDecesed =new FormGroup({
      //  _id: new FormControl(""),
      //   filename: new FormControl(""),
      //   chunkSize: new FormControl(""),
      //   length: new FormControl(""),

      //   })
      //     page.bi1663 =new FormGroup({
      //  _id: new FormControl(""),
      //   filename: new FormControl(""),
      //   chunkSize: new FormControl(""),
      //   length: new FormControl(""),

      //   })
      //     page.deathCertificate =new FormGroup({
      //  _id: new FormControl(""),
      //   filename: new FormControl(""),
      //   chunkSize: new FormControl(""),
      //   length: new FormControl(""),

      //   })
      //     page.bankDetails =new FormGroup({
      //  _id: new FormControl(""),
      //   filename: new FormControl(""),
      //   chunkSize: new FormControl(""),
      //   length: new FormControl(""),

      //   })
      //claims form with all information including claimer details
      page.policyClaimsForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        idNum: new FormControl(''),
        gender: new FormControl(''),
        packageType: new FormControl(page.newClient[0].packageType),
        payoutAmount: new FormControl(page.payamount),
        deceased: page.deceased,
        deceased2: new FormControl(''),
        // idClaimer: page.idClaimer,
        idClaimer2: new FormControl(''),
        // idDecesed:page.idDecesed,
        idDeceased2: new FormControl(''),
        // bi1663:page.bi1663,
        bi16632: new FormControl(''),
        // deathCertificate:page.deathCertificate,
        deathCetificatify2: new FormControl(''),
        // bankDetails :page.bankDetails,
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

      page.deceased = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        idNum: new FormControl(''),
        gender: new FormControl(''),
        dateOfDeath: new FormControl('', [Validators.required]),
      });

      //claims form with all information including claimer details
      page.policyClaimsForm = new FormGroup({
        firstName: new FormControl(page.newClient[0].firstName),
        lastName: new FormControl(page.newClient[0].lastName),
        idNum: new FormControl(page.newClient[0].idNumber),
        gender: new FormControl(page.newClient[0].gender),
        packageType: new FormControl(page.newClient[0].packageType),
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
      bh = this.fileInForm(bh);
      //appendnew_next_sd_gTV26jkDQkSajvI6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTV26jkDQkSajvI6');
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
      bh = this.sd_3QrXrgXm95pU3x0Q(bh);
      //appendnew_next_fileInForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hWEJxhxU43a7daez');
    }
  }

  sd_3QrXrgXm95pU3x0Q(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_GDDWmjjIVPTba5A7(bh);
      //appendnew_next_sd_3QrXrgXm95pU3x0Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3QrXrgXm95pU3x0Q');
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
      bh = this.sd_WY4rbMDeXIxPRC44(bh);
      //appendnew_next_sd_YRFsW4mmP13CYVr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YRFsW4mmP13CYVr4');
    }
  }

  sd_WY4rbMDeXIxPRC44(bh) {
    try {
      const page = this.page;
      page.year = parseInt(new Date().getFullYear().toString().slice(-2));
      page.birthyear = parseInt(
        page.policyClaimsForm.value.depsId.idNumber.slice(0, 2)
      );
      page.years = page.birthyear - page.year;

      if (page.newClient[0].packageType == 'Package 1') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 1500';
        } else {
          page.payamount = 'R 3000';
        }
      }
      if (page.newClient[0].packageType == 'Package 2') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 2500';
        } else {
          page.payamount = 'R 5000';
        }
      }
      if (page.newClient[0].packageType == 'Package 3') {
        if (page.years >= -21 && page.years <= 21) {
          page.payamount = 'R 4000';
        } else {
          page.payamount = 'R 10000';
        }
      }
      page.policyClaimsForm.patchValue({
        payoutAmount: page.payamount,
      });
      console.log('payout', page.newClient[0].packageType);
      console.log('yearcurrent', page.year);
      console.log('from id', page.birthyear);
      //appendnew_next_sd_WY4rbMDeXIxPRC44
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WY4rbMDeXIxPRC44');
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

  sd_2V5D2n28pUkU7tCx(bh) {
    try {
      const page = this.page;
      console.log('selectedclaim', page.selectedClaim);
      //appendnew_next_sd_2V5D2n28pUkU7tCx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2V5D2n28pUkU7tCx');
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
      const page = this.page; // bh.claimKeys = Object.keys(page.selectedClaim)

      // page.docs = []

      // bh.claimKeys.forEach(key => {
      //     if(page.selectedClaim[key]?.filename) {
      //         let doc = {...page.selectedClaim[key],
      //                     name: key}
      //         page.docs.push(doc)
      //     }

      //     })

      // console.log("DOCS: ", page.docs)

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
        bh = this.sd_hNf9MpU9Y55whZpO(bh);
      } else {
        bh = await this.sd_uFC9Kp0n2fbzRNN3(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ypuYcwTSxbHCyLl9');
    }
  }

  sd_hNf9MpU9Y55whZpO(bh) {
    try {
      const page = this.page;
      page.DeathCertificatefile = page.selectedClaim['DeathCertificatefile'];
      page.bi1663file = page.selectedClaim['bi1663file'];
      page['IDDeceasedfile'] = page.selectedClaim['IDDeceasedfile'];
      page['IDfile'] = page.selectedClaim['IDfile'];
      page['bankDetailsfile'] = page.selectedClaim['bankDetailsfile'];
      console.log('page.claim', page['DeathCertificatefile']);

      bh = this.ben1Form(bh);
      //appendnew_next_sd_hNf9MpU9Y55whZpO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hNf9MpU9Y55whZpO');
    }
  }

  ben1Form(bh) {
    try {
      const page = this.page; // decesed details

      // console.log("BEN")
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
      // page.idClaimer = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.idClaimer._id),
      //   filename: new FormControl(page.selectedClaim.idClaimer.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.idClaimer.chunkSize?.length),
      //   length: new FormControl(page.selectedClaim.idClaimer.length),
      // })

      // page.idDecesed = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.idDecesed._id),
      //   filename: new FormControl(page.selectedClaim.idDecesed.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.idDecesed.chunkSize?.length),
      //   length: new FormControl(page.selectedClaim.idDecesed.length),

      // })

      // page.bi1662 = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.bi1662._id),
      //   filename: new FormControl(page.selectedClaim.bi1662.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.bi1662.chunkSize?.length),
      //   length: new FormControl(page.selectedClaim.bi1662.length),
      // })

      // page.deathCertificate = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.deathCertificate._id),
      //   filename: new FormControl(page.selectedClaim.deathCertificate.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.deathCertificate.chunkSize?.length),
      //   length: new FormControl(page.selectedClaim.deathCertificate.length),

      // })

      // page.bankDetails = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.bankDetails._id),
      //   filename: new FormControl(page.selectedClaim.bankDetails.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.bankDetails.chunkSize?.length),
      //   length: new FormControl(page.selectedClaim.bankDetails.length),
      // })

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
        ID: new FormControl(page.selectedClaim.ID),
        IDfile: new FormControl(page.selectedClaim['IDfile']),
        IDDecesed: new FormControl(page.selectedClaim['IDDecesed']),
        IDDecesedfile: new FormControl(page.selectedClaim['IDDecesedfile']),
        DeathCertificate: new FormControl(
          page.selectedClaim['DeathCertificate']
        ),
        DeathCertificatefile: new FormControl(
          page.selectedClaim['DeathCertificatefile']
        ),
        bi1663: new FormControl(page.selectedClaim['bi1663']),
        bi1663file: new FormControl(page.selectedClaim['bi1663file']),
        bankDetails: new FormControl(page.selectedClaim['bankDetails']),
        bankDetailsfile: new FormControl(page.selectedClaim['bankDetailsfile']),
        // deceased2: new FormControl(''),
        // idClaimer: page.idClaimer,
        // idClaimer2: new FormControl(''),
        // idDecesed: page.idDecesed,
        // idDeceased2: new FormControl(''),
        // bi1662: page.bi1663,
        // bi16632: new FormControl(''),
        // deathCertificate: page.deathCertificate,
        // deathCetificatify2: new FormControl(''),
        // bankDetails: page.bankDetails,
        // bankDetails2: new FormControl(''),
        // depsId: new FormControl(page.selectedClaim.depsId),
        // beIds: new FormControl(page.selectedClaim.beIds),
        _id: new FormControl(page.selectedClaim._id),
        claimNumber: new FormControl(page.selectedClaim.claimNumber),
      });

      // page.deceased.get('status')?.valueChanges.subscribe( value => {
      //   page.value = {status: value}
      //   if ( page.user.role == "admin" && value == 'partially approved' || page.user.role === "admin" && value == 'rejected'){
      //     page.deceased.get('status')?.disable()
      //     page.policyClaimsForm.value.status = page.value.status
      //   } else if ( page.user.role === "director" && value === 'approved' || page.user.role === "director" && value === 'rejected'){
      //     page.deceased.get('status')?.disable()
      //     page.policyClaimsForm.value.status = page.value.status
      //   }
      // })

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

  sd_uFC9Kp0n2fbzRNN3(bh) {
    try {
      const page = this.page; // console.log("page.claim",page.claim)
      page['DeathCertificatefile'] = page.selectedClaim['DeathCertificatefile'];
      page.bi1663file = page.selectedClaim['bi1663file'];
      page['IDDeceasedfile'] = page.selectedClaim['IDDeceasedfile'];
      page['IDfile'] = page.selectedClaim['IDfile'];
      page['bankDetailsfile'] = page.selectedClaim['bankDetailsfile'];

      bh = this.forms1(bh);
      //appendnew_next_sd_uFC9Kp0n2fbzRNN3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uFC9Kp0n2fbzRNN3');
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
      // page.idClaimer = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.idClaimer._id),
      //   filename: new FormControl(page.selectedClaim.idClaimer.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.idClaimer.chunkSize.length),
      //   length: new FormControl(page.selectedClaim.idClaimer.length),

      // })

      // page.idDecesed = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.idDecesed._id),
      //   filename: new FormControl(page.selectedClaim.idDecesed.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.idDecesed.chunkSize.length),
      //   length: new FormControl(page.selectedClaim.idDecesed.length),

      // })

      // page.bi1663 = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.bi1662._id),
      //   filename: new FormControl(page.selectedClaim.bi1662.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.bi1662.chunkSize.length),
      //   length: new FormControl(page.selectedClaim.bi1662.length),

      // })

      // page.deathCertificate = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.deathCertificate._id),
      //   filename: new FormControl(page.selectedClaim.deathCertificate.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.deathCertificate.chunkSize.length),
      //   length: new FormControl(page.selectedClaim.deathCertificate.length),

      // })

      // page.bankDetails = new FormGroup({
      //   _id: new FormControl(page.selectedClaim.bankDetails._id),
      //   filename: new FormControl(page.selectedClaim.bankDetails.filename),
      //   // chunkSize: new FormControl(page.selectedClaim.bankDetails.chunkSize.length),
      //   length: new FormControl(page.selectedClaim.bankDetails.length),
      // })

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
        ID: new FormControl(page.selectedClaim.ID),
        IDfile: new FormControl(page.selectedClaim['IDfile']),
        IDDecesed: new FormControl(page.selectedClaim['IDDecesed']),
        IDDecesedfile: new FormControl(page.selectedClaim['IDDecesedfile']),
        DeathCertificate: new FormControl(
          page.selectedClaim['DeathCertificate']
        ),
        DeathCertificatefile: new FormControl(
          page.selectedClaim['DeathCertificatefile']
        ),
        bi1663: new FormControl(page.selectedClaim['bi1663']),
        bi1663file: new FormControl(page.selectedClaim['bi1663file']),
        bankDetails: new FormControl(page.selectedClaim['bankDetails']),
        bankDetailsfile: new FormControl(page.selectedClaim['bankDetailsfile']),
        idClaimer2: new FormControl(''),
        idDeceased2: new FormControl(''),
        bi16632: new FormControl(''),
        deathCetificatify2: new FormControl(''),
        bankDetails2: new FormControl(''),
        depsId: new FormControl(page.selectedClaim.depsId),
        beIds: new FormControl(page.selectedClaim.beIds),
        claimNumber: new FormControl(page.selectedClaim.claimNumber),
        status: new FormControl(page.value?.status),
        _id: new FormControl(page.selectedClaim._id),
      });

      // page.deceased.get('status')?.valueChanges.subscribe( value => {
      //   page.value = {status: value}
      //   if ( page.user.role == "admin" && value == 'partially approved' || page.user.role === "admin" && value == 'rejected'){
      //     page.deceased.get('status')?.disable()
      //     page.policyClaimsForm.value.status = page.value.status
      //     if(page.user.role === "director" && value === 'partially approved'){
      //       page.deceased.get('status')?.enable()
      //     }
      //   } else if ( page.user.role === "director" && value === 'approved' || page.user.role === "director" && value === 'rejected'){
      //     page.deceased.get('status')?.disable()
      //     page.policyClaimsForm.value.status = page.value.status
      //   }
      // })

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
        title: `DOA Claim Update - ${page.updatedClaim.claimNumber}`,
        message: `Your claim's status has been updated. Please log in to the system to view more details regarding your claim.`,
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
      bh = this.sd_O61HpZCZtU1qpQWn(bh);
      //appendnew_next_sd_6K1LlQR7ORYPgDAJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6K1LlQR7ORYPgDAJ');
    }
  }

  sd_O61HpZCZtU1qpQWn(bh) {
    try {
      let outputVariables = this.disabled();

      bh = this.sd_WhX0AWiqqtFEb3rr(bh);
      //appendnew_next_sd_O61HpZCZtU1qpQWn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O61HpZCZtU1qpQWn');
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
        { height: '200px', width: '400px' }
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

  sd_n4hbMh10Eh3z3ZsU(bh) {
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

      //appendnew_next_sd_n4hbMh10Eh3z3ZsU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n4hbMh10Eh3z3ZsU');
    }
  }

  sd_TCg0MA5sCko3aWQh(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_KNrgPYlP3jE0IjKb(bh);
      //appendnew_next_sd_TCg0MA5sCko3aWQh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TCg0MA5sCko3aWQh');
    }
  }

  sd_KNrgPYlP3jE0IjKb(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-id';
      page.loading = true;

      bh = this.sd_XHdElQNByHl5VK22(bh);
      //appendnew_next_sd_KNrgPYlP3jE0IjKb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KNrgPYlP3jE0IjKb');
    }
  }

  async sd_XHdElQNByHl5VK22(bh) {
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
      bh = this.sd_40hhfTwkSFIrUcrN(bh);
      //appendnew_next_sd_XHdElQNByHl5VK22
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XHdElQNByHl5VK22');
    }
  }

  sd_40hhfTwkSFIrUcrN(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_zpdugbbDIBJ7pnwT(bh);
      //appendnew_next_sd_40hhfTwkSFIrUcrN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_40hhfTwkSFIrUcrN');
    }
  }

  async sd_zpdugbbDIBJ7pnwT(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5emoPH54CKDeVpDe(bh);
      } else {
        bh = await this.sd_IZgxjqgrv1Lxpdv0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zpdugbbDIBJ7pnwT');
    }
  }

  sd_5emoPH54CKDeVpDe(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid ID', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_PU6FAJfhwtXXaRfu(bh);
      //appendnew_next_sd_5emoPH54CKDeVpDe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5emoPH54CKDeVpDe');
    }
  }

  sd_PU6FAJfhwtXXaRfu(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_KWeqeqVVPOahuUgn(bh);
      //appendnew_next_sd_PU6FAJfhwtXXaRfu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PU6FAJfhwtXXaRfu');
    }
  }

  async sd_KWeqeqVVPOahuUgn(bh) {
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
      bh = this.sd_yp2jx88OTfj4ri6g(bh);
      //appendnew_next_sd_KWeqeqVVPOahuUgn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KWeqeqVVPOahuUgn');
    }
  }

  sd_yp2jx88OTfj4ri6g(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('idClaimer', JSON.stringify(page.res));
      this.getFromBackend1();
      bh = this.sd_diMduR0duogwPLSp(bh);
      //appendnew_next_sd_yp2jx88OTfj4ri6g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yp2jx88OTfj4ri6g');
    }
  }

  sd_diMduR0duogwPLSp(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('ID has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_diMduR0duogwPLSp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_diMduR0duogwPLSp');
    }
  }

  sd_IZgxjqgrv1Lxpdv0(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_fr38MztJ59haWIf9(bh);
      //appendnew_next_sd_IZgxjqgrv1Lxpdv0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IZgxjqgrv1Lxpdv0');
    }
  }

  sd_fr38MztJ59haWIf9(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showId = false;
      //appendnew_next_sd_fr38MztJ59haWIf9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fr38MztJ59haWIf9');
    }
  }

  sd_n6Kfln4aV96ozLG0(bh) {
    try {
      this.page.idclaimerFile = JSON.parse(sessionStorage.getItem('idClaimer'));
      bh = this.sd_AeJuuCeGt9BZhvyy(bh);
      //appendnew_next_sd_n6Kfln4aV96ozLG0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n6Kfln4aV96ozLG0');
    }
  }

  sd_AeJuuCeGt9BZhvyy(bh) {
    try {
      const page = this.page;
      page.idclaimerfilename = page.idclaimerFile.filename;
      //appendnew_next_sd_AeJuuCeGt9BZhvyy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AeJuuCeGt9BZhvyy');
    }
  }

  sd_BmPWz1VDSzl4brQG(bh) {
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

      //appendnew_next_sd_BmPWz1VDSzl4brQG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BmPWz1VDSzl4brQG');
    }
  }

  sd_VEJHUpqnMMqY74Ix(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Ui7aSNufSpgMf5fn(bh);
      //appendnew_next_sd_VEJHUpqnMMqY74Ix
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VEJHUpqnMMqY74Ix');
    }
  }

  sd_Ui7aSNufSpgMf5fn(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-id';
      page.loading = true;

      bh = this.sd_IMaHyAZE5QQC5qoY(bh);
      //appendnew_next_sd_Ui7aSNufSpgMf5fn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ui7aSNufSpgMf5fn');
    }
  }

  async sd_IMaHyAZE5QQC5qoY(bh) {
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
      bh = this.sd_WkXs3FOj5CqQoFDb(bh);
      //appendnew_next_sd_IMaHyAZE5QQC5qoY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IMaHyAZE5QQC5qoY');
    }
  }

  sd_WkXs3FOj5CqQoFDb(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_OwhZYGyh4M3aw8tB(bh);
      //appendnew_next_sd_WkXs3FOj5CqQoFDb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WkXs3FOj5CqQoFDb');
    }
  }

  async sd_OwhZYGyh4M3aw8tB(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_puEvbf1XS4POeSIc(bh);
      } else {
        bh = await this.sd_zdEMATSS2fZwHuHk(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OwhZYGyh4M3aw8tB');
    }
  }

  sd_puEvbf1XS4POeSIc(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_nIkGAXfUZtDik97i(bh);
      //appendnew_next_sd_puEvbf1XS4POeSIc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_puEvbf1XS4POeSIc');
    }
  }

  sd_nIkGAXfUZtDik97i(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_HCVB864LcTTxbL8y(bh);
      //appendnew_next_sd_nIkGAXfUZtDik97i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nIkGAXfUZtDik97i');
    }
  }

  async sd_HCVB864LcTTxbL8y(bh) {
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
      bh = this.sd_Sfgpgbn6oSSCvTf9(bh);
      //appendnew_next_sd_HCVB864LcTTxbL8y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HCVB864LcTTxbL8y');
    }
  }

  sd_Sfgpgbn6oSSCvTf9(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('idDeceased', JSON.stringify(page.res));
      this.getFromBackend2();
      bh = this.sd_8vC8q9h3Ifgo5fL1(bh);
      //appendnew_next_sd_Sfgpgbn6oSSCvTf9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sfgpgbn6oSSCvTf9');
    }
  }

  sd_8vC8q9h3Ifgo5fL1(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('ID has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_8vC8q9h3Ifgo5fL1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8vC8q9h3Ifgo5fL1');
    }
  }

  sd_zdEMATSS2fZwHuHk(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_l0q77Sv2C3DOAzlk(bh);
      //appendnew_next_sd_zdEMATSS2fZwHuHk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zdEMATSS2fZwHuHk');
    }
  }

  sd_l0q77Sv2C3DOAzlk(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showIddes = false;
      //appendnew_next_sd_l0q77Sv2C3DOAzlk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l0q77Sv2C3DOAzlk');
    }
  }

  sd_etlERJRr2he1KIA9(bh) {
    try {
      this.page.idDeceasedFile = JSON.parse(
        sessionStorage.getItem('idDeceased')
      );
      bh = this.sd_czoEwkzdVrJb88db(bh);
      //appendnew_next_sd_etlERJRr2he1KIA9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_etlERJRr2he1KIA9');
    }
  }

  sd_czoEwkzdVrJb88db(bh) {
    try {
      const page = this.page;
      page.idDeceasedfilename = page.idDeceasedFile.filename;
      //appendnew_next_sd_czoEwkzdVrJb88db
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_czoEwkzdVrJb88db');
    }
  }

  sd_c0R9DuWKyrUGeBUV(bh) {
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

      //appendnew_next_sd_c0R9DuWKyrUGeBUV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c0R9DuWKyrUGeBUV');
    }
  }

  sd_vprqtHXSLnaUznHL(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_L7eAMtZ9L7FDAjiW(bh);
      //appendnew_next_sd_vprqtHXSLnaUznHL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vprqtHXSLnaUznHL');
    }
  }

  sd_L7eAMtZ9L7FDAjiW(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-death-certificate';
      page.loading = true;

      bh = this.sd_9t3d8zPDyWfPekAl(bh);
      //appendnew_next_sd_L7eAMtZ9L7FDAjiW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L7eAMtZ9L7FDAjiW');
    }
  }

  async sd_9t3d8zPDyWfPekAl(bh) {
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
      bh = this.sd_BW0q4HIeZBR3J30E(bh);
      //appendnew_next_sd_9t3d8zPDyWfPekAl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9t3d8zPDyWfPekAl');
    }
  }

  sd_BW0q4HIeZBR3J30E(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_egn7UeF0wWzIPEe4(bh);
      //appendnew_next_sd_BW0q4HIeZBR3J30E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BW0q4HIeZBR3J30E');
    }
  }

  async sd_egn7UeF0wWzIPEe4(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Z2f4l6fKycVYScrb(bh);
      } else {
        bh = await this.sd_NHCmLOBtpCuQlfep(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_egn7UeF0wWzIPEe4');
    }
  }

  sd_Z2f4l6fKycVYScrb(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_unoAVLPII4YchOmm(bh);
      //appendnew_next_sd_Z2f4l6fKycVYScrb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z2f4l6fKycVYScrb');
    }
  }

  sd_unoAVLPII4YchOmm(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_6mGK9KSGfzm7ZcQi(bh);
      //appendnew_next_sd_unoAVLPII4YchOmm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_unoAVLPII4YchOmm');
    }
  }

  async sd_6mGK9KSGfzm7ZcQi(bh) {
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
      bh = this.sd_7wYZ6BZ5Hs3pmFDt(bh);
      //appendnew_next_sd_6mGK9KSGfzm7ZcQi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6mGK9KSGfzm7ZcQi');
    }
  }

  sd_7wYZ6BZ5Hs3pmFDt(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('deathCetificatify', JSON.stringify(page.res));
      this.getFromBackend3();
      bh = this.sd_dnGuHoVleFKMzu4X(bh);
      //appendnew_next_sd_7wYZ6BZ5Hs3pmFDt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7wYZ6BZ5Hs3pmFDt');
    }
  }

  sd_dnGuHoVleFKMzu4X(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Death Certificate has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_dnGuHoVleFKMzu4X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dnGuHoVleFKMzu4X');
    }
  }

  sd_NHCmLOBtpCuQlfep(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_V1HbmZo7pmieVovM(bh);
      //appendnew_next_sd_NHCmLOBtpCuQlfep
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NHCmLOBtpCuQlfep');
    }
  }

  sd_V1HbmZo7pmieVovM(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showdeathCetificatify = false;
      //appendnew_next_sd_V1HbmZo7pmieVovM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V1HbmZo7pmieVovM');
    }
  }

  sd_zOzYuojeT4wvbvTJ(bh) {
    try {
      this.page.deathCetificatifyFile = JSON.parse(
        sessionStorage.getItem('deathCetificatify')
      );
      bh = this.sd_CdS7H7sanKbQ7Mqy(bh);
      //appendnew_next_sd_zOzYuojeT4wvbvTJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zOzYuojeT4wvbvTJ');
    }
  }

  sd_CdS7H7sanKbQ7Mqy(bh) {
    try {
      const page = this.page;
      page.deathCetificatifyfilename = page.deathCetificatifyFile.filename;
      //appendnew_next_sd_CdS7H7sanKbQ7Mqy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CdS7H7sanKbQ7Mqy');
    }
  }

  sd_LXObBzwaRqR61Jqk(bh) {
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

      //appendnew_next_sd_LXObBzwaRqR61Jqk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LXObBzwaRqR61Jqk');
    }
  }

  sd_cxxe2TLoSCvtqnNn(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_kDRrqQKpoOEBcofH(bh);
      //appendnew_next_sd_cxxe2TLoSCvtqnNn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cxxe2TLoSCvtqnNn');
    }
  }

  sd_kDRrqQKpoOEBcofH(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-doc';
      page.loading = true;

      bh = this.sd_AztcCs191XZyomXZ(bh);
      //appendnew_next_sd_kDRrqQKpoOEBcofH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kDRrqQKpoOEBcofH');
    }
  }

  async sd_AztcCs191XZyomXZ(bh) {
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
      bh = this.sd_3UaXhjaZHu9MWu9l(bh);
      //appendnew_next_sd_AztcCs191XZyomXZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AztcCs191XZyomXZ');
    }
  }

  sd_3UaXhjaZHu9MWu9l(bh) {
    try {
      const page = this.page;
      page.loading = true;

      bh = this.sd_bmuO4CjlIKu05DjM(bh);
      //appendnew_next_sd_3UaXhjaZHu9MWu9l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3UaXhjaZHu9MWu9l');
    }
  }

  async sd_bmuO4CjlIKu05DjM(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dGIKNHvYFGxGNEHH(bh);
      } else {
        bh = await this.sd_CSUA7LpeGyXXcJp0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bmuO4CjlIKu05DjM');
    }
  }

  sd_dGIKNHvYFGxGNEHH(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_6Q8v0t0e9SrguOQ4(bh);
      //appendnew_next_sd_dGIKNHvYFGxGNEHH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dGIKNHvYFGxGNEHH');
    }
  }

  sd_6Q8v0t0e9SrguOQ4(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_foH5VmeTCCHcIdoI(bh);
      //appendnew_next_sd_6Q8v0t0e9SrguOQ4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6Q8v0t0e9SrguOQ4');
    }
  }

  async sd_foH5VmeTCCHcIdoI(bh) {
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
      bh = this.sd_YqUCILGT4NrXjhuV(bh);
      //appendnew_next_sd_foH5VmeTCCHcIdoI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_foH5VmeTCCHcIdoI');
    }
  }

  sd_YqUCILGT4NrXjhuV(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      sessionStorage.setItem('bi1663', JSON.stringify(page.res));
      this.getFromBackend4();
      bh = this.sd_V1ZD3Ouxu3nWTqXk(bh);
      //appendnew_next_sd_YqUCILGT4NrXjhuV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YqUCILGT4NrXjhuV');
    }
  }

  sd_V1ZD3Ouxu3nWTqXk(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bi1663 has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_V1ZD3Ouxu3nWTqXk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V1ZD3Ouxu3nWTqXk');
    }
  }

  sd_CSUA7LpeGyXXcJp0(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_OGuXfGlvtWGZ0ZpS(bh);
      //appendnew_next_sd_CSUA7LpeGyXXcJp0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CSUA7LpeGyXXcJp0');
    }
  }

  sd_OGuXfGlvtWGZ0ZpS(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showbi1663 = false;
      //appendnew_next_sd_OGuXfGlvtWGZ0ZpS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OGuXfGlvtWGZ0ZpS');
    }
  }

  sd_V7KAHoxPKIn498z1(bh) {
    try {
      this.page.bi1663File = JSON.parse(sessionStorage.getItem('bi1663'));
      bh = this.sd_Gg074IKkyV8UM9EK(bh);
      //appendnew_next_sd_V7KAHoxPKIn498z1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V7KAHoxPKIn498z1');
    }
  }

  sd_Gg074IKkyV8UM9EK(bh) {
    try {
      const page = this.page;
      page.bi1663filename = page.bi1663File.filename;
      //appendnew_next_sd_Gg074IKkyV8UM9EK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gg074IKkyV8UM9EK');
    }
  }

  sd_R1vMQTyO0uOzv33b(bh) {
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

      //appendnew_next_sd_R1vMQTyO0uOzv33b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R1vMQTyO0uOzv33b');
    }
  }

  sd_ONu5zn9LOqoT8qaM(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_5tCTBxmpsLA3klKs(bh);
      //appendnew_next_sd_ONu5zn9LOqoT8qaM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ONu5zn9LOqoT8qaM');
    }
  }

  sd_5tCTBxmpsLA3klKs(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'verify-bank-statement';
      page.loading = true;

      bh = this.sd_9qynJoGLZsJNWVO6(bh);
      //appendnew_next_sd_5tCTBxmpsLA3klKs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5tCTBxmpsLA3klKs');
    }
  }

  async sd_9qynJoGLZsJNWVO6(bh) {
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
      bh = this.sd_sZPfO2PsIP2h9I7N(bh);
      //appendnew_next_sd_9qynJoGLZsJNWVO6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qynJoGLZsJNWVO6');
    }
  }

  sd_sZPfO2PsIP2h9I7N(bh) {
    try {
      const page = this.page;
      page.loading = true;
      bh = this.sd_PqxywdsOemp5Igql(bh);
      //appendnew_next_sd_sZPfO2PsIP2h9I7N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sZPfO2PsIP2h9I7N');
    }
  }

  async sd_PqxywdsOemp5Igql(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Valid Form',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_eexTfZTyTRa8FjLM(bh);
      } else {
        bh = await this.sd_NyV6mC49f4wqJxFf(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PqxywdsOemp5Igql');
    }
  }

  sd_eexTfZTyTRa8FjLM(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Valid Document', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_E4OwG14i68Eq3UXP(bh);
      //appendnew_next_sd_eexTfZTyTRa8FjLM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eexTfZTyTRa8FjLM');
    }
  }

  sd_E4OwG14i68Eq3UXP(bh) {
    try {
      const page = this.page;
      console.log('response', bh.result);
      bh.url = page.ssdUrl + 'upload';
      page.loading = true;
      page.mes = 'UPLOADING DOCUMENT';

      bh = this.sd_g2R76Jxfr5l49SmZ(bh);
      //appendnew_next_sd_E4OwG14i68Eq3UXP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E4OwG14i68Eq3UXP');
    }
  }

  async sd_g2R76Jxfr5l49SmZ(bh) {
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
      bh = this.sd_nP1bqNxyA7hXoBSZ(bh);
      //appendnew_next_sd_g2R76Jxfr5l49SmZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g2R76Jxfr5l49SmZ');
    }
  }

  sd_nP1bqNxyA7hXoBSZ(bh) {
    try {
      const page = this.page;
      console.log('File uploded', page.res);
      page.mes = 'READING DOCUMENT';
      page.loading = false;
      sessionStorage.setItem('bankDetails', JSON.stringify(page.res));
      this.getFromBackend5();
      page.loading = false;
      bh = this.sd_iZN5m4nyuGYcHyMH(bh);
      //appendnew_next_sd_nP1bqNxyA7hXoBSZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nP1bqNxyA7hXoBSZ');
    }
  }

  sd_iZN5m4nyuGYcHyMH(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Bank Details has been Uploaded', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_iZN5m4nyuGYcHyMH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iZN5m4nyuGYcHyMH');
    }
  }

  sd_NyV6mC49f4wqJxFf(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The document uploaded is Invalid', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_OG0jcXxonpVksHoG(bh);
      //appendnew_next_sd_NyV6mC49f4wqJxFf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NyV6mC49f4wqJxFf');
    }
  }

  sd_OG0jcXxonpVksHoG(bh) {
    try {
      const page = this.page;
      page.loading = false;
      page.showbankDetails = false;
      //appendnew_next_sd_OG0jcXxonpVksHoG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OG0jcXxonpVksHoG');
    }
  }

  sd_7xTXSTkRD7MJjbAf(bh) {
    try {
      this.page.bankDetailsFile = JSON.parse(
        sessionStorage.getItem('bankDetails')
      );
      bh = this.sd_PZgdaN3b5b40uvLb(bh);
      //appendnew_next_sd_7xTXSTkRD7MJjbAf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7xTXSTkRD7MJjbAf');
    }
  }

  sd_PZgdaN3b5b40uvLb(bh) {
    try {
      const page = this.page;
      page.bankDetailsfilename = page.bankDetailsFile.filename;
      //appendnew_next_sd_PZgdaN3b5b40uvLb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PZgdaN3b5b40uvLb');
    }
  }

  sd_neIC7BNFCyHTAt2a(bh) {
    try {
      const page = this.page;
      page.disabled = false;
      //appendnew_next_sd_neIC7BNFCyHTAt2a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_neIC7BNFCyHTAt2a');
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
