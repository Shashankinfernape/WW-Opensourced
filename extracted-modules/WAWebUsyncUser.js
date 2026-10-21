__d("WAWebUsyncUser", [
    "WALogger",
    "WAWebNonEmptyString",
    "WAWebWidValidator",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        withId(t) {
            this.$1 = t;
            return this;
        }
        withLid(t) {
            this.$2 = t;
            return this;
        }
        withPnJid(t) {
            this.$3 = t;
            return this;
        }
        withDeviceHash(t) {
            this.$5 = o("WAWebNonEmptyString").asMaybeNonEmptyString(t);
            return this;
        }
        withTs(t) {
            this.$6 = t;
            return this;
        }
        withExpectedTs(t) {
            this.$7 = t;
            return this;
        }
        withPhone(t) {
            this.$4 = t;
            return this;
        }
        withPersonaId(t) {
            this.$8 = t;
            return this;
        }
        withUsername(t) {
            this.$9 = t;
            return this;
        }
        withUsernameKey(t) {
            this.$10 = t;
            return this;
        }
        withType(t) {
            this.$11 = t;
            return this;
        }
        withTcToken(t) {
            this.$12 = t;
            return this;
        }
        getDeviceHash() {
            return this.$5;
        }
        getPhone() {
            return this.$4;
        }
        getId() {
            return this.$1;
        }
        getLid() {
            return this.$2;
        }
        getPnJid() {
            return this.$3;
        }
        getTs() {
            return this.$6;
        }
        getExpectedTs() {
            return this.$7;
        }
        getPersonaId() {
            return this.$8;
        }
        getUsername() {
            return this.$9;
        }
        getPin() {
            return this.$10;
        }
        getType() {
            return this.$11;
        }
        getTcToken() {
            return this.$12;
        }
        validate() {
            if (this.$1 == null && this.$4 == null && this.$9 == null && this.$3 == null) {
                throw r("err")("user must have an id, phone, username or pnJid");
            }
            if (this.$1) {
                const t = o("WAWebWidValidator").validateWid(this.$1.toString());
                if (!t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "USync user created with invalid jid: ",
                        ""
                    ])), this.$1?.toString());
                }
                return t;
            }
            return true;
        }
    }
    l.USyncUser = s;
}, 98);