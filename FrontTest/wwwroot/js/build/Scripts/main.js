import { Calendar } from '../node_modules/@fullcalendar/core/main.js';
import main$2 from '../node_modules/@fullcalendar/daygrid/main.js';

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
        plugins: [main$2]
    });
    calendar.render();
});
