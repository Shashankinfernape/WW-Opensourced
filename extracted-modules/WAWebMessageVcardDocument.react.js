__d("WAWebMessageVcardDocument.react", [
    "fbt",
    "WAWebMediaDataGetters",
    "WAWebMessageMultiVcard.react",
    "WAWebMessageVcard.react",
    "WAWebMsgCollection",
    "WAWebServerPropConstants",
    "WAWebVcardGetNameFromParsed",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        let t;
        const { displayAuthor, displayType, msgKey, onMessageClick } = e;
        const s = o("useWAWebMediaDataValues").useMediaDataValues(e.mediaData, [
            (t = o("WAWebMediaDataGetters")).getMediaBlob,
            t.getMediaStage,
            t.getParsedVcards,
            t.getSize
        ]);
        const d = s[0];
        const p = s[1];
        const _ = s[2];
        const f = s[3];
        const g = r("useWAWebIsMsgTrusted")(msgKey);
        const h = function() {
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.downloadMedia({
                downloadEvenIfExpensive: true,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                isUserInitiated: false
            });
        };
        e_useEffect(function() {
            if (g && f <= o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024) {
                h();
            }
        }, []);
        if (_) {
            if (_.length > 1) {
                return u.jsx(r("WAWebMessageMultiVcard.react"), {
                    msgKey,
                    vcardList: m(_),
                    quotedMsg: e.getQuotedMsg(),
                    displayType,
                    displayAuthor
                });
            }
            const Component = r("WAWebMessageVcard.react");
            return <Component msgKey={msgKey} vcard={_[0]} quotedMsg={e.getQuotedMsg()} displayType={displayType} displayAuthor={displayAuthor} onMessageClick={onMessageClick}/>;
        }
        const Component = r("WAWebMessageVcard.react");
        return <Component mediaStage={p} msgKey={msgKey} vcard={null} quotedMsg={e.getQuotedMsg()} displayType={displayType} displayAuthor={displayAuthor} onMessageClick={onMessageClick} downloadMedia={g ? h : null} placeholder/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(e) {
        return e.map((parsedVcard)=>({
                parsedVcard,
                displayName: o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(parsedVcard) || s._("Contact"),
                isMultiVcard: false,
                vcard: ""
            }));
    }
    l.default = d;
}, 226);