ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([126.250831, 36.965082, 127.467821, 38.007094]);
var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '오픈스트리트맵 일반도',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 고양시.추가분 — 고양시'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 부천시.추가분 — 부천시'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 성남시.추가분 — 성남시'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 수원시.추가분 — 수원시'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'fid': 'fid', 'NO': 'NO', 'field_1_1': 'field_1_1', '정류소명': '정류소명', '저상버스 노선 여부': '저상버스 노선 여부', '버스 노선수': '버스 노선수', '저상버스 노선수': '저상버스 노선수', '정류소ID': '정류소ID', '정류소번호': '정류소번호', '시군': '시군', '위치': '위치', '좌표x값': '좌표x값', '좌표y값': '좌표y값', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'NO': 'NO', 'field_1_1': 'field_1_1', '정류소명': '정류소명', '저상버스 노선 여부': '저상버스 노선 여부', '버스 노선수': '버스 노선수', '저상버스 노선수': '저상버스 노선수', '정류소ID': '정류소ID', '정류소번호': '정류소번호', '시군': '시군', '위치': '위치', '좌표x값': '좌표x값', '좌표y값': '좌표y값', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'NO': 'NO', 'field_1_1': 'field_1_1', '정류소명': '정류소명', '저상버스 노선 여부': '저상버스 노선 여부', '버스 노선수': '버스 노선수', '저상버스 노선수': '저상버스 노선수', '정류소ID': '정류소ID', '정류소번호': '정류소번호', '시군': '시군', '위치': '위치', '좌표x값': '좌표x값', '좌표y값': '좌표y값', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'NO': 'NO', 'field_1_1': 'field_1_1', '정류소명': '정류소명', '저상버스 노선 여부': '저상버스 노선 여부', '버스 노선수': '버스 노선수', '저상버스 노선수': '저상버스 노선수', '정류소ID': '정류소ID', '정류소번호': '정류소번호', '시군': '시군', '위치': '위치', '좌표x값': '좌표x값', '좌표y값': '좌표y값', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'NO': 'Range', 'field_1_1': 'Range', '정류소명': 'TextEdit', '저상버스 노선 여부': 'TextEdit', '버스 노선수': 'Range', '저상버스 노선수': 'Range', '정류소ID': 'Range', '정류소번호': 'Range', '시군': 'TextEdit', '위치': 'TextEdit', '좌표x값': 'TextEdit', '좌표y값': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'NO': 'Range', 'field_1_1': 'Range', '정류소명': 'TextEdit', '저상버스 노선 여부': 'TextEdit', '버스 노선수': 'Range', '저상버스 노선수': 'Range', '정류소ID': 'Range', '정류소번호': 'Range', '시군': 'TextEdit', '위치': 'TextEdit', '좌표x값': 'TextEdit', '좌표y값': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'NO': 'Range', 'field_1_1': 'Range', '정류소명': 'TextEdit', '저상버스 노선 여부': 'TextEdit', '버스 노선수': 'Range', '저상버스 노선수': 'Range', '정류소ID': 'Range', '정류소번호': 'TextEdit', '시군': 'TextEdit', '위치': 'TextEdit', '좌표x값': 'TextEdit', '좌표y값': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'NO': 'Range', 'field_1_1': 'Range', '정류소명': 'TextEdit', '저상버스 노선 여부': 'TextEdit', '버스 노선수': 'Range', '저상버스 노선수': 'Range', '정류소ID': 'Range', '정류소번호': 'Range', '시군': 'TextEdit', '위치': 'TextEdit', '좌표x값': 'TextEdit', '좌표y값': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'inline label', 'NO': 'inline label', 'field_1_1': 'inline label', '정류소명': 'header label', '저상버스 노선 여부': 'inline label', '버스 노선수': 'inline label', '저상버스 노선수': 'inline label', '정류소ID': 'inline label', '정류소번호': 'header label', '시군': 'no label', '위치': 'no label', '좌표x값': 'no label', '좌표y값': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'inline label', 'NO': 'inline label', 'field_1_1': 'inline label', '정류소명': 'header label', '저상버스 노선 여부': 'inline label', '버스 노선수': 'inline label', '저상버스 노선수': 'inline label', '정류소ID': 'inline label', '정류소번호': 'header label', '시군': 'no label', '위치': 'no label', '좌표x값': 'no label', '좌표y값': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'inline label', 'NO': 'inline label', 'field_1_1': 'inline label', '정류소명': 'header label', '저상버스 노선 여부': 'inline label', '버스 노선수': 'inline label', '저상버스 노선수': 'inline label', '정류소ID': 'inline label', '정류소번호': 'header label', '시군': 'no label', '위치': 'no label', '좌표x값': 'no label', '좌표y값': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'inline label', 'NO': 'inline label', 'field_1_1': 'inline label', '정류소명': 'header label', '저상버스 노선 여부': 'inline label', '버스 노선수': 'inline label', '저상버스 노선수': 'inline label', '정류소ID': 'inline label', '정류소번호': 'header label', '시군': 'no label', '위치': 'no label', '좌표x값': 'no label', '좌표y값': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});