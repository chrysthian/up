using Models.Todo;

class HelloWeb
{
  static void Main(string[] args)
  {
    // Configurar uma aplicação cliente/servidor
    var builder = WebApplication.CreateBuilder(args);

    // cria a aplicação
    var app = builder.Build();

    // mapeamento das chamadas de API
    app.MapGet("/one", () =>
    {
      //magic
      return "Hello World!";
    });

    app.MapGet("/two", () =>
    {
      // transforma tudo em JSON para responder ao cliente
      return Results.Ok(new Todo(Guid.NewGuid(), "ir a cademia", false));
    });

    //roda a aplicação
    app.Run();
  }
}