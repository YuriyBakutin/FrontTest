import { Calendar } from '../node_modules/@fullcalendar/core/main.js';
import dayGridPlugin from '../node_modules/@fullcalendar/daygrid/main.js';

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin]
    });

    calendar.render();
});