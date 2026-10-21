__d("WAWebNoteCollection", [
    "WAWebBaseCollection",
    "WAWebNoteModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.queriedChatJids = new Set;
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.maybeGetNoteByChatJid = function(t) {
            const e = this.findFirst(function(e) {
                return e.chatJid === t;
            });
            return e ?? null;
        };
        t_prototype.hasCachedQueryForChatJid = function(t) {
            return this.queriedChatJids.has(t);
        };
        t_prototype.updateCollectionFromDB = function(t, n) {
            this.queriedChatJids.add(t);
            if (n != null) {
                this.add(new (o("WAWebNoteModel")).Note(n), {
                    merge: true
                });
            }
        };
        t_prototype.removeNotesByIds = function(t) {
            const e = this;
            const n = t.filter((t)=>e.get(t) == null);
            this.remove(t);
            if (n.length > 0) {
                this.trigger("remove_uncached_notes", n);
            }
        };
        t_prototype.purgeNotesByChatJid = function(t) {
            const e = this.where({
                chatJid: t
            });
            this.remove(e);
            this.queriedChatJids.delete(t);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNoteModel").Note;
    const s = new e;
    l.NoteCollection = s;
}, 98);