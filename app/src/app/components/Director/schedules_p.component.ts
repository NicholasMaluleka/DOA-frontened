// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  ViewChild,
} from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { scheduler } from 'dhtmlx-scheduler'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-schedules_p',
  templateUrl: './schedules_p.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class schedules_pComponent implements AfterViewInit {
  @ViewChild('scheduler_here', { read: ElementRef })
  public scheduler_here: any = null;
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
      this.sd_hxFhlOFHubpgJGzN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hxFhlOFHubpgJGzN(bh) {
    try {
      bh = this.sd_aGiM5lfXREZlAXEA(bh);
      //appendnew_next_sd_hxFhlOFHubpgJGzN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hxFhlOFHubpgJGzN');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_P91EX3cWFRlgOjHq(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8J6dMgUUcr7CGFxp');
    }
  }

  getSchedules(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_a9dqEIdpNvTZt4Qj(bh);
      //appendnew_next_getSchedules
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D4YfYk3I3wpKfumu');
    }
  }
  //appendnew_flow_schedules_pComponent_start

  sd_aGiM5lfXREZlAXEA(bh) {
    try {
      bh = this.sd_GUxZ5MckV4fBTUfG(bh);
      //appendnew_next_sd_aGiM5lfXREZlAXEA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aGiM5lfXREZlAXEA');
    }
  }

  sd_GUxZ5MckV4fBTUfG(bh) {
    try {
      this.page.viewChild = ViewChild;
      this.page.elementRef = ElementRef;
      bh = this.sd_A4tIsJqzXOXU5akg(bh);
      //appendnew_next_sd_GUxZ5MckV4fBTUfG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GUxZ5MckV4fBTUfG');
    }
  }

  sd_A4tIsJqzXOXU5akg(bh) {
    try {
      bh = this.sd_gPSXC7DSUYw4MmRJ(bh);
      //appendnew_next_sd_A4tIsJqzXOXU5akg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A4tIsJqzXOXU5akg');
    }
  }

  sd_gPSXC7DSUYw4MmRJ(bh) {
    try {
      let outputVariables = this.getSchedules();

      //appendnew_next_sd_gPSXC7DSUYw4MmRJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gPSXC7DSUYw4MmRJ');
    }
  }

  sd_P91EX3cWFRlgOjHq(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        scheduler_here: this.scheduler_here,
      });
      bh = this.intializer(bh);
      //appendnew_next_sd_P91EX3cWFRlgOjHq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P91EX3cWFRlgOjHq');
    }
  }

  intializer(bh) {
    try {
      const page = this.page; // Date format
      scheduler.config.xml_date = '%Y-%m-%d %H:%i';

      // Set up time scale for day and week views
      scheduler.config.first_hour = 8; // Start at 8 AM
      scheduler.config.last_hour = 18; // End at 6 PM
      scheduler.config.time_step = 30; // 30-minute intervals

      // Enable the display of time on the y-axis
      scheduler.config.hour_size_px = 42; // Controls the height of each hour row (default is 42px)

      // Enable different views: day, week, and month
      scheduler.config.multi_day = true;
      scheduler.config.month_date = '%d %M %Y'; // Customize month view display format if needed
      scheduler.config.month_day = '%d'; // Customize day display format

      // Initialize scheduler with week view
      scheduler.init(this.scheduler_here.nativeElement, new Date(), 'week');

      scheduler.parse(this.page.result);

      bh = this.intialized(bh);
      //appendnew_next_intializer
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B3KVA3W1SS9henOr');
    }
  }

  intialized(bh) {
    try {
      const page = this.page;
      scheduler.attachEvent('onBeforeDrag', () => false);
      scheduler.attachEvent('onClick', () => false);
      scheduler.attachEvent('onDblClick', () => false);

      scheduler.attachEvent('onLightbox', function () {
        const inputs = document.querySelectorAll(
          '.dhx_cal_light input, .dhx_cal_light textarea'
        );
        inputs.forEach((input) => {
          (input as HTMLInputElement).disabled = true;
        });
        return true;
      });

      //appendnew_next_intialized
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qDrxWf1l36IMdsG1');
    }
  }

  sd_a9dqEIdpNvTZt4Qj(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_5ih064dZtJ0BG5mH(bh);
      //appendnew_next_sd_a9dqEIdpNvTZt4Qj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a9dqEIdpNvTZt4Qj');
    }
  }

  sd_5ih064dZtJ0BG5mH(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'getSchedules';
      bh = this.sd_2IUzIo2aKNWkVvxF(bh);
      //appendnew_next_sd_5ih064dZtJ0BG5mH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5ih064dZtJ0BG5mH');
    }
  }

  async sd_2IUzIo2aKNWkVvxF(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_kKr7i8BotieB2UQu(bh);
      //appendnew_next_sd_2IUzIo2aKNWkVvxF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2IUzIo2aKNWkVvxF');
    }
  }

  sd_kKr7i8BotieB2UQu(bh) {
    try {
      const page = this.page;
      scheduler.parse(page.result);
      //appendnew_next_sd_kKr7i8BotieB2UQu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kKr7i8BotieB2UQu');
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
  //appendnew_flow_schedules_pComponent_Catch
}
