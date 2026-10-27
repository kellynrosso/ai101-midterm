/* A browser-local convenience profile, not online identity or encrypted journal storage. */
(function(root){
const iterations=210000;
function valid(p){return !!p&&p.version===1&&typeof p.name==='string'&&p.name.length<=32&&p.iterations===iterations&&/^[A-Za-z0-9+/]{22}==$/.test(p.salt)&&/^[A-Za-z0-9+/]{43}=$/.test(p.verifier)}
const encode=bytes=>btoa(String.fromCharCode(...bytes));
const decode=text=>Uint8Array.from(atob(text),c=>c.charCodeAt(0));
function name(value){return String(value||'').trim().slice(0,32)}
function checkPassword(password){if(typeof password!=='string'||password.length<6||password.length>128)throw Error('Choose a password with 6–128 characters.');}
async function derive(password,salt){
 const material=await root.crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
 return new Uint8Array(await root.crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations,hash:'SHA-256'},material,256));
}
async function create(displayName,password){checkPassword(password);const salt=root.crypto.getRandomValues(new Uint8Array(16)),verifier=await derive(password,salt);return {version:1,name:name(displayName),salt:encode(salt),verifier:encode(verifier),iterations};}
async function verify(profile,password){if(!valid(profile)||typeof password!=='string'||password.length>128)return false;const candidate=await derive(password,decode(profile.salt)),stored=decode(profile.verifier);let difference=0;for(let i=0;i<stored.length;i++)difference|=stored[i]^candidate[i];return difference===0}
const api={valid,name,create,verify};root.LocalProfile=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
