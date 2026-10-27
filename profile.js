(function(){
 const key='growing-thoughts-local-profile',get=id=>document.getElementById(id);let profile=null,busy=false,storageUnavailable=false;
 const supportsCrypto=!!window.crypto?.subtle;
 try{const saved=localStorage.getItem(key);if(saved){const parsed=JSON.parse(saved);if(!LocalProfile.valid(parsed))throw Error('Invalid profile');profile=parsed}}catch{storageUnavailable=true}
 function write(next){localStorage.setItem(key,JSON.stringify(next));profile=next}
 function appearance(){get('profileButton').textContent=profile?.name||'My profile';get('profileWelcome').textContent=profile?.name?profile.name+'’s growing corner.':'A little space to grow, just for you.';get('profileButton').hidden=!profile;get('profileNickname').value=profile?.name||''}
 let mode=profile?'login':'create';
 function prepare(next=mode){
  mode=next;const exists=!!profile,login=mode==='login',blocked=login?!exists:exists;
  get('profileCreateMode').setAttribute('aria-pressed',String(!login));get('profileLoginMode').setAttribute('aria-pressed',String(login));
  get('profileForm').hidden=blocked;get('profileModeNote').hidden=!blocked;get('profileSwitchMode').hidden=!blocked;
  get('profileModeNote').textContent=login?'No profile is saved in this browser or installed app yet. Create one here to get started.':'This browser already has a profile. Log in to keep your plants and thoughts together. You can change its name or password in My profile.';
  get('profileSwitchMode').textContent=login?'Create a profile here →':'Go to log in →';get('profileGateTitle').textContent=login&&exists?(profile.name?'Welcome back, '+profile.name+'.':'Welcome back.'):'Make this little corner yours.';
  get('profileGateIntro').textContent=login?'Open the profile saved on this browser. No email needed.':'No email. No phone number. Just a password for this browser.';
  get('profileNameField').hidden=login;get('profileConfirmField').hidden=login;get('profileConfirm').required=!login;get('profilePassword').autocomplete=login?'current-password':'new-password';get('profileSubmit').textContent=login?'Open my growing space →':'Create my local profile →';get('profileError').textContent='';get('profilePassword').value='';get('profileConfirm').value='';get('profilePassword').type='password';get('profileConfirm').type='password';get('profileShowPassword').checked=false;
  get('profileSubmit').disabled=blocked||storageUnavailable||!supportsCrypto;get('profileFallback').hidden=!(storageUnavailable||!supportsCrypto);
  if(storageUnavailable)get('profileError').textContent='This browser could not read profile storage. You can continue without a profile for now.';
  else if(!supportsCrypto)get('profileError').textContent='Password profiles need a secure browser connection. You can continue without a profile for now.';
 }
 function unlock(){appearance();document.body.classList.remove('profile-locked');get('profileGate').hidden=true;get('profilePassword').value='';get('profileConfirm').value='';get('profileButton').focus()}
 function lock(){document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close());document.body.classList.add('profile-locked');get('profileGate').hidden=false;prepare('login');get('profilePassword').focus();window.scrollTo({top:0,behavior:'instant'})}
 get('profileForm').onsubmit=async event=>{event.preventDefault();if(busy||(mode==='login'?!profile:!!profile))return;busy=true;get('profileSubmit').disabled=true;get('profileError').textContent='';const password=get('profilePassword').value;
  try{if(mode==='login'){if(!await LocalProfile.verify(profile,password)){get('profileError').textContent='That password doesn’t match. Try again.';get('profilePassword').focus();return}}
   else{if(password!==get('profileConfirm').value){get('profileError').textContent='The passwords don’t match yet.';get('profileConfirm').focus();return}const next=await LocalProfile.create(get('profileName').value,password);write(next)}unlock();
  }catch(error){get('profileError').textContent=error.message?.startsWith('Choose a password')?error.message:'Your profile could not be saved. Your plants and entries have not been changed.';get('profileFallback').hidden=false}
  finally{busy=false;get('profileSubmit').disabled=false}
 };
 get('profileCreateMode').onclick=()=>{if(!busy)prepare('create')};get('profileLoginMode').onclick=()=>{if(!busy)prepare('login')};get('profileSwitchMode').onclick=()=>{if(!busy)prepare(mode==='login'?'create':'login')};
 get('profileShowPassword').onchange=()=>{const type=get('profileShowPassword').checked?'text':'password';get('profilePassword').type=type;get('profileConfirm').type=type};
 get('profileFallback').onclick=unlock;
 get('profileButton').onclick=()=>{appearance();get('profileSettingsStatus').textContent='';get('profileCurrentPassword').value='';get('profileNewPassword').value='';get('profileRepeatPassword').value='';get('profileSettings').showModal()};
 get('profileClose').onclick=()=>get('profileSettings').close();get('profileLock').onclick=lock;
 get('profileNameForm').onsubmit=event=>{event.preventDefault();try{write({...profile,name:LocalProfile.name(get('profileNickname').value)});appearance();get('profileSettingsStatus').textContent='Your name is saved on this browser.'}catch{get('profileSettingsStatus').textContent='Your name could not be saved. Try again.'}};
 get('profilePasswordForm').onsubmit=async event=>{event.preventDefault();if(busy)return;busy=true;get('profileChangePassword').disabled=true;get('profileSettingsStatus').textContent='';try{
  if(!await LocalProfile.verify(profile,get('profileCurrentPassword').value)){get('profileSettingsStatus').textContent='Your current password doesn’t match.';return}
  const password=get('profileNewPassword').value;if(password!==get('profileRepeatPassword').value){get('profileSettingsStatus').textContent='The new passwords don’t match.';return}
  write(await LocalProfile.create(profile.name,password));get('profileSettingsStatus').textContent='Password updated for this browser.';for(const id of ['profileCurrentPassword','profileNewPassword','profileRepeatPassword'])get(id).value='';
 }catch(error){get('profileSettingsStatus').textContent=error.message?.startsWith('Choose a password')?error.message:'The password could not be updated.'}finally{busy=false;get('profileChangePassword').disabled=false}};
 prepare();appearance();
})();
