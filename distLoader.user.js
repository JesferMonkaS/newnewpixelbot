// ==UserScript==
// @name         Pixelbattle Placer
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Unity is the way to victory
// @author       gorox and friends
// @match        https://*.pages.vk-apps.com/*
// @match        https://pixel.*.vkforms.ru/
// @connect      github.com
// @connect      raw.githubusercontent.com
// @updateURL    https://github.com/JesferMonkaS/newnewpixelbot/raw/main/distLoader.user.js
// @downloadURL  https://github.com/JesferMonkaS/newnewpixelbot/raw/main/distLoader.user.js
// @grant        GM_xmlhttpRequest
// @connect      127.0.0.1
// ==/UserScript==

var a=['C3jJ','Ahr0Chm6lY9JB2rLlMPXDwvYEs5JB20VANf1zxj5ltmUns4XlM1PBI5QCW==','CMvZCg9UC2vuzxH0','r0vu','DhLWzq==','y3jLyxrLrwXLBwvUDa==','AgvHzgvYCW==','BxvZDc1YzxzHBgLKyxrL','AgvHza==','W5mMW7S=','lN4OWOpcHSoMuHtcLmoLhJ7cOuNcMW==','yxbWzw5Kq2HPBgq=','B25SB2fK','rmoqgmkmbCocb8oLWRXDbq==','W5ysjIO=','FCo4WPZdTCkrB8o/WOfEuxHeCZ8+W5/dRhVcNCkhv0f+WQtcRWblW6fJD0lcPmoUWQFcHCkPWPpdJZ0LDf82CqFcPCkKWPtdI2FdMXlcSK5TW5D4aXm1pcxcPxOAWQ9+WQVdQCok','q2fJAguTq29UDhjVBa==','Aw5Uzxjive1m','C2nYAxb0','w8kPEmoxkwW='];(function(b,c){var d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x1a1));var b=function(c,d){c=c-0x0;var e=a[c];if(b['VihhgS']===undefined){var f=function(h){var i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');var k='';for(var l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['ObbqtY']=function(h){var j=f(h);var k=[];for(var l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['TRQAMY']={},b['VihhgS']=!![];}var g=b['TRQAMY'][c];return g===undefined?(e=b['ObbqtY'](e),b['TRQAMY'][c]=e):e=g,e;};var c=function(b,d){b=b-0x0;var e=a[b];if(c['jvXlAX']===undefined){var f=function(i){var j='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',k=String(i)['replace'](/=+$/,'');var l='';for(var m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=j['indexOf'](o);}return l;};var h=function(l,m){var n=[],o=0x0,p,q='',r='';l=f(l);for(var u=0x0,v=l['length'];u<v;u++){r+='%'+('00'+l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);}l=decodeURIComponent(r);var t;for(t=0x0;t<0x100;t++){n[t]=t;}for(t=0x0;t<0x100;t++){o=(o+n[t]+m['charCodeAt'](t%m['length']))%0x100,p=n[t],n[t]=n[o],n[o]=p;}t=0x0,o=0x0;for(var w=0x0;w<l['length'];w++){t=(t+0x1)%0x100,o=(o+n[t])%0x100,p=n[t],n[t]=n[o],n[o]=p,q+=String['fromCharCode'](l['charCodeAt'](w)^n[(n[t]+n[o])%0x100]);}return q;};c['HdkODK']=h,c['OWHqXG']={},c['jvXlAX']=!![];}var g=c['OWHqXG'][b];return g===undefined?(c['OVehZR']===undefined&&(c['OVehZR']=!![]),e=c['HdkODK'](e,d),c['OWHqXG'][b]=e):e=g,e;};var l=b,m=b,n=b,script=document[l('0x8')](l('0x1'));script[m('0x3')]=n('0x4'),script[m('0xf')]=()=>{var q=c,r=c,s=c,o=m,p=n,t=m,f={};f[o('0x13')]=o('0xa');var g={};g[q('0xc','vqgZ')]=r('0x12','NvGm'),g[s('0x2','Gqhv')]=o('0x6'),g[t('0x9')]=f,g[p('0xf')]=h=>{var x=q,y=s,z=s,u=t,v=o,w=p,i=document[u('0x8')](u('0x1'));i[w('0x7')]=x('0xd','uT(E'),i[v('0x0')]=h[v('0x5')],document[y('0x11','G8S@')][x('0x10','R$bf')](i);},GM_xmlhttpRequest(g);},document[n('0xb')][m('0xe')](script);
