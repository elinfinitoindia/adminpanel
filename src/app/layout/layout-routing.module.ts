import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';



const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'createdeals',
                loadChildren: './create-deals/create-deals.module#CreateDealsModule'
            },
            {
                path: 'createads',
                loadChildren: './createads/createads.module#CreateadsModule'
            },
            {
                
                path:'deals',
                loadChildren:'./deals/deals.module#DealsModule'
            }
            ,
            {
                path:'edit',
                loadChildren:'./edit/edit.module#EditModule'
            },
            {
                path:'products',
                loadChildren:'./createproducts/createproducts.module#CreateproductsModule'
            },
            {
                path:'enterdata',
                loadChildren:'./enterdata/enterdata.module#EnterdataModule'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
