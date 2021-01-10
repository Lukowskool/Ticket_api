package com.ticketapp.ticketsapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.time.*;
import java.util.Date;


@Data
@Entity
@NoArgsConstructor
@Table(name = "ticket")
public class Ticket {
    @Id
    private int id;

    public String title;

    public int prix;

    public Date


}
