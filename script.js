// set current day, exact time, and current hour

const currentDay = moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
const currentTime = moment().format('h:mm:ss a');
const currentHour = moment().format('h');

// display date and time at top of page

document.getElementById('currentDay').textContent = currentDay;
document.getElementById('currentTime').textContent = currentTime;

// set text and hour sent to local storage 

$('.saveBtn').on('click', function() {
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
});

// checks to see what the number split off at the hour will be, then if that is less than equal to or greater than the current hour defined above will change the color of the block accordingly

function colorChange() {
    $('.time-block').each(function() {
    let block = parseInt($(this).attr('id').split('hour')[1]);
    
        if (block < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future')
        } 
        else if (block == currentHour) {
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

// loop over all 13 hour gets based off of changing number

for (let i =8;i <21;i++) {
    $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
}