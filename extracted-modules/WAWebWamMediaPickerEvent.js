__d("WAWebWamMediaPickerEvent", [
    "WALogger",
    "WAWebWamEnumMediaType"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        document: (s = o("WAWebWamEnumMediaType")).MEDIA_TYPE.DOCUMENT,
        video: s.MEDIA_TYPE.VIDEO,
        gif: s.MEDIA_TYPE.GIF,
        image: s.MEDIA_TYPE.PHOTO,
        audio: s.MEDIA_TYPE.AUDIO
    };
    class c {
        constructor(e, t, n){
            this.mediaPickerSentUnchanged = 0;
            this.mediaPickerDeleted = 0;
            this.mediaPickerChanged = new Set;
            this.mediaPickerCroppedRotated = new Set;
            this.mediaPickerDrawing = new Set;
            this.mediaPickerStickers = new Set;
            this.mediaPickerText = new Set;
            this.mediaPickerLikeDoc = 0;
            this.mediaPickerNotLikeDoc = 0;
            this.mediaPickerT = 0;
            this.t0 = Date.now();
            this.mediaType = u[t];
            this.mediaPickerOrigin = n;
            this.medias = new Set;
            this.medias.add(e);
            this.changeTypes = {
                mediaPickerCroppedRotated: this.mediaPickerCroppedRotated,
                mediaPickerDrawing: this.mediaPickerDrawing,
                mediaPickerStickers: this.mediaPickerStickers,
                mediaPickerText: this.mediaPickerText
            };
        }
        onAdd(t) {
            this.medias.add(t);
            if (this.mediaType === "document") {
                this.mediaPickerLikeDoc++;
            } else {
                this.mediaPickerNotLikeDoc++;
            }
        }
        onChange(t, n) {
            this.mediaPickerChanged.add(t);
            this.changeTypes[n].add(t);
        }
        onDelete(t) {
            this.medias.delete(t);
            this.mediaPickerDeleted++;
            if (this.medias.size === 0) {
                return this.onCancel();
            }
        }
        onSend() {
            this.mediaPickerSent = this.medias.size;
            this.mediaPickerSentUnchanged = this.mediaPickerSent - this.mediaPickerChanged.size;
            return this.dataPreflight();
        }
        onCancel() {
            this.mediaPickerSent = 0;
            this.mediaPickerSentUnchanged = 0;
            return this.dataPreflight();
        }
        onPause() {
            this.mediaPickerT += Date.now() - (this.t0 || 0);
            this.t0 = null;
        }
        dataPreflight() {
            let mediaPickerSentUnchanged = this.mediaPickerSentUnchanged;
            if (isNaN(mediaPickerSentUnchanged)) {
                mediaPickerSentUnchanged = 0;
                const n = this.mediaPickerSent != null && this.mediaPickerSent !== 0 ? this.mediaPickerSent : "undefined";
                const r = this.mediaPickerChanged.size || "undefined";
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sentUnchanged NaN: sent=",
                    " changed=",
                    ""
                ])), n, r).sendLogs("mediaPickerSentUnchange is not a number");
            }
            return {
                mediaPickerSent: this.mediaPickerSent,
                mediaPickerSentUnchanged,
                mediaPickerT: this.mediaPickerT + (Date.now() - (this.t0 || 0)),
                mediaType: this.mediaType,
                mediaPickerOrigin: this.mediaPickerOrigin,
                mediaPickerChanged: this.mediaPickerChanged.size,
                mediaPickerCroppedRotated: this.mediaPickerCroppedRotated.size,
                mediaPickerDrawing: this.mediaPickerDrawing.size,
                mediaPickerStickers: this.mediaPickerStickers.size,
                mediaPickerText: this.mediaPickerText.size,
                mediaPickerLikeDoc: this.mediaPickerLikeDoc,
                mediaPickerNotLikeDoc: this.mediaPickerNotLikeDoc,
                mediaPickerDeleted: this.mediaPickerDeleted
            };
        }
    }
    l.default = c;
}, 98);