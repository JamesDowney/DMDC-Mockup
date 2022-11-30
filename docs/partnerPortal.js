!function(){"use strict";var e,t,n,r={6734:function(e,t,n){n.d(t,{lq:function(){return a},qq:function(){return i}});var r=n(7294);function a(...e){return t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"!=typeof e)try{e.current=t}catch(n){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}else e(t)}(e,t)}))}}function i(...e){return(0,r.useMemo)((()=>a(...e)),e)}},9358:function(e,t,n){var r=n(7294),a=n(745),i=n(3382),o=n(5365),l=n(4872),c=n(4302),s=n(5336),m=n(4520),d=n(6076),p=n(2494),u=n(8387),f=n(4031);(0,l.Gp)((function(e,t){const{ratio:n=4/3,children:a,className:i,...o}=e,m=r.Children.only(a),d=(0,s.cx)("chakra-aspect-ratio",i);return r.createElement(l.m$.div,{ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(0,c.XQ)(n,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...o},m)})).displayName="AspectRatio",(0,l.Gp)((function(e,t){const n=(0,l.mq)("Badge",e),{className:a,...i}=(0,m.Lr)(e);return r.createElement(l.m$.span,{ref:t,className:(0,s.cx)("chakra-badge",e.className),...i,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})})).displayName="Badge";var g=(0,l.m$)("div");g.displayName="Box";var h=(0,l.Gp)((function(e,t){const{size:n,centerContent:a=!0,...i}=e,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return r.createElement(g,{ref:t,boxSize:n,__css:{...o,flexShrink:0,flexGrow:0},...i})}));h.displayName="Square",(0,l.Gp)((function(e,t){const{size:n,...a}=e;return r.createElement(h,{size:n,ref:t,borderRadius:"9999px",...a})})).displayName="Circle",(0,l.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var y={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,l.Gp)((function(e,t){const{axis:n="both",...a}=e;return r.createElement(l.m$.div,{ref:t,__css:y[n],...a,position:"absolute"})})),(0,l.Gp)((function(e,t){const n=(0,l.mq)("Code",e),{className:a,...i}=(0,m.Lr)(e);return r.createElement(l.m$.code,{ref:t,className:(0,s.cx)("chakra-code",e.className),...i,__css:{display:"inline-block",...n}})})).displayName="Code",(0,l.Gp)((function(e,t){const{className:n,centerContent:a,...i}=(0,m.Lr)(e),o=(0,l.mq)("Container",e);return r.createElement(l.m$.div,{ref:t,className:(0,s.cx)("chakra-container",n),...i,__css:{...o,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})})).displayName="Container",(0,l.Gp)((function(e,t){const{borderLeftWidth:n,borderBottomWidth:a,borderTopWidth:i,borderRightWidth:o,borderWidth:c,borderStyle:d,borderColor:p,...u}=(0,l.mq)("Divider",e),{className:f,orientation:g="horizontal",__css:h,...y}=(0,m.Lr)(e),E={vertical:{borderLeftWidth:n||o||c||"1px",height:"100%"},horizontal:{borderBottomWidth:a||i||c||"1px",width:"100%"}};return r.createElement(l.m$.hr,{ref:t,"aria-orientation":g,...y,__css:{...u,border:"0",borderColor:p,borderStyle:d,...E[g],...h},className:(0,s.cx)("chakra-divider",f)})})).displayName="Divider";var E=(0,l.Gp)((function(e,t){const{direction:n,align:a,justify:i,wrap:o,basis:c,grow:s,shrink:m,...d}=e,p={display:"flex",flexDirection:n,alignItems:a,justifyContent:i,flexWrap:o,flexBasis:c,flexGrow:s,flexShrink:m};return r.createElement(l.m$.div,{ref:t,__css:p,...d})}));E.displayName="Flex";var x=(0,l.Gp)((function(e,t){const{templateAreas:n,gap:a,rowGap:i,columnGap:o,column:c,row:s,autoFlow:m,autoRows:d,templateRows:p,autoColumns:u,templateColumns:f,...g}=e,h={display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:u,gridColumn:c,gridRow:s,gridAutoFlow:m,gridAutoRows:d,gridTemplateRows:p,gridTemplateColumns:f};return r.createElement(l.m$.div,{ref:t,__css:h,...g})}));function b(e){return(0,c.XQ)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}x.displayName="Grid",(0,l.Gp)((function(e,t){const{area:n,colSpan:a,colStart:i,colEnd:o,rowEnd:c,rowSpan:s,rowStart:m,...p}=e,u=(0,d.oA)({gridArea:n,gridColumn:b(a),gridRow:b(s),gridColumnStart:i,gridColumnEnd:o,gridRowStart:m,gridRowEnd:c});return r.createElement(l.m$.div,{ref:t,__css:u,...p})})).displayName="GridItem",(0,l.Gp)((function(e,t){const n=(0,l.mq)("Heading",e),{className:a,...i}=(0,m.Lr)(e);return r.createElement(l.m$.h2,{ref:t,className:(0,s.cx)("chakra-heading",e.className),...i,__css:n})})).displayName="Heading",(0,l.Gp)((function(e,t){const n=(0,l.mq)("Mark",e),a=(0,m.Lr)(e);return r.createElement(g,{ref:t,...a,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...n}})})),(0,l.Gp)((function(e,t){const n=(0,l.mq)("Kbd",e),{className:a,...i}=(0,m.Lr)(e);return r.createElement(l.m$.kbd,{ref:t,className:(0,s.cx)("chakra-kbd",a),...i,__css:{fontFamily:"mono",...n}})})).displayName="Kbd";var w=(0,l.Gp)((function(e,t){const n=(0,l.mq)("Link",e),{className:a,isExternal:i,...o}=(0,m.Lr)(e);return r.createElement(l.m$.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:t,className:(0,s.cx)("chakra-link",a),...o,__css:n})}));w.displayName="Link",(0,l.Gp)((function(e,t){const{isExternal:n,target:a,rel:i,className:o,...c}=e;return r.createElement(l.m$.a,{...c,ref:t,className:(0,s.cx)("chakra-linkbox__overlay",o),rel:n?"noopener noreferrer":i,target:n?"_blank":a,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),(0,l.Gp)((function(e,t){const{className:n,...a}=e;return r.createElement(l.m$.div,{ref:t,position:"relative",...a,className:(0,s.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}));var[v,_]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),k=(0,l.Gp)((function(e,t){const n=(0,l.jC)("List",e),{children:a,styleType:i="none",stylePosition:o,spacing:c,...s}=(0,m.Lr)(e),d=(0,f.W)(a),p=c?{"& > *:not(style) ~ *:not(style)":{mt:c}}:{};return r.createElement(v,{value:n},r.createElement(l.m$.ul,{ref:t,listStyleType:i,listStylePosition:o,role:"list",__css:{...n.container,...p},...s},d))}));k.displayName="List",(0,l.Gp)(((e,t)=>{const{as:n,...a}=e;return r.createElement(k,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})})).displayName="OrderedList",(0,l.Gp)((function(e,t){const{as:n,...a}=e;return r.createElement(k,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})})).displayName="UnorderedList",(0,l.Gp)((function(e,t){const n=_();return r.createElement(l.m$.li,{ref:t,...e,__css:n.item})})).displayName="ListItem",(0,l.Gp)((function(e,t){const n=_();return r.createElement(p.JO,{ref:t,role:"presentation",...e,__css:n.icon})})).displayName="ListIcon";var S=(0,l.Gp)((function(e,t){const{columns:n,spacingX:a,spacingY:i,spacing:o,minChildWidth:s,...m}=e,d=(0,l.Fg)(),p=s?function(e,t){return(0,c.XQ)(e,(e=>{const n=(0,l.LP)("sizes",e,"number"==typeof(r=e)?`${r}px`:r)(t);var r;return null===e?null:`repeat(auto-fit, minmax(${n}, 1fr))`}))}(s,d):(u=n,(0,c.XQ)(u,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)));var u;return r.createElement(x,{ref:t,gap:o,columnGap:a,rowGap:i,templateColumns:p,...m})}));S.displayName="SimpleGrid";var N=(0,l.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});N.displayName="Spacer";var C="& > *:not(style) ~ *:not(style)",G=e=>r.createElement(l.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});G.displayName="StackItem";var $=(0,l.Gp)(((e,t)=>{const{isInline:n,direction:a,align:i,justify:o,spacing:m="0.5rem",wrap:d,children:p,divider:u,className:g,shouldWrapChildren:h,...y}=e,E=n?"row":a??"column",x=(0,r.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[C]:(0,c.XQ)(n,(e=>r[e]))}}({direction:E,spacing:m})),[E,m]),b=(0,r.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,c.XQ)(n,(e=>r[e]))}}({spacing:m,direction:E})),[m,E]),w=!!u,v=!h&&!w,_=(0,r.useMemo)((()=>{const e=(0,f.W)(p);return v?e:e.map(((t,n)=>{const a=void 0!==t.key?t.key:n,i=n+1===e.length,o=h?r.createElement(G,{key:a},t):t;if(!w)return o;const l=(0,r.cloneElement)(u,{__css:b}),c=i?null:l;return r.createElement(r.Fragment,{key:a},o,c)}))}),[u,b,w,v,h,p]),k=(0,s.cx)("chakra-stack",g);return r.createElement(l.m$.div,{ref:t,display:"flex",alignItems:i,justifyContent:o,flexDirection:x.flexDirection,flexWrap:d,className:k,__css:w?{}:{[C]:x[C]},...y},_)}));$.displayName="Stack";var D=(0,l.Gp)(((e,t)=>r.createElement($,{align:"center",...e,direction:"row",ref:t})));D.displayName="HStack";var I=e=>r.createElement(l.m$.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});I.displayName="StackDivider";var L=(0,l.Gp)(((e,t)=>r.createElement($,{align:"center",...e,direction:"column",ref:t})));L.displayName="VStack";var j=(0,l.Gp)((function(e,t){const n=(0,l.mq)("Text",e),{className:a,align:i,decoration:o,casing:c,...p}=(0,m.Lr)(e),u=(0,d.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return r.createElement(l.m$.p,{ref:t,className:(0,s.cx)("chakra-text",e.className),...u,...p,__css:n})}));function B(e){return"number"==typeof e?`${e}px`:e}j.displayName="Text",(0,l.Gp)((function(e,t){const{spacing:n="0.5rem",spacingX:a,spacingY:i,children:o,justify:d,direction:p,align:u,className:f,shouldWrapChildren:g,...h}=e,y=(0,r.useMemo)((()=>{const{spacingX:e=n,spacingY:t=n}={spacingX:a,spacingY:i};return{"--chakra-wrap-x-spacing":t=>(0,c.XQ)(e,(e=>B((0,m.fr)("space",e)(t)))),"--chakra-wrap-y-spacing":e=>(0,c.XQ)(t,(t=>B((0,m.fr)("space",t)(e)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:u,flexDirection:p,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[n,a,i,d,u,p]),E=(0,r.useMemo)((()=>g?r.Children.map(o,((e,t)=>r.createElement(A,{key:t},e))):o),[o,g]);return r.createElement(l.m$.div,{ref:t,className:(0,s.cx)("chakra-wrap",f),overflow:"hidden",...h},r.createElement(l.m$.ul,{className:"chakra-wrap__list",__css:y},E))})).displayName="Wrap";var A=(0,l.Gp)((function(e,t){const{className:n,...a}=e;return r.createElement(l.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,s.cx)("chakra-wrap__listitem",n),...a})}));A.displayName="WrapItem";var W=n(3527),O=n(6734),T=n(5610),z=(...e)=>e.filter(Boolean).join(" "),M=e=>e?"":void 0,[P,q]=(0,u.k)({strict:!1,name:"ButtonGroupContext"});function R(e){const{children:t,className:n,...a}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=z("chakra-button__icon",n);return r.createElement(l.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:o},i)}function H(e){const{label:t,placement:n,spacing:a="0.5rem",children:i=r.createElement(T.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:c,...s}=e,m=z("chakra-button__spinner",o),d="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[d]:t?a:0,fontSize:"1em",lineHeight:"normal",...c})),[c,t,d,a]);return r.createElement(l.m$.div,{className:m,...s,__css:p},i)}R.displayName="ButtonIcon",H.displayName="ButtonSpinner";var X=(0,l.Gp)(((e,t)=>{const n=q(),a=(0,l.mq)("Button",{...n,...e}),{isDisabled:i=(null==n?void 0:n.isDisabled),isLoading:o,isActive:c,children:s,leftIcon:d,rightIcon:p,loadingText:u,iconSpacing:f="0.5rem",type:g,spinner:h,spinnerPlacement:y="start",className:E,as:x,...b}=(0,m.Lr)(e),w=(0,r.useMemo)((()=>{const e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}}),[a,n]),{ref:v,type:_}=function(e){const[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(x),k={rightIcon:p,leftIcon:d,iconSpacing:f,children:s};return r.createElement(l.m$.button,{disabled:i||o,ref:(0,O.qq)(t,v),as:x,type:g??_,"data-active":M(c),"data-loading":M(o),__css:w,className:z("chakra-button",E),...b},o&&"start"===y&&r.createElement(H,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:f},h),o?u||r.createElement(l.m$.span,{opacity:0},r.createElement(F,{...k})):r.createElement(F,{...k}),o&&"end"===y&&r.createElement(H,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:f},h))}));function F(e){const{leftIcon:t,rightIcon:n,children:a,iconSpacing:i}=e;return r.createElement(r.Fragment,null,t&&r.createElement(R,{marginEnd:i},t),a,n&&r.createElement(R,{marginStart:i},n))}X.displayName="Button",(0,l.Gp)((function(e,t){const{size:n,colorScheme:a,variant:i,className:o,spacing:c="0.5rem",isAttached:s,isDisabled:m,...d}=e,p=z("chakra-button__group",o),u=(0,r.useMemo)((()=>({size:n,colorScheme:a,variant:i,isDisabled:m})),[n,a,i,m]);let f={display:"inline-flex"};return f=s?{...f,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...f,"& > *:not(style) ~ *:not(style)":{marginStart:c}},r.createElement(P,{value:u},r.createElement(l.m$.div,{ref:t,role:"group",__css:f,className:p,"data-attached":s?"":void 0,...d}))})).displayName="ButtonGroup",(0,l.Gp)(((e,t)=>{const{icon:n,children:a,isRound:i,"aria-label":o,...l}=e,c=n||a,s=(0,r.isValidElement)(c)?(0,r.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(X,{padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":o,...l},s)})).displayName="IconButton";var Q=n(3887),Y=n.p+"f72ba7ddbfe30af229cb.png";function V(){return r.createElement(g,{bg:"gray.900",color:"gray.200",as:"footer",width:"100%",bottom:"0",minH:"10vh"},r.createElement(E,{flexDir:"row",width:"100%",align:"center",paddingTop:4,paddingBottom:4,paddingStart:10,paddingEnd:10},r.createElement(E,{dir:"row",align:"center"},r.createElement(Q.Ee,{src:Y}),r.createElement(j,{paddingLeft:4,fontSize:"2xl",textAlign:"center"},"Defense Manpower Data Center")),r.createElement(N,null),r.createElement(D,{spacing:4,divider:r.createElement(I,null),width:"100%",justifyContent:"right"},r.createElement(w,{target:"_blank",href:"https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx"},"Accessibility/Section 508"),r.createElement(w,{target:"_blank",href:"https://www.usa.gov/"},"USA.gov"),r.createElement(w,{target:"_blank",href:"https://www.dhra.mil/website/headquarters/info/nofear.shtml"},"No Fear Act Notice"),r.createElement(w,{target:"_blank",href:"https://dwp.dmdc.osd.mil/dwp/app/privacy-security"},"Privacy & Security Notice"),r.createElement(w,{target:"_blank",href:"https://dwp.dmdc.osd.mil/dwp/app/security-statement"},"Security Statement"),r.createElement(w,{target:"_blank",href:"https://dwp.dmdc.osd.mil/dwp/app/faqs"},"Contact DMDC"),r.createElement(w,{target:"_blank",href:"https://dwp.dmdc.osd.mil/dwp/app/main"},"DMDC Home Page"),r.createElement(w,{target:"_blank",href:"https://www.dhra.mil/"},"DHRA Home Page"))))}var K=n.p+"1a9a34e0104df4080137.png";function U(e){return r.createElement(E,{as:"header",height:"100px",align:"center",backgroundImage:"linear-gradient(to bottom,#036ddb 0,#01509f 100%)",flexDirection:"row",position:"fixed",width:"100%",zIndex:200},r.createElement(E,{width:"100%",fontSize:"x-large"},r.createElement(w,{href:"./index.html"},r.createElement(Q.Ee,{src:K,height:"fit-content",width:"fit-content",padding:10})),r.createElement(N,null),r.createElement(D,{maxHeight:100,divider:r.createElement(I,null),spacing:10,paddingEnd:10,marginY:10,textColor:"white"},r.createElement(w,{href:e.homeLink},"Home"),r.createElement(w,{href:"./knowledge.html"},"Knowledge"),r.createElement(w,{href:"./knowledge.html"},"Notifications"),r.createElement(w,{href:"./knowledge.html"},"My Profile"),r.createElement(w,{href:"./index.html"},"Logout"),r.createElement(w,{href:"./knowledge.html"},r.createElement(i.kB,null)))))}var J=(0,n(1677).B1)({config:{initialColorMode:"light",useSystemColorMode:!1}}),Z=n.p+"13cddd77fc9a8fd9164e.jpg",ee=document.getElementById("root");if(!ee)throw new Error("Failed to find the root element");a.a(ee,r.createElement(r.StrictMode,null,r.createElement((function(){return r.createElement(o.xjn,{theme:J},r.createElement(L,{backgroundColor:"gray.200"},r.createElement(U,{homeLink:"./partnerPortal.html"}),r.createElement(g,{textAlign:"center",backgroundImage:Z,backgroundSize:"100%",backgroundAttachment:"fixed",backgroundPosition:"top",backgroundRepeat:"no-repeat",backgroundColor:"gray.200",minWidth:"100%",minHeight:"90vh"},r.createElement(L,null,r.createElement(N,{minH:160}),r.createElement(j,{width:"fit-content",fontSize:"8xl",paddingLeft:5,textShadow:"-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000;",textColor:"white"},"DMDC Partner Portal"),r.createElement(N,{minH:200}),r.createElement(L,{width:"60%",align:"left"},r.createElement(j,{width:"fit-content",fontSize:"5xl",paddingLeft:5,textShadow:"-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;",textColor:"white"},"Ask a Question"),r.createElement(W.BZ,null,r.createElement(W.xH,{children:r.createElement(i.W1,{color:"gray.300"})}),r.createElement(W.II,{placeholder:"Type your question here...",_placeholder:{color:"grey"},background:"white",borderColor:"black",textColor:"black"}))),r.createElement(L,{width:"100%",backgroundColor:"gray.200",padding:"5"},r.createElement(E,{width:"100%"},r.createElement(D,{alignItems:"top",width:"100%",justifyContent:"center",spacing:"5%"},r.createElement(g,{minHeight:300,width:"45%",shadow:"dark-lg",padding:5},r.createElement(L,{width:"100%"},r.createElement(j,{fontSize:"3xl",textDecoration:"underline"},"Announcements/System Outages"),r.createElement(D,{alignItems:"top",width:"100%"},r.createElement(L,{alignItems:"left"},r.createElement(j,{textAlign:"left",textDecoration:"underline"},"Date"),r.createElement(j,{textAlign:"left"},"11/02/2022")),r.createElement(N,null),r.createElement(L,{alignItems:"right"},r.createElement(j,{textAlign:"right",textDecoration:"underline"},"Announcement"),r.createElement(w,{href:"#",color:"blue"},r.createElement(j,{textAlign:"right"},"DSLOGON: Issues with DS Logon Ticket Number: #INC000444")))))),r.createElement(g,{width:"45%"},r.createElement(E,{minHeight:300,width:"100%",shadow:"dark-lg",padding:5,flexDir:"column"},r.createElement(g,{width:"100%"},r.createElement(j,{fontSize:"3xl",textDecoration:"underline"},"My Cases"),r.createElement(S,{columns:3,spacing:1},r.createElement(j,{fontSize:"2xl",textDecoration:"underline"},"Case Number"),r.createElement(j,{fontSize:"2xl",textDecoration:"underline"},"Created"),r.createElement(j,{fontSize:"2xl",textDecoration:"underline"},"Status"),r.createElement(w,{textColor:"blue"},"DSC001123"),r.createElement(j,null,"10/31/2022"),r.createElement(j,null,"Open"))),r.createElement(N,null),r.createElement(D,{width:"full"},r.createElement(N,null),r.createElement(X,{colorScheme:"blue"},"Create a Case"),r.createElement(X,{colorScheme:"blue"},"View all my Cases"))))))))),r.createElement(V,null)))}),null)))}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e](n,n.exports,i),n.loaded=!0,n.exports}i.m=r,e=[],i.O=function(t,n,r,a){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],a=e[m][2];for(var l=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(l=!1,a<o&&(o=a));if(l){e.splice(m--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},i.d(a,o),a},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e}(),function(){var e={961:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],l=n[1],c=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(c)var m=c(i)}for(t&&t(n);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(m)},n=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=i.O(void 0,[796,702,201],(function(){return i(9358)}));o=i.O(o)}();