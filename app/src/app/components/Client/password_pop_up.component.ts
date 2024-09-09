// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-password_pop_up',
  templateUrl: './password_pop_up.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class password_pop_upComponent {
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
      this.sd_2FimYvai6Hc4W5OW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2FimYvai6Hc4W5OW(bh) {
    try {
      bh = this.sd_XgztCccuWZ4LpH1D(bh);
      //appendnew_next_sd_2FimYvai6Hc4W5OW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2FimYvai6Hc4W5OW');
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
      //appendnew_next_countCharacters
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GP1HgpZGbv3Xbpjs');
    }
  }

  checkPassword(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_paKWbLKLveroMVuj(bh);
      //appendnew_next_checkPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d3FN5gfd2VGEKHsK');
    }
  }
  //appendnew_flow_password_pop_upComponent_start

  sd_XgztCccuWZ4LpH1D(bh) {
    try {
      this.page.password = undefined;
      this.page.loginForm = {};
      //appendnew_next_sd_XgztCccuWZ4LpH1D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XgztCccuWZ4LpH1D');
    }
  }

  async sd_paKWbLKLveroMVuj(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.form.form.status,
          'INVALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_7ScCpfFgnw4ymlci(bh);
      } else {
        bh = await this.sd_VhB41HzuyfLK1qUp(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_paKWbLKLveroMVuj');
    }
  }

  sd_7ScCpfFgnw4ymlci(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please Fill All Fields', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_7ScCpfFgnw4ymlci
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7ScCpfFgnw4ymlci');
    }
  }

  sd_VhB41HzuyfLK1qUp(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Kykrie2FGdsFszxZ(bh);
      //appendnew_next_sd_VhB41HzuyfLK1qUp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VhB41HzuyfLK1qUp');
    }
  }

  sd_Kykrie2FGdsFszxZ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'login';
      // page.loading = true
      bh = this.sd_suhnNkGvm4OpiFkv(bh);
      //appendnew_next_sd_Kykrie2FGdsFszxZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kykrie2FGdsFszxZ');
    }
  }

  async sd_suhnNkGvm4OpiFkv(bh) {
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
      bh = this.sd_PIaqXGpuVbBKUpSW(bh);
      //appendnew_next_sd_suhnNkGvm4OpiFkv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_suhnNkGvm4OpiFkv');
    }
  }

  sd_PIaqXGpuVbBKUpSW(bh) {
    try {
      const page = this.page;
      page.loading = false;

      console.log('Result login', bh.result);
      bh = this.sd_te3lCKe2dy8SIdEl(bh);
      //appendnew_next_sd_PIaqXGpuVbBKUpSW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PIaqXGpuVbBKUpSW');
    }
  }

  async sd_te3lCKe2dy8SIdEl(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          "Password Don't match",
          undefined,
          undefined
        )
      ) {
        bh = this.sd_skmeDdTzM0DHz7jS(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.result.message,
          'User not found',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_1ylm4b0jBe7BKYsP(bh);
      } else {
        bh = await this.sd_LZHibUnBBe518Oxu(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_te3lCKe2dy8SIdEl');
    }
  }

  sd_skmeDdTzM0DHz7jS(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Password Don't match", 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_skmeDdTzM0DHz7jS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_skmeDdTzM0DHz7jS');
    }
  }

  sd_1ylm4b0jBe7BKYsP(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open("User Doesn't exist", 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_1ylm4b0jBe7BKYsP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1ylm4b0jBe7BKYsP');
    }
  }

  async sd_LZHibUnBBe518Oxu(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/edit_profile');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_Qm93yWWjC8w11bIl(bh);
      //appendnew_next_sd_LZHibUnBBe518Oxu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LZHibUnBBe518Oxu');
    }
  }

  sd_Qm93yWWjC8w11bIl(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.result);

      //appendnew_next_sd_Qm93yWWjC8w11bIl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qm93yWWjC8w11bIl');
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
  //appendnew_flow_password_pop_upComponent_Catch
}
