namespace Models.Todo
{
  class Todo
  {
    public Guid Id { get; set; }
    public string Description { get; set; }
    public bool IsCompleted { get; set; }

    public Todo(Guid Id, string Name, bool IsCompleted)
    {
      this.Id = Id;
      this.Description = Name;
      this.IsCompleted = IsCompleted;
    }
  }
}