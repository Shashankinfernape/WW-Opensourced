__d("WAWebGenerateChatReportingTokenContent", [], function(t, n, r, o, a, i) {
    function e(e) {
        const n = new TextEncoder().encode(e.body ?? "");
        return self.crypto.getRandomValues(new Uint8Array(n.length));
    }
    i.default = e;
}, 66);