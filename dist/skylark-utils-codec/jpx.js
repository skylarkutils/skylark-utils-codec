/**
 * skylark-utils-codec - The codec features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-stream/DecodeStream","./codec"],function(t,i,e){"use strict";var s=function(){function t(t){for(var i=1,e=0;t>i;)i<<=1,e++;return e}(function(){function i(i,e){var s=t(Math.max(i,e))+1;this.levels=[];for(var n=0;n<s;n++){var r={width:i,height:e,items:[]};this.levels.push(r),i=Math.ceil(i/2),e=Math.ceil(e/2)}}i.prototype={reset:function(t,i){for(var e=0,s=0;e<this.levels.length;){var n=t+i*(r=this.levels[e]).width;if(n in r.items){s=r.items[n];break}r.index=n,t>>=1,i>>=1,e++}var r;e--,(r=this.levels[e]).items[r.index]=s,this.currentLevel=e,delete this.value},incrementValue:function(){var t=this.levels[this.currentLevel];t.items[t.index]++},nextLevel:function(){var t,i=this.currentLevel,e=(t=this.levels[i]).items[t.index];return--i<0?(this.value=e,!1):(this.currentLevel=i,(t=this.levels[i]).items[t.index]=e,!0)}}})(),function(){function i(i,e,s){var n=t(Math.max(i,e))+1;this.levels=[];for(var r=0;r<n;r++){for(var h=new Uint8Array(i*e),a=0,o=h.length;a<o;a++)h[a]=s;var c={width:i,height:e,items:h};this.levels.push(c),i=Math.ceil(i/2),e=Math.ceil(e/2)}}i.prototype={reset:function(t,i,e){for(var s=0;s<this.levels.length;){var n=this.levels[s],r=t+i*n.width;n.index=r;var h=n.items[r];if(255==h)break;if(h>e)return this.currentLevel=s,this.propagateValues(),!1;t>>=1,i>>=1,s++}return this.currentLevel=s-1,!0},incrementValue:function(t){var i=this.levels[this.currentLevel];i.items[i.index]=t+1,this.propagateValues()},propagateValues:function(){for(var t=this.currentLevel,i=(e=this.levels[t]).items[e.index];--t>=0;){var e;(e=this.levels[t]).items[e.index]=i}},nextLevel:function(){var t,i=this.currentLevel,e=(t=this.levels[i]).items[t.index];return t.items[t.index]=255,!(--i<0)&&(this.currentLevel=i,(t=this.levels[i]).items[t.index]=e,!0)}}}(),function(){var t=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}];function i(t,i,e){this.data=t,this.bp=i,this.dataEnd=e,this.chigh=t[i],this.clow=0,this.byteIn(),this.chigh=this.chigh<<7&65535|this.clow>>9&127,this.clow=this.clow<<7&65535,this.ct-=7,this.a=32768}i.prototype={byteIn:function(){var t=this.data,i=this.bp;255==t[i]?t[i+1]>143?(this.clow+=65280,this.ct=8):(i++,this.clow+=t[i]<<9,this.ct=7,this.bp=i):(i++,this.clow+=i<this.dataEnd?t[i]<<8:65280,this.ct=8,this.bp=i);this.clow>65535&&(this.chigh+=this.clow>>16,this.clow&=65535)},readBit:function(i){var e=t[i.index].qe;if(this.a-=e,this.chigh<e){var s=this.exchangeLps(i);return this.renormD(),s}if(this.chigh-=e,0==(32768&this.a)){s=this.exchangeMps(i);return this.renormD(),s}return i.mps},renormD:function(){do{0===this.ct&&this.byteIn(),this.a<<=1,this.chigh=this.chigh<<1&65535|this.clow>>15&1,this.clow=this.clow<<1&65535,this.ct--}while(0==(32768&this.a))},exchangeMps:function(i){var e,s=t[i.index];return this.a<s.qe?(e=1-i.mps,1==s.switchFlag&&(i.mps=1-i.mps),i.index=s.nlps):(e=i.mps,i.index=s.nmps),e},exchangeLps:function(i){var e,s=t[i.index];return this.a<s.qe?(this.a=s.qe,e=i.mps,i.index=s.nmps):(this.a=s.qe,e=1-i.mps,1==s.switchFlag&&(i.mps=1-i.mps),i.index=s.nlps),e}}}(),function(){var t=new Uint8Array([0,5,8,0,3,7,8,0,4,7,8,0,0,0,0,0,1,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8]),i=new Uint8Array([0,3,4,0,5,7,7,0,8,8,8,0,0,0,0,0,1,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8]),e=new Uint8Array([0,1,2,0,1,2,2,0,2,2,2,0,0,0,0,0,3,4,5,0,4,5,5,0,5,5,5,0,0,0,0,0,6,7,7,0,7,7,7,0,7,7,7,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8]);function s(t,i,e,s){return e?s?t?i?-1:0:-1:t&&i?0:1:t?i?-1:1:0}var n=[{contextLabel:13,xorBit:0},{contextLabel:12,xorBit:0},{contextLabel:11,xorBit:0},{contextLabel:10,xorBit:0},{contextLabel:9,xorBit:0},{contextLabel:10,xorBit:1},{contextLabel:11,xorBit:1},{contextLabel:12,xorBit:1},{contextLabel:13,xorBit:1}];function r(s,n,r,h){this.width=s,this.height=n,this.contextLabelTable="HH"==r?e:"HL"==r?i:t;var a=s*n;this.neighborsSignificance=new Uint8Array(a),this.coefficentsSign=new Uint8Array(a),this.coefficentsMagnitude=new Uint32Array(a),this.processingFlags=new Uint8Array(a);for(var o=new Uint8Array(this.width*this.height),c=0,l=o.length;c<l;c++)o[c]=h;this.bitsDecoded=o,this.reset()}r.prototype={setDecoder:function(t){this.decoder=t},reset:function(){this.uniformContext={index:46,mps:0},this.runLengthContext={index:3,mps:0},this.contexts=[],this.contexts.push({index:4,mps:0});for(var t=1;t<=16;t++)this.contexts.push({index:0,mps:0})},setNeighborsSignificance:function(t,i){var e=this.neighborsSignificance,s=this.width,n=this.height,r=t*s+i;t>0&&(i>0&&(e[r-s-1]+=16),i+1<s&&(e[r-s+1]+=16),e[r-s]+=4),t+1<n&&(i>0&&(e[r+s-1]+=16),i+1<s&&(e[r+s+1]+=16),e[r+s]+=4),i>0&&(e[r-1]+=1),i+1<s&&(e[r+1]+=1),e[r]|=128},runSignificancePropogationPass:function(){for(var t=this.decoder,i=this.width,e=this.height,s=this.coefficentsMagnitude,n=this.coefficentsSign,r=(this.contextLabels,this.neighborsSignificance),h=this.processingFlags,a=this.contexts,o=this.contextLabelTable,c=this.bitsDecoded,l=0,p=i*e;l<p;l++)h[l]&=-2;for(var f=0;f<e;f+=4)for(var g=0;g<i;g++)for(var m=f*i+g,u=0;u<4;u++,m+=i){var d=f+u;if(d>=e)break;if(!s[m]&&r[m]){var v=a[o[r[m]]];if(t.readBit(v)){var w=this.decodeSignBit(d,g);n[m]=w,s[m]=1,this.setNeighborsSignificance(d,g),h[m]|=2}c[m]++,h[m]|=1}}},decodeSignBit:function(t,i){var e=this.width,r=this.height,h=t*e+i,a=this.coefficentsMagnitude,o=this.coefficentsSign,c=s(i>0&&a[h-1],o[h-1],i+1<e&&a[h+1],o[h+1]),l=s(t>0&&a[h-e],o[h-e],t+1<r&&a[h+e],o[h+e]),p=n[3*(1-c)+(1-l)],f=p.contextLabel,g=this.contexts[f];return this.decoder.readBit(g)^p.xorBit},runMagnitudeRefinementPass:function(){for(var t=this.decoder,i=this.width,e=this.height,s=this.coefficentsMagnitude,n=this.neighborsSignificance,r=this.contexts,h=this.bitsDecoded,a=this.processingFlags,o=0;o<e;o+=4)for(var c=0;c<i;c++)for(var l=0;l<4;l++){var p=o+l;if(p>=e)break;var f=p*i+c;if(s[f]&&0==(1&a[f])){var g=16;if(0!=(2&a[f])){a[p*i+c]^=2;var m=n[f];g=(3&m)+(m>>2&3)+(m>>4&7)>=1?15:14}var u=r[g],d=t.readBit(u);s[f]=s[f]<<1|d,h[f]++,a[f]|=1}}},runCleanupPass:function(){for(var t=this.decoder,i=this.width,e=this.height,s=this.neighborsSignificance,n=(this.significanceState,this.coefficentsMagnitude),r=this.coefficentsSign,h=this.contexts,a=this.contextLabelTable,o=this.bitsDecoded,c=this.processingFlags,l=i,p=2*i,f=3*i,g=0;g<e;g+=4)for(var m=0;m<i;m++){var u,d,v=g*i+m,w=0,x=v;if(g+3<e&&0===c[v]&&0===c[v+l]&&0===c[v+p]&&0===c[v+f]&&0===s[v]&&0===s[v+l]&&0===s[v+p]&&0===s[v+f]){if(u=this.runLengthContext,!t.readBit(u)){o[v]++,o[v+l]++,o[v+p]++,o[v+f]++;continue}u=this.uniformContext,d=g+(w=t.readBit(u)<<1|t.readBit(u)),x+=w*i;var F=this.decodeSignBit(d,m);r[x]=F,n[x]=1,this.setNeighborsSignificance(d,m),c[x]|=2,x=v;for(var b=g;b<=d;b++,x+=i)o[x]++;w++}for(;w<4&&!((d=g+w)>=e);w++,x+=i)if(!n[x]&&0==(1&c[x])){if(u=h[a[s[x]]],1==t.readBit(u)){F=this.decodeSignBit(d,m);r[x]=F,n[x]=1,this.setNeighborsSignificance(d,m),c[x]|=2}o[x]++}}},checkSegmentationSymbol:function(){var t=this.decoder,i=this.uniformContext;if(10!=(t.readBit(i)<<3|t.readBit(i)<<2|t.readBit(i)<<1|t.readBit(i)))throw"Invalid segmentation symbol"}}}();var i=function(){function t(){}return t.prototype.calculate=function(t,i,e){for(var s=t[0],n=1,r=t.length,h=1;n<r;n+=3,h++)s=this.iterate(s,t[n],t[n+1],t[n+2],i,e);return s},t.prototype.expand=function(t,i,e){var s=i-1,n=i+1,r=i+e-2,h=i+e;t[s--]=t[n++],t[h++]=t[r--],t[s--]=t[n++],t[h++]=t[r--],t[s--]=t[n++],t[h++]=t[r--],t[s--]=t[n++],t[h++]=t[r--]},t.prototype.iterate=function(t,i,e,s,n,r){for(var h=t.width,a=t.height,o=t.items,c=i.width,l=i.height,p=i.items,f=e.width,g=e.height,m=e.items,u=s.width,d=s.height,v=s.items,w=h+c,x=a+g,F=new Float32Array(w*x),b=0,q=a;b<q;b++)for(var y=b*h,L=2*b*w,B=0,S=h;B<S;B++,y++,L+=2)F[L]=o[y];for(b=0,q=l;b<q;b++)for(y=b*c,L=2*b*w+1,B=0,S=c;B<S;B++,y++,L+=2)F[L]=p[y];for(b=0,q=g;b<q;b++)for(y=b*f,L=(2*b+1)*w,B=0,S=f;B<S;B++,y++,L+=2)F[L]=m[y];for(b=0,q=d;b<q;b++)for(y=b*u,L=(2*b+1)*w+1,B=0,S=u;B<S;B++,y++,L+=2)F[L]=v[y];for(var M=new Float32Array(Math.max(w,x)+8),A=new Float32Array(M),k=new Float32Array(M),U=0;U<x;U++)if(1!=w){y=U*w,L=4;for(var C=0;C<w;C++,y++,L++)A[L]=F[y];this.expand(A,4,w),this.filter(A,4,w,n,k),y=U*w,L=4;for(C=0;C<w;C++,y++,L++)F[y]=k[L]}else n%1!=0&&(F[U*w]/=2);for(C=0;C<w;C++)if(1!=x){for(y=C,L=4,U=0;U<x;U++,y+=w,L++)A[L]=F[y];this.expand(A,4,x),this.filter(A,4,x,r,k),y=C,L=4;for(U=0;U<x;U++,y+=w,L++)F[y]=k[L]}else r%1!=0&&(F[C]/=2);return{width:w,height:x,items:F}},t}();(function(){function t(){i.call(this)}t.prototype=Object.create(i.prototype),t.prototype.filter=function(t,i,e,s,n){for(var r=Math.floor(s/2),h=Math.floor((s+e)/2),a=i-s%1,o=1.230174104914001,c=a-2,l=r-1,p=h+2;l<p;l++,c+=2)n[c]=o*t[c];for(c=a-3,l=r-2,p=h+2;l<p;l++,c+=2)n[c]=.8128930661159609*t[c];for(c=a-2,l=r-1,p=h+2;l<p;l++,c+=2)n[c]-=.443506852043971*(n[c-1]+n[c+1]);for(c=a-1,l=r-1,p=h+1;l<p;l++,c+=2)n[c]-=.882911075530934*(n[c-1]+n[c+1]);for(c=a,l=r,p=h+1;l<p;l++,c+=2)n[c]-=-.052980118572961*(n[c-1]+n[c+1]);for(c=a+1,l=r,p=h;l<p;l++,c+=2)n[c]-=-1.586134342059924*(n[c-1]+n[c+1])}})(),function(){function t(){i.call(this)}t.prototype=Object.create(i.prototype),t.prototype.filter=function(t,i,e,s,n){for(var r=Math.floor(s/2),h=Math.floor((s+e)/2),a=i-s%1,o=r,c=h+1,l=a;o<c;o++,l+=2)n[l]=t[l]-Math.floor((t[l-1]+t[l+1]+2)/4);for(o=r,c=h,l=a+1;o<c;o++,l+=2)n[l]=t[l]+Math.floor((n[l-1]+n[l+1])/2)}}()}(),n=i.inherit({klassName:"JpxStream",init:function(t,i){this.dict=i,this.bytes=t,this.overrided()},ensureBuffer:function(t){if(!this.bufferLength){var i=new s;i.parse(this.bytes);var e=i.width,n=i.height,r=i.componentsCount;1!=r&&3!=r&&4!=r&&error("JPX with "+r+" components is not supported");for(var h=new Uint8Array(e*n*r),a=0,o=i.tiles.length;a<o;a++){var c,l,p,f,g,m,u,d=i.tiles[a],v=d[0].width,w=d[0].height,x=d[0].left,F=d[0].top;switch(r){case 1:p=d[0].items,c=e*F+x,u=e-v,l=0;for(var b=0;b<w;b++){for(var q=0;q<v;q++)h[c++]=p[l++];c+=u}break;case 3:p=d[0].items,f=d[1].items,g=d[2].items,c=3*(e*F+x),u=3*(e-v),l=0;for(b=0;b<w;b++){for(q=0;q<v;q++)h[c++]=p[l],h[c++]=f[l],h[c++]=g[l],l++;c+=u}break;case 4:p=d[0].items,f=d[1].items,g=d[2].items,m=d[3].items,c=4*(e*F+x),u=4*(e-v),l=0;for(b=0;b<w;b++){for(q=0;q<v;q++)h[c++]=p[l],h[c++]=f[l],h[c++]=g[l],h[c++]=m[l],l++;c+=u}}}this.buffer=h,this.bufferLength=h.length}},getChar:function(){error("internal error: getChar is not valid on JpxStream")}});return e.jpx={JpxImage:s,JpxStream:n}});
//# sourceMappingURL=sourcemaps/jpx.js.map
