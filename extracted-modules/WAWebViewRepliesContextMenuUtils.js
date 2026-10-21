__d("WAWebViewRepliesContextMenuUtils", [
    "WAWebThreadMsgUtils",
    "WAWebThreadsGating"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (!o("WAWebThreadsGating").isViewRepliesContextMenuEnabled(t)) {
            return null;
        }
        const n = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(e);
        if (n != null) {
            return n;
        }
        const t_viewRepliesThreads = t.viewRepliesThreads;
        if (t_viewRepliesThreads != null) {
            return t_viewRepliesThreads.hasThreadForMsgKey(e.id) ?? null;
        }
        return null;
    }
    l.getViewRepliesThreadIdForContextMenu = e;
}, 98);