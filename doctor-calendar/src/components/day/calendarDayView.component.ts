import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';

const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'mwl-day-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'calendarDayView.component.html'
})
export class DayViewComponent {
    view: string = 'day';

    viewDate: Date = new Date();

    events: CalendarEvent[] = [
        {
            start: new Date('2017-09-30T15:24:00'),
            end: new Date('2017-09-30T15:54:00'),
            title: 'Joan Dow ',
            color: colors.red
        },
        {
            start: new Date('2017-09-30T12:24:00'),
            end: new Date('2017-09-30T13:24:00'),
            title: 'Ben Biver',
            color: colors.yellow
        },
        {
            start: new Date('2017-09-30T14:24:00'),
            end: new Date('2017-09-30T15:24:00'),
            title: 'Jan Jose Padro',
            color: colors.blue
        },
        {
            start: new Date('2017-09-30T11:30:00'),
            end: new Date('2017-09-30T12:50:00'),
            title: 'A draggable and resizable event',
            color: colors.yellow,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            draggable: true
        }
    ];
}