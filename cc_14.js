// Task 2: Adding Support Tickets Dynamically
function addTicket(customerName, issueDescription, priority) {
    const ticketContainer = document.getElementById('ticketContainer');
    
    // Create a new ticket card
    const ticketCard = document.createElement('div');
    ticketCard.classList.add('ticket-card');
    
    // Create ticket contents
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = customerName;
    
    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = issueDescription;
    
    const priorityLabel = document.createElement('p');
    priorityLabel.textContent = `Priority: ${priority}`;
    
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    
    // Resolve button functionality
    resolveButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        ticketContainer.removeChild(ticketCard); // Remove the ticket card
    });
    
    // Append elements to the ticket card
    ticketCard.appendChild(nameHeading);
    ticketCard.appendChild(descriptionPara);
    ticketCard.appendChild(priorityLabel);
    ticketCard.appendChild(resolveButton);
    
    // Append ticket card to the container
    ticketContainer.appendChild(ticketCard);
}

// Task 3: Highlight High Priority Tickets
function highlightHighPriorityTickets() {
    const allTickets = document.querySelectorAll('.ticket-card');
    allTickets.forEach(ticket => {
        const priorityText = ticket.querySelector('p').textContent;
        if (priorityText.includes('High')) {
            ticket.style.backgroundColor = '#ffcccb'; // Highlight high priority tickets
        }
    });
}

// Task 4: Implement Event Bubbling and Resolving Tickets
function setupTicketResolution() {
    const ticketContainer = document.getElementById('ticketContainer');
    
    // Event listener for bubbling
    ticketContainer.addEventListener('click', function(event) {
        console.log("Ticket container clicked!");
    });
    
    // Resolve ticket functionality
    const resolveButtons = document.querySelectorAll('.ticket-card button');
    resolveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent bubbling up to the container
            const ticketCard = button.parentElement;
            ticketCard.remove(); // Remove the ticket
        });
    });
}

// Task 5: Inline Editing of Tickets
function setupInlineEditing() {
    const allTickets = document.querySelectorAll('.ticket-card');
    
    allTickets.forEach(ticket => {
        ticket.addEventListener('dblclick', function() {
            const nameHeading = ticket.querySelector('h3');
            const descriptionPara = ticket.querySelector('p');
            const priorityLabel = ticket.querySelectorAll('p')[1];
            
            // Make fields editable
            nameHeading.innerHTML = `<input type="text" value="${nameHeading.textContent}" />`;
            descriptionPara.innerHTML = `<textarea>${descriptionPara.textContent}</textarea>`;
            priorityLabel.innerHTML = `<input type="text" value="${priorityLabel.textContent}" />`;
            
            // Create and append save button
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            ticket.appendChild(saveButton);
            
            // Save changes on button click
            saveButton.addEventListener('click', function() {
                const newName = ticket.querySelector('input[type="text"]').value;
                const newDescription = ticket.querySelector('textarea').value;
                const newPriority = ticket.querySelector('input[type="text"]:nth-of-type(2)').value;
                
                // Update ticket with new values
                nameHeading.textContent = newName;
                descriptionPara.textContent = newDescription;
                priorityLabel.textContent = newPriority;
                
                // Remove save button after saving
                ticket.removeChild(saveButton);
            });
        });
    });
}