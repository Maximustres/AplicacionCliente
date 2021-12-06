using AplicacionCliente.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AplicacionCliente.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        /*
         * Aqui indican las clases que se usarán como modelo para la creación de las tablas de base de datos
         */
        public DbSet<Cliente> Cliente { get; set; }

    }
}
