/* One shared coordinate system keeps plants, pots and furniture in proportion. */
(function(root){
const slot=(id,x,base,w,h,kind='shelf')=>({id,x,base,w,h,kind});
const layouts={
 home:{seats:[slot('console-a',470,715,175,195),slot('console-b',660,715,175,195),slot('console-c',850,715,175,195),slot('ledge-a',450,495,165,180),slot('ledge-b',650,495,165,180),slot('ledge-c',850,495,165,180),slot('sill-a',120,520,105,135),slot('sill-b',255,520,105,135),slot('lower-a',470,865,140,140),slot('lower-b',660,865,140,140),slot('lower-c',850,865,140,140)],floor:[slot('floor-a',125,930,225,315,'floor'),slot('floor-b',315,950,180,245,'floor')],hang:[slot('hang-a',350,75,145,235,'hanging'),slot('hang-b',550,75,145,235,'hanging'),slot('hang-c',750,75,145,235,'hanging')]},
 glasshouse:{seats:[slot('bench-a',140,665,165,205),slot('bench-b',330,665,165,205),slot('bench-c',520,665,165,205),slot('potting-a',740,710,165,205),slot('potting-b',920,710,145,190),slot('ledge-a',160,435,155,180),slot('ledge-b',370,435,155,180),slot('lower-a',140,845,140,160),slot('lower-b',330,845,140,160),slot('lower-c',520,845,140,160),slot('propagation',775,490,150,130)],floor:[slot('floor-a',680,960,210,225,'floor'),slot('floor-b',910,975,170,230,'floor')],hang:[slot('hang-a',585,100,145,270,'hanging'),slot('hang-b',765,100,145,270,'hanging'),slot('hang-c',935,100,125,270,'hanging')]},
 desert:{seats:[slot('mesa-a',430,730,175,185),slot('mesa-b',650,730,175,185),slot('mesa-c',870,730,175,185),slot('niche-a',125,485,150,190),slot('niche-b',325,550,150,190),slot('niche-c',890,495,150,190),slot('lower-a',440,875,140,135),slot('lower-b',650,875,140,135),slot('lower-c',865,875,140,135),slot('plinth-a',135,710,135,155),slot('plinth-b',290,805,130,170)],floor:[slot('floor-a',120,950,190,225,'floor'),slot('floor-b',295,970,150,160,'floor')],hang:[slot('hang-a',165,100,150,240,'hanging'),slot('hang-b',500,100,155,240,'hanging'),slot('hang-c',855,100,150,240,'hanging')]}
};
const floorSpecies=new Set(['monstera','albo','thai','aurea','mint','fiddle','rubber','snake','zz','warocq','frydek','moonshine','barrel','aloe','prickly','maidenhair','begonia']);
function plan(plants,room='home'){
 const layout=layouts[room]||layouts.home,slots=[...layout.floor,...layout.seats,...layout.hang],pages=[];const used=new Set();
 const ensure=i=>{while(pages.length<=i)pages.push([]);return pages[i]};
 const place=(plant,slot,page)=>{ensure(page).push({...slot,plant,page});used.add(plant)};
 const eligible=(plant,slot)=>slot.kind!=='hanging'||root.Garden?.canHang(plant.species);
 // Reserve explicit placements first, so automatic styling never displaces them.
 for(const plant of plants){const anchor=plant.displaySpot,slot=anchor&&slots.find(s=>s.id===anchor.spot);if(anchor?.room===room&&Number.isInteger(anchor.page)&&anchor.page>=0&&anchor.page<=plants.length&&slot&&eligible(plant,slot)){const page=ensure(anchor.page);if(page.length<13&&!page.some(p=>p.id===slot.id))place(plant,slot,anchor.page)}}
 const sorted=plants.filter(p=>!used.has(p)).sort((a,b)=>Number(b.placement==='floor')-Number(a.placement==='floor')||Number(b.placement==='hanging')-Number(a.placement==='hanging')||Number(floorSpecies.has(b.species)||['large','tall'].includes(root.Garden?.species.find(s=>s.id===b.species)?.sizeClass))-Number(floorSpecies.has(a.species)||['large','tall'].includes(root.Garden?.species.find(s=>s.id===a.species)?.sizeClass)));
 for(const plant of sorted){const big=floorSpecies.has(plant.species)||['large','tall'].includes(root.Garden?.species.find(s=>s.id===plant.species)?.sizeClass);const options=plant.placement==='hanging'&&root.Garden?.canHang(plant.species)?layout.hang:plant.placement==='floor'?layout.floor:plant.placement==='shelf-only'?layout.seats:big?[...layout.floor,...layout.seats]:[...layout.seats,...layout.floor];
  for(let page=0;page<=plants.length;page++){const row=ensure(page);if(row.length>=13)continue;const available=options.find(slot=>!row.some(p=>p.id===slot.id));if(available){place(plant,available,page);break}}
 }
 return pages.filter(p=>p.length).length?pages.filter(p=>p.length):[[]];
}
function spotLabel(id){const parts=id.split('-'),side={a:'left',b:'middle',c:'right'}[parts[1]]||'';const names={console:'Console',ledge:'Wall ledge',sill:'Window ledge',lower:'Lower shelf',floor:'Floor',hang:'Hanging support',bench:'Potting bench',potting:'Potting table',propagation:'Propagation ledge',mesa:'Terracotta console',niche:'Adobe ledge',plinth:'Low stone stand'};return (names[parts[0]]||id)+(side?' · '+side:'')}

function furniture(room='home',variant='shelf',hasHanging=false){
 const metal=['rail','macrame'].includes(variant),light=variant==='windowsill',stone=variant==='pedestal';
 const wood=stone?'#d8cbb4':light?'#e8dfc8':metal?'#7d8270':'#b28b60',edge=stone?'#b7aa94':metal?'#555f54':'#8b6848';
 const shelf=(x,y,w)=>`<path d="M${x} ${y}h${w}v13H${x}Z" fill="${wood}"/><path d="M${x} ${y+13}h${w}v5H${x}Z" fill="${edge}"/><path d="M${x+18} ${y+18}v20l24-20M${x+w-18} ${y+18}v20l-24-20" fill="none" stroke="${edge}" stroke-width="5"/>`;
 const legs=(x,y,w,end)=>`<path d="M${x+20} ${y}L${x+5} ${end}M${x+w-20} ${y}L${x+w-5} ${end}" stroke="${edge}" stroke-width="12" fill="none"/>`;
 let body='';
 if(room==='home')body=`<ellipse cx="655" cy="900" rx="300" ry="18" fill="#6e533e" opacity=".12"/>${shelf(370,495,565)}${shelf(60,520,260)}${legs(380,733,565,906)}${shelf(380,715,565)}<path d="M395 733H930V775H395Z" fill="${wood}"/><path d="M660 736V770M410 772H916" stroke="${edge}" stroke-width="2"/><g fill="${edge}"><circle cx="525" cy="753" r="4"/><circle cx="790" cy="753" r="4"/></g>${shelf(400,865,525)}`;
 else if(room==='glasshouse')body=`<ellipse cx="520" cy="930" rx="460" ry="20" fill="#456649" opacity=".12"/>${shelf(65,435,390)}${legs(55,682,555,914)}${shelf(55,665,555)}${shelf(70,845,525)}${legs(650,727,340,914)}${shelf(650,710,340)}${shelf(690,490,190)}<path d="M77 678H590M77 850H575M675 724H966" stroke="#e4d5a8" stroke-width="3" stroke-dasharray="10 7"/>`;
 else body=`<g fill="#c89b78" stroke="#af7f60" stroke-width="3"><path d="M48 485H203V506H48ZM248 550H403V570H248ZM813 495H967V517H813Z"/><path d="M350 730H965V907H935V757H380V907H350Z"/><path d="M380 875H937V891H380Z"/><path d="M78 710H194V855H78Z"/><path d="M235 805H345V908H235Z"/></g><g stroke="#e4bb97" stroke-width="8"><path d="M48 485H203M248 550H403M813 495H967M350 730H965M78 710H194M235 805H345"/></g><path d="M401 772H911M401 790H911" stroke="#d7ae87" stroke-width="3" opacity=".6"/>`;
 if(variant==='ladder')body+='<path d="M350 445L380 900M965 445L935 900" fill="none" stroke="'+edge+'" stroke-width="8"/>';
 if(variant==='macrame')body+='<path d="M390 745l25 28 25-28 25 28 25-28 25 28 25-28 25 28 25-28 25 28 25-28 25 28 25-28" fill="none" stroke="#e8d6b6" stroke-width="4"/>';
 const rail=hasHanging?(room==='desert'?`<path d="M85 100H935" stroke="#aa7b57" stroke-width="10" stroke-linecap="round"/><path d="M85 88V114M935 88V114" stroke="#815d44" stroke-width="12"/>`:room==='glasshouse'?`<path d="M500 100H990M510 100V53M980 100V53" fill="none" stroke="#5f8071" stroke-width="9"/>`:`<path d="M270 75H835M275 64V90M830 64V90" fill="none" stroke="#977654" stroke-width="10" stroke-linecap="round"/>`):'';
 return `<svg class="display-furniture" viewBox="0 0 1000 1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${body}${rail}</svg>`;
}
function standingArt(svg,shape='classic'){
 const base={classic:397,round:400,bowl:386,tall:413,pedestal:405,scallop:400}[shape]||397;
 return svg.replace('viewBox="0 0 420 430"',`viewBox="70 25 280 ${base-25}" preserveAspectRatio="xMidYMax meet"`).replace(/<ellipse cx="210" cy="397"[^>]*\/>/,'');
}
const api={plan,furniture,layouts,standingArt,spotLabel};root.RoomDisplay=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
