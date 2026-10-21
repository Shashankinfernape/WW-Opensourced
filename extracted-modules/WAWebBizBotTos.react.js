__d("WAWebBizBotTos.react", [
    "WAWebBizBotLogging",
    "WAWebBizBotTosContent.react",
    "WAWebBotTos",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebTos",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFocusOnMount",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useState } = c;
    function Component(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { chatEntryPoint, onAccept } = i;
        const c = useState(false);
        const _ = c[0];
        const f = c[1];
        const g = o("WAWebBotTos").hasSeenBotTos();
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", function() {
            if (o("WAWebBotTos").hasAcceptedBizBotTos()) {
                o("WAWebModalManager").ModalManager.close();
            }
        });
        useImperativeHandle(t_ref, function() {
            return {
                close: o("WAWebModalManager").closeModalManager
            };
        });
        const h = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                f(true);
                try {
                    yield o("WAWebBotTos").acceptBizBotTos();
                    yield onAccept?.();
                    o("WAWebModalManager").ModalManager.close();
                    return true;
                } catch (e) {
                    return false;
                } finally{
                    f(false);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const y = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_continue_clicked", chatEntryPoint);
                yield h().then((e)=>{
                    if (e) {
                        o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_select", chatEntryPoint);
                    }
                });
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const C = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_dismiss", chatEntryPoint);
                yield h().then((e)=>{
                    if (e) {
                        o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_dismiss_auto_accept", chatEntryPoint);
                    }
                });
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const onOverlayClick = function() {
            C();
        };
        const ref = r("useWAWebFocusOnMount")();
        useEffect(function() {
            o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", g ? "nux_view_merged" : "nux_view_new", chatEntryPoint);
        }, []);
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component testid="biz-bot-tos-popup" okText={r("WAWebFbtCommon")("OK")} onOK={y} okSpinner={_ === true} onOverlayClick={onOverlayClick} ref={ref}>{u.jsx(r("WAWebBizBotTosContent.react"), {})}</Component>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    l.default = Component;
}, 98);