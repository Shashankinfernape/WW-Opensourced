__d("WAWebAdvertiseEntryPointQplHelpers", [
    "$InternalEnum",
    "WAWebQplFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        PROVIDER_MOUNT: "provider_mount",
        FETCH_TOKEN_START: "fetch_token_start",
        FETCH_TOKEN_END: "fetch_token_end",
        LINKED_ACCOUNTS_QUERY_START: "linked_accounts_query_start",
        LINKED_ACCOUNTS_QUERY_END: "linked_accounts_query_end",
        LINKED_ACCOUNTS_QUERY_FAIL: "linked_accounts_query_fail",
        ACCOUNT_INFO_SET: "account_info_set",
        ENTRY_POINT_RENDERED: "entry_point_rendered"
    });
    const s = "navbar";
    const u = 30000;
    let c = null;
    let attempt_count = 0;
    let m = null;
    let p = null;
    let failure_elapsed_ms = null;
    let is_online = null;
    let g = null;
    let h = 0;
    function y() {
        const t = c;
        if (t != null && t.isActive()) {
            t.endCancel();
        }
        h += 1;
        attempt_count = 0;
        m = null;
        p = null;
        failure_elapsed_ms = null;
        is_online = null;
        g = null;
        c = o("WAWebQplFlow").startQplFlow(r("qpl")._(1029384627, "3661"), {
            annotations: {
                string: {
                    surface: s
                }
            },
            timeoutInMs: u
        });
        b(e.PROVIDER_MOUNT);
    }
    function C() {
        attempt_count += 1;
        return attempt_count === 1;
    }
    function b(e) {
        c?.addPoint(e);
    }
    function v(e, t, n) {
        m = e;
        p = t ?? null;
        failure_elapsed_ms = n?.elapsedMs ?? null;
        is_online = n?.isOnline ?? null;
    }
    function S() {
        if (c == null || g != null) {
            return null;
        }
        g = "pending";
        return h;
    }
    function R(e, t) {
        if (e === h) {
            g = t;
        }
    }
    function L(t) {
        b(e.ENTRY_POINT_RENDERED);
        c?.endSuccess({
            int: {
                attempt_count
            },
            string: {
                outcome: t ? "visible" : "not_linked"
            }
        });
        c = null;
    }
    function E(e) {
        const string = {
            outcome: "suppressed"
        };
        if (m != null) {
            string.failure_reason = m;
        }
        if (p != null) {
            string.failure_detail = p;
        }
        if (g != null) {
            string.network_probe = g;
        }
        c?.addAnnotations({
            bool: {
                is_online
            },
            int: {
                attempt_count,
                failure_elapsed_ms
            },
            string
        });
        c?.endFail(e);
        c = null;
    }
    l.AdvertiseEntryPointQplPoint = e;
    l.startAdvertiseEntryPointQpl = y;
    l.advertiseEntryPointQplBeginAttempt = C;
    l.advertiseEntryPointQplAddPoint = b;
    l.advertiseEntryPointQplRecordFailureReason = v;
    l.advertiseEntryPointQplStartNetworkProbe = S;
    l.advertiseEntryPointQplRecordNetworkProbe = R;
    l.endAdvertiseEntryPointQplVisible = L;
    l.endAdvertiseEntryPointQplSuppressed = E;
}, 98);