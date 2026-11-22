'use strict';

const pagesStoreKey = 'unav-sports360-pages-v1';
const pagesCopy = data => JSON.parse(JSON.stringify(data));
const pagesRequire = (condition, message) => { if (!condition) throw Error(message); };
const pagesId = () => crypto.randomUUID();
const pagesTime = () => new Date().toISOString();

function pagesInitialState() {
  const data = pagesCopy(pagesSeed);
  const shift = Date.parse(day()+'T00:00:00Z') - Date.parse('2026-11-09T00:00:00Z');
  const dateKeys = new Set(['date','starts','ends','created_at','time','attended_at','validated_at','refunded_at','read_at']);
  function shiftDates(node) {
    if (!node || typeof node !== 'object') return;
    Object.entries(node).forEach(([key,value]) => {
      if (dateKeys.has(key) && typeof value === 'string' && /^\d{4}-\d\d-\d\d(?:T|$)/.test(value)) {
        const iso = new Date(Date.parse(value)+shift).toISOString();
        node[key] = value.length === 10 ? iso.slice(0,10) : iso;
      } else shiftDates(value);
    });
  }
  shiftDates(data);
  data.demo_day=day();
  data.revision=Date.now();
  data.budget={rate:45,monthly_infra:120,annual_support_hours:78,annual_training_hours:24,annual_maintenance_hours:6,development_hours:[320,160,120,120,80]};
  data.tournaments.find(t=>t.id==='padel-demo').starts=day(10);
  data.tournaments.find(t=>t.id==='padel-demo').ends=day(11);
  data.ambassadors=[{id:'host-demo',user:3,alias:'Embajador de pádel Demo',sport:'Pádel',bio:'Acompañamiento voluntario para las primeras sesiones.',status:'Aprobada',video:''}];
  const slot={date:day(2),time:'12:00'};
  data.participation_requests=[1,2].map((user,i)=>({
    id:'intent-demo-'+user,user,sport:'Pádel',level:'Principiante',
    barrier:i===0?'Sin grupo':'Estoy empezando',source:'App',slots:[slot],status:'Abierta',created_at:pagesTime()
  }));
  const closed={id:'historic-session-demo',key:'historic',name:'Bienvenida al tenis · ejemplo',sport:'Tenis',
    level:'Principiante',date:day(-38),time:'17:00',facility:2,host:'Acogida Demo',capacity:2,minimum:2,
    request_ids:[],status:'Cerrada',estimated_cost:20,actual_cost:18};
  data.participation_sessions=[closed];
  data.participation_invitations=[{id:'historical-invitation-demo',session:closed.id,user:1,status:'Aceptada',attendance:'Asistió'}];
  data.reservations.unshift({id:'historical-visit-demo',user:1,facility:2,date:day(-28),time:'17:00',status:'Asistió'});
  return data;
}

let pagesMemory;
function pagesRead() {
  try {
    const saved=localStorage.getItem(pagesStoreKey);
    if(saved)return JSON.parse(saved);
  } catch (_) {}
  if(!pagesMemory)pagesWrite(pagesInitialState());
  return pagesCopy(pagesMemory);
}

function pagesWrite(data) {
  pagesMemory=pagesCopy(data);
  try { localStorage.setItem(pagesStoreKey,JSON.stringify(data)); } catch (_) {}
}

function experienceGroups(data) {
  const groups=new Map();
  for(const request of data.participation_requests.filter(r=>r.status==='Abierta')){
    for(const slot of request.slots.filter(slot=>pagesSlotFits(data,request.user,slot))){
      const key=[request.sport,request.level,slot.date,slot.time].join('|');
      if(data.participation_sessions.some(t=>t.key===key&&t.status!=='Cancelada'))continue;
      if(!groups.has(key))groups.set(key,{key, sport:request.sport,level:request.level,...slot, requests:[]});
      const group=groups.get(key);
      if(!group.requests.some(r=>r.user===request.user))group.requests.push(request);
    }
  }
  return [...groups.values()].map(({requests,...group})=>{
    const barriers={};
    requests.forEach(r=>barriers[r.barrier]=(barriers[r.barrier]||0)+1);
    const facilities=data.facilities.filter(f=>f.sport===group.sport&&!f.blocked&&!slotTaken(data,f.id,group.date,group.time)).map(f=>f.id);
    return {...group,count:requests.length,request_ids:requests.map(r=>r.id),barriers,facilities};
  }).sort((a,b)=>b.count-a.count||(a.date+a.time).localeCompare(b.date+b.time));
}

function pagesSlotFits(data,user,slot) {
  if(!future(slot))return false;
  const commitments = [
    ...data.reservations.filter(r=>r.user===user&&r.status==='Confirmada'),
    ...data.matches.filter(m=>m.participants.includes(user)),
    ...data.school_enrollments.filter(e=>e.user===user&&e.status==='Inscrito'),
    ...data.activities.filter(a=>data.enrollments.some(e=>e.activity===a.id&&e.user===user&&e.status==='Inscrito')),
    ...data.participation_sessions.filter(t=>t.status==='Publicada'&&data.participation_invitations.some(i=>i.session===t.id&&i.user===user&&i.status==='Aceptada'))
  ];
  return commitments.every(record=>Math.abs(stamp(record)-stamp(slot))>=3600000);
}

function slotTaken(data, facilityId, date, time) {
  const matches=r=>r.facility===facilityId&&r.date===date&&r.time===time;
  return data.reservations.some(r=>live(r)&&matches(r))||
    data.resource_blocks.some(matches)||
    data.participation_sessions.some(p=>['Publicada','Cerrada'].includes(p.status)&&matches(p));
}

function pagesProjection(data, access) {
  const {user,role}=access;
  const account=data.users.find(u=>u.id===user);
  const external=account.account_type==='external';
  const ownRows=items=>items.filter(x=>x.user===user);
  const nextWeekday=group=>{
    for(let i=0;i<=7;i++){
      const date=day(i);
      if(mondayDate(date)===group.weekday&&future({date,time:group.time}))return date;
    }
  };
  data.session=access;
  data.account={account_type:account.account_type,credential_year:account.credential_year};
  data.booking_policy={...data.config,window_days:data.config.window_days+Number(account.credential_year==='first'),first_year:account.credential_year==='first',restricted:false};
  data.resource_blocks.push(...data.participation_sessions.filter(p=>['Publicada','Cerrada'].includes(p.status)));
  data.school_next_dates=Object.fromEntries(data.schools.map(g=>[g.id,nextWeekday(g)]));
  data.my_level_feedback=[];
  data.review_opportunities=[];
  data.my_match_partners=data.matches.flatMap(m=>m.participants.includes(user)?m.participants.filter(id=>id!==user&&data.match_attendance.some(a=>a.match===m.id&&a.user===id)&&data.match_attendance.some(a=>a.match===m.id&&a.user===user)).map(id=>({match:m.id,user:id})):[]);
  data.begun_users=[...new Set(data.reservations.filter(r=>r.status==='Asistió').map(r=>r.user).concat(data.participation_invitations.filter(i=>i.attendance==='Asistió').map(i=>i.user)))];
  const attendees=data.participation_invitations.filter(i=>i.attendance==='Asistió');
  const closed=data.participation_sessions.filter(t=>t.status==='Cerrada');
  const costs=closed.reduce((sum,t)=>sum+t.actual_cost,0);
  const usersWithIntent=new Set(data.participation_requests.map(r=>r.user));
  // The historical fixture has a known visit ten days after its first session.
  const mature=attendees.filter(i=>closed.some(t=>t.id===i.session&&stamp(t)<=new Date(Date.now()-30*86400000)));
  const repeated=mature.filter(i=>{
    const start=stamp(closed.find(t=>t.id===i.session));
    return data.reservations.some(r=>r.user===i.user&&r.status==='Asistió'&&stamp(r)>start&&stamp(r)-start<=30*86400000);
  });
  data.participation_metrics={
    requests:data.participation_requests.length, requesters:usersWithIntent.size,
    open:data.participation_requests.filter(r=>r.status==='Abierta').length,
    sessions:data.participation_sessions.filter(t=>['Publicada','Cerrada'].includes(t.status)).length,
    invitations:data.participation_invitations.length,
    accepted:data.participation_invitations.filter(i=>i.status==='Aceptada').length,
    attendance:attendees.length,unique:new Set(attendees.map(i=>i.user)).size,
    first_recorded:attendees.filter(i=>!data.reservations.some(r=>r.status==='Asistió'&&r.user===i.user&&stamp(r)<stamp(closed.find(t=>t.id===i.session)))).length,
    mature_30:mature.length,repeated_30:repeated.length,actual_cost:costs,closed_sessions:closed.length,
    cost_per_participant:attendees.length?costs/new Set(attendees.map(i=>i.user)).size:null
  };
  data.participation_opportunities=experienceGroups(data);
  data.strategy_evidence=Object.fromEntries(sports.map(sport=>{
    const rs=data.participation_requests.filter(r=>r.sport===sport&&['Abierta','Con propuesta'].includes(r.status));
    const ids=new Set(rs.map(r=>r.user));
    const notStarted=[...ids].filter(id=>!data.begun_users.includes(id));
    const slotCounts=new Map();
    rs.forEach(r=>r.slots.forEach(slot=>{
      const key=slot.date+' '+slot.time;
      if(!slotCounts.has(key))slotCounts.set(key,{...slot,ids:new Set()});
      slotCounts.get(key).ids.add(r.user);
    }));
    return [sport,{interested:data.users.filter(u=>u.practiced.includes(sport)||u.interested.includes(sport)).length,
      requesters:ids.size,not_started:notStarted.length,
      waiting:data.enrollments.filter(e=>e.status==='En espera'&&data.activities.some(a=>a.id===e.activity&&a.sport===sport)).length,
      facilities:data.facilities.filter(f=>f.sport===sport&&!f.blocked).length,barriers:[],
      slots:[...slotCounts.values()].map(({ids,...slot})=>({...slot,people:ids.size}))}];
  }));
  data.demand_summary=[];
  if(role==='crm')return data;

  data.users=[account];
  data.schedule={available:user===1?[{day:4,start:'16:00',end:'20:00'}]:[],classes:[],buffer:30};
  data.recommendations=[];
  data.ambassador_assignments=[];
  ['events','issues','surveys','requests','payments','notifications','deliveries','redemptions','points_summary','points_ledger','sanctions','school_enrollments','tournament_entries','match_attendance','event_attendance','participation_requests','participation_invitations'].forEach(key=>data[key]=ownRows(data[key]));
  data.reservations.forEach(r=>{if(r.user!==user)delete r.user;});
  data.enrollments.forEach(e=>{if(e.user!==user)delete e.user;});
  data.participation_sessions=data.participation_sessions.filter(t=>data.participation_invitations.some(i=>i.session===t.id));
  if(external){
    ['activities','enrollments','matches','rewards','schools','tournaments','tournament_results','sport_events','ambassadors','public_players','tournament_public_roster'].forEach(key=>data[key]=[]);
  }
  return data;
}

const pagesAllowed=new Set(['participation_request','participation_withdraw','participation_draft','participation_approve','participation_response','reserve','cancel','reservation_checkout','issue','update_issue']);
const pagesAdminActions=new Set(['participation_draft','participation_approve','update_issue']);
const pagesExternalActions=new Set(['reserve','cancel','reservation_checkout','issue']);

function pagesAction(data,access,v) {
  const uid=access.user;
  const external=data.users.find(u=>u.id===uid).account_type==='external';
  const management=access.role==='crm';
  pagesRequire(pagesAllowed.has(v.action),'Esta acción se puede consultar en la demo web. Para ejecutarla se necesita el servidor original.');
  pagesRequire(management===pagesAdminActions.has(v.action),'Cambia al perfil correspondiente para esta acción.');
  pagesRequire(!external||pagesExternalActions.has(v.action),'Función reservada a estudiantes.');
  const timestamp=pagesTime();
  const event=(user,text)=>data.events.unshift({id:pagesId(),user,text,actor:management?'Gestión Demo':'Usuario Demo',time:timestamp});

  switch(v.action){
    case 'participation_request': {
      pagesRequire(sports.includes(v.sport)&&levels.includes(v.level),'Elige un deporte y un nivel válidos.');
      pagesRequire(v.slots.length>=1&&v.slots.length<=4&&v.slots.every(s=>future(s)&&s.date<=day(14)&&/^(0[89]|1[0-9]|2[01]):00$/.test(s.time)),'Elige de una a cuatro franjas futuras dentro de los próximos 14 días.');
      pagesRequire(!data.participation_requests.some(r=>r.user===uid&&r.sport===v.sport&&r.level===v.level&&['Abierta','Con propuesta'].includes(r.status)),'Ya tienes una solicitud vigente para ese deporte y nivel.');
      const slots=[...new Map(v.slots.map(s=>[s.date+' '+s.time,s])).values()];
      data.participation_requests.unshift({id:pagesId(),user:uid,sport:v.sport,level:v.level,barrier:v.barrier,source:v.source,slots,status:'Abierta',created_at:timestamp});
      event(uid,'Expresó interés en '+v.sport);
      break;
    }
    case 'participation_withdraw': {
      const request=data.participation_requests.find(r=>r.id===v.id&&r.user===uid&&r.status!=='Retirada');
      pagesRequire(request,'Solicitud no disponible.');
      request.status='Retirada';
      data.participation_invitations.filter(i=>i.request===request.id&&['Pendiente','Aceptada'].includes(i.status)&&!i.attendance).forEach(i=>i.status='Cancelada');
      event(uid,'Retiró una solicitud');
      break;
    }
    case 'participation_draft': {
      const group=experienceGroups(data).find(g=>g.key===v.key);
      pagesRequire(group?.count>=2&&group.facilities.length,'El grupo ya no tiene suficientes personas o pista libre.');
      const capacity=Math.min(group.count,{'Pádel':4,'Tenis':2,'Baloncesto':12,'Fútbol':14}[group.sport]||20);
      data.participation_sessions.unshift({id:pagesId(),key:group.key,sport:group.sport,level:group.level,date:group.date,time:group.time,request_ids:group.request_ids,facility:group.facilities[0],minimum:2,capacity,name:'Encuentro de '+group.sport,status:'Borrador',created_at:timestamp});
      event(null,'Preparó una experiencia de '+group.sport);
      break;
    }
    case 'participation_approve': {
      const trial=data.participation_sessions.find(t=>t.id===v.id&&t.status==='Borrador');
      pagesRequire(trial&&future(trial)&&v.resources_checked===true,'Revisa los recursos y el horario del borrador.');
      const facility=Number(v.facility), court=data.facilities.find(f=>f.id===facility&&f.sport===trial.sport&&!f.blocked);
      const minimum=Number(v.minimum), capacity=Number(v.capacity), max={'Pádel':4,'Tenis':2,'Baloncesto':12,'Fútbol':14}[trial.sport]||20;
      pagesRequire(court&&!slotTaken(data,facility,trial.date,trial.time),'No hay disponibilidad en esa pista.');
      pagesRequire(Number.isInteger(minimum)&&Number.isInteger(capacity)&&minimum>=2&&capacity>=minimum&&capacity<=max,'Revisa las plazas y el mínimo del grupo.');
      const candidates=data.participation_requests.filter(r=>trial.request_ids.includes(r.id)&&r.status==='Abierta'&&pagesSlotFits(data,r.user,trial));
      pagesRequire(candidates.length>=minimum&&v.host.trim()&&v.name.trim(),'Revisa los participantes, el nombre y la acogida.');
      const estimated=Number(v.staff_minutes)/60*Number(v.hourly_rate)+Number(v.materials);
      pagesRequire(Number.isFinite(estimated)&&estimated>=0,'Comprueba la estimación de coste.');
      Object.assign(trial,{name:v.name,host:v.host,facility,minimum,capacity,status:'Publicada',estimated_cost:Math.round(estimated*100)/100});
      candidates.forEach(r=>{
        r.status='Con propuesta';
        data.participation_invitations.push({id:pagesId(),session:trial.id,request:r.id,user:r.user,status:'Pendiente',attendance:null,created_at:timestamp});
        event(r.user,'Recibió una propuesta de '+trial.sport);
      });
      break;
    }
    case 'participation_response': {
      const invitation=data.participation_invitations.find(i=>i.id===v.id&&i.user===uid);
      const trial=data.participation_sessions.find(t=>t.id===invitation?.session);
      const responses={Aceptar:'Aceptada',Rechazar:'Rechazada',Cancelar:'Cancelada'};
      pagesRequire(trial?.status==='Publicada'&&future(trial)&&invitation.status!=='Cancelada'&&Object.hasOwn(responses,v.response),'La invitación ya no admite respuestas.');
      if(v.response==='Aceptar'&&invitation.status!=='Aceptada')pagesRequire(pagesSlotFits(data,uid,trial),'Ya tienes otro compromiso en esa franja.');
      if(v.response==='Aceptar')pagesRequire(data.participation_invitations.filter(i=>i.session===trial.id&&i.status==='Aceptada'&&i.id!==invitation.id).length<trial.capacity,'La sesión está completa.');
      invitation.status=responses[v.response];
      if(v.response!=='Aceptar'){
        const request=data.participation_requests.find(r=>r.id===invitation.request);
        if(request?.status==='Con propuesta')request.status='Abierta';
      }
      event(uid,'Respuesta a experiencia: '+invitation.status);
      break;
    }
    case 'reserve': {
      const facility=Number(v.facility);
      const court=data.facilities.find(f=>f.id===facility&&!f.blocked);
      const account=data.users.find(u=>u.id===uid);
      const windowDays=data.config.window_days+Number(account.credential_year==='first');
      pagesRequire(court&&future(v)&&v.date<=day(windowDays)&&/^(0[89]|1[0-9]|2[01]):00$/.test(v.time),'Elige una instalación y una franja futura válida.');
      pagesRequire(!slotTaken(data,facility,v.date,v.time)&&!data.reservations.some(r=>r.user===uid&&live(r)&&r.date===v.date&&r.time===v.time),'La franja ya está ocupada.');
      pagesRequire(pagesSlotFits(data,uid,v),'Ya tienes otro compromiso en esa franja.');
      const start=new Date(v.date+'T00:00');
      start.setDate(start.getDate()-(start.getDay()+6)%7);
      const end=new Date(start);
      end.setDate(end.getDate()+7);
      pagesRequire(data.reservations.filter(r=>r.user===uid&&live(r)&&stamp(r)>=start&&stamp(r)<end).length<data.config.weekly_limit,'Has alcanzado el límite semanal.');
      const id=pagesId();
      data.reservations.unshift({id,user:uid,facility,date:v.date,time:v.time,status:'Confirmada',access_code:pagesId().slice(0,6).toUpperCase(),created_at:timestamp});
      data.deliveries.unshift({id:pagesId(),user:uid,kind:'operational',title:'Reserva confirmada',body:court.name+' · '+v.date+' '+v.time,created_at:timestamp});
      event(uid,'Reservó '+court.name);
      break;
    }
    case 'cancel': {
      const r=data.reservations.find(x=>x.id===v.id&&x.user===uid&&x.status==='Confirmada');
      pagesRequire(r&&stamp(r)-Date.now()>=data.config.cancel_hours*3600000,'La reserva ya no se puede cancelar.');
      r.status='Cancelada';
      data.payments.filter(p=>p.entity===r.id&&p.user===uid&&p.status==='Pagado demo').forEach(p=>p.status='Reembolsado demo');
      event(uid,'Canceló una reserva');
      break;
    }
    case 'reservation_checkout': {
      const r=data.reservations.find(x=>x.id===v.id&&x.user===uid&&x.status==='Confirmada');
      pagesRequire(r&&external&&future(r)&&v.confirm_demo===true,'Solo se registra el pago simulado de una reserva externa futura.');
      pagesRequire(!data.payments.some(p=>p.entity===r.id&&p.status==='Pagado demo'),'El pago ya está registrado.');
      const facility=data.facilities.find(f=>f.id===r.facility);
      data.payments.unshift({id:pagesId(),entity:r.id,user:uid,kind:'Reserva externa',sport:facility.sport,amount:12,status:'Pagado demo',reference:'DEMO-'+pagesId().slice(0,8),time:timestamp});
      event(uid,'Registró un pago simulado de reserva externa');
      break;
    }
    case 'issue': {
      pagesRequire(data.facilities.some(f=>f.id===Number(v.facility))&&v.description.trim().length>0,'Elige la instalación y describe la incidencia ficticia.');
      data.issues.unshift({id:pagesId(),user:uid,facility:Number(v.facility),description:v.description.slice(0,1000),status:'Abierta',priority:'Normal',owner:'Sin asignar',created_at:timestamp});
      event(uid,'Comunicó una incidencia');
      break;
    }
    case 'update_issue': {
      const issue=data.issues.find(i=>i.id===v.id);
      pagesRequire(issue&&['Abierta','En curso','Resuelta'].includes(v.status)&&['Normal','Alta','Urgente'].includes(v.priority)&&v.owner.trim(),'Revisa el estado, prioridad y responsable.');
      Object.assign(issue,{status:v.status,priority:v.priority,owner:v.owner,resolved_at:v.status==='Resuelta'?timestamp:null});
      event(issue.user,'Incidencia: '+v.status);
      break;
    }
  }
  data.revision=Math.max(Date.now(),data.revision+1);
  pagesWrite(data);
}

api=async function(path,body,token=getDemoToken()){
  if(path==='session'){
    const user=Number(body.user),role=body.role;
    pagesRequire([1,2,3,4].includes(user)&&['app','crm'].includes(role)&&!(role==='crm'&&user===4),'Elige un perfil válido para este espacio.');
    return {token:role+':'+user};
  }
  const [role,rawUser]=token.split(':');
  const user=Number(rawUser);
  if(!['app','crm'].includes(role)||![1,2,3,4].includes(user))throw Object.assign(Error('Elige un acceso de prueba.'),{status:401});
  const data=pagesRead(), access={role,user};
  if(path==='state')return pagesProjection(data,access);
  if(path==='action'){pagesAction(data,access,body);return {ok:true};}
  throw Error('Esta función necesita el servidor original.');
};

const originalOpportunities=opportunityCards;
opportunityCards=function(){
  const group=state.participation_opportunities.find(g=>g.count>=2&&g.facilities.length);
  if(!group)return originalOpportunities();
  return `<section class="card pages-highlight"><span class="eyebrow">DE LA INTENCIÓN A LA PARTICIPACIÓN</span>
    <h2>Próxima sesión para probar</h2><p><b>${esc(group.sport)} · ${esc(group.level)} · ${group.count} personas</b></p>
    <p>${esc(group.date)} · ${esc(group.time)} · ${esc(facility(group.facilities[0]).name)}</p>
    <p>${Object.entries(group.barriers).map(([b,n])=>esc(b)+' ('+n+')').join(' · ')}</p>
    ${participationButton('Preparar esta sesión','participation_draft',group.key)}
  </section>`+originalOpportunities();
};

const originalFinance=crmFinance;
function pagesFinanceChart(title,entries){
  const palette=['#245b51','#a74559','#426aba','#ae661f','#7951a0','#307481','#7c6418'];
  const visible=entries.filter(([,amount])=>amount>0);
  const total=visible.reduce((sum,[,amount])=>sum+amount,0);
  let start=0;
  const slices=visible.map(([,amount],index)=>{
    const next=start+amount/total*100;
    const part=palette[index%palette.length]+' '+start+'% '+next+'%';
    start=next;
    return part;
  });
  return `<article class="card"><h3>${title}</h3>
    <div class="pages-ring" style="background:${slices.length?'conic-gradient('+slices.join(',')+')':'#e4e9e8'}"><strong>${money(total)}</strong></div>
    ${rows(visible,([sport,amount],i)=>`<div class="row"><span><i class="pages-marker" style="background:${palette[i%palette.length]}"></i>${esc(sport)}</span><b>${money(amount)}</b></div>`)}</article>`;
}
crmFinance=function(){
  const income=sports.map(sport=>[sport,state.payments.filter(p=>p.sport===sport&&p.status==='Pagado demo').reduce((sum,p)=>sum+p.amount,0)]);
  const expenses=sports.map(sport=>[sport,state.participation_sessions.filter(t=>t.sport===sport&&t.status==='Cerrada').reduce((sum,t)=>sum+t.actual_cost,0)]);
  return `<section class="card"><h2>Ingresos y gastos por deporte</h2>
    <div class="cols">${pagesFinanceChart('Ingresos después de reembolsos',income)}${pagesFinanceChart('Gastos registrados de sesiones piloto',expenses)}</div>
    <p class="muted">Importes ficticios. Los gastos solo incluyen sesiones piloto cerradas.</p></section>`+originalFinance();
};

const originalPagesRender=render;
render=function(){
  originalPagesRender();
  if(!state||!session)return;
  $('connection').textContent='Demostración pública';
  const note=document.createElement('p');
  const actionPages=['Oportunidades','Quiero jugar','Mis experiencias','Reservas','Incidencias'];
  note.className='pages-note';
  note.textContent=actionPages.includes(page)
    ? 'Prueba el flujo con datos ficticios. Los cambios se guardan en este navegador.'
    : 'Explora esta pantalla con datos de ejemplo. Algunas acciones requieren el servidor original.';
  $('main').prepend(note);
  if(page==='Inicio'||page==='Dashboard'){
    const reset=document.createElement('button');
    reset.type='button';
    reset.className='link';
    reset.textContent='Reiniciar datos de demostración';
    reset.onclick=()=>{
      if(!window.confirm('¿Quieres volver a los datos de ejemplo iniciales en este navegador?'))return;
      pagesWrite(pagesInitialState());
      refresh(true);
    };
    note.append(' ',reset);
  }
  const blockedActions = ['[data-scan-form]','[data-ambassador-video] button','[data-av-save]'];
  document.querySelectorAll(blockedActions.join(',')).forEach(element=>{
    element.disabled=true;
    element.title='Disponible en el servidor original';
  });
};

const parameters=new URLSearchParams(window.location.search);
const requestedRole=parameters.get('space');
const savedAccess=savedDemoAccess();
const initialRole=['app','crm'].includes(requestedRole)?requestedRole:savedAccess?.role||'app';
const requestedUser=Number(parameters.get('user')||(!requestedRole&&savedAccess?.user)||1);
const initialUser=[1,2,3,4].includes(requestedUser)&&!(initialRole==='crm'&&requestedUser===4)?requestedUser:1;
window.addEventListener('storage',event=>{if(event.key===pagesStoreKey&&!busy&&session)refresh();});
switchDemoAccess(initialRole,initialUser);
