import {Component, ViewChild, ElementRef} from "@angular/core";

import {UseTooltipComponent} from './use-tooltip/use-tooltip';

import {
    PopupService, PopupOptions, PopupPositionType
} from '../../../../../core/service/popup.service';

@Component({
    templateUrl: 'tooltip.html'
})
export class TooltipDemoComponent {
    private _componentId: number;

    @ViewChild("insertPlace", {read: ElementRef}) insertPlaceEl: ElementRef;

    constructor(private _popupService: PopupService) {
    }

    popup() {
        this._componentId = this._popupService.popup(UseTooltipComponent, this._getTooltipOptions(this.insertPlaceEl));
    }

    close() {
        this._popupService.close(this._componentId);
    }

    private _getTooltipOptions(insertPlaceEl: ElementRef): PopupOptions {
        return {
            modal: false, //是否模态
            pos: insertPlaceEl, //插入点
            posOffset: { //偏移位置
                top: -8,
                left: 0
            },
            posType: PopupPositionType.absolute, //定位类型
        };
    }

}
