__d("WAWebDBQueryChatVisibleMessageHelper", [
    "WALogger",
    "WAWebABProps",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebFutureproofReparseMsgsAction",
    "WAWebMsgType",
    "WAWebReparseRichResponseMsgs",
    "WAWebRichResponse.flow",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "limit"
    ];
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ lowerBound, upperBound, options, count, addOnReparseExclusionList = [], index }) {
            const options_limit = options.limit;
            const p = babelHelpers.objectWithoutPropertiesLoose(options, s);
            const _ = o("WAWebABProps").getABPropConfigValue("web_init_chat_max_unread_message_count");
            const f = [];
            const g = [];
            let h = 0;
            let y = 0;
            let C = false;
            const b = function(t) {
                y++;
                if (count != null && h === count) {
                    return true;
                }
                if (o("WAWebDBMessageStoreUtils").shouldRenderInUI(t, addOnReparseExclusionList)) {
                    if (o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, t.viewMode)) {
                        h++;
                    }
                    if (h > _) {
                        C = true;
                    }
                }
                return false;
            };
            const v = self.performance.now();
            const S = yield o("WAWebSchemaMessage").getMessageTable().between(index ?? [
                "internalId"
            ], lowerBound, upperBound, p, b);
            if (C) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "queryChatVisibleMessageHelper: visible ",
                    " > limit ",
                    ""
                ])), h, _);
            }
            const R = S.filter((e)=>{
                if (o("WAWebDBMessageStoreUtils").isFutureproof(e)) {
                    const t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
                    const n = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(t);
                    if (e.futureproofReparsed !== true && (!n || n != null && n.canRenderInUi(t) && !addOnReparseExclusionList.includes(e.id.toString()))) {
                        f.push(e);
                    }
                } else {
                    if (d(e)) {
                        g.push(e);
                    }
                }
                return !(!o("WAWebDBMessageStoreUtils").shouldRenderInUI(e, addOnReparseExclusionList) || o("WAWebDBMessageStoreUtils").isInvalidCAGSystemMessage(e));
            });
            yield o("WAWebDBMessageStoreUtils").maybeUpdateMsgAck(R);
            if (f.length) {
                o("WAWebFutureproofReparseMsgsAction").processFutureproof(f);
            }
            if (g.length) {
                o("WAWebReparseRichResponseMsgs").reparseRichResponseMsgs(g);
            }
            return R;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && e.richResponse?.parseState !== o("WAWebRichResponse.flow").RichResponseParseState.Parsed;
    }
    l.queryChatVisibleMessageHelper = u;
}, 98);