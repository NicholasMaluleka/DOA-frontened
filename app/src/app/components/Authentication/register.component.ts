// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
import { Component, Injector, ViewChild } from '@angular/core'; //_splitter_
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
import { Notifications } from 'app/sd-services/Notifications'; //_splitter_
import { randomNumber } from 'app/sd-services/randomNumber'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class registerComponent {
  @ViewChild('stepper')
  public stepper: any = null;
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
      this.sd_XNtrphGkAEvTnJkY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XNtrphGkAEvTnJkY(bh) {
    try {
      bh = this.sd_21M8r6uomCRnf45y(bh);
      //appendnew_next_sd_XNtrphGkAEvTnJkY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XNtrphGkAEvTnJkY');
    }
  }

  upload(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_r8ZA4xPfv6W0TiV1(bh);
      //appendnew_next_upload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4jpHOcBeJ9oMy5gC');
    }
  }

  showBeneficaryForm2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_78h5y7Mch4eGS5T9(bh);
      //appendnew_next_showBeneficaryForm2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4yeHIdvBwIqJ34hG');
    }
  }

  showDependencyForm2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NscpuoQXRbfmWzVJ(bh);
      //appendnew_next_showDependencyForm2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZIboZ8CwblF94SEp');
    }
  }

  confirm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wKoZboaQVHIPkQvv(bh);
      //appendnew_next_confirm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfn5TNjxg1EDrkux');
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
      bh = this.sd_RqtM6SLXw5cveimP(bh);
      //appendnew_next_goToBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8TYG7d0QanhgKFMo');
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
      bh = this.sd_Piy2OPiATT4VA7Dk(bh);
      //appendnew_next_getFromBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZSLYaSB5AEVYwkSZ');
    }
  }

  idValid(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2mzdjThkJ5J0te6L(bh);
      //appendnew_next_idValid
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0pzHhF3BmDhHQBVP');
    }
  }

  validId(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2VvuA9sQP6wLSv4c(bh);
      //appendnew_next_validId
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_edYEHE2MoZfczlQY');
    }
  }

  idValid2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_1kUDPYwgeCpnEQpZ(bh);
      //appendnew_next_idValid2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F39mDdQqOqsrZBzc');
    }
  }

  idValid3(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Y01WN32UHn5IAx5g(bh);
      //appendnew_next_idValid3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OxHE7eocWeyXElH8');
    }
  }

  idValid4(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tr46ebRFABCAVNMW(bh);
      //appendnew_next_idValid4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yPduP4FKyE9ScUlV');
    }
  }

  idValid5(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Mmx2Yhw2yiEdWi6o(bh);
      //appendnew_next_idValid5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0feBWXbH4GfbEFPj');
    }
  }

  idValid6(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_V1uf4sm5LD8oOfh4(bh);
      //appendnew_next_idValid6
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5l06VeCA4XVvuonM');
    }
  }

  showmsg(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ujwsbDV8Krrs0ert(bh);
      //appendnew_next_showmsg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EJPnHK5FvoFnOVor');
    }
  }

  checkClientIfExists(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { found: undefined };
      bh = this.sd_XCInRNlQncgb7N8d(bh);
      //appendnew_next_checkClientIfExists
      return bh.local.found;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rIqZaBUYQzyNklXN');
    }
  }

  showFeedback(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WF7SEDIdIMfAqLeD(bh);
      //appendnew_next_showFeedback
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cn24mn0H6lpBFLYp');
    }
  }

  setPayDate(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hErIPOFkyiRU6ocp(bh);
      //appendnew_next_setPayDate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HIREFTn0oG6aIU5c');
    }
  }
  //appendnew_flow_registerComponent_start

  sd_21M8r6uomCRnf45y(bh) {
    try {
      bh = this.sd_7K2noVNldq6MAAbT(bh);
      //appendnew_next_sd_21M8r6uomCRnf45y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_21M8r6uomCRnf45y');
    }
  }

  sd_7K2noVNldq6MAAbT(bh) {
    try {
      this.page.showBeneficaryForm2 = false;
      this.page.showDependencyForm = false;
      this.page.counter = 0;
      this.page.showDependencyForm1 = false;
      this.page.hideIcon = true;
      this.page.hideIcon2 = true;
      this.page.gender = undefined;
      this.page.loading = false;
      this.page.gender2 = undefined;
      this.page.gender3 = undefined;
      this.page.gender4 = undefined;
      this.page.gender5 = undefined;
      this.page.gender6 = undefined;
      this.page.feedback = undefined;
      this.page.paymentDates = undefined;
      bh = this.sd_qjesZ9T9zyxXQtfe(bh);
      //appendnew_next_sd_7K2noVNldq6MAAbT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7K2noVNldq6MAAbT');
    }
  }

  sd_qjesZ9T9zyxXQtfe(bh) {
    try {
      const page = this.page;
      bh.path = 'get-users';

      page.fileForm = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });

      page.beneficaryForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl(''),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
        cellphone: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        relationship: new FormControl('', [Validators.required]),
      });

      page.beneficaryForm2 = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl(''),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
        cellphone: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        relationship: new FormControl('', [Validators.required]),
      });

      page.dependencyForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl(''),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
      });

      page.dependencyForm2 = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl(''),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
      });

      page.dependencyForm3 = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl(''),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
      });

      page.clientForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl(''),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
        cellphone: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        address: new FormControl('', [Validators.required]),
        packageType: new FormControl('', [Validators.required]),
        paymentDate: new FormControl('', [Validators.required]),
        file2: new FormControl('', [Validators.required]),
        file: page.fileForm,
      });

      console.log('FORM: ', page.clientForm);

      page.package = [
        { value: 'Package 1', viewValue: 'Package 1' },
        { value: 'Package 2', viewValue: 'Package 2' },
        { value: 'Package 3', viewValue: 'Package 3' },
      ];

      page.genders = [
        { value: 'Male', viewValue: 'Male' },
        { value: 'Female', viewValue: 'Female' },
      ];

      page.paymentDates = [
        { value: 1, viewValue: '1st' },
        { value: 5, viewValue: '5th' },
        { value: 15, viewValue: '15th' },
        { value: 25, viewValue: '25th' },
      ];
      bh = this.sd_hsNZ5en4D8hP7I5H(bh);
      //appendnew_next_sd_qjesZ9T9zyxXQtfe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qjesZ9T9zyxXQtfe');
    }
  }

  async sd_hsNZ5en4D8hP7I5H(bh) {
    try {
      const NotificationsInstance: Notifications =
        this.__page_injector__.get(Notifications);

      let outputVariables = await NotificationsInstance.genericGet(bh.path);
      this.page.clients = outputVariables.local.data;

      this.sd_2FFxDGhNOLQvZzfY(bh);
      //appendnew_next_sd_hsNZ5en4D8hP7I5H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hsNZ5en4D8hP7I5H');
    }
  }

  sd_2FFxDGhNOLQvZzfY(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.clients);
      //appendnew_next_sd_2FFxDGhNOLQvZzfY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2FFxDGhNOLQvZzfY');
    }
  }

  sd_r8ZA4xPfv6W0TiV1(bh) {
    try {
      let outputVariables = this.checkClientIfExists();
      this.page.found = outputVariables;

      bh = this.sd_SRC5bY330I8jkZdR(bh);
      //appendnew_next_sd_r8ZA4xPfv6W0TiV1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r8ZA4xPfv6W0TiV1');
    }
  }

  async sd_SRC5bY330I8jkZdR(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          this.page.found,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_C9LXe6h3lxPGUYhL(bh);
      } else {
        bh = await this.sd_6eYy90OWTPwkRgDi(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SRC5bY330I8jkZdR');
    }
  }

  sd_C9LXe6h3lxPGUYhL(bh) {
    try {
      const page = this.page;
      bh.upload = document.getElementById('upload') as HTMLInputElement;
      if (bh.upload) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.validId();
          }
        });
      }

      //appendnew_next_sd_C9LXe6h3lxPGUYhL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C9LXe6h3lxPGUYhL');
    }
  }

  sd_6eYy90OWTPwkRgDi(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(this.page.feedback, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_6eYy90OWTPwkRgDi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6eYy90OWTPwkRgDi');
    }
  }

  sd_78h5y7Mch4eGS5T9(bh) {
    try {
      const page = this.page;
      page.showBeneficaryForm2 = true;
      page.hideIcon = false;
      //appendnew_next_sd_78h5y7Mch4eGS5T9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_78h5y7Mch4eGS5T9');
    }
  }

  sd_NscpuoQXRbfmWzVJ(bh) {
    try {
      const page = this.page;
      page.showDependencyForm = true;
      page.counter++;
      if (page.counter == 2) {
        page.showDependencyForm1 = true;
        page.hideIcon2 = false;
      }
      //appendnew_next_sd_NscpuoQXRbfmWzVJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NscpuoQXRbfmWzVJ');
    }
  }

  sd_wKoZboaQVHIPkQvv(bh) {
    try {
      const page = this.page;
      page.loading = true;

      console.log('LOADIN: ', page.loading);
      bh = this.sd_5FvUEd3TbUxOODvU(bh);
      //appendnew_next_sd_wKoZboaQVHIPkQvv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wKoZboaQVHIPkQvv');
    }
  }

  sd_5FvUEd3TbUxOODvU(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_uaLP5pYLb4eJZafw(bh);
      //appendnew_next_sd_5FvUEd3TbUxOODvU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5FvUEd3TbUxOODvU');
    }
  }

  async sd_uaLP5pYLb4eJZafw(bh) {
    try {
      const randomNumberInstance: randomNumber =
        this.__page_injector__.get(randomNumber);

      let outputVariables = await randomNumberInstance.generateRandomNumber(
        this.page.clientForm.email
      );
      bh.random = outputVariables.local.random;

      bh = this.sd_E3iTiEBecw7LpUwh(bh);
      //appendnew_next_sd_uaLP5pYLb4eJZafw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaLP5pYLb4eJZafw');
    }
  }

  async sd_E3iTiEBecw7LpUwh(bh) {
    try {
      const randomNumberInstance: randomNumber =
        this.__page_injector__.get(randomNumber);

      let outputVariables = await randomNumberInstance.generateRandomNumber2(
        this.page.clientForm.email
      );
      bh.random2 = outputVariables.local.random;

      bh = this.sd_lL2rQ9BIoBqeZaCn(bh);
      //appendnew_next_sd_E3iTiEBecw7LpUwh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E3iTiEBecw7LpUwh');
    }
  }

  sd_lL2rQ9BIoBqeZaCn(bh) {
    try {
      const page = this.page;
      page.clientForm.value.file._id = page.userFile._id;
      page.clientForm.value.file.filename = page.userFile.filename;
      page.clientForm.value.file.length = page.userFile.length;
      page.clientForm.value.file.chunkSize = page.userFile.chunkSize;

      bh.url = page.ssdUrl + 'register';

      delete page.clientForm.file2;

      bh.body = page.clientForm.value;
      bh.body.role = 'client';
      bh.body.policyNumber = bh.random;
      bh.body.password = bh.random2.toString();
      bh.body.beneficaries = !page.beneficaryForm2.value.firstName
        ? [page.beneficaryForm.value]
        : [page.beneficaryForm.value, page.beneficaryForm2.value];
      bh.body.dependencies = !page.dependencyForm2.value.firstName
        ? [page.dependencyForm.value]
        : !page.dependencyForm3.value.firstName
        ? [page.dependencyForm.value, page.dependencyForm2.value]
        : [
            page.dependencyForm.value,
            page.dependencyForm2.value,
            page.dependencyForm3.value,
          ];

      bh = this.sd_feAbYysgRL7fgGGm(bh);
      //appendnew_next_sd_lL2rQ9BIoBqeZaCn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lL2rQ9BIoBqeZaCn');
    }
  }

  async sd_feAbYysgRL7fgGGm(bh) {
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
      bh = this.sd_QnaW4yCDpoY9Cu3b(bh);
      //appendnew_next_sd_feAbYysgRL7fgGGm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_feAbYysgRL7fgGGm');
    }
  }

  sd_QnaW4yCDpoY9Cu3b(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Client Registered', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_IKDCeaKDglhchiOD(bh);
      //appendnew_next_sd_QnaW4yCDpoY9Cu3b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QnaW4yCDpoY9Cu3b');
    }
  }

  async sd_IKDCeaKDglhchiOD(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_IKDCeaKDglhchiOD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IKDCeaKDglhchiOD');
    }
  }

  sd_RqtM6SLXw5cveimP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_XSPvXcLY8nKgPJZk(bh);
      //appendnew_next_sd_RqtM6SLXw5cveimP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RqtM6SLXw5cveimP');
    }
  }

  sd_XSPvXcLY8nKgPJZk(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';
      bh = this.sd_Z0u2uGd5YO9ydjps(bh);
      //appendnew_next_sd_XSPvXcLY8nKgPJZk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XSPvXcLY8nKgPJZk');
    }
  }

  async sd_Z0u2uGd5YO9ydjps(bh) {
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
      bh = this.sd_vR3yJnYv3XKsLrq8(bh);
      //appendnew_next_sd_Z0u2uGd5YO9ydjps
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z0u2uGd5YO9ydjps');
    }
  }

  sd_vR3yJnYv3XKsLrq8(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('file', JSON.stringify(bh.result));
      this.getFromBackend();
      //appendnew_next_sd_vR3yJnYv3XKsLrq8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vR3yJnYv3XKsLrq8');
    }
  }

  sd_Piy2OPiATT4VA7Dk(bh) {
    try {
      this.page.userFile = JSON.parse(sessionStorage.getItem('file'));
      //appendnew_next_sd_Piy2OPiATT4VA7Dk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Piy2OPiATT4VA7Dk');
    }
  }

  sd_2mzdjThkJ5J0te6L(bh) {
    try {
      const page = this.page;
      let id = page.clientForm.controls.idNumber.value;
      let DOB = id.substring(0, 6);
      let year = DOB.substring(0, 2);
      let yeardigit = year.substring(0, 1);
      let yeardigit2 = year.substring(1, 2);
      let month = DOB.substring(2, 4);
      let day = DOB.substring(4, 6);
      let gender = id.substring(6, 10);
      let country = id.substring(10, 11);
      let eight = id.substring(11, 12);

      //year
      if (Number(yeardigit) < 0) {
        console.log('Invalid ID number');
        return;
      }

      if (Number(yeardigit2) < 0) {
        console.log('Invalid ID number');
        return;
      }
      //month
      if (Number(month) <= 12 && Number(month) >= 1) {
        // valid
        console.log('valid month');
      } else {
        console.log('Invalid ID month');
        return;
      }
      //day
      if (Number(day) <= 31 && Number(day) >= 1) {
        // valid
        console.log('valid day');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //gender
      if (Number(gender) <= 4999 && Number(gender) >= 0) {
        console.log('Female');
        page.gender = 'Female';
        page.clientForm.patchValue({
          gender: page.gender,
        });
        // page.clientForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender = 'Male';
        page.clientForm.patchValue({
          gender: page.gender,
        });
        // page.clientForm.controls.gender.value = "Male"
      } else {
        alert('Invalid ID number');
        return;
      }

      //country
      if (Number(country) === 1) {
        console.log('citizen');
      } else if (Number(country) === 0) {
        console.log('South Africa');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //eight
      if (Number(eight) === 8) {
        // valid
        console.log('valid day');
      } else {
        alert('Invalid ID number');
        return;
      }
      console.log('valid id', page.clientForm.controls.idNumber.value);
      //appendnew_next_sd_2mzdjThkJ5J0te6L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2mzdjThkJ5J0te6L');
    }
  }

  sd_2VvuA9sQP6wLSv4c(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Joet7d2z5ZGhbPVA(bh);
      //appendnew_next_sd_2VvuA9sQP6wLSv4c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2VvuA9sQP6wLSv4c');
    }
  }

  sd_Joet7d2z5ZGhbPVA(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'validate-id';
      page.loading = true;

      bh = this.sd_xmrSywhjgd5I6fVU(bh);
      //appendnew_next_sd_Joet7d2z5ZGhbPVA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Joet7d2z5ZGhbPVA');
    }
  }

  async sd_xmrSywhjgd5I6fVU(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_FZ6WMQY1voina3hL(bh);
      //appendnew_next_sd_xmrSywhjgd5I6fVU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xmrSywhjgd5I6fVU');
    }
  }

  sd_FZ6WMQY1voina3hL(bh) {
    try {
      const page = this.page;
      page.loading = false;

      bh.message1 = bh.results.message;
      this.showmsg();
      this.goToBackend();

      //appendnew_next_sd_FZ6WMQY1voina3hL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FZ6WMQY1voina3hL');
    }
  }

  sd_1kUDPYwgeCpnEQpZ(bh) {
    try {
      const page = this.page;
      let id = page.beneficaryForm.controls.idNumber.value;
      let DOB = id.substring(0, 6);
      let year = DOB.substring(0, 2);
      let yeardigit = year.substring(0, 1);
      let yeardigit2 = year.substring(1, 2);
      let month = DOB.substring(2, 4);
      let day = DOB.substring(4, 6);
      let gender = id.substring(6, 10);
      let country = id.substring(10, 11);
      let eight = id.substring(11, 12);

      //year
      if (Number(yeardigit) < 0) {
        console.log('Invalid ID number');
        return;
      }

      if (Number(yeardigit2) < 0) {
        console.log('Invalid ID number');
        return;
      }
      //month
      if (Number(month) <= 12 && Number(month) >= 1) {
        // valid
        console.log('valid month');
      } else {
        console.log('Invalid ID month');
        return;
      }
      //day
      if (Number(day) <= 31 && Number(day) >= 1) {
        // valid
        console.log('valid day');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //gender
      if (Number(gender) <= 4999 && Number(gender) >= 0) {
        console.log('Female');
        page.gender2 = 'Female';
        page.beneficaryForm.patchValue({
          gender: page.gender2,
        });
        // page.beneficaryForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender2 = 'Male';
        page.beneficaryForm.patchValue({
          gender: page.gender2,
        });
        // page.beneficaryForm.controls.gender.value = "Male"
      } else {
        alert('Invalid ID number');
        return;
      }

      //country
      if (Number(country) === 1) {
        console.log('citizen');
      } else if (Number(country) === 0) {
        console.log('South Africa');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //eight
      if (Number(eight) === 8) {
        // valid
        console.log('valid day');
      } else {
        alert('Invalid ID number');
        return;
      }
      console.log('valid id', page.beneficaryForm.controls.idNumber.value);
      //appendnew_next_sd_1kUDPYwgeCpnEQpZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1kUDPYwgeCpnEQpZ');
    }
  }

  sd_Y01WN32UHn5IAx5g(bh) {
    try {
      const page = this.page;
      let id = page.beneficaryForm2.controls.idNumber.value;
      let DOB = id.substring(0, 6);
      let year = DOB.substring(0, 2);
      let yeardigit = year.substring(0, 1);
      let yeardigit2 = year.substring(1, 2);
      let month = DOB.substring(2, 4);
      let day = DOB.substring(4, 6);
      let gender = id.substring(6, 10);
      let country = id.substring(10, 11);
      let eight = id.substring(11, 12);

      //year
      if (Number(yeardigit) < 0) {
        console.log('Invalid ID number');
        return;
      }

      if (Number(yeardigit2) < 0) {
        console.log('Invalid ID number');
        return;
      }
      //month
      if (Number(month) <= 12 && Number(month) >= 1) {
        // valid
        console.log('valid month');
      } else {
        console.log('Invalid ID month');
        return;
      }
      //day
      if (Number(day) <= 31 && Number(day) >= 1) {
        // valid
        console.log('valid day');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //gender
      if (Number(gender) <= 4999 && Number(gender) >= 0) {
        console.log('Female');
        page.gender3 = 'Female';
        page.beneficaryForm2.patchValue({
          gender: page.gender3,
        });
        // page.beneficaryForm2.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender3 = 'Male';
        page.beneficaryForm2.patchValue({
          gender: page.gender3,
        });
        // page.beneficaryForm2.controls.gender.value = "Male"
      } else {
        alert('Invalid ID number');
        return;
      }

      //country
      if (Number(country) === 1) {
        console.log('citizen');
      } else if (Number(country) === 0) {
        console.log('South Africa');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //eight
      if (Number(eight) === 8) {
        // valid
        console.log('valid day');
      } else {
        alert('Invalid ID number');
        return;
      }
      console.log('valid id', page.beneficaryForm2.controls.idNumber.value);
      //appendnew_next_sd_Y01WN32UHn5IAx5g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y01WN32UHn5IAx5g');
    }
  }

  sd_tr46ebRFABCAVNMW(bh) {
    try {
      const page = this.page;
      let id = page.dependencyForm.controls.idNumber.value;
      let DOB = id.substring(0, 6);
      let year = DOB.substring(0, 2);
      let yeardigit = year.substring(0, 1);
      let yeardigit2 = year.substring(1, 2);
      let month = DOB.substring(2, 4);
      let day = DOB.substring(4, 6);
      let gender = id.substring(6, 10);
      let country = id.substring(10, 11);
      let eight = id.substring(11, 12);

      //year
      if (Number(yeardigit) < 0) {
        console.log('Invalid ID number');
        return;
      }

      if (Number(yeardigit2) < 0) {
        console.log('Invalid ID number');
        return;
      }
      //month
      if (Number(month) <= 12 && Number(month) >= 1) {
        // valid
        console.log('valid month');
      } else {
        console.log('Invalid ID month');
        return;
      }
      //day
      if (Number(day) <= 31 && Number(day) >= 1) {
        // valid
        console.log('valid day');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //gender
      if (Number(gender) <= 4999 && Number(gender) >= 0) {
        console.log('Female');
        page.gender4 = 'Female';
        page.dependencyForm.patchValue({
          gender: page.gender4,
        });
        // page.dependencyForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender4 = 'Male';
        page.dependencyForm.patchValue({
          gender: page.gender4,
        });
        // page.dependencyForm.controls.gender.value = "Male"
      } else {
        alert('Invalid ID number');
        return;
      }

      //country
      if (Number(country) === 1) {
        console.log('citizen');
      } else if (Number(country) === 0) {
        console.log('South Africa');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //eight
      if (Number(eight) === 8) {
        // valid
        console.log('valid day');
      } else {
        alert('Invalid ID number');
        return;
      }
      console.log('valid id', page.dependencyForm.controls.idNumber.value);
      //appendnew_next_sd_tr46ebRFABCAVNMW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tr46ebRFABCAVNMW');
    }
  }

  sd_Mmx2Yhw2yiEdWi6o(bh) {
    try {
      const page = this.page;
      let id = page.dependencyForm2.controls.idNumber.value;
      let DOB = id.substring(0, 6);
      let year = DOB.substring(0, 2);
      let yeardigit = year.substring(0, 1);
      let yeardigit2 = year.substring(1, 2);
      let month = DOB.substring(2, 4);
      let day = DOB.substring(4, 6);
      let gender = id.substring(6, 10);
      let country = id.substring(10, 11);
      let eight = id.substring(11, 12);

      //year
      if (Number(yeardigit) < 0) {
        console.log('Invalid ID number');
        return;
      }

      if (Number(yeardigit2) < 0) {
        console.log('Invalid ID number');
        return;
      }
      //month
      if (Number(month) <= 12 && Number(month) >= 1) {
        // valid
        console.log('valid month');
      } else {
        console.log('Invalid ID month');
        return;
      }
      //day
      if (Number(day) <= 31 && Number(day) >= 1) {
        // valid
        console.log('valid day');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //gender
      if (Number(gender) <= 4999 && Number(gender) >= 0) {
        console.log('Female');
        page.gender5 = 'Female';
        page.dependencyForm2.patchValue({
          gender: page.gender5,
        });
        // page.dependencyForm2.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender5 = 'Male';
        page.dependencyForm2.patchValue({
          gender: page.gender5,
        });
        // page.dependencyForm2.controls.gender.value = "Male"
      } else {
        alert('Invalid ID number');
        return;
      }

      //country
      if (Number(country) === 1) {
        console.log('citizen');
      } else if (Number(country) === 0) {
        console.log('South Africa');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //eight
      if (Number(eight) === 8) {
        // valid
        console.log('valid day');
      } else {
        alert('Invalid ID number');
        return;
      }
      console.log('valid id', page.dependencyForm2.controls.idNumber.value);
      //appendnew_next_sd_Mmx2Yhw2yiEdWi6o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mmx2Yhw2yiEdWi6o');
    }
  }

  sd_V1uf4sm5LD8oOfh4(bh) {
    try {
      const page = this.page;
      let id = page.dependencyForm3.controls.idNumber.value;
      let DOB = id.substring(0, 6);
      let year = DOB.substring(0, 2);
      let yeardigit = year.substring(0, 1);
      let yeardigit2 = year.substring(1, 2);
      let month = DOB.substring(2, 4);
      let day = DOB.substring(4, 6);
      let gender = id.substring(6, 10);
      let country = id.substring(10, 11);
      let eight = id.substring(11, 12);

      //year
      if (Number(yeardigit) < 0) {
        console.log('Invalid ID number');
        return;
      }

      if (Number(yeardigit2) < 0) {
        console.log('Invalid ID number');
        return;
      }
      //month
      if (Number(month) <= 12 && Number(month) >= 1) {
        // valid
        console.log('valid month');
      } else {
        console.log('Invalid ID month');
        return;
      }
      //day
      if (Number(day) <= 31 && Number(day) >= 1) {
        // valid
        console.log('valid day');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //gender
      if (Number(gender) <= 4999 && Number(gender) >= 0) {
        console.log('Female');
        page.gender6 = 'Female';
        page.dependencyForm3.patchValue({
          gender: page.gender6,
        });
        // page.dependencyForm3.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender6 = 'Male';
        page.dependencyForm3.patchValue({
          gender: page.gender6,
        });
        // page.dependencyForm3.controls.gender.value = "Male"
      } else {
        alert('Invalid ID number');
        return;
      }

      //country
      if (Number(country) === 1) {
        console.log('citizen');
      } else if (Number(country) === 0) {
        console.log('South Africa');
      } else {
        console.log('Invalid ID number');
        return;
      }

      //eight
      if (Number(eight) === 8) {
        // valid
        console.log('valid day');
      } else {
        alert('Invalid ID number');
        return;
      }
      console.log('valid id', page.dependencyForm3.controls.idNumber.value);
      //appendnew_next_sd_V1uf4sm5LD8oOfh4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V1uf4sm5LD8oOfh4');
    }
  }

  sd_ujwsbDV8Krrs0ert(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ID is valid', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_ujwsbDV8Krrs0ert
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ujwsbDV8Krrs0ert');
    }
  }

  sd_XCInRNlQncgb7N8d(bh) {
    try {
      const page = this.page;
      let clientForm = page.clientForm.value;

      console.log('CLIENT FORM: ', clientForm);

      bh.local.found = page.clients.filter((client) => {
        if (
          client.email == clientForm.email &&
          client.idNumber == clientForm.idNumber
        ) {
          page.feedback =
            'CLIENT WITH THE SUPPLIED ID NUMBER AND EMAIL EXISTS. ';
          return client;
        }
        if (client.idNumber == clientForm.idNumber) {
          page.feedback = 'CLIENT WITH THE SUPPLIED ID NUMBER EXISTS. ';
          return client;
        }
        if (client.email == clientForm.email) {
          page.feedback = 'CLIENT WITH THE SUPPLIED EMAIL EXISTS. ';
          return client;
        }
      });

      console.log('found: ', bh.local.found);
      //appendnew_next_sd_XCInRNlQncgb7N8d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XCInRNlQncgb7N8d');
    }
  }

  sd_WF7SEDIdIMfAqLeD(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        stepper: this.stepper,
      });
      bh = this.sd_1K5TUH2VquggXj9W(bh);
      //appendnew_next_sd_WF7SEDIdIMfAqLeD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WF7SEDIdIMfAqLeD');
    }
  }

  sd_1K5TUH2VquggXj9W(bh) {
    try {
      let outputVariables = this.checkClientIfExists();
      bh.found = outputVariables;

      bh = this.sd_PosCwUYRxSSmEloq(bh);
      //appendnew_next_sd_1K5TUH2VquggXj9W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1K5TUH2VquggXj9W');
    }
  }

  async sd_PosCwUYRxSSmEloq(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          bh.found,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_RNocM9C3WAPuxkb7(bh);
      } else {
        bh = await this.sd_EDBlE08Rsskj3R9e(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PosCwUYRxSSmEloq');
    }
  }

  sd_RNocM9C3WAPuxkb7(bh) {
    try {
      const page = this.page;
      console.log('STEPPER: ', bh.pageViews.stepper);

      bh.pageViews.stepper.next();
      //appendnew_next_sd_RNocM9C3WAPuxkb7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RNocM9C3WAPuxkb7');
    }
  }

  sd_EDBlE08Rsskj3R9e(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(this.page.feedback, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_EDBlE08Rsskj3R9e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EDBlE08Rsskj3R9e');
    }
  }

  sd_hErIPOFkyiRU6ocp(bh) {
    try {
      const page = this.page;
      const ctrlValue = page.clientForm.controls.paymentDate.value;

      let date = new Date().setDate(ctrlValue);

      let newDate = new Date(date);

      console.log('VAL: ', newDate);

      //appendnew_next_sd_hErIPOFkyiRU6ocp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hErIPOFkyiRU6ocp');
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
  //appendnew_flow_registerComponent_Catch
}
