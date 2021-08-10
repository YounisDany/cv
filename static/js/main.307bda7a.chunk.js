(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(8),r=c.n(i),s=c(0);function o(){return Object(s.jsx)("section",{className:"header",children:Object(s.jsx)("h1",{className:"logo",children:"Resume Builder"})})}var d=c(4),l=c(5),j=c(7),p=c(9),u=c(10),x=c(2),m=c(12),b=c(11),h=c(3),O=c.n(h);function v(e){var t=e.education,c=e.getEducationInput,n=e.addEducation,a=e.removeEducation;return t.map((function(e,t){return Object(s.jsxs)("div",{className:"educationForm","data-key":e.id,"data-index":t,children:[Object(s.jsx)("label",{htmlFor:"course",children:"Course: "}),Object(s.jsx)("input",{type:"text",id:"course","data-key":"course",onChange:c}),Object(s.jsx)("label",{htmlFor:"school",children:"School: "}),Object(s.jsx)("input",{type:"text",id:"school","data-key":"school",onChange:c}),Object(s.jsx)("label",{htmlFor:"educationFrom",children:"From: "}),Object(s.jsx)("input",{type:"text",id:"educationFrom","data-key":"from",onChange:c}),Object(s.jsx)("label",{htmlFor:"educationTo",children:"To: "}),Object(s.jsx)("input",{type:"text",id:"educationTo","data-key":"to",onChange:c}),Object(s.jsxs)("div",{className:"buttonContainer","data-key":e.id,children:[Object(s.jsx)("button",{className:"add",onClick:n,children:"Add"}),Object(s.jsx)("button",{className:"remove",onClick:a,children:"Remove"})]})]},e.id)}))}function g(e){var t=e.getGeneralInput;return Object(s.jsxs)("div",{className:"generalForm",children:[Object(s.jsx)("label",{htmlFor:"firstName",children:"First Name: "}),Object(s.jsx)("input",{type:"text",id:"firstName",onChange:t}),Object(s.jsx)("label",{htmlFor:"lastName",children:"Last Name: "}),Object(s.jsx)("input",{type:"text",id:"lastName",onChange:t}),Object(s.jsx)("label",{htmlFor:"profession",children:"Profession: "}),Object(s.jsx)("input",{type:"text",id:"profession",onChange:t}),Object(s.jsx)("label",{htmlFor:"address",children:"Address: "}),Object(s.jsx)("input",{type:"text",id:"address",onChange:t}),Object(s.jsx)("label",{htmlFor:"contactNumber",children:"Contact Number: "}),Object(s.jsx)("input",{type:"text",id:"contactNumber",onChange:t}),Object(s.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(s.jsx)("input",{type:"text",id:"email",onChange:t}),Object(s.jsx)("label",{htmlFor:"description",children:"About Me: "}),Object(s.jsx)("input",{type:"text",id:"description",onChange:t})]})}function N(e){var t=e.experience,c=e.getExperienceInput,n=e.addExperience,a=e.removeExperience;return t.map((function(e,t){return Object(s.jsxs)("div",{className:"practicalForm","data-key":e.id,"data-index":t,children:[Object(s.jsx)("label",{htmlFor:"position",children:"Position: "}),Object(s.jsx)("input",{type:"text",id:"position","data-key":"position",onChange:c}),Object(s.jsx)("label",{htmlFor:"company",children:"Company: "}),Object(s.jsx)("input",{type:"text",id:"company","data-key":"company",onChange:c}),Object(s.jsx)("label",{htmlFor:"experienceDescription",children:"Description: "}),Object(s.jsx)("input",{type:"text",id:"experienceDescription","data-key":"description",onChange:c}),Object(s.jsx)("label",{htmlFor:"from",children:"From: "}),Object(s.jsx)("input",{type:"text",id:"experienceFrom","data-key":"from",onChange:c}),Object(s.jsx)("label",{htmlFor:"to",children:"To: "}),Object(s.jsx)("input",{type:"text",id:"experienceTo","data-key":"to",onChange:c}),Object(s.jsxs)("div",{className:"buttonContainer","data-key":e.id,children:[Object(s.jsx)("button",{className:"add",onClick:n,children:"Add"}),Object(s.jsx)("button",{className:"remove",onClick:a,children:"Remove"})]})]},e.id)}))}function f(){return Object(s.jsx)("h1",{className:"generalFormTitle formTitle",children:"General Information: "})}function E(){return Object(s.jsx)("h1",{className:"educationFormTitle formTitle",children:"Education: "})}function y(){return Object(s.jsx)("h1",{className:"experienceFormTitle formTitle",children:"Experience: "})}function k(e){var t=e.getGeneralInput,c=e.education,n=e.getEducationInput,a=e.addEducation,i=e.removeEducation,r=e.experience,o=e.getExperienceInput,d=e.addExperience,l=e.removeExperience;return Object(s.jsxs)("section",{className:"forms",children:[Object(s.jsx)(f,{}),Object(s.jsx)(g,{getGeneralInput:t}),Object(s.jsx)(y,{}),Object(s.jsx)(N,{experience:r,getExperienceInput:o,addExperience:d,removeExperience:l}),Object(s.jsx)(E,{}),Object(s.jsx)(v,{education:c,getEducationInput:n,addEducation:a,removeEducation:i})]})}function I(e){var t=e.educationalBackground;return Object(s.jsxs)("div",{className:"educationalBackground",children:[Object(s.jsx)("h1",{className:"educationTitle previewTitle",children:"Education"}),t.map((function(e){return Object(s.jsx)("div",{className:"educations",children:Object(s.jsxs)("div",{className:"educationDetails",children:[Object(s.jsx)("p",{className:"course educationPreview",children:e.course}),Object(s.jsx)("p",{className:"educationPreview",children:"-"}),Object(s.jsx)("p",{className:"school educationPreview",children:e.school}),Object(s.jsx)("p",{className:"educationFrom educationPreview",children:e.from}),Object(s.jsx)("p",{className:"educationPreview",children:"-"}),Object(s.jsx)("p",{className:"educationTo educationPreview",children:e.to})]})},e.id)}))]})}function F(e){var t=e.genInfo;return Object(s.jsxs)("div",{className:"generalInformation",children:[Object(s.jsxs)("div",{className:"resumeHeader",children:[Object(s.jsxs)("div",{className:"nameContainer",children:[Object(s.jsx)("p",{className:"firstName",children:t.firstName}),Object(s.jsx)("p",{className:"lastName",children:t.lastName})]}),Object(s.jsx)("p",{className:"profession",children:t.profession})]}),Object(s.jsxs)("div",{className:"generalInformationBottom",children:[Object(s.jsxs)("div",{className:"bio",children:[Object(s.jsx)("h1",{className:"bioTitle previewTitle",children:"About Me"}),Object(s.jsx)("p",{className:"generalDescription generalPreview",children:t.description})]}),Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsx)("h1",{className:"contactTitle previewTitle",children:"Contact"}),Object(s.jsxs)("div",{className:"contactDetails",children:[Object(s.jsx)("p",{className:"address generalPreview",children:t.address}),Object(s.jsx)("p",{className:"contactNumber generalPreview",children:t.contactNumber}),Object(s.jsx)("p",{className:"email generalPreview",children:t.email})]})]})]})]})}function C(e){var t=e.practicalExperience;return Object(s.jsxs)("div",{className:"practicalExperience",children:[Object(s.jsx)("h1",{className:"experienceTitle previewTitle",children:"Experience"}),t.map((function(e){return Object(s.jsx)("div",{className:"experiences",children:Object(s.jsxs)("div",{className:"experienceDetails",children:[Object(s.jsxs)("div",{className:"companyDetails",children:[Object(s.jsx)("p",{className:"position experiencePreview",children:e.position}),Object(s.jsx)("p",{className:"experiencePreview",children:"-"}),Object(s.jsx)("p",{className:"company experiencePreview",children:e.company})]}),Object(s.jsx)("p",{className:"description experiencePreview",children:e.description}),Object(s.jsxs)("div",{className:"experienceDate",children:[Object(s.jsx)("p",{className:"experienceFrom experiencePreview",children:e.from}),Object(s.jsx)("p",{className:"experiencePreview",children:"-"}),Object(s.jsx)("p",{className:"experienceTo experiencePreview",children:e.to})]})]})},e.id)}))]})}function w(e){var t=e.details,c=e.key;return Object(s.jsxs)("section",{className:"preview",children:[Object(s.jsx)(F,{genInfo:t.generalInformation}),Object(s.jsx)(C,{practicalExperience:t.practicalExperience},c),Object(s.jsx)(I,{educationalBackground:t.educationalBackground},c)]})}var T=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(p.a)(this,c),(n=t.call(this,e)).state={generalInformation:{firstName:"",lastName:"",profession:"",address:"",contactNumber:"",email:"",description:""},educationalBackground:[{id:O()(),course:"",school:"",from:"",to:""}],practicalExperience:[{id:O()(),position:"",company:"",description:"",from:"",to:""}]},n.getGeneralInput=n.getGeneralInput.bind(Object(x.a)(n)),n.getEducationInput=n.getEducationInput.bind(Object(x.a)(n)),n.addEducation=n.addEducation.bind(Object(x.a)(n)),n.removeEducation=n.removeEducation.bind(Object(x.a)(n)),n.getExperienceInput=n.getExperienceInput.bind(Object(x.a)(n)),n.addExperience=n.addExperience.bind(Object(x.a)(n)),n.removeExperience=n.removeExperience.bind(Object(x.a)(n)),n}return Object(u.a)(c,[{key:"getGeneralInput",value:function(e){var t=e.target,c=t.id,n=t.value;this.setState({generalInformation:Object(j.a)(Object(j.a)({},this.state.generalInformation),{},Object(l.a)({},c,n))})}},{key:"getEducationInput",value:function(e){var t=e.target.value,c=e.target.dataset.key,n=e.target.parentElement.dataset.index,a=this.state.educationalBackground;a[n][c]=t,this.setState({educationalBackground:Object(d.a)(a)})}},{key:"addEducation",value:function(){this.setState({educationalBackground:this.state.educationalBackground.concat([{id:O()(),course:"",school:"",from:"",to:""}])})}},{key:"removeEducation",value:function(e){if(1!==this.state.educationalBackground.length){var t=e.target.parentElement.dataset.key;this.setState({educationalBackground:Object(d.a)(this.state.educationalBackground.filter((function(e){return e.id!==t})))})}}},{key:"getExperienceInput",value:function(e){var t=e.target.value,c=e.target.dataset.key,n=e.target.parentElement.dataset.index,a=this.state.practicalExperience;a[n][c]=t,this.setState({practicalExperience:Object(d.a)(a)})}},{key:"addExperience",value:function(){this.setState({practicalExperience:this.state.practicalExperience.concat([{id:O()(),position:"",company:"",description:"",from:"",to:""}])})}},{key:"removeExperience",value:function(e){if(1!==this.state.practicalExperience.length){var t=e.target.parentElement.dataset.key;this.setState({practicalExperience:Object(d.a)(this.state.practicalExperience.filter((function(e){return e.id!==t})))})}}},{key:"render",value:function(){var e=this.state,t=e.educationalBackground,c=e.practicalExperience;return Object(s.jsxs)("section",{className:"main",children:[Object(s.jsx)(k,{getGeneralInput:this.getGeneralInput,getEducationInput:this.getEducationInput,addEducation:this.addEducation,removeEducation:this.removeEducation,education:t,experience:c,getExperienceInput:this.getExperienceInput,addExperience:this.addExperience,removeExperience:this.removeExperience}),Object(s.jsx)(w,{details:this.state})]})}}]),c}(n.Component);function P(){return Object(s.jsx)("section",{className:"footer",children:Object(s.jsxs)("a",{href:"https://github.com/28Goo",children:[Object(s.jsx)("span",{className:"githubName",children:"28Goo "}),Object(s.jsx)("i",{className:"devicon-github-original"})]})})}c(19);var B=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(T,{}),Object(s.jsx)(P,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.307bda7a.chunk.js.map