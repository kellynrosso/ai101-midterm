(function(root){
const moods={happy:'Happy',calm:'Calm',hopeful:'Hopeful',tired:'Tired',overwhelmed:'Overwhelmed',low:'Low',mixed:'Mixed'};
const purposes=['Self-love','Relationships','Letting go','Grief & healing','A little goal','Finding calm','A new chapter'];
const all=s=>[{...s.active,slot:-1},...s.collection.map((p,slot)=>({...p,slot}))];
const name=p=>p.nickname||root.Garden.species.find(s=>s.id===p.species)?.name||'Your plant';
function events(state){const out=[];for(const p of all(state)){const species=root.Garden.species.find(s=>s.id===p.species)?.name||p.species;
 const add=(type,date,entry=null)=>{if(typeof date==='string'&&!Number.isNaN(Date.parse(date)))out.push({id:p.id+':'+type+':'+(entry?.id||''),type,date,plantId:p.id,slot:p.slot,room:p.room||'home',name:name(p),species,purpose:entry?.purpose||p.purpose||'',plant:p,entry})};
 add('planted',p.plantedAt);for(const e of p.history||[])add('reflection',e.createdAt,e);if(p.growth>=7)add('flourished',p.completedAt);
 }return out.sort((a,b)=>Date.parse(b.date)-Date.parse(a.date)||({flourished:2,reflection:1,planted:0}[b.type]-{flourished:2,reflection:1,planted:0}[a.type]));}
function moveInfo(state,plantId,room,page,spotId){
 const plants=all(state).filter(p=>(p.room||'home')===room),plant=plants.find(p=>p.id===plantId);if(!plant)return {ok:false,reason:'Choose a plant in this room.'};
 const layout=root.RoomDisplay.layouts[room];if(!layout)return {ok:false,reason:'That room is unavailable.'};const target=[...layout.seats,...layout.floor,...layout.hang].find(p=>p.id===spotId);
 if(!target||!Number.isInteger(page)||page<0||page>plants.length)return {ok:false,reason:'Choose a highlighted spot.'};
 if(target.kind==='hanging'&&!root.Garden.canHang(plant.species))return {ok:false,reason:'This plant needs a shelf or floor stand.'};
 const positions=root.RoomDisplay.plan(plants,room).flat(),source=positions.find(p=>p.plant.id===plantId),occupant=positions.find(p=>p.page===page&&p.id===spotId);
 if(occupant?.plant.id===plantId)return {ok:false,reason:'Your plant is here now.',current:true};
 if(occupant&&source?.kind==='hanging'&&!root.Garden.canHang(occupant.plant.species))return {ok:false,reason:'These plants cannot swap: the other plant cannot hang.'};
 if(!occupant&&source?.page!==page&&positions.filter(p=>p.page===page).length>=13)return {ok:false,reason:'This arrangement is full. Choose a swap or another arrangement.'};
 return {ok:true,plant,source,target,occupant,page,room,positions};
}
function move(state,plantId,room,page,spotId){const info=moveInfo(state,plantId,room,page,spotId);if(!info.ok)throw Error(info.reason);const copy={...state,active:{...state.active},collection:state.collection.map(p=>({...p}))};const find=id=>[copy.active,...copy.collection].find(p=>p.id===id);for(const position of info.positions)find(position.plant.id).displaySpot={room,page:position.page,spot:position.id};const assign=(p,spot,pg)=>{p.displaySpot={room,page:pg,spot:spot.id};p.placement=spot.kind==='hanging'?'hanging':spot.kind==='floor'?'floor':'shelf-only'};assign(find(plantId),info.target,page);if(info.occupant)assign(find(info.occupant.plant.id),info.source,info.source.page);return copy;}
const api={moods,purposes,all,name,events,moveInfo,move};root.GrowthJournal=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
