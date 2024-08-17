function isOpen() {
    const now = new Date();
    const day = now.getDay(); 
    const hours = now.getHours();

    const isWeekend = (day === 0 || day === 6); 
    const isWeekday = (day >= 1 && day <= 4);

    if (isWeekend) {

        return (hours >= 14 || hours < 4);
    } else if (isWeekday) {

        return (hours >= 16 || hours < 4);
    } else {

        return false;
    }
}

function updateStatus() {
    const statusDiv = document.getElementById('status');
    const open = isOpen();

    if (open) {
        statusDiv.textContent = 'Oyun şu anda açık!';
        statusDiv.style.color = 'green';
        statusDiv.style.textAlign = 'center'
    } else {
        statusDiv.textContent = 'Oyun kapalı.';
        statusDiv.style.color = 'red';
        statusDiv.style.textAlign = 'center'
    }
}

updateStatus();