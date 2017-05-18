import { Component } from "@angular/core";
import {TimeGr} from "../../../../../service/time.service";


@Component({
  templateUrl: 'basic.html'
})
export class TimeBasicDemoComponent {
    public dateChange(message:any){
        console.log(message);
    }

    date = { year :2017,week:20}

    grItems = [
        {label: "Day", value: TimeGr.date},
        {label: "Week", value: TimeGr.week},
        {label: "Month", value: TimeGr.month}];

    recommended = ["now-15d","now-10d"];
}

