(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56bc78de"],{1148:function(t,i,o){"use strict";var e=o("5926"),n=o("577e"),s=o("1d80"),a=RangeError;t.exports=function(t){var i=n(s(this)),o="",l=e(t);if(l<0||l==1/0)throw a("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(i+=i))1&l&&(o+=i);return o}},"33ee":function(t,i,o){},"408a":function(t,i,o){var e=o("e330");t.exports=e(1..valueOf)},"5038e":function(t,i,o){},"583e":function(t,i,o){"use strict";o.r(i);var e,n,s,a,l=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"component-MapServer full-block"},[2===t.currentMap?o("map2D",{staticClass:"full-block"}):o("map3D",{staticClass:"full-block"}),o("div",{staticClass:"dimensionChange"},[o("el-radio-group",{attrs:{size:"small"},model:{value:t.currentMap,callback:function(i){t.currentMap=i},expression:"currentMap"}},[o("el-radio-button",{attrs:{label:2}},[t._v("二维")]),o("el-radio-button",{attrs:{label:3}},[t._v("三维")])],1)],1)],1)},r=[],h=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"component-map2D"},[o("div",{staticClass:"full-block InfoLayer"},[o("div",{staticClass:"PositionInfo"},[o("div",[t._v("当前级别:"+t._s(t.mapZoom))]),o("div",[t._v("中心点信息")]),o("div",[t._v("纬度:"+t._s(t.centerInfo.longitude)+", 经度:"+t._s(t.centerInfo.latitude))]),o("div",[t._v("横坐标:"+t._s(t.centerInfo.x)+", 纵坐标:"+t._s(t.centerInfo.y))])])]),o("div",{attrs:{id:"map"}})])},c=[],p=(o("d81d"),o("b680"),o("d3b7"),["http://localhost:9000/bigemap.js/v2.1.0/bigemap.js"]),m=new Promise((function(t){var i=document.createElement("link");i.rel="stylesheet",i.async=!1,i.href="http://localhost:9000/bigemap.js/v2.1.0/bigemap.css",document.head.appendChild(i);var o=p.map((function(t){var i=document.createElement("script");return i.type="text/javascript",i.async=!1,i.src=t,document.head.appendChild(i),i})),e=o.pop();e.onload=t})),d=(o("ac1f"),o("5319"),function(t,i){t.Control.MiniMap=t.Control.extend({options:{position:"bottomright",toggleDisplay:!0,zoomLevelOffset:-4,zoomLevelFixed:!1,zoomAnimation:!1,autoToggleDisplay:!1,width:150,height:150,aimingRectOptions:{color:"#ff7800",weight:1,clickable:!1},shadowRectOptions:{color:"#000000",weight:1,clickable:!1,opacity:0,fillOpacity:0}},hideText:"Hide MiniMap",showText:"Show MiniMap",initialize:function(i,o){t.Util.setOptions(this,o),this.options.aimingRectOptions.clickable=!1,this.options.shadowRectOptions.clickable=!1,this._layer=t.tileLayer(i)},onAdd:function(i){return this._mainMap=i,this._container=t.DomUtil.create("div","bigemap-control-minimap"),this._container.style.width=this.options.width+"px",this._container.style.height=this.options.height+"px",t.DomEvent.disableClickPropagation(this._container),t.DomEvent.on(this._container,"mousewheel",t.DomEvent.stopPropagation),this._miniMap=new t.Map(this._container,null,{attributionControl:!1,zoomControl:!1,zoomAnimation:this.options.zoomAnimation,autoToggleDisplay:this.options.autoToggleDisplay,touchZoom:!this.options.zoomLevelFixed,scrollWheelZoom:!this.options.zoomLevelFixed,doubleClickZoom:!this.options.zoomLevelFixed,boxZoom:!this.options.zoomLevelFixed,crs:i.options.crs}),this._miniMap.addLayer(this._layer),this._mainMapMoving=!1,this._miniMapMoving=!1,this._userToggledDisplay=!1,this._minimized=!1,this.options.toggleDisplay&&this._addToggleButton(),this._miniMap.whenReady(t.Util.bind((function(){this._aimingRect=t.rectangle(this._mainMap.getBounds(),this.options.aimingRectOptions).addTo(this._miniMap),this._shadowRect=t.rectangle(this._mainMap.getBounds(),this.options.shadowRectOptions).addTo(this._miniMap),this._mainMap.on("moveend",this._onMainMapMoved,this),this._mainMap.on("move",this._onMainMapMoving,this),this._miniMap.on("movestart",this._onMiniMapMoveStarted,this),this._miniMap.on("move",this._onMiniMapMoving,this),this._miniMap.on("moveend",this._onMiniMapMoved,this)}),this)),this._container},addTo:function(i){return t.Control.prototype.addTo.call(this,i),this._miniMap.setView(this._mainMap.getCenter(),this._decideZoom(!0)),this._setDisplay(this._decideMinimized()),this},onRemove:function(t){this._mainMap.off("moveend",this._onMainMapMoved,this),this._mainMap.off("move",this._onMainMapMoving,this),this._miniMap.off("moveend",this._onMiniMapMoved,this),this._miniMap.removeLayer(this._layer)},_addToggleButton:function(){this._toggleDisplayButton=this.options.toggleDisplay?this._createButton("",this.hideText,"bigemap-control-minimap-toggle-display",this._container,this._toggleDisplayButtonClicked,this):void 0},_createButton:function(i,o,e,n,s,a){var l=t.DomUtil.create("a",e,n);l.innerHTML=i,l.href="#",l.title=o;var r=t.DomEvent.stopPropagation;return t.DomEvent.on(l,"click",r).on(l,"mousedown",r).on(l,"dblclick",r).on(l,"click",t.DomEvent.preventDefault).on(l,"click",s,a),l},_toggleDisplayButtonClicked:function(){this._userToggledDisplay=!0,this._minimized?(this._restore(),this._toggleDisplayButton.title=this.hideText):(this._minimize(),this._toggleDisplayButton.title=this.showText)},_setDisplay:function(t){t!=this._minimized&&(this._minimized?this._restore():this._minimize())},_minimize:function(){this.options.toggleDisplay?(this._container.style.width="19px",this._container.style.height="19px",this._toggleDisplayButton.className+=" minimized"):this._container.style.display="none",this._minimized=!0},_restore:function(){this.options.toggleDisplay?(this._container.style.width=this.options.width+"px",this._container.style.height=this.options.height+"px",this._toggleDisplayButton.className=this._toggleDisplayButton.className.replace(/(?:^|\s)minimized(?!\S)/g,"")):this._container.style.display="block",this._minimized=!1},_onMainMapMoved:function(t){this._miniMapMoving?this._miniMapMoving=!1:(this._mainMapMoving=!0,this._miniMap.setView(this._mainMap.getCenter(),this._decideZoom(!0)),this._setDisplay(this._decideMinimized())),this._aimingRect.setBounds(this._mainMap.getBounds())},_onMainMapMoving:function(t){this._aimingRect.setBounds(this._mainMap.getBounds())},_onMiniMapMoveStarted:function(t){var i=this._aimingRect.getBounds(),o=this._miniMap.latLngToContainerPoint(i.getSouthWest()),e=this._miniMap.latLngToContainerPoint(i.getNorthEast());this._lastAimingRectPosition={sw:o,ne:e}},_onMiniMapMoving:function(i){!this._mainMapMoving&&this._lastAimingRectPosition&&(this._shadowRect.setBounds(new t.LatLngBounds(this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.sw),this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.ne))),this._shadowRect.setStyle({opacity:1,fillOpacity:.3}))},_onMiniMapMoved:function(t){this._mainMapMoving?this._mainMapMoving=!1:(this._miniMapMoving=!0,this._mainMap.setView(this._miniMap.getCenter(),this._decideZoom(!1)),this._shadowRect.setStyle({opacity:0,fillOpacity:0}))},_decideZoom:function(t){if(this.options.zoomLevelFixed)return t?this.options.zoomLevelFixed:this._mainMap.getZoom();if(t)return this._mainMap.getZoom()+this.options.zoomLevelOffset;var i,o=this._miniMap.getZoom()-this._mainMap.getZoom(),e=this._miniMap.getZoom()-this.options.zoomLevelOffset;return o>this.options.zoomLevelOffset&&this._mainMap.getZoom()<this._miniMap.getMinZoom()-this.options.zoomLevelOffset?this._miniMap.getZoom()>this._lastMiniMapZoom?(i=this._mainMap.getZoom()+1,this._miniMap.setZoom(this._miniMap.getZoom()-1)):i=this._mainMap.getZoom():i=e,this._lastMiniMapZoom=this._miniMap.getZoom(),i},_decideMinimized:function(){return this._userToggledDisplay?this._minimized:this.options.autoToggleDisplay?!!this._mainMap.getBounds().contains(this._miniMap.getBounds()):this._minimized}}),t.Map.mergeOptions({miniMapControl:!1}),t.Map.addInitHook((function(){this.options.miniMapControl&&(this.miniMapControl=(new t.Control.MiniMap).addTo(this))})),t.control.minimap=function(i){return new t.Control.MiniMap(i)},i()}),_=(o("a434"),function(t,i){t.Control.Measure=t.Control.extend({options:{position:"topleft",keyboard:!0,activeKeyCode:"M".charCodeAt(0),cancelKeyCode:27,lineColor:"black",lineWeight:2,lineDashArray:"6, 6",lineOpacity:1,formatDistance:null,textColor:"black"},initialize:function(i){t.Util.setOptions(this,i)},onAdd:function(i){var o="bigemap-control-zoom bigemap-bar bigemap-control",e=t.DomUtil.create("div",o),n='<svg t="1555989242157" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1104" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><defs><style type="text/css"></style></defs><path d="M942.257152 285.452288L738.547712 81.742848c-13.422592-13.422592-35.158016-13.411328-48.56832 0L81.743872 689.980416c-13.411328 13.410304-13.422592 35.144704 0 48.567296l203.70944 203.70944c13.421568 13.422592 35.156992 13.411328 48.567296 0l608.236544-608.237568c13.412352-13.40928 13.42464-35.144704 0.001024-48.567296zM309.736448 869.40672L154.594304 714.263552l39.058432-39.057408 99.971072 99.971072c13.422592 13.421568 35.156992 13.411328 48.56832 0 13.410304-13.411328 13.421568-35.145728 0-48.56832l-99.97312-99.971072 39.058432-39.057408 26.585088 26.584064c13.422592 13.422592 35.156992 13.411328 48.56832 0 13.410304-13.410304 13.421568-35.144704 0-48.56832l-26.585088-26.584064 39.057408-39.058432 99.971072 99.971072c13.422592 13.422592 35.158016 13.411328 48.56832 0 13.410304-13.410304 13.422592-35.144704 0-48.56832l-99.972096-99.971072 39.058432-39.058432 26.584064 26.585088c13.422592 13.421568 35.158016 13.411328 48.56832 0 13.410304-13.411328 13.422592-35.145728 0-48.56832l-26.585088-26.585088 39.058432-39.058432 99.971072 99.972096c13.421568 13.421568 35.156992 13.410304 48.567296 0 13.411328-13.411328 13.421568-35.145728 0-48.56832l-99.971072-99.971072 39.046144-39.047168 26.585088 26.585088c13.421568 13.423616 35.156992 13.411328 48.56832 0 13.410304-13.411328 13.421568-35.145728 0-48.56832l-26.585088-26.58304 33.923072-33.92512 155.143168 155.143168L309.736448 869.40672z" fill="" p-id="1105"></path></svg>';return this._createButton(n,"Measure","bigemap-control-measure bigemap-bar-part bigemap-bar-part-top-and-bottom",e,this._toggleMeasure,this),this.options.keyboard&&t.DomEvent.on(document,"keydown",this._onKeyDown,this),e},onRemove:function(i){this.options.keyboard&&t.DomEvent.off(document,"keydown",this._onKeyDown,this)},_createButton:function(i,o,e,n,s,a){var l=t.DomUtil.create("a",e,n);return l.innerHTML=i,l.href="#",l.title=o,t.DomEvent.on(l,"click",t.DomEvent.stopPropagation).on(l,"click",t.DomEvent.preventDefault).on(l,"click",s,a).on(l,"dbclick",t.DomEvent.stopPropagation),l},_toggleMeasure:function(){this._measuring=!this._measuring,this._measuring?(t.DomUtil.addClass(this._container,"bigemap-control-measure-on"),this._startMeasuring()):(t.DomUtil.removeClass(this._container,"bigemap-control-measure-on"),this._stopMeasuring())},_startMeasuring:function(){this._oldCursor=this._map._container.style.cursor,this._map._container.style.cursor="crosshair",this._doubleClickZoom=this._map.doubleClickZoom.enabled(),this._map.doubleClickZoom.disable(),this._isRestarted=!1,t.DomEvent.on(this._map,"mousemove",this._mouseMove,this).on(this._map,"click",this._mouseClick,this).on(this._map,"dbclick",this._finishPath,this),this._layerPaint||(this._layerPaint=t.layerGroup().addTo(this._map)),this._points||(this._points=[])},_stopMeasuring:function(){this._map._container.style.cursor=this._oldCursor,t.DomEvent.off(this._map,"mousemove",this._mouseMove,this).off(this._map,"click",this._mouseClick,this).off(this._map,"dbclick",this._finishPath,this),this._doubleClickZoom&&this._map.doubleClickZoom.enabled(),this._layerPaint,t.DomUtil.removeClass(this._container,"bigemap-control-measure-on"),this._restartPath()},_mouseMove:function(i){if(i.latlng&&this._lastPoint&&(this._layerPaintPathTemp?(this._layerPaintPathTemp.getLatLngs().splice(0,2,this._lastPoint,i.latlng),this._layerPaintPathTemp.redraw()):this._layerPaintPathTemp=t.polyline([this._lastPoint,i.latlng],{color:this.options.lineColor,weight:this.options.lineWeight,opacity:this.options.lineOpacity,clickable:!1,dashArray:this.options.lineDashArray,interactive:!1}).addTo(this._layerPaint),this._tooltip)){this._distance||(this._distance=0),this._updateTooltipPosition(i.latlng);var o=i.latlng.distanceTo(this._lastPoint);this._updateTooltipDistance(this._distance+o,o)}},_mouseClick:function(i){if(i.latlng)if(this._isRestarted)this._isRestarted=!1;else{if(this._lastPoint&&this._tooltip){this._distance||(this._distance=0),this._updateTooltipPosition(i.latlng);var o=i.latlng.distanceTo(this._lastPoint);this._updateTooltipDistance(this._distance+o,o),this._distance+=o}this._createTooltip(i.latlng),this._lastPoint&&!this._layerPaintPath&&(this._layerPaintPath=t.polyline([this._lastPoint],{color:this.options.lineColor,weight:this.options.lineWeight,opacity:this.options.lineOpacity,clickable:!1,interactive:!1}).addTo(this._layerPaint)),this._layerPaintPath&&this._layerPaintPath.addLatLng(i.latlng),this._lastPoint&&(this._lastCircle&&this._lastCircle.off("click",this._finishPath,this),this._lastCircle=this._createCircle(i.latlng).addTo(this._layerPaint),this._lastCircle.on("click",this._finishPath,this)),this._lastPoint=i.latlng}},_finishPath:function(i){if(i&&t.DomEvent.preventDefault(i),this._tooltip&&this._layerPaint.removeLayer(this._tooltip),this._layerPaint&&this._layerPaintPathTemp&&this._layerPaint.removeLayer(this._layerPaintPathTemp),this._lastCircle){this._lastCircle.off("click",this._finishPath,this).remove();var o=this._layerPaint;this._layerPaint=void 0,t.marker(this._lastCircle.getLatLng(),{icon:t.divIcon({iconSize:t.point(14,14),iconAnchor:t.point(7,7),html:'<span class="close">&chi;</span>',className:"bigemap-remove-current-data"})}).on("click",(function(){o.clearLayers(),this.remove()})).addTo(this._map),console.log(this._lastCircle)}this._toggleMeasure(),this._restartPath()},_restartPath:function(){this._distance=0,this._lastCircle=void 0,this._lastPoint=void 0,this._tooltip=void 0,this._layerPaintPath=void 0,this._layerPaintPathTemp=void 0,this._isRestarted=!0},_createCircle:function(i){return new t.CircleMarker(i,{color:"black",opacity:1,weight:1,fillColor:"white",fill:!0,fillOpacity:1,radius:4,clickable:Boolean(this._lastCircle)})},_createTooltip:function(i){var o=t.divIcon({className:"bigemap-measure-tooltip",iconAnchor:[-5,-5]});this._tooltip=t.marker(i,{icon:o,clickable:!1}).addTo(this._layerPaint)},_updateTooltipPosition:function(t){this._tooltip.setLatLng(t)},_updateTooltipDistance:function(t,i){if(this._tooltip._icon){var o=this._formatDistance(t),e=this._formatDistance(i),n='<div class="bigemap-measure-tooltip-total" style="color:'+this.options.textColor+'">'+o+"</div>";e>0&&o!==e&&(n+='<div class="bigemap-measure-tooltip-difference" style="color:'+this.options.textColor+'">(+'+e+")</div>"),this._tooltip._icon.innerHTML=n}},_formatDistance:function(t){return"function"===typeof this.options.formatDistance?this.options.formatDistance(t):t<1e3?Math.round(t)+"m":Math.round(t/1e3*100)/100+"km"},_onKeyDown:function(t){switch(t.keyCode){case this.options.activeKeyCode:this._measuring||this._toggleMeasure();break;case this.options.cancelKeyCode:this._measuring&&(this._lastPoint?(this._finishPath(),this._isRestarted=!1):this._toggleMeasure());break}}}),t.control.measure=function(i){return new t.Control.Measure(i)},t.Map.mergeOptions({measureControl:!1}),t.Map.addInitHook((function(){this.options.measureControl&&(this.measureControl=new t.Control.Measure,this.addControl(this.measureControl))})),i()}),u=(o("33ee"),o("e515"),{name:"map2D",components:{},props:{},data:function(){return{centerInfo:{longitude:27.99,latitude:110.21,x:0,y:0},mapZoom:5}},created:function(){},mounted:function(){var t=this;setTimeout((function(){n=window.BM,t.mapInit()}),200)},filters:{},watch:{},computed:{},methods:{mapInit:function(){var t=this;n.Config.HTTP_URL="http://localhost:9000",m.then((function(){e=n.map("map","bigemap.62mkpaa7",{center:[27.996307373046875,110.21484375],zoom:t.mapZoom,zoomControl:!0,preferCanvas:!1,keyboard:!0,scrollWheelZoom:!0,doubleClickZoom:!1,dragging:!0,attributionControl:!1}),e.on("moveend",(function(i){var o=i.target.getCenter(),e=i.target._getCenterLayerPoint();t.centerInfo.longitude=o.lng.toFixed(2),t.centerInfo.latitude=o.lat.toFixed(2),t.centerInfo.x=e.x,t.centerInfo.y=e.y})),e.on("zoomend",(function(i){t.mapZoom=i.target.getZoom(),console.log(n.control.scale)})),d(n,(function(){new n.Control.MiniMap("bigemap.62mkpaa7",{toggleDisplay:!0,position:"topright",zoomLevelOffset:0}).addTo(e)})),_(n,(function(){n.control.scale({maxWidth:175,metric:!0,imperial:!1,position:"topright"}).addTo(e);n.control.measure({position:"topleft",keyboard:!0,activeKeyCode:"M".charCodeAt(0),cancelKeyCode:27,lineColor:"yellowGreen",lineWeight:2,lineDashArray:"6, 6",lineOpacity:1}).addTo(e)}))}))}}}),g=u,f=(o("f9c2"),o("6ab3"),o("2877")),M=Object(f["a"])(g,h,c,!1,null,"92a6d0f6",null),v=M.exports,y=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"component-map3D"},[o("div",{attrs:{id:"container"}})])}],C={name:"map3D",components:{},props:{},data:function(){return{}},created:function(){},mounted:function(){var t=this;setTimeout((function(){a=window.bmgl,t.mapInit()}),200)},filters:{},watch:{},computed:{},methods:{mapInit:function(){a.Config.HTTP_URL="http://localhost:9000",m.then((function(){s=new a.Viewer("container",{mapId:"bigemap.4xlas4kc",terrainId:"bigemap.7p53rqx1"}),s.camera.setView({destination:a.Rectangle.fromDegrees(65.0390625,1.9332268238067627,155.390625,54.05938720703125)})}))}}},w=C,P=(o("fdd1"),Object(f["a"])(w,y,b,!1,null,"2c30920f",null)),D=P.exports,k={name:"MapServer",components:{map2D:v,map3D:D},props:{},data:function(){return{currentMap:2}},created:function(){},mounted:function(){},filters:{},watch:{},computed:{},methods:{}},T=k,x=(o("7a6a"),Object(f["a"])(T,l,r,!1,null,"c0742da4",null));i["default"]=x.exports},"6ab3":function(t,i,o){"use strict";o("9470")},"7a6a":function(t,i,o){"use strict";o("d37c")},9470:function(t,i,o){},b680:function(t,i,o){"use strict";var e=o("23e7"),n=o("e330"),s=o("5926"),a=o("408a"),l=o("1148"),r=o("d039"),h=RangeError,c=String,p=Math.floor,m=n(l),d=n("".slice),_=n(1..toFixed),u=function(t,i,o){return 0===i?o:i%2===1?u(t,i-1,o*t):u(t*t,i/2,o)},g=function(t){var i=0,o=t;while(o>=4096)i+=12,o/=4096;while(o>=2)i+=1,o/=2;return i},f=function(t,i,o){var e=-1,n=o;while(++e<6)n+=i*t[e],t[e]=n%1e7,n=p(n/1e7)},M=function(t,i){var o=6,e=0;while(--o>=0)e+=t[o],t[o]=p(e/i),e=e%i*1e7},v=function(t){var i=6,o="";while(--i>=0)if(""!==o||0===i||0!==t[i]){var e=c(t[i]);o=""===o?e:o+m("0",7-e.length)+e}return o},y=r((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!r((function(){_({})}));e({target:"Number",proto:!0,forced:y},{toFixed:function(t){var i,o,e,n,l=a(this),r=s(t),p=[0,0,0,0,0,0],_="",y="0";if(r<0||r>20)throw h("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return c(l);if(l<0&&(_="-",l=-l),l>1e-21)if(i=g(l*u(2,69,1))-69,o=i<0?l*u(2,-i,1):l/u(2,i,1),o*=4503599627370496,i=52-i,i>0){f(p,0,o),e=r;while(e>=7)f(p,1e7,0),e-=7;f(p,u(10,e,1),0),e=i-1;while(e>=23)M(p,1<<23),e-=23;M(p,1<<e),f(p,1,1),M(p,2),y=v(p)}else f(p,0,o),f(p,1<<-i,0),y=v(p)+m("0",r);return r>0?(n=y.length,y=_+(n<=r?"0."+m("0",r-n)+y:d(y,0,n-r)+"."+d(y,n-r))):y=_+y,y}})},c64c:function(t,i,o){},d37c:function(t,i,o){},d81d:function(t,i,o){"use strict";var e=o("23e7"),n=o("b727").map,s=o("1dde"),a=s("map");e({target:"Array",proto:!0,forced:!a},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e515:function(t,i,o){},f9c2:function(t,i,o){"use strict";o("c64c")},fdd1:function(t,i,o){"use strict";o("5038e")}}]);