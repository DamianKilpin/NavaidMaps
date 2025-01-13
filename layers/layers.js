var wms_layers = [];


        var lyr_GoogleLabels_0 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'GoogleHybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2 = new ol.format.GeoJSON();
var features_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2 = format_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2.readFeatures(json_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2.addFeatures(features_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2);
var lyr_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2, 
                style: style_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2,
                popuplayertitle: 'Ventia_Managed_Navaids_20250110 (1) — Ventia-Managed Nav Aids',
                interactive: true,
                title: 'Ventia_Managed_Navaids_20250110 (1) — Ventia-Managed Nav Aids'
            });
var format_ExpandedKMLLayer_3 = new ol.format.GeoJSON();
var features_ExpandedKMLLayer_3 = format_ExpandedKMLLayer_3.readFeatures(json_ExpandedKMLLayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExpandedKMLLayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpandedKMLLayer_3.addFeatures(features_ExpandedKMLLayer_3);
var lyr_ExpandedKMLLayer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpandedKMLLayer_3, 
                style: style_ExpandedKMLLayer_3,
                popuplayertitle: 'Expanded KML Layer',
                interactive: true,
    title: 'Expanded KML Layer<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_0.png" /> <Null><br />\
    <img src="styles/legend/ExpandedKMLLayer_3_1.png" /> CAN (CYLINDRICAL)<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_2.png" /> CONICAL<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_3.png" /> MAJOR PILE (>10CM DIAM)<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_4.png" /> MINOR PILE (<10CM DIAM)<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_5.png" /> MULTIPILE<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_6.png" /> PILLAR<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_7.png" /> SPAR/SPINDLE<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_8.png" /> SPHERICAL<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_9.png" /> TOWER<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_10.png" /> TRIPODAL<br />\
    <img src="styles/legend/ExpandedKMLLayer_3_11.png" /> <br />'
        });

lyr_GoogleLabels_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2.setVisible(true);lyr_ExpandedKMLLayer_3.setVisible(true);
var layersList = [lyr_GoogleLabels_0,lyr_GoogleHybrid_1,lyr_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2,lyr_ExpandedKMLLayer_3];
lyr_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ExpandedKMLLayer_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'MXASSETNUM': 'MXASSETNUM', 'MXSITEID': 'MXSITEID', 'MXCREATIONSTATE': 'MXCREATIONSTATE', 'ROWSTAMP': 'ROWSTAMP', 'MXLOCATION': 'MXLOCATION', 'NAVAIDID': 'NAVAIDID', 'NAVAIDDESC': 'NAVAIDDESC', 'FUNCTIONDESC': 'FUNCTIONDESC', 'STATUS': 'STATUS', 'DOTNORTHING': 'DOTNORTHING', 'DOTEASTING': 'DOTEASTING', 'DOTLONGITUDE': 'DOTLONGITUDE', 'DOTLATITUDE': 'DOTLATITUDE', 'DOTMSY': 'DOTMSY', 'NAVAIDINFRASUBGROUP': 'NAVAIDINFRASUBGROUP', 'FUNCTIONINFRASUBGROUP': 'FUNCTIONINFRASUBGROUP', 'MARKSTRUCTURE': 'MARKSTRUCTURE', 'HORIZONTALACCURACY': 'HORIZONTALACCURACY', 'OWNER': 'OWNER', 'ASSETNUM': 'ASSETNUM', 'SHAPE': 'SHAPE', 'MAXASSETNUM': 'MAXASSETNUM', 'LOCN_CODE': 'LOCN_CODE', 'LOCATION': 'LOCATION', 'MAXLATITUDE': 'MAXLATITUDE', 'MAXLONGITUDE': 'MAXLONGITUDE', 'MGA_ZONE': 'MGA_ZONE', 'MAXOWNER': 'MAXOWNER', 'SITUATION': 'SITUATION', 'NAVAID_SHAPE': 'NAVAID_SHAPE', 'NAVAID_COLOUR': 'NAVAID_COLOUR', 'DAY_MARK': 'DAY_MARK', 'CHART_CHARACTER': 'CHART_CHARACTER', 'FLASH_SEQUENCE': 'FLASH_SEQUENCE', 'LIGHT_COLOUR': 'LIGHT_COLOUR', 'LIGHT_RANGE': 'LIGHT_RANGE', 'VISIBLE_SECTOR': 'VISIBLE_SECTOR', 'OBSCURED_SECTOR': 'OBSCURED_SECTOR', 'LEAD_BEARING': 'LEAD_BEARING', 'RACON_CODE': 'RACON_CODE', 'AIS_TYPE': 'AIS_TYPE', 'MMSI_NUMBER': 'MMSI_NUMBER', 'MAXRISKCAT': 'MAXRISKCAT', 'RESPONSIBLEAGENCY': 'RESPONSIBLEAGENCY', 'LIGHT_MODEL': 'LIGHT_MODEL', 'MAXLINK': 'MAXLINK', });
lyr_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ExpandedKMLLayer_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'MXASSETNUM': 'TextEdit', 'MXSITEID': 'TextEdit', 'MXCREATIONSTATE': 'TextEdit', 'ROWSTAMP': 'TextEdit', 'MXLOCATION': 'TextEdit', 'NAVAIDID': 'TextEdit', 'NAVAIDDESC': 'TextEdit', 'FUNCTIONDESC': 'TextEdit', 'STATUS': 'TextEdit', 'DOTNORTHING': 'TextEdit', 'DOTEASTING': 'TextEdit', 'DOTLONGITUDE': 'TextEdit', 'DOTLATITUDE': 'TextEdit', 'DOTMSY': 'TextEdit', 'NAVAIDINFRASUBGROUP': 'TextEdit', 'FUNCTIONINFRASUBGROUP': 'TextEdit', 'MARKSTRUCTURE': 'TextEdit', 'HORIZONTALACCURACY': 'TextEdit', 'OWNER': 'TextEdit', 'ASSETNUM': 'TextEdit', 'SHAPE': 'TextEdit', 'MAXASSETNUM': 'TextEdit', 'LOCN_CODE': 'TextEdit', 'LOCATION': 'TextEdit', 'MAXLATITUDE': 'TextEdit', 'MAXLONGITUDE': 'TextEdit', 'MGA_ZONE': 'TextEdit', 'MAXOWNER': 'TextEdit', 'SITUATION': 'TextEdit', 'NAVAID_SHAPE': 'TextEdit', 'NAVAID_COLOUR': 'TextEdit', 'DAY_MARK': 'TextEdit', 'CHART_CHARACTER': 'TextEdit', 'FLASH_SEQUENCE': 'TextEdit', 'LIGHT_COLOUR': 'TextEdit', 'LIGHT_RANGE': 'TextEdit', 'VISIBLE_SECTOR': 'TextEdit', 'OBSCURED_SECTOR': 'TextEdit', 'LEAD_BEARING': 'TextEdit', 'RACON_CODE': 'TextEdit', 'AIS_TYPE': 'TextEdit', 'MMSI_NUMBER': 'TextEdit', 'MAXRISKCAT': 'TextEdit', 'RESPONSIBLEAGENCY': 'TextEdit', 'LIGHT_MODEL': 'TextEdit', 'MAXLINK': 'TextEdit', });
lyr_Ventia_Managed_Navaids_202501101VentiaManagedNavAids_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ExpandedKMLLayer_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'MXASSETNUM': 'no label', 'MXSITEID': 'no label', 'MXCREATIONSTATE': 'no label', 'ROWSTAMP': 'no label', 'MXLOCATION': 'no label', 'NAVAIDID': 'no label', 'NAVAIDDESC': 'no label', 'FUNCTIONDESC': 'no label', 'STATUS': 'no label', 'DOTNORTHING': 'no label', 'DOTEASTING': 'no label', 'DOTLONGITUDE': 'no label', 'DOTLATITUDE': 'no label', 'DOTMSY': 'no label', 'NAVAIDINFRASUBGROUP': 'no label', 'FUNCTIONINFRASUBGROUP': 'no label', 'MARKSTRUCTURE': 'no label', 'HORIZONTALACCURACY': 'no label', 'OWNER': 'no label', 'ASSETNUM': 'no label', 'SHAPE': 'no label', 'MAXASSETNUM': 'no label', 'LOCN_CODE': 'no label', 'LOCATION': 'no label', 'MAXLATITUDE': 'no label', 'MAXLONGITUDE': 'no label', 'MGA_ZONE': 'no label', 'MAXOWNER': 'no label', 'SITUATION': 'no label', 'NAVAID_SHAPE': 'no label', 'NAVAID_COLOUR': 'no label', 'DAY_MARK': 'no label', 'CHART_CHARACTER': 'no label', 'FLASH_SEQUENCE': 'no label', 'LIGHT_COLOUR': 'no label', 'LIGHT_RANGE': 'no label', 'VISIBLE_SECTOR': 'no label', 'OBSCURED_SECTOR': 'no label', 'LEAD_BEARING': 'no label', 'RACON_CODE': 'no label', 'AIS_TYPE': 'no label', 'MMSI_NUMBER': 'no label', 'MAXRISKCAT': 'no label', 'RESPONSIBLEAGENCY': 'no label', 'LIGHT_MODEL': 'no label', 'MAXLINK': 'no label', });
lyr_ExpandedKMLLayer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});