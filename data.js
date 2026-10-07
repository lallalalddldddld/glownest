const IMG = {
  cozyBedroom: 'https://images.unsplash.com/photo-1774578342100-f779e988c83d?auto=format&fit=crop&w=1100&q=80',
  lamp: 'https://images.unsplash.com/photo-1780140765084-88e4e0d75528?auto=format&fit=crop&w=900&q=80',
  gaming: 'https://images.unsplash.com/photo-1775410633801-5d7997f795c6?auto=format&fit=crop&w=1000&q=80',
  gaming2: 'https://images.unsplash.com/photo-1760999896198-b7e780e42500?auto=format&fit=crop&w=1000&q=80',
  plant: 'https://images.unsplash.com/photo-1570451487767-4b63e1966460?auto=format&fit=crop&w=900&q=80',
  bedding: 'https://images.unsplash.com/photo-1741308478100-85c440e1b4bf?auto=format&fit=crop&w=1000&q=80',
  candleDesk: 'https://images.unsplash.com/photo-1769794370990-614f765fa360?auto=format&fit=crop&w=1000&q=80',
  candle: 'https://images.unsplash.com/photo-1781736363359-a9d529d13771?auto=format&fit=crop&w=1000&q=80',
  woodDesk: 'https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?auto=format&fit=crop&w=1000&q=80',
  workspace: 'https://images.unsplash.com/photo-1781106743595-1a2c6397e812?auto=format&fit=crop&w=1000&q=80'
};

const categories = {
  'sfeerverlichting': {name:'Sfeerverlichting', intro:'Warme lampen en subtiele setupverlichting voor precies genoeg sfeer, zonder dat je kamer op een showroom lijkt.', image:IMG.lamp},
  'woondecoratie': {name:'Woondecoratie', intro:'Rustige vormen, zachte kleuren en kleine details die je kamer direct meer karakter geven.', image:IMG.cozyBedroom},
  'textiel-comfort': {name:'Textiel & Comfort', intro:'Plaids, kussens en zachte materialen die je ruimte warmer laten aanvoelen én comfortabeler maken.', image:IMG.bedding},
  'geur-wellness': {name:'Geur & Wellness', intro:'Kaarsen, geuren en rustige accenten voor een ontspannen sfeer na een drukke dag.', image:IMG.candle},
  'planten-potten': {name:'Planten & Potten', intro:'Kleine groene accenten en potten die perfect passen in een modern, rustig interieur.', image:IMG.plant}
};

const products = [
  {id:'glow-table-lamp',name:'Glow Tafellamp',category:'sfeerverlichting',price:49,rating:4.8,reviews:38,image:IMG.lamp,short:'Warm dimbaar licht voor nachtkastje of bureau.',desc:'Een compacte tafellamp met warm, rustig licht. Ideaal naast je bed, op een plank of als zachte verlichting naast je monitor.',specs:['Dimbaar warm wit licht','2700K kleurtemperatuur','USB-C aansluiting','Metalen voet, linnen kap'],tags:['lamp','tafel','warm','bureau','gaming']},
  {id:'halo-monitor-light',name:'Halo Monitor Light',category:'sfeerverlichting',price:34.95,rating:4.6,reviews:24,image:IMG.gaming,short:'Zachte indirecte verlichting achter je scherm.',desc:'Maak je gaming- of werksetup rustiger met een subtiele lichtbalk achter je monitor. Geen felle RGB-show, wel sfeer.',specs:['USB voeding','3 helderheidsstanden','Warm wit + amber','Past op 24–34 inch monitoren'],tags:['gaming','monitor','setup','led','lamp']},
  {id:'nest-led-strip',name:'Nest Ambient Strip',category:'sfeerverlichting',price:24.95,rating:4.5,reviews:31,image:IMG.gaming2,short:'Flexibele lichtstrip voor kast, bed of bureau.',desc:'Een zachte ambient strip voor onder een bureau, achter een kast of langs een hoofdbord. Eenvoudig te plaatsen en rustig van kleur.',specs:['3 meter','USB-C controller','Warm wit, amber en zacht oranje','Zelfklevende achterzijde'],tags:['gaming','led','strip','sfeer']},
  {id:'zen-vase',name:'Zen Vaas',category:'woondecoratie',price:24.90,rating:4.7,reviews:19,image:IMG.plant,short:'Matte vaas in rustige zandkleur.',desc:'Een minimalistische keramische vaas die makkelijk combineert met droogbloemen, takken of gewoon op zichzelf.',specs:['Keramiek','Hoogte 22 cm','Matte zandfinish','Handwas aanbevolen'],tags:['vaas','decoratie','keramiek','minimalistisch']},
  {id:'arc-tray',name:'Arc Desk Tray',category:'woondecoratie',price:16.50,rating:4.4,reviews:16,image:IMG.woodDesk,short:'Opbergbakje voor sleutels, kabels en kleine spullen.',desc:'Een klein houten bakje om je bureau of nachtkastje rustig te houden. Perfect voor kabels, oordopjes en losse accessoires.',specs:['FSC-houtlook','28 × 12 cm','Antislip voetjes','Afgeronde randen'],tags:['bureau','gaming','accessoires','organizer','decoratie']},
  {id:'soft-cove-cushion',name:'Soft Cove Kussen',category:'textiel-comfort',price:22.95,rating:4.7,reviews:27,image:IMG.bedding,short:'Zacht sierkussen met bouclé textuur.',desc:'Een comfortabel sierkussen in crème bouclé dat makkelijk past op bed, bank of leesstoel.',specs:['45 × 45 cm','Afneembare hoes','Polyester bouclé','Machinewas 30°C'],tags:['kussen','textiel','zacht','bed']},
  {id:'cozy-plaid',name:'Cozy Plaid',category:'textiel-comfort',price:34.90,rating:4.9,reviews:42,image:IMG.bedding,short:'Luchtige plaid in warme zandkleur.',desc:'Zacht genoeg voor filmavonden, licht genoeg om het hele jaar op je bed of bank te laten liggen.',specs:['130 × 170 cm','Zachte microvezel','Wasbaar op 30°C','OEKO-TEX gecertificeerd'],tags:['plaid','deken','textiel','comfort']},
  {id:'cloud-desk-mat',name:'Cloud Desk Mat',category:'textiel-comfort',price:19.95,rating:4.6,reviews:34,image:IMG.workspace,short:'Zachte XL deskmat in warm beige.',desc:'Een rustige basis voor toetsenbord en muis. Geeft je bureau meer warmte en voorkomt een harde, technische uitstraling.',specs:['80 × 35 cm','Waterafstotend oppervlak','Rubberen antislip onderkant','Gestikte rand'],tags:['gaming','deskmat','bureau','setup','comfort']},
  {id:'warmth-candle',name:'Warmth Geurkaars',category:'geur-wellness',price:16.25,rating:4.8,reviews:51,image:IMG.candle,short:'Amber, vanille en zacht cederhout.',desc:'Een rustige geurkaars voor avonden thuis. Warm, licht zoet en niet overheersend.',specs:['35 branduren','Sojawasmix','Katoenen lont','180 g'],tags:['kaars','geur','wellness','amber','vanille']},
  {id:'calm-reed-diffuser',name:'Calm Reed Diffuser',category:'geur-wellness',price:21.95,rating:4.5,reviews:22,image:IMG.candleDesk,short:'Subtiele huisgeur met linnen en sandalwood.',desc:'Een eenvoudige diffuser die je kamer langdurig fris en warm laat ruiken zonder scherpe parfumgeur.',specs:['100 ml','6 geurstokjes','Tot 8 weken geur','Linnen & sandalwood'],tags:['diffuser','geur','wellness','sandalwood']},
  {id:'mini-fern',name:'Mini Fern',category:'planten-potten',price:12.95,rating:4.6,reviews:18,image:IMG.plant,short:'Compacte groene plant voor plank of bureau.',desc:'Een makkelijke, compacte varen voor wie wat groen wil zonder dat de plant meteen de hele kamer overneemt.',specs:['Potmaat 9 cm','Hoogte ± 24 cm','Half-schaduw','1–2× per week water'],tags:['plant','groen','bureau','varen']},
  {id:'sand-pot',name:'Sand Pot',category:'planten-potten',price:14.50,rating:4.7,reviews:14,image:IMG.plant,short:'Keramische plantenpot met zachte zandfinish.',desc:'Een matte pot met rustige vorm. Combineert goed met kleinere groene planten en natuurlijke materialen.',specs:['Ø 14 cm','Keramiek','Waterdichte binnenlaag','Mat zand'],tags:['pot','plant','keramiek','decoratie']},
  {id:'aurora-desk-lamp',name:'Aurora Desk Lamp',category:'sfeerverlichting',price:59.95,rating:4.9,reviews:29,image:IMG.woodDesk,short:'Minimalistische bureaulamp met indirect licht.',desc:'Een slanke lamp voor werk of gaming. Gericht licht op je bureau, met een zachte gloed naar achteren.',specs:['Dimbaar','2700–4000K','USB-C poort','Aluminium behuizing'],tags:['lamp','bureau','gaming','setup']},
  {id:'linen-catchall',name:'Linen Catchall',category:'woondecoratie',price:13.95,rating:4.3,reviews:11,image:IMG.workspace,short:'Zachte organizer voor kleine dagelijkse spullen.',desc:'Houd je setup of nachtkastje netjes met een compacte vilten organizer voor afstandsbediening, kabels en accessoires.',specs:['Gerecycled vilt','24 × 16 cm','Lichtgewicht','Zandkleur'],tags:['organizer','bureau','accessoires','decoratie']},
  {id:'night-calm-pillow',name:'Night Calm Kussen',category:'textiel-comfort',price:29.95,rating:4.8,reviews:33,image:IMG.cozyBedroom,short:'Stevig maar zacht slaapkussen voor rustige avonden.',desc:'Een comfortabel kussen met middelhoge ondersteuning, geschikt voor rug- en zijslapers.',specs:['50 × 70 cm','Microvezelvulling','Ademende hoes','Wasbaar op 40°C'],tags:['kussen','slaap','comfort','bed']}
];

const reviews = [
  {name:'Sophie',text:'Prachtige producten en snelle levering. Echt een aanrader!',rating:5},
  {name:'Mark',text:'De lampen geven precies de sfeer die ik zocht. Super blij mee.',rating:5},
  {name:'Lisa',text:'Mooie kwaliteit en alles met zorg verpakt. Top service!',rating:5}
];

const money = new Intl.NumberFormat('nl-NL',{style:'currency',currency:'EUR'});
const state = {
  cart: JSON.parse(localStorage.getItem('glownest-cart')||'{}'),
  wishlist: JSON.parse(localStorage.getItem('glownest-wishlist')||'[]')
};
const $ = s => document.querySelector(s);
const app = $('#app');