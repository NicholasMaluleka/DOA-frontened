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
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-edit_personalInfo',
  templateUrl: './edit_personalInfo.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_personalInfoComponent {
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
      this.sd_GiOL8QuTONvO1QYL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GiOL8QuTONvO1QYL(bh) {
    try {
      bh = this.sd_gVQaHXs38htCSDBJ(bh);
      //appendnew_next_sd_GiOL8QuTONvO1QYL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GiOL8QuTONvO1QYL');
    }
  }

  update(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FsVk6s2tPHK0ALhx(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_86yneFfUNLGPQGtt');
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
      bh = this.sd_5nhxWC6xzWqUMH6w(bh);
      //appendnew_next_openBeneficiries
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UbfJ8q5a8V7xLZqx');
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
      bh = this.sd_WQQZU7S1MJVM0lrL(bh);
      //appendnew_next_openDependencies
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AkNHYq7o3lsF76C8');
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
      bh = this.sd_OjnbAvlFLUR3zGD4(bh);
      //appendnew_next_idValid
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S9yW8bkU4F73EyOY');
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
      bh = this.sd_QEoSMxy68DdcwloW(bh);
      //appendnew_next_idValid1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qjdaPlh9tYRfl2cj');
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
      bh = this.sd_H9tzoLlT4Fi8b8WP(bh);
      //appendnew_next_idValid2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ygLmaDpGMnONXIW3');
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
      bh = this.sd_0ENYDmWxNvxRkhoJ(bh);
      //appendnew_next_idValid3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tde7BjrvTO0jGMY8');
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
      bh = this.sd_lxizv4O2VUb4bjID(bh);
      //appendnew_next_idValid4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Le0GGwdMrzMY8gnV');
    }
  }
  //appendnew_flow_edit_personalInfoComponent_start

  sd_gVQaHXs38htCSDBJ(bh) {
    try {
      bh = this.sd_Y3mN2lQwd5HnEduh(bh);
      //appendnew_next_sd_gVQaHXs38htCSDBJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gVQaHXs38htCSDBJ');
    }
  }

  sd_Y3mN2lQwd5HnEduh(bh) {
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
      bh = this.sd_JfSFbebXgEzrA6yw(bh);
      //appendnew_next_sd_Y3mN2lQwd5HnEduh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y3mN2lQwd5HnEduh');
    }
  }

  sd_JfSFbebXgEzrA6yw(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('userData'));
      bh = this.sd_ECrTSDWg9bec5qWR(bh);
      //appendnew_next_sd_JfSFbebXgEzrA6yw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JfSFbebXgEzrA6yw');
    }
  }

  sd_ECrTSDWg9bec5qWR(bh) {
    try {
      const page = this.page;
      console.log('userData==>', page.userData);
      console.log('depe', page.userData.beneficaries);

      page.ben1 = page.userData.beneficaries[0];
      page.ben2 = page.userData.beneficaries[1];

      //check if the form has data so that we can display the button
      if (page.ben2.firstName != '') {
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
        page.depe1.firstName !== '' &&
        page.depe2.firstName !== '' &&
        page.depe3.firstName !== ''
      ) {
        // Case 1: All forms are not empty
        page.showdependenciesForm = true;
        page.showdependencies1Form = true;
        page.showdependencies2Form = true;
        page.hideIcon2 = false; // Hide the add icon
      } else if (
        page.depe1.firstName !== '' &&
        page.depe2.firstName !== '' &&
        page.depe3.firstName === ''
      ) {
        // Case 2: Form 1 and Form 2 are filled, Form 3 is empty
        page.showdependenciesForm = true;
        page.showdependencies1Form = true;
        page.showdependencies2Form = false;
        page.hideIcon2 = true; // Show the add icon
      } else if (
        page.depe1.firstName !== '' &&
        page.depe2.firstName === '' &&
        page.depe3.firstName === ''
      ) {
        // Case 3: Form 1 is filled, Forms 2 and 3 are empty
        page.showdependenciesForm = true;
        page.showdependencies1Form = false;
        page.showdependencies2Form = false;
        page.hideIcon2 = true; // Show the add icon
      } else if (
        page.depe1.firstName === '' &&
        page.depe2.firstName === '' &&
        page.depe3.firstName === ''
      ) {
        // Case 4: All forms are empty
        page.showdependenciesForm = true; // Show the first empty form (Form 1)
        page.showdependencies1Form = false;
        page.showdependencies2Form = false;
        page.hideIcon2 = true; // Show the add icon
      }

      page.formdata = new FormGroup({
        firstName: new FormControl(page.userData?.firstName || '', [
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
        lastName: new FormControl(page.ben2.lastName, [Validators.required]),
        idNumber: new FormControl(page.ben2.idNumber, [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        gender: new FormControl(page.ben2.gender || '', [Validators.required]),
        email: new FormControl(page.ben2.email, [
          Validators.required,
          Validators.email,
        ]),
        cellphone: new FormControl(page.ben2.cellphone, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        relationship: new FormControl(page.ben2.relationship, [
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
      //appendnew_next_sd_ECrTSDWg9bec5qWR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ECrTSDWg9bec5qWR');
    }
  }

  sd_FsVk6s2tPHK0ALhx(bh) {
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

      bh = this.sd_esjR1J0mKRyRAwFA(bh);
      //appendnew_next_sd_FsVk6s2tPHK0ALhx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FsVk6s2tPHK0ALhx');
    }
  }

  sd_esjR1J0mKRyRAwFA(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_N2zAqcAwssUX9pC6(bh);
      //appendnew_next_sd_esjR1J0mKRyRAwFA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_esjR1J0mKRyRAwFA');
    }
  }

  sd_N2zAqcAwssUX9pC6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update-user/' + `${page.userData._id}`;

      bh = this.sd_IgHzvdmwQyYasNy8(bh);
      //appendnew_next_sd_N2zAqcAwssUX9pC6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N2zAqcAwssUX9pC6');
    }
  }

  async sd_IgHzvdmwQyYasNy8(bh) {
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
      bh = this.sd_a0m21vIOdUt6sNY3(bh);
      //appendnew_next_sd_IgHzvdmwQyYasNy8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IgHzvdmwQyYasNy8');
    }
  }

  async sd_a0m21vIOdUt6sNY3(bh) {
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
      bh = this.sd_bMnbUq5poe9SegbD(bh);
      //appendnew_next_sd_a0m21vIOdUt6sNY3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a0m21vIOdUt6sNY3');
    }
  }

  async sd_bMnbUq5poe9SegbD(bh) {
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
      bh = this.sd_CrzHebrXy1FWqqr3(bh);
      //appendnew_next_sd_bMnbUq5poe9SegbD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bMnbUq5poe9SegbD');
    }
  }

  sd_CrzHebrXy1FWqqr3(bh) {
    try {
      const page = this.page;
      console.log('results', page.results);

      bh = this.sd_XI16n0Leiv1aQkui(bh);
      //appendnew_next_sd_CrzHebrXy1FWqqr3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CrzHebrXy1FWqqr3');
    }
  }

  sd_XI16n0Leiv1aQkui(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.structuredData));
      bh = this.sd_ah4h46GmePFPc6Xd(bh);
      //appendnew_next_sd_XI16n0Leiv1aQkui
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XI16n0Leiv1aQkui');
    }
  }

  async sd_ah4h46GmePFPc6Xd(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_ah4h46GmePFPc6Xd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ah4h46GmePFPc6Xd');
    }
  }

  sd_5nhxWC6xzWqUMH6w(bh) {
    try {
      const page = this.page;
      page.showbeneficaries1Form = true;
      page.hideIcon = false;
      console.log('form', page.showbeneficaries1Form);

      //appendnew_next_sd_5nhxWC6xzWqUMH6w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5nhxWC6xzWqUMH6w');
    }
  }

  sd_WQQZU7S1MJVM0lrL(bh) {
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

      //appendnew_next_sd_WQQZU7S1MJVM0lrL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQQZU7S1MJVM0lrL');
    }
  }

  sd_OjnbAvlFLUR3zGD4(bh) {
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
      //appendnew_next_sd_OjnbAvlFLUR3zGD4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OjnbAvlFLUR3zGD4');
    }
  }

  sd_QEoSMxy68DdcwloW(bh) {
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
      //appendnew_next_sd_QEoSMxy68DdcwloW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QEoSMxy68DdcwloW');
    }
  }

  sd_H9tzoLlT4Fi8b8WP(bh) {
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
      //appendnew_next_sd_H9tzoLlT4Fi8b8WP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H9tzoLlT4Fi8b8WP');
    }
  }

  sd_0ENYDmWxNvxRkhoJ(bh) {
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
      //appendnew_next_sd_0ENYDmWxNvxRkhoJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0ENYDmWxNvxRkhoJ');
    }
  }

  sd_lxizv4O2VUb4bjID(bh) {
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
      //appendnew_next_sd_lxizv4O2VUb4bjID
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lxizv4O2VUb4bjID');
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
  //appendnew_flow_edit_personalInfoComponent_Catch
}
