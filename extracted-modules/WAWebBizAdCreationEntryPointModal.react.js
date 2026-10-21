__d("WAWebBizAdCreationEntryPointModal.react", [
    "fbt",
    "WAWebBusinessReachIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModalManager",
    "WDSIconIcPayments.react",
    "WDSIconIcTune.react",
    "WDSIllustrationWdsIllAdsWa.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        paddingInline36: {
            paddingInlineStart: "xf7qf19",
            paddingInlineEnd: "xjfo4ez",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const p = {
        chatIcon: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        },
        chatIconRefresh: {
            paddingTop: "x889kno",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        title: {
            fontSize: "x1603h9y",
            lineHeight: "x1o2sk6j",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const _ = {
        grayIcon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function F6Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { children, icon } = e;
        let a;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x123j3cw xs9asl8"
            };
            i = {
                className: "x6s0dn4 x3nfvp2"
            };
            t[0] = a;
            t[1] = i;
        } else {
            a = t[0];
            i = t[1];
        }
        let l;
        if (t[2] !== children || t[3] !== icon) {
            l = <li {...babelHelpers.extends({}, a, {
                children: <span {...babelHelpers.extends({}, i, {
                    children: [
                        icon,
                        children
                    ]
                })}/>
            })}/>;
            t[2] = children;
            t[3] = icon;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function g({ isPagelessAd, onClose, onLearnMore, onOK }) {
        const g = u_useState(false);
        const h = g[0];
        const y = g[1];
        const C = s._("Bring in new customers with Facebook & Instagram ads");
        const b = s._("Easily create ads that show on Facebook & Instagram and lead people to WhatsApp chats with you.");
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const v = s._("Your business name and photo will be shared with Meta in order to create your ad. {=m2}", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getSharingBusinessInfoForAdsFaqUrl()} onClick={function() {
                if (onLearnMore) {
                    onLearnMore();
                }
            }}>{s._("Learn more")}</Component>)
        ]);
        const S = {
            height: 25,
            iconXstyle: _.grayIcon,
            width: 25,
            xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd16
        };
        const R = [
            {
                icon: c.jsx(o("WAWebBusinessReachIcon.react").BusinessReachIcon, babelHelpers.extends({}, S)),
                text: s._("Reach people locally")
            },
            {
                icon: c.jsx(r("WDSIconIcPayments.react"), babelHelpers.extends({}, S)),
                text: s._("Control your ad budget")
            },
            {
                icon: c.jsx(r("WDSIconIcTune.react"), babelHelpers.extends({}, S)),
                text: s._("Pause or stop ads anytime")
            }
        ];
        const L = R.map((e, t)=><F6Component key={t} icon={e.icon}>{e.text}</F6Component>);
        const E = function() {
            if (onClose) {
                onClose();
            }
            o("WAWebModalManager").ModalManager.close();
        };
        const k = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                y(true);
                try {
                    yield onOK();
                } finally{
                    y(false);
                }
                o("WAWebModalManager").ModalManager.close();
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const I = c.jsx(r("WDSIllustrationWdsIllAdsWa.react"), {
            testid: "wds-ill-ads-WA",
            xstyle: [
                p.chatIcon,
                p.chatIconRefresh
            ]
        });
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 testid="advertise-modal" tsNavigationData={{
            surface: "unknown",
            viewName: "ad-creation-entry"
        }} onOK={k} okDisabled={h} okSpinner={h} okText={s._("Continue in Facebook")} onCancel={E} onOverlayClick={E} cancelText={s._("Cancel")}>{I}<div className="x1f6kntn xf4yft x1o2sk6j x1yc453h xh8yej3"><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.title, o("WDSMargins.stylex").wdsMargins.margin16, m.paddingInline36), {
            children: C
        })}/><p>{b}</p><ul {...babelHelpers.extends({}, e.props(o("WDSPaddings.stylex").wdsPaddings.paddingHor16, o("WDSMargins.stylex").wdsMargins.marginVer20), {
            children: L
        })}/>{isPagelessAd === true && <p {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer32), {
            children: v
        })}/>}</div></Component_1>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.default = g;
}, 226);