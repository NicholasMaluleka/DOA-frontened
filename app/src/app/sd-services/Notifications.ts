// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { BehaviorSubject } from 'rxjs'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class Notifications {
  public behaviorS: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_Notifications

  async genericGet(path: any = undefined, ...others) {
    let bh: any = {
      input: {
        path,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_Tf4fvJoktY8gN2Nz(bh);
      //appendnew_next_genericGet
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7Gra8AgAem9ujuDY');
    }
  }

  async genericPost(
    path: any = undefined,
    payload: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        path,
        payload,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_t9iOOiIX26jIc6Y8(bh);
      //appendnew_next_genericPost
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zfwDC0oeL1PnlPpm');
    }
  }

  async initializeObs(...others) {
    let bh: any = {
      input: {},
      local: {
        BehaviourSub: undefined,
        Obs: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_VzHz99B01mVTf0L7(bh);
      //appendnew_next_initializeObs
      return (
        // formatting output variables
        {
          input: {},
          local: {
            Obs: bh.local.Obs,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C1t77o9fVIhcxiiz');
    }
  }

  async updateNotifications(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_jg0UEDnjeMTknc2X(bh);
      //appendnew_next_updateNotifications
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nD5YhSEKx1PzGpCF');
    }
  }

  async genericPut(path: any = undefined, payload: any = undefined, ...others) {
    let bh: any = {
      input: {
        path,
        payload,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_6fXBALinptaOInrG(bh);
      //appendnew_next_genericPut
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8iH7KhiPN5tqPMXx');
    }
  }
  //appendnew_flow_Notifications_start

  async sd_Tf4fvJoktY8gN2Nz(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_KK0dsv4rbjWPXqKI(bh);
      //appendnew_next_sd_Tf4fvJoktY8gN2Nz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tf4fvJoktY8gN2Nz');
    }
  }

  async sd_KK0dsv4rbjWPXqKI(bh) {
    try {
      bh.url = bh.ssdURL + bh.input.path;
      bh = await this.sd_69Jfv3ADnOkXm9a7(bh);
      //appendnew_next_sd_KK0dsv4rbjWPXqKI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KK0dsv4rbjWPXqKI');
    }
  }

  async sd_69Jfv3ADnOkXm9a7(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.data = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_69Jfv3ADnOkXm9a7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_69Jfv3ADnOkXm9a7');
    }
  }

  async sd_t9iOOiIX26jIc6Y8(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_AZYvYq8p9bttzcea(bh);
      //appendnew_next_sd_t9iOOiIX26jIc6Y8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t9iOOiIX26jIc6Y8');
    }
  }

  async sd_AZYvYq8p9bttzcea(bh) {
    try {
      bh.url = bh.ssdURL + bh.input.path;
      bh = await this.sd_eD9sbenMelWr6yyk(bh);
      //appendnew_next_sd_AZYvYq8p9bttzcea
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AZYvYq8p9bttzcea');
    }
  }

  async sd_eD9sbenMelWr6yyk(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_eD9sbenMelWr6yyk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eD9sbenMelWr6yyk');
    }
  }

  async sd_VzHz99B01mVTf0L7(bh) {
    try {
      bh.BS = BehaviorSubject;
      bh = await this.sd_4VScn4LGSNE0JI33(bh);
      //appendnew_next_sd_VzHz99B01mVTf0L7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VzHz99B01mVTf0L7');
    }
  }

  async sd_4VScn4LGSNE0JI33(bh) {
    try {
      bh.local.BehaviourSub = new BehaviorSubject<any>({ notification: '' });

      bh.local.Obs = bh.local.BehaviourSub.asObservable();

      console.log('bh.local.BehaviourSub', bh.local.BehaviourSub);

      console.log('bh.local.Obs', bh.local.Obs);
      bh = await this.sd_CrL4wbPIFNqAWv9J(bh);
      //appendnew_next_sd_4VScn4LGSNE0JI33
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4VScn4LGSNE0JI33');
    }
  }

  async sd_CrL4wbPIFNqAWv9J(bh) {
    try {
      this.behaviorS = bh.local.BehaviourSub;
      //appendnew_next_sd_CrL4wbPIFNqAWv9J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CrL4wbPIFNqAWv9J');
    }
  }

  async sd_jg0UEDnjeMTknc2X(bh) {
    try {
      bh.behaviorS = this.behaviorS;
      bh = await this.sd_Ee6R4vyxG1LfFhwH(bh);
      //appendnew_next_sd_jg0UEDnjeMTknc2X
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jg0UEDnjeMTknc2X');
    }
  }

  async sd_Ee6R4vyxG1LfFhwH(bh) {
    try {
      bh.behaviorS.next(bh.input.data);

      console.log('bh.behaviorS', bh.behaviorS);
      //appendnew_next_sd_Ee6R4vyxG1LfFhwH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ee6R4vyxG1LfFhwH');
    }
  }

  async sd_6fXBALinptaOInrG(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_Nb9mTOR9uUGWP0hM(bh);
      //appendnew_next_sd_6fXBALinptaOInrG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6fXBALinptaOInrG');
    }
  }

  async sd_Nb9mTOR9uUGWP0hM(bh) {
    try {
      bh.url = bh.ssdURL + bh.input.path;
      bh = await this.sd_8YglPiMQ8XhRtDrB(bh);
      //appendnew_next_sd_Nb9mTOR9uUGWP0hM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Nb9mTOR9uUGWP0hM');
    }
  }

  async sd_8YglPiMQ8XhRtDrB(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_8YglPiMQ8XhRtDrB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8YglPiMQ8XhRtDrB');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_Notifications_Catch
}
