__d("WAWebSendContactsAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachMediaCollection",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebCreateFile",
    "WAWebFrontendVcardUtils",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVcardUtils",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = "text/vcard";
    function p({ chat, contacts, ctwaContext, options, quotedMsg }) {
        const u = contacts.map((e, t)=>o("WAWebFrontendVcardUtils").vcardFromContactModel(e, options?.[t]));
        const c = u.length === 1 ? u[0] : o("WAWebVcardUtils").mergeVcards(u);
        const d = `${c.displayName.toString()}.vcf`;
        const p = o("WAWebCreateFile").createFile([
            r("nullthrows")(c.vcard, "Outgoing vcard has no content")
        ], d, {
            type: m
        });
        const f = p.size / 1024;
        if (f > o("WAWebServerPropConstants").VCARD_AS_DOCUMENT_SIZE_KB) {
            _(p, contacts.length, chat, quotedMsg, ctwaContext).catch((t)=>{
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error sending contacts via MMS: ",
                    ""
                ])), t);
            });
            return;
        }
        g(u, chat, f, quotedMsg, ctwaContext);
    }
    function _(e, t, n, r, o) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, documentPageCount, n, a, i) {
            const l = {
                file: e,
                type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                filename: e.name,
                mimetype: m,
                isVcardOverMmsDocument: true,
                documentPageCount
            };
            const s = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: n.getParticipantCount()
            });
            yield s.processAttachmentsForChat([
                l
            ], undefined, n);
            const c = s.uiProcessMsgs(1, null);
            const c_errorMsgs = c.errorMsgs;
            if (c_errorMsgs) {
                o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                    msg: c_errorMsgs
                }));
                return;
            }
            const _ = r("nullthrows")(s.getValidMedias()[0]);
            try {
                yield _.sendToChat({
                    chat: n,
                    options: {
                        quotedMsg: a,
                        ctwaContext: i
                    }
                });
            } catch (error) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Error sending contact: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return f.apply(this, arguments);
    }
    function g(vcardList, chat, a, quotedMsg, ctwaContext) {
        let u;
        const d = quotedMsg && quotedMsg.msgContextInfo(chat.id);
        const m = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const p = babelHelpers.extends({
            ack: o("WAWebAck").ACK.CLOCK,
            from: m,
            id: new (r("WAWebMsgKey"))({
                from: m,
                to: chat.id,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
                participant: o("WAWebChatGetters").getIsGroup(chat) ? m : undefined,
                selfDir: "out"
            }),
            local: true,
            isNewMsg: true,
            t: o("WATimeUtils").unixTime(),
            to: chat.id
        }, d, {
            ctwaContext
        });
        const messageSecret = o("WAWebBotUtils").isHatchBot(chat.id) || chat.id.isSupportAgentBot() ? self.crypto.getRandomValues(new Uint8Array(32)) : undefined;
        const botPersonaId = o("WAWebBotUtils").isHatchBot(chat.id) && (u = o("WAWebBotProfileCollection").BotProfileCollection.get(chat.id)?.personaId) != null ? u : undefined;
        const g = vcardList.length === 1 ? babelHelpers.extends({
            type: "vcard",
            vcardFormattedName: vcardList[0].displayName.toString(),
            body: vcardList[0].vcard
        }, p, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(chat), {
            messageSecret,
            botPersonaId
        }) : babelHelpers.extends({
            type: "multi_vcard",
            vcardList
        }, p, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(chat), {
            messageSecret,
            botPersonaId
        });
        n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, g)[1];
            } catch (error) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Error sending contact: ",
                    ""
                ])), error);
                throw error;
            }
        })();
    }
    l.default = p;
}, 98);