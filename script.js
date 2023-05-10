fetch('archivo.json')
  .then(response => response.json())
  .then(data => {
    const tabla = document.querySelector('#tabla tbody');
    Object.entries(data).forEach(([key, value]) => {
      const fila = document.createElement('tr');
      const celdaClave = document.createElement('td');
      const celdaValor = document.createElement('td');
      const inputValor = document.createElement('input');
      celdaClave.textContent = key;
      inputValor.value = value;
      celdaValor.appendChild(inputValor);
      fila.appendChild(celdaClave);
      fila.appendChild(celdaValor);
      tabla.appendChild(fila);

      // agregar escucha de evento para actualizar los valores del objeto JSON
      inputValor.addEventListener('input', () => {
        data[key] = inputValor.value;
      });
    });

    // agregar escucha de evento para guardar los cambios
    const botonGuardar = document.querySelector('#guardar');
    botonGuardar.addEventListener('click', () => {
      const datosActualizados = JSON.stringify(data);
      // aquí puedes enviar los datos actualizados a tu servidor o almacenarlos en un archivo local
      console.log(datosActualizados);
    });
  });