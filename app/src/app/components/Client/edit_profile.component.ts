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
      bh = this.sd_zZbFXjqfFF4D2qLR(bh);
      //appendnew_next_sd_JgyRBkRN3y1TgJS6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JgyRBkRN3y1TgJS6');
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
      bh = this.sd_O0Jk4YGXjcErU5KM(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YaBBZJtWlPt7bFHB');
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
      bh = this.sd_J9PwgORaWfdJy8li(bh);
      //appendnew_next_openBeneficiries
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Fc2ORtGlIyayrgN');
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
      bh = this.sd_POQroE0i2enIYQNx(bh);
      //appendnew_next_openDependencies
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AP7dmceTLRFkhXnN');
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
      bh = this.sd_Gc4iT6sFGJajKFo9(bh);
      //appendnew_next_idValid
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HiU37FLdDCx20drd');
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
      bh = this.sd_h2grNuNNwlt1Rjir(bh);
      //appendnew_next_idValid1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KwgHSz7lqQeEj1N4');
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
      bh = this.sd_dYpPTDnv8OXrUBaR(bh);
      //appendnew_next_idValid2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jzjiMnGz6dZi6ToK');
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
      bh = this.sd_bnohEYupJ0AVpzeT(bh);
      //appendnew_next_idValid3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ptFntbRK6k6BXB3z');
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
      bh = this.sd_j8Q8TFFKldHEDP5b(bh);
      //appendnew_next_idValid4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zeavhCK92Hm892hh');
    }
  }

  cancel(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tcxBJckGGYZqxWmJ(bh);
      //appendnew_next_cancel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pklcqBCImlsNjMX4');
    }
  }
  //appendnew_flow_edit_profileComponent_start

  sd_zZbFXjqfFF4D2qLR(bh) {
    try {
      bh = this.sd_YpKvHuzOJX7A70Nt(bh);
      //appendnew_next_sd_zZbFXjqfFF4D2qLR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zZbFXjqfFF4D2qLR');
    }
  }

  sd_YpKvHuzOJX7A70Nt(bh) {
    try {
      bh = this.sd_MhlljBlxFSW8IGgH(bh);
      //appendnew_next_sd_YpKvHuzOJX7A70Nt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YpKvHuzOJX7A70Nt');
    }
  }

  sd_MhlljBlxFSW8IGgH(bh) {
    try {
      this.page.results = undefined;
      this.page.formdata = undefined;
      this.page.beneficaries1Form = undefined;
      this.page.beneficariesForm = undefined;
      this.page.dependencyForm = undefined;
      this.page.dependency1Form = undefined;
      this.page.dependency2Form = undefined;
      this.page.showbeneficaries1Form = this.page.false;
      this.page.showdependencies1Form = this.page.false;
      this.page.counter = 1;
      this.page.showdependencies2Form = this.page.false;
      this.page.hideIcon = true;
      this.page.hideIcon2 = true;
      this.page.gender = undefined;
      this.page.gender1 = undefined;
      this.page.gender2 = undefined;
      this.page.gender3 = undefined;
      this.page.gender4 = undefined;
      this.page.gender5 = undefined;
      this.page.showdependenciesForm = this.page.false;
      bh = this.sd_WRH4C8nfvCW2ysVZ(bh);
      //appendnew_next_sd_MhlljBlxFSW8IGgH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MhlljBlxFSW8IGgH');
    }
  }

  sd_WRH4C8nfvCW2ysVZ(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_fzZkHtBt829JtEFx(bh);
      //appendnew_next_sd_WRH4C8nfvCW2ysVZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WRH4C8nfvCW2ysVZ');
    }
  }

  sd_fzZkHtBt829JtEFx(bh) {
    try {
      const page = this.page;
      console.log('userData==>', page.userData);
      //console.log("depe", page.userData.dependencies)

      page.ben1 = page.userData.beneficaries[0];
      page.ben2 = page.userData.beneficaries[1];
      //console.log("ben1", page.ben1)
      //console.log("ben2", page.ben2)
      page.depe1 = page.userData.dependencies[0];
      page.depe2 = page.userData.dependencies[1];
      page.depe3 = page.userData.dependencies[2];
      //console.log("depe1", page.depe1)

      page.formdata = new FormGroup({
        firstName: new FormControl(page.userData?.firstName || '', [
          Validators.required,
        ]),
        lastName: new FormControl(page.userData?.lastName || '', [
          Validators.required,
        ]),
        cellphone: new FormControl(page.userData?.cellphone || '', [
          Validators.required,
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
          Validators.maxLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        relationship: new FormControl(page.ben1?.relationship || '', [
          Validators.required,
        ]),
      });
      page.beneficaries1Form = new FormGroup({
        firstName: new FormControl(page.ben2.firstName, [Validators.required]),
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
      //appendnew_next_sd_fzZkHtBt829JtEFx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fzZkHtBt829JtEFx');
    }
  }

  sd_O0Jk4YGXjcErU5KM(bh) {
    try {
      const page = this.page;
      bh.structuredData = page.formdata.value;

      bh.structuredData.beneficaries = page.beneficary;
      //console.log(page.beneficary)

      bh.structuredData.dependencies = page.dependencies;

      page.ben2 = page.beneficaries1Form.value;
      bh.structuredData.beneficaries[1] = page.ben2;

      page.depe2 = page.dependency1Form.value;
      bh.structuredData.dependencies[1] = page.depe2;

      page.depe3 = page.dependency2Form.value;
      bh.structuredData.dependencies[2] = page.depe3;

      // console.log("form", page.formdata.value)

      // console.log("ben==>", page.ben2)
      //console.log("structured data: ", bh.structuredData)
      // console.log("ben value==>", page.beneficaries1Form.value)

      bh = this.sd_Dug2vRdqwEKYndZt(bh);
      //appendnew_next_sd_O0Jk4YGXjcErU5KM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O0Jk4YGXjcErU5KM');
    }
  }

  sd_Dug2vRdqwEKYndZt(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_lvNLqA6tib2KUU18(bh);
      //appendnew_next_sd_Dug2vRdqwEKYndZt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dug2vRdqwEKYndZt');
    }
  }

  sd_lvNLqA6tib2KUU18(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update-user/' + `${page.userData._id}`;

      console.log('url', bh.url);
      console.log('structured d', bh.structuredData);

      bh = this.sd_xBb6i0XCapBH7NP3(bh);
      //appendnew_next_sd_lvNLqA6tib2KUU18
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lvNLqA6tib2KUU18');
    }
  }

  async sd_xBb6i0XCapBH7NP3(bh) {
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
      bh = this.sd_qdPGbaSjG2Fz6oiL(bh);
      //appendnew_next_sd_xBb6i0XCapBH7NP3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xBb6i0XCapBH7NP3');
    }
  }

  sd_qdPGbaSjG2Fz6oiL(bh) {
    try {
      const page = this.page;
      console.log('results', page.results);

      //appendnew_next_sd_qdPGbaSjG2Fz6oiL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qdPGbaSjG2Fz6oiL');
    }
  }

  sd_J9PwgORaWfdJy8li(bh) {
    try {
      const page = this.page;
      page.showbeneficaries1Form = true;
      page.hideIcon = false;
      console.log('form', page.showbeneficaries1Form);

      //appendnew_next_sd_J9PwgORaWfdJy8li
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J9PwgORaWfdJy8li');
    }
  }

  sd_POQroE0i2enIYQNx(bh) {
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

      //appendnew_next_sd_POQroE0i2enIYQNx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_POQroE0i2enIYQNx');
    }
  }

  sd_Gc4iT6sFGJajKFo9(bh) {
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
      //appendnew_next_sd_Gc4iT6sFGJajKFo9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gc4iT6sFGJajKFo9');
    }
  }

  sd_h2grNuNNwlt1Rjir(bh) {
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
      //appendnew_next_sd_h2grNuNNwlt1Rjir
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h2grNuNNwlt1Rjir');
    }
  }

  sd_dYpPTDnv8OXrUBaR(bh) {
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
      //appendnew_next_sd_dYpPTDnv8OXrUBaR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dYpPTDnv8OXrUBaR');
    }
  }

  sd_bnohEYupJ0AVpzeT(bh) {
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
      //appendnew_next_sd_bnohEYupJ0AVpzeT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bnohEYupJ0AVpzeT');
    }
  }

  sd_j8Q8TFFKldHEDP5b(bh) {
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
      //appendnew_next_sd_j8Q8TFFKldHEDP5b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j8Q8TFFKldHEDP5b');
    }
  }

  async sd_tcxBJckGGYZqxWmJ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/client_profile');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_tcxBJckGGYZqxWmJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tcxBJckGGYZqxWmJ');
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
