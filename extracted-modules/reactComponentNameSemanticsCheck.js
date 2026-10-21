__d("reactComponentNameSemanticsCheck", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "Animated(div)",
        "Box",
        "Child",
        "Cell",
        "CometImage",
        "ComponentLoader",
        "Div",
        "DirectBadgeIconNoMemo",
        "FocusWithinHandler",
        "LegacyHidden",
        "Path",
        "SearchCometGlobalTypeaheadWithBackButtonFocus",
        "StrictMode",
        "Svg",
        "WebView",
        "GeoBaseText",
        "FocusGroup",
        "FocusTable",
        "MDSText",
        "CometAppViewStack",
        "CometImageFromIXValue",
        "CometPrerenderer",
        "CometOnOutsideClick",
        "CometToast",
        "PolarisNavigationIcons",
        /CometHideableComponent/,
        /LazyLoadEntryPointContainer/,
        /relay-hooks/,
        /CommandWrapper/,
        /ScrollView/,
        /Layout/,
        /Base$/,
        /Boundary$/,
        /LoadingState$/,
        /FocusManager/,
        /Column$/,
        /Strategy$/,
        /Typeahead.*Strategy/,
        /CometList_/,
        /CometSSR/,
        /IGCore/,
        /^ActorHovercard/,
        /^Base/,
        /^CometHero/,
        /^FDS/,
        /^Hero/,
        /^IGDS/,
        /^XDS/,
        /^deferredLoadComponent/,
        /^html\./,
        /^t[d]$/,
        /Container$/,
        /Context$/,
        /Entities$/,
        /Factory$/,
        /Focus.*Region/,
        /Grid$/,
        /HideLayer/,
        /Icon$/,
        /Impl$/,
        /InputButton$/,
        /Item$/,
        /ItemSelectable/,
        /KeyCommands$/,
        /Link$/,
        /ListCell/,
        /Logger$/,
        /MitigationNode$/,
        /OnEscape/,
        /Overlay$/,
        /OverlayInternal$/,
        /Placeholder$/,
        /Pressable/,
        /Provider$/,
        /Provider_/,
        /ReactWarnings/,
        /Ref$/,
        /Refs$/,
        /Relay$/,
        /Renderer$/,
        /Resolver$/,
        /Root$/,
        /Routes$/,
        /Row$/,
        /SVG/,
        /ScrollableArea/,
        /Theme$/,
        /Tooltip/,
        /Trigger$/,
        /Typeahead/,
        /Virtualization$/,
        /Wrapper$/,
        /\.svg$/
    ];
    const l = new Set(Array.from(e).filter((e)=>typeof e === "string"));
    const s = Array.from(e).filter((e)=>e instanceof RegExp);
    const u = [
        "ChatTab",
        "Comment",
        "Composer",
        "Feed",
        "Story",
        "Search",
        "Reel",
        "Profile",
        "Message"
    ];
    const c = new Set(Array.from(u).filter((e)=>typeof e === "string"));
    const d = Array.from(u).filter((e)=>e instanceof RegExp);
    function m(e) {
        let t = e;
        if (e.includes(" [")) {
            t = e.split(" [")[0];
        }
        t = t.trim();
        if (t.length <= 2) {
            return true;
        }
        if (c.has(t) || d.some((e)=>e.test(t))) {
            return false;
        }
        return l.has(t) || s.some((e)=>e.test(t));
    }
    const p = [
        "MessageList",
        "MWXText",
        "MDSText",
        "MWChatContact",
        "MWLSChatTabHeader"
    ];
    const _ = new Set(Array.from(p).filter((e)=>typeof e === "string"));
    const f = Array.from(p).filter((e)=>e instanceof RegExp);
    function g(e) {
        const t = e.trim();
        return _.has(t) || f.some((e)=>e.test(t));
    }
    i.isReactComponentNameMeaningless = m;
    i.isReactComponentTextBlocked = g;
}, 66);