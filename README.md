# geojson-points
Convert any GeoJSON into a FeatureCollection of points by simply deconstructing each feature into its vertices.

Useful if you want to use tools and algorithms that require points like [turf-convex](https://github.com/Turfjs/turf-convex) or [turf-concave](https://github.com/Turfjs/turf-concave) with any geometry type.


## Install
````
npm install geojson-points
````


## API


###.parse(*geojson*)

````geojson```` is a valid GeoJSON object, and can be of type ````Point````, ````LineString````, ````Polygon````, ````MultiPoint````, ````MultiPolygon````, ````MultiLineString````, ````GeometryCollection````, ````Feature````, or ````FeatureCollection````. If you are unsure whether or not your GeoJSON object is valid, you can run it through a linter such as [geojsonhint](https://github.com/mapbox/geojsonhint).

 
##### Example use:

````
var points = require("geojson-points");

var toPoints = points({
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            19.6875,
            33.43144133557529
          ],
          [
            11.25,
            45.089035564831015
          ],
          [
            -7.03125,
            46.558860303117164
          ],
          [
            -11.6015625,
            54.367758524068385
          ],
          [
            6.328125,
            53.5403073915002
          ],
          [
            35.15625,
            51.17934297928927
          ]
        ]
      }
    });

````

````toPoints```` will now look like this:

````
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    19.6875,
                    33.43144133557529
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    11.25,
                    45.089035564831015
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -7.03125,
                    46.558860303117164
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -11.6015625,
                    54.367758524068385
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.328125,
                    53.5403073915002
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.15625,
                    51.17934297928927
                ]
            }
        }
    ]
}
````


## License
CC0