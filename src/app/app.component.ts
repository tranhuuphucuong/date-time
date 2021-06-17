import { Component, OnInit } from "@angular/core";
import { format } from "date-fns";
import { formatToTimeZone } from "src/utils/timezone";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  date = new Date();
  year = "";
  month = "";
  day = "";
  hour = "";
  minute = "";
  second = "";
  milliseconds = "";

  dateTime = {};
  dateTimeUTC = {};
  dateTimeLocal = {};

  dateTimeCustom = "abcd";

  timestamp = Date.now();

  ngOnInit() {
    setInterval(() => {
      const now = new Date();
      this.dateTimeCustom = formatToTimeZone(now, "yyyy MM dd, HH:mm:ss.SSS", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      this.year = format(now, "yyyy");
      this.month = format(now, "MM");
      this.day = format(now, "dd");
      this.hour = format(now, "HH");
      this.minute = format(now, "mm");
      this.second = format(now, "ss");
      this.milliseconds = format(now, "SSS");
      this.timestamp = now.getTime();

      this.dateTime = {
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        milliseconds: this.milliseconds,
        timezone: "local",
      };

      this.dateTimeUTC = {
        year: formatToTimeZone(now, "yyyy", { timeZone: "UTC" }),
        month: formatToTimeZone(now, "MM", { timeZone: "UTC" }),
        day: formatToTimeZone(now, "dd", { timeZone: "UTC" }),
        hour: formatToTimeZone(now, "HH", { timeZone: "UTC" }),
        minute: formatToTimeZone(now, "mm", { timeZone: "UTC" }),
        second: formatToTimeZone(now, "ss", { timeZone: "UTC" }),
        milliseconds: formatToTimeZone(now, "SSS", { timeZone: "UTC" }),
        timezone: "UTC",
      };

      this.dateTimeLocal = {
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        milliseconds: this.milliseconds,
        timezone: null,
      };
    }, 500);
  }

  // f() {

  //   new Date('2020-02-28T00:00:00.000Z')
  //   new Date(1610979315212)

  //   new Date('2020-02-28T00:00:00.000').toISOString()
  //   // output ??? depends on the local timezone

  //   new Date('2020-02-28T00:00:00.000+07:00').toISOString()
  //   // output 2020-02-27T17:00:00.000Z

  // }
}
