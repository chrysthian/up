using System;

class Area
{
  static void Main(string[] args)
  {
    float width;
    float height;

    Console.WriteLine("Informe a largura: ");
    width = float.Parse(Console.ReadLine());

    Console.WriteLine("Informe a altura: ");
    height = float.Parse(Console.ReadLine());

    Console.WriteLine("A area é " + width * height);
  }
}
