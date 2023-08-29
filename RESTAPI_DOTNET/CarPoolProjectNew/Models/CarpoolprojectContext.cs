using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CarPoolProjectNew.Models;

public partial class CarpoolprojectContext : DbContext
{
    public CarpoolprojectContext()
    {
    }

    public CarpoolprojectContext(DbContextOptions<CarpoolprojectContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<CarCompany> CarCompanies { get; set; }

    public virtual DbSet<CarModel> CarModels { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<CoPassenger> CoPassengers { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<PassengersReview> PassengersReviews { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Ride> Rides { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<State> States { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=carpoolproject", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("booking");

            entity.HasIndex(e => e.RideId, "ride_id_fk_idx");

            entity.HasIndex(e => e.PassengerId, "user_id_fk1_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.NoOfSeats).HasColumnName("no_of_seats");
            entity.Property(e => e.PassengerId).HasColumnName("passenger_id");
            entity.Property(e => e.RideId).HasColumnName("ride_id");
            entity.Property(e => e.Status)
                .HasMaxLength(100)
                .HasColumnName("status");
            entity.Property(e => e.Time)
                .HasMaxLength(6)
                .HasColumnName("time");
            entity.Property(e => e.TotalPrice).HasColumnName("total_price");

            entity.HasOne(d => d.Passenger).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.PassengerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk1");

            entity.HasOne(d => d.Ride).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.RideId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ride_id_fk");
        });

        modelBuilder.Entity<CarCompany>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("car_company");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(100)
                .HasColumnName("company_name");
        });

        modelBuilder.Entity<CarModel>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("car_models");

            entity.HasIndex(e => e.CompanyId, "Company_id_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyId).HasColumnName("Company_id");
            entity.Property(e => e.FuelType)
                .HasMaxLength(100)
                .HasColumnName("fuel_type");
            entity.Property(e => e.ModelName)
                .HasMaxLength(100)
                .HasColumnName("model_name");
            entity.Property(e => e.ModelType)
                .HasMaxLength(100)
                .HasColumnName("model_type");

            entity.HasOne(d => d.Company).WithMany(p => p.CarModels)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("Company_id_fk");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("cities");

            entity.HasIndex(e => e.Sid, "sid_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City1)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Sid).HasColumnName("sid");

            entity.HasOne(d => d.SidNavigation).WithMany(p => p.Cities)
                .HasForeignKey(d => d.Sid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("sid_fk");
        });

        modelBuilder.Entity<CoPassenger>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("co_passengers");

            entity.HasIndex(e => e.PassengerId, "user_id_fk2_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AadharNo)
                .HasMaxLength(45)
                .HasColumnName("aadhar_no");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(45)
                .HasColumnName("fname");
            entity.Property(e => e.Gender)
                .HasMaxLength(45)
                .HasColumnName("gender");
            entity.Property(e => e.Lname)
                .HasMaxLength(45)
                .HasColumnName("lname");
            entity.Property(e => e.PassengerId).HasColumnName("passenger_id");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(45)
                .HasColumnName("phone_no");

            entity.HasOne(d => d.Passenger).WithMany(p => p.CoPassengers)
                .HasForeignKey(d => d.PassengerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk2");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.LoginId, "login_id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.RollId, "role_id_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RollId).HasColumnName("roll_id");
            entity.Property(e => e.Status)
                .HasColumnType("bit(1)")
                .HasColumnName("status");

            entity.HasOne(d => d.Roll).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RollId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("role_id_fk");
        });

        modelBuilder.Entity<PassengersReview>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("passengers_review");

            entity.HasIndex(e => e.RideId, "ride_id_fk2_idx");

            entity.HasIndex(e => e.PassengerId, "user_id_fk3_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Comments)
                .HasMaxLength(100)
                .HasColumnName("comments");
            entity.Property(e => e.PassengerId).HasColumnName("passenger_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.RideId).HasColumnName("ride_id");

            entity.HasOne(d => d.Passenger).WithMany(p => p.PassengersReviews)
                .HasForeignKey(d => d.PassengerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk3");

            entity.HasOne(d => d.Ride).WithMany(p => p.PassengersReviews)
                .HasForeignKey(d => d.RideId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ride_id_fk2");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.BookingId, "booking_id_fk_idx");

            entity.HasIndex(e => e.PassengerId, "user_id_fk4_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.DateTime)
                .HasMaxLength(6)
                .HasColumnName("date_time");
            entity.Property(e => e.PassengerId).HasColumnName("passenger_id");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(45)
                .HasColumnName("payment_method");
            entity.Property(e => e.Status)
                .HasMaxLength(100)
                .HasColumnName("status");

            entity.HasOne(d => d.Booking).WithMany(p => p.Payments)
                .HasForeignKey(d => d.BookingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("booking_id_fk");

            entity.HasOne(d => d.Passenger).WithMany(p => p.Payments)
                .HasForeignKey(d => d.PassengerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk4");
        });

        modelBuilder.Entity<Ride>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("rides");

            entity.HasIndex(e => e.StartLocation, "dcityfk_idx");

            entity.HasIndex(e => e.EndLocation, "tocityfk_idx");

            entity.HasIndex(e => e.CarownerId, "user_id_fk5_idx");

            entity.HasIndex(e => e.VehicleId, "vehicle_id_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AvailableSeats).HasColumnName("Available_seats");
            entity.Property(e => e.CarownerId).HasColumnName("carowner_id");
            entity.Property(e => e.DateOfJourney).HasColumnName("date_of_journey");
            entity.Property(e => e.EndLocation).HasColumnName("End_location");
            entity.Property(e => e.PricePerSeat).HasColumnName("price_per_seat");
            entity.Property(e => e.StartLocation).HasColumnName("start_location");
            entity.Property(e => e.Status)
                .HasMaxLength(100)
                .HasColumnName("status");
            entity.Property(e => e.TimeOfArival)
                .HasMaxLength(6)
                .HasColumnName("time_of_arival");
            entity.Property(e => e.TimeOfDeparture)
                .HasMaxLength(6)
                .HasColumnName("time_of_departure");
            entity.Property(e => e.VehicleId).HasColumnName("vehicle_id");

            entity.HasOne(d => d.Carowner).WithMany(p => p.Rides)
                .HasForeignKey(d => d.CarownerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk5");

            entity.HasOne(d => d.EndLocationNavigation).WithMany(p => p.RideEndLocationNavigations)
                .HasForeignKey(d => d.EndLocation)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tocityfk");

            entity.HasOne(d => d.StartLocationNavigation).WithMany(p => p.RideStartLocationNavigations)
                .HasForeignKey(d => d.StartLocation)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("dcityfk");

            entity.HasOne(d => d.Vehicle).WithMany(p => p.Rides)
                .HasForeignKey(d => d.VehicleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("vehicle_id_fk");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("role");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Role1)
                .HasMaxLength(255)
                .HasColumnName("role");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("states");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.State1)
                .HasMaxLength(45)
                .HasColumnName("state");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("users");

            entity.HasIndex(e => e.UserId, "user_id_fk7_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Aadhar)
                .HasMaxLength(45)
                .HasColumnName("aadhar");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Fname)
                .HasMaxLength(100)
                .HasColumnName("fname");
            entity.Property(e => e.Gender)
                .HasMaxLength(45)
                .HasColumnName("gender");
            entity.Property(e => e.Licence)
                .HasMaxLength(45)
                .HasColumnName("licence");
            entity.Property(e => e.Lname)
                .HasMaxLength(100)
                .HasColumnName("lname");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(45)
                .HasColumnName("phone_no");
            entity.Property(e => e.PrimaryEmail)
                .HasMaxLength(100)
                .HasColumnName("primary_email");
            entity.Property(e => e.SecondaryEmail)
                .HasMaxLength(100)
                .HasColumnName("secondary_email");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.UserNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk7");
        });

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("vehicles");

            entity.HasIndex(e => e.ModelId, "model_id_fk_idx");

            entity.HasIndex(e => e.CarownerId, "user_id_fk6_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CarownerId).HasColumnName("carowner_id");
            entity.Property(e => e.Color)
                .HasMaxLength(45)
                .HasColumnName("color");
            entity.Property(e => e.ModelId).HasColumnName("model_id");
            entity.Property(e => e.RcBook)
                .HasMaxLength(200)
                .HasColumnName("rc_book");
            entity.Property(e => e.Year).HasColumnName("year");

            entity.HasOne(d => d.Carowner).WithMany(p => p.Vehicles)
                .HasForeignKey(d => d.CarownerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_id_fk6");

            entity.HasOne(d => d.Model).WithMany(p => p.Vehicles)
                .HasForeignKey(d => d.ModelId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("model_id_fk");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
