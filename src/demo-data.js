const pagesSeed = {
  "revision": 44,
  "users": [
    {
      "id": 1,
      "name": "Alex Demo",
      "faculty": "Facultad A",
      "sports": "Pádel",
      "level": "Intermedio",
      "goal": "Mejorar",
      "marketing": false,
      "degree": "",
      "course": "",
      "campus": "Pamplona (demo)",
      "practiced": [
        "Pádel"
      ],
      "interested": [],
      "sport_levels": {
        "Pádel": "Avanzado"
      },
      "onboarding_completed": true,
      "onboarding_deferred": false,
      "preferences": {
        "in_app": true,
        "matches": true,
        "activities": true,
        "courts": true,
        "digest_limit": 5
      },
      "campaigns_opt_in": false,
      "campaigns_weekly_limit": 5,
      "account_type": "student",
      "credential_year": "continuing"
    },
    {
      "id": 2,
      "name": "Sam Demo",
      "faculty": "Facultad B",
      "sports": "Tenis",
      "level": "Principiante",
      "goal": "Aprender un deporte",
      "marketing": false,
      "degree": "",
      "course": "",
      "campus": "Pamplona (demo)",
      "practiced": [
        "Tenis"
      ],
      "interested": [],
      "sport_levels": {
        "Tenis": "Principiante"
      },
      "onboarding_completed": true,
      "onboarding_deferred": false,
      "preferences": {
        "in_app": true,
        "matches": true,
        "activities": true,
        "courts": true,
        "digest_limit": 5
      },
      "campaigns_opt_in": false,
      "campaigns_weekly_limit": 3,
      "account_type": "student",
      "credential_year": "first"
    },
    {
      "id": 3,
      "name": "Dani Demo",
      "faculty": "Facultad C",
      "sports": "Baloncesto",
      "level": "Avanzado",
      "goal": "Encontrar un grupo",
      "marketing": false,
      "degree": "",
      "course": "",
      "campus": "Pamplona (demo)",
      "practiced": [
        "Baloncesto"
      ],
      "interested": [],
      "sport_levels": {
        "Baloncesto": "Avanzado"
      },
      "onboarding_completed": true,
      "onboarding_deferred": false,
      "preferences": {
        "in_app": true,
        "matches": true,
        "activities": true,
        "courts": true,
        "digest_limit": 5
      },
      "campaigns_opt_in": false,
      "campaigns_weekly_limit": 3,
      "account_type": "student",
      "credential_year": "continuing"
    },
    {
      "id": 4,
      "name": "Externo Demo",
      "faculty": "Acceso externo",
      "sports": "Pádel",
      "level": "Principiante",
      "goal": "Reservar una pista",
      "marketing": false,
      "account_type": "external",
      "credential_year": "external",
      "degree": "",
      "course": "",
      "campus": "Pamplona (demo)",
      "practiced": [
        "Pádel"
      ],
      "interested": [],
      "sport_levels": {
        "Pádel": "Principiante"
      },
      "onboarding_completed": true,
      "onboarding_deferred": false,
      "preferences": {
        "in_app": true,
        "matches": true,
        "activities": true,
        "courts": true,
        "digest_limit": 5
      },
      "campaigns_opt_in": false,
      "campaigns_weekly_limit": 3
    }
  ],
  "facilities": [
    {
      "id": 1,
      "name": "Pista de pádel 1",
      "sport": "Pádel",
      "blocked": false
    },
    {
      "id": 2,
      "name": "Pista de tenis 1",
      "sport": "Tenis",
      "blocked": false
    },
    {
      "id": 3,
      "name": "Pabellón · Cancha 1",
      "sport": "Baloncesto",
      "blocked": false
    },
    {
      "id": 4,
      "name": "Campo de fútbol 7",
      "sport": "Fútbol",
      "blocked": false
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Entrenamiento funcional",
      "sport": "Fitness",
      "date": "2026-11-11",
      "time": "18:00",
      "capacity": 12
    },
    {
      "id": "a2",
      "name": "Iniciación al pádel",
      "sport": "Pádel",
      "date": "2026-11-10",
      "time": "17:00",
      "capacity": 2
    },
    {
      "id": "a3",
      "name": "Running en el campus",
      "sport": "Running",
      "date": "2026-11-12",
      "time": "19:00",
      "capacity": 20
    }
  ],
  "reservations": [
    {
      "id": "1f8ced53-5241-497e-99b7-96d1a58a7bd6",
      "user": 4,
      "facility": 2,
      "date": "2026-11-10",
      "time": "09:00",
      "status": "Confirmada",
      "created_at": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "1b35082c-0e14-4ffa-931e-6c81feafd5da",
      "user": 2,
      "facility": 1,
      "date": "2026-11-13",
      "time": "10:00",
      "status": "Confirmada",
      "created_at": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "history-attended",
      "user": 1,
      "facility": 1,
      "date": "2026-11-07",
      "time": "17:00",
      "status": "Asistió",
      "created_at": "2026-11-06T23:32:12+01:00"
    },
    {
      "id": "history-no-show",
      "user": 2,
      "facility": 2,
      "date": "2026-11-08",
      "time": "16:00",
      "status": "No asistió",
      "created_at": "2026-11-06T23:32:12+01:00"
    },
    {
      "id": "checkin-now",
      "user": 1,
      "facility": 2,
      "date": "2026-11-09",
      "time": "23:31",
      "status": "Asistió",
      "validated_at": "2026-11-09T23:32:12+01:00",
      "checkin_method": "QR y clave demo"
    },
    {
      "id": "expired",
      "user": 1,
      "facility": 3,
      "date": "2026-11-09",
      "time": "23:12",
      "status": "Cancelada",
      "cancel_reason": "Sin check-in tras 15 minutos",
      "expired_at": "2026-11-09T23:32:12+01:00"
    }
  ],
  "enrollments": [
    {
      "id": "e1",
      "user": 2,
      "activity": "a2",
      "status": "Inscrito",
      "created_at": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "e2",
      "user": 3,
      "activity": "a2",
      "status": "Inscrito",
      "created_at": "2026-11-09T23:32:12+01:00"
    }
  ],
  "matches": [
    {
      "id": "m1",
      "name": "Pádel después de clase",
      "sport": "Pádel",
      "date": "2026-11-10",
      "time": "18:00",
      "level": "Intermedio",
      "capacity": 4,
      "participants": [
        2
      ],
      "organizer": 2
    },
    {
      "id": "played",
      "name": "Partida Demo validada",
      "sport": "Pádel",
      "date": "2026-11-09",
      "time": "20:32",
      "level": "Principiante",
      "participants": [
        1,
        2
      ],
      "organizer": 1,
      "capacity": 4
    }
  ],
  "issues": [],
  "surveys": [],
  "requests": [],
  "events": [],
  "config": {
    "weekly_limit": 5,
    "window_days": 3,
    "cancel_hours": 2
  },
  "budget": {
    "rate": 45,
    "monthly_infra": 100,
    "annual_support_hours": 80,
    "annual_training_hours": 24,
    "annual_maintenance_hours": 100,
    "development_hours": [
      320,
      160,
      120,
      120,
      80
    ]
  },
  "participation_requests": [],
  "participation_sessions": [],
  "participation_invitations": [],
  "campaigns": [],
  "deliveries": [],
  "communication_rules": [
    {
      "id": "reservation_created",
      "name": "Confirmación de reserva",
      "description": "Cuando se crea una reserva confirmada, publica el detalle en el buzón del estudiante.",
      "enabled": true
    },
    {
      "id": "reservation_cancelled",
      "name": "Cancelación de reserva",
      "description": "Cuando cambia a cancelada, comunica el cambio a la persona afectada.",
      "enabled": true
    },
    {
      "id": "issue_changed",
      "name": "Seguimiento de incidencias",
      "description": "Al abrir una incidencia o cambiar su estado, actualiza el buzón de quien la comunicó.",
      "enabled": true
    }
  ],
  "decision_scenarios": [],
  "ambassadors": [],
  "trend_snapshots": [],
  "points_ledger": [
    {
      "id": "970ae396-f2ac-4a1e-8b5d-37a80f3721b1",
      "user": 2,
      "delta": -70,
      "key": "redeem:d6c3c446-d2f9-4fc9-a812-44d0fe4d6e5c",
      "reason": "Canje: Gorra del campus",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "c04815c7-e0af-4f0f-82ca-32c30491d815",
      "user": 1,
      "delta": -120,
      "key": "redeem:4b8d80f3-caa7-4290-8788-e8b609e0c7aa",
      "reason": "Canje: Clase avanzada de pádel · bono demo",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "3f1d7c81-1f6d-4ff2-98d5-fb088b90583e",
      "user": 1,
      "delta": -90,
      "key": "redeem:e685090f-433d-45ca-bfc3-2fa4027cb3a6",
      "reason": "Canje: Descuento en próximo torneo",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "8915db18-3541-425d-8cc6-8265433c2266",
      "user": 1,
      "delta": -50,
      "key": "redeem:e3f314b9-f3bc-4701-9d2e-034d830886a0",
      "reason": "Canje: Botella del campus",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "2e0970fe-b0de-43ef-acd1-d0b9d727ef20",
      "user": 2,
      "delta": 12,
      "key": "match:played",
      "reason": "Asistencia a partida validada",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "75bb585f-16cf-48d1-a4d5-321dd1baeea2",
      "user": 1,
      "delta": 12,
      "key": "match:played",
      "reason": "Asistencia a partida validada",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "01c51959-89da-4270-906a-e387eb482a8d",
      "user": 1,
      "delta": 50,
      "key": "refund-reward:d8cd0241-549a-4e95-a857-c91330ccc2b9",
      "reason": "Devolución por cancelación de canje",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "380c6018-e5ee-42d2-8ffb-0620898c2693",
      "user": 1,
      "delta": -50,
      "key": "redeem:d8cd0241-549a-4e95-a857-c91330ccc2b9",
      "reason": "Canje: Botella del campus",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "0cfab34f-7110-44ae-8bd7-8147fdd2bade",
      "user": 1,
      "delta": 20,
      "key": "event:7d567de6-f836-4c87-a2aa-073ed6bec866",
      "reason": "Asistencia validada a Semana del Deporte",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "3a8976e7-7428-4ec9-a318-94373e033bbd",
      "user": 1,
      "delta": 20,
      "key": "event:12256c91-e158-40a2-9980-059851337a4f",
      "reason": "Asistencia validada a Semana del Deporte",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "51c95533-992f-496a-a4b3-5d0527ad84e6",
      "user": 1,
      "delta": 10,
      "key": "appeal-refund:70144e03-7b66-403b-b944-eda933ddc7fd",
      "reason": "Revisión favorable de asistencia",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "55884feb-865f-429b-9d9e-f6dd6592b97b",
      "user": 1,
      "delta": -10,
      "key": "no-show:expired",
      "reason": "Reserva liberada por falta de check-in",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "6b124ea8-f214-4fc3-ac79-1464f98c0a50",
      "user": 1,
      "delta": 12,
      "key": "attendance:checkin-now",
      "reason": "Asistencia confirmada a una reserva",
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "fixture-points",
      "user": 1,
      "delta": 300,
      "key": "fixture-verified-achievements",
      "reason": "Fixture aislada de hábitos validados",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "3f0d34de-7264-4a87-a466-b0d64d72c7fc",
      "user": 1,
      "delta": 100,
      "key": "fixture-stock-1",
      "reason": "Fixture aislada de existencias",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "7ce63f90-68d7-451b-8f38-41a38c906f45",
      "user": 2,
      "delta": 100,
      "key": "fixture-stock-2",
      "reason": "Fixture aislada de existencias",
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "fd75bb67-8fea-4315-9b5b-e5bec46c6dd2",
      "user": 2,
      "delta": -10,
      "key": "no-show:fixture-only",
      "reason": "Fixture de penalización",
      "time": "2026-11-09T23:32:13+01:00"
    }
  ],
  "redemptions": [
    {
      "id": "d8cd0241-549a-4e95-a857-c91330ccc2b9",
      "user": 1,
      "reward": "bottle",
      "name": "Botella del campus",
      "points": 50,
      "status": "Cancelada",
      "created_at": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "e3f314b9-f3bc-4701-9d2e-034d830886a0",
      "user": 1,
      "reward": "bottle",
      "name": "Botella del campus",
      "points": 50,
      "status": "Reservada",
      "created_at": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "e685090f-433d-45ca-bfc3-2fa4027cb3a6",
      "user": 1,
      "reward": "tournament",
      "name": "Descuento en próximo torneo",
      "points": 90,
      "status": "Aplicada demo",
      "created_at": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "4b8d80f3-caa7-4290-8788-e8b609e0c7aa",
      "user": 1,
      "reward": "padel",
      "name": "Clase avanzada de pádel · bono demo",
      "points": 120,
      "status": "Reservada",
      "created_at": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "d6c3c446-d2f9-4fc9-a812-44d0fe4d6e5c",
      "user": 2,
      "reward": "cap",
      "name": "Gorra del campus",
      "points": 70,
      "status": "Reservada",
      "created_at": "2026-11-09T23:32:13+01:00"
    }
  ],
  "sanctions": [],
  "payments": [
    {
      "id": "2d947203-9207-49d7-b1d9-2ac2a1307f43",
      "user": 4,
      "kind": "Reserva externa",
      "entity": "1f8ced53-5241-497e-99b7-96d1a58a7bd6",
      "sport": "Tenis",
      "amount": 12,
      "status": "Pagado demo",
      "time": "2026-11-09T23:32:12+01:00",
      "reference": "DEMO-7D231AAD"
    },
    {
      "id": "27ff6b1d-d77f-4192-a0f7-8d78f2a9563e",
      "user": 1,
      "kind": "Escuela",
      "entity": "0568a694-eefa-4e9b-83d0-73edc1644e7e",
      "sport": "Pádel",
      "amount": 35,
      "status": "Pagado demo",
      "time": "2026-11-09T23:32:12+01:00",
      "reference": "DEMO-BD8D0BA1"
    },
    {
      "id": "e5e47baa-9e09-46a7-9dfd-d33cc1763f20",
      "user": 1,
      "kind": "Torneo",
      "entity": "b3037def-e3f6-4032-9fc1-71fb0519da70",
      "sport": "Pádel",
      "amount": 10,
      "status": "Pagado demo",
      "time": "2026-11-09T23:32:13+01:00",
      "reference": "DEMO-38082BA4"
    },
    {
      "id": "c83f30d1-fb80-4d70-a73f-d75282812a9f",
      "user": 1,
      "kind": "Torneo",
      "entity": "d46e8ed1-01b2-408a-b208-63f15e30f303",
      "sport": "Pádel",
      "amount": 8.0,
      "status": "Pagado demo",
      "time": "2026-11-09T23:32:13+01:00",
      "reference": "DEMO-4245EEFC",
      "redemption": "e685090f-433d-45ca-bfc3-2fa4027cb3a6",
      "original_amount": 10,
      "discount": 2.0
    },
    {
      "id": "581e0098-84c5-4807-a72f-917aa5f3d196",
      "user": 1,
      "kind": "Escuela",
      "entity": "9b628df6-b63a-40cc-8380-a850aa768112",
      "sport": "Pádel",
      "amount": 0,
      "status": "Reembolsado demo",
      "time": "2026-11-09T23:32:13+01:00",
      "reference": "DEMO-DBFCE363",
      "redemption": "4b8d80f3-caa7-4290-8788-e8b609e0c7aa",
      "original_amount": 45,
      "discount": 45
    }
  ],
  "school_enrollments": [
    {
      "id": "0568a694-eefa-4e9b-83d0-73edc1644e7e",
      "user": 1,
      "school": "padel-basic",
      "date": "2026-11-10",
      "time": "17:00",
      "status": "Inscrito",
      "created_at": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "9b628df6-b63a-40cc-8380-a850aa768112",
      "user": 1,
      "school": "padel-plus",
      "date": "2026-11-12",
      "time": "18:00",
      "status": "Cancelada",
      "created_at": "2026-11-09T23:32:13+01:00"
    }
  ],
  "level_reviews": [],
  "match_attendance": [
    {
      "match": "played",
      "user": 1,
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "match": "played",
      "user": 2,
      "time": "2026-11-09T23:32:13+01:00"
    }
  ],
  "tournament_entries": [
    {
      "id": "roster-demo-1",
      "tournament": "rectora-demo",
      "user": 1,
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "roster-demo-2",
      "tournament": "rectora-demo",
      "user": 2,
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "roster-demo-3",
      "tournament": "rectora-demo",
      "user": 3,
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "id": "b3037def-e3f6-4032-9fc1-71fb0519da70",
      "tournament": "padel-demo",
      "user": 1,
      "time": "2026-11-09T23:32:13+01:00"
    },
    {
      "id": "d46e8ed1-01b2-408a-b208-63f15e30f303",
      "tournament": "discount-one",
      "user": 1,
      "time": "2026-11-09T23:32:13+01:00"
    }
  ],
  "tournament_results": [
    {
      "id": "4580838e-f1c1-41bc-89f3-7fb52d7f8fd0",
      "tournament": "rectora-demo",
      "fixture": "Equipo Norte Demo|Equipo Sur Demo",
      "home": "Equipo Norte Demo",
      "away": "Equipo Sur Demo",
      "home_score": 2,
      "away_score": 1,
      "scorers": [
        {
          "user": 1,
          "goals": 2
        }
      ],
      "time": "2026-11-09T23:32:13+01:00"
    }
  ],
  "sport_events": [
    {
      "id": "sport-week-demo",
      "name": "Semana del Deporte · encuentro demo",
      "sport": "Multideporte",
      "date": "2026-11-12",
      "time": "12:00",
      "location": "Punto de acogida del polideportivo",
      "gear": "Ropa cómoda y agua",
      "points": 20
    },
    {
      "id": "12256c91-e158-40a2-9980-059851337a4f",
      "name": "Evento Demo 0",
      "sport": "Multideporte",
      "date": "2026-11-08",
      "time": "12:00",
      "location": "Punto Demo",
      "gear": "Ropa cómoda y agua",
      "points": 20
    },
    {
      "id": "7d567de6-f836-4c87-a2aa-073ed6bec866",
      "name": "Evento Demo 1",
      "sport": "Multideporte",
      "date": "2026-11-08",
      "time": "12:00",
      "location": "Punto Demo",
      "gear": "Ropa cómoda y agua",
      "points": 20
    }
  ],
  "event_attendance": [
    {
      "event": "12256c91-e158-40a2-9980-059851337a4f",
      "user": 1,
      "time": "2026-11-09T23:32:12+01:00"
    },
    {
      "event": "7d567de6-f836-4c87-a2aa-073ed6bec866",
      "user": 1,
      "time": "2026-11-09T23:32:12+01:00"
    }
  ],
  "avatars": {
    "1": {
      "skin": "dorado",
      "face": "corazon",
      "eyes": "redondos",
      "eye_color": "verde",
      "brows": "arqueadas",
      "nose": "recta",
      "mouth": "amplia",
      "lip_color": "rosado",
      "hair": "ondas",
      "hair_color": "cobrizo",
      "beard": "ninguna",
      "glasses": "redondas",
      "headwear": "visera",
      "earrings": "aros",
      "body": "amplia",
      "top": "polo",
      "color": "turquesa",
      "bottom": "largo",
      "bottom_color": "arena",
      "shoes": "coral",
      "background": "menta",
      "pose": "saludo",
      "sport": "Golf",
      "tier": 0,
      "public": true
    }
  },
  "rewards": [
    {
      "id": "bottle",
      "name": "Botella del campus",
      "category": "Merchandising",
      "points": 50,
      "stock": 9,
      "active": true,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "cap",
      "name": "Gorra del campus",
      "category": "Merchandising",
      "points": 70,
      "stock": 0,
      "active": true,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "visit",
      "name": "Visita a una clase de otra carrera",
      "category": "Académico",
      "points": 80,
      "stock": 5,
      "active": false,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "wine",
      "name": "Descuento en seminario del vino",
      "category": "Académico",
      "points": 100,
      "stock": 5,
      "active": false,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "padel",
      "name": "Clase avanzada de pádel · bono demo",
      "category": "Deportivo",
      "points": 120,
      "stock": 3,
      "active": true,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "tournament",
      "name": "Descuento en próximo torneo",
      "category": "Deportivo",
      "points": 90,
      "stock": 7,
      "active": true,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "talk",
      "name": "Acceso a charla especial · ejemplo sin ponente confirmado",
      "category": "Experiencias",
      "points": 150,
      "stock": 10,
      "active": false,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    },
    {
      "id": "tuition",
      "name": "Ayuda a matrícula · propuesta pendiente de autorización",
      "category": "Académico",
      "points": 500,
      "stock": 2,
      "active": false,
      "description": "Ventaja ficticia del prototipo. No existe un acuerdo ni un descuento real."
    }
  ],
  "schools": [
    {
      "id": "padel-basic",
      "name": "Pádel iniciación",
      "sport": "Pádel",
      "level": "Principiante",
      "weekday": 2,
      "time": "17:00",
      "capacity": 8,
      "price": 35,
      "facility": 1,
      "location": "Polideportivo · instalación 1",
      "directions": "Entrada de recepción del polideportivo. Confirma el punto de encuentro con el servicio.",
      "gear": "Calzado adecuado a la pista, ropa deportiva y agua.",
      "description": "Grupo y tarifa ficticios para demostrar inscripción por nivel. No es oferta oficial confirmada.",
      "duration": 60
    },
    {
      "id": "padel-plus",
      "name": "Pádel avanzado",
      "sport": "Pádel",
      "level": "Avanzado",
      "weekday": 4,
      "time": "18:00",
      "capacity": 4,
      "price": 45,
      "facility": 1,
      "location": "Polideportivo · instalación 1",
      "directions": "Entrada de recepción del polideportivo. Confirma el punto de encuentro con el servicio.",
      "gear": "Calzado adecuado a la pista, ropa deportiva y agua.",
      "description": "Grupo y tarifa ficticios para demostrar inscripción por nivel. No es oferta oficial confirmada.",
      "duration": 60
    },
    {
      "id": "golf-basic",
      "name": "Golf iniciación",
      "sport": "Golf",
      "level": "Principiante",
      "weekday": 3,
      "time": "16:00",
      "capacity": 8,
      "price": 40,
      "facility": null,
      "location": "Punto de encuentro por confirmar en recepción",
      "directions": "Entrada de recepción del polideportivo. Confirma el punto de encuentro con el servicio.",
      "gear": "Calzado deportivo, ropa cómoda y agua. Material de iniciación: confirmar con recepción.",
      "description": "Grupo y tarifa ficticios para demostrar inscripción por nivel. No es oferta oficial confirmada.",
      "duration": 60
    },
    {
      "id": "run-school",
      "name": "Running campus",
      "sport": "Running",
      "level": "Principiante",
      "weekday": 1,
      "time": "19:00",
      "capacity": 20,
      "price": 15,
      "facility": null,
      "location": "Punto de encuentro por confirmar en recepción",
      "directions": "Entrada de recepción del polideportivo. Confirma el punto de encuentro con el servicio.",
      "gear": "Calzado adecuado a la pista, ropa deportiva y agua.",
      "description": "Grupo y tarifa ficticios para demostrar inscripción por nivel. No es oferta oficial confirmada.",
      "duration": 60
    }
  ],
  "tournaments": [
    {
      "id": "rectora-demo",
      "name": "Trofeo Rectora · fútbol DEMO",
      "sport": "Fútbol",
      "starts": "2026-11-07",
      "ends": "2026-11-14",
      "capacity": 16,
      "price": 0,
      "status": "En juego",
      "facility": 4,
      "teams": [
        "Equipo Norte Demo",
        "Equipo Sur Demo",
        "Equipo Este Demo"
      ],
      "description": "Competición ficticia; clasificaciones calculadas con resultados validados por gestión."
    },
    {
      "id": "padel-demo",
      "name": "Encuentro de pádel DEMO",
      "sport": "Pádel",
      "starts": "2026-11-19",
      "ends": "2026-11-20",
      "capacity": 16,
      "price": 10,
      "status": "Inscripción",
      "facility": 1,
      "teams": [],
      "description": "Inscripción y pago de prueba, sin cobro real."
    },
    {
      "id": "discount-one",
      "name": "Torneo ficticio de prueba de descuento",
      "sport": "Pádel",
      "starts": "2026-11-19",
      "ends": "2026-11-20",
      "capacity": 16,
      "price": 10,
      "status": "Inscripción",
      "facility": 1,
      "teams": [],
      "description": "Inscripción y pago de prueba, sin cobro real."
    },
    {
      "id": "discount-two",
      "name": "Torneo ficticio de prueba de descuento",
      "sport": "Pádel",
      "starts": "2026-11-19",
      "ends": "2026-11-20",
      "capacity": 16,
      "price": 10,
      "status": "Inscripción",
      "facility": 1,
      "teams": [],
      "description": "Inscripción y pago de prueba, sin cobro real."
    }
  ],
  "avatar_options": {
    "defaults": {
      "sport": "Golf",
      "skin": "medio",
      "hair": "corto",
      "hair_color": "oscuro",
      "face": "ovalado",
      "eyes": "almendrados",
      "eye_color": "marron",
      "brows": "natural",
      "nose": "suave",
      "mouth": "sonrisa",
      "lip_color": "natural",
      "beard": "ninguna",
      "glasses": "ninguna",
      "headwear": "ninguno",
      "earrings": "ninguno",
      "body": "recta",
      "top": "camiseta",
      "color": "granate",
      "bottom": "short",
      "bottom_color": "grafito",
      "shoes": "blanco",
      "background": "lavanda",
      "pose": "relajada",
      "tier": 0,
      "public": false
    },
    "tabs": [
      [
        "rostro",
        "Rostro"
      ],
      [
        "pelo",
        "Pelo"
      ],
      [
        "detalles",
        "Detalles"
      ],
      [
        "ropa",
        "Ropa"
      ],
      [
        "deporte",
        "Deporte y pose"
      ]
    ],
    "fields": {
      "skin": {
        "label": "Tono de piel",
        "tab": "rostro",
        "options": [
          [
            "porcelana",
            "Porcelana",
            "#f8dfce"
          ],
          [
            "claro",
            "Claro",
            "#f0c6a7"
          ],
          [
            "dorado",
            "Dorado",
            "#dfad80"
          ],
          [
            "medio",
            "Medio",
            "#c58c65"
          ],
          [
            "tostado",
            "Tostado",
            "#a56b48"
          ],
          [
            "oscuro",
            "Oscuro",
            "#7e503b"
          ],
          [
            "profundo",
            "Profundo",
            "#51352d"
          ]
        ]
      },
      "face": {
        "label": "Forma del rostro",
        "tab": "rostro",
        "options": [
          [
            "ovalado",
            "Ovalado"
          ],
          [
            "redondo",
            "Redondo"
          ],
          [
            "cuadrado",
            "Cuadrado"
          ],
          [
            "corazon",
            "Corazón"
          ]
        ]
      },
      "eyes": {
        "label": "Forma de los ojos",
        "tab": "rostro",
        "options": [
          [
            "almendrados",
            "Almendrados"
          ],
          [
            "redondos",
            "Redondos"
          ],
          [
            "suaves",
            "Suaves"
          ]
        ]
      },
      "eye_color": {
        "label": "Color de ojos",
        "tab": "rostro",
        "options": [
          [
            "marron",
            "Marrón",
            "#654334"
          ],
          [
            "avellana",
            "Avellana",
            "#947442"
          ],
          [
            "verde",
            "Verde",
            "#62775b"
          ],
          [
            "azul",
            "Azul",
            "#5a87a8"
          ],
          [
            "gris",
            "Gris",
            "#77818c"
          ]
        ]
      },
      "brows": {
        "label": "Cejas",
        "tab": "rostro",
        "options": [
          [
            "natural",
            "Naturales"
          ],
          [
            "rectas",
            "Rectas"
          ],
          [
            "arqueadas",
            "Arqueadas"
          ],
          [
            "espesas",
            "Espesas"
          ]
        ]
      },
      "nose": {
        "label": "Nariz",
        "tab": "rostro",
        "options": [
          [
            "suave",
            "Suave"
          ],
          [
            "recta",
            "Recta"
          ],
          [
            "ancha",
            "Ancha"
          ]
        ]
      },
      "mouth": {
        "label": "Expresión",
        "tab": "rostro",
        "options": [
          [
            "sonrisa",
            "Sonrisa suave"
          ],
          [
            "amplia",
            "Sonrisa amplia"
          ],
          [
            "neutra",
            "Relajada"
          ]
        ]
      },
      "lip_color": {
        "label": "Labios",
        "tab": "detalles",
        "options": [
          [
            "natural",
            "Natural",
            "#a36760"
          ],
          [
            "rosado",
            "Rosado",
            "#c17d89"
          ],
          [
            "terracota",
            "Terracota",
            "#af6652"
          ],
          [
            "rojo",
            "Rojo",
            "#9d3e4e"
          ]
        ]
      },
      "hair": {
        "label": "Peinado",
        "tab": "pelo",
        "options": [
          [
            "corto",
            "Corto con volumen"
          ],
          [
            "degradado",
            "Degradado"
          ],
          [
            "bob",
            "Media melena"
          ],
          [
            "largo",
            "Largo liso"
          ],
          [
            "ondas",
            "Ondas largas"
          ],
          [
            "rizos",
            "Rizos"
          ],
          [
            "afro",
            "Afro"
          ],
          [
            "recogido",
            "Moño"
          ],
          [
            "coleta",
            "Coleta"
          ],
          [
            "trenzas",
            "Trenzas"
          ],
          [
            "rapado",
            "Rapado"
          ],
          [
            "sin",
            "Sin pelo"
          ]
        ]
      },
      "hair_color": {
        "label": "Color de pelo",
        "tab": "pelo",
        "options": [
          [
            "oscuro",
            "Negro suave",
            "#282a35"
          ],
          [
            "castano",
            "Castaño",
            "#684634"
          ],
          [
            "miel",
            "Castaño miel",
            "#9f754b"
          ],
          [
            "rubio",
            "Rubio",
            "#d8b56d"
          ],
          [
            "cobrizo",
            "Cobrizo",
            "#b7633e"
          ],
          [
            "plata",
            "Plata",
            "#b7bdc8"
          ],
          [
            "rosa",
            "Rosa",
            "#c689ae"
          ],
          [
            "azulado",
            "Azul oscuro",
            "#4f607d"
          ]
        ]
      },
      "beard": {
        "label": "Vello facial",
        "tab": "pelo",
        "options": [
          [
            "ninguna",
            "Sin barba"
          ],
          [
            "sombra",
            "Barba de unos días"
          ],
          [
            "corta",
            "Barba corta"
          ],
          [
            "bigote",
            "Bigote"
          ],
          [
            "perilla",
            "Perilla"
          ]
        ]
      },
      "glasses": {
        "label": "Gafas",
        "tab": "detalles",
        "options": [
          [
            "ninguna",
            "Sin gafas"
          ],
          [
            "redondas",
            "Redondas"
          ],
          [
            "rectangulares",
            "Rectangulares"
          ],
          [
            "sol",
            "De sol"
          ]
        ]
      },
      "headwear": {
        "label": "Accesorio de cabeza",
        "tab": "detalles",
        "options": [
          [
            "ninguno",
            "Ninguno"
          ],
          [
            "gorra",
            "Gorra"
          ],
          [
            "visera",
            "Visera"
          ],
          [
            "cinta",
            "Cinta deportiva"
          ]
        ]
      },
      "earrings": {
        "label": "Pendientes",
        "tab": "detalles",
        "options": [
          [
            "ninguno",
            "Sin pendientes"
          ],
          [
            "punto",
            "Punto"
          ],
          [
            "aros",
            "Aros"
          ]
        ]
      },
      "body": {
        "label": "Silueta",
        "tab": "ropa",
        "options": [
          [
            "estrecha",
            "Estrecha"
          ],
          [
            "recta",
            "Recta"
          ],
          [
            "amplia",
            "Amplia"
          ]
        ]
      },
      "top": {
        "label": "Prenda superior",
        "tab": "ropa",
        "options": [
          [
            "camiseta",
            "Camiseta"
          ],
          [
            "polo",
            "Polo"
          ],
          [
            "sudadera",
            "Sudadera"
          ],
          [
            "chaqueta",
            "Chaqueta deportiva"
          ]
        ]
      },
      "color": {
        "label": "Color de la prenda",
        "tab": "ropa",
        "options": [
          [
            "granate",
            "Granate",
            "#92264d"
          ],
          [
            "azul",
            "Azul",
            "#396aa6"
          ],
          [
            "verde",
            "Verde",
            "#39826a"
          ],
          [
            "violeta",
            "Violeta",
            "#8068aa"
          ],
          [
            "coral",
            "Coral",
            "#d57e75"
          ],
          [
            "crema",
            "Crema",
            "#e4d5bc"
          ],
          [
            "blanco",
            "Blanco",
            "#f1f2f5"
          ],
          [
            "negro",
            "Negro",
            "#343642"
          ],
          [
            "turquesa",
            "Turquesa",
            "#509ea0"
          ]
        ]
      },
      "bottom": {
        "label": "Prenda inferior",
        "tab": "ropa",
        "options": [
          [
            "short",
            "Pantalón corto"
          ],
          [
            "largo",
            "Pantalón largo"
          ],
          [
            "leggings",
            "Mallas"
          ]
        ]
      },
      "bottom_color": {
        "label": "Color del pantalón",
        "tab": "ropa",
        "options": [
          [
            "grafito",
            "Grafito",
            "#3a4152"
          ],
          [
            "azul",
            "Azul noche",
            "#344c6c"
          ],
          [
            "arena",
            "Arena",
            "#bca88a"
          ],
          [
            "blanco",
            "Blanco",
            "#e8e9ed"
          ]
        ]
      },
      "shoes": {
        "label": "Zapatillas",
        "tab": "ropa",
        "options": [
          [
            "blanco",
            "Blanco",
            "#f4f3ef"
          ],
          [
            "negro",
            "Negro",
            "#343642"
          ],
          [
            "coral",
            "Coral",
            "#d98176"
          ],
          [
            "violeta",
            "Violeta",
            "#9785bc"
          ]
        ]
      },
      "background": {
        "label": "Fondo de tu avatar",
        "tab": "detalles",
        "options": [
          [
            "lavanda",
            "Lavanda",
            "#e9e3f4"
          ],
          [
            "azul",
            "Azul cielo",
            "#ddebf5"
          ],
          [
            "melocoton",
            "Melocotón",
            "#f5e1d7"
          ],
          [
            "menta",
            "Menta",
            "#deeee5"
          ],
          [
            "arena",
            "Arena",
            "#eee8dc"
          ]
        ]
      },
      "pose": {
        "label": "Pose",
        "tab": "deporte",
        "options": [
          [
            "relajada",
            "Relajada"
          ],
          [
            "saludo",
            "Saludando"
          ],
          [
            "cintura",
            "Mano en la cintura"
          ]
        ]
      }
    }
  },
  "points_summary": [
    {
      "user": 1,
      "balance": 204,
      "earned": 464
    },
    {
      "user": 2,
      "balance": 32,
      "earned": 112
    },
    {
      "user": 3,
      "balance": 0,
      "earned": 0
    },
    {
      "user": 4,
      "balance": 0,
      "earned": 0
    }
  ],
  "public_players": [
    {
      "id": 1,
      "alias": "Alex Demo",
      "avatar": {
        "skin": "dorado",
        "face": "corazon",
        "eyes": "redondos",
        "eye_color": "verde",
        "brows": "arqueadas",
        "nose": "recta",
        "mouth": "amplia",
        "lip_color": "rosado",
        "hair": "ondas",
        "hair_color": "cobrizo",
        "beard": "ninguna",
        "glasses": "redondas",
        "headwear": "visera",
        "earrings": "aros",
        "body": "amplia",
        "top": "polo",
        "color": "turquesa",
        "bottom": "largo",
        "bottom_color": "arena",
        "shoes": "coral",
        "background": "menta",
        "pose": "saludo",
        "sport": "Golf",
        "tier": 0,
        "public": true
      }
    },
    {
      "id": 2,
      "alias": "Jugador Demo 2",
      "avatar": null
    },
    {
      "id": 3,
      "alias": "Jugador Demo 3",
      "avatar": null
    }
  ],
  "school_occupancy": {
    "padel-basic": 1,
    "padel-plus": 0,
    "golf-basic": 0,
    "run-school": 0
  },
  "school_next_dates": {
    "padel-basic": "2026-11-10",
    "padel-plus": "2026-11-12",
    "golf-basic": "2026-11-11",
    "run-school": "2026-11-16"
  },
  "tournament_public_roster": [
    {
      "tournament": "rectora-demo",
      "alias": "Alex Demo",
      "avatar": {
        "skin": "dorado",
        "face": "corazon",
        "eyes": "redondos",
        "eye_color": "verde",
        "brows": "arqueadas",
        "nose": "recta",
        "mouth": "amplia",
        "lip_color": "rosado",
        "hair": "ondas",
        "hair_color": "cobrizo",
        "beard": "ninguna",
        "glasses": "redondas",
        "headwear": "visera",
        "earrings": "aros",
        "body": "amplia",
        "top": "polo",
        "color": "turquesa",
        "bottom": "largo",
        "bottom_color": "arena",
        "shoes": "coral",
        "background": "menta",
        "pose": "saludo",
        "sport": "Golf",
        "tier": 0,
        "public": true
      }
    },
    {
      "tournament": "rectora-demo",
      "alias": "Jugador Demo 2",
      "avatar": null
    },
    {
      "tournament": "rectora-demo",
      "alias": "Jugador Demo 3",
      "avatar": null
    },
    {
      "tournament": "padel-demo",
      "alias": "Alex Demo",
      "avatar": {
        "skin": "dorado",
        "face": "corazon",
        "eyes": "redondos",
        "eye_color": "verde",
        "brows": "arqueadas",
        "nose": "recta",
        "mouth": "amplia",
        "lip_color": "rosado",
        "hair": "ondas",
        "hair_color": "cobrizo",
        "beard": "ninguna",
        "glasses": "redondas",
        "headwear": "visera",
        "earrings": "aros",
        "body": "amplia",
        "top": "polo",
        "color": "turquesa",
        "bottom": "largo",
        "bottom_color": "arena",
        "shoes": "coral",
        "background": "menta",
        "pose": "saludo",
        "sport": "Golf",
        "tier": 0,
        "public": true
      }
    },
    {
      "tournament": "discount-one",
      "alias": "Alex Demo",
      "avatar": {
        "skin": "dorado",
        "face": "corazon",
        "eyes": "redondos",
        "eye_color": "verde",
        "brows": "arqueadas",
        "nose": "recta",
        "mouth": "amplia",
        "lip_color": "rosado",
        "hair": "ondas",
        "hair_color": "cobrizo",
        "beard": "ninguna",
        "glasses": "redondas",
        "headwear": "visera",
        "earrings": "aros",
        "body": "amplia",
        "top": "polo",
        "color": "turquesa",
        "bottom": "largo",
        "bottom_color": "arena",
        "shoes": "coral",
        "background": "menta",
        "pose": "saludo",
        "sport": "Golf",
        "tier": 0,
        "public": true
      }
    }
  ],
  "resource_blocks": [
    {
      "facility": 1,
      "date": "2026-11-10",
      "time": "17:00"
    }
  ],
  "participation_opportunities": [],
  "participation_metrics": {
    "requests": 0,
    "requesters": 0,
    "open": 0,
    "sessions": 0,
    "invitations": 0,
    "accepted": 0,
    "attendance": 0,
    "unique": 0,
    "first_recorded": 0,
    "mature_30": 0,
    "repeated_30": 0,
    "actual_cost": 0,
    "closed_sessions": 0,
    "cost_per_participant": null
  },
  "ai_available": false,
  "notifications": []
};
