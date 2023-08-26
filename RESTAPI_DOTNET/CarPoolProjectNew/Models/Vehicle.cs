using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class Vehicle
{
    public int Id { get; set; }

    public int CarownerId { get; set; }

    public int ModelId { get; set; }

    public int Year { get; set; }

    public string Color { get; set; } = null!;

    public string RcBook { get; set; } = null!;

    public virtual User Carowner { get; set; } = null!;

    public virtual CarModel Model { get; set; } = null!;

    public virtual ICollection<Ride> Rides { get; set; } = new List<Ride>();
}
