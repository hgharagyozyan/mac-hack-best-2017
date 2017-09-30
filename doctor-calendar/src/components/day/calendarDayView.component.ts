import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
    selector: 'mwl-day-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'calendarDayView.component.html'
})
export class DayViewComponent {
    view: string = 'day';

    viewDate: Date = new Date();

    events: CalendarEvent[] = [];
}