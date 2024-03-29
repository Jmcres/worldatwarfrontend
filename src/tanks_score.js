const tanksTwo = [
    {
      id: 1,
      index: 0,
      name: "Medium Tank M4 Sherman",
      img_url: 'http://www.tanks-encyclopedia.com/ww2/US/Medium/M4/M4_Sherman_model42_belgium_45.png',
      role: "Medium Tank",
      country: "United States" ,
      side: "Allies",
        gun:"M2 L/32 or M3 L/40 75 mm (2.95 in) " ,
        ammo:"90 rounds",
      speed: "30 mph" ,
      armor: "Maximum 76 mm (3 in)",
      Range: "120 mi",
      crew: 5,
      firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
    },
    {
        id: 2,
        index: 1,
        name: "T26E4 Super Pershing",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/US/Heavy/M26_Pershing/T26A4_Super-Pershing.png',
        role: "Heavy/Medium Tank",
        country: "United States" ,
        side: "Allies",
          gun:"T15E1 or T15E2 90 mm tank gun (2.95 in)" ,
          ammo:"n/a",
        speed: "22 mph" ,
        armor: "100 mm (3.94 in)",
        Range: "100 mi",
        crew: 5,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 3,
        index: 2,
        name: "3in GMC M10 “Wolverine”",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/US/Tanks_Hunters/M10_Wolverine/M10_Wolverine_early.png',
        role: "Tank Killer",
        country: "United States" ,
        side: "Allies",
          gun:"3″ (76.2 mm) Gun M7" ,
          ammo:"54 rounds",
        speed: "32 mph " ,
        armor: "2.3 in (57.2 mm)",
        Range: "186 mi",
        crew: 4,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 4,
        index: 3,
        name: "T-34/76”",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/soviet/Medium_Tanks/T34-76/t34-76_sovietcamo.png',
        role: "Medium Tank",
        country: "Soviet Union" ,
        side: "Allies",
          gun:"F-34 76.2 mm (3 in) gun",
          ammo:"n/a",
        speed: "34 mph " ,
        armor: "up to 45 mm (1.77 in)",
        Range: "186 mi",
        crew: 4,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 5,
        index: 4,
        name: "SU-100",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/soviet/SPGs/SU-85-100/SU100-2.png',
        role: "Tank Destroyer",
        country: "Soviet Union" ,
        side: "Allies",
          gun:"100 mm (3.94 in) D-10S AT gun",
          ammo:"n/a",
        speed: "30 mph " ,
        armor: "75 mm (2.95 in)",
        Range: "230 mi",
        crew: 4,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 5,
        index: 4,
        name: "IS-2",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/soviet/Heavy_Tanks/IS-II/IS-II_29Guards_HTB_Poland45.png',
        role: "Heavy Tank",
        country: "Soviet Union" ,
        side: "Allies",
          gun:"122 mm (4.8 in) D-25T",
          ammo:"n/a",
        speed: "23 mph " ,
        armor: "120 mm (4.72 in)",
        Range: "150 mi",
        crew: 4,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 6,
        index: 5,
        name: "Panzer V Panther",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/nazi_germany/Medium_Tanks/Panzer-V_Panther/Panther_Ausf-D-1_Turm-IV.png',
        role: "Medium Tank",
        country: "Germany" ,
        side: "Axis",
          gun:"7.5 cm Kw.K.42 L/70",
          ammo:"79 rounds",
        speed: "34 mph " ,
        armor: " 80 mm",
        Range: "124 mi",
        crew: 5,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 7,
        index: 6,
        name: "Jagdpanzer IV",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/nazi_germany/Panzerjagers/Jagdpanzer-IV/Jagdpanzer-IV-L48_33PzAbt_15PZD_Italy1944.png',
        role: "Tank Hunter",
        country: "Germany" ,
        side: "Axis",
          gun:"7.5 cm (2.95 in) Pak 39 L/48 or Pak 42 L/70",
          ammo:"55 rounds",
        speed: "25 mph " ,
        armor: " 80 mm (3.15 in)",
        Range: "130 mi",
        crew: 4,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 8,
        index: 7,
        name: "Jagdpanzer 38(t) Hetzer",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/nazi_germany/Panzerjagers/Hetzer/Hetzer-Hun-winter44-45.png',
        role: "Tank Hunter",
        country: "Germany" ,
        side: "Axis",
          gun:"75 mm (2.95 in) PaK 39 L/48",
          ammo:"41 rounds",
        speed: "26 mph " ,
        armor: "  60 mm  (2.36 in)",
        Range: "110 mi",
        crew: 4,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 9,
        index: 8,
        name: "Panzer IV",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/nazi_germany/Medium_Tanks/Panzer-IV/panzer_IV_AusfE.png',
        role: "Medium Tank",
        country: "Germany" ,
        side: "Axis",
          gun:"7.5 cm Kw.K L/24 gun",
          ammo:"n/a",
        speed: "20 mph " ,
        armor: "  30 mm ",
        Range: "130 mi",
        crew: 5,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
      {
        id: 10,
        index: 8,
        name: "Panzer VI Tiger",
        img_url: 'http://www.tanks-encyclopedia.com/ww2/nazi_germany/Heavy_Tanks/Panzer-VI_Tiger/VK4501_PzKpfwVI_Tiger-P_SdKfz-181.png',
        role: "Heavy Tank",
        country: "Germany" ,
        side: "Axis",
        gun:"88 mm (3.4 in) KwK 36 L/56",
        ammo:" 92-120 rounds",
        speed: "28 mph " ,
        armor: "  100 mm ",
        Range: "77.67 miles",
        crew: 5,
        firepowergun: 3 ,
        firepowerammo: 3,
        speedscore: 3,
        health: 3,
        protection: 3 ,
        rangescore: 3,
      },
  ]
  
  export default tanksTwo