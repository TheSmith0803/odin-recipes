;/*FB_PKG_DELIM*/

__d("IGDSHoverCardContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);c=b;g["default"]=c}),98);
__d("IGDSHoverCardConstants",[],(function(a,b,c,d,e,f){"use strict";a=100;b=400;c=300;f.INTENTIONAL_HOVER_DELAY_MS=a;f.SHOW_DELAY_MS=b;f.HIDE_DELAY_MS=c}),66);
__d("useIGDSHoverCardHoverState",["IGDSHoverCardConstants","clearTimeout","emptyFunction","react","setTimeout","useMatchMedia"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useEffect,j=b.useRef,k=b.useState;function a(){var a=k(!1),b=a[0],e=a[1];a=k(!1);var f=a[0],g=a[1],l=j(),m=j(),n=j(),o=h(function(){c("clearTimeout")(l.current),c("clearTimeout")(m.current),c("clearTimeout")(n.current)},[]);i(function(){return function(){o()}},[o]);a=h(function(){o(),l.current=c("setTimeout")(function(){e(!0)},d("IGDSHoverCardConstants").INTENTIONAL_HOVER_DELAY_MS),n.current=c("setTimeout")(function(){g(!0)},d("IGDSHoverCardConstants").SHOW_DELAY_MS)},[o]);var p=h(function(){o(),m.current=c("setTimeout")(function(){e(!1),g(!1)},d("IGDSHoverCardConstants").HIDE_DELAY_MS)},[o]),q=c("useMatchMedia")("(hover: hover)");return!q?{handleMouseEnter:c("emptyFunction"),handleMouseLeave:c("emptyFunction"),isHoveringWithIntent:!1,isHoverCardVisible:!1}:{handleMouseEnter:a,handleMouseLeave:p,isHoveringWithIntent:b,isHoverCardVisible:f}}g.useIGDSHoverCardHoverState=a}),98);
__d("IGDSHoverCard.react",["BaseContextualLayer.react","ErrorBoundary.react","IGDSHoverCardContext","emptyFunction","react","stylex","useIGDSHoverCardHoverState"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useRef,k={rootInline:{display:"xt0psk2",$$css:!0},rootInlineBlock:{display:"x1rg5ohu",$$css:!0},rootBlock:{display:"x1lliihq",$$css:!0},contextualLayer:{animationDuration:"xfbpl4g",animationName:"x127lhb5",animationTimingFunction:"xa3vuyk",$$css:!0}};function l(a){switch(a){case"inline":return k.rootInline;case"inline-block":return k.rootInlineBlock;case"block":return k.rootBlock;default:return k.rootInlineBlock}}function a(a){var b=a.align;b=b===void 0?"start":b;var e=a.children,f=a.content,g=a.display;a=a.position;a=a===void 0?"below":a;var m=j(null),n=d("useIGDSHoverCardHoverState").useIGDSHoverCardHoverState(),o=n.handleMouseEnter,p=n.handleMouseLeave,q=n.isHoverCardVisible;n=n.isHoveringWithIntent;g=l(g);var r=i(function(){return{isHoverCardVisible:q}},[q]);return h.jsxs("div",{className:c("stylex")(g),onMouseEnter:o,onMouseLeave:p,ref:m,children:[e,n&&h.jsx(c("ErrorBoundary.react"),{fallback:c("emptyFunction").thatReturnsNull,children:h.jsx(c("BaseContextualLayer.react"),{align:b,contextRef:m,hidden:!q,position:a,xstyle:k.contextualLayer,children:h.jsx(c("IGDSHoverCardContext").Provider,{value:r,children:f})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDSHoverCardContent.react",["BaseContextualLayerOrientationContext","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={root:{backgroundColor:"xvbhtw8",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",boxShadow:"x1rj4ezl",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",position:"x1n2onr6",$$css:!0},rootAbove:{top:"x1v4kod4",$$css:!0},rootBelow:{top:"xfr5jun",$$css:!0},rootStart:{start:"x1mb8mph",$$css:!0},rootEnd:{start:"xr6gfmr",$$css:!0}};function a(a){var b=a.children;a=a.xstyle;var d=i(c("BaseContextualLayerOrientationContext"));d=d.position;return h.jsx("div",{className:c("stylex")([j.root,d==="above"&&j.rootAbove,d==="below"&&j.rootBelow,d==="start"&&j.rootStart,d==="end"&&j.rootEnd,a]),children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectInboxMobileRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisDirectInboxMobileRoot.react").__setRef("PolarisDirectInboxMobileRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisUserHoverCardButtonSection.react",["IGDSAppMessengerPanoOutlineIcon","IGDSButton.react","IGDSDirectPanoOutlineIcon","IGDSGlimmer.react","PolarisConfig","PolarisDirectStrings","PolarisFollowButtonContainer.react","PolarisGroupProfileUtils","PolarisNavigationStrings","PolarisRelationshipTypes","polarisRelationshipSelectors","react","usePolarisDirectFeatures","usePolarisDirectMessageClick","usePolarisHoverCardLogger","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={root:{paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",$$css:!0},glimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x90ne7k",width:"xh8yej3",$$css:!0},actionButtonsContainer:{display:"x78zum5",$$css:!0},messageButton:{flexGrow:"x1iyjqo2",marginEnd:"xw3qccf",maxWidth:"x1ncir08",$$css:!0},followButton:{flexGrow:"x1iyjqo2",marginStart:"xsgj6o6",maxWidth:"x1ncir08",$$css:!0}};function k(a){var b=a.triggerAnalyticsContext;a=a.userId;a=d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback("user",a,b,"editProfileClicked");return h.jsx(c("IGDSButton.react"),{fullWidth:!0,href:"/accounts/edit",label:d("PolarisNavigationStrings").PROFILE_EDIT_TEXT,onClick:a,variant:"secondary"})}k.displayName=k.name+" [from "+f.id+"]";function l(a){var b=a.triggerAnalyticsContext,e=a.userId;a=a.username;var f=c("usePolarisSelector")(function(a){return a.relationships.get(e)}),g=f!=null&&d("polarisRelationshipSelectors").followedByViewer(f);f=i(function(){return{followed:g}},[g]);b=d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback("user",e,b,"followButtonClicked",f);return h.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:"UNKNOWN__POLARIS_USER_HOVER_CARD_BUTTON_SECTION",fullWidth:!0,onClick:b,useFollowIcon:!0,userId:e,username:(f=a)!=null?f:""})}l.displayName=l.name+" [from "+f.id+"]";function m(a){a=a.userId;a=c("usePolarisDirectMessageClick")(a);var b=a[0];a=a[1];var e=c("usePolarisDirectFeatures")();e=e.hasMessagingRedesign;e=e?c("IGDSAppMessengerPanoOutlineIcon"):c("IGDSDirectPanoOutlineIcon");return h.jsx(c("IGDSButton.react"),{fullWidth:!0,icon:h.jsx(e,{alt:"",color:"web-always-white",size:20}),isLoading:a,label:d("PolarisDirectStrings").MESSAGE_STRING,onClick:b,variant:"primary"})}m.displayName=m.name+" [from "+f.id+"]";function n(a){var b=a.glimmerStartIndex,e=a.triggerAnalyticsContext,f=a.user,g=a.userId;a=c("usePolarisSelector")(function(a){return a.relationships.get(g)});var i=d("PolarisConfig").getViewerId();if(g===i)return h.jsx(k,{triggerAnalyticsContext:e,userId:g});if((a==null?void 0:(i=a.followedByViewer)==null?void 0:i.state)==null||f==null)return h.jsx(c("IGDSGlimmer.react"),{index:b,xstyle:j.glimmer});i=d("PolarisGroupProfileUtils").getIsUserGroupProfile(f);b=a.followedByViewer.state===d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING;return i||!b?h.jsx(l,{triggerAnalyticsContext:e,userId:g,username:f.username}):h.jsxs("div",{className:"x78zum5",children:[h.jsx("div",{className:"x1iyjqo2 xw3qccf x1ncir08",children:h.jsx(m,{userId:g})}),h.jsx("div",{className:"x1iyjqo2 xsgj6o6 x1ncir08",children:h.jsx(l,{triggerAnalyticsContext:e,userId:g,username:f.username})})]})}n.displayName=n.name+" [from "+f.id+"]";function a(a){var b=a.glimmerStartIndex,c=a.triggerAnalyticsContext,d=a.user;a=a.userId;return h.jsx("div",{className:"x1swvt13 x1pi30zi",children:h.jsx(n,{glimmerStartIndex:b,triggerAnalyticsContext:c,user:d,userId:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserHoverCardNoticeSection.react",["CometImage.react","IGDSText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.description,d=a.icon;a=a.title;return h.jsxs("div",{className:"x13zqm9e x1wzhzgj xrvj5dj x1v5loxz x1o2pa38 xyamay9 x1pi30zi x1l90r2v x1swvt13 x2b8uid",children:[h.jsx(c("CometImage.react"),{alt:"",height:48,src:d,width:48}),h.jsx(c("IGDSText.react"),{weight:"bold",children:a}),h.jsx(c("IGDSText.react"),{color:"secondaryText",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserHoverCardPostsSection.react",["ix","CometImage.react","FastLink","IGDSGlimmer.react","PolarisLinkBuilder","PolarisRelationshipTypes","PolarisUserCardStrings","PolarisUserHoverCardNoticeSection.react","polarisPostSelectors","react","usePolarisHoverCardLogger","usePolarisSelector"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={root:{alignItems:"x6s0dn4",display:"xrvj5dj",gridColumnGap:"x8l38fb",gridTemplateColumns:"x1rp53t7",$$css:!0},glimmer:{borderTopStartRadius:"x168nmei",borderTopEndRadius:"x13lgxp2",borderBottomEndRadius:"x5pf9jr",borderBottomStartRadius:"xo71vjh",height:"x1wkxgih",width:"xygnafs",$$css:!0},mediaContainer:{backgroundColor:"xnz67gz",display:"x78zum5",height:"x1wkxgih",":active_opacity":"x162lpob",$$css:!0}};function k(a){var b=a.postId,e=a.triggerAnalyticsContext;a=a.userId;a=d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback("user",a,e,"postGridPostLinkClicked");e=c("usePolarisSelector")(function(a){return d("polarisPostSelectors").getPostOrNullById(a,b)});var f=e==null?void 0:e.src;if(f==null||(e==null?void 0:e.code)==null)return i.jsx("div",{className:"xnz67gz x78zum5 x1wkxgih x162lpob"});e=d("PolarisLinkBuilder").buildMediaLink(e.code);return i.jsx(c("FastLink"),{className:"xnz67gz x78zum5 x1wkxgih x162lpob",href:e,onClick:a,children:i.jsx(c("CometImage.react"),{height:120,objectFit:"cover",src:f,width:120})})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=a.glimmerStartIndex,e=a.postIds,f=a.triggerAnalyticsContext,g=a.user,l=a.userId;a=c("usePolarisSelector")(function(a){return a.relationships.get(l)});if(g!=null&&g.isPrivate===!0&&a!=null&&a.followedByViewer.state!==d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING)return i.jsx(c("PolarisUserHoverCardNoticeSection.react"),{description:d("PolarisUserCardStrings").PRIVATE_ACCOUNT_SUBTEXT,icon:h("295615"),title:d("PolarisUserCardStrings").PRIVATE_ACCOUNT_TITLE});if(e==null||a==null||g==null)return i.jsxs("div",{className:"x6s0dn4 xrvj5dj x8l38fb x1rp53t7",children:[i.jsx(c("IGDSGlimmer.react"),{index:b,xstyle:j.glimmer}),i.jsx(c("IGDSGlimmer.react"),{index:b+1,xstyle:j.glimmer}),i.jsx(c("IGDSGlimmer.react"),{index:b+2,xstyle:j.glimmer})]});return e.length===0?g.username==null?null:i.jsx(c("PolarisUserHoverCardNoticeSection.react"),{description:d("PolarisUserCardStrings").noPostsSubtext(g.username),icon:h("295614"),title:d("PolarisUserCardStrings").NO_POSTS_TITLE}):i.jsx("div",{className:"x6s0dn4 xrvj5dj x8l38fb x1rp53t7",children:e.map(function(a){return i.jsx(k,{postId:a,triggerAnalyticsContext:f,userId:l},a)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserHoverCardUserInfoSection.react",["FastLink","IGDSGlimmer.react","IGDSText.react","PolarisIGCoreVerifiedBadge","PolarisUserAvatarWithStories.react","isStringNullOrWhitespaceOnly","react","usePolarisHoverCardLogger","usePolarisTrackingDataProfileURLParams"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{alignItems:"x6s0dn4",display:"xrvj5dj",gridColumnGap:"xjv0b96",gridTemplateColumns:"x1wdtju6",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",$$css:!0},profilePictureGlimmer:{borderTopStartRadius:"xv4rd2r",borderTopEndRadius:"x19baegm",borderBottomEndRadius:"x1vswc8w",borderBottomStartRadius:"x1jq0agw",height:"xnnlda6",width:"x15yg21f",$$css:!0},usernameGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"xlup9mm",width:"xja02kk",$$css:!0},fullNameGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"xlup9mm",marginTop:"x1gslohp",width:"xzjbwwf",$$css:!0},username:{alignItems:"x6s0dn4",display:"x78zum5",height:"xmix8c7",$$css:!0},verifiedBadge:{marginStart:"xsgj6o6",$$css:!0},fullName:{height:"xmix8c7",marginTop:"x1gslohp",width:"x1rva8in",$$css:!0}};function a(a){var b=a.glimmerStartIndex,e=a.triggerAnalyticsContext,f=a.user;a=a.userId;var g=f==null?void 0:f.fullName,j=f==null?void 0:f.username,k=f==null?void 0:f.isVerified,l=f==null?void 0:f.profilePictureUrl;a=d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback("user",a,e,"profileLinkClicked");e=c("usePolarisTrackingDataProfileURLParams")();return h.jsxs("div",{className:"x6s0dn4 xrvj5dj xjv0b96 x1wdtju6 x1swvt13 x1pi30zi",children:[h.jsx("div",{children:l==null?h.jsx(c("IGDSGlimmer.react"),{index:b,xstyle:i.profilePictureGlimmer}):h.jsx(c("PolarisUserAvatarWithStories.react"),{isClickable:!0,profilePictureUrl:l,size:56,storyEntrypoint:"user_hover_card",userId:f==null?void 0:f.id,username:f==null?void 0:f.username})}),h.jsx("div",{children:h.jsx("div",{children:j==null?h.jsxs(h.Fragment,{children:[h.jsx(c("IGDSGlimmer.react"),{index:b+1,xstyle:i.usernameGlimmer}),h.jsx(c("IGDSGlimmer.react"),{index:b+2,xstyle:i.fullNameGlimmer})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"x6s0dn4 x78zum5 xmix8c7",children:[h.jsx(c("FastLink"),{href:"/"+j,onClick:a,params:e,children:h.jsx(c("IGDSText.react").LabelEmphasized,{children:j})}),k===!0&&h.jsx("span",{className:"xsgj6o6",children:h.jsx(c("PolarisIGCoreVerifiedBadge"),{})})]}),c("isStringNullOrWhitespaceOnly")(g)?null:h.jsx("div",{className:"xmix8c7 x1gslohp x1rva8in",children:h.jsx(c("IGDSText.react"),{color:"secondaryText",display:"truncated",maxLines:1,children:g})})]})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserHoverCardContent.react",["IGDSHoverCardContext","PolarisProfilePostsActions","PolarisProfilePostsSelectors","PolarisReactRedux","PolarisRelationshipActionGetRelationshipInfoWithViewerByUserId","PolarisUserActionGetUserInfo","PolarisUserHoverCardButtonSection.react","PolarisUserHoverCardPostsSection.react","PolarisUserHoverCardUserInfoSection.react","cr:5727","nullthrows","polarisUserSelectors","qex","react","usePolarisHoverCardLogger","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useContext,j=e.useEffect,k=e.useRef;function a(a){var e,f=a.triggerAnalyticsContext,g=a.userId;a=k(null);var l=c("nullthrows")(i(c("IGDSHoverCardContext")));l=l.isHoverCardVisible;var m=c("usePolarisSelector")(function(a){return d("polarisUserSelectors").maybeGetUserById(a,g)}),n=d("PolarisReactRedux").useDispatch(),o=c("usePolarisSelector")(function(a){return d("PolarisProfilePostsSelectors").getUserHoverCardProfilePostsForUserId(a,g)});o=o.postIds;e=(e=c("qex")._("740"))!=null?e:!1;var p=o==null,q=!e||m==null||m.isVerified==null||m.profilePictureUrl==null||m.username==null,r=c("usePolarisSelector")(function(a){return a.relationships.get(g)}),s=!e||(r==null?void 0:r.followedByViewer.state)==null;j(function(){p&&n(d("PolarisProfilePostsActions").requestProfilePostsV2(g))},[n,p,g]);j(function(){q&&n(d("PolarisUserActionGetUserInfo").getUserInfo(g))},[n,q,g]);j(function(){s&&n(d("PolarisRelationshipActionGetRelationshipInfoWithViewerByUserId").getRelationshipInfoWithViewerByUserId(g))},[n,s,g]);d("usePolarisHoverCardLogger").useHoverCardLoadedLogger(a,f,l,"user",g);return h.jsxs("div",{className:"x6s0dn4 xrvj5dj x19g8pj0 x1dh5ka xyamay9 x1l90r2v x1mu97ne",ref:a,children:[h.jsx("div",{children:h.jsx(c("PolarisUserHoverCardUserInfoSection.react"),{glimmerStartIndex:0,triggerAnalyticsContext:f,user:m,userId:g})}),h.jsx("div",{children:h.jsx(b("cr:5727"),{glimmerStartIndex:3,user:m,userId:g})}),h.jsx("div",{children:h.jsx(c("PolarisUserHoverCardPostsSection.react"),{glimmerStartIndex:6,postIds:o,triggerAnalyticsContext:f,user:m,userId:g})}),h.jsx("div",{children:h.jsx(c("PolarisUserHoverCardButtonSection.react"),{glimmerStartIndex:9,triggerAnalyticsContext:f,user:m,userId:g})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserHoverCardImpl.react",["IGDSHoverCard.react","IGDSHoverCardContent.react","PolarisUserHoverCardContent.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={content:{paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",$$css:!0}};function a(a){var b=a.children,d=a.display,e=a.triggerAnalyticsContext;a=a.userId;return h.jsx(c("IGDSHoverCard.react"),{content:h.jsx(c("IGDSHoverCardContent.react"),{xstyle:i.content,children:h.jsx(c("PolarisUserHoverCardContent.react"),{triggerAnalyticsContext:e,userId:a})}),display:d,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserHoverCardStatisticsSection.react",["fbt","IGDSGlimmer.react","IGDSText.react","PolarisBigNumber.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={root:{alignItems:"x6s0dn4",display:"xrvj5dj",gridColumnGap:"x8l38fb",gridTemplateColumns:"x1rp53t7",$$css:!0},statistic:{paddingTop:"xexx8yu",paddingEnd:"x1sxyh0",paddingBottom:"x18d9i69",paddingStart:"xurb0ha",textAlign:"x2b8uid",$$css:!0},statisticCountGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"x1v9usgg",marginStart:"x1gryazu",marginEnd:"xkrivgy",width:"x100vrsf",$$css:!0},statisticLabelGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"x1v9usgg",marginStart:"x1gryazu",marginEnd:"xkrivgy",marginTop:"x1gslohp",width:"x1fu8urw",$$css:!0},statisticLabel:{marginTop:"x1gslohp",$$css:!0}};function k(a){var b=a.count,d=a.glimmerStartIndex;a=a.label;return b==null?i.jsxs("div",{className:"xexx8yu x1sxyh0 x18d9i69 xurb0ha x2b8uid",children:[i.jsx(c("IGDSGlimmer.react"),{index:d,xstyle:j.statisticCountGlimmer}),i.jsx(c("IGDSGlimmer.react"),{index:d+1,xstyle:j.statisticLabelGlimmer})]}):i.jsxs("div",{className:"xexx8yu x1sxyh0 x18d9i69 xurb0ha x2b8uid",children:[i.jsx("div",{children:i.jsx(c("IGDSText.react"),{weight:"bold",children:i.jsx(c("PolarisBigNumber.react"),{shortenNumber:!0,value:b})})}),i.jsx("div",{className:"x1gslohp",children:i.jsx(c("IGDSText.react"),{children:a})})]})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=a.glimmerStartIndex;a=a.user;a=a==null?void 0:a.counts;var c=a==null?void 0:a.media,d=a==null?void 0:a.followedBy;a=a==null?void 0:a.follows;return i.jsxs("div",{className:"x6s0dn4 xrvj5dj x8l38fb x1rp53t7",children:[i.jsx(k,{count:c,glimmerStartIndex:b,label:h._({"*":"posts","_1":"post"},[h._plural((c=c)!=null?c:0)])}),i.jsx(k,{count:d,glimmerStartIndex:b+1,label:h._({"*":"followers","_1":"follower"},[h._plural((c=d)!=null?c:0)])}),i.jsx(k,{count:a,glimmerStartIndex:b+2,label:h._({"*":"following"},[h._plural((d=a)!=null?d:0)])})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMoreMenuConfig.react",["fbt","PolarisAuthStrings","PolarisBugReportContext.react","PolarisConfig","PolarisDarkModeQEUtils","PolarisDevtoolsContext.react","PolarisHasAccountSwitching","PolarisIGCoreClockDottedPanoOutline24Icon.react","PolarisIGCoreMoonIcon","PolarisIGCoreReportPanoOutline24Icon","PolarisIGCoreSavePanoOutlineIcon","PolarisIGCoreSettingsPanoOutlineIcon","PolarisIGTheme.react","PolarisIgBloksSettingsFalcoEvent","PolarisLinkBuilder","PolarisLogger","PolarisLogoutActions","PolarisNavigationActions","PolarisNavigationStrings","PolarisODS","PolarisReactRedux","PolarisRoutes","PolarisSavedCollectionStrings","PolarisThemeStrings","cr:3777","cr:3791","cr:3792","emptyFunction","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useContext,k="desktop_nav_menu",l=(e=b("cr:3777"))!=null?e:c("emptyFunction"),m=(f=b("cr:3791"))!=null?f:c("emptyFunction"),n=(e=b("cr:3792"))!=null?e:c("emptyFunction");function a(a){var b=a.currentPath,e=a.isVisible,f=a.setShowLoggingOutDialog,g=j(d("PolarisDevtoolsContext.react").PolarisDevtoolsContext),o=j(d("PolarisBugReportContext.react").PolarisBugReportContext),p=d("PolarisReactRedux").useDispatch(),q=d("PolarisIGTheme.react").useTheme();a=function(){q.toggleTheme(),c("PolarisODS").incr("web.nav.toggle_theme_click"),d("PolarisLogger").logAction("appThemeToggled")};var r=function(){var a={event_name:"settings_entered",entrypoint:"settings"};c("PolarisIgBloksSettingsFalcoEvent").log(function(){return a})},s=function(){var a={event_name:"your_activity_entered",entrypoint:"your_activity"};c("PolarisIgBloksSettingsFalcoEvent").log(function(){return a})};e=e&&d("PolarisHasAccountSwitching").hasAccountSwitching();var t=function(){u()},u=function(){f(!0),p(d("PolarisLogoutActions").logout({viewerId:d("PolarisConfig").getViewerId(),source:k}))},v=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer);v=(v=v==null?void 0:v.username)!=null?v:"";var w=24,x=l(),y=n(),z=m();r=[{actionName:"userMenuSettingsClick",bodyHref:d("PolarisRoutes").PROFILE_EDIT_PATH,icon:i.jsx(c("PolarisIGCoreSettingsPanoOutlineIcon"),{alt:d("PolarisNavigationStrings").SETTINGS_TEXT,size:w}),onClick:r,title:d("PolarisNavigationStrings").SETTINGS_TEXT},{bodyHref:d("PolarisRoutes").YOUR_ACTIVITY_INTERACTIONS_PATH,icon:i.jsx(c("PolarisIGCoreClockDottedPanoOutline24Icon.react"),{alt:d("PolarisNavigationStrings").YOUR_ACTIVITY_TEXT,size:w}),onClick:s,title:d("PolarisNavigationStrings").YOUR_ACTIVITY_TEXT},{actionName:"userMenuSavedClick",bodyHref:d("PolarisLinkBuilder").buildUserPathLink(v,"saved"),icon:i.jsx(c("PolarisIGCoreSavePanoOutlineIcon"),{alt:d("PolarisSavedCollectionStrings").SAVED_TEXT,size:w}),onClick:function(){},title:d("PolarisSavedCollectionStrings").SAVED_TEXT},x,z,y,d("PolarisDarkModeQEUtils").hasDarkModeToggleEnabled()?{icon:i.jsx(c("PolarisIGCoreMoonIcon"),{alt:h._("Theme icon"),size:w}),onClick:a,title:d("PolarisThemeStrings").SWITCH_APPEARANCE_TEXT}:null,(o==null?void 0:o.canUseBugReport)?{actionName:"userMenuFlytrapClick",icon:i.jsx(c("PolarisIGCoreReportPanoOutline24Icon"),{alt:d("PolarisNavigationStrings").REPORT_PROBLEM_TEXT,size:w}),onClick:function(){o==null?void 0:o.openModal("desktop_nav_menu")},title:d("PolarisNavigationStrings").REPORT_PROBLEM_TEXT}:null,e?{actionName:"userMenuAccountSwitcherClick","data-testid":"more-menu-switch-accounts",onClick:function(){p(d("PolarisNavigationActions").openAccountSwitcher({next:b,source:k}))},title:d("PolarisAuthStrings").SWITCH_ACCOUNTS,newSection:!0}:null,{actionName:"userMenuLogOutClick","data-testid":"more-menu-log-out",onClick:t,title:d("PolarisNavigationStrings").LOG_OUT_SENTENCE_CASE_TEXT,newSection:!e},(g==null?void 0:g.canUseDevTools)?{onClick:function(){return g==null?void 0:g.setShowDevtoolsModal(!0)},title:h._("[meta-only] Dev tools"),newSection:!0}:null];s=r.filter(Boolean);return s}g.PolarisMoreMenuConfig=a}),98);
__d("PolarisMoreNavMenu.react",["IGRouter","PolarisConfig","PolarisLoggingOutDialog.react","PolarisLogoutActions","PolarisLogoutModal.react","PolarisMoreMenuConfig.react","PolarisNavigationPopover.react","PolarisReactRedux","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j="desktop_nav_menu";function a(a){var b=a.history,e=a.isVisible;a=a.onClose;a=a===void 0?c("emptyFunction"):a;var f=i(!1),g=f[0],k=f[1];f=i(!1);var l=f[0],m=f[1],n=d("PolarisReactRedux").useDispatch();f=function(){m(!0),n(d("PolarisLogoutActions").logout({viewerId:d("PolarisConfig").getViewerId(),source:j}))};b=d("PolarisMoreMenuConfig.react").PolarisMoreMenuConfig({currentPath:b.location.pathname,isVisible:e,setShowLoggingOutDialog:m});return h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisNavigationPopover.react"),{isVisible:e,items:b,onClose:a,popoverStyle:{bottom:0,width:238}}),g&&h.jsx(c("PolarisLogoutModal.react"),{onCloseConfirm:f,onCloseModal:function(){return k(!1)}}),l&&h.jsx(c("PolarisLoggingOutDialog.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";b=d("IGRouter").withIGRouter(a);g["default"]=b}),98);