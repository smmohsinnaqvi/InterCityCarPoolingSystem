using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class User
{
    public int Id { get; set; }

    public string Password { get; set; } = null!;

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public DateOnly Dob { get; set; }

    public string Aadhar { get; set; } = null!;

    public string? Licence { get; set; }

    public string PhoneNo { get; set; } = null!;

    public string PrimaryEmail { get; set; } = null!;

    public string? SecondaryEmail { get; set; }

    public int UserId { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual ICollection<CoPassenger> CoPassengers { get; set; } = new List<CoPassenger>();

    public virtual ICollection<PassengersReview> PassengersReviews { get; set; } = new List<PassengersReview>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Ride> Rides { get; set; } = new List<Ride>();

    public virtual Login UserNavigation { get; set; } = null!;

    public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
}
