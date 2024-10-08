// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { deactivated_accountComponent } from 'app/components/Authentication/deactivated_account.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_9qBlAyTvanNO52sj(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9qBlAyTvanNO52sj(bh) {
    try {
      bh = this.sd_QZIhirkF1KOOozB7(bh);
      //appendnew_next_sd_9qBlAyTvanNO52sj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qBlAyTvanNO52sj');
    }
  }

  login(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_rkB5QqUgrAKv3a1e(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_71FwAex7k56plSj9');
    }
  }

  countCharacters(e: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e };
      bh.local = {};
      bh = this.sd_3Oob5ybAQPyPJtB0(bh);
      //appendnew_next_countCharacters
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DE42D8ZhYJoLHtIk');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_QZIhirkF1KOOozB7(bh) {
    try {
      this.page.loginForm = {};
      this.page.passLength = 0;
      this.page.pattern = undefined;
      this.page.characterCount = 0;
      this.page.loading = false;
      bh = this.sd_L1ixhp2QHtWF8cjP(bh);
      //appendnew_next_sd_QZIhirkF1KOOozB7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QZIhirkF1KOOozB7');
    }
  }

  sd_L1ixhp2QHtWF8cjP(bh) {
    try {
      const page = this.page;
      console.log('Looking for changes', bh);
      //appendnew_next_sd_L1ixhp2QHtWF8cjP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L1ixhp2QHtWF8cjP');
    }
  }

  async sd_rkB5QqUgrAKv3a1e(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.form.form.status,
          'INVALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_AKCd9T0p7cDWhRTR(bh);
      } else {
        bh = await this.sd_DUejOGCOl1GlgrTF(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rkB5QqUgrAKv3a1e');
    }
  }

  sd_AKCd9T0p7cDWhRTR(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please Fill All Fields', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_AKCd9T0p7cDWhRTR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AKCd9T0p7cDWhRTR');
    }
  }

  sd_DUejOGCOl1GlgrTF(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_ioQgoBz2AkEDMlcS(bh);
      //appendnew_next_sd_DUejOGCOl1GlgrTF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DUejOGCOl1GlgrTF');
    }
  }

  sd_ioQgoBz2AkEDMlcS(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'login';
      page.loading = true;
      bh = this.sd_zTKl6k43D2GeisCd(bh);
      //appendnew_next_sd_ioQgoBz2AkEDMlcS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ioQgoBz2AkEDMlcS');
    }
  }

  async sd_zTKl6k43D2GeisCd(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form.value,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_R2or05KgG4F0SznO(bh);
      //appendnew_next_sd_zTKl6k43D2GeisCd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zTKl6k43D2GeisCd');
    }
  }

  sd_R2or05KgG4F0SznO(bh) {
    try {
      const page = this.page;
      page.loading = false;

      // console.log("Result login", bh.result)
      bh = this.sd_buYzaxDxyjRaVxqv(bh);
      //appendnew_next_sd_R2or05KgG4F0SznO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R2or05KgG4F0SznO');
    }
  }

  async sd_buYzaxDxyjRaVxqv(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          "Password Don't match",
          undefined,
          undefined
        )
      ) {
        bh = this.sd_DrwpTKFaF2PfX0uE(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.result.message,
          'User not found',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_vl5FCxtDP6xLD1fe(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.result.message,
          'Account Deactivated',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4gDIpqRUy3EexkSR(bh);
      } else {
        bh = await this.sd_pWnUWcBfELW3hZrp(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_buYzaxDxyjRaVxqv');
    }
  }

  sd_DrwpTKFaF2PfX0uE(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Password Don't match", 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_DrwpTKFaF2PfX0uE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DrwpTKFaF2PfX0uE');
    }
  }

  sd_vl5FCxtDP6xLD1fe(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open("User Doesn't exist", 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_vl5FCxtDP6xLD1fe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vl5FCxtDP6xLD1fe');
    }
  }

  sd_pWnUWcBfELW3hZrp(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_amrKD85p0eRgsnBY(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.result.role,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_r58lpYP5NfnKU8WQ(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.result.role,
          'director',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_iGycO4jnqKpix0R8(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pWnUWcBfELW3hZrp');
    }
  }

  async sd_amrKD85p0eRgsnBY(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_51iYvY9GLbmiDMYl(bh);
      //appendnew_next_sd_amrKD85p0eRgsnBY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_amrKD85p0eRgsnBY');
    }
  }

  sd_51iYvY9GLbmiDMYl(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully logged in', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_Sxe8LBYbOvGJ2l4m(bh);
      //appendnew_next_sd_51iYvY9GLbmiDMYl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_51iYvY9GLbmiDMYl');
    }
  }

  sd_Sxe8LBYbOvGJ2l4m(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.result));
      //appendnew_next_sd_Sxe8LBYbOvGJ2l4m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sxe8LBYbOvGJ2l4m');
    }
  }

  async sd_r58lpYP5NfnKU8WQ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/client_plan_details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_viITVWMo8noRtLLF(bh);
      //appendnew_next_sd_r58lpYP5NfnKU8WQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r58lpYP5NfnKU8WQ');
    }
  }

  sd_viITVWMo8noRtLLF(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Welcome client', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_iiPTp6BRisa9Wz2L(bh);
      //appendnew_next_sd_viITVWMo8noRtLLF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_viITVWMo8noRtLLF');
    }
  }

  sd_iiPTp6BRisa9Wz2L(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.result));
      //appendnew_next_sd_iiPTp6BRisa9Wz2L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iiPTp6BRisa9Wz2L');
    }
  }

  async sd_iGycO4jnqKpix0R8(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/director_home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_SGMcpcrY4y3UKTKj(bh);
      //appendnew_next_sd_iGycO4jnqKpix0R8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iGycO4jnqKpix0R8');
    }
  }

  sd_SGMcpcrY4y3UKTKj(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully logged in', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_QCpkMADtxfSqgHXt(bh);
      //appendnew_next_sd_SGMcpcrY4y3UKTKj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SGMcpcrY4y3UKTKj');
    }
  }

  sd_QCpkMADtxfSqgHXt(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.result));
      //appendnew_next_sd_QCpkMADtxfSqgHXt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QCpkMADtxfSqgHXt');
    }
  }

  sd_4gDIpqRUy3EexkSR(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Account Deactivated.', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_GdCsTLRtHGBVNBUz(bh);
      //appendnew_next_sd_4gDIpqRUy3EexkSR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4gDIpqRUy3EexkSR');
    }
  }

  sd_GdCsTLRtHGBVNBUz(bh) {
    try {
      const deactivated_accountDialog = this.__page_injector__.get(MatDialog);
      const deactivated_accountDialogRef = deactivated_accountDialog.open(
        deactivated_accountComponent,
        { height: '500px', width: '500px' }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GdCsTLRtHGBVNBUz');
    }
  }

  sd_3Oob5ybAQPyPJtB0(bh) {
    try {
      const page = this.page;
      page.characterCount = bh.input.e.target.value.length;

      // console.log("Character", page.characterCount)
      //appendnew_next_sd_3Oob5ybAQPyPJtB0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3Oob5ybAQPyPJtB0');
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
  //appendnew_flow_loginComponent_Catch
}
