__d("WAWebNewsletterOpenQPLLogger", [
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
        annotate(t, n) {
            const r = {
                int: {
                    unread_count: t.unreadCount,
                    origin: o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(n),
                    user_role: o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(t.newsletterMetadata)
                }
            };
            this.$1?.annotate(r);
        }
        end({ success }) {
            this.$1?.end(success ? 2 : 3);
        }
    }
    l.WAWebNewsletterOpenQPLLogger = s;
}, 98);