__d("WAWebOpenNewsletterPreviewChat", [
    "WAJids",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebComposeBoxActions",
    "WAWebLoadingNewsletterPreviewModal.react",
    "WAWebModalManager",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterOpenAtAction",
    "WAWebNewsletterOpenQPLLogger",
    "WAWebNewsletterOpenQPLLoggerV2",
    "WAWebNewsletterRoleIdentifier",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebSideNavButtonsActivityModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ chatEntryPoint, discoverySurface, failInteraction, identifier, serverMessageId, stopInteraction }) {
        if (o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()) {
            return c({
                identifier,
                chatEntryPoint,
                serverMessageId,
                discoverySurface,
                failInteraction,
                stopInteraction
            });
        }
        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebPDFNModal.react"), {
            pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
            verifyTosAccepted: o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos,
            runIfTosAccepted: function() {
                return c({
                    identifier,
                    chatEntryPoint,
                    serverMessageId,
                    discoverySurface,
                    failInteraction,
                    stopInteraction
                });
            }
        }));
    }
    function c({ chatEntryPoint, discoverySurface, failInteraction, identifier, onNewsletterOpen, serverMessageId, stopInteraction }) {
        let qpl;
        if (o("WAWebNewsletterGatingUtils").isNewsletterOpenQPLImprovementsEnabled()) {
            qpl = new (o("WAWebNewsletterOpenQPLLoggerV2")).WAWebNewsletterOpenQPLLoggerV2;
            const _ = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(identifier);
            qpl?.annotate({
                role: _ ?? o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
                unreadCount: 0,
                discoverySurface,
                isCached: false
            });
        }
        const Component = r("WAWebLoadingNewsletterPreviewModal.react");
        o("WAWebModalManager").ModalManager.open(<Component identifier={identifier} chatEntryPoint={chatEntryPoint} qpl={qpl} onFailure={function() {
            qpl?.end({
                success: false
            });
        }} onSuccess={function(n) {
            let e;
            if (o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() && !o("WAWebNewsletterGatingUtils").isNewsletterOpenQPLImprovementsEnabled()) {
                e = new (o("WAWebNewsletterOpenQPLLogger")).WAWebNewsletterOpenQPLLogger;
                e?.annotate(n, chatEntryPoint);
            } else {
                e = qpl;
            }
            o("WAWebSideNavButtonsActivityModel").setLastActiveNewsletterEntryPoint(chatEntryPoint);
            d({
                chat: n,
                chatEntryPoint,
                serverMessageId,
                onNewsletterOpen
            }).then((t)=>{
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
                if (stopInteraction) {
                    stopInteraction();
                }
                e?.end({
                    success: t
                });
            }).catch((t)=>{
                e?.end({
                    success: false
                });
                if (failInteraction) {
                    failInteraction(r("getErrorSafe")(t));
                }
            });
        }}/>);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, chatEntryPoint, onNewsletterOpen, serverMessageId }) {
            const i = serverMessageId != null && o("WAWebNewsletterGatingUtils").isNavigationToForwardedNewsletterMessageEnabled() ? yield o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                newsletterJid: o("WAJids").toNewsletterJid(chat.id.toJid()),
                serverId: serverMessageId,
                chatEntryPoint,
                onMessageDeleted: function() {
                    o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterMessageDeletedPopup, {}));
                }
            }) : yield o("WAWebCmd").Cmd.openChatBottom({
                chat,
                chatEntryPoint
            });
            onNewsletterOpen?.();
            return i;
        });
        return m.apply(this, arguments);
    }
    l.openNewsletterPreviewChat = u;
}, 98);