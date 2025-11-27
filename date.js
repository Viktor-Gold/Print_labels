// Функция реверса даты YYYY-MM-DD → DD.MM.YYYY
function formatDateReverse(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
}

// Поле даты существует только на HomePage
const userDateInput = document.querySelector('#user_date');

// Кнопка очистки даты (тоже только на HomePage)
const clearBtn = document.querySelector('#clear_date');

// Если мы на HomePage и есть input
if (userDateInput) {
    // При изменении сохраняем дату в LocalStorage
    userDateInput.addEventListener('change', () => {
        localStorage.setItem('labelDate', userDateInput.value);
    });
}

// Если есть кнопка — добавляем очистку
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('labelDate');     // удаляем дату
        if (userDateInput) userDateInput.value = ""; // очищаем поле
    });
}

// На страницах этикеток ищем .date
const dateElements = document.querySelectorAll('.date');

if (dateElements.length > 0) {
    const savedDate = localStorage.getItem('labelDate');
    const formatted = formatDateReverse(savedDate);

    dateElements.forEach(el => {
        el.textContent = formatted;
    });
}
