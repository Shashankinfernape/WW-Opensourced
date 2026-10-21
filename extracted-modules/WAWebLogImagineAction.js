__d("WAWebLogImagineAction", [
    "WAWebImagineActionsWamEvent",
    "WAWebWamEnumImagineActionSource",
    "WAWebWamEnumImagineActionTarget"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ action, source = o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE.ATTACHMEMT_TRAY, target = o("WAWebWamEnumImagineActionTarget").IMAGINE_ACTION_TARGET.MEDIA_INPUT, mediaType, maxIndex, isCancelled, isSent, eventContext }) {
        const m = new (o("WAWebImagineActionsWamEvent")).ImagineActionsWamEvent({
            aiSessionId: eventContext.aiSessionId,
            imagineAction: action,
            imagineActionSource: source,
            imagineActionTarget: target,
            imagineMediaType: mediaType,
            isCancelled,
            isSent,
            maxIndex,
            metaAiConversationThreadId: eventContext.metaAiConversationThreadId,
            unifiedSessionId: eventContext.unifiedSessionId
        });
        m.commit();
    }
    l.logImagineAction = e;
}, 98);