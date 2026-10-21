__d("WAWebNewsletterFollowQPLLogger", [
    "WAWebEncryptedRid",
    "WAWebNewsletterQplGatingUtils",
    "WAWebQplFlowWrapper",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("qpl")._(1026960759, "186");
    const s = r("qpl")._(1026957851, "1164");
    class u {
        constructor({ discoverySurface, eventSurface, eventUnit, markerId }){
            if (o("WAWebNewsletterQplGatingUtils").isNewsletterQplLoggingEnabledForMarkerId(markerId)) {
                var l = {
                    int: {
                        discovery_surface: discoverySurface,
                        surface: eventSurface,
                        unit: eventUnit
                    },
                    string: {
                        encrypted_rid: o("WAWebEncryptedRid").getEncryptedRid()
                    }
                };
                var instanceKey = Math.round(Math.random() * 1000000000);
                var c = markerId === 1026960759 ? e : s;
                this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(c, {
                    annotations: l,
                    instanceKey
                });
            }
        }
        markFetchStart() {
            this.$1?.addPoint("follow_unfollow_request_start");
        }
        markFetchEnd() {
            this.$1?.addPoint("follow_unfollow_request_end");
        }
        markPDFNShown() {
            this.$1?.addPoint("accept_pdfn_start");
        }
        markPDFNDismissed() {
            this.$1?.addPoint("accept_pdfn_start_end");
        }
        end(t) {
            this.$1?.end(t);
        }
    }
    l.WAWebNewsletterFollowQPLLogger = u;
}, 98);