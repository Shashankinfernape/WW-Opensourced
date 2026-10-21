__d("WAWebEmojiVariantCollection", [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiVariantModel",
    "WAWebUserPrefsKeys",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setVariant = function(t, variant) {
            const e = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t);
            if (e != null && e !== "") {
                this.gadd({
                    id: e,
                    variant
                });
            } else {
                throw r("err")("attempt to store variantless emoji");
            }
        };
        t_prototype.getVariant = function(t) {
            if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(t)) {
                const e = this.get(t);
                if (e) {
                    return o("WAWebEmoji").EmojiUtil.normalizeEmoji(e.variant);
                }
                return null;
            }
            throw r("err")("attempt to get variantless emoji");
        };
        t_prototype.getVariantIfExists = function(t) {
            if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(t)) {
                const e = this.get(t);
                if (e) {
                    return o("WAWebEmoji").EmojiUtil.normalizeEmoji(e.variant);
                }
                return null;
            }
            return null;
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebEmojiVariantModel");
    e.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.EMOJI_VARIANT_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1000
    };
    const s = new e;
    l.EmojiVariantCollection = s;
}, 98);