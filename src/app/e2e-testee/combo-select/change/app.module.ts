import {NgModule} from "@angular/core";
import {ComboSelectChangeDemo} from "./app.component";
import {JigsawTileSelectModule} from "jigsaw/component/list-and-tile/tile";
import {JigsawComboSelectModule} from "jigsaw/component/combo-select";
import {CommonModule} from "@angular/common";
@NgModule({
    declarations: [ComboSelectChangeDemo],
    bootstrap: [ ComboSelectChangeDemo ],
    imports: [JigsawComboSelectModule,JigsawTileSelectModule, CommonModule]
})
export class ComboSelectChangeDemoModule{

}
