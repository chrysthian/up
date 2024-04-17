using Icecream.Models;
using Microsoft.EntityFrameworkCore;

namespace Icecream.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Phone> Phones { get; set; }

        // configuro o relacionamento um pra muitos
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.Phones)
                .WithOne(p => p.User)
                .HasForeignKey(p => p.UserId);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("DataSource=icecream.sqlite;Cache=Shared");
    }
}