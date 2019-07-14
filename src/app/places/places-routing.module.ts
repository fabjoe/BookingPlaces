import { PlacesPage } from './places.page';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: PlacesPage,
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: './discover/discover.module#DiscoverPageModule'
                    }
                ]
            },
            {
                path: ':placeId',
                children: [
                    {
                        path: ':placeId',
                        loadChildren: './offers/discover.module#DiscoverPageModule'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlacesRoutingModule {

}
