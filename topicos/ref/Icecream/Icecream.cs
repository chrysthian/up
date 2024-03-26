using Icecream.Models;
using Icecream.Data;

class HelloWeb
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContext<IcecreamDbContext>();
        builder.Services.AddEndpointsApiExplorer();

        var app = builder.Build();

        //app.MapGet("/", () => new Flavor(Guid.NewGuid(), "Morango"));
        //app.MapGet("/", () => Results.Ok(new Flavor(Guid.NewGuid(), "Morango")));

        app.MapGet("/api/flavors", () => Results.Ok(new Flavor(Guid.NewGuid(), "Morango")));

        app.Run();

    }
}
