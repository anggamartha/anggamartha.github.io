var size = 0;
var placement = 'point';
function categories_PolaRuangFix_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Badan Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,30,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan Produksi yang dapat Dikonversi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,225,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Peruntukan Industri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pariwisata':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,165,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pengelolaan Persampahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,155,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala WP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,130,130,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perikanan Budi Daya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,185,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perkebunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,175,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perumahan Kepadatan Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,250,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ruang Terbuka Non Hijau':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,105,105,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,165,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tanaman Pangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,245,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(213,19,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PolaRuangFix_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Polaruang");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PolaRuangFix_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
