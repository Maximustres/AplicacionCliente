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
            { "data": "nombres", "width": "15%" },
            { "data": "apellidos", "width": "15%" },
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
                "width": "20%",
                "render": (data) => {
                    return `
                        <div class="form-button">
                            <a href="/Cliente/Crear/${data}" class="btn btn-success text-white" style="cursor:pointer;">📄</a>
                            <a onclick=Delete("/Cliente/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer;">❌</a>
                        </div>
                        `;
                }
            }
        ]
    });
}

function Delete(url) {
    swal({
        title: "Esta seguro de Eliminar este Cliente?",
        text: "Este registro no se podrá recuperar.",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"]
    }).then((borrar) => {
        if (borrar) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: (data) => {
                    if (data.success) {
                        datatable.ajax.reload();
                    }
                    alert(data.message);
                }
            });
        }
    })
}