using System.ComponentModel.DataAnnotations.Schema;

namespace Icecream.Models
{
    // Principal (parent)
    public class User(Guid Id, String Name)
    {
        public Guid Id { get; set; } = Id;
        public String Name { get; set; } = Name;
        public virtual ICollection<Phone> Phones { get; } = [];
    }

    // Dependent (child)
    public class Phone(Guid Id, String Number, Guid UserId)
    {
        public Guid Id { get; set; } = Id;
        public String Number { get; set; } = Number;

        [ForeignKey("User")]
        public Guid UserId { get; set; } = UserId;

        public virtual User User { get; set; } = null!;
    }
}