using Icecream;
using Icecream.Data;

class HelloWeb
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        builder.Services.AddDbContext<IcecreamDbContext>();
        builder.Services.AddEndpointsApiExplorer();
        //builder.Services.AddSwaggerGen();


        //app.MapGet("/", () => new Flavor(Guid.NewGuid(), "Morango"));
        //app.MapGet("/", () => Results.Ok(new Flavor(Guid.NewGuid(), "Morango")));

        app.MapGet("/api/flavors", () => Results.Ok(new Flavor(Guid.NewGuid(), "Morango")));

        app.Run();

    }
}
