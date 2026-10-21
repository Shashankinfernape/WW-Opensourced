__d("WAWebWamMediaPickerStatsLogger", [
    "WAWebMediaPickerWamEvent",
    "WAWebWamMediaPickerEvent"
], function(t, n, r, o, a, i, l) {
    const e = {
        mediaPickerCroppedRotated: "mediaPickerCroppedRotated",
        mediaPickerDrawing: "mediaPickerCroppedRotated",
        mediaPickerStickers: "mediaPickerCroppedRotated",
        mediaPickerText: "mediaPickerCroppedRotated"
    };
    class s {
        constructor(){
            this.mediaByTypeAndOrigin = new Map;
            this.mediaEventReverseIndex = new Map;
            this.chatRecipients = null;
        }
        $1(t, n) {
            return `${t}_${n}`;
        }
        $2(t) {
            const e = new (o("WAWebMediaPickerWamEvent")).MediaPickerWamEvent(babelHelpers.extends({}, t, {
                chatRecipients: this.chatRecipients
            }));
            e.commit();
        }
        $3(t, n, o) {
            const e = this.$1(n, o);
            const a = this.mediaByTypeAndOrigin.get(e);
            if (a) {
                a.onAdd(t);
                this.mediaEventReverseIndex.set(t, a);
            } else {
                const i = new (r("WAWebWamMediaPickerEvent"))(t, n, o);
                this.mediaByTypeAndOrigin.set(e, i);
                this.mediaEventReverseIndex.set(t, i);
            }
        }
        logChange(t, n) {
            const e = this.mediaEventReverseIndex.get(t);
            if (e) {
                e.onChange(t, n);
            }
        }
        logDelete(t) {
            const e = this.mediaEventReverseIndex.get(t);
            if (e) {
                e.onDelete(t);
            }
        }
        logSend(t) {
            const e = this;
            this.mediaByTypeAndOrigin.forEach((n)=>{
                e.$2(babelHelpers.extends({}, n.onSend(), {
                    isViewOnce: t.isViewOnce
                }));
            });
        }
        logCancel() {
            const e = this;
            this.mediaByTypeAndOrigin.forEach((t)=>{
                e.$2(t.onCancel());
            });
        }
        logAdd(t, n, r) {
            if (!this.mediaEventReverseIndex.get(t)) {
                this.$3(t, n, r);
            }
        }
    }
    l.MediaPickerStatsLogger = s;
}, 98);