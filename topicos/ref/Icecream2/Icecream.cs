using NSwag.AspNetCore;
using Icecream.Models;
using Icecream.Data;

class HelloWeb
{
    static void Main(string[] args)
    {

        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddOpenApiDocument(config =>
        {
            config.DocumentName = "Icecream";
            config.Title = "Icecream v1";
            config.Version = "v1";
        });
        builder.Services.AddDbContext<AppDbContext>();

        WebApplication app = builder.Build();
        if (app.Environment.IsDevelopment())
        {
            app.UseOpenApi();
            app.UseSwaggerUi(config =>
            {
                config.DocumentTitle = "Icecream API";
                config.Path = "/swagger";
                config.DocumentPath = "/swagger/{documentName}/swagger.json";
                config.DocExpansion = "list";
            });
        }

        app.MapGet("/api/flavors", (AppDbContext context) =>
        {
            var flavors = context.Flavors;
            return flavors is not null ? Results.Ok(flavors) : Results.NotFound();
        }).Produces<Flavor>();


        app.MapPost("/api/flavors", (AppDbContext context, string name) =>
        {
            var flavor = new Flavor(Guid.NewGuid(), name);

            context.Flavors.Add(flavor);
            context.SaveChanges();

            return Results.Ok(flavor);
        }).Produces<Flavor>();

        app.MapPut("/api/flavors", (AppDbContext context, Flavor inputFlavor) =>
        {
            var flavor = context.Flavors.Find(inputFlavor.Id);
            if (flavor == null)
            {
                return Results.NotFound();
            }

            context.Entry(flavor).CurrentValues.SetValues(inputFlavor);
            context.SaveChanges();
            return Results.Ok(flavor);
        }).Produces<Flavor>();

        app.MapDelete("/api/flavors", (AppDbContext context, Guid id) =>
        {
            var flavor = context.Flavors.Find(id);

            if (flavor == null)
            {
                return Results.NotFound();
            }

            context.Flavors.Remove(flavor);
            context.SaveChanges();
            return Results.Ok(flavor);
        }).Produces<Flavor>();

        app.Run();
    }
}