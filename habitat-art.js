/* Twenty additional species, each assigned to one room only. */
(function(root){
const rows=[
 ['bird-paradise','Bird of paradise','Strelitzia reginae','glasshouse','large','Upright paddle leaves; orange and blue bird-shaped flowers.'],
 ['medinilla','Showy medinilla','Medinilla magnifica','glasshouse','large','Broad ribbed leaves and pendant pink bracts with tiny flowers.'],
 ['guzmania','Scarlet-star bromeliad','Guzmania lingulata','glasshouse','compact','A strap-leaf rosette; red bracts surround small true flowers.'],
 ['passionflower','Blue passionflower','Passiflora caerulea','glasshouse','large','A vigorous tendril climber with lobed leaves and blue-white flowers.'],
 ['african-violet','African violet','Streptocarpus ionanthus','glasshouse','compact','Soft rounded leaves and violet flowers held above the rosette.'],
 ['orbifolia','Round-leaf calathea','Goeppertia orbifolia','glasshouse','large','Wide silver-striped leaves; grown here for its foliage.'],
 ['staghorn','Staghorn fern','Platycerium bifurcatum','glasshouse','large','Forked antler fronds and a basal shield; this fern does not flower.'],
 ['sundew','Cape sundew','Drosera capensis','glasshouse','compact','Slender sticky leaves and pink flowers on a separate stalk.'],
 ['saguaro','Saguaro','Carnegiea gigantea','desert','tall','An iconic tall column with upward arms and creamy-white crown flowers.'],
 ['fencepost','Mexican fencepost cactus','Pachycereus marginatus','desert','tall','Upright columns with pale rib margins and small pinkish flowers.'],
 ['old-man','Peruvian old man cactus','Espostoa lanata','desert','tall','A woolly column with long pale hairs and pale side flowers.'],
 ['blue-torch','Blue torch cactus','Pilosocereus pachycladus','desert','tall','Blue-green ribs, golden areoles and pale funnel-shaped flowers.'],
 ['organ-pipe','Organ pipe cactus','Stenocereus thurberi','desert','tall','Several narrow stems rise from the base; cream flowers open at night.'],
 ['fairy-castle','Fairy castle cactus','Acanthocereus tetragonus','desert','tall','Angular branching towers; mature plants can produce white flowers.'],
 ['bishops-cap','Bishop’s cap cactus','Astrophytum myriostigma','desert','compact','A flecked five-ribbed star-shaped body with yellow flowers.'],
 ['desert-rose','Desert rose','Adenium obesum','desert','large','A swollen caudex, branching crown and pink trumpet-shaped flowers.'],
 ['ponytail','Ponytail palm','Beaucarnea recurvata','desert','large','A bottle-shaped trunk and long, cascading ribbon leaves.'],
 ['zebra-haworthia','Zebra haworthia','Haworthiopsis attenuata','desert','compact','Pointed succulent leaves with raised white bands; tiny flowers on a wiry stalk.'],
 ['panda','Panda plant','Kalanchoe tomentosa','desert','compact','Velvety grey-green leaves with chocolate-brown tips and edges.'],
 ['royal-agave','Queen Victoria agave','Agave victoriae-reginae','desert','compact','A geometric rosette of thick leaves marked with fine white lines.']
];
const catalog=rows.map(([id,name,scientificName,habitat,sizeClass,note])=>({id,name,scientificName,habitat,sizeClass,note:(sizeClass==='tall'?'Tall grower · ':sizeClass==='large'?'Large grower · ':'Compact grower · ')+note,form:id,color:'#70976a',variegation:null}));
const bloomSpecies=['bird-paradise','medinilla','guzmania','passionflower','african-violet','sundew','saguaro','fencepost','old-man','blue-torch','organ-pipe','fairy-castle','bishops-cap','desert-rose','zebra-haworthia'];
const path=(d,fill,stroke='none',w=1)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const line=d=>path(d,'none','#6c8b5d',2.5);
function column(x,top,w,color,ribs=5,hairy=false){let v=`<path d="M${x-w/2} 318V${top+w/2}a${w/2} ${w/2} 0 0 1 ${w} 0V318Z" fill="${color}" stroke="#52795b" stroke-width="2"/>`;for(let i=1;i<ribs;i++){const xx=x-w/2+i*w/ribs;v+=path(`M${xx} ${top+14}V315`,'none',hairy?'#dce0c3':'#acc29a',hairy?3:1.6);for(let y=top+22;y<310;y+=18)v+=`<g fill="none" stroke="${hairy?'#efeddb':'#d6bf8a'}" stroke-width="${hairy?1.2:1}"><path d="M${xx-3} ${y-3}l6 6m-6 0l6-6"/>${hairy?`<path d="M${xx} ${y}q-12-15-6-26M${xx} ${y}q12-9 8-23"/>`:''}</g>`}return v}
function foliage(s,g,uid){if(!catalog.some(p=>p.id===s.id))return null;let b='',f='';const n=3+Math.floor(g/2);
 switch(s.id){
 case 'saguaro':b=path('M190 290H166Q132 290 132 252V188Q132 166 150 166Q168 166 168 188V244Q168 255 190 255M230 230H254Q285 230 285 198V145Q285 127 267 127Q249 127 249 145V184Q249 195 230 195','#73966a','#517c55',2)+column(210,64,47,'#789d70',6);for(const x of [143,153,260,270])b+=path(`M${x} 187V243`,'none','#b3c49a',1.4);break;
 case 'fencepost':b=column(163,130,37,'#6d926d',5)+column(210,68,44,'#688c68',5)+column(258,112,38,'#789a75',5);b+=path('M143 315V150M185 315V90M233 315V90M278 315V134','none','#e3dac3',3);break;
 case 'old-man':b=column(210,70,64,'#91aa88',8,true);for(let i=0;i<45;i++){const x=179+i*17%62,y=90+i*31%218;b+=path(`M${x} ${y}q-10 20 1 35`,'none','#f1eddb',1.4)}break;
 case 'blue-torch':b=column(169,200,37,'#7ba4a3',5)+column(247,169,39,'#719f9d',5)+column(209,66,49,'#6b9c9b',7);break;
 case 'organ-pipe':for(const [x,y,w]of [[139,204,25],[166,127,29],[194,83,31],[224,113,30],[253,156,28],[277,222,22]])b+=column(x,y,w,'#6f9166',5);break;
 case 'fairy-castle':for(const [x,y,w]of [[151,206,31],[180,142,34],[213,75,40],[248,165,32],[275,235,25]]){b+=path(`M${x-w/2} 318V${y+10}L${x} ${y}L${x+w/2} ${y+10}V318Z`,'#60885c','#406d4a',2);b+=path(`M${x} ${y}V318M${x-w/2+4} ${y+10}V318`,'none','#b0be89',2);for(let yy=y+20;yy<313;yy+=20)b+=path(`M${x-5} ${yy}h10M${x} ${yy-5}v10`,'none','#ddd2a8',1)}break;
 case 'bishops-cap':b=path('M210 192L256 222 268 278 241 312H178L151 278 163 222Z','#9aaf96','#62846a',2)+path('M210 192L189 268 178 312M210 192L231 268 241 312M210 192V312M151 278L189 268M268 278L231 268','none','#d8dcc4',3);for(let i=0;i<70;i++){const x=169+i*23%82,y=224+i*37%81;b+=`<circle cx="${x}" cy="${y}" r="1.3" fill="#e7e4ce"/>`}break;
 case 'bird-paradise':for(let i=0;i<n;i++){const x=135+i*28,y=150+(i%3)*24;b+=line(`M210 318Q${x} 240 ${x} ${y}`)+`<g transform="translate(${x} ${y}) rotate(${(i-2)*12})">${path('M0 48Q-31 31-25-15Q-18-55 0-48Q24-53 28-13Q33 30 0 48','#658c66','#466d4e',1)}${path('M0 43V-43','none','#b2c599',1.3)}</g>`}break;
 case 'medinilla':b=line('M210 320V205M210 277L163 245M210 269L258 232');for(const [x,y,a]of [[162,249,-55],[258,238,55],[206,210,0],[180,289,-70]])b+=`<g transform="translate(${x} ${y}) rotate(${a})">${path('M0 46Q-37 17-29-21Q-21-57 0-43Q28-56 32-19Q37 18 0 46','#517b5b','#426746',1)}${path('M0 42V-38M-5 32Q-27 7-20-23M5 32Q27 7 20-23','none','#a4b895',1.5)}</g>`;break;
 case 'guzmania':for(let i=0;i<9;i++){const a=(i-4)*14;b+=`<g transform="translate(210 319) rotate(${a})">${path(`M-9 0Q-30-67 0-${112+i%3*17}Q26-59 9 0Z`,i%2?'#688e59':'#497c56','#a2b483',1)}</g>`}break;
 case 'passionflower':b=path('M183 318V106M240 318V106M172 185H253M172 245H253','none','#b99d75',3)+line('M210 318Q150 244 220 175T211 109');for(let i=0;i<n;i++){const x=i%2?245:171,y=280-i*28;b+=line(`M210 ${y+5}L${x} ${y}`)+`<g transform="translate(${x} ${y}) rotate(${i%2?40:-40})">${path('M0 32L-9 10-27 5-12-6-18-26-5-17 0-42 8-17 24-26 17-5 31 4 10 12Z','#648e5c','#456f4b',1)}</g>`+path(`M${x} ${y-15}q24-17 20-3q-4 10-9 0`,'none','#8d9e67',1.2)}break;
 case 'african-violet':for(let i=0;i<8;i++)b+=`<g transform="translate(210 300) rotate(${i*45})">${path('M0 10Q-32 7-27-25Q-23-51 0-44Q26-53 30-24Q33 5 0 10','#648962','#9cae84',2)}${path('M0 6V-38M0-10L-18-25M0-10L18-25','none','#a6bb95',1)}</g>`;break;
 case 'orbifolia':for(let i=0;i<n;i++){const x=143+i*27,y=203+(i%2)*35;b+=line(`M210 318Q${x} 285 ${x} ${y}`)+`<g transform="translate(${x} ${y}) rotate(${(i-2)*15})"><ellipse rx="39" ry="55" fill="#779c77" stroke="#567b59"/>`;for(let k=-3;k<=3;k++)b+=path(`M0 ${k*12}Q-23 ${k*12-18}-35 ${k*10-2}M0 ${k*12}Q23 ${k*12-18}35 ${k*10-2}`,'none','#c3d1b2',5);b+=path('M0 50V-50','none','#d7dbc3',1.5)+'</g>'}break;
 case 'staghorn':b=path('M210 321Q139 315 156 266Q165 226 210 247Q260 220 269 270Q283 315 210 321','#b2aa79','#8b936c',1);for(let i=0;i<3;i++)b+=`<g transform="translate(210 304) rotate(${(i-1)*34})">${path('M-7 0Q-18-42-5-76L-26-98-35-126-25-137-9-111-6-144 4-163 16-166 10-112 29-139 40-130 26-99 13-78Q3-30 8 0Z','#81a188','#527d69',1)}</g>`;break;
 case 'sundew':for(let i=0;i<9;i++){const a=(i-4)*19;b+=`<g transform="translate(210 316) rotate(${a})">${path('M-3 0L-6-33Q-12-88 0-97Q13-88 6-33L3 0Z','#94ac70','#7f9b5b',1)}`;for(let k=0;k<8;k++)for(const sign of [-1,1])b+=`<path d="M${sign*6} ${-38-k*7}l${sign*7}-4" stroke="#bb7a83" stroke-width="1"/><circle cx="${sign*13}" cy="${-42-k*7}" r="1.8" fill="#d59da4"/>`;b+='</g>'}break;
 case 'desert-rose':b=path('M174 317Q173 292 193 271L191 208H207L215 255 228 222 246 197 254 207 232 251Q251 291 245 317Z','#b7aa8d','#8e8d71',2);for(const [x,y,a]of [[181,212,-55],[216,203,12],[255,193,42],[266,222,65],[223,239,12]])b+=`<g transform="translate(${x} ${y}) rotate(${a})">${path('M0 24Q-20 10-17-12Q0-41 18-11Q22 10 0 24','#63875a','#466c48',1)}</g>`;break;
 case 'ponytail':b=path('M172 316Q162 273 193 249L198 166H221L227 248Q260 276 247 316Z','#b6a181','#8c8066',2);for(let i=0;i<21;i++){const sign=i%2?1:-1,x=210+sign*(45+i%7*9),y=239+i%5*13;b+=path(`M210 169Q${x} ${90+i%4*10} ${x} ${y}Q${x-sign*9} ${y+25} ${x-sign*22} ${y+27}`,'none',i%3?'#69895a':'#98aa6d',2.5)}break;
 case 'zebra-haworthia':for(let i=0;i<9;i++)b+=`<g transform="translate(210 319) rotate(${(i-4)*15})">${path('M-9 0Q-14-41 0-108Q15-41 9 0Z','#426f54','#a8b58a',1)}${Array.from({length:6},(_,k)=>path(`M${-8+k*.7} ${-15-k*12}q8 5 ${16-k*1.4} 0`,'none','#e1e2cc',2.5)).join('')}</g>`;break;
 case 'panda':for(let i=0;i<n+1;i++){const x=210+(i%2?1:-1)*(23+i%3*15),y=290-Math.floor(i/2)*32;b+=line(`M210 320L${x} ${y}`)+`<g transform="translate(${x} ${y}) rotate(${i%2?33:-33})">${path('M0 28Q-24 16-19-16Q-15-47 0-41Q20-46 22-15Q26 16 0 28','#b6c2aa','#dde0c7',3)}${path('M-18-18Q-14-39 0-41Q15-42 21-18','none','#926e58',5)}<path d="M0 21V-31" stroke="#d8dfc8"/></g>`}break;
 case 'royal-agave':for(let ring=0;ring<2;ring++)for(let i=0;i<9;i++)b+=`<g transform="translate(210 283) scale(1 .7) rotate(${i*40+ring*20})">${path(`M-9 7L-${19-ring*6}-${36-ring*6}L0-${94-ring*30}L${19-ring*6}-${36-ring*6}L9 7Z`,ring?'#6f9265':'#507b58','#e0dfc5',2)}${path(`M0 2V-${87-ring*30}`,'none','#f0e8d0',1)}</g>`;break;
 }
 const scale=.55+g*.064;return {back:`<g transform="translate(210 315) scale(${scale}) translate(-210 -315)">${b}</g>`,front:f};
}
function flower(x,y,r,color,petals=8,center='#d4b568'){let out=`<g transform="translate(${x} ${y})">`;for(let i=0;i<petals;i++)out+=`<ellipse cy="${-r*.5}" rx="${r*.24}" ry="${r*.6}" transform="rotate(${i*360/petals})" fill="${color}" stroke="#a98b7d" stroke-width=".3"/>`;return out+`<circle r="${r*.22}" fill="${center}"/></g>`}
function blooms(s,g){if(g<7||!bloomSpecies.includes(s.id))return '';let v='';
 switch(s.id){
 case 'bird-paradise':v=line('M212 314Q247 236 247 164')+path('M221 169L292 153 271 177 241 179Z','#648b72')+path('M244 168L241 120 253 131 256 163 263 112 271 121 266 163 282 131 286 141 274 169Z','#dc9a58')+path('M248 170L270 143 274 159 265 177Z','#7f83aa');break;
 case 'medinilla':v=line('M235 242Q294 236 288 274')+path('M288 259Q252 254 258 285L286 278Q303 300 314 276Q308 256 288 259Z','#dc9fb2');for(let i=0;i<16;i++)v+=`<circle cx="${278+i%4*7}" cy="${282+Math.floor(i/4)*10}" r="${4-i/12}" fill="#bc7c9d"/>`;break;
 case 'guzmania':v=line('M210 315V195');for(let i=0;i<7;i++)v+=`<g transform="translate(210 ${220+i%3*8}) rotate(${(i-3)*30})">${path('M-5 0L-14-38 0-69 13-36 5 0Z',i%2?'#c77970':'#dd8d7a')}</g>`;for(let i=0;i<5;i++)v+=`<rect x="${202+i%3*7}" y="${181+i%2*9}" width="4" height="13" rx="2" fill="#f0dfa6"/>`;break;
 case 'passionflower':v=flower(245,174,36,'#eee8dc',10);for(let i=0;i<36;i++){const a=i*Math.PI/18;v+=path(`M${245+Math.cos(a)*12} ${174+Math.sin(a)*12}L${245+Math.cos(a)*29} ${174+Math.sin(a)*29}`,'none',i%2?'#7883a9':'#b1afcf',1.8)}v+=`<circle cx="245" cy="174" r="10" fill="#9dab75"/><path d="M235 174H255M245 164V184" stroke="#d9cc9b" stroke-width="3"/>`;break;
 case 'african-violet':for(const [x,y]of [[181,259],[210,247],[242,263]])v+=line(`M210 303L${x} ${y}`)+flower(x,y,17,'#9c88b7',5,'#edcf7c');break;
 case 'sundew':v=line('M213 315Q236 229 225 175Q215 149 196 162')+flower(197,162,13,'#dda2bd',5);for(let i=0;i<4;i++)v+=`<ellipse cx="${210+i*5}" cy="${161+i*6}" rx="4" ry="5" fill="#a8ae7a"/>`;break;
 case 'saguaro':v=flower(210,66,19,'#f3edda',12)+flower(266,133,14,'#f3edda',12);break;
 case 'fencepost':v=flower(230,103,12,'#d2a0aa',10);break;
 case 'old-man':v=flower(241,131,18,'#eeeadb',12);break;
 case 'blue-torch':v=path('M232 126Q267 112 281 137L262 146Z','#a7b48e')+flower(278,134,20,'#eee9db',12);break;
 case 'organ-pipe':v=flower(193,89,16,'#eee8d6',12)+flower(253,160,13,'#eee8d6',12);break;
 case 'fairy-castle':v=flower(245,179,21,'#eee9dc',14);break;
 case 'bishops-cap':v=flower(210,196,24,'#ebcb77',15);break;
 case 'desert-rose':for(const [x,y]of [[181,188],[235,174],[270,201]])v+=line(`M217 238L${x} ${y}`)+flower(x,y,18,'#d38ba8',5,'#f0d4b7');break;
 case 'zebra-haworthia':v=line('M213 315Q249 240 244 139');for(let i=0;i<6;i++)v+=`<path d="M244 ${152+i*18}l${i%2?12:-12} 4" stroke="#a0a887" stroke-width="1"/><g transform="translate(${i%2?256:232} ${156+i*18}) rotate(${i%2?-50:50})"><path d="M-2 0H2L4 13Q0 18-4 13Z" fill="#efeadb" stroke="#b9b5a3" stroke-width=".6"/></g>`;break;
 }
 return `<g class="plant-blooms">${v}</g>`;
}
const api={catalog,foliage,blooms,bloomSpecies};root.HabitatArt=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
