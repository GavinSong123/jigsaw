import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TrustedHtmlFullComponent} from './app.component';
import {JigsawTrustedHtmlModule} from "jigsaw/directive/trusted-html/trusted-html";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";

@NgModule({
    imports: [CommonModule, FormsModule, JigsawTrustedHtmlModule, JigsawDemoDescriptionModule],
    declarations: [TrustedHtmlFullComponent],
    bootstrap: [TrustedHtmlFullComponent]
})
export class TrustedHtmlFullModule {
}
