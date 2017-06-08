/**
 * Created by 10177553 on 2017/5/17.
 */
import { Component, OnInit } from '@angular/core';
import {ArrayCollection} from "../../../../../core/data/array-collection";

@Component({
    template: `
        <rdk-slider min="10" max="100" [value]="value" [vertical]="vertical" style="height: 360px; width: 120px;"></rdk-slider>
    `
})
export class SliderVerticalDemo implements OnInit {

    vertical: boolean = true;

    value = new ArrayCollection([30, 40, 60]);

    constructor() { }

    ngOnInit() { }

}
