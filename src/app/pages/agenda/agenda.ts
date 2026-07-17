import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { FormsModule } from '@angular/forms';
import { DateClickArg } from '@fullcalendar/interaction';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [
    FullCalendarModule,
    FormsModule
  ],
  templateUrl: './agenda.html',
  styleUrls: ['./agenda.css']
})
export class AgendaComponent {

  showModal = false;
  selectedDate = '';
  eventTitle = '';

  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin
    ],
    initialView: 'dayGridMonth',
    locale: ptBrLocale,
    height: 'auto',

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },

    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
    },

    selectable: true,
    editable: true,

    // dateClick: (info: DateClickArg) => {
    //   this.selectedDate = info.dateStr;
    //   this.showModal = true;
    // },

    dateClick: this.abrirModalCalendario.bind(this),

    events: [
      {
        title: 'Meu primeiro evento',
        date: '2026-07-10'
      }
    ]
  };

  cancelar() {
    this.showModal = false;
    this.eventTitle = '';
  }

  salvar() {
    console.log(this.eventTitle);
    console.log(this.selectedDate);

    this.showModal = false;
    this.eventTitle = '';
  }

  abrirModalCalendario(info: DateClickArg) {
  this.selectedDate = info.dateStr;
  this.showModal = true;
}

  
  

}