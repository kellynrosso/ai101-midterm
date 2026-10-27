(function(root){
const rooms=[
{id:'home',name:'Cozy Plant Room',short:'Cozy home',tag:'Where your story starts',description:'Your familiar corner, with warm windows and room to grow.',moods:[['day','Soft daylight']],starter:'monstera'},
{id:'glasshouse',name:'The Glasshouse',short:'Glasshouse',tag:'A little world under glass',description:'Sunlit panes, rain on the roof, orchids and a quiet potting bench.',moods:[['sun','Sunny morning'],['rain','Rainy afternoon'],['evening','Lantern evening']],starter:'orchid'},
{id:'desert',name:'Desert Sunset Retreat',short:'Desert retreat',tag:'Slow down in the golden light',description:'Adobe arches, distant mountains and a collection of desert companions.',moods:[['gold','Golden hour'],['pink','Pink sunset'],['stars','Starry desert night']],starter:'barrel'}
];
const initial=()=>({version:1,current:'home',unlocked:['home'],moods:{home:'day',glasshouse:'sun',desert:'gold'},names:{home:'My growing home',glasshouse:'The Glasshouse',desert:'Desert Sunset Retreat'},vent:false});
function restore(raw){const out=initial();try{const s=JSON.parse(raw);if(!s||s.version!==1)return out;out.unlocked=[...new Set(['home',...(Array.isArray(s.unlocked)?s.unlocked:[]).filter(id=>rooms.some(r=>r.id===id))])];if(out.unlocked.includes(s.current))out.current=s.current;for(const r of rooms){if(r.moods.some(([m])=>m===s.moods?.[r.id]))out.moods[r.id]=s.moods[r.id];if(typeof s.names?.[r.id]==='string')out.names[r.id]=s.names[r.id].trim().slice(0,28)||out.names[r.id]}out.vent=s.vent===true;return out}catch{return out}}
function unlock(s,id){if(!rooms.some(r=>r.id===id))throw Error('Unknown room');return {...s,unlocked:[...new Set([...s.unlocked,id])]}}
function enter(s,id){if(!s.unlocked.includes(id)||!rooms.some(r=>r.id===id))throw Error('Room is locked');return {...s,current:id}}
function mood(s,value){const r=rooms.find(r=>r.id===s.current);if(!r.moods.some(([v])=>v===value))throw Error('Unknown atmosphere');return {...s,moods:{...s.moods,[s.current]:value}}}
const api={rooms,initial,restore,unlock,enter,mood};if(typeof module!=='undefined')module.exports=api;root.RoomWorld=api;
})(typeof window==='undefined'?globalThis:window);
