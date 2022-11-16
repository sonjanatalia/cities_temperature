let table;

function preload() {
  table = loadTable("assets/future_cities_data.csv", "csv", "header");  
  worldMapImage = loadImage('images/earth-texture-night.jpg');
  cloudTexture = loadImage('images/cloud-texture.png');
}

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  background(worldMapImage);  
  textAlign(CENTER, TOP);
}

function draw(){
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "current_city");
    const temp = table.getString(r, "Annual_Mean_Temperature");
    let parsed_temp = parseInt(temp);
    const temp_future = table.getString(r, "future_Annual_Mean_Temperature");
    let parsed_temp_future = parseInt(temp_future);
    const change = table.getString(r, "change_Annual_Mean_Temperature");
    let parsed_change = parseInt(change);
    const latitude = parseInt(table.getString(r, "Latitude"));
    const longitude = parseInt(table.getString(r, "Longitude"));
    
    let mapLng = map(longitude, -180, 180, 0, width);
    let mapLat = map(latitude, -90, 90, height, 0);
    const size = map(parsed_temp, 2, 30, 0, 100);
    const size_future = map(parsed_temp_future, 0, 38, 0, 100);
    const fillColor = map(parsed_change, 0, 7, 0, 255);
    fill(fillColor, 50, 10, 80);
    circle(mapLng, mapLat, size);
    circle(mapLng, mapLat, size_future);
    fill(255);
    text(name, mapLng, mapLat + size / 2 + 5);
  }
}
