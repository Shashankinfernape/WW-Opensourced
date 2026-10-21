__d("WAWebGalaxyFlowsLoadable.react", [
    "JSResourceForInteraction",
    "WAFlowsExpiredCacheCleaner",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebFlex.react",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsData",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsNavBarUtils.react",
    "WAWebLazyLoadedRetriable",
    "WAWebSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
    "useWAWebAsync",
    "useWAWebRenderCallbacks"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef } = u;
    const m = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGalaxyFlows.react").__setRef("WAWebGalaxyFlowsLoadable.react").load();
        return e;
    }), "WAWebGalaxyFlows");
    const P2 = r("react-loadable")({
        loader: m,
        loading: function() {
            return null;
        }
    });
    const _ = {
        loadingContainer: {
            marginTop: "xafmxuu",
            $$css: true
        }
    };
    function f({ chat, hasClearedActiveQPLMarker = false, messageData, msg, onCancel, ref }) {
        const gRef = useRef(false);
        useEffect(function() {
            o("WAFlowsExpiredCacheCleaner").clearExpiredCachedStates().catch((e)=>{});
        }, []);
        r("useWAWebRenderCallbacks")({
            onMount: function() {
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationStart();
            },
            onUnmount: function() {
                if (!hasClearedActiveQPLMarker) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").clearAllActiveWaeQPLMarkerInstances();
                }
            }
        });
        const h = r("useWAWebAsync")((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(signal) {
                if (gRef.current) {
                    return messageData;
                }
                gRef.current = true;
                return r("WAWebGalaxyFlowsData")({
                    chat,
                    messageData,
                    msg,
                    signal
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), [
            messageData,
            msg,
            chat.contact.id
        ]);
        if (P2 == null || h.error != null || h.loading) {
            const Component = o("WAWebGalaxyFlowsNavBarUtils.react").WAWebGalaxyFlowsNavBar;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = r("WAWebDrawerBody.react");
            const Component_3 = r("WAWebDrawer.react");
            return <Component_3 ref={ref}><Component onCancel={onCancel} msg={msg} isResponseFlow={messageData.isResponseFlow}/><Component_2><Component_1 align="center" justify="center" grow={1} xstyle={_.loadingContainer}>{h.loading && s.jsx(o("WAWebSpinner.react").Spinner, {
                size: 24,
                stroke: 4
            })}{h.error && o("WAWebGalaxyFlowsDrawerUtils").getGalaxyFlowsFullScreenErrorString()}</Component_1></Component_2></Component_3>;
        }
        return <P2 chat={chat} messageData={h.value} onCancel={onCancel} msg={msg}/>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.WAWebGalaxyFlowsLoadable = f;
}, 98);