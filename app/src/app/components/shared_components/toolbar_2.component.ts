// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { client_profileComponent } from 'app/components/Client/client_profile.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-toolbar_2',
  templateUrl: './toolbar_2.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class toolbar_2Component {
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
      this.sd_cb00uQetFrQWkra3(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_cb00uQetFrQWkra3(bh) {
    try {
      bh = this.sd_vYroLyfoxwBQaGzc(bh);
      //appendnew_next_sd_cb00uQetFrQWkra3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cb00uQetFrQWkra3');
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
      bh = this.sd_9Non5yXQbdCYie4V(bh);
      //appendnew_next_fetchLoggedInUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BqYNO5CiWcqnX5vX');
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
      bh = this.sd_HycyXKRHau9H4Wlm(bh);
      //appendnew_next_getInitials
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nipWZtHNBGU7xolC');
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
      bh = this.sd_Fpnzq2JyS2V6MIrG(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nNb0HtOaBDeVyIVt');
    }
  }

  editProfile(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oyctM1WIv8S3DcIA(bh);
      //appendnew_next_editProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qvDYKL1VrIxeddsI');
    }
  }
  //appendnew_flow_toolbar_2Component_start

  sd_vYroLyfoxwBQaGzc(bh) {
    try {
      this.page.messages = undefined;
      bh = this.sd_Qfbqflcpzj8qAiMC(bh);
      //appendnew_next_sd_vYroLyfoxwBQaGzc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vYroLyfoxwBQaGzc');
    }
  }

  sd_Qfbqflcpzj8qAiMC(bh) {
    try {
      bh = this.sd_El3dos7jXdf6N9R0(bh);
      //appendnew_next_sd_Qfbqflcpzj8qAiMC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qfbqflcpzj8qAiMC');
    }
  }

  sd_El3dos7jXdf6N9R0(bh) {
    try {
      let outputVariables = this.fetchLoggedInUser();

      bh = this.sd_9ScCxX3UHpaaXEJa(bh);
      //appendnew_next_sd_El3dos7jXdf6N9R0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_El3dos7jXdf6N9R0');
    }
  }

  sd_9ScCxX3UHpaaXEJa(bh) {
    try {
      this.page.navItem = 'Home';
      this.page.selectedItem = 0;
      this.page.name = this.page.user.name;
      this.page.surname = this.page.user.surname;
      bh = this.sd_qGoGH6Y3O30tcSxQ(bh);
      //appendnew_next_sd_9ScCxX3UHpaaXEJa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9ScCxX3UHpaaXEJa');
    }
  }

  sd_qGoGH6Y3O30tcSxQ(bh) {
    try {
      let outputVariables = this.getInitials();

      //appendnew_next_sd_qGoGH6Y3O30tcSxQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qGoGH6Y3O30tcSxQ');
    }
  }

  sd_9Non5yXQbdCYie4V(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      this.sd_BkggsqOnzgFFmLRw(bh);
      //appendnew_next_sd_9Non5yXQbdCYie4V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Non5yXQbdCYie4V');
    }
  }

  sd_BkggsqOnzgFFmLRw(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.user.role);
      //appendnew_next_sd_BkggsqOnzgFFmLRw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BkggsqOnzgFFmLRw');
    }
  }

  sd_HycyXKRHau9H4Wlm(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_HXleDZpb9SZylXzu(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_6vaOndP0Cwy0rSKB(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.user.role,
          'director',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_MtFbk6Wu24EqgsFA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HycyXKRHau9H4Wlm');
    }
  }

  sd_HXleDZpb9SZylXzu(bh) {
    try {
      const page = this.page;
      page.name = page.name.charAt(0).toUpperCase();
      page.surname = page.surname.charAt(0).toUpperCase();

      //appendnew_next_sd_HXleDZpb9SZylXzu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HXleDZpb9SZylXzu');
    }
  }

  sd_6vaOndP0Cwy0rSKB(bh) {
    try {
      const page = this.page;
      page.name = (page.user.firstName?.charAt(0) || '').toUpperCase();
      page.surname = (page.user.lastName?.charAt(0) || '').toUpperCase();
      //appendnew_next_sd_6vaOndP0Cwy0rSKB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6vaOndP0Cwy0rSKB');
    }
  }

  sd_MtFbk6Wu24EqgsFA(bh) {
    try {
      const page = this.page;
      page.name = page.name.charAt(0).toUpperCase();
      page.surname = page.surname.charAt(0).toUpperCase();

      //appendnew_next_sd_MtFbk6Wu24EqgsFA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MtFbk6Wu24EqgsFA');
    }
  }

  sd_Fpnzq2JyS2V6MIrG(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      bh = this.sd_FIg4SeU3BpXnM2sj(bh);
      //appendnew_next_sd_Fpnzq2JyS2V6MIrG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fpnzq2JyS2V6MIrG');
    }
  }

  async sd_FIg4SeU3BpXnM2sj(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_FIg4SeU3BpXnM2sj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FIg4SeU3BpXnM2sj');
    }
  }

  sd_oyctM1WIv8S3DcIA(bh) {
    try {
      const client_profileDialog = this.__page_injector__.get(MatDialog);
      const client_profileDialogRef = client_profileDialog.open(
        client_profileComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oyctM1WIv8S3DcIA');
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
  //appendnew_flow_toolbar_2Component_Catch
}
