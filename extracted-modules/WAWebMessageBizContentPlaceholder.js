__d("WAWebMessageBizContentPlaceholder", [
    "WAWebBizContentPlaceholderMsgData.flow",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFormatMsgText",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebUnsupportedMessage",
    "WDSIconIcKey.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/372839278914311");
    }
    const Component = r("WAWebClickableLink.react");
    const c = <Component testid="biz-content-placeholder-learn-more" onClick={u}>{r("WAWebFbtCommon")("Learn more")}</Component>;
    function d({ displayAuthor, msg }) {
        const a = s.jsx(r("WAWebUnsupportedMessage"), {
            msg,
            displayAuthor,
            hideUpdateButton: true
        });
        const i = msg.unsafe();
        if (i.bizContentPlaceholderType == null) {
            return a;
        }
        const Component = r("WAWebMessagePlaceholder.react");
        const Component_1 = r("WAWebMessageTextBubble.react");
        switch(i.bizContentPlaceholderType){
            case o("WAWebBizContentPlaceholderMsgData.flow").BizContentPlaceholderType.MASK_LINKED_DEVICES:
                return <Component_1 msgKey={msg.id} displayAuthor={displayAuthor}><Component Icon={s.jsx(r("WDSIconIcKey.react"), {})} msgKey={msg.id}>{r("WAWebFormatMsgText")({
                    msg: msg.unsafe()
                })} {c}</Component></Component_1>;
        }
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);