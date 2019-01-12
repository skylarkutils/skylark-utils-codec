/**
 * skylark-utils-codec - The codec features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-stream/DecodeStream","./codec"],function(e,r,n){"use strict";var t=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),a=4017,o=799,i=3406,s=2276,c=1567,f=3784,l=5793,u=2896;function h(e,r){for(var n,t,a=0,o=[],i=16;i>0&&!e[i-1];)i--;o.push({children:[],index:0});var s,c=o[0];for(n=0;n<i;n++){for(t=0;t<e[n];t++){for((c=o.pop()).children[c.index]=r[a];c.index>0;)c=o.pop();for(c.index++,o.push(c);o.length<=n;)o.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s;a++}n+1<i&&(o.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s)}return o[0].children}function m(e,r,n){return 64*((e.blocksPerLine+1)*r+n)}function v(e,r,n,a,o,i,s,c,f){n.precision,n.samplesPerLine,n.scanLines;var l=n.mcusPerLine,u=n.progressive,h=(n.maxH,n.maxV,r),v=0,b=0;function p(){if(b>0)return v>>--b&1;if(255===(v=e[r++])){var n=e[r++];if(n)throw"unexpected marker: "+(v<<8|n).toString(16)}return b=7,v>>>7}function d(e){for(var r=e;;){if("number"==typeof(r=r[p()]))return r;if("object"!=typeof r)throw"invalid huffman sequence"}}function k(e){for(var r=0;e>0;)r=r<<1|p(),e--;return r}function g(e){if(1===e)return 1===p()?1:-1;var r=k(e);return r>=1<<e-1?r:r+(-1<<e)+1}var C=0;var y,D=0;function w(e,r,n,t,a){var o=n%l;r(e,m(e,(n/l|0)*e.v+t,o*e.h+a))}function P(e,r,n){r(e,m(e,n/e.blocksPerLine|0,n%e.blocksPerLine))}var T,L,x,A,S,_,I=a.length;_=u?0===i?0===c?function(e,r){var n=d(e.huffmanTableDC),t=0===n?0:g(n)<<f;e.blockData[r]=e.pred+=t}:function(e,r){e.blockData[r]|=p()<<f}:0===c?function(e,r){if(C>0)C--;else for(var n=i,a=s;n<=a;){var o=d(e.huffmanTableAC),c=15&o,l=o>>4;if(0!==c){var u=t[n+=l];e.blockData[r+u]=g(c)*(1<<f),n++}else{if(l<15){C=k(l)+(1<<l)-1;break}n+=16}}}:function(e,r){for(var n,a,o=i,c=s,l=0;o<=c;){var u=t[o];switch(D){case 0:if(l=(a=d(e.huffmanTableAC))>>4,0==(n=15&a))l<15?(C=k(l)+(1<<l),D=4):(l=16,D=1);else{if(1!==n)throw"invalid ACn encoding";y=g(n),D=l?2:3}continue;case 1:case 2:e.blockData[r+u]?e.blockData[r+u]+=p()<<f:0==--l&&(D=2===D?3:0);break;case 3:e.blockData[r+u]?e.blockData[r+u]+=p()<<f:(e.blockData[r+u]=y<<f,D=0);break;case 4:e.blockData[r+u]&&(e.blockData[r+u]+=p()<<f)}o++}4===D&&0==--C&&(D=0)}:function(e,r){var n=d(e.huffmanTableDC),a=0===n?0:g(n);e.blockData[r]=e.pred+=a;for(var o=1;o<64;){var i=d(e.huffmanTableAC),s=15&i,c=i>>4;if(0!==s){var f=t[o+=c];e.blockData[r+f]=g(s),o++}else{if(c<15)break;o+=16}}};var U,Y,M,R,J=0;for(Y=1===I?a[0].blocksPerLine*a[0].blocksPerColumn:l*n.mcusPerColumn,o||(o=Y);J<Y;){for(L=0;L<I;L++)a[L].pred=0;if(C=0,1===I)for(T=a[0],S=0;S<o;S++)P(T,_,J),J++;else for(S=0;S<o;S++){for(L=0;L<I;L++)for(M=(T=a[L]).h,R=T.v,x=0;x<R;x++)for(A=0;A<M;A++)w(T,_,J,x,A);J++}if(b=0,(U=e[r]<<8|e[r+1])<=65280)throw"marker was not found";if(!(U>=65488&&U<=65495))break;r+=2}return r-h}function b(e,r,n){for(var t,h,m,v,b,p,d,k,g,C,y,D,w,P,T,L,x,A=e.quantizationTable,S=e.blockData,_=0;_<64;_+=8)g=S[r+_],C=S[r+_+1],y=S[r+_+2],D=S[r+_+3],w=S[r+_+4],P=S[r+_+5],T=S[r+_+6],L=S[r+_+7],g*=A[_],0!=(C|y|D|w|P|T|L)?(C*=A[_+1],y*=A[_+2],D*=A[_+3],w*=A[_+4],P*=A[_+5],T*=A[_+6],L*=A[_+7],h=(t=(t=l*g+128>>8)+(h=l*w+128>>8)+1>>1)-h,x=(m=y)*f+(v=T)*c+128>>8,m=m*c-v*f+128>>8,d=(b=(b=u*(C-L)+128>>8)+(d=P<<4)+1>>1)-d,p=(k=(k=u*(C+L)+128>>8)+(p=D<<4)+1>>1)-p,v=(t=t+(v=x)+1>>1)-v,m=(h=h+m+1>>1)-m,x=b*s+k*i+2048>>12,b=b*i-k*s+2048>>12,k=x,x=p*o+d*a+2048>>12,p=p*a-d*o+2048>>12,d=x,n[_]=t+k,n[_+7]=t-k,n[_+1]=h+d,n[_+6]=h-d,n[_+2]=m+p,n[_+5]=m-p,n[_+3]=v+b,n[_+4]=v-b):(x=l*g+512>>10,n[_]=x,n[_+1]=x,n[_+2]=x,n[_+3]=x,n[_+4]=x,n[_+5]=x,n[_+6]=x,n[_+7]=x);for(var I=0;I<8;++I)g=n[I],0!=((C=n[I+8])|(y=n[I+16])|(D=n[I+24])|(w=n[I+32])|(P=n[I+40])|(T=n[I+48])|(L=n[I+56]))?(h=(t=4112+((t=l*g+2048>>12)+(h=l*w+2048>>12)+1>>1))-h,x=(m=y)*f+(v=T)*c+2048>>12,m=m*c-v*f+2048>>12,v=x,d=(b=(b=u*(C-L)+2048>>12)+(d=P)+1>>1)-d,p=(k=(k=u*(C+L)+2048>>12)+(p=D)+1>>1)-p,x=b*s+k*i+2048>>12,b=b*i-k*s+2048>>12,k=x,x=p*o+d*a+2048>>12,p=p*a-d*o+2048>>12,L=(t=t+v+1>>1)-k,C=(h=h+m+1>>1)+(d=x),T=h-d,y=(m=h-m)+p,P=m-p,D=(v=t-v)+b,w=v-b,g=(g=t+k)<16?0:g>=4080?255:g>>4,C=C<16?0:C>=4080?255:C>>4,y=y<16?0:y>=4080?255:y>>4,D=D<16?0:D>=4080?255:D>>4,w=w<16?0:w>=4080?255:w>>4,P=P<16?0:P>=4080?255:P>>4,T=T<16?0:T>=4080?255:T>>4,L=L<16?0:L>=4080?255:L>>4,S[r+I]=g,S[r+I+8]=C,S[r+I+16]=y,S[r+I+24]=D,S[r+I+32]=w,S[r+I+40]=P,S[r+I+48]=T,S[r+I+56]=L):(x=(x=l*g+8192>>14)<-2040?0:x>=2024?255:x+2056>>4,S[r+I]=x,S[r+I+8]=x,S[r+I+16]=x,S[r+I+24]=x,S[r+I+32]=x,S[r+I+40]=x,S[r+I+48]=x,S[r+I+56]=x)}function p(e,r){for(var n=r.blocksPerLine,t=r.blocksPerColumn,a=new Int16Array(64),o=0;o<t;o++)for(var i=0;i<n;i++){b(r,m(r,o,i),a)}return r.blockData}function d(e){return e<=0?0:e>=255?255:e}var k=e.klass({parse:function(e){function r(){var r=e[s]<<8|e[s+1];return s+=2,r}function n(){var n=r(),t=e.subarray(s,s+n-2);return s+=t.length,t}function a(e){for(var r=Math.ceil(e.samplesPerLine/8/e.maxH),n=Math.ceil(e.scanLines/8/e.maxV),t=0;t<e.components.length;t++){J=e.components[t];var a=Math.ceil(Math.ceil(e.samplesPerLine/8)*J.h/e.maxH),o=Math.ceil(Math.ceil(e.scanLines/8)*J.v/e.maxV),i=r*J.h,s=64*(n*J.v)*(i+1);J.blockData=new Int16Array(s),J.blocksPerLine=a,J.blocksPerColumn=o}e.mcusPerLine=r,e.mcusPerColumn=n}var o,i,s=0,c=(e.length,null),f=null,l=[],u=[],m=[],b=r();if(65496!==b)throw"SOI not found";for(b=r();65497!==b;){var d,k,g;switch(b){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var C=n();65504===b&&74===C[0]&&70===C[1]&&73===C[2]&&70===C[3]&&0===C[4]&&(c={version:{major:C[5],minor:C[6]},densityUnits:C[7],xDensity:C[8]<<8|C[9],yDensity:C[10]<<8|C[11],thumbWidth:C[12],thumbHeight:C[13],thumbData:C.subarray(14,14+3*C[12]*C[13])}),65518===b&&65===C[0]&&100===C[1]&&111===C[2]&&98===C[3]&&101===C[4]&&(f={version:C[5]<<8|C[6],flags0:C[7]<<8|C[8],flags1:C[9]<<8|C[10],transformCode:C[11]});break;case 65499:for(var y=r()+s-2;s<y;){var D=e[s++],w=new Uint16Array(64);if(D>>4==0)for(k=0;k<64;k++)w[t[k]]=e[s++];else{if(D>>4!=1)throw"DQT: invalid table spec";for(k=0;k<64;k++)w[t[k]]=r()}l[15&D]=w}break;case 65472:case 65473:case 65474:if(o)throw"Only single frame JPEGs supported";r(),(o={}).extended=65473===b,o.progressive=65474===b,o.precision=e[s++],o.scanLines=r(),o.samplesPerLine=r(),o.components=[],o.componentIds={};var P,T=e[s++],L=0,x=0;for(d=0;d<T;d++){P=e[s];var A=e[s+1]>>4,S=15&e[s+1];L<A&&(L=A),x<S&&(x=S);var _=e[s+2];g=o.components.push({h:A,v:S,quantizationTable:l[_]}),o.componentIds[P]=g-1,s+=3}o.maxH=L,o.maxV=x,a(o);break;case 65476:var I=r();for(d=2;d<I;){var U=e[s++],Y=new Uint8Array(16),M=0;for(k=0;k<16;k++,s++)M+=Y[k]=e[s];var R=new Uint8Array(M);for(k=0;k<M;k++,s++)R[k]=e[s];d+=17+M,(U>>4==0?m:u)[15&U]=h(Y,R)}break;case 65501:r(),i=r();break;case 65498:r();var J,H=e[s++],G=[];for(d=0;d<H;d++){var N=o.componentIds[e[s++]];J=o.components[N];var V=e[s++];J.huffmanTableDC=m[V>>4],J.huffmanTableAC=u[15&V],G.push(J)}var j=e[s++],z=e[s++],B=e[s++],q=v(e,s,o,G,i,j,z,B>>4,15&B);s+=q;break;case 65535:255!==e[s]&&s--;break;default:if(255===e[s-3]&&e[s-2]>=192&&e[s-2]<=254){s-=3;break}throw"unknown JPEG marker "+b.toString(16)}b=r()}for(this.width=o.samplesPerLine,this.height=o.scanLines,this.jfif=c,this.adobe=f,this.components=[],d=0;d<o.components.length;d++)J=o.components[d],this.components.push({output:p(0,J),scaleX:J.h/o.maxH,scaleY:J.v/o.maxV,blocksPerLine:J.blocksPerLine,blocksPerColumn:J.blocksPerColumn});this.numComponents=this.components.length},_getLinearizedBlockData:function(e,r){var n,t,a,o,i,s,c,f,l,u,h,m=this.width/e,v=this.height/r,b=0,p=this.components.length,d=e*r*p,k=new Uint8Array(d),g=new Uint32Array(e);for(c=0;c<p;c++){for(t=(n=this.components[c]).scaleX*m,a=n.scaleY*v,b=c,h=n.output,o=n.blocksPerLine+1<<3,i=0;i<e;i++)f=0|i*t,g[i]=(4294967288&f)<<3|7&f;for(s=0;s<r;s++)for(u=o*(4294967288&(f=0|s*a))|(7&f)<<3,i=0;i<e;i++)k[b]=h[u+g[i]],b+=p}var C=this.decodeTransform;if(C)for(c=0;c<d;)for(f=0,l=0;f<p;f++,c++,l+=2)k[c]=(k[c]*C[l]>>8)+C[l+1];return k},_isColorConversionNeeded:function(){return!(!this.adobe||!this.adobe.transformCode)||3===this.numComponents},_convertYccToRgb:function(e){for(var r,n,t,a=0,o=e.length;a<o;a+=3)r=e[a],n=e[a+1],t=e[a+2],e[a]=d(r-179.456+1.402*t),e[a+1]=d(r+135.459-.344*n-.714*t),e[a+2]=d(r-226.816+1.772*n);return e},_convertYcckToRgb:function(e){for(var r,n,t,a,o=0,i=0,s=e.length;i<s;i+=4){r=e[i];var c=(n=e[i+1])*(-660635669420364e-19*n+.000437130475926232*(t=e[i+2])-54080610064599e-18*r+.00048449797120281*(a=e[i+3])-.154362151871126)-122.67195406894+t*(-.000957964378445773*t+.000817076911346625*r-.00477271405408747*a+1.53380253221734)+r*(.000961250184130688*r-.00266257332283933*a+.48357088451265)+a*(-.000336197177618394*a+.484791561490776),f=107.268039397724+n*(219927104525741e-19*n-.000640992018297945*t+.000659397001245577*r+.000426105652938837*a-.176491792462875)+t*(-.000778269941513683*t+.00130872261408275*r+.000770482631801132*a-.151051492775562)+r*(.00126935368114843*r-.00265090189010898*a+.25802910206845)+a*(-.000318913117588328*a-.213742400323665),l=n*(-.000570115196973677*n-263409051004589e-19*t+.0020741088115012*r-.00288260236853442*a+.814272968359295)-20.810012546947+t*(-153496057440975e-19*t-.000132689043961446*r+.000560833691242812*a-.195152027534049)+r*(.00174418132927582*r-.00255243321439347*a+.116935020465145)+a*(-.000343531996510555*a+.24165260232407);e[o++]=d(c),e[o++]=d(f),e[o++]=d(l)}return e},_convertYcckToCmyk:function(e){for(var r,n,t,a=0,o=e.length;a<o;a+=4)r=e[a],n=e[a+1],t=e[a+2],e[a]=d(434.456-r-1.402*t),e[a+1]=d(119.541-r+.344*n+.714*t),e[a+2]=d(481.816-r-1.772*n);return e},_convertCmykToRgb:function(e){for(var r,n,t,a,o=0,i=-16581375,s=0,c=e.length;s<c;s+=4){var f=(r=e[s])*(-4.387332384609988*r+54.48615194189176*(n=e[s+1])+18.82290502165302*(t=e[s+2])+212.25662451639585*(a=e[s+3])-72734.4411664936)+n*(1.7149763477362134*n-5.6096736904047315*t-17.873870861415444*a-1401.7366389350734)+t*(-2.5217340131683033*t-21.248923337353073*a+4465.541406466231)-a*(21.86122147463605*a+48317.86113160301),l=r*(8.841041422036149*r+60.118027045597366*n+6.871425592049007*t+31.159100130055922*a-20220.756542821975)+n*(-15.310361306967817*n+17.575251261109482*t+131.35250912493976*a-48691.05921601825)+t*(4.444339102852739*t+9.8632861493405*a-6341.191035517494)-a*(20.737325471181034*a+47890.15695978492),u=r*(.8842522430003296*r+8.078677503112928*n+30.89978309703729*t-.23883238689178934*a-3616.812083916688)+n*(10.49593273432072*n+63.02378494754052*t+50.606957656360734*a-28620.90484698408)+t*(.03296041114873217*t+115.60384449646641*a-49363.43385999684)-a*(22.33816807309886*a+45932.16563550634);e[o++]=f>=0?255:f<=i?0:255+f*(1/255/255)|0,e[o++]=l>=0?255:l<=i?0:255+l*(1/255/255)|0,e[o++]=u>=0?255:u<=i?0:255+u*(1/255/255)|0}return e},getData:function(e,r,n){if(this.numComponents>4)throw"Unsupported color mode";var t=this._getLinearizedBlockData(e,r);if(3===this.numComponents)return this._convertYccToRgb(t);if(4===this.numComponents){if(this._isColorConversionNeeded())return n?this._convertYcckToRgb(t):this._convertYcckToCmyk(t);if(n)return this._convertCmykToRgb(t)}return t}});var g=r.inherit({klassName:"JpegStream",init:function(e,r,n){this.dict=r,this.isAdobeImage=!1,this.colorTransform=r.get("ColorTransform")||-1,function(e){for(var r=Math.max(e.length-16,1024),n=0;n<r;++n){if(255==e[n]&&238==e[n+1]&&0==e[n+2]&&14==e[n+3]&&65==e[n+4]&&100==e[n+5]&&111==e[n+6]&&98==e[n+7]&&101==e[n+8]&&0==e[n+9])return!0;if(255==e[n]&&192==e[n+1])break}return!1}(e)&&(this.isAdobeImage=!0,e=function(e){var r=new Uint8Array([255,236,0,8,69,77,66,69,68,0]),n=new Uint8Array(e.length+r.length);return n.set(e,r.length),n[0]=e[0],n[1]=e[1],n.set(r,2),n}(e)),this.bytes=e,this.overrided()},ensureBuffer:function(e){if(!this.bufferLength)try{var r=new k;-1!=this.colorTransform&&(r.colorTransform=this.colorTransform),r.parse(this.bytes);var n=r.width,t=r.height,a=r.getData(n,t);this.buffer=a,this.bufferLength=a.length}catch(e){error("JPEG error: "+e)}},getIR:function(){return bytesToString(this.bytes)},getChar:function(){error("internal error: getChar is not valid on JpegStream")},isNativelySupported:function(e,r){var n=ColorSpace.parse(this.dict.get("ColorSpace","CS"),e,r);return"DeviceGray"===n.name||"DeviceRGB"===n.name||"DeviceCMYK"===n.name&&!this.isAdobeImage&&this.colorTransform<1},isNativelyDecodable:function(e,r){var n=ColorSpace.parse(this.dict.get("ColorSpace","CS"),e,r).numComps;return 1==n||3==n}});return n.jpeg={JpegImage:k,JpegStream:g}});
//# sourceMappingURL=sourcemaps/jpeg.js.map
