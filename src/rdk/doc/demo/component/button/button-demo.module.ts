

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "../../../../component/button/button";
import {RdkCheckBoxModule} from "../../../../component/checkbox/index";
import {ButtonBasicDemoComponent} from "./basic/basic";
import {ButtonDisableDemoComponent} from "./disabled/disabled";

const buttonDemoRoutes=[
    {
        path:'',
        redirectTo:'basic',
        pathMatch:'full'
    },
    {
        path:'basic', component: ButtonBasicDemoComponent
    },
    {
        path:'disable', component: ButtonDisableDemoComponent
    },
    {
        path:'**', //fallback router must in the last
        component: ButtonBasicDemoComponent
    }
];

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonBasicDemoComponent, ButtonDisableDemoComponent
    ],
    imports: [
        RouterModule.forChild(buttonDemoRoutes), RdkCheckBoxModule
    ],
    exports: [
        ButtonBasicDemoComponent, ButtonDisableDemoComponent
    ],
    providers: []
})
export class ButtonDemoModule { }