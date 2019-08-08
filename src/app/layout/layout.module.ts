import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { CreateadsComponent } from './createads/createads.component';
import { CreateproductsModule } from './createproducts/createproducts.module';
import { CreateproductsComponent } from './createproducts/createproducts.component';
import { CreateadsModule } from './createads/createads.module';
import { DealsModule } from './deals/deals.module';
import { DealsComponent } from '../Layout/deals/deals.component';
import { AdsModule } from '../Layout/ads/ads.module';
import { EditModule } from '../Layout/edit/edit.module';
import { EditComponent } from '../Layout/edit/edit.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
    ],
    declarations: [ LayoutComponent, NavComponent, TopnavComponent, SidebarComponent ]

})
export class LayoutModule { }
