function consultarSuperHeroAPI(numero) {
  $.ajax({
    type: "GET",
    url: "https://www.superheroapi.com/api.php/4905856019427443/" + numero,
    dataType: "json",
    success: function (response) {
      $("#resultado").html("");
      let cardHTML = `
      <h2> SuperHero Encontrado </h2>
      <div class="card card-horizontal">
      <div class="row no-gutters">
          <div class="col-md-4">
              <img src="${response.image.url}" class="card-img rotate-image" alt="${response.name}">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h3 class="card-title">${response.name}</h3>
                  <p class="card-text"><strong>Nombre completo:</strong> ${response.biography["full-name"]}</p>
                  <p class="card-text"><strong>Conexiones:</strong> ${response.connections["group-affiliation"]}</p>
                  <hr>
                  <p class="card-text"> <strong>Publicado por:</strong> ${response.biography.publisher}</p>
                  <hr>
                  <p class="card-text"><strong>Ocupación:</strong> ${response.work.occupation}</p>
                  <hr>
                  <p class="card-text"><strong>Altura:</strong> ${response.appearance.height}</p>
                  <hr>
                  <p class="card-text"><strong>Peso:</strong> ${response.appearance.weight}</p>
                  <hr>
                  <p class="card-text"><strong>Alienzas:</strong> ${response.biography.aliases}</p>
              </div>
          </div>
      </div>
  </div>
      `;
      crearGraficoPastel(response);
      $("#resultado").append(cardHTML);
    },
    error: function (error) {
      console.error("Error al realizar la solicitud a la API:", error);
      $("#resultado").html(
        "No se pudo encontrar un superhéroe con ese número. Vuelvve a intentarlo"
      );
    },
  });
}
