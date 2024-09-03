// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from 'docx'; //_splitter_
import { saveAs } from 'file-saver'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-payments',
  templateUrl: './payments.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class paymentsComponent {
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
      this.sd_fHcoDPSB0z1vDVXX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fHcoDPSB0z1vDVXX(bh) {
    try {
      bh = this.sd_Tfn4QOCsxq8lVtBT(bh);
      //appendnew_next_sd_fHcoDPSB0z1vDVXX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fHcoDPSB0z1vDVXX');
    }
  }

  getPayments(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2P1st9zqebt5Hsfb(bh);
      //appendnew_next_getPayments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Nnrgbpq27wtUxGw');
    }
  }

  onFilter(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_5(bh);
      //appendnew_next_onFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6JxL7BBJWyHo1FHr');
    }
  }

  download(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WNQ1SZJh1cFt0hin(bh);
      //appendnew_next_download
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x3Im7h3fE6bmLkSr');
    }
  }
  //appendnew_flow_paymentsComponent_start

  sd_Tfn4QOCsxq8lVtBT(bh) {
    try {
      let outputVariables = this.getPayments();

      bh = this.sd_lUIowlUXxY76OESe(bh);
      //appendnew_next_sd_Tfn4QOCsxq8lVtBT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tfn4QOCsxq8lVtBT');
    }
  }

  sd_lUIowlUXxY76OESe(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_1QCiHRVLFibpDCe4(bh);
      //appendnew_next_sd_lUIowlUXxY76OESe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lUIowlUXxY76OESe');
    }
  }

  sd_1QCiHRVLFibpDCe4(bh) {
    try {
      this.page.userData = this.page.userData;
      this.page.table = this.page.table;
      bh = this.sd_2j12KdKLxhKZUlje(bh);
      //appendnew_next_sd_1QCiHRVLFibpDCe4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1QCiHRVLFibpDCe4');
    }
  }

  sd_2j12KdKLxhKZUlje(bh) {
    try {
      bh = this.sd_QnmvNuIEpdDKWSUG(bh);
      //appendnew_next_sd_2j12KdKLxhKZUlje
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2j12KdKLxhKZUlje');
    }
  }

  sd_QnmvNuIEpdDKWSUG(bh) {
    try {
      //appendnew_next_sd_QnmvNuIEpdDKWSUG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QnmvNuIEpdDKWSUG');
    }
  }

  sd_2P1st9zqebt5Hsfb(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_gJoIX2ua6KNhKDUx(bh);
      //appendnew_next_sd_2P1st9zqebt5Hsfb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2P1st9zqebt5Hsfb');
    }
  }

  sd_gJoIX2ua6KNhKDUx(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-monthly-payments';

      page.loading = true;
      bh = this.sd_KBAnFOmvCOQ91IV7(bh);
      //appendnew_next_sd_gJoIX2ua6KNhKDUx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJoIX2ua6KNhKDUx');
    }
  }

  async sd_KBAnFOmvCOQ91IV7(bh) {
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
      bh = this.sd_4Aia00ADsTJYqWmW(bh);
      //appendnew_next_sd_KBAnFOmvCOQ91IV7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KBAnFOmvCOQ91IV7');
    }
  }

  sd_4Aia00ADsTJYqWmW(bh) {
    try {
      const page = this.page;
      page.table = page.result.filter((user: any) => {
        return page.userData.policyNumber == user.policyNumber;
      });

      page.backupapplicationsDatasource = page.table;
      console.log('from api', page.table);

      page.loading = false;

      //appendnew_next_sd_4Aia00ADsTJYqWmW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Aia00ADsTJYqWmW');
    }
  }

  sd_iBlFYTlpoczCmWts_5(bh) {
    try {
      const page = this.page;
      if (!page.backupapplicationsDatasource) {
        page.backupapplicationsDatasource = [...page.table];
      }

      const searchValue = (
        bh.input.filterEvent.target as HTMLInputElement
      ).value
        .trim()
        .toLowerCase();

      page.searchValue = searchValue;

      if (searchValue) {
        const searchResults = page.backupapplicationsDatasource.filter(
          (row) => {
            const dateStr = new Date(row.date)
              .toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
              .toLowerCase();

            return (
              (row.amount &&
                row.amount.toString().toLowerCase().includes(searchValue)) ||
              (row.date && dateStr.includes(searchValue)) ||
              (row.policyNumber &&
                row.policyNumber.toString().toLowerCase().includes(searchValue))
            );
          }
        );
        page.table = searchResults;
      } else {
        // Reset to original data if search value is empty
        page.table = [...page.backupapplicationsDatasource];
      }

      //appendnew_next_sd_iBlFYTlpoczCmWts_5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w7DI8EIWdzTZVOvW');
    }
  }

  sd_WNQ1SZJh1cFt0hin(bh) {
    try {
      const page = this.page;
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              // Title
              new Paragraph({
                text: 'Proof of Payment',
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                thematicBreak: true,
              }),

              // Add some spacing
              new Paragraph({
                text: '',
                spacing: { after: 200 },
              }),

              // Table with headers and data
              new Table({
                width: { size: 10000, type: WidthType.DXA }, // Ensure the table width is large enough
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        width: { size: 4000, type: WidthType.DXA }, // Increase cell width
                        children: [
                          new Paragraph({
                            text: 'Policy Number',
                          }),
                        ],
                      }),
                      new TableCell({
                        width: { size: 3000, type: WidthType.DXA }, // Adjust cell width
                        children: [
                          new Paragraph({
                            text: 'Date',
                          }),
                        ],
                      }),
                      new TableCell({
                        width: { size: 3000, type: WidthType.DXA }, // Adjust cell width
                        children: [
                          new Paragraph({
                            text: 'Amount',
                          }),
                        ],
                      }),
                    ],
                  }),
                  ...page.table.map(
                    (row) =>
                      new TableRow({
                        children: [
                          new TableCell({
                            width: { size: 4000, type: WidthType.DXA },
                            children: [
                              new Paragraph(row.policyNumber.toString()),
                            ],
                          }),
                          new TableCell({
                            width: { size: 3000, type: WidthType.DXA },
                            children: [
                              new Paragraph(
                                new Date(row.date).toLocaleDateString()
                              ),
                            ],
                          }),
                          new TableCell({
                            width: { size: 3000, type: WidthType.DXA },
                            children: [new Paragraph(row.amount.toString())],
                          }),
                        ],
                      })
                  ),
                ],
              }),

              // Add some spacing
              new Paragraph({
                text: '',
                spacing: { after: 200 },
              }),

              // Footer
              new Paragraph({
                text: 'Thank you for your payment.',
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                text: 'For any queries, please contact us at support@example.com.',
                alignment: AlignmentType.CENTER,
              }),
            ],
          },
        ],
      });

      // Save the document as a Word file
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'ProofOfPayment.docx');
      });

      //appendnew_next_sd_WNQ1SZJh1cFt0hin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WNQ1SZJh1cFt0hin');
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
  //appendnew_flow_paymentsComponent_Catch
}
