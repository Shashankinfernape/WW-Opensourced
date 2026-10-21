__d("WAWebStatusImageRing.react", [
    "$InternalEnum",
    "WAWebFrontendStatusGetters",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStatusValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "customStrokeColor",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = "xnrop4s-B";
    const m = {
        businessContactInfoRing: {
            marginTop: "x1380le5",
            position: "x10l6tqk",
            $$css: true
        },
        read: {
            stroke: "x1xwosuo",
            color: "x18cpw0e",
            $$css: true
        },
        statusPanelRing: {
            marginInlineStart: "x165d6jo",
            marginTop: "x1rdy4ex",
            position: "x10l6tqk",
            $$css: true
        },
        chatListRing: {
            marginInlineStart: "xe9ewy2",
            marginTop: "x1kgmq87",
            position: "x10l6tqk",
            $$css: true
        },
        updatesTabRing: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            $$css: true
        },
        unread: {
            stroke: "xg8543d",
            color: "x5ymo0g",
            $$css: true
        },
        unreadCloseFriends: {
            stroke: "xc8us4n",
            $$css: true
        },
        unreadDarkModeOnly: {
            stroke: "xc92gef",
            color: "x1r8hjv8",
            $$css: true
        },
        loadingRing: {
            backgroundColor: "xtwfq29",
            backgroundImage: "x1c5nfnd",
            filter: "xhe8x8x",
            animationName: "x1e112to",
            animationDuration: "x7t6ubo",
            animationTimingFunction: "x1esw782",
            animationIterationCount: "xa4qsjk",
            $$css: true
        }
    };
    const p = n("$InternalEnum").Mirrored([
        "StatusPanel",
        "BusinessContactInfo",
        "ChatList",
        "UpdatesTab"
    ]);
    const _ = new Map([
        [
            p.StatusPanel,
            m.statusPanelRing
        ],
        [
            p.BusinessContactInfo,
            m.businessContactInfoRing
        ],
        [
            p.ChatList,
            m.chatListRing
        ],
        [
            p.UpdatesTab,
            m.updatesTabRing
        ]
    ]);
    const r_1 = 50;
    const g = 10;
    const h = (t, n)=>{
        if (n != null) {
            return m.unreadCloseFriends;
        }
        if (t) {
            return m.unread;
        }
        return m.unreadDarkModeOnly;
    };
    const y = ({ dashSize, gapSize, numDashes, totalSize })=>new Array(numDashes).fill(undefined).map((t, a)=>{
            const i = a === numDashes - 1 ? totalSize - numDashes * (gapSize + dashSize) + gapSize : gapSize;
            return `${dashSize} ${i}`;
        }).join(" ");
    const C = (t, dashesToOffsetBy, gapSize, dashSize)=>t + dashesToOffsetBy * (gapSize + dashSize);
    function B10(t) {
        const n = o("react-compiler-runtime").c(13);
        const a = (2 * r_1 + t.strokeWidth) / 2;
        let i;
        let l;
        let u;
        if (n[0] !== t) {
            l = t.customStrokeColor;
            u = t.xstyle;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = i;
            n[2] = l;
            n[3] = u;
        } else {
            i = n[1];
            l = n[2];
            u = n[3];
        }
        let d;
        if (n[4] !== u) {
            d = (s || (s = r("stylex"))).props(u);
            n[4] = u;
            n[5] = d;
        } else {
            d = n[5];
        }
        let m;
        if (n[6] !== l) {
            m = l != null ? {
                style: {
                    stroke: l
                }
            } : undefined;
            n[6] = l;
            n[7] = m;
        } else {
            m = n[7];
        }
        let p;
        if (n[8] !== i || n[9] !== a || n[10] !== d || n[11] !== m) {
            p = <circle {...babelHelpers.extends({
                cx: a,
                cy: a,
                r: r_1,
                fill: "none",
                strokeLinecap: "round"
            }, i, d, m)}/>;
            n[8] = i;
            n[9] = a;
            n[10] = d;
            n[11] = m;
            n[12] = p;
        } else {
            p = n[12];
        }
        return p;
    }
    function V11(e) {
        const t = o("react-compiler-runtime").c(16);
        const { customStrokeColor, dashesToDraw, dashesToOffsetBy, stroke, totalDashes, xstyle } = e;
        let gapSize = g;
        const totalSize = Math.PI * r_1 * 2;
        if (totalSize - g * totalDashes < 1) {
            gapSize = totalSize / totalDashes / 1.2;
        }
        const dashSize = (totalSize - gapSize * totalDashes) / totalDashes;
        const p = totalSize / 4 - gapSize / 2;
        let _;
        if (t[0] !== dashSize || t[1] !== dashesToOffsetBy || t[2] !== gapSize || t[3] !== p) {
            _ = C(p, dashesToOffsetBy, gapSize, dashSize);
            t[0] = dashSize;
            t[1] = dashesToOffsetBy;
            t[2] = gapSize;
            t[3] = p;
            t[4] = _;
        } else {
            _ = t[4];
        }
        const strokeDashoffset = _;
        let v;
        if (t[5] !== dashSize || t[6] !== dashesToDraw || t[7] !== gapSize || t[8] !== totalDashes) {
            v = totalDashes !== 1 ? y({
                dashSize,
                gapSize,
                numDashes: dashesToDraw,
                totalSize
            }) : undefined;
            t[5] = dashSize;
            t[6] = dashesToDraw;
            t[7] = gapSize;
            t[8] = totalDashes;
            t[9] = v;
        } else {
            v = t[9];
        }
        const strokeDasharray = v;
        let R;
        if (t[10] !== customStrokeColor || t[11] !== strokeDasharray || t[12] !== strokeDashoffset || t[13] !== stroke || t[14] !== xstyle) {
            R = <B10 xstyle={xstyle} customStrokeColor={customStrokeColor} strokeDashoffset={strokeDashoffset} strokeDasharray={strokeDasharray} strokeWidth={stroke}/>;
            t[10] = customStrokeColor;
            t[11] = strokeDasharray;
            t[12] = strokeDashoffset;
            t[13] = stroke;
            t[14] = xstyle;
            t[15] = R;
        } else {
            R = t[15];
        }
        return R;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(13);
        const { customUnreadRingColor, respectAppTheme, stroke, totalCount, unreadCount } = e;
        const s = totalCount - unreadCount;
        let u;
        if (t[0] !== customUnreadRingColor || t[1] !== respectAppTheme || t[2] !== stroke || t[3] !== totalCount || t[4] !== unreadCount) {
            u = unreadCount > 0 ? <V11 xstyle={h(respectAppTheme)} customStrokeColor={customUnreadRingColor} totalDashes={totalCount} dashesToDraw={unreadCount} dashesToOffsetBy={totalCount} stroke={stroke}/> : null;
            t[0] = customUnreadRingColor;
            t[1] = respectAppTheme;
            t[2] = stroke;
            t[3] = totalCount;
            t[4] = unreadCount;
            t[5] = u;
        } else {
            u = t[5];
        }
        const d = u;
        let p;
        if (t[6] !== s || t[7] !== stroke || t[8] !== totalCount) {
            p = s > 0 ? <V11 xstyle={m.read} totalDashes={totalCount} dashesToDraw={s} dashesToOffsetBy={s} stroke={stroke}/> : null;
            t[6] = s;
            t[7] = stroke;
            t[8] = totalCount;
            t[9] = p;
        } else {
            p = t[9];
        }
        const _ = p;
        let f;
        if (t[10] !== _ || t[11] !== d) {
            f = <g data-testid="status-ring-broken">{d}{_}</g>;
            t[10] = _;
            t[11] = d;
            t[12] = f;
        } else {
            f = t[12];
        }
        return f;
    }
    const R = (size, stroke)=>{
        const e = size / (2 * r_1 + stroke);
        const r = size / 2;
        const o = r - stroke * e;
        const a = `radial-gradient(circle, transparent ${o - 0.5}px, black ${o + 0.5}px, black ${r - 0.5}px, transparent ${r + 0.5}px)`;
        return {
            width: size,
            height: size,
            mask: a,
            WebkitMask: a
        };
    };
    function L(e) {
        const t = o("react-compiler-runtime").c(17);
        const { customUnreadRingColor, positioning, respectAppTheme, size, stroke, testid, unreadCount } = e;
        const _ = customUnreadRingColor === undefined ? null : customUnreadRingColor;
        const f = positioning === undefined ? null : positioning;
        const g = respectAppTheme === undefined ? false : respectAppTheme;
        const y = testid === undefined ? null : testid;
        let C;
        if (t[0] !== _ || t[1] !== f || t[2] !== g || t[3] !== unreadCount) {
            C = (s || (s = r("stylex")))(f, m.loadingRing, unreadCount > 0 ? h(g, _) : m.read);
            t[0] = _;
            t[1] = f;
            t[2] = g;
            t[3] = unreadCount;
            t[4] = C;
        } else {
            C = t[4];
        }
        let b;
        if (t[5] !== size || t[6] !== stroke) {
            b = R(size, stroke);
            t[5] = size;
            t[6] = stroke;
            t[7] = b;
        } else {
            b = t[7];
        }
        let v;
        if (t[8] !== _) {
            v = _ != null ? {
                color: _
            } : undefined;
            t[8] = _;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] !== b || t[11] !== v) {
            S = babelHelpers.extends({}, b, v);
            t[10] = b;
            t[11] = v;
            t[12] = S;
        } else {
            S = t[12];
        }
        let L;
        if (t[13] !== C || t[14] !== S || t[15] !== y) {
            L = <div className={C} data-testid={y} style={S}/>;
            t[13] = C;
            t[14] = S;
            t[15] = y;
            t[16] = L;
        } else {
            L = t[16];
        }
        return L;
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(9);
        const { customUnreadRingColor, respectAppTheme, size, stroke, theme, unreadCount } = e;
        let positioning;
        if (t[0] !== theme) {
            positioning = _.get(theme);
            t[0] = theme;
            t[1] = positioning;
        } else {
            positioning = t[1];
        }
        let d;
        if (t[2] !== customUnreadRingColor || t[3] !== respectAppTheme || t[4] !== size || t[5] !== stroke || t[6] !== positioning || t[7] !== unreadCount) {
            d = <L customUnreadRingColor={customUnreadRingColor} positioning={positioning} respectAppTheme={respectAppTheme} size={size} stroke={stroke} unreadCount={unreadCount}/>;
            t[2] = customUnreadRingColor;
            t[3] = respectAppTheme;
            t[4] = size;
            t[5] = stroke;
            t[6] = positioning;
            t[7] = unreadCount;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    function k(e) {
        const t = o("react-compiler-runtime").c(24);
        const { id, stroke, size, breakRing, hideWhenNoUnreadStatuses, respectAppTheme, theme, customUnreadRingColor } = e;
        const C = stroke === undefined ? 4 : stroke;
        const v = size === undefined ? 48 : size;
        const R = breakRing === undefined ? true : breakRing;
        const L = hideWhenNoUnreadStatuses === undefined ? false : hideWhenNoUnreadStatuses;
        const respectAppTheme_1 = respectAppTheme === undefined ? false : respectAppTheme;
        const I = theme === undefined ? p.StatusPanel : theme;
        const T = customUnreadRingColor === undefined ? null : customUnreadRingColor;
        let D;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            D = [
                o("WAWebStatusGetters").getUnreadCount,
                o("WAWebStatusGetters").getTotalCount,
                o("WAWebStatusGetters").getIsLoading,
                o("WAWebFrontendStatusGetters").getHasUnreadCloseFriendStatus
            ];
            t[0] = D;
        } else {
            D = t[0];
        }
        const x = o("useWAWebStatusValues").useStatusValues(id, D);
        const $ = x[0];
        const totalCount = x[1];
        const N = x[2];
        const M = x[3];
        const customUnreadRingColor_1 = T ?? (o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() && M ? o("WDSVars.stylex").WDSBaseColor.plum400 : null);
        if ($ <= 0 && L || totalCount === 0) {
            return null;
        }
        if (N) {
            let A;
            if (t[1] !== customUnreadRingColor_1 || t[2] !== respectAppTheme_1 || t[3] !== v || t[4] !== C || t[5] !== I || t[6] !== $) {
                A = <E customUnreadRingColor={customUnreadRingColor_1} respectAppTheme={respectAppTheme_1} size={v} stroke={C} theme={I} unreadCount={$}/>;
                t[1] = customUnreadRingColor_1;
                t[2] = respectAppTheme_1;
                t[3] = v;
                t[4] = C;
                t[5] = I;
                t[6] = $;
                t[7] = A;
            } else {
                A = t[7];
            }
            return A;
        }
        const F = 2 * r_1 + C;
        const O = `0 0 ${F} ${F}`;
        const B = customUnreadRingColor_1 != null && $ > 0;
        let W;
        if (t[8] !== R || t[9] !== B || t[10] !== customUnreadRingColor_1 || t[11] !== respectAppTheme_1 || t[12] !== C || t[13] !== totalCount || t[14] !== $) {
            W = !R || totalCount === 1 || B ? <B10 xstyle={$ > 0 ? h(respectAppTheme_1, customUnreadRingColor_1) : m.read} customStrokeColor={$ > 0 ? customUnreadRingColor_1 : null} strokeWidth={C}/> : <S customUnreadRingColor={customUnreadRingColor_1} totalCount={totalCount} unreadCount={$} stroke={C} respectAppTheme={respectAppTheme_1}/>;
            t[8] = R;
            t[9] = B;
            t[10] = customUnreadRingColor_1;
            t[11] = respectAppTheme_1;
            t[12] = C;
            t[13] = totalCount;
            t[14] = $;
            t[15] = W;
        } else {
            W = t[15];
        }
        const q = W;
        let U;
        if (t[16] !== I) {
            U = (s || (s = r("stylex"))).props(_.get(I));
            t[16] = I;
            t[17] = U;
        } else {
            U = t[17];
        }
        const V = $ > 0 ? "status-new-indication" : undefined;
        let H;
        if (t[18] !== q || t[19] !== v || t[20] !== V || t[21] !== U || t[22] !== O) {
            H = <svg {...babelHelpers.extends({}, U, {
                "data-testid": V,
                width: v,
                height: v,
                viewBox: O,
                children: q
            })}/>;
            t[18] = q;
            t[19] = v;
            t[20] = V;
            t[21] = U;
            t[22] = O;
            t[23] = H;
        } else {
            H = t[23];
        }
        return H;
    }
    l.RingTheme = p;
    l.StatusLoadingRingSpinner = L;
    l.StatusImageRing = k;
}, 98);