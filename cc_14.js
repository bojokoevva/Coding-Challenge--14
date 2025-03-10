// Task 2: Adding Support Tickets Dynamically
function addTicket(customerName, issueDescription, priority) {
    // Get the ticket container element where the tickets will be added
    const ticketContainer = document.getElementById('ticketContainer');
    
    // Create a div element to represent the ticket
    const ticketCard = document.createElement('div');
    ticketCard.classList.add('ticket-card'); // Add a class to the ticket card for styling
    
    // Create and add the customer name heading
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = customerName;
    
    // Create and add the issue description paragraph
    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = issueDescription;
    
    // Create and add the priority label paragraph
    const priorityLabel = document.createElement('p');
    priorityLabel.textContent = `Priority: ${priority}`;
    
    // Create and add the resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    
    // Add event listener for clicking the resolve button
    resolveButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        ticketContainer.removeChild(ticketCard); // Remove the ticket from the container
    });
    
    // Append all elements to the ticket card
    ticketCard.appendChild(nameHeading);
    ticketCard.appendChild(descriptionPara);
    ticketCard.appendChild(priorityLabel);
    ticketCard.appendChild(resolveButton);
    
    // Append the ticket card to the ticket container
    ticketContainer.appendChild(ticketCard);
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() {
    // Get all ticket cards in the container
    const allTickets = document.querySelectorAll('.ticket-card');
    
    // Convert the NodeList to an array and filter for high-priority tickets
    const highPriorityTickets = Array.from(allTickets).filter(ticket => {
        const priorityLabel = ticket.querySelector('p').textContent;
        return priorityLabel.includes('High'); // Check if the priority label contains 'High'
    });
    
    // Loop through all high-priority tickets and apply a style change
    highPriorityTickets.forEach(ticket => {
        ticket.style.backgroundColor = '#ffcccb'; // Change background color to light red for visibility
    });
}

// Task 4: Implementing Ticket Resolution with Event Bubbling
function setupTicketResolution() {
    // Get the ticket container element
    const ticketContainer = document.getElementById('ticketContainer');
    
    // Event listener for the ticket container (Event Bubbling)
    ticketContainer.addEventListener('click', function(event) {
        console.log("Ticket container clicked!"); // Log a message when any ticket is clicked
    });
    
    // Get all resolve buttons and add event listeners to them
    const resolveButtons = document.querySelectorAll('button');
    resolveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from bubbling up to the ticket container
            const ticketCard = button.parentElement; // Get the parent ticket card element
            ticketCard.remove(); // Remove the ticket card from the container
        });
    });
}
