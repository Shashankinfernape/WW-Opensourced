__d("WAWebShareContentUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebShareContentUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumShareContentUserJourneyAction",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e = o("WAWebGetSharedSessionId").getSharedSessionId()){
            this.loggingEnabled = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("wa_web_share_content_uj");
            this.$1 = e;
        }
        funnelStart({ entryPoint, forwardUserJourneyFunnelId, selectedMessages, uiSurface }) {
            this.$5({
                uiSurface,
                action: o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.FUNNEL_START,
                forwardUserJourneyFunnelId,
                entryPoint,
                selectedMessages
            });
        }
        contactPickerDisplayed() {
            this.$5({
                action: o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.CONTACT_PICKER_DISPLAYED
            });
        }
        recipientsSelected(numberOfRecipients, hasStatusRecipient) {
            this.$5({
                action: o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.RECIPIENTS_SELECTED,
                numberOfRecipients,
                hasStatusRecipient
            });
        }
        contentShared(captionAdded) {
            this.$5({
                action: o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.CONTENT_SHARED,
                captionAdded
            });
        }
        cancel() {
            this.$5({
                action: o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.CANCEL
            });
        }
        $5(n) {
            if (this.loggingEnabled) {
                const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [share content] Unified session ID is null"
                    ])));
                    return;
                }
                if (u(n.action) && this.$2 == null) {
                    this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                    this.$3 = n.uiSurface;
                    this.$4 = n.entryPoint;
                }
                const a = this.$2;
                if (a != null) {
                    const i = new (o("WAWebShareContentUserJourneyWamEvent")).ShareContentUserJourneyWamEvent;
                    i.appSessionId = this.$1;
                    i.unifiedSessionId = t;
                    i.userJourneyFunnelId = a;
                    if (this.$3 != null) {
                        i.uiSurface = this.$3;
                    }
                    i.userJourneyEventMs = o("WATimeUtils").unixTimeMs();
                    i.shareContentUserJourneyAction = n.action;
                    if (n.forwardUserJourneyFunnelId != null) {
                        i.forwardUserJourneyFunnelId = n.forwardUserJourneyFunnelId;
                    }
                    if (this.$4 != null) {
                        i.shareContentUserJourneyEntryPoint = this.$4;
                    }
                    if (n.numberOfRecipients != null) {
                        i.numberOfRecipients = n.numberOfRecipients;
                    }
                    if (n.hasStatusRecipient != null) {
                        i.hasStatusRecipient = n.hasStatusRecipient;
                    }
                    if (n.captionAdded != null) {
                        i.captionAdded = n.captionAdded;
                    }
                    if (n.selectedMessages != null) {
                        const l = n.selectedMessages;
                        i.mediaCount = r("countWhere")(l, function(e) {
                            return o("WAWebMsgGetters").getIsMedia(e);
                        });
                        i.hasFiles = l.some((e)=>e?.mediaData?.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT);
                    }
                    i.commit();
                    if (c(n.action)) {
                        this.$2 = null;
                        this.$4 = null;
                        this.$3 = null;
                    }
                }
            }
        }
    }
    function u(action) {
        return action === o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.FUNNEL_START;
    }
    function c(action) {
        return action === o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.CONTENT_SHARED || action === o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.CANCEL || action === o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.ABANDONED || action === o("WAWebWamEnumShareContentUserJourneyAction").SHARE_CONTENT_USER_JOURNEY_ACTION.SAVE_STATUS;
    }
    const d = new s;
    l.ShareContentUserJourneyLogger = d;
}, 98);