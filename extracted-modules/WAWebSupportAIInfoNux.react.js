__d("WAWebSupportAIInfoNux.react", [
    "WAWebModalManager",
    "WAWebSupportAINux.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebWamEnumSupportAiEventType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebSupportAINux.react");
            t = <Component onOK={onOK}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function onOK() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebModalManager").ModalManager.close();
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_OK_CLICKED
            }).commit();
        });
        return d.apply(this, arguments);
    }
    l.default = UComponent;
}, 98);