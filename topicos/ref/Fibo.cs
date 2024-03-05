using System;

class Fibo
{
  public static void Main(string[] args)
  {
    int numeroAnterior = 0;
    int numeroAtual = 1;
    int fibonacci = 0;
    int limit;

    Console.WriteLine("Insira o limite do fibonacci:");
    limit = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("----");
    Console.WriteLine(fibonacci); //0
    Console.WriteLine(numeroAtual); //1

    while (fibonacci < limit)
    {
      fibonacci = numeroAnterior + numeroAtual;

      if (fibonacci < limit)
      {
        Console.WriteLine(fibonacci);
        numeroAnterior = numeroAtual;
        numeroAtual = fibonacci;
      }
    }
  }
}