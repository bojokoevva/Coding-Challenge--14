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
