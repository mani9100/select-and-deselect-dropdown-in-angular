import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TruncateModule } from 'ng2-truncate';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FileHelpersModule } from 'ngx-file-helpers';
import { FileUploadModule } from 'ng2-file-upload';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { sharedDirectiveModule } from '../../_directives/sharedDirectives';
import { MaterialModule } from '../../_shared/material.module';
import { PriorityReportRoutes } from './priority.routing';
import { PriorityReportManageComponent } from './manage/manage.component';
import { DetailedPriorityReportsComponent } from './detailed-priority-reports/detailed-priority-reports.component';

 
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(PriorityReportRoutes),
        sharedDirectiveModule,
        MaterialModule,
       TranslateModule,
       TruncateModule,
       FlexLayoutModule,
       PerfectScrollbarModule,
       FileHelpersModule,
       FileUploadModule,
       AmazingTimePickerModule,
       NgxMaterialTimepickerModule
 ],
 declarations: [
    PriorityReportManageComponent,
    DetailedPriorityReportsComponent
  ],

  entryComponents: [],
  providers: [DatePipe]
    })
export class PriorityReportModule { }
