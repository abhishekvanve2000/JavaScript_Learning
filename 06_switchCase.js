



var dayOfWeek = function(day) {
switch (day) {
    case 1:
        console.log(`${day}-'Monday'`);
        break;
    case 2:
        console.log(`${day}-'Tuesday'`);
        break;
    case 3:
        console.log(`${day}-'Wed'`);
        break;
    case 4:
        console.log(`${day}-'Thur'`);
        break;
    case 5:
        console.log(`${day}-'Friday'`);
        break;
     case 6:
        console.log(`${day}-'saturday'`);
        break;
    case 7:
        console.log(`${day}-'Sunday'`);
        break;

    default:
        console.log(`${day}-'Is Invalid Input'`);
        break;
    }
    console.log(`End Of Switch Case `);

};


dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(100);
dayOfWeek(20);
dayOfWeek(7);
dayOfWeek(85);
dayOfWeek(6);
dayOfWeek(null);
dayOfWeek(undefined);
dayOfWeek(`av`);

