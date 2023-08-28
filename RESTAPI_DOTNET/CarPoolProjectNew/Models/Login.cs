using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class Login
{
    public int Id { get; set; }

    public int RollId { get; set; }

    public string LoginId { get; set; } = null!;

    public string Password { get; set; } = null!;

    public ulong Status { get; set; }

    public virtual Role Roll { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
