__d("WAWebLoadingScreen.react", [
    "fbt",
    "$InternalEnum",
    "CometHeroHoldTrigger.react",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebHistorySyncLoading",
    "WAWebL10N",
    "WAWebProgressBar.react",
    "WDSIconIcLock.react",
    "WDSIconWdsIcLogoMeta.react",
    "WDSIconWdsIcWhatsapp.react",
    "cr:10212",
    "cr:11133",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u.memo;
    const m = "x1w1lziz-B";
    const p = "x1ogm9e5-B";
    const _ = {
        startupLogo: {
            animationDuration: "xius3t",
            animationIterationCount: "xa4qsjk",
            animationName: "x1lzcywm",
            animationTimingFunction: "x4hg4is",
            color: "x1r8hjv8",
            height: "x1mgsydn",
            transformOrigin: "x1g0ag68",
            willChange: "x1so62im",
            width: "xge0ay3",
            "@media (prefers-reduced-motion: reduce)_animationName": "x1aquc0h",
            $$css: true
        },
        startupMetaLockup: {
            color: "x1r8hjv8",
            height: "x1kpxq89",
            width: "x15yg21f",
            $$css: true
        },
        graphic: {
            marginTop: "x1cm6mvd",
            color: "xsq9etf",
            "::after_content": "x1s928wv",
            "::after_opacity": "xmf22ne",
            "::after_transition": "x1kcwo5r",
            "::after_transitionDelay": "xel2y37",
            $$css: true
        },
        shimmeringWWW: {
            "::after_position": "x1iofbvg",
            "::after_top": "x173lezl",
            "::after_insetInlineStart": "xftphsf",
            "::after_left": null,
            "::after_right": null,
            "::after_display": "xhkezso",
            "::after_width": "xlnv3q3",
            "::after_height": "x1wsn0xg",
            "::after_marginInlineEnd": "x1a300wp",
            "::after_backgroundImage": "x98f6rh",
            "::after_opacity": "x1rw2j67",
            "::after_animationName": "x1p7k6ia",
            "::after_animationDuration": "x1ui9q4k",
            "::after_animationTimingFunction": "x15y3wy1",
            "::after_animationDelay": "xb4mzpe",
            "::after_animationIterationCount": "x13ee8us",
            $$css: true
        },
        secondaryIcon: {
            display: "x1rg5ohu",
            verticalAlign: "xxymvpz",
            $$css: true
        },
        marginBottom2: {
            marginBottom: "x13m54ha",
            $$css: true
        }
    };
    const f = n("$InternalEnum").Mirrored([
        "INITIAL_LOAD",
        "CONNECTING",
        "DOWNLOADING",
        "ORGANIZING"
    ]);
    const g = n("$InternalEnum").Mirrored([
        "MULTI_STAGE",
        "UNIFIED",
        "UNIFIED_WITH_PROGRESS",
        "LOGO"
    ]);
    function h(t) {
        "use no forget";
        const a = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(r("WAWebL10N"), "locale_change", a);
        const i = t.theme;
        const l = i === void 0 ? g.MULTI_STAGE : i;
        const u = t.stage === f.INITIAL_LOAD;
        const d = t.stage === f.DOWNLOADING;
        const m = t.stage === f.ORGANIZING;
        const p = t.onLogout != null && !u && l !== g.LOGO;
        const h = {
            0: "x10l6tqk x11eg80g x1ahifba x1escl5o x1hc1fzr",
            2: "x10l6tqk x11eg80g x1escl5o x1hc1fzr x5epzj0",
            1: "x10l6tqk x11eg80g x1ahifba x1escl5o x1hc1fzr x1rcz4em",
            3: "x10l6tqk x11eg80g x1escl5o x1hc1fzr x5epzj0 x1rcz4em"
        }[!!d << 1 | !!d << 0];
        const C = {
            0: "x10l6tqk x11eg80g x1ahifba x1kuhel0 xh8yej3 x1f6kntn xhslqc4 x2b8uid xg01cxk",
            2: "x10l6tqk x11eg80g x1kuhel0 xh8yej3 x1f6kntn xhslqc4 x2b8uid x1hc1fzr x5epzj0",
            1: "x10l6tqk x11eg80g x1ahifba x1kuhel0 xh8yej3 x1f6kntn xhslqc4 x2b8uid xg01cxk x1lrmtmu",
            3: "x10l6tqk x11eg80g x1kuhel0 xh8yej3 x1f6kntn xhslqc4 x2b8uid x1hc1fzr x5epzj0 x1lrmtmu"
        }[!!d << 1 | !!d << 0];
        if (u && n("cr:11133") != null) {
            return <div data-testid="wa-web-loading-screen" className="x6s0dn4 x1c7u0tx x78zum5 xdt5ytf x5yr21d x87ps6o xh8yej3">{c.jsx(r("CometHeroHoldTrigger.react"), {
                description: `WAWebLoadingScreen_${String(t.stage)}`,
                hold: true
            })}<div aria-hidden data-testid="wa-web-startup-splash-logo" className="x6s0dn4 x78zum5 x1iyjqo2 xl56j7k x2lwn1j xh8yej3">{c.jsx(r("WDSIconWdsIcWhatsapp.react"), {
                height: 66,
                xstyle: _.startupLogo
            })}</div><div aria-hidden data-testid="wa-web-startup-splash-meta" className="x6s0dn4 x78zum5 xdt5ytf xaymia4 xl56j7k x1sgudl8 xgbm1jk"><span className="xhslqc4 xb2kyzz x1b1uo88 xefnzgg">{s._("from")}</span>{c.jsx(r("WDSIconWdsIcLogoMeta.react"), {
                height: 12,
                xstyle: _.startupMetaLockup
            })}</div></div>;
        }
        let b;
        switch(l){
            case g.MULTI_STAGE:
                switch(t.stage){
                    case f.INITIAL_LOAD:
                        b = r("WAWebFbtCommon")("WhatsApp");
                        break;
                    case f.CONNECTING:
                        b = s._("Connecting…");
                        break;
                    case f.DOWNLOADING:
                        b = s._("Downloading messages: {progress}\u0025", [
                            s._param("progress", t.progress)
                        ]);
                        break;
                    case f.ORGANIZING:
                        b = s._("Organising messages");
                        break;
                }
                break;
            case g.UNIFIED:
                b = o("WAWebHistorySyncLoading").SYNC_LOADING();
                break;
            case g.UNIFIED_WITH_PROGRESS:
                switch(t.stage){
                    case f.INITIAL_LOAD:
                    case f.CONNECTING:
                        b = o("WAWebHistorySyncLoading").SYNC_LOADING();
                        break;
                    case f.DOWNLOADING:
                    case f.ORGANIZING:
                        b = s._("_j{\"*\":\"Loading your chats [{percentage}\\u0025]\"}", [
                            s._param("percentage", t.progress, [
                                0
                            ])
                        ]);
                }
                break;
            case g.LOGO:
                b = r("WAWebFbtCommon")("WhatsApp");
                break;
        }
        const v = [
            _.graphic
        ];
        if (l === g.LOGO || l === g.MULTI_STAGE && (u || m)) {
            v.push(_.shimmeringWWW);
        }
        const Component = o("WAWebButton.react").WAWebButtonOnAccent;
        return <div data-testid="wa-web-loading-screen" className="x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x87ps6o x6egj2d">{c.jsx(r("CometHeroHoldTrigger.react"), {
            description: `WAWebLoadingScreen_${String(t.stage)}`,
            hold: true
        })}<div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(v), {
            children: <Y2/>
        })}/><div className="x1c3i2sq x14ug900 xk82a7y x1nmyh1g">{b}</div><div className="x1n2onr6 x1oysuqx xqu0tyb xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xk82a7y xevwqry">{c.jsx(r("WAWebProgressBar.react"), {
            value: t.progress,
            max: 100
        })}</div><div className="x1f6kntn xhslqc4 xk82a7y x1ci5j9l">{c.jsx(r("WDSIconIcLock.react"), {
            height: 17,
            xstyle: [
                _.secondaryIcon,
                _.marginBottom2
            ]
        })} {r("WAWebFbtCommon")("End-to-end encrypted")}</div>{n("cr:10212") && !u ? <div className="x10l6tqk x11eg80g x1ahifba x1w4j1z7">{c.jsx(n("cr:10212"), {})}</div> : null}{p && <div className={h}><Component onClick={t.onLogout}>{s._("Log out")}</Component></div>}<div className={C}>{s._("Don't close this window. Your messages are downloading.")}</div></div>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function Y2() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <span><svg width="250px" height="52px" viewBox="0 0 250 52" version="1.1" xmlns="http://www.w3.org/2000/svg"><path className="xw7t59x" d="M37.7314595,31.1612046 C37.0876293,30.8391042 33.9223475,29.2816062 33.332139,29.0666255 C32.7419305,28.8517683 32.3127104,28.7444016 31.8834903,29.3887258 C31.4542703,30.0332973 30.2204788,31.4835521 29.8447567,31.91339 C29.4692818,32.3428571 29.0936834,32.3968494 28.4499768,32.0745019 C27.8060232,31.7521544 25.7314595,31.0723707 23.272278,28.8787027 C21.3582085,27.171583 20.0661004,25.0632896 19.6905019,24.4185946 C19.315027,23.7741467 19.6505946,23.4257297 19.9729421,23.1046178 C20.2625483,22.8161235 20.6167722,22.352556 20.9386255,21.9767104 C21.2606023,21.6007413 21.3678456,21.3320154 21.5824556,20.9026718 C21.7970657,20.472834 21.6898224,20.0968649 21.528834,19.7746409 C21.3678456,19.452417 20.0801853,16.2831815 19.543722,14.993915 C19.0210965,13.7387491 18.4903166,13.9087567 18.0950733,13.8887413 C17.7199691,13.870085 17.2902548,13.8661313 16.8611583,13.8661313 C16.4319382,13.8661313 15.7343629,14.0272433 15.144278,14.6716911 C14.5540695,15.3163861 12.8908108,16.8740077 12.8908108,20.0429961 C12.8908108,23.2121081 15.1978996,26.2734826 15.5198765,26.7031969 C15.8417297,27.1330348 20.0597992,33.6360772 26.5184865,36.4250193 C28.05461,37.0883707 29.2539305,37.4846023 30.1888494,37.7811274 C31.7312742,38.2713822 33.1348263,38.2021931 34.2440772,38.0363861 C35.4810811,37.8515521 38.0533127,36.478888 38.5898996,34.9750116 C39.1263629,33.470888 39.1263629,32.1818687 38.9653745,31.91339 C38.8045097,31.6447876 38.3752896,31.4835521 37.7314595,31.1612046 M25.9838765,47.2013591 L25.9752278,47.2013591 C22.1322625,47.1998763 18.3629343,46.1674749 15.0745946,44.2160926 L14.2926332,43.7519074 L6.18674906,45.8782394 L8.35027028,37.9751042 L7.84111198,37.1648494 C5.69723552,33.7549343 4.56500386,29.8139923 4.56660833,25.767166 C4.57130502,13.9587954 14.1789652,4.35187645 25.9924016,4.35187645 C31.7128649,4.35385328 37.0902239,6.58458689 41.1338378,10.6327722 C45.1773282,14.680834 47.4028724,20.0618996 47.4007737,25.7843398 C47.3959539,37.5936988 37.7882934,47.2013591 25.9838765,47.2013591 M44.2112742,7.556695 C39.3464092,2.68614672 32.8767258,0.00271814672 25.9836293,0 C11.7809421,0 0.221652509,11.5584247 0.215969112,25.7654363 C0.21411583,30.3069652 1.40058687,34.7397683 3.65553668,38.6475984 L-4.61852778e-14,52 L13.6596757,48.4167413 C17.4233205,50.4695597 21.6607876,51.5516293 25.9733745,51.5531121 L25.9838765,51.5531121 L25.984,51.5531121 C40.1852046,51.5531121 51.7456062,39.9934517 51.7512912,25.7860695 C51.7538842,18.9011274 49.0761392,12.4271197 44.2112742,7.556695" fill="currentColor"/></svg></span>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    const C = d(h);
    l.Stage = f;
    l.LoadingScreenTheme = g;
    l.LoadingScreen = C;
}, 226);