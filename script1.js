function weekDay(size, day, color) {
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя'];
    const container = document.getElementById('days-container');
    container.innerHTML = ''; // Очищаємо контейнер перед додаванням
    days.forEach((currentDay, index) => {
        const dayElement = document.createElement('div');
        dayElement.textContent = currentDay;
        dayElement.style.fontSize = size + 'px';
        dayElement.style.color = (index + 1 === day) ? color : 'black';
        dayElement.className = 'day';
        container.appendChild(dayElement);
    });
}

weekDay(50, 6, 'red');
