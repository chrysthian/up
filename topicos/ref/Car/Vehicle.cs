
abstract class Vehicle
{
  protected string Brand { get; set; }
  protected string Model { get; set; }

  public virtual void Accelerate()
  {
    Console.WriteLine("Vehicle -> accelerate");
  }
}