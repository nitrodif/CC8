document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const mealPreferences = [];
    const mealPreferenceCheckboxes = document.getElementsByName('mealPreference');

    for (let i = 0; i < mealPreferenceCheckboxes.length; i++) {
        if (mealPreferenceCheckboxes[i].checked) {
            mealPreferences.push(mealPreferenceCheckboxes[i].value);
        }
    }

    if (!name || !email || !eventDate || !mealPreferences.length) {
        alert('Please fill out all required fields.');
        return;
    }

    const registrationDetails = document.getElementById('registrationDetails');
    registrationDetails.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Event Date: ${eventDate}</p>
        <p>Meal Preference(s): ${mealPreferences.join(', ')}</p>
    `;
});