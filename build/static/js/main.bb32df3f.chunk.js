(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{40:function(t,e,s){},72:function(t,e,s){},74:function(t,e,s){},75:function(t,e,s){},76:function(t,e,s){},77:function(t,e,s){},78:function(t,e,s){},79:function(t,e,s){},80:function(t,e,s){},81:function(t,e,s){},82:function(t,e,s){},83:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(34),i=s.n(a),o=(s(40),s(2)),r=s(3),l=s(5),u=s(4),j=s(35),h=s.n(j),d=(s(72),s(0)),b=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={socketWarning:!1,development:!1,ips:[]},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){t.setState({ips:e.development.ips,socketWarning:!1})})),this.socket.on("disconnect",(function(){t.setState({socketWarning:!0})}))}},{key:"showDevelopmentInfo",value:function(){this.setState({development:!this.state.development})}},{key:"developmentMenu",value:function(){var t=this;return Object(d.jsx)("div",{className:"developmentMenu",children:Object(d.jsx)("ul",{className:"list-unstyled",children:Object.keys(this.state.ips).map((function(e,s){return Object(d.jsxs)("li",{children:[e,": ",t.state.ips[e].join(" | ")]},s)}))})})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Development",children:[this.state.socketWarning?Object(d.jsx)("span",{className:"socketWarning",children:"Connection error!"}):null,Object(d.jsx)("button",{className:"toggle",onClick:this.showDevelopmentInfo.bind(this),children:"D"}),this.state.development?this.developmentMenu():null]})}}]),s}(c.a.Component),m=(s(74),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={toggles:{leftTurn:!1,rightTurn:!1,hazard:!1,lights:!1,highBeam:!1,lowBeam:!1,oilPressure:!1,battery:!1,parking:!1},status:{leftTurn:!1,rightTurn:!1}},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){t.setState({toggles:e.lights})})),t.warningLightsID=setInterval((function(){return t.tick()}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.warningLightsID)}},{key:"tick",value:function(){var t=this.state.status;this.state.toggles.hazard?t.leftTurn=t.rightTurn=!t.leftTurn:(this.state.toggles.leftTurn?t.leftTurn=!t.leftTurn:t.leftTurn=!1,this.state.toggles.rightTurn?t.rightTurn=!t.rightTurn:t.rightTurn=!1),this.setState(t)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"WarningLights",children:[Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsx)("i",{className:"icon icon--oil-pressure "+(this.state.toggles.oilPressure?"active":"")}),Object(d.jsx)("i",{className:"icon icon--battery "+(this.state.toggles.battery?"active":"")}),Object(d.jsx)("i",{className:"icon icon--parking "+(this.state.toggles.parking?"active":"")}),Object(d.jsx)("i",{className:"icon icon--hazard "+(this.state.toggles.hazard?"active":"")}),Object(d.jsx)("i",{className:"icon icon--lights "+(this.state.toggles.lights?"active":"")}),Object(d.jsx)("i",{className:"icon icon--low-beam "+(this.state.toggles.lowBeam?"active":"")})]}),Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsx)("i",{className:"icon icon--left-turn "+(this.state.status.leftTurn?"active":"")}),Object(d.jsx)("i",{className:"icon icon--high-beam "+(this.state.toggles.highBeam?"active":"")}),Object(d.jsx)("i",{className:"icon icon--right-turn "+(this.state.status.rightTurn?"active":"")})]})]})}}]),s}(c.a.Component)),v=(s(75),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={isKMS:!0,amount:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){t.setState({amount:e.speed})}))}},{key:"render",value:function(){for(var t=function(t){for(var e=t.toFixed(0).split(""),s=e.length,n=0;n<3-s;n++)e.unshift(null);return e}(this.state.amount),e=[],s=0;s<=2;s++){var n=["number"];null!==t[s]&&n.push("number--"+t[s]),e.push(Object(d.jsxs)("div",{className:n.join(" "),children:[Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("p",{})]},s))}return Object(d.jsxs)("div",{className:"Speedometer mt-4",children:[Object(d.jsx)("div",{className:"counter",children:e}),Object(d.jsxs)("div",{className:"legend",children:[this.state.isKMS&&Object(d.jsx)("p",{children:"KMH"}),!this.state.isKMS&&Object(d.jsx)("p",{children:"MPH"})]})]})}}]),s}(c.a.Component)),O=(s(76),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={totalRPM:8,maxRPM:8e3,orangeAt:4,redAt:6,rpm:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){t.setState({rpm:e.rpm})}))}},{key:"render",value:function(){var t=1e3*this.state.totalRPM,e=5*this.state.totalRPM,s=this.state.rpm*e/t;s=Number(s.toFixed(0));for(var n=[],c=[],a=0;a<this.state.totalRPM;a++){var i=[],o=[];i.push("block-group"),a>=this.state.redAt?i.push("block--red"):a>=this.state.orangeAt?i.push("block--orange"):i.push("block--green");for(var r=0;r<5;r++)o.push(Object(d.jsx)("div",{className:"block "+(s-- >0?"active":"")},r));c.push(Object(d.jsx)("div",{className:"number",children:a},a)),n.push(Object(d.jsx)("div",{className:i.join(" "),children:o},a))}return Object(d.jsx)("div",{className:"row justify-content-center Tachometer",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("div",{className:"numbers-container",children:c}),Object(d.jsx)("div",{className:"blocks-container",children:n}),Object(d.jsxs)("div",{className:"times",children:[Object(d.jsx)("span",{children:"x"}),"1000"]})]})})}}]),s}(c.a.Component)),f=(s(77),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={total:0,trip:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){t.setState({total:e.odometer,trip:e.trip})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Odometer row mb-3",children:[Object(d.jsx)("div",{className:"col-2",children:"Total"}),Object(d.jsx)("div",{className:"col-10",children:this.state.total}),Object(d.jsx)("div",{className:"col-2",children:"Trip"}),Object(d.jsx)("div",{className:"col-10",children:this.state.trip})]})}}]),s}(c.a.Component)),p=(s(78),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={waterTemperature:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){e.waterTemperature!==t.state.waterTemperature&&t.setState({waterTemperature:e.waterTemperature})}))}},{key:"render",value:function(){for(var t,e=this.state.waterTemperature,s=[],n=0;n<21;n++)s.push(Object(d.jsx)("div",{},n));return[{from:0,class:"low"},{from:60,class:"normal"},{from:95,class:"high"},{from:105,class:"very-high"}].forEach((function(s,n){s.from<=e&&(t=s.class)})),Object(d.jsxs)("div",{className:"WaterTemperature mb-3 row no-gutters",children:[Object(d.jsxs)("div",{className:"col-10 gauge gauge--"+t,children:[Object(d.jsxs)("div",{className:"label",children:[Object(d.jsx)("i",{className:"icon icon--water-temperature align-text-bottom"})," Water temp \xbaC"]}),Object(d.jsx)("div",{className:"bar-container",children:Object(d.jsx)("div",{className:"bar",style:{width:100/120*e+"%"}})}),Object(d.jsx)("div",{className:"steps d-flex justify-content-between",children:s})]}),Object(d.jsx)("div",{className:"col-2 amount",children:e})]})}}]),s}(c.a.Component)),x=(s(79),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).socket=t.socket,n.state={fuelLevel:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket.on("data",(function(e){e.fuelLevel!==t.state.fuelLevel&&t.setState({fuelLevel:e.fuelLevel})}))}},{key:"render",value:function(){for(var t,e=this.state.fuelLevel,s=[],n=0;n<16;n++)s.push(Object(d.jsx)("div",{},n));return[{from:0,class:"low"},{from:25,class:"normal"}].forEach((function(s,n){s.from<=e&&(t=s.class)})),Object(d.jsxs)("div",{className:"FuelLevel row no-gutters",children:[Object(d.jsxs)("div",{className:"col-10 gauge gauge--"+t,children:[Object(d.jsxs)("div",{className:"label",children:[Object(d.jsx)("i",{className:"icon icon--fuel align-text-bottom"})," Fuel level %"]}),Object(d.jsx)("div",{className:"bar-container",children:Object(d.jsx)("div",{className:"bar",style:{width:e+"%"}})}),Object(d.jsx)("div",{className:"steps d-flex justify-content-between",children:s})]}),Object(d.jsx)("div",{className:"col-2 amount",children:e})]})}}]),s}(c.a.Component)),g=(s(80),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={date:new Date},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock row",children:[Object(d.jsx)("div",{className:"col",children:this.state.date.toLocaleDateString("pt-PT")}),Object(d.jsx)("div",{className:"col",children:this.state.date.toLocaleTimeString("pt-PT")})]})}}]),s}(c.a.Component)),k=(s(81),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"LoadingScreen container-fluid",children:Object(d.jsx)("div",{className:"loadingContent row align-items-center",children:Object(d.jsxs)("div",{className:"col-8 offset-2",children:[Object(d.jsx)("i",{className:"novaLogo"}),Object(d.jsx)("p",{children:"Waiting for connection..."})]})})})}}]),s}(c.a.Component)),N=(s(82),h()("http://localhost:8080")),y=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={showLoading:!0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;N.on("data",(function(e){setTimeout((function(){t.setState({showLoading:!1})}),1e3)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[this.state.showLoading?Object(d.jsx)(k,{}):null,Object(d.jsx)(b,{socket:N}),Object(d.jsxs)("div",{className:"Dashboard container-fluid",children:[Object(d.jsx)(m,{socket:N}),Object(d.jsxs)("div",{className:"MiddleModule row justify-content-center",children:[Object(d.jsxs)("div",{className:"col-4",style:{marginTop:"-72px"},children:[Object(d.jsx)(g,{}),Object(d.jsx)(f,{socket:N}),Object(d.jsx)(p,{socket:N}),Object(d.jsx)(x,{socket:N})]}),Object(d.jsx)("div",{className:"col-8",children:Object(d.jsx)(v,{socket:N})})]}),Object(d.jsx)(O,{socket:N})]})]})}}]),s}(c.a.Component);i.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.bb32df3f.chunk.js.map