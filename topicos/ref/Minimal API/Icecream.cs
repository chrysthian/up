using Icecream.Models;

class HelloWeb
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.MapGet("/", () => "Hello World!");
        // app.MapGet("/", () => new Flavor(Guid.NewGuid(), "Morango"));
        // app.MapGet("/", () => Results.Ok(new Flavor(Guid.NewGuid(), "Morango")));

        app.Run();

    }
}
