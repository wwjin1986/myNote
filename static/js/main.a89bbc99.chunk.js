(window.webpackJsonpmynote=window.webpackJsonpmynote||[]).push([[0],{30:function(e,t,a){},4:function(e){e.exports=JSON.parse('{"apiEndPoint":"https://mynotesapi.herokuapp.com"}')},41:function(e,t,a){e.exports=a(66)},46:function(e,t,a){},47:function(e,t,a){},58:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(46),a(47),a(3)),i=a.n(c),s=a(5),u=a(13),m=a(14),d=a(17),h=a(15),p=a(18),f=(a(30),function(){var e=Object(s.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},cache:"no-cache"}).then(function(e){return e.json()}).catch(function(e){return e});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),E=a(4),g=function(){var e=Object(s.a)(i.a.mark(function e(t,a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:a,cache:"no-cache"}).then(function(e){return e.json()}).catch(function(e){return e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),v=a(70),b=a(67),y=a(68),N=a(69),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"Choose...",title:"",URL:"",noteText:"",categories:[],showModal:!1,modalTopic:"",modalCategory:""},a.handleSubmit=function(){var e=JSON.stringify({topic:a.state.topic,title:a.state.title,url:a.state.URL,noteText:a.state.noteText,liked:!1});g(E.apiEndPoint+"/notes",e).then(function(e){return a.props.history.push("/viewnote/"+e.id)})},a.handleChangeTopic=function(e){"Add"===e.target.value?a.handleToggleModal():a.setState({topic:e.target.value})},a.handleChangeTitle=function(e){a.setState({title:e.target.value})},a.handleChangeURL=function(e){a.setState({URL:e.target.value})},a.handleChangeNotes=function(e){a.setState({noteText:e.target.value})},a.handleToggleModal=function(){!1===a.state.showModal?a.setState({showModal:!0}):a.setState({showModal:!1})},a.handleChangeTopicModal=function(e){a.setState({modalTopic:e.target.value},function(){return console.log(a.state.modalTopic)})},a.handleChangeCategoryModal=function(e){a.setState({modalCategory:e.target.value},function(){return console.log(a.state.modalCategory)})},a.handleSubmitNewTopic=function(){var e=JSON.stringify({topic:a.state.modalTopic,category:a.state.modalCategory});g(E.apiEndPoint+"/categories",e),f(E.apiEndPoint+"/categories").then(function(e){return Object.keys(e).length?a.setState({categories:e}):{}}).catch(function(e){throw e}),a.setState({showModal:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f(E.apiEndPoint+"/categories").then(function(e){return Object.keys(e).length?t.setState({categories:e}):{}}).catch(function(e){throw e});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Note-header"},r.a.createElement("i",{className:"fa fa-sticky-note-o","aria-hidden":"true"}),"    ","Add new note"),r.a.createElement("div",{className:"Note-body"},r.a.createElement("div",{className:"Note-form"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"my-1 mr-2"},"Topic")," ",r.a.createElement("select",{className:"custom-select my-1 mr-sm-2",id:"inlineFormCustomSelectPref",onChange:this.handleChangeTopic,value:this.state.value},r.a.createElement("option",{defaultValue:!0},"Choose..."),this.state.categories.map(function(e){return r.a.createElement("option",{key:e.id,value:e.topic},e.topic+"  ("+e.category+")")}),r.a.createElement("option",{value:"Add"},"Add new topic"))),r.a.createElement("div",null,r.a.createElement(v.a,{isOpen:this.state.showModal},r.a.createElement(b.a,null,r.a.createElement("i",{className:"fa fa-list-ul","aria-hidden":"true"}),"    ","Add new topic"),r.a.createElement(y.a,{className:"ModalBody"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Topic"),r.a.createElement("input",{type:"text",className:"form-control",id:"modalTopic",placeholder:"Enter topic name here",onChange:this.handleChangeTopicModal}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Category"),r.a.createElement("input",{type:"text",className:"form-control",id:"modalCategory",onChange:this.handleChangeCategoryModal})))),r.a.createElement(N.a,null,r.a.createElement("input",{value:"Submit",className:"btn btn-note-custom",onClick:this.handleSubmitNewTopic,readOnly:!0}),r.a.createElement("input",{onClick:this.handleToggleModal,value:"Cancel",className:"btn btn-note-custom",readOnly:!0})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputTitle","aria-describedby":"titleHelp",placeholder:"Enter title for new note",onChange:this.handleChangeTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputURL",placeholder:"Enter tutorial url (optional)",onChange:this.handleChangeURL})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Notes"),r.a.createElement("textarea",{className:"form-control",id:"inputNoteText",placeholder:"Enter note details here",cols:"30",rows:"15",onChange:this.handleChangeNotes})),r.a.createElement("button",{type:"submit",className:"btn btn-custom",onClick:this.handleSubmit},"Submit")))))}}]),t}(n.Component),C=a(16),k=(a(58),function(){return r.a.createElement("div",{className:"NavBar "},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement(C.b,{className:"navbar-brand nav-brand-custom",to:""},"My Note"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(C.b,{className:"nav-link nav-custom",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(C.b,{className:"nav-link nav-custom",to:"/addnote"},"Add Note")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(C.b,{className:"nav-link nav-custom",to:"/"},"All Notes"))))))}),T=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},cache:"no-cache"});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",noteText:"",url:"",updatedAt:"",title:""},a.handleDelete=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete this note?")){e.next=4;break}return e.next=3,T(E.apiEndPoint+"/notes/"+a.state.id);case 3:a.props.history.push("/viewallnotes");case 4:case"end":return e.stop()}},e)})),a.handleEdit=function(){a.props.history.push("/editnote/"+a.state.id)},a.handleChanglePage=function(e){a.props.history.push("/viewallnotes")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.id,this.setState({id:t}),f(E.apiEndPoint+"/notes/"+t).then(function(e){var t=new Date;t.setTime(e.updatedAt),a.setState({topic:e.topic,noteText:e.noteText,url:e.url,updatedAt:t.toLocaleString(),title:e.title})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Note-header"},r.a.createElement("i",{className:"fa fa-list-alt","aria-hidden":"true"}),"  ",r.a.createElement("a",null,"View note details")),r.a.createElement("div",{className:"Note-body"},r.a.createElement("div",{className:"Note-table"},r.a.createElement("table",{className:"table table-bordered table-hover "},r.a.createElement("caption",null,this.state.title),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("label",{className:"my-1 mr-2"},"Topic")),r.a.createElement("td",null,r.a.createElement("label",{className:"my-1 mr-2"},this.state.topic))),r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("label",{className:"my-1 mr-2"},"Url")),r.a.createElement("td",null,r.a.createElement("a",{href:this.state.url,className:"my-1 mr-2",target:"_blank"},this.state.url))),r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("label",{className:"my-1 mr-2"},"Note")),r.a.createElement("td",null,r.a.createElement("p",{style:{whiteSpace:"pre-line"}},this.state.noteText))),r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("label",{className:"my-1 mr-2"},"Updated At")),r.a.createElement("td",null,r.a.createElement("label",{className:"my-1 mr-2"},this.state.updatedAt))))),r.a.createElement("div",null,r.a.createElement("button",{id:"edit",className:"btn btn-view-custom",onClick:this.handleEdit},"Edit this note"),r.a.createElement("button",{id:"delete",className:"btn btn-view-custom",onClick:this.handleDelete},"Delete this note"),r.a.createElement("button",{id:"viewTopic",className:"btn btn-view-custom",onClick:this.handleChanglePage},"View all notes")))))}}]),t}(n.Component),x=a(20),O=function(){var e=Object(s.a)(i.a.mark(function e(t,a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:a,cache:"no-cache"});case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={liked:a.props.liked},a.handleLiked=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({liked:!a.state.liked}),e.next=3,O(E.apiEndPoint+"/notes/"+a.props.id+"/like","");case 3:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,!0===this.state.liked?r.a.createElement("i",{className:"fa fa-bookmark",onClick:this.handleLiked}):r.a.createElement("i",{className:"fa fa-bookmark-o",onClick:this.handleLiked}))}}]),t}(n.Component),A=a(39),P=a.n(A),M=function(e){var t=e.itemCount,a=e.pageSize,n=e.onPageChange,o=e.currentPage,l=Math.ceil(t/a);if(1===l)return null;var c=P.a.range(1,l+1);return r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{key:e,className:e===o?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return n(e)}},e))}))))},B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={notes:[],sortByUpdated:"fa fa-sort-desc",sortedBy:"updatedAt",direction:"DESC",pageSize:10,currentPage:1},a.handleDelete=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you wish to delete this note?")){e.next=5;break}return e.next=3,T(E.apiEndPoint+"/notes/"+t.currentTarget.id);case 3:return e.next=5,f(E.apiEndPoint+"/notes/"+a.state.sortedBy+"/"+a.state.direction).then(function(e){return Object.keys(e).length?a.setState({notes:e}):{}}).catch(function(e){throw e});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleDetail=function(e){a.props.history.push("/viewnote/"+e.currentTarget.id)},a.handleSort=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("sortByTopic"!==t.currentTarget.id){e.next=13;break}if(a.setState({sortByUpdated:"",sortedBy:"topic"}),"fa fa-sort-desc"!==a.state.sortByTopic){e.next=8;break}return a.setState({sortByTopic:"fa fa-sort-asc",direction:"ASC"}),e.next=6,f(E.apiEndPoint+"/notes/topic/ASC").then(function(e){return Object.keys(e).length?a.setState({notes:e}):{}}).catch(function(e){throw e});case 6:e.next=11;break;case 8:return a.setState({sortByTopic:"fa fa-sort-desc",direction:"DESC"}),e.next=11,f(E.apiEndPoint+"/notes/topic/DESC").then(function(e){return Object.keys(e).length?a.setState({notes:e}):{}}).catch(function(e){throw e});case 11:e.next=24;break;case 13:if("sortByUpdated"!==t.currentTarget.id){e.next=24;break}if(a.setState({sortByTopic:"",sortedBy:"updatedAt"}),"fa fa-sort-desc"!==a.state.sortByUpdated){e.next=21;break}return a.setState({sortByUpdated:"fa fa-sort-asc",direction:"ASC"}),e.next=19,f(E.apiEndPoint+"/notes/updatedAt/ASC").then(function(e){return Object.keys(e).length?a.setState({notes:e}):{}}).catch(function(e){throw e});case 19:e.next=24;break;case 21:return a.setState({sortByUpdated:"fa fa-sort-desc",direction:"DESC"}),e.next=24,f(E.apiEndPoint+"/notes/updatedAt/DESC").then(function(e){return Object.keys(e).length?a.setState({notes:e}):{}}).catch(function(e){throw e});case 24:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handlePageChange=function(e){a.setState({currentPage:e})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(E.apiEndPoint+"/notes/"+this.state.sortedBy+"/"+this.state.direction).then(function(e){return Object.keys(e).length?t.setState({notes:e}):{}}).catch(function(e){throw e});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.sortByTopic,n=t.pageSize,o=t.sortByUpdated,l=t.notes,c=t.currentPage;return console.log(c),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Note-header"},r.a.createElement("i",{className:"fa fa-file-text-o","aria-hidden":"true"}),"   ","View all notes"),r.a.createElement("div",{className:"Note-body"},r.a.createElement("div",{className:"Note-table"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",id:"sortByUpdated",onClick:this.handleSort},"Updated Time","  ",r.a.createElement("i",{className:o,"aria-hidden":"true"})),r.a.createElement("th",{scope:"col",id:"sortByTopic",onClick:this.handleSort},"Topic","  ",r.a.createElement("i",{className:a,"aria-hidden":"true"})),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Detail"),r.a.createElement("th",{scope:"col"},"Delete"),r.a.createElement("th",{scope:"col"},"Bookmark"))),r.a.createElement("tbody",null,l.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,new Date(t.updatedAt).toLocaleString()),r.a.createElement("td",null,t.topic),r.a.createElement("td",null,t.title),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-dark btn-sm",id:t.id,onClick:e.handleDetail},r.a.createElement("i",{className:"fa fa-list","aria-hidden":"true"}))),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-dark btn-sm",id:t.id,onClick:e.handleDelete},t.liked,r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))),r.a.createElement("td",null,r.a.createElement(j,{liked:t.liked,id:t.id})))}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:"2em"}},r.a.createElement(M,{itemCount:l.length,pageSize:n,onPageChange:this.handlePageChange,currentPage:c})))))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",title:"",url:"",categories:[],showModal:!1,modalTopic:"",modalCategory:""},a.handleChangeTopic=function(e){"Add"===e.target.value?a.handleToggleModal():a.setState({topic:e.target.value})},a.handleToggleModal=function(){!1===a.state.showModal?a.setState({showModal:!0}):a.setState({showModal:!1})},a.handleChangeTopicModal=function(e){a.setState({modalTopic:e.target.value},function(){return console.log(a.state.modalTopic)})},a.handleChangeCategoryModal=function(e){a.setState({modalCategory:e.target.value},function(){return console.log(a.state.modalCategory)})},a.handleSubmitNewTopic=function(){var e=JSON.stringify({topic:a.state.modalTopic,category:a.state.modalCategory});g(E.apiEndPoint+"/categories",e),f(E.apiEndPoint+"/categories").then(function(e){return Object.keys(e).length?a.setState({categories:e}):{}}).catch(function(e){throw e}),a.setState({showModal:!1})},a.handleChangeTitle=function(e){a.setState({title:e.target.value})},a.handleChangeURL=function(e){a.setState({url:e.target.value})},a.handleChangeNotes=function(e){a.setState({noteText:e.target.value})},a.handleSubmit=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.stringify({topic:a.state.topic,title:a.state.title,url:a.state.url,noteText:a.state.noteText,liked:a.state.liked}),!window.confirm("Are you sure to save changes to the note?")){e.next=5;break}return e.next=4,O(E.apiEndPoint+"/notes/"+a.state.id,t);case 4:a.props.history.push("/viewnote/"+a.state.id);case 5:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f(E.apiEndPoint+"/categories").then(function(e){return Object.keys(e).length?a.setState({categories:e}):{}}).catch(function(e){throw e}),t=this.props.match.params.id,this.setState({id:t}),f(E.apiEndPoint+"/notes/"+t).then(function(e){var t=new Date;t.setTime(e.updatedAt),a.setState({topic:e.topic,noteText:e.noteText,url:e.url,updatedAt:t.toLocaleString(),title:e.title,liked:e.liked})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Note-header"},r.a.createElement("i",{className:"fa fa-sticky-note-o","aria-hidden":"true"}),"    ","Edit note"),r.a.createElement("div",{className:"Note-body"},r.a.createElement("div",{className:"Note-form"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"my-1 mr-2"},"Topic")," ",r.a.createElement("select",{className:"custom-select my-1 mr-sm-2",id:"inlineFormCustomSelectPref",onChange:this.handleChangeTopic,value:this.state.value},r.a.createElement("option",{defaultValue:!0},this.state.topic),this.state.categories.map(function(e){return r.a.createElement("option",{key:e.id,value:e.topic},e.topic+"  ("+e.category+")")}),r.a.createElement("option",{value:"Add"},"Add new topic"))),r.a.createElement("div",null,r.a.createElement(v.a,{isOpen:this.state.showModal},r.a.createElement(b.a,null,r.a.createElement("i",{className:"fa fa-list-ul","aria-hidden":"true"}),"    ","Add new topic"),r.a.createElement(y.a,{className:"ModalBody"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Topic"),r.a.createElement("input",{type:"text",className:"form-control",id:"modalTopic",placeholder:"Enter topic name here",onChange:this.handleChangeTopicModal}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Category"),r.a.createElement("input",{type:"text",className:"form-control",id:"modalCategory",onChange:this.handleChangeCategoryModal})))),r.a.createElement(N.a,null,r.a.createElement("input",{value:"Submit",className:"btn btn-note-custom",onClick:this.handleSubmitNewTopic,readOnly:!0}),r.a.createElement("input",{onClick:this.handleToggleModal,value:"Cancel",className:"btn btn-note-custom",readOnly:!0})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputTitle","aria-describedby":"titleHelp",defaultValue:this.state.title,onChange:this.handleChangeTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputURL",defaultValue:this.state.url,onChange:this.handleChangeURL})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Note"),r.a.createElement("textarea",{className:"form-control",id:"inputNoteText",cols:"30",rows:"15",onChange:this.handleChangeNotes,value:this.state.noteText})),r.a.createElement("button",{type:"submit",className:"btn btn-custom",onClick:this.handleSubmit},"Submit")))))}}]),t}(n.Component);var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement(k,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/addnote",component:w}),r.a.createElement(x.a,{path:"/viewnote/:id",component:S}),r.a.createElement(x.a,{path:"/viewallnotes",component:B}),r.a.createElement(x.a,{path:"/editnote/:id",component:U}),r.a.createElement(x.a,{path:"/",component:B})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64),a(65);l.a.render(r.a.createElement(C.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.a89bbc99.chunk.js.map