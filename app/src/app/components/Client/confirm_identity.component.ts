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
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm_identity',
  templateUrl: './confirm_identity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_identityComponent {
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
      this.sd_uBdAjSEq6sV0TmPm(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uBdAjSEq6sV0TmPm(bh) {
    try {
      bh = this.sd_pd4k2qQdVfhDB5xy(bh);
      //appendnew_next_sd_uBdAjSEq6sV0TmPm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uBdAjSEq6sV0TmPm');
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
      bh = this.sd_aZqj2V5O6NRbUQJc(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rolfawbvl8KV5sTd');
    }
  }
  //appendnew_flow_confirm_identityComponent_start

  sd_pd4k2qQdVfhDB5xy(bh) {
    try {
      bh = this.sd_lFMbt1k9CtueeArU(bh);
      //appendnew_next_sd_pd4k2qQdVfhDB5xy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pd4k2qQdVfhDB5xy');
    }
  }

  sd_lFMbt1k9CtueeArU(bh) {
    try {
      this.page.passwordForm = undefined;
      bh = this.sd_01wpPlRa2i3NRgvw(bh);
      //appendnew_next_sd_lFMbt1k9CtueeArU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lFMbt1k9CtueeArU');
    }
  }

  sd_01wpPlRa2i3NRgvw(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_Gx0RKvee1hp4S16S(bh);
      //appendnew_next_sd_01wpPlRa2i3NRgvw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_01wpPlRa2i3NRgvw');
    }
  }

  sd_Gx0RKvee1hp4S16S(bh) {
    try {
      const page = this.page;
      page.passwordForm = new FormGroup({
        email: new FormControl(page.user.email),
        password: new FormControl('', [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4),
        ]),
      });
      // console.log("seeeeee user", page.user.email)
      console.log('seeeeee', page.passwordForm.status);
      //appendnew_next_sd_Gx0RKvee1hp4S16S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gx0RKvee1hp4S16S');
    }
  }

  async sd_aZqj2V5O6NRbUQJc(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.form.status,
          'INVALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_GheoXIsOETsKlEr4(bh);
      } else {
        bh = await this.sd_4OjJQdYZRZApya0H(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aZqj2V5O6NRbUQJc');
    }
  }

  sd_GheoXIsOETsKlEr4(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form invalid', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_GheoXIsOETsKlEr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GheoXIsOETsKlEr4');
    }
  }

  sd_4OjJQdYZRZApya0H(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_02x9leGQM9r0aPbi(bh);
      //appendnew_next_sd_4OjJQdYZRZApya0H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4OjJQdYZRZApya0H');
    }
  }

  sd_02x9leGQM9r0aPbi(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'login';
      page.loading = true;
      bh = this.sd_waRCs7AfI6KKwrAk(bh);
      //appendnew_next_sd_02x9leGQM9r0aPbi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_02x9leGQM9r0aPbi');
    }
  }

  async sd_waRCs7AfI6KKwrAk(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.passwordForm.value,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_5bBrdrpo1ELjJYio(bh);
      //appendnew_next_sd_waRCs7AfI6KKwrAk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_waRCs7AfI6KKwrAk');
    }
  }

  sd_5bBrdrpo1ELjJYio(bh) {
    try {
      const page = this.page;
      page.loading = false;

      console.log('Result login', bh.result);
      bh = this.sd_4EYWEckGLzE0WhK3(bh);
      //appendnew_next_sd_5bBrdrpo1ELjJYio
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5bBrdrpo1ELjJYio');
    }
  }

  async sd_4EYWEckGLzE0WhK3(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          "Password Don't match",
          undefined,
          undefined
        )
      ) {
        bh = this.sd_hAEQARY2sVbBpkIq(bh);
      } else {
        bh = await this.sd_oHtAcXLF1cMWRK4g(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4EYWEckGLzE0WhK3');
    }
  }

  sd_hAEQARY2sVbBpkIq(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('incorrect password', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_hAEQARY2sVbBpkIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hAEQARY2sVbBpkIq');
    }
  }

  async sd_oHtAcXLF1cMWRK4g(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/client_claim_form');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_TSTjkGLws4c5c652(bh);
      //appendnew_next_sd_oHtAcXLF1cMWRK4g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oHtAcXLF1cMWRK4g');
    }
  }

  sd_TSTjkGLws4c5c652(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('confirmed', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_Jpfd6dBOhM3agaAl(bh);
      //appendnew_next_sd_TSTjkGLws4c5c652
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TSTjkGLws4c5c652');
    }
  }

  sd_Jpfd6dBOhM3agaAl(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.close);

      //appendnew_next_sd_Jpfd6dBOhM3agaAl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jpfd6dBOhM3agaAl');
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
  //appendnew_flow_confirm_identityComponent_Catch
}
