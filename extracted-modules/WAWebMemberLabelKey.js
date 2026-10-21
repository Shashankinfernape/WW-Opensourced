__d("WAWebMemberLabelKey", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(e){
            this.chatId = e.chatId;
            this.member = e.member;
            var t = [
                this.chatId,
                this.member
            ];
            this.serialized = t.join("_");
        }
        toString() {
            return this.serialized;
        }
        equals(n) {
            return n instanceof e && this.toString() === n.toString();
        }
    }
    i.default = e;
}, 66);