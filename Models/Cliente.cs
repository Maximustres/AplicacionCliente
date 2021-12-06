using System.ComponentModel.DataAnnotations;

namespace AplicacionCliente.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(80)]
        public string Nombres { get; set; }

        [Required(ErrorMessage = "Apellido es Requerido")]
        [MaxLength(80)]
        public string Apellidos { get; set; }

        [Required(ErrorMessage = "Dirección es Requerido")]
        [MaxLength(100)]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "Teléfono es Requerido")]
        [MaxLength(30)]
        public string Telefono { get; set; }

        [Required]
        public bool Estado { get; set; }


    }
}
