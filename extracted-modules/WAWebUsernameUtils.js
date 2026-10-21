__d("WAWebUsernameUtils", [
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebUsernameTypes"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = new Uint8Array(4);
        self.crypto.getRandomValues(e);
        const t = Array.from(e, function(e) {
            return (e % 10).toString();
        });
        const n = t.join("");
        return o("WAWebUsernameTypes").asUsernameKey(n);
    }
    function s(e) {
        const t = o("WAWebContactCollection").ContactCollection.findFirst(function(t) {
            return o("WAWebUsernameTypes").serializeMaybeUsername(t.username) === e;
        });
        if (!t || !t.id.isUser()) {
            return null;
        }
        const n = o("WAWebLidMigrationUtils").toUserLid(t.id);
        return n;
    }
    function u(e) {
        return e === "exists" || e === "key-required" || e === "already-contact";
    }
    l.generateUsernameKeySuggestion = e;
    l.getLIDByUsername = s;
    l.usernameInputStateIsValid = u;
}, 98);