import {readDb, writeDb} from './CRUD.js';

function habSubmit(){
    const form = document.getElementById('habitSubmit');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(form);
        const username = formData.get('habit');
        
        const habit = {
            name: formData.get('habit'),
            duration: formData.get('duration'),
            date: formData.get('date')
        };
        writeDb(habit);
    });
}

habSubmit();
const data = {
    name: 'Running',
    duration: 16,
    date: "7/30/2025"
};
//writeDb(data['data']);
//console.log(readDb());
//console.log(JSON.parse(localStorage.getItem('habits')));
//localStorage.clear('habits');