__d("WAWebMessageListGenerateMsgListRows", [
    "WALogger",
    "WAThrottle",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMaybeInsertHistoryBundleInfo",
    "WAWebMessageListAlbums",
    "WAWebMessageListDayOfMsg",
    "WAWebMsgGetters",
    "WAWebThreadMsgUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "type"
    ];
    const u = 10;
    function c(e, t) {
        return t != null && e != null && e.id.equals(t.id);
    }
    function d(e, t) {
        return t.botResponseTargetId === e.botResponseTargetId;
    }
    function m(e, t, n, a, unreadCount, l) {
        const s = [];
        let m = 0;
        let h;
        for(m = 0; !h && m < t.length; m++){
            h = t[m];
        }
        m--;
        let y = false;
        let C = false;
        let b = h ? r("WAWebMessageListDayOfMsg")(h) : 0;
        let v = 0;
        let S = m;
        let R = null;
        let L = null;
        while(h){
            const E = h;
            if (!C) {
                s.push({
                    type: "date",
                    msg: E,
                    count: v++
                });
            }
            if (E === a && e.unread) {
                s.push({
                    type: "unread",
                    unreadCount
                });
            }
            const k = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(E.unsafe());
            const I = R != null && R.equals(k) || k != null && L != null && k.key.equals(L);
            R = k;
            L = E.id;
            for(var T, D = m + 1; !T && D < t.length; D++){
                T = t[D];
            }
            let x;
            let $;
            let P;
            const N = [];
            const M = [];
            let w = false;
            let A = false;
            let F;
            let isFocusedAlbum = false;
            let focusedMsgIndex = null;
            const W = o("WAWebFrontendMsgGetters").getAsGroupedSticker(E.unsafe());
            if (W && !_(E, l)) {
                N.push(W);
                isFocusedAlbum = c(E, n);
                focusedMsgIndex = 0;
                S = m + 1;
                const q = t[S];
                const U = q != null ? o("WAWebFrontendMsgGetters").getAsGroupedSticker(q.unsafe()) : null;
                if (U && o("WAWebMessageListAlbums").canBeGroupedAsAlbum(E, q) && q !== a && !_(q, l)) {
                    N.push(U);
                    T = t[S + 1];
                    A = true;
                    F = true;
                    if (c(q, n)) {
                        isFocusedAlbum = true;
                        focusedMsgIndex = 1;
                    }
                }
            }
            let V = false;
            const H = o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(E.unsafe());
            if (H) {
                V = c(E, n);
                M.push(H);
                let G = h;
                let z;
                for(S = m; S < t.length - 1 && M.length < u; S++){
                    G = t[S];
                    z = t[S + 1];
                    const j = z != null ? o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(z.unsafe()) : null;
                    if (j && d(G, z)) {
                        M.push(z);
                        if (c(z, n)) {
                            V = true;
                        }
                    } else {
                        break;
                    }
                }
                if (M.length >= 1) {
                    w = true;
                    T = t[S + 1];
                }
            }
            if (w) {
                s.push({
                    type: "botPluginCarousel",
                    botPluginCarouselId: M[0].id?.id,
                    msgs: M,
                    isFocused: V
                });
                m = S + 1;
                h = t[m];
                y = false;
                continue;
            }
            const Q = o("WAWebFrontendMsgGetters").getAsAlbumAsset(E.unsafe());
            if (Q && !_(E, l)) {
                N.push(Q);
                let X = h;
                let Y;
                isFocusedAlbum = c(h, n);
                for(S = m; S < t.length - 1 && N.length < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE; S++){
                    X = t[S];
                    Y = t[S + 1];
                    const J = Y != null ? o("WAWebFrontendMsgGetters").getAsAlbumAsset(Y.unsafe()) : null;
                    if (J && o("WAWebMessageListAlbums").canBeGroupedAsAlbum(X, Y) && Y !== a && !_(Y, l)) {
                        N.push(J);
                        if (c(Y, n)) {
                            isFocusedAlbum = true;
                        }
                    } else {
                        break;
                    }
                }
                if (N.length >= o("WAWebMessageListAlbums").ALBUM_MIN_SIZE) {
                    A = true;
                    F = false;
                    T = t[S + 1];
                }
            }
            if (T) {
                const Z = T;
                P = r("WAWebMessageListDayOfMsg")(T);
                $ = P === b;
                x = $ && o("WAWebMessageListAlbums").canBeGroupedWithNext(E, Z) && T !== a;
                if (!$) {
                    g(b, P);
                }
            } else {
                x = false;
                $ = false;
                P = 0;
            }
            if (A) {
                let ee;
                if (F === true) {
                    ee = N.reduce((acc, item)=>`${acc}-${item.id.id}`, "grouped-sticker-");
                } else {
                    ee = f(N);
                }
                s.push({
                    type: "album",
                    msgs: N,
                    albumId: ee,
                    groupedWithPrev: y,
                    groupedWithNext: x,
                    isFocusedAlbum,
                    focusedMsgIndex
                });
                const te = N[N.length - 1];
                const ne = r("WAWebMaybeInsertHistoryBundleInfo")(te, T);
                if (ne != null) {
                    s.push(ne);
                }
                m = S + 1;
                h = t[m];
                y = x;
                C = $;
                b = P;
                continue;
            }
            s.push({
                type: "msg",
                msg: E,
                isFocused: c(E, n),
                groupedWithPrev: y,
                groupedWithNext: x,
                isFollowUpReply: I
            });
            const re = r("WAWebMaybeInsertHistoryBundleInfo")(E, T);
            if (re != null) {
                s.push(re);
            }
            m++;
            y = x;
            C = $;
            b = P;
            h = T;
        }
        return p(s, e);
    }
    function p(e, { botPluginCarousel, date, historyBundleInfo, msgGroup, unread }) {
        const c = [];
        let d = [];
        const m = ()=>{
            if (d.length > 0) {
                c.push(msgGroup(d));
                d = [];
            }
        };
        for (const p of e){
            if (p.type !== "msg" && p.type !== "album") {
                m();
            }
            switch(p.type){
                case "msg":
                case "album":
                    d.push(p);
                    if (!p.groupedWithNext) {
                        m();
                    }
                    break;
                case "date":
                    {
                        c.push(date(p.msg, p.count, o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(p.msg) != null));
                        break;
                    }
                case "unread":
                    c.push(unread(p.unreadCount));
                    break;
                case "botPluginCarousel":
                    {
                        const _ = p.type;
                        const f = babelHelpers.objectWithoutPropertiesLoose(p, s);
                        c.push(botPluginCarousel(f));
                    }
                    break;
                case "historyBundleInfo":
                    c.push(historyBundleInfo(p.authorName, p.bundleKey));
                    break;
                default:
                    const g = p.type;
                    throw r("err")(`Invalid message list row type ${p.type}`);
            }
        }
        return c;
    }
    function _(e, t) {
        if (t == null) {
            return true;
        }
        return e.t > t.t;
    }
    function f(e) {
        const e_length = e.length;
        const n = e[0] ? e[0].id.id : "";
        const r = e[e_length - 1] ? e[e_length - 1].id.id : "";
        return `album-${n}-${r}-${e_length}`;
    }
    function g(e, t) {
        if (!(e <= t)) {
            const n = Math.floor((e - t) / o("WATimeUtils").DAY_SECONDS);
            if (n >= 2) {
                h(e, t, n);
            }
        }
    }
    var h = o("WAThrottle").throttle(function(t, n, r) {
        return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[generateMsgListRows] msg order mismatch: ",
            " vs ",
            ", ",
            " days diff"
        ])), t, n, r);
    }, o("WATimeUtils").MINUTE_MILLISECONDS, {
        leading: true,
        trailing: false
    });
    l.default = m;
}, 98);