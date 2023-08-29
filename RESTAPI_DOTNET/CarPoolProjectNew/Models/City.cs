using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class City
{
    public int Id { get; set; }

    public string? City1 { get; set; }

    public int Sid { get; set; }

    public virtual ICollection<Ride> RideEndLocationNavigations { get; set; } = new List<Ride>();

    public virtual ICollection<Ride> RideStartLocationNavigations { get; set; } = new List<Ride>();

    public virtual State SidNavigation { get; set; } = null!;
}
