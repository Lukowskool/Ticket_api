class Response{  
    id;
    customerId;
    ticketId;
    date;
    choice;
    current;
    constructor(id, customerId, ticketId, date, choice, current){
        this.id = id;
        this.customerId = customerId;
        this.ticketId = ticketId;
        this.date = date;
        this.choice = choice;
        this.current = current;
    }
}