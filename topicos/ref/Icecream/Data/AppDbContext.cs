using Microsoft.EntityFrameworkCore;

namespace Icecream.Data
{
    public class IcecreamDbContext : DbContext
    {
        public DbSet<Flavor> Flavors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("DataSource=app.db;Cache=Shared");
    }
}