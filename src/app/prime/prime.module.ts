import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import {MenuModule} from "primeng/menu";
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AutoFocusModule } from 'primeng/autofocus';
import {InputTextModule} from "primeng/inputtext";
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import {ToastModule} from "primeng/toast";
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { TimelineModule } from 'primeng/timeline';
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    CardModule,
    ImageModule,
    RatingModule,
    DividerModule,
    ScrollTopModule,
    AutoFocusModule,
    InputTextModule,
    SliderModule,
    SpeedDialModule,
    ToastModule,
    PanelModule,
    DialogModule,
    TimelineModule
  ]
})
export class PrimeModule { }