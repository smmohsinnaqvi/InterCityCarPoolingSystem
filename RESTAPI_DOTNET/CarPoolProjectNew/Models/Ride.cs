using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class Ride
{
    public int Id { get; set; }

    public int CarownerId { get; set; }

    public int StartLocation { get; set; }

    public int EndLocation { get; set; }

    public int VehicleId { get; set; }

    public TimeOnly? TimeOfDeparture { get; set; }

    public TimeOnly? TimeOfArival { get; set; }

    public int PricePerSeat { get; set; }

    public int AvailableSeats { get; set; }

    public string? Status { get; set; }

    public DateOnly? DateOfJourney { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual User Carowner { get; set; } = null!;

    public virtual City EndLocationNavigation { get; set; } = null!;

    public virtual ICollection<PassengersReview> PassengersReviews { get; set; } = new List<PassengersReview>();

    public virtual City StartLocationNavigation { get; set; } = null!;

    public virtual Vehicle Vehicle { get; set; } = null!;
}
