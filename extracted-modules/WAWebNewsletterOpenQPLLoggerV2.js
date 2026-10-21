__d("WAWebNewsletterOpenQPLLoggerV2", [
    "WAWebEncryptedRid",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebQplFlowWrapper",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("qpl")._(1026963966, "1165");
    class s {
        constructor(){
            this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(e);
        }
        annotate({ discoverySurface, isCached, role, unreadCount }) {
            const l = {
                int: {
                    unread_count: unreadCount,
                    discovery_surface: discoverySurface
                },
                string: {
                    channel_user_type: role ? o("WAWebNewsletterLoggingUtils").getChannelUserStringFromChannelUserType(o("WAWebNewsletterLoggingUtils").getChannelUserType(role)) : undefined,
                    encrypted_rid: o("WAWebNewsletterGatingUtils").isNewsletterOpenQPLUserRidLoggingEnabled() ? o("WAWebEncryptedRid").getEncryptedRid() : undefined
                },
                bool: {
                    is_cached: isCached
                }
            };
            this.$1?.annotate(l);
        }
        markFetchStart() {
            this.$1?.addPoint("messages_fetch_start");
        }
        markFetchEnd() {
            this.$1?.addPoint("messages_fetch_end");
        }
        end({ success }) {
            this.$1?.end(success ? 2 : 3);
        }
    }
    l.WAWebNewsletterOpenQPLLoggerV2 = s;
}, 98);