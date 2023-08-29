using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class State
{
    public int Id { get; set; }

    public string State1 { get; set; } = null!;

    public virtual ICollection<City> Cities { get; set; } = new List<City>();
}
