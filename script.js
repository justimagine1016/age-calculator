function calculateAge() {
    // Get the user's input date and parse it into a JavaScript Date object.
    let birthDate = new Date(userInput1.value);

    // Extract day, month, and year components from the birth date.
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Adding +1 because months are 0-based.
    let y1 = birthDate.getFullYear();

    // Get the current date.
    let today = new Date();

    // Extract day, month, and year components from the current date.
    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    // Initialize variables to store the calculated age components.
    let d3, m3, y3;

    // Calculate the age in years.
    y3 = y2 - y1;

    // Calculate the age in months.
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 - m1 + m2;
    }

    // Calculate the age in days.
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Handle negative month values by adjusting the year and month.
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the calculated age in the HTML element with ID "result."
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
