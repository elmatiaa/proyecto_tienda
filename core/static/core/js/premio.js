$(document).ready(function() {


  // API donde se obtienen los datos
  $.get('https://fakestoreapi.com/products', function(registros){
      var premioHTML = $('#premio').prop('outerHTML');
      premioHTML = premioHTML.replace('d-none', '');

      $('#lista').empty();

      $.each(registros, function(i, item) {  // Recorrer los registros devueltos por la API

        // Crear el codigo HTML para agegar un recuadro a la lista de premios
        recuadro = premioHTML;
        recuadro = recuadro.replace('src=""', `src="${item.image}"`);
        recuadro = recuadro.replace('[[nombre]]', item.title);
        recuadro = recuadro.replace('[[precio]]', item.price);
        recuadro = recuadro.replace('[[descripcion]]', item.description);
        var fila = `
        <div class="col p-2 col-sm_12 col-md-6 col-lg-4 col-xl-3">
            <div class="card pt-3 " style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="..." style="max-width: 50%; height: 200px; margin: 0 auto;">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span class="index_stock">${item.description}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="index_stock">Categoría: ${item.category}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="index_stock">Precio: $ ${item.price}</span>
                    </li>
                </ul>
            </div>
        </div>`;
        // Agregar el recuadro a la lista de premios
        $('#lista').append(recuadro);
      
    });

    setTimeout(`
      $('#imagen-de-espera').hide();
      $('#capa-cubre-todo').hide();
      `, 2000);

  });

});