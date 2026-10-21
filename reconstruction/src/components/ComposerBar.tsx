import React, { useState, useRef } from 'react';
import { Icon } from '../icons/Icon';

interface ComposerBarProps {
  onSendMessage: (text: string) => void;
  onAttachClick?: () => void;
  onEmojiClick?: () => void;
}

export const ComposerBar: React.FC<ComposerBarProps> = ({
  onSendMessage,
  onAttachClick,
  onEmojiClick,
}) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSendMessage(trimmed);
    setText('');
    if (inputRef.current) {
      inputRef.current.innerText = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.innerText || '');
  };

  const buttonClass =
    'html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf';

  return (
    <footer
      tabIndex={-1}
      className="x1n2onr6 xhtitgo x9f619 x1okw0bk xo1ph6p xh8yej3 xexx8yu xyri2b x18d9i69 x1c1uobl x1wiwyrm"
    >
      <div className="xnpuxes x1n2onr6 xhtitgo x9f619 x78zum5 x1q0g3np xuk3077 xjbqb8w x1wiwyrm xquzyny xvc5jky x11t971q copyable-area">
        <div data-testid="compose-box" className="x1n2onr6 x98rzlu xh8yej3 xeuugli x1gg8mnh">
          <span className="">
            <div className="x78zum5 xuk3077">
              <div className="x78zum5 x98rzlu xuk3077 xeuugli">
                {/* Unified input container pill wrapping attach, emoji, and text input */}
                <div
                  tabIndex={-1}
                  className="x9f619 x12lumcd x1qrby5j xeuugli x6prxxf x1fcty0u x1fc57z9 xk7ee7b x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1a2a7pz x13w7htt x78zum5 x123j3cw x1gabggj xs9asl8 xaso8d8 x1uvdrpn x14mko6t xcytdqz x1wiwyrm xt7dq6l x17m9png x91sizk x1vva9xg x1jfkl46 x6s0dn4 xkfubxc x1p0mfcu"
                >
                  {/* Attach Button */}
                  <div className="x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4">
                    <div>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <button
                          data-tab="10"
                          aria-label="Attach"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          tabIndex={0}
                          type="button"
                          onClick={onAttachClick}
                          className={buttonClass}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                                <span aria-hidden="true" className="xxk0z11 xvy4d1p">
                                  <Icon name="ic-attach-file" size={24} />
                                </span>
                              </div>
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
                            </div>
                          </div>
                        </button>
                      </span>
                    </div>
                  </div>

                  {/* Emojis, GIFs, Stickers Button */}
                  <div className="x78zum5 x98rzlu xpvyfi4 x1fns5xo x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xbelrpt">
                    <div>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <button
                          data-tab="10"
                          aria-label="Emojis, GIFs, Stickers"
                          aria-disabled="false"
                          tabIndex={0}
                          type="button"
                          onClick={onEmojiClick}
                          className={buttonClass}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                                <span aria-hidden="true" className="xxk0z11 xvy4d1p">
                                  <Icon name="sticker-smiley" size={24} />
                                </span>
                              </div>
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
                            </div>
                          </div>
                        </button>
                      </span>
                    </div>
                  </div>

                  {/* Text Input Box */}
                  <div className="x1n2onr6 xh8yej3 xjdcl3y">
                    <div
                      ref={inputRef}
                      contentEditable
                      data-testid="conversation-compose-box-input"
                      role="textbox"
                      spellCheck="true"
                      tabIndex={10}
                      aria-label="Type a message"
                      aria-placeholder="Type a message"
                      data-tab="10"
                      onInput={handleInput}
                      onKeyDown={handleKeyDown}
                      style={{
                        maxHeight: '11.76em',
                        minHeight: '1.47em',
                        userSelect: 'text',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        outline: 'none',
                      }}
                      className="x1hx0egp x6ikm8r x1odjw0f x1k6rcq7 x6prxxf"
                    >
                      <p className="selectable-text copyable-text x15bjb6t x1n2onr6" dir="auto">
                        <br data-lexical-managed-linebreak="true" />
                      </p>
                    </div>
                    {!text && (
                      <div aria-hidden="true">
                        <div className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf">
                          Type a message
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="x78zum5 xpvyfi4" />
                </div>

                {/* Mic / Send Button */}
                <div className="x9f619 x78zum5 x6s0dn4 xl56j7k xpvyfi4 x2lah0s x1c4vz4f x1fns5xo x1ba4aug x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1pse0pq xpcyujq">
                  <div>
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                      <div className="x1n2onr6">
                        <button
                          data-tab="11"
                          aria-label={text.trim() ? 'Send' : 'Voice message'}
                          aria-disabled="false"
                          tabIndex={0}
                          type="button"
                          onClick={text.trim() ? handleSend : undefined}
                          className={buttonClass}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                                <span aria-hidden="true" className="xxk0z11 xvy4d1p">
                                  {text.trim() ? (
                                    <Icon name="send" size={24} />
                                  ) : (
                                    <Icon name="ic-mic" size={24} />
                                  )}
                                </span>
                              </div>
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
                            </div>
                          </div>
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ComposerBar;
