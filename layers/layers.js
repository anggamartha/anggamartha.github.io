var wms_layers = [];


        var lyr_Satelit_0 = new ol.layer.Tile({
            'title': 'Satelit',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PolaRuangFix_1 = new ol.format.GeoJSON();
var features_PolaRuangFix_1 = format_PolaRuangFix_1.readFeatures(json_PolaRuangFix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuangFix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuangFix_1.addFeatures(features_PolaRuangFix_1);
var lyr_PolaRuangFix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolaRuangFix_1, 
                style: style_PolaRuangFix_1,
                popuplayertitle: "Pola Ruang Fix",
                interactive: true,
    title: 'Pola Ruang Fix<br />\
    <img src="styles/legend/PolaRuangFix_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/PolaRuangFix_1_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/PolaRuangFix_1_2.png" /> Hutan Produksi yang dapat Dikonversi<br />\
    <img src="styles/legend/PolaRuangFix_1_3.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/PolaRuangFix_1_4.png" /> Pariwisata<br />\
    <img src="styles/legend/PolaRuangFix_1_5.png" /> Pengelolaan Persampahan<br />\
    <img src="styles/legend/PolaRuangFix_1_6.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/PolaRuangFix_1_7.png" /> Perikanan Budi Daya<br />\
    <img src="styles/legend/PolaRuangFix_1_8.png" /> Perkebunan<br />\
    <img src="styles/legend/PolaRuangFix_1_9.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/PolaRuangFix_1_10.png" /> Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/PolaRuangFix_1_11.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/PolaRuangFix_1_12.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/PolaRuangFix_1_13.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangFix_1_14.png" /> <br />'
        });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: "Sungai",
                interactive: true,
                    title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
                });
var format_Jaringan_Irigasi_Sekunder_3 = new ol.format.GeoJSON();
var features_Jaringan_Irigasi_Sekunder_3 = format_Jaringan_Irigasi_Sekunder_3.readFeatures(json_Jaringan_Irigasi_Sekunder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Irigasi_Sekunder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Irigasi_Sekunder_3.addFeatures(features_Jaringan_Irigasi_Sekunder_3);
var lyr_Jaringan_Irigasi_Sekunder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Irigasi_Sekunder_3, 
                style: style_Jaringan_Irigasi_Sekunder_3,
                popuplayertitle: "Jaringan_Irigasi_Sekunder",
                interactive: true,
                    title: '<img src="styles/legend/Jaringan_Irigasi_Sekunder_3.png" /> Jaringan_Irigasi_Sekunder'
                });
var format_Jaringan_Drainase_4 = new ol.format.GeoJSON();
var features_Jaringan_Drainase_4 = format_Jaringan_Drainase_4.readFeatures(json_Jaringan_Drainase_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Drainase_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Drainase_4.addFeatures(features_Jaringan_Drainase_4);
var lyr_Jaringan_Drainase_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Drainase_4, 
                style: style_Jaringan_Drainase_4,
                popuplayertitle: "Jaringan_Drainase",
                interactive: true,
                    title: '<img src="styles/legend/Jaringan_Drainase_4.png" /> Jaringan_Drainase'
                });
var format_Jaringan_Distribusi_Pembagi_5 = new ol.format.GeoJSON();
var features_Jaringan_Distribusi_Pembagi_5 = format_Jaringan_Distribusi_Pembagi_5.readFeatures(json_Jaringan_Distribusi_Pembagi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Distribusi_Pembagi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Distribusi_Pembagi_5.addFeatures(features_Jaringan_Distribusi_Pembagi_5);
var lyr_Jaringan_Distribusi_Pembagi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Distribusi_Pembagi_5, 
                style: style_Jaringan_Distribusi_Pembagi_5,
                popuplayertitle: "Jaringan_Distribusi_Pembagi",
                interactive: true,
                    title: '<img src="styles/legend/Jaringan_Distribusi_Pembagi_5.png" /> Jaringan_Distribusi_Pembagi'
                });
var format_Jalur_Angkutan_Persamapahan_6 = new ol.format.GeoJSON();
var features_Jalur_Angkutan_Persamapahan_6 = format_Jalur_Angkutan_Persamapahan_6.readFeatures(json_Jalur_Angkutan_Persamapahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalur_Angkutan_Persamapahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalur_Angkutan_Persamapahan_6.addFeatures(features_Jalur_Angkutan_Persamapahan_6);
var lyr_Jalur_Angkutan_Persamapahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalur_Angkutan_Persamapahan_6, 
                style: style_Jalur_Angkutan_Persamapahan_6,
                popuplayertitle: "Jalur_Angkutan_Persamapahan",
                interactive: true,
                    title: '<img src="styles/legend/Jalur_Angkutan_Persamapahan_6.png" /> Jalur_Angkutan_Persamapahan'
                });
var format_Jalan_7 = new ol.format.GeoJSON();
var features_Jalan_7 = format_Jalan_7.readFeatures(json_Jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_7.addFeatures(features_Jalan_7);
var lyr_Jalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_7, 
                style: style_Jalan_7,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_7_0.png" /> Jalan Kabupaten<br />\
    <img src="styles/legend/Jalan_7_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_7_2.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_7_3.png" /> Jalan Usaha Tani<br />\
    <img src="styles/legend/Jalan_7_4.png" /> <br />'
        });
var format_Telekomunikasi_8 = new ol.format.GeoJSON();
var features_Telekomunikasi_8 = format_Telekomunikasi_8.readFeatures(json_Telekomunikasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telekomunikasi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telekomunikasi_8.addFeatures(features_Telekomunikasi_8);
var lyr_Telekomunikasi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telekomunikasi_8, 
                style: style_Telekomunikasi_8,
                popuplayertitle: "Telekomunikasi",
                interactive: true,
                    title: '<img src="styles/legend/Telekomunikasi_8.png" /> Telekomunikasi'
                });
var format_Sistem_Pusat_Pelayanan_9 = new ol.format.GeoJSON();
var features_Sistem_Pusat_Pelayanan_9 = format_Sistem_Pusat_Pelayanan_9.readFeatures(json_Sistem_Pusat_Pelayanan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistem_Pusat_Pelayanan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistem_Pusat_Pelayanan_9.addFeatures(features_Sistem_Pusat_Pelayanan_9);
var lyr_Sistem_Pusat_Pelayanan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistem_Pusat_Pelayanan_9, 
                style: style_Sistem_Pusat_Pelayanan_9,
                popuplayertitle: "Sistem_Pusat_Pelayanan",
                interactive: true,
    title: 'Sistem_Pusat_Pelayanan<br />\
    <img src="styles/legend/Sistem_Pusat_Pelayanan_9_0.png" /> Pusat Desa<br />\
    <img src="styles/legend/Sistem_Pusat_Pelayanan_9_1.png" /> Pusat Linkungan<br />\
    <img src="styles/legend/Sistem_Pusat_Pelayanan_9_2.png" /> Sub Pusat Desa<br />\
    <img src="styles/legend/Sistem_Pusat_Pelayanan_9_3.png" /> <br />'
        });
var format_Sistem_Persampahan_10 = new ol.format.GeoJSON();
var features_Sistem_Persampahan_10 = format_Sistem_Persampahan_10.readFeatures(json_Sistem_Persampahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistem_Persampahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistem_Persampahan_10.addFeatures(features_Sistem_Persampahan_10);
var lyr_Sistem_Persampahan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistem_Persampahan_10, 
                style: style_Sistem_Persampahan_10,
                popuplayertitle: "Sistem_Persampahan",
                interactive: true,
                    title: '<img src="styles/legend/Sistem_Persampahan_10.png" /> Sistem_Persampahan'
                });
var format_Kantor_Desa_11 = new ol.format.GeoJSON();
var features_Kantor_Desa_11 = format_Kantor_Desa_11.readFeatures(json_Kantor_Desa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_Desa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_Desa_11.addFeatures(features_Kantor_Desa_11);
var lyr_Kantor_Desa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_Desa_11, 
                style: style_Kantor_Desa_11,
                popuplayertitle: "Kantor_Desa",
                interactive: true,
                    title: '<img src="styles/legend/Kantor_Desa_11.png" /> Kantor_Desa'
                });
var format_Bangunan_Sumber_Daya_Air_12 = new ol.format.GeoJSON();
var features_Bangunan_Sumber_Daya_Air_12 = format_Bangunan_Sumber_Daya_Air_12.readFeatures(json_Bangunan_Sumber_Daya_Air_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sumber_Daya_Air_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sumber_Daya_Air_12.addFeatures(features_Bangunan_Sumber_Daya_Air_12);
var lyr_Bangunan_Sumber_Daya_Air_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sumber_Daya_Air_12, 
                style: style_Bangunan_Sumber_Daya_Air_12,
                popuplayertitle: "Bangunan_Sumber_Daya_Air",
                interactive: true,
                    title: '<img src="styles/legend/Bangunan_Sumber_Daya_Air_12.png" /> Bangunan_Sumber_Daya_Air'
                });
var format_Air_Limbah_13 = new ol.format.GeoJSON();
var features_Air_Limbah_13 = format_Air_Limbah_13.readFeatures(json_Air_Limbah_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Air_Limbah_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Air_Limbah_13.addFeatures(features_Air_Limbah_13);
var lyr_Air_Limbah_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Air_Limbah_13, 
                style: style_Air_Limbah_13,
                popuplayertitle: "Air_Limbah",
                interactive: true,
                    title: '<img src="styles/legend/Air_Limbah_13.png" /> Air_Limbah'
                });

lyr_Satelit_0.setVisible(true);lyr_PolaRuangFix_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jaringan_Irigasi_Sekunder_3.setVisible(true);lyr_Jaringan_Drainase_4.setVisible(true);lyr_Jaringan_Distribusi_Pembagi_5.setVisible(true);lyr_Jalur_Angkutan_Persamapahan_6.setVisible(true);lyr_Jalan_7.setVisible(true);lyr_Telekomunikasi_8.setVisible(true);lyr_Sistem_Pusat_Pelayanan_9.setVisible(true);lyr_Sistem_Persampahan_10.setVisible(true);lyr_Kantor_Desa_11.setVisible(true);lyr_Bangunan_Sumber_Daya_Air_12.setVisible(true);lyr_Air_Limbah_13.setVisible(true);
var layersList = [lyr_Satelit_0,lyr_PolaRuangFix_1,lyr_Sungai_2,lyr_Jaringan_Irigasi_Sekunder_3,lyr_Jaringan_Drainase_4,lyr_Jaringan_Distribusi_Pembagi_5,lyr_Jalur_Angkutan_Persamapahan_6,lyr_Jalan_7,lyr_Telekomunikasi_8,lyr_Sistem_Pusat_Pelayanan_9,lyr_Sistem_Persampahan_10,lyr_Kantor_Desa_11,lyr_Bangunan_Sumber_Daya_Air_12,lyr_Air_Limbah_13];
lyr_PolaRuangFix_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_SUngai': 'FID_SUngai', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'FID_Budida': 'FID_Budida', 'Id': 'Id', 'Peng_Lah': 'Peng_Lah', 'Polaruang': 'Polaruang', 'Kode': 'Kode', 'Luas': 'Luas', 'FID_disSem': 'FID_disSem', 'OBJECTID_2': 'OBJECTID_2', 'kk': 'kk', 'Shape_Le_1': 'Shape_Le_1', 'Luas_1': 'Luas_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'Panjang': 'Panjang', 'Dusun': 'Dusun', });
lyr_Jaringan_Irigasi_Sekunder_3.set('fieldAliases', {'Id': 'Id', });
lyr_Jaringan_Drainase_4.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Kon': 'Kon', });
lyr_Jaringan_Distribusi_Pembagi_5.set('fieldAliases', {'Id': 'Id', });
lyr_Jalur_Angkutan_Persamapahan_6.set('fieldAliases', {'Id': 'Id', });
lyr_Jalan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', });
lyr_Telekomunikasi_8.set('fieldAliases', {'Id': 'Id', 'Ket': 'Ket', });
lyr_Sistem_Pusat_Pelayanan_9.set('fieldAliases', {'Id': 'Id', 'Ket': 'Ket', });
lyr_Sistem_Persampahan_10.set('fieldAliases', {'Id': 'Id', 'Ket': 'Ket', });
lyr_Kantor_Desa_11.set('fieldAliases', {'Id': 'Id', });
lyr_Bangunan_Sumber_Daya_Air_12.set('fieldAliases', {'Id': 'Id', });
lyr_Air_Limbah_13.set('fieldAliases', {'Id': 'Id', });
lyr_PolaRuangFix_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_SUngai': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'FID_Budida': 'TextEdit', 'Id': 'TextEdit', 'Peng_Lah': 'TextEdit', 'Polaruang': 'TextEdit', 'Kode': 'TextEdit', 'Luas': 'TextEdit', 'FID_disSem': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'kk': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Luas_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Panjang': 'TextEdit', 'Dusun': 'TextEdit', });
lyr_Jaringan_Irigasi_Sekunder_3.set('fieldImages', {'Id': 'Range', });
lyr_Jaringan_Drainase_4.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'Kon': 'TextEdit', });
lyr_Jaringan_Distribusi_Pembagi_5.set('fieldImages', {'Id': 'Range', });
lyr_Jalur_Angkutan_Persamapahan_6.set('fieldImages', {'Id': 'Range', });
lyr_Jalan_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Telekomunikasi_8.set('fieldImages', {'Id': 'Range', 'Ket': 'TextEdit', });
lyr_Sistem_Pusat_Pelayanan_9.set('fieldImages', {'Id': 'Range', 'Ket': 'TextEdit', });
lyr_Sistem_Persampahan_10.set('fieldImages', {'Id': 'Range', 'Ket': 'TextEdit', });
lyr_Kantor_Desa_11.set('fieldImages', {'Id': 'Range', });
lyr_Bangunan_Sumber_Daya_Air_12.set('fieldImages', {'Id': 'Range', });
lyr_Air_Limbah_13.set('fieldImages', {'Id': 'Range', });
lyr_PolaRuangFix_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_SUngai': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'SHAPE_Leng': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'FID_Budida': 'no label', 'Id': 'no label', 'Peng_Lah': 'no label', 'Polaruang': 'no label', 'Kode': 'no label', 'Luas': 'no label', 'FID_disSem': 'no label', 'OBJECTID_2': 'no label', 'kk': 'no label', 'Shape_Le_1': 'no label', 'Luas_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'SHAPE_Leng': 'no label', 'Panjang': 'no label', 'Dusun': 'no label', });
lyr_Jaringan_Irigasi_Sekunder_3.set('fieldLabels', {'Id': 'no label', });
lyr_Jaringan_Drainase_4.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'no label', 'Kon': 'no label', });
lyr_Jaringan_Distribusi_Pembagi_5.set('fieldLabels', {'Id': 'no label', });
lyr_Jalur_Angkutan_Persamapahan_6.set('fieldLabels', {'Id': 'no label', });
lyr_Jalan_7.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'Shape_Leng': 'no label', });
lyr_Telekomunikasi_8.set('fieldLabels', {'Id': 'no label', 'Ket': 'no label', });
lyr_Sistem_Pusat_Pelayanan_9.set('fieldLabels', {'Id': 'no label', 'Ket': 'no label', });
lyr_Sistem_Persampahan_10.set('fieldLabels', {'Id': 'no label', 'Ket': 'no label', });
lyr_Kantor_Desa_11.set('fieldLabels', {'Id': 'no label', });
lyr_Bangunan_Sumber_Daya_Air_12.set('fieldLabels', {'Id': 'no label', });
lyr_Air_Limbah_13.set('fieldLabels', {'Id': 'no label', });
lyr_Air_Limbah_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});