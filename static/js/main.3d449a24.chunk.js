(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE+SURBVFhH7ZU7TsNAFEVNQUFFFkJJhZQtUEGQqEiRgoUAa3DlH429kDS0lqIoi0gUqGPuld5YA0oR+02kKd6RnsYZe+6czPiTGEZA6rq+ksP4aJrmuizLZVEUb9IVD04O1bGik4TQLerbCUYpWVXV1CRDcDbJNE0v8zx/QNgnQldof/xJtKWSxL++R8DmWHDgepUpT6PrugsM+vgXcq76yrJsIlOfBgYdk2uxmu9oX1CPQwtjF6g/9yBquJxs68EL2eL3E1dVLhkMJSjjZY6T4wMBmf6ew/EO7Y2cHoV8TfRyhE+rH4TVnMmpUQSVI1gxvkpcUKvZVoI8fuq4C70cpeX0cBCwdmEIDvKmR9adSOrkCEL2ThA1l241XEm1HPHkuILP0h0PJqjFBLWYoBYT1GKCWkxQiwkahhGKJPkFcQDKNc7pMJAAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG+SURBVFhH7ZYxS8NAGIaroqKLoLiJKIg6uIiDm51cHURc6+qqoLiYsZsanEoIaVI6tIKLP0Cqm6NLEboJDuJQBwepGN+vvIHb5LxAAt4DH0fu6733pLmUFiwWS8pEUbQZhuGl4ziDnMoP1Wp1A4IfqBjlczofQGgd39y7yGH8rNVqW2xlD4RWUV3KfUFul63sgdQK6pVy3xj32MoeyCxA6kWR22cre4IgmIPUs8hR8ICt7MEZm4FUJ5FDPaGONeoIN1RCFZvN5ghj06HRaIxhgzYqkTMqSMrLFeGJLHMLcxB6qG6SRiGzh/G8UqkMcxszEHiqbNCRx87Wr7iuO4r1s6htrK1TLslq4XqKHzUDYWUluO37/jRbWuDmlkQsyYLgbWpnE2EXSvCj53mTbGkhQsioK1lnbJkRx/EAwjwl+AGbTbCthUhi/R1zevLNsmUGgocQKvQlUfc47ONsayFvs8hJDsaQ0+ZQ8kqRvGZLG6ztP2r4dVN7qwWeoxvUG/56rXFaG6zdEUFKFjmdDvwJWeTln4DYvCJY4nR+kJtMBFEnnM4XimCZU/nCCppiBU2xgqZYQVOsoMXyPygUfgDETC+Cwf0mFgAAAABJRU5ErkJggg=="},,,function(e,t,r){e.exports=r(19)},,,,,function(e,t,r){},,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(2),o=r.n(c),l=(r(15),r(3)),s=r(4),i=r(8),u=r(5),m=r(9),p=function(e){return{color:"Infinity"===e&&"#ff0000",fontSize:e.toString().length>10&&"25px"}},d=function(e){var t=e.currentNumber,r=void 0===t?"0":t,a=e.lastNumber,c=void 0===a?"":a,o=e.currentOperator,l=void 0===o?"":o,s=e.opOperator,i=(e.history,c);return""===l&&"0"===c&&(i=" "),"sq"===s?i=n.a.createElement("span",null,c,n.a.createElement("sup",null,"2")):"root"===s?i=n.a.createElement("span",null,"\u221a",c):"sin"===s&&(i=n.a.createElement("span",null,"sin(".concat(c,")"))),n.a.createElement("div",{className:"row displayBox"},n.a.createElement("p",{className:"displayEarlier",id:"displayResult",style:p(c)},i),n.a.createElement("p",{className:"displayOperator",id:"displayOperator",style:{color:(""===l||"equals"===l)&&"#1abc9c"}},l||"+"),n.a.createElement("p",{className:"displayResult",id:"displayResult",style:p(r)},r))},b=r(6),N=r.n(b),A=r(7),h=r.n(A),E=function(e){var t=e.currentNumber,r=e.lastNumber,a=e.currentOperator,c=e.opOperator,o=e.history,l=e.historyIndex,s=e.updateNumber,i=e.onUndoClick,u=e.onRedoClick,m=function(e){if("Infinity"!==t&&"Infinity"!==r&&""===c){var n=e.target.id,o=function(e,t){var r=e,a=parseFloat(e,10);switch(t){case"plus_minus":a>0?r="-".concat(e):a<0&&(r=e.replace("-",""));break;case"decimal":-1===e.indexOf(".")&&e.length<8&&(r="".concat(e,"."));break;default:0===a?r="".concat(t):e.length<9&&(r="".concat(e).concat(t))}return r}(t,n);s({lastNumber:r,currentOperator:a,opOperator:"",currentNumber:o,numberClicked:!0})}},p="btn btn-calc hvr-radial-out";return n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn clear hvr-back-pulse",onClick:function(){s({currentNumber:"0",currentOperator:"",lastNumber:"0",opOperator:""})},id:"clear"},"C"),n.a.createElement("button",{onClick:i,className:"btn btn-calc hvr-radial-out",id:"undo",disabled:l===o.length},n.a.createElement("img",{alt:"#",src:h.a})),n.a.createElement("button",{className:"btn btn-calc hvr-radial-out hvr-radial-out",onClick:u,disabled:0===l,id:"redo"},n.a.createElement("img",{alt:"#",src:N.a}))),n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn btn-calc hvr-radial-out",onClick:function(){if("Infinity"!==t&&"Infinity"!==r){var e=Math.sin(parseFloat(t,10));s(""!==a?{lastNumber:r,opOperator:"pn",currentNumber:"".concat(e),currentOperator:a}:{opOperator:"sin",lastNumber:"".concat(t),currentNumber:"".concat(e),currentOperator:""})}},id:"sin"},"sin"),n.a.createElement("button",{onClick:function(){if("Infinity"!==t&&"Infinity"!==r){var e=Math.sqrt(parseFloat(t,10));s(""!==a?{lastNumber:r,opOperator:"pn",currentNumber:"".concat(e),currentOperator:a}:{lastNumber:"".concat(t),opOperator:"root",currentNumber:"".concat(e),currentOperator:""})}},className:"btn btn-calc hvr-radial-out",id:"sqrt"},"\u221a"),n.a.createElement("button",{className:"btn btn-calc hvr-radial-out hvr-radial-out",onClick:function(){if("Infinity"!==t&&"Infinity"!==r){var e=parseFloat(t,10)*parseFloat(t,10);s(""!==a?{lastNumber:r,opOperator:"pn",currentNumber:"".concat(e),currentOperator:a}:{opOperator:"sq",lastNumber:"".concat(t),currentNumber:"".concat(e),currentOperator:""})}},id:"square"},"x",n.a.createElement("sup",null,"2"))),n.a.createElement("div",{className:"row"},n.a.createElement("button",{onClick:m,className:p,id:7},"7"),n.a.createElement("button",{onClick:m,className:p,id:8},"8"),n.a.createElement("button",{onClick:m,className:p,id:9},"9")),n.a.createElement("div",{className:"row"},n.a.createElement("button",{onClick:m,className:p,id:4},"4"),n.a.createElement("button",{onClick:m,className:p,id:5},"5"),n.a.createElement("button",{onClick:m,className:p,id:6},"6")),n.a.createElement("div",{className:"row"},n.a.createElement("button",{onClick:m,className:p,id:1},"1"),n.a.createElement("button",{onClick:m,className:p,id:2},"2"),n.a.createElement("button",{onClick:m,className:p,id:3},"3")),n.a.createElement("div",{className:"row"},n.a.createElement("button",{onClick:m,className:p,id:"plus_minus"},"\xb1"),n.a.createElement("button",{onClick:m,className:p,id:0},"0"),n.a.createElement("button",{onClick:m,className:p,id:"decimal"},".")))},O=function(e){var t=e.currentNumber,r=e.lastNumber,a=e.currentOperator,c=(e.opOperator,e.updateOperator),o=e.numberClicked,l="btn btn-operation hvr-fade",s=function(e){"Infinity"!==t&&"Infinity"!==r&&(r="".concat(function(e,t,r,a){switch(e=parseFloat(e,10),r=parseFloat(r,10),t){case"+":return e+r;case"-":return e-r;case"x":return 0!==r||a?e*r:e;case"/":return 0!==r||a?isNaN(r)?"Infinity":e/r:e;default:return 0===r?e:r}}(r,a,t,o)),a=function(e){switch(e.target.id){case"add":return"+";case"subtract":return"-";case"multiply":return"x";case"divide":return"/";default:return""}}(e),c({currentNumber:t="0",lastNumber:r,currentOperator:a,opOperator:""}))};return n.a.createElement("div",{className:"col-md-3 operationSide"},n.a.createElement("button",{id:"divide",onClick:s,className:l},"\xf7"),n.a.createElement("button",{id:"multiply",onClick:s,className:l},"\xd7"),n.a.createElement("button",{id:"subtract",onClick:s,className:l},"\u2212"),n.a.createElement("button",{id:"add",onClick:s,className:l},"+"),n.a.createElement("button",{id:"equals",onClick:s,className:"btn btn-operation equals hvr-back-pulse"},"="))},v=(r(17),[]);localStorage.getItem("reduxCalculator")&&(v=JSON.parse(localStorage.getItem("reduxCalculator")));var f=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={currentNumber:"0",lastNumber:"0",currentOperator:"",opOperator:"",history:v,historyIndex:0},r.updateHistory=function(e){var t=r.state.history;0!==t.length&&JSON.stringify(t[t.length-1])===JSON.stringify(e)||(t.push(e),r.setState({history:t,historyIndex:0}))},r.updateNumber=function(e){var t=e.currentNumber,a=e.lastNumber,n=e.currentOperator,c=e.opOperator,o=e.numberClicked;r.setState({currentNumber:t,lastNumber:a,currentOperator:n,opOperator:c,numberClicked:o}),r.updateHistory({currentNumber:t,lastNumber:a,currentOperator:n,opOperator:c,historyIndex:0})},r.updateOperator=function(e){var t=e.currentNumber,a=e.lastNumber,n=e.currentOperator,c=e.opOperator;r.setState({currentNumber:t,lastNumber:a,currentOperator:n,opOperator:c,historyIndex:0,numberClicked:!1}),r.updateHistory({currentNumber:t,lastNumber:a,currentOperator:n,opOperator:c})},r.onUndoClick=function(){var e=r.state,t=e.history,a=e.historyIndex,n=t[t.length-1-a];r.setState({currentNumber:n.currentNumber,lastNumber:n.lastNumber,currentOperator:n.currentOperator,lastOperator:n.lastOperator,opOperator:n.opOperator,historyIndex:a+1})},r.onRedoClick=function(){var e=r.state,t=e.history,a=e.historyIndex,n=t[t.length-a];r.setState({currentNumber:n.currentNumber,lastNumber:n.lastNumber,currentOperator:n.currentOperator,lastOperator:n.lastOperator,opOperator:n.opOperator,historyIndex:a-1})},r}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-md-4 col-md-offset-4 calculator",align:"center"},n.a.createElement(d,this.state),n.a.createElement("div",{className:"row numberPad"},n.a.createElement(E,Object.assign({},this.state,{updateNumber:this.updateNumber,updateOperator:this.updateOperator,onUndoClick:this.onUndoClick,onRedoClick:this.onRedoClick})),n.a.createElement(O,Object.assign({},this.state,{updateOperator:this.updateOperator})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.3d449a24.chunk.js.map