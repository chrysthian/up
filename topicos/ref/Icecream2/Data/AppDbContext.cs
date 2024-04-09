using Icecream.Models;
using Microsoft.EntityFrameworkCore;

namespace Icecream.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Flavor> Flavors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("DataSource=icecream.sqlite;Cache=Shared");
    }
}