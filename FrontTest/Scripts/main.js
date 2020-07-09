// import { Calendar } from '../node_modules/@fullcalendar/core/main.js';
// import dayGridPlugin from '../node_modules/@fullcalendar/daygrid/main.js';
// document.addEventListener('DOMContentLoaded', function () {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new Calendar(calendarEl, {
//         plugins: [dayGridPlugin]
//     });
//     calendar.render();
// });
import Vue from 'vue';
import App from './App.vue';
import './scss/main.scss';
import './scss/textColor.scss';
let div = document.createElement('div');
div.id = 'vueApp';
document.body.append(div);
new Vue({
    render: h => h(App),
}).$mount('#vueApp');
//# sourceMappingURL=main.js.map