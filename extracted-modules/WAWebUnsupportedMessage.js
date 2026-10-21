__d("WAWebUnsupportedMessage", [
    "fbt",
    "WAWebFormatMsgText",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUpdater",
    "WAWebUpdaterUpdateApp",
    "WDSIconWdsIcUnsupportedMessage.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    window.updater = o("WAWebUpdater").Updater;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUpdaterUpdateApp").updateApp();
        });
        return d.apply(this, arguments);
    }
    function M1Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const { customUpdateButtonFbt, msg } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Click here to update.");
            t[0] = a;
        } else {
            a = t[0];
        }
        const l = customUpdateButtonFbt ?? a;
        if (o("WAWebMsgGetters").getIsSentByMe(msg.unsafe()) || !msg.subtype || msg.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT || msg.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL && msg.futureproofSubtype === "message_edit") {
            if (msg.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
                return null;
            }
            let d;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                d = {
                    className: "xo1mcw5"
                };
                t[1] = d;
            } else {
                d = t[1];
            }
            let m;
            if (t[2] !== l) {
                m = <span {...babelHelpers.extends({}, d, {
                    role: "button",
                    onClick: c,
                    children: l
                })}/>;
                t[2] = l;
                t[3] = m;
            } else {
                m = t[3];
            }
            return m;
        }
        return null;
    }
    function PComponent({ customPlaceholderIconProps, customUpdateButtonFbt, displayAuthor, hideUpdateButton, msg }) {
        const Component = r("WAWebMessagePlaceholder.react");
        const Component_1 = r("WAWebMessageTextBubble.react");
        return <Component_1 msgKey={msg.id} displayAuthor={displayAuthor}><Component Icon={customPlaceholderIconProps?.icon ?? u.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
            testid: "unknown",
            height: 24,
            width: 24
        })} msgKey={msg.id} theme={customPlaceholderIconProps?.theme ?? undefined}>{r("WAWebFormatMsgText")({
            msg: msg.unsafe()
        })} {hideUpdateButton ? null : <M1Component msg={msg} customUpdateButtonFbt={customUpdateButtonFbt}/>}</Component></Component_1>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    l.default = PComponent;
}, 226);