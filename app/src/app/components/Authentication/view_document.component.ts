// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_document',
  templateUrl: './view_document.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_documentComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_KikucxW3FkzenR2O(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KikucxW3FkzenR2O(bh) {
    try {
      bh = this.sd_4gj9gYmwBgxJqwEJ(bh);
      //appendnew_next_sd_KikucxW3FkzenR2O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KikucxW3FkzenR2O');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kxL7Y9L7iMTaS70J(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GQmjPcm4kuYIoaAE');
    }
  }
  //appendnew_flow_view_documentComponent_start

  sd_4gj9gYmwBgxJqwEJ(bh) {
    try {
      this.page.key = [];
      bh = this.sd_wYvg6kbX6d2RzWzR(bh);
      //appendnew_next_sd_4gj9gYmwBgxJqwEJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4gj9gYmwBgxJqwEJ');
    }
  }

  sd_wYvg6kbX6d2RzWzR(bh) {
    try {
      const page = this.page;
      for (let i = 0; i < sessionStorage.length; i++) {
        page.key.push(sessionStorage.key(i));
      }

      console.log('keys', page.key.includes('user'));
      bh = this.sd_3BXIJq1fyxcmccmh(bh);
      //appendnew_next_sd_wYvg6kbX6d2RzWzR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wYvg6kbX6d2RzWzR');
    }
  }

  sd_3BXIJq1fyxcmccmh(bh) {
    try {
      if (
        this.sdService.operators['cont'](
          this.page.key,
          'bankDetails',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_09mIB1NmMWhtUJPo(bh);
      } else if (
        this.sdService.operators['cont'](
          this.page.key,
          'idDeceased',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jdSznbCt9AopPT4T(bh);
      } else if (
        this.sdService.operators['cont'](
          this.page.key,
          'idClaimer',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_j5Fi6WpaIG7AWnx7(bh);
      } else if (
        this.sdService.operators['cont'](
          this.page.key,
          'deathCetificatify',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8oDWIqEg3mYapHOc(bh);
      } else if (
        this.sdService.operators['cont'](
          this.page.key,
          'bi1663',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dOrvoT9jzoh6Xw7f(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BXIJq1fyxcmccmh');
    }
  }

  sd_09mIB1NmMWhtUJPo(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('bankDetails'));
      bh = this.sd_w6XJNRDxyClfAqFx(bh);
      //appendnew_next_sd_09mIB1NmMWhtUJPo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_09mIB1NmMWhtUJPo');
    }
  }

  sd_w6XJNRDxyClfAqFx(bh) {
    try {
      const page = this.page;
      page.imageUrl = `http://localhost:8081/api/download/${page.result.filename}`;
      console.log('session', page.result);
      //appendnew_next_sd_w6XJNRDxyClfAqFx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w6XJNRDxyClfAqFx');
    }
  }

  sd_jdSznbCt9AopPT4T(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('idDeceased'));
      bh = this.sd_4GVwA4RfqyEaPFnf(bh);
      //appendnew_next_sd_jdSznbCt9AopPT4T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdSznbCt9AopPT4T');
    }
  }

  sd_4GVwA4RfqyEaPFnf(bh) {
    try {
      const page = this.page;
      page.imageUrl = `http://localhost:8081/api/download/${page.result.filename}`;
      console.log('session', page.result);
      //appendnew_next_sd_4GVwA4RfqyEaPFnf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4GVwA4RfqyEaPFnf');
    }
  }

  sd_j5Fi6WpaIG7AWnx7(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('idClaimer'));
      bh = this.sd_xrbflunH5Skd910s(bh);
      //appendnew_next_sd_j5Fi6WpaIG7AWnx7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j5Fi6WpaIG7AWnx7');
    }
  }

  sd_xrbflunH5Skd910s(bh) {
    try {
      const page = this.page;
      page.imageUrl = `http://localhost:8081/api/download/${page.result.filename}`;
      console.log('session', page.result);
      //appendnew_next_sd_xrbflunH5Skd910s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xrbflunH5Skd910s');
    }
  }

  sd_8oDWIqEg3mYapHOc(bh) {
    try {
      this.page.result = JSON.parse(
        sessionStorage.getItem('deathCetificatify')
      );
      bh = this.sd_K3S7Uw8cnvJhO3FJ(bh);
      //appendnew_next_sd_8oDWIqEg3mYapHOc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8oDWIqEg3mYapHOc');
    }
  }

  sd_K3S7Uw8cnvJhO3FJ(bh) {
    try {
      const page = this.page;
      page.imageUrl = `http://localhost:8081/api/download/${page.result.filename}`;
      console.log('session', page.result);
      //appendnew_next_sd_K3S7Uw8cnvJhO3FJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K3S7Uw8cnvJhO3FJ');
    }
  }

  sd_dOrvoT9jzoh6Xw7f(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('bi1663'));
      bh = this.sd_t6ahQgfWPpzjBopV(bh);
      //appendnew_next_sd_dOrvoT9jzoh6Xw7f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dOrvoT9jzoh6Xw7f');
    }
  }

  sd_t6ahQgfWPpzjBopV(bh) {
    try {
      const page = this.page;
      page.imageUrl = `http://localhost:8081/api/download/${page.result.filename}`;
      console.log('session', page.result);
      //appendnew_next_sd_t6ahQgfWPpzjBopV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t6ahQgfWPpzjBopV');
    }
  }

  sd_kxL7Y9L7iMTaS70J(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.data);

      //appendnew_next_sd_kxL7Y9L7iMTaS70J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kxL7Y9L7iMTaS70J');
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
  //appendnew_flow_view_documentComponent_Catch
}
