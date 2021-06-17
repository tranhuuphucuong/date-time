import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns'

@Component({
  selector: 'date-time',
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent implements OnInit {
  @Input() dateTime: {
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    milliseconds?: string;
    timezone?: string;
  } = {}

  @Input() timestamp = 0;

  ngOnInit() {
  }
}
