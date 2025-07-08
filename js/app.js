// Simulamos algunas facturas en localStorage
let facturas = JSON.parse(localStorage.getItem("facturas")) || [];

if (facturas.length === 0) {
  facturas = [
    { id: 1, producto: "Laptop", cantidad: 1, total: 1200 },
    { id: 2, producto: "Mouse", cantidad: 2, total: 40 }
  ];
  localStorage.setItem("facturas", JSON.stringify(facturas));
}

// Mostrar facturas
const contenedor = document.getElementById("facturas-container");

facturas.forEach(factura => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>ID:</strong> ${factura.id} <br>
                   <strong>Producto:</strong> ${factura.producto} <br>
                   <strong>Total:</strong> $${factura.total} <hr>`;
  contenedor.appendChild(div);
});
