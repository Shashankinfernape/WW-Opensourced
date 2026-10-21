__d("WAWebContentPlaceholder.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        main: {
            fontSize: "x1f6kntn",
            fontWeight: "xk50ysn",
            lineHeight: "xdod15v",
            color: "x14ug900",
            $$css: true
        },
        mdChatSearchList: {
            justifyContent: "xlqzeqv",
            paddingTop: "x1xy6bms",
            paddingInlineEnd: "xv54qhq",
            paddingBottom: "xsag5q8",
            paddingInlineStart: "xf7dkkf",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        mdChatSearchListMain: {
            fontSize: "x1f6kntn",
            fontWeight: "xo1l8bm",
            lineHeight: "x1fc57z9",
            color: "xhslqc4",
            textAlign: "x2b8uid",
            $$css: true
        },
        themeReportedMsgMainComponentColor: {
            color: "xhslqc4",
            $$css: true
        },
        starredMsgsDrawerEmpty: {
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    function d(theme) {
        switch(theme){
            case "ai-thread-list":
                return "xlqzeqv xz9dl7a xv54qhq xsag5q8 xf7dkkf x178xt8z x13fuv20 xx42vgk";
            case "list":
                return "xlqzeqv xz9dl7a x1q3ajuy xsag5q8 xbmws1g x178xt8z x13fuv20 xx42vgk";
            case "md-chat-search-list":
                return "xlqzeqv x1xy6bms xv54qhq xsag5q8 xf7dkkf x178xt8z x13fuv20 xx42vgk";
            case "reported-msg":
                return "x1yrsyyn x11lfxj5 xjkvuk6 x135b78x x972fbf";
            case "starred-msgs-drawer-empty":
                return (e || (e = r("stylex")))([
                    c.starredMsgsDrawerEmpty,
                    c.mdChatSearchList
                ]);
            case "media-gallery-follow":
                return "x2b8uid x1xrf6ya xde1mab xscbp6u x1iw51ew";
            case "media-gallery-footer":
                return "x2b8uid x178xt8z x13fuv20 xx42vgk xv8gdss xgb8hzy";
        }
    }
    function m(theme) {
        switch(theme){
            case "ai-thread-list":
            case "md-chat-search-list":
            case "starred-msgs-drawer-empty":
                return (e || (e = r("stylex")))([
                    c.main,
                    c.mdChatSearchListMain
                ]);
            case "reported-msg":
                return (e || (e = r("stylex")))([
                    c.main,
                    c.themeReportedMsgMainComponentColor
                ]);
            case "list":
                return (e || (e = r("stylex")))([
                    c.main
                ]);
            case "media-gallery-footer":
                return (e || (e = r("stylex")))([
                    c.main
                ]);
            case "media-gallery-follow":
                return (e || (e = r("stylex")))([
                    c.main
                ]);
        }
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(17);
        const { children, hideBorder, secondary, theme } = e;
        const l = hideBorder === undefined ? false : hideBorder;
        let s;
        if (t[0] !== secondary) {
            s = secondary != null ? <div className="x1nxh6w3 x17fgdl5 xhslqc4">{secondary}</div> : null;
            t[0] = secondary;
            t[1] = s;
        } else {
            s = t[1];
        }
        const c = s;
        let p;
        if (t[2] !== l || t[3] !== theme) {
            p = theme === "media-gallery-footer" && l ? "" : d(theme);
            t[2] = l;
            t[3] = theme;
            t[4] = p;
        } else {
            p = t[4];
        }
        const _ = p;
        let f;
        if (t[5] !== theme) {
            f = m(theme);
            t[5] = theme;
            t[6] = f;
        } else {
            f = t[6];
        }
        const g = f;
        let h;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "xkz0k9k x6ikm8r x10wlt62"
            };
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== children || t[9] !== g) {
            y = <div className={g}>{children}</div>;
            t[8] = children;
            t[9] = g;
            t[10] = y;
        } else {
            y = t[10];
        }
        let C;
        if (t[11] !== c || t[12] !== y) {
            C = <div {...babelHelpers.extends({}, h, {
                children: [
                    y,
                    c
                ]
            })}/>;
            t[11] = c;
            t[12] = y;
            t[13] = C;
        } else {
            C = t[13];
        }
        let b;
        if (t[14] !== _ || t[15] !== C) {
            b = <div className={_}>{C}</div>;
            t[14] = _;
            t[15] = C;
            t[16] = b;
        } else {
            b = t[16];
        }
        return b;
    }
    l.default = p;
}, 98);