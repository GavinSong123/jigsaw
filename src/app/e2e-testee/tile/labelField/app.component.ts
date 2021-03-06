import {Component, Renderer2, ViewContainerRef} from "@angular/core";
import {ArrayCollection} from "jigsaw/core/data/array-collection";

@Component({
  templateUrl: './app.component.html'
})
export class TileselectLabelFieldComponent {
    citys = new ArrayCollection([
        {name: "北京"},
        {name: "上海"},
        {name: "南京"},
        {name: "深圳"},
        {name: "长沙"},
        {name: "西安"}
    ]);
    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2) {
    }
}

