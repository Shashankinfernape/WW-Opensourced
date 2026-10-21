__d("WAWebCommonCTWAConsumerTransparency", [
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebConsumerTransparencyInfoIconModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebMaybeInsertCtwaConsumerDisclosureMsg"
], function(t, n, r, o, a, i, l) {
    const e = new WeakSet;
    function s(e) {
        let t;
        if (!((t = e.contact) != null && t.isBusiness)) {
            return false;
        }
        const n = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
        if (n != null && n.is3pdag) {
            return false;
        }
        const r = o("WAWebConsumerTransparencyInfoIconModel").ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
        return !(!r && n == null);
    }
    function u() {
        return !o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled() && (o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() || o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiBrazilEnabled());
    }
    function c({ chat, conversionData, conversionSource, ctwaSignals, fromMe }) {
        if (!(conversionData == null || conversionSource == null)) {
            const l = o("WAWebGetCTWAEligibilityFromConversion").getCTWAEligibilityFromConversion({
                conversionData,
                conversionSource,
                ctwaSignals
            });
            if (l?.is3pdag !== true) {
                const s = chat.contact;
                if (s != null) {
                    if (s.isBusiness === true) {
                        m(chat);
                        return;
                    }
                    if (fromMe) {
                        d(chat, s);
                    }
                }
            }
        }
    }
    function d(chat, n) {
        if (!e.has(n)) {
            e.add(n);
            const r = function() {
                if (n.isBusiness === true) {
                    n.off("change:isBusiness", r);
                    e.delete(n);
                    m(chat);
                }
            };
            n.on("change:isBusiness", r);
        }
    }
    function m(chat) {
        const t = o("WAWebConsumerTransparencyInfoIconModel").ConsumerTransparencyInfoIconModel.shouldShowIcon(chat.id);
        if (!t) {
            o("WAWebConsumerTransparencyInfoIconModel").ConsumerTransparencyInfoIconModel.add(chat.id);
            o("WAWebMaybeInsertCtwaConsumerDisclosureMsg").maybeInsertCtwaConsumerDisclosureMsg(chat);
        }
    }
    l.shouldShowConsumerTransparencyDisclosure = s;
    l.shouldShowROWConsumerDisclosure = u;
    l.handleConsumerTransparencyForNewMsg = c;
}, 98);