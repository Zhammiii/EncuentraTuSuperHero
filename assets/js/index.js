function consultarSuperHeroAPI(numero) {
  $.ajax({
    type: "GET",
    url: "https://www.superheroapi.com/api.php/4905856019427443/" + numero,
    dataType: "json",
    success: function (data) {
      $("#resultado").html("");
      let cardHTML = `
      <h2> SuperHero Encontrado </h2>
      <div class="card card-horizontal">
      <div class="row no-gutters">
          <div class="col-md-4">
              <img src="${data.image.url}" class="card-img rotate-image" alt="${data.name}">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h3 class="card-title">${data.name}</h3>
                  <p class="card-text"><strong>Nombre completo:</strong> ${data.biography["full-name"]}</p>
                  <p class="card-text"><strong>Conexiones:</strong> ${data.connections["group-affiliation"]}</p>
                  <hr>
                  <p class="card-text"> <strong>Publicado por:</strong> ${data.biography.publisher}</p>
                  <hr>
                  <p class="card-text"><strong>Ocupación:</strong> ${data.work.occupation}</p>
                  <hr>
                  <p class="card-text"><strong>Altura:</strong> ${data.appearance.height}</p>
                  <hr>
                  <p class="card-text"><strong>Peso:</strong> ${data.appearance.weight}</p>
                  <hr>
                  <p class="card-text"><strong>Alienzas:</strong> ${data.biography.aliases}</p>
              </div>
          </div>
      </div>
  </div>
      `;
      crearGraficoPastel(data);
      $("#resultado").append(cardHTML);
    },
    error: function (error) {
      console.error("Cueeeek tenemos un error, lo sentimos u.u", error);
      $("#resultado").html(
        "No se pudo encontrar un superhéroe con ese número. Vuelvve a intentarlo T.T"
      );
    },
  });
}
