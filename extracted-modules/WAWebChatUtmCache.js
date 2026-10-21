__d("WAWebChatUtmCache", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.utmReadChatIds = new Set;
        }
        deleteChatId(t) {
            this.utmReadChatIds.delete(t);
        }
        hasRead(t) {
            return this.utmReadChatIds.has(t);
        }
        read(t) {
            this.utmReadChatIds.add(t);
        }
        clearAll() {
            this.utmReadChatIds.clear();
        }
    }
    const l = new e;
    i.default = l;
}, 66);