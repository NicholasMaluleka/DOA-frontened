// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { Notifications } from 'app/sd-services/Notifications'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_4EgQNEX4lGDSV4H7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4EgQNEX4lGDSV4H7(bh) {
    try {
      bh = this.sd_BZk5VYcbok7vTCa5(bh);
      //appendnew_next_sd_4EgQNEX4lGDSV4H7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4EgQNEX4lGDSV4H7');
    }
  }

  fetchLoggedInUser(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9ULu0EXL31v1xkfC(bh);
      //appendnew_next_fetchLoggedInUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_56AGvs0kJAnAzGrL');
    }
  }

  getInitials(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_cd1QrV5LjbnLQkbt(bh);
      //appendnew_next_getInitials
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AXTFUrLCHdiuiemj');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Fde7P8ntbklt8Rlj(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Hc7CpWDYjpI9LYE');
    }
  }

  getSessionItem(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_q2NLm7f3ES5CuB3k(bh);
      //appendnew_next_getSessionItem
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b1GI13Nw8KRjwiIQ');
    }
  }

  updatePayment(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { path: 'get-monthly-payments' };
      bh = this.sd_ycxSItTbw1QKWzlU(bh);
      //appendnew_next_updatePayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xsVhSI4ADzgb2Kn2');
    }
  }

  storePayment(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = { path: 'log-payment' };
      bh = this.sd_U7JmgLxfZX6fz3XN(bh);
      //appendnew_next_storePayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9vLC9WAKEYTGA3rm');
    }
  }
  //appendnew_flow_dashboardComponent_start

  sd_BZk5VYcbok7vTCa5(bh) {
    try {
      bh = this.sd_p4UqDj3fR0sGlSfo(bh);
      //appendnew_next_sd_BZk5VYcbok7vTCa5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BZk5VYcbok7vTCa5');
    }
  }

  sd_p4UqDj3fR0sGlSfo(bh) {
    try {
      let outputVariables = this.fetchLoggedInUser();

      bh = this.sd_WD0j2CjRN6RRbsuo(bh);
      //appendnew_next_sd_p4UqDj3fR0sGlSfo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p4UqDj3fR0sGlSfo');
    }
  }

  sd_WD0j2CjRN6RRbsuo(bh) {
    try {
      this.page.navItem = undefined;
      this.page.selectedItem = 0;
      this.page.name = this.page.user.name;
      this.page.surname = this.page.user.surname;
      bh = this.sd_pSDSROkDxza5Z3hc(bh);
      //appendnew_next_sd_WD0j2CjRN6RRbsuo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WD0j2CjRN6RRbsuo');
    }
  }

  sd_pSDSROkDxza5Z3hc(bh) {
    try {
      let outputVariables = this.getInitials();

      bh = this.sd_WiXpGH1Toryzavqq(bh);
      //appendnew_next_sd_pSDSROkDxza5Z3hc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pSDSROkDxza5Z3hc');
    }
  }

  sd_WiXpGH1Toryzavqq(bh) {
    try {
      this.page.navItem = JSON.parse(sessionStorage.getItem('navItem'));
      bh = this.sd_PQQ1BfHCiczywJYh(bh);
      //appendnew_next_sd_WiXpGH1Toryzavqq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WiXpGH1Toryzavqq');
    }
  }

  sd_PQQ1BfHCiczywJYh(bh) {
    try {
      let outputVariables = this.updatePayment();

      bh = this.sd_Oxa4JU6JEwuflFFv(bh);
      //appendnew_next_sd_PQQ1BfHCiczywJYh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PQQ1BfHCiczywJYh');
    }
  }

  sd_Oxa4JU6JEwuflFFv(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_72RyqGrd9xSHuPJ4(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SqXtYD2RjekqCj5k(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'director',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2avvXWvVpTW2xwRf(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oxa4JU6JEwuflFFv');
    }
  }

  sd_72RyqGrd9xSHuPJ4(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Home', icon: 'home', route: '/dashboard/home' },
        { label: 'Claims', icon: 'description', route: '/dashboard/claims' },
        {
          label: 'Register Client',
          icon: 'edit',
          route: '/dashboard/register',
        },
        { label: 'Schedules', icon: 'today', route: '/dashboard/schedules' },
        { label: 'Reports', icon: 'folder_open' },
        { label: 'Audit Logs', icon: 'trending_up' },
      ];
      bh = this.sd_W0OwtP64wP8RAEg3(bh);
      //appendnew_next_sd_72RyqGrd9xSHuPJ4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_72RyqGrd9xSHuPJ4');
    }
  }

  sd_W0OwtP64wP8RAEg3(bh) {
    try {
      this.page.navItem = this.page.navItem;
      this.page.selectedItem = 0;
      this.page.name = this.page.user.name;
      this.page.surname = this.page.user.surname;
      //appendnew_next_sd_W0OwtP64wP8RAEg3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W0OwtP64wP8RAEg3');
    }
  }

  sd_SqXtYD2RjekqCj5k(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        {
          label: 'Plan details',
          icon: 'description',
          route: '/client_plan_details',
        },
        { label: 'Payment History', icon: 'edit', route: '/payment-history' },
        { label: 'Claims', icon: 'today', route: '/claims' },
      ];
      //appendnew_next_sd_SqXtYD2RjekqCj5k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqXtYD2RjekqCj5k');
    }
  }

  sd_2avvXWvVpTW2xwRf(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Home', icon: 'home', route: '/dashboard/home' },
        { label: 'Claims', icon: 'description' },
        { label: 'Schedules', icon: 'today', route: '/dashboard/schedules' },
      ];
      //appendnew_next_sd_2avvXWvVpTW2xwRf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2avvXWvVpTW2xwRf');
    }
  }

  sd_9ULu0EXL31v1xkfC(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      this.sd_B01D0BB3EZJ9HeSh(bh);
      //appendnew_next_sd_9ULu0EXL31v1xkfC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9ULu0EXL31v1xkfC');
    }
  }

  sd_B01D0BB3EZJ9HeSh(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.user.role);
      //appendnew_next_sd_B01D0BB3EZJ9HeSh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B01D0BB3EZJ9HeSh');
    }
  }

  sd_cd1QrV5LjbnLQkbt(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_aSuB2dcKyxmaLU6f(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_FjqAocSbCmtINlLP(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cd1QrV5LjbnLQkbt');
    }
  }

  sd_aSuB2dcKyxmaLU6f(bh) {
    try {
      const page = this.page;
      page.name = page.name.charAt(0).toUpperCase();
      page.surname = page.surname.charAt(0).toUpperCase();

      //appendnew_next_sd_aSuB2dcKyxmaLU6f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aSuB2dcKyxmaLU6f');
    }
  }

  sd_FjqAocSbCmtINlLP(bh) {
    try {
      const page = this.page;
      page.name = (page.user.firstName?.charAt(0) || '').toUpperCase();
      page.surname = (page.user.lastName?.charAt(0) || '').toUpperCase();
      //appendnew_next_sd_FjqAocSbCmtINlLP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FjqAocSbCmtINlLP');
    }
  }

  sd_Fde7P8ntbklt8Rlj(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      bh = this.sd_6aBkqmJxzZVLrfOa(bh);
      //appendnew_next_sd_Fde7P8ntbklt8Rlj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fde7P8ntbklt8Rlj');
    }
  }

  async sd_6aBkqmJxzZVLrfOa(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_6aBkqmJxzZVLrfOa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6aBkqmJxzZVLrfOa');
    }
  }

  sd_q2NLm7f3ES5CuB3k(bh) {
    try {
      this.page.navItem = JSON.parse(sessionStorage.getItem('navItem'));
      //appendnew_next_sd_q2NLm7f3ES5CuB3k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q2NLm7f3ES5CuB3k');
    }
  }

  async sd_ycxSItTbw1QKWzlU(bh) {
    try {
      const NotificationsInstance: Notifications =
        this.__page_injector__.get(Notifications);

      let outputVariables = await NotificationsInstance.genericGet(
        bh.local.path
      );
      this.page.payments = outputVariables.local.data;

      bh = this.sd_tmQQTWA5auKGP18O(bh);
      //appendnew_next_sd_ycxSItTbw1QKWzlU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ycxSItTbw1QKWzlU');
    }
  }

  sd_tmQQTWA5auKGP18O(bh) {
    try {
      const page = this.page;
      console.log('PAYMENT: ', page.payments);

      page.payments = page.payments.filter((payment) => {
        console.log('PAYMENT ITEM: ', payment);
        let paidDate = new Date(payment.date);
        if (paidDate.getMonth() === new Date().getMonth()) {
          if (paidDate.getFullYear() === new Date().getFullYear()) {
            return payment;
          }
        }
      });

      bh.path = 'get-users';

      console.log("THIS MONTH'S PAYMENT: ", page.payments);

      bh = this.sd_uU1egWMUwJGEYeZ5(bh);
      //appendnew_next_sd_tmQQTWA5auKGP18O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tmQQTWA5auKGP18O');
    }
  }

  async sd_uU1egWMUwJGEYeZ5(bh) {
    try {
      const NotificationsInstance: Notifications =
        this.__page_injector__.get(Notifications);

      let outputVariables = await NotificationsInstance.genericGet(bh.path);
      this.page.clients = outputVariables.local.data;

      bh = this.sd_JWSjjJaLEskD2kAh(bh);
      //appendnew_next_sd_uU1egWMUwJGEYeZ5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uU1egWMUwJGEYeZ5');
    }
  }

  sd_JWSjjJaLEskD2kAh(bh) {
    try {
      const page = this.page;
      bh.form = {
        name: '',
        surname: '',
        policyNumber: '',
        amount: 0,
        loggedBY: 'Automated Overdue',
        event: 'Missed payment',
      };

      let foundClients = page.clients.page.clients.forEach((client) => {
        let day = new Date().getDate();
        let year = new Date().getFullYear();
        // console.log("day: ", day)
        // console.log("CLIENT: 1", client)

        page.payments.forEach((payment) => {
          if (
            payment.policyNumber !== client.policyNumber &&
            client.role == 'client'
          ) {
            console.log('PAYMENTS: ', payment);
            console.log('CLIENT: ', client);
            if (client?.paymentDate <= day) {
              // console.log("CLIENT: 2", client)
              // console.log("PAYMENT: ", payment)
              bh.form.name = client.firstName;
              bh.form.surname = client.lastName;
              bh.form.policyNumber = client.policyNumber;
              // this.storePayment(bh.form)
              console.log('FORM TO BE SENT: ', bh.form);
            }
          }
        });
      });

      //appendnew_next_sd_JWSjjJaLEskD2kAh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JWSjjJaLEskD2kAh');
    }
  }

  async sd_U7JmgLxfZX6fz3XN(bh) {
    try {
      const NotificationsInstance: Notifications =
        this.__page_injector__.get(Notifications);

      let outputVariables = await NotificationsInstance.genericPost(
        bh.local.path,
        bh.input.form
      );
      bh.res = outputVariables.local.result;

      this.sd_FrMw5MzCSmIAFIWA(bh);
      //appendnew_next_sd_U7JmgLxfZX6fz3XN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U7JmgLxfZX6fz3XN');
    }
  }

  sd_FrMw5MzCSmIAFIWA(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.res);
      //appendnew_next_sd_FrMw5MzCSmIAFIWA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FrMw5MzCSmIAFIWA');
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
  //appendnew_flow_dashboardComponent_Catch
}
