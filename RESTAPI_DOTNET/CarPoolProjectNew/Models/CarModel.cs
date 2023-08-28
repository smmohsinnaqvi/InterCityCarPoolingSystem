using System;
using System.Collections.Generic;

namespace CarPoolProjectNew.Models;

public partial class CarModel
{
    public int Id { get; set; }

    public string ModelName { get; set; } = null!;

    public string FuelType { get; set; } = null!;

    public string ModelType { get; set; } = null!;

    public int? CompanyId { get; set; }

    public virtual CarCompany? Company { get; set; }

    public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
}
