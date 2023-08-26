using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int BookingId { get; set; }

    public int PassengerId { get; set; }

    public int Amount { get; set; }

    public DateTime? DateTime { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual Booking Booking { get; set; } = null!;

    public virtual User Passenger { get; set; } = null!;
}
