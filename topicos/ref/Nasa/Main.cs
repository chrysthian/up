using System;
using System.Runtime.CompilerServices;
class Nasa
{
  static void Main(string[] args)
  {
    Item[] itens =
    [
        new Item("Box of matches", "Virtually worthless -- there's no oxygen on the moon to sustain combustion", 15),
        new Item("Food concentrate", "Efficient means of supplying energy requirements", 4),
        new Item("50 feet of nylon rope", "Useful in scaling cliffs and tying injured together", 6),
        new Item("Parachute silk", "Protection from the sun's rays ", 8),
        new Item("Portable heating unit", "Not needed unless on the dark side", 13),
        new Item("Two .45 calibre pistols", "Possible means of self-propulsion ", 11),
        new Item("One case of dehydrated milk", "Bulkier duplication of food concentrate ", 12),
        new Item("Two 100 lb. tanks of oxygen", "Most pressing survival need (weight is not a factor since gravity is one-sixth of the Earth's -- each tank would weigh only about 17 lbs. on the moon)", 1),
        new Item("Stellar map", "Primary means of navigation - star patterns appear essentially identical on the moon as on Earth", 3),
        new Item("Self-inflating life raft", "CO2 bottle in military raft may be used for propulsion", 9),
        new Item("Magnetic compass", "The magnetic field on the moon is not polarized, so it's worthless for navigation", 14),
        new Item("20 litres of water", "Needed for replacement of tremendous liquid loss on the light side", 2),
        new Item("Signal flares", "Use as distress signal when the mother ship is sighted", 10),
        new Item("First aid kit, including injection needle", "Needles connected to vials of vitamins, medicines, etc. will fit special aperture in NASA space suit", 7),
        new Item("Solar-powered FM receiver-transmitter", "For communication with mother ship", 5),
    ];

    int finalScore = 0;

    Console.BackgroundColor = ConsoleColor.Blue;
    Console.ForegroundColor = ConsoleColor.White;

    Console.WriteLine(" ************ ");
    Console.WriteLine("This is the NASA Experiment, you are 160 KM of your base, given these items choose the priority (from 1-15) wiselly for your survival");
    Console.WriteLine(" ************ ");

    Console.ResetColor();
    Console.WriteLine(" ");

    Console.WriteLine("Press any key to continue ");
    Console.Read();

    Console.WriteLine(" The items are:");

    foreach (var item in itens)
    {
      Console.WriteLine(item.Name);
    }

    Console.Read();

    foreach (var item in itens)
    {
      Console.WriteLine($"What priority is {item.Name} ?");
      item.PlayerRating = Convert.ToInt32(Console.ReadLine());
    }

    Console.WriteLine("Let's see your score (lower the better):");

    foreach (var item in itens)
    {
      finalScore += item.CalculateScore();
    }

    switch (finalScore)
    {
      case <= 32:
        Console.BackgroundColor = ConsoleColor.Green;
        Console.ForegroundColor = ConsoleColor.White;
        break;
      case int i when i > 32 && i < 55:
        Console.BackgroundColor = ConsoleColor.Yellow;
        Console.ForegroundColor = ConsoleColor.White;
        break;
      case > 55:
      default:
        Console.BackgroundColor = ConsoleColor.Red;
        Console.ForegroundColor = ConsoleColor.White;
        break;
    }

    Console.WriteLine(finalScore);
    Console.Read();
  }
}