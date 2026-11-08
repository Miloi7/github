(()=>{var Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ou=0,Vc=1,Bu=2;var Hc=1,zu=2,$n=3,li=0,Qt=1,Vt=2,di=0,Wi=1,en=2,Gc=3,Wc=4,ku=5,Mi=100,Vu=101,Hu=102,Gu=103,Wu=104,Xu=200,Yu=201,qu=202,$u=203,aa=204,la=205,Zu=206,Ju=207,Ku=208,ju=209,Qu=210,ed=211,td=212,nd=213,id=214,ka=0,Va=1,Ha=2,Xi=3,Ga=4,Wa=5,Xa=6,Ya=7,Xc=0,sd=1,rd=2,fi=0,od=1,ad=2,ld=3,qa=4,cd=5,hd=6,ud=7;var Yc=300,ji=301,Qi=302,Ys=303,$a=304,co=306,Yi=1e3,Ln=1001,ca=1002,on=1003,dd=1004;var ho=1005;var Un=1006,Za=1007;var Pi=1008;var Bn=1009,qc=1010,$c=1011,qs=1012,Ja=1013,Ii=1014,zn=1015,$s=1016,Ka=1017,ja=1018,Zs=1020,Zc=35902,Jc=35899,Kc=1021,jc=1022,wn=1023,Ps=1026,Js=1027,Qa=1028,el=1029,Qc=1030,tl=1031;var nl=1033,uo=33776,fo=33777,po=33778,mo=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,yl=37816,xl=37817,vl=37818,bl=37819,Ml=37820,Sl=37821,El=36492,Tl=36494,wl=36495,Al=36283,Rl=36284,Cl=36285,Pl=36286;var wr=2300,ha=2301,oa=2302,Rc=2400,Cc=2401,Pc=2402;var fd=3200,pd=3201;var eh=0,md=1,pi="",Ut="srgb",qi="srgb-linear",Ar="linear",lt="srgb";var Hi=7680;var Ic=519,gd=512,_d=513,yd=514,th=515,xd=516,vd=517,bd=518,Md=519,ua=35044;var nh="300 es",Dn=2e3,Rr=2001;var Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,Mr=Math.PI/180,Is=180/Math.PI;function Wn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function ih(n,e){return(n%e+e)%e}function qf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $f(n,e,t){return n!==e?(t-n)/(e-n):0}function Sr(n,e,t){return(1-t)*n+t*e}function Zf(n,e,t,i){return Sr(n,e,1-Math.exp(-t*i))}function Jf(n,e=1){return e-Math.abs(ih(n,e*2)-e)}function Kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ep(n,e){return n+Math.random()*(e-n)}function tp(n){return n*(.5-Math.random())}function np(n){n!==void 0&&(eu=n);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(n){return n*Mr}function sp(n){return n*Is}function rp(n){return(n&n-1)===0&&n!==0}function op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ap(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),p=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*p,a*c);break;case"YZY":n.set(l*p,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*p,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var go={DEG2RAD:Mr,RAD2DEG:Is,generateUUID:Wn,clamp:Ge,euclideanModulo:ih,mapLinear:qf,inverseLerp:$f,lerp:Sr,damp:Zf,pingpong:Jf,smoothstep:Kf,smootherstep:jf,randInt:Qf,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:lp,normalize:ot,denormalize:In},K=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},En=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==p||c!==d||h!==g){let m=1-a,f=l*p+c*d+h*g+u*_,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let C=Math.sqrt(S),A=Math.atan2(C,f*E);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let x=a*E;if(l=l*m+p*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*p,e[t+1]=l*g+h*p+c*u-a*d,e[t+2]=c*g+h*d+a*p-l*u,e[t+3]=h*g-a*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),p=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new w,tu=new En,We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],d=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],S=s[4],x=s[7],C=s[2],A=s[5],I=s[8];return r[0]=o*_+a*E+l*C,r[3]=o*m+a*S+l*A,r[6]=o*f+a*x+l*I,r[1]=c*_+h*E+u*C,r[4]=c*m+h*S+u*A,r[7]=c*f+h*x+u*I,r[2]=p*_+d*E+g*C,r[5]=p*m+d*S+g*A,r[8]=p*f+d*x+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,d=c*r-o*l,g=t*u+i*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tc=new We;function sh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sd(){let n=Cr("canvas");return n.style.display="block",n}var nu={};function Ls(n){n in nu||(nu[n]=!0,console.warn(n))}function Ed(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var iu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){let n={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qi]:{primaries:e,whitePoint:i,transfer:Ar,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}var et=cp();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ds,da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Cr("canvas")),ds.width=e.width,ds.height=e.height;let s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hp=0,Ds=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?da.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,ic=new w,Kt=class n extends Xn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=Un,o=Pi,a=wn,l=Bn,c=n.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Wn(),this.name="",this.source=new Ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Yc;Kt.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(d+1)/2,C=(f+1)/2,A=(h+p)/4,I=(u+_)/4,D=(g+m)/4;return S>x&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=I/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=I/r,s=D/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(p-h)/E,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Xn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Kt(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ds(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends fa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Pr=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Lo.subVectors(this.max,hr),fs.subVectors(e.a,hr),ps.subVectors(e.b,hr),ms.subVectors(e.c,hr),gi.subVectors(ps,fs),_i.subVectors(ms,ps),Bi.subVectors(fs,ms);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!sc(t,fs,ps,ms,Lo)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,fs,ps,ms,Lo))?!1:(Do.crossVectors(gi,_i),t=[Do.x,Do.y,Do.z],sc(t,fs,ps,ms,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new w,new w,new w,new w,new w,new w,new w,new w],Rn=new w,Io=new jt,fs=new w,ps=new w,ms=new w,gi=new w,_i=new w,Bi=new w,hr=new w,Lo=new w,Do=new w,zi=new w;function sc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zi.fromArray(n,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dp=new jt,ur=new w,rc=new w,qn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(rc)),this.expandByPoint(ur.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ni=new w,oc=new w,Uo=new w,yi=new w,ac=new w,No=new w,lc=new w,ci=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oc.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(oc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Uo),a=yi.dot(this.direction),l=-yi.dot(Uo),c=yi.lengthSq(),h=Math.abs(1-o*o),u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(Uo,p),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){ac.subVectors(t,e),No.subVectors(i,e),lc.crossVectors(ac,No);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);let l=a*this.direction.dot(No.crossVectors(yi,No));if(l<0)return null;let c=a*this.direction.dot(ac.cross(yi));if(c<0||l+c>o)return null;let h=-a*yi.dot(lc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,p,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,p,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,p,d,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-p*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=p-_*u}else if(e.order==="XZY"){let p=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,i){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),xi.crossVectors(i,dn),xi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),xi.crossVectors(i,dn)),xi.normalize(),Fo.crossVectors(dn,xi),s[0]=xi.x,s[4]=Fo.x,s[8]=dn.x,s[1]=xi.y,s[5]=Fo.y,s[9]=dn.y,s[2]=xi.z,s[6]=Fo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],d=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],S=i[7],x=i[11],C=i[15],A=s[0],I=s[4],D=s[8],M=s[12],b=s[1],P=s[5],F=s[9],V=s[13],B=s[2],X=s[6],H=s[10],te=s[14],G=s[3],he=s[7],me=s[11],Me=s[15];return r[0]=o*A+a*b+l*B+c*G,r[4]=o*I+a*P+l*X+c*he,r[8]=o*D+a*F+l*H+c*me,r[12]=o*M+a*V+l*te+c*Me,r[1]=h*A+u*b+p*B+d*G,r[5]=h*I+u*P+p*X+d*he,r[9]=h*D+u*F+p*H+d*me,r[13]=h*M+u*V+p*te+d*Me,r[2]=g*A+_*b+m*B+f*G,r[6]=g*I+_*P+m*X+f*he,r[10]=g*D+_*F+m*H+f*me,r[14]=g*M+_*V+m*te+f*Me,r[3]=E*A+S*b+x*B+C*G,r[7]=E*I+S*P+x*X+C*he,r[11]=E*D+S*F+x*H+C*me,r[15]=E*M+S*V+x*te+C*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*p+i*c*p+s*a*d-i*l*d)+_*(+t*l*d-t*c*p+r*o*p-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*p+s*o*u-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*c-_*p*c+_*l*d-a*m*d-u*l*f+a*p*f,S=g*p*c-h*m*c-g*l*d+o*m*d+h*l*f-o*p*f,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*f+o*u*f,C=g*u*l-h*_*l-g*a*p+o*_*p+h*a*m-o*u*m,A=t*E+i*S+s*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=E*I,e[1]=(_*p*r-u*m*r-_*s*d+i*m*d+u*s*f-i*p*f)*I,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*I,e[3]=(u*l*r-a*p*r-u*s*c+i*p*c+a*s*d-i*l*d)*I,e[4]=S*I,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*f+t*p*f)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*I,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*d+t*l*d)*I,e[8]=x*I,e[9]=(g*u*r-h*_*r-g*i*d+t*_*d+h*i*f-t*u*f)*I,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*f+t*a*f)*I,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*I,e[12]=C*I,e[13]=(h*_*s-g*u*s+g*i*p-t*_*p-h*i*m+t*u*m)*I,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*I,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*p+t*a*p)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,d=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,S=l*h,x=l*u,C=i.x,A=i.y,I=i.z;return s[0]=(1-(_+f))*C,s[1]=(d+x)*C,s[2]=(g-S)*C,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(p+f))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+S)*I,s[9]=(m-E)*I,s[10]=(1-(p+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),p=(t+e)/(t-e),d=(i+s)/(i-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Rr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),p=-(t+e)/(t-e),d=-(i+s)/(i-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Dn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Rr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},gs=new w,Cn=new rt,fp=new w(0,0,0),pp=new w(1,1,1),xi=new w,Fo=new w,dn=new w,ru=new rt,ou=new En,Nn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mp=0,au=new w,_s=new En,ii=new rt,Oo=new w,dr=new w,gp=new w,_p=new En,lu=new w(1,0,0),cu=new w(0,1,0),hu=new w(0,0,1),uu={type:"added"},yp={type:"removed"},ys={type:"childadded",child:null},cc={type:"childremoved",child:null},Pt=class n extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Nn,i=new En,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new We}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oo.copy(e):Oo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(dr,Oo,this.up):ii.lookAt(Oo,dr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ii),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new w(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new w,si=new w,hc=new w,ri=new w,xs=new w,vs=new w,du=new w,uc=new w,dc=new w,fc=new w,pc=new at,mc=new at,gc=new at,oi=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),si.subVectors(i,t),hc.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(si),l=Pn.dot(hc),c=si.dot(si),h=si.dot(hc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),si.subVectors(e,t),Pn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,i),vs.subVectors(r,i),uc.subVectors(e,i);let l=xs.dot(uc),c=vs.dot(uc);if(l<=0&&c<=0)return t.copy(i);dc.subVectors(e,s);let h=xs.dot(dc),u=vs.dot(dc);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(xs,o);fc.subVectors(e,r);let d=xs.dot(fc),g=vs.dot(fc);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(vs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return du.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(du,a);let f=1/(m+_+p);return o=_*f,a=p*f,t.copy(i).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function _c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=ih(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_c(o,r,e+1/3),this.g=_c(o,r,e),this.b=_c(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.workingToColorSpace(Xt.copy(this),e),Math.round(Ge(Xt.r*255,0,255))*65536+Math.round(Ge(Xt.g*255,0,255))*256+Math.round(Ge(Xt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Xt.copy(this),t);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ut){et.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,s=Xt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Bo);let i=Sr(vi.h,Bo.h,t),s=Sr(vi.s,Bo.s,t),r=Sr(vi.l,Bo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new De;De.NAMES=Td;var xp=0,Fn=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Wi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==aa&&(i.blendSrc=this.blendSrc),this.blendDst!==la&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new w,zo=new K,vp=0,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ua,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}};var Ir=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lr=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var it=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},bp=0,Mn=new rt,yc=new Pt,bs=new w,fn=new jt,fr=new jt,zt=new w,wt=class n extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?Lr:Ir)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(fn.min,fr.min),fn.expandByPoint(zt),zt.addVectors(fn.max,fr.max),fn.expandByPoint(zt)):(fn.expandByPoint(fr.min),fn.expandByPoint(fr.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)zt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),zt.add(bs)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new w,l[D]=new w;let c=new w,h=new w,u=new w,p=new K,d=new K,g=new K,_=new w,m=new w;function f(D,M,b){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),p.fromBufferAttribute(r,D),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(p),g.sub(p);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[M].add(_),a[b].add(_),l[D].add(m),l[M].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,M=E.length;D<M;++D){let b=E[D],P=b.start,F=b.count;for(let V=P,B=P+F;V<B;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let S=new w,x=new w,C=new w,A=new w;function I(D){C.fromBufferAttribute(s,D),A.copy(C);let M=a[D];S.copy(M),S.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(A,M);let P=x.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,P)}for(let D=0,M=E.length;D<M;++D){let b=E[D],P=b.start,F=b.count;for(let V=P,B=P+F;V<B;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new Nt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=e(p,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new rt,ki=new ci,ko=new qn,pu=new w,Vo=new w,Ho=new w,Go=new w,xc=new w,Wo=new w,mu=new w,Xo=new w,gt=class extends Pt{constructor(e=new wt,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(xc.fromBufferAttribute(u,e),o?Wo.addScaledVector(xc,h):Wo.addScaledVector(xc.sub(t),h))}t.add(Wo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(ko.containsPoint(ki.origin)===!1&&(ki.intersectSphere(ko,pu)===null||ki.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(fu.copy(r).invert(),ki.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=S;x<C;x+=3){let A=a.getX(x),I=a.getX(x+1),D=a.getX(x+2);s=Yo(this,f,e,i,c,h,u,A,I,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){let E=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Yo(this,o,e,i,c,h,u,E,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=S;x<C;x+=3){let A=x,I=x+1,D=x+2;s=Yo(this,f,e,i,c,h,u,A,I,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){let E=m,S=m+1,x=m+2;s=Yo(this,o,e,i,c,h,u,E,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mp(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===li,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:n}}function Yo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vo),n.getVertexPosition(l,Ho),n.getVertexPosition(c,Go);let h=Mp(n,e,t,i,Vo,Ho,Go,mu);if(h){let u=new w;oi.getBarycoord(mu,Vo,Ho,Go,u),s&&(h.uv=oi.getInterpolatedAttribute(s,a,l,c,u,new K)),r&&(h.uv1=oi.getInterpolatedAttribute(r,a,l,c,u,new K)),o&&(h.normal=oi.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new w,materialIndex:0};oi.getNormal(Vo,Ho,Go,p.normal),h.face=p,h.barycoord=u}return h}var an=class n extends wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(_,m,f,E,S,x,C,A,I,D,M){let b=x/I,P=C/D,F=x/2,V=C/2,B=A/2,X=I+1,H=D+1,te=0,G=0,he=new w;for(let me=0;me<H;me++){let Me=me*P-V;for(let ze=0;ze<X;ze++){let Ze=ze*b-F;he[_]=Ze*E,he[m]=Me*S,he[f]=B,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[f]=A>0?1:-1,h.push(he.x,he.y,he.z),u.push(ze/I),u.push(1-me/D),te+=1}}for(let me=0;me<D;me++)for(let Me=0;Me<I;Me++){let ze=p+Me+X*me,Ze=p+Me+X*(me+1),je=p+(Me+1)+X*(me+1),_e=p+(Me+1)+X*me;l.push(ze,Ze,_e),l.push(Ze,je,_e),G+=6}a.addGroup(d,G,M),d+=G,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=es(n[t]);for(let s in i)e[s]=i[s]}return e}function Sp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var wd={clone:es,merge:Yt},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Dr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new w,gu=new K,_u=new K,kt=class extends Dr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,gu,_u),t.subVectors(_u,gu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,ma=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let r=new kt(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let o=new kt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new kt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let l=new kt(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new kt(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ur=class extends Kt{constructor(e=[],t=ji,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:di});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Un),new ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pn=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Nr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fr=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_a=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new w,Or=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fs=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,pr=new w,Ts=new w,ws=new w,As=new K,mr=new K,Ad=new rt,qo=new w,gr=new w,$o=new w,yu=new K,vc=new K,xu=new K,Br=class extends Pt{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _a(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Or(i,3,0,!1)),Es.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=Es,this.material=e,this.center=new K(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-ws.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Zo(qo.set(-.5,-.5,0),ws,o,Ts,s,r),Zo(gr.set(.5,-.5,0),ws,o,Ts,s,r),Zo($o.set(.5,.5,0),ws,o,Ts,s,r),yu.set(0,0),vc.set(1,0),xu.set(1,1);let a=e.ray.intersectTriangle(qo,gr,$o,!1,pr);if(a===null&&(Zo(gr.set(-.5,.5,0),ws,o,Ts,s,r),vc.set(0,1),a=e.ray.intersectTriangle(qo,$o,gr,!1,pr),a===null))return;let l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:oi.getInterpolation(pr,qo,gr,$o,yu,vc,xu,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zo(n,e,t,i,s,r){As.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(mr.x=r*As.x-s*As.y,mr.y=s*As.x+r*As.y):mr.copy(As),n.copy(e),n.x+=mr.x,n.y+=mr.y,n.applyMatrix4(Ad)}var ya=class extends Kt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,h=on,u,p){super(null,o,a,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zr=class extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new rt,vu=new rt,Jo=[],bu=new jt,Ap=new rt,_r=new gt,yr=new qn,kr=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ap)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),bu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),yr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(i),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),vu.multiplyMatrices(i,Rs),_r.matrixWorld=vu,_r.raycast(e,Jo);for(let o=0,a=Jo.length;o<a;o++){let l=Jo[o];l.instanceId=r,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ya(new Float32Array(s*this.count),s,this.count,Qa,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bc=new w,Rp=new w,Cp=new We,Sn=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=bc.subVectors(i,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(bc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cp.getNormalMatrix(e),s=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new qn,Pp=new K(.5,.5),Ko=new w,Os=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],S=r[13],x=r[14],C=r[15];if(s[0].setComponents(c-o,d-h,f-g,C-E).normalize(),s[1].setComponents(c+o,d+h,f+g,C+E).normalize(),s[2].setComponents(c+a,d+u,f+_,C+S).normalize(),s[3].setComponents(c-a,d-u,f-_,C-S).normalize(),i)s[4].setComponents(l,p,m,x).normalize(),s[5].setComponents(c-l,d-p,f-m,C-x).normalize();else if(s[4].setComponents(c-l,d-p,f-m,C-x).normalize(),t===Dn)s[5].setComponents(c+l,d+p,f+m,C+x).normalize();else if(t===Rr)s[5].setComponents(l,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=Pp.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ko.x=s.normal.x>0?e.max.x:e.min.x,Ko.y=s.normal.y>0?e.max.y:e.min.y,Ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hi=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new w,va=new w,Mu=new rt,xr=new ci,jo=new qn,Mc=new w,Su=new w,Vr=class extends Pt{constructor(e=new wt,t=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),va.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xa.distanceTo(va);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Mu.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let f=h.getX(_),E=h.getX(_+1),S=Qo(this,e,xr,l,f,E,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),f=Qo(this,e,xr,l,_,m,g-1);f&&t.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let f=Qo(this,e,xr,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Qo(this,e,xr,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(xa.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,va,Mc,Su)>i)return;Mc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Mc);if(!(c<e.near||c>e.far))return{distance:c,point:Su.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Eu=new w,Tu=new w,$i=class extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Eu.fromBufferAttribute(t,s),Tu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eu.distanceTo(Tu);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hr=class extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wu=new rt,Lc=new ci,ea=new qn,ta=new w,Gr=class extends Pt{constructor(e=new wt,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;wu.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,_=d;g<_;g++){let m=c.getX(g);ta.fromBufferAttribute(u,m),Au(ta,m,l,s,e,t,this)}}else{let p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,_=d;g<_;g++)ta.fromBufferAttribute(u,g),Au(ta,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Au(n,e,t,i,s,r,o){let a=Lc.distanceSqToPoint(n);if(a<t){let l=new w;Lc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ui=class extends Kt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wr=class extends Kt{constructor(e,t,i=Ii,s,r,o,a=on,l=on,c,h=Ps,u=1){if(h!==Ps&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xr=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var zs=class n extends wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,h=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yr=class n extends wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],g=0,_=[],m=i/2,f=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(d,2));function E(){let x=new w,C=new w,A=0,I=(t-e)/i;for(let D=0;D<=r;D++){let M=[],b=D/r,P=b*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,B=V*l+a,X=Math.sin(B),H=Math.cos(B);C.x=P*X,C.y=-b*i+m,C.z=P*H,u.push(C.x,C.y,C.z),x.set(X,I,H).normalize(),p.push(x.x,x.y,x.z),d.push(V,1-b),M.push(g++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let b=_[M][D],P=_[M+1][D],F=_[M+1][D+1],V=_[M][D+1];(e>0||M!==0)&&(h.push(b,P,V),A+=3),(t>0||M!==r-1)&&(h.push(P,F,V),A+=3)}c.addGroup(f,A,0),f+=A}function S(x){let C=g,A=new K,I=new w,D=0,M=x===!0?e:t,b=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*b,0),p.push(0,b,0),d.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let B=F/s*l+a,X=Math.cos(B),H=Math.sin(B);I.x=M*H,I.y=m*b,I.z=M*X,u.push(I.x,I.y,I.z),p.push(0,b,0),A.x=X*.5+.5,A.y=H*.5*b+.5,d.push(A.x,A.y),g++}for(let F=0;F<s;F++){let V=C+F,B=P+F;x===!0?h.push(B,B+1,V):h.push(B+1,B,V),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new K:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,s=[],r=[],o=[],a=new w,l=new rt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ge(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ks=class extends gn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new K){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ba=class extends ks{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var na=new w,Sc=new oh,Ec=new oh,Tc=new oh,Ma=class extends gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Sc.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,_,m),Ec.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,_,m),Tc.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Ec.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Tc.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return i.set(Sc.calc(l),Ec.calc(l),Tc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ip(n,e){let t=1-n;return t*t*e}function Lp(n,e){return 2*(1-n)*n*e}function Dp(n,e){return n*n*e}function Er(n,e,t,i){return Ip(n,e)+Lp(n,t)+Dp(n,i)}function Up(n,e){let t=1-n;return t*t*t*e}function Np(n,e){let t=1-n;return 3*t*t*n*e}function Fp(n,e){return 3*(1-n)*n*n*e}function Op(n,e){return n*n*n*e}function Tr(n,e,t,i,s){return Up(n,e)+Np(n,t)+Fp(n,i)+Op(n,s)}var qr=class extends gn{constructor(e=new K,t=new K,i=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new K){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends gn{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends gn{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends gn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends gn{constructor(e=new K,t=new K,i=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends gn{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y),Er(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ru(a,l.x,c.x,h.x,u.x),Ru(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new K().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:ba,CatmullRomCurve3:Ma,CubicBezierCurve:qr,CubicBezierCurve3:Sa,EllipseCurve:ks,LineCurve:$r,LineCurve3:Ea,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Ta,SplineCurve:Jr}),wa=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}},Si=class extends wa{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new $r(this.currentPoint.clone(),new K(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Zr(this.currentPoint.clone(),new K(e,t),new K(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new qr(this.currentPoint.clone(),new K(e,t),new K(i,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Jr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ks(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vs=class extends Si{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Si().fromJSON(s))}return this}};function Bp(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Rd(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Gp(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=t;p<s;p+=t){let d=n[p],g=n[p+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Kr(r,o,t,a,l,c,0),o}function Rd(n,e,t,i,s){let r;if(s===em(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Cu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Cu(o/i|0,n[o],n[o+1],r);return r&&Hs(r,r.next)&&(Qr(r),r=r.next),r}function Zi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Hs(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&$p(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?kp(n,i,s,r):zp(n)){e.push(l.i,n.i,c.i),Qr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Vp(Zi(n),e),Kr(n,e,t,i,s,r,2)):o===2&&Hp(n,e,t,i,s,r):Kr(Zi(n),e,t,i,s,r,1);break}}}function zp(n){let e=n.prev,t=n,i=n.next;if(Tt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),p=Math.max(s,r,o),d=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&br(s,a,r,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kp(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Tt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,d=Math.min(a,l,c),g=Math.min(h,u,p),_=Math.max(a,l,c),m=Math.max(h,u,p),f=Uc(d,g,e,t,i),E=Uc(_,m,e,t,i),S=n.prevZ,x=n.nextZ;for(;S&&S.z>=f&&x&&x.z<=E;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&br(a,h,l,u,c,p,S.x,S.y)&&Tt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&br(a,h,l,u,c,p,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=f;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&br(a,h,l,u,c,p,S.x,S.y)&&Tt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&br(a,h,l,u,c,p,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Vp(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Hs(i,s)&&Pd(i,t,t.next,s)&&jr(i,s)&&jr(s,i)&&(e.push(i.i,t.i,s.i),Qr(t),Qr(t.next),t=n=s),t=t.next}while(t!==n);return Zi(t)}function Hp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kp(o,a)){let l=Id(o,a);o=Zi(o,o.next),l=Zi(l,l.next),Kr(o,e,t,i,s,r,0),Kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Gp(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Rd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(Wp);for(let r=0;r<s.length;r++)t=Xp(s[r],t);return t}function Wp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Xp(n,e){let t=Yp(n,e);if(!t)return e;let i=Id(t,n);return Zi(i,i.next),Zi(t,t.next)}function Yp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Hs(n,t))return t;do{if(Hs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Cd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);jr(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&qp(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function qp(n,e){return Tt(n.prev,n,e.prev)<0&&Tt(e.next,n,n.next)<0}function $p(n,e,t,i){let s=n;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Uc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Jp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Cd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function br(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Cd(n,e,t,i,s,r,o,a)}function Kp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!jp(n,e)&&(jr(n,e)&&jr(e,n)&&Qp(n,e)&&(Tt(n.prev,n,e.prev)||Tt(n,e.prev,e))||Hs(n,e)&&Tt(n.prev,n,n.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Hs(n,e){return n.x===e.x&&n.y===e.y}function Pd(n,e,t,i){let s=sa(Tt(n,e,t)),r=sa(Tt(n,e,i)),o=sa(Tt(t,i,n)),a=sa(Tt(t,i,e));return!!(s!==r&&o!==a||s===0&&ia(n,t,e)||r===0&&ia(n,i,e)||o===0&&ia(t,n,i)||a===0&&ia(t,e,i))}function ia(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sa(n){return n>0?1:n<0?-1:0}function jp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function jr(n,e){return Tt(n.prev,n,n.next)<0?Tt(n,e,n.next)>=0&&Tt(n,n.prev,e)>=0:Tt(n,e,n.prev)<0||Tt(n,n.next,e)<0}function Qp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Id(n,e){let t=Nc(n.i,n.x,n.y),i=Nc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Cu(n,e,t,i){let s=Nc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function em(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Fc=class{static triangulate(e,t,i=2){return Bp(e,t,i)}},Gi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Pu(e),Iu(i,e);let o=e.length;t.forEach(Pu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Iu(i,t[l]);let a=Fc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Pu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Iu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var eo=class n extends wt{constructor(e=new Vs([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:tm,S,x=!1,C,A,I,D;f&&(S=f.getSpacedPoints(h),x=!0,p=!1,C=f.computeFrenetFrames(h,!1),A=new w,I=new w,D=new w),p||(m=0,d=0,g=0,_=0);let M=a.extractPoints(c),b=M.shape,P=M.holes;if(!Gi.isClockWise(b)){b=b.reverse();for(let ne=0,j=P.length;ne<j;ne++){let J=P[ne];Gi.isClockWise(J)&&(P[ne]=J.reverse())}}function V(ne){let J=10000000000000001e-36,Z=ne[0];for(let de=1;de<=ne.length;de++){let re=de%ne.length,fe=ne[re],Ve=fe.x-Z.x,ke=fe.y-Z.y,T=Ve*Ve+ke*ke,y=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(Z.x),Math.abs(Z.y)),O=J*y*y;if(T<=O){ne.splice(re,1),de--;continue}Z=fe}}V(b),P.forEach(V);let B=P.length,X=b;for(let ne=0;ne<B;ne++){let j=P[ne];b=b.concat(j)}function H(ne,j,J){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(j,J)}let te=b.length;function G(ne,j,J){let Z,de,re,fe=ne.x-j.x,Ve=ne.y-j.y,ke=J.x-ne.x,T=J.y-ne.y,y=fe*fe+Ve*Ve,O=fe*T-Ve*ke;if(Math.abs(O)>Number.EPSILON){let W=Math.sqrt(y),ee=Math.sqrt(ke*ke+T*T),q=j.x-Ve/W,Pe=j.y+fe/W,ue=J.x-T/ee,Ae=J.y+ke/ee,Re=((ue-q)*T-(Ae-Pe)*ke)/(fe*T-Ve*ke);Z=q+fe*Re-ne.x,de=Pe+Ve*Re-ne.y;let oe=Z*Z+de*de;if(oe<=2)return new K(Z,de);re=Math.sqrt(oe/2)}else{let W=!1;fe>Number.EPSILON?ke>Number.EPSILON&&(W=!0):fe<-Number.EPSILON?ke<-Number.EPSILON&&(W=!0):Math.sign(Ve)===Math.sign(T)&&(W=!0),W?(Z=-Ve,de=fe,re=Math.sqrt(y)):(Z=fe,de=Ve,re=Math.sqrt(y/2))}return new K(Z/re,de/re)}let he=[];for(let ne=0,j=X.length,J=j-1,Z=ne+1;ne<j;ne++,J++,Z++)J===j&&(J=0),Z===j&&(Z=0),he[ne]=G(X[ne],X[J],X[Z]);let me=[],Me,ze=he.concat();for(let ne=0,j=B;ne<j;ne++){let J=P[ne];Me=[];for(let Z=0,de=J.length,re=de-1,fe=Z+1;Z<de;Z++,re++,fe++)re===de&&(re=0),fe===de&&(fe=0),Me[Z]=G(J[Z],J[re],J[fe]);me.push(Me),ze=ze.concat(Me)}let Ze;if(m===0)Ze=Gi.triangulateShape(X,P);else{let ne=[],j=[];for(let J=0;J<m;J++){let Z=J/m,de=d*Math.cos(Z*Math.PI/2),re=g*Math.sin(Z*Math.PI/2)+_;for(let fe=0,Ve=X.length;fe<Ve;fe++){let ke=H(X[fe],he[fe],re);Ie(ke.x,ke.y,-de),Z===0&&ne.push(ke)}for(let fe=0,Ve=B;fe<Ve;fe++){let ke=P[fe];Me=me[fe];let T=[];for(let y=0,O=ke.length;y<O;y++){let W=H(ke[y],Me[y],re);Ie(W.x,W.y,-de),Z===0&&T.push(W)}Z===0&&j.push(T)}}Ze=Gi.triangulateShape(ne,j)}let je=Ze.length,_e=g+_;for(let ne=0;ne<te;ne++){let j=p?H(b[ne],ze[ne],_e):b[ne];x?(I.copy(C.normals[0]).multiplyScalar(j.x),A.copy(C.binormals[0]).multiplyScalar(j.y),D.copy(S[0]).add(I).add(A),Ie(D.x,D.y,D.z)):Ie(j.x,j.y,0)}for(let ne=1;ne<=h;ne++)for(let j=0;j<te;j++){let J=p?H(b[j],ze[j],_e):b[j];x?(I.copy(C.normals[ne]).multiplyScalar(J.x),A.copy(C.binormals[ne]).multiplyScalar(J.y),D.copy(S[ne]).add(I).add(A),Ie(D.x,D.y,D.z)):Ie(J.x,J.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let j=ne/m,J=d*Math.cos(j*Math.PI/2),Z=g*Math.sin(j*Math.PI/2)+_;for(let de=0,re=X.length;de<re;de++){let fe=H(X[de],he[de],Z);Ie(fe.x,fe.y,u+J)}for(let de=0,re=P.length;de<re;de++){let fe=P[de];Me=me[de];for(let Ve=0,ke=fe.length;Ve<ke;Ve++){let T=H(fe[Ve],Me[Ve],Z);x?Ie(T.x,T.y+S[h-1].y,S[h-1].x+J):Ie(T.x,T.y,u+J)}}}Y(),$();function Y(){let ne=s.length/3;if(p){let j=0,J=te*j;for(let Z=0;Z<je;Z++){let de=Ze[Z];we(de[2]+J,de[1]+J,de[0]+J)}j=h+m*2,J=te*j;for(let Z=0;Z<je;Z++){let de=Ze[Z];we(de[0]+J,de[1]+J,de[2]+J)}}else{for(let j=0;j<je;j++){let J=Ze[j];we(J[2],J[1],J[0])}for(let j=0;j<je;j++){let J=Ze[j];we(J[0]+te*h,J[1]+te*h,J[2]+te*h)}}i.addGroup(ne,s.length/3-ne,0)}function $(){let ne=s.length/3,j=0;be(X,j),j+=X.length;for(let J=0,Z=P.length;J<Z;J++){let de=P[J];be(de,j),j+=de.length}i.addGroup(ne,s.length/3-ne,1)}function be(ne,j){let J=ne.length;for(;--J>=0;){let Z=J,de=J-1;de<0&&(de=ne.length-1);for(let re=0,fe=h+m*2;re<fe;re++){let Ve=te*re,ke=te*(re+1),T=j+Z+Ve,y=j+de+Ve,O=j+de+ke,W=j+Z+ke;Je(T,y,O,W)}}}function Ie(ne,j,J){l.push(ne),l.push(j),l.push(J)}function we(ne,j,J){pt(ne),pt(j),pt(J);let Z=s.length/3,de=E.generateTopUV(i,s,Z-3,Z-2,Z-1);R(de[0]),R(de[1]),R(de[2])}function Je(ne,j,J,Z){pt(ne),pt(j),pt(Z),pt(j),pt(J),pt(Z);let de=s.length/3,re=E.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);R(re[0]),R(re[1]),R(re[3]),R(re[1]),R(re[2]),R(re[3])}function pt(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function R(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return nm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dc[s.type]().fromJSON(s)),new n(i,e.options)}},tm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(p,1-g),new K(_,1-f)]:[new K(a,1-l),new K(h,1-u),new K(d,1-g),new K(m,1-f)]}};function nm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gs=class n extends wt{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ge(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new w,p=new K,d=new w,g=new w,_=new w,m=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,d.x=f*1,d.y=-m,d.z=f*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let E=0;E<=t;E++){let S=i+E*h*s,x=Math.sin(S),C=Math.cos(S);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*x,u.y=e[A].y,u.z=e[A].x*C,o.push(u.x,u.y,u.z),p.x=E/t,p.y=A/(e.length-1),a.push(p.x,p.y);let I=l[3*A+0]*x,D=l[3*A+1],M=l[3*A+0]*C;c.push(I,D,M)}}for(let E=0;E<t;E++)for(let S=0;S<e.length-1;S++){let x=S+E*e.length,C=x,A=x+e.length,I=x+e.length+1,D=x+1;r.push(C,A,D),r.push(I,D,A)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var bt=class n extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*p-o;for(let S=0;S<c;S++){let x=S*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let S=E+c*f,x=E+c*(f+1),C=E+1+c*(f+1),A=E+1+c*f;d.push(S,x,A),d.push(x,C,A)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},On=class n extends wt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,p=(t-e)/s,d=new w,g=new K;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let f=r+m/i*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let _=0;_<s;_++){let m=_*(i+1);for(let f=0;f<i;f++){let E=f+m,S=E,x=E+i+1,C=E+i+2,A=E+1;a.push(S,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var to=class n extends wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new w,u=new w,p=new w;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var It=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ji=class extends It{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Aa=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var no=class extends hi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ra(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function im(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ca=class extends Ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,a=2*t-i;break;case Pc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:o=e,l=2*i-t;break;case Pc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-p*m+2*p*_-p*g,E=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+E*o[c+C]+S*o[l+C]+x*o[u+C];return r}},Pa=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},Ia=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&im(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,p=u-i,d=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[p+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,p=o*i;for(let d=0;d!==i;++d)t[p+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ha;var Ei=class extends _n{constructor(e,t,i){super(e,t,i)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=wr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends _n{constructor(e,t,i,s){super(e,t,i,s)}};La.prototype.ValueTypeName="color";var Da=class extends _n{constructor(e,t,i,s){super(e,t,i,s)}};Da.prototype.ValueTypeName="number";var Ua=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},io=class extends _n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends _n{constructor(e,t,i){super(e,t,i)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=wr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends _n{constructor(e,t,i,s){super(e,t,i,s)}};Na.prototype.ValueTypeName="vector";var Fa=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ld=new Fa,Oa=class{constructor(e){this.manager=e!==void 0?e:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},so=class extends Ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wc=new rt,Lu=new w,Du=new w,Ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Uu=new rt,vr=new w,Ac=new w,Oc=class extends Ba{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(vr),Ac.copy(i.position),Ac.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ac),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),Uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu,i.coordinateSystem,i.reversedDepth)}},wi=class extends Ws{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ro=class extends Dr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bc=class extends Ba{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var za=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},oo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ah="\\[\\]\\.:\\/",sm=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",rm="[^"+ah.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",lh),am=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),hm=new RegExp("^"+om+am+lm+cm+"$"),um=["material","materials","bones","map"],zc=class{constructor(e,t,i){let s=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(e){let t=hm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);um.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=zc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nv=new Float32Array(1);var Nu=new rt,ao=class{constructor(e,t,i=0,s=1/0){this.ray=new ci(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(e,t=!0,i=[]){return kc(e,this,i,t),i.sort(Fu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kc(e[s],this,i,t);return i.sort(Fu),i}};function Fu(n,e){return n.distance-e.distance}function kc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)kc(r[o],e,t,!0)}}var Xs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var lo=class extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ch(n,e,t,i){let s=dm(i);switch(t){case Kc:return n*e;case Qa:return n*e/s.components*s.byteLength;case el:return n*e/s.components*s.byteLength;case Qc:return n*e*2/s.components*s.byteLength;case tl:return n*e*2/s.components*s.byteLength;case jc:return n*e*3/s.components*s.byteLength;case wn:return n*e*4/s.components*s.byteLength;case nl:return n*e*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(n,16)*Math.max(e,8)/4;case il:case rl:return Math.max(n,8)*Math.max(e,8)/2;case al:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case El:case Tl:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Al:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(n){switch(n){case Bn:case qc:return{byteLength:1,components:1};case qs:case $c:case $s:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case Ii:case Ja:case zn:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function nf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pm(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){let g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:_m,alphamap_pars_fragment:ym,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:bm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:Em,begin_vertex:Tm,beginnormal_vertex:wm,bsdfs:Am,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:Um,color_pars_fragment:Nm,color_pars_vertex:Fm,color_vertex:Om,common:Bm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:km,displacementmap_pars_vertex:Vm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:Ym,envmap_fragment:qm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Zm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:a0,envmap_vertex:Km,fog_vertex:jm,fog_pars_vertex:Qm,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:v0,map_fragment:b0,map_pars_fragment:M0,map_particle_fragment:S0,map_particle_pars_fragment:E0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:w0,morphinstance_vertex:A0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:U0,normal_pars_vertex:N0,normal_vertex:F0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:V0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:Y0,dithering_pars_fragment:q0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:K0,shadowmap_vertex:j0,shadowmask_pars_fragment:Q0,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:yg,cube_frag:xg,depth_vert:vg,depth_frag:bg,distanceRGBA_vert:Mg,distanceRGBA_frag:Sg,equirect_vert:Eg,equirect_frag:Tg,linedashed_vert:wg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ug,meshnormal_frag:Ng,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:kg,meshtoon_frag:Vg,points_vert:Hg,points_frag:Gg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:Yg,sprite_frag:qg},ge={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Zn={basic:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Yt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Yt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Yt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Yt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Yt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Yt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Yt([ge.common,ge.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Yt([ge.lights,ge.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Zn.physical={uniforms:Yt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Il={r:0,b:0,g:0},ts=new Nn,$g=new rt;function Zg(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1,C=g(S);C===null?f(a,l):C&&C.isColor&&(f(C,1),x=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){let C=g(x);C&&(C.isCubeTexture||C.mapping===co)?(h===void 0&&(h=new gt(new an(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:es(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(ts)),h.material.toneMapped=et.getTransfer(C.colorSpace)!==lt,(u!==C||p!==C.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,p=C.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new gt(new bt(2,2),new mn({name:"BackgroundMaterial",uniforms:es(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||p!==C.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,p=C.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(Il,rh(n)),i.buffers.color.setClear(Il.r,Il.g,Il.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:_,addToRenderList:m,dispose:E}}function Jg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(b,P,F,V,B){let X=!1,H=u(V,F,P);r!==H&&(r=H,c(r.object)),X=d(b,V,F,B),X&&g(b,V,F,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(b,P,F,V),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,P,F){let V=F.wireframe===!0,B=i[b.id];B===void 0&&(B={},i[b.id]=B);let X=B[P.id];X===void 0&&(X={},B[P.id]=X);let H=X[V];return H===void 0&&(H=p(l()),X[V]=H),H}function p(b){let P=[],F=[],V=[];for(let B=0;B<t;B++)P[B]=0,F[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:V,object:b,attributes:{},index:null}}function d(b,P,F,V){let B=r.attributes,X=P.attributes,H=0,te=F.getAttributes();for(let G in te)if(te[G].location>=0){let me=B[G],Me=X[G];if(Me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function g(b,P,F,V){let B={},X=P.attributes,H=0,te=F.getAttributes();for(let G in te)if(te[G].location>=0){let me=X[G];me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));let Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),B[G]=Me,H++}r.attributes=B,r.attributesNum=H,r.index=V}function _(){let b=r.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){let F=r.newAttributes,V=r.enabledAttributes,B=r.attributeDivisors;F[b]=1,V[b]===0&&(n.enableVertexAttribArray(b),V[b]=1),B[b]!==P&&(n.vertexAttribDivisor(b,P),B[b]=P)}function E(){let b=r.newAttributes,P=r.enabledAttributes;for(let F=0,V=P.length;F<V;F++)P[F]!==b[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function S(b,P,F,V,B,X,H){H===!0?n.vertexAttribIPointer(b,P,F,B,X):n.vertexAttribPointer(b,P,F,V,B,X)}function x(b,P,F,V){_();let B=V.attributes,X=F.getAttributes(),H=P.defaultAttributeValues;for(let te in X){let G=X[te];if(G.location>=0){let he=B[te];if(he===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){let me=he.normalized,Me=he.itemSize,ze=e.get(he);if(ze===void 0)continue;let Ze=ze.buffer,je=ze.type,_e=ze.bytesPerElement,Y=je===n.INT||je===n.UNSIGNED_INT||he.gpuType===Ja;if(he.isInterleavedBufferAttribute){let $=he.data,be=$.stride,Ie=he.offset;if($.isInstancedInterleavedBuffer){for(let we=0;we<G.locationSize;we++)f(G.location+we,$.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let we=0;we<G.locationSize;we++)m(G.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let we=0;we<G.locationSize;we++)S(G.location+we,Me/G.locationSize,je,me,be*_e,(Ie+Me/G.locationSize*we)*_e,Y)}else{if(he.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)f(G.location+$,he.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let $=0;$<G.locationSize;$++)S(G.location+$,Me/G.locationSize,je,me,Me*_e,Me/G.locationSize*$*_e,Y)}}else if(H!==void 0){let me=H[te];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(G.location,me);break;case 3:n.vertexAttrib3fv(G.location,me);break;case 4:n.vertexAttrib4fv(G.location,me);break;default:n.vertexAttrib1fv(G.location,me)}}}}E()}function C(){D();for(let b in i){let P=i[b];for(let F in P){let V=P[F];for(let B in V)h(V[B].object),delete V[B];delete P[F]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let P=i[b.id];for(let F in P){let V=P[F];for(let B in V)h(V[B].object),delete V[B];delete P[F]}delete i[b.id]}function I(b){for(let P in i){let F=i[P];if(F[b.id]===void 0)continue;let V=F[b.id];for(let B in V)h(V[B].object),delete V[B];delete F[b.id]}}function D(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Kg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,p){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==wn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!D)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Qg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||i!==0||s;return s=p,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,S=E*4,x=f.clippingState||null;l.value=x,x=h(g,p,S,d);for(let C=0;C!==S;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=d+_*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=d;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function e_(n){let e=new WeakMap;function t(o,a){return a===Ys?o.mapping=ji:a===$a&&(o.mapping=Qi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ys||a===$a)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ga(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var js=4,Dd=[.125,.215,.35,.446,.526,.582],ss=20,hh=new ro,Ud=new De,uh=null,dh=0,fh=0,ph=!1,is=(1+Math.sqrt(5))/2,Ks=1/is,Nd=[new w(-is,Ks,0),new w(is,Ks,0),new w(-Ks,0,is),new w(Ks,0,is),new w(0,is,-Ks),new w(0,is,Ks),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],t_=new w,er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=t_}=r;uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,dh,fh),this._renderer.xr.enabled=ph,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:$s,format:wn,colorSpace:qi,depthBuffer:!1},s=Fd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,e,t)}return s}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,hh)}_sceneToCubeUV(e,t,i,s,r){let l=new kt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Ud),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Tn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new gt(new an,_),f=!1,E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,f=!0):(_.color.copy(Ud),f=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let C=this._cubeSize;Ll(s,x*C,S>2?C:0,C,C),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ji||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ll(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nd[(s-r-1)%Nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new gt(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let f=[],E=0;for(let I=0;I<ss;++I){let D=I/_,M=Math.exp(-D*D/2);f.push(M),I===0?E+=M:I<m&&(E+=2*M)}for(let I=0;I<f.length;I++)f[I]=f[I]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-i;let x=this._sizeLods[s],C=3*x*(s>S-js?s-S+js:0),A=4*(this._cubeSize-x);Ll(t,C,A,3*x,2*x),l.setRenderTarget(t),l.render(u,hh)}};function n_(n){let e=[],t=[],i=[],s=n,r=n-js+1+Dd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-js?l=Dd[o-n+js-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*d),S=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let A=0;A<d;A++){let I=A%3*2/3-1,D=A>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];E.set(M,_*g*A),S.set(p,m*g*A);let b=[A,A,A,A,A,A];x.set(b,f*g*A)}let C=new wt;C.setAttribute("position",new Nt(E,_)),C.setAttribute("uv",new Nt(S,m)),C.setAttribute("faceIndex",new Nt(x,f)),e.push(C),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fd(n,e,t){let i=new Yn(n,e,t);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ll(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function i_(n,e,t){let i=new Float32Array(ss),s=new w(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Od(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Bd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ys||l===$a,h=l===ji||l===Qi;if(c||h){let u=e.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new er(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new er(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function r_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function o_(n,e,t,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let d in p)e.update(p[d],n.ARRAY_BUFFER)}function c(u){let p=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let E=d.array;_=d.version;for(let S=0,x=E.length;S<x;S+=3){let C=E[S+0],A=E[S+1],I=E[S+2];p.push(C,A,A,I,I,C)}}else if(g!==void 0){let E=g.array;_=g.version;for(let S=0,x=E.length/3-1;S<x;S+=3){let C=S+0,A=S+1,I=S+2;p.push(C,A,A,I,I,C)}}else return;let m=new(sh(p)?Lr:Ir)(p,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function a_(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*o),t.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,p*o,g),t.update(d,i,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function u(p,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=d[E]*_[E];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function l_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c_(n,e,t){let i=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=i.get(a);if(p===void 0||p.count!==u){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*C*4*u),I=new Pr(A,x,C,u);I.type=zn,I.needsUpdate=!0;let D=S*4;for(let b=0;b<u;b++){let P=m[b],F=f[b],V=E[b],B=x*C*4*b;for(let X=0;X<P.count;X++){let H=X*D;d===!0&&(s.fromBufferAttribute(P,X),A[B+H+0]=s.x,A[B+H+1]=s.y,A[B+H+2]=s.z,A[B+H+3]=0),g===!0&&(s.fromBufferAttribute(F,X),A[B+H+4]=s.x,A[B+H+5]=s.y,A[B+H+6]=s.z,A[B+H+7]=0),_===!0&&(s.fromBufferAttribute(V,X),A[B+H+8]=s.x,A[B+H+9]=s.y,A[B+H+10]=s.z,A[B+H+11]=V.itemSize===4?s.w:1)}}p={count:u,texture:I,size:new K(x,C)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function h_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sf=new Kt,zd=new Wr(1,1),rf=new Pr,of=new pa,af=new Ur,kd=[],Vd=[],Hd=new Float32Array(16),Gd=new Float32Array(9),Wd=new Float32Array(4);function tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nl(n,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function m_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Wd.set(i),n.uniformMatrix2fv(this.addr,!1,Wd),Ot(t,i)}}function g_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Gd.set(i),n.uniformMatrix3fv(this.addr,!1,Gd),Ot(t,i)}}function __(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),Ot(t,i)}}function y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function M_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function w_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zd.compareFunction=th,r=zd):r=sf,t.setTexture2D(e||r,s)}function A_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||of,s)}function R_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||af,s)}function C_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rf,s)}function P_(n){switch(n){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return b_;case 5125:return M_;case 36294:return S_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function I_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){let t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function D_(n,e){let t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function U_(n,e){let t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function N_(n,e){let t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function F_(n,e){let t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O_(n,e){let t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function k_(n,e){n.uniform3iv(this.addr,e)}function V_(n,e){n.uniform4iv(this.addr,e)}function H_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function W_(n,e){n.uniform3uiv(this.addr,e)}function X_(n,e){n.uniform4uiv(this.addr,e)}function Y_(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sf,r[o])}function q_(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||of,r[o])}function $_(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||af,r[o])}function Z_(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rf,r[o])}function J_(n){switch(n){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return U_;case 35674:return N_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return V_;case 5125:return H_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}var gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}},_h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Xd(n,e){n.seq.push(e),n.map[e.id]=e}function K_(n,e,t){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),o=mh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xd(t,c===void 0?new gh(a,n,e):new _h(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new yh(a),Xd(t,u)),t=u}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Yd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var j_=37297,Q_=0;function ey(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var qd=new We;function ty(n){et._getMatrix(qd,et.workingColorSpace,n);let e=`mat3( ${qd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Ar:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $d(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ey(n.getShaderSource(e),a)}else return r}function ny(n,e){let t=ty(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iy(n,e){let t;switch(e){case od:t="Linear";break;case ad:t="Reinhard";break;case ld:t="Cineon";break;case qa:t="ACESFilmic";break;case hd:t="AgX";break;case ud:t="Neutral";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dl=new w;function sy(){et.getLuminanceCoefficients(Dl);let n=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function oy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ay(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _o(n){return n!==""}function Zd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(ly,hy)}var cy=new Map;function hy(n,e){let t=qe[e];if(t===void 0){let i=cy.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}var uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(uy,dy)}function dy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function py(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function my(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Qi&&(e="ENVMAP_MODE_REFRACTION"),e}function gy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case sd:e="ENVMAP_BLENDING_MIX";break;case rd:e="ENVMAP_BLENDING_ADD";break}return e}function _y(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fy(t),c=py(t),h=my(t),u=gy(t),p=_y(t),d=ry(t),g=oy(r),_=s.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),f.length>0&&(f+=`
`)):(m=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),f=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?qe.tonemapping_pars_fragment:"",t.toneMapping!==fi?iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ny("linearToOutputTexel",t.outputColorSpace),sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),o=xh(o),o=Zd(o,t),o=Jd(o,t),a=xh(a),a=Zd(a,t),a=Jd(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=E+m+o,x=E+f+a,C=Yd(s,s.VERTEX_SHADER,S),A=Yd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(P){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(C)||"",B=s.getShaderInfoLog(A)||"",X=F.trim(),H=V.trim(),te=B.trim(),G=!0,he=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{let me=$d(s,C,"vertex"),Me=$d(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+me+`
`+Me)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||te==="")&&(he=!1);he&&(P.diagnostics={runnable:G,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:te,prefix:f}})}s.deleteShader(C),s.deleteShader(A),D=new Qs(s,_),M=ay(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,j_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}var xy=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new bh(e),t.set(e,i)),i}},bh=class{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}};function vy(n,e,t,i,s,r,o){let a=new Us,l=new vh,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,P,F,V){let B=F.fog,X=V.geometry,H=M.isMeshStandardMaterial?F.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),G=te&&te.mapping===co?te.image.height:null,he=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=me!==void 0?me.length:0,ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let Ze,je,_e,Y;if(he){let st=Zn[he];Ze=st.vertexShader,je=st.fragmentShader}else Ze=M.vertexShader,je=M.fragmentShader,l.update(M),_e=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let $=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,Je=!!M.map,pt=!!M.matcap,R=!!te,ne=!!M.aoMap,j=!!M.lightMap,J=!!M.bumpMap,Z=!!M.normalMap,de=!!M.displacementMap,re=!!M.emissiveMap,fe=!!M.metalnessMap,Ve=!!M.roughnessMap,ke=M.anisotropy>0,T=M.clearcoat>0,y=M.dispersion>0,O=M.iridescence>0,W=M.sheen>0,ee=M.transmission>0,q=ke&&!!M.anisotropyMap,Pe=T&&!!M.clearcoatMap,ue=T&&!!M.clearcoatNormalMap,Ae=T&&!!M.clearcoatRoughnessMap,Re=O&&!!M.iridescenceMap,oe=O&&!!M.iridescenceThicknessMap,ve=W&&!!M.sheenColorMap,Oe=W&&!!M.sheenRoughnessMap,Le=!!M.specularMap,ye=!!M.specularColorMap,Xe=!!M.specularIntensityMap,L=ee&&!!M.transmissionMap,ce=ee&&!!M.thicknessMap,pe=!!M.gradientMap,Ee=!!M.alphaMap,ae=M.alphaTest>0,Q=!!M.alphaHash,Ce=!!M.extensions,He=fi;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(He=n.toneMapping);let mt={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:je,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:qi,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:pt,envMap:R,envMapMode:R&&te.mapping,envMapCubeUVHeight:G,aoMap:ne,lightMap:j,bumpMap:J,normalMap:Z,displacementMap:p&&de,emissiveMap:re,normalMapObjectSpace:Z&&M.normalMapType===md,normalMapTangentSpace:Z&&M.normalMapType===eh,metalnessMap:fe,roughnessMap:Ve,anisotropy:ke,anisotropyMap:q,clearcoat:T,clearcoatMap:Pe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:y,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:W,sheenColorMap:ve,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:ye,specularIntensityMap:Xe,transmission:ee,transmissionMap:L,thicknessMap:ce,gradientMap:pe,opaque:M.transparent===!1&&M.blending===Wi&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ae,alphaHash:Q,combine:M.combine,mapUv:Je&&_(M.map.channel),aoMapUv:ne&&_(M.aoMap.channel),lightMapUv:j&&_(M.lightMap.channel),bumpMapUv:J&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:de&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:fe&&_(M.metalnessMap.channel),roughnessMapUv:Ve&&_(M.roughnessMap.channel),anisotropyMapUv:q&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Le&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Xe&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:Ee&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Z||ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Je||Ee),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vt,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function f(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(b,M),S(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let b=g[M.type],P;if(b){let F=Zn[b];P=wd.clone(F.uniforms)}else P=M.uniforms;return P}function C(M,b){let P;for(let F=0,V=h.length;F<V;F++){let B=h[F];if(B.cacheKey===b){P=B,++P.usedTimes;break}}return P===void 0&&(P=new yy(n,b,M,r),h.push(P)),P}function A(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:D}}function by(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function My(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,p,d,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,p,d,g,_,m){let f=o(u,p,d,g,_,m);d.transmission>0?i.push(f):d.transparent===!0?s.push(f):t.push(f)}function l(u,p,d,g,_,m){let f=o(u,p,d,g,_,m);d.transmission>0?i.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||My),i.length>1&&i.sort(p||Qd),s.length>1&&s.sort(p||Qd)}function h(){for(let u=e,p=n.length;u<p;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Sy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ef,n.set(i,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ey(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new De};break;case"SpotLight":t={position:new w,direction:new w,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function Ty(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var wy=0;function Ay(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ry(n){let e=new Ey,t=Ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new rt,o=new rt;function a(c){let h=0,u=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,E=0,S=0,x=0,C=0,A=0,I=0;c.sort(Ay);for(let M=0,b=c.length;M<b;M++){let P=c[M],F=P.color,V=P.intensity,B=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*V,u+=F.g*V,p+=F.b*V;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],V);I++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=P.shadow.matrix,E++}i.directional[d]=H,d++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;let te=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,te.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=te.matrix,P.castShadow){let G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=X,x++}_++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let te=P.shadow,G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=H,g++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(V),H.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==C||D.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=C,D.numLightProbes=I,i.version=wy++)}function l(c,h){let u=0,p=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let S=c[f];if(S.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=i.point[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function tf(n){let e=new Ry(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new tf(n),e.set(s,[a])):r>=o.length?(a=new tf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ly(n,e,t){let i=new Os,s=new K,r=new K,o=new at,a=new Aa({depthPacking:pd}),l=new Ra,c={},h=t.maxTextureSize,u={[li]:Qt,[Qt]:li,[Vt]:Vt},p=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Py,fragmentShader:Iy}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let f=this.type;this.render=function(A,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(di),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=f!==$n&&this.type===$n,B=f===$n&&this.type!==$n;for(let X=0,H=A.length;X<H;X++){let te=A[X],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let he=G.getFrameExtents();if(s.multiply(he),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,G.mapSize.y=r.y)),G.map===null||V===!0||B===!0){let Me=this.type!==$n?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new Yn(s.x,s.y,Me),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let me=G.getViewportCount();for(let Me=0;Me<me;Me++){let ze=G.getViewport(Me);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),F.viewport(o),G.updateMatrices(te,Me),i=G.getFrustum(),x(I,D,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&E(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,P)};function E(A,I){let D=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(I,null,D,p,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(I,null,D,d,_,null)}function S(A,I,D,M){let b=null,P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=b.uuid,V=I.uuid,B=c[F];B===void 0&&(B={},c[F]=B);let X=B[V];X===void 0&&(X=b.clone(),B[V]=X,I.addEventListener("dispose",C)),b=X}if(b.visible=I.visible,b.wireframe=I.wireframe,M===$n?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=n.properties.get(b);F.light=D}return b}function x(A,I,D,M,b){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===$n)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let V=e.update(A),B=A.material;if(Array.isArray(B)){let X=V.groups;for(let H=0,te=X.length;H<te;H++){let G=X[H],he=B[G.materialIndex];if(he&&he.visible){let me=S(A,he,M,b);A.onBeforeShadow(n,A,I,D,V,me,G),n.renderBufferDirect(D,null,V,me,A,G),A.onAfterShadow(n,A,I,D,V,me,G)}}}else if(B.visible){let X=S(A,B,M,b);A.onBeforeShadow(n,A,I,D,V,X,null),n.renderBufferDirect(D,null,V,X,A,null),A.onAfterShadow(n,A,I,D,V,X,null)}}let F=A.children;for(let V=0,B=F.length;V<B;V++)x(F[V],I,D,M,b)}function C(A){A.target.removeEventListener("dispose",C);for(let D in c){let M=c[D],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Dy={[ka]:Va,[Ha]:Xa,[Ga]:Ya,[Xi]:Wa,[Va]:ka,[Xa]:Ha,[Ya]:Ga,[Wa]:Xi};function Uy(n,e){function t(){let L=!1,ce=new at,pe=null,Ee=new at(0,0,0,0);return{setMask:function(ae){pe!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Q,Ce,He,mt){mt===!0&&(ae*=He,Q*=He,Ce*=He),ce.set(ae,Q,Ce,He),Ee.equals(ce)===!1&&(n.clearColor(ae,Q,Ce,He),Ee.copy(ce))},reset:function(){L=!1,pe=null,Ee.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,pe=null,Ee=null,ae=null;return{setReversed:function(Q){if(ce!==Q){let Ce=e.get("EXT_clip_control");Q?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=Q;let He=ae;ae=null,this.setClear(He)}},getReversed:function(){return ce},setTest:function(Q){Q?$(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Q){pe!==Q&&!L&&(n.depthMask(Q),pe=Q)},setFunc:function(Q){if(ce&&(Q=Dy[Q]),Ee!==Q){switch(Q){case ka:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ae!==Q&&(ce&&(Q=1-Q),n.clearDepth(Q),ae=Q)},reset:function(){L=!1,pe=null,Ee=null,ae=null,ce=!1}}}function s(){let L=!1,ce=null,pe=null,Ee=null,ae=null,Q=null,Ce=null,He=null,mt=null;return{setTest:function(st){L||(st?$(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(st){ce!==st&&!L&&(n.stencilMask(st),ce=st)},setFunc:function(st,ei,Gn){(pe!==st||Ee!==ei||ae!==Gn)&&(n.stencilFunc(st,ei,Gn),pe=st,Ee=ei,ae=Gn)},setOp:function(st,ei,Gn){(Q!==st||Ce!==ei||He!==Gn)&&(n.stencilOp(st,ei,Gn),Q=st,Ce=ei,He=Gn)},setLocked:function(st){L=st},setClear:function(st){mt!==st&&(n.clearStencil(st),mt=st)},reset:function(){L=!1,ce=null,pe=null,Ee=null,ae=null,Q=null,Ce=null,He=null,mt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,E=null,S=null,x=null,C=null,A=null,I=new De(0,0,0),D=0,M=!1,b=null,P=null,F=null,V=null,B=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=te>=2);let he=null,me={},Me=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Ze=new at().fromArray(Me),je=new at().fromArray(ze);function _e(L,ce,pe,Ee){let ae=new Uint8Array(4),Q=n.createTexture();n.bindTexture(L,Q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<pe;Ce++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ce+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Q}let Y={};Y[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(Xi),J(!1),Z(Vc),$(n.CULL_FACE),ne(di);function $(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ie(L,ce){return u[L]!==ce?(n.bindFramebuffer(L,ce),u[L]=ce,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(L,ce){let pe=d,Ee=!1;if(L){pe=p.get(ce),pe===void 0&&(pe=[],p.set(ce,pe));let ae=L.textures;if(pe.length!==ae.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Ce=ae.length;Q<Ce;Q++)pe[Q]=n.COLOR_ATTACHMENT0+Q;pe.length=ae.length,Ee=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(pe)}function Je(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let pt={[Mi]:n.FUNC_ADD,[Vu]:n.FUNC_SUBTRACT,[Hu]:n.FUNC_REVERSE_SUBTRACT};pt[Gu]=n.MIN,pt[Wu]=n.MAX;let R={[Xu]:n.ZERO,[Yu]:n.ONE,[qu]:n.SRC_COLOR,[aa]:n.SRC_ALPHA,[Qu]:n.SRC_ALPHA_SATURATE,[Ku]:n.DST_COLOR,[Zu]:n.DST_ALPHA,[$u]:n.ONE_MINUS_SRC_COLOR,[la]:n.ONE_MINUS_SRC_ALPHA,[ju]:n.ONE_MINUS_DST_COLOR,[Ju]:n.ONE_MINUS_DST_ALPHA,[ed]:n.CONSTANT_COLOR,[td]:n.ONE_MINUS_CONSTANT_COLOR,[nd]:n.CONSTANT_ALPHA,[id]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(L,ce,pe,Ee,ae,Q,Ce,He,mt,st){if(L===di){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&($(n.BLEND),_=!0),L!==ku){if(L!==m||st!==M){if((f!==Mi||x!==Mi)&&(n.blendEquation(n.FUNC_ADD),f=Mi,x=Mi),st)switch(L){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case en:n.blendFunc(n.ONE,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case en:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,C=null,A=null,I.set(0,0,0),D=0,m=L,M=st}return}ae=ae||ce,Q=Q||pe,Ce=Ce||Ee,(ce!==f||ae!==x)&&(n.blendEquationSeparate(pt[ce],pt[ae]),f=ce,x=ae),(pe!==E||Ee!==S||Q!==C||Ce!==A)&&(n.blendFuncSeparate(R[pe],R[Ee],R[Q],R[Ce]),E=pe,S=Ee,C=Q,A=Ce),(He.equals(I)===!1||mt!==D)&&(n.blendColor(He.r,He.g,He.b,mt),I.copy(He),D=mt),m=L,M=!1}function j(L,ce){L.side===Vt?be(n.CULL_FACE):$(n.CULL_FACE);let pe=L.side===Qt;ce&&(pe=!pe),J(pe),L.blending===Wi&&L.transparent===!1?ne(di):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Ee=L.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function Z(L){L!==Ou?($(n.CULL_FACE),L!==P&&(L===Vc?n.cullFace(n.BACK):L===Bu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=L}function de(L){L!==F&&(H&&n.lineWidth(L),F=L)}function re(L,ce,pe){L?($(n.POLYGON_OFFSET_FILL),(V!==ce||B!==pe)&&(n.polygonOffset(ce,pe),V=ce,B=pe)):be(n.POLYGON_OFFSET_FILL)}function fe(L){L?$(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ve(L){L===void 0&&(L=n.TEXTURE0+X-1),he!==L&&(n.activeTexture(L),he=L)}function ke(L,ce,pe){pe===void 0&&(he===null?pe=n.TEXTURE0+X-1:pe=he);let Ee=me[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},me[pe]=Ee),(Ee.type!==L||Ee.texture!==ce)&&(he!==pe&&(n.activeTexture(pe),he=pe),n.bindTexture(L,ce||Y[L]),Ee.type=L,Ee.texture=ce)}function T(){let L=me[he];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(L){Ze.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function Oe(L){je.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),je.copy(L))}function Le(L,ce){let pe=c.get(ce);pe===void 0&&(pe=new WeakMap,c.set(ce,pe));let Ee=pe.get(L);Ee===void 0&&(Ee=n.getUniformBlockIndex(ce,L.name),pe.set(L,Ee))}function ye(L,ce){let Ee=c.get(ce).get(L);l.get(ce)!==Ee&&(n.uniformBlockBinding(ce,Ee,L.__bindingPointIndex),l.set(ce,Ee))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,me={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,E=null,S=null,x=null,C=null,A=null,I=new De(0,0,0),D=0,M=!1,b=null,P=null,F=null,V=null,B=null,Ze.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:be,bindFramebuffer:Ie,drawBuffers:we,useProgram:Je,setBlending:ne,setMaterial:j,setFlipSided:J,setCullFace:Z,setLineWidth:de,setPolygonOffset:re,setScissorTest:fe,activeTexture:Ve,bindTexture:ke,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Re,texImage3D:oe,updateUBOMapping:Le,uniformBlockBinding:ye,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Pe,scissor:ve,viewport:Oe,reset:Xe}}function Ny(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Cr("canvas")}function _(T,y,O){let W=1,ee=ke(T);if((ee.width>O||ee.height>O)&&(W=O/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(W*ee.width),Pe=Math.floor(W*ee.height);u===void 0&&(u=g(q,Pe));let ue=y?g(q,Pe):u;return ue.width=q,ue.height=Pe,ue.getContext("2d").drawImage(T,0,0,q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Pe+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,y,O,W,ee=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=y;if(y===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),y===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),y===n.RGBA){let Pe=ee?Ar:et.getTransfer(W);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Pe===lt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(T,y){let O;return T?y===null||y===Ii||y===Zs?O=n.DEPTH24_STENCIL8:y===zn?O=n.DEPTH32F_STENCIL8:y===qs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===Zs?O=n.DEPTH_COMPONENT24:y===zn?O=n.DEPTH_COMPONENT32F:y===qs&&(O=n.DEPTH_COMPONENT16),O}function C(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==Un?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){let y=T.target;y.removeEventListener("dispose",A),D(y),y.isVideoTexture&&h.delete(y)}function I(T){let y=T.target;y.removeEventListener("dispose",I),b(y)}function D(T){let y=i.get(T);if(y.__webglInit===void 0)return;let O=T.source,W=p.get(O);if(W){let ee=W[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(T),Object.keys(W).length===0&&p.delete(O)}i.remove(T)}function M(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let O=T.source,W=p.get(O);delete W[y.__cacheKey],o.memory.textures--}function b(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let ee=0;ee<y.__webglFramebuffer[W].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[W][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=T.textures;for(let W=0,ee=O.length;W<ee;W++){let q=i.get(O[W]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[W])}i.remove(T)}let P=0;function F(){P=0}function V(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function B(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function X(T,y){let O=i.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,y);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function H(T,y){let O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function te(T,y){let O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function G(T,y){let O=i.get(T);if(T.version>0&&O.__version!==T.version){$(O,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let he={[Yi]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[ca]:n.MIRRORED_REPEAT},me={[on]:n.NEAREST,[dd]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Me={[gd]:n.NEVER,[Md]:n.ALWAYS,[_d]:n.LESS,[th]:n.LEQUAL,[yd]:n.EQUAL,[bd]:n.GEQUAL,[xd]:n.GREATER,[vd]:n.NOTEQUAL};function ze(T,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Un||y.magFilter===Za||y.magFilter===ho||y.magFilter===Pi||y.minFilter===Un||y.minFilter===Za||y.minFilter===ho||y.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,he[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,he[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,he[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==ho&&y.minFilter!==Pi||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));let W=y.source,ee=p.get(W);ee===void 0&&(ee={},p.set(W,ee));let q=B(y);if(q!==T.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[q].usedTimes++;let Pe=ee[T.__cacheKey];Pe!==void 0&&(ee[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(y)),T.__cacheKey=q,T.__webglTexture=ee[q].texture}return O}function je(T,y,O){return Math.floor(Math.floor(T/O)/y)}function _e(T,y,O,W){let q=T.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,W,y.data);else{q.sort((oe,ve)=>oe.start-ve.start);let Pe=0;for(let oe=1;oe<q.length;oe++){let ve=q[Pe],Oe=q[oe],Le=ve.start+ve.count,ye=je(Oe.start,y.width,4),Xe=je(ve.start,y.width,4);Oe.start<=Le+1&&ye===Xe&&je(Oe.start+Oe.count-1,y.width,4)===ye?ve.count=Math.max(ve.count,Oe.start+Oe.count-ve.start):(++Pe,q[Pe]=Oe)}q.length=Pe+1;let ue=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let oe=0,ve=q.length;oe<ve;oe++){let Oe=q[oe],Le=Math.floor(Oe.start/4),ye=Math.ceil(Oe.count/4),Xe=Le%y.width,L=Math.floor(Le/y.width),ce=ye,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Xe,L,ce,pe,O,W,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Y(T,y,O){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let ee=Ze(T,y),q=y.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+O);let Pe=i.get(q);if(q.version!==Pe.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);let ue=et.getPrimaries(et.workingColorSpace),Ae=y.colorSpace===pi?null:et.getPrimaries(y.colorSpace),Re=y.colorSpace===pi||ue===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=_(y.image,!1,s.maxTextureSize);oe=Ve(y,oe);let ve=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),Le=S(y.internalFormat,ve,Oe,y.colorSpace,y.isVideoTexture);ze(W,y);let ye,Xe=y.mipmaps,L=y.isVideoTexture!==!0,ce=Pe.__version===void 0||ee===!0,pe=q.dataReady,Ee=C(y,oe);if(y.isDepthTexture)Le=x(y.format===Js,y.type),ce&&(L?t.texStorage2D(n.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,ve,Oe,null));else if(y.isDataTexture)if(Xe.length>0){L&&ce&&t.texStorage2D(n.TEXTURE_2D,Ee,Le,Xe[0].width,Xe[0].height);for(let ae=0,Q=Xe.length;ae<Q;ae++)ye=Xe[ae],L?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,ve,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Le,ye.width,ye.height,0,ve,Oe,ye.data);y.generateMipmaps=!1}else L?(ce&&t.texStorage2D(n.TEXTURE_2D,Ee,Le,oe.width,oe.height),pe&&_e(y,oe,ve,Oe)):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,ve,Oe,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Le,Xe[0].width,Xe[0].height,oe.depth);for(let ae=0,Q=Xe.length;ae<Q;ae++)if(ye=Xe[ae],y.format!==wn)if(ve!==null)if(L){if(pe)if(y.layerUpdates.size>0){let Ce=ch(ye.width,ye.height,y.format,y.type);for(let He of y.layerUpdates){let mt=ye.data.subarray(He*Ce/ye.data.BYTES_PER_ELEMENT,(He+1)*Ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,He,ye.width,ye.height,1,ve,mt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,oe.depth,ve,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Le,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,oe.depth,ve,Oe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Le,ye.width,ye.height,oe.depth,0,ve,Oe,ye.data)}else{L&&ce&&t.texStorage2D(n.TEXTURE_2D,Ee,Le,Xe[0].width,Xe[0].height);for(let ae=0,Q=Xe.length;ae<Q;ae++)ye=Xe[ae],y.format!==wn?ve!==null?L?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,ve,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Le,ye.width,ye.height,0,ve,Oe,ye.data)}else if(y.isDataArrayTexture)if(L){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Le,oe.width,oe.height,oe.depth),pe)if(y.layerUpdates.size>0){let ae=ch(oe.width,oe.height,y.format,y.type);for(let Q of y.layerUpdates){let Ce=oe.data.subarray(Q*ae/oe.data.BYTES_PER_ELEMENT,(Q+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,oe.width,oe.height,1,ve,Oe,Ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Oe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,ve,Oe,oe.data);else if(y.isData3DTexture)L?(ce&&t.texStorage3D(n.TEXTURE_3D,Ee,Le,oe.width,oe.height,oe.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Oe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,ve,Oe,oe.data);else if(y.isFramebufferTexture){if(ce)if(L)t.texStorage2D(n.TEXTURE_2D,Ee,Le,oe.width,oe.height);else{let ae=oe.width,Q=oe.height;for(let Ce=0;Ce<Ee;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Le,ae,Q,0,ve,Oe,null),ae>>=1,Q>>=1}}else if(Xe.length>0){if(L&&ce){let ae=ke(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Le,ae.width,ae.height)}for(let ae=0,Q=Xe.length;ae<Q;ae++)ye=Xe[ae],L?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve,Oe,ye):t.texImage2D(n.TEXTURE_2D,ae,Le,ve,Oe,ye);y.generateMipmaps=!1}else if(L){if(ce){let ae=ke(oe);t.texStorage2D(n.TEXTURE_2D,Ee,Le,ae.width,ae.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Oe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,Oe,oe);m(y)&&f(W),Pe.__version=q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function $(T,y,O){if(y.image.length!==6)return;let W=Ze(T,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);let q=i.get(ee);if(ee.version!==q.__version||W===!0){t.activeTexture(n.TEXTURE0+O);let Pe=et.getPrimaries(et.workingColorSpace),ue=y.colorSpace===pi?null:et.getPrimaries(y.colorSpace),Ae=y.colorSpace===pi||Pe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Re=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Re&&!oe?ve[Q]=_(y.image[Q],!0,s.maxCubemapSize):ve[Q]=oe?y.image[Q].image:y.image[Q],ve[Q]=Ve(y,ve[Q]);let Oe=ve[0],Le=r.convert(y.format,y.colorSpace),ye=r.convert(y.type),Xe=S(y.internalFormat,Le,ye,y.colorSpace),L=y.isVideoTexture!==!0,ce=q.__version===void 0||W===!0,pe=ee.dataReady,Ee=C(y,Oe);ze(n.TEXTURE_CUBE_MAP,y);let ae;if(Re){L&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Xe,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){ae=ve[Q].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){let He=ae[Ce];y.format!==wn?Le!==null?L?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,0,0,He.width,He.height,Le,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,0,0,He.width,He.height,Le,ye,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,Xe,He.width,He.height,0,Le,ye,He.data)}}}else{if(ae=y.mipmaps,L&&ce){ae.length>0&&Ee++;let Q=ke(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){L?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Le,ye,ve[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,ve[Q].width,ve[Q].height,0,Le,ye,ve[Q].data);for(let Ce=0;Ce<ae.length;Ce++){let mt=ae[Ce].image[Q].image;L?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,0,0,mt.width,mt.height,Le,ye,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,Xe,mt.width,mt.height,0,Le,ye,mt.data)}}else{L?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ye,ve[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Le,ye,ve[Q]);for(let Ce=0;Ce<ae.length;Ce++){let He=ae[Ce];L?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,0,0,Le,ye,He.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,Xe,Le,ye,He.image[Q])}}}m(y)&&f(n.TEXTURE_CUBE_MAP),q.__version=ee.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function be(T,y,O,W,ee,q){let Pe=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),Ae=S(O.internalFormat,Pe,ue,O.colorSpace),Re=i.get(y),oe=i.get(O);if(oe.__renderTarget=y,!Re.__hasExternalTextures){let ve=Math.max(1,y.width>>q),Oe=Math.max(1,y.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Ae,ve,Oe,y.depth,0,Pe,ue,null):t.texImage2D(ee,q,Ae,ve,Oe,0,Pe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),re(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ee,oe.__webglTexture,0,de(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ee,oe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(T,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let W=y.depthTexture,ee=W&&W.isDepthTexture?W.type:null,q=x(y.stencilBuffer,ee),Pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=de(y);re(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,q,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,T)}else{let W=y.textures;for(let ee=0;ee<W.length;ee++){let q=W[ee],Pe=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),Ae=S(q.internalFormat,Pe,ue,q.colorSpace),Re=de(y);O&&re(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ae,y.width,y.height):re(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Ae,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let ee=W.__webglTexture,q=de(y);if(y.depthTexture.format===Ps)re(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Js)re(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Je(T){let y=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=W}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let W=T.texture.mipmaps;W&&W.length>0?we(y.__webglFramebuffer[0],T):we(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),Ie(y.__webglDepthbuffer[W],T,!1);else{let ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ie(y.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(T,y,O){let W=i.get(T);y!==void 0&&be(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Je(T)}function R(T){let y=T.texture,O=i.get(T),W=i.get(y);T.addEventListener("dispose",I);let ee=T.textures,q=T.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<y.mipmaps.length;Ae++)O.__webglFramebuffer[ue][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)O.__webglFramebuffer[ue]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ue=0,Ae=ee.length;ue<Ae;ue++){let Re=i.get(ee[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&re(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let Ae=ee[ue];O.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);let Re=r.convert(Ae.format,Ae.colorSpace),oe=r.convert(Ae.type),ve=S(Ae.internalFormat,Re,oe,Ae.colorSpace,T.isXRRenderTarget===!0),Oe=de(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ze(n.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)be(O.__webglFramebuffer[ue][Ae],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else be(O.__webglFramebuffer[ue],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,Ae=ee.length;ue<Ae;ue++){let Re=ee[ue],oe=i.get(Re),ve=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),ze(ve,Re),be(O.__webglFramebuffer,T,Re,n.COLOR_ATTACHMENT0+ue,ve,0),m(Re)&&f(ve)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),ze(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)be(O.__webglFramebuffer[Ae],T,y,n.COLOR_ATTACHMENT0,ue,Ae);else be(O.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ue,0);m(y)&&f(ue),t.unbindTexture()}T.depthBuffer&&Je(T)}function ne(T){let y=T.textures;for(let O=0,W=y.length;O<W;O++){let ee=y[O];if(m(ee)){let q=E(T),Pe=i.get(ee).__webglTexture;t.bindTexture(q,Pe),f(q),t.unbindTexture()}}}let j=[],J=[];function Z(T){if(T.samples>0){if(re(T)===!1){let y=T.textures,O=T.width,W=T.height,ee=n.COLOR_BUFFER_BIT,q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(T),ue=y.length>1;if(ue)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let Ae=T.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);let oe=i.get(y[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,ee,n.NEAREST),l===!0&&(j.length=0,J.length=0,j.push(n.COLOR_ATTACHMENT0+Re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(q),J.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);let oe=i.get(y[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function de(T){return Math.min(s.maxSamples,T.samples)}function re(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(T){let y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Ve(T,y){let O=T.colorSpace,W=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==qi&&O!==pi&&(et.getTransfer(O)===lt?(W!==wn||ee!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ke(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=pt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=re}function Fy(n,e){function t(i,s=pi){let r,o=et.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return n.BYTE;if(i===$c)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Ja)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===$s)return n.HALF_FLOAT;if(i===Kc)return n.ALPHA;if(i===jc)return n.RGB;if(i===wn)return n.RGBA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===Qa)return n.RED;if(i===el)return n.RED_INTEGER;if(i===Qc)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===nl)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===sl||i===rl||i===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===al||i===ll)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===yl||i===xl||i===vl||i===bl||i===Ml||i===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Tl||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===El)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Al||i===Rl||i===Cl||i===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:Oy,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Xn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new Mh,f={},E=t.getContextAttributes(),S=null,x=null,C=[],A=[],I=new K,D=null,M=new kt;M.viewport=new at;let b=new kt;b.viewport=new at;let P=[M,b],F=new za,V=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=C[Y];return $===void 0&&($=new Ns,C[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=C[Y];return $===void 0&&($=new Ns,C[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=C[Y];return $===void 0&&($=new Ns,C[Y]=$),$.getHandSpace()};function X(Y){let $=A.indexOf(Y.inputSource);if($===-1)return;let be=C[$];be!==void 0&&(be.update(Y.inputSource,Y.frame,c||o),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let Y=0;Y<C.length;Y++){let $=A[Y];$!==null&&(A[Y]=null,C[Y].disconnect($))}V=null,B=null,m.reset();for(let Y in f)delete f[Y];e.setRenderTarget(S),d=null,p=null,u=null,s=null,x=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ie=null,we=null;E.depth&&(we=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=E.stencil?Js:Ps,Ie=E.stencil?Zs:Ii);let Je={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Je),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Yn(p.textureWidth,p.textureHeight,{format:wn,type:Bn,depthTexture:new Wr(p.textureWidth,p.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let be={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Yn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Y){for(let $=0;$<Y.removed.length;$++){let be=Y.removed[$],Ie=A.indexOf(be);Ie>=0&&(A[Ie]=null,C[Ie].disconnect(be))}for(let $=0;$<Y.added.length;$++){let be=Y.added[$],Ie=A.indexOf(be);if(Ie===-1){for(let Je=0;Je<C.length;Je++)if(Je>=A.length){A.push(be),Ie=Je;break}else if(A[Je]===null){A[Je]=be,Ie=Je;break}if(Ie===-1)break}let we=C[Ie];we&&we.connect(be)}}let G=new w,he=new w;function me(Y,$,be){G.setFromMatrixPosition($.matrixWorld),he.setFromMatrixPosition(be.matrixWorld);let Ie=G.distanceTo(he),we=$.projectionMatrix.elements,Je=be.projectionMatrix.elements,pt=we[14]/(we[10]-1),R=we[14]/(we[10]+1),ne=(we[9]+1)/we[5],j=(we[9]-1)/we[5],J=(we[8]-1)/we[0],Z=(Je[8]+1)/Je[0],de=pt*J,re=pt*Z,fe=Ie/(-J+Z),Ve=fe*-J;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ve),Y.translateZ(fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ke=pt+fe,T=R+fe,y=de-Ve,O=re+(Ie-Ve),W=ne*R/T*ke,ee=j*R/T*ke;Y.projectionMatrix.makePerspective(y,O,W,ee,ke,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,be=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(be=m.depthFar)),F.near=b.near=M.near=$,F.far=b.far=M.far=be,(V!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,B=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Ie=Y.parent,we=F.cameras;Me(F,Ie);for(let Je=0;Je<we.length;Je++)Me(we[Je],Ie);we.length===2?me(F,M,b):F.projectionMatrix.copy(M.projectionMatrix),ze(Y,F,Ie)};function ze(Y,$,be){be===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let Ze=null;function je(Y,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ie=!1;be.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let R=0;R<be.length;R++){let ne=be[R],j=null;if(d!==null)j=d.getViewport(ne);else{let Z=u.getViewSubImage(p,ne);j=Z.viewport,R===0&&(e.setRenderTargetTextures(x,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(x))}let J=P[R];J===void 0&&(J=new kt,J.layers.enable(R),J.viewport=new at,P[R]=J),J.matrix.fromArray(ne.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ne.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(j.x,j.y,j.width,j.height),R===0&&(F.matrix.copy(J.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(J)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let R=u.getDepthInformation(be[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let R=0;R<be.length;R++){let ne=be[R].camera;if(ne){let j=f[ne];j||(j=new Xr,f[ne]=j);let J=u.getCameraImage(ne);j.sourceTexture=J}}}}for(let be=0;be<C.length;be++){let Ie=A[be],we=C[be];Ie!==null&&we!==void 0&&we.update(Ie,$,c||o)}Ze&&Ze(Y,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let _e=new nf;_e.setAnimationLoop(je),this.setAnimationLoop=function(Y){Ze=Y},this.dispose=function(){}}},ns=new Nn,zy=new rt;function ky(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),S=E.envMap,x=E.envMapRotation;S&&(m.envMap.value=S,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(ns)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vy(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let x=S.program;i.uniformBlockBinding(E,x)}function c(E,S){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));let C=S.program;i.updateUBOMapping(E,C);let A=e.render.frame;r[E.id]!==A&&(p(E),r[E.id]=A)}function h(E){let S=u();E.__bindingPointIndex=S;let x=n.createBuffer(),C=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let S=s[E.id],x=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,I=x.length;A<I;A++){let D=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,b=D.length;M<b;M++){let P=D[M];if(d(P,A,M,C)===!0){let F=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],B=0;for(let X=0;X<V.length;X++){let H=V[X],te=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+B,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,S,x,C){let A=E.value,I=S+"_"+x;if(C[I]===void 0)return typeof A=="number"||typeof A=="boolean"?C[I]=A:C[I]=A.clone(),!0;{let D=C[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(E){let S=E.uniforms,x=0,C=16;for(let I=0,D=S.length;I<D;I++){let M=Array.isArray(S[I])?S[I]:[S[I]];for(let b=0,P=M.length;b<P;b++){let F=M[b],V=Array.isArray(F.value)?F.value:[F.value];for(let B=0,X=V.length;B<X;B++){let H=V[B],te=_(H),G=x%C,he=G%te.boundary,me=G+he;x+=he,me!==0&&C-me<te.storage&&(x+=C-me),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=te.storage}}}let A=x%C;return A>0&&(x+=C-A),E.__size=x,E.__cache={},this}function _(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ul=class{constructor(e={}){let{canvas:t=Sd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,C=!1;this._outputColorSpace=Ut;let A=0,I=0,D=null,M=-1,b=null,P=new at,F=new at,V=null,B=new De(0),X=0,H=t.width,te=t.height,G=1,he=null,me=null,Me=new at(0,0,H,te),ze=new at(0,0,H,te),Ze=!1,je=new Os,_e=!1,Y=!1,$=new rt,be=new w,Ie=new at,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function pt(){return D===null?G:1}let R=i;function ne(v,U){return t.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ae,!1),R===null){let U="webgl2";if(R=ne(U,v),R===null)throw ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let j,J,Z,de,re,fe,Ve,ke,T,y,O,W,ee,q,Pe,ue,Ae,Re,oe,ve,Oe,Le,ye,Xe;function L(){j=new r_(R),j.init(),Le=new Fy(R,j),J=new jg(R,j,e,Le),Z=new Uy(R,j),J.reversedDepthBuffer&&p&&Z.buffers.depth.setReversed(!0),de=new l_(R),re=new by,fe=new Ny(R,j,Z,re,J,Le,de),Ve=new e_(x),ke=new s_(x),T=new pm(R),ye=new Jg(R,T),y=new o_(R,T,de,ye),O=new h_(R,y,T,de),oe=new c_(R,J,fe),ue=new Qg(re),W=new vy(x,Ve,ke,j,J,ye,ue),ee=new ky(x,re),q=new Sy,Pe=new Cy(j),Re=new Zg(x,Ve,ke,Z,O,d,l),Ae=new Ly(x,O,J),Xe=new Vy(R,de,J,Z),ve=new Kg(R,j,de),Oe=new a_(R,j,de),de.programs=W.programs,x.capabilities=J,x.extensions=j,x.properties=re,x.renderLists=q,x.shadowMap=Ae,x.state=Z,x.info=de}L();let ce=new Sh(x,R);this.xr=ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let v=j.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=j.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(H,te,!1))},this.getSize=function(v){return v.set(H,te)},this.setSize=function(v,U,z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,te=U,t.width=Math.floor(v*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(H*G,te*G).floor()},this.setDrawingBufferSize=function(v,U,z){H=v,te=U,G=z,t.width=Math.floor(v*z),t.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,U,z,k){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,U,z,k),Z.viewport(P.copy(Me).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(ze)},this.setScissor=function(v,U,z,k){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,U,z,k),Z.scissor(F.copy(ze).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){Z.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){me=v},this.getClearColor=function(v){return v.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let k=0;if(v){let N=!1;if(D!==null){let le=D.texture.format;N=le===nl||le===tl||le===el}if(N){let le=D.texture.type,xe=le===Bn||le===Ii||le===qs||le===Zs||le===Ka||le===ja,Te=Re.getClearColor(),Se=Re.getClearAlpha(),Fe=Te.r,Be=Te.g,Ue=Te.b;xe?(g[0]=Fe,g[1]=Be,g[2]=Ue,g[3]=Se,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Fe,_[1]=Be,_[2]=Ue,_[3]=Se,R.clearBufferiv(R.COLOR,0,_))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),q.dispose(),Pe.dispose(),re.dispose(),Ve.dispose(),ke.dispose(),O.dispose(),ye.dispose(),Xe.dispose(),W.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Gn),ce.removeEventListener("sessionend",$h),Fi.stop()};function pe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let v=de.autoReset,U=Ae.enabled,z=Ae.autoUpdate,k=Ae.needsUpdate,N=Ae.type;L(),de.autoReset=v,Ae.enabled=U,Ae.autoUpdate=z,Ae.needsUpdate=k,Ae.type=N}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Q(v){let U=v.target;U.removeEventListener("dispose",Q),Ce(U)}function Ce(v){He(v),re.remove(v)}function He(v){let U=re.get(v).programs;U!==void 0&&(U.forEach(function(z){W.releaseProgram(z)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,k,N,le){U===null&&(U=we);let xe=N.isMesh&&N.matrixWorld.determinant()<0,Te=Vf(v,U,z,k,N);Z.setMaterial(k,xe);let Se=z.index,Fe=1;if(k.wireframe===!0){if(Se=y.getWireframeAttribute(z),Se===void 0)return;Fe=2}let Be=z.drawRange,Ue=z.attributes.position,Ke=Be.start*Fe,ct=(Be.start+Be.count)*Fe;le!==null&&(Ke=Math.max(Ke,le.start*Fe),ct=Math.min(ct,(le.start+le.count)*Fe)),Se!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,Se.count)):Ue!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,Ue.count));let Rt=ct-Ke;if(Rt<0||Rt===1/0)return;ye.setup(N,k,Te,z,Se);let xt,ut=ve;if(Se!==null&&(xt=T.get(Se),ut=Oe,ut.setIndex(xt)),N.isMesh)k.wireframe===!0?(Z.setLineWidth(k.wireframeLinewidth*pt()),ut.setMode(R.LINES)):ut.setMode(R.TRIANGLES);else if(N.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),Z.setLineWidth(Ne*pt()),N.isLineSegments?ut.setMode(R.LINES):N.isLineLoop?ut.setMode(R.LINE_LOOP):ut.setMode(R.LINE_STRIP)}else N.isPoints?ut.setMode(R.POINTS):N.isSprite&&ut.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ne=N._multiDrawStarts,St=N._multiDrawCounts,nt=N._multiDrawCount,hn=Se?T.get(Se).bytesPerElement:1,us=re.get(k).currentProgram.getUniforms();for(let un=0;un<nt;un++)us.setValue(R,"_gl_DrawID",un),ut.render(Ne[un]/hn,St[un])}else if(N.isInstancedMesh)ut.renderInstances(Ke,Rt,N.count);else if(z.isInstancedBufferGeometry){let Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,St=Math.min(z.instanceCount,Ne);ut.renderInstances(Ke,Rt,St)}else ut.render(Ke,Rt)};function mt(v,U,z){v.transparent===!0&&v.side===Vt&&v.forceSinglePass===!1?(v.side=Qt,v.needsUpdate=!0,Po(v,U,z),v.side=li,v.needsUpdate=!0,Po(v,U,z),v.side=Vt):Po(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),f=Pe.get(z),f.init(U),S.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),v!==z&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let le=N.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){let Te=le[xe];mt(Te,z,N),k.add(Te)}else mt(le,z,N),k.add(le)}),f=S.pop(),k},this.compileAsync=function(v,U,z=null){let k=this.compile(v,U,z);return new Promise(N=>{function le(){if(k.forEach(function(xe){re.get(xe).currentProgram.isReady()&&k.delete(xe)}),k.size===0){N(v);return}setTimeout(le,10)}j.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let st=null;function ei(v){st&&st(v)}function Gn(){Fi.stop()}function $h(){Fi.start()}let Fi=new nf;Fi.setAnimationLoop(ei),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(v){st=v,ce.setAnimationLoop(v),v===null?Fi.stop():Fi.start()},ce.addEventListener("sessionstart",Gn),ce.addEventListener("sessionend",$h),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,U,D),f=Pe.get(v,S.length),f.init(U),S.push(f),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),je.setFromProjectionMatrix($,Dn,U.reversedDepth),Y=this.localClippingEnabled,_e=ue.init(this.clippingPlanes,Y),m=q.get(v,E.length),m.init(),E.push(m),ce.enabled===!0&&ce.isPresenting===!0){let le=x.xr.getDepthSensingMesh();le!==null&&jl(le,U,-1/0,x.sortObjects)}jl(v,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,me),Je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Je&&Re.addToRenderList(m,v),this.info.render.frame++,_e===!0&&ue.beginShadows();let z=f.state.shadowsArray;Ae.render(z,v,U),_e===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let le=U.cameras;if(N.length>0)for(let xe=0,Te=le.length;xe<Te;xe++){let Se=le[xe];Jh(k,N,v,Se)}Je&&Re.render(v);for(let xe=0,Te=le.length;xe<Te;xe++){let Se=le[xe];Zh(m,v,Se,Se.viewport)}}else N.length>0&&Jh(k,N,v,U),Je&&Re.render(v),Zh(m,v,U);D!==null&&I===0&&(fe.updateMultisampleRenderTarget(D),fe.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(x,v,U),ye.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?(f=S[S.length-1],_e===!0&&ue.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function jl(v,U,z,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||je.intersectsSprite(v)){k&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);let xe=O.update(v),Te=v.material;Te.visible&&m.push(v,xe,Te,z,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||je.intersectsObject(v))){let xe=O.update(v),Te=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4($)),Array.isArray(Te)){let Se=xe.groups;for(let Fe=0,Be=Se.length;Fe<Be;Fe++){let Ue=Se[Fe],Ke=Te[Ue.materialIndex];Ke&&Ke.visible&&m.push(v,xe,Ke,z,Ie.z,Ue)}}else Te.visible&&m.push(v,xe,Te,z,Ie.z,null)}}let le=v.children;for(let xe=0,Te=le.length;xe<Te;xe++)jl(le[xe],U,z,k)}function Zh(v,U,z,k){let N=v.opaque,le=v.transmissive,xe=v.transparent;f.setupLightsView(z),_e===!0&&ue.setGlobalState(x.clippingPlanes,z),k&&Z.viewport(P.copy(k)),N.length>0&&Co(N,U,z),le.length>0&&Co(le,U,z),xe.length>0&&Co(xe,U,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Jh(v,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?$s:Bn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let le=f.state.transmissionRenderTarget[k.id],xe=k.viewport||P;le.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);let Te=x.getRenderTarget(),Se=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Je&&Re.render(z);let Be=x.toneMapping;x.toneMapping=fi;let Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),_e===!0&&ue.setGlobalState(x.clippingPlanes,k),Co(v,z,k),fe.updateMultisampleRenderTarget(le),fe.updateRenderTargetMipmap(le),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ct=0,Rt=U.length;ct<Rt;ct++){let xt=U[ct],ut=xt.object,Ne=xt.geometry,St=xt.material,nt=xt.group;if(St.side===Vt&&ut.layers.test(k.layers)){let hn=St.side;St.side=Qt,St.needsUpdate=!0,Kh(ut,z,k,Ne,St,nt),St.side=hn,St.needsUpdate=!0,Ke=!0}}Ke===!0&&(fe.updateMultisampleRenderTarget(le),fe.updateRenderTargetMipmap(le))}x.setRenderTarget(Te,Se,Fe),x.setClearColor(B,X),Ue!==void 0&&(k.viewport=Ue),x.toneMapping=Be}function Co(v,U,z){let k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=v.length;N<le;N++){let xe=v[N],Te=xe.object,Se=xe.geometry,Fe=xe.group,Be=xe.material;Be.allowOverride===!0&&k!==null&&(Be=k),Te.layers.test(z.layers)&&Kh(Te,U,z,Se,Be,Fe)}}function Kh(v,U,z,k,N,le){v.onBeforeRender(x,U,z,k,N,le),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(x,U,z,k,v,le),N.transparent===!0&&N.side===Vt&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,x.renderBufferDirect(z,U,k,N,v,le),N.side=li,N.needsUpdate=!0,x.renderBufferDirect(z,U,k,N,v,le),N.side=Vt):x.renderBufferDirect(z,U,k,N,v,le),v.onAfterRender(x,U,z,k,N,le)}function Po(v,U,z){U.isScene!==!0&&(U=we);let k=re.get(v),N=f.state.lights,le=f.state.shadowsArray,xe=N.state.version,Te=W.getParameters(v,N.state,le,U,z),Se=W.getProgramCacheKey(Te),Fe=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?ke:Ve).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Fe===void 0&&(v.addEventListener("dispose",Q),Fe=new Map,k.programs=Fe);let Be=Fe.get(Se);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===xe)return Qh(v,Te),Be}else Te.uniforms=W.getUniforms(v),v.onBeforeCompile(Te,x),Be=W.acquireProgram(Te,Se),Fe.set(Se,Be),k.uniforms=Te.uniforms;let Ue=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),Qh(v,Te),k.needsLights=Gf(v),k.lightsStateVersion=xe,k.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Be,k.uniformsList=null,Be}function jh(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=Qs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Qh(v,U){let z=re.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Vf(v,U,z,k,N){U.isScene!==!0&&(U=we),fe.resetTextureUnits();let le=U.fog,xe=k.isMeshStandardMaterial?U.environment:null,Te=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qi,Se=(k.isMeshStandardMaterial?ke:Ve).get(k.envMap||xe),Fe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color,Rt=fi;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ut=xt!==void 0?xt.length:0,Ne=re.get(k),St=f.state.lights;if(_e===!0&&(Y===!0||v!==b)){let Zt=v===b&&k.id===M;ue.setState(k,v,Zt)}let nt=!1;k.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==St.state.version||Ne.outputColorSpace!==Te||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isBatchedMesh&&Ne.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ne.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ne.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ne.instancingMorph===!1&&N.morphTexture!==null||Ne.envMap!==Se||k.fog===!0&&Ne.fog!==le||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Ue||Ne.morphNormals!==Ke||Ne.morphColors!==ct||Ne.toneMapping!==Rt||Ne.morphTargetsCount!==ut)&&(nt=!0):(nt=!0,Ne.__version=k.version);let hn=Ne.currentProgram;nt===!0&&(hn=Po(k,U,N));let us=!1,un=!1,cr=!1,Et=hn.getUniforms(),vn=Ne.uniforms;if(Z.useProgram(hn.program)&&(us=!0,un=!0,cr=!0),k.id!==M&&(M=k.id,un=!0),us||b!==v){Z.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",v.projectionMatrix),Et.setValue(R,"viewMatrix",v.matrixWorldInverse);let rn=Et.map.cameraPosition;rn!==void 0&&rn.setValue(R,be.setFromMatrixPosition(v.matrixWorld)),J.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,un=!0,cr=!0)}if(N.isSkinnedMesh){Et.setOptional(R,N,"bindMatrix"),Et.setOptional(R,N,"bindMatrixInverse");let Zt=N.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Et.setValue(R,"boneTexture",Zt.boneTexture,fe))}N.isBatchedMesh&&(Et.setOptional(R,N,"batchingTexture"),Et.setValue(R,"batchingTexture",N._matricesTexture,fe),Et.setOptional(R,N,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",N._indirectTexture,fe),Et.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",N._colorsTexture,fe));let bn=z.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&oe.update(N,z,hn),(un||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,Et.setValue(R,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(vn.envMap.value=Se,vn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(vn.envMapIntensity.value=U.environmentIntensity),un&&(Et.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Hf(vn,cr),le&&k.fog===!0&&ee.refreshFogUniforms(vn,le),ee.refreshMaterialUniforms(vn,k,G,te,f.state.transmissionRenderTarget[v.id]),Qs.upload(R,jh(Ne),vn,fe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qs.upload(R,jh(Ne),vn,fe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(R,"center",N.center),Et.setValue(R,"modelViewMatrix",N.modelViewMatrix),Et.setValue(R,"normalMatrix",N.normalMatrix),Et.setValue(R,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Zt=k.uniformsGroups;for(let rn=0,Ql=Zt.length;rn<Ql;rn++){let Oi=Zt[rn];Xe.update(Oi,hn),Xe.bind(Oi,hn)}}return hn}function Hf(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Gf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,U,z){let k=re.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),re.get(v.texture).__webglTexture=U,re.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let z=re.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};let Wf=R.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){D=v,A=U,I=z;let k=!0,N=null,le=!1,xe=!1;if(v){let Se=re.get(v);if(Se.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(Se.__webglFramebuffer===void 0)fe.setupRenderTarget(v);else if(Se.__hasExternalTextures)fe.rebindTextures(v,re.get(v.texture).__webglTexture,re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ue=v.depthTexture;if(Se.__boundDepthTexture!==Ue){if(Ue!==null&&re.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(v)}}let Fe=v.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);let Be=re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?N=Be[U][z]:N=Be[U],le=!0):v.samples>0&&fe.useMultisampledRTT(v)===!1?N=re.get(v).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[z]:N=Be,P.copy(v.viewport),F.copy(v.scissor),V=v.scissorTest}else P.copy(Me).multiplyScalar(G).floor(),F.copy(ze).multiplyScalar(G).floor(),V=Ze;if(z!==0&&(N=Wf),Z.bindFramebuffer(R.FRAMEBUFFER,N)&&k&&Z.drawBuffers(v,N),Z.viewport(P),Z.scissor(F),Z.setScissorTest(V),le){let Se=re.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,z)}else if(xe){let Se=U;for(let Fe=0;Fe<v.textures.length;Fe++){let Be=re.get(v.textures[Fe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,z,Se)}}else if(v!==null&&z!==0){let Se=re.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Se.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(v,U,z,k,N,le,xe,Te=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){Z.bindFramebuffer(R.FRAMEBUFFER,Se);try{let Fe=v.textures[Te],Be=Fe.format,Ue=Fe.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&z>=0&&z<=v.height-N&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(U,z,k,N,Le.convert(Be),Le.convert(Ue),le))}finally{let Fe=D!==null?re.get(D).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,k,N,le,xe,Te=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(U>=0&&U<=v.width-k&&z>=0&&z<=v.height-N){Z.bindFramebuffer(R.FRAMEBUFFER,Se);let Fe=v.textures[Te],Be=Fe.format,Ue=Fe.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ke),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(U,z,k,N,Le.convert(Be),Le.convert(Ue),0);let ct=D!==null?re.get(D).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,ct);let Rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ed(R,Rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Ke),R.deleteSync(Rt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){let k=Math.pow(2,-z),N=Math.floor(v.image.width*k),le=Math.floor(v.image.height*k),xe=U!==null?U.x:0,Te=U!==null?U.y:0;fe.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,xe,Te,N,le),Z.unbindTexture()};let Xf=R.createFramebuffer(),Yf=R.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,k=null,N=0,le=null){le===null&&(N!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let xe,Te,Se,Fe,Be,Ue,Ke,ct,Rt,xt=v.isCompressedTexture?v.mipmaps[le]:v.image;if(z!==null)xe=z.max.x-z.min.x,Te=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Be=z.min.y,Ue=z.isBox3?z.min.z:0;else{let bn=Math.pow(2,-N);xe=Math.floor(xt.width*bn),Te=Math.floor(xt.height*bn),v.isDataArrayTexture?Se=xt.depth:v.isData3DTexture?Se=Math.floor(xt.depth*bn):Se=1,Fe=0,Be=0,Ue=0}k!==null?(Ke=k.x,ct=k.y,Rt=k.z):(Ke=0,ct=0,Rt=0);let ut=Le.convert(U.format),Ne=Le.convert(U.type),St;U.isData3DTexture?(fe.setTexture3D(U,0),St=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(fe.setTexture2DArray(U,0),St=R.TEXTURE_2D_ARRAY):(fe.setTexture2D(U,0),St=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);let nt=R.getParameter(R.UNPACK_ROW_LENGTH),hn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),us=R.getParameter(R.UNPACK_SKIP_PIXELS),un=R.getParameter(R.UNPACK_SKIP_ROWS),cr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Be),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ue);let Et=v.isDataArrayTexture||v.isData3DTexture,vn=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let bn=re.get(v),Zt=re.get(U),rn=re.get(bn.__renderTarget),Ql=re.get(Zt.__renderTarget);Z.bindFramebuffer(R.READ_FRAMEBUFFER,rn.__webglFramebuffer),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Oi=0;Oi<Se;Oi++)Et&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,re.get(v).__webglTexture,N,Ue+Oi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,re.get(U).__webglTexture,le,Rt+Oi)),R.blitFramebuffer(Fe,Be,xe,Te,Ke,ct,xe,Te,R.DEPTH_BUFFER_BIT,R.NEAREST);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||re.has(v)){let bn=re.get(v),Zt=re.get(U);Z.bindFramebuffer(R.READ_FRAMEBUFFER,Xf),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yf);for(let rn=0;rn<Se;rn++)Et?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bn.__webglTexture,N,Ue+rn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bn.__webglTexture,N),vn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Zt.__webglTexture,le,Rt+rn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Zt.__webglTexture,le),N!==0?R.blitFramebuffer(Fe,Be,xe,Te,Ke,ct,xe,Te,R.COLOR_BUFFER_BIT,R.NEAREST):vn?R.copyTexSubImage3D(St,le,Ke,ct,Rt+rn,Fe,Be,xe,Te):R.copyTexSubImage2D(St,le,Ke,ct,Fe,Be,xe,Te);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else vn?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(St,le,Ke,ct,Rt,xe,Te,Se,ut,Ne,xt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(St,le,Ke,ct,Rt,xe,Te,Se,ut,xt.data):R.texSubImage3D(St,le,Ke,ct,Rt,xe,Te,Se,ut,Ne,xt):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,le,Ke,ct,xe,Te,ut,Ne,xt.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,le,Ke,ct,xt.width,xt.height,ut,xt.data):R.texSubImage2D(R.TEXTURE_2D,le,Ke,ct,xe,Te,ut,Ne,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,hn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,us),R.pixelStorei(R.UNPACK_SKIP_ROWS,un),R.pixelStorei(R.UNPACK_SKIP_IMAGES,cr),le===0&&U.generateMipmaps&&R.generateMipmap(St),Z.unbindTexture()},this.initRenderTarget=function(v){re.get(v).__webglFramebuffer===void 0&&fe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?fe.setTextureCube(v,0):v.isData3DTexture?fe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?fe.setTexture2DArray(v,0):fe.setTexture2D(v,0),Z.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,Z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var lf={type:"change"},Ah={type:"start"},hf={type:"end"},Fl=new ci,cf=new Sn,Hy=Math.cos(70*go.DEG2RAD),Bt=new w,ln=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6,Ol=class extends lo{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new En,this._lastTargetPosition=new w,this._quat=new En().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xs,this._sphericalDelta=new Xs,this._scale=1,this._panOffset=new w,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new w,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wy.bind(this),this._onPointerDown=Gy.bind(this),this._onPointerUp=Xy.bind(this),this._onContextMenu=jy.bind(this),this._onMouseWheel=$y.bind(this),this._onKeyDown=Zy.bind(this),this._onTouchStart=Jy.bind(this),this._onTouchMove=Ky.bind(this),this._onMouseDown=Yy.bind(this),this._onMouseMove=qy.bind(this),this._interceptControlDown=Qy.bind(this),this._interceptControlUp=ex.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lf),this.update(),this.state=ht.NONE}update(e=null){let t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Bt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fl.origin.copy(this.object.position),Fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fl.direction))<Hy?this.object.lookAt(this.target):(cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fl.intersectPlane(cf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Gy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Wy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hf),this.state=ht.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Yy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case Ri.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case Ri.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Ah)}function qy(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function $y(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hf))}function Zy(n){this.enabled!==!1&&this._handleKeyDown(n)}function Jy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Ah)}function Ky(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function jy(n){this.enabled!==!1&&n.preventDefault()}function Qy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ex(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ch=Math.PI*2;function Ph(n,e,t,{repeat:i=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d");t(o,n,e);let a=new ui(r);return s&&(a.colorSpace=Ut),a.anisotropy=4,i&&(a.wrapS=Yi,a.wrapT=Yi,a.repeat.set(i[0],i[1])),a}function tx(n){let e=Ph(1024,512,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#010306"),a.addColorStop(.42,"#050e16"),a.addColorStop(.58,"#0c202d"),a.addColorStop(.72,"#071018"),a.addColorStop(1,"#010204"),s.fillStyle=a,s.fillRect(0,0,r,o);let l=s.createRadialGradient(r*.2,o*.56,8,r*.2,o*.56,r*.33);l.addColorStop(0,"rgba(50, 215, 255, 0.82)"),l.addColorStop(.22,"rgba(23, 137, 186, 0.42)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),s.fillStyle=l,s.fillRect(0,0,r,o);let c=s.createRadialGradient(r*.82,o*.52,6,r*.82,o*.52,r*.24);c.addColorStop(0,"rgba(255, 117, 55, 0.7)"),c.addColorStop(.26,"rgba(170, 64, 25, 0.3)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),s.fillStyle=c,s.fillRect(0,0,r,o);let h=s.createLinearGradient(0,o*.22,0,o*.4);h.addColorStop(0,"rgba(210, 247, 255, 0)"),h.addColorStop(.52,"rgba(202, 246, 255, 0.2)"),h.addColorStop(1,"rgba(210, 247, 255, 0)"),s.fillStyle=h,s.fillRect(r*.06,o*.16,r*.6,o*.3);for(let u=0;u<6;u+=1){let p=r*(.1+u*.17),d=s.createLinearGradient(p,0,p+12,0);d.addColorStop(0,"rgba(255,255,255,0)"),d.addColorStop(.5,u%2?"rgba(103, 223, 255, 0.12)":"rgba(255, 255, 255, 0.08)"),d.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=d,s.fillRect(p,o*.18,12,o*.5)}s.strokeStyle="rgba(117, 232, 255, 0.18)",s.lineWidth=1,s.beginPath();for(let u=0;u<9;u+=1){let p=o*(.34+u*.045);s.moveTo(0,p),s.lineTo(r,p)}s.stroke()});e.mapping=Ys;let t=new er(n);t.compileEquirectangularShader();let i=t.fromEquirectangular(e);return e.dispose(),t.dispose(),i.texture}function uf(n,e,t=null){return Ph(512,512,(i,s,r)=>{let o=i.createRadialGradient(s/2,r/2,0,s/2,r/2,s/2);o.addColorStop(0,n),t&&o.addColorStop(.38,t),o.addColorStop(1,e),i.fillStyle=o,i.fillRect(0,0,s,r)})}function nx(){return Ph(512,256,(n,e,t)=>{n.clearRect(0,0,e,t);let i=n.createRadialGradient(e/2,t/2,4,e/2,t/2,e*.48);i.addColorStop(0,"rgba(0, 0, 0, 0.82)"),i.addColorStop(.4,"rgba(0, 0, 0, 0.46)"),i.addColorStop(.72,"rgba(0, 0, 0, 0.14)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),n.save(),n.translate(e/2,t/2),n.scale(1,t/e),n.translate(-e/2,-e/2),n.fillStyle=i,n.fillRect(0,0,e,e),n.restore()})}function Rh(n,e,t,i,s,r){let o=new Float32Array(n*3),a=new Float32Array(n*3),l=new De;for(let u=0;u<n;u+=1){let p=e+Math.random()*(t-e),d=Math.random()*Ch,g=Math.acos(2*Math.random()-1);o[u*3]=p*Math.sin(g)*Math.cos(d),o[u*3+1]=p*Math.cos(g)*.72+2.2,o[u*3+2]=p*Math.sin(g)*Math.sin(d),l.set(i[Math.floor(Math.random()*i.length)]),a[u*3]=l.r,a[u*3+1]=l.g,a[u*3+2]=l.b}let c=new wt;c.setAttribute("position",new Nt(o,3)),c.setAttribute("color",new Nt(a,3));let h=new Bs({size:s,transparent:!0,opacity:r,vertexColors:!0,depthWrite:!1,sizeAttenuation:!0,blending:en});return new Gr(c,h)}function df(n,e){let t=new pn;t.name="environment",n.add(t);let i=tx(e);n.environment=i,n.environmentIntensity=.72;let s=new so(9363455,263947,1.45);n.add(s);let r=new Ai(16055295,2.7);r.position.set(6.5,8.5,7.5),n.add(r);let o=new Ai(4971775,3.1);o.position.set(-7.5,3.2,4.8),n.add(o);let a=new Ai(16741687,2.2);a.position.set(6.2,1.1,-8.2),n.add(a);let l=new Ai(7707903,1.6);l.position.set(-3.5,5.5,-7.6),n.add(l);let c=new wi(4118783,8,13,2);c.position.set(-4.2,-1.8,2.8),n.add(c);let h=new wi(16742972,5,10,2);h.position.set(4.5,-2,-2.6),n.add(h);let u=new mn({uniforms:{uTime:{value:0},uColor:{value:new De("#4bdcff")},uFade:{value:1}},transparent:!0,depthWrite:!1,side:Vt,blending:en,vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorld = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColor;
      varying vec3 vWorld;

      float gridLine(vec2 coord, float scale, float width) {
        vec2 grid = abs(fract(coord * scale - 0.5) - 0.5) / max(fwidth(coord * scale), vec2(0.0001));
        float line = min(grid.x, grid.y);
        return 1.0 - smoothstep(0.0, width, line);
      }

      void main() {
        float radius = length(vWorld.xz);
        float fade = 1.0 - smoothstep(2.0, 14.5, radius);
        float coarse = gridLine(vWorld.xz, 1.0, 1.3);
        float fine = gridLine(vWorld.xz, 0.25, 1.0);
        float pulse = 0.62 + 0.38 * sin(uTime * 0.72 - radius * 1.15);

        float alpha = (coarse * 0.28 + fine * 0.075) * fade * pulse;
        alpha += (1.0 - smoothstep(0.0, 0.024, abs(radius - 4.72))) * fade * 0.17;
        alpha += (1.0 - smoothstep(0.0, 0.018, abs(radius - 6.38))) * fade * 0.1;
        alpha += (1.0 - smoothstep(0.0, 0.55, abs(radius - 3.35))) * fade * 0.035;

        vec3 color = mix(uColor, vec3(0.9, 0.98, 1.0), coarse * 0.2);
        gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.62));
      }
    `}),p=new gt(new bt(30,30),u);p.rotation.x=-Math.PI/2,p.position.y=-2.94,t.add(p);let d=uf("rgba(81, 224, 255, 0.52)","rgba(0, 0, 0, 0)","rgba(30, 115, 158, 0.22)"),g=new gt(new bt(17,17),new Tn({map:d,transparent:!0,opacity:.52,depthWrite:!1,blending:en}));g.rotation.x=-Math.PI/2,g.position.y=-2.935,t.add(g);let _=new gt(new bt(7.8,5.2),new Tn({map:nx(),transparent:!0,opacity:.8,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(.2,-2.912,-.2),t.add(_);let m=new pn;m.position.y=-2.885,m.rotation.x=-Math.PI/2,t.add(m);let f=new Tn({color:4971775,transparent:!0,opacity:.23,depthWrite:!1,blending:en,side:Vt}),E=new gt(new On(4.9,4.925,160),f.clone());E.material.opacity=.2,m.add(E);let S=new gt(new On(3.38,3.395,160),f.clone());S.material.opacity=.11,m.add(S);let x=new gt(new On(4.2,4.235,128,1,0,.42),new Tn({color:11465727,transparent:!0,opacity:.52,depthWrite:!1,blending:en,side:Vt}));m.add(x);let C=[],A=96;for(let _e=0;_e<A;_e+=1){let Y=_e/A*Ch,$=_e%8===0?5.48:5.56,be=5.72;C.push(Math.cos(Y)*$,Math.sin(Y)*$,0),C.push(Math.cos(Y)*be,Math.sin(Y)*be,0)}let I=new wt;I.setAttribute("position",new it(C,3));let D=new $i(I,new hi({color:6677759,transparent:!0,opacity:.3,depthWrite:!1,blending:en}));m.add(D);let M=[];for(let _e=0;_e<180;_e+=1){let Y=_e/180*Ch;M.push(new w(Math.cos(Y)*6.42,Math.sin(Y)*6.42,0))}let b=new wt().setFromPoints(M),P=new Hr(b,new no({color:3984872,transparent:!0,opacity:.35,dashSize:.09,gapSize:.15,depthWrite:!1,blending:en}));P.computeLineDistances(),m.add(P);let F=new gt(new On(.72,.79,72),new Tn({color:6023167,transparent:!0,opacity:0,depthWrite:!1,blending:en,side:Vt}));F.rotation.x=-Math.PI/2,F.position.set(0,-2.88,0),F.visible=!1,t.add(F);let V=uf("rgba(103, 234, 255, 0.5)","rgba(0, 0, 0, 0)","rgba(64, 164, 202, 0.14)"),B=new gt(new bt(4.2,4.2),new Tn({map:V,color:6023167,transparent:!0,opacity:0,depthWrite:!1,blending:en}));B.rotation.x=-Math.PI/2,B.position.set(0,-2.89,0),B.visible=!1,t.add(B);let X=Rh(420,10,28,["#9ceeff","#d5f8ff","#80a9ff"],.055,.52);t.add(X);let H=Rh(90,9,21,["#ff9c62","#ff6b4e","#ffd089"],.085,.38);t.add(H);let te=Rh(120,3.5,10,["#bff4ff","#5be7ff"],.038,.34);t.add(te);let G=0,he=new De("#5be7ff");function me(_e,Y){if(!_e){F.visible=!1,B.visible=!1,G=0;return}he.set(Y||"#5be7ff"),F.material.color.copy(he),B.material.color.copy(he),F.position.x=_e.x,F.position.z=_e.z,B.position.x=_e.x,B.position.z=_e.z,F.visible=!0,B.visible=!0,G=1}function Me(){G=0,F.visible=!1,B.visible=!1}function ze(_e,Y){if(u.uniforms.uTime.value=_e,E.rotation.z=_e*.035,Ze(_e),x.rotation.z=-_e*.32,P.rotation.z=_e*.018,X.rotation.y=_e*.006,H.rotation.y=-_e*.009,te.rotation.y=_e*.014,te.position.y=Math.sin(_e*.35)*.06,G>0){let $=.5+.5*Math.sin(_e*3.6),be=G,Ie=1+$*.12;F.scale.setScalar(Ie),F.material.opacity=(.2+$*.26)*be,B.material.opacity=(.08+$*.08)*be}else F.visible=!1,B.visible=!1}function Ze(_e){D.rotation.z=_e*.025}function je(){i.dispose(),t.traverse(_e=>{_e.geometry&&_e.geometry.dispose(),_e.material&&(Array.isArray(_e.material)?_e.material:[_e.material]).forEach($=>{$.map&&$.map.dispose(),$.dispose()})})}return{group:t,setFocus:me,clearFocus:Me,update:ze,dispose:je}}var yo=new w;function An(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;yo.copy(e),yo[i]=0,yo.normalize();let c=.5*o/(o+a),h=1-yo.angleTo(n)/l;return Math.sign(yo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Bl=class n extends an{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new w,c=new w,h=new w(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,_=new w,m=.5/o;for(let f=0,E=0;f<u.length;f+=3,E+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,p[f+0]=c.x,p[f+1]=c.y,p[f+2]=c.z,Math.floor(f/g)){case 0:_.set(1,0,0),d[E+0]=An(_,c,"z","y",r,i),d[E+1]=1-An(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[E+0]=1-An(_,c,"z","y",r,i),d[E+1]=1-An(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[E+0]=1-An(_,c,"x","z",r,e),d[E+1]=An(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),d[E+0]=1-An(_,c,"x","z",r,e),d[E+1]=1-An(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),d[E+0]=1-An(_,c,"x","y",r,e),d[E+1]=1-An(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[E+0]=An(_,c,"x","y",r,e),d[E+1]=1-An(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var tn=Math.PI*2;function ix(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,t}function nn(n,e,t,i={}){let s=ix(n,e),r=s.getContext("2d");t(r,n,e);let o=new ui(s);return o.colorSpace=Ut,o.anisotropy=8,o.wrapS=i.wrapS||Ln,o.wrapT=i.wrapT||Ln,i.repeat&&o.repeat.set(i.repeat[0],i.repeat[1]),o}var Ih=new Map;function sn(n,e){return Ih.has(n)||Ih.set(n,e()),Ih.get(n)}function Jn(n,e,t,i,s,r){r=Math.min(r,i*.5,s*.5),n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function $e(n,e,t,i,s,r,o="left",a="middle"){n.font=s,n.fillStyle=r,n.textAlign=o,n.textBaseline=a,n.fillText(e,t,i)}var Lt='"Bahnschrift", "Segoe UI", "Microsoft YaHei", Arial, sans-serif',At='Consolas, "Courier New", monospace';function sx(){return sn("front-screen",()=>nn(512,512,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#0b1e2e"),i.addColorStop(.34,"#1f4f68"),i.addColorStop(.6,"#123243"),i.addColorStop(1,"#060c12"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=n.createRadialGradient(e*.7,t*.29,4,e*.7,t*.29,e*.36);s.addColorStop(0,"rgba(255,232,190,0.95)"),s.addColorStop(.22,"rgba(255,182,104,0.42)"),s.addColorStop(1,"rgba(255,160,80,0)"),n.fillStyle=s,n.fillRect(0,0,e,t);let r=[{base:.62,amp:.17,color:"#0b1d28",seed:.4},{base:.69,amp:.12,color:"#091720",seed:1.7},{base:.76,amp:.08,color:"#060f16",seed:2.9}];for(let d of r){n.beginPath(),n.moveTo(0,t),n.lineTo(0,t*d.base);for(let g=0;g<=9;g++){let _=g/9,m=t*(d.base-Math.sin(_*3.1+d.seed)*d.amp*.55-Math.cos(_*5.3+d.seed*2)*d.amp*.3);n.lineTo(e*_,m)}n.lineTo(e,t),n.closePath(),n.fillStyle=d.color,n.fill()}let o=n.createLinearGradient(0,t*.74,0,t);o.addColorStop(0,"rgba(90,190,220,0.18)"),o.addColorStop(1,"rgba(3,8,12,0.9)"),n.fillStyle=o,n.fillRect(0,t*.74,e,t*.26);for(let d=0;d<14;d++){let g=t*(.76+d*.016);n.fillStyle=`rgba(190,235,255,${.12-d*.007})`,n.fillRect(e*(.08+d%5*.17),g,e*.09,1.4)}n.fillStyle="rgba(255,205,150,0.35)",n.fillRect(0,t*.615,e,1.6),n.strokeStyle="rgba(235,250,255,0.13)",n.lineWidth=1.2;for(let d=1;d<=2;d++)n.beginPath(),n.moveTo(e*d/3,0),n.lineTo(e*d/3,t),n.stroke(),n.beginPath(),n.moveTo(0,t*d/3),n.lineTo(e,t*d/3),n.stroke();n.strokeStyle="rgba(255,255,255,0.75)",n.lineWidth=2.2,n.beginPath(),n.moveTo(e*.5-16,t*.5),n.lineTo(e*.5-5,t*.5),n.moveTo(e*.5+5,t*.5),n.lineTo(e*.5+16,t*.5),n.moveTo(e*.5,t*.5-16),n.lineTo(e*.5,t*.5-5),n.moveTo(e*.5,t*.5+5),n.lineTo(e*.5,t*.5+16),n.stroke(),n.strokeStyle="rgba(91,231,255,0.9)",n.lineWidth=3;let a=22,l=26,c=[[a,a,1,1],[e-a,a,-1,1],[a,t-a,1,-1],[e-a,t-a,-1,-1]];for(let[d,g,_,m]of c)n.beginPath(),n.moveTo(d+_*l,g),n.lineTo(d,g),n.lineTo(d,g+m*l),n.stroke();n.fillStyle="rgba(2,6,10,0.55)",n.fillRect(0,0,e,62),n.fillRect(0,t-78,e,78),n.fillStyle="rgba(91,231,255,0.25)",n.fillRect(0,62,e,1.5),n.fillStyle="#ff3b30",n.beginPath(),n.arc(40,31,8,0,tn),n.fill(),$e(n,"REC",58,32,`700 22px ${Lt}`,"#ffffff"),$e(n,"00:12:45",130,32,`600 18px ${At}`,"rgba(235,250,255,0.8)"),n.strokeStyle="rgba(235,250,255,0.85)",n.lineWidth=2,Jn(n,e-78,20,40,20,5),n.stroke(),n.fillStyle="rgba(121,255,178,0.95)",n.fillRect(e-74,24,28,12),n.fillRect(e-36,26,4,8),$e(n,"87%",e-108,32,`600 16px ${At}`,"rgba(235,250,255,0.85)","right"),n.fillStyle="rgba(91,231,255,0.16)",Jn(n,e*.5-62,15,124,34,8),n.fill(),n.strokeStyle="rgba(91,231,255,0.6)",n.lineWidth=1.2,Jn(n,e*.5-62,15,124,34,8),n.stroke(),$e(n,"4K / 120",e*.5,33,`700 17px ${Lt}`,"#bfeaff","center"),$e(n,"1/240",22,t-46,`600 19px ${At}`,"#eaf6fb"),$e(n,"F2.8",98,t-46,`600 19px ${At}`,"#eaf6fb"),$e(n,"ISO 100",172,t-46,`600 19px ${At}`,"#eaf6fb"),$e(n,"155\xB0",22,t-22,`500 15px ${At}`,"rgba(125,147,162,0.95)"),$e(n,"D-LOG M \xB7 10-BIT",e-22,t-24,`600 15px ${Lt}`,"#ffb25e","right");let h=e-30,u=t*.5-44,p=t*.5+44;n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1.5,n.beginPath(),n.moveTo(h,u),n.lineTo(h,p),n.stroke(),n.fillStyle="rgba(91,231,255,0.95)",n.beginPath(),n.moveTo(h,t*.5-4),n.lineTo(h-6,t*.5+6),n.lineTo(h+6,t*.5+6),n.closePath(),n.fill()}))}function rx(){return sn("rear-screen",()=>nn(1024,576,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081a28"),i.addColorStop(.4,"#1b4a60"),i.addColorStop(.62,"#0d2634"),i.addColorStop(1,"#04090d"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=n.createRadialGradient(e*.63,t*.34,6,e*.63,t*.34,e*.34);s.addColorStop(0,"rgba(255,236,196,0.95)"),s.addColorStop(.2,"rgba(255,186,110,0.42)"),s.addColorStop(1,"rgba(255,160,80,0)"),n.fillStyle=s,n.fillRect(0,0,e,t);let r=[{base:.58,amp:.16,color:"#0a1c27",seed:.7},{base:.67,amp:.11,color:"#081620",seed:2.1},{base:.76,amp:.07,color:"#050e15",seed:3.3}];for(let g of r){n.beginPath(),n.moveTo(0,t),n.lineTo(0,t*g.base);for(let _=0;_<=12;_++){let m=_/12,f=t*(g.base-Math.sin(m*4.2+g.seed)*g.amp*.5-Math.cos(m*6.7+g.seed)*g.amp*.28);n.lineTo(e*m,f)}n.lineTo(e,t),n.closePath(),n.fillStyle=g.color,n.fill()}let o=n.createLinearGradient(0,t*.74,0,t);o.addColorStop(0,"rgba(80,185,220,0.16)"),o.addColorStop(1,"rgba(2,7,11,0.92)"),n.fillStyle=o,n.fillRect(0,t*.74,e,t*.26),n.fillStyle="rgba(255,205,150,0.32)",n.fillRect(0,t*.61,e,2),n.strokeStyle="rgba(235,250,255,0.11)",n.lineWidth=1.5;for(let g=1;g<=2;g++)n.beginPath(),n.moveTo(e*g/3,0),n.lineTo(e*g/3,t),n.stroke(),n.beginPath(),n.moveTo(0,t*g/3),n.lineTo(e,t*g/3),n.stroke();n.fillStyle="rgba(2,6,10,0.58)",n.fillRect(0,0,e,74),n.fillStyle="rgba(91,231,255,0.22)",n.fillRect(0,74,e,1.6),n.fillStyle="#ff3b30",n.beginPath(),n.arc(46,37,9,0,tn),n.fill(),$e(n,"REC",66,38,`700 24px ${Lt}`,"#ffffff"),$e(n,"00:12:45",146,38,`600 20px ${At}`,"rgba(235,250,255,0.82)"),$e(n,"4K / 120",e*.5,38,`700 24px ${Lt}`,"#bfeaff","center"),$e(n,"D-LOG M 10-BIT",e-160,38,`600 17px ${Lt}`,"#ffb25e","right"),n.strokeStyle="rgba(235,250,255,0.85)",n.lineWidth=2.4,Jn(n,e-92,24,42,21,5),n.stroke(),n.fillStyle="rgba(121,255,178,0.95)",n.fillRect(e-88,28,30,13),n.fillRect(e-49,30,4,9);let a=["\u2699","\u25A4","\u25C9","\u25A6"];for(let g=0;g<a.length;g++){let _=130+g*78;n.fillStyle=g===0?"rgba(91,231,255,0.20)":"rgba(255,255,255,0.06)",Jn(n,e-94,_-27,66,56,12),n.fill(),n.strokeStyle=g===0?"rgba(91,231,255,0.7)":"rgba(255,255,255,0.2)",n.lineWidth=1.4,Jn(n,e-94,_-27,66,56,12),n.stroke(),$e(n,a[g],e-61,_+1,`600 26px ${Lt}`,g===0?"#8ce9ff":"rgba(235,250,255,0.78)","center")}let l=[["1/240","SHUTTER"],["F2.8","APERTURE"],["ISO 100","ISO"],["0.0 EV","EV"]];for(let g=0;g<l.length;g++){let _=30+g*112,m=t-132;n.fillStyle="rgba(3,9,14,0.66)",Jn(n,_,m,100,74,10),n.fill(),n.strokeStyle="rgba(91,231,255,0.35)",n.lineWidth=1.3,Jn(n,_,m,100,74,10),n.stroke(),$e(n,l[g][0],_+50,m+30,`700 22px ${At}`,"#eaf6fb","center"),$e(n,l[g][1],_+50,m+57,`600 11px ${Lt}`,"rgba(125,147,162,0.95)","center")}let c=e*.5,h=t-74;n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=5,n.beginPath(),n.arc(c,h,32,0,tn),n.stroke(),n.fillStyle="#ff3b30",n.beginPath(),n.arc(c,h,23,0,tn),n.fill(),$e(n,"ROCKSTEADY 3.0+",e-130,t-96,`600 15px ${Lt}`,"rgba(121,255,178,0.9)","right"),$e(n,"87%  \xB7  01:42:12",e-130,t-66,`600 16px ${At}`,"rgba(235,250,255,0.85)","right"),$e(n,"HORIZON  \u25CF",e-130,t-38,`600 13px ${Lt}`,"rgba(125,147,162,0.9)","right"),n.strokeStyle="rgba(91,231,255,0.85)",n.lineWidth=3.4;let u=20,p=28,d=[[u,u,1,1],[e-u,u,-1,1],[u,t-u,1,-1],[e-u,t-u,-1,-1]];for(let[g,_,m,f]of d)n.beginPath(),n.moveTo(g+m*p,_),n.lineTo(g,_),n.lineTo(g,_+f*p),n.stroke()}))}function yf(n,e,t){let i=n.createLinearGradient(0,0,e,t);i.addColorStop(0,"#0f4a2a"),i.addColorStop(.45,"#0b3a21"),i.addColorStop(1,"#082d19"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="rgba(150,122,48,0.09)";for(let s=0;s<6;s++)Jn(n,e*(.06+s*.14),t*(.08+s%3*.26),e*.2,t*.18,10),n.fill();n.fillStyle="rgba(4,18,10,0.45)";for(let s=0;s<5;s++)Jn(n,e*(.12+s*.16),t*(.16+s%2*.4),e*.13,t*.12,8),n.fill()}function xf(n,e,t,i,s){let r=i,o=()=>(r=r*1664525+1013904223>>>0,r/4294967296);n.lineCap="round";for(let a=0;a<s;a++){let l=30+o()*(e-60),c=30+o()*(t-60);n.beginPath(),n.moveTo(l,c);let h=2+(o()*4|0);for(let u=0;u<h;u++)o()<.5?l+=(o()-.5)*e*.14:c+=(o()-.5)*t*.14,l=Math.max(16,Math.min(e-16,l)),c=Math.max(16,Math.min(t-16,c)),n.lineTo(l,c);n.strokeStyle=`rgba(190,148,58,${.24+o()*.34})`,n.lineWidth=1+o()*1.6,n.stroke(),o()<.5&&(n.beginPath(),n.arc(l,c,3.2,0,tn),n.fillStyle="rgba(210,170,74,0.6)",n.fill(),n.beginPath(),n.arc(l,c,1.5,0,tn),n.fillStyle="rgba(4,16,9,0.9)",n.fill())}}function ox(n,e,t,i){n.strokeStyle="rgba(226,240,232,0.72)",n.fillStyle="rgba(226,240,232,0.72)",n.lineWidth=1.6;let s=[[e*.12,t*.12,e*.13,t*.15],[e*.32,t*.1,e*.1,t*.12],[e*.52,t*.12,e*.11,t*.1],[e*.72,t*.1,e*.16,t*.14],[e*.11,t*.62,e*.14,t*.18],[e*.4,t*.66,e*.2,t*.2],[e*.7,t*.62,e*.18,t*.16]];for(let[l,c,h,u]of s)n.strokeRect(l,c,h,u);for(let l=0;l<26;l++){let c=l/26,h=e*(.06+l*37%100/118),u=t*(.3+c*.32);n.strokeRect(h,u,12,7)}n.fillStyle="rgba(214,176,82,0.85)";for(let l=0;l<10;l++)n.fillRect(e*.05+l*13,t*.86,8,26);$e(n,i.title,e*.08,t*.05,`700 22px ${At}`,"rgba(230,244,236,0.8)"),$e(n,i.sub,e*.08,t*.92,`500 16px ${At}`,"rgba(226,240,232,0.6)");let r=e*.88,o=t*.78,a=46;n.fillStyle="rgba(226,240,232,0.75)";for(let l=0;l<7;l++)for(let c=0;c<7;c++)(l*7+c*3+l*c%5)%3===0&&n.fillRect(r+l*(a/7),o+c*(a/7),a/7-1,a/7-1)}function ff(){return sn("mainboard",()=>nn(1024,768,(n,e,t)=>{yf(n,e,t),xf(n,e,t,20230817,110),ox(n,e,t,{title:"DJI  OA4-MAIN  V1.2",sub:"2023-08-17  \xB7  REV C  \xB7  ROHS"}),$e(n,"DJI",e*.86,t*.1,`700 30px ${Lt}`,"rgba(226,240,232,0.75)","center")}))}function ax(){return sn("sensor-board",()=>nn(512,448,(n,e,t)=>{yf(n,e,t),xf(n,e,t,77123,42),n.strokeStyle="rgba(226,240,232,0.7)",n.lineWidth=2,n.strokeRect(e*.28,t*.2,e*.44,t*.36),n.fillStyle="rgba(214,176,82,0.9)";for(let i=0;i<8;i++)n.fillRect(e*.3+i*e*.05,t*.72,e*.032,t*.05);$e(n,"IMX  SENSOR  BOARD",e*.5,t*.09,`700 18px ${At}`,"rgba(226,240,232,0.8)","center"),$e(n,"DJI  OA4  SEN  V1.0",e*.5,t*.9,`500 15px ${At}`,"rgba(226,240,232,0.55)","center")}))}function lx(){return sn("battery-label",()=>nn(512,560,(n,e,t)=>{n.fillStyle="#14161a",n.fillRect(0,0,e,t);let i=n.createLinearGradient(0,0,e,0);i.addColorStop(0,"#ff6b2c"),i.addColorStop(1,"#e03a16"),n.fillStyle=i,n.fillRect(0,0,e,86),$e(n,"DJI",30,45,`700 52px ${Lt}`,"#ffffff"),$e(n,"OSMO ACTION 4",e-30,45,`600 22px ${Lt}`,"rgba(255,255,255,0.92)","right"),$e(n,"1770",34,168,`700 92px ${Lt}`,"#f2f7fa"),$e(n,"mAh",190,190,`600 34px ${Lt}`,"rgba(242,247,250,0.75)"),$e(n,"6.8 Wh  \xB7  LiPo 1S  \xB7  3.85 V",34,238,`500 22px ${At}`,"#9fb3c0"),n.strokeStyle="rgba(255,255,255,0.16)",n.lineWidth=2,n.beginPath(),n.moveTo(30,268),n.lineTo(e-30,268),n.stroke(),$e(n,"RECHARGEABLE  Li-ion  BATTERY",34,300,`600 17px ${Lt}`,"#dfe9ef"),$e(n,"MODEL  AB4        CAPACITY 1770 mAh",34,334,`500 16px ${At}`,"#95a8b4"),$e(n,"MADE IN CHINA",34,362,`500 15px ${At}`,"#7d93a2"),$e(n,"\u5145\u7535\u6E29\u5EA6 0\u2103~45\u2103  \xB7  \u8BF7\u4F7F\u7528\u539F\u88C5\u5145\u7535\u5668",34,396,`500 17px ${Lt}`,"#c9d6de"),$e(n,"-20\u2103 ~ 45\u2103  OPERATING",34,424,`500 15px ${At}`,"#7d93a2");let s=70,r=492;n.fillStyle="#f7c948",n.beginPath(),n.moveTo(s,r-30),n.lineTo(s+30,r+22),n.lineTo(s-30,r+22),n.closePath(),n.fill(),$e(n,"!",s,r+4,`700 30px ${Lt}`,"#14161a","center");let o=e-196,a=458,l=168,c=62;n.fillStyle="rgba(255,255,255,0.92)",n.fillRect(o,a,l,c),n.fillStyle="#14161a";let h=99,u=()=>(h=h*16807%2147483647)/2147483647;for(let p=o+6;p<o+l-6;){let d=1+(u()*4|0);n.fillRect(p,a+4,d,c-16),p+=d+1+(u()*3|0)}$e(n,"AB4-1770-3S85",o+l*.5,a+c-5,`500 11px ${At}`,"#14161a","center"),$e(n,"CAUTION: DO NOT PUNCTURE, CRUSH OR EXPOSE TO FIRE.",34,536,`500 11px ${At}`,"#6f8492")}))}function cx(){return sn("lens-ring",()=>nn(1024,96,(n,e,t)=>{n.fillStyle="#14161a",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(0,0,e,3),n.fillRect(0,t-3,e,3);let i='DJI  OSMO ACTION 4   \xB7   1/1.3" CMOS   \xB7   F2.8   \xB7   155\xB0   \xB7   ASPHERICAL LENS   \xB7   ';n.font=`600 26px ${At}`,n.fillStyle="rgba(196,206,216,0.92)",n.textBaseline="middle",n.fillText(i,14,t*.5+1,e-28),n.fillStyle="#ff3b30",n.fillRect(0,0,7,t),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(10,0,2,t)}))}function hx(){return sn("lens-coating",()=>nn(512,512,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#020308"),i.addColorStop(.2,"#050920"),i.addColorStop(.42,"#0b1240"),i.addColorStop(.6,"#1d1652"),i.addColorStop(.76,"#0d2a52"),i.addColorStop(.9,"#061428"),i.addColorStop(1,"#030509"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=[{y:.32,h:.1,c1:"rgba(58,150,190,0.16)",c2:"rgba(58,150,190,0)"},{y:.5,h:.12,c1:"rgba(112,64,180,0.2)",c2:"rgba(112,64,180,0)"},{y:.68,h:.1,c1:"rgba(52,150,150,0.12)",c2:"rgba(52,150,150,0)"}];for(let o of s){let a=n.createLinearGradient(0,t*o.y,0,t*(o.y+o.h));a.addColorStop(0,o.c1),a.addColorStop(1,o.c2),n.fillStyle=a,n.fillRect(0,t*o.y,e,t*o.h)}let r=n.createRadialGradient(e*.3,t*.44,6,e*.3,t*.44,e*.36);r.addColorStop(0,"rgba(220,240,255,0.42)"),r.addColorStop(.16,"rgba(150,200,255,0.16)"),r.addColorStop(.5,"rgba(90,130,220,0.05)"),r.addColorStop(1,"rgba(90,130,220,0)"),n.fillStyle=r,n.fillRect(0,0,e,t);for(let o=0;o<7;o++)n.strokeStyle=`rgba(120,170,220,${.05-o*.005})`,n.lineWidth=2,n.beginPath(),n.moveTo(0,t*(.2+o*.09)),n.lineTo(e,t*(.2+o*.09)),n.stroke()}))}function ux(){return sn("aperture",()=>nn(512,512,(n,e,t)=>{let i=e*.5,s=t*.5,r=e*.48;n.fillStyle="#05070a",n.fillRect(0,0,e,t);for(let o=0;o<7;o++){let a=o/7*tn+.35;n.beginPath(),n.moveTo(i,s),n.arc(i,s,r,a,a+tn/7-.16),n.closePath();let l=22+o*13%16;n.fillStyle=`rgb(${l},${l+3},${l+6})`,n.fill(),n.strokeStyle="rgba(120,140,160,0.18)",n.lineWidth=1.5,n.stroke()}n.beginPath(),n.arc(i,s,r*.35,0,tn),n.fillStyle="#020305",n.fill(),n.strokeStyle="rgba(140,190,230,0.35)",n.lineWidth=3,n.stroke(),n.beginPath(),n.arc(i,s,r*.98,0,tn),n.strokeStyle="rgba(90,140,190,0.45)",n.lineWidth=10,n.stroke()}))}function dx(){return sn("sensor-die",()=>nn(512,512,(n,e,t)=>{n.fillStyle="#171a44",n.fillRect(0,0,e,t);let i=40,s=e/i;for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=(o*7+a*13+o*a%9)%5;n.fillStyle=`rgba(${30+l*7},${60+l*10},${150+l*14},${.35+l*.06})`,n.fillRect(o*s+.6,a*s+.6,s-1.2,s-1.2)}n.strokeStyle="rgba(220,230,255,0.7)",n.lineWidth=14,n.strokeRect(7,7,e-14,t-14),n.strokeStyle="rgba(215,170,80,0.9)",n.lineWidth=5,n.strokeRect(17,17,e-34,t-34),n.fillStyle="rgba(228,190,100,0.95)";for(let o=0;o<12;o++){let a=23+o*((e-46)/11);n.fillRect(a-5,9,10,9),n.fillRect(a-5,t-18,10,9),n.fillRect(9,a-5,9,10),n.fillRect(e-18,a-5,9,10)}let r=n.createLinearGradient(0,0,e,t);r.addColorStop(0,"rgba(120,255,220,0.14)"),r.addColorStop(.45,"rgba(255,120,220,0.1)"),r.addColorStop(1,"rgba(120,160,255,0.16)"),n.fillStyle=r,n.fillRect(0,0,e,t),$e(n,'1/1.3"',e*.5,t*.5,`700 34px ${At}`,"rgba(235,245,255,0.45)","center")}))}function pf(){return sn("dji-logo",()=>nn(512,160,(n,e,t)=>{n.clearRect(0,0,e,t),n.font=`700 128px ${Lt}`,n.fillStyle="rgba(240,248,252,0.94)",n.textAlign="center",n.textBaseline="middle",n.fillText("DJI",e*.5,t*.54)}))}function mf(){return sn("osmo-text",()=>nn(768,96,(n,e,t)=>{n.clearRect(0,0,e,t),n.font=`600 44px ${Lt}`,n.fillStyle="rgba(214,228,238,0.72)",n.textAlign="center",n.textBaseline="middle",n.fillText("OSMO ACTION 4",e*.5,t*.54)}))}function fx(){return sn("rec-icon",()=>nn(128,128,(n,e,t)=>{n.clearRect(0,0,e,t),n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=6,n.beginPath(),n.arc(e/2,t/2,34,0,tn),n.stroke(),n.fillStyle="rgba(255,255,255,0.92)",n.beginPath(),n.arc(e/2,t/2,16,0,tn),n.fill()}))}function px(){return sn("usb-icon",()=>nn(128,128,(n,e,t)=>{n.clearRect(0,0,e,t),n.strokeStyle="rgba(214,228,238,0.85)",n.fillStyle="rgba(214,228,238,0.85)",n.lineWidth=5,n.lineCap="round";let i=e/2;n.beginPath(),n.moveTo(i,96),n.lineTo(i,34),n.stroke(),n.beginPath(),n.moveTo(i-10,44),n.lineTo(i,26),n.lineTo(i+10,44),n.closePath(),n.fill(),n.beginPath(),n.moveTo(i,66),n.lineTo(i-22,52),n.stroke(),n.beginPath(),n.arc(i-24,50,6,0,tn),n.fill(),n.beginPath(),n.moveTo(i,76),n.lineTo(i+22,62),n.stroke(),n.fillRect(i+18,48,12,12),n.beginPath(),n.arc(i,100,9,0,tn),n.fill()}))}function mx(){return sn("mount-text",()=>nn(768,96,(n,e,t)=>{n.clearRect(0,0,e,t),n.font=`600 30px ${At}`,n.fillStyle="rgba(220,232,240,0.66)",n.textAlign="center",n.textBaseline="middle",n.fillText("DJI  \xB7  MAGNETIC  QUICK-RELEASE",e*.5,t*.54)}))}function gf(n,e){return sn(`chip:${n}:${e}`,()=>nn(256,256,(t,i,s)=>{t.fillStyle="#08090b",t.fillRect(0,0,i,s),t.strokeStyle="rgba(190,205,220,0.22)",t.lineWidth=2,t.strokeRect(4,4,i-8,s-8),$e(t,n,i*.5,s*.42,`700 44px ${Lt}`,"rgba(226,238,248,0.92)","center"),$e(t,e,i*.5,s*.66,`500 20px ${At}`,"rgba(178,196,210,0.8)","center"),t.fillStyle="rgba(150,170,190,0.25)",t.fillRect(i*.2,s*.78,i*.6,3)}))}function kn(n,e,t){let i=n*.5,s=e*.5,r=Math.min(t,i*.999,s*.999),o=new Vs;return o.moveTo(-i+r,-s),o.lineTo(i-r,-s),o.quadraticCurveTo(i,-s,i,-s+r),o.lineTo(i,s-r),o.quadraticCurveTo(i,s,i-r,s),o.lineTo(-i+r,s),o.quadraticCurveTo(-i,s,-i,s-r),o.lineTo(-i,-s+r),o.quadraticCurveTo(-i,-s,-i+r,-s),o.closePath(),o}function vf(n,e,t,i=0,s=0){let r=kn(n,e,t).getPoints(8);r.reverse();for(let o of r)o.x+=i,o.y+=s;return new Si(r)}function _f(n,e,t,i=32){let s=new Si;return s.absarc(n,e,t,0,tn,!0,i),s}function os(n,e,t,i,s,r){let o=kn(n,e,s);return o.holes.push(vf(t,i,r)),o}function qt(n,e,t={}){let i=Math.max(0,Math.min(t.bevel??.02,e*.24)),s=Math.max(.005,e-i*2),r=new eo(n,{depth:s,bevelEnabled:i>0,bevelThickness:i,bevelSize:i,bevelSegments:t.bevelSegments??1,curveSegments:t.curveSegments??20,steps:1});r.computeBoundingBox();let o=r.boundingBox;r.translate(0,0,-(o.min.z+o.max.z)*.5);let a=t.axis||"z";return a==="y"?r.rotateX(-Math.PI/2):a==="x"&&r.rotateY(Math.PI/2),r}function Ye(n,e,t,i=.08,s=2){let r=Math.min(i,n*.49,e*.49,t*.49);return new Bl(n,e,t,s,r)}function _t(n,e,t,i=32,s=!1){return new Yr(n,e,t,i,1,s)}function Di(n,e,t=8,i=32){return new to(n,e,t,i)}var se={body(n={}){return new Ji({color:921619,roughness:.42,metalness:.28,clearcoat:.55,clearcoatRoughness:.32,...n})},matte(n={}){return new It({color:1316378,roughness:.68,metalness:.15,...n})},plastic(n={}){return new It({color:1052948,roughness:.55,metalness:.08,...n})},metal(n={}){return new It({color:10134445,roughness:.3,metalness:.95,...n})},darkMetal(n={}){return new It({color:3817286,roughness:.36,metalness:.88,...n})},rubber(n={}){return new It({color:658189,roughness:.95,metalness:.02,...n})},copper(n={}){return new It({color:11038767,roughness:.4,metalness:.75,...n})},kapton(n={}){return new It({color:13661479,roughness:.42,metalness:.18,...n})},glass(n={}){return new Ji({color:661024,roughness:.05,metalness:0,transparent:!0,opacity:.28,clearcoat:1,clearcoatRoughness:.04,ior:1.46,depthWrite:!1,...n})},screen(n,e={}){return new It({map:n,emissiveMap:n,emissive:new De(16777215),emissiveIntensity:.9,color:2829099,roughness:.26,metalness:0,...e})}};function ie(n,e,t,i,s,r,o){let a=new gt(e,t);return a.position.set(i-n.position.x,s-n.position.y,r-n.position.z),o&&(a.name=o),n.add(a),a}function $t(n,e,t,i,s){let r=new kr(e,t,i.length),o=new Pt;for(let a=0;a<i.length;a++){let l=i[a];o.position.set(l[0]-n.position.x,l[1]-n.position.y,l[2]-n.position.z),o.rotation.set(0,0,0),l.length>3&&o.rotation.set(l[3],l[4]||0,l[5]||0),o.updateMatrix(),r.setMatrixAt(a,o.matrix)}return r.instanceMatrix.needsUpdate=!0,s&&(r.name=s),n.add(r),r}function rs(n,e,t,i,s,r,o,a=0,l=0,c=0,h=1){let u=new It({map:e,transparent:!0,opacity:h,depthWrite:!1,roughness:.5,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:Vt}),p=new gt(new bt(t,i),u);return p.position.set(s-n.position.x,r-n.position.y,o-n.position.z),p.rotation.set(a,l,c),n.add(p),p}function Kn(n,e,t,i){n.userData.labelAnchor=new w(e-n.position.x,t-n.position.y,i-n.position.z)}var zl=7.05,bf=4.42;var Mf=.7;var Li=2.21,xo=-2.21,dt=-1.55,Mt=.5,nr=2,ir=.25;function gx(n){let e=kn(zl,bf,Mf);e.holes.push(_f(dt,Mt,1.5,40)),e.holes.push(vf(2.3,2.3,.26,nr,ir)),e.holes.push(_f(.45,1.8,.08,16));let t=se.body({color:1053206,roughness:.34,metalness:.3,clearcoat:.75});ie(n,qt(e,.16,{bevel:.018,curveSegments:22}),t,0,0,1.66,"front-cover");let i=()=>se.body({color:855826,roughness:.48,metalness:.24,clearcoat:.35});ie(n,qt(kn(3.3,4.16,.5),.2,{axis:"x",bevel:.02,curveSegments:12}),i(),-3.42,0,.02,"left-wall"),ie(n,qt(kn(zl,3.3,.55),.18,{axis:"y",bevel:.02,curveSegments:12}),i(),0,Li-.09,.02,"top-wall"),ie(n,qt(kn(zl,3.3,.55),.18,{axis:"y",bevel:.02,curveSegments:12}),i(),0,xo+.09,.02,"bottom-wall"),ie(n,qt(os(6.5,3.9,6.16,3.56,.5,.45),.05,{bevel:.01,curveSegments:12}),se.rubber({color:526603,roughness:.9}),0,0,1.575,"shell-gasket");let s=se.copper({roughness:.34,metalness:.82,color:10250796}),r=ie(n,new bt(2.4,1.7),s,-3.31,.05,.15,"emi-foil");r.rotation.y=Math.PI/2;let o=_t(.1,.1,.1,14);o.rotateX(Math.PI/2),$t(n,o,se.darkMetal({color:2303531}),[[-2.7,1.62,1.54],[2.72,1.62,1.54],[2.72,-1.62,1.54],[-2.7,-1.62,1.54]],"shell-bosses");let a=_t(.072,.072,.035,14);a.rotateX(Math.PI/2),$t(n,a,se.darkMetal({color:2895927,roughness:.3,metalness:.92}),[[-3.2,1.86,1.744],[3.2,1.86,1.744],[-3.2,-1.86,1.744],[3.2,-1.86,1.744]],"front-screws");let l=_t(.075,.075,.03,14);l.rotateX(Math.PI/2),ie(n,l,new It({color:3803656,emissive:new De(16722462),emissiveIntensity:1.6,roughness:.35,metalness:.2}),.45,1.8,1.715,"status-led");let c=_t(.048,.048,.02,10);$t(n,c,se.matte({color:329223,roughness:.95}),[[-1.62,Li+.004,.62],[-1.44,Li+.004,.62],[-1.26,Li+.004,.62],[1.95,Li+.004,-1.06],[2.14,Li+.004,-1.06]],"top-mics");let h=new an(.62,.012,.075);$t(n,h,se.matte({color:263430,roughness:.95}),[[-1.35,xo+.004,.86],[.15,xo+.004,.86],[-1.35,xo+.004,-.98],[.15,xo+.004,-.98]],"bottom-slots");let u=_t(.21,.21,.1,24);u.rotateZ(Math.PI/2),ie(n,u,se.plastic({color:1645344,roughness:.5}),-3.5,1.18,.6,"power-key");let p=Di(.225,.03,8,26);p.rotateY(Math.PI/2),ie(n,p,se.darkMetal({color:5527903}),-3.49,1.18,.6,"power-key-ring"),rs(n,pf(),.92,.29,-1.72,-1.55,1.745,0,0,0,.85),rs(n,mf(),1.75,.22,2.02,-1.52,1.745,0,0,0,.72),rs(n,pf(),.78,.24,-2.15,Li+.003,-.7,-Math.PI/2,0,0,.75),rs(n,mf(),1.55,.2,-.35,Li+.003,-1.2,-Math.PI/2,0,0,.6),Kn(n,-.2,1.55,1.74)}function _x(n){let e=se.plastic({color:1185049,roughness:.56,metalness:.24}),t=se.darkMetal({color:3488321,roughness:.34,metalness:.9}),i=se.metal({color:6449520,roughness:.28,metalness:.95}),s=_t(1.12,1.12,.78,40);s.rotateX(Math.PI/2),ie(n,s,e,dt,Mt,1.19,"lens-rear-barrel");for(let S=0;S<3;S++){let x=Di(1.125,.024,6,36);ie(n,x,t.clone(),dt,Mt,.94+S*.22,"lens-rib")}let r=new zs(.94,32);r.rotateY(Math.PI),ie(n,r,se.glass({color:728115,opacity:.85,metalness:.2,roughness:.06}),dt,Mt,.802,"lens-rear-glass");let o=Di(.98,.045,8,36);ie(n,o,i.clone(),dt,Mt,.81,"lens-rear-ring");let a=_t(1.28,1.28,.14,40);a.rotateX(Math.PI/2),ie(n,a,t.clone(),dt,Mt,1.655,"lens-block");let l=_t(1.62,1.62,.28,56,!0);l.rotateX(Math.PI/2),ie(n,l,t,dt,Mt,1.8,"lens-bezel-tube");let c=new On(1.16,1.64,56);ie(n,c,i,dt,Mt,1.945,"lens-bezel-face");let h=Di(1.6,.032,8,56);ie(n,h,i.clone(),dt,Mt,1.945,"lens-bezel-chamfer");let u=_t(1.632,1.632,.1,72,!0);u.rotateX(Math.PI/2),ie(n,u,new It({map:cx(),color:16777215,roughness:.36,metalness:.85}),dt,Mt,1.868,"lens-engraving");let p=_t(1.14,1.14,.26,40,!0);p.rotateX(Math.PI/2),ie(n,p,se.matte({color:460810,roughness:.9}),dt,Mt,1.79,"lens-inner-barrel");let d=new zs(1.13,44);ie(n,d,new It({map:ux(),roughness:.34,metalness:.55,color:16777215}),dt,Mt,1.9,"lens-iris");let g=new On(1.12,1.165,48);ie(n,g,t.clone(),dt,Mt,1.903,"lens-iris-ring");let _=[],m=12;for(let S=0;S<=m;S++){let x=S/m*(Math.PI/2);_.push(new K(Math.cos(x)*1.14,Math.sin(x)*.115))}let f=new Gs(_,56);f.rotateX(Math.PI/2),ie(n,f,new Ji({map:hx(),color:16777215,metalness:.32,roughness:.08,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.97,envMapIntensity:1}),dt,Mt,1.9,"lens-front-element");let E=Di(1.15,.025,6,48);ie(n,E,i.clone(),dt,Mt,2,"lens-retainer"),Kn(n,dt,Mt,2.05)}function yx(n){ie(n,Ye(2.44,2.44,.06,.12,2),se.plastic({color:658189}),nr,ir,1.73,"front-lcd-backing"),ie(n,new bt(2.2,2.2),se.screen(sx()),nr,ir,1.792,"front-lcd"),ie(n,qt(os(2.62,2.62,2.29,2.29,.34,.27),.1,{bevel:.012,curveSegments:16}),se.body({color:1513757,roughness:.22,metalness:.36,clearcoat:1,clearcoatRoughness:.1}),nr,ir,1.784,"front-lcd-bezel"),ie(n,new bt(2.26,2.26),se.glass({color:10475775,opacity:.16}),nr,ir,1.815,"front-lcd-glass");let e=se.kapton({color:13212218});ie(n,Ye(.44,.05,.5,.02,1),e,2.3,-1.02,1.47,"front-fpc-a"),ie(n,Ye(.44,.78,.05,.02,1),e.clone(),2.3,-1.42,1.24,"front-fpc-b"),ie(n,Ye(.5,.16,.1,.03,1),se.plastic({color:1184535}),2.3,-1.85,1.24,"front-fpc-connector"),Kn(n,nr,ir,1.82)}function xx(n){ie(n,qt(kn(2.15,1.95,.14),.06,{bevel:.01,curveSegments:12}),se.darkMetal({color:2830391}),dt,Mt,.53,"sensor-stiffener"),ie(n,qt(kn(2,1.8,.12),.07,{bevel:.01,curveSegments:12}),se.plastic({color:801313,roughness:.56,metalness:.12}),dt,Mt,.6,"sensor-pcb");let e=ie(n,new bt(1.94,1.74),se.plastic({map:ax(),color:16777215,roughness:.6,metalness:.1}),dt,Mt,.638,"sensor-pcb-art");e.rotation.z=Math.PI,ie(n,Ye(1.52,1.32,.16,.07,2),se.plastic({color:1645343,roughness:.5,metalness:.25}),dt,Mt,.7,"sensor-package"),ie(n,qt(os(1.36,1.16,1.05,.87,.05,.035),.035,{bevel:.006,curveSegments:12}),se.darkMetal({color:4870232,roughness:.3}),dt,Mt,.772,"sensor-die-frame"),ie(n,new bt(1.02,.84),new It({map:dx(),roughness:.22,metalness:.45,color:16777215}),dt,Mt,.782,"sensor-die");let t=_t(1.26,1.26,.12,40,!0);t.rotateX(Math.PI/2),ie(n,t,se.darkMetal({color:3356735}),dt,Mt,.79,"sensor-mount-ring"),ie(n,Ye(.46,.22,.12,.03,1),se.plastic({color:1053206}),dt,-.28,.66,"sensor-fpc-connector");let i=se.kapton({color:13209391});ie(n,Ye(.38,.52,.04,.015,1),i,dt,-.55,.66,"sensor-fpc-a"),ie(n,Ye(.38,.04,1.02,.015,1),i.clone(),dt,-.8,.125,"sensor-fpc-b");let s=_t(.05,.05,.1,8);s.rotateX(Math.PI/2),$t(n,s,se.darkMetal({color:7035717,roughness:.55,metalness:.3}),[[-2.35,1.18,.69],[-2.1,1.18,.69],[-.85,1.18,.69],[-.72,1.18,.69],[-2.35,-.15,.69],[-.82,-.15,.69]],"sensor-caps"),Kn(n,dt,Mt,.86)}function vx(n){ie(n,qt(kn(4.15,3.5,.16),.1,{bevel:.01,curveSegments:14}),se.plastic({color:735777,roughness:.55,metalness:.12}),-1.05,-.1,-.45,"mainboard-substrate"),ie(n,new bt(4.05,3.4),se.plastic({map:ff(),color:16777215,roughness:.58,metalness:.1}),-1.05,-.1,-.45+.055,"mainboard-art-front");let s=ie(n,new bt(4.05,3.4),se.plastic({map:ff(),color:16777215,roughness:.58,metalness:.1}),-1.05,-.1,-.45-.055,"mainboard-art-back");s.rotation.y=Math.PI,s.rotation.z=Math.PI,ie(n,Ye(1.02,1.02,.14,.05,2),se.plastic({color:723982,roughness:.42,metalness:.3}),-2.35,.35,-.33,"soc"),ie(n,new bt(.82,.82),se.plastic({map:gf("DJI","OA4-SOC"),color:16777215,roughness:.4}),-2.35,.35,-.257,"soc-label"),ie(n,Ye(.82,.66,.12,.04,2),se.plastic({color:855569,roughness:.42,metalness:.3}),-1.05,.35,-.34,"dram"),ie(n,new bt(.66,.5),se.plastic({map:gf("LPDDR4X","8Gb"),color:16777215,roughness:.4}),-1.05,.35,-.279,"dram-label"),ie(n,Ye(.62,.5,.1,.03,2),se.plastic({color:1052948,roughness:.45,metalness:.3}),-2.75,-.65,-.35,"pmic"),ie(n,Ye(1.25,.98,.24,.04,2),se.metal({color:10989239,roughness:.36,metalness:.92}),-.15,-.75,-.28,"shield-a"),ie(n,Ye(.95,.78,.2,.04,2),se.metal({color:10133930,roughness:.4,metalness:.9}),.35,.55,-.3,"shield-b"),ie(n,Ye(.9,.72,.16,.03,2),se.darkMetal({color:9147292,roughness:.34,metalness:.9}),.55,-.45,-.32,"sd-cage"),ie(n,Ye(.06,.2,.5,.015,1),se.plastic({color:329223}),1.03,-.45,-.32,"sd-slot");for(let m=0;m<2;m++)ie(n,Ye(.42,.18,.12,.03,1),se.plastic({color:921362,roughness:.5}),m===0?.6:-.6,m===0?1.25:1.3,-.34,"b2b-connector");ie(n,Ye(.34,.22,.08,.02,1),se.metal({color:11581376,roughness:.22,metalness:.95}),-.65,-.85,-.35,"crystal"),ie(n,Ye(.44,.26,.14,.03,1),se.plastic({color:1316378,roughness:.5}),.95,-1.05,-.33,"battery-connector");let r=_t(.032,.032,.34,8);r.rotateZ(Math.PI/2.6),ie(n,r,se.plastic({color:9378582,roughness:.6}),1.22,-1.02,-.33,"battery-wire-red");let o=_t(.032,.032,.34,8);o.rotateZ(Math.PI/2.6),ie(n,o,se.plastic({color:789775,roughness:.6}),1.24,-1.1,-.33,"battery-wire-black");let a=_t(.055,.055,.13,8);a.rotateX(Math.PI/2);let l=[],c=[[-2.9,1.15],[-2.72,1.15],[-1.9,1.15],[-1.72,1.15],[-.35,1.15],[.15,1.15],[.85,.28],[.85,.12],[-2.15,-.18],[.72,-1.15],[-2.9,.9],[-1.9,.9],[-.35,.9],[-2.8,.05],[-.15,.05],[.3,-1.25],[.9,-1.1],[-1.6,-1.2]];for(let[m,f]of c)l.push([-1.05+m+1.05,-.1+f+.1,-.45+.115]);$t(n,a,se.darkMetal({color:7166532,roughness:.5,metalness:.35}),l,"caps");let h=new an(.09,.05,.04),u=[],p=[[-2.55,1],[-2.3,1],[-2.05,1],[-1.45,1],[-1.2,1],[-.95,1],[-.7,1],[-.1,.98],[.15,.98],[.4,.98],[-2.55,-1.2],[-2.3,-1.2],[-1.05,-1.2],[-.8,-1.2],[-.2,-.5],[.9,0],[.9,1.25],[-1.85,-1.2]];for(let[m,f]of p)u.push([-1.05+m+1.05,-.1+f+.1,-.45+.115]);$t(n,h,se.plastic({color:1710622,roughness:.55}),u,"resistors");let d=_t(.06,.06,.02,10);d.rotateX(Math.PI/2),$t(n,d,se.metal({color:13094098,roughness:.28}),[[-1.05-1.85,-.1+1.5,-.45+.06],[-1.05+1.85,-.1+1.5,-.45+.06],[-1.05-1.85,-.1-1.55,-.45+.06],[-1.05+1.85,-.1-1.55,-.45+.06]],"board-screws");let g=_t(.085,.085,.16,10);g.rotateX(Math.PI/2),$t(n,g,se.copper({color:10254906,roughness:.4,metalness:.75}),[[-1.05-1.85,-.1+1.5,-.45-.13],[-1.05+1.85,-.1+1.5,-.45-.13],[-1.05-1.85,-.1-1.55,-.45-.13],[-1.05+1.85,-.1-1.55,-.45-.13]],"board-standoffs");let _=se.kapton({color:13470252});ie(n,Ye(.4,.05,.92,.015,1),_,-1.55,.15,.02,"mb-sensor-fpc"),ie(n,Ye(.44,.14,.1,.02,1),se.plastic({color:1184535}),-1.55,.15,.48,"mb-sensor-connector"),ie(n,Ye(.5,.05,.44,.015,1),_.clone(),.3,-1.25,-.7,"mb-rear-fpc"),ie(n,Ye(.52,.14,.1,.02,1),se.plastic({color:1184535}),.3,-1.25,-.5,"mb-rear-connector"),ie(n,Ye(.5,.14,.1,.02,1),se.plastic({color:1184535}),.3,-1.25,-.91,"mb-rear-connector-2"),Kn(n,-1.05,.2,-.24)}function bx(n){ie(n,qt(kn(zl,bf,Mf),.16,{bevel:.018,curveSegments:22}),se.body({color:921619,roughness:.46,metalness:.26,clearcoat:.4}),0,0,-1.62,"rear-cover"),ie(n,qt(os(5.9,3.76,5,2.96,.4,.3),.12,{bevel:.01,curveSegments:16}),se.darkMetal({color:3093562,roughness:.42}),0,0,-1.47,"rear-inner-frame");let e=ie(n,new bt(4.98,2.82),se.screen(rx()),0,0,-1.712,"rear-lcd");e.rotation.y=Math.PI,ie(n,qt(os(5.62,3.42,5.04,2.88,.36,.3),.09,{bevel:.01,curveSegments:18}),se.body({color:1645343,roughness:.26,metalness:.34,clearcoat:1,clearcoatRoughness:.12}),0,0,-1.752,"rear-bezel");let t=ie(n,new bt(5,2.84),se.glass({color:10475775,opacity:.13}),0,0,-1.762,"rear-glass");t.rotation.y=Math.PI;let i=_t(.055,.055,.02,10);i.rotateX(Math.PI/2),$t(n,i,se.darkMetal({color:2830133,roughness:.3}),[[-2.66,1.58,-1.79],[2.66,1.58,-1.79],[-2.66,-1.58,-1.79],[2.66,-1.58,-1.79]],"rear-screws");let s=_t(.055,.055,.02,12);s.rotateX(Math.PI/2),ie(n,s,new It({color:3803656,emissive:new De(16726832),emissiveIntensity:1.4,roughness:.4}),2.42,1.86,-1.706,"rear-led");let r=se.kapton({color:13208108});ie(n,Ye(.5,.05,.62,.015,1),r,.3,-1.25,-1.21,"rear-fpc"),ie(n,Ye(.54,.16,.1,.02,1),se.plastic({color:1184535}),.3,-1.25,-1.5,"rear-fpc-connector"),Kn(n,0,0,-1.8)}function Mx(n){ie(n,Ye(1.8,2.8,3,.14,3),se.plastic({color:987412,roughness:.58,metalness:.14}),1.95,-.35,0,"battery-cell"),ie(n,Ye(1.7,.16,2.88,.06,2),se.plastic({color:1316377,roughness:.5}),1.95,1.12,0,"battery-top");let e=ie(n,new bt(2.4,2.55),new It({map:lx(),roughness:.52,metalness:.1,color:16777215}),2.855,-.35,0,"battery-label");e.rotation.y=Math.PI/2;let t=new an(.18,.035,.34);$t(n,t,se.metal({color:14201946,roughness:.24,metalness:.95}),[[1.62,1.205,.62],[1.96,1.205,.62],[2.3,1.205,.62]],"battery-terminals"),ie(n,Ye(.4,.22,.5,.03,1),se.plastic({color:1053206}),1.45,1.12,.15,"battery-connector");let i=_t(.03,.03,.3,8);i.rotateZ(Math.PI/2.2),ie(n,i,se.plastic({color:9378582,roughness:.6}),1.3,1.25,.15,"battery-wire-a");let s=_t(.03,.03,.3,8);s.rotateZ(Math.PI/2.2),ie(n,s,se.plastic({color:789775,roughness:.6}),1.3,1.19,.15,"battery-wire-b"),ie(n,Ye(.16,.32,.5,.04,1),se.plastic({color:1711136,roughness:.45}),2.86,.82,0,"battery-latch"),ie(n,Ye(.6,.04,.36,.02,1),se.plastic({color:1908772,roughness:.6}),2.86,-1.72,.35,"battery-tab"),Kn(n,2.9,.3,.5)}function Sx(n){ie(n,_t(.5,.5,.12,32),se.rubber({color:723982,roughness:.88}),1.35,2.17,.4,"record-seat");let e=Di(.46,.024,6,32);e.rotateX(Math.PI/2),ie(n,e,se.rubber({color:395016,roughness:.9}),1.35,2.225,.4,"record-seal");let t=Di(.34,.062,10,40);t.rotateX(Math.PI/2),ie(n,t,new It({color:13636124,roughness:.34,metalness:.35,emissive:new De(3998214),emissiveIntensity:.9}),1.35,2.245,.4,"record-ring");let i=[new K(.295,0),new K(.295,.055),new K(.28,.1),new K(.22,.135),new K(.12,.152),new K(0,.155)],s=new Gs(i,40);ie(n,s,se.plastic({color:1711136,roughness:.52,metalness:.15}),1.35,2.245,.4,"record-cap"),rs(n,fx(),.32,.32,1.35,2.402,.4,-Math.PI/2,0,0,.72),Kn(n,1.35,2.45,.4)}function Ex(n){ie(n,qt(kn(3.26,4.34,.7),.16,{axis:"x",bevel:.018,curveSegments:20}),se.body({color:855826,roughness:.4,metalness:.3,clearcoat:.65}),3.48,0,.02,"side-door"),ie(n,qt(os(3.04,4.1,2.78,3.84,.6,.5),.04,{axis:"x",bevel:.008,curveSegments:14}),se.rubber({color:526603,roughness:.92}),3.392,0,.02,"side-door-seal"),ie(n,qt(os(2.98,4.06,2.9,3.98,.62,.58),.008,{axis:"x",bevel:0,curveSegments:16}),se.matte({color:329223,roughness:.9}),3.558,0,.02,"side-door-groove"),ie(n,Ye(.07,.34,.52,.02,1),se.darkMetal({color:5659748,roughness:.34,metalness:.85}),3.573,-1.6,.52,"side-latch");let e=new an(.035,.2,.045);$t(n,e,se.darkMetal({color:7765382,roughness:.3}),[[3.6,-1.6,.38],[3.6,-1.6,.5],[3.6,-1.6,.62]],"side-latch-ridges");let t=_t(.055,.055,.46,12);$t(n,t,se.darkMetal({color:3817286}),[[3.45,1.08,-1.52],[3.45,-1.08,-1.52]],"side-hinges"),ie(n,Ye(.36,2.6,2.5,.08,2),se.plastic({color:658189,roughness:.62}),3.17,.05,.02,"io-bay"),ie(n,Ye(.18,.28,.9,.06,2),se.darkMetal({color:8291983,roughness:.32,metalness:.92}),3.36,.58,.42,"usb-c-shell"),ie(n,Ye(.12,.14,.66,.03,1),se.plastic({color:197637,roughness:.8}),3.33,.58,.42,"usb-c-inner"),ie(n,Ye(.14,.22,.82,.04,1),se.darkMetal({color:9147292,roughness:.35,metalness:.9}),3.35,-.38,.3,"sd-slot-frame"),ie(n,Ye(.08,.1,.62,.02,1),se.plastic({color:197637,roughness:.8}),3.3,-.38,.3,"sd-slot-inner"),rs(n,px(),.32,.32,3.562,.58,.42,0,Math.PI/2,0,.6),Kn(n,3.62,1,.6)}function Tx(n){ie(n,Ye(4.75,.12,2.98,.05,2),se.darkMetal({color:2435632,roughness:.42,metalness:.82}),0,-2.2,.02,"mount-top-plate"),ie(n,Ye(4.45,.4,2.8,.15,3),se.metal({color:5791334,roughness:.4,metalness:.9}),0,-2.45,.02,"mount-base"),ie(n,_t(.78,.78,.04,30),se.darkMetal({color:1645600,roughness:.5,metalness:.6}),0,-2.658,.02,"mount-core");let e=Di(.96,.04,8,32);e.rotateX(Math.PI/2),ie(n,e,se.metal({color:8160140,roughness:.34,metalness:.92}),0,-2.66,.02,"mount-core-ring");let t=_t(.33,.33,.07,20);$t(n,t,se.darkMetal({color:1777186,roughness:.42,metalness:.95}),[[-1.2,-2.68,-.85],[0,-2.68,-.85],[1.2,-2.68,-.85],[-1.2,-2.68,.85],[0,-2.68,.85],[1.2,-2.68,.85]],"mount-magnets");let i=se.darkMetal({color:4672853,roughness:.34,metalness:.9});ie(n,Ye(1.6,.16,.26,.05,2),i,0,-2.62,1.32,"claw-front"),ie(n,Ye(1.6,.16,.26,.05,2),i.clone(),0,-2.62,-1.28,"claw-rear"),ie(n,Ye(1.25,.18,.26,.06,2),se.darkMetal({color:5988971,roughness:.32,metalness:.88}),0,-2.44,1.46,"lock-lever");let s=new an(.06,.12,.03);$t(n,s,se.metal({color:10134445,roughness:.3}),[[-.4,-2.44,1.6],[0,-2.44,1.6],[.4,-2.44,1.6]],"lever-ridges");let r=_t(.06,.06,.02,10);$t(n,r,se.metal({color:9147034,roughness:.3}),[[-1.9,-2.135,1.24],[1.9,-2.135,1.24],[-1.9,-2.135,-1.2],[1.9,-2.135,-1.2]],"mount-screws"),rs(n,mx(),2.5,.31,0,-2.46,1.432,0,0,0,.6),Kn(n,0,-2.72,.8)}var wx={"front-shell":[0,0,1.55],lens:[-1.55,.5,1.75],"front-screen":[2,.25,1.7],sensor:[-1.55,.5,.65],mainboard:[0,-.1,-.45],"rear-screen":[0,0,-1.72],battery:[1.95,-.35,-.1],"record-button":[1.35,2.28,.4],"side-cover":[3.58,0,-.2],mount:[0,-2.36,0]},Ax={"front-shell":gx,lens:_x,"front-screen":yx,sensor:xx,mainboard:vx,"rear-screen":bx,battery:Mx,"record-button":Sx,"side-cover":Ex,mount:Tx};function Rx(n,e){let t=n.userData.partId;n.traverse(i=>{i.isMesh&&(i.userData.partId=t,i.castShadow=!1,i.receiveShadow=!1,e.push(i))})}function Sf(){let n=new pn;n.name="OsmoAction4";let e=new Map,t=[],i=["front-shell","lens","front-screen","sensor","mainboard","rear-screen","battery","record-button","side-cover","mount"];for(let s of i){let r=new pn;r.name=s,r.userData.partId=s;let o=wx[s];r.position.set(o[0],o[1],o[2]),Ax[s](r),r.userData.labelAnchor||(r.userData.labelAnchor=new w(0,0,0)),Rx(r,t),e.set(s,r),n.add(r)}return{root:n,parts:e,pickables:t}}var Ef={brand:"DJI",name:"Osmo Action 4",nameZh:"\u5927\u7586 Osmo Action 4",model:"OA4-2023",edition:"INTERACTIVE TEARDOWN / 01",tagline:"\u65D7\u8230\u753B\u8D28 \xB7 \u78C1\u5438\u5FEB\u62C6 \xB7 \u88F8\u673A 18 m \u9632\u6C34",dimensions:"70.5 \xD7 44.2 \xD7 32.8 mm",weight:"145 g",sensor:'1/1.3" CMOS',video:"4K / 120 fps",waterproof:"18 m",battery:"1770 mAh",runtime:"160 min",screens:'1.4" + 2.25"',microphones:3,overviewDesc:"Osmo Action 4 \u5C06 1/1.3 \u82F1\u5BF8\u5927\u5E95\u5F71\u50CF\u3001\u53CC\u89E6\u63A7\u5C4F\u548C\u78C1\u5438\u5FEB\u62C6\u7ED3\u6784\u538B\u7F29\u8FDB 145 g \u7684\u673A\u8EAB\u3002\u8F6C\u52A8\u89C6\u89D2\u5E76\u70B9\u51FB\u4EFB\u610F\u90E8\u4EF6\uFF0C\u9010\u5C42\u67E5\u770B\u5B83\u7684\u5916\u90E8\u7ED3\u6784\u4E0E\u5185\u90E8\u5806\u53E0\u3002",overviewSpecs:[{label:"\u5C3A\u5BF8",value:"70.5 \xD7 44.2 \xD7 32.8 mm"},{label:"\u6574\u673A\u91CD\u91CF",value:"145 g"},{label:"\u5F71\u50CF\u4F20\u611F\u5668",value:'1/1.3" CMOS'},{label:"\u6700\u5927\u89C6\u573A\u89D2",value:"155\xB0"},{label:"\u5149\u5708",value:"f/2.8"},{label:"\u89C6\u9891\u89C4\u683C",value:"4K / 120 fps"},{label:"\u9632\u6C34\u80FD\u529B",value:"\u88F8\u673A 18 m"},{label:"\u7535\u6C60\u7EED\u822A",value:"1770 mAh / 160 min"}],quickStats:[{label:"SENSOR",value:'1/1.3"'},{label:"FOV",value:"155\xB0"},{label:"VIDEO",value:"4K/120"},{label:"WATER",value:"18 m"}]},jn=[{id:"front-shell",no:"01",name:"\u524D\u58F3\u7EC4\u4EF6",en:"FRONT SHELL",category:"\u5916\u90E8\u7ED3\u6784",categoryEn:"EXTERIOR",keySpec:"IP68 \xB7 18 m",summary:"\u96C6\u6210\u955C\u5934\u62A4\u5708\u3001\u524D\u5C4F\u89C6\u7A97\u4E0E\u78C1\u5438\u5B9A\u4F4D\u7684\u4E00\u4F53\u5316\u9632\u62A4\u524D\u58F3\u3002",description:"\u9AD8\u5F3A\u5EA6\u590D\u5408\u6750\u8D28\u524D\u58F3\u627F\u62C5\u6B63\u9762\u6297\u51B2\u51FB\u4E0E\u9632\u6C34\u5BC6\u5C01\u3002\u955C\u5934\u62A4\u5708\u91C7\u7528\u91D1\u5C5E\u8D28\u611F\u5904\u7406\uFF0C\u53EF\u5FEB\u901F\u62C6\u6362\u73BB\u7483\u4FDD\u62A4\u76D6\uFF1B\u56DB\u5468\u7684\u5BC6\u5C01\u7B4B\u6761\u4E0E\u673A\u8EAB\u4E2D\u6846\u914D\u5408\uFF0C\u5F62\u6210\u88F8\u673A 18 m \u9632\u6C34\u7684\u7B2C\u4E00\u9053\u5C4F\u969C\u3002",specs:[{label:"\u6750\u8D28",value:"\u9AD8\u5F3A\u5EA6\u590D\u5408\u6750\u8D28 + \u94DD\u5408\u91D1\u62A4\u5708"},{label:"\u9632\u62A4\u7B49\u7EA7",value:"IP68 / \u88F8\u673A 18 m"},{label:"\u53EF\u7EF4\u62A4\u7ED3\u6784",value:"\u53EF\u6362\u955C\u5934\u73BB\u7483\u62A4\u76D6"},{label:"\u6B63\u9762\u5F00\u5B54",value:'\u955C\u5934\u5B54 + 1.4" \u524D\u5C4F\u89C6\u7A97'}],tags:["IP68","GLASS COVER","MAGNETIC"],accent:"#5BE7FF",explode:[0,0,1.8]},{id:"lens",no:"02",name:"\u955C\u5934\u6A21\u7EC4",en:"LENS MODULE",category:"\u5149\u5B66\u7CFB\u7EDF",categoryEn:"OPTICS",keySpec:"f/2.8 \xB7 155\xB0",summary:"\u8D85\u5E7F\u89D2\u975E\u7403\u9762\u955C\u7EC4\uFF0C\u4E3A 1/1.3 \u82F1\u5BF8\u4F20\u611F\u5668\u63D0\u4F9B 155\xB0 \u89C6\u91CE\u3002",description:"\u955C\u5934\u6A21\u7EC4\u7531\u591A\u5C42\u975E\u7403\u9762\u955C\u7247\u3001\u5149\u5708\u73AF\u4E0E\u91D1\u5C5E\u955C\u7B52\u6784\u6210\uFF0C\u6700\u8FD1\u5BF9\u7126\u8DDD\u79BB 0.4 m\u3002\u591A\u5C42\u589E\u900F\u9540\u819C\u6291\u5236\u7729\u5149\u4E0E\u9B3C\u5F71\uFF0C\u5728\u9006\u5149\u548C\u6C34\u9762\u53CD\u5C04\u573A\u666F\u4E2D\u4FDD\u6301\u901A\u900F\uFF0Cf/2.8 \u5927\u5149\u5708\u914D\u5408\u5927\u50CF\u7D20\u4F20\u611F\u5668\u63D0\u5347\u6697\u5149\u8868\u73B0\u3002",specs:[{label:"\u5149\u5708",value:"f/2.8"},{label:"\u89C6\u573A\u89D2",value:"155\xB0"},{label:"\u6700\u8FD1\u5BF9\u7126",value:"0.4 m \u81F3\u65E0\u7A77\u8FDC"},{label:"\u955C\u7247\u7ED3\u6784",value:"\u591A\u5C42\u975E\u7403\u9762\u955C\u7247\u7EC4"},{label:"\u9540\u819C",value:"\u591A\u5C42\u589E\u900F\u9540\u819C"}],tags:["ULTRA WIDE","ASPHERICAL","F/2.8"],accent:"#66B5FF",explode:[-.7,1.9,1.15]},{id:"front-screen",no:"03",name:"\u524D\u5C4F\u7EC4\u4EF6",en:"FRONT DISPLAY",category:"\u663E\u793A\u7CFB\u7EDF",categoryEn:"DISPLAY",keySpec:'1.4" \xB7 320 \xD7 320',summary:"\u65B9\u5F62\u524D\u7F6E\u53D6\u666F\u5C4F\uFF0C\u65B9\u4FBF\u81EA\u62CD\u4E0E vlog \u65F6\u5B9E\u65F6\u786E\u8BA4\u6784\u56FE\u3002",description:"1.4 \u82F1\u5BF8\u65B9\u5F62\u524D\u7F6E\u89E6\u63A7\u5C4F\u62E5\u6709 323 ppi \u4E0E 750 nit \u5CF0\u503C\u4EAE\u5EA6\u3002\u5B83\u4E0E\u540E\u5C4F\u540C\u6B65\u663E\u793A\u53D6\u666F\u753B\u9762\u548C\u5F55\u5236\u72B6\u6001\uFF0C\u8BA9\u5355\u4EBA\u521B\u4F5C\u65F6\u65E0\u9700\u7FFB\u8F6C\u673A\u8EAB\u4E5F\u80FD\u7CBE\u51C6\u6784\u56FE\u3002",specs:[{label:"\u5C4F\u5E55\u5C3A\u5BF8",value:"1.4 \u82F1\u5BF8"},{label:"\u5206\u8FA8\u7387",value:"320 \xD7 320"},{label:"\u50CF\u7D20\u5BC6\u5EA6",value:"323 ppi"},{label:"\u5CF0\u503C\u4EAE\u5EA6",value:"750 \xB1 50 cd/m\xB2"},{label:"\u89E6\u63A7",value:"\u652F\u6301\u89E6\u63A7"}],tags:["TOUCH","750 NITS","SELFIE"],accent:"#B394FF",explode:[2.3,1.7,.95]},{id:"sensor",no:"04",name:"CMOS \u4F20\u611F\u5668",en:"IMAGE SENSOR",category:"\u5F71\u50CF\u6838\u5FC3",categoryEn:"IMAGING",keySpec:'1/1.3" \xB7 10 MP',summary:"1/1.3 \u82F1\u5BF8\u5927\u5E95\u4F20\u611F\u5668\uFF0C\u662F\u6697\u5149\u753B\u8D28\u4E0E 10-bit \u8272\u5F69\u7684\u57FA\u7840\u3002",description:"\u4F20\u611F\u5668\u9762\u79EF\u8F83\u4E0A\u4E00\u4EE3\u8FDB\u4E00\u6B65\u63D0\u5347\uFF0C\u914D\u5408 2.4 \u03BCm \u5927\u50CF\u7D20\u4E0E 10-bit D-Log M \u8272\u5F69\u6A21\u5F0F\uFF0C\u5E26\u6765\u66F4\u7EAF\u51C0\u7684\u6697\u90E8\u3001\u66F4\u9AD8\u7684\u52A8\u6001\u8303\u56F4\u4E0E\u66F4\u81EA\u7136\u7684\u540E\u671F\u8C03\u8272\u7A7A\u95F4\u3002\u4F20\u611F\u5668\u7EC4\u4EF6\u901A\u8FC7\u67D4\u6027\u6392\u7EBF\u4E0E\u4E3B\u677F\u8FDE\u63A5\u3002",specs:[{label:"\u4F20\u611F\u5668",value:"1/1.3 \u82F1\u5BF8 CMOS"},{label:"\u6709\u6548\u50CF\u7D20",value:"\u7EA6 10 MP"},{label:"\u50CF\u7D20\u5C3A\u5BF8",value:"2.4 \u03BCm"},{label:"\u8272\u5F69\u6DF1\u5EA6",value:"10-bit D-Log M"},{label:"\u7167\u7247\u5206\u8FA8\u7387",value:"3648 \xD7 2736"}],tags:['1/1.3"',"10-BIT","D-LOG M"],accent:"#8AE4FF",explode:[-2.9,2.5,.3]},{id:"mainboard",no:"05",name:"\u4E3B\u63A7\u677F",en:"MAINBOARD",category:"\u8BA1\u7B97\u6838\u5FC3",categoryEn:"COMPUTE",keySpec:"4K/120 \xB7 10-bit",summary:"\u8D1F\u8D23\u5F71\u50CF\u5904\u7406\u3001\u7F16\u7801\u3001\u9632\u6296\u7B97\u6CD5\u4E0E\u65E0\u7EBF\u8FDE\u63A5\u7684\u8FD0\u7B97\u4E2D\u67A2\u3002",description:"\u4E3B\u63A7\u677F\u96C6\u6210 DJI \u5B9A\u5236\u5F71\u50CF\u5904\u7406\u5E73\u53F0\u3001\u7535\u6E90\u7BA1\u7406\u4E0E\u65E0\u7EBF\u6A21\u5757\u3002\u5B83\u5B9E\u65F6\u5904\u7406 155\xB0 \u8D85\u5E7F\u89D2\u753B\u9762\u3001RockSteady 3.0+ \u9632\u6296\u548C 10-bit \u8272\u5F69\u7F16\u7801\uFF0C\u5E76\u901A\u8FC7\u67D4\u6027\u6392\u7EBF\u8FDE\u63A5\u4F20\u611F\u5668\u3001\u53CC\u5C4F\u4E0E\u6309\u952E\u3002",specs:[{label:"\u5904\u7406\u5E73\u53F0",value:"DJI \u5B9A\u5236\u5F71\u50CF SoC"},{label:"\u89C6\u9891\u7F16\u7801",value:"H.264 / HEVC \xB7 4K/120 fps"},{label:"\u9632\u6296\u7B97\u6CD5",value:"RockSteady 3.0+ / HorizonSteady"},{label:"\u65E0\u7EBF\u8FDE\u63A5",value:"Wi-Fi 802.11 a/b/g/n/ac"},{label:"\u5B58\u50A8",value:"microSD \xB7 \u6700\u5927 512 GB"}],tags:["SOC","HEVC","ROCKSTEADY"],accent:"#FFB25E",explode:[0,2.9,-.9]},{id:"rear-screen",no:"06",name:"\u540E\u5C4F\u7EC4\u4EF6",en:"REAR DISPLAY",category:"\u663E\u793A\u7CFB\u7EDF",categoryEn:"DISPLAY",keySpec:'2.25" \xB7 360 \xD7 640',summary:"2.25 \u82F1\u5BF8\u9AD8\u4EAE\u89E6\u63A7\u4E3B\u5C4F\uFF0C\u8986\u76D6\u53C2\u6570\u3001\u56DE\u653E\u4E0E\u56FE\u4F20\u64CD\u63A7\u3002",description:"\u540E\u7F6E 2.25 \u82F1\u5BF8\u89E6\u63A7\u5C4F\u5177\u6709 326 ppi \u4E0E 750 nit \u4EAE\u5EA6\uFF0C\u5F3A\u5149\u4E0B\u4F9D\u7136\u6E05\u6670\u3002\u5C4F\u5E55\u603B\u6210\u5305\u542B\u4FDD\u62A4\u73BB\u7483\u3001\u89E6\u63A7\u5C42\u3001\u663E\u793A\u9762\u677F\u4E0E\u91D1\u5C5E\u652F\u6491\u6846\uFF0C\u901A\u8FC7\u6392\u7EBF\u4E0E\u4E3B\u63A7\u677F\u8FDE\u63A5\u3002",specs:[{label:"\u5C4F\u5E55\u5C3A\u5BF8",value:"2.25 \u82F1\u5BF8"},{label:"\u5206\u8FA8\u7387",value:"360 \xD7 640"},{label:"\u50CF\u7D20\u5BC6\u5EA6",value:"326 ppi"},{label:"\u5CF0\u503C\u4EAE\u5EA6",value:"750 \xB1 50 cd/m\xB2"},{label:"\u4EA4\u4E92",value:"\u5168\u529F\u80FD\u89E6\u63A7 / \u56DE\u653E"}],tags:["TOUCH","360 \xD7 640","750 NITS"],accent:"#C59CFF",explode:[.5,.3,-2.8]},{id:"battery",no:"07",name:"\u7535\u6C60\u6A21\u7EC4",en:"BATTERY",category:"\u80FD\u6E90\u7CFB\u7EDF",categoryEn:"POWER",keySpec:"1770 mAh \xB7 6.8 Wh",summary:"1770 mAh \u8010\u4F4E\u6E29\u7535\u6C60\uFF0C\u652F\u6301 30 W \u5FEB\u5145\u4E0E\u7EA6 160 \u5206\u949F\u7EED\u822A\u3002",description:"1S LiPo \u7535\u6C60\u6A21\u7EC4\u5BB9\u91CF 1770 mAh\uFF0C\u80FD\u91CF 6.8 Wh\u3002\u914D\u5408 30 W \u5FEB\u5145\u53EF\u5728\u7EA6 18 \u5206\u949F\u5145\u81F3 80%\uFF0C\u5E76\u652F\u6301 -20\xB0C \u81F3 45\xB0C \u7684\u5DE5\u4F5C\u6E29\u5EA6\u8303\u56F4\uFF0C\u4E3A\u957F\u65F6\u95F4\u6237\u5916\u62CD\u6444\u63D0\u4F9B\u7A33\u5B9A\u4F9B\u7535\u3002",specs:[{label:"\u5BB9\u91CF",value:"1770 mAh"},{label:"\u80FD\u91CF",value:"6.8 Wh"},{label:"\u5316\u5B66\u4F53\u7CFB",value:"LiPo 1S / 3.85 V"},{label:"\u5FEB\u5145\u529F\u7387",value:"30 W \xB7 18 min \u5145\u81F3 80%"},{label:"\u7EED\u822A",value:"\u7EA6 160 \u5206\u949F"},{label:"\u5DE5\u4F5C\u6E29\u5EA6",value:"-20\xB0C ~ 45\xB0C"}],tags:["30 W","160 MIN","COLD RESISTANT"],accent:"#79FFB2",explode:[2.8,-1.5,.5]},{id:"record-button",no:"08",name:"\u9876\u90E8\u5F55\u5236\u952E",en:"RECORD BUTTON",category:"\u63A7\u5236\u7CFB\u7EDF",categoryEn:"CONTROL",keySpec:"\u5F55\u5236 / \u5FEB\u95E8",summary:"\u5E26\u7EA2\u8272\u5B9A\u4F4D\u73AF\u7684\u6BB5\u843D\u5F0F\u6309\u952E\uFF0C\u5355\u624B\u5373\u53EF\u76F2\u64CD\u4F5C\u5F55\u5236\u3002",description:"\u9876\u90E8\u5F55\u5236\u952E\u91C7\u7528\u7EA2\u8272\u88C5\u9970\u73AF\u4E0E\u6BB5\u843D\u5F0F\u6309\u538B\u7ED3\u6784\uFF0C\u6309\u538B\u884C\u7A0B\u6E05\u6670\uFF0C\u6234\u624B\u5957\u4E5F\u80FD\u51C6\u786E\u89E6\u53D1\u3002\u6309\u952E\u5EA7\u4E0E\u673A\u8EAB\u4E4B\u95F4\u8BBE\u7F6E\u9632\u6C34\u5BC6\u5C01\u5708\uFF0C\u5E76\u901A\u8FC7\u6392\u7EBF\u8FDE\u63A5\u4E3B\u63A7\u677F\u3002",specs:[{label:"\u529F\u80FD",value:"\u5F55\u5236 / \u5FEB\u95E8 / \u5FEB\u6377\u64CD\u4F5C"},{label:"\u7ED3\u6784",value:"\u6BB5\u843D\u5F0F\u6309\u538B + \u5BC6\u5C01\u5708"},{label:"\u6750\u8D28",value:"\u7845\u80F6\u6309\u952E + \u91D1\u5C5E\u88C5\u9970\u73AF"},{label:"\u9632\u62A4",value:"IP68"}],tags:["TACTILE","IP68","RED RING"],accent:"#FF6B5E",explode:[.2,2,.2]},{id:"side-cover",no:"09",name:"\u4FA7\u76D6\u4E0E\u63A5\u53E3",en:"SIDE I/O COVER",category:"\u63A5\u53E3\u4E0E\u9632\u62A4",categoryEn:"I/O",keySpec:"USB-C \xB7 30 W",summary:"\u96C6\u6210 USB-C\u3001microSD \u4E0E\u7535\u6C60\u4ED3\u95E8\u7684\u4FA7\u9762\u5BC6\u5C01\u603B\u6210\u3002",description:"\u4FA7\u76D6\u603B\u6210\u5C06 USB-C \u5145\u7535/\u6570\u636E\u63A5\u53E3\u3001microSD \u5361\u69FD\u4E0E\u7535\u6C60\u4ED3\u95E8\u6574\u5408\u5728\u540C\u4E00\u5BC6\u5C01\u7ED3\u6784\u4E2D\u3002\u6380\u5F00\u9501\u6263\u5373\u53EF\u5145\u7535\u6216\u5BFC\u51FA\u7D20\u6750\uFF0C\u5173\u95ED\u540E\u7531\u9501\u6263\u4E0E\u5BC6\u5C01\u5708\u5171\u540C\u4FDD\u8BC1\u9632\u6C34\u6027\u80FD\u3002",specs:[{label:"\u63A5\u53E3",value:"USB-C"},{label:"\u5145\u7535",value:"30 W \u5FEB\u5145"},{label:"\u5B58\u50A8\u6269\u5C55",value:"microSD \xB7 \u6700\u5927 512 GB"},{label:"\u5BC6\u5C01",value:"\u9501\u6263 + \u9632\u6C34\u80F6\u5708"},{label:"\u9632\u62A4",value:"IP68 / 18 m"}],tags:["USB-C","MICROSD","30 W"],accent:"#74D4FF",explode:[2.8,-.2,-.1]},{id:"mount",no:"10",name:"\u78C1\u5438\u5FEB\u62C6\u5E95\u5EA7",en:"MAGNETIC MOUNT",category:"\u5FEB\u62C6\u7ED3\u6784",categoryEn:"MOUNT",keySpec:"\u78C1\u5438\u5FEB\u62C6",summary:"\u78C1\u5438 + \u5361\u6263\u53CC\u91CD\u9501\u5B9A\uFF0C\u652F\u6301\u6A2A\u62CD\u4E0E\u7AD6\u62CD\u5FEB\u901F\u5207\u6362\u3002",description:"\u5E95\u90E8\u78C1\u5438\u5FEB\u62C6\u5E95\u5EA7\u7531\u94DD\u5408\u91D1\u5E95\u677F\u3001\u9495\u78C1\u94C1\u4E0E\u6298\u53E0\u5361\u722A\u7EC4\u6210\u3002\u9760\u8FD1\u673A\u8EAB\u5373\u53EF\u81EA\u52A8\u5438\u9644\uFF0C\u518D\u901A\u8FC7\u5361\u6263\u9501\u7D27\uFF1B\u65E0\u9700\u5DE5\u5177\u5C31\u80FD\u5728\u6A2A\u62CD\u4E0E\u7AD6\u62CD\u4E4B\u95F4\u5207\u6362\uFF0C\u5E76\u517C\u5BB9 DJI \u78C1\u5438\u5FEB\u62C6\u751F\u6001\u914D\u4EF6\u3002",specs:[{label:"\u8FDE\u63A5\u65B9\u5F0F",value:"\u78C1\u5438 + \u5361\u6263\u9501\u6B62"},{label:"\u6750\u8D28",value:"\u94DD\u5408\u91D1 + \u9495\u78C1\u94C1"},{label:"\u62CD\u6444\u65B9\u5411",value:"\u6A2A\u62CD / \u7AD6\u62CD\u5FEB\u901F\u5207\u6362"},{label:"\u517C\u5BB9\u6027",value:"DJI \u78C1\u5438\u5FEB\u62C6\u751F\u6001"}],tags:["MAGNETIC","QUICK RELEASE","ALUMINUM"],accent:"#DDE9F2",explode:[0,-2.15,.2]}],Lh=new Map(jn.map(n=>[n.id,n]));var Dh=["X","Y","Z"],as=(n,e,t)=>Math.min(t,Math.max(e,n)),Qn=n=>String(Math.max(0,Math.trunc(Number(n)||0))).padStart(2,"0"),Cx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qe=n=>String(n??"").replace(/[&<>"']/g,e=>Cx[e]),kl=new Map;function Vn(n,e){let t=`${n}|${e}`;if(kl.has(t))return kl.get(t);let i=String(n||"").trim().replace(/^#/,"");i.length===3&&(i=i.split("").map(r=>r+r).join(""));let s=`rgba(91, 231, 255, ${e})`;if(/^[0-9a-f]{6}$/i.test(i)){let r=parseInt(i,16);s=`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${e})`}return kl.size<128&&kl.set(t,s),s}var Px=n=>`${Number(n)>=0?"+":""}${(Number(n)||0).toFixed(2)}`,Tf=n=>{let e=Number(n);return Number.isFinite(e)?e.toFixed(2):"00.00"};function Ix(n){return n==null?"X 00.00 / Y 00.00 / Z 00.00":typeof n=="string"?n:Array.isArray(n)?n.slice(0,3).map((e,t)=>`${Dh[t]||"?"} ${Tf(e)}`).join(" / "):typeof n=="object"?["x","y","z"].map((e,t)=>`${Dh[t]} ${Tf(n[e])}`).join(" / "):String(n)}function Lx(n){return n==null?"STANDBY":typeof n=="string"?n||"STANDBY":typeof n=="object"?n.en||n.name||n.id||"STANDBY":String(n)}function Dx(n,e){let t=Math.max(1,e);return typeof n=="boolean"?`${Qn(n?t:0)} / ${Qn(t)}`:Array.isArray(n)?`${Qn(n.length)} / ${Qn(t)}`:`${Qn(n)} / ${Qn(t)}`}var Vl=class{constructor(e={}){let t=e||{};this.opts=t,this.camera=t.camera||null,this.parts=Array.isArray(t.parts)&&t.parts.length?t.parts:jn,this._partMap=new Map(this.parts.map(i=>[i.id,i])),this.el={},this._partItems=new Map,this._labelEls=new Map,this._detailRefs=null,this._mounted=!1,this._detailRendered=!1,this._selectedId=null,this._selectedExploded=!1,this._hoveredId=null,this._hoverSource=null,this._hoverChipId=null,this._hoverChipW=0,this._hoverChipH=0,this._allExploded=!1,this._autoRotate=!1,this._labelsVisible=!0,this._helpOpen=!1,this._loaderHidden=!1,this._lastFocus=null,this._zones={left:0,right:0,top:0,bottom:0,vw:0,vh:0,valid:!1},this._labelLayerHidden=!1,this._toastTimer=0,this._loaderTimer=0,this._resizeRaf=0,this._zoneTimer=0,this._handleResize=()=>this._onResize(),this._handleKeyDown=i=>this._onKeyDown(i)}mount(){if(this._mounted)return this;let e=t=>document.getElementById(t);return this.el={partsPanel:e("partsPanel"),partsList:e("partsList"),partCount:e("partCount"),detailPanel:e("detailPanel"),detailBody:e("detailBody"),btnCloseDetail:e("btnCloseDetail"),detailFootLeft:e("detailFootLeft"),detailFootRight:e("detailFootRight"),labelLayer:e("labelLayer"),hoverChip:e("hoverChip"),modeValue:e("modeValue"),explodeValue:e("explodeValue"),fpsValue:e("fpsValue"),targetReadout:e("targetReadout"),coordReadout:e("coordReadout"),selectionReadout:e("selectionReadout"),guideCard:e("guideCard"),btnDismissGuide:e("btnDismissGuide"),dock:e("dock"),btnExplodeAll:e("btnExplodeAll"),btnExplodeLabel:e("btnExplodeLabel"),btnResetView:e("btnResetView"),btnAutoRotate:e("btnAutoRotate"),btnLabels:e("btnLabels"),btnHelp:e("btnHelp"),toast:e("toast"),loader:e("loader"),loaderBar:e("loaderBar"),loaderPercent:e("loaderPercent"),loaderText:e("loaderText"),helpModal:e("helpModal"),btnCloseHelp:e("btnCloseHelp"),btnStartExploring:e("btnStartExploring"),topbar:document.querySelector(".topbar"),sceneCanvas:e("scene-canvas"),detailKicker:null,detailTitle:null},this.el.detailPanel&&(this.el.detailKicker=this.el.detailPanel.querySelector(".panel__kicker"),this.el.detailTitle=this.el.detailPanel.querySelector(".panel__title")),this._mounted=!0,this._buildPartsList(),this._buildLabels(),this._bindEvents(),this.setSelected(null),this.setAllExploded(!1),this.setAutoRotate(!1),this.setLabelsVisible(!0),this._measureZones(),this._measureAllLabels(),document.fonts&&document.fonts.ready&&typeof document.fonts.ready.then=="function"&&document.fonts.ready.then(()=>{this._mounted&&(this._measureZones(),this._measureAllLabels())}).catch(()=>{}),this}setSelected(e){if(!this._mounted)return this;let t=e==null?null:this._partMap.get(e)||null,i=t?t.id:null,s=this._selectedId!==i||!this._detailRendered;this._selectedId=i;let r=this.el.detailPanel;r&&(r.classList.toggle("is-selected",!!t),r.classList.toggle("is-overview",!t),r.classList.toggle("is-open",!!t)),this._partItems&&this._partItems.forEach((a,l)=>{a.classList.toggle("is-active",l===i),a.setAttribute("aria-current",l===i?"true":"false")});let o=t?this._labelEls.get(t.id):null;return t?this._selectedExploded=o?!!o.appliedExploded:this._allExploded:this._selectedExploded=!1,s&&(t?(this._applyAccent(r,t.accent),this._renderDetail(t)):(this._clearAccent(r),this._renderOverview()),this.el.detailBody&&(this.el.detailBody.scrollTop=0),this._detailRendered=!0),this._syncDetailFoot(t),this._syncDetailStatus(),this.el.btnCloseDetail&&(this.el.btnCloseDetail.classList.toggle("is-idle",!t),this.el.btnCloseDetail.setAttribute("aria-disabled",t?"false":"true")),this._labelEls.forEach((a,l)=>{let c=l===i;a.appliedSelected!==c&&(a.root.classList.toggle("is-selected",c),a.appliedSelected=c)}),this.el.detailKicker&&(this.el.detailKicker.textContent=t?"COMPONENT DETAIL":"CAMERA OVERVIEW"),this.el.detailTitle&&(this.el.detailTitle.textContent=t?"\u90E8\u4EF6\u8BE6\u60C5":"\u6574\u673A\u6982\u89C8"),this._updateLabelLayerState(),s&&this._scheduleZoneRefresh(),this}setHovered(e,t,i){return this._mounted?(this._applyHover(e,t,i,"scene"),this):this}setAllExploded(e){if(!this._mounted)return this;let t=!!e;return this._allExploded=t,this.el.btnExplodeLabel&&(this.el.btnExplodeLabel.textContent=t?"\u5168\u90E8\u5F52\u4F4D":"\u5168\u90E8\u62C6\u89E3"),this.el.btnExplodeAll&&(this.el.btnExplodeAll.classList.toggle("dock-button--active",t),this.el.btnExplodeAll.setAttribute("aria-pressed",t?"true":"false")),this._syncDetailStatus(),this}setAutoRotate(e){if(!this._mounted)return this;let t=!!e;return this._autoRotate=t,this.el.btnAutoRotate&&(this.el.btnAutoRotate.classList.toggle("dock-button--active",t),this.el.btnAutoRotate.classList.toggle("is-rotating",t),this.el.btnAutoRotate.setAttribute("aria-pressed",t?"true":"false")),this}setLabelsVisible(e){if(!this._mounted)return this;let t=!!e;return this._labelsVisible=t,this.el.btnLabels&&(this.el.btnLabels.classList.toggle("dock-button--active",t),this.el.btnLabels.setAttribute("aria-pressed",t?"true":"false")),this._updateLabelLayerState(),t&&this._measureZones(),this}updateLabels(e){if(!this._mounted||!this.el.labelLayer)return this;let t=Array.isArray(e)?e:[];if(this._selectedId)for(let m=0;m<t.length;m+=1){let f=t[m];if(f&&f.id===this._selectedId&&typeof f.exploded=="boolean"){this._selectedExploded!==f.exploded&&(this._selectedExploded=f.exploded,this._syncDetailStatus());break}}if(!this._labelsVisible||this._labelLayerHidden)return this;let i=this._zones;(!i.valid||i.vw!==window.innerWidth)&&(this._measureZones(),i=this._zones);let s=i.vw,r=i.vh,o=s<640,a=o?26:s<900?34:44,l=o?5:7,c=(i.left+i.right)/2,h=new Set,u=[];for(let m=0;m<t.length;m+=1){let f=t[m];if(!f||!f.id)continue;let E=this._labelEls.get(f.id);if(!E)continue;h.add(f.id),this._applyLabelState(E,f);let S=Number.isFinite(f.x)&&Number.isFinite(f.y);if(!(f.visible!==!1&&S)){E.visible&&(E.visible=!1,E.root.classList.add("is-hidden"));continue}E.visible||(E.visible=!0,E.root.classList.remove("is-hidden")),(E.dirty||!E.w||!E.h)&&this._measureLabel(E),u.push({rec:E,x:f.x,y:f.y})}this._labelEls.forEach((m,f)=>{h.has(f)||m.visible&&(m.visible=!1,m.root.classList.add("is-hidden"))}),u.sort((m,f)=>m.y-f.y);let p=[],d=Math.max(i.left+60,i.right-20),g=Math.max(i.top,12),_=Math.max(g+80,i.bottom);for(let m=0;m<u.length;m+=1){let f=u[m],E=f.rec,S=E.w||160,x=E.h||42,C=f.x,A=f.y,I=C+a+S<=i.right-4,D=C-a-S>=i.left+4,M=C>=c,b;I&&D?b=M?"right":"left":I?b="right":D?b="left":b=i.right-C>=C-i.left?"right":"left";let P=b==="right"?C+a:C-a-S,F=i.left+4,V=Math.max(F,i.right-S-4);P=as(P,F,V);let B=Math.max(8,i.top),X=Math.max(B+40,_-x),H=as(A-x/2,B,X);for(let je=0;je<4;je+=1){let _e=null;for(let Y=0;Y<p.length;Y+=1){let $=p[Y];if(P<$.x+$.w+l&&P+S+l>$.x&&H<$.y+$.h+l&&H+x+l>$.y){_e=$;break}}if(!_e)break;H=as(_e.y+_e.h+l+2,B,X)}p.push({x:P,y:H,w:S,h:x});let te=b==="right"?P-1:P+S+1,G=H+x/2,he=te-C,me=G-A,Me=Math.sqrt(he*he+me*me),ze=Math.atan2(me,he),Ze=as(Me/100,0,6);this._setTransform(E,"anchorT",E.anchor,`translate3d(${C.toFixed(1)}px, ${A.toFixed(1)}px, 0)`),this._setTransform(E,"cardT",E.card,`translate3d(${P.toFixed(1)}px, ${H.toFixed(1)}px, 0)`),this._setTransform(E,"leaderT",E.leader,`translate3d(${C.toFixed(1)}px, ${A.toFixed(1)}px, 0) rotate(${ze.toFixed(4)}rad) scaleX(${Ze.toFixed(4)})`),E.side!==b&&(E.side=b,E.root.classList.toggle("is-left",b==="left"))}return this._labelEls.forEach(m=>{m.visible||(m.anchorT="",m.cardT="",m.leaderT="")}),this}updateTelemetry(e){if(!this._mounted||!e)return this;let t=(i,s)=>{i&&i.textContent!==s&&(i.textContent=s)};if(e.mode!==void 0&&e.mode!==null&&t(this.el.modeValue,String(e.mode)),e.exploded!==void 0&&e.exploded!==null){let i=Number.isFinite(Number(e.total))&&Number(e.total)>0?Math.trunc(Number(e.total)):this.parts.length,s=Dx(e.exploded,i);if(t(this.el.explodeValue,s),this.el.explodeValue){let r=typeof e.exploded=="boolean"?e.exploded?i:0:Array.isArray(e.exploded)?e.exploded.length:Number(e.exploded)||0;this.el.explodeValue.classList.toggle("is-live",r>0)}}if(e.fps!==void 0&&e.fps!==null){let i=Number(e.fps);t(this.el.fpsValue,Number.isFinite(i)?String(Math.round(i)):"--")}return e.target!==void 0&&t(this.el.targetReadout,Lx(e.target).toUpperCase()),e.coord!==void 0&&t(this.el.coordReadout,Ix(e.coord)),this}showToast(e,t=2200){if(!this._mounted||!this.el.toast)return this;let i=String(e??"").trim();if(!i)return this.el.toast.classList.remove("is-visible"),this;this.el.toast.textContent=i,this.el.toast.classList.remove("is-visible"),this.el.toast.offsetWidth,this.el.toast.classList.add("is-visible"),window.clearTimeout(this._toastTimer);let s=Number(t)>0?Number(t):2200;return this._toastTimer=window.setTimeout(()=>{this.el.toast.classList.remove("is-visible")},s),this}setLoaderProgress(e,t){if(!this._mounted)return this;let i=as(Number(e)||0,0,1);return this.el.loaderBar&&(this.el.loaderBar.style.width=`${(i*100).toFixed(1)}%`),this.el.loaderPercent&&(this.el.loaderPercent.textContent=`${Qn(Math.round(i*100))}%`),this.el.loaderText&&typeof t=="string"&&t.trim()&&(this.el.loaderText.textContent=t.trim()),this}hideLoader(){if(!this._mounted||!this.el.loader||this._loaderHidden)return this;this._loaderHidden=!0,this.setLoaderProgress(1),document.body.classList.add("is-loaded");let e=this.el.loader;return e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),window.clearTimeout(this._loaderTimer),this._loaderTimer=window.setTimeout(()=>{e.classList.add("is-removed")},750),this}_buildPartsList(){let e=this.el.partsList;if(!e)return;let t=document.createDocumentFragment();this._partItems.clear(),this.parts.forEach(i=>{let s=document.createElement("div");s.className="part-item",s.setAttribute("role","listitem"),s.setAttribute("tabindex","0"),s.setAttribute("aria-current","false"),s.dataset.partId=i.id,this._applyAccent(s,i.accent),s.innerHTML=['<span class="part-item__bar" aria-hidden="true"></span>',`<span class="part-item__no">${Qe(i.no)}</span>`,'<span class="part-item__body">',`<span class="part-item__name">${Qe(i.name)}</span>`,`<span class="part-item__en">${Qe(i.en)}</span>`,"</span>",`<span class="part-item__spec">${Qe(i.keySpec)}</span>`].join(""),s.addEventListener("click",()=>this._selectPart(i.id)),s.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" "||r.key==="Spacebar")&&(r.preventDefault(),this._selectPart(i.id))}),s.addEventListener("mouseenter",r=>{this._applyHover(i.id,r.clientX,r.clientY,"list")}),s.addEventListener("mousemove",r=>{this._hoverSource==="list"&&this._hoveredId===i.id&&this._positionHoverChip(r.clientX,r.clientY)}),s.addEventListener("mouseleave",()=>{this._hoverSource==="list"&&this._applyHover(null,0,0,null)}),t.appendChild(s),this._partItems.set(i.id,s)}),e.appendChild(t),this.el.partCount&&(this.el.partCount.textContent=Qn(this.parts.length))}_buildLabels(){let e=this.el.labelLayer;if(!e)return;let t=document.createDocumentFragment();this._labelEls.clear(),this.parts.forEach(i=>{let s=document.createElement("div");s.className="label is-hidden",s.dataset.partId=i.id,this._applyAccent(s,i.accent);let r=(Array.isArray(i.specs)?i.specs:[]).slice(0,2).map(c=>`<div class="label__kv"><span>${Qe(c.label)}</span><b>${Qe(c.value)}</b></div>`).join(""),o=document.createElement("div");o.className="label__card",o.innerHTML=['<div class="label__head">',`<span class="label__no">${Qe(i.no)}</span>`,`<span class="label__name">${Qe(i.name)}</span>`,"</div>",`<div class="label__en">${Qe(i.en)}</div>`,`<div class="label__spec">${Qe(i.keySpec)}</div>`,`<div class="label__extra">${r}</div>`].join("");let a=document.createElement("span");a.className="label__anchor",a.setAttribute("aria-hidden","true"),a.innerHTML="<i></i>";let l=document.createElement("span");l.className="label__leader",l.setAttribute("aria-hidden","true"),s.appendChild(l),s.appendChild(o),s.appendChild(a),t.appendChild(s),this._labelEls.set(i.id,{id:i.id,part:i,root:s,card:o,leader:l,anchor:a,w:0,h:0,dirty:!0,visible:!1,side:"",appliedExploded:!1,appliedSelected:!1,anchorT:"",cardT:"",leaderT:""})}),e.appendChild(t)}_renderOverview(){if(!this.el.detailBody)return;let e=this.camera||{},t=Array.isArray(e.quickStats)?e.quickStats:[],i=Array.isArray(e.overviewSpecs)?e.overviewSpecs:[],s=String(e.name||"Osmo Action 4").replace(/\s*\d+\s*$/,"").toUpperCase(),r=e.edition||"INTERACTIVE TEARDOWN / 01",o=t.map(l=>`<div class="ov-stat"><span class="ov-stat__label">${Qe(l.label)}</span><strong class="ov-stat__value">${Qe(l.value)}</strong></div>`).join(""),a=i.map(l=>`<div class="ov-spec"><span class="ov-spec__label">${Qe(l.label)}</span><strong class="ov-spec__value">${Qe(l.value)}</strong></div>`).join("");this.el.detailBody.innerHTML=`
      <div class="ov">
        <div class="ov-hero">
          <span class="ov-hero__kicker">CAMERA OVERVIEW / \u6574\u673A\u6982\u89C8</span>
          <div class="ov-hero__title">${Qe(s)} <em>4</em></div>
          <p class="ov-hero__tagline">${Qe(e.tagline||"")}</p>
          <div class="ov-hero__chips">
            <span class="ov-chip">${Qe(e.brand||"DJI")} \xB7 ${Qe(e.model||"OA4-2023")}</span>
            <span class="ov-chip ov-chip--ghost">${Qe(r)}</span>
          </div>
        </div>

        <div class="ov-quick">${o}</div>

        <section class="ov-section">
          <header class="ov-section__head">
            <span class="ov-section__no">01</span>
            <h4>\u6574\u673A\u6982\u8FF0</h4>
            <span class="ov-section__rule"></span>
          </header>
          <p class="ov-desc">${Qe(e.overviewDesc||"")}</p>
        </section>

        <section class="ov-section">
          <header class="ov-section__head">
            <span class="ov-section__no">02</span>
            <h4>\u6838\u5FC3\u89C4\u683C</h4>
            <span class="ov-section__rule"></span>
          </header>
          <div class="ov-specs">${a}</div>
        </section>

        <section class="ov-section">
          <header class="ov-section__head">
            <span class="ov-section__no">03</span>
            <h4>\u64CD\u4F5C\u63D0\u793A</h4>
            <span class="ov-section__rule"></span>
          </header>
          <ul class="ov-hints">
            <li><kbd>\u62D6\u62FD</kbd><span>\u81EA\u7531\u65CB\u8F6C\u89C6\u89D2</span></li>
            <li><kbd>\u6EDA\u8F6E</kbd><span>\u7F29\u653E\u67E5\u770B\u7EC6\u8282</span></li>
            <li><kbd>\u70B9\u51FB</kbd><span>\u62C6\u89E3\u90E8\u4EF6 / \u67E5\u770B\u53C2\u6570</span></li>
          </ul>
        </section>

        <div class="ov-status">
          <span class="ov-status__dot" aria-hidden="true"></span>
          <strong>TEARDOWN READY</strong>
          <span>${Qn(this.parts.length)} \u4E2A\u53EF\u62C6\u89E3\u90E8\u4EF6</span>
        </div>
      </div>`,this._detailRefs=null}_renderDetail(e){if(!this.el.detailBody)return;let t=(Array.isArray(e.specs)?e.specs:[]).map(a=>`<div class="dt-spec"><span class="dt-spec__label">${Qe(a.label)}</span><strong class="dt-spec__value">${Qe(a.value)}</strong></div>`).join(""),i=(Array.isArray(e.tags)?e.tags:[]).map(a=>`<span class="dt-tag">${Qe(a)}</span>`).join(""),s=Array.isArray(e.explode)?e.explode:[0,0,0],r=Dh.map((a,l)=>`<span class="dt-axis dt-axis--${a.toLowerCase()}"><i>${a}</i><strong>${Px(s[l])}</strong></span>`).join("");this.el.detailBody.innerHTML=`
      <div class="dt">
        <div class="dt-hero">
          <div class="dt-hero__no">${Qe(e.no)}</div>
          <div class="dt-hero__text">
            <span class="dt-hero__cat">${Qe(e.categoryEn)} / ${Qe(e.category)}</span>
            <h3 class="dt-hero__name">${Qe(e.name)}</h3>
            <div class="dt-hero__en">${Qe(e.en)}</div>
            <div class="dt-hero__spec">${Qe(e.keySpec)}</div>
          </div>
        </div>

        <p class="dt-summary">${Qe(e.summary)}</p>

        <div class="dt-explode">
          <div class="dt-explode__head">
            <span>EXPLODE VECTOR / \u62C6\u89E3\u4F4D\u79FB</span>
            <span class="dt-explode__state">\u5F85\u62C6\u89E3</span>
          </div>
          <div class="dt-explode__vec">${r}</div>
        </div>

        <section class="dt-section">
          <header class="dt-section__head">
            <span class="dt-section__no">01</span>
            <h4>\u7ED3\u6784\u8BF4\u660E</h4>
            <span class="dt-section__rule"></span>
          </header>
          <p class="dt-desc">${Qe(e.description)}</p>
        </section>

        <section class="dt-section">
          <header class="dt-section__head">
            <span class="dt-section__no">02</span>
            <h4>\u6280\u672F\u89C4\u683C</h4>
            <span class="dt-section__rule"></span>
          </header>
          <div class="dt-specs">${t}</div>
        </section>

        <section class="dt-section">
          <header class="dt-section__head">
            <span class="dt-section__no">03</span>
            <h4>\u5173\u952E\u6807\u7B7E</h4>
            <span class="dt-section__rule"></span>
          </header>
          <div class="dt-tags">${i}</div>
        </section>

        <div class="dt-status">
          <span class="dt-status__dot" aria-hidden="true"></span>
          <span class="dt-status__text">\u88C5\u914D\u4F4D \xB7 \u70B9\u51FB\u6A21\u578B\u53EF\u62C6\u89E3</span>
        </div>
      </div>`;let o=this.el.detailBody;this._detailRefs={status:o.querySelector(".dt-status"),statusText:o.querySelector(".dt-status__text"),state:o.querySelector(".dt-explode__state")}}_syncDetailFoot(e){this.el.detailFootLeft&&(this.el.detailFootLeft.textContent=e?`FOCUS \xB7 ${e.en}`:"SYSTEM READY"),this.el.detailFootRight&&(this.el.detailFootRight.textContent=e?`COMPONENT ${e.no} / ${Qn(this.parts.length)}`:"OA4 / 2023")}_syncDetailStatus(){let e=this._detailRefs;if(!e)return;let t=!!this._selectedId&&(this._selectedExploded||this._allExploded);if(e.state&&(e.state.textContent!==(t?"\u5DF2\u62C6\u89E3":"\u5F85\u62C6\u89E3")&&(e.state.textContent=t?"\u5DF2\u62C6\u89E3":"\u5F85\u62C6\u89E3"),e.state.classList.toggle("is-on",t)),e.status&&e.status.classList.toggle("is-exploded",t),e.statusText){let i=t?"\u90E8\u4EF6\u5DF2\u5C55\u5F00 \xB7 \u6570\u636E\u94FE\u8DEF\u5DF2\u540C\u6B65":"\u88C5\u914D\u4F4D \xB7 \u70B9\u51FB\u6A21\u578B\u53EF\u62C6\u89E3";e.statusText.textContent!==i&&(e.statusText.textContent=i)}}_selectPart(e){let t=this._partMap.get(e);t&&(typeof this.opts.onSelectPart=="function"&&this.opts.onSelectPart(t.id),this._selectedId!==t.id&&this.setSelected(t.id))}_applyHover(e,t,i,s){let r=e==null?null:this._partMap.get(e)||null;this._hoverSource=r?s||"scene":null,this._hoveredId=r?r.id:null,this._partItems&&this._partItems.forEach((a,l)=>{let c=!!r&&l===r.id;a.classList.contains("is-hover")!==c&&a.classList.toggle("is-hover",c)});let o=this.el.hoverChip;if(o){if(!r){o.classList.remove("is-visible"),this._hoverChipId=null;return}if(s==="list"||this._selectedId===r.id){o.classList.remove("is-visible"),this._hoverChipId=null;return}this._hoverChipId!==r.id&&(this._hoverChipId=r.id,this._applyAccent(o,r.accent),o.innerHTML=[`<span class="hover-chip__no">${Qe(r.no)}</span>`,`<span class="hover-chip__name">${Qe(r.name)}</span>`,`<span class="hover-chip__spec">${Qe(r.keySpec)}</span>`,'<span class="hover-chip__action">\u70B9\u51FB\u62C6\u89E3</span>'].join(""),this._measureHoverChip()),Number.isFinite(t)&&Number.isFinite(i)&&this._positionHoverChip(t,i),o.classList.add("is-visible")}}_measureHoverChip(){let e=this.el.hoverChip;e&&(this._hoverChipW=e.offsetWidth||180,this._hoverChipH=e.offsetHeight||32)}_positionHoverChip(e,t){let i=this.el.hoverChip;if(!i)return;let s=window.innerWidth||1280,r=window.innerHeight||800,o=this._hoverChipW||180,a=this._hoverChipH||32,l=e+18,c=t+18;l+o>s-10&&(l=e-o-18),c+a>r-10&&(c=t-a-18),l=as(l,10,Math.max(10,s-o-10)),c=as(c,10,Math.max(10,r-a-10));let h=`translate3d(${Math.round(l)}px, ${Math.round(c)}px, 0)`;i.dataset.position!==h&&(i.dataset.position=h,i.style.transform=h)}_applyLabelState(e,t){let i=!!t.exploded,s=!!t.selected;e.appliedExploded!==i&&(e.appliedExploded=i,e.root.classList.toggle("is-exploded",i),e.card.classList.toggle("is-exploded",i),e.dirty=!0),e.appliedSelected!==s&&(e.appliedSelected=s,e.root.classList.toggle("is-selected",s))}_measureLabel(e){!e||!e.card||(e.w=e.card.offsetWidth||150,e.h=e.card.offsetHeight||42,e.w<1&&(e.w=150),e.h<1&&(e.h=42),e.dirty=!1)}_measureAllLabels(){this._labelEls.forEach(e=>{e.dirty=!0,this._measureLabel(e)})}_setTransform(e,t,i,s){i&&e[t]!==s&&(e[t]=s,i.style.transform=s)}_measureZones(){let e=window.innerWidth||1280,t=window.innerHeight||800,i=14,s=e-14,r=96,o=t-92,a=this.el.topbar;if(a){let u=a.getBoundingClientRect();u.height>0&&(r=u.bottom+10)}let l=this.el.dock;if(l){let u=l.getBoundingClientRect();u.height>0&&u.top>t*.5&&(o=u.top-14)}let c=this.el.partsPanel;if(c){let u=c.getBoundingClientRect();u.width>0&&u.height>0&&u.right>0&&u.right<e*.5&&(i=u.right+16)}let h=this.el.detailPanel;if(h){let u=h.getBoundingClientRect();u.width>0&&u.height>0&&u.left>e*.5&&u.top<t*.9?s=u.left-16:e<900&&h.classList.contains("is-open")&&u.top>t*.25&&u.top<t&&(o=Math.min(o,u.top-14))}s-i<120&&(i=14,s=e-14),this._zones={left:i,right:s,top:r,bottom:Math.max(r+100,o),vw:e,vh:t,valid:!0}}_updateLabelLayerState(){let e=this.el.labelLayer;if(!e)return;let t=(window.innerWidth||0)<900&&this._selectedId!==null,i=!this._labelsVisible||t;this._labelLayerHidden=i,e.classList.toggle("is-off",i)}_scheduleZoneRefresh(){window.clearTimeout(this._zoneTimer),this._zoneTimer=window.setTimeout(()=>{this._mounted&&this._measureZones()},430)}_invoke(e){let t=this.opts[e];typeof t=="function"&&t()}_bindEvents(){let e=this.el;e.btnCloseDetail?.addEventListener("click",()=>this._closeDetail()),e.btnExplodeAll?.addEventListener("click",()=>this._invoke("onToggleExplodeAll")),e.btnResetView?.addEventListener("click",()=>this._invoke("onResetView")),e.btnAutoRotate?.addEventListener("click",()=>this._invoke("onToggleAutoRotate")),e.btnLabels?.addEventListener("click",()=>this._invoke("onToggleLabels")),e.btnHelp?.addEventListener("click",()=>this._openHelp()),e.btnCloseHelp?.addEventListener("click",()=>this._closeHelp()),e.btnStartExploring?.addEventListener("click",()=>this._closeHelp()),e.helpModal?.addEventListener("click",t=>{t.target===e.helpModal&&this._closeHelp()}),e.btnDismissGuide?.addEventListener("click",()=>this._dismissGuide()),window.addEventListener("resize",this._handleResize,{passive:!0}),window.addEventListener("keydown",this._handleKeyDown,!0)}_closeDetail(){this._selectedId!==null&&(typeof this.opts.onClosePart=="function"&&this.opts.onClosePart(),this._selectedId!==null&&this.setSelected(null))}_openHelp(){let e=this.el.helpModal;!e||this._helpOpen||(this._helpOpen=!0,this._lastFocus=document.activeElement,e.classList.add("is-open"),e.setAttribute("aria-hidden","false"),window.requestAnimationFrame(()=>{this.el.btnCloseHelp&&this.el.btnCloseHelp.focus({preventScroll:!0})}))}_closeHelp(){let e=this.el.helpModal;if(!e||!this._helpOpen)return;this._helpOpen=!1,e.classList.remove("is-open"),e.setAttribute("aria-hidden","true");let t=this._lastFocus;this._lastFocus=null,t&&typeof t.focus=="function"&&document.contains(t)&&window.requestAnimationFrame(()=>t.focus({preventScroll:!0}))}_dismissGuide(){let e=this.el.guideCard;!e||e.classList.contains("is-dismissed")||(e.classList.add("is-dismissed"),e.setAttribute("aria-hidden","true"))}_onKeyDown(e){if(!this._helpOpen)return;let t=e.key;(t==="Escape"||t==="Esc")&&(e.preventDefault(),e.stopPropagation(),this._closeHelp())}_onResize(){this._mounted&&(this._resizeRaf||(this._resizeRaf=window.requestAnimationFrame(()=>{this._resizeRaf=0,this._mounted&&(this._updateLabelLayerState(),this._measureZones(),this._measureAllLabels())})))}_applyAccent(e,t){if(!e)return;let i=t||"#5BE7FF";e.style.setProperty("--accent",i),e.style.setProperty("--accent-08",Vn(i,.08)),e.style.setProperty("--accent-12",Vn(i,.12)),e.style.setProperty("--accent-14",Vn(i,.14)),e.style.setProperty("--accent-18",Vn(i,.18)),e.style.setProperty("--accent-20",Vn(i,.2)),e.style.setProperty("--accent-25",Vn(i,.25)),e.style.setProperty("--accent-32",Vn(i,.32)),e.style.setProperty("--accent-35",Vn(i,.35)),e.style.setProperty("--accent-45",Vn(i,.45)),e.style.setProperty("--accent-50",Vn(i,.5)),e.style.setProperty("--accent-65",Vn(i,.65))}_clearAccent(e){e&&["--accent","--accent-08","--accent-12","--accent-14","--accent-18","--accent-20","--accent-25","--accent-32","--accent-35","--accent-45","--accent-50","--accent-65"].forEach(t=>e.style.removeProperty(t))}};var iS=Math.PI*2,If=34,or=new w(.522,.324,.789).normalize(),cs=new w(0,.18,0),Bh=7.4,zh=5.2,ft=document.getElementById("scene-canvas"),Ni=new Fr;Ni.fog=new Nr(329482,.008);var cn=new Ul({canvas:ft,antialias:!0,alpha:!0,powerPreference:"high-performance"});cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));cn.setSize(window.innerWidth,window.innerHeight,!1);cn.outputColorSpace=Ut;cn.toneMapping=qa;cn.toneMappingExposure=1.12;cn.setClearColor(329482,0);var Gt=new kt(If,window.innerWidth/window.innerHeight,.1,120),yt=new Ol(Gt,ft);yt.enableDamping=!0;yt.dampingFactor=.065;yt.enablePan=!1;yt.rotateSpeed=.62;yt.zoomSpeed=.85;yt.minDistance=7.5;yt.maxDistance=40;yt.minPolarAngle=.28;yt.maxPolarAngle=Math.PI*.49;yt.autoRotateSpeed=.65;yt.target.copy(cs);var hs=df(Ni,cn),Mo=Kx(),Hl=new jt,wf=new jt;Ni.add(Mo);var So;try{So=Sf()}catch(n){throw tv(n),n}var yn=new Map,Eo=[],Ux=Qx(),To=new wi(6023167,0,6.5,2);Ni.add(To);var Ct=null,Xl=null,xn=!1,ls=!0,sr=!1,wo=!0,Ht=null,Hn=13.5,Ao=15,lr=19,Af=0,ar=null,kh=0,Uh=0,Gl=0,Nh=0,Hh=60,Rf=!1,Wl=!0,Cf=new ao,Fh=new K,Ui=new w,vo=new w,Yl=new jt,mi=new w,bo=new w,Nx=new w(.4,.7,.9),tt=new Vl({camera:Ef,parts:jn,onSelectPart:n=>Gh(n),onClosePart:()=>Jl(),onToggleExplodeAll:()=>Wh(),onResetView:()=>Xh(),onToggleAutoRotate:()=>Uf(),onToggleLabels:()=>Nf()});tt.mount();Fx();Bx();zx();Vx();kx();ev();function Fx(){let n=So.root;n.name="DJI Osmo Action 4",Ni.add(n),n.userData.modelRoot||(n.userData.modelRoot=!0),Yl.setFromObject(n),Yl.getSize(mi),mi.x>0&&mi.y>0&&(Bh=Math.max(Bh,mi.x),zh=Math.max(zh,mi.y));let e=jn.filter(t=>!So.parts.get(t.id));e.length&&console.warn("Missing model parts:",e.map(t=>t.id)),So.parts.forEach((t,i)=>{t.userData.partId=i}),n.updateMatrixWorld(!0),jn.forEach((t,i)=>{let s=So.parts.get(t.id);if(!s)return;let r=s.position.clone(),o=new w(...t.explode||[0,0,0]),a=s.userData.labelAnchor&&s.userData.labelAnchor.isVector3?s.userData.labelAnchor.clone():Ox(s),l=[],c=new Set;s.traverse(d=>{if(!d.isMesh)return;d.userData.partId=t.id,Eo.includes(d)||Eo.push(d),(Array.isArray(d.material)?d.material:[d.material]).forEach(_=>{if(!_||c.has(_))return;c.add(_);let m=!!(_.emissive&&_.emissive.isColor);l.push({material:_,hasEmissive:m,baseEmissive:m?_.emissive.clone():null,baseEmissiveIntensity:m?_.emissiveIntensity??1:0,protectedByMap:!!_.emissiveMap})})});let h=new Br(new Fs({map:Ux,color:new De(t.accent),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:en,toneMapped:!1}));new jt().setFromObject(s).getSize(mi);let p=Math.max(mi.x,mi.y,mi.z,.8);h.scale.setScalar(go.clamp(p*1.3,1.6,8.5)),h.position.copy(a),h.renderOrder=4,h.visible=!1,s.add(h),yn.set(t.id,{data:t,index:i,group:s,basePosition:r,explodeOffset:o,labelAnchor:a,materials:l,glowSprite:h,progress:0,target:0,glow:0})}),Eo.length=0,yn.forEach(t=>{t.group.traverse(i=>{i.isMesh&&(i.userData.partId=t.data.id,Eo.push(i))})}),n.updateMatrixWorld(!0)}function Ox(n){return Yl.setFromObject(n),Yl.getCenter(bo),n.worldToLocal(bo),Number.isFinite(bo.x)||bo.set(0,0,0),bo.clone()}function Bx(){yt.maxDistance=44,Ff(),Gt.position.copy(or).multiplyScalar(Hn*1.55),yt.target.copy(cs),window.matchMedia("(prefers-reduced-motion: reduce)").matches?(wo=!1,Gt.position.copy(or).multiplyScalar(Hn)):Yh(or.clone().multiplyScalar(Hn),cs,2.7),yt.update()}function zx(){let n=jn.length;tt.setSelected(null),tt.setAllExploded(!1),tt.setAutoRotate(!1),tt.setLabelsVisible(!0),tt.updateTelemetry({mode:"OVERVIEW",exploded:0,total:n,fps:60,target:"STANDBY",coord:"X 00.00 / Y 00.00 / Z 00.00"}),tt.setLoaderProgress(.08,"BOOTING VISUAL CORE")}function kx(){let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;(n?[[120,.65,"ASSEMBLING MODULES"],[420,1,"SYSTEM READY"]]:[[220,.28,"MOUNTING 10 MODULES"],[560,.56,"CALIBRATING DUAL DISPLAYS"],[980,.81,"BUILDING TEARDOWN MAP"],[1420,1,"SYSTEM READY"]]).forEach(([t,i,s])=>{window.setTimeout(()=>tt.setLoaderProgress(i,s),t)}),window.setTimeout(()=>{tt.hideLoader(),window.setTimeout(()=>{Rf||(Rf=!0,tt.showToast("\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u90E8\u4EF6\u5F00\u59CB\u62C6\u89E3",3200))},650)},n?780:1780)}function Vx(){yt.addEventListener("start",()=>{Ht=null,wo=!1,ft.classList.add("is-dragging")}),yt.addEventListener("end",()=>{ft.classList.remove("is-dragging"),Lf(ar)}),ft.addEventListener("pointerdown",Hx),ft.addEventListener("pointerup",Gx),ft.addEventListener("pointercancel",()=>{ar=null,ql(null)}),ft.addEventListener("pointermove",Wx),ft.addEventListener("pointerleave",()=>{ar=null,ql(null),ft.style.cursor="grab"}),window.addEventListener("resize",qx),window.addEventListener("keydown",n=>{if(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.metaKey||n.ctrlKey||n.altKey)return;let e=n.key.toLowerCase();if(e==="e")n.preventDefault(),Wh();else if(e==="r")n.preventDefault(),Xh();else if(e==="a")n.preventDefault(),Uf();else if(e==="l")n.preventDefault(),Nf();else if(n.key==="Escape"){if(document.getElementById("helpModal")?.classList.contains("is-open"))return;Ct?Jl():xn&&Kl(!1)}}),document.addEventListener("visibilitychange",()=>{document.hidden||Of.getDelta()}),qh()}function Hx(n){if(n.button!==void 0&&n.button!==0)return;ar={x:n.clientX,y:n.clientY},ft.classList.add("is-pressing"),ft.setPointerCapture?.(n.pointerId);let e=performance.now();ft.dataset.pressX=String(n.clientX),ft.dataset.pressY=String(n.clientY),ft.dataset.pressTime=String(e)}function Gx(n){ft.classList.remove("is-pressing");let e=Number(ft.dataset.pressX||n.clientX),t=Number(ft.dataset.pressY||n.clientY),i=Number(ft.dataset.pressTime||performance.now()),s=Math.hypot(n.clientX-e,n.clientY-t),r=performance.now()-i;s<7&&r<520&&Xx(n.clientX,n.clientY),delete ft.dataset.pressX,delete ft.dataset.pressY,delete ft.dataset.pressTime}function Wx(n){ar={x:n.clientX,y:n.clientY};let e=performance.now();e-Af<28||(Af=e,Lf(ar))}function Lf(n){if(!n){ql(null);return}let e=Df(n.x,n.y);ql(e,n.x,n.y)}function Xx(n,e){let t=Df(n,e);t?Gh(t):xn?Kl(!1):Ct&&Jl()}function Df(n,e){let t=ft.getBoundingClientRect();Fh.x=(n-t.left)/Math.max(t.width,1)*2-1,Fh.y=-((e-t.top)/Math.max(t.height,1))*2+1,Cf.setFromCamera(Fh,Gt);let i=Cf.intersectObjects(Eo,!1);for(let s of i)if(s.object.visible&&s.object.userData.partId)return s.object.userData.partId;return null}function ql(n,e=0,t=0){if(Xl===n){tt.setHovered(n,e,t);return}Xl=n,tt.setHovered(n,e,t),ft.style.cursor=n?"pointer":"grab"}function Gh(n){if(!n||!Lh.has(n))return;Ct=n,xn=!1,tt.setSelected(n),tt.setAllExploded(!1),$l(),Zl(Ao,.9);let e=Lh.get(n);tt.showToast(`${e.no} / ${e.name} \xB7 \u5DF2\u62C6\u89E3`,1600),Ro(!0)}function Jl(){!Ct&&!xn||(Ct=null,xn=!1,tt.setSelected(null),tt.setAllExploded(!1),$l(),Zl(Hn,.9),hs.clearFocus(),Ro(!0))}function Wh(){Kl(!xn)}function Kl(n){xn=n,n?(Ct=null,tt.setSelected(null),hs.clearFocus(),$l(),tt.setAllExploded(!0),Zl(lr,1.15),tt.showToast("10 \u4E2A\u90E8\u4EF6\u5DF2\u5168\u90E8\u5C55\u5F00 \xB7 \u62D6\u62FD\u67E5\u770B\u5185\u90E8\u7ED3\u6784",2800)):(Ct=null,tt.setSelected(null),hs.clearFocus(),$l(),tt.setAllExploded(!1),Zl(Hn,1.05),tt.showToast("\u6240\u6709\u90E8\u4EF6\u5DF2\u5F52\u4F4D",1600)),Ro(!0)}function $l(){yn.forEach(n=>{n.target=xn||Ct===n.data.id?1:0})}function Uf(){sr=!sr,yt.autoRotate=sr,tt.setAutoRotate(sr),tt.showToast(sr?"\u81EA\u52A8\u65CB\u8F6C\u5DF2\u5F00\u542F":"\u81EA\u52A8\u65CB\u8F6C\u5DF2\u5173\u95ED",1500)}function Nf(){ls=!ls,tt.setLabelsVisible(ls),ls||tt.updateLabels(jn.map(n=>({id:n.id,visible:!1,x:0,y:0,exploded:!1,selected:!1}))),tt.showToast(ls?"\u90E8\u4EF6\u6807\u6CE8\u5DF2\u5F00\u542F":"\u90E8\u4EF6\u6807\u6CE8\u5DF2\u5173\u95ED",1500)}function Xh(){wo=!1,Yx(1),tt.showToast("\u89C6\u89D2\u5DF2\u91CD\u7F6E",1300)}function Yx(n=.9){let e=xn?lr:Ct?Ao:Hn,t=or.clone().multiplyScalar(e).add(cs);Yh(t,cs,n)}function Yh(n,e,t){Ht={from:Gt.position.clone(),to:n.clone(),fromTarget:yt.target.clone(),toTarget:e.clone(),elapsed:0,duration:Math.max(t,.01)}}function Zl(n,e){let t=yt.target.clone(),i=Gt.position.clone().sub(t);i.lengthSq()<1e-4&&i.copy(or),i.normalize();let s=t.clone().add(i.multiplyScalar(n));Yh(s,t,e)}function Ff(){let n=window.innerWidth,e=window.innerHeight,t=Math.max(.35,n/Math.max(e,1)),i=Math.tan(If*Math.PI/360),s=t>=1.25?.47:t>=.9?.6:.84,r=t>=1.25?.58:.66,o=Bh/(2*i*t)/s,a=zh/(2*i)/r;Hn=Math.max(13.2,o,a),Ao=Math.min(38,Hn*1.11),lr=Math.min(44,Hn*1.55),yt.maxDistance=Math.max(36,lr*1.7)}function qx(){let n=window.innerWidth,e=window.innerHeight;cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),cn.setSize(n,e,!1),Gt.aspect=n/Math.max(e,1),Gt.updateProjectionMatrix(),Ff()}var Of=new oo,rr=0,Vh=null;function Bf(){Vh=requestAnimationFrame(Bf);let n=Math.min(Of.getDelta(),.06);if(rr+=n,Ht){Ht.elapsed+=n;let e=Math.min(1,Ht.elapsed/Ht.duration),t=Jx(e);Gt.position.lerpVectors(Ht.from,Ht.to,t),yt.target.lerpVectors(Ht.fromTarget,Ht.toTarget,t),e>=1&&(Ht=null,wo&&(wo=!1))}yt.update(),$x(n,rr),zf(n,rr),hs.update(rr,n),qh(),cn.render(Ni,Gt),Zx(n)}function $x(n,e){let t=1-Math.exp(-n*5.2);yn.forEach(i=>{let s=i.target-i.progress;Math.abs(s)>5e-4?(i.progress+=s*t,Math.abs(i.target-i.progress)<.001&&(i.progress=i.target)):i.progress=i.target;let r=kf(i.progress);i.group.position.copy(i.basePosition).addScaledVector(i.explodeOffset,r),i.progress>.01&&(i.group.position.y+=Math.sin(e*1.2+i.index*.9)*.017*r)})}function zf(n,e){let t=Ct?yn.get(Ct):null,i=new w;yn.forEach(s=>{let r=Wl?s.data.id===Ct?1:s.data.id===Xl?.42:xn?.06:0:0;s.glow+=(r-s.glow)*(1-Math.exp(-n*9));let o=new De(s.data.accent),a=s.data.id===Ct?.72+.28*Math.sin(e*3.4):.7;s.materials.forEach(c=>{if(c.hasEmissive){if(c.protectedByMap){c.material.emissiveIntensity=c.baseEmissiveIntensity+s.glow*.01;return}c.material.emissive.copy(c.baseEmissive).lerp(o,s.glow*.06),c.material.emissiveIntensity=c.baseEmissiveIntensity+s.glow*.015*a}});let l=s.glow*(s.data.id===Ct?.3:.16)*a;s.glowSprite.visible=l>.008,s.glowSprite.material.opacity=l}),t?(t.group.updateWorldMatrix(!0,!1),Ui.copy(t.labelAnchor).applyMatrix4(t.group.matrixWorld),hs.setFocus(Ui,t.data.accent),To.color.set(t.data.accent),To.position.copy(Ui).add(Nx),To.intensity=Wl?.1+Math.sin(e*3.4)*.04:0,Wl?(jx(Mo,t.group,t.data.accent),Mo.material.opacity=.72+.22*(.5+.5*Math.sin(e*3.4))):Mo.visible=!1,ft.dataset.selectedAnchor=`${Ui.x.toFixed(2)},${Ui.y.toFixed(2)},${Ui.z.toFixed(2)}`):(hs.clearFocus(),Mo.visible=!1,To.intensity*=.85)}function qh(){if(!ls||(kh+=1,kh%2!==0))return;let n=ft.getBoundingClientRect(),e=n.width||window.innerWidth,t=n.height||window.innerHeight,i=[],s=Ct?yn.get(Ct):null;if(yn.forEach(r=>{let o=r.data.id===Ct;if(!(r.progress>.18||o)){i.push({id:r.data.id,visible:!1,x:0,y:0,exploded:!1,selected:!1});return}if(r.group.updateWorldMatrix(!0,!1),Ui.copy(r.labelAnchor).applyMatrix4(r.group.matrixWorld),vo.copy(Ui).project(Gt),vo.z<-1||vo.z>1){i.push({id:r.data.id,visible:!1,x:0,y:0,exploded:!0,selected:o});return}let l=(vo.x*.5+.5)*e,c=(-vo.y*.5+.5)*t,h=l>-120&&l<e+120&&c>-100&&c<t+100;i.push({id:r.data.id,x:l,y:c,visible:h,exploded:r.progress>.32,selected:o,priority:o?2:1})}),s){let r=i.find(o=>o.id===s.data.id);r&&!r.visible&&(r.visible=!1)}tt.updateLabels(i)}function Zx(n){Gl+=n,Nh+=1,Gl>=.5&&(Hh=Math.round(Nh/Gl),Gl=0,Nh=0),Uh+=n,Uh>=.28&&(Uh=0,Ro())}function Ro(){let n=Array.from(yn.values()).filter(r=>r.progress>.45).length,e=Ct?yn.get(Ct):null,t=xn?"EXPLODED":Ct?"FOCUS":"OVERVIEW",i="STANDBY",s="X 00.00 / Y 00.00 / Z 00.00";if(e){i=`${e.data.no} \xB7 ${e.data.en}`;let r=e.basePosition.clone().add(e.explodeOffset).add(e.labelAnchor);s=`X ${Oh(r.x)} / Y ${Oh(r.y)} / Z ${Oh(r.z)}`}tt.updateTelemetry({mode:t,exploded:n,total:jn.length,fps:Hh,target:i,coord:s})}function Oh(n){return`${n>=0?"+":""}${n.toFixed(2)}`}function kf(n){return 1-Math.pow(1-n,3)}function Jx(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function Kx(){let n=new wt;n.setAttribute("position",new Nt(new Float32Array(72),3));let e=new hi({color:6023167,transparent:!0,opacity:.8,depthTest:!1,depthWrite:!1,toneMapped:!1}),t=new $i(n,e);return t.frustumCulled=!1,t.renderOrder=5,t.visible=!1,t}var Pf=[0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7];function jx(n,e,t){if(e.updateWorldMatrix(!0,!0),Hl.makeEmpty(),e.traverse(a=>{!a.isMesh||a.isSprite||!a.geometry||(a.geometry.boundingBox||a.geometry.computeBoundingBox(),a.geometry.boundingBox&&(wf.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),Hl.union(wf)))}),Hl.isEmpty()){n.visible=!1;return}let{min:i,max:s}=Hl,r=[[i.x,i.y,i.z],[s.x,i.y,i.z],[s.x,s.y,i.z],[i.x,s.y,i.z],[i.x,i.y,s.z],[s.x,i.y,s.z],[s.x,s.y,s.z],[i.x,s.y,s.z]],o=n.geometry.attributes.position;for(let a=0;a<Pf.length;a+=1){let l=r[Pf[a]];o.setXYZ(a,l[0],l[1],l[2])}o.needsUpdate=!0,n.geometry.computeBoundingSphere(),n.material.color.set(t),n.visible=!0}function Qx(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.6,"rgba(120,230,255,0)"),i.addColorStop(.7,"rgba(120,230,255,0.2)"),i.addColorStop(.78,"rgba(235,253,255,0.96)"),i.addColorStop(.84,"rgba(90,215,255,0.42)"),i.addColorStop(.92,"rgba(20,120,180,0.1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,256,256);let s=new ui(e);return s.colorSpace=Ut,s}function ev(){let n=new w;window.__ACTION4__={scene:Ni,camera:Gt,renderer:cn,controls:yt,ui:tt,selectPart:Gh,clearSelection:Jl,toggleExplodeAll:Wh,setAllExplodedMode:Kl,resetView:Xh,setSelectionHighlight(e){Wl=!!e},getState(){return{selectedId:Ct,hoveredId:Xl,allExploded:xn,labelsVisible:ls,autoRotate:sr,cameraDistance:Gt.position.distanceTo(yt.target),cameraPosition:Gt.position.toArray(),homeDistance:Hn,focusDistance:Ao,explodeDistance:lr,cameraTween:Ht?{from:Ht.from.toArray(),to:Ht.to.toArray(),elapsed:Ht.elapsed,duration:Ht.duration}:null,drawCalls:cn.info.render.calls,triangles:cn.info.render.triangles,fps:Hh,zones:tt?._zones||null,parts:Array.from(yn.values()).map(e=>({id:e.data.id,progress:Number(e.progress.toFixed(3)),target:e.target,base:e.basePosition.toArray(),position:e.group.position.toArray(),accent:e.data.accent}))}},projectPart(e){let t=yn.get(e);if(!t)return null;t.group.updateWorldMatrix(!0,!1),n.copy(t.labelAnchor).applyMatrix4(t.group.matrixWorld);let i=n.clone(),s=n.clone().project(Gt),r=ft.getBoundingClientRect();return{id:e,world:i.toArray(),x:(s.x*.5+.5)*r.width,y:(-s.y*.5+.5)*r.height,ndcZ:s.z}},settleForQA(){Ht=null,yn.forEach(t=>{t.progress=t.target,t.group.position.copy(t.basePosition).addScaledVector(t.explodeOffset,kf(t.progress))});let e=xn?lr:Ct?Ao:Hn;return Gt.position.copy(or).multiplyScalar(e).add(cs),yt.target.copy(cs),yt.update(),zf(1/60,rr),hs.update(rr,1/60),kh=1,qh(),cn.render(Ni,Gt),Ro(),this.getState()}}}function tv(n){console.error(n);let e=document.getElementById("loaderText"),t=document.getElementById("loaderPercent");e&&(e.textContent="MODEL INITIALIZATION FAILED"),t&&(t.textContent="ERR");let i=document.getElementById("loader");i&&i.classList.add("is-error")}Bf();window.addEventListener("beforeunload",()=>{Vh&&cancelAnimationFrame(Vh)});})();
