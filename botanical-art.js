/* Original stylized botanical silhouettes. Reference notes: BOTANICAL-ART-NOTES.md. */
(function(root){
const habitat=typeof module!=='undefined'?require('./habitat-art.js'):root.HabitatArt;
const leaf=(d,fill,extra='')=>`<path d="${d}" fill="${fill}" ${extra}/>`;
function foliage(s,g,uid){const extra=habitat.foliage(s,g,uid);if(extra)return extra;let back='',front='';const n=Math.min(8,2+g),dark='#426e4d',green='#70976a';
if(s.id==='orchid'){
 back=leaf('M210 318C184 277 122 271 116 290C126 317 173 324 210 318','#5d825c')+leaf('M211 319C238 273 299 279 306 297C278 320 244 326 211 319','#6c9267')+leaf('M209 319Q179 291 165 307Q179 327 209 319','#3e6d4c');
 back+='<path d="M211 318C201 266 205 201 240 174S306 150 330 170" stroke="#719461" stroke-width="4" fill="none"/><path d="M207 318Q190 287 190 258" stroke="#a3b995" stroke-width="3" fill="none"/>';
 const points=[[224,206,-15],[251,173,0],[293,160,10],[330,177,20]];for(let j=0;j<(g>=7?4:0);j++){const [x,y,r]=points[j];back+=`<g transform="translate(${x} ${y}) rotate(${r})" class="plant-blooms">${leaf('M0 2Q-17-15-6-29Q6-34 10-15L0 2','#eed0dd')}${leaf('M0 4Q-34 19-31 0Q-23-16 0-3Q23-17 31 0Q32 19 0 4','#dba8c5')}${leaf('M0 5Q-21 34-25 17Q-23 8-6 0M0 5Q21 34 25 17Q23 8 6 0','#ebc5d6')}${leaf('M0 2Q-12 5-10 16L-3 14Q0 28 5 14L12 17Q16 4 0 2','#a25d86')}<path d="M-4 4Q0 0 5 4" stroke="#f4dfa1" stroke-width="4" fill="none"/><path d="M-20-2L-6 2M20-2L7 2" stroke="#b7769d" stroke-width=".8"/></g>`}
 back+='<ellipse cx="340" cy="187" rx="7" ry="10" fill="#9fa47a" transform="rotate(-30 340 187)"/>';
}else if(s.id==='jewel'){
 for(let j=0;j<Math.min(n,7);j++){const side=j%2?1:-1,x=210+side*(24+j%3*14),y=296-Math.floor(j/2)*22;back+=`<path d="M210 318Q${x} 316 ${x} ${y}" stroke="#876971" stroke-width="3" fill="none"/><g transform="translate(${x} ${y}) rotate(${side*45})">${leaf('M0 29C-26 24-32-4-17-22Q0-40 17-22C32-4 26 24 0 29','#3e4c42','stroke="#67715a" stroke-width="1"')}<path d="M0 28V-29M0 12Q-13 4-20-8M0 0Q-13-8-13-22M0 12Q13 4 20-8M0 0Q13-8 13-22" stroke="#d3aa9c" stroke-width="1.3" fill="none"/></g>`}if(g>=7){back+='<path d="M211 305Q221 250 211 194" stroke="#928e6b" stroke-width="2" fill="none"/>';for(let j=0;j<5;j++)back+=`<g transform="translate(${211+j%2*8} ${199+j*12})" class="plant-blooms"><ellipse rx="5" ry="3" fill="#f7efdb"/><ellipse ry="5" rx="3" fill="#faf3e4"/><circle r="1.5" fill="#d9b477"/></g>`}
}else if(s.id==='maidenhair'){
 for(let j=0;j<Math.min(n,7);j++){const side=j%2?1:-1;back+=`<g transform="translate(210 319) rotate(${side*(8+j*7)})"><path d="M0 0Q-9-83 0-155" stroke="#4e5545" stroke-width="1.4" fill="none"/>`;for(let k=1;k<7;k++){const y=-k*22,w=31*(1-k/8);back+=`<path d="M-3 ${y+10}L${-w} ${y-6}M-3 ${y+10}L${w} ${y-8}" stroke="#4e5545" stroke-width="1"/>`;for(const a of [-1,1])back+=`<g transform="translate(${a*w} ${y-8}) rotate(${a*25})">${leaf('M0 9L-14-1Q-12-14 0-14Q12-14 14-1Z',j%2?'#86ad72':'#6f9b61')}<path d="M0 9L-5-6M0 9V-8M0 9L6-6" stroke="#acc691" stroke-width=".5" fill="none"/></g>`}back+='</g>'}
}else if(s.id==='begonia'){
 back='<path d="M202 320L211 170M214 320L246 202" stroke="#a16f65" stroke-width="4" fill="none"/>';for(let j=0;j<Math.min(n,6);j++){const side=j%2?1:-1,x=211+side*(34+j%2*6),y=284-j*18;back+=`<path d="M210 ${y+22}L${x} ${y}" stroke="#aa7869" stroke-width="2"/><g transform="translate(${x} ${y}) rotate(${side*30})">${leaf('M0 46C-18 26-43-11-26-34Q-12-49 0-24Q37-42 35-9C34 15 14 38 0 46','#476c54','stroke="#71845f" stroke-width="1"')}<path d="M0 40Q-5 1 0-25" stroke="#a2b68b" fill="none" stroke-width="1"/>`;for(const [cx,cy]of [[-14,-20],[13,-15],[-13,1],[18,4],[-5,18],[7,28]])back+=`<ellipse cx="${cx}" cy="${cy}" rx="3.2" ry="4" fill="#e9e8d7"/>`;back+='</g>'}
}else if(s.id==='pitcher'){
 for(let j=0;j<Math.min(n,6);j++){const side=j%2?1:-1,x=210+side*(47+j%3*18),y=248-j%3*33;back+=`<path d="M210 321Q${x} ${y+10} ${x} ${y}" fill="none" stroke="#71935e" stroke-width="3"/><g transform="translate(${x} ${y}) rotate(${side*45})">${leaf('M0 20Q-20-16 0-65Q22-16 0 20','#739b63')}<path d="M0 20V-57" stroke="#a1b783" fill="none" stroke-width="1"/></g>`;const px=x+side*25,py=y+35;front+=`<path d="M${x+side*40} ${y-40}Q${px+side*27} ${y-15} ${px} ${py}" stroke="#83a16a" stroke-width="1.8" fill="none"/><g transform="translate(${px} ${py})">${leaf('M-11 0C-9 19-22 38-8 48Q3 54 12 44C24 32 7 20 10 0Z','#ae8d83','stroke="#6c8b5d" stroke-width="1.5"')}<path d="M-6 7L-11 39M0 7L-5 40" stroke="#d5b395" stroke-width="1"/><ellipse cy="0" rx="13" ry="5" fill="#915d6c" stroke="#bd8584" stroke-width="3"/><ellipse cx="2" cy="-12" rx="12" ry="7" fill="#99ac78" transform="rotate(-18 2 -12)"/></g>`}
}else if(s.id==='flytrap'){
 for(let j=0;j<Math.min(n,7);j++){const side=j%2?1:-1,x=210+side*(28+j%3*21),y=286-j%3*28;back+=leaf(`M210 323Q${x-13} ${y+20} ${x} ${y}Q${x+12} ${y+28} 210 323`,'#709659');back+=`<g transform="translate(${x} ${y}) rotate(${side*22})"><path d="M-27 0Q-20-31 0-6Q20-31 27 0Q15 26 0 9Q-15 26-27 0Z" fill="#9eaf70" stroke="#6d8b52" stroke-width="2"/><path d="M-23 0Q-16-21 0-3Q16-21 23 0Q12 17 0 7Q-12 17-23 0Z" fill="#b68480"/><path d="M0-4V9" stroke="#788d50" stroke-width="2"/>`;for(let k=0;k<7;k++){let a=Math.PI+k*Math.PI/6,xx=Math.cos(a)*25,yy=Math.sin(a)*17;back+=`<path d="M${xx} ${yy}l${Math.cos(a)*6} ${Math.sin(a)*6}" stroke="#82984f" stroke-width="1.5"/>`}back+='</g>'}
}else if(s.id==='barrel'){
 const r=43+g*3,cy=315-r;back=`<defs><radialGradient id="${uid}-c"><stop stop-color="#a9b174"/><stop offset=".6" stop-color="#78935d"/><stop offset="1" stop-color="#4e7655"/></radialGradient></defs><ellipse cx="210" cy="${cy}" rx="${r}" ry="${r*.98}" fill="url(#${uid}-c)" stroke="#c9b96e" stroke-width="2"/>`;
 for(let j=-3;j<=3;j++){const t=j/3.6;back+=`<path d="M${210+t*r*.4} ${cy-r*.9}Q${210+t*r*1.45} ${cy} ${210+t*r*.4} ${cy+r*.9}" stroke="#bbc282" stroke-width="2.5" fill="none"/>`;for(let k=0;k<6;k++){const y=cy-r*.72+k*r*.28,x=210+t*r*Math.sqrt(Math.max(.1,1-((y-cy)/r)**2));back+=`<g transform="translate(${x} ${y})"><circle r="2.5" fill="#d3bb77"/><path d="M0 0l-4-5M0 0l4-5M0 0l0 6M0 0l-6 1M0 0l6 1" stroke="#ead6a0" stroke-width="1"/></g>`}}back+=`<ellipse cx="210" cy="${cy-r*.72}" rx="15" ry="7" fill="#d9c483" opacity=".9"/>`;
}else if(s.id==='prickly'){
 const pads=[[210,285,0],[180,234,-30],[241,229,25],[155,180,-24],[255,174,20],[183,128,-5],[287,129,38]];for(let j=0;j<Math.min(n,pads.length);j++){const [x,y,a]=pads[j];back+=`<g transform="translate(${x} ${y}) rotate(${a})"><ellipse rx="25" ry="39" fill="${j%2?'#88a578':'#6e956c'}" stroke="#537d5c" stroke-width="2"/>`;for(const [px,py]of [[-11,-18],[6,-26],[14,-5],[-6,3],[6,19],[-10,24]])back+=`<circle cx="${px}" cy="${py}" r="2" fill="#d6c38b"/><path d="M${px-3} ${py}h6M${px} ${py-3}v6" stroke="#dfd0a0" stroke-width=".8"/>`;back+='</g>'}
}else if(s.id==='echeveria'){
 back='<g transform="translate(210 279) scale(1 .65)">';for(let ring=0;ring<3;ring++){const count=ring===0?8:ring===1?7:5,L=(75-ring*20)*(0.78+g*.035),w=27-ring*5;for(let j=0;j<count;j++){const a=j*360/count+ring*23;back+=`<g transform="rotate(${a})">${leaf(`M0 14C-${w} 6 -${w} -${L*.7} 0 -${L}C${w} -${L*.7} ${w} 6 0 14`,['#91aba1','#a5bbae','#bed0b8'][ring],'stroke="#d1b5bb" stroke-width="1.8"')}<path d="M0 5V-${L*.8}" stroke="#d8dfcb" stroke-opacity=".6" fill="none"/></g>`}}back+='<circle r="7" fill="#baceb4"/></g>';
}else if(s.id==='lithops'){
 const bodies=[[183,307,0],[235,306,1],[209,291,2]];for(let j=0;j<Math.min(1+Math.floor(g/3),3);j++){const [x,y,c]=bodies[j],fill=['#b8ac92','#c1a59c','#adae95'][c];back+=`<g transform="translate(${x} ${y})">${leaf('M-24-3Q-23 13-10 15Q0 17 0 5Q0 17 12 15Q25 13 25-3Z',fill,'stroke="#8b8c75" stroke-width="1"')}<ellipse cx="-11" cy="-4" rx="12" ry="8" fill="${fill}" stroke="#8b8c75"/><ellipse cx="12" cy="-4" rx="12" ry="8" fill="${fill}" stroke="#8b8c75"/><path d="M1-10V9" stroke="#756f61" stroke-width="2"/>`;for(const [px,py]of [[-14,-11],[-9,-5],[-16,1],[10,-10],[16,-4],[9,3]])back+=`<path d="M${px-2} ${py}q3-4 4 0q-1 3-4 0" stroke="#d9cbb0" stroke-width="1.4" fill="none"/>`;back+='</g>'}
}else if(s.id==='aloe'){
 for(let j=0;j<n;j++){const angle=(j-(n-1)/2)*14,L=100+(j%3)*20;back+=`<g transform="translate(210 321) rotate(${angle})">${leaf(`M-11 0Q-21-${L*.5} 0-${L}Q22-${L*.5} 11 0Z`,j%2?'#8ca58a':'#678f7b','stroke="#b9c69a" stroke-width="2"')}<path d="M0-10Q4-${L*.5} 0-${L-8}" stroke="#a5bca0" fill="none"/>`;for(let k=1;k<6;k++){const y=-k*L/7,w=12*(1-k/8);back+=`<path d="M${-w} ${y}l-4-4 1 7M${w} ${y}l4-4-1 7" fill="#d8d9b6"/>`}back+='</g>'}
}else if(s.id==='pearls'||s.id==='rattail'){
 const pearls=s.id==='pearls';for(let j=0;j<Math.min(n,7);j++){const side=j%2?1:-1,x=210+side*(45+j%3*9),len=45+g*6+j%3*9;back+=`<path d="M210 310Q${x} 278 ${x} 309" stroke="${pearls?'#7a9a69':'#7c9b6f'}" stroke-width="${pearls?2:12}" stroke-linecap="round" fill="none"/>`;front+=`<path d="M${x} 309C${x+side*22} 330 ${x+side*19} ${310+len*.75} ${x+side*7} ${310+len}" stroke="${pearls?'#759468':'#78986e'}" stroke-width="${pearls?2:12}" stroke-linecap="round" fill="none"/>`;for(let k=0;k<len/10;k++){const yy=317+k*10,xx=x+side*(9+Math.sin(k/3)*10);front+=pearls?`<circle cx="${xx}" cy="${yy}" r="6" fill="#94b184" stroke="#658b60" stroke-width="1"/><path d="M${xx-1} ${yy-4}l2 5" stroke="#bfd0a4" stroke-width="1"/>`:`<g transform="translate(${xx} ${yy})"><path d="M-6-3L-10-6M6-3L10-6M-7 2L-10 5M7 2L10 5" stroke="#ddcda3" stroke-width=".9"/><path d="M-2-5V5" stroke="#b2bd8b" stroke-width="1"/></g>`}}
if(!pearls&&g>=7)front+=`<g transform="translate(132 380) rotate(-25)" class="plant-blooms">${leaf('M0 5Q-25 1-19-12L-5-5Q-11-29 1-25L7-6Q26-20 25-7L12 5Q28 15 12 19L3 10Q-4 26-12 18Z','#bc7594')}<path d="M-9 3L8 8" stroke="#f2c9bb" stroke-width="2"/><circle cx="5" cy="7" r="3" fill="#f2d499"/></g>`;
}else if(s.id==='hoya'){
 for(let j=0;j<Math.min(n,7);j++){const side=j%2?1:-1,x=210+side*(28+j%3*12),y=296-j*16;back+=`<path d="M210 320Q220 ${y+20} ${x} ${y}" stroke="#8b8070" stroke-width="2.5" fill="none"/><g transform="translate(${x} ${y}) rotate(${side*44})">${leaf('M0 28Q-24 18-19-12Q-14-36 0-32Q17-36 22-12Q25 17 0 28','#e8ddc5','stroke="#7c8c68" stroke-width="1"')}${leaf('M-4 23Q-17 9-11-12L-5-27Q11-28 13-9Q10 14-4 23','#6f936a')}<path d="M0 23V-28" stroke="#a3b68b" stroke-width=".8"/></g>`}
}else if(s.form==='lobed'){
 for(let j=0;j<n;j++){const side=j%2?1:-1,x=210+side*(36+j%3*13),y=287-j*17;const florida=s.id==='florida';back+=`<path d="M210 321Q205 ${y+20} ${x} ${y}" stroke="#8d805e" stroke-width="2.5" fill="none"/><g transform="translate(${x} ${y}) rotate(${side*30})">`;const d=florida?'M0 45Q-6 23-11 12L-28 12-32 0-18-7-28-24-15-30-5-14 0-50 7-14 23-30 31-20 18-5 34 2 28 13 11 13Q5 31 0 45Z':'M0 49L-8 34-18 28-12 17-28 9-19 0-31-12-20-15-26-28-13-27-14-39-5-33 0-53 8-34 18-39 15-24 28-27 22-13 34-8 23 2 29 14 15 18 18 30 8 32Z';back+=leaf(d,'#5f8355','stroke="#416e43" stroke-width="1"')+leaf(d,s.variegation||'#b7c186',`opacity=".8" clip-path="url(#${uid}-l${j})"`);back+=`<defs><clipPath id="${uid}-l${j}"><path d="M-45-60H-1L7-25-3-8 8 22 1 60H-45Z"/></clipPath></defs><path d="M0 45V-47" stroke="#bad099" stroke-width="1"/></g>`}
}else if(['burle','warocq','spiritus'].includes(s.id)){
 if(s.id==='warocq'){for(let j=0;j<Math.min(3+Math.floor(g/2),5);j++){const x=155+j*29,y=155+(j%2)*28;back+=`<path d="M210 318Q${x} ${y-20} ${x} ${y}" stroke="#788c60" stroke-width="2.5" fill="none"/><g transform="translate(${x} ${y}) rotate(${(j-2)*6})">${leaf('M0-18Q-29 12-21 72Q-10 124 0 150Q12 125 22 72Q30 13 0-18','#335d48','stroke="#71866c" stroke-width="1"')}<path d="M0-14V143M0 15L-21 32M0 40L-19 59M0 70L-12 93M0 15L21 32M0 40L19 59M0 70L12 93" stroke="#bccaa3" stroke-width="1" fill="none"/></g>`}}
 else for(let j=0;j<Math.min(n,7);j++){let side=j%2?1:-1,x=210+side*(35+j%3*12),y=287-j*16;back+=`<path d="M210 320L${x} ${y}" stroke="#7b8c5d" stroke-width="2.5"/><g transform="translate(${x} ${y}) rotate(${side*24})">`;const d=s.id==='burle'?'M0 38L-7 21-21 12-16 5-29-6-20-10-27-28-16-25-19-46-10-41-10-64-3-57 0-82 6-61 12-65 10-42 21-47 16-26 29-31 22-10 30-5 17 7 23 13 9 24Z':'M0 40Q-21 5-14-48L0-88Q17-56 18-25Q23 11 0 40Z';back+=leaf(d,s.id==='burle'?'#4e7954':'#496f4e','stroke="#315c42" stroke-width="1"')+'<path d="M0 32V-73" stroke="#a7be85" stroke-width="1"/></g>'}
}else if(s.form==='pothos'||s.id==='cebu'){
 for(let j=0;j<Math.min(n,8);j++){const side=j%2?1:-1,x=210+side*(32+j%3*13),y=290-j*17;back+=`<path d="M210 321Q${210+side*15} ${y+4} ${x} ${y}" stroke="#718b5f" stroke-width="2.5" fill="none"/><g transform="translate(${x} ${y}) rotate(${side*37})">`;const d=s.id==='cebu'?'M0 44Q-24 13-17-28Q-9-48 0-35Q11-50 20-29Q28 5 0 44Z':'M0 36C-13 18-38-1-30-23Q-18-43 0-24Q21-45 33-21C42 0 14 20 0 36Z';const fill=s.id==='neon'?'#b8cc61':s.id==='cebu'?'#729c99':'#5c8758';back+=leaf(d,fill,'stroke="#54754f" stroke-width="1"');
 if(!['neon','cebu'].includes(s.id)){let white=['snow','marble','manjula'].includes(s.id)?'#eeefdc':s.id==='jessenia'?'#a8bf6a':'#cec97a';back+=`<defs><clipPath id="${uid}-p${j}"><path d="${d}"/></clipPath></defs><g clip-path="url(#${uid}-p${j})" fill="${white}">`;if(s.id==='snow'||s.id==='manjula')back+=leaf('M-32-40H32V40H-4L4 23-6 2 3-20-14-8Z',white);for(let k=0;k<14;k++)back+=`<path d="M${-24+(k*13+j*3)%48} ${-26+(k*17)%55}q8-9 ${4+k%5} ${3+k%3}l-5 7Z"/>`;back+='</g>'}back+='<path d="M0 31Q-3 0 0-29M0 11L-18-7M0 1L21-14" stroke="#c3d3a1" stroke-width=".8" fill="none" opacity=".7"/></g>'}
}else if(s.form==='holes'){
 for(let j=0;j<n;j++){const side=j%2?1:-1,x=210+side*(35+j%3*12),y=287-j*17;back+=`<path d="M210 321L${x} ${y}" stroke="#6a8b5c" stroke-width="2.5"/><g transform="translate(${x} ${y}) rotate(${side*30})">`;const d='M0 40Q-30 17-25-13Q-21-45 0-39Q27-46 29-12Q31 18 0 40Z M-11-24a5 9 0 1 0 0 18a5 9 0 1 0 0-18Z M11-19a5 9 0 1 0 0 18a5 9 0 1 0 0-18Z M-9 3a5 8 0 1 0 0 16a5 8 0 1 0 0-16Z M12 7a4 7 0 1 0 0 14a4 7 0 1 0 0-14Z';back+=leaf(d,'#528159','fill-rule="evenodd" stroke="#365f42" stroke-width="1"');if(s.variegation)back+=leaf(d,s.variegation,'fill-rule="evenodd" opacity=".6"');back+='<path d="M0 34V-34" stroke="#a8c286" stroke-width="1"/></g>'}
}else return null;
return {back,front};
}

// A deliberately curated milestone list: no invented flowers on ferns or foliage aroids.
const bloomSpecies=['orchid','jewel','begonia','hoya','flytrap','barrel','prickly','echeveria','lithops','aloe','pearls','rattail','snake','moonshine',...habitat.bloomSpecies];
const canBloom=id=>bloomSpecies.includes(id);
function blossom(x,y,r,color,petals=5,center='#d3aa58',slender=false){
 let out=`<g transform="translate(${x} ${y})">`;
 for(let i=0;i<petals;i++)out+=`<ellipse cx="0" cy="${-r*.55}" rx="${r*(slender?.13:.36)}" ry="${r*.6}" fill="${color}" stroke="#957c6a" stroke-width=".35" transform="rotate(${i*360/petals})"/>`;
 return out+`<circle r="${r*.23}" fill="${center}"/></g>`;
}
function blooms(s,g){
 const extra=habitat.blooms(s,g);if(extra)return extra;
 if(g<7||!canBloom(s.id)||['orchid','jewel','rattail'].includes(s.id))return '';
 let out='';const stem=d=>`<path d="${d}" stroke="#78915f" stroke-width="2.5" fill="none"/>`;
 if(s.id==='hoya'){
  out+=stem('M210 292Q271 265 277 227');
  for(let i=0;i<9;i++){const a=i*Math.PI*2/9,x=277+Math.cos(a)*22,y=231+Math.sin(a)*17;
   out+=`<path d="M277 237L${x} ${y}" stroke="#ad8e83" stroke-width="1"/><g transform="translate(${x} ${y})"><path d="M0-10L3-3 10-3 5 2 7 9 0 5-7 9-5 2-10-3-3-3Z" fill="#efcfda" stroke="#b78b9e" stroke-width=".6"/><path d="M0-5L2-1 5-1 3 2 3 5 0 3-3 5-3 2-5-1-2-1Z" fill="#a9637b"/><circle r="1.5" fill="#f5e6bf"/></g>`;
  }
 }else if(s.id==='begonia'){
  out+=stem('M232 254Q280 202 307 217M279 221L285 250');
  for(const [x,y]of [[307,220],[286,254],[325,240]])out+=`<g transform="translate(${x} ${y})"><ellipse cx="-8" rx="12" ry="15" fill="#f4e9dd"/><ellipse cx="8" rx="12" ry="15" fill="#fff5e5"/><ellipse cy="-9" rx="6" ry="10" fill="#ebd8d0"/><ellipse cy="9" rx="6" ry="10" fill="#ebd8d0"/><circle r="4" fill="#ddbc63"/></g>`;
 }else if(s.id==='flytrap'){
  out+=stem('M208 315Q193 233 208 146M207 160L183 148M207 158L231 145');
  for(const [x,y]of [[208,139],[181,142],[234,139]])out+=blossom(x,y,12,'#fff4df',5);
 }else if(s.id==='barrel'){
  for(const [x,y]of [[184,207],[207,194],[232,207]])out+=blossom(x,y,17,'#f0ce62',12,'#c29c4d',true);
 }else if(s.id==='prickly'){
  out+=blossom(183,88,19,'#efcd79',12,'#d79a60',true)+blossom(284,98,16,'#efcd79',12,'#d79a60',true);
 }else if(s.id==='lithops'){
  out+=stem('M210 285V264')+blossom(210,258,23,'#f2d67f',20,'#fff0cf',true);
 }else if(s.id==='echeveria'){
  out+=stem('M217 279Q258 251 269 198Q278 157 310 174');
  for(let i=0;i<4;i++){const x=282+i*13,y=176+i*10;out+=stem(`M${x-5} ${y-4}L${x} ${y}`)+`<g transform="translate(${x} ${y}) rotate(-15)"><path d="M-6 0Q0-4 6 0L9 17Q0 23-9 17Z" fill="#d68d8b"/><path d="M-9 17L-5 22 0 18 5 22 9 17" fill="#efd489"/></g>`}
 }else if(s.id==='aloe'){
  out+=stem('M210 315Q215 226 211 111');
  for(let i=0;i<14;i++){const side=i%2?1:-1,x=211+side*(5+i*.4),y=115+i*7;out+=`<path d="M211 ${y-3}L${x} ${y}" stroke="#8d9b63" stroke-width="1.5"/><g transform="translate(${x} ${y}) rotate(${-side*22})"><rect x="-3" width="6" height="17" rx="3" fill="#e6c46d"/><ellipse cy="17" rx="3" ry="1.8" fill="#eddfa4"/></g>`}
 }else if(s.id==='pearls'){
  out+=stem('M178 305Q166 279 164 265M236 305Q250 286 256 272');
  for(const [x,y]of [[164,262],[256,269]]){out+=blossom(x,y,10,'#f6f0dc',16,'#d2b778',true);for(let i=0;i<6;i++)out+=`<path d="M${x-6+i*2} ${y-3}q-4-13 1-14q5 0 2 5" stroke="#b98894" stroke-width=".8" fill="none"/>`}
 }else if(['snake','moonshine'].includes(s.id)){
  out+=stem('M212 315Q231 237 226 166');
  for(let i=0;i<7;i++){const side=i%2?1:-1,x=227+side*12,y=178+i*16;out+=stem(`M226 ${y+5}L${x} ${y}`)+blossom(x,y,10,'#edead1',6,'#aabd91',true)}
 }
 return `<g class="plant-blooms">${out}</g>`;
}
const api={foliage,blooms,canBloom,bloomSpecies};if(typeof module!=='undefined')module.exports=api;root.BotanicalArt=api;
})(typeof window==='undefined'?globalThis:window);
