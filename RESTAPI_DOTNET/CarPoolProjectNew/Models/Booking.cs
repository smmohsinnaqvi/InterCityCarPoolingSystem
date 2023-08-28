using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class Booking
{
    public int Id { get; set; }

    public int PassengerId { get; set; }

    public int RideId { get; set; }

    public DateTime? Time { get; set; }

    public int NoOfSeats { get; set; }

    public int TotalPrice { get; set; }

    public string? Status { get; set; }

    public virtual User Passenger { get; set; } = null!;

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Ride Ride { get; set; } = null!;
}
