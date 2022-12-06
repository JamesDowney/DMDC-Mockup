"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[603],{7741:function(e,t,n){n.d(t,{zx:function(){return y}});var i=n(7294),a=n(6734),r=n(4872),o=n(4520),s=n(8387),l=n(5610),c=(...e)=>e.filter(Boolean).join(" "),d=e=>e?"":void 0,[m,u]=(0,s.k)({strict:!1,name:"ButtonGroupContext"});function p(e){const{children:t,className:n,...a}=e,o=(0,i.isValidElement)(t)?(0,i.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,s=c("chakra-button__icon",n);return i.createElement(r.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s},o)}function f(e){const{label:t,placement:n,spacing:a="0.5rem",children:o=i.createElement(l.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:d,...m}=e,u=c("chakra-button__spinner",s),p="start"===n?"marginEnd":"marginStart",f=(0,i.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...d})),[d,t,p,a]);return i.createElement(r.m$.div,{className:u,...m,__css:f},o)}p.displayName="ButtonIcon",f.displayName="ButtonSpinner";var y=(0,r.Gp)(((e,t)=>{const n=u(),s=(0,r.mq)("Button",{...n,...e}),{isDisabled:l=(null==n?void 0:n.isDisabled),isLoading:m,isActive:p,children:y,leftIcon:x,rightIcon:h,loadingText:v,iconSpacing:E="0.5rem",type:N,spinner:_,spinnerPlacement:b="start",className:k,as:w,...S}=(0,o.Lr)(e),G=(0,i.useMemo)((()=>{const e={...null==s?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!n&&{_focus:e}}}),[s,n]),{ref:C,type:$}=function(e){const[t,n]=(0,i.useState)(!e);return{ref:(0,i.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(w),I={rightIcon:h,leftIcon:x,iconSpacing:E,children:y};return i.createElement(r.m$.button,{disabled:l||m,ref:(0,a.qq)(t,C),as:w,type:N??$,"data-active":d(p),"data-loading":d(m),__css:G,className:c("chakra-button",k),...S},m&&"start"===b&&i.createElement(f,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:E},_),m?v||i.createElement(r.m$.span,{opacity:0},i.createElement(g,{...I})):i.createElement(g,{...I}),m&&"end"===b&&i.createElement(f,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:E},_))}));function g(e){const{leftIcon:t,rightIcon:n,children:a,iconSpacing:r}=e;return i.createElement(i.Fragment,null,t&&i.createElement(p,{marginEnd:r},t),a,n&&i.createElement(p,{marginStart:r},n))}y.displayName="Button",(0,r.Gp)((function(e,t){const{size:n,colorScheme:a,variant:o,className:s,spacing:l="0.5rem",isAttached:d,isDisabled:u,...p}=e,f=c("chakra-button__group",s),y=(0,i.useMemo)((()=>({size:n,colorScheme:a,variant:o,isDisabled:u})),[n,a,o,u]);let g={display:"inline-flex"};return g=d?{...g,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...g,"& > *:not(style) ~ *:not(style)":{marginStart:l}},i.createElement(m,{value:y},i.createElement(r.m$.div,{ref:t,role:"group",__css:g,className:f,"data-attached":d?"":void 0,...p}))})).displayName="ButtonGroup",(0,r.Gp)(((e,t)=>{const{icon:n,children:a,isRound:r,"aria-label":o,...s}=e,l=n||a,c=(0,i.isValidElement)(l)?(0,i.cloneElement)(l,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(y,{padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":o,...s},c)})).displayName="IconButton"},8641:function(e,t,n){n.d(t,{HC:function(){return b},LZ:function(){return w},MI:function(){return k},QI:function(){return _},Ug:function(){return $},cX:function(){return I},gC:function(){return L},kC:function(){return y},rU:function(){return h},xu:function(){return u},xv:function(){return W}});var i=n(7294),a=n(4872),r=n(4302),o=n(5336),s=n(4520),l=n(6076),c=n(2494),d=n(8387),m=n(4031);(0,a.Gp)((function(e,t){const{ratio:n=4/3,children:s,className:l,...c}=e,d=i.Children.only(s),m=(0,o.cx)("chakra-aspect-ratio",l);return i.createElement(a.m$.div,{ref:t,position:"relative",className:m,_before:{height:0,content:'""',display:"block",paddingBottom:(0,r.XQ)(n,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...c},d)})).displayName="AspectRatio",(0,a.Gp)((function(e,t){const n=(0,a.mq)("Badge",e),{className:r,...l}=(0,s.Lr)(e);return i.createElement(a.m$.span,{ref:t,className:(0,o.cx)("chakra-badge",e.className),...l,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})})).displayName="Badge";var u=(0,a.m$)("div");u.displayName="Box";var p=(0,a.Gp)((function(e,t){const{size:n,centerContent:a=!0,...r}=e,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(u,{ref:t,boxSize:n,__css:{...o,flexShrink:0,flexGrow:0},...r})}));p.displayName="Square",(0,a.Gp)((function(e,t){const{size:n,...a}=e;return i.createElement(p,{size:n,ref:t,borderRadius:"9999px",...a})})).displayName="Circle",(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var f={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)((function(e,t){const{axis:n="both",...r}=e;return i.createElement(a.m$.div,{ref:t,__css:f[n],...r,position:"absolute"})})),(0,a.Gp)((function(e,t){const n=(0,a.mq)("Code",e),{className:r,...l}=(0,s.Lr)(e);return i.createElement(a.m$.code,{ref:t,className:(0,o.cx)("chakra-code",e.className),...l,__css:{display:"inline-block",...n}})})).displayName="Code",(0,a.Gp)((function(e,t){const{className:n,centerContent:r,...l}=(0,s.Lr)(e),c=(0,a.mq)("Container",e);return i.createElement(a.m$.div,{ref:t,className:(0,o.cx)("chakra-container",n),...l,__css:{...c,...r&&{display:"flex",flexDirection:"column",alignItems:"center"}}})})).displayName="Container",(0,a.Gp)((function(e,t){const{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:l,borderRightWidth:c,borderWidth:d,borderStyle:m,borderColor:u,...p}=(0,a.mq)("Divider",e),{className:f,orientation:y="horizontal",__css:g,...x}=(0,s.Lr)(e),h={vertical:{borderLeftWidth:n||c||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||l||d||"1px",width:"100%"}};return i.createElement(a.m$.hr,{ref:t,"aria-orientation":y,...x,__css:{...p,border:"0",borderColor:u,borderStyle:m,...h[y],...g},className:(0,o.cx)("chakra-divider",f)})})).displayName="Divider";var y=(0,a.Gp)((function(e,t){const{direction:n,align:r,justify:o,wrap:s,basis:l,grow:c,shrink:d,...m}=e,u={display:"flex",flexDirection:n,alignItems:r,justifyContent:o,flexWrap:s,flexBasis:l,flexGrow:c,flexShrink:d};return i.createElement(a.m$.div,{ref:t,__css:u,...m})}));y.displayName="Flex";var g=(0,a.Gp)((function(e,t){const{templateAreas:n,gap:r,rowGap:o,columnGap:s,column:l,row:c,autoFlow:d,autoRows:m,templateRows:u,autoColumns:p,templateColumns:f,...y}=e,g={display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:o,gridColumnGap:s,gridAutoColumns:p,gridColumn:l,gridRow:c,gridAutoFlow:d,gridAutoRows:m,gridTemplateRows:u,gridTemplateColumns:f};return i.createElement(a.m$.div,{ref:t,__css:g,...y})}));function x(e){return(0,r.XQ)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}g.displayName="Grid",(0,a.Gp)((function(e,t){const{area:n,colSpan:r,colStart:o,colEnd:s,rowEnd:c,rowSpan:d,rowStart:m,...u}=e,p=(0,l.oA)({gridArea:n,gridColumn:x(r),gridRow:x(d),gridColumnStart:o,gridColumnEnd:s,gridRowStart:m,gridRowEnd:c});return i.createElement(a.m$.div,{ref:t,__css:p,...u})})).displayName="GridItem",(0,a.Gp)((function(e,t){const n=(0,a.mq)("Heading",e),{className:r,...l}=(0,s.Lr)(e);return i.createElement(a.m$.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...l,__css:n})})).displayName="Heading",(0,a.Gp)((function(e,t){const n=(0,a.mq)("Mark",e),r=(0,s.Lr)(e);return i.createElement(u,{ref:t,...r,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...n}})})),(0,a.Gp)((function(e,t){const n=(0,a.mq)("Kbd",e),{className:r,...l}=(0,s.Lr)(e);return i.createElement(a.m$.kbd,{ref:t,className:(0,o.cx)("chakra-kbd",r),...l,__css:{fontFamily:"mono",...n}})})).displayName="Kbd";var h=(0,a.Gp)((function(e,t){const n=(0,a.mq)("Link",e),{className:r,isExternal:l,...c}=(0,s.Lr)(e);return i.createElement(a.m$.a,{target:l?"_blank":void 0,rel:l?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",r),...c,__css:n})}));h.displayName="Link",(0,a.Gp)((function(e,t){const{isExternal:n,target:r,rel:s,className:l,...c}=e;return i.createElement(a.m$.a,{...c,ref:t,className:(0,o.cx)("chakra-linkbox__overlay",l),rel:n?"noopener noreferrer":s,target:n?"_blank":r,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),(0,a.Gp)((function(e,t){const{className:n,...r}=e;return i.createElement(a.m$.div,{ref:t,position:"relative",...r,className:(0,o.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}));var[v,E]=(0,d.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),N=(0,a.Gp)((function(e,t){const n=(0,a.jC)("List",e),{children:r,styleType:o="none",stylePosition:l,spacing:c,...d}=(0,s.Lr)(e),u=(0,m.W)(r),p=c?{"& > *:not(style) ~ *:not(style)":{mt:c}}:{};return i.createElement(v,{value:n},i.createElement(a.m$.ul,{ref:t,listStyleType:o,listStylePosition:l,role:"list",__css:{...n.container,...p},...d},u))}));N.displayName="List",(0,a.Gp)(((e,t)=>{const{as:n,...a}=e;return i.createElement(N,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})})).displayName="OrderedList";var _=(0,a.Gp)((function(e,t){const{as:n,...a}=e;return i.createElement(N,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}));_.displayName="UnorderedList";var b=(0,a.Gp)((function(e,t){const n=E();return i.createElement(a.m$.li,{ref:t,...e,__css:n.item})}));b.displayName="ListItem",(0,a.Gp)((function(e,t){const n=E();return i.createElement(c.JO,{ref:t,role:"presentation",...e,__css:n.icon})})).displayName="ListIcon";var k=(0,a.Gp)((function(e,t){const{columns:n,spacingX:o,spacingY:s,spacing:l,minChildWidth:c,...d}=e,m=(0,a.Fg)(),u=c?function(e,t){return(0,r.XQ)(e,(e=>{const n=(0,a.LP)("sizes",e,"number"==typeof(i=e)?`${i}px`:i)(t);var i;return null===e?null:`repeat(auto-fit, minmax(${n}, 1fr))`}))}(c,m):(p=n,(0,r.XQ)(p,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)));var p;return i.createElement(g,{ref:t,gap:l,columnGap:o,rowGap:s,templateColumns:u,...d})}));k.displayName="SimpleGrid";var w=(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});w.displayName="Spacer";var S="& > *:not(style) ~ *:not(style)",G=e=>i.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});G.displayName="StackItem";var C=(0,a.Gp)(((e,t)=>{const{isInline:n,direction:s,align:l,justify:c,spacing:d="0.5rem",wrap:u,children:p,divider:f,className:y,shouldWrapChildren:g,...x}=e,h=n?"row":s??"column",v=(0,i.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,i={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[S]:(0,r.XQ)(n,(e=>i[e]))}}({direction:h,spacing:d})),[h,d]),E=(0,i.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,i={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,r.XQ)(n,(e=>i[e]))}}({spacing:d,direction:h})),[d,h]),N=!!f,_=!g&&!N,b=(0,i.useMemo)((()=>{const e=(0,m.W)(p);return _?e:e.map(((t,n)=>{const a=void 0!==t.key?t.key:n,r=n+1===e.length,o=g?i.createElement(G,{key:a},t):t;if(!N)return o;const s=(0,i.cloneElement)(f,{__css:E}),l=r?null:s;return i.createElement(i.Fragment,{key:a},o,l)}))}),[f,E,N,_,g,p]),k=(0,o.cx)("chakra-stack",y);return i.createElement(a.m$.div,{ref:t,display:"flex",alignItems:l,justifyContent:c,flexDirection:v.flexDirection,flexWrap:u,className:k,__css:N?{}:{[S]:v[S]},...x},b)}));C.displayName="Stack";var $=(0,a.Gp)(((e,t)=>i.createElement(C,{align:"center",...e,direction:"row",ref:t})));$.displayName="HStack";var I=e=>i.createElement(a.m$.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});I.displayName="StackDivider";var L=(0,a.Gp)(((e,t)=>i.createElement(C,{align:"center",...e,direction:"column",ref:t})));L.displayName="VStack";var W=(0,a.Gp)((function(e,t){const n=(0,a.mq)("Text",e),{className:r,align:c,decoration:d,casing:m,...u}=(0,s.Lr)(e),p=(0,l.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i.createElement(a.m$.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...p,...u,__css:n})}));function B(e){return"number"==typeof e?`${e}px`:e}W.displayName="Text",(0,a.Gp)((function(e,t){const{spacing:n="0.5rem",spacingX:l,spacingY:c,children:d,justify:m,direction:u,align:p,className:f,shouldWrapChildren:y,...g}=e,x=(0,i.useMemo)((()=>{const{spacingX:e=n,spacingY:t=n}={spacingX:l,spacingY:c};return{"--chakra-wrap-x-spacing":t=>(0,r.XQ)(e,(e=>B((0,s.fr)("space",e)(t)))),"--chakra-wrap-y-spacing":e=>(0,r.XQ)(t,(t=>B((0,s.fr)("space",t)(e)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:m,alignItems:p,flexDirection:u,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[n,l,c,m,p,u]),h=(0,i.useMemo)((()=>y?i.Children.map(d,((e,t)=>i.createElement(R,{key:t},e))):d),[d,y]);return i.createElement(a.m$.div,{ref:t,className:(0,o.cx)("chakra-wrap",f),overflow:"hidden",...g},i.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:x},h))})).displayName="Wrap";var R=(0,a.Gp)((function(e,t){const{className:n,...r}=e;return i.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,o.cx)("chakra-wrap__listitem",n),...r})}));R.displayName="WrapItem"},1197:function(e,t,n){n.d(t,{UO:function(){return h}});var i=n(7294),a=n(4251),r=n(9042),o=(...e)=>e.filter(Boolean).join(" "),s={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},l={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},c={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},d={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},m={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function u(e){switch((null==e?void 0:e.direction)??"right"){case"right":default:return c;case"left":return l;case"bottom":return m;case"top":return d}}var p={enter:{duration:.2,ease:s.easeOut},exit:{duration:.1,ease:s.easeIn}},f=(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.enter}),y=(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.exit}),g={exit:{height:{duration:.2,ease:s.ease},opacity:{duration:.3,ease:s.ease}},enter:{height:{duration:.3,ease:s.ease},opacity:{duration:.4,ease:s.ease}}},x={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:i,delay:a})=>{return{...e&&{opacity:(r=t,null!=r&&parseInt(r.toString(),10)>0?1:0)},height:t,transitionEnd:null==i?void 0:i.exit,transition:(null==n?void 0:n.exit)??y(g.exit,a)};var r},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:i,delay:a})=>({...e&&{opacity:1},height:t,transitionEnd:null==i?void 0:i.enter,transition:(null==n?void 0:n.enter)??f(g.enter,a)})},h=(0,i.forwardRef)(((e,t)=>{const{in:n,unmountOnExit:s,animateOpacity:l=!0,startingHeight:c=0,endingHeight:d="auto",style:m,className:u,transition:p,transitionEnd:f,...y}=e,[g,h]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=setTimeout((()=>{h(!0)}));return()=>clearTimeout(e)}),[]),(e=>{const{condition:t,message:n}=e})({condition:Boolean(c>0&&s),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const v=parseFloat(c.toString())>0,E={startingHeight:c,endingHeight:d,animateOpacity:l,transition:g?p:{enter:{duration:0}},transitionEnd:{enter:null==f?void 0:f.enter,exit:s?null==f?void 0:f.exit:{...null==f?void 0:f.exit,display:v?"block":"none"}}},N=!s||n,_=n||s?"enter":"exit";return i.createElement(a.M,{initial:!1,custom:E},N&&i.createElement(r.E.div,{ref:t,...y,className:o("chakra-collapse",u),style:{overflow:"hidden",display:"block",...m},custom:E,variants:x,initial:!!s&&"exit",animate:_,exit:"exit"}))}));h.displayName="Collapse";var v={initial:"exit",animate:"enter",exit:"exit",variants:{enter:({transition:e,transitionEnd:t,delay:n}={})=>({opacity:1,transition:(null==e?void 0:e.enter)??f(p.enter,n),transitionEnd:null==t?void 0:t.enter}),exit:({transition:e,transitionEnd:t,delay:n}={})=>({opacity:0,transition:(null==e?void 0:e.exit)??y(p.exit,n),transitionEnd:null==t?void 0:t.exit})}};(0,i.forwardRef)((function(e,t){const{unmountOnExit:n,in:s,className:l,transition:c,transitionEnd:d,delay:m,...u}=e,p=s||n?"enter":"exit",f=!n||s&&n,y={transition:c,transitionEnd:d,delay:m};return i.createElement(a.M,{custom:y},f&&i.createElement(r.E.div,{ref:t,className:o("chakra-fade",l),custom:y,...v,animate:p,...u}))})).displayName="Fade";var E={initial:"exit",animate:"enter",exit:"exit",variants:{exit:({reverse:e,initialScale:t,transition:n,transitionEnd:i,delay:a})=>({opacity:0,...e?{scale:t,transitionEnd:null==i?void 0:i.exit}:{transitionEnd:{scale:t,...null==i?void 0:i.exit}},transition:(null==n?void 0:n.exit)??y(p.exit,a)}),enter:({transitionEnd:e,transition:t,delay:n})=>({opacity:1,scale:1,transition:(null==t?void 0:t.enter)??f(p.enter,n),transitionEnd:null==e?void 0:e.enter})}};(0,i.forwardRef)((function(e,t){const{unmountOnExit:n,in:s,reverse:l=!0,initialScale:c=.95,className:d,transition:m,transitionEnd:u,delay:p,...f}=e,y=!n||s&&n,g=s||n?"enter":"exit",x={initialScale:c,reverse:l,transition:m,transitionEnd:u,delay:p};return i.createElement(a.M,{custom:x},y&&i.createElement(r.E.div,{ref:t,className:o("chakra-offset-slide",d),...E,animate:g,custom:x,...f}))})).displayName="ScaleFade";var N={exit:{duration:.15,ease:s.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},_={exit:({direction:e,transition:t,transitionEnd:n,delay:i})=>{const{exit:a}=u({direction:e});return{...a,transition:(null==t?void 0:t.exit)??y(N.exit,i),transitionEnd:null==n?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:i})=>{const{enter:a}=u({direction:e});return{...a,transition:(null==n?void 0:n.enter)??f(N.enter,i),transitionEnd:null==t?void 0:t.enter}}};(0,i.forwardRef)((function(e,t){const{direction:n="right",style:s,unmountOnExit:l,in:c,className:d,transition:m,transitionEnd:p,delay:f,motionProps:y,...g}=e,x=u({direction:n}),h=Object.assign({position:"fixed"},x.position,s),v=!l||c&&l,E=c||l?"enter":"exit",N={transitionEnd:p,transition:m,direction:n,delay:f};return i.createElement(a.M,{custom:N},v&&i.createElement(r.E.div,{...g,ref:t,initial:"exit",className:o("chakra-slide",d),animate:E,exit:"exit",custom:N,variants:_,style:h,...y}))})).displayName="Slide";var b={initial:"initial",animate:"enter",exit:"exit",variants:{initial:({offsetX:e,offsetY:t,transition:n,transitionEnd:i,delay:a})=>({opacity:0,x:e,y:t,transition:(null==n?void 0:n.exit)??y(p.exit,a),transitionEnd:null==i?void 0:i.exit}),enter:({transition:e,transitionEnd:t,delay:n})=>({opacity:1,x:0,y:0,transition:(null==e?void 0:e.enter)??f(p.enter,n),transitionEnd:null==t?void 0:t.enter}),exit:({offsetY:e,offsetX:t,transition:n,transitionEnd:i,reverse:a,delay:r})=>{const o={x:t,y:e};return{opacity:0,transition:(null==n?void 0:n.exit)??y(p.exit,r),...a?{...o,transitionEnd:null==i?void 0:i.exit}:{transitionEnd:{...o,...null==i?void 0:i.exit}}}}}};(0,i.forwardRef)((function(e,t){const{unmountOnExit:n,in:s,reverse:l=!0,className:c,offsetX:d=0,offsetY:m=8,transition:u,transitionEnd:p,delay:f,...y}=e,g=!n||s&&n,x=s||n?"enter":"exit",h={offsetX:d,offsetY:m,reverse:l,transition:u,transitionEnd:p,delay:f};return i.createElement(a.M,{custom:h},g&&i.createElement(r.E.div,{ref:t,className:o("chakra-offset-slide",c),custom:h,...b,animate:x,...y}))})).displayName="SlideFade"}}]);