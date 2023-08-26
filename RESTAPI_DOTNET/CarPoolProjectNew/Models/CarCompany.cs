using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class CarCompany
{
    public int Id { get; set; }

    public string CompanyName { get; set; } = null!;

    public virtual ICollection<CarModel> CarModels { get; set; } = new List<CarModel>();
}
