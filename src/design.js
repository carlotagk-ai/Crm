'use strict';
// Presentation layer only: the product's existing actions remain bound by their modules.
const navPaths={
'Mi progreso':'M4 20V4M4 20h16M8 15l4-5 4 2 4-7',
'Ventajas':'M3 8h18v5H3zM5 13v8h14v-8M12 8v13M12 8C3-1 4 11 12 8c8 3 9-9 0 0',
'Avatar':'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 21a7 7 0 0 1 14 0',
'Calendario mensual':'M4 5h16v16H4zM7 3v4M17 3v4M4 10h16M8 14h2M14 14h2M8 18h2',
'Escuelas deportivas':'m2 8 10-5 10 5-10 5zM6 10v7l6 4 6-4v-7',
'Escuelas':'m2 8 10-5 10 5-10 5zM6 10v7l6 4 6-4v-7',
'Ligas y torneos':'M8 3h8v9a4 4 0 0 1-8 0zM8 5H4v4a4 4 0 0 0 4 4M16 5h4v4a4 4 0 0 1-4 4M12 16v5M7 21h10',
'Competiciones':'M8 3h8v9a4 4 0 0 1-8 0zM8 5H4v4a4 4 0 0 0 4 4M16 5h4v4a4 4 0 0 1-4 4M12 16v5M7 21h10',
'Mis pagos':'M3 5h18v14H3zM3 10h18M7 15h4',
'Ingresos':'M3 5h18v14H3zM3 10h18M7 15h4M15 15h2',
'Mi año deportivo':'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
'Técnica y bienestar':'M3 12h4l3-8 4 16 3-8h4',
'Puntos y ventajas':'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z',
'Asistencia y sanciones':'m4 12 5 5L20 5M4 4h5M4 20h16',

'Embajadores':'M12 3l3 6 6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1z',
'Embajadores deportivos':'M12 3l3 6 6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1z',
'Radar de tendencias':'M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 12l8-8M12 3v9h9',
'Inicio':'M3 10 12 3l9 7M5 9v12h5v-7h4v7h5V9',
'Dashboard':'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
'Perfil deportivo':'M20 21v-2a7 7 0 0 0-14 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
'Usuarios':'M16 21v-2a5 5 0 0 0-10 0v2M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 4a4 4 0 0 1 0 7M21 21v-2a5 5 0 0 0-3-4',
'Reservas':'M4 5h16v16H4zM7 3v4M17 3v4M4 10h16M8 14h2M14 14h2M8 18h2',
'Actividades':'m13 2-9 12h7l-1 8 10-12h-7z',
'Partidas':'M4 4h6v6H4zM14 14h6v6h-6zM14 4h6v6h-6zM4 14h6v6H4zM10 7h4M7 10v4M17 10v4M10 17h4',
'Instalaciones':'M3 5h18v14H3zM12 5v14M3 9h4v6H3M21 9h-4v6h4',
'Incidencias':'m12 3 10 18H2zM12 9v5M12 17h.01',
'Informes':'M4 3h16v18H4zM8 16v-3M12 16V8M16 16v-5',
'Privacidad':'m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM9 12l2 2 4-4',
'Plan a 5 años':'M5 21V3M5 4h14l-3 5 3 5H5',
'Para ti':'m12 3 2.8 5.7L21 10l-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 10l6.2-1.3z',
'Mi semana':'M4 5h16v16H4zM7 3v4M17 3v4M4 10h16M8 15l3 3 5-5',
'Avisos':'M6 16V9a6 6 0 0 1 12 0v7l2 2H4zM10 21h4',
'Demanda y horarios':'M3 18 8 12l4 3 8-11M16 4h4v4M3 22h19',
'Quiero jugar':'M12 21s-9-6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12',
'Mis experiencias':'M4 6h16v15H4zM8 3v6M16 3v6M8 15l3 3 5-5',
'Oportunidades':'M9 18h6M10 21h4M8 14a7 7 0 1 1 8 0l-1 2H9z',
'Resultados del piloto':'M4 21V10h4v11M10 21V3h4v18M16 21v-7h4v7',
'Comunicaciones':'M3 5h18v14H3zM3 6l9 7 9-7',
'Buzón':'M3 5h18v14H3zM3 6l9 7 9-7'
};
const renderBeforeDesign=render;
render=function(){renderBeforeDesign();if(!state||!session)return;document.body.dataset.space=admin()?'crm':'app';const quickSwitch=$('space-switch');if(quickSwitch){quickSwitch.hidden=!admin()&&isExternal();quickSwitch.textContent=admin()?'Ir a la app →':'Ir al CRM →';quickSwitch.setAttribute('aria-label',admin()?'Cambiar a la app del estudiante':'Cambiar al Gestión deportiva')}const nav=$('nav');const personNode=nav.querySelector('.person');if(personNode){if(!admin()&&isExternal())personNode.querySelector('.eyebrow').textContent='ACCESO EXTERNO';let name=admin()?'Mario Demo':person(own()).name;personNode.dataset.initials=name.split(' ').map(s=>s[0]).slice(0,2).join('')}
nav.querySelectorAll('button[data-page]').forEach(b=>{if(b.querySelector('svg'))return;let label=b.textContent.trim();let ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg'),path=document.createElementNS(ns,'path');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.65');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('aria-hidden','true');svg.classList.add('nav-icon');path.setAttribute('d',navPaths[label]||navPaths.Dashboard);svg.appendChild(path);let span=document.createElement('span');span.className='nav-label';span.textContent=label;b.textContent='';b.append(svg,span);if(b.classList.contains('active'))b.setAttribute('aria-current','page')});
const groups=admin()?{'Dashboard':'VISIÓN GENERAL','Usuarios':'GESTIÓN DEL SERVICIO','Plan a 5 años':'ESTRATEGIA Y COMUNIDAD'}:{'Inicio':'MI ESPACIO','Para ti':'COMUNIDAD Y PROPUESTAS'};
Object.entries(groups).forEach(([label,text])=>{let target=[...nav.querySelectorAll('button[data-page]')].find(b=>b.dataset.page===label);if(target){let cap=document.createElement('p');cap.className='nav-caption';cap.textContent=text;nav.insertBefore(cap,target)}});
const status=$('main').querySelector('.heading>.badge');if(status)status.textContent='ENTORNO DE PRUEBA';
if(!admin()&&page==='Inicio'){let hero=[...$('main').children].find(el=>el.classList.contains('hero'));let heading=$('main').querySelector('.heading');if(hero&&heading)heading.after(hero)}
};

const sectionDescriptions={
'Inicio':'Tus objetivos, próximos planes y novedades en un mismo lugar.',
'Dashboard':'Consulta la participación, la demanda y las prioridades del servicio.',
'Perfil deportivo':'Define tus deportes, nivel y disponibilidad para encontrar planes que encajen contigo.',
'Reservas':'Encuentra una pista libre, gestiona tus reservas y confirma tu asistencia.',
'Actividades':'Descubre actividades, consulta sus detalles y reserva tu plaza.',
'Partidas':'Encuentra compañeros de tu nivel o crea tu próxima partida.',
'Usuarios':'Busca participantes y consulta su relación con el servicio.',
'Customer 360':'Reúne el historial deportivo, las reservas y las interacciones de cada participante.',
'Instalaciones':'Gestiona la disponibilidad, el mantenimiento y los bloqueos de las pistas.',
'Incidencias':'Comunica un problema y sigue su resolución.',
'Comunicaciones':'Redacta anuncios, selecciona destinatarios y consulta su alcance.',
'Buzón':'Consulta tus avisos, invitaciones y novedades.',
'Mi progreso':'Sigue tus objetivos personales y actualiza tus referencias académicas.',
'Ventajas':'Descubre qué puedes conseguir con tus puntos y consulta tus canjes.',
'Avatar':'Crea tu imagen deportiva y personaliza tu equipación.',
'Calendario mensual':'Organiza tus reservas y descubre los planes disponibles este mes.',
'Escuelas deportivas':'Encuentra una clase que encaje con tu nivel y disponibilidad.',
'Escuelas':'Consulta plazas, inscripciones y participación por escuela.',
'Ligas y torneos':'Inscríbete en competiciones y sigue resultados y clasificaciones.',
'Competiciones':'Gestiona inscripciones, valida resultados y sigue cada torneo.',
'Mis pagos':'Consulta tus operaciones y justificantes.',
'Ingresos':'Analiza los importes registrados por deporte y servicio.',
'Mi año deportivo':'Explora tus lugares favoritos y revive tu curso deportivo.',
'Técnica y bienestar':'Organiza tus hábitos y encuentra apoyo para mejorar tu técnica.',
'Puntos y ventajas':'Gestiona recompensas, canjes y el reconocimiento de buenos hábitos.',
'Asistencia y sanciones':'Valida presencias, revisa ausencias y resuelve reclamaciones.',
'Quiero jugar':'Cuéntanos qué te gustaría practicar y qué necesitas para empezar.',
'Mis experiencias':'Consulta tus propuestas, confirma tu plaza y prepara tu primera sesión.',
'Embajadores deportivos':'Conoce a quienes te acompañan en tus primeros pasos.',
'Embajadores':'Revisa candidaturas y coordina la acogida de nuevos participantes.',
'Demanda y horarios':'Compara demanda y capacidad, y simula cambios antes de aplicarlos.',
'Oportunidades':'Agrupa necesidades compatibles y prepara nuevas experiencias.',
'Radar de tendencias':'Detecta cambios de interés y participación para orientar la oferta futura.',
'Plan a 5 años':'Planifica inversiones, recursos y objetivos de evolución del servicio.'
};
heading=function(){return `<div class="heading"><div><span class="eyebrow">${admin()?'Gestión deportiva':'Tu comunidad deportiva'}</span><h1>${esc(page)}</h1><p class="muted">${esc(sectionDescriptions[page]||'Consulta y gestiona la información de esta sección.')}</p></div></div>`};
