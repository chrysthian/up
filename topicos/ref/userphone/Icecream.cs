using NSwag.AspNetCore;
using Icecream.Models;
using Icecream.Data;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

class UserPhone
{
    static void Main(string[] args)
    {

        // Configuro uma aplicação web cliente/servidor
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

        // Crio uma estrutura de API REST com endpoints
        // onde eu posso mapear chamadas utilizando o protocolo HTTP
        builder.Services.AddEndpointsApiExplorer();

        // headers e títulos
        builder.Services.AddOpenApiDocument(config =>
        {
            config.DocumentName = "UserPhone";
            config.Title = "UserPhone v1";
            config.Version = "v1";
        });
        // vínculo com o BD
        builder.Services.AddDbContext<AppDbContext>();

        //evitar erros cíclicos (que são um BO que a gente acabou pegando)
        builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options => options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

        // Crio uma aplicação web
        WebApplication app = builder.Build();
        if (app.Environment.IsDevelopment())
        {
            // <swagger>
            app.UseOpenApi();
            app.UseSwaggerUi(config =>
            {
                config.DocumentTitle = "UserPhone API";
                config.Path = "/swagger";
                config.DocumentPath = "/swagger/{documentName}/swagger.json";
                config.DocExpansion = "list";
            });
            // </swagger>
        }

        //lista de usuários
        app.MapGet("/api/users", (AppDbContext context) =>
        {
            var users = context.Users;
            return users is not null ? Results.Ok(users) : Results.NotFound();
        }).Produces<User>();

        //lista de usuários COM telefones
        app.MapGet("/api/user/phones", (AppDbContext context, Guid userId) =>
        {
            //eu carrego os usuários e peço pra incluir(Include) os telefones com eager
            var users = context.Users.Include(u => u.Phones);
            return users is not null ? Results.Ok(users) : Results.NotFound();
        }).Produces<User>();

        //lista de telefones
        app.MapGet("/api/phones", (AppDbContext context) =>
        {
            var phones = context.Phones;
            return phones is not null ? Results.Ok(phones) : Results.NotFound();
        }).Produces<Phone>();

        // crio user
        app.MapPost("/api/users", (AppDbContext context, String name) =>
        {
            var user = new User(Guid.NewGuid(), name);

            context.Users.Add(user);
            context.SaveChanges();

            return Results.Ok(user);
        }).Produces<User>();

        // crio Phone já associando a um User
        app.MapPost("/api/phones", (AppDbContext context, String number, Guid userId) =>
        {
            var phone = new Phone(Guid.NewGuid(), number, userId);
            context.Phones.Add(phone);

            var user = context.Users.Find(userId);
            if (user is not null)
            {
                user.Phones.Add(phone);
                phone.UserId = userId;
            }

            context.SaveChanges();

            return Results.Ok(phone);
        }).Produces<Phone>();
        // configurei tudão e mandei rodar (incluindo o swagger)
        app.Run();
    }
}
