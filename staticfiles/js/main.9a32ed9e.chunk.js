(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,a){e.exports=a(407)},258:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(212),r=a.n(l),i=(a(258),a(474)),o=a(148),m=a(477),s=a(476),u=a(478),h=a(479),d=Object(o.a)({palette:{mode:"dark",primary:{main:"#1976d2"}}}),E=function(){return c.a.createElement(s.a,{spacing:2,sx:{flexGrow:1},style:{marginBottom:20}},c.a.createElement(m.a,{theme:d},c.a.createElement(i.a,{position:"static",color:"primary",enableColorOnDark:!0},c.a.createElement(u.a,null,c.a.createElement(h.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1}},"Fish Weight guess")))))},f=a(21),p=a(472),g=a(234),y=a(144),v=a(466),b=a(409),k=a(471),w=a(405),x=a(406),W=a(410),S=function(e){var t=e.cx,a=e.cy,n=e.payload;return c.a.createElement("svg",{x:t-10,y:a-10,width:20,height:20,fill:function(){switch(n.Species){case"Smelt":return"grey";case"Pike":return"red";case"Perch":return"pink";case"Parkki":return"blue";case"Whitefish":return"white";case"Roach":return"brown";case"Bream":return"yellow";default:return"black"}}(),viewBox:"0 0 1024 1024"},c.a.createElement("path",{d:"M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"}))},O=function(){var e=Object(n.useState)(0),t=Object(f.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),i=Object(f.a)(r,2),o=i[0],m=i[1],u=Object(n.useState)([]),d=Object(f.a)(u,2),E=d[0],O=d[1];Object(n.useEffect)(function(){console.log("use",E)},[E]);var j=Object(y.b)().enqueueSnackbar;return c.a.createElement(s.a,{container:!0,spacing:2},c.a.createElement(s.a,{item:!0,xs:6},c.a.createElement(g.a,{key:a,onChange:function(e){return m(e)},acceptedFiles:[".csv"],maxFileSize:5e7,filesLimit:1,dropzoneText:"Click or Drop a .csv file here",showFileNames:!0})),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(p.a,{variant:"contained",onClick:function(){if(console.log(o),o.length){var e={"Content-Disposition":"attachment; filename=".concat(o[0].name)},t=new FormData;t.append("file",o[0],o[0].name),fetch("/api/",{method:"POST",header:e,body:t}).then(function(e){if(!e.ok)throw e;return l(a+1),e.json()}).then(function(e){O(JSON.parse(e.prediction)),j("Prediction response is received",{variant:"success"})}).catch(function(e){e.json().then(function(e){j("".concat(e.message),{variant:"error"})})})}}},"Submit")),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(h.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},my:2},"If you want to test our app with our data, click to the button."),c.a.createElement(p.a,{variant:"contained",onClick:function(){fetch("/api/",{}).then(function(e){if(!e.ok)throw e;return e.json()}).then(function(e){O(JSON.parse(e.sampleData)),j("Sample data was successfully fetched",{variant:"success"})})}},"Generate a Sample")),E.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{item:!0,xs:6,my:5},c.a.createElement(v.a,{width:600,height:300,data:E},c.a.createElement(b.a,{type:"monotone",dataKey:"LengthVer",stroke:"#8884d8",dot:c.a.createElement(S,null)}),c.a.createElement(k.a,{stroke:"#ccc"}),c.a.createElement(w.a,{dataKey:"Weight",label:{value:"Weight",position:"insideBottomRight",offset:0}}),c.a.createElement(x.a,{label:{value:"LengthVer",angle:-90,position:"insideLeft"}}),c.a.createElement(W.a,null))),c.a.createElement(s.a,{item:!0,xs:6,my:5},c.a.createElement(v.a,{width:600,height:300,data:E},c.a.createElement(b.a,{type:"monotone",dataKey:"LengthDia",stroke:"#8884d8",dot:c.a.createElement(S,null)}),c.a.createElement(k.a,{stroke:"#ccc"}),c.a.createElement(w.a,{dataKey:"Weight",label:{value:"Weight",position:"insideBottomRight",offset:0}}),c.a.createElement(x.a,{label:{value:"LengthDia",angle:-90,position:"insideLeft"}}),c.a.createElement(W.a,null))),c.a.createElement(s.a,{item:!0,xs:6,my:5},c.a.createElement(v.a,{width:600,height:300,data:E},c.a.createElement(b.a,{type:"monotone",dataKey:"LengthCro",stroke:"#8884d8",dot:c.a.createElement(S,null)}),c.a.createElement(k.a,{stroke:"#ccc"}),c.a.createElement(w.a,{dataKey:"Weight",label:{value:"Weight",position:"insideBottomRight",offset:0}}),c.a.createElement(x.a,{label:{value:"LengthCro",angle:-90,position:"insideLeft"}}),c.a.createElement(W.a,null))),c.a.createElement(s.a,{item:!0,xs:6,my:5},c.a.createElement(v.a,{width:600,height:300,data:E},c.a.createElement(b.a,{type:"monotone",dataKey:"Height",stroke:"#8884d8",dot:c.a.createElement(S,null)}),c.a.createElement(k.a,{stroke:"#ccc"}),c.a.createElement(w.a,{dataKey:"Weight",label:{value:"Weight",position:"insideBottomRight",offset:0}}),c.a.createElement(x.a,{label:{value:"Height",angle:-90,position:"insideLeft"}}),c.a.createElement(W.a,null))),c.a.createElement(s.a,{item:!0,xs:6,my:5},c.a.createElement(v.a,{width:600,height:300,data:E},c.a.createElement(b.a,{type:"monotone",dataKey:"Width",stroke:"#8884d8",dot:c.a.createElement(S,null)}),c.a.createElement(k.a,{stroke:"#ccc"}),c.a.createElement(w.a,{dataKey:"Weight",label:{value:"Weight",position:"insideBottomRight",offset:0}}),c.a.createElement(x.a,{label:{value:"Width",angle:-90,position:"insideLeft"}}),c.a.createElement(W.a,null)))))};var j=function(){return c.a.createElement("div",null,c.a.createElement(y.a,{maxSnack:3},c.a.createElement(E,null),c.a.createElement(O,null)))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)))}},[[251,2,1]]]);
//# sourceMappingURL=main.9a32ed9e.chunk.js.map