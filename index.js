(function() {

  function parse(input) {

    function point(p) {
      output.features.push(newPoint(p));
    }

    function multi(l) {
      l.forEach(point);
    }

    function poly(p) {
      p.forEach(multi);
    }

    function multiPoly(m) {
      m.map(poly);
    }

    function geometry(obj) {
      if (!obj) {
        return;
      }
      switch (obj.type) {
        case "Point":
          point(obj.coordinates);
          break;
        case "LineString":
        case "MultiPoint":
          multi(obj.coordinates);
          break;
        case "Polygon":
        case "MultiLineString":
          poly(obj.coordinates);
          break;
        case "MultiPolygon":
          multiPoly(obj.coordinates);
          break;
        case "GeometryCollection":
          obj.geometries.map(geometry);
          break;
        default :
          return;
      }
      return output;
    }

    function feature(obj) {
      geometry(obj.geometry);
      return output;
    }

    function featureCollection(f) {
      f.features.map(feature);
      return output;
    }

    function geometryCollection(g) {
      g.geometries.map(geometry);
      return output;
    }

    function newPoint(coords) {
      return {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": coords
        }
      }
    }

    if (!input) {
      return input;
    }

    var output = {
      "type": "FeatureCollection",
      "features": []
    }

    switch (input.type) {
      case "Feature":
        return feature(input);
      case "GeometryCollection" :
        return geometryCollection(input);
      case "FeatureCollection" :
        return featureCollection(input);
      case "Point":
      case "LineString":
      case "Polygon":
      case "MultiPoint":
      case "MultiPolygon":
      case "MultiLineString":
        return geometry(input);
      default :
        return input;
    }

  }

  module.exports = parse;
  module.exports.parse = parse;

}());
