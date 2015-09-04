var assert = require("assert"),
    should = require("should"),
    geojsonhint = require("geojsonhint"),
    points = require("../index.js"),
    tg = require("./test_geometry.js");

function test(feature, cb) {
  var parsed = points.parse(feature),
      errors = geojsonhint.hint(JSON.stringify(parsed));

  if (errors.length) {
    cb(errors);
  } else {
    cb(null);
  }
}

describe("point", function() {
  it("should return valid GeoJSON", function(done) {
    test(tg.point, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature point", function() {
  it("should return valid GeoJSON", function(done) {
    test(tg.featurePoint, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature linestring", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.featureLinestring, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("linestring", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.linestring, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multipoint", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.multipoint, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("polygon", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.polygon, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("holy polygon", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.holyPolygon, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multipolygon", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.multipoly, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multi linestring", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.multilinestring, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature collection", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.featureCollection, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("geometry collection", function() {
  it("should return valid GeoJSON ", function(done) {
    test(tg.geometryCollection, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("null value", function() {
  it("should return the same null value", function(done) {
    var parsed = points(tg.baddy_null);

    if (typeof(parsed) === "object")  {
      done();
    } else {
      throw new Error("null value incorrectly returned");
    }
  });
});

describe("undefined value", function() {
  it("should return the same thing value", function(done) {
    var parsed = points(tg.baddy_undefined);

    if (typeof(parsed) === "undefined") {
      done()
    } else {
      throw new Error("Undefined value incorrectly returned");
    }
  });
});

describe("empty array", function() {
  it("should return the same thing value", function(done) {
    var parsed = points(tg.empty);

    if (Array.isArray(parsed)) {
      done();
    } else {
      throw new Error("Empty array incorrectly returned");
    }
  });
});

describe("bad object", function() {
  it("should return the same thing value", function(done) {
    var parsed = points(tg.baddy_object);

    if (typeof(parsed) === "object")  {
      done();
    } else {
      throw new Error("Bad object incorrectly returned");
    }
  });
});

describe("null Feature geometry", function() {
  it("should return the same thing value", function(done) {
    var parsed = points(tg.baddy_nogeom);

    if (typeof(parsed) === "object" && parsed["type"])  {
      done();
    } else {
      throw new Error("Null feature geometry incorrectly returned");
    }
  });
});
