import{cL as e,y as t,dh as i,di as s,dj as o,dk as r,bj as a,dl as n,bk as d,bn as l}from"./card-67eaecc9.js";import{m as h}from"./audio-557099cb.js";import{h as u,M as c}from"./lazyload-7e37567e.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=({finisher:e,descriptor:t})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return null!=e&&(r.finisher=function(t){e(t,s)}),r}{const o=i.constructor;void 0!==t&&Object.defineProperty(i,s,t(s)),null==e||e(o,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function y(e,t){return v({descriptor:i=>{const s={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[t]&&(this[t]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==s?s:null),this[t]}}return s}})}var p="img, video {\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n}";customElements.whenDefined("ha-hls-player").then((()=>{let v=class extends(customElements.get("ha-hls-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(u(this._video),this._video.currentTime=e)}async setControls(e){this._video&&(this._video.controls=e??this.controls)}isPaused(){return this._video?.paused??!0}render(){if(this._error){if(this._errorIsFatal)return e(this,this._error);console.error(this._error)}return t`
        <video
          id="video"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&u(this._video,c)}}
          @loadeddata=${e=>{i(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:h(this._video)}})}}
          @volumechange=${()=>s(this)}
          @play=${()=>o(this)}
          @pause=${()=>r(this)}
        ></video>
      `}static get styles(){return[super.styles,a(p),n`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};d([y("#video")],v.prototype,"_video",void 0),v=d([l("frigate-card-ha-hls-player")],v)}));export{p as c,y as i};
