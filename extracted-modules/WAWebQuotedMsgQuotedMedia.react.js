__d("WAWebQuotedMsgQuotedMedia.react", [
    "WAWebMessagePluginQuotedMsgThumbnailIcon",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebQuotedMsgQuotedMedia.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "msg",
        "rootMsg"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_source = e.source;
        const r = `url(data:image/jpeg;base64,${e_source})`;
        let a;
        if (t[0] !== r) {
            a = {
                backgroundImage: r
            };
            t[0] = r;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = "xh8yej3 x5yr21d x1xsqp64 x18d0r48";
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== a) {
            l = <div data-testid="msgImage" style={a} className={i}/>;
            t[3] = a;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function m(t) {
        const n = o("react-compiler-runtime").c(10);
        let r;
        let a;
        let i;
        if (n[0] !== t) {
            r = t.msg;
            i = t.rootMsg;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
        }
        let t_msg = t.msg;
        if (i != null && i.selectedCarouselCardIndex != null && r.carouselCards != null) {
            if (n[4] !== r.carouselCards || n[5] !== i.selectedCarouselCardIndex) {
                const s = r.carouselCards.at(i.selectedCarouselCardIndex);
                if (s != null) {
                    t_msg = s.unsafe();
                }
                n[4] = r.carouselCards;
                n[5] = i.selectedCarouselCardIndex;
                n[6] = t_msg;
            } else {
                t_msg = n[6];
            }
        }
        if (o("WAWebMsgCollection").MsgCollection.get(t_msg.id) == null) {
            return null;
        }
        let u;
        if (n[7] !== a || n[8] !== t_msg) {
            u = <P2Component {...babelHelpers.extends({
                msg: t_msg
            }, a)}/>;
            n[7] = a;
            n[8] = t_msg;
            n[9] = u;
        } else {
            u = n[9];
        }
        return u;
    }
    function P2Component(e) {
        const t = o("react-compiler-runtime").c(15);
        const { msg, theme } = e;
        if (msg.isViewOnce) {
            return null;
        }
        let i;
        if (t[0] !== msg || t[1] !== theme) {
            i = _(msg.type, msg.subtype, msg, theme);
            t[0] = msg;
            t[1] = theme;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        if (l == null) {
            return null;
        }
        const u = theme === "composeBox";
        const d = theme === "status";
        const m = msg.type === o("WAWebMsgType").MSG_TYPE.PAYMENT;
        let p;
        if (t[3] !== msg.type) {
            p = (s || (s = r("stylex"))).props(o("WAWebQuotedMsgQuotedMedia.stylex").styles.imageWrapper, msg.type === o("WAWebMsgType").MSG_TYPE.PTV && o("WAWebQuotedMsgQuotedMedia.stylex").styles.imageWrapperPtvMsg);
            t[3] = msg.type;
            t[4] = p;
        } else {
            p = t[4];
        }
        let f;
        if (t[5] !== u || t[6] !== m || t[7] !== d) {
            f = (s || (s = r("stylex"))).props(o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImage, u && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImageComposeBox, d && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImageStatus, m && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImagePayment);
            t[5] = u;
            t[6] = m;
            t[7] = d;
            t[8] = f;
        } else {
            f = t[8];
        }
        let g;
        if (t[9] !== f || t[10] !== l) {
            g = <div {...babelHelpers.extends({}, f, {
                children: l
            })}/>;
            t[9] = f;
            t[10] = l;
            t[11] = g;
        } else {
            g = t[11];
        }
        let h;
        if (t[12] !== p || t[13] !== g) {
            h = <div {...babelHelpers.extends({}, p, {
                children: g
            })}/>;
            t[12] = p;
            t[13] = g;
            t[14] = h;
        } else {
            h = t[14];
        }
        return h;
    }
    function _(e, t, n, r) {
        const A = o("WAWebMessagePluginQuotedMsgThumbnailIcon").quotedMsgThumbailIconComponent(e, t);
        if (A == null) {
            return null;
        }
        return <A msg={n} theme={r}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.Base64BackgroundImage = d;
    l.QuotedMediaUnsafe = m;
}, 98);