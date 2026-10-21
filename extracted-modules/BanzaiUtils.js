__d("BanzaiUtils", [
    "BanzaiConsts",
    "FBLogger",
    "cr:1172",
    "cr:9985",
    "cr:9986"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    var l = {
        canSend: function(r) {
            return r[2] >= n("cr:9985")() - (e || (e = n("BanzaiConsts"))).EXPIRY;
        },
        filterPost: function(r, o, a, i) {
            if (i.overlimit || !i.sendMinimumOnePost && r[4] + i.currentSize > (e || (e = n("BanzaiConsts"))).BATCH_SIZE_LIMIT) {
                return true;
            }
            const r___meta = r.__meta;
            if (r___meta.status != null && r___meta.status >= (e || (e = n("BanzaiConsts"))).POST_SENT || !l.canSend(r)) {
                return false;
            }
            if (r___meta.status != null && r___meta.status >= (e || (e = n("BanzaiConsts"))).POST_INFLIGHT) {
                return true;
            }
            const needs_compression = r___meta.compress ?? true;
            const u = (r___meta.webSessionId ?? "null") + (r___meta.userID ?? "null") + (r___meta.appID ?? "null") + (needs_compression ? "compress" : "");
            let c = i.wadMap.get(u);
            if (!c) {
                c = {
                    app_id: r___meta.appID,
                    needs_compression,
                    posts: [],
                    user: r___meta.userID,
                    webSessionId: r___meta.webSessionId
                };
                i.wadMap.set(u, c);
                o.push(c);
            }
            r___meta.status = (e || (e = n("BanzaiConsts"))).POST_INFLIGHT;
            if (Array.isArray(c.posts)) {
                c.posts.push(r);
            } else {
                n("FBLogger")("banzai").mustfix("Posts were a string instead of array");
            }
            a.push(r);
            i.currentSize += r[4];
            if (i.currentSize >= (e || (e = n("BanzaiConsts"))).BATCH_SIZE_LIMIT) {
                i.overlimit = true;
            }
            return i.keepRetryable && !!r___meta.retry;
        },
        resetPostStatus: function(r) {
            r.__meta.status = (e || (e = n("BanzaiConsts"))).POST_READY;
        },
        retryPost: function(r, o, a, i) {
            const t = r;
            t[3] = (t[3] || 0) + 1;
            if (i != null && t[3] > i) {
                t.__meta.status = (e || (e = n("BanzaiConsts"))).POST_SENT;
                return;
            }
            t.__meta.status = (e || (e = n("BanzaiConsts"))).POST_READY;
            if (t.__meta.retry !== true && o >= 400 && o < 600) {
                a.push(r);
            }
        },
        wrapData: function(r, o, a, i, l) {
            const t = [
                r,
                o,
                a,
                0,
                l ?? (o ? JSON.stringify(o).length : 0)
            ];
            t.__meta = {
                appID: n("cr:9986").getAppID(),
                retry: i === true,
                status: (e || (e = n("BanzaiConsts"))).POST_READY,
                userID: n("cr:9986").getPossiblyNonFacebookUserID(),
                webSessionId: n("cr:1172").getId()
            };
            return t;
        }
    };
    a.exports = l;
}, null);