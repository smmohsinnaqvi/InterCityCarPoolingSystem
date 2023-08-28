using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class CoPassenger
{
    public int Id { get; set; }

    public int PassengerId { get; set; }

    public string AadharNo { get; set; } = null!;

    public string? PhoneNo { get; set; }

    public string? Email { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public virtual User Passenger { get; set; } = null!;
}
