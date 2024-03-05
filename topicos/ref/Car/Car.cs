class Car : Vehicle
{
  public float Speed { get; private set; }

  public Car()
  {
    this.Brand = "Honda";
    this.Model = "Civic";
  }

  public Car(string brand, string model)
  {
    this.Brand = brand;
    this.Model = model;
  }

  public override void Accelerate()
  {
    Console.WriteLine("Car -> accelerate");
  }

  public void Accelerate(float speed)
  {
    Speed += speed;
    Console.WriteLine("Car -> Accelerate na velocidade de : " + Speed);
  }

  public float Accelerate(float speed, bool increment)
  {
    Speed += increment ? speed : -speed;
    Console.WriteLine("Car -> Accelerate com sobrecarga de operadores");
    return Speed;

  }

  public override string ToString()
  {
    return Brand + " " + Model;
  }
}
