function crearGraficoPastel(superheroData) {
  let options = {
    animationEnabled: true,
    title: {
      text: "Estadisticas de " + superheroData.name,
    },

    data: [
      {
        type: "pie",
        startAngle: 40,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: true,
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: superheroData.powerstats.intelligence, label: "Inteligencia" },
          { y: superheroData.powerstats.strength, label: "Fuerza" },
          { y: superheroData.powerstats.speed, label: "Velocidad" },
          { y: superheroData.powerstats.durability, label: "Resistencia" },
          { y: superheroData.powerstats.power, label: "Poder" },
          { y: superheroData.powerstats.combat, label: "Combate" },
        ],
      },
    ],
  };

  $("#chartContainer").CanvasJSChart(options);
}
