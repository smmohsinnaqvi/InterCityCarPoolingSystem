using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class Role
{
    public int Id { get; set; }

    public string? Role1 { get; set; }

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
