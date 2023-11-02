function generarPDF() {
  // Obtener los datos del formulario
  const datosFormulario = {
    numeroFactura: document.getElementById("numeroFactura").value,
    nombreCliente: document.getElementById("nombreCliente").value,
    torre: document.getElementById("torre").value,
    apartamento: document.getElementById("apartamento").value,
    celular: document.getElementById("celular").value,
    fechaGeneracion: document.getElementById("fechaGeneracion").value,
    estado: document.getElementById("estado").value,
    descripcionItems: [
      {
        id: document.getElementById("id1").value,
        descripcion: document.getElementById("descripcion1").value,
        cantidad: document.getElementById("cantidad1").value,
        valor: document.getElementById("valor1").value,
      },
      {
        id: document.getElementById("id2").value,
        descripcion: document.getElementById("descripcion2").value,
        cantidad: document.getElementById("cantidad2").value,
        valor: document.getElementById("valor2").value,
      },
      {
        id: document.getElementById("id3").value,
        descripcion: document.getElementById("descripcion3").value,
        cantidad: document.getElementById("cantidad3").value,
        valor: document.getElementById("valor3").value,
      },
    ],
    subtotal: document.getElementById("subtotal").value,
    interesesMora: document.getElementById("interesesMora").value,
    totalAPagar: document.getElementById("totalAPagar").value,
  };

  // Crear el PDF
  const pdf = new jsPDF();
  pdf.setFont("helvetica", 12);

  // Agregar la cabecera
  pdf.text("Factura", 20, 20);
  pdf.text("Número: " + datosFormulario.numeroFactura, 20, 30);

  // Agregar los datos del cliente
  pdf.text("Cliente: " + datosFormulario.nombreCliente, 20, 40);
  pdf.text("Torre: " + datosFormulario.torre, 20, 50);
  pdf.text("Apartamento: " + datosFormulario.apartamento, 20, 60);
  pdf.text("Celular: " + datosFormulario.celular, 20, 70);

  // Agregar la fecha de generación
  pdf.text("Fecha de generación: " + datosFormulario.fechaGeneracion, 20, 80);

  // Agregar el estado
  pdf.text("Estado: " + datosFormulario.estado, 20, 90);

  // Agregar los items de la factura
  for (const item of datosFormulario.descripcionItems) {
    pdf.text("Item: " + item.id, 20, 100 + item.cantidad * 10);
    pdf.text("Descripción: " + item.descripcion, 20, 110 + item.cantidad * 10);
    pdf.text("Cantidad: " + item.cantidad, 20, 120 + item.cantidad * 10);
    pdf.text("Valor: " + item.valor, 20, 130 + item.cantidad * 10);
  }

  // Agregar el subtotal
  pdf.text("Subtotal: " + datosFormulario.subtotal, 20, 150);

  // Agregar los intereses de mora
  pdf.text("Intereses de mora: " + datosFormulario.interesesMora, 20, 160);

  // Agregar el total a pagar
  pdf.text("Total a pagar: " + datosFormulario.totalAPagar, 20, 170);

  // Guardar el PDF
  pdf.save("factura.pdf");
}
