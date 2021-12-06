var datatable;

$(document).ready(() => {
    loadDataTable();
    var id = document.getElementById("clienteId");
    if (id.value > 0) {
        $('#myModal').modal('show');
    }
});

function limpiar() {
    var clienteId           = document.getElementById('clienteId');
    var clienteNombres      = document.getElementById('clienteNombres');
    var clienteApellidos    = document.getElementById('clienteApellidos');
    var clienteDireccion    = document.getElementById('clienteDireccion');
    var clienteTelefono     = document.getElementById('clienteTelefono');
    var clienteEstado       = document.getElementById('clienteEstado');

    clienteId.value         = 0;
    clienteNombres.value    = '';
    clienteApellidos.value  = '';
    clienteDireccion.value  = '';
    clienteTelefono.value   = '';
    clienteEstado.value     = true;
}

function loadDataTable() {
    datatable = $('#tbData').DataTable({
        "ajax": {
            "url": "/Cliente/ObtenerTodos"
        },
        "columns": [
            { "data": "nombres", "width": "20%" },
            { "data": "apellidos", "width": "20%" },
            { "data": "direccion", "width": "30%" },
            { "data": "telefono", "width": "10%" },
            {
                "data": "estado",
                "width": "10%",
                "render": (data) => {
                    if (data == true) {
                        return "Activo";
                    }
                    return "Inactivo";
                }
            },
            {
                "data": "id",
                "width": "10%",
                "render": function (data) {
                    return `
                        <div>
                            <a href="/Cliente/Crear/${data}" class="btn btn-success text-white" style="cursor:pointer;">Editar</a>
                        </div>
                        `;
                }
            }
        ]
    });
}