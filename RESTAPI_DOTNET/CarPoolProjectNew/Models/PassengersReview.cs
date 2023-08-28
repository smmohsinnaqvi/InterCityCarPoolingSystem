using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class PassengersReview
{
    public int Id { get; set; }

    public int PassengerId { get; set; }

    public int RideId { get; set; }

    public double? Rating { get; set; }

    public string? Comments { get; set; }

    public virtual User Passenger { get; set; } = null!;

    public virtual Ride Ride { get; set; } = null!;
}
