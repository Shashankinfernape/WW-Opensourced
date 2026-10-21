__d("WAWebGetThumbnailTypeForMediaInteractiveMsg", [
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMmsMediaTypes",
    "err"
], function(t, n, r, o, a, i, l) {
    function e({ msg }) {
        const msg_interactiveHeader = msg.interactiveHeader;
        if (msg_interactiveHeader?.mediaType != null) {
            switch(msg_interactiveHeader.mediaType){
                case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT:
                    return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT;
                case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO:
                    return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO;
                default:
                    break;
            }
        }
        throw r("err")("getThumbnailTypeForMediaMsg: unsupported msg type");
    }
    l.default = e;
}, 98);