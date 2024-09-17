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
  selector: 'bh-edit_profile',
  templateUrl: './edit_profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_profileComponent {
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
      this.sd_JgyRBkRN3y1TgJS6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_JgyRBkRN3y1TgJS6(bh) {
    try {
      bh = this.sd_pLrJikf1GfcXcIfw(bh);
      //appendnew_next_sd_JgyRBkRN3y1TgJS6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JgyRBkRN3y1TgJS6');
    }
  }

  update(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_YLr6e7qTr0v7cYmV(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sgb0uyaJqnMHbB7g');
    }
  }

  openBeneficiries(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_g1dgjskkEOhQ0Tmc(bh);
      //appendnew_next_openBeneficiries
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qrSjqUMEriOPeci5');
    }
  }

  openDependencies(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_djGhPGuxtSAzK2Wb(bh);
      //appendnew_next_openDependencies
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bhEg4zAfCjsW1PyW');
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
      bh = this.sd_hNU2zuRQxVVIIPaf(bh);
      //appendnew_next_idValid
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mgOe7CHJ4H7aWsNR');
    }
  }

  idValid1(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_7KK6d5DepbFPRSBa(bh);
      //appendnew_next_idValid1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NchkdTblJWpUmZUY');
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
      bh = this.sd_m2GFvyreTkUT15zp(bh);
      //appendnew_next_idValid2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_voTE3BXybhEhpiZG');
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
      bh = this.sd_YrBwqNGTJO40L52t(bh);
      //appendnew_next_idValid3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O0NwatE96xK1BABg');
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
      bh = this.sd_iCtDdM4RjHBE7o2O(bh);
      //appendnew_next_idValid4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NThelJdhmr348buh');
    }
  }
  //appendnew_flow_edit_profileComponent_start

  sd_pLrJikf1GfcXcIfw(bh) {
    try {
      bh = this.sd_UHAloZdWiiqtiSEV(bh);
      //appendnew_next_sd_pLrJikf1GfcXcIfw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pLrJikf1GfcXcIfw');
    }
  }

  sd_UHAloZdWiiqtiSEV(bh) {
    try {
      this.page.results = undefined;
      this.page.formdata = undefined;
      this.page.beneficaries1Form = undefined;
      this.page.beneficariesForm = undefined;
      this.page.dependencyForm = undefined;
      this.page.dependency1Form = undefined;
      this.page.dependency2Form = undefined;
      this.page.showbeneficaries1Form = this.page.false;
      this.page.showdependencies1Form = undefined;
      this.page.counter = 1;
      this.page.showdependencies2Form = undefined;
      this.page.hideIcon = true;
      this.page.hideIcon2 = undefined;
      this.page.gender = undefined;
      this.page.gender1 = undefined;
      this.page.gender2 = undefined;
      this.page.gender3 = undefined;
      this.page.gender4 = undefined;
      this.page.gender5 = undefined;
      this.page.showdependenciesForm = undefined;
      bh = this.sd_RnQSoLGbXPuS7ZSE(bh);
      //appendnew_next_sd_UHAloZdWiiqtiSEV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UHAloZdWiiqtiSEV');
    }
  }

  sd_RnQSoLGbXPuS7ZSE(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_S3Jtj7xBUvqZDRcD(bh);
      //appendnew_next_sd_RnQSoLGbXPuS7ZSE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RnQSoLGbXPuS7ZSE');
    }
  }

  sd_S3Jtj7xBUvqZDRcD(bh) {
    try {
      const page = this.page;
      console.log('userData==>', page.userData);
      console.log('depe', page.userData.beneficaries);

      page.ben1 = page.userData.beneficaries[0];
      page.ben2 = page.userData.beneficaries[1];

      //check if the form has data so that we can display the button
      if (page.ben2?.firstName != '') {
        page.showbeneficaries1Form = true;
        page.hideIcon = false;
      } else {
        page.showbeneficaries1Form = false;
      }

      //check if the Dependencyform1 has data so that we can display the button
      // if(page.depe2.firstName != "") {
      //     page.showdependencies1Form = true
      // }
      // console.log("show", page.depe2)

      //console.log("ben1", page.ben1)
      //console.log("ben2", page.ben2)
      page.depe1 = page.userData.dependencies[0];
      page.depe2 = page.userData.dependencies[1];
      page.depe3 = page.userData.dependencies[2];
      //console.log("depe1", page.depe1)

      ///dependencies

      if (
        page.depe1?.firstName !== '' &&
        page.depe2?.firstName !== '' &&
        page.depe3?.firstName !== ''
      ) {
        // Case 1: All forms are not empty
        page.showdependenciesForm = true;
        page.showdependencies1Form = true;
        page.showdependencies2Form = true;
        page.hideIcon2 = false; // Hide the add icon
      } else if (
        page.depe1?.firstName !== '' &&
        page.depe2?.firstName !== '' &&
        page.depe3?.firstName === ''
      ) {
        // Case 2: Form 1 and Form 2 are filled, Form 3 is empty
        page.showdependenciesForm = true;
        page.showdependencies1Form = true;
        page.showdependencies2Form = false;
        page.hideIcon2 = true; // Show the add icon
      } else if (
        page.depe1?.firstName !== '' &&
        page.depe2?.firstName === '' &&
        page.depe3?.firstName === ''
      ) {
        // Case 3: Form 1 is filled, Forms 2 and 3 are empty
        page.showdependenciesForm = true;
        page.showdependencies1Form = false;
        page.showdependencies2Form = false;
        page.hideIcon2 = true; // Show the add icon
      } else if (
        page.depe1?.firstName === '' &&
        page.depe2?.firstName === '' &&
        page.depe3?.firstName === ''
      ) {
        // Case 4: All forms are empty
        page.showdependenciesForm = true; // Show the first empty form (Form 1)
        page.showdependencies1Form = false;
        page.showdependencies2Form = false;
        page.hideIcon2 = true; // Show the add icon
      }

      page.formdata = new FormGroup({
        firstName: new FormControl(page.userData?.firstName, [
          Validators.required,
        ]),
        lastName: new FormControl(page.userData?.lastName || '', [
          Validators.required,
        ]),
        cellphone: new FormControl(page.userData?.cellphone || '', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        idNumber: new FormControl(page.userData?.idNumber || '', [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        gender: new FormControl(page.userData?.gender || '', [
          Validators.required,
        ]),
        address: new FormControl(page.userData?.address || '', [
          Validators.required,
        ]),
        email: new FormControl(page.userData?.email || '', [
          Validators.required,
          Validators.email,
        ]),
        packageType: new FormControl(page.userData?.packageType || '', [
          Validators.required,
        ]),
      });

      console.log('FORM :', page.formdata);

      page.beneficariesForm = new FormGroup({
        firstName: new FormControl(page.ben1?.firstName || '', [
          Validators.required,
        ]),
        lastName: new FormControl(page.ben1?.lastName || '', [
          Validators.required,
        ]),
        idNumber: new FormControl(page.ben1?.idNumber || '', [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        gender: new FormControl(page.ben1?.gender || '', [Validators.required]),
        email: new FormControl(page.ben1?.email || '', [
          Validators.required,
          Validators.email,
        ]),
        cellphone: new FormControl(page.ben1?.cellphone || '', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        relationship: new FormControl(page.ben1?.relationship || '', [
          Validators.required,
        ]),
      });
      page.beneficaries1Form = new FormGroup({
        firstName: new FormControl(page.ben2?.firstName || '', [
          Validators.required,
        ]),
        lastName: new FormControl(page.ben2?.lastName, [Validators.required]),
        idNumber: new FormControl(page.ben2?.idNumber, [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        gender: new FormControl(page.ben2?.gender || '', [Validators.required]),
        email: new FormControl(page.ben2?.email, [
          Validators.required,
          Validators.email,
        ]),
        cellphone: new FormControl(page.ben2?.cellphone, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        relationship: new FormControl(page.ben2?.relationship, [
          Validators.required,
        ]),
      });

      page.dependencyForm = new FormGroup({
        firstName: new FormControl(page.depe1?.firstName, [
          Validators.required,
        ]),
        lastName: new FormControl(page.depe1?.lastName, [Validators.required]),
        idNumber: new FormControl(page.depe1?.idNumber, [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        gender: new FormControl(page.depe1?.gender, [Validators.required]),
      });

      page.dependency1Form = new FormGroup({
        firstName: new FormControl(page.depe2?.firstName, [
          Validators.required,
        ]),
        lastName: new FormControl(page.depe2?.lastName, [Validators.required]),
        gender: new FormControl(page.depe2?.gender, [Validators.required]),
        idNumber: new FormControl(page.depe2?.idNumber, [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
      });

      page.dependency2Form = new FormGroup({
        firstName: new FormControl(page.depe3?.firstName, [
          Validators.required,
        ]),
        lastName: new FormControl(page.depe3?.lastName, [Validators.required]),
        gender: new FormControl(page.depe3?.gender, [Validators.required]),
        idNumber: new FormControl(page.depe3?.idNumber, [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
      });

      //combine beneficaries
      page.beneficary = [
        page.beneficariesForm.value,
        page.beneficaries1Form.value,
      ];

      //console.log("beneficaries", page.beneficaries)

      //combine dependencies
      page.dependencies = [
        page.dependencyForm.value,
        page.dependency1Form.value,
        page.dependency2Form.value,
      ];
      //console.log("dependencies", page.dependencies)

      //The select

      page.package = [
        { value: 'Package 1', viewValue: 'Package 1' },
        { value: 'Package 2', viewValue: 'Package 2' },
        { value: 'Package 3', viewValue: 'Package 3' },
      ];

      // page.gender = [
      //    {value: 'Male', viewValue: 'Male'},
      //    {value: 'Female', viewValue: 'Female'}
      // ];
      //appendnew_next_sd_S3Jtj7xBUvqZDRcD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S3Jtj7xBUvqZDRcD');
    }
  }

  sd_YLr6e7qTr0v7cYmV(bh) {
    try {
      const page = this.page;
      bh.structuredData = page.formdata.value;
      console.log('data', bh.structuredData);

      bh.structuredData.beneficaries = page.beneficary;

      //Beneficaries
      bh.ben1 = bh.structuredData.beneficaries[0];
      page.ben2 = bh.structuredData.beneficaries[1];
      console.log("Let's see Juska", bh.structuredData);
      page.ben2 = page.beneficaries1Form.value;
      bh.structuredData.beneficaries[1] = page.ben2;

      //Dependencies
      bh.structuredData.dependencies = page.dependencies;

      page.depe2 = page.dependency1Form.value;
      bh.structuredData.dependencies[1] = page.depe2;

      page.depe3 = page.dependency2Form.value;
      bh.structuredData.dependencies[2] = page.depe3;

      bh = this.sd_zS7b1NmCmWYBlQFq(bh);
      //appendnew_next_sd_YLr6e7qTr0v7cYmV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YLr6e7qTr0v7cYmV');
    }
  }

  sd_zS7b1NmCmWYBlQFq(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_pr7tgd1gK1w7AKTA(bh);
      //appendnew_next_sd_zS7b1NmCmWYBlQFq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zS7b1NmCmWYBlQFq');
    }
  }

  sd_pr7tgd1gK1w7AKTA(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update-user/' + `${page.userData._id}`;

      bh = this.sd_H3Y1QPVP8mkHnjCk(bh);
      //appendnew_next_sd_pr7tgd1gK1w7AKTA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pr7tgd1gK1w7AKTA');
    }
  }

  async sd_H3Y1QPVP8mkHnjCk(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.ben2,
      };
      this.page.result2 = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_C7btWIkSPPi4vDXM(bh);
      //appendnew_next_sd_H3Y1QPVP8mkHnjCk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H3Y1QPVP8mkHnjCk');
    }
  }

  async sd_C7btWIkSPPi4vDXM(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.ben1,
      };
      this.page.result1 = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_pcFebE53orviGldn(bh);
      //appendnew_next_sd_C7btWIkSPPi4vDXM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C7btWIkSPPi4vDXM');
    }
  }

  async sd_pcFebE53orviGldn(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.structuredData,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_GjKcbwDGAHK9WeuX(bh);
      //appendnew_next_sd_pcFebE53orviGldn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pcFebE53orviGldn');
    }
  }

  sd_GjKcbwDGAHK9WeuX(bh) {
    try {
      const page = this.page;
      bh.structuredData.role = ' client';

      if (page.results.acknowledged == true) {
        sessionStorage.setItem('user', JSON.stringify(bh.structuredData));
      }
      bh = this.sd_G19PY66JzVKcGxtc(bh);
      //appendnew_next_sd_GjKcbwDGAHK9WeuX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GjKcbwDGAHK9WeuX');
    }
  }

  async sd_G19PY66JzVKcGxtc(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/client_profile');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_nxWSj9bRtG2lyhli(bh);
      //appendnew_next_sd_G19PY66JzVKcGxtc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G19PY66JzVKcGxtc');
    }
  }

  sd_nxWSj9bRtG2lyhli(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Profile Update', 'OK', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_nxWSj9bRtG2lyhli
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nxWSj9bRtG2lyhli');
    }
  }

  sd_g1dgjskkEOhQ0Tmc(bh) {
    try {
      const page = this.page;
      page.showbeneficaries1Form = true;
      page.hideIcon = false;
      console.log('form', page.showbeneficaries1Form);

      //appendnew_next_sd_g1dgjskkEOhQ0Tmc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g1dgjskkEOhQ0Tmc');
    }
  }

  sd_djGhPGuxtSAzK2Wb(bh) {
    try {
      const page = this.page;
      page.showdependenciesForm = true;

      console.log('form', page.showdependencies1Form);

      page.counter++;
      if (page.counter === 2) {
        page.showdependencies1Form = true;
      } else if (page.counter === 3) {
        page.showdependencies2Form = true;
        page.hideIcon2 = false;
      }

      //appendnew_next_sd_djGhPGuxtSAzK2Wb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_djGhPGuxtSAzK2Wb');
    }
  }

  sd_hNU2zuRQxVVIIPaf(bh) {
    try {
      const page = this.page;
      let id = page.beneficariesForm.controls.idNumber.value;
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
        page.beneficariesForm.patchValue({
          gender: page.gender,
        });
        // page.clientForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender = 'Male';
        page.beneficariesForm.patchValue({
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
      console.log('valid id', page.beneficariesForm.controls.idNumber.value);
      //appendnew_next_sd_hNU2zuRQxVVIIPaf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hNU2zuRQxVVIIPaf');
    }
  }

  sd_7KK6d5DepbFPRSBa(bh) {
    try {
      const page = this.page;
      let id = page.beneficaries1Form.controls.idNumber.value;
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
        page.gender1 = 'Female';
        page.beneficaries1Form.patchValue({
          gender: page.gender1,
        });
        page.beneficaries1Form.controls.gender.value = 'Female';
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender1 = 'Male';
        page.beneficaries1Form.patchValue({
          gender: page.gender1,
        });
        page.beneficaries1Form.controls.gender.value = 'Male';
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
      console.log('valid id', page.beneficaries1Form.controls.idNumber.value);
      //appendnew_next_sd_7KK6d5DepbFPRSBa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7KK6d5DepbFPRSBa');
    }
  }

  sd_m2GFvyreTkUT15zp(bh) {
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
        page.gender2 = 'Female';
        page.dependencyForm.patchValue({
          gender: page.gender2,
        });
        // page.clientForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender2 = 'Male';
        page.dependencyForm.patchValue({
          gender: page.gender2,
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
      console.log('valid id', page.dependencyForm.controls.idNumber.value);
      //appendnew_next_sd_m2GFvyreTkUT15zp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m2GFvyreTkUT15zp');
    }
  }

  sd_YrBwqNGTJO40L52t(bh) {
    try {
      const page = this.page;
      let id = page.dependency1Form.controls.idNumber.value;
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
        page.dependency1Form.patchValue({
          gender: page.gender3,
        });
        // page.clientForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender3 = 'Male';
        page.dependency1Form.patchValue({
          gender: page.gender3,
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
      console.log('valid id', page.dependency1Form.controls.idNumber.value);
      //appendnew_next_sd_YrBwqNGTJO40L52t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YrBwqNGTJO40L52t');
    }
  }

  sd_iCtDdM4RjHBE7o2O(bh) {
    try {
      const page = this.page;
      let id = page.dependency2Form.controls.idNumber.value;
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
        page.dependency2Form.patchValue({
          gender: page.gender4,
        });
        // page.clientForm.controls.gender.value = "Female"
      } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
        console.log('Male');
        page.gender4 = 'Male';
        page.dependency2Form.patchValue({
          gender: page.gender4,
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
      console.log('valid id', page.dependency2Form.controls.idNumber.value);
      //appendnew_next_sd_iCtDdM4RjHBE7o2O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iCtDdM4RjHBE7o2O');
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
  //appendnew_flow_edit_profileComponent_Catch
}
