using System;

class Conversion
{
  static void Main(string[] args)
  {
    float usdMultiplier = 5.17f;
    float eurMultiplier = 6.14f;
    float arsMultiplier = 0.05f;
    float brl = 0f;

    Console.WriteLine("Informe o valor em reais: ");
    brl = float.Parse(Console.ReadLine());

    Console.WriteLine("O valor em USD é " + brl / usdMultiplier);
    Console.WriteLine("O valor em EUR é " + brl / eurMultiplier);
    Console.WriteLine("O valor em ARS é " + brl / arsMultiplier);
  }
}
