__d("WAWebMessageDateMarker.react", [
    "WALogger",
    "WAWeb-moment",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebClock",
    "WAWebCmd",
    "WAWebCoreActionsODS",
    "WAWebDatePickerContainerLoadable",
    "WAWebDropdown.react",
    "WAWebMsgCollection",
    "WAWebNoop",
    "WAWebSearchByDateUtils",
    "WAWebSearchByTypeAndDateGatingUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useImperativeHandle, useMemo, useRef, useState } = m;
    function HComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const { chat, isFocusable, isGroupHistoryMessage, timestamp } = i;
        const y = useState(null);
        const C = y[0];
        const b = y[1];
        function v() {
            try {
                return o("WAWebClock").Clock.relativeDateStr(timestamp);
            } catch (error) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Clock.relativeDateStr(",
                    ")"
                ])), timestamp);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Clock.relativeDateStr failed: ",
                    ""
                ])), error).sendLogs("relative-date-str-error", {
                    sampling: 0.001
                });
                return "";
            }
        }
        const S = useState(v());
        const R = S[0];
        const L = S[1];
        const ERef = useRef(null);
        const kRef = useRef(null);
        const I = useState(false);
        const hidden = I[0];
        const D = I[1];
        const x = useMemo(function() {
            return timestamp >= r("WAWeb-moment")().startOf("day").subtract(7, "day").unix();
        }, [
            timestamp
        ]);
        function $() {
            L(v());
        }
        o("useWAWebListener").useListener(x ? o("WAWebCmd").Cmd : null, "midnight", $);
        const getTimestamp = function() {
            return timestamp;
        };
        const show = function() {
            if (hidden) {
                D(false);
            }
        };
        const hide = function() {
            if (!hidden) {
                D(true);
            }
        };
        const w = function() {
            return ERef.current;
        };
        useImperativeHandle(t_ref, function() {
            return {
                getTimestamp,
                show,
                hide,
                getElement: w
            };
        });
        const A = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled() && chat != null;
        const F = function() {
            b(null);
        };
        const O = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WAWebCoreActionsODS").logCalendarDateSelectedFromDateMarker();
                if (chat != null) {
                    const t = yield o("WAWebSearchByDateUtils").getClosestMessageFromDate(chat.id.toString(), e);
                    F();
                    if (t) {
                        const r = o("WAWebMsgCollection").MsgCollection.get(t.toString());
                        const a = o("WAWebChatMessageSearch").getSearchContext({
                            chat,
                            msgKey: r?.id ?? t
                        });
                        if (a) {
                            a.highlightMentionMsg = true;
                            a.enableAnimation = false;
                            o("WAWebCmd").Cmd.openChatAt({
                                chat,
                                msgContext: a,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
                            });
                        } else {
                            o("WAWebCmd").Cmd.openChatBottom({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
                            });
                        }
                    } else {
                        o("WAWebCmd").Cmd.openChatBottom({
                            chat,
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
                        });
                    }
                }
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const B = function() {
            if (A) {
                o("WAWebCoreActionsODS").logCalendarOpenFromDateMarker();
                o("WAWebDatePickerContainerLoadable").requireBundle().then((E)=>{
                    b({
                        dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                        dirX: o("WAWebDropdown.react").DirX.CENTER,
                        type: o("WAWebDropdown.react").MenuType.DatePicker,
                        menu: <E chatId={chat?.id} defaultActiveStartDate={new Date(timestamp * 1000)} onDateSelected={function(t) {
                            O(t);
                        }}/>,
                        anchor: kRef.current
                    });
                }).catch(r("WAWebNoop"));
            }
        };
        if (hidden) {
            return null;
        }
        const Component = o("WAWebUimUie.react").UIE;
        const W = C ? <Component displayName="DateMarkerDatePicker" escapable popable dismissOnWindowResize requestDismiss={F}>{d.jsx(r("WAWebUimUieMenu.react"), {
            contextMenu: C
        })}</Component> : null;
        const Component_1 = r("WDSText.react");
        const q = <Component_1 type="Body3Emphasized" colorName="contentDeemphasized" dir="auto">{R.toString()}</Component_1>;
        const Component_2 = r("WAWebWrapperSystemBubble.react");
        return <><Component_2 ref={ERef} hidden={hidden} isFocusable={isFocusable} groupHistoryBackground={isGroupHistoryMessage === true}>{A ? <div ref={kRef} onClick={B} role="button" tabIndex={0} onKeyDown={function(t) {
            if (t.key === "Enter" || t.key === " ") {
                t.preventDefault();
                B();
            }
        }} className="x1ypdohk x4qlk2n x93d46o x14ba6vc xrw3huk x1tiyuxx x1nbhmlj x1iw51ew xde1mab x1fmog5m xu25z0z x140muxe xo1y3bh">{q}</div> : q}</Component_2>{W}</>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 98);