class Item
{
  public string Name { get; set; }
  public string Description { get; set; }
  public int NasaRating { get; set; }
  public int PlayerRating { get; set; }

  public Item(string Name, string Description, int NasaRating)
  {
    this.Name = Name;
    this.Description = Description;
    this.NasaRating = NasaRating;
  }

  public int CalculateScore()
  {
    return Math.Abs(this.NasaRating - this.PlayerRating);
  }

}
