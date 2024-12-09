document.addEventListener('DOMContentLoaded', () => {
    // Query for the submit button 
    const submit = document.getElementById('submit');
    //for the input button
    const newTask = document.getElementById('task');
    //for the list
    const taskList = document.getElementById('tasks');

    //to ensure that the submit button is off at the start when no text is there
    submit.disabled = true;

    // this enables submit button when input is typed
    newTask.addEventListener('input', () => {
        submit.disabled = newTask.value.trim() === '';
    });

    // this part is for the form submission
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Stops the form from refreshing the page when enter is pressed 

        const taskValue = newTask.value.trim();

        if (taskValue !== '') {
            // this Creates a new list item when the submit button is pressed
            const listItem = document.createElement('li');
            listItem.textContent = taskValue; // Set the task text
            taskList.appendChild(listItem); // Add the item to the list

            // Clears the input field and disable the submit button
            newTask.value = '';
            submit.disabled = true;

           
        }

        return false; // Explicitly prevent any default action
    });
});





