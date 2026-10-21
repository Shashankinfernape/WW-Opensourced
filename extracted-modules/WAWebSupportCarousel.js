__d("WAWebSupportCarousel", [
    "WALongInt",
    "WAWebChevronButton.react",
    "WAWebDisplayType",
    "WAWebErrorBoundary.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMediaLinkPreview.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportCarouselChevronBtn.react",
    "WAWebVelocityAnimate",
    "WAWebVelocityTransitionGroup",
    "WAWebWaLogoIcon.react",
    "WAWebWamEnumSupportAiEventType",
    "react",
    "useVisibility",
    "useWAWebThrottledCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef, useState } = u;
    const p = {
        carouselItem: {
            height: "x5yr21d",
            $$css: true
        },
        carouselItemThumbnail: {
            backgroundColor: "x1ew7x2d",
            borderStartStartRadius: "x13t61ll",
            borderStartEndRadius: "x1kchd1x",
            borderEndEndRadius: "x1u0fnx4",
            borderEndStartRadius: "xbxn0j6",
            $$css: true
        },
        carouselItemIcon: {
            color: "xl99u7g",
            backgroundColor: "x1ew7x2d",
            marginTop: "xw7yly9",
            marginInlineEnd: "x1ys307a",
            marginBottom: "x1yztbdb",
            marginInlineStart: "xyqm7xq",
            $$css: true
        }
    };
    const _ = 200;
    const f = 7;
    const g = 200;
    function h(e) {
        const tRef = useRef(null);
        const n = useState(false);
        const a = n[0];
        const i = n[1];
        const l = useState(false);
        const u = l[0];
        const h = l[1];
        const C = r("WAWebL10N").isRTL();
        const b = r("useWAWebThrottledCallback")(function() {
            const e = tRef?.current;
            if (e != null) {
                const n = (C ? -1 : 1) * e.scrollLeft <= f;
                h(!n);
                const r = (C ? -1 : 1) * e.scrollLeft + e.clientWidth >= e.scrollWidth - f;
                i(!r);
            }
        }, 100);
        const v = r("useVisibility")({
            onVisible: function() {
                b();
            }
        });
        const S = v[0];
        useEffect(function() {
            window.addEventListener("resize", b);
            return function() {
                window.removeEventListener("resize", b);
            };
        }, []);
        const R = (o)=>{
            const n = _ * 0.5 * e.items.length * (o ? 1 : -1) * (C ? -1 : 1);
            const a = tRef?.current;
            if (a != null) {
                r("WAWebVelocityAnimate")(a, "stop");
                r("WAWebVelocityAnimate")(a, "scroll", {
                    SCROLL_ANIMATION: g,
                    container: a,
                    offset: n,
                    axis: "x",
                    easing: [
                        0.1,
                        0.82,
                        0.25,
                        1
                    ]
                });
            }
        };
        const L = e.items.map((t)=>{
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = r("WAWebMediaLinkPreview.react");
            return <div key={e.items.indexOf(t)}><Component_1 containerXstyle={p.carouselItem} displayType={o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION} title={t.title} theme="support_citations_link" matchedText={t.subtitle} isLoading={false} onClick={function() {
                o("WAWebExternalLink.react").openExternalLink(y(t.cmsId));
                new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                    supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_CITATION_TAPPED,
                    citationCmsId: t.cmsId
                }).commit();
            }} thumbnail=<Component xstyle={p.carouselItemThumbnail}>{s.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                height: 38,
                width: 38,
                displayInline: true,
                iconXstyle: p.carouselItemIcon
            })}</Component>/></div>;
        });
        const Component = r("WAWebSupportCarouselChevronBtn.react");
        const E = u === true ? <Component type={o("WAWebChevronButton.react").ButtonType.Prev} onClick={function() {
            R(false);
        }}/> : null;
        const Component_1 = r("WAWebSupportCarouselChevronBtn.react");
        const k = a === true ? <Component_1 type={o("WAWebChevronButton.react").ButtonType.Next} onClick={function() {
            R(true);
        }}/> : null;
        const Component_2 = r("WAWebVelocityTransitionGroup");
        const Component_3 = o("WAWebKeyboardHotKeys.react").HotKeys;
        const Component_4 = o("WAWebErrorBoundary.react").ErrorBoundary;
        return <Component_4 name="support-citations-carousel"><div className="x1n2onr6"><Component_3 ref={S} tabIndex={-1}><Component_2 transitionName="support-citations-carousel"><div className="x1n2onr6">{E}<div {...babelHelpers.extends({}, {
            0: {
                className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x7r5mf7 x12nagc"
            },
            1: {
                className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x7r5mf7 x12nagc x1rohswg"
            }
        }[(e.items.length === 1) << 0], {
            onScroll: b,
            ref: tRef,
            children: <div {...babelHelpers.extends({}, {
                0: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot"
                },
                8: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x15x72sd"
                },
                4: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xmj3umr"
                },
                12: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xmj3umr"
                },
                2: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9"
                },
                10: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9"
                },
                6: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9"
                },
                14: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9"
                },
                1: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                9: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                5: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                13: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                3: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                11: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                7: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                },
                15: {
                    className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep"
                }
            }[(e.items.length === 1) << 3 | (e.items.length === 2) << 2 | (e.items.length === 3) << 1 | (e.items.length === 4) << 0], {
                children: L
            })}/>
        })}/>{k}</div></Component_2></Component_3></div></Component_4>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(cmsId) {
        if (C(cmsId)) {
            return o("WAWebFaqUrl").getFullUrl(o("WALongInt").decimalStringToLongInt(cmsId));
        }
        return o("WAWebFaqUrl").getFaqUrl();
    }
    function C(cmsId) {
        const t = /^[1-9]\d*$/;
        return cmsId != null && t.test(cmsId);
    }
    l.default = h;
}, 98);