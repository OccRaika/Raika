import { punto } from "./variables/puntosAzulesParroquias.js";
import { rectorias } from "./variables/puntosRojosRectorias.js";
import { puntRel } from "./variables/puntosNoCapillas.js";
import { geojsonObjectochentaPARROQUIAS } from "./variables/poligonos.js";
window.addEventListener('load',()=>{


		/* plasma el mapa base Open Street Map como una capa */
		var osm = new ol.layer.Tile({
			source: new ol.source.OSM(),
			visible:true,
		});/* termina el pegado el mapa base*/


		
/* <<<< 1 >>>>  aqui extraemos los datos geometricos del TopoJSON con ---ol.source.Vector--- de los poligonos de parroquias, colonias etc y los guardamos en sourceOchentaPARROQUIAS */
	var sourceOchentaPARROQUIAS = new ol.source.Vector({
			features: (new ol.format.TopoJSON(
				
			)).readFeatures(geojsonObjectochentaPARROQUIAS,{
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                                })
							});/* termina la extraccion */






/* hasta aqui comienzo a asignar colores de poligonos, grosores, y colores de borde de todos los poligonos del TopoJSON de parroquias, colonias, estado y municipio  */
/* este es el numero de poligonos del TopoJSON 80 parroquias*/
		/* (id del    4 al  164)   81 poligonos de colores....con borde azul....grosor de borde .5..... de los territorios parroquiales */
		/* (id del  166 al 1996)  916 poligonos transparentes....con borde rojo....grosor de borde .5..... de las colonias adentro de los limites de los poligonos de las parroquias */
		/* (id del 1998 al 2354)  179 poligonos transparentes....con borde verde....grosor de borde .5..... de las colonias afuera de los limites de los poligonos de las parroquias */
		/* (id             2356)    1 poligono  transparente....con borde ROJO....grosor de borde 3..... DEL ESTADO DE PUEBLA */
		/* (id             2358)    1 poligono  transparente....con borde AZUL ....grosor de borde 2.5..... DEL MUNICIPIO DE PUEBLA */
		/*                       1178 POLIGONOS EN TOTAL  */

	var linea = "{";
		for (var i  = 166 ; i <=  2354; i+= 2)  
		{	
			
				linea +=  "\"" + i + "\":\"" +"rgba(1,1,1,0)\","; /* ESTE ES EL RELLENO TRANSPARENTE DE TODAS LAS COLONIAS*/
						
			
		}

		var lineaAlter = "{";
		for (var i  = 166 ; i <=  2354; i+= 2)  
		{	
			
			lineaAlter +=  "\"" + i + "\":\"" +"rgba(1,1,1,0)\","; /* ESTE ES EL RELLENO TRANSPARENTE DE TODAS LAS COLONIAS*/
						
			
		}
		
	
	
/* 
-----en la function vectorStyleFunction(feature)---muchas lineas abajo ( te la marco asi: >>>>32<<<<< ) se genera un ID (que va de 2 en 2---"4\" \"6\" etc) 
 aqui se le asigna un color para darselo a los poligonos de parroquias, Estado (((\"2356\"))) el Municipio ((\"2358\"))*/
 linea +=
 "\"4\": \"rgba(230, 130, 12, 0.5)\",\"6\": \"rgba(135, 233, 16, 0.5)\",\"8\": \"rgba(3, 6, 169, 0.5)\",\"10\": \"rgba(247, 76, 17, 0.5)\",\"12\": \"rgba(215, 186, 187, 0.5)\",\"14\": \"rgba(98, 143, 154, 0.5)\",                       \"16\": \"rgba(93, 4, 21, 0.5)\",\"18\": \"rgba(0, 254, 234, 0.5)\",\"20\": \"rgba(7, 137, 137, 0.5)\",\"22\": \"rgba(241, 206, 178, 0.5)\",\"24\": \"rgba(17, 32, 196, 0.5)\",					  \"26\": \"rgba(246, 167, 29, 0.5)\",\"28\": \"rgba(234, 164, 182, 0.5)\",\"30\": \"rgba(253, 255, 0, 0.5)\",\"32\": \"rgba(111, 142, 87, 0.5)\",\"34\": \"rgba(253, 255, 0, 0.5)\",                      \"36\": \"rgba(32, 124, 39, 0.5)\",\"38\": \"rgba(93, 4, 21, 0.5)\",\"40\": \"rgba(50, 16, 228, 0.5)\",\"42\": \"rgba(149, 83, 151, 0.5)\",\"44\": \"rgba(223, 246, 27, 0.5)\",                   \"46\": \"rgba(223, 246, 27, 1)\",\"48\": \"rgba(126, 224, 72, 0.5)\",\"50\": \"rgba(211, 118, 5, 0.5)\",\"52\": \"rgba(60, 140, 36, 0.5)\",\"54\": \"rgba(58, 58, 143, 0.5)\",                   \"56\": \"rgba(17, 254, 167, 0.5)\",\"58\": \"rgba(93, 4, 21, 0.5)\",\"60\": \"rgba(15, 73, 175, 0.5)\",\"62\": \"rgba(178, 128, 0, 0.5)\",\"64\": \"rgba(89, 207, 206, 0.5)\",                   \"66\": \"rgba(253, 255, 0, 0.5)\",\"68\": \"rgba(0, 254, 234, 0.5)\",\"70\": \"rgba(249, 172, 247, 0.5)\",\"72\": \"rgba(168, 17, 174, 0.5)\",\"74\": \"rgba(12, 241, 217, 0.5)\",                   \"76\": \"rgba(153, 16, 228, 0.5)\",\"78\": \"rgba(253, 255, 0, 0.5)\",\"80\": \"rgba(0, 52, 204, 0.5)\",\"82\": \"rgba(178, 128, 0, 0.5)\",\"84\": \"rgba(12, 28, 241, 0.5)\",                   \"86\": \"rgba(0, 254, 234, 0.5)\",\"88\": \"rgba(241, 230, 12, 0.5)\",\"90\": \"rgba(33, 182, 20, 0.5)\",\"92\": \"rgba(253, 255, 0, 0.5)\",\"94\": \"rgba(165, 40, 207, 0.5)\",                   \"96\": \"rgba(7, 137, 137, 0.5)\",\"98\": \"rgba(241, 111, 12, 0.5)\",\"100\": \"rgba(93, 4, 21, 0.5)\",\"102\": \"rgba(221, 197, 160, 0.5)\",\"104\": \"rgba(0, 254, 234, 0.5)\",             \"106\": \"rgba(177, 55, 217, 0.5)\",\"108\": \"rgba(253, 255, 0, 0.5)\",\"110\": \"rgba(130, 220, 180, 0.5)\",\"112\": \"rgba(90, 254, 124, 0.5)\",\"114\": \"rgba(23, 77, 138, 0.5)\",              \"116\": \"rgba(167, 137, 0, 0.5)\",\"118\": \"rgba(17, 254, 167, 0.5)\",\"120\": \"rgba(112, 18, 194, 0.5)\",\"122\": \"rgba(0, 52, 204, 0.5)\",\"124\": \"rgba(158, 105, 0, 0.5)\",                   \"126\": \"rgba(217, 70, 204, 0.5)\",\"128\": \"rgba(33, 182, 20, 0.5)\",\"130\": \"rgba(254, 47, 230, 0.5)\",\"132\": \"rgba(0, 254, 234, 0.5)\",\"134\": \"rgba(98, 118, 52, 0.5)\",\"136\": \"rgba(0, 254, 234, 0.5)\",\"138\": \"rgba(253, 255, 0, 0.5)\",\"140\": \"rgba(9, 112, 113, 0.5)\",\"142\": \"rgba(132, 58, 165, 0.5)\",\"144\": \"rgba(33, 97, 209, 0.5)\",\"146\": \"rgba(201, 67, 211, 0.5)\",\"148\": \"rgba(160, 241, 59, 0.5)\",\"150\": \"rgba(0, 254, 234, 0.5)\",\"152\": \"rgba(182, 22, 111, 0.5)\",\"154\": \"rgba(146, 173, 58, 0.5)\",\"156\": \"rgba(29, 99, 216, 0.5)\",\"158\": \"rgba(144, 26, 167, 0.5)\",\"160\": \"rgba(135, 233, 16, 0.5)\",\"162\": \"rgba(22, 212, 157, 0.5)\",\"164\": \"rgba(249, 172, 247, 0.5)\",\"2356\": \"rgba(58, 101, 35, 0.0)\",\"2358\": \"rgba(58, 101, 35, 0.0)\"}"; 

  lineaAlter +=
 "\"4\": \"rgba(0, 0, 0, 0.0)\",\"6\": \"rgba(0, 0, 0, 0.0)\",\"8\": \"rgba(0, 0, 0, 0.0)\",\"10\": \"rgba(0, 0, 0, 0.0)\",\"12\": \"rgba(0, 0, 0, 0.0)\",\"14\": \"rgba(0, 0, 0, 0.0)\",                       \"16\": \"rgba(0, 0, 0, 0.0)\",\"18\": \"rgba(0, 0, 0, 0.0)\",\"20\": \"rgba(0, 0, 0, 0.0)\",\"22\": \"rgba(0, 0, 0, 0.0)\",\"24\": \"rgba(0, 0, 0, 0.0)\",					  \"26\": \"rgba(0, 0, 0, 0.0)\",\"28\": \"rgba(0, 0, 0, 0.0)\",\"30\": \"rgba(0, 0, 0, 0.0)\",\"32\": \"rgba(0, 0, 0, 0.0)\",\"34\": \"rgba(0, 0, 0, 0.0)\",                      \"36\": \"rgba(0, 0, 0, 0.0)\",\"38\": \"rgba(0, 0, 0, 0.0)\",\"40\": \"rgba(0, 0, 0, 0.0)\",\"42\": \"rgba(0, 0, 0, 0.0)\",\"44\": \"rgba(0, 0, 0, 0.0)\",                   \"46\": \"rgba(0, 0, 0, 0.0)\",\"48\": \"rgba(0, 0, 0, 0.0)\",\"50\": \"rgba(0, 0, 0, 0.0)\",\"52\": \"rgba(0, 0, 0, 0.0)\",\"54\": \"rgba(0, 0, 0, 0.0)\",                   \"56\": \"rgba(0, 0, 0, 0.0)\",\"58\": \"rgba(0, 0, 0, 0.0)\",\"60\": \"rgba(0, 0, 0, 0.0)\",\"62\": \"rgba(0, 0, 0, 0.0)\",\"64\": \"rgba(0, 0, 0, 0.0)\",                   \"66\": \"rgba(0, 0, 0, 0.0)\",\"68\": \"rgba(0, 0, 0, 0.0)\",\"70\": \"rgba(0, 0, 0, 0.0)\",\"72\": \"rgba(0, 0, 0, 0.0)\",\"74\": \"rgba(0, 0, 0, 0.0)\",                   \"76\": \"rgba(0, 0, 0, 0.0)\",\"78\": \"rgba(0, 0, 0, 0.0)\",\"80\": \"rgba(0, 0, 0, 0.0)\",\"82\": \"rgba(0, 0, 0, 0.0)\",\"84\": \"rgba(12, 28, 241, 0.5)\",                   \"86\": \"rgba(0, 254, 234, 0.5)\",\"88\": \"rgba(241, 230, 12, 0.5)\",\"90\": \"rgba(33, 182, 20, 0.5)\",\"92\": \"rgba(253, 255, 0, 0.5)\",\"94\": \"rgba(165, 40, 207, 0.5)\",                   \"96\": \"rgba(7, 137, 137, 0.5)\",\"98\": \"rgba(241, 111, 12, 0.5)\",\"100\": \"rgba(93, 4, 21, 0.5)\",\"102\": \"rgba(221, 197, 160, 0.5)\",\"104\": \"rgba(0, 254, 234, 0.5)\",             \"106\": \"rgba(177, 55, 217, 0.5)\",\"108\": \"rgba(253, 255, 0, 0.5)\",\"110\": \"rgba(130, 220, 180, 0.5)\",\"112\": \"rgba(90, 254, 124, 0.5)\",\"114\": \"rgba(23, 77, 138, 0.5)\",              \"116\": \"rgba(167, 137, 0, 0.5)\",\"118\": \"rgba(17, 254, 167, 0.5)\",\"120\": \"rgba(112, 18, 194, 0.5)\",\"122\": \"rgba(0, 52, 204, 0.5)\",\"124\": \"rgba(158, 105, 0, 0.5)\",                   \"126\": \"rgba(217, 70, 204, 0.5)\",\"128\": \"rgba(33, 182, 20, 0.5)\",\"130\": \"rgba(254, 47, 230, 0.5)\",\"132\": \"rgba(0, 254, 234, 0.5)\",\"134\": \"rgba(98, 118, 52, 0.5)\",\"136\": \"rgba(0, 254, 234, 0.5)\",\"138\": \"rgba(253, 255, 0, 0.5)\",\"140\": \"rgba(9, 112, 113, 0.5)\",\"142\": \"rgba(132, 58, 165, 0.5)\",\"144\": \"rgba(33, 97, 209, 0.5)\",\"146\": \"rgba(201, 67, 211, 0.5)\",\"148\": \"rgba(160, 241, 59, 0.5)\",\"150\": \"rgba(0, 254, 234, 0.5)\",\"152\": \"rgba(182, 22, 111, 0.5)\",\"154\": \"rgba(146, 173, 58, 0.5)\",\"156\": \"rgba(29, 99, 216, 0.5)\",\"158\": \"rgba(144, 26, 167, 0.5)\",\"160\": \"rgba(135, 233, 16, 0.5)\",\"162\": \"rgba(22, 212, 157, 0.5)\",\"164\": \"rgba(249, 172, 247, 0.5)\",\"2356\": \"rgba(58, 101, 35, 0.0)\",\"2358\": \"rgba(58, 101, 35, 0.0)\"}"; 

   var colorsAlter= JSON.parse(lineaAlter);


			
	var colors = JSON.parse(linea);	/*El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis... en esta variable meto los COLORES diferenciados de  los bordes de TODOS los poligonos */
		
		var linea = "{";

   
		for (var i  = 4 ; i <=  2355; i+= 2)
		{	
				if (i < 166)  /* LAS PARROQUIAS*/
				{
					linea +=  "\"" + i + "\":\"" +"blue\","; 
				}
				else if (i < 1998)   /* LAS COLONIAS INTERNAS */
				{
					linea +=  "\"" + i + "\":\"" +"red\","; 
				}
				else if (i < 2356)  /* LAS COLONIAS EXTERNAS */
				{
					linea +=  "\"" + i + "\":\"" +"green\","; 
				}
			
		}
		linea += "\"2356\": \"rgba(182, 22, 111, 1)\",\"2358\": \"blue\"}";  /* el ESTADO y el MUNICIPIO */





		
	var colors2 = JSON.parse(linea);/* en esta variable meto los GROSORES diferenciados de todos los bordes de los poligonos */

		var linea = "{"; 
		
		for (var i  = 4 ; i <=  2355; i+= 2)
		{	
				if (i < 166) /* estos son los 81 poligonos de las parroquias */
				{
					linea +=  "\"" + i + "\":\"" +".5\","; 
				}
				else if (i < 1998) /* estas son las colonias internas  */
				{
					linea +=  "\"" + i + "\":\"" +".5\","; 
				}
				
				else if (i < 2356) /* estas son las colonias externas colindantes  */
				{
					linea +=  "\"" + i + "\":\"" +".5\","; 
				}

		}

		/*linea += "\"1996\": \"3\", \"2356\": \"3\",\"2358\": \"2.5\"}"; el 1996 es la ultima colonia roja, el 1998 la 1ª verde*/

		linea += "\"2356\": \"3\",\"2358\": \"2.5\"}"; /*  estos son el municipio y del estado */  
		         	
		var Width = JSON.parse(linea); /* width es el grosor de la linea de borde */


/* hasta aqui termino de asignar colores de poligonos, grosores, y colores de borde de todos los poligonos del TopoJSON de parroquias, colonias, estado y municipio  */


/*>>>>32<<<<<*/	   function vectorStyleFunction(feature) {
			            let geom = feature.getGeometry()
			            let id = geom.ol_uid /* esto crea un ID en cada sub-objeto del TopoJSON  Ochenta parroquias comenzando en 4 y de dos en dos: 6,8, 10 etc. sin
									            esta instruccion es imposible asignar colores diferentes a cada objeto del TopoJSON */
			
			
			            let style = new ol.style.Style({
						
					
					    fill: new ol.style.Fill({ 
						  color: colors[id] /*TODOS LOS COLORES DE RELLENO DE LOS POLIGONOS INCLUIDOS LOS DEL JSON.parse*/
											}),


					    stroke: new ol.style.Stroke({ 
						 color: colors2[id], /*LOS COLORES DEL PERIMETRO DE TODOS LOS POLIGONOS DEL JSON.parse*/
						 width: Width[id] /*LOS GROSORES DE TODOS LOS POLIGONOS DEL JSON.parse*/
											    }),                				
			      })
			         return style
		          }


				  function styleAlter(feature) {
					let geom = feature.getGeometry()
					let id = geom.ol_uid /* esto crea un ID en cada sub-objeto del TopoJSON  Ochenta parroquias comenzando en 4 y de dos en dos: 6,8, 10 etc. sin
											esta instruccion es imposible asignar colores diferentes a cada objeto del TopoJSON */
		
		
					let style = new ol.style.Style({
					
				
					fill: new ol.style.Fill({ 
					  color: colorsAlter[id] /*TODOS LOS COLORES DE RELLENO DE LOS POLIGONOS INCLUIDOS LOS DEL JSON.parse*/
										}),


					stroke: new ol.style.Stroke({ 
					 color: colors2[id], /*LOS COLORES DEL PERIMETRO DE TODOS LOS POLIGONOS DEL JSON.parse*/
					 width: Width[id] /*LOS GROSORES DE TODOS LOS POLIGONOS DEL JSON.parse*/
											}),                				
			  })
				 return style
			  }





/* <<<< 2 >>>>  de mi source (fuente) de datos extraidos hago un layer (capa) para plasmarlo en el mapa base (mapa de fondo) 
    nota el metodo, son 3 pasos: te marco su orden en los comentarios como:<<<< 1 >>>> <<<< 2 >>>> <<<< 3 >>>>*/
	var vectorLayerOchentaPARROQUIAS = new ol.layer.Vector({
			source: sourceOchentaPARROQUIAS,/*este es el topoJSON directamente*/
			title: 'vectorLayerOchentaPARROQUIAS',
			style: vectorStyleFunction,  /* aqui le inserto los colores diferenciados a cada poligono que logre en la funcion-----vectorStyleFunction---- */
			visible: true,
			
		});

		var layerprueba = new ol.layer.Vector({
			source: sourceOchentaPARROQUIAS,/*este es el topoJSON directamente*/
			title: 'layerprueba',
			style: styleAlter,  /* aqui le inserto los colores diferenciados a cada poligono que logre en la funcion-----vectorStyleFunction---- */
			visible: false,
			
		});


   /* <<<< 3 >>>>  aqui meto en la---var layers--- todas las capas de poligonos y puntos extraidos en los pasos 1 y 2 ya coloreados, con grosor de lineas...etc */             
  	const baseLayerGroup= new ol.layer.Group({
		  layers:[
			  osm, vectorLayerOchentaPARROQUIAS, layerprueba
	   ]
	  })


	var Mivista = new ol.View({
	center: ol.proj.fromLonLat([-98.204, 19.04]), zoom: 12
	 })

	new ol.Map({
			target: 'map', /* target es "objetivo" dirige todo el contenido del mapa hacia el "div map" que está hasta el principio del body  */
			controls:[ /* son los botones de pantalla completa y el logo de open street map */
			new ol.control.FullScreen(), /* pantalla completa  */
			new ol.control.Attribution() /* logo de open street map */		
					 ],
		  	layers: baseLayerGroup,	/* incorpora la var layer que contiene todas las capas */
			view: Mivista, /* el posicionamiento del mapa */

		                    });
			Mivista.setRotation(-.5 ) /* rota el mapa  27 grados al poniente para enderezar la vista de Puebla   */

	

		
	var cargarMapa=document.querySelector('.cargarMapa')

	cargarMapa.addEventListener('click', function(){
		let elementChange="vectorLayerOchentaPARROQUIAS"
		baseLayerGroup.getLayers().forEach(function(element,i,a){
			let baseLayerTitle=element.get('title');
			element.setVisible(elementChange!==baseLayerTitle);
			//console.log(elementChange!==baseLayerTitle)
		})
		 
	});


});