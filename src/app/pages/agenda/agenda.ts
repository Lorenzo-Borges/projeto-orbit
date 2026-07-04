import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './agenda.html',
  styleUrls: ['./agenda.css']
})
export class AgendaComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',

    selectable: true,
    editable: true,

    dateClick: (info) => {
      alert('Dia clicado: ' + info.dateStr);
    },

    events: [
      {
        title: 'Meu primeiro evento',
        date: '2026-07-10'
      }
    ]
  };

}