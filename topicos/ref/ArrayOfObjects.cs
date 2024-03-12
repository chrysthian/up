using System;

// Class definition
class Student
{
  //private data members
  private int enrollmentId;
  private string name;
  private int age;

  //method to set student details
  public void SetInfo(string name, int rollno, int age)
  {
    this.enrollmentId = rollno;
    this.age = age;
    this.name = name;
  }

  //method to print student details
  public void PrintInfo()
  {
    Console.WriteLine("------------");
    Console.WriteLine("Student Record: ");
    Console.WriteLine($"Name : {name}");
    Console.WriteLine($"EnrollmentId : {enrollmentId}");
    Console.WriteLine($"Age : {age}");
    Console.WriteLine("------------");
  }

}

class Program
{
  static void Main()
  {
    //creating array of objects
    Student[] S = new Student[2];

    //Initialising objects
    S[0] = new Student();
    S[1] = new Student();

    //Setting the values and printing first object
    S[0].SetInfo("Harry", 101, 25);
    S[0].PrintInfo();

    //Setting the values and printing second object
    S[1].SetInfo("Potter", 102, 27);
    S[1].PrintInfo();

  }
}
