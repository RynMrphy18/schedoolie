// display current day (and added time for reference) at the top of the page

const currentDay = moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
const currentTime = moment().format('h:mm:ss a');
const currentHour = moment().format('h');

document.getElementById('currentDay').textContent = currentDay;
document.getElementById('currentTime').textContent = currentTime;

$('.saveBtn').on('click', function() {
    console.log(this);
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
});

for (let i =8;i <21;i++) {
    $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
}

function colorChange() {
    $('.time-block').each(function() {
    let block = parseInt($(this).attr('id').split('hour')[1]);
    
        if (block < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future')
        } 
        else if (block === currentHour) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        } else if (block > currentHour) {
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        }
    })
}

colorChange();
