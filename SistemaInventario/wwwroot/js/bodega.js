﻿let dataTable; 

$(document).ready(() => {
    loadDataTable(); 
})


function loadDataTable() {
    dataTable = $('#tblDatos').DataTable({
        "language": {
            "lengthMenu": "Mostrar _MENU_ Registros Por Pagina",
            "zeroRecords": "Ningun Registro",
            "info": "Mostrar pagina _PAGE_ de _PAGES_",
            "infoEmpty": "no hay registros",
            "infoFiltered": "(filtered from _MAX_ total registros)",
            "search": "Buscar",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
        "ajax": {
            "url": "/Admin/Bodega/ObtenerTodos"  
        },
        "columns": [
            { "data": "nombre", "width": "20%" },
            { "data": "descripcion", "width": "40%" },
            {
                "data": "estado",
                "render": (data) => (
                    `${data ? "Activo" : "Inactivo"}`
                ),
                "width": "20%"
            },
            {
                "data": "id",
                "render": (data)  => (
                    `<div class="text-center">
                        <a href="/Admin/Bodega/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                        <a onClick=Delete("/Admin/Bodega/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                            <i class="bi bi-trash3-fill"></i>
                        </a>
                    </div>`
                ),
                "width": "20%"
            }
        ]
    }); 
}