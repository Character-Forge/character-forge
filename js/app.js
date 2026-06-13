/* ═══════════════════════════
   SUBCLASSES (PHB + Tasha's)
   ═══════════════════════════ */
const SUBCLASSES = {
  artifice:    [{v:'alquimista',l:'Alquimista'},{v:'armeiro',l:'Armeiro'},{v:'atirador',l:'Atirador'},{v:'ferreiro',l:'Ferreiro de Batalha'}],
  barbaro:     [{v:'berserker',l:'Caminho do Berserker'},{v:'totem',l:'Caminho do Guerreiro Totêmico'},{v:'besta',l:'Caminho da Besta (Tasha)'},{v:'magia-selvagem',l:'Caminho da Magia Selvagem (Tasha)'}],
  bardo:       [{v:'conhecimento',l:'Colégio do Conhecimento'},{v:'valor',l:'Colégio da Bravura'},{v:'criacao',l:'Colégio da Criação (Tasha)'},{v:'eloquencia',l:'Colégio da Eloquência (Tasha)'}],
  bruxo:       [{v:'arquifada',l:'O Arquifada'},{v:'grande-antigo',l:'O Grande Antigo'},{v:'infernal',l:'O Infernal'},{v:'genio',l:'O Gênio (Tasha)'},{v:'insondavel',l:'O Insondável (Tasha)'}],
  clerigo:     [{v:'vida',l:'Domínio da Vida'},{v:'luz',l:'Domínio da Luz'},{v:'natureza',l:'Domínio da Natureza'},{v:'tempestade',l:'Domínio da Tempestade'},{v:'trapaca',l:'Domínio da Trapaça'},{v:'guerra',l:'Domínio da Guerra'},{v:'conhecimento',l:'Domínio do Conhecimento'},{v:'morte',l:'Domínio da Morte'},{v:'ordem',l:'Domínio da Ordem (Tasha)'},{v:'paz',l:'Domínio da Paz (Tasha)'},{v:'crepusculo',l:'Domínio do Crepúsculo (Tasha)'}],
  druida:      [{v:'terra',l:'Círculo da Terra'},{v:'lua',l:'Círculo da Lua'},{v:'esporos',l:'Círculo dos Esporos (Tasha)'},{v:'estrelas',l:'Círculo das Estrelas (Tasha)'},{v:'fogo-selvagem',l:'Círculo do Fogo Selvagem (Tasha)'}],
  feiticeiro:  [{v:'magia-selvagem',l:'Magia Selvagem'},{v:'draconico',l:'Linhagem Dracônica'},{v:'mente-aberrante',l:'Mente Aberrante (Tasha)'},{v:'alma-cronomatica',l:'Alma Cronométrica (Tasha)'}],
  guerreiro:   [{v:'campeao',l:'Campeão'},{v:'cavaleiro-batalha',l:'Cavaleiro de Batalha'},{v:'mestre-batalha',l:'Mestre de Batalha'},{v:'cavaleiro-arcano',l:'Cavaleiro Arcano'},{v:'cavaleiro-runa',l:'Cavaleiro de Runa (Tasha)'},{v:'psi',l:'Guerreiro Psi (Tasha)'}],
  ladino:      [{v:'assassino',l:'Assassino'},{v:'arcano',l:'Trapaceiro Arcano'},{v:'ladrao',l:'Ladrão'},{v:'alma-fantasma',l:'Alma Fantasma (Tasha)'},{v:'espiao',l:'Espião (Tasha)'}],
  mago:        [{v:'abjuracao',l:'Tradição da Abjuração'},{v:'conjuracao',l:'Tradição da Conjuração'},{v:'divinacao',l:'Tradição da Adivinhação'},{v:'encantamento',l:'Tradição do Encantamento'},{v:'evocacao',l:'Tradição da Evocação'},{v:'ilusionismo',l:'Tradição do Ilusionismo'},{v:'necromancia',l:'Tradição da Necromancia'},{v:'transmutacao',l:'Tradição da Transmutação'},{v:'lamina',l:'Lâmina Cantante (Tasha)'},{v:'escribas',l:'Ordem dos Escribas (Tasha)'}],
  monge:       [{v:'quatro-elementos',l:'Caminho dos Quatro Elementos'},{v:'mao-aberta',l:'Caminho da Mão Aberta'},{v:'sombra',l:'Caminho da Sombra'},{v:'misericordia',l:'Caminho da Misericórdia (Tasha)'},{v:'astral',l:'Caminho da Forma Astral (Tasha)'}],
  paladino:    [{v:'devocao',l:'Juramento de Devoção'},{v:'anciaos',l:'Juramento dos Anciões'},{v:'vinganca',l:'Juramento de Vingança'},{v:'conquista',l:'Juramento de Conquista'},{v:'gloria',l:'Juramento da Glória (Tasha)'},{v:'vigilancia',l:'Juramento da Vigilância (Tasha)'}],
  patrulheiro: [{v:'cacador',l:'Caçador'},{v:'mestre-besta',l:'Mestre de Bestas'},{v:'furtivo',l:'Furtivo (Tasha)'},{v:'exterminador',l:'Exterminador (Tasha)'}],
};

/* ═══════════════════════════
   DIVINDADES POR CLASSE/RAÇA
   (baseado no PHB apêndice B — Panteão dos Reinos Esquecidos)
   ═══════════════════════════ */
const DEIDADES = {
  // CLÉRIGO e PALADINO — lista completa dos Reinos Esquecidos (PHB p.294)
  clerigo: [
    'Ao, o Senhor dos Sobre-Deuses',
    'Auril (natureza, inverno)',
    'Azuth (magia, magos)',
    'Bane (tirania, ódio)',
    'Beshaba (má fortuna)',
    'Bhaal (assassinato)',
    'Chauntea (agricultura)',
    'Cyric (mentiras)',
    'Deneir (escrita)',
    'Eldath (paz)',
    'Gond (artesanato)',
    'Helm (proteção)',
    'Ilmater (resistência)',
    'Kelemvor (morte)',
    'Lathander (aurora, renascimento)',
    'Leira (ilusão)',
    'Lliira (alegria)',
    'Loviatar (dor)',
    'Malar (caça)',
    'Mask (sombras)',
    'Mielikki (floresta)',
    'Milil (poesia, canção)',
    'Myrkul (mortos)',
    'Mystra (magia)',
    'Oghma (conhecimento)',
    'Savras (profecia)',
    'Selûne (lua)',
    'Shar (escuridão)',
    'Silvanus (natureza selvagem)',
    'Sune (amor, beleza)',
    'Talona (doença, veneno)',
    'Talos (tempestades)',
    'Tempus (guerra)',
    'Torm (coragem)',
    'Tymora (boa fortuna)',
    'Tyr (justiça)',
    'Umberlee (mar)',
    'Waukeen (comércio)',
  ],
  paladino: [
    'Bahamut (bem, proteção)',
    'Helm (proteção, guardas)',
    'Ilmater (resistência, mártires)',
    'Lathander (aurora, renascimento)',
    'Torm (coragem, lealdade)',
    'Tyr (justiça, lei)',
    'Sune (amor, beleza)',
    'Mystra (magia)',
    'Kelemvor (morte honrada)',
    'Selûne (lua, marinheiros)',
    'Mielikki (floresta, guardas)',
    'Chauntea (agricultura, vida)',
  ],
  // RAÇAS
  anao: [
    'Moradin (criação, ferreiros)',
    'Clangeddin Silverbeard (batalha)',
    'Berronar Truesilver (segurança, saúde)',
    'Dugmaren Brightmantle (descoberta)',
    'Dumathoin (segredos)',
    'Gorm Gulthyn (proteção)',
    'Haela Brightaxe (sorte em batalha)',
    'Marthammor Duin (viajantes)',
    'Sharindlar (cura, cortejo)',
    'Thard Harr (natureza selvagem)',
    'Vergadain (riqueza, sorte)',
  ],
  elfo: [
    'Corellon Larethian (magia, arte)',
    'Aerdrie Faenya (ar, clima)',
    'Deep Sashelas (mar)',
    'Erevan Ilesere (truques)',
    'Fenmarel Mestarine (exilados)',
    'Hanali Celanil (amor, beleza)',
    'Labelas Enoreth (tempo)',
    'Rillifane Rallathil (natureza)',
    'Sehanine Moonbow (lua, sonhos)',
    'Shevarash (vingança)',
    'Solonor Thelandira (caça)',
  ],
  tiefling: [
    'Asmodeus (tirano dos Infernos)',
    'Dispater (riqueza, proteção)',
    'Mammon (ganância)',
    'Fierna (sedução)',
    'Glasya (crime, controle)',
    'Levistus (sobrevivência)',
    'Belial (perversão)',
    'Mephistopheles (magia arcana)',
    'Zariel (guerra)',
  ],
  draconato: [
    'Bahamut (dragões de bem, honra)',
    'Tiamat (dragões de mal, ganância)',
  ],
  gnomo: [
    'Garl Glittergold (proteção, enganação)',
    'Baervan Wildwanderer (natureza)',
    'Baravar Cloakshadow (ilusão)',
    'Callarduran Smoothhands (mineração)',
    'Flandal Steelskin (mineração, ferraria)',
    'Gaerdal Ironhand (proteção)',
    'Nebelun (invenção, sorte)',
    'Segojan Earthcaller (terra)',
    'Urdlen (ganância, assassinato)',
  ],
  halfling: [
    'Yondalla (proteção, fertilidade)',
    'Arvoreen (proteção, guerreiros)',
    'Brandobaris (furtividade, aventura)',
    'Cyrrollalee (amizade, confiança)',
    'Sheela Peryroyl (natureza)',
    'Urogalan (terra, morte)',
  ],
};

// Classes/raças sem lista específica ficam com campo livre
const CLASSES_COM_LISTA = ['clerigo','paladino'];
const RACAS_COM_LISTA   = ['anao','elfo','tiefling','draconato','gnomo','halfling'];

const CLASSE_NAMES = {
  artifice:'Artífice', barbaro:'Bárbaro', bardo:'Bardo', bruxo:'Bruxo',
  clerigo:'Clérigo', druida:'Druida', feiticeiro:'Feiticeiro', guerreiro:'Guerreiro',
  ladino:'Ladino', mago:'Mago', monge:'Monge', paladino:'Paladino', patrulheiro:'Patrulheiro',
};

let selectedAlignment = '';

/* ═══════════════════════
   HELPERS DIVINDADE
   ═══════════════════════ */
function buildDeitySelect(deities) {
  const sel = document.getElementById('deity-select');
  sel.innerHTML = `<option value="">${t('optChooseDeity')}</option>`;
  deities.forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = d;
    sel.appendChild(o);
  });
  // opção Outro
  const outro = document.createElement('option');
  outro.value = '__outro__'; outro.textContent = t('dynDeityOther');
  sel.appendChild(outro);
}

function onDeitySelectChange() {
  const val = document.getElementById('deity-select').value;
  const freeWrap = document.getElementById('deity-free-wrap');
  const freeInput = document.getElementById('deity-free');
  if (val === '__outro__') {
    freeWrap.style.display = 'block';
    freeInput.placeholder = t('dynDeityTypePlaceholder');
    freeInput.focus();
  } else {
    freeWrap.style.display = 'none';
    freeInput.value = '';
  }
}

function updateDeityField() {
  const classe = document.getElementById('char-class').value;
  const raca   = document.getElementById('char-race').value;

  const selectWrap = document.getElementById('deity-select-wrap');
  const freeWrap   = document.getElementById('deity-free-wrap');
  const freeInput  = document.getElementById('deity-free');
  const label      = document.getElementById('deity-label');
  const tooltip    = document.getElementById('deity-tooltip');

  // Determinar lista: classe tem prioridade sobre raça
  let lista = null;
  if (CLASSES_COM_LISTA.includes(classe)) {
    lista = DEIDADES[classe];
    label.textContent = t('dynDeityLabelCleric');
    tooltip.textContent = t('dynDeityTipCleric');
  } else if (RACAS_COM_LISTA.includes(raca)) {
    lista = DEIDADES[raca];
    label.textContent = t('dynDeityLabelPanel');
    tooltip.textContent = t('dynDeityTip');
  } else {
    label.textContent = t('dynDeityLabel');
    tooltip.textContent = t('dynDeityTip');
  }

  if (lista) {
    buildDeitySelect(lista);
    selectWrap.style.display = 'block';
    freeWrap.style.display = 'none';
    freeInput.value = '';
    // reset se estava em outro
    document.getElementById('deity-select').value = '';
  } else {
    selectWrap.style.display = 'none';
    freeWrap.style.display = 'block';
    freeInput.placeholder = t('dynDeityPlaceholder');
  }
}

/* ═══════════════════════
   CLASSE CHANGE
   ═══════════════════════ */
function onClassChange() {
  const val  = document.getElementById('char-class').value;
  const body = document.body;
  const badge = document.getElementById('class-badge');
  const subField  = document.getElementById('subclass-field');
  const subSelect = document.getElementById('char-subclass');

  // Resetar point buy e incrementos de habilidade ao trocar de classe
  ATTRS.forEach(a => { pbValores[a] = 8; });
  Object.keys(ihState).forEach(k => { delete ihState[k]; });
  if (window._habDataMap) window._habDataMap = {};
  _closeSkillPopover();

  body.className = body.className.replace(/classe-\S+/g, '').trim();
  if (val) {
    body.classList.add('classe-' + val);
    badge.textContent = getClasseNome(val);
    badge.classList.add('visible');
    const subs = (currentLang === 'en' ? SUBCLASSES_EN[val] : SUBCLASSES[val]) || [];
    subSelect.innerHTML = `<option value="">${t('optChooseSpec')}</option>`;
    subs.forEach(s => {
      const o = document.createElement('option');
      o.value = s.v; o.textContent = s.l; subSelect.appendChild(o);
    });
    subField.style.display = 'block';
  } else {
    badge.classList.remove('visible');
    subField.style.display = 'none';
  }
  updateDeityField();
  // Atualizar seção de atributos se já estiver visível
  if (document.getElementById('sec-atributos').style.display !== 'none') {
    renderPointBuy();
  }
  // Atualizar equipamento se já estiver visível
  if (document.getElementById('sec-equipamento').style.display !== 'none') {
    eqEscolhas = {};
    eqArmasEscolhidas = {};
    renderEquipamentoClasse();
    atualizarInventarioVisual();
  }
  // Atualizar seção de magias/habilidades se já estiver visível
  if (document.getElementById('sec-magias').style.display !== 'none') {
    renderMagias();
  }
}
function onSubclassChange() {
  if (document.getElementById('sec-magias').style.display !== 'none') {
    renderMagias();
  }
}
function onLevelChange() {
  // Re-render habilidades/magias quando o nível muda
  if (document.getElementById('sec-magias').style.display !== 'none') {
    renderMagias();
  }
  // Re-render atributos se visível (bônus de proficiência muda com nível)
  if (document.getElementById('sec-atributos').style.display !== 'none') {
    renderPointBuy();
  }
}
function onRaceChange() {
  updateDeityField();
  // Resetar sub-raça, bônus livres e ancestral dracônico ao trocar raça
  subraçaEscolhida = '';
  racialLivreEscolhas = {};
  ancestralDraconico = '';
  // Mostrar/ocultar e popular selects condicionais
  renderSubraceField();
  renderDraconicField();
  // Atualizar seção de atributos se já estiver visível
  if (document.getElementById('sec-atributos').style.display !== 'none') {
    renderPointBuy();
  }
}

function renderSubraceField() {
  const raca = document.getElementById('char-race').value;
  const field = document.getElementById('subrace-field');
  const sel = document.getElementById('char-subrace');
  if (!field || !sel) return;

  if (!raca || !RACAS_COM_SUBRACA.includes(raca)) {
    field.style.display = 'none';
    sel.value = '';
    return;
  }

  const subs = SUBRACES[raca] || [];
  sel.innerHTML = `<option value="">${t('optChooseSubrace')}</option>`;
  subs.forEach(s => {
    const o = document.createElement('option');
    o.value = s.value;
    o.textContent = currentLang === 'en' ? s.en : s.pt;
    if (s.value === subraçaEscolhida) o.selected = true;
    sel.appendChild(o);
  });
  field.style.display = 'block';
}

function renderDraconicField() {
  const raca = document.getElementById('char-race').value;
  const field = document.getElementById('draconic-field');
  const sel = document.getElementById('char-draconic');
  if (!field || !sel) return;

  if (raca !== RACA_COM_ANCESTRAL) {
    field.style.display = 'none';
    return;
  }

  sel.innerHTML = `<option value="">${t('optChooseDraconic')}</option>`;
  DRACONIC_ANCESTORS.forEach(a => {
    const o = document.createElement('option');
    o.value = a.value;
    o.textContent = currentLang === 'en' ? a.en : a.pt;
    if (a.value === ancestralDraconico) o.selected = true;
    sel.appendChild(o);
  });
  field.style.display = 'block';
}

function onSubraceChange() {
  subraçaEscolhida = document.getElementById('char-subrace').value;
  racialLivreEscolhas = {};
  if (document.getElementById('sec-atributos').style.display !== 'none') {
    renderPointBuy();
  }
}

function onDraconicChange() {
  ancestralDraconico = document.getElementById('char-draconic').value;
  // Puramente cosmético — sem efeito mecânico
}


function onBackgroundChange() {
  // Atualizar seção de perícias se já estiver visível
  if (document.getElementById('sec-pericias').style.display !== 'none') {
    periciasEscolhidas.clear();
    renderPericias();
  }
  // Atualizar equipamento de antecedente se já estiver visível
  if (document.getElementById('sec-equipamento').style.display !== 'none') {
    renderEquipamentoAntecedente();
    atualizarInventarioVisual();
  }
}

/* ═══════════════════════
   NOME PREVIEW
   ═══════════════════════ */
function updateNamePreview() {
  const name = document.getElementById('char-name').value.trim();
  const preview = document.getElementById('name-preview');
  if (name) {
    preview.textContent = name;
    preview.classList.remove('empty');
  } else {
    preview.textContent = t('dynNameEmpty');
    preview.classList.add('empty');
  }
}

/* ═══════════════════════
   ALINHAMENTO
   ═══════════════════════ */
function selectAlignment(btn, value) {
  document.querySelectorAll('.align-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedAlignment = value;
}

/* ═══════════════════════
   AVATAR
   ═══════════════════════ */
document.getElementById('avatar-input').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const box = document.getElementById('avatar-box');
    document.getElementById('avatar-placeholder').style.display = 'none';
    let img = box.querySelector('img');
    if (!img) { img = document.createElement('img'); box.appendChild(img); }
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

/* ═══════════════════════════════════════════
   DADOS DE REGRA — ATRIBUTOS
   ═══════════════════════════════════════════ */

// Custo point buy por valor (PHB p.13)
const PB_CUSTO = { 8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9 };
const PB_MAX = 27;
const ATTRS = ['FOR','DES','CON','INT','SAB','CAR'];
const ATTR_NOMES = { FOR:'Força', DES:'Destreza', CON:'Constituição', INT:'Inteligência', SAB:'Sabedoria', CAR:'Carisma' };

// Atributo principal por classe (para highlight)
const CLASSE_ATTR_PRINCIPAL = {
  artifice:'INT', barbaro:'FOR', bardo:'CAR', bruxo:'CAR',
  clerigo:'SAB', druida:'SAB', feiticeiro:'CAR', guerreiro:'FOR',
  ladino:'DES', mago:'INT', monge:'DES', paladino:'FOR', patrulheiro:'DES'
};

// Salvaguardas por classe — confirmado PHB cap.3 + Caldeirão (Artífice)
const CLASSE_SALVAGUARDAS = {
  artifice:    ['CON','INT'],   // Caldeirão p.8
  barbaro:     ['FOR','CON'],   // PHB p.46
  bardo:       ['DES','CAR'],   // PHB p.51
  bruxo:       ['SAB','CAR'],   // PHB p.56
  clerigo:     ['SAB','CAR'],   // PHB p.63
  druida:      ['INT','SAB'],   // PHB p.71
  feiticeiro:  ['CON','CAR'],   // PHB p.77
  guerreiro:   ['FOR','CON'],   // PHB p.83
  ladino:      ['DES','INT'],   // PHB p.89
  mago:        ['INT','SAB'],   // PHB p.94
  monge:       ['FOR','DES'],   // PHB p.102
  paladino:    ['SAB','CAR'],   // PHB p.108
  patrulheiro: ['FOR','DES'],   // PHB p.115
};

// Atributo de conjuração por classe — confirmado PHB
const CLASSE_CONJURACAO = {
  artifice:'INT', bardo:'CAR', bruxo:'CAR', clerigo:'SAB',
  druida:'SAB', feiticeiro:'CAR', mago:'INT', paladino:'CAR', patrulheiro:'SAB'
  // barbaro, guerreiro, ladino, monge (não-conjuradores) — sem entrada
};

// Hit dice por classe — confirmado PHB + Caldeirão
const CLASSE_HIT_DICE = {
  artifice:8, barbaro:12, bardo:8, bruxo:8, clerigo:8,
  druida:8, feiticeiro:6, guerreiro:10, ladino:8,
  mago:6, monge:8, paladino:10, patrulheiro:10
};

// ── Sub-raças disponíveis por raça ──────────────────────────────────────────
// Raças sem sub-raça mecânica não aparecem aqui (humano, draconato, meio-elfo, meio-orc, tiefling)
const SUBRACES = {
  anao: [
    { value: 'anao-colina',    pt: 'Anão da Colina',    en: 'Hill Dwarf'     },
    { value: 'anao-montanha',  pt: 'Anão da Montanha',  en: 'Mountain Dwarf' },
  ],
  elfo: [
    { value: 'elfo-alto',      pt: 'Alto Elfo',         en: 'High Elf'       },
    { value: 'elfo-floresta',  pt: 'Elfo da Floresta',  en: 'Wood Elf'       },
    { value: 'elfo-drow',      pt: 'Elfo Negro (Drow)', en: 'Dark Elf (Drow)'},
  ],
  halfling: [
    { value: 'halfling-leve',    pt: 'Halfling Pé-Leve', en: 'Lightfoot Halfling' },
    { value: 'halfling-robusto', pt: 'Halfling Robusto',  en: 'Stout Halfling'    },
  ],
  gnomo: [
    { value: 'gnomo-rochas',   pt: 'Gnomo das Rochas',  en: 'Rock Gnome'     },
    { value: 'gnomo-floresta', pt: 'Gnomo da Floresta', en: 'Forest Gnome'   },
  ],
};

// ── Ancestrais Dracônicos (cosmético — PHB p.34) ────────────────────────────
const DRACONIC_ANCESTORS = [
  { value: 'acido',   pt: 'Preto (Ácido)',    en: 'Black (Acid)'    },
  { value: 'frio',    pt: 'Branco (Frio)',    en: 'White (Cold)'    },
  { value: 'fogo',    pt: 'Vermelho (Fogo)',  en: 'Red (Fire)'      },
  { value: 'raio',    pt: 'Azul (Raio)',      en: 'Blue (Lightning)'},
  { value: 'veneno',  pt: 'Verde (Veneno)',   en: 'Green (Poison)'  },
  { value: 'fogo2',   pt: 'Dourado (Fogo)',   en: 'Gold (Fire)'     },
  { value: 'frio2',   pt: 'Prateado (Frio)',  en: 'Silver (Cold)'   },
  { value: 'raio2',   pt: 'Bronze (Raio)',    en: 'Bronze (Lightning)'},
  { value: 'acido2',  pt: 'Cobre (Ácido)',    en: 'Copper (Acid)'   },
  { value: 'forca',   pt: 'Latão (Fogo)',     en: 'Brass (Fire)'    },
];

// ── Bônus raciais por sub-raça — confirmado PHB cap.2 ───────────────────────
// Formato: [bônus-base-da-raça, bônus-da-sub-raça]
const RACIAL_BONUS_SUBRACA = {
  // ANÃO — base CON+2 (PHB p.20)
  'anao-colina':    [['CON',2],['SAB',1]],  // PHB p.21: SAB+1
  'anao-montanha':  [['CON',2],['FOR',2]],  // PHB p.21: FOR+2

  // ELFO — base DES+2 (PHB p.22)
  'elfo-alto':      [['DES',2],['INT',1]],  // PHB p.23: INT+1
  'elfo-floresta':  [['DES',2],['SAB',1]],  // PHB p.23: SAB+1
  'elfo-drow':      [['DES',2],['CAR',1]],  // PHB p.24: CAR+1

  // HALFLING — base DES+2 (PHB p.26)
  'halfling-leve':    [['DES',2],['CAR',1]],  // PHB p.28: CAR+1
  'halfling-robusto': [['DES',2],['CON',1]],  // PHB p.28: CON+1

  // GNOMO — base INT+2 (PHB p.35)
  'gnomo-rochas':   [['INT',2],['CON',1]],  // PHB p.37: CON+1
  'gnomo-floresta': [['INT',2],['DES',1]],  // PHB p.36: DES+1
};

// ── Bônus para raças SEM sub-raça mecânica ──────────────────────────────────
const RACIAL_BONUS_BASE = {
  humano:      [['FOR',1],['DES',1],['CON',1],['INT',1],['SAB',1],['CAR',1]],
  draconato:   [['FOR',2],['CAR',1]],
  'meio-elfo': [['CAR',2]],
  'meio-orc':  [['FOR',2],['CON',1]],
  tiefling:    [['INT',1],['CAR',2]],
};

// ── Raças que exigem sub-raça para ter bônus ────────────────────────────────
const RACAS_COM_SUBRACA = ['anao','elfo','halfling','gnomo'];
const RACA_COM_ANCESTRAL = 'draconato';

// Estado da sub-raça e ancestral dracônico escolhidos
let subraçaEscolhida = '';
let ancestralDraconico = '';

// ── Helper: retorna os bônus raciais ativos considerando sub-raça ────────────
function getRacialBonusAtivo(raca) {
  if (RACAS_COM_SUBRACA.includes(raca)) {
    return RACIAL_BONUS_SUBRACA[subraçaEscolhida] || [];
  }
  return RACIAL_BONUS_BASE[raca] || [];
}

// Mantido para compatibilidade com código que acessa RACIAL_BONUS diretamente
// (getValoresFinais usa getRacialBonusAtivo; este objeto agora serve só referência)
const RACIAL_BONUS = {
  anao:        [], // dinâmico via sub-raça
  elfo:        [], // dinâmico via sub-raça
  halfling:    [], // dinâmico via sub-raça
  gnomo:       [], // dinâmico via sub-raça
  humano:      [['FOR',1],['DES',1],['CON',1],['INT',1],['SAB',1],['CAR',1]],
  draconato:   [['FOR',2],['CAR',1]],
  'meio-elfo': [['CAR',2]],
  'meio-orc':  [['FOR',2],['CON',1]],
  tiefling:    [['INT',1],['CAR',2]],
};

// Raças com bônus de +1 livre em N atributos diferentes (escolha do jogador)
const RACIAL_LIVRE = {
  'meio-elfo': 2,  // escolhe 2 atributos diferentes (não CAR)
};

// Atributos excluídos do bônus livre por raça
const RACIAL_LIVRE_EXCLUIR = {
  'meio-elfo': ['CAR'],
};

// Deslocamento por raça/sub-raça (metros) — PHB cap.2
// Elfo da Floresta tem 10,5m (PHB p.23); demais elfos 9m
const RACIAL_DESL = {
  anao: 7.5, halfling: 7.5, gnomo: 7.5,
  humano: 9, draconato: 9, 'meio-elfo': 9, 'meio-orc': 9, tiefling: 9,
  // elfos resolvidos por sub-raça (ver getRacialDeslocamento)
  elfo: 9,
};
const SUBRACA_DESL = {
  'elfo-floresta': 10.5, // PHB p.23: Pés Ligeiros → 10,5m
};
function getRacialDeslocamento(raca) {
  if (subraçaEscolhida && SUBRACA_DESL[subraçaEscolhida] !== undefined) {
    return SUBRACA_DESL[subraçaEscolhida];
  }
  return RACIAL_DESL[raca] || 9;
}

// Estado dos bônus livres (meio-elfo etc)
let racialLivreEscolhas = {}; // { slot0: 'DES', slot1: 'SAB' }

// Estado do point buy
let pbValores = { FOR:8, DES:8, CON:8, INT:8, SAB:8, CAR:8 };

function pbGastosTotal() {
  return ATTRS.reduce((s, a) => s + PB_CUSTO[pbValores[a]], 0);
}
function pbRestantes() { return PB_MAX - pbGastosTotal(); }

function modStr(v) {
  const m = Math.floor((v - 10) / 2);
  return (m >= 0 ? '+' : '') + m;
}

/* ═══════════════════════
   RENDER POINT BUY
   ═══════════════════════ */
function renderPointBuy() {
  const classe = document.getElementById('char-class').value;
  const raca   = document.getElementById('char-race').value;
  const principal = CLASSE_ATTR_PRINCIPAL[classe] || '';
  const grid = document.getElementById('attrs-grid');

  const bonusFix = getRacialBonusAtivo(raca);
  const livreQtd = RACIAL_LIVRE[raca] || 0;

  grid.innerHTML = ATTRS.map(a => {
    const val = pbValores[a];
    const isPrincipal = a === principal;
    const mod = Math.floor((val - 10) / 2);
    const modLabel = (mod >= 0 ? '+' : '') + mod;
    const custo = PB_CUSTO[val];

    // bônus racial fixo para exibir
    const racialBonus = bonusFix.filter(b => b[0] === a).reduce((s,b) => s+b[1], 0);
    const bonusLabel = racialBonus > 0 ? `<span class="attr-pb-bonus">+${racialBonus} racial</span>` : '';

    const podeSub = val > 8;
    const podeAdd = val < 15 && (pbRestantes() >= (PB_CUSTO[val+1] - custo));

    const shieldFill = isPrincipal ? 'rgba(201,168,76,0.12)' : 'rgba(0,0,0,0.35)';
    const shieldStroke = isPrincipal ? 'var(--gold2)' : 'var(--border)';

    return `<div class="attr-pb ${isPrincipal ? 'attr-destaque' : ''}" id="apb-${a}">
      <div class="attr-pb-name">${getAttrNome(a)}</div>
      <div class="attr-pb-shield-wrap">
        <div class="attr-pb-shield">
          <svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="${shieldFill}" stroke="${shieldStroke}" stroke-width="1.5"/>
          </svg>
          <div class="attr-pb-shield-mod">${modLabel}</div>
        </div>
      </div>
      <div class="attr-pb-controls">
        <button class="attr-pb-btn" onclick="pbChange('${a}',-1)" ${!podeSub?'disabled':''}>−</button>
        <div class="attr-pb-val">${val}</div>
        <button class="attr-pb-btn" onclick="pbChange('${a}',1)" ${!podeAdd?'disabled':''}>+</button>
      </div>
      <div class="attr-pb-meta">
        <span class="attr-pb-mod" style="display:none">${modLabel}</span>
        ${bonusLabel}
      </div>
    </div>`;
  }).join('');

  // Bônus livres (meio-elfo): renderiza seletores abaixo do grid
  renderRacialLivre(raca, livreQtd);

  // Atualizar pontos restantes
  const rest = pbRestantes();
  const el = document.getElementById('pb-pontos');
  el.textContent = rest;
  el.style.color = rest === 0 ? 'var(--gold)' : 'var(--gold)';

  // Nota racial
  const noteEl = document.getElementById('attr-racial-note');
  const racaPrecisaSubraca = RACAS_COM_SUBRACA.includes(raca) && !subraçaEscolhida;

  if (racaPrecisaSubraca) {
    // Avisa que a sub-raça precisa ser escolhida na seção 1
    noteEl.innerHTML = currentLang === 'en'
      ? '⚠ Choose your <strong>subrace</strong> in Section 1 to apply racial bonuses.'
      : '⚠ Escolha sua <strong>sub-raça</strong> na Seção 1 para aplicar os bônus raciais.';
    noteEl.style.display = 'block';
    noteEl.style.borderColor = 'rgba(204,58,26,0.3)';
  } else if (bonusFix.length > 0 || livreQtd > 0) {
    const partes = bonusFix.map(b => `+${b[1]} ${getAttrNome(b[0])}`);
    if (livreQtd > 0) partes.push(currentLang === 'en' ? `+1 in ${livreQtd} ability score(s) of your choice` : `+1 em ${livreQtd} atributo(s) à sua escolha`);
    noteEl.innerHTML = `${t('dynRacialBonus')} <strong>${partes.join(' · ')}</strong>`;
    noteEl.style.display = 'block';
    noteEl.style.borderColor = '';
  } else {
    noteEl.style.display = 'none';
    noteEl.style.borderColor = '';
  }

  renderAtributosFinal();
  renderCombate();
}

function renderRacialLivre(raca, qtd) {
  // Remove seletor antigo se existir
  const old = document.getElementById('racial-livre-wrap');
  if (old) old.remove();
  if (qtd === 0) return;

  const excluir = RACIAL_LIVRE_EXCLUIR[raca] || [];
  const opcoesDisponiveis = ATTRS.filter(a => !excluir.includes(a));

  const wrap = document.createElement('div');
  wrap.id = 'racial-livre-wrap';
  wrap.className = 'racial-free-bonus';

  const titulo = document.createElement('div');
  titulo.className = 'racial-free-bonus-title';
  titulo.textContent = t('dynFreeAttrTitle').replace('{n}', qtd).replace('{s}', qtd > 1 ? 's' : '');
  wrap.appendChild(titulo);

  for (let i = 0; i < qtd; i++) {
    const row = document.createElement('div');
    row.className = 'racial-free-bonus-row';

    const label = document.createElement('span');
    label.style.cssText = 'font-family:"Cinzel",serif;font-size:9px;letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase;white-space:nowrap;';
    label.textContent = currentLang === 'en' ? `+1 to →` : `+1 em →`;
    row.appendChild(label);

    const sel = document.createElement('select');
    sel.className = 'racial-free-select';
    sel.dataset.slot = i;

    const optNone = document.createElement('option');
    optNone.value = '';
    optNone.textContent = t('dynChoose');
    sel.appendChild(optNone);

    opcoesDisponiveis.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = getAttrNome(a);
      if (racialLivreEscolhas['slot' + i] === a) opt.selected = true;
      sel.appendChild(opt);
    });

    sel.addEventListener('change', function() {
      const slot = parseInt(this.dataset.slot);
      const val = this.value;
      // Impede repetição entre slots
      const outros = [];
      for (let j = 0; j < qtd; j++) {
        if (j !== slot) outros.push(racialLivreEscolhas['slot' + j]);
      }
      if (val && outros.includes(val)) {
        this.value = racialLivreEscolhas['slot' + slot] || '';
        return;
      }
      racialLivreEscolhas['slot' + slot] = val || undefined;
      renderAtributosFinal();
      renderCombate();
    });

    row.appendChild(sel);
    wrap.appendChild(row);
  }

  // Insere após o grid de atributos
  const grid = document.getElementById('attrs-grid');
  grid.parentNode.insertBefore(wrap, grid.nextSibling);
}

function pbChange(attr, delta) {
  const novoVal = pbValores[attr] + delta;
  if (novoVal < 8 || novoVal > 15) return;
  const custoDelta = PB_CUSTO[novoVal] - PB_CUSTO[pbValores[attr]];
  if (delta > 0 && pbRestantes() < custoDelta) return;
  pbValores[attr] = novoVal;
  renderPointBuy();
}

/* ═══════════════════════
   ATRIBUTOS FINAIS (com bônus racial)
   ═══════════════════════ */
function getValoresFinais() {
  const raca = document.getElementById('char-race').value;
  const bonusFix = getRacialBonusAtivo(raca);
  const livreQtd = RACIAL_LIVRE[raca] || 0;
  const ihBon = typeof getIHBonuses === 'function' ? getIHBonuses() : {};
  const finais = {};
  ATTRS.forEach(a => {
    const bonus = bonusFix.filter(b => b[0] === a).reduce((s,b) => s+b[1], 0);
    let livre = 0;
    for (let i = 0; i < livreQtd; i++) {
      if (racialLivreEscolhas['slot' + i] === a) livre++;
    }
    finais[a] = pbValores[a] + bonus + livre + (ihBon[a] || 0);
  });
  return finais;
}

// Ícones de escudo por atributo (SVG inline, estilo heráldico simples)
const ATTR_ICONS = {
  FOR: `<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="rgba(0,0,0,0.35)" stroke="var(--border)" stroke-width="1.5"/>
    <text x="15" y="21" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="var(--text-dim)" opacity="0.5">⚔</text>
  </svg>`,
  DES: `<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="rgba(0,0,0,0.35)" stroke="var(--border)" stroke-width="1.5"/>
    <text x="15" y="21" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="var(--text-dim)" opacity="0.5">🏹</text>
  </svg>`,
  CON: `<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="rgba(0,0,0,0.35)" stroke="var(--border)" stroke-width="1.5"/>
    <text x="15" y="21" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="var(--text-dim)" opacity="0.5">🛡</text>
  </svg>`,
  INT: `<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="rgba(0,0,0,0.35)" stroke="var(--border)" stroke-width="1.5"/>
    <text x="15" y="21" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="var(--text-dim)" opacity="0.5">📖</text>
  </svg>`,
  SAB: `<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="rgba(0,0,0,0.35)" stroke="var(--border)" stroke-width="1.5"/>
    <text x="15" y="21" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="var(--text-dim)" opacity="0.5">👁</text>
  </svg>`,
  CAR: `<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h26v18c0 7-13 12-13 12S2 27 2 20V2z" fill="rgba(0,0,0,0.35)" stroke="var(--border)" stroke-width="1.5"/>
    <text x="15" y="21" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="var(--text-dim)" opacity="0.5">✦</text>
  </svg>`,
};

function renderAtributosFinal() {
  const classe = document.getElementById('char-class').value;
  const nivel  = parseInt(document.getElementById('char-level').value) || 1;
  const prof   = Math.ceil(nivel / 4) + 1;
  const principal = CLASSE_ATTR_PRINCIPAL[classe] || '';
  const finais = getValoresFinais();
  const grid = document.getElementById('attrs-final-grid');
  const svs  = CLASSE_SALVAGUARDAS[classe] || [];

  grid.innerHTML = ATTRS.map(a => {
    const val = finais[a];
    const mod = Math.floor((val - 10) / 2);
    const modLabel = (mod >= 0 ? '+' : '') + mod;
    const isPrincipal = a === principal;
    return `<div class="attr ${isPrincipal ? 'highlight' : ''}">
      <div class="attr-orb">
        <span class="attr-orb-mod">${modLabel}</span>
      </div>
      <div class="attr-info">
        <div class="attr-name">${getAttrNome(a)}</div>
        <div class="attr-value">${val}</div>
      </div>
      <div class="attr-mod">${modLabel}</div>
    </div>`;
  }).join('');

  // Salvaguardas
  const svGrid = document.getElementById('sv-grid');
  svGrid.innerHTML = ATTRS.map(a => {
    const mod = Math.floor((finais[a] - 10) / 2);
    const isProf = svs.includes(a);
    const bonus = mod + (isProf ? prof : 0);
    const bonusStr = (bonus >= 0 ? '+' : '') + bonus;
    return `<div class="sv-row ${isProf ? 'prof' : ''}">
      <div class="sv-diamond"></div>
      <span class="sv-name">${getAttrNome(a)}</span>
      <span class="sv-bonus">${bonusStr}</span>
    </div>`;
  }).join('');
}

/* ═══════════════════════
   COMBATE
   ═══════════════════════ */
function renderCombate() {
  const classe = document.getElementById('char-class').value;
  const raca   = document.getElementById('char-race').value;
  const finais = getValoresFinais();

  const modOf = (a) => Math.floor((finais[a] - 10) / 2);
  const fmtMod = (m) => (m >= 0 ? '+' : '') + m;

  // HP
  const hd = CLASSE_HIT_DICE[classe];
  const modCon = modOf('CON');
  if (hd) {
    const hp = hd + modCon;
    document.getElementById('hp-valor').textContent = hp > 0 ? hp : 1;
    document.getElementById('hp-formula').textContent = `1d${hd} + CON (${fmtMod(modCon)})`;
  } else {
    document.getElementById('hp-valor').textContent = '—';
    document.getElementById('hp-formula').textContent = t('dynHPChooseClass');
  }

  // CA sem armadura
  let ca = 10 + modOf('DES');
  if (classe === 'barbaro') ca = 10 + modOf('DES') + modOf('CON');
  if (classe === 'monge')   ca = 10 + modOf('DES') + modOf('SAB');
  document.getElementById('comb-ca').textContent = ca;

  // Iniciativa
  document.getElementById('comb-init').textContent = fmtMod(modOf('DES'));

  // Deslocamento — usa getRacialDeslocamento para suportar Elfo da Floresta (10,5m)
  const desl = getRacialDeslocamento(raca);
  document.getElementById('comb-desl').textContent = desl
    ? (currentLang === 'en' ? Math.round(desl * 3.281) + ' ft' : desl + 'm')
    : '—';

  // Bônus de proficiência
  const nivel = parseInt(document.getElementById('char-level').value) || 1;
  const prof = Math.ceil(nivel / 4) + 1;
  document.getElementById('comb-prof').textContent = '+' + prof;

  // Atualiza salvaguardas no card de atributos
  renderAtributosFinal();

  // CD de magia
  const conjAttr = CLASSE_CONJURACAO[classe];
  if (conjAttr) {
    const cd = 8 + prof + modOf(conjAttr);
    document.getElementById('row-cd-magia').style.display = '';
    document.getElementById('comb-cd').textContent = cd;
  } else {
    document.getElementById('row-cd-magia').style.display = 'none';
  }
}

/* ═══════════════════════
   CONTINUAR
   ═══════════════════════ */
function continuar() {
  const nome = document.getElementById('char-name').value.trim();
  if (!nome) {
    const inp = document.getElementById('char-name');
    inp.focus();
    inp.style.borderColor = 'var(--accent)';
    inp.style.boxShadow = '0 0 0 1px var(--accent)';
    setTimeout(() => { inp.style.borderColor = ''; inp.style.boxShadow = ''; }, 1800);
    return;
  }

  const secao = document.getElementById('sec-atributos');
  const btnContinuar = document.getElementById('btn-continuar');

  // Esconde o botão principal e mostra a seção
  btnContinuar.style.display = 'none';
  secao.style.display = 'block';

  // Render inicial do point buy
  renderPointBuy();

  // Atualizar progress steps — Nielsen #1: visibilidade do estado
  atualizarProgress(2);

  // Anima entrada
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      secao.style.opacity = '1';
      secao.style.transform = 'translateY(0)';
    });
  });

  // Scroll suave até a seção
  setTimeout(() => {
    secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

/* ═══════════════════════════════════════════════════
   DADOS DE PERÍCIAS
   Fonte: PHB Cap.7 + Cap.3 (proficiências por classe)
         PHB Cap.4 (proficiências por antecedente)
   ═══════════════════════════════════════════════════ */

// 18 perícias oficiais agrupadas por atributo
const PERICIAS = [
  // Força
  { id:'atletismo',     nome:'Atletismo',       attr:'FOR' },
  // Destreza
  { id:'acrobacia',     nome:'Acrobacia',        attr:'DES' },
  { id:'furtividade',   nome:'Furtividade',      attr:'DES' },
  { id:'prestidigitacao', nome:'Prestidigitação', attr:'DES' },
  // Constituição — sem perícias associadas no PHB
  // Inteligência
  { id:'arcanismo',     nome:'Arcanismo',        attr:'INT' },
  { id:'historia',      nome:'História',         attr:'INT' },
  { id:'investigacao',  nome:'Investigação',     attr:'INT' },
  { id:'natureza',      nome:'Natureza',         attr:'INT' },
  { id:'religiao',      nome:'Religião',         attr:'INT' },
  // Sabedoria
  { id:'adestrar',      nome:'Adestrar Animais', attr:'SAB' },
  { id:'intuicao',      nome:'Intuição',         attr:'SAB' },
  { id:'medicina',      nome:'Medicina',         attr:'SAB' },
  { id:'percepcao',     nome:'Percepção',        attr:'SAB' },
  { id:'sobrevivencia', nome:'Sobrevivência',    attr:'SAB' },
  // Carisma
  { id:'atuacao',       nome:'Atuação',          attr:'CAR' },
  { id:'enganacao',     nome:'Enganação',        attr:'CAR' },
  { id:'intimidacao',   nome:'Intimidação',      attr:'CAR' },
  { id:'persuasao',     nome:'Persuasão',        attr:'CAR' },
];

// Perícias disponíveis por classe (escolha do jogador) — PHB Cap.3 + Tasha's
const CLASSE_PERICIAS = {
  artifice:    { qtd:2, lista:['arcanismo','historia','investigacao','medicina','natureza','percepcao','prestidigitacao'] },
  barbaro:     { qtd:2, lista:['adestrar','atletismo','intimidacao','natureza','percepcao','sobrevivencia'] },
  bardo:       { qtd:3, lista:'todas' }, // bardo escolhe qualquer 3
  bruxo:       { qtd:2, lista:['arcanismo','enganacao','historia','intimidacao','investigacao','natureza','religiao'] },
  clerigo:     { qtd:2, lista:['historia','intuicao','medicina','persuasao','religiao'] },
  druida:      { qtd:2, lista:['arcanismo','adestrar','intuicao','medicina','natureza','percepcao','religiao','sobrevivencia'] },
  feiticeiro:  { qtd:2, lista:['arcanismo','enganacao','intuicao','intimidacao','persuasao','religiao'] },
  guerreiro:   { qtd:2, lista:['acrobacia','adestrar','atletismo','historia','intuicao','intimidacao','percepcao','sobrevivencia'] },
  ladino:      { qtd:4, lista:['acrobacia','atletismo','atuacao','enganacao','furtividade','intimidacao','intuicao','investigacao','percepcao','persuasao','prestidigitacao'] },
  mago:        { qtd:2, lista:['arcanismo','historia','intuicao','investigacao','medicina','religiao'] },
  monge:       { qtd:2, lista:['acrobacia','atletismo','furtividade','historia','intuicao','religiao'] },
  paladino:    { qtd:2, lista:['atletismo','intuicao','intimidacao','medicina','persuasao','religiao'] },
  patrulheiro: { qtd:3, lista:['adestrar','atletismo','furtividade','intuicao','investigacao','natureza','percepcao','sobrevivencia'] },
};

// Perícias concedidas por antecedente (PHB Cap.4)
const ANTECEDENTE_PERICIAS = {
  acolito:    ['intuicao','religiao'],
  artesao:    ['intuicao','persuasao'],
  charlatan:  ['enganacao','prestidigitacao'],
  criminoso:  ['enganacao','furtividade'],
  eremita:    ['medicina','religiao'],
  entretenedor: ['acrobacia','atuacao'],
  forasteiro: ['atletismo','sobrevivencia'],
  heroi:      ['adestrar','sobrevivencia'],
  marinheiro: ['atletismo','percepcao'],
  nobre:      ['historia','persuasao'],
  sabio:      ['arcanismo','historia'],
  soldado:    ['atletismo','intimidacao'],
};

// Estado das perícias selecionadas pelo jogador
let periciasEscolhidas = new Set(); // ids escolhidos (só os da classe)

/* ═══════════════════════
   RENDER PERÍCIAS
   ═══════════════════════ */
function renderPericias() {
  const classe    = document.getElementById('char-class').value;
  const antecedente = document.getElementById('char-background').value;
  const finais    = getValoresFinais();
  const nivel     = parseInt(document.getElementById('char-level').value) || 1;
  const prof      = Math.ceil(nivel / 4) + 1;

  const cfg       = CLASSE_PERICIAS[classe] || { qtd:2, lista:[] };
  const listaCfg  = cfg.lista === 'todas' ? PERICIAS.map(p=>p.id) : cfg.lista;
  const qtdMax    = cfg.qtd;
  const antecPers = ANTECEDENTE_PERICIAS[antecedente] || [];

  // Limpar escolhas que já não são válidas ao trocar classe
  for (const id of [...periciasEscolhidas]) {
    if (!listaCfg.includes(id)) periciasEscolhidas.delete(id);
  }

  // Agrupar perícias por atributo
  const grupos = {};
  PERICIAS.forEach(p => {
    if (!grupos[p.attr]) grupos[p.attr] = [];
    grupos[p.attr].push(p);
  });

  const ordemAttr = ['FOR','DES','INT','SAB','CAR'];
  const wrap = document.getElementById('pericias-grupos-wrap');
  wrap.innerHTML = '';

  ordemAttr.forEach(attr => {
    const lista = grupos[attr];
    if (!lista || lista.length === 0) return;

    const modVal = Math.floor((finais[attr] - 10) / 2);
    const modStr = (modVal >= 0 ? '+' : '') + modVal;
    const temSelecionada = lista.some(p => periciasEscolhidas.has(p.id) || antecPers.includes(p.id));

    const grupoDiv = document.createElement('div');
    grupoDiv.className = 'pericias-grupo';

    // Header do grupo
    grupoDiv.innerHTML = `
      <div class="pericias-grupo-header ${temSelecionada ? 'ativo' : ''}">
        <div class="pericias-grupo-badge">${attr}</div>
        <span class="pericias-grupo-sigla" style="display:none">${attr}</span>
        <span class="pericias-grupo-nome">${getAttrNome(attr)}</span>
        <span class="pericias-grupo-mod ${modVal >= 0 ? 'positivo' : ''}">${modStr}</span>
      </div>`;

    // Container em grid 2 colunas
    const itensDiv = document.createElement('div');
    itensDiv.className = 'pericias-grupo-itens';

    // Cards de perícia
    lista.forEach(p => {
      const isAntec    = antecPers.includes(p.id);
      const isClasse   = listaCfg.includes(p.id);
      const isSelecionada = periciasEscolhidas.has(p.id);
      const isProficiente = isAntec || isSelecionada;

      const podeCli   = isClasse && !isAntec;
      const bloqueada = !isClasse && !isAntec;

      const bonus   = modVal + (isProficiente ? prof : 0);
      const bonusStr = (bonus >= 0 ? '+' : '') + bonus;
      const passivo  = 10 + bonus;

      let classes = 'pericia-row';
      if (isProficiente && !isAntec) classes += ' selecionada';
      if (isAntec) classes += ' fonte-antecedente';
      if (bloqueada) classes += ' bloqueada';

      let fonteLabel = '';
      if (isAntec) fonteLabel = `<span class="pericia-fonte">${t('dynSkillBackground')}</span>`;
      else if (isClasse) fonteLabel = `<span class="pericia-fonte">${isSelecionada ? t('dynSkillSelected') : t('dynSkillAvail')}</span>`;

      const row = document.createElement('div');
      row.className = classes;
      row.dataset.id = p.id;
      const skillNome = getSkillNome(p.id);
      row.innerHTML = `
        <div class="pericia-diamond"><div class="pericia-diamond-inner"></div></div>
        <div class="pericia-nome">${skillNome}${fonteLabel}</div>
        <div class="pericia-nums">
          <div class="pericia-bonus">${bonusStr}</div>
          <div class="pericia-passivo">${isProficiente ? passivo : '—'}</div>
        </div>`;

      if (podeCli) {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => togglePericia(p.id, qtdMax, antecPers));
      }
      itensDiv.appendChild(row);
    });

    grupoDiv.appendChild(itensDiv);
    wrap.appendChild(grupoDiv);
  });

  // Atualizar contador
  const escolhidas = periciasEscolhidas.size;
  const restantes  = qtdMax - escolhidas;
  const pct        = qtdMax > 0 ? (escolhidas / qtdMax) * 100 : 0;

  document.getElementById('pericias-restantes').textContent = restantes;
  document.getElementById('pericias-total-label').textContent = t('dynSkillTotal').replace('{n}', qtdMax);
  document.getElementById('regra-prof').textContent = '+' + prof;

  const fill = document.getElementById('pericias-fill');
  fill.style.width = pct + '%';
  fill.className   = 'pericias-pontos-fill' + (pct >= 100 ? ' cheio' : '');

  const numEl = document.getElementById('pericias-restantes');
  numEl.className = 'pericias-pontos-numero' + (restantes === 0 ? ' zerado' : restantes < 0 ? ' excesso' : '');

  const panel = document.getElementById('pericias-pontos-panel');
  panel.className = 'pericias-pontos-panel' + (restantes < 0 ? ' alerta' : '');

  // Percepção passiva
  const percRow = PERICIAS.find(p => p.id === 'percepcao');
  const percFinal = finais['SAB'];
  const percMod   = Math.floor((percFinal - 10) / 2);
  const percProf  = antecPers.includes('percepcao') || periciasEscolhidas.has('percepcao');
  const pp        = 10 + percMod + (percProf ? prof : 0);
  document.getElementById('percepcao-passiva-val').textContent = pp;
}

function togglePericia(id, qtdMax, antecPers) {
  if (antecPers.includes(id)) return; // antecedente não é clicável

  if (periciasEscolhidas.has(id)) {
    periciasEscolhidas.delete(id);
  } else {
    if (periciasEscolhidas.size >= qtdMax) return; // limite atingido
    periciasEscolhidas.add(id);
  }
  renderPericias();
}

/* ═══════════════════════
   CONTINUAR PARA PERÍCIAS
   ═══════════════════════ */
function continuarPericias() {
  const secao = document.getElementById('sec-pericias');
  const btn   = document.getElementById('btn-continuar-2');

  // Limpar escolhas ao reabrir (em caso de troca de classe)
  periciasEscolhidas.clear();

  btn.style.display = 'none';
  secao.style.display = 'block';

  renderPericias();

  // Atualizar progress
  atualizarProgress(3);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      secao.style.opacity = '1';
      secao.style.transform = 'translateY(0)';
    });
  });
  setTimeout(() => { secao.scrollIntoView({ behavior:'smooth', block:'start' }); }, 80);
}

/* ═══════════════════════
   PROGRESS STEPS
   ═══════════════════════ */
function atualizarProgress(etapa) {
  // etapa: 1=identidade, 2=atributos, 3=perícias, 4=magias, 5=equipamento
  for (let i = 1; i <= 5; i++) {
    const dot   = document.getElementById('step-dot-' + i);
    const label = document.getElementById('step-label-' + i);
    const conn  = document.getElementById('conn-' + i);
    if (!dot) continue;

    dot.className   = 'progress-step-dot';
    label.className = 'progress-step-label';
    if (conn) conn.className = 'progress-connector';

    if (i < etapa) {
      dot.className   += ' completo';
      label.className += ' completo';
      if (conn) conn.className += ' completo';
    } else if (i === etapa) {
      dot.className   += ' ativo';
      label.className += ' ativo';
    }
  }
}

// Atualiza progress ao avançar seção de atributos — patchado na função original acima

/* ═══════════════════════════════════════════
   SEÇÃO 4 — EQUIPAMENTO
   ═══════════════════════════════════════════ */

/* Equipamentos por classe — PHB cap.3 + Tasha's (Artífice) */
const CLASSE_EQUIPAMENTO = {
  artifice: {
    fixos: [
      'Uma besta leve e 20 virotes',
      'Ferramentas de ladrão e um pacote de explorador',
    ],
    opcoes: [
      { label: 'Armas', escolhas: ['Duas armas simples à sua escolha', null] },
      { label: 'Armadura', escolhas: ['Armadura de couro batido', 'Brunea'] },
    ],
    moedas: '5d4 × 10 po',
    moedasMedia: 125,
  },
  barbaro: {
    fixos: [
      'Um pacote de aventureiro',
      'Quatro azagaias',
    ],
    opcoes: [
      { label: 'Arma principal', escolhas: ['Um machado grande', 'Qualquer arma marcial corpo a corpo'] },
      { label: 'Armas secundárias', escolhas: ['Dois machados de mão', 'Qualquer arma simples'] },
    ],
    moedas: '2d4 × 10 po',
    moedasMedia: 50,
  },
  bardo: {
    fixos: [
      'Armadura de couro',
      'Uma adaga',
    ],
    opcoes: [
      { label: 'Arma', escolhas: ['Uma rapieira', 'Uma espada longa', 'Qualquer arma simples'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de diplomata', 'Pacote de artista'] },
      { label: 'Instrumento musical', escolhas: ['Um alaúde', 'Qualquer outro instrumento musical'] },
    ],
    moedas: '5d4 × 10 po',
    moedasMedia: 125,
  },
  bruxo: {
    fixos: [
      'Armadura de couro',
      'Qualquer arma simples',
      'Duas adagas',
    ],
    opcoes: [
      { label: 'Arma à distância', escolhas: ['Uma besta leve e 20 virotes', 'Qualquer arma simples'] },
      { label: 'Foco', escolhas: ['Uma bolsa de componentes', 'Um foco arcano'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de estudioso', 'Pacote de explorador'] },
    ],
    moedas: '4d4 × 10 po',
    moedasMedia: 100,
  },
  clerigo: {
    fixos: [
      'Um escudo',
      'Um símbolo sagrado',
    ],
    opcoes: [
      { label: 'Arma', escolhas: ['Uma maça', 'Um martelo de guerra (se proficiente)'] },
      { label: 'Armadura', escolhas: ['Brunea', 'Armadura de couro', 'Cota de malha (se proficiente)'] },
      { label: 'Arma secundária', escolhas: ['Uma besta leve e 20 virotes', 'Qualquer arma simples'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de sacerdote', 'Pacote de aventureiro'] },
    ],
    moedas: '5d4 × 10 po',
    moedasMedia: 125,
  },
  druida: {
    fixos: [
      'Armadura de couro',
      'Um pacote de aventureiro',
      'Um foco druídico',
    ],
    opcoes: [
      { label: 'Item de proteção', escolhas: ['Um escudo de madeira', 'Qualquer arma simples'] },
      { label: 'Arma', escolhas: ['Uma cimitarra', 'Qualquer arma corpo a corpo simples'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de estudioso', 'Pacote de explorador'] },
    ],
    moedas: '2d4 × 10 po',
    moedasMedia: 50,
  },
  feiticeiro: {
    fixos: [],
    opcoes: [
      { label: 'Arma', escolhas: ['Uma besta leve e 20 virotes', 'Qualquer arma simples'] },
      { label: 'Foco arcano', escolhas: ['Uma bolsa de componentes', 'Um foco arcano'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de explorador', 'Pacote de aventureiro'] },
    ],
    moedas: '3d4 × 10 po',
    moedasMedia: 75,
  },
  guerreiro: {
    fixos: [],
    opcoes: [
      { label: 'Armadura', escolhas: ['Cota de malha', 'Gibão de peles + arco longo + 20 flechas'] },
      { label: 'Arma principal', escolhas: ['Uma arma marcial e um escudo', 'Duas armas marciais'] },
      { label: 'Arma secundária', escolhas: ['Uma besta leve e 20 virotes', 'Dois machados de arremesso'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de aventureiro', 'Pacote de explorador'] },
    ],
    moedas: '5d4 × 10 po',
    moedasMedia: 125,
  },
  ladino: {
    fixos: [
      'Armadura de couro',
      'Duas adagas',
      'Ferramentas de ladrão',
    ],
    opcoes: [
      { label: 'Arma principal', escolhas: ['Uma rapieira', 'Uma espada longa'] },
      { label: 'Arma secundária', escolhas: ['Um arco curto e uma aljava com 20 flechas', 'Uma espada curta'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de assaltante', 'Pacote de aventureiro', 'Pacote de explorador'] },
    ],
    moedas: '4d4 × 10 po',
    moedasMedia: 100,
  },
  mago: {
    fixos: [
      'Um grimório',
    ],
    opcoes: [
      { label: 'Arma', escolhas: ['Um bordão', 'Uma adaga'] },
      { label: 'Foco arcano', escolhas: ['Uma bolsa de componentes', 'Um foco arcano'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de estudioso', 'Pacote de explorador'] },
    ],
    moedas: '4d4 × 10 po',
    moedasMedia: 100,
  },
  monge: {
    fixos: [
      '10 dardos',
    ],
    opcoes: [
      { label: 'Arma', escolhas: ['Uma espada curta', 'Qualquer arma simples'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de explorador', 'Pacote de aventureiro'] },
    ],
    moedas: '5d4 po',
    moedasMedia: 12,
  },
  paladino: {
    fixos: [
      'Cota de malha',
      'Um símbolo sagrado',
    ],
    opcoes: [
      { label: 'Arma principal', escolhas: ['Uma arma marcial e um escudo', 'Duas armas marciais'] },
      { label: 'Arma secundária', escolhas: ['Cinco azagaias', 'Qualquer arma simples corpo a corpo'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de sacerdote', 'Pacote de aventureiro'] },
    ],
    moedas: '5d4 × 10 po',
    moedasMedia: 125,
  },
  patrulheiro: {
    fixos: [
      'Um arco longo e uma aljava com 20 flechas',
    ],
    opcoes: [
      { label: 'Armadura', escolhas: ['Brunea', 'Armadura de couro'] },
      { label: 'Arma', escolhas: ['Duas espadas curtas', 'Duas armas simples corpo a corpo'] },
      { label: 'Pacote de viagem', escolhas: ['Pacote de explorador', 'Pacote de aventureiro'] },
    ],
    moedas: '5d4 × 10 po',
    moedasMedia: 125,
  },
};

/* Equipamentos por antecedente — PHB cap.4 */
const ANTECEDENTE_EQUIPAMENTO = {
  acolito:      { itens: ['Símbolo sagrado (presente de uma figura religiosa)', 'Livro de oração ou equivalente', '5 bastões de incenso', 'Vestes', '15 peças de ouro'], moedas: 15 },
  artesao:      { itens: ['Conjunto de ferramentas de artesão (ofício à escolha)', 'Carta de apresentação da guilda', 'Roupas de viajante', '15 peças de ouro'], moedas: 15 },
  charlatan:    { itens: ['Conjunto de roupas finas', 'Kit de disfarce', 'Ferramentas de embusteiro', '15 peças de ouro'], moedas: 15 },
  criminoso:    { itens: ['Pé de cabra', 'Conjunto de roupas de viajante', '15 peças de ouro'], moedas: 15 },
  eremita:      { itens: ['Estojo de pergaminho com suas notas', 'Cobertor de inverno', 'Conjunto de roupas comuns', 'Kit de ervas medicinais', '5 peças de ouro'], moedas: 5 },
  entretenedor: { itens: ['Instrumento musical (à escolha)', 'Favor de um admirador (carta de amor, mecha de cabelo, etc.)', 'Fantasias (2)', '15 peças de ouro'], moedas: 15 },
  forasteiro:   { itens: ['Bastão', 'Armadilha de caça', 'Troféu de um animal caçado', 'Conjunto de roupas de viajante', '10 peças de ouro'], moedas: 10 },
  heroi:        { itens: ['Pá', 'Panela de ferro', 'Conjunto de roupas comuns', 'Um símbolo do povo que você defende', '10 peças de ouro'], moedas: 10 },
  marinheiro:   { itens: ['Bastão', 'Corda de seda (15 metros)', 'Um amuleto do mar', 'Roupas comuns', '10 peças de ouro'], moedas: 10 },
  nobre:        { itens: ['Conjunto de roupas finas', 'Anel de sinete', 'Pergaminho da árvore genealógica', '25 peças de ouro'], moedas: 25 },
  sabio:        { itens: ['Garrafa de tinta preta', 'Pena', 'Canivete pequeno', 'Carta de um colega com questão em aberto', 'Conjunto de roupas comuns', '10 peças de ouro'], moedas: 10 },
  soldado:      { itens: ['Insígnia do seu posto militar', 'Trofeu de um inimigo derrotado', 'Conjunto de jogo de ossos', 'Conjunto de roupas comuns', '10 peças de ouro'], moedas: 10 },
};

/* Sugestões de personalidade por antecedente */
const ANTECEDENTE_PERSONALIDADE = {
  acolito: {
    tracos: ['Vejo os outros como potenciais convertidos para minha fé.', 'Sou tolerante com outras religiões e respeito os adoradores de outros deuses.'],
    ideais: ['Fé. Confio que minha divindade guia meus atos. (Leal)', 'Tradição. Respeito os costumes da minha ordem. (Leal)'],
    vinculos: ['Moro para servir ao templo que me criou.', 'Protegeria até a morte o texto sagrado que carrego.'],
    fraquezas: ['Sou inflexível em meu pensamento.', 'Sou desconfiante com estranhos e espero o pior deles.'],
  },
  criminoso: {
    tracos: ['Sempre tenho um plano para sair de qualquer situação.', 'Prefiro agir a deliberar.'],
    ideais: ['Liberdade. As correntes devem ser quebradas. (Caótico)', 'Honra entre ladrões. Não roubo dos meus companheiros. (Neutro)'],
    vinculos: ['Estou tentando pagar uma dívida que devo a um benfeitor generoso.', 'Nada é mais importante do que os outros membros da minha gangue.'],
    fraquezas: ['Quando vejo algo que quero, sempre planejo como roubá-lo.', 'Não consigo resistir a um risco — especialmente se há aposta.'],
  },
  soldado: {
    tracos: ['Sou sempre educado e respeitoso.', 'Enfrento problemas de frente. Um plano simples e direto.'],
    ideais: ['Bem maior. Minha honra é minha vida. (Leal)', 'Responsabilidade. Faço o que precisa ser feito. (Leal)'],
    vinculos: ['Luto por aqueles que não podem lutar por si mesmos.', 'Alguém que eu amava morreu por minha causa — não vou repetir esse erro.'],
    fraquezas: ['O monstro que surgiu na batalha... fico com medo de que apareça de novo.', 'Tenho dificuldade de confiar nos aliados de uma batalha anterior.'],
  },
  nobre: {
    tracos: ['Respeito genuinamente todos os outros nobres e trabalho para manter as relações.', 'Minha gentileza e generosidade são famosas, mas podem ser usadas contra mim.'],
    ideais: ['Nobreza obriga. Tenho responsabilidade para com os de minha posição. (Bom)', 'Poder. Para proteger, preciso de mais poder. (Mau)'],
    vinculos: ['Trabalharei para proteger os membros da minha família.', 'Minha lealdade à minha soberana é inabalável.'],
    fraquezas: ['Ajo com condescendência para com os que nascem humildes.', 'Oculto um segredo vergonhoso sobre minha família.'],
  },
  sabio: {
    tracos: ['Uso palavras difíceis que às vezes confundem os outros.', 'Gosto de aprender e de debater ideias acima de tudo.'],
    ideais: ['Conhecimento. O caminho para o poder é pelo conhecimento. (Neutro)', 'Beleza. O que é belo aponta para algo verdadeiro. (Bom)'],
    vinculos: ['Passei anos procurando a resposta a uma questão que moldou minha vida.', 'Trabalhei para preservar uma biblioteca ou escola ameaçada.'],
    fraquezas: ['A maioria das pessoas é muito inferior intelectualmente. Tenho dificuldade de esconder isso.', 'Fico tão absorto em minhas pesquisas que às vezes ignoro as pessoas.'],
  },
};

/* ═══════════════════════════════════════════
   EQUIPAMENTO EN — versões em inglês dos dados
   ═══════════════════════════════════════════ */
const CLASSE_EQUIPAMENTO_EN = {
  artifice: {
    fixos: ['A light crossbow and 20 bolts', 'Thieves\' tools and an explorer\'s pack'],
    opcoes: [
      { label: 'Weapons', escolhas: ['Two simple weapons of your choice', null] },
      { label: 'Armor', escolhas: ['Studded leather armor', 'Scale mail'] },
    ],
    moedas: '5d4 × 10 gp', moedasMedia: 125,
  },
  barbaro: {
    fixos: ['An adventurer\'s pack', 'Four javelins'],
    opcoes: [
      { label: 'Main weapon', escolhas: ['A greataxe', 'Any martial melee weapon'] },
      { label: 'Secondary weapons', escolhas: ['Two handaxes', 'Any simple weapon'] },
    ],
    moedas: '2d4 × 10 gp', moedasMedia: 50,
  },
  bardo: {
    fixos: ['Leather armor', 'A dagger'],
    opcoes: [
      { label: 'Weapon', escolhas: ['A rapier', 'A longsword', 'Any simple weapon'] },
      { label: 'Travel pack', escolhas: ['Diplomat\'s pack', 'Entertainer\'s pack'] },
      { label: 'Musical instrument', escolhas: ['A lute', 'Any other musical instrument'] },
    ],
    moedas: '5d4 × 10 gp', moedasMedia: 125,
  },
  bruxo: {
    fixos: ['Leather armor', 'Any simple weapon', 'Two daggers'],
    opcoes: [
      { label: 'Ranged weapon', escolhas: ['A light crossbow and 20 bolts', 'Any simple weapon'] },
      { label: 'Focus', escolhas: ['A component pouch', 'An arcane focus'] },
      { label: 'Travel pack', escolhas: ['Scholar\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '4d4 × 10 gp', moedasMedia: 100,
  },
  clerigo: {
    fixos: ['A shield', 'A holy symbol'],
    opcoes: [
      { label: 'Weapon', escolhas: ['A mace', 'A warhammer (if proficient)'] },
      { label: 'Armor', escolhas: ['Scale mail', 'Leather armor', 'Chain mail (if proficient)'] },
      { label: 'Secondary weapon', escolhas: ['A light crossbow and 20 bolts', 'Any simple weapon'] },
      { label: 'Travel pack', escolhas: ['Priest\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '5d4 × 10 gp', moedasMedia: 125,
  },
  druida: {
    fixos: ['Leather armor', 'An explorer\'s pack', 'A druidic focus'],
    opcoes: [
      { label: 'Defensive item', escolhas: ['A wooden shield', 'Any simple weapon'] },
      { label: 'Weapon', escolhas: ['A scimitar', 'Any simple melee weapon'] },
      { label: 'Travel pack', escolhas: ['Scholar\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '2d4 × 10 gp', moedasMedia: 50,
  },
  feiticeiro: {
    fixos: [],
    opcoes: [
      { label: 'Weapon', escolhas: ['A light crossbow and 20 bolts', 'Any simple weapon'] },
      { label: 'Arcane focus', escolhas: ['A component pouch', 'An arcane focus'] },
      { label: 'Travel pack', escolhas: ['Explorer\'s pack', 'Dungeoneer\'s pack'] },
    ],
    moedas: '3d4 × 10 gp', moedasMedia: 75,
  },
  guerreiro: {
    fixos: [],
    opcoes: [
      { label: 'Armor', escolhas: ['Chain mail', 'Leather armor + longbow + 20 arrows'] },
      { label: 'Main weapon', escolhas: ['A martial weapon and a shield', 'Two martial weapons'] },
      { label: 'Secondary weapon', escolhas: ['A light crossbow and 20 bolts', 'Two handaxes'] },
      { label: 'Travel pack', escolhas: ['Dungeoneer\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '5d4 × 10 gp', moedasMedia: 125,
  },
  ladino: {
    fixos: ['Leather armor', 'Two daggers', 'Thieves\' tools'],
    opcoes: [
      { label: 'Main weapon', escolhas: ['A rapier', 'A longsword'] },
      { label: 'Secondary weapon', escolhas: ['A shortbow and a quiver of 20 arrows', 'A shortsword'] },
      { label: 'Travel pack', escolhas: ['Burglar\'s pack', 'Dungeoneer\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '4d4 × 10 gp', moedasMedia: 100,
  },
  mago: {
    fixos: ['A spellbook'],
    opcoes: [
      { label: 'Weapon', escolhas: ['A quarterstaff', 'A dagger'] },
      { label: 'Arcane focus', escolhas: ['A component pouch', 'An arcane focus'] },
      { label: 'Travel pack', escolhas: ['Scholar\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '4d4 × 10 gp', moedasMedia: 100,
  },
  monge: {
    fixos: ['10 darts'],
    opcoes: [
      { label: 'Weapon', escolhas: ['A shortsword', 'Any simple weapon'] },
      { label: 'Travel pack', escolhas: ['Explorer\'s pack', 'Dungeoneer\'s pack'] },
    ],
    moedas: '5d4 gp', moedasMedia: 12,
  },
  paladino: {
    fixos: ['Chain mail', 'A holy symbol'],
    opcoes: [
      { label: 'Main weapon', escolhas: ['A martial weapon and a shield', 'Two martial weapons'] },
      { label: 'Secondary weapon', escolhas: ['Five javelins', 'Any simple melee weapon'] },
      { label: 'Travel pack', escolhas: ['Priest\'s pack', 'Explorer\'s pack'] },
    ],
    moedas: '5d4 × 10 gp', moedasMedia: 125,
  },
  patrulheiro: {
    fixos: ['A longbow and a quiver of 20 arrows'],
    opcoes: [
      { label: 'Armor', escolhas: ['Scale mail', 'Leather armor'] },
      { label: 'Weapon', escolhas: ['Two shortswords', 'Two simple melee weapons'] },
      { label: 'Travel pack', escolhas: ['Explorer\'s pack', 'Dungeoneer\'s pack'] },
    ],
    moedas: '5d4 × 10 gp', moedasMedia: 125,
  },
};

const ANTECEDENTE_EQUIPAMENTO_EN = {
  acolito:      { itens: ['Holy symbol (gift from a religious figure)', 'Prayer book or equivalent', '5 sticks of incense', 'Vestments', '15 gold pieces'], moedas: 15 },
  artesao:      { itens: ['Artisan\'s tools (craft of your choice)', 'Letter of introduction from the guild', 'Traveler\'s clothes', '15 gold pieces'], moedas: 15 },
  charlatan:    { itens: ['Fine clothes', 'Disguise kit', 'Con artist\'s tools', '15 gold pieces'], moedas: 15 },
  criminoso:    { itens: ['Crowbar', 'Traveler\'s clothes', '15 gold pieces'], moedas: 15 },
  eremita:      { itens: ['Scroll case with your notes', 'Winter blanket', 'Common clothes', 'Herbalism kit', '5 gold pieces'], moedas: 5 },
  entretenedor: { itens: ['Musical instrument (your choice)', 'Favor from an admirer (love letter, lock of hair, etc.)', 'Costumes (2)', '15 gold pieces'], moedas: 15 },
  forasteiro:   { itens: ['Staff', 'Hunting trap', 'Trophy from an animal you hunted', 'Traveler\'s clothes', '10 gold pieces'], moedas: 10 },
  heroi:        { itens: ['Shovel', 'Iron pot', 'Common clothes', 'A token of the people you protect', '10 gold pieces'], moedas: 10 },
  marinheiro:   { itens: ['Club', 'Silk rope (50 feet)', 'A lucky charm from the sea', 'Common clothes', '10 gold pieces'], moedas: 10 },
  nobre:        { itens: ['Fine clothes', 'Signet ring', 'Scroll of pedigree', '25 gold pieces'], moedas: 25 },
  sabio:        { itens: ['Bottle of black ink', 'Quill', 'Small knife', 'Letter from a colleague with an unanswered question', 'Common clothes', '10 gold pieces'], moedas: 10 },
  soldado:      { itens: ['Insignia of your military rank', 'Trophy from a defeated enemy', 'Dice set', 'Common clothes', '10 gold pieces'], moedas: 10 },
};

const ANTECEDENTE_PERSONALIDADE_EN = {
  acolito: {
    tracos: ['I see others as potential converts to my faith.', 'I am tolerant of other religions and respect worshippers of other gods.'],
    ideais: ['Faith. I trust my deity guides my actions. (Lawful)', 'Tradition. I respect the customs of my order. (Lawful)'],
    vinculos: ['I live to serve the temple that raised me.', 'I would protect to the death the sacred text I carry.'],
    fraquezas: ['I am inflexible in my thinking.', 'I am suspicious of strangers and expect the worst of them.'],
  },
  criminoso: {
    tracos: ['I always have a plan for getting out of trouble.', 'I prefer action over deliberation.'],
    ideais: ['Freedom. Chains are meant to be broken. (Chaotic)', 'Honor among thieves. I don\'t steal from my companions. (Neutral)'],
    vinculos: ['I am trying to repay a debt I owe to a generous benefactor.', 'Nothing is more important than the other members of my gang.'],
    fraquezas: ['When I see something I want, I always plan how to steal it.', 'I can\'t resist a risk — especially if there\'s a bet involved.'],
  },
  soldado: {
    tracos: ['I am always polite and respectful.', 'I face problems head-on. A simple, direct plan.'],
    ideais: ['Greater Good. My honor is my life. (Lawful)', 'Responsibility. I do what needs to be done. (Lawful)'],
    vinculos: ['I fight for those who cannot fight for themselves.', 'Someone I loved died because of me — I won\'t let that happen again.'],
    fraquezas: ['The monster that emerged in battle... I fear it may appear again.', 'I have trouble trusting allies from a past battle.'],
  },
  nobre: {
    tracos: ['I genuinely respect other nobles and work to maintain relationships.', 'My kindness and generosity are well-known, but can be used against me.'],
    ideais: ['Noblesse Oblige. I have responsibilities to those of my station. (Good)', 'Power. To protect others, I need more power. (Evil)'],
    vinculos: ['I will work to protect the members of my family.', 'My loyalty to my sovereign is unshakeable.'],
    fraquezas: ['I am condescending toward those of humble birth.', 'I hide a shameful secret about my family.'],
  },
  sabio: {
    tracos: ['I use difficult words that sometimes confuse others.', 'I love learning and debating ideas above all else.'],
    ideais: ['Knowledge. The path to power is through knowledge. (Neutral)', 'Beauty. What is beautiful points toward something true. (Good)'],
    vinculos: ['I spent years searching for the answer to a question that shaped my life.', 'I worked to preserve a threatened library or school.'],
    fraquezas: ['Most people are intellectually inferior. I have trouble hiding that.', 'I get so absorbed in my research that I sometimes ignore people.'],
  },
};

const ITEM_DICAS_EN = {
  'chain mail': 'Heavy armor made of interlocked metal rings. Excellent protection.',
  'scale mail': 'Medium metal armor. Good protection, lighter than chain mail.',
  'leather armor': 'Light armor made of hardened leather. Allows good mobility.',
  'studded leather': 'Reinforced and molded leather. Standard for artificers.',
  'padded armor': 'Simple protection made of thick hides and leather.',
  'shield': 'Increases your defense. Hold it on your arm to block incoming blows.',
  'wooden shield': 'Simple shield made of sturdy wood.',
  'holy symbol': 'A channel for your divine powers. Your god watches over you.',
  'arcane focus': 'A crystal, wand, or staff that channels your magic.',
  'druidic focus': 'A piece of nature — branch, stone, or totem — that amplifies your magic.',
  'component pouch': 'Organized magical ingredients. Replaces spell components.',
  'spellbook': 'Your magic diary. Contains all the spells you have learned.',
  'thieves\' tools': 'Lockpicks, levers, and pins for opening locks and disabling traps.',
  'dungeoneer\'s pack': 'Essentials: torch, rations, rope, first aid kit, and more.',
  'explorer\'s pack': 'For long journeys: water, food, blanket, map, and survival gear.',
  'scholar\'s pack': 'For curious minds: quill, ink, parchment, and a candle for night study.',
  'priest\'s pack': 'For servants of the gods: candle, blanket, incense, and sacred utensils.',
  'diplomat\'s pack': 'For silver-tongued characters: scrolls, wax seal, and fine clothes to impress.',
  'entertainer\'s pack': 'For performers: costumes, cosmetics, and stage accessories.',
  'burglar\'s pack': 'For night work: crowbar, grappling hook rope, and tools.',
};

/* Helpers que retornam os dados certos por idioma */
function getClasseEquipamento(classe) {
  return currentLang === 'en'
    ? (CLASSE_EQUIPAMENTO_EN[classe] || CLASSE_EQUIPAMENTO[classe])
    : CLASSE_EQUIPAMENTO[classe];
}
function getAntecedenteEquipamento(ant) {
  return currentLang === 'en'
    ? (ANTECEDENTE_EQUIPAMENTO_EN[ant] || ANTECEDENTE_EQUIPAMENTO[ant])
    : ANTECEDENTE_EQUIPAMENTO[ant];
}
function getAntecedentePersonalidade(ant) {
  return currentLang === 'en'
    ? (ANTECEDENTE_PERSONALIDADE_EN[ant] || ANTECEDENTE_PERSONALIDADE[ant])
    : ANTECEDENTE_PERSONALIDADE[ant];
}
function dicaParaItemEN(texto) {
  const tl = texto.toLowerCase();
  for (const [chave, dica] of Object.entries(ITEM_DICAS_EN)) {
    if (tl.includes(chave)) return dica;
  }
  return null;
}

/* ═══════════════════════════════════════════
   SEÇÃO 4 — EQUIPAMENTO (redesign para iniciantes)
   ═══════════════════════════════════════════ */

/* Estado global de equipamento */
let eqEscolhas = {}; // { 'c_0': 1, 'c_1': 0, ... } — índice da escolha por grupo
let eqArmasEscolhidas = {}; // { 'c_0_arma': {id, nome, tipo}, ... } — arma escolhida quando opção é livre

/* Mapeamento de ícones SVG por tipo de item */
const ICONES_SVG = {
  espada: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2L21 8.5l-12 12-3-1-1-3L14.5 2z"/><line x1="3" y1="21" x2="8" y2="16"/><line x1="7" y1="17" x2="9" y2="19"/></svg>`,
  arco:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M5 19 C5 19 3 12 8 7 C13 2 20 3 20 3"/><line x1="20" y1="3" x2="5" y2="19"/><line x1="9" y1="15" x2="13" y2="11"/></svg>`,
  adaga:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="3" x2="12" y2="18"/><path d="M9 6 L12 3 L15 6"/><rect x="9" y="16" width="6" height="2" rx="1"/><line x1="11" y1="18" x2="11" y2="21"/><line x1="13" y1="18" x2="13" y2="21"/></svg>`,
  bordao: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="20" x2="20" y2="4"/><circle cx="18" cy="6" r="3"/></svg>`,
  armadura:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L20 6 L20 13 C20 17 16 21 12 22 C8 21 4 17 4 13 L4 6 Z"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="8" y1="11" x2="16" y2="11"/></svg>`,
  escudo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L20 6 L20 13 C20 17 16 21 12 22 C8 21 4 17 4 13 L4 6 Z"/></svg>`,
  sagrado:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="6" y1="8" x2="18" y2="8"/></svg>`,
  foco:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  livro:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1-1H4V4z"/><path d="M20 4h-7a1 1 0 0 0-1 1v14a1 1 0 0 0 1-1h7V4z"/></svg>`,
  musica: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  ferr:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  mochila:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10a8 8 0 0 1 16 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z"/><line x1="8" y1="14" x2="16" y2="14"/></svg>`,
  moeda:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg>`,
  roupa:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20.38 8.57 17 5.2 16 7 12 5 8 7 7 5.2 3.62 8.57 6 11 4 20 12 22 20 20 18 11 20.38 8.57"/></svg>`,
  corda:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 8c0-2 2-3 4-2s3 3 2 5-3 3-5 2-3-3-2-5"/><path d="M6 20c0-2 1-3 2-4l4-4"/><path d="M18 4c0 2-1 3-2 4l-4 4"/></svg>`,
  ervas:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22V12"/><path d="M12 12C12 12 7 10 5 5c4 0 7 2 7 7z"/><path d="M12 12C12 12 17 10 19 5c-4 0-7 2-7 7z"/></svg>`,
  item:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
};

function iconeParaItem(texto) {
  const tl = texto.toLowerCase();
  if (tl.includes('espada') || tl.includes('rapieira') || tl.includes('machado') || tl.includes('cimitarra') || tl.includes('lâmina')
   || tl.includes('sword') || tl.includes('rapier') || tl.includes('axe') || tl.includes('scimitar') || tl.includes('blade')) return ICONES_SVG.espada;
  if (tl.includes('arco') || tl.includes('besta') || tl.includes('flecha') || tl.includes('virote') || tl.includes('azaga') || tl.includes('dardo')
   || tl.includes('bow') || tl.includes('crossbow') || tl.includes('arrow') || tl.includes('bolt') || tl.includes('javelin') || tl.includes('dart')) return ICONES_SVG.arco;
  if (tl.includes('adaga') || tl.includes('faca') || tl.includes('canivete')
   || tl.includes('dagger') || tl.includes('knife')) return ICONES_SVG.adaga;
  if (tl.includes('bordão') || tl.includes('cajado') || tl.includes('bastão') || tl.includes('maça') || tl.includes('martelo')
   || tl.includes('staff') || tl.includes('quarterstaff') || tl.includes('mace') || tl.includes('warhammer') || tl.includes('club')) return ICONES_SVG.bordao;
  if (tl.includes('cota') || tl.includes('brunea') || tl.includes('gibão') || tl.includes('armadura de couro') || tl.includes('couro')
   || tl.includes('chain mail') || tl.includes('scale mail') || tl.includes('leather armor') || tl.includes('studded') || tl.includes('padded')) return ICONES_SVG.armadura;
  if (tl.includes('escudo') || tl.includes('shield')) return ICONES_SVG.escudo;
  if (tl.includes('símbolo sagrado') || tl.includes('símbolo') || tl.includes('holy symbol')) return ICONES_SVG.sagrado;
  if (tl.includes('foco arcano') || tl.includes('foco druídico') || tl.includes('foco') || tl.includes('bolsa de componentes')
   || tl.includes('arcane focus') || tl.includes('druidic focus') || tl.includes('component pouch')) return ICONES_SVG.foco;
  if (tl.includes('grimório') || tl.includes('livro') || tl.includes('pergaminho') || tl.includes('tinta') || tl.includes('pena')
   || tl.includes('spellbook') || tl.includes('book') || tl.includes('scroll') || tl.includes('ink') || tl.includes('quill')) return ICONES_SVG.livro;
  if (tl.includes('instrumento') || tl.includes('alaúde') || tl.includes('flauta')
   || tl.includes('instrument') || tl.includes('lute') || tl.includes('flute')) return ICONES_SVG.musica;
  if (tl.includes('ferramenta') || tl.includes('tools') || tl.includes('kit')) return ICONES_SVG.ferr;
  if (tl.includes('pacote') || tl.includes('mochila') || tl.includes('saco')
   || tl.includes('pack') || tl.includes('bag') || tl.includes('pouch')) return ICONES_SVG.mochila;
  if (tl.includes('ouro') || tl.includes(' po') || tl.includes('peça') || tl.includes('moeda')
   || tl.includes('gold') || tl.includes(' gp') || tl.includes('coin') || tl.includes('piece')) return ICONES_SVG.moeda;
  if (tl.includes('roupa') || tl.includes('veste') || tl.includes('fantasia') || tl.includes('insígnia')
   || tl.includes('clothes') || tl.includes('clothing') || tl.includes('costume') || tl.includes('vestment') || tl.includes('insignia')) return ICONES_SVG.roupa;
  if (tl.includes('corda') || tl.includes('rope')) return ICONES_SVG.corda;
  if (tl.includes('erva') || tl.includes('incenso') || tl.includes('kit de erva')
   || tl.includes('herb') || tl.includes('incense')) return ICONES_SVG.ervas;
  return ICONES_SVG.item;
}

function dicaParaItem(texto) {
  if (currentLang === 'en') {
    const dica = dicaParaItemEN(texto);
    if (dica) return dica;
  }
  const tl = texto.toLowerCase();
  for (const [chave, dica] of Object.entries(ITEM_DICAS)) {
    if (tl.includes(chave)) return dica;
  }
  return null;
}

const ITEM_DICAS = {
  'cota de malha': 'Armadura pesada feita de anéis metálicos. Excelente proteção.',
  'brunea': 'Armadura média de metal. Boa proteção, mais leve que a cota.',
  'armadura de couro': 'Armadura leve de couro endurecido. Permite mover-se bem.',
  'armadura de couro batido': 'Couro reforçado e moldado. Padrão para artífices.',
  'gibão de peles': 'Proteção simples feita de peles e couros grossos.',
  'escudo': 'Aumenta sua defesa. Segure no braço para proteger dos golpes.',
  'escudo de madeira': 'Escudo simples de madeira resistente.',
  'símbolo sagrado': 'Canal para seus poderes divinos. Seu deus olha por você.',
  'foco arcano': 'Cristal, varinha ou cajado que canaliza sua magia.',
  'foco druídico': 'Pedaço de natureza — galho, pedra ou totem — que amplifica sua magia.',
  'bolsa de componentes': 'Ingredientes mágicos organizados. Substitui componentes de feitiços.',
  'grimório': 'Seu diário de magia. Contém todos os feitiços que você aprendeu.',
  'ferramentas de ladrão': 'Gazuas, alavancas e pinos para abrir fechaduras e desativar armadilhas.',
  'pacote de aventureiro': 'Essenciais: tocha, rações, corda, kit de primeiros socorros e mais.',
  'pacote de explorador': 'Para longas viagens: água, comida, cobertor, mapa e equipamentos de sobrevivência.',
  'pacote de estudioso': 'Para mentes curiosas: pena, tinta, pergaminho e vela para estudar à noite.',
  'pacote de sacerdote': 'Para servos dos deuses: vela, manta, incenso e utensílios sagrados.',
  'pacote de diplomata': 'Para bocas de ouro: pergaminhos, lacre e roupas para impressionar.',
  'pacote de artista': 'Para performers: fantasias, cosméticos e acessórios cênicos.',
  'pacote de assaltante': 'Para trabalhos noturnos: pé de cabra, corda com gancho e ferramentas.',
};

function renderEquipamentoClasse() {
  const classe = document.getElementById('char-class').value;
  const data = getClasseEquipamento(classe);
  const badge = document.getElementById('eq-classe-badge');
  const slotsWrap = document.getElementById('eq-slots-classe');
  const pendente = document.getElementById('eq-pendente-banner');

  if (!data || !classe) {
    badge.textContent = '';
    slotsWrap.innerHTML = `<div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);font-style:italic;padding:16px 0;text-align:center;">${t('dynEqChooseClass')}</div>`;
    pendente.classList.add('oculto');
    return;
  }

  badge.textContent = getClasseNome(classe) || '';
  let html = '';

  // ── Itens fixos em pills compactas ──
  if (data.fixos.length > 0) {
    html += `<div style="margin-bottom:4px">
      <div style="font-family:'Cinzel',serif;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--text-dim);margin-bottom:10px;display:flex;align-items:center;gap:8px;">
        <span style="display:inline-block;width:6px;height:6px;background:var(--gold2);transform:rotate(45deg)"></span>
        ${t('dynEqGuaranteed')}
        <span style="flex:1;height:1px;background:linear-gradient(90deg,var(--gold2),transparent)"></span>
      </div>
      <div class="eq-fixos-grid">`;
    data.fixos.forEach(item => {
      const escolhaLivre = detectarEscolhaLivre(item);
      if (escolhaLivre) {
        const chaveArma = 'fixo_' + item.toLowerCase().replace(/\s+/g,'_').substring(0,20);
        const armaSel = eqArmasEscolhidas[chaveArma];
        const armaSelNome = resolverNomeArma(armaSel);
        const icone = armaSelNome ? iconeParaItem(armaSelNome) : ICONES_SVG.espada;
        html += `
        <div class="eq-fixo-pill">
          <span class="eq-fixo-pill-icon">${icone}</span>
          <div class="eq-fixo-pill-body">
            <div class="eq-fixo-pill-nome">${armaSelNome ? armaSelNome : `<em style="opacity:0.6">${t('dynEqNoneChosen').replace(/<[^>]+>/g,'')}</em>`}</div>
            <div class="eq-fixo-pill-dica">${item}</div>
          </div>
          <span class="eq-fixo-pill-tag" style="${armaSelNome?'':'background:rgba(204,58,26,0.12);border-color:var(--accent);color:var(--accent);animation:eq-pulse 2s infinite'}">${armaSelNome ? t('dynEqYours') : t('dynEqChoose')}</span>
        </div>`;
        // Picker fora da grid/pill para não sofrer com clip-path
        html += `</div><div class="eq-fixos-picker-wrap" data-chave="${chaveArma}">`; // fecha grid, abre wrapper
        html += renderArmaPickerHTML(chaveArma, escolhaLivre.tipo, escolhaLivre.categoria, classe, item);
        html += `</div><div class="eq-fixos-grid">`; // reabre grid para próximos itens
      } else {
        const icone = iconeParaItem(item);
        const dica = dicaParaItem(item);
        html += `
        <div class="eq-fixo-pill">
          <span class="eq-fixo-pill-icon">${icone}</span>
          <div class="eq-fixo-pill-body">
            <div class="eq-fixo-pill-nome">${item}</div>
            ${dica ? `<div class="eq-fixo-pill-dica">${dica}</div>` : ''}
          </div>
          <span class="eq-fixo-pill-tag">${t('dynEqYours')}</span>
        </div>`;
      }
    });
    html += `</div></div>`;
  }

  // ── Separador se houver fixos e opcionais ──
  if (data.fixos.length > 0 && data.opcoes.length > 0) {
    html += `<div style="height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent);margin:4px 0 2px"></div>`;
  }

  // ── Grupos de escolha como cartas lado a lado ──
  if (data.opcoes.length > 0) {
    html += `<div style="font-family:'Cinzel',serif;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--text-dim);margin-bottom:12px;display:flex;align-items:center;gap:8px;">
        <span style="display:inline-block;width:6px;height:6px;border:1.5px solid var(--accent);transform:rotate(45deg)"></span>
        ${t('dynEqChoices')}
        <span style="flex:1;height:1px;background:linear-gradient(90deg,var(--accent2),transparent)"></span>
      </div>`;
  }

  const letras = ['A', 'B', 'C'];
  data.opcoes.forEach((grupo, gi) => {
    const chave = 'c_' + gi;
    const escolhido = eqEscolhas[chave];
    const resolvido = escolhido !== undefined;

    // Verifica se a opção escolhida ainda precisa de sub-escolha de arma
    const escolhaTexto = resolvido ? grupo.escolhas[escolhido] : null;
    const escolhaLivreInfo = escolhaTexto ? detectarEscolhaLivre(escolhaTexto) : null;
    const chaveArma = `c_${gi}_arma`;
    const armaSel = eqArmasEscolhidas[chaveArma];
    const armaSelNome = resolverNomeArma(armaSel);
    const escolhaNomeDisplay = resolvido
      ? (escolhaLivreInfo
          ? (armaSelNome ? armaSelNome : escolhaTexto)
          : grupo.escolhas[escolhido])
      : null;

    html += `<div class="eq-grupo-escolha">
      <div class="eq-grupo-label ${resolvido && (!escolhaLivreInfo || armaSelNome) ? 'resolvido' : ''}">
        ${grupo.label}
        ${(resolvido && (!escolhaLivreInfo || armaSelNome)) ? `<span style="font-family:'IM Fell English',serif;font-style:italic;font-size:10px;letter-spacing:0;text-transform:none;color:var(--gold);opacity:0.8">— ${escolhaNomeDisplay}</span>` : ''}
      </div>
      <div class="eq-cartas-grid">`;

    grupo.escolhas.forEach((escolha, ei) => {
      if (!escolha) return;
      const sel = escolhido === ei ? ' selecionada' : '';
      const estaLivre = detectarEscolhaLivre(escolha);
      const icOpc = estaLivre
        ? (armaSelNome && escolhido === ei ? iconeParaItem(armaSelNome) : ICONES_SVG.espada)
        : iconeParaItem(escolha);
      const dica = estaLivre ? null : dicaParaItem(escolha);
      const nomeDisplay = (estaLivre && escolhido === ei && armaSelNome)
        ? armaSelNome
        : escolha;

      html += `
        <button class="eq-carta${sel}" onclick="selecionarEscolhaV2('${chave}', ${ei}, ${gi})">
          <span class="eq-carta-letra">${letras[ei] || (ei+1)}</span>
          <span class="eq-carta-check">✓</span>
          <span class="eq-carta-icon">${icOpc}</span>
          <div class="eq-carta-nome">${nomeDisplay}</div>
          ${dica ? `<div class="eq-carta-dica">${dica}</div>` : ''}
          ${estaLivre && escolhido !== ei ? `<div class="eq-carta-dica" style="color:var(--accent);font-style:normal;font-size:9px;letter-spacing:0.5px">${t('dynEqYouChoose')}</div>` : ''}
        </button>`;
    });

    html += `</div>`;

    // Se a opção escolhida é "livre", mostra o picker logo abaixo das cartas
    if (resolvido && escolhaLivreInfo) {
      html += renderArmaPickerHTML(chaveArma, escolhaLivreInfo.tipo, escolhaLivreInfo.categoria, classe, escolhaTexto);
    }

    html += `</div>`;
  });

  // Moedas iniciais
  if (data.moedas) {
    html += `<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(201,168,76,0.06);border:1px dashed var(--gold2);margin-top:4px;clip-path:polygon(0 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%)">
      <span style="font-size:16px">🪙</span>
      <span style="font-family:'IM Fell English',serif;font-size:12px;color:var(--text-dim);font-style:italic;">${t('dynEqCoins')} <strong style="color:var(--gold);font-style:normal;font-family:'Cinzel',serif;font-size:11px">${data.moedas}</strong> <span style="opacity:0.6">(≈${data.moedasMedia} gp)</span></span>
    </div>`;
  }

  slotsWrap.innerHTML = html;

  // Atualiza banner de pendências — conta grupos sem escolha E pickers de arma pendentes
  let pendentes = data.opcoes.filter((_, gi) => eqEscolhas['c_'+gi] === undefined).length;
  // Conta fixos livres sem escolha
  data.fixos.forEach(item => {
    if (detectarEscolhaLivre(item)) {
      const chaveArma = 'fixo_' + item.toLowerCase().replace(/\s+/g,'_').substring(0,20);
      if (!eqArmasEscolhidas[chaveArma]) pendentes++;
    }
  });
  // Conta opções com picker de arma pendente
  data.opcoes.forEach((grupo, gi) => {
    const escolhido = eqEscolhas['c_'+gi];
    if (escolhido !== undefined) {
      const escolha = grupo.escolhas[escolhido];
      if (detectarEscolhaLivre(escolha) && !eqArmasEscolhidas[`c_${gi}_arma`]) pendentes++;
    }
  });
  pendente.classList.toggle('oculto', pendentes === 0);

  atualizarInventarioVisual();
}

function selecionarEscolhaV2(chave, indice, gi) {
  // Se mudou de opção, limpa a arma escolhida anteriormente para esse grupo
  if (eqEscolhas[chave] !== indice) {
    delete eqArmasEscolhidas[`${chave}_arma`];
    delete window[`_armaFiltro_${chave}_arma`];
  }
  eqEscolhas[chave] = indice;
  renderEquipamentoClasse();
}

function renderEquipamentoAntecedente() {
  const antecedente = document.getElementById('char-background').value;
  const data = getAntecedenteEquipamento(antecedente);
  const badge = document.getElementById('eq-ant-badge');
  const lista = document.getElementById('eq-antecedente-lista');

  const ANTECEDENTE_NOMES = {
    acolito:'Acólito', artesao:'Artesão de Guilda', charlatan:'Charlatão', criminoso:'Criminoso',
    eremita:'Eremita', entretenedor:'Entretenedor', forasteiro:'Forasteiro', heroi:'Herói do Povo',
    marinheiro:'Marinheiro', nobre:'Nobre', sabio:'Sábio', soldado:'Soldado',
  };

  if (!data || !antecedente) {
    badge.textContent = '';
    lista.innerHTML = `<div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);font-style:italic;text-align:center;padding:12px 0;">${t('dynEqChooseBackground')}</div>`;
    atualizarInventarioVisual();
    return;
  }

  badge.textContent = getAntecedenteNome(antecedente) || '';
  lista.innerHTML = data.itens.map(item => {
    const icone = iconeParaItem(item);
    const dica = dicaParaItem(item);
    return `
    <div class="eq-ant-item">
      <span class="eq-item-icon" style="color:var(--gold2);width:18px;height:18px;flex-shrink:0;margin-top:2px">${icone}</span>
      <div>
        <div>${item}</div>
        ${dica ? `<div class="eq-slot-dica">${dica}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  renderSugestoesPersonalidade(antecedente);
  atualizarInventarioVisual();
}

function renderSugestoesPersonalidade(antecedente) {
  const data = getAntecedentePersonalidade(antecedente);
  if (!data) return;

  const mapa = [
    { key: 'tracos',    id: 'eq-sug-traco',   campo: 'eq-traco'   },
    { key: 'ideais',    id: 'eq-sug-ideal',   campo: 'eq-ideal'   },
    { key: 'vinculos',  id: 'eq-sug-vinculo', campo: 'eq-vinculo' },
    { key: 'fraquezas', id: 'eq-sug-fraqueza',campo: 'eq-fraqueza'},
  ];

  mapa.forEach(m => {
    const wrap = document.getElementById(m.id);
    if (!wrap || !data[m.key]) return;
    wrap.innerHTML = data[m.key].map(s =>
      `<span class="eq-sug-chip" onclick="usarSugestao('${m.campo}', \`${s.replace(/`/g,'\\`')}\`)">${s}</span>`
    ).join('');
  });
}

function usarSugestao(id, texto) {
  const el = document.getElementById(id);
  if (el) { el.value = texto; el.focus(); }
}

function atualizarInventarioVisual() {
  const grid = document.getElementById('eq-inventario-grid');
  const vazio = document.getElementById('eq-inventario-vazio');
  if (!grid) return;

  const classe = document.getElementById('char-class').value;
  const antecedente = document.getElementById('char-background').value;
  const classeData = getClasseEquipamento(classe);
  const antData = getAntecedenteEquipamento(antecedente);

  const itens = [];

  if (classeData) {
    classeData.fixos.forEach(i => {
      const livre = detectarEscolhaLivre(i);
      if (livre) {
        const chaveArma = 'fixo_' + i.toLowerCase().replace(/\s+/g,'_').substring(0,20);
        const armaSel = eqArmasEscolhidas[chaveArma];
        const nome = resolverNomeArma(armaSel);
        if (nome) itens.push({ texto: nome, fonte: 'classe' });
      } else {
        itens.push({ texto: i, fonte: 'classe' });
      }
    });
    classeData.opcoes.forEach((grupo, gi) => {
      const escolhido = eqEscolhas['c_' + gi];
      if (escolhido !== undefined && grupo.escolhas[escolhido]) {
        const textoOpc = grupo.escolhas[escolhido];
        const livre = detectarEscolhaLivre(textoOpc);
        if (livre) {
          const armaSel = eqArmasEscolhidas[`c_${gi}_arma`];
          const nome = resolverNomeArma(armaSel);
          if (nome) itens.push({ texto: nome, fonte: 'classe' });
          else itens.push({ texto: textoOpc, fonte: 'classe' }); // placeholder ainda
        } else {
          itens.push({ texto: textoOpc, fonte: 'classe' });
        }
      }
    });
  }

  if (antData) {
    antData.itens.forEach(i => itens.push({ texto: i, fonte: 'antecedente' }));
  }

  if (itens.length === 0) {
    grid.innerHTML = '';
    vazio.style.display = 'block';
    return;
  }

  vazio.style.display = 'none';
  grid.innerHTML = itens.map(it => {
    const icone = iconeParaItem(it.texto);
    return `
    <div class="eq-inv-card">
      <div class="eq-item-icon" style="color:${it.fonte==='classe' ? 'var(--accent)' : 'var(--gold2)'}">${icone}</div>
      <div class="eq-inv-nome">${it.texto}</div>
      <div class="eq-inv-fonte ${it.fonte}">${it.fonte === 'classe' ? t('lblClass') : t('lblBackground')}</div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════════
   CONTINUAR PARA MAGIAS & PODERES
   ═══════════════════════════════════════════════════════════════ */
function continuarMagias() {
  const secao = document.getElementById('sec-magias');
  const btn   = document.getElementById('btn-continuar-3');

  btn.style.display = 'none';
  secao.style.display = 'block';

  renderMagias();
  atualizarProgress(4);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      secao.style.opacity = '1';
      secao.style.transform = 'translateY(0)';
    });
  });
  setTimeout(() => { secao.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
}

/* ═══════════════════════════════════════════════════════════════
   DADOS: ESPAÇOS DE MAGIA POR NÍVEL — PHB Cap.3 (tabelas de classe)
   ═══════════════════════════════════════════════════════════════
   Formato: [nivel_1, nivel_2, ..., nivel_9] para cada nível de personagem 1–20
   Conjuradores plenos (Bardo, Clérigo, Druida, Feiticeiro, Mago):
   Meios-conjuradores (Paladino, Patrulheiro): espaços por nível de classe
   Terço-conjuradores (Cavaleiro Arcano/Trapaceiro Arcano): limitado
   Bruxo: Magia de Pacto — slots especiais
   ─────────────────────────────────────────────────────────────── */

// Espaços de magia — conjuradores plenos (Bardo, Clérigo, Druida, Feiticeiro, Mago)
// Índice 0 = nível 1 do personagem, índice 19 = nível 20
const SLOTS_PLENO = [
  /* nv 1  */ [2,0,0,0,0,0,0,0,0],
  /* nv 2  */ [3,0,0,0,0,0,0,0,0],
  /* nv 3  */ [4,2,0,0,0,0,0,0,0],
  /* nv 4  */ [4,3,0,0,0,0,0,0,0],
  /* nv 5  */ [4,3,2,0,0,0,0,0,0],
  /* nv 6  */ [4,3,3,0,0,0,0,0,0],
  /* nv 7  */ [4,3,3,1,0,0,0,0,0],
  /* nv 8  */ [4,3,3,2,0,0,0,0,0],
  /* nv 9  */ [4,3,3,3,1,0,0,0,0],
  /* nv10  */ [4,3,3,3,2,0,0,0,0],
  /* nv11  */ [4,3,3,3,2,1,0,0,0],
  /* nv12  */ [4,3,3,3,2,1,0,0,0],
  /* nv13  */ [4,3,3,3,2,1,1,0,0],
  /* nv14  */ [4,3,3,3,2,1,1,0,0],
  /* nv15  */ [4,3,3,3,2,1,1,1,0],
  /* nv16  */ [4,3,3,3,2,1,1,1,0],
  /* nv17  */ [4,3,3,3,2,1,1,1,1],
  /* nv18  */ [4,3,3,3,3,1,1,1,1],
  /* nv19  */ [4,3,3,3,3,2,1,1,1],
  /* nv20  */ [4,3,3,3,3,2,2,1,1],
];

// Truques por nível — conjuradores plenos (Bardo e Feiticeiro têm tabelas similares)
const TRUQUES_BARDO = [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];
const TRUQUES_CLERIGO = [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5];
const TRUQUES_DRUIDA = [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];
const TRUQUES_FEITICEIRO = [4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6];
const TRUQUES_MAGO = [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5];
const TRUQUES_ARTIFICE = [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];

// Magias conhecidas — conjuradores por conhecimento (Bardo, Feiticeiro, Bruxo, Patrulheiro)
const MAGIAS_CONHECIDAS_BARDO = [4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22];
const MAGIAS_CONHECIDAS_FEITICEIRO = [2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15,15];
const MAGIAS_CONHECIDAS_PATRULHEIRO = [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];

// Magias preparadas — clérigo, druida, paladino (mod + nível)
// → calculado dinamicamente: modAtrib + nível (mínimo 1)

// Espaços de magia — meios-conjuradores: Paladino e Patrulheiro
// (Começam com magia no nível 2; tabela baseada em nível de CLASSE)
const SLOTS_MEIO = [
  /* nv 1  */ [0,0,0,0,0],
  /* nv 2  */ [2,0,0,0,0],
  /* nv 3  */ [3,0,0,0,0],
  /* nv 4  */ [3,0,0,0,0],
  /* nv 5  */ [4,2,0,0,0],
  /* nv 6  */ [4,2,0,0,0],
  /* nv 7  */ [4,3,0,0,0],
  /* nv 8  */ [4,3,0,0,0],
  /* nv 9  */ [4,3,2,0,0],
  /* nv10  */ [4,3,2,0,0],
  /* nv11  */ [4,3,3,0,0],
  /* nv12  */ [4,3,3,0,0],
  /* nv13  */ [4,3,3,1,0],
  /* nv14  */ [4,3,3,1,0],
  /* nv15  */ [4,3,3,2,0],
  /* nv16  */ [4,3,3,2,0],
  /* nv17  */ [4,3,3,3,1],
  /* nv18  */ [4,3,3,3,1],
  /* nv19  */ [4,3,3,3,2],
  /* nv20  */ [4,3,3,3,2],
];

// Espaços de magia — Cavaleiro Arcano (Guerreiro 3+) e Trapaceiro Arcano (Ladino 3+)
// Baseado no nível de CLASSE do personagem
const SLOTS_TERCA = [
  /* nv 1  */ [0,0,0,0],
  /* nv 2  */ [0,0,0,0],
  /* nv 3  */ [2,0,0,0],
  /* nv 4  */ [3,0,0,0],
  /* nv 5  */ [3,0,0,0],
  /* nv 6  */ [3,0,0,0],
  /* nv 7  */ [4,2,0,0],
  /* nv 8  */ [4,2,0,0],
  /* nv 9  */ [4,2,0,0],
  /* nv10  */ [4,3,0,0],
  /* nv11  */ [4,3,0,0],
  /* nv12  */ [4,3,0,0],
  /* nv13  */ [4,3,2,0],
  /* nv14  */ [4,3,2,0],
  /* nv15  */ [4,3,2,0],
  /* nv16  */ [4,3,3,0],
  /* nv17  */ [4,3,3,0],
  /* nv18  */ [4,3,3,0],
  /* nv19  */ [4,3,3,1],
  /* nv20  */ [4,3,3,1],
];

// Truques — Cavaleiro Arcano e Trapaceiro Arcano
const TRUQUES_TERCA = [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];

// Bruxo — Magia de Pacto (todos espaços do mesmo nível, recupera em descanso curto)
// [nível da magia, número de espaços]
const SLOTS_BRUXO = [
  [1,1],[1,2],[2,2],[2,2],[3,2],[3,2],[4,2],[4,2],[5,2],[5,2],
  [5,3],[5,3],[5,3],[5,3],[5,3],[5,3],[5,4],[5,4],[5,4],[5,4],
];
const MAGIAS_CONHECIDAS_BRUXO = [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,15,15,15];

// Artifice — Conjurador especial (começa no nível 1 com magia; usa INT; slots = meio-conjurador a partir do nv1)
const SLOTS_ARTIFICE = [
  /* nv 1  */ [2,0,0,0,0],
  /* nv 2  */ [2,0,0,0,0],
  /* nv 3  */ [3,0,0,0,0],
  /* nv 4  */ [3,0,0,0,0],
  /* nv 5  */ [4,2,0,0,0],
  /* nv 6  */ [4,2,0,0,0],
  /* nv 7  */ [4,3,0,0,0],
  /* nv 8  */ [4,3,0,0,0],
  /* nv 9  */ [4,3,2,0,0],
  /* nv10  */ [4,3,2,0,0],
  /* nv11  */ [4,3,3,0,0],
  /* nv12  */ [4,3,3,0,0],
  /* nv13  */ [4,3,3,1,0],
  /* nv14  */ [4,3,3,1,0],
  /* nv15  */ [4,3,3,2,0],
  /* nv16  */ [4,3,3,2,0],
  /* nv17  */ [4,3,3,3,1],
  /* nv18  */ [4,3,3,3,1],
  /* nv19  */ [4,3,3,3,2],
  /* nv20  */ [4,3,3,3,2],
];

// Habilidades especiais (não-mágicas) por nível 1 — resumo curto
// Calcula usos de uma habilidade com base no nível e modificadores
function calcularUsos(formula, nivel, classe) {
  if (!formula) return 0;
  const finais = getValoresFinais();
  const modCAR = Math.floor((finais.CAR - 10) / 2);
  const modSAB = Math.floor((finais.SAB - 10) / 2);
  const modDES = Math.floor((finais.DES - 10) / 2);
  const modCON = Math.floor((finais.CON - 10) / 2);
  const prof = getProfBonus(nivel);
  if (formula === 'nivel') return nivel;
  if (formula === '1') return 1;
  if (formula === '2') return 2;
  if (formula === '1+mod_CAR') return Math.max(1, 1 + modCAR);
  if (formula === 'raiva') {
    // PHB p.47: nível 1–2=2, 3–5=3, 6–11=4, 12–16=5, 17–19=6, 20=ilimitado
    if (nivel >= 20) return 99;
    if (nivel >= 17) return 6;
    if (nivel >= 12) return 5;
    if (nivel >= 6)  return 4;
    if (nivel >= 3)  return 3;
    return 2;
  }
  if (formula === 'surto') return nivel >= 17 ? 2 : 1;
  if (formula === 'indomavel') {
    // PHB p.83: 1 uso (nv9), 2 usos (nv13), 3 usos (nv17)
    if (nivel >= 17) return 3;
    if (nivel >= 13) return 2;
    return 1;
  }
  if (formula === 'dados_sup') {
    // Mestre de Batalha PHB p.73: 4 dados (nv3-6), 5 dados (nv7-14), 6 dados (nv15+)
    if (nivel >= 15) return 6;
    if (nivel >= 7)  return 5;
    return 4;
  }
  if (formula === 'canalizar') {
    // Clérigo e Paladino: 1 uso, 2 a partir do nível 6 (clérigo), 3 a partir do 18
    if (classe === 'clerigo') {
      if (nivel >= 18) return 3;
      if (nivel >= 6)  return 2;
      return 1;
    }
    return 1; // Paladino: sempre 1
  }
  if (formula === 'sentido_divino') return Math.max(1, 1 + modCAR);
  if (formula === 'ki') return nivel; // Ki = nível de monge
  if (formula === 'prof') return prof; // Portador do Enxame: usos = bônus de prof
  if (formula === 'pontos_feiti') {
    // PHB p.101: Pontos de Feitiçaria = nível do feiticeiro (a partir do nível 2)
    if (nivel < 2) return 0;
    return nivel;
  }
  // ── Artífice (Caldeirão de Tasha) ──
  if (formula === 'lampejo') // Lampejo de Genialidade: mod. INT vezes (mín. 1)
    return Math.max(1, Math.floor((getValoresFinais().INT - 10) / 2));
  if (formula === 'infusoes') { // itens infundidos por nível (tabela O Artífice)
    if (nivel >= 18) return 6;
    if (nivel >= 14) return 5;
    if (nivel >= 10) return 4;
    if (nivel >= 6)  return 3;
    return 2;
  }
  if (formula === 'elixir') { // elixires automáticos por descanso longo (Alquimista)
    if (nivel >= 15) return 3;
    if (nivel >= 6)  return 2;
    return 1;
  }
  if (formula === 'pulso') // Pulso Arcano: mod. INT vezes (mín. 1)
    return Math.max(1, Math.floor((getValoresFinais().INT - 10) / 2));
  if (formula === 'campo_def') return prof; // Campo Defensivo Guardião: bônus de prof
}

/* Habilidades de subclasse — usadas pela aba Subclasse */
const SUBCLASSE_HABILIDADES = {
  barbaro: {
    berserker: {
      nome: 'Caminho do Berserker',
      nome_en: 'Path of the Berserker',
      cor: '#cc3a1a',
      icone: '🔥',
      habilidades: [
        { nivel:3, nome:'Frenesi', nome_en:'Frenzy', icone:'⚔️',
          desc:'Ao entrar em Fúria, pode optar por Frenesi: faça um ataque corpo-a-corpo extra como ação bônus a cada turno da Fúria. Ao terminar, fica Exausto (1 nível de exaustão).',
          desc_en:"When you enter your Rage, you can go into a Frenzy. For the duration, you can make one melee weapon attack as a bonus action on each of your turns. When your Rage ends, you suffer one level of exhaustion." },
        { nivel:6, nome:'Presença Intimidadora', nome_en:'Intimidating Presence', icone:'😤',
          desc:'Ação: assuste uma criatura que você possa ver em 9m. Testa INT, SAB ou CAR vs. CD (8 + prof + mod. CAR). O efeito termina no início do seu próximo turno.',
          desc_en:"Action: frighten one creature you can see within 30 feet. It makes a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). On a failure, it is frightened of you until the start of your next turn." },
        { nivel:10, nome:'Represália', nome_en:'Retaliation', icone:'🛡️',
          desc:'Reação quando sofre dano de criatura adjacente: faça um ataque corpo-a-corpo contra o atacante.',
          desc_en:'When you take damage from a creature within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.' },
        { nivel:14, nome:'Poder Aterrorizante', nome_en:'Terrifying Presence', icone:'💀',
          desc:'Ao usar Presença Intimidadora: criaturas com INT ≤ 4 falham automaticamente. Criaturas assustadas devem gastar reação para recuar.',
          desc_en:'When you use Intimidating Presence, creatures with an Intelligence of 4 or lower automatically fail the saving throw. Frightened creatures must also spend their reaction to move away from you as far as possible.' },
      ]
    },
    totem: {
      nome: 'Caminho do Guerreiro Totêmico',
      nome_en: 'Path of the Totem Warrior',
      cor: '#cc3a1a',
      icone: '🐻',
      habilidades: [
        { nivel:3, nome:'Feiticeiro dos Espíritos', nome_en:'Spirit Seeker', icone:'🌀',
          desc:'Adiciona Comunicar-se com Animais à sua lista. Pode lançar sem espaço de magia (1/descanso longo).',
          desc_en:'You gain the ability to cast Speak with Animals as a ritual, reflecting your bond with the natural world and the spirit animals that guide your path.' },
        { nivel:3, nome:'Espírito Totêmico', nome_en:'Totem Spirit', icone:'🦅',
          desc:'Escolha seu totem durante a Fúria. Urso: resistência a todos os danos (exceto psíquico). Águia: sem ataques de oportunidade contra você. Lobo: aliados têm vantagem ao atacar inimigos adjacentes a você.',
          desc_en:'Choose a totem animal that guides you while raging. Bear: resistance to all damage except psychic. Eagle: other creatures have disadvantage on opportunity attacks against you, and you can Dash as a bonus action. Wolf: your allies have advantage on melee attack rolls against any creature within 5 feet of you.' },
        { nivel:6, nome:'Aspecto do Espírito Totêmico', nome_en:'Aspect of the Beast', icone:'🐺',
          desc:'Benefício passivo. Urso: Força dobrada para carregar. Águia: Percepção com vantagem. Lobo: rastreamento sem esforço em qualquer ambiente.',
          desc_en:'Passive benefit tied to your totem. Bear: your carrying capacity is doubled and you have advantage on Strength checks. Eagle: you can see up to 1 mile away with no difficulty. Wolf: you can track creatures effortlessly, even through harsh weather or difficult terrain.' },
        { nivel:10, nome:'Viagem Espiritual', nome_en:'Spirit Walker', icone:'✨',
          desc:'Pode lançar Comungar com a Natureza sem componentes (1/descanso longo).',
          desc_en:'You can cast Commune with Nature as a ritual. A spiritual version of your totem animal appears to deliver the information you seek.' },
        { nivel:14, nome:'Dom do Espírito Totêmico', nome_en:'Totemic Attunement', icone:'🌟',
          desc:'Urso: pode mover criaturas Paralisadas. Águia: voa ao entrar em Fúria. Lobo: derrube inimigos como ação bônus durante Fúria.',
          desc_en:'Final totem power while raging. Bear: you can move creatures that are grappling someone else (bonus action). Eagle: you gain a flying speed equal to your walking speed. Wolf: bonus action to knock a Large or smaller creature prone when you hit it with a melee attack.' },
      ]
    },
    besta: {
      nome: 'Caminho da Besta (Tasha)',
      nome_en: "Path of the Beast (Tasha's)",
      cor: '#cc3a1a',
      icone: '🐾',
      habilidades: [
        { nivel:3, nome:'Forma da Besta', nome_en:'Form of the Beast', icone:'🦷',
          desc:'Ao entrar em Fúria, manifeste uma parte animal. Escolha: Mordida (d8+FOR, recupera PV = prof), Garra (d6+FOR, atacar dois alvos), Cauda (reação d8 em ataques que quase acertam).',
          desc_en:'When you enter your Rage, you manifest a natural weapon. Choose one: Bite (1d8 + STR piercing; recover HP = proficiency bonus on hit, once per turn), Claws (1d6 + STR slashing; bonus action extra claw attack), or Tail (1d8 + STR bludgeoning; reaction when attacked — add 1d8 to your AC for that attack).' },
        { nivel:6, nome:'Sentidos Bestiais', nome_en:'Bestial Soul', icone:'👃',
          desc:'Vantagem em Percepção. Em Fúria: visão no escuro extra 18m. Pode farejar invisíveis em 9m.',
          desc_en:'The feral power within you grows. Choose one permanent benefit: swim speed equal to walking speed (and breathe underwater), climb speed equal to walking speed (can climb difficult surfaces), or jump — make one melee attack against a creature as part of the jump, dealing extra damage equal to your Strength modifier.' },
        { nivel:10, nome:'Contagiar a Besta', nome_en:'Infectious Fury', icone:'🦅',
          desc:'Aliados adjacentes também manifestam a Forma da Besta: +1d6 em ataques enquanto você está em Fúria.',
          desc_en:'When you hit with a natural weapon while raging, the beast within can leap to another creature within 30 feet. That creature makes a Wisdom save (DC = 8 + CON mod + proficiency) or suffers your choice: 2d12 psychic damage, or it uses its reaction to make a melee attack against a creature you choose.' },
        { nivel:14, nome:'Chamado da Besta', nome_en:'Call the Hunt', icone:'🌿',
          desc:'Sua manifestação animal persiste além da Fúria por 1 minuto. Invoca um espírito bestial ao terminar a Fúria.',
          desc_en:'When you enter your Rage, choose up to CON modifier willing creatures within 30 feet (minimum 1). Each gains 5 temporary HP. Until your Rage ends, each affected creature can roll 1d6 once per turn and add it to an attack roll or saving throw.' },
      ]
    },
    'magia-selvagem': {
      nome: 'Caminho da Magia Selvagem (Tasha)',
      nome_en: "Path of Wild Magic (Tasha's)",
      cor: '#cc3a1a',
      icone: '💥',
      habilidades: [
        { nivel:3, nome:'Consciência Mágica', nome_en:'Magic Awareness', icone:'🎲',
          desc:'Como ação, abra sua consciência à magia concentrada em um raio de 18m até o fim do seu próximo turno. Você sabe a localização de qualquer magia ativa ou criatura com nível de magia dentro do alcance. 1/descanso longo.',
          desc_en:'As an action, open your awareness to concentrated magic within 60 feet until the end of your next turn. When you enter a Rage, roll on the Wild Magic table: 1–2 = magic shield aura, 3–4 = radiant damage burst, 5–6 = 10-foot push, 7–8 = invisibility until next turn. Effect repeats each turn you maintain the Rage.' },
        { nivel:3, nome:'Surto Selvagem', nome_en:'Wild Surge', icone:'🔮',
          desc:'Ao entrar em Fúria, magia selvagem pulsa ao seu redor. Enquanto em Fúria, pode usar ação bônus para se teletransportar até 9m para um espaço visível desocupado. Ao fazer isso, pode causar dano de força igual a 1d12 + CON a criaturas em 1,5m do local de origem.',
          desc_en:'Each time you enter your Rage, wild magic surges around you. Until your Rage ends, you can use a bonus action to teleport up to 30 feet to a visible unoccupied space. When you do, you can deal force damage equal to 1d12 + your Constitution modifier to any creature within 5 feet of where you left.' },
        { nivel:6, nome:'Magia Fortalecedora', nome_en:'Bolstering Magic', icone:'⚡',
          desc:'Como ação, toque uma criatura (incluindo você mesmo) e conceda um benefício: role 1d3 e adicione o resultado em todas as jogadas de ataque e testes de resistência por 10 minutos; ou role 1d3 e restaure um slot de magia desse nível ou inferior.',
          desc_en:'As an action, touch a creature (including yourself) and grant one benefit: roll 1d3 and add it to all attack rolls and saving throws for 10 minutes, or roll 1d3 and restore a spell slot of that level or lower (if the creature has expended spell slots of that level).' },
        { nivel:10, nome:'Retaliação Instável', nome_en:'Unstable Backlash', icone:'🌀',
          desc:'Ao sofrer dano ou falhar em um teste de resistência enquanto em Fúria, pode usar sua reação para rolar na Tabela de Magia Selvagem e aplicar imediatamente o resultado — transformando um momento ruim em um surto caótico.',
          desc_en:"When you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately apply the result — turning a bad moment into a chaotic surge that might turn the tide." },
        { nivel:14, nome:'Surto Controlado', nome_en:'Controlled Surge', icone:'🌪️',
          desc:'Ao rolar na Tabela de Magia Selvagem, role o dado duas vezes e escolha qual efeito aplicar. Se ambos os resultados forem iguais, ignore-os e escolha qualquer efeito da tabela — você dobra o caos à sua vontade.',
          desc_en:'Whenever you roll on the Wild Magic table, roll the die twice and choose which effect to apply. If both results are the same, ignore them and pick any effect from the table instead — you bend the chaos to your will.' },
      ]
    },
  },
  guerreiro: {
    // Subclasses nos níveis 3, 7, 10, 15, 18 — PHB p.72-79 + Caldeirão de Tasha
    campeao: {
      nome: 'Campeão',
      cor: '#b83828',
      icone: '🏆',
      habilidades: [
        { nivel:3, nome:'Crítico Aprimorado', icone:'💥', desc:'Seus ataques com armas causam acerto crítico com resultados 19 ou 20 no dado (em vez de só 20). No nível 15, um crítico acontece com 18, 19 ou 20. Um crítico dobra todos os dados de dano — você passa a acertar golpes devastadores com muito mais frequência.' },
        { nivel:7, nome:'Atleta Notável', icone:'💪', desc:'Dois benefícios físicos permanentes: (1) adicione metade do bônus de proficiência em testes de Força, Destreza e Constituição onde você não tem proficiência completa; (2) a distância de salto em corrida aumenta 30cm para cada ponto do seu modificador de Força.' },
        { nivel:10, nome:'Estilo de Combate Adicional', icone:'🛡️', desc:'Aprenda um segundo Estilo de Combate à sua escolha. O Campeão pode combinar dois estilos passivos simultaneamente — por exemplo, Defesa (+1 CA) com Arquearia (+2 em ataques à distância) ao mesmo tempo.' },
        { nivel:15, nome:'Crítico Superior', icone:'💥', desc:'Acertos críticos agora acontecem com resultados 18, 19 ou 20 no dado. Isso significa que aproximadamente 15% dos seus ataques causarão dano dobrado — uma taxa enorme em combates prolongados.' },
        { nivel:18, nome:'Sobrevivente', icone:'❤️', desc:'Se você iniciar seu turno com metade ou menos dos seus PV máximos, recupera automaticamente PV iguais a 5 + modificador de Constituição. Não funciona se você estiver a 0 PV. Combinado com sua alta quantidade de vida, torna você extremamente difícil de derrubar.' },
      ]
    },
    'mestre-batalha': {
      nome: 'Mestre de Batalha',
      cor: '#b83828',
      icone: '🎯',
      habilidades: [
        { nivel:3, nome:'Manobras de Combate', icone:'⚔️', desc:'Aprenda 3 manobras táticas (chega a 9 no total). Cada manobra gasta 1 Dado de Superioridade (d8, melhora para d10 no nível 10 e d12 no nível 18) para criar efeitos especiais: empurrar inimigos, desequilibrar alvos, redirecionar ataques para aliados, aumentar dano, curar aliados, e mais. São a ferramenta mais versátil de todas as subclasses marciais.' },
        {
          nivel:3, nome:'Dados de Superioridade', icone:'🎲',
          desc:'Você tem 4 Dados de Superioridade (d8) para gastar nas Manobras. Todos se recuperam após descanso curto ou longo. Nível 7: 5 dados. Nível 15: 6 dados. O tipo melhora para d10 no nível 10 e d12 no nível 18.',
          recarga:'curto', formula:'dados_sup', id:'dados_sup',
          nota: (nivel) => `${calcularUsos('dados_sup', nivel, 'guerreiro')} dados (${nivel >= 18 ? 'd12' : nivel >= 10 ? 'd10' : 'd8'}) · descanso curto`
        },
        { nivel:3, nome:'Conhecedor', icone:'🔍', desc:'Ao inspecionar uma ferramenta, arma ou veículo por 1 minuto, aprenda o tipo, propriedades e qualquer encantamento — exceto se for amaldiçoado. Essencial para identificar itens mágicos sem depender de magias.' },
        { nivel:7, nome:'Manobras e Dado Adicionais', icone:'📜', desc:'Aprenda 2 novas manobras (total: 5). Dados de Superioridade: agora são 5. Você também pode substituir uma manobra conhecida por outra ao ganhar nível.' },
        { nivel:10, nome:'Manobras Adicionais (II)', icone:'🔄', desc:'Aprenda 2 novas manobras (total: 7). O dado de Superioridade melhora para d10. Ao ganhar nível, pode substituir uma manobra e/ou estilo de combate.' },
        { nivel:15, nome:'Manobras Adicionais (III)', icone:'📜', desc:'Aprenda 2 novas manobras (total: 9 — máximo). Dados de Superioridade: agora são 6.' },
        { nivel:18, nome:'Implacável', icone:'💪', desc:'Ao rolar iniciativa com 0 Dados de Superioridade restantes, recupera imediatamente 1 dado. O dado também melhora para d12. Você nunca entra em combate completamente sem recursos táticos.' },
      ]
    },
    'cavaleiro-arcano': {
      nome: 'Cavaleiro Arcano',
      cor: '#b83828',
      icone: '🔮',
      habilidades: [
        { nivel:3, nome:'Conjuração', nome_en:'Spellcasting', icone:'📖', desc:'Aprenda magias de mago usando Inteligência (CD = 8 + prof + INT). Começa com 3 truques e magias de 1° nível, priorizando Abjuração e Evocação. Espaços recuperam em descanso longo. Como meio-conjurador, progride mais devagar que um mago puro, mas combina magia com o combate de forma única.' },
        { nivel:3, nome:'Vínculo com Arma', icone:'⚔️', desc:'Ritual de 1 hora: crie vínculo mágico com até 2 armas. Uma arma vinculada não pode ser desarmada de você involuntariamente, e você a invoca para a mão como ação bônus — mesmo que esteja a centenas de metros. Ideal para armas de arremesso ou para garantir sempre ter sua espada à mão.' },
        { nivel:7, nome:'Magia de Guerra', icone:'✨', desc:'Quando usa sua ação para lançar um truque, pode realizar um ataque com arma como ação bônus. Integra magia e combate no mesmo turno: lance Choque e ataque com a espada em sequência.' },
        { nivel:10, nome:'Carregar Eldritch', icone:'⚡', desc:'Quando usa Surto de Ação, pode lançar um truque como parte de uma das ações extras. Isso libera sua ação principal para atacar enquanto o Surto cuida da magia.' },
        { nivel:15, nome:'Investida Arcana', icone:'🌀', desc:'Quando usa Surto de Ação, pode se teletransportar até 9m para um espaço visível desocupado, antes ou depois das ações extras. Combine mobilidade mágica com os ataques extras para alcançar qualquer alvo.' },
        { nivel:18, nome:'Magia de Guerra Aprimorada', icone:'✨', desc:'Sempre que usar sua ação para lançar qualquer magia (não só truques), pode realizar um ataque com arma como ação bônus. Você se torna um verdadeiro guerreiro-mago — cada magia pode ser acompanhada de um golpe físico.' },
      ]
    },
    'cavaleiro-batalha': {
      nome: 'Cavaleiro de Batalha',
      cor: '#b83828',
      icone: '🗡️',
      habilidades: [
        { nivel:3, nome:'Proficiências Adicionais', icone:'📚', desc:'Aprenda dois idiomas à sua escolha. O Cavaleiro de Batalha é diplomata tanto quanto guerreiro, comunicando-se com aliados e inimigos em diferentes línguas.' },
        { nivel:3, nome:'Tático de Batalha', icone:'🗺️', desc:'Uma vez por turno como ação bônus: escolha um aliado visível em até 18m. Ele pode usar a reação para fazer um ataque contra um alvo de sua escolha. Isso coordena a equipe para focar o inimigo mais perigoso ao mesmo tempo.' },
        { nivel:7, nome:'Posição Defensiva', icone:'🛡️', desc:'Quando uma criatura que você vê atacar um aliado adjacente a você (até 1,5m), pode usar sua reação para se interpor: o atacante deve redirecionar o ataque contra você em vez do aliado.' },
        { nivel:10, nome:'Comandar Rally', icone:'📣', desc:'Uma vez por turno como ação bônus: dê a um aliado que possa ouvi-lo em 18m PV temporários iguais a 1d4 + modificador de Carisma. Mantém a moral da equipe alta mesmo em combate.' },
        { nivel:15, nome:'Combater Com Cuidado', icone:'🎯', desc:'Você pode fazer ataques intencionalmente não letais. Ao acertar, pode optar que a criatura caia inconsciente (0 PV) em vez de morrer — fundamental para capturas ou quando um inimigo tem informações valiosas.' },
        { nivel:18, nome:'Comandante de Batalha', icone:'👑', desc:'Ao usar Tático de Batalha, o aliado pode se mover até seu deslocamento E atacar, tudo como reação. Os ataques ordenados por você também ignoram penalidade de alcance e a criatura não provoca ataques de oportunidade nesse movimento.' },
      ]
    },
    'cavaleiro-runa': {
      nome: 'Cavaleiro de Runa (Tasha)',
      cor: '#b83828',
      icone: '🔷',
      habilidades: [
        { nivel:3, nome:'Escultor de Runas', icone:'🔷', desc:'Entale runas mágicas em armas, armaduras ou objetos. Começa com 2 runas (aprende mais nos níveis 7, 10, 15) — cada uma concede um benefício passivo e um efeito ativo (1 uso/descanso curto). Exemplos: Runa de Pedra (resistência a empurrão + empurrar em área), Runa do Fogo (+2d6 de fogo + visão térmica), Runa de Gelo (vantagem em Persuasão com gigantes + prisão de gelo).' },
        {
          nivel:3, nome:'Gigante Formidável', icone:'🧊',
          desc:'Ação bônus: cresça até tamanho Grande por 1 minuto (se houver espaço). Enquanto Grande: vantagem em testes de Força e +1d6 de dano em ataques corpo a corpo. Usos = bônus de proficiência por descanso longo.',
          recarga:'longo', formula:'prof', id:'gigante_formidavel',
          nota: (nivel) => `${calcularUsos('prof', nivel, 'guerreiro')} usos · descanso longo`
        },
        { nivel:7, nome:'Runas Adicionais', icone:'📜', desc:'Aprenda 1 runa extra (total: 3). Pode entalhar runas em até 3 objetos simultaneamente. Aprende o idioma dos Gigantes.' },
        { nivel:10, nome:'Grande Estatura', icone:'⬆️', desc:'Enquanto Grande (Gigante Formidável), seus ataques causam +1d8 de dano (em vez de +1d6). Pode usar Gigante Formidável sem gastar uso se estiver com 0 usos, mas não poderá usá-lo novamente até o próximo descanso longo.' },
        { nivel:15, nome:'Runas Adicionais (II)', icone:'📜', desc:'Aprenda 1 nova runa (total: 4). Os efeitos ativos das suas runas agora podem afetar uma criatura adicional à sua escolha — compartilhe o benefício com aliados.' },
        { nivel:18, nome:'Mestre das Runas', icone:'👑', desc:'Invoque os efeitos ativos de cada runa duas vezes por descanso curto (em vez de uma). Enquanto Grande, seu tamanho conta como Enorme para fins de agarrar e empurrar criaturas.' },
      ]
    },
    psi: {
      nome: 'Guerreiro Psi (Tasha)',
      cor: '#b83828',
      icone: '🧠',
      habilidades: [
        {
          nivel:3, nome:'Energia Psíquica', icone:'💜',
          desc:'Você tem 2 Dados de Energia Psíquica (d6, melhora para d8 no nível 5, d10 no nível 11, d12 no nível 17). Alimentam suas habilidades psiônicas. Recupera os dois dados após descanso longo; pode recuperar 1 dado como ação bônus uma vez entre descansos curtos/longos.',
          recarga:'longo', formula:'2', id:'energia_psiquica_guer',
          nota: (nivel) => `2 dados (${nivel >= 17 ? 'd12' : nivel >= 11 ? 'd10' : nivel >= 5 ? 'd8' : 'd6'}) · descanso longo`
        },
        { nivel:3, nome:'Lâmina Psíquica', icone:'⚔️', desc:'Ao atacar com uma arma, gaste 1 Dado de Energia Psíquica: role o dado e adicione ao dano como dano psíquico. Você decide após rolar o ataque — sem risco de desperdiçar o dado num erro.' },
        { nivel:3, nome:'Campo de Força Telecinética', icone:'🛡️', desc:'Reação: quando você ou um aliado em até 9m for atingido por um ataque, gaste 1 Dado de Energia Psíquica e some o resultado à CA do alvo — possivelmente transformando um acerto em erro.' },
        { nivel:7, nome:'Magia Telecinética', icone:'🌀', desc:'Pode lançar Mãos Mágicas e Onda Trovejante sem espaços de magia (1 vez cada por descanso longo). Ao lançar Mãos Mágicas, pode usá-la como ação bônus. Usa Inteligência como atributo de conjuração.' },
        { nivel:10, nome:'Proteção Projetada', icone:'🔮', desc:'Ação bônus: projete um campo de força em uma criatura visível em 9m. Ela ganha PV temporários = resultado de 1 Dado de Energia Psíquica + modificador de Inteligência. Duram até o próximo descanso curto ou longo.' },
        { nivel:15, nome:'Golpe Telecinético', icone:'💥', desc:'Ao acertar um ataque, pode gastar 1 Dado de Energia Psíquica: force o alvo a testar Força (CD = 8 + prof + INT) ou ser empurrado 3m por ponto de falha e ficar caído. Acumula com o dano da Lâmina Psíquica.' },
        { nivel:18, nome:'Impulsão Psíquica', icone:'🌟', desc:'Ao usar Surto de Ação, pode se teletransportar até 9m para um espaço visível. Criaturas no caminho testam Destreza (CD = 8 + prof + INT) ou sofrem 3d8 de dano psíquico e ficam derrubadas.' },
      ]
    },
  },
  paladino: {
    devocao: {
      nome: 'Juramento de Devoção',
      cor: '#e8c030',
      icone: '🕊️',
      habilidades: [
        // Nível 3 — Canalizar Divindade
        { nivel:3, nome:'Arma Sagrada', icone:'✨', desc:'Canalizar Divindade — Ação: imbuir uma arma que você empunha com energia positiva por 1 minuto. Você adiciona seu modificador de Carisma (mínimo +1) às jogadas de ataque com ela, e a arma passa a emitir luz plena em 6m e penumbra por mais 6m. Se não fosse mágica, torna-se mágica durante o efeito. Termina se você largar ou ficar inconsciente.' },
        { nivel:3, nome:'Expulsar o Profano', icone:'☀️', desc:'Canalizar Divindade — Ação: apresente seu símbolo sagrado. Cada corruptor ou morto-vivo que possa ver ou ouvir você em até 9m deve testar Sabedoria contra sua CD de magia ou ser expulso por 1 minuto (ou até sofrer dano). Criaturas expulsas fogem de você e não podem se aproximar a menos de 9m por vontade própria.' },
        // Nível 7
        { nivel:7, nome:'Aura de Devoção', icone:'💛', desc:'Você e criaturas aliadas a até 3m de você não podem ser enfeitiçadas enquanto você estiver consciente. No nível 18, o raio aumenta para 9m.' },
        // Nível 15
        { nivel:15, nome:'Pureza de Espírito', icone:'🌟', desc:'Você está permanentemente sob o efeito da magia Proteção contra o Bem e o Mal, sem precisar de concentração.' },
        // Nível 20
        { nivel:20, nome:'Halo Sagrado', icone:'👑', desc:'Ação: emane uma aura de luz solar por 1 minuto. Luz plena num raio de 9m, penumbra por mais 9m. Criaturas inimigas que comecem seu turno na luz plena sofrem 10 de dano radiante. Você tem vantagem em salvaguardas contra magias de corruptores e mortos-vivos. 1 uso por descanso longo.', recarga:'longo', formula:'1', id:'halo_sagrado', nota: () => '1 uso por descanso longo' },
      ]
    },
    anciaos: {
      nome: 'Juramento dos Anciões',
      cor: '#e8c030',
      icone: '🌿',
      habilidades: [
        // Nível 3 — Canalizar Divindade
        { nivel:3, nome:'Fúria da Natureza', icone:'🌿', desc:'Canalizar Divindade — Ação: faça vinhas espectrais crescerem em torno de uma criatura visível a até 3m. Ela testa Força ou Destreza (escolha dela) contra sua CD ou fica impedida. A criatura repete o teste no fim de cada turno; sucesso encerra o efeito.' },
        { nivel:3, nome:'Expulsar os Infiéis', icone:'🌙', desc:'Canalizar Divindade — Ação: profira palavras antigas que causam dor a fadas e corruptores. Cada fada ou corruptor que possa ver ou ouvir você em até 9m testa Sabedoria contra sua CD ou é expulso por 1 minuto (ou até sofrer dano). Criaturas expulsas fogem e não se aproximam a menos de 9m por vontade própria.' },
        // Nível 7
        { nivel:7, nome:'Aura de Vigilância', icone:'🍃', desc:'A magia ancestral forma uma proteção mística: você e criaturas aliadas em até 3m têm resistência ao dano causado por magias. No nível 18, o raio aumenta para 9m.' },
        // Nível 15
        { nivel:15, nome:'Sentinela Imortal', icone:'🌲', desc:'Quando você for reduzido a 0 PV sem morrer imediatamente, pode escolher ficar com 1 PV no lugar. 1 uso por descanso longo. Além disso, você não sofre penalidades por envelhecimento e não pode envelhecer magicamente.' },
        // Nível 20
        { nivel:20, nome:'Campeão dos Anciões', icone:'👑', desc:'Ação: assuma a forma de uma antiga força da natureza por 1 minuto. Benefícios: recupere 10 PV no início de cada turno; magias de paladino com tempo de conjuração de 1 ação podem ser conjuradas como ação bônus; criaturas inimigas a 3m têm desvantagem em salvaguardas contra suas magias e Canalizar Divindade. 1 uso por descanso longo.', recarga:'longo', formula:'1', id:'campeao_anciaos', nota: () => '1 uso por descanso longo' },
      ]
    },
    vinganca: {
      nome: 'Juramento de Vingança',
      cor: '#e8c030',
      icone: '⚔️',
      habilidades: [
        // Nível 3 — Canalizar Divindade
        { nivel:3, nome:'Abjurar Inimigo', icone:'💀', desc:'Canalizar Divindade — Ação: escolha uma criatura visível em até 18m. Ela testa Sabedoria (corruptores e mortos-vivos têm desvantagem) ou fica amedrontada por 1 minuto (ou até sofrer dano). Enquanto amedrontada, o deslocamento dela cai a 0. Sucesso: deslocamento reduzido à metade por 1 minuto.' },
        { nivel:3, nome:'Voto de Inimizade', icone:'🎯', desc:'Canalizar Divindade — Ação bônus: pronuncie um voto de inimizade contra uma criatura visível a até 3m. Você tem vantagem em todas as jogadas de ataque contra ela por 1 minuto ou até ela cair a 0 PV ou ficar inconsciente.' },
        // Nível 7
        { nivel:7, nome:'Vingador Implacável', icone:'⚡', desc:'Quando você acerta um ataque de oportunidade, pode se mover imediatamente até metade do seu deslocamento como parte da mesma reação, sem provocar ataques de oportunidade.' },
        // Nível 15
        { nivel:15, nome:'Alma de Vingança', icone:'🔥', desc:'Quando uma criatura sob o efeito do seu Voto de Inimizade realizar um ataque, você pode usar sua reação para fazer um ataque corpo-a-corpo com arma contra ela, desde que esteja ao seu alcance.' },
        // Nível 20
        { nivel:20, nome:'Anjo Vingador', icone:'👑', desc:'Ação: transforme-se em anjo vingador por 1 hora. Asas crescem nas suas costas — deslocamento de voo de 18m. Você emana uma aura de ameaça de 9m: a primeira vez que uma criatura inimiga entrar ou começar seu turno na aura, testa Sabedoria ou fica amedrontada de você por 1 minuto (ou até sofrer dano); ataques contra ela têm vantagem. 1 uso por descanso longo.', recarga:'longo', formula:'1', id:'anjo_vingador', nota: () => '1 uso por descanso longo' },
      ]
    },
    gloria: {
      nome: 'Juramento da Glória (Tasha)',
      cor: '#e8c030',
      icone: '🏆',
      habilidades: [
        // Nível 3 — Canalizar Divindade
        { nivel:3, nome:'Atleta Inigualável', icone:'💪', desc:'Canalizar Divindade — Ação bônus: por 10 minutos, você tem vantagem em testes de Força (Atletismo) e Destreza (Acrobacia); pode carregar, empurrar e arrastar o dobro do normal; e a distância dos seus saltos aumenta 3m (esse bônus consome deslocamento normalmente).' },
        { nivel:3, nome:'Golpe Inspirador', icone:'✨', desc:'Canalizar Divindade — Imediatamente após causar dano com Destruição Divina, use ação bônus: distribua PV temporários totais = 2d8 + seu nível para criaturas à sua escolha em até 9m (pode incluir você mesmo).' },
        // Nível 7
        { nivel:7, nome:'Aura de Vivacidade', icone:'⚡', desc:'Seu deslocamento aumenta permanentemente 3m. Aliados que comecem o turno a até 1,5m de você também ganham +3m de deslocamento até o fim do turno deles. No nível 18, o raio da aura aumenta para 3m.' },
        // Nível 15
        { nivel:15, nome:'Defesa Gloriosa', icone:'🛡️', desc:'Reação: quando você ou uma criatura visível a até 3m for acertado por um ataque, adicione seu modificador de Carisma (mínimo +1) à CA do alvo — o ataque pode errar. Se errar, você pode atacar o atacante com arma corpo-a-corpo como parte da mesma reação. Usos = modificador de Carisma (mínimo 1) por descanso longo.', recarga:'longo', formula:'1+mod_CAR', id:'defesa_gloriosa', nota: (nivel) => `${calcularUsos('1+mod_CAR', nivel, 'paladino')} usos por descanso longo` },
        // Nível 20
        { nivel:20, nome:'Lenda Viva', icone:'👑', desc:'Ação bônus: fortaleça-se através das lendas dos seus feitos por 1 minuto. Vantagem em todos os testes de Carisma; uma vez por turno, se errar um ataque com arma, pode defini-lo como acerto; se falhar em uma salvaguarda, use reação para rolar novamente (fica com o novo resultado). Pode usar novamente gastando um espaço de magia de 5° ou após descanso longo.', recarga:'longo', formula:'1', id:'lenda_viva', nota: () => '1 uso por descanso longo' },
      ]
    },
    vigilancia: {
      nome: 'Juramento da Vigilância (Tasha)',
      cor: '#e8c030',
      icone: '🔮',
      habilidades: [
        // Nível 3 — Canalizar Divindade
        { nivel:3, nome:'Vontade do Vigilante', icone:'🧠', desc:'Canalizar Divindade — Ação: escolha até um número de criaturas visíveis em até 9m igual ao seu modificador de Carisma (mínimo 1). Por 1 minuto, você e as criaturas escolhidas têm vantagem em salvaguardas de Inteligência, Sabedoria e Carisma.' },
        { nivel:3, nome:'Expulsar Extraplanares', icone:'🌌', desc:'Canalizar Divindade — Ação: exiba seu símbolo sagrado. Cada aberração, celestial, elemental, fada ou corruptor visível em até 9m testa Sabedoria ou é expulso por 1 minuto (ou até sofrer dano). Criaturas expulsas fogem e não se aproximam a menos de 9m por vontade própria.' },
        // Nível 7
        { nivel:7, nome:'Aura do Sentinela', icone:'⚡', desc:'Você emite uma aura de prontidão. Quando você ou qualquer aliado à sua escolha em até 3m jogar iniciativa, todos vocês ganham bônus na iniciativa igual ao seu bônus de proficiência. No nível 18, o raio aumenta para 9m.' },
        // Nível 15
        { nivel:15, nome:'Repreensão do Vigilante', icone:'⚔️', desc:'Quando você ou uma criatura visível a até 9m de você for alvo de uma jogada de ataque que erre, o atacante sofre dano psíquico = 2d8 + seu modificador de Sabedoria.' },
        // Nível 20
        { nivel:20, nome:'Baluarte Mortal', icone:'👑', desc:'Ação bônus: manifeste poder divino por 1 minuto. Você ganha visão verdadeira de 36m; vantagem em ataques contra aberrações, celestiais, elementais, fadas e corruptores. Ao acertar uma dessas criaturas, ela testa Carisma contra sua CD de magia: falha = é banida para o seu plano de existência nativo (se não estiver nele). Sucesso = imune a esse banimento por 24h. 1 uso por descanso longo.', recarga:'longo', formula:'1', id:'baluarte_mortal', nota: () => '1 uso por descanso longo' },
      ]
    },
  },
  bruxo: {
    arquifada: {
      nome: 'A Arquifada',
      cor: '#7040c8',
      icone: '🌸',
      habilidades: [
        {
          nivel:1, nome:'Presença Feérica', icone:'✨',
          desc:'Ação: todas as criaturas num cubo de 3m centrado em você fazem um teste de resistência de Sabedoria contra sua CD de magia. As que falharem ficam enfeitiçadas ou amedrontadas por você (à sua escolha) até o início do seu próximo turno.',
          recarga:'curto', formula:'1', id:'presenca_feérica',
          nota: () => '1 uso · descanso curto ou longo'
        },
        {
          nivel:6, nome:'Névoa de Fuga', icone:'🌫️',
          desc:'Reação ao sofrer dano: fique invisível e teletransporte-se até 18m para um espaço desocupado que possa ver. Você permanece invisível até o início do seu próximo turno ou até realizar um ataque ou conjurar uma magia.',
          recarga:'curto', formula:'1', id:'névoa_fuga',
          nota: () => '1 uso · descanso curto ou longo'
        },
        { nivel:10, nome:'Defesa Sedutora', icone:'🛡️', desc:'Você não pode ser enfeitiçado. Quando uma criatura tenta enfeitiçá-lo, use sua reação para tentar reverter o efeito: a criatura testa Sabedoria contra sua CD ou fica enfeitiçada por você por 1 minuto ou até sofrer dano.' },
        {
          nivel:14, nome:'Delírio Sombrio', icone:'🌑',
          desc:'Ação: escolha uma criatura visível em até 18m — ela testa Sabedoria contra sua CD ou fica enfeitiçada ou amedrontada (à sua escolha) por 1 minuto com concentração. A criatura só enxerga você e a si mesma dentro da ilusão. O efeito termina se ela sofrer dano.',
          recarga:'curto', formula:'1', id:'delírio_sombrio',
          nota: () => '1 uso · descanso curto ou longo'
        },
      ]
    },
    corruptor: {
      nome: 'O Corruptor',
      cor: '#7040c8',
      icone: '🔥',
      habilidades: [
        { nivel:1, nome:'Bênção do Obscuro', icone:'💀', desc:'Sempre que você reduzir uma criatura hostil a 0 PV, você recupera PV temporários = seu modificador de Carisma + seu nível de bruxo (mínimo 1). Passivo permanente.' },
        {
          nivel:6, nome:'Sorte do Próprio Obscuro', icone:'🎲',
          desc:'Quando fizer um teste de habilidade ou salvaguarda, adicione 1d10 ao resultado. Pode ser usado depois de ver a jogada inicial, mas antes do efeito ocorrer.',
          recarga:'curto', formula:'1', id:'sorte_obscuro',
          nota: () => '1 uso · descanso curto ou longo'
        },
        { nivel:10, nome:'Resistência Demoníaca', icone:'🛡️', desc:'Ao terminar um descanso curto ou longo, escolha um tipo de dano. Você adquire resistência a esse tipo até escolher outro. Dano de armas mágicas ou de prata ignora essa resistência.' },
        {
          nivel:14, nome:'Lançar no Inferno', icone:'☠️',
          desc:'Ao atingir uma criatura com um ataque, teletransporte-a instantaneamente para os planos inferiores. Ela desaparece e retorna ao final do seu turno. Se não for um corruptor, sofre 10d10 de dano psíquico ao retornar.',
          recarga:'curto', formula:'1', id:'lançar_inferno',
          nota: () => '1 uso · descanso curto ou longo'
        },
      ]
    },
    infernal: {
      nome: 'O Corruptor (O Infernal)',
      cor: '#7040c8',
      icone: '🔥',
      habilidades: [
        { nivel:1, nome:'Bênção do Obscuro', icone:'💀', desc:'Sempre que você reduzir uma criatura hostil a 0 PV, você recupera PV temporários = seu modificador de Carisma + seu nível de bruxo (mínimo 1). Passivo permanente.' },
        {
          nivel:6, nome:'Sorte do Próprio Obscuro', icone:'🎲',
          desc:'Quando fizer um teste de habilidade ou salvaguarda, adicione 1d10 ao resultado. Pode ser usado depois de ver a jogada inicial, mas antes do efeito ocorrer.',
          recarga:'curto', formula:'1', id:'sorte_obscuro_inf',
          nota: () => '1 uso · descanso curto ou longo'
        },
        { nivel:10, nome:'Resistência Demoníaca', icone:'🛡️', desc:'Ao terminar um descanso curto ou longo, escolha um tipo de dano. Você adquire resistência a esse tipo até escolher outro. Dano de armas mágicas ou de prata ignora essa resistência.' },
        {
          nivel:14, nome:'Lançar no Inferno', icone:'☠️',
          desc:'Ao atingir uma criatura com um ataque, teletransporte-a instantaneamente para os planos inferiores. Ela desaparece e retorna ao final do seu turno. Se não for um corruptor, sofre 10d10 de dano psíquico ao retornar.',
          recarga:'curto', formula:'1', id:'lançar_inferno_inf',
          nota: () => '1 uso · descanso curto ou longo'
        },
      ]
    },
    'grande-antigo': {
      nome: 'O Grande Antigo',
      cor: '#7040c8',
      icone: '👁️',
      habilidades: [
        { nivel:1, nome:'Despertar a Mente', icone:'🧠', desc:'Você pode se comunicar telepaticamente com qualquer criatura visível em até 9m. Não precisa compartilhar idioma, mas a criatura precisa entender ao menos um. Passivo permanente.' },
        { nivel:6, nome:'Proteção Entrópica', icone:'🌀', desc:'Reação: quando uma criatura atacar você, imponha desvantagem nessa jogada. Se o ataque errar, seu próximo ataque contra essa criatura tem vantagem (antes do fim do próximo turno).', recarga:'curto', formula:'1', id:'proteção_entropica', nota: () => '1 uso · descanso curto ou longo' },
        { nivel:10, nome:'Escudo de Pensamentos', icone:'🔮', desc:'Seus pensamentos não podem ser lidos por telepatia ou outros meios (a menos que você permita). Você adquire resistência a dano psíquico e, toda vez que uma criatura causar dano psíquico a você, ela sofre a mesma quantidade de dano.' },
        { nivel:14, nome:'Criar Lacaio', icone:'🕷️', desc:'Ação: toque um humanoide incapacitado — ele fica enfeitiçado por você até que remover maldição seja conjurada sobre ele, a condição seja removida, ou você use essa característica novamente. Você pode se comunicar telepaticamente com o lacaio enquanto estiver no mesmo plano.' },
      ]
    },
    insondavel: {
      nome: 'O Insondável (Tasha)',
      cor: '#7040c8',
      icone: '🐙',
      habilidades: [
        {
          nivel:1, nome:'Tentáculo das Profundezas', icone:'🦑',
          desc:'Ação bônus: crie um tentáculo espectral de 3m em um ponto visível em até 18m. Ele dura 1 minuto. Você pode fazer um ataque de magia corpo a corpo com ele: acerto causa 1d8 de dano gélido e reduz o deslocamento do alvo em 3m até seu próximo turno. No 10° nível, o dano aumenta para 2d8. Com ação bônus, pode mover o tentáculo até 9m e repetir o ataque.',
          recarga:'longo', formula:'prof', id:'tentáculo_profundezas',
          nota: (nivel) => `${getProfBonus(nivel)} usos · descanso longo`
        },
        { nivel:1, nome:'Dom do Mar', icone:'🌊', desc:'Você adquire deslocamento de natação de 12m e pode respirar debaixo d\'água. Passivo permanente.' },
        { nivel:6, nome:'Alma Oceânica', icone:'💧', desc:'Você adquire resistência a dano gélido. Enquanto completamente submerso, qualquer criatura também submersa pode entender sua fala e você entende a delas.' },
        { nivel:6, nome:'Espiral Guardiã', icone:'🌀', desc:'Reação: quando você ou uma criatura em até 3m do tentáculo sofrer dano, reduza esse dano em 1d8 (2d8 a partir do 10° nível).' },
        { nivel:10, nome:'Tentáculos Enredantes', icone:'🐚', desc:'Você aprende Tentáculos Negros de Evard como magia de bruxo (não ocupa espaço nas magias conhecidas). Pode conjurá-la 1×/descanso longo sem espaço de magia. Ao conjurá-la, recebe PV temporários = seu nível de bruxo, e ela não pode ser quebrada por dano.' },
        { nivel:14, nome:'Mergulho no Insondável', icone:'🌌', desc:'Ação: teletransporte você e até 5 criaturas voluntárias visíveis em até 9m para um corpo d\'água que você viu (do tamanho de uma lagoa ou maior), a até 1,5 km. Cada um aparece a até 9m do ponto de chegada.', recarga:'curto', formula:'1', id:'mergulho_insondável', nota: () => '1 uso · descanso curto ou longo' },
      ]
    },
    genio: {
      nome: 'O Gênio (Tasha)',
      cor: '#7040c8',
      icone: '🪔',
      habilidades: [
        { nivel:1, nome:'Receptáculo do Gênio', icone:'🔮', desc:'Seu patrono lhe dá um objeto mágico Minúsculo como foco de conjuração. Ele tem duas funções: (1) Ira do Gênio — 1×/turno ao acertar um ataque, cause dano extra = seu bônus de proficiência (contundente para Dao, trovejante para Djinni, ígneo para Ifriti ou gélido para Marid). (2) Descanso Engarrafado — ação para entrar no receptáculo e descansar num espaço extradimensional por horas = 2× seu bônus de proficiência. 1 uso por descanso longo.' },
        { nivel:6, nome:'Dom Elemental', icone:'⚡', desc:'Você adquire resistência ao tipo de dano do seu patrono (contundente, trovejante, ígneo ou gélido). Além disso, ação bônus: voo de 9m com planar por 10 minutos. Usos = seu bônus de proficiência por descanso longo.', recarga:'longo', formula:'prof', id:'dom_elemental', nota: (nivel) => `${getProfBonus(nivel)} usos de voo · descanso longo` },
        { nivel:10, nome:'Receptáculo Protetor', icone:'🏺', desc:'Ao usar o Descanso Engarrafado, você pode levar até 5 criaturas voluntárias visíveis em até 9m para dentro do receptáculo. Qualquer criatura que permaneça no receptáculo por 10 minutos recebe os benefícios de um descanso curto (e pode adicionar o bônus de proficiência ao recuperar PV com Dados de Vida).' },
        { nivel:14, nome:'Desejo Restrito', icone:'✨', desc:'Ação: rogue ao seu patrono o efeito de uma magia de 6° círculo ou menos com tempo de conjuração de 1 ação (qualquer lista de classe). A magia simplesmente ocorre, sem custos de componentes. Após usar, não pode repetir até terminar 1d4 descansos longos.' },
      ]
    },
  },
  bardo: {
    conhecimento: {
      nome: 'Colégio do Conhecimento',
      cor: '#a855c8',
      icone: '📚',
      habilidades: [
        { nivel:3, nome:'Proficiência Adicional', icone:'🎓', desc:'Você ganha proficiência em 3 perícias quaisquer à sua escolha. O bardo do conhecimento sabe um pouco de tudo — essa é a sua maior arma.' },
        { nivel:3, nome:'Palavras de Interrupção', icone:'🗣️', desc:'Quando uma criatura em até 18m fizer jogada de ataque, teste de habilidade ou de dano, use sua reação e gaste 1 dado de Inspiração: role o dado e subtraia do resultado da criatura. Ela precisa conseguir ouvi-lo.' },
        { nivel:6, nome:'Segredos Mágicos Adicionais', icone:'📖', desc:'Aprenda 2 magias de QUALQUER classe (não só de bardo), desde que você tenha espaço para conjurá-las. Essas magias não ocupam suas vagas normais de magias conhecidas.' },
        { nivel:14, nome:'Perícia Inigualável', icone:'🌟', desc:'Quando fizer um teste de habilidade, gaste 1 uso de Inspiração de Bardo: role o dado e some ao resultado. Você pode decidir fazer isso depois de rolar o d20, mas antes de o Mestre revelar o resultado.' },
      ]
    },
    valor: {
      nome: 'Colégio da Bravura',
      cor: '#a855c8',
      icone: '⚔️',
      habilidades: [
        { nivel:3, nome:'Proficiência Adicional', icone:'🛡️', desc:'Você ganha proficiência com armaduras médias, escudos e armas marciais. O bardo guerreiro pode entrar na linha de frente do combate.' },
        { nivel:3, nome:'Inspiração em Combate', icone:'🎶', desc:'Uma criatura com seu dado de Inspiração pode usá-lo de duas novas formas: (1) Somar ao dano de um ataque que acabou de fazer. (2) Como reação, somar à sua CA contra um ataque depois de ver a rolagem do atacante.' },
        { nivel:6, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Você pode atacar duas vezes (em vez de uma) ao usar a ação Atacar.' },
        { nivel:14, nome:'Magia de Batalha', icone:'✨', desc:'Quando você usar sua ação para conjurar uma magia de bardo, pode realizar um ataque com arma como ação bônus. Você combina espada e magia no mesmo turno.' },
      ]
    },
    criacao: {
      nome: 'Colégio da Criação (Tasha)',
      cor: '#a855c8',
      icone: '🎨',
      habilidades: [
        { nivel:3, nome:'Partícula de Potencial', icone:'✨', desc:'Ao conceder Inspiração de Bardo, uma partícula mágica orbita a criatura. Quando ela usa o dado: em teste de habilidade pode rolar o dado duas vezes e escolher; em ataque causa dano trovejante em 1,5m do alvo (save CON vs. sua CD); em salvaguarda ganha PV temporários = resultado + mod. CAR.' },
        { nivel:3, nome:'Execução da Criação', icone:'🔨', desc:'Ação: crie um item não-mágico Médio ou menor em espaço desocupado em até 3m. Valor máximo = 20 × nível de bardo po. Dura horas = bônus de proficiência. 1 uso/descanso longo (ou gaste espaço de 2° nível). Nível 6: itens Grandes. Nível 14: itens Enormes, sem limite de valor.' },
        { nivel:6, nome:'Espetáculo Animado', icone:'🪆', desc:'Ação: anime um item não-mágico Grande ou menor visível em até 9m. Usa bloco do Item Dançante (PV = 10 + 5×nível, CA 16). Age no seu turno; use ação bônus para ordená-lo. Dura 1 hora ou até 0 PV. 1 uso/descanso longo (ou gaste espaço de 3° nível).' },
        { nivel:14, nome:'Crescendo Criativo', icone:'🌟', desc:'Com Execução da Criação, crie múltiplos itens — número = mod. CAR (mínimo 2). Apenas 1 pode ter o tamanho máximo; os demais devem ser Pequenos ou Miúdos. Sem limite de valor em ouro.' },
      ]
    },
    eloquencia: {
      nome: 'Colégio da Eloquência (Tasha)',
      cor: '#a855c8',
      icone: '🗣️',
      habilidades: [
        { nivel:3, nome:'Língua Prateada', icone:'🥈', desc:'Nos testes de Carisma (Persuasão) e Carisma (Enganação), trate qualquer resultado de 9 ou menos no d20 como se fosse 10. Você nunca falha feio.' },
        { nivel:3, nome:'Palavras Desconcertantes', icone:'😵', desc:'Ação bônus: gaste 1 uso de Inspiração e escolha uma criatura em até 18m. Role o dado: ela subtrai esse valor na próxima salvaguarda que fizer antes do início do seu próximo turno.' },
        { nivel:6, nome:'Inspiração Infalível', icone:'💫', desc:'Quando uma criatura usa seu dado de Inspiração e falha no teste, ela pode guardar o dado — ele não é perdido.' },
        { nivel:6, nome:'Língua Universal', icone:'🌐', desc:'Ação: criaturas em até 18m (quantidade = mod. CAR, mínimo 1) entendem magicamente tudo o que você falar por 1 hora. 1 uso/descanso longo (ou gaste qualquer espaço de magia).' },
        { nivel:14, nome:'Inspiração Contagiante', icone:'💜', desc:'Reação: quando uma criatura usar seu dado de Inspiração e tiver sucesso, você pode dar Inspiração a uma criatura diferente sem gastar uso. Usos = mod. CAR (mínimo 1) por descanso longo.' },
      ]
    },
  },
  artifice: {
    alquimista: {
      nome: 'Alquimista',
      nome_en: 'Alchemist',
      cor: '#c87830',
      icone: '⚗️',
      habilidades: [
        { nivel:3, nome:'Proficiência: Suprimentos de Alquimista', nome_en:"Tool Proficiency: Alchemist's Supplies", icone:'🧪',
          desc:'Você ganha proficiência com suprimentos de alquimista (ou outra ferramenta de artesão, se já tiver essa proficiência). São sua ferramenta-chave — permitem usar as habilidades de alquimista.',
          desc_en:"You gain proficiency with alchemist's supplies (or another artisan's tool of your choice if you already have this proficiency). These are your key tool — they unlock your alchemist abilities." },
        { nivel:3, nome:'Magias de Alquimista', nome_en:'Alchemist Spells', icone:'📜',
          desc:'Certas magias ficam sempre preparadas para você (não contam no seu limite): nível 3: Palavra Curativa + Raio Nauseante · nível 5: Esfera Flamejante + Flecha Ácida de Melf · nível 9: Forma Gasosa + Palavra Curativa em Massa · nível 13: Malogro + Proteção Contra a Morte · nível 17: Névoa Mortal + Reviver os Mortos.',
          desc_en:"Certain spells are always prepared for you (they don't count against your limit): level 3: Healing Word + Ray of Sickness · level 5: Flaming Sphere + Melf's Acid Arrow · level 9: Gaseous Form + Mass Healing Word · level 13: Blight + Death Ward · level 17: Cloudkill + Raise Dead." },
        { nivel:3, nome:'Elixir Experimental', nome_en:'Experimental Elixir', icone:'🍶',
          desc:'Ao terminar um descanso longo, crie automaticamente elixires mágicos (1 no nível 3, 2 no nível 6, 3 no nível 15). Role 1d6 por elixir: 1=Cura (2d4+mod.INT PV), 2=Celeridade (+3m por 1h), 3=Resiliência (+1 CA por 10min), 4=Ousadia (+1d4 em ataques e saves por 1min), 5=Voo (3m por 10min), 6=Transformação (Alterar-se por 10min). Pode criar elixires extras gastando 1 espaço de magia de 1° círculo cada. Duram até o próximo descanso longo.',
          desc_en:'When you finish a long rest, automatically create magical elixirs (1 at level 3, 2 at level 6, 3 at level 15). Roll 1d6 per elixir: 1=Healing (2d4+INT mod HP), 2=Swiftness (+10 ft for 1 hr), 3=Resilience (+1 AC for 10 min), 4=Boldness (+1d4 to attacks and saves for 1 min), 5=Flight (10 ft for 10 min), 6=Transformation (Alter Self for 10 min). You can brew additional elixirs by spending one 1st-level spell slot each. Elixirs last until your next long rest.',
          recarga:'longo', formula:'elixir', id:'elixir_experimental',
          nota: (nivel) => `${calcularUsos('elixir', nivel, 'artifice')} elixir(es) automáticos · descanso longo` },
        { nivel:5, nome:'Sábio Alquímico', nome_en:'Alchemical Savant', icone:'✨',
          desc:'Ao conjurar uma magia usando suprimentos de alquimista como foco, adicione seu modificador de Inteligência (mínimo +1) a UMA rolagem que restaure pontos de vida OU que cause dano ácido, ígneo, necrótico ou venenoso.',
          desc_en:"When you cast a spell using alchemist's supplies as your spellcasting focus, add your Intelligence modifier (minimum +1) to ONE roll that restores hit points OR that deals acid, fire, necrotic, or poison damage." },
        { nivel:9, nome:'Reagentes Restauradores', nome_en:'Restorative Reagents', icone:'💊',
          desc:'Toda vez que uma criatura beber um de seus elixires, ela ganha PV temporários iguais a 2d6 + modificador de Inteligência. Além disso, você pode conjurar Restauração Menor sem gastar espaço de magia, usando suprimentos como foco. Usos = mod. INT (mín. 1) por descanso longo.',
          desc_en:'Whenever a creature drinks one of your elixirs, it gains temporary hit points equal to 2d6 + your Intelligence modifier. In addition, you can cast Lesser Restoration without expending a spell slot, using your supplies as a focus. Uses = INT mod (minimum 1) per long rest.',
          recarga:'longo', formula:'lampejo', id:'reagentes_restauradores',
          nota: (nivel) => `${calcularUsos('lampejo', nivel, 'artifice')} usos de Restauração Menor · descanso longo` },
        { nivel:15, nome:'Maestria Química', nome_en:'Chemical Mastery', icone:'🛡️',
          desc:'Você ganhou resistência a dano ácido e venenoso, e imunidade à condição Envenenado. Pode conjurar Restauração Maior e Cura Completa sem espaço de magia, sem preparação e sem componentes materiais (usando suprimentos como foco). Cada uma pode ser usada 1x/descanso longo.',
          desc_en:'You gain resistance to acid and poison damage and immunity to the Poisoned condition. You can cast Greater Restoration and Heal without expending a spell slot, without preparing them, and without material components (using your supplies as a focus). Each can be used once per long rest.',
          recarga:'longo', formula:'2', id:'maestria_quimica',
          nota: () => '1 uso de Restauração Maior + 1 de Cura Completa · descanso longo' },
      ]
    },
    armeiro: {
      nome: 'Armeiro',
      nome_en: 'Armorer',
      cor: '#c87830',
      icone: '🛡️',
      habilidades: [
        { nivel:3, nome:'Proficiências Extras', nome_en:'Extra Proficiencies', icone:'🔨',
          desc:'Você ganha proficiência com armaduras pesadas e com ferramentas de ferreiro (ou outra ferramenta de artesão, se já tiver essa proficiência).',
          desc_en:"You gain proficiency with heavy armor and with smith's tools (or another artisan's tool of your choice if you already have this proficiency)." },
        { nivel:3, nome:'Magias de Armeiro', nome_en:'Armorer Spells', icone:'📜',
          desc:'Magias sempre preparadas (não contam no limite): nível 3: Mísseis Mágicos + Onda Trovejante · nível 5: Reflexos + Despedaçar · nível 9: Padrão Hipnótico + Relâmpago · nível 13: Escudo Ardente + Invisibilidade Maior · nível 17: Criar Passagem + Muralha de Energia.',
          desc_en:'Always prepared spells (do not count against your limit): level 3: Magic Missile + Thunderwave · level 5: Mirror Image + Shatter · level 9: Hypnotic Pattern + Lightning Bolt · level 13: Fire Shield + Greater Invisibility · level 17: Passwall + Wall of Force.' },
        { nivel:3, nome:'Armadura Arcana', nome_en:'Arcane Armor', icone:'⚙️',
          desc:'Com uma ação (ferramentas de ferreiro nas mãos), transforme uma armadura que você está vestindo em sua Armadura Arcana. Benefícios enquanto usa: sem requisito de Força; não pode ser removida contra sua vontade; use como foco de conjuração; substitui membros ausentes funcionalmente. Pode vesti-la ou tirá-la como uma ação. Dura até você vestir outra armadura ou morrer.',
          desc_en:"With an action (smith's tools in hand), transform a suit of armor you are wearing into your Arcane Armor. Benefits while wearing it: no Strength requirement; it can't be removed against your will; use it as a spellcasting focus; it replaces missing limbs functionally. You can don or doff it as an action. It lasts until you don another suit of armor or you die." },
        { nivel:3, nome:'Modelo de Armadura', nome_en:'Armor Model', icone:'⚔️',
          desc:'Escolha o modelo ao criar a Armadura Arcana (pode trocar em descanso curto ou longo com ferramentas). Guardião: Manoplas Trovejantes (1d8 trovejante, criaturas atingidas têm desvantagem em ataques contra outros) + Campo Defensivo (ação bônus: PV temp = nível, usos = bônus de prof / descanso longo). Infiltrador: Lança-Relâmpagos (ataque à distância 27/90m, 1d6 elétrico + 1d6 extra 1x/turno ao acertar) + Passos Energizados (+1,5m deslocamento, vantagem em Furtividade).',
          desc_en:"Choose the model when you create the Arcane Armor (can switch on a short or long rest with tools). Guardian: Thunder Gauntlets (1d8 thunder; creatures hit have disadvantage on attacks against others) + Defensive Field (bonus action: temp HP = your level, uses = prof bonus / long rest). Infiltrator: Lightning Launcher (ranged attack 90/300 ft, 1d6 lightning + 1d6 extra once per turn on hit) + Powered Steps (+5 ft speed, advantage on Stealth)." },
        { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️',
          desc:'Você pode atacar duas vezes, em vez de uma, sempre que usar a ação Atacar.',
          desc_en:'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
        { nivel:9, nome:'Modificações da Armadura', nome_en:'Armor Modifications', icone:'🔧',
          desc:'Sua Armadura Arcana agora conta como 4 itens separados para fins de infusões: armadura (peitoral), botas, elmo e a arma especial. Cada peça pode ter uma infusão diferente. Seu máximo de itens infundidos simultaneamente aumenta em 2, mas esses extras devem ser partes da Armadura Arcana.',
          desc_en:'Your Arcane Armor now counts as 4 separate items for the purposes of infusions: the armor (chest), boots, helmet, and the special weapon. Each piece can hold a different infusion. Your maximum number of simultaneously infused items increases by 2, but those extras must be parts of your Arcane Armor.' },
        { nivel:15, nome:'Armadura Perfeita', nome_en:'Perfected Armor', icone:'👑',
          desc:'Guardião: reação (usos = bônus de prof / descanso longo) — force criatura Enorme ou menor em 9m a salvar Força vs. CD de magia; se falhar, ela é puxada até 9m em direção a você e, se chegar adjacente, você pode atacá-la. Infiltrador: qualquer criatura danificada pelo Lança-Relâmpagos cintila até o próximo turno — desvantagem em ataques contra você e +1d6 elétrico para o próximo acerto contra ela.',
          desc_en:'Guardian: reaction (uses = prof bonus / long rest) — force a Huge or smaller creature within 30 ft to make a Strength save vs. your spell save DC; on a failure, it is pulled up to 30 ft toward you and, if it ends up adjacent, you can make an attack against it. Infiltrator: any creature damaged by the Lightning Launcher sparkles until the start of your next turn — it has disadvantage on attacks against you and the next hit against it deals +1d6 lightning damage.',
          recarga:'longo', formula:'campo_def', id:'armadura_perfeita',
          nota: (nivel) => `${calcularUsos('campo_def', nivel, 'artifice')} usos (Guardião) · descanso longo` },
      ]
    },
    atirador: {
      nome: 'Atirador',
      nome_en: 'Artillerist',
      cor: '#c87830',
      icone: '💥',
      habilidades: [
        { nivel:3, nome:'Proficiência: Ferramentas de Carpinteiro', nome_en:"Tool Proficiency: Woodcarver's Tools", icone:'🪚',
          desc:'Você ganha proficiência com ferramentas de carpinteiro (ou outra ferramenta de artesão, se já tiver). São necessárias para criar e personalizar seu Canhão Místico.',
          desc_en:"You gain proficiency with woodcarver's tools (or another artisan's tool of your choice if you already have this proficiency). They are required to build and customize your Eldritch Cannon." },
        { nivel:3, nome:'Magias de Atirador', nome_en:'Artillerist Spells', icone:'📜',
          desc:'Magias sempre preparadas (não contam no limite): nível 3: Escudo + Onda Trovejante · nível 5: Raio Ardente + Despedaçar · nível 9: Bola de Fogo + Muralha de Vento · nível 13: Tempestade Glacial + Muralha de Fogo · nível 17: Cone de Frio + Muralha de Energia.',
          desc_en:'Always prepared spells (do not count against your limit): level 3: Shield + Thunderwave · level 5: Scorching Ray + Shatter · level 9: Fireball + Wind Wall · level 13: Ice Storm + Wall of Fire · level 17: Cone of Cold + Wall of Force.' },
        { nivel:3, nome:'Canhão Místico', nome_en:'Eldritch Cannon', icone:'🔫',
          desc:'Ação (ferramentas nas mãos): crie um canhão Pequeno ou Minúsculo (CA 18, PV = 5×nível, imune a veneno e dano psíquico) em superfície horizontal a 1,5m. Ação bônus (se em 18m): ative-o e mova até 4,5m. Escolha o tipo ao criar — Lança-Chamas: cone 4,5m, save DES vs CD de magia, 2d8 fogo; Força de Balista: ataque à distância 36m, 2d8 força + empurra 1,5m; Protetor: 3m de raio, 1d8+mod.INT PV temporários. Dura 1h ou até PV zerado. 1x/descanso longo (ou gaste espaço de magia para criar outro).',
          desc_en:'Action (tools in hand): create a Small or Tiny cannon (AC 18, HP = 5×level, immune to poison and psychic damage) on a horizontal surface within 5 ft. Bonus action (if within 60 ft): activate it and move it up to 15 ft. Choose the type when you create it — Flamethrower: 15-ft cone, DEX save vs. spell save DC, 2d8 fire; Force Ballista: ranged attack 120 ft, 2d8 force + push 5 ft; Protector: 10-ft radius, 1d8+INT mod temporary HP. Lasts 1 hr or until it reaches 0 HP. Once per long rest (or spend a spell slot to create another).',
          recarga:'longo', formula:'1', id:'canhao_mistico',
          nota: () => '1 canhão por vez · descanso longo ou espaço de magia' },
        { nivel:5, nome:'Arma de Fogo Arcana', nome_en:'Arcane Firearm', icone:'🪄',
          desc:'Ao terminar um descanso longo, use ferramentas de carpinteiro para esculpir símbolos em uma varinha, cajado ou vara — transformando-a na sua Arma de Fogo Arcana. Use como foco para magias de artífice. Ao lançar uma magia através dela, role 1d8 e adicione esse valor a UMA rolagem de dano da magia. Os símbolos duram indefinidamente.',
          desc_en:"When you finish a long rest, use woodcarver's tools to carve special sigils into a wand, staff, or rod — transforming it into your Arcane Firearm. Use it as a focus for artificer spells. When you cast a spell through it, roll 1d8 and add the result to ONE damage roll of the spell. The sigils last indefinitely." },
        { nivel:9, nome:'Canhão Explosivo', nome_en:'Explosive Cannon', icone:'💣',
          desc:'Todos os canhões que você criar causam +1d8 em todas as rolagens de dano. Além disso, como ação você pode detonar um canhão em 18m — criaturas em 6m dele fazem save DES vs. CD de magia (3d8 dano de força em falha, metade em sucesso) e o canhão é destruído. A partir deste nível você pode ter dois canhões simultaneamente.',
          desc_en:'Every cannon you create deals +1d8 on all its damage rolls. In addition, as an action you can detonate a cannon within 60 ft — creatures within 20 ft must make a DEX save vs. your spell save DC (3d8 force damage on a failure, half on a success) and the cannon is destroyed. Starting at this level you can have two cannons active simultaneously.' },
        { nivel:15, nome:'Posição Fortificada', nome_en:'Fortified Position', icone:'🏰',
          desc:'Você e seus aliados têm meia cobertura enquanto estiverem a até 3m de qualquer Canhão Místico seu, graças a um campo mágico que ele emite. Você pode agora criar dois canhões com a mesma ação e ativá-los juntos com a mesma ação bônus.',
          desc_en:'You and your allies have half cover while within 10 feet of any of your Eldritch Cannons, thanks to a magical ward they emit. You can now create two cannons with the same action and activate both of them with the same bonus action.' },
      ]
    },
    ferreiro: {
      nome: 'Ferreiro de Batalha',
      nome_en: 'Battle Smith',
      cor: '#c87830',
      icone: '🤖',
      habilidades: [
        { nivel:3, nome:'Proficiências Extras', nome_en:'Extra Proficiencies', icone:'🔨',
          desc:'Você ganha proficiência com ferramentas de ferreiro (ou outra, se já tiver) e com todas as armas marciais. Além disso, ao atacar com qualquer arma mágica, você pode usar o modificador de Inteligência em vez de Força ou Destreza para as jogadas de ataque e de dano.',
          desc_en:"You gain proficiency with smith's tools (or another tool if you already have this proficiency) and with all martial weapons. In addition, when you attack with any magic weapon, you can use your Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls." },
        { nivel:3, nome:'Magias de Ferreiro de Batalha', nome_en:'Battle Smith Spells', icone:'📜',
          desc:'Magias sempre preparadas (não contam no limite): nível 3: Escudo + Heroísmo · nível 5: Marca da Punição + Vínculo de Proteção · nível 9: Aura de Vitalidade + Invocar Barragem · nível 13: Aura de Pureza + Escudo de Fogo · nível 17: Banimento Destruidor + Curar Ferimentos em Massa.',
          desc_en:'Always prepared spells (do not count against your limit): level 3: Shield + Heroism · level 5: Branding Smite + Warding Bond · level 9: Aura of Vitality + Conjure Barrage · level 13: Aura of Purity + Fire Shield · level 17: Banishing Smite + Mass Cure Wounds.' },
        { nivel:3, nome:'Defensor de Aço', nome_en:'Steel Defender', icone:'🤖',
          desc:'Você cria um construto companheiro: Defensor de Aço (CA 15, PV = 2+mod.INT+(5×nível), usa seu bônus de prof em ataques e perícias). Age imediatamente após você. Ação bônus: comande-o a atacar (Laceração de Energia: 1d8+BP dano de energia), Reparar (restaura 2d8+BP PV em si mesmo ou construto/objeto a 1,5m, 3x/dia) ou Defletir Ataque (reação: impõe desvantagem em ataque de criatura a 1,5m contra outra criatura). Se morrer: ação + espaço 1° círculo com ferramentas a 1,5m = ele volta em 1 minuto com PV completos. Novo defensor no descanso longo.',
          desc_en:'You create a companion construct: Steel Defender (AC 15, HP = 2+INT mod+(5×level), uses your proficiency bonus on attacks and skill checks). It acts immediately after you. Bonus action: command it to make a Force-Empowered Rend attack (1d8+prof bonus force damage), Repair (restores 2d8+prof HP to itself or a construct/object within 5 ft, 3×/day), or Deflect Attack (reaction: imposes disadvantage on an attack by a creature within 5 ft against another creature). If it dies: action + 1st-level spell slot with tools within 5 ft = it returns in 1 minute at full HP. A new defender is created on a long rest.' },
        { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️',
          desc:'Você pode atacar duas vezes, em vez de uma, sempre que usar a ação Atacar.',
          desc_en:'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
        { nivel:9, nome:'Pulso Arcano', nome_en:'Arcane Jolt', icone:'⚡',
          desc:'Ao acertar com uma arma mágica (ou ao seu Defensor de Aço acertar), você pode canalizar energia mágica para criar um dos seguintes efeitos: causar 2d6 de dano de energia extra ao alvo, OU restaurar 2d6 PV em uma criatura que você possa ver em até 9m do alvo. Usos = mod. Inteligência (mín. 1); máximo 1x por turno. Recupera no descanso longo.',
          desc_en:'When you or your Steel Defender hits with a magic weapon, you can channel magic to create one of the following effects: deal 2d6 extra force damage to the target, OR restore 2d6 HP to a creature you can see within 30 feet of the target. Uses = INT mod (minimum 1); maximum once per turn. Recharges on a long rest.',
          recarga:'longo', formula:'pulso', id:'pulso_arcano',
          nota: (nivel) => `${calcularUsos('pulso', nivel, 'artifice')} usos · descanso longo` },
        { nivel:15, nome:'Defensor Aprimorado', nome_en:'Improved Defender', icone:'🌟',
          desc:'Seu Pulso Arcano e seu Defensor de Aço ficam mais poderosos: o dano e a cura do Pulso Arcano aumentam para 4d6. Seu Defensor ganha +2 de CA. Quando o Defensor usa Defletir Ataque, o atacante sofre 1d4 + seu modificador de Inteligência de dano de energia.',
          desc_en:'Your Arcane Jolt and Steel Defender become more powerful: Arcane Jolt damage and healing increase to 4d6. Your Defender gains +2 AC. When the Defender uses Deflect Attack, the attacker takes 1d4 + your Intelligence modifier force damage.' },
      ]
    },
  },
  ladino: {
    assassino: {
      nome: 'Arquétipo do Assassino',
      cor: '#8050b8',
      icone: '☠️',
      habilidades: [
        { nivel:3, nome:'Proficiência Adicional', icone:'🎭', desc:'Você ganha proficiência com Kit de Disfarce e Kit de Venenos.' },
        { nivel:3, nome:'Assassinar', icone:'🗡️', desc:'Você tem vantagem em ataques contra qualquer criatura que ainda não tenha chegado ao seu turno no combate. Além disso, qualquer acerto contra uma criatura surpresa é automaticamente um crítico.' },
        { nivel:9, nome:'Especialização em Infiltração', icone:'🎭', desc:'Você pode criar identidades falsas infalivelmente. Gaste 7 dias e 25 po para estabelecer histórico, profissão e afiliações para uma identidade. Criaturas acreditarão que você é aquela pessoa até terem motivo óbvio para pensar o contrário.' },
        { nivel:13, nome:'Impostor', icone:'🪞', desc:'Você pode imitar a fala, escrita e comportamento de outra pessoa infalivelmente. Deve gastar ao menos 3 horas estudando articulação, escrita e maneirismos. Criaturas que suspeitem têm desvantagem em detectar o disfarce.' },
        { nivel:17, nome:'Golpe Letal', icone:'💀', desc:'Ao acertar uma criatura surpresa, ela deve fazer um teste de CON (CD 8 + mod. DES + prof.). Se falhar, o dano do ataque é dobrado.' },
      ]
    },
    ladrao: {
      nome: 'Arquétipo do Ladrão',
      cor: '#8050b8',
      icone: '🔓',
      habilidades: [
        { nivel:3, nome:'Mãos Rápidas', icone:'✋', desc:'Use a ação bônus da Ação Ardilosa para: fazer um teste de DES (Prestidigitação), usar ferramentas de ladrão para desarmar armadilha ou abrir fechadura, ou realizar a ação Usar um Objeto.' },
        { nivel:3, nome:'Andarilho de Telhados', icone:'🏃', desc:'Escalar não custa movimento extra. Saltos com corrida aumentam o alcance em 0,3m × mod. DES.' },
        { nivel:9, nome:'Furtividade Suprema', icone:'👻', desc:'Você tem vantagem em testes de DES (Furtividade) se não se mover mais do que metade de seu deslocamento no turno.' },
        { nivel:13, nome:'Usar Instrumento Mágico', icone:'🔮', desc:'Você ignora todos os requisitos de classe, raça e nível para o uso de qualquer item mágico.' },
        { nivel:17, nome:'Reflexos de Ladrão', icone:'⚡', desc:'Você pode realizar dois turnos durante o primeiro turno de cada combate (na sua iniciativa e na sua iniciativa −10). Não pode ser usado quando está surpreso.' },
      ]
    },
    arcano: {
      nome: 'Trapaceiro Arcano',
      cor: '#8050b8',
      icone: '🔮',
      habilidades: [
        { nivel:3, nome:'Conjuração', nome_en:'Spellcasting', icone:'📜', desc:'Você aprende 3 truques (incluindo Mãos Mágicas obrigatório) e magias de mago (encantamento/ilusão). Espaços recuperam em descanso longo. Habilidade de conjuração: Inteligência. CD = 8 + prof + INT.' },
        { nivel:3, nome:'Mãos Mágicas Malabaristas', icone:'👐', desc:'Ao conjurar Mãos Mágicas, a mão espectral fica invisível. Pode guardar/recuperar objetos em recipientes de outras criaturas e usar ferramentas de ladrão à distância, sem ser notado (DES vs. SAB). A ação bônus da Ação Ardilosa pode controlar a mão.' },
        { nivel:9, nome:'Emboscada Mágica', icone:'🎯', desc:'Se estiver escondido ao conjurar uma magia em uma criatura, ela tem desvantagem em testes de resistência contra essa magia nesse turno.' },
        { nivel:13, nome:'Trapaceiro Versátil', icone:'🌀', desc:'Ação bônus: designe uma criatura a até 1,5m das Mãos Mágicas para obter vantagem em ataques contra ela até o fim do turno.' },
        { nivel:17, nome:'Ladrão de Magia', icone:'✨', desc:'Reação ao ser alvo de uma magia: force o conjurador a testar com o modificador de conjuração dele vs. CD das suas magias. Se falhar, você ignora o efeito sobre você e aprende a magia por 8 horas (se for ≥1° e de nível que pode conjurar). O conjurador não pode usar essa magia por 8 horas. Recupera em descanso longo.' },
      ]
    },
    'alma-fantasma': {
      nome: 'Fantasma (Tasha)',
      cor: '#8050b8',
      icone: '👻',
      habilidades: [
        { nivel:3, nome:'Sussurros da Morte', icone:'💀', desc:'Sempre que terminar um descanso curto ou longo, você pode escolher uma proficiência com ferramenta ou perícia que não possua — um espírito compartilha seu conhecimento. Você perde essa proficiência quando usar esta característica novamente.' },
        { nivel:3, nome:'Lamentos da Sepultura', icone:'🌑', desc:'Imediatamente após causar dano com Ataque Furtivo, foque uma segunda criatura que possa ver em até 9m da primeira: ela sofre dano necrótico igual à metade dos dados de Ataque Furtivo (arredondado para cima). Usos = bônus de proficiência; recupera em descanso longo.' },
        { nivel:9, nome:'Símbolos dos Mortos', icone:'🔮', desc:'Reação quando uma criatura que você possa ver morre a até 9m: faça um berloque da alma aparecer em sua mão livre (fragmento da essência vital). Máximo de berloques = bônus de proficiência. Benefícios: vantagem em salvaguardas de CON e testes contra morte; destrua um berloque para recuperar Lamentos da Sepultura ou comunicar-se com o espírito do morto (1 pergunta, resposta curta).' },
        { nivel:13, nome:'Passo Fantasma', icone:'🌫️', desc:'Ação bônus: assuma forma espectral por 10 min. Nessa forma: voo 3m, pode planar, ataques contra você têm desvantagem, pode mover-se através de criaturas e objetos (sofre 1d10 de dano de energia se terminar turno dentro deles). Para usar novamente: descanso longo ou destrua um berloque da alma.' },
        { nivel:17, nome:'Amigo da Morte', icone:'☠️', desc:'Sua conexão com a morte se tornou íntima. Ao usar Lamentos da Sepultura, você pode causar o dano necrótico tanto na primeira quanto na segunda criatura. Além disso, um berloque da alma aparece em sua mão ao fim de um descanso longo se você não tiver nenhum.' },
      ]
    },
    espiao: {
      nome: 'Lâmina d\'Alma (Tasha)',
      cor: '#8050b8',
      icone: '🔪',
      habilidades: [
        { nivel:3, nome:'Poder Psíquico', icone:'🧠', desc:'Dados de Energia Psíquica = 2 × bônus de proficiência (d6, aumenta para d8 nv5, d10 nv11, d12 nv17). Recupera todos em descanso longo; recupera 1 como ação bônus (1/descanso curto ou longo). Alimenta todos os poderes abaixo.' },
        { nivel:3, nome:'Auxílio Psiônico', icone:'💡', desc:'Se falhar em um teste de habilidade com perícia ou ferramenta da qual seja proficiente, gaste 1 dado de Energia Psíquica e adicione o resultado ao teste — pode transformar falha em sucesso. Gasta o dado somente se a rolagem for bem-sucedida.' },
        { nivel:3, nome:'Sussurros Psíquicos', icone:'📡', desc:'Ação: escolha criaturas em seu campo de visão (máximo = bônus de proficiência) e gaste 1 dado de Energia Psíquica. Pelo número de horas igual ao resultado, essas criaturas podem falar telepaticamente com você (alcance 1,5 km). Não requer idioma comum. Primeira vez após descanso longo: grátis.' },
        { nivel:3, nome:'Lâminas Psíquicas', icone:'⚔️', desc:'Ao realizar a ação Atacar, manifeste uma lâmina psíquica em mão livre: arma corpo a corpo simples com Acuidade e Arremesso (alcance 18m/36m). O dano é psíquico e usa o atributo do ataque. A lâmina desaparece imediatamente após o ataque.' },
        { nivel:9, nome:'Véu Psíquico', icone:'🌫️', desc:'Ação: fique invisível (você e o que carrega) por 1 hora ou até dissipar. Termina se causar dano ou obrigar uma criatura a fazer salvaguarda. Recupera em descanso longo; pode reativar gastando 1 dado de Energia Psíquica.' },
        { nivel:13, nome:'Acerto Psiônico', icone:'🎯', desc:'(Incluído em Lâminas Psíquicas) Ao usar suas Lâminas Psíquicas para causar Ataque Furtivo, você pode gastar 1 dado de Energia Psíquica para adicionar o resultado ao dano.' },
        { nivel:17, nome:'Mente Pura', icone:'💜', desc:'Ao usar Lâminas Psíquicas para causar Ataque Furtivo, force o alvo a testar SAB (CD = 8 + prof + DES). Se falhar, fica Atordoado por 1 minuto (pode repetir o teste ao fim de cada turno). Recupera em descanso longo; pode reativar gastando 1 dado de Energia Psíquica.' },
      ]
    },
  },
  patrulheiro: {
    cacador: {
      nome: 'Conclave do Caçador',
      cor: '#489848',
      icone: '🏹',
      habilidades: [
        { nivel:3, nome:'Presa do Caçador', icone:'🎯', desc:'Escolha uma técnica: Assassino de Colossos (1d8 extra em criaturas feridas, 1x/turno), Matador de Gigantes (reação: ataque contra criatura Grande+ que errar ou acertar você), ou Destruidor de Hordas (um ataque extra contra criatura diferente adjacente ao alvo, 1x/turno).' },
        { nivel:7, nome:'Táticas Defensivas', icone:'🛡️', desc:'Escolha uma proteção: Escapar da Horda (ataques de oportunidade com desvantagem contra você), Defesa Contra Múltiplos Ataques (+4 CA contra ataques subsequentes de quem te acertou no turno), ou Vontade de Aço (vantagem em testes contra ser amedrontado).' },
        { nivel:11, nome:'Ataque Múltiplo', icone:'⚔️', desc:'Escolha: Saraivada (ação para atacar à distância todos em 3m de um ponto, jogada separada por alvo) ou Ataque Giratório (ação para atacar corpo-a-corpo todos em 1,5m de você, jogada separada por alvo).' },
        { nivel:15, nome:'Defesa de Caçador Superior', icone:'💎', desc:'Escolha: Evasão (dano 0 em saves DES bem-sucedidos; metade se falhar), Manter-se Contra a Maré (reação: force atacante que errou a repetir o ataque contra outro), ou Esquiva Sobrenatural (reação: reduza dano de um ataque à metade).' },
      ]
    },
    'mestre-besta': {
      nome: 'Conclave da Besta',
      cor: '#489848',
      icone: '🐾',
      habilidades: [
        { nivel:3, nome:'Companheiro Animal', icone:'🐺', desc:'Com 8h de ritual e 50 po em suprimentos, invoque um companheiro animal (CA = 10+DEX+2, PV = 4×nível, usa seu bônus de prof.). Você controla suas ações. Se morrer, pode ser revivido com 25 po e 8h de trabalho.' },
        { nivel:5, nome:'Ataque Coordenado', icone:'🦅', desc:'Quando você usa a ação de Ataque, seu companheiro pode usar sua reação para realizar um ataque corpo-a-corpo contra um inimigo.' },
        { nivel:7, nome:'Defesa da Besta', icone:'🛡️', desc:'Enquanto seu companheiro puder ver você, ele tem vantagem em todos os testes de resistência.' },
        { nivel:11, nome:'Tempestade de Garras e Presas', icone:'💥', desc:'Seu companheiro pode usar sua ação para atacar cada criatura em 1,5m dele, com jogada separada para cada alvo.' },
        { nivel:15, nome:'Defesa da Besta Superior', icone:'🌟', desc:'Reação do companheiro: quando um atacante que ele possa ver acertá-lo, ele pode usar reação para reduzir o dano à metade.' },
      ]
    },
    furtivo: {
      nome: 'Conclave do Andarilho Feérico (Tasha)',
      cor: '#489848',
      icone: '✨',
      habilidades: [
        { nivel:3, nome:'Golpes Aterrorizantes', icone:'💜', desc:'Ao acertar uma criatura, cause 1d4 de dano psíquico extra (1d6 a partir do nível 11). Cada criatura pode ser afetada apenas 1 vez por turno.' },
        { nivel:3, nome:'Glamour Sobrenatural', icone:'🌸', desc:'Bônus em testes de Carisma = modificador de Sabedoria (mín. +1). Proficiência em Atuação, Enganação ou Persuasão (à escolha).' },
        { nivel:7, nome:'Distorcer Engodo', icone:'🌀', desc:'Vantagem contra ser amedrontado ou enfeitiçado. Reação: quando você ou aliado em 36m for bem-sucedido em save contra esses efeitos, force outra criatura a fazer o mesmo save ou ficar amedrontada/enfeitiçada por 1 minuto.' },
        { nivel:11, nome:'Reforço Feérico', icone:'🧚', desc:'Aprende Invocar Fada (não conta nas magias conhecidas). Pode conjurá-la 1x/descanso longo sem espaço de magia. Pode modificá-la para durar 1 min sem concentração.' },
        { nivel:15, nome:'Andarilho da Névoa', icone:'🌫️', desc:'Conjure Passo Nebuloso sem espaço de magia (mod. SAB vezes, mín. 1 / descanso longo). Ao usar Passo Nebuloso, pode levar uma criatura em 1,5m para um espaço em 1,5m do destino.' },
      ]
    },
    exterminador: {
      nome: 'Conclave do Portador do Enxame (Tasha)',
      cor: '#489848',
      icone: '🐝',
      habilidades: [
        { nivel:3, nome:'Enxame Reunido', icone:'🌿', desc:'Um enxame de espíritos intangíveis o acompanha. Uma vez por turno, após acertar um ataque, escolha: +1d6 dano perfurante ao alvo, mova o alvo até 4,5m (save FOR vs CD magia), ou mova você mesmo 1,5m.' },
        {
          nivel:7, nome:'Maré Ondulante', icone:'🦋',
          desc:'Ação bônus: deslocamento de vôo 3m e levitação por 1 minuto (ou até incapacitado). Usos = bônus de proficiência / descanso longo.',
          recarga:'longo', formula:'prof', id:'mare_ondulante',
          nota: (nivel) => `${getProfBonus(nivel)} usos · descanso longo`
        },
        { nivel:11, nome:'Enxame Poderoso', icone:'💪', desc:'O dano do enxame aumenta para 1d8. Criaturas que falharem no save também são derrubadas. Quando movido pelo enxame, você ganha meia cobertura até o início do próximo turno.' },
        {
          nivel:15, nome:'Dispersão do Enxame', icone:'🌪️',
          desc:'Reação ao receber dano: resista a esse tipo de dano e teletransporte-se para um espaço visível em 9m. Usos = bônus de proficiência / descanso longo.',
          recarga:'longo', formula:'prof', id:'dispersao_enxame',
          nota: (nivel) => `${getProfBonus(nivel)} usos · descanso longo`
        },
      ]
    },
  },
  feiticeiro: {
    'magia-selvagem': {
      nome: 'Magia Selvagem',
      cor: '#3a8aee',
      icone: '🎲',
      habilidades: [
        { nivel:1, nome:'Surto de Magia Selvagem', icone:'💥', desc:'Cada vez que você conjurar uma magia de 1° nível ou superior, o Mestre pode pedir que role um d20. Se sair 1, role na Tabela de Surto de Magia Selvagem — efeitos aleatórios e caóticos ocorrem imediatamente. Esses surtos são únicos por turno.' },
        { nivel:1, nome:'Marés de Caos', icone:'🌊', desc:'Você pode manipular o caos para ter vantagem em uma jogada de ataque, teste de habilidade ou salvaguarda. Após usar, recupera apenas em descanso longo — ou quando o Mestre acionar um Surto de Magia Selvagem após uma magia sua.',
          recarga:'longo', formula:'1', id:'mares_caos', nota: () => '1 uso · descanso longo' },
        { nivel:6, nome:'Dobrar a Sorte', icone:'🎴', desc:'Reação: quando outra criatura visível fizer uma jogada de ataque, teste ou salvaguarda, gaste 2 pontos de feitiçaria para rolar 1d4 e aplicar como bônus ou penalidade (à sua escolha) no resultado dela. Funciona após a criatura rolar, mas antes do efeito ocorrer.' },
        { nivel:14, nome:'Caos Controlado', icone:'🎯', desc:'Ao rolar na tabela de Surto de Magia Selvagem, você pode rolar duas vezes e escolher qual resultado prefere usar. Você ganha mais controle sobre a imprevisibilidade de sua magia.' },
        { nivel:18, nome:'Bombardeio de Magia', icone:'💣', desc:'Quando você rola dano de uma magia e algum dado mostrar o maior valor possível, escolha um desses dados, role-o novamente e adicione o novo resultado ao dano total. Pode ser usado uma vez por rodada.' },
      ]
    },
    draconico: {
      nome: 'Linhagem Dracônica',
      cor: '#3a8aee',
      icone: '🐉',
      habilidades: [
        { nivel:1, nome:'Ancestral Dracônico', icone:'🐲', desc:'Escolha um tipo de dragão como ancestral (Azul, Branco, Bronze, Cobre, Latão, Negro, Ouro, Prata, Verde ou Vermelho — cada um com um tipo de dano). Você passa a falar, ler e escrever Dracônico. Ao interagir com dragões, o bônus de proficiência em testes de Carisma é dobrado.' },
        { nivel:1, nome:'Resiliência Dracônica', icone:'🛡️', desc:'Seus PV máximos aumentam em +1 a cada nível de feiticeiro. Quando não usa armadura, sua CA = 13 + modificador de Destreza (escamas dracônicas emergem em partes do seu corpo).' },
        { nivel:6, nome:'Afinidade Elemental', icone:'⚡', desc:'Ao conjurar uma magia que cause o mesmo tipo de dano do seu ancestral dracônico, adicione seu modificador de Carisma ao dano de uma rolagem. Pode também gastar 1 ponto de feitiçaria para ganhar resistência a esse tipo de dano por 1 hora.' },
        { nivel:14, nome:'Asas de Dragão', icone:'🦅', desc:'Ação bônus: brote um par de asas dracônicas e ganhe deslocamento de voo igual ao seu deslocamento normal. As asas duram até você as dissipar (outra ação bônus). Não funcionam com armaduras que não as acomodem.' },
        { nivel:18, nome:'Presença Dracônica', icone:'👑', desc:'Ação: gaste 5 pontos de feitiçaria para exalar uma aura de admiração ou medo (à sua escolha) em 18m por 1 minuto (concentração). Cada criatura hostil que começar o turno na aura faz save de Sabedoria ou fica enfeitiçada (admiração) ou amedrontada (medo).' },
      ]
    },
    'mente-aberrante': {
      nome: 'Mente Aberrante',
      cor: '#3a8aee',
      icone: '🧠',
      habilidades: [
        { nivel:1, nome:'Magias Psiônicas', icone:'📡', desc:'Você aprende magias extras ao subir de nível: nv1 (Braços de Hadar, Farpa Mental, Sussurros Dissonantes), nv3 (Acalmar Emoções, Detectar Pensamentos), nv5 (Fome de Hadar, Remeter), nv7 (Invocar Aberração, Tentáculos Negros), nv9 (Ligação Telepática, Telecinese). Não contam no limite de magias conhecidas.' },
        { nivel:1, nome:'Discurso Telepático', icone:'💬', desc:'Ação bônus: estabeleça uma conexão telepática com uma criatura visível em até 9m. Dura nível de feiticeiro em minutos. Vocês se comunicam telepaticamente a até (1,5 km × mod. CAR) km de distância — sem precisar falar o mesmo idioma, mas devendo entender ao menos um idioma em comum.' },
        { nivel:6, nome:'Feitiçaria Psiônica', icone:'🌀', desc:'Pode conjurar magias das Magias Psiônicas gastando pontos de feitiçaria (1 ponto por círculo da magia) em vez de espaços. Quando conjurada assim, a magia não precisa de componentes verbais, somáticos nem materiais (exceto os consumidos).' },
        { nivel:6, nome:'Defesas Psíquicas', icone:'🛡️', desc:'Você ganha resistência a dano psíquico e vantagem em salvaguardas contra ser amedrontado ou enfeitiçado. Sua mente aberrante cria barreiras naturais.' },
        { nivel:14, nome:'Revelação na Carne', icone:'🦑', desc:'Ação bônus: gaste 1+ pontos de feitiçaria para transformar seu corpo por 10 minutos. Cada ponto gasto concede um benefício: visão de invisíveis em 18m, voo = deslocamento terrestre (planar), natação 2× e respiração aquática, ou mover-se por espaços de 2,5cm sem espremer.' },
        { nivel:18, nome:'Implosão Anômala', icone:'🌌', desc:'Ação: teletransporte-se para um espaço visível em até 36m. Criaturas a até 9m do espaço que você deixou fazem save de Força — quem falhar recebe 3d10 de dano de energia e é puxado para onde você estava. Recupera em descanso longo (ou gaste 5 pontos de feitiçaria).',
          recarga:'longo', formula:'1', id:'implosao_anomala', nota: () => '1 uso · descanso longo ou 5 pts feitiçaria' },
      ]
    },
    'alma-cronomatica': {
      nome: 'Alma Cronométrica',
      cor: '#3a8aee',
      icone: '⏱️',
      habilidades: [
        { nivel:1, nome:'Magias Cronométricas', icone:'📜', desc:'Aprende magias extras por nível: nv1 (Alarme, Proteção Contra o Bem e o Mal), nv3 (Auxílio, Restauração Menor), nv5 (Dissipar Magia, Proteção Contra Energia), nv7 (Invocar Construto, Movimentação Livre), nv9 (Muralha de Energia, Restauração Maior). Não contam no limite de magias conhecidas.' },
        { nivel:1, nome:'Restaurar o Equilíbrio', icone:'⚖️', desc:'Reação: quando uma criatura visível em até 18m for fazer uma jogada com vantagem ou desvantagem, você pode impedir que essa condição se aplique — a jogada é feita normalmente. Usos = bônus de proficiência, recupera em descanso longo.',
          recarga:'longo', formula:'prof', id:'restaurar_equilibrio', nota: (nivel) => `${getProfBonus(nivel)} usos · descanso longo` },
        { nivel:6, nome:'Bastião da Ordem', icone:'🏛️', desc:'Ação: gaste 1 a 5 pontos de feitiçaria para criar um escudo protetor em você ou em aliado visível a até 9m. O escudo tem tantos d8s quanto pontos gastos. Quando a criatura protegida sofrer dano, ela pode rolar e subtrair esses dados do dano recebido. Dura até descanso longo.' },
        { nivel:14, nome:'Arrebatamento da Ordem', icone:'🔮', desc:'Ação bônus: entre em transe de 1 minuto. Durante o transe: ataques contra você não têm vantagem, e qualquer resultado abaixo de 9 no d20 em suas jogadas conta como 10. Recupera em descanso longo (ou 5 pontos de feitiçaria).',
          recarga:'longo', formula:'1', id:'arrebatamento_ordem', nota: () => '1 uso · descanso longo ou 5 pts feitiçaria' },
        { nivel:18, nome:'Marcha Cronometrada', icone:'⚙️', desc:'Ação: invoque espíritos da ordem num cubo de 9m centrado em você. Eles restauram até 100 PV (distribuídos como quiser entre criaturas no cubo), reparam objetos danificados completamente dentro da área, e encerram magias de 6° círculo ou menor sobre alvos à sua escolha. Recupera em descanso longo (ou 7 pontos de feitiçaria).',
          recarga:'longo', formula:'1', id:'marcha_cronometrada', nota: () => '1 uso · descanso longo ou 7 pts feitiçaria' },
      ]
    },
  },
  mago: {
    abjuracao: {
      nome: 'Tradição da Abjuração',
      cor: '#7858e8',
      icone: '🛡️',
      habilidades: [
        { nivel:2, nome:'Abjuração Instruída', icone:'📖', desc:'O ouro e o tempo que você gasta para copiar uma magia da escola de Abjuração no seu grimório é reduzido à metade.' },
        { nivel:2, nome:'Proteção Arcana', icone:'🔵', desc:'Quando você conjura uma magia de Abjuração de 1° círculo ou superior, cria uma barreira protetora em você com PV = 2× seu nível de mago + mod. Inteligência. O dano vai para essa proteção primeiro. Ela se recarrega quando você conjura outra magia de Abjuração (recupera PV = 2× círculo da magia). Recupera totalmente em descanso longo.' },
        { nivel:6, nome:'Proteção Projetada', icone:'🔄', desc:'Reação: quando uma criatura visível a até 9m de você receber dano, sua Proteção Arcana absorve aquele dano em vez do dano ir para ela. Se a proteção chegar a 0 PV, a criatura sofre o dano restante.' },
        { nivel:10, nome:'Abjuração Aprimorada', icone:'✨', desc:'Quando você conjura uma magia de Abjuração que exige um teste de habilidade (como Contramágica ou Dissipar Magia), adicione seu bônus de proficiência ao teste. Isso facilita muito cancelar magias e resistir a efeitos mágicos.' },
        { nivel:14, nome:'Resistência à Magia', icone:'💎', desc:'Você tem vantagem em todos os testes de resistência contra magias. Além disso, você tem resistência a dano causado por magias — recebe metade do dano.' },
      ]
    },
    conjuracao: {
      nome: 'Tradição da Conjuração',
      cor: '#7858e8',
      icone: '🌀',
      habilidades: [
        { nivel:2, nome:'Conjuração Instruída', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Conjuração no grimório é reduzido à metade.' },
        { nivel:2, nome:'Conjuração Menor', icone:'✨', desc:'Ação: conjure um objeto inanimado em sua mão ou no chão a até 3m. O objeto não pode ter mais de 90cm de largura, pesar mais de 5kg, e deve ser algo não-mágico que você já tenha visto. Ele irradia luz fraca em 1,5m e desaparece após 1 hora, se você usar a habilidade de novo, ou se sofrer ou causar dano.' },
        { nivel:6, nome:'Transposição Benigna', icone:'🔀', desc:'Ação: teletransporte-se até 9m para um espaço desocupado visível. Ou troque de lugar com uma criatura Pequena ou Média voluntária nesse alcance. Após usar, a habilidade se recarrega quando você terminar um descanso longo ou conjurar uma magia de Conjuração de 1° círculo ou superior.',
          recarga:'longo', formula:'1', id:'transposicao_benigna', nota: () => '1 uso · descanso longo (ou conjurar magia de Conjuração)' },
        { nivel:10, nome:'Conjuração Focada', icone:'🎯', desc:'Enquanto você estiver concentrado em uma magia de Conjuração, sua concentração não pode ser interrompida por ter sofrido dano. Ataques e efeitos que normalmente forçariam um teste de Constituição para manter concentração não afetam magias de Conjuração.' },
        { nivel:14, nome:'Invocações Resistentes', icone:'💪', desc:'Qualquer criatura que você invocar ou criar com uma magia de Conjuração recebe 30 PV temporários. Isso as torna muito mais difíceis de derrotar no campo de batalha.' },
      ]
    },
    divinacao: {
      nome: 'Tradição da Adivinhação',
      cor: '#7858e8',
      icone: '🔮',
      habilidades: [
        { nivel:2, nome:'Adivinhação Instruída', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Adivinhação no grimório é reduzido à metade.' },
        { nivel:2, nome:'Prodígio', icone:'🎲', desc:'Após cada descanso longo, role dois d20 e anote os resultados. A qualquer momento, você pode substituir qualquer jogada de ataque, teste de resistência ou teste de habilidade (seu ou de qualquer criatura visível) por um desses resultados. Você escolhe antes da rolagem, mas pode usar apenas uma substituição por rodada. Os dados são perdidos se não usados antes do próximo descanso longo.',
          recarga:'longo', formula:'2', id:'prodigio', nota: () => '2 dados de Prodígio · descanso longo' },
        { nivel:6, nome:'Especialista em Adivinhação', icone:'🔭', desc:'Quando conjurar uma magia de Adivinhação de 2° círculo ou superior usando um espaço de magia, recupere um espaço de magia gasto de nível inferior ao da magia conjurada (máximo 5° círculo). Conjurar magias de visão remota e presciência se torna muito mais eficiente.' },
        { nivel:10, nome:'O Terceiro Olho', icone:'👁️', desc:'Ação: escolha um destes benefícios que dura até você ficar incapacitado ou descansar: Visão no Escuro (18m), Visão Etérea (ver o Plano Etéreo a 18m), Compreensão Maior (ler qualquer idioma), ou Ver Invisibilidade (ver criaturas/objetos invisíveis a até 3m). Recupera em descanso longo.',
          recarga:'longo', formula:'1', id:'terceiro_olho', nota: () => '1 uso · descanso longo' },
        { nivel:14, nome:'Prodígio Maior', icone:'🌟', desc:'Sua habilidade Prodígio melhora: agora você rola três d20 (em vez de dois) após cada descanso longo, dando mais opções de substituição.' },
      ]
    },
    encantamento: {
      nome: 'Tradição do Encantamento',
      cor: '#7858e8',
      icone: '💜',
      habilidades: [
        { nivel:2, nome:'Encantamento Instruído', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Encantamento no grimório é reduzido à metade.' },
        { nivel:2, nome:'Olhar Hipnotizante', icone:'👀', desc:'Ação: escolha uma criatura visível a até 1,5m. Ela deve passar em um teste de resistência de Sabedoria (CD das suas magias) ou ficará enfeitiçada até o fim do seu próximo turno: deslocamento cai a 0 e fica incapacitada. Você pode usar sua ação nos turnos seguintes para manter o efeito. Termina se você se afastar, se ela não puder te ver/ouvir, ou sofrer dano. Recupera contra a mesma criatura em descanso longo.',
          recarga:'longo', formula:'1', id:'olhar_hipnotizante', nota: () => '1 uso por criatura · descanso longo' },
        { nivel:6, nome:'Encanto Instintivo', icone:'🌀', desc:'Reação: quando uma criatura a até 9m fizer uma jogada de ataque contra você, redirecione o ataque para a criatura mais próxima do atacante (exceto você e o próprio atacante). O atacante faz um teste de Sabedoria (CD das suas magias) — se falhar, ataca outra criatura. Deve ser usado antes de saber se o ataque acertou. Criaturas imunes a Enfeitiçamento são imunes.' },
        { nivel:10, nome:'Dividir Encantamento', icone:'↔️', desc:'Quando você conjurar uma magia de Encantamento de 1° círculo ou superior com um único alvo, pode fazer a magia afetar uma segunda criatura automaticamente, sem custo adicional.' },
        { nivel:14, nome:'Alterar Memórias', icone:'🧠', desc:'Quando você enfeitiçar uma ou mais criaturas com uma magia de Encantamento, pode fazer uma criatura acreditar que não foi enfeitiçada. Além disso, quando a magia expirar, use sua ação para fazê-la esquecer até 1 + mod. Carisma horas do período encantado (teste de Inteligência, CD das suas magias, para resistir).' },
      ]
    },
    evocacao: {
      nome: 'Tradição da Evocação',
      cor: '#7858e8',
      icone: '⚡',
      habilidades: [
        { nivel:2, nome:'Evocação Instruída', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Evocação no grimório é reduzido à metade.' },
        { nivel:2, nome:'Esculpir Magias', icone:'🗿', desc:'Quando você conjurar uma magia de Evocação que afeta outras criaturas visíveis, escolha até 1 + nível da magia criaturas — elas passam automaticamente nos testes de resistência e não sofrem dano (mesmo que normalmente recebessem metade). Ótimo para proteger aliados dentro da área de efeito.' },
        { nivel:6, nome:'Truque Potente', icone:'💥', desc:'Quando uma criatura passar em um teste de resistência de um dos seus truques de dano, ela ainda sofre metade do dano (antes não sofria nada). Seus truques básicos se tornam sempre ameaçadores.' },
        { nivel:10, nome:'Evocação Potencializada', icone:'📈', desc:'Adicione seu modificador de Inteligência ao resultado das jogadas de dano de qualquer magia de Evocação que você conjurar. O bônus se aplica a uma rolagem de dano da magia (não a múltiplas).' },
        { nivel:14, nome:'Sobrecarga', icone:'🌩️', desc:'Quando conjurar uma magia de mago de 5° círculo ou inferior (exceto truques) que cause dano, a magia causa o dano máximo possível. Na primeira vez não há penalidade. Usos subsequentes antes de descanso longo causam 2d12 de dano necrótico por nível da magia (aumenta em 1d12 a cada uso adicional). Esse dano ignora resistências.',
          recarga:'longo', formula:'1', id:'sobrecarga', nota: () => '1 uso sem penalidade · descanso longo' },
      ]
    },
    ilusionismo: {
      nome: 'Tradição do Ilusionismo',
      cor: '#7858e8',
      icone: '🎭',
      habilidades: [
        { nivel:2, nome:'Ilusão Instruída', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Ilusão no grimório é reduzido à metade.' },
        { nivel:2, nome:'Ilusão Menor Aprimorada', icone:'🖼️', desc:'Você aprende o truque Ilusão Menor (ou outro truque de mago, se já o conhecer). Quando conjurar Ilusão Menor, você pode criar tanto um som quanto uma imagem com uma única conjuração — normalmente só seria possível um deles.' },
        { nivel:6, nome:'Ilusões Moldáveis', icone:'🔄', desc:'Quando você conjurar uma magia de Ilusão com duração de 1 minuto ou mais, pode usar sua ação para alterar a natureza da ilusão enquanto ela durar (dentro dos parâmetros normais da magia). Útil para adaptar ilusões conforme a situação muda.' },
        { nivel:10, nome:'Eu Ilusório', icone:'👤', desc:'Reação: quando uma criatura fizer uma jogada de ataque contra você, interponha uma cópia ilusória de si mesmo — o ataque erra automaticamente, e então a ilusão se dissipa. Recupera em descanso longo.',
          recarga:'longo', formula:'1', id:'eu_ilusorio', nota: () => '1 uso · descanso longo' },
        { nivel:14, nome:'Realidade Ilusória', icone:'✨', desc:'Quando conjurar uma magia de Ilusão de 1° círculo ou superior, pode escolher um objeto inanimado não-mágico dentro da ilusão e torná-lo real por 1 minuto (ação bônus). O objeto real não pode causar dano direto. Exemplo: crie uma ilusão de uma ponte e torne-a real para que aliados a atravessem.' },
      ]
    },
    necromancia: {
      nome: 'Tradição da Necromancia',
      cor: '#7858e8',
      icone: '💀',
      habilidades: [
        { nivel:2, nome:'Necromancia Instruída', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Necromancia no grimório é reduzido à metade.' },
        { nivel:2, nome:'Colheita Sinistra', icone:'🌑', desc:'Uma vez por turno, quando você matar uma ou mais criaturas com uma magia de 1° círculo ou superior, recupere PV iguais ao dobro do nível da magia — ou ao triplo se a magia for de Necromancia. Não funciona contra constructos ou mortos-vivos.' },
        { nivel:6, nome:'Escravos Mortos-Vivos', icone:'🦴', desc:'Você adiciona a magia Animar Mortos ao grimório (grátis). Quando você a conjurar, pode animar um corpo ou pilha de ossos extra. Todos os mortos-vivos que você criar com magias de Necromancia recebem: PV máximos extras iguais ao seu nível de mago, e adicionam seu bônus de proficiência às jogadas de dano.' },
        { nivel:10, nome:'Acostumado à Morte-Vida', icone:'🛡️', desc:'Você tem resistência a dano necrótico e seu máximo de PV não pode ser reduzido (por magias ou efeitos como visagem vampírica). Anos de trabalho com mortos-vivos o tornaram imune aos piores efeitos dessas forças.' },
        { nivel:14, nome:'Comandar Mortos-Vivos', icone:'👑', desc:'Ação: escolha um morto-vivo visível a até 18m. Ele faz um teste de Carisma (CD das suas magias). Se falhar, torna-se amistoso e obedece seus comandos até você usar essa habilidade de novo. Mortos-vivos com INT 8+ têm vantagem no teste; com INT 12+ podem repetir o teste a cada hora.' },
      ]
    },
    transmutacao: {
      nome: 'Tradição da Transmutação',
      cor: '#7858e8',
      icone: '⚗️',
      habilidades: [
        { nivel:2, nome:'Transmutação Instruída', icone:'📖', desc:'O ouro e o tempo para copiar magias da escola de Transmutação no grimório é reduzido à metade.' },
        { nivel:2, nome:'Alquimia Menor', icone:'🔬', desc:'Ação: altere temporariamente as propriedades físicas de um objeto não-mágico composto de madeira, pedra, ferro, cobre ou prata, transformando-o em um desses outros materiais. Cada 10 minutos de trabalho transforma 30cm³ de material. Após 1 hora (ou se você perder a concentração), o material volta ao normal.' },
        { nivel:6, nome:'Pedra de Transmutador', icone:'💎', desc:'Em 8 horas de trabalho, crie uma pedra especial. Enquanto alguém a carregar, recebe um benefício à sua escolha: visão no escuro (18m), +3m de deslocamento, proficiência em saves de Constituição, ou resistência a um tipo de dano (ácido, frio, fogo, elétrico ou trovejante). Ao conjurar uma magia de Conjuração, pode trocar o benefício da pedra.' },
        { nivel:10, nome:'Metamorfo', icone:'🦋', desc:'Você adiciona Metamorfose ao grimório (grátis). Pode conjurá-la sem gastar espaço de magia — mas apenas com você mesmo como alvo, transformando-se em uma besta de NC 1 ou menor. Após usar assim, não pode repetir até terminar um descanso curto ou longo.',
          recarga:'curto', formula:'1', id:'metamorfo', nota: () => '1 uso gratuito · descanso curto ou longo' },
        { nivel:14, nome:'Mestre Transmutador', icone:'🌟', desc:'Ação: consuma sua Pedra de Transmutador para um de quatro efeitos poderosos (a pedra é destruída e só pode ser refeita após descanso longo): Transformação Maior (transmutar objeto não-mágico de até 1,5m³), Panaceia (remover maldições/doenças/venenos e restaurar todos os PV de uma criatura tocada), Restaurar Vida (conjurar Reviver Mortos sem espaço ou precisar da magia no grimório), ou Restaurar Juventude (reduzir idade aparente em 3d10 anos, mínimo 13).',
          recarga:'longo', formula:'1', id:'mestre_transmutador', nota: () => '1 uso · cria nova pedra após descanso longo' },
      ]
    },
    lamina: {
      nome: 'Lâmina Cantante (Tasha)',
      cor: '#7858e8',
      icone: '🗡️',
      habilidades: [
        { nivel:2, nome:'Treinamento na Guerra e na Música', icone:'⚔️', desc:'Você ganha proficiência com armaduras leves, com um tipo de arma corpo-a-corpo de uma mão (à escolha), e com a perícia Atuação (se ainda não a tiver). Você combina combate e magia de um jeito único e elegante.' },
        { nivel:2, nome:'Canção da Lâmina', icone:'🎵', desc:'Ação bônus: inicie a Canção da Lâmina por até 1 minuto (termina se ficar incapacitado, vestir armadura média/pesada, usar escudo, ou atacar com as duas mãos). Benefícios enquanto ativa: bônus de CA = mod. Inteligência (mín. +1), deslocamento +3m, vantagem em Acrobacia, e bônus em saves de Constituição para manter concentração = mod. Inteligência. Usos = bônus de proficiência, recupera em descanso curto ou longo.',
          recarga:'curto', formula:'prof', id:'cancao_lamina', nota: (nivel) => `${getProfBonus(nivel)} usos · descanso curto ou longo` },
        { nivel:6, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Você pode atacar duas vezes ao usar a ação Atacar. Além disso, pode substituir um desses ataques por um truque (magia básica que não requer espaço de magia).' },
        { nivel:10, nome:'Canção da Defesa', icone:'🛡️', desc:'Reação: enquanto sua Canção da Lâmina estiver ativa, quando receber dano, gaste um espaço de magia para reduzir o dano em 5 × o círculo do espaço gasto. Exemplo: gastar um espaço de 3° círculo reduz o dano em 15.' },
        { nivel:14, nome:'Canção da Vitória', icone:'🌟', desc:'Enquanto sua Canção da Lâmina estiver ativa, adicione seu modificador de Inteligência (mín. +1) ao dano dos seus ataques com armas corpo-a-corpo.' },
      ]
    },
    escribas: {
      nome: 'Ordem dos Escribas (Tasha)',
      cor: '#7858e8',
      icone: '📜',
      habilidades: [
        { nivel:2, nome:'Pena Mágica', icone:'🖊️', desc:'Ação bônus: crie uma pena mágica Minúscula em sua mão livre. Ela produz tinta em qualquer cor e não precisa de tinteiro. Você pode usá-la para copiar magias no grimório em 2 minutos por círculo (em vez do tempo normal). Ação bônus: apague qualquer texto que você escreveu com ela a até 1,5m. A pena desaparece se você criar outra ou morrer.' },
        { nivel:2, nome:'Livro de Magia Desperto', icone:'📕', desc:'Você desperta uma consciência arcana no seu grimório. Benefícios: use-o como foco de conjuração; ao conjurar uma magia com espaço, pode substituir o tipo de dano por um tipo de dano de outra magia de mesmo círculo do grimório; uma vez por descanso longo, conjure um ritual no tempo normal (sem os 10 minutos extras). Pode transferir a consciência para outro livro durante um descanso longo.' },
        { nivel:6, nome:'Manifestar Mente', icone:'👁️', desc:'Ação bônus: invoque a mente do Livro de Magia Desperto como objeto espectral Minúsculo pairando a até 18m de você (irradia luz fraca em 3m). Ela pode ver/ouvir e tem visão no escuro de 18m. Pode conjurar magias como se estivesse no espaço da mente. Usos de conjuração pela mente = bônus de proficiência por dia. Mova-a 9m com ação bônus. Termina se ficar a mais de 90m, Dissipar Magia, grimório destruído, você morrer, ou você a dispensar.',
          recarga:'longo', formula:'1', id:'manifestar_mente', nota: () => '1 invocação · descanso longo (ou gaste espaço de magia para revocar)' },
        { nivel:10, nome:'Mestre Escriba', icone:'📋', desc:'Após descanso longo, crie um pergaminho de magia tocando sua Pena Mágica em papel em branco: escolha uma magia de 1° ou 2° círculo com tempo de conjuração de 1 ação do seu grimório. A magia no pergaminho funciona como se fosse um círculo acima do normal. O pergaminho é ilegível para outros e some ao ser usado ou no próximo descanso longo. Você também cria pergaminhos convencionais pela metade do custo usando a Pena Mágica.' },
        { nivel:14, nome:'Um com a Palavra', icone:'💜', desc:'Você tem vantagem em todos os testes de Inteligência (Arcanismo) enquanto o grimório estiver com você. Além disso, reação: se você receber dano com a Mente Manifesta ativa, cancele todo o dano fazendo a mente espectral desaparecer — role 3d6, e magias do livro com círculo total ≤ ao resultado somem temporariamente. Essas magias retornam após 1d6 descansos longos. Recupera em descanso longo.',
          recarga:'longo', formula:'1', id:'um_com_palavra', nota: () => '1 uso · descanso longo' },
      ]
    },
  },
  clerigo: {
    // PHB cap.3 p.62-70: Vida, Luz, Conhecimento, Enganação, Guerra, Natureza, Tempestade, Morte
    // Tasha's p.37-40: Ordem, Paz, Crepúsculo
    // Níveis de subclasse do Clérigo: 1, 2, 6, 8, 17
    vida: {
      nome: 'Domínio da Vida',
      cor: '#4a80e8',
      icone: '💚',
      habilidades: [
        { nivel:1, nome:'Proficiência: Armadura Pesada', icone:'🛡️',
          desc:'Você ganha proficiência com armaduras pesadas, aumentando muito sua CA sem depender de Destreza.' },
        { nivel:1, nome:'Discípulo da Vida', icone:'❤️',
          desc:'Suas magias de cura curam mais. Toda magia que recupera PV cura PV adicionais = 2 + nível da magia. Ex: Curar Ferimentos (1° nível) cura 3 PV a mais.' },
        { nivel:2, nome:'Canalizar Divindade: Preservar a Vida', icone:'✨',
          desc:'Ação: distribua cura = 5 × seu nível de clérigo em PV entre criaturas visíveis a até 9m. Cada criatura só pode curar até metade de seu PV máximo por uso. Não funciona em mortos-vivos ou constructos.' },
        { nivel:6, nome:'Curandeiro Abençoado', icone:'💫',
          desc:'Quando curar outra criatura com magia, você também se cura: recupera PV = 2 + nível da magia. Curar os outros te cura ao mesmo tempo.' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano radiante extra. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Cura Suprema', icone:'🌟',
          desc:'Ao usar magias de cura com dados, use sempre o valor máximo — nunca role. Exemplo: 2d6 vira automaticamente 12.' },
      ]
    },
    luz: {
      nome: 'Domínio da Luz',
      cor: '#4a80e8',
      icone: '☀️',
      habilidades: [
        { nivel:1, nome:'Truque Adicional: Luz', icone:'💡',
          desc:'Você aprende o truque Luz. Ao tocar um objeto, ele emite luz plena em 6m e penumbra em mais 6m por 1 hora.' },
        { nivel:1, nome:'Labareda Protetora', icone:'🔥',
          desc:'Reação: quando criatura a até 9m atacar você, imponha desvantagem nessa jogada — labaredas ofuscam o atacante. Usos = mod. SAB (mín. 1) por descanso longo.' },
        { nivel:2, nome:'Canalizar Divindade: Radiação do Amanhecer', icone:'🌅',
          desc:'Ação: dissipe escuridão mágica em 9m. Cada criatura hostil no raio testa CON vs. sua CD: falha → dano radiante = 2d10 + nível de clérigo; sucesso → metade.' },
        { nivel:6, nome:'Labareda Aprimorada', icone:'🌟',
          desc:'Agora você pode usar Labareda Protetora quando criaturas a até 9m de você atacam outras criaturas (não só você).' },
        { nivel:8, nome:'Conjuração Poderosa', icone:'💥',
          desc:'Adicione seu modificador de Sabedoria ao dano de qualquer truque de clérigo que conjurar.' },
        { nivel:17, nome:'Coroa de Luz', icone:'👑',
          desc:'Ação: aura de luz solar por 1 minuto. Luz plena a 18m, penumbra a mais 9m. Inimigos na luz plena têm desvantagem em saves contra suas magias de fogo ou radiante.' },
      ]
    },
    conhecimento: {
      nome: 'Domínio do Conhecimento',
      cor: '#4a80e8',
      icone: '📚',
      habilidades: [
        { nivel:1, nome:'Bênçãos do Conhecimento', icone:'🎓',
          desc:'Aprenda 2 idiomas à sua escolha. Torne-se proficiente em 2 perícias entre: Arcanismo, História, Natureza ou Religião. O bônus de proficiência nessas perícias escolhidas é dobrado.' },
        { nivel:2, nome:'Canalizar Divindade: Conhecimento das Eras', icone:'⏳',
          desc:'Ação: por 10 minutos você ganha proficiência com uma perícia ou ferramenta à sua escolha.' },
        { nivel:6, nome:'Canalizar Divindade: Ler Pensamentos', icone:'🧠',
          desc:'Ação: criatura visível em até 18m testa SAB vs. sua CD. Se falhar, você lê seus pensamentos superficiais por 1 min. Pode gastar a ação para terminar o efeito e conjurar Sugestão nela sem espaço de magia (ela falha automaticamente na save).' },
        { nivel:8, nome:'Conjuração Poderosa', icone:'💥',
          desc:'Adicione seu modificador de Sabedoria ao dano de qualquer truque de clérigo.' },
        { nivel:17, nome:'Visões do Passado', icone:'🔮',
          desc:'Medite por minutos (máx. = valor de SAB) segurando um objeto ou num local: receba visões dos eventos passados. 1 uso por descanso curto ou longo.' },
      ]
    },
    trapaca: {
      nome: 'Domínio da Enganação',
      cor: '#4a80e8',
      icone: '🎭',
      habilidades: [
        { nivel:1, nome:'Bênção do Trapaceiro', icone:'🎲',
          desc:'Ação: toque uma criatura voluntária diferente de você — ela tem vantagem em testes de Destreza (Furtividade) por 1 hora. Funciona em apenas uma criatura por vez.' },
        { nivel:2, nome:'Canalizar Divindade: Invocar Duplicidade', icone:'👥',
          desc:'Ação: crie um dublê ilusório perfeito de você em até 9m por 1 min (concentração). Ação bônus para mover o dublê até 9m. Se você e o dublê flanquearem um inimigo, você tem vantagem nos ataques contra ele. Pode conjurar magias como se estivesse no local do dublê.' },
        { nivel:6, nome:'Canalizar Divindade: Manto de Sombras', icone:'🌑',
          desc:'Ação: fique invisível até o fim do seu próximo turno. A invisibilidade termina ao atacar ou conjurar uma magia.' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano de veneno extra. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Duplicidade Aprimorada', icone:'🌀',
          desc:'Ao usar Invocar Duplicidade, crie até 4 dublês em vez de 1. Ação bônus para mover qualquer número deles.' },
      ]
    },
    guerra: {
      nome: 'Domínio da Guerra',
      cor: '#4a80e8',
      icone: '⚔️',
      habilidades: [
        { nivel:1, nome:'Proficiência Adicional', icone:'🛡️',
          desc:'Você ganha proficiência com armas marciais e armaduras pesadas. Um clérigo da guerra pode estar na linha de frente.' },
        { nivel:1, nome:'Sacerdote da Guerra', icone:'🗡️',
          desc:'Ao usar a ação Atacar, pode fazer um ataque extra como ação bônus. Usos = mod. SAB (mín. 1) por descanso longo.' },
        { nivel:2, nome:'Canalizar Divindade: Ataque Dirigido', icone:'🎯',
          desc:'Ao fazer uma jogada de ataque, adicione +10 ao resultado. Você decide após ver o d20, mas antes de saber se acertou ou errou.' },
        { nivel:6, nome:'Canalizar Divindade: Bênção do Deus da Guerra', icone:'✨',
          desc:'Reação: quando uma criatura a até 9m fizer uma jogada de ataque, conceda +10 ao resultado (após ver o d20, antes do Mestre revelar o resultado).' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano extra do mesmo tipo da arma. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Avatar da Batalha', icone:'🌟',
          desc:'Resistência a dano contundente, cortante e perfurante de ataques não-mágicos. Perfeito para clérigos na linha de frente.' },
      ]
    },
    natureza: {
      nome: 'Domínio da Natureza',
      cor: '#4a80e8',
      icone: '🌿',
      habilidades: [
        { nivel:1, nome:'Acólito da Natureza', icone:'🌱',
          desc:'Aprenda 1 truque de druida. Ganhe proficiência em Adestrar Animais, Natureza ou Sobrevivência (à sua escolha).' },
        { nivel:1, nome:'Proficiência: Armadura Pesada', icone:'🛡️',
          desc:'Você ganha proficiência com armaduras pesadas.' },
        { nivel:2, nome:'Canalizar Divindade: Enfeitiçar Animais e Plantas', icone:'🐾',
          desc:'Ação: bestas e criaturas-planta visíveis em até 9m testam SAB vs. sua CD. As que falharem ficam enfeitiçadas por você por 1 min e são amistosas a você e a quem você designar.' },
        { nivel:6, nome:'Amortecer Elementos', icone:'🌊',
          desc:'Reação: quando você ou uma criatura a até 9m sofrer dano de ácido, frio, fogo, elétrico ou trovão, conceda resistência a esse tipo de dano para aquela criatura.' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano extra de frio, fogo ou elétrico (à sua escolha). No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Senhor da Natureza', icone:'🌳',
          desc:'Enquanto criaturas estiverem enfeitiçadas pela sua habilidade de Domínio, use ação bônus para ditar verbalmente o que cada uma fará no próximo turno.' },
      ]
    },
    tempestade: {
      nome: 'Domínio da Tempestade',
      cor: '#4a80e8',
      icone: '⛈️',
      habilidades: [
        { nivel:1, nome:'Proficiência Adicional', icone:'🛡️',
          desc:'Você ganha proficiência com armas marciais e armaduras pesadas.' },
        { nivel:1, nome:'Ira da Tormenta', icone:'⚡',
          desc:'Reação: ao ser acertado por criatura a 1,5m, force-a a testar DES vs. sua CD. Falha → 2d8 de dano elétrico ou trovejante (à sua escolha); sucesso → metade. Usos = mod. SAB (mín. 1) por descanso longo.' },
        { nivel:2, nome:'Canalizar Divindade: Ira Destruidora', icone:'💥',
          desc:'Ao rolar dano elétrico ou trovejante, use Canalizar Divindade para causar o valor máximo automaticamente — sem rolar os dados.' },
        { nivel:6, nome:'Golpe de Relâmpago', icone:'🌩️',
          desc:'Ao causar dano elétrico a uma criatura Grande ou menor, você também pode empurrá-la até 3m de você.' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano trovejante extra. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Filho da Tormenta', icone:'🌪️',
          desc:'Você ganha deslocamento de voo = seu deslocamento terrestre, desde que não esteja em espaço fechado ou subterrâneo.' },
      ]
    },
    morte: {
      nome: 'Domínio da Morte',
      cor: '#4a80e8',
      icone: '💀',
      habilidades: [
        { nivel:1, nome:'Proficiência: Armas Marciais', icone:'🗡️',
          desc:'Você ganha proficiência com armas marciais. Esta subclasse é voltada para vilões — converse com seu Mestre antes de escolhê-la.' },
        { nivel:1, nome:'Ceifador', icone:'☠️',
          desc:'Aprenda 1 truque de necromancia de qualquer lista de classe. Truques de necromancia que normalmente afetam 1 criatura podem afetar mais 1 criatura visível a até 1,5m da primeira.' },
        { nivel:2, nome:'Canalizar Divindade: Toque da Morte', icone:'💀',
          desc:'Ao acertar um ataque corpo a corpo, use Canalizar Divindade para causar dano necrótico extra = 5 + (2 × nível de clérigo).' },
        { nivel:6, nome:'Inimigo Indetectável', icone:'👻',
          desc:'Seus ataques ignoram resistências a dano de criaturas que não tenham visto você em seu turno atual.' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano necrótico extra. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Ceifador Aprimorado', icone:'🌑',
          desc:'Quando você ou um morto-vivo sob seu controle matar uma criatura com PV máximo ≤ 5 × nível de clérigo, ela se torna um zumbi sob seu controle no início do seu próximo turno.' },
      ]
    },
    ordem: {
      nome: 'Domínio da Ordem (Tasha)',
      cor: '#4a80e8',
      icone: '⚖️',
      habilidades: [
        { nivel:1, nome:'Proficiência: Armadura Pesada & Perícia', icone:'🛡️',
          desc:'Você ganha proficiência com armaduras pesadas. Escolha também proficiência em Intimidação ou Persuasão.' },
        { nivel:1, nome:'Voz de Autoridade', icone:'📣',
          desc:'Ao conjurar uma magia de 1° círculo ou superior que tenha um aliado como alvo, esse aliado pode usar a reação dele imediatamente para fazer um ataque com arma contra uma criatura que você possa ver.' },
        { nivel:2, nome:'Canalizar Divindade: Demanda da Ordem', icone:'⛓️',
          desc:'Ação: criaturas à sua escolha visíveis em até 9m testam SAB vs. sua CD. As que falharem ficam enfeitiçadas por você até o fim do seu próximo turno ou até receberem dano. Criaturas que falharem também soltam o que estiverem segurando.' },
        { nivel:6, nome:'Personificação da Lei', icone:'📜',
          desc:'Ao conjurar uma magia de encantamento com espaço de 1° círculo ou superior, pode mudar o tempo de conjuração para ação bônus. Usos = mod. SAB (mín. 1) por descanso longo.' },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano psíquico extra. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Ira da Ordem', icone:'🌟',
          desc:'Ao causar dano com Golpe Divino, amaldiçoe o alvo até o início do seu próximo turno. O próximo aliado que acertá-lo causa +2d8 de dano psíquico extra e a maldição se encerra. Uma maldição por turno.' },
      ]
    },
    paz: {
      nome: 'Domínio da Paz (Tasha)',
      cor: '#4a80e8',
      icone: '🕊️',
      habilidades: [
        { nivel:1, nome:'Implemento da Paz', icone:'🤝',
          desc:'Você ganha proficiência em Atuação, Intuição ou Persuasão (à sua escolha).' },
        { nivel:1, nome:'Vínculo Encorajador', icone:'🔗',
          desc:'Ação: crie um vínculo mágico entre criaturas voluntárias visíveis a até 9m (máx. = bônus de proficiência, pode incluir você). Por 10 min, cada criatura vinculada pode rolar 1d4 e somar a um ataque, teste ou salvaguarda (1 vez por turno cada).' },
        { nivel:2, nome:'Canalizar Divindade: Bálsamo da Paz', icone:'💚',
          desc:'Ação: mova-se até seu deslocamento sem provocar ataques de oportunidade. Ao passar a até 1,5m de criaturas, cure cada uma em 2d6 + mod. SAB (mín. 1 PV). Cada criatura só pode ser curada 1 vez por uso.' },
        { nivel:6, nome:'Vínculo de Proteção', icone:'🛡️',
          desc:'Quando uma criatura com Vínculo Encorajador ativo for atingida, outra criatura vinculada a até 9m pode usar reação: teleporta-se para 1,5m da primeira e recebe todo o dano no lugar dela.' },
        { nivel:8, nome:'Conjuração Poderosa', icone:'💥',
          desc:'Adicione seu modificador de Sabedoria ao dano de qualquer truque de clérigo.' },
        { nivel:17, nome:'Vínculo Expandido', icone:'🌐',
          desc:'Vínculo Encorajador e Vínculo de Proteção agora funcionam a até 18m (antes eram 9m). A criatura que absorver dano pelo Vínculo de Proteção ganha resistência a esse dano.' },
      ]
    },
    crepusculo: {
      nome: 'Domínio do Crepúsculo (Tasha)',
      cor: '#4a80e8',
      icone: '🌙',
      habilidades: [
        { nivel:1, nome:'Proficiência: Armas Marciais & Armadura Pesada', icone:'🛡️',
          desc:'Você ganha proficiência com armas marciais e armaduras pesadas.' },
        { nivel:1, nome:'Olhos da Noite', icone:'👁️',
          desc:'Visão no escuro a 90m. Ação: compartilhe com criaturas voluntárias visíveis a até 3m (máx. = mod. SAB, mín. 1) por 1 hora. Após compartilhar, só repete com descanso longo ou gastando um espaço de magia.' },
        { nivel:1, nome:'Benção da Vigilância', icone:'⚡',
          desc:'Ação: toque uma criatura — ela tem vantagem na próxima jogada de Iniciativa. O benefício termina após essa rolagem ou ao usar a habilidade novamente.' },
        { nivel:2, nome:'Canalizar Divindade: Santuário Crepuscular', icone:'🌅',
          desc:'Ação: crie uma esfera de penumbra de 9m de raio centrada em você por 1 min (move-se com você). Ao fim de cada turno dentro da esfera, dê a cada criatura (1 opção por criatura): PV temporários = 1d6 + nível de clérigo, OU remova 1 efeito de medo ou encantamento.' },
        { nivel:6, nome:'Passos da Noite', icone:'🌃',
          desc:'Ação bônus: em penumbra ou escuridão, conceda a si mesmo voo = deslocamento terrestre por 1 minuto. Usos = bônus de proficiência por descanso longo.',
          recarga:'longo', formula:'prof', id:'passos_noite',
          nota: (nivel) => `${getProfBonus(nivel)} usos · descanso longo` },
        { nivel:8, nome:'Golpe Divino', icone:'⚔️',
          desc:'Uma vez por turno, ao acertar com arma, cause 1d8 de dano radiante extra. No nível 14 aumenta para 2d8.' },
        { nivel:17, nome:'Véu das Sombras', icone:'🌌',
          desc:'Ação: conjure Escuridão em ponto visível a até 18m sem gastar espaço de magia. Você e criaturas que você escolher podem ver normalmente nessa escuridão. Recupera em descanso longo.' },
      ]
    },
  },
  monge: {
    'mao-aberta': {
      nome: 'Caminho da Mão Aberta',
      cor: '#78a858',
      icone: '🤚',
      habilidades: [
        { nivel:3, nome:'Técnica da Mão Aberta', icone:'👐', desc:'Ao acertar com Chuva de Golpes, imponha um efeito (sem custo de Ki): (1) criatura testa DES vs. CD ou cai prostrada; (2) criatura testa FOR vs. CD ou é empurrada 4,5m; (3) criatura não pode usar reações até o início do próximo turno dela.' },
        { nivel:6, nome:'Cura Completa', icone:'💚', desc:'Ação: gaste 3 Ki para curar PV próprios = 3 × nível de monge. Também pode encerrar uma dessas condições em você mesmo: cego, surdo, apavorado, envenenado ou paralisado.', recarga:'longo', formula:'1', id:'cura_completa_monge', nota:()=>'1 uso · descanso longo (custa 3 Ki)' },
        { nivel:11, nome:'Serenidade Tranquila', icone:'🧘', desc:'Durante um descanso curto, entre em meditação profunda. Ao terminar, recebe os benefícios de Santuário durando até o início do próximo turno (CD = sua CD de Ki).' },
        { nivel:17, nome:'Palma Estremecedora', icone:'💥', desc:'Ao acertar desarmado, gaste 1 Ki: em até 24h, use sua ação para ativar tremores no alvo — sofre 10d10 necrótico. Se tiver PV menores que seu Ki total, morre. 1 alvo por vez.', recarga:'longo', formula:'1', id:'palma_estremecedora', nota:()=>'1 alvo por vez · ativado em até 24h' },
      ]
    },
    sombra: {
      nome: 'Caminho da Sombra',
      cor: '#78a858',
      icone: '🌑',
      habilidades: [
        { nivel:3, nome:'Artes das Sombras', icone:'🌑', desc:'Gaste 2 Ki para lançar (sem comp. materiais): Escuridão, Visão no Escuro, Passe sem Rastro (sem concentração) ou Silêncio.' },
        { nivel:6, nome:'Passo das Sombras', icone:'🌫️', desc:'Ação bônus: em penumbra ou escuridão, teletransporte-se para espaço visível em até 18m (também em penumbra/escuridão). Próximo ataque corpo a corpo neste turno com vantagem.' },
        { nivel:11, nome:'Manto das Sombras', icone:'👤', desc:'Ação: em penumbra ou escuridão, fique Invisível. Termina ao mover para área iluminada, atacar ou conjurar.' },
        { nivel:17, nome:'Oportunista das Sombras', icone:'⚡', desc:'Reação: quando criatura adjacente for atingida por ataque de outro, faça um ataque corpo a corpo contra ela.' },
      ]
    },
    'quatro-elementos': {
      nome: 'Caminho dos Quatro Elementos',
      cor: '#78a858',
      icone: '🌊',
      habilidades: [
        { nivel:3, nome:'Discípulo dos Elementos', icone:'🌊', desc:'Aprenda 2 disciplinas elementais — técnicas que usam Ki para lançar magias de fogo, água, terra e ar. Exemplos nv3: Punho de Fogo (1 Ki → Mãos Flamejantes), Onda de Terra (2 Ki → Trovão), Sopro Glacial (2 Ki → Gelo).' },
        { nivel:6, nome:'Disciplinas Elementais (nv6)', icone:'🌪️', desc:'Aprenda 1 disciplina adicional (total: 3). Acessa disciplinas até 3 Ki: Braços da Maré (Controlar Água), Forma do Vento (Voar), Língua do Fogo (Bola de Fogo), Mármore de Pedra (Muro de Pedra).' },
        { nivel:11, nome:'Disciplinas Elementais (nv11)', icone:'⚡', desc:'Aprenda 1 disciplina adicional (total: 4). Acessa disciplinas até 4 Ki: Punho dos Trovões (Invocar Raios), Manto Flameante (Parede de Fogo), Passeio pelo Vento (Controlar Ventos).' },
        { nivel:17, nome:'Disciplinas Elementais (nv17)', icone:'🌍', desc:'Aprenda 1 disciplina adicional (total: 5). Acessa disciplinas até 5 Ki: Avatar dos Elementos (5 Ki → Invocar Elemental), Ser do Ar, Ser da Terra, Ser da Água, Ser do Fogo.' },
      ]
    },
    misericordia: {
      nome: 'Caminho da Misericórdia (Tasha)',
      cor: '#78a858',
      icone: '🩹',
      habilidades: [
        { nivel:3, nome:'Médico do Corpo e da Mente', icone:'🩺', desc:'Proficiência em Medicina e Perspicácia. Aprende Élfico ou Goblin. Ao usar Chuva de Golpes: pode curar 1d10 + mod. SAB + nível (1x/criatura por descanso) ou infligir Envenenado até o início do próximo turno.' },
        { nivel:6, nome:'Médico das Doenças', icone:'🌿', desc:'Ao usar Chuva de Golpes, gaste 1 Ki extra (total 2 Ki) para remover doença ou Envenenado de criatura em 1,5m.' },
        { nivel:11, nome:'Caminhar com a Morte', icone:'💀', desc:'Ao reduzir criatura a 0 PV com ataque, gaste 1 Ki: recupere PV = dano do ataque final.' },
        { nivel:17, nome:'Mãos da Morte', icone:'🖐️', desc:'Ao acertar, ação bônus + 1 Ki: alvo testa CON vs. CD ou fica Paralisado por 1 min (save ao fim de cada turno).', recarga:'curto', formula:'ki', id:'maos_morte', nota:(nivel)=>`Custa 1 dos seus ${nivel} Ki · paralisação 1 min` },
      ]
    },
    astral: {
      nome: 'Caminho da Forma Astral (Tasha)',
      cor: '#78a858',
      icone: '🌟',
      habilidades: [
        { nivel:3, nome:'Braços do Eu Astral', icone:'💪', desc:'Ação bônus: gaste Ki (= metade do nível, arredondado) para invocar braços espirituais por 10 min. Alcance 3m, dano 1d6 força (1d8 nv11+). Use SAB como mod. de ataque/dano.', recarga:'longo', formula:'1', id:'bracos_astral', nota:(nivel)=>`Ativar custa ${Math.ceil(nivel/2)} Ki · dura 10 min` },
        { nivel:6, nome:'Visage do Eu Astral', icone:'😤', desc:'Enquanto Braços Astrais ativos e você usar Ki para Chuva de Golpes: reação para rolar 1d6 e adicionar à salvaguarda sua ou de aliado em 3m.' },
        { nivel:11, nome:'Corpo do Eu Astral', icone:'🛡️', desc:'Enquanto Braços ativos: resistência a dano contundente/cortante/perfurante não-mágico; ao acertar, causa 1d10 de força em criaturas adicionais em 3m do alvo.' },
        { nivel:17, nome:'Forma Astral Aprimorada', icone:'✨', desc:'Braços Astrais ganham asas: deslocamento de voo 18m enquanto ativos. Pode usar Passo do Vento como ação bônus enquanto a Forma estiver ativa.' },
      ]
    },
  },
  druida: {
    terra: {
      nome: 'Círculo da Terra',
      cor: '#5a9830',
      icone: '🗻',
      habilidades: [
        { nivel:2, nome:'Truques Bônus', icone:'📜', desc:'Aprenda 1 truque extra de druida à sua escolha — não conta no limite de truques.' },
        { nivel:2, nome:'Recuperação Natural', icone:'🌿', desc:'Descanso curto: recupere espaços de magia gastos. Total de níveis recuperados ≤ metade do nível de druida arredondado (máx. espaço de 5°). 1x por descanso longo.', recarga:'longo', formula:'1', id:'recuperacao_natural', nota:(nivel)=>`Recupera até ${Math.ceil(nivel/2)} nível(eis) de espaços · 1x/descanso longo` },
        { nivel:2, nome:'Magias do Círculo', icone:'🗺️', desc:'Magias sempre preparadas baseadas no terreno do seu círculo (Ártico, Litoral, Deserto, Floresta, Pradaria, Montanha, Pântano ou Subsolo — PHB p.69). Não contam no limite de preparação.' },
        { nivel:6, nome:'Passo pela Terra', icone:'🌾', desc:'Terreno difícil não mágico não custa movimento extra. Você não deixa rastros e não pode ser rastreado por meios não mágicos (a menos que queira).' },
        { nivel:10, nome:'Mente Protegida pela Natureza', icone:'🧠', desc:'Você não pode ser enfeitiçado nem amedrontado por criaturas do tipo corruptor ou feérico. Imunidade ao efeito mágico de sono.' },
        { nivel:14, nome:'Santuário da Natureza', icone:'🛡️', desc:'Bestas e criaturas-planta têm desvantagem em ataques contra você. Se quiserem atacar, testam SAB vs. sua CD de magia ou perdem o ataque naquele turno.' },
      ]
    },
    lua: {
      nome: 'Círculo da Lua',
      cor: '#5a9830',
      icone: '🌙',
      habilidades: [
        { nivel:2, nome:'Forma Selvagem de Combate', icone:'🐻', desc:'Forma Selvagem agora usa ação bônus (não ação completa). CR máximo sobe para 1 já no nível 2, sem restrições de natação/voo.' },
        { nivel:2, nome:'Formas Lunares', icone:'🌕', desc:'Em Forma Selvagem, gaste 1 uso adicional para trocar de forma sem voltar à forma normal — permite troca rápida em combate.' },
        { nivel:6, nome:'Golpe Primitivo', icone:'⚔️', desc:'Ataques corpo a corpo de todas as formas animais contam como mágicos, superando resistências a dano não mágico.' },
        { nivel:10, nome:'Forma Elementar', icone:'🔥', desc:'Gaste 2 usos de Forma Selvagem para se transformar em Elemental do Ar, Terra, Fogo ou Água (blocos de estatísticas do Manual dos Monstros).' },
        { nivel:14, nome:'Forma Transcendente', icone:'✨', desc:'Ao chegar a 0 PV na forma animal, gaste 4 PV de magia para permanecer com 1 PV. Ao entrar em Forma Selvagem, recupere PV = 2 × nível de druida (1x/turno).' },
      ]
    },
    esporos: {
      nome: 'Círculo dos Esporos (Tasha)',
      cor: '#5a9830',
      icone: '🍄',
      habilidades: [
        { nivel:2, nome:'Halo de Esporos', icone:'💚', desc:'Reação: quando criatura em 3m se mover, atacar ou agir, libere esporos — ela testa CON vs. CD ou sofre 1d4 necrótico (1d6 nv6, 1d8 nv10, 1d10 nv14).' },
        { nivel:2, nome:'Simbiose de Esporos', icone:'🌫️', desc:'Ação bônus: envolva-se em esporos por 10 min — PV temporários = 4 + mod. SAB; ataques corpo a corpo causam +1d6 necrótico.', recarga:'longo', formula:'prof', id:'simbiose_esporos', nota:(nivel)=>`${getProfBonus(nivel)} usos · descanso longo` },
        { nivel:6, nome:'Fungos Animadores', icone:'💀', desc:'Lance Animar Mortos sem gastar espaço 1x/descanso longo. Os mortos ganham PV temporários = nível de druida.' },
        { nivel:10, nome:'Halo de Esporos Aprimorado', icone:'🟢', desc:'Alcance sobe para 6m, dano para 1d8. Criaturas que falharem ficam lentificadas (vel. ÷2) até o início do seu próximo turno.' },
        { nivel:14, nome:'Controle de Esporos', icone:'🧟', desc:'Ao matar criatura Média/Pequena com Halo de Esporos, animate-a como ação bônus sem gastar recursos. Dura 1h ou até criar outra.' },
      ]
    },
    estrelas: {
      nome: 'Círculo das Estrelas (Tasha)',
      cor: '#5a9830',
      icone: '⭐',
      habilidades: [
        { nivel:2, nome:'Mapa Estelar', icone:'🗺️', desc:'Foco druídico. Enquanto segura: (1) ação bônus, aliado em 18m adiciona 1d4 a teste de INT/SAB; (2) Augúrio sem comp. materiais. 1 uso cada por descanso longo. Aprende o truque Orientação.' },
        { nivel:2, nome:'Forma Cósmica', icone:'🌌', desc:'Ação bônus: Forma Cósmica por 10 min. Escolha: Arqueiro (+1d8 radiante em truques), Cálice (+1d8 PV em curas), Dragão (Raio Sagrado como ação bônus, 2d6 radiante).', recarga:'longo', formula:'1', id:'forma_cosmica', nota:()=>'1 uso · descanso longo' },
        { nivel:6, nome:'Brilho Cintilante', icone:'💫', desc:'Na Forma Cósmica, aura de luz de 3m. Quem acertar você testa DES vs. CD ou fica cego até o início do próximo turno.' },
        { nivel:10, nome:'Alma das Estrelas', icone:'🌠', desc:'Forma Cósmica agora tem 2 usos/descanso longo. Ao rolar iniciativa com 0 usos, recupera 1 automaticamente.' },
        { nivel:14, nome:'Corpo da Esfera', icone:'🔭', desc:'Na Forma Cósmica, criaturas na aura (3m) têm desvantagem em ataques contra você. Resistência a dano radiante e necrótico.' },
      ]
    },
    'fogo-selvagem': {
      nome: 'Círculo do Fogo Selvagem (Tasha)',
      cor: '#5a9830',
      icone: '🔥',
      habilidades: [
        { nivel:2, nome:'Espírito do Fogo Selvagem', icone:'🌱', desc:'Ao usar Forma Selvagem, pode invocar um Espírito flamejante Pequeno em 1,5m. Age na sua iniciativa; ação bônus para comandar. Causa 1d6 fogo a criaturas adjacentes que começam o turno perto.', recarga:'curto', formula:'2', id:'espirito_fogo', nota:()=>'2 usos · descanso curto (compartilhado com Forma Selvagem)' },
        { nivel:2, nome:'Magias do Fogo Selvagem', icone:'📜', desc:'Sempre preparadas (não contam no limite): Abenção, Cura Ferimentos, Cântico de Cura Menor, Encontrar Armadilhas, Invocar Raios, Parede de Fogo, Invocar Criatura IV, Tempestade de Fogo.' },
        { nivel:6, nome:'Chama Protetora', icone:'🛡️', desc:'Com Espírito ativo: você e aliados em 3m dele têm resistência a fogo; ataques contra criaturas adjacentes ao espírito têm desvantagem.' },
        { nivel:10, nome:'Chama da Cura', icone:'💗', desc:'Ao lançar magia de 1°+ que cura PV, o Espírito causa dano de fogo a criaturas hostis em 1,5m = mod. SAB + bônus de proficiência.' },
        { nivel:14, nome:'Renascimento das Chamas', icone:'🦅', desc:'Ao cair a 0 PV com Espírito ativo, reação: ele explode. Criaturas em 3m testam DES vs. CD ou sofrem 10d10 fogo (metade em sucesso). Você retorna com 1 PV.', recarga:'longo', formula:'1', id:'renascimento_chamas', nota:()=>'1 uso · descanso longo' },
      ]
    },
  },
};

const HABILIDADES_ESPECIAIS = {
  barbaro: {
    nome: 'Habilidades de Bárbaro', nome_en: 'Barbarian Features',
    icone: '⚡',
    cor: '#cc3a1a',
    habilidades: [
      {
        nivel:1, nome:'Fúria', nome_en:'Rage', icone:'😤',
        desc:'Ação bônus: entre em Fúria. Dura 1 minuto. Bônus de dano: +2 (nv1-8), +3 (nv9-15), +4 (nv16+). Resistência a dano contundente, cortante e perfurante. Não pode conjurar ou concentrar magias. Encerra se não atacar ou ser atacado.',
        recarga:'longo', formula:'raiva', id:'furia',
        nota: (nivel) => `${calcularUsos('raiva', nivel, 'barbaro')} usos · descanso longo${nivel>=20?' (ilimitado nv20)':''}`
      },
      { nivel:1, nome:'Defesa Sem Armadura', nome_en:'Unarmored Defense', icone:'🛡️', desc:'Enquanto não usa armadura: CA = 10 + mod. Destreza + mod. Constituição. Pode usar escudo normalmente.' },
      { nivel:2, nome:'Ataque Imprudente', nome_en:'Reckless Attack', icone:'⚔️', desc:'No início do turno, pode optar por Ataque Imprudente. Vantagem em ataques com Força este turno, mas inimigos têm vantagem contra você até o início do próximo turno.' },
      { nivel:2, nome:'Sentido de Perigo', nome_en:'Danger Sense', icone:'👁️', desc:'Vantagem em testes de resistência de Destreza contra efeitos visíveis (armadilhas, magias, etc.). Funciona mesmo cego ou se a visão estiver prejudicada.' },
      { nivel:3, nome:'Caminho Primitivo', nome_en:'Primal Path', icone:'🐾', desc:'Escolha sua subclasse. Veja a aba de Subclasse para as habilidades da sua escolha.' },
      { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Ataque duas vezes ao usar a ação Atacar.' },
      { nivel:5, nome:'Movimento Rápido', nome_en:'Fast Movement', icone:'💨', desc:'Seu deslocamento aumenta em 3m (10 pés) enquanto não usa armadura pesada.' },
      { nivel:7, nome:'Instinto Feral', nome_en:'Feral Instinct', icone:'🐺', desc:'Vantagem em jogadas de iniciativa. Se surpreendido no 1º turno: entre em Fúria como reação antes de agir (age normalmente).' },
      { nivel:9, nome:'Crítico Brutal', nome_en:'Brutal Critical', icone:'💥', desc:'Crítico com ataque corpo-a-corpo: role +1 dado de dano da arma. Dois dados extras (nv13), três dados extras (nv17).' },
      { nivel:11, nome:'Fúria Implacável', nome_en:'Relentless Rage', icone:'🔥', desc:'Se cair a 0 PV enquanto furioso: teste de CON (CD 10). Sucesso: fica com 1 PV. A CD aumenta +5 a cada uso no mesmo descanso.' },
      { nivel:15, nome:'Poder Persistente', nome_en:'Persistent Rage', icone:'🌟', desc:'Sua Fúria dura até o fim do combate, não requer ataques contínuos para se manter.' },
      { nivel:20, nome:'Campeão Primitivo', nome_en:'Primal Champion', icone:'👑', desc:'FOR e CON aumentam +4, máximo de 24 para esses atributos. Você torna-se uma lenda.' },
    ]
  },
  monge: {
    nome: 'Habilidades de Monge', nome_en: 'Monk Features',
    icone: '🥋',
    cor: '#78a858',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Defesa Sem Armadura', nome_en:'Unarmored Defense', icone:'🛡️', desc:'Enquanto não usar armadura nem escudo, sua CA = 10 + mod. Destreza + mod. Sabedoria. Sua disciplina mental protege seu corpo.' },
      { nivel:1, nome:'Artes Marciais', nome_en:'Martial Arts', icone:'👊', desc:'Seus ataques desarmados e com armas de monge usam d4 de dano (escala: d6 nv5, d8 nv11, d10 nv17). Você pode usar DES em vez de FOR para atacar e causar dano. Ao atacar com arma de monge ou desarmado, pode fazer 1 ataque desarmado como ação bônus.' },
      // Nível 2
      { nivel:2, nome:'Ki', nome_en:'Ki', icone:'✨', desc:'Você canaliza energia mística interna chamada Ki. Pontos de Ki = seu nível de monge. CD de Ki = 8 + bônus de proficiência + mod. Sabedoria. Recupera todos os Ki em descanso curto ou longo.', recarga:'curto', formula:'ki', id:'ki', nota:(nivel)=>`${nivel} pontos de Ki · descanso curto` },
      { nivel:2, nome:'Chuva de Golpes', nome_en:'Flurry of Blows', icone:'⚡', desc:'Ação bônus: gaste 1 Ki para fazer 2 ataques desarmados. É uma das principais fontes de dano do monge — combina com a ação de Ataque para 3 golpes no total.' },
      { nivel:2, nome:'Passo do Vento', nome_en:'Step of the Wind', icone:'💨', desc:'Ação bônus: gaste 1 Ki para Desengajar ou Disparada. Nesse turno, saltar não custa movimento extra. Você se move como o vento — livre, imparável.' },
      { nivel:2, nome:'Queda Lenta', nome_en:'Slow Fall', icone:'🍃', desc:'Reação: reduza o dano de queda em 5 × nível de monge. Quando estiver adjacente a uma parede, você simplesmente não cai — sua concentração detém a queda.' },
      // Nível 3
      { nivel:3, nome:'Desviar Projéteis', nome_en:'Deflect Missiles', icone:'🏹', desc:'Reação: quando atingido por um projétil, reduza o dano em 1d10 + mod. Destreza + nível de monge. Se reduzir a 0, pode gastar 1 Ki para devolver o projétil como ataque (alcance 6/18m, mesmo dano do original).' },
      { nivel:3, nome:'Caminho Monástico', nome_en:'Monastic Tradition', icone:'🏛️', desc:'Escolha sua subclasse na aba Subclasse. Opções: Mão Aberta, Sombra, Quatro Elementos (PHB), Misericórdia e Forma Astral (Tasha). As habilidades chegam nos níveis 3, 6, 11 e 17.' },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos ou 2 atributos em 1 ponto cada. Máximo de 20. Repete nos níveis 8, 12, 16 e 19.' },
      { nivel:4, nome:'Golpe Atordoante', nome_en:'Stunning Strike', icone:'💫', desc:'Ao acertar um ataque com arma de monge ou desarmado, gaste 1 Ki: o alvo faz um teste de Constituição contra sua CD de Ki ou fica Atordoado até o início do seu próximo turno (sem ações, nem reações, ataques contra ele com vantagem).' },
      // Nível 5
      { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Você ataca duas vezes ao usar a ação Atacar. Combinado com Chuva de Golpes, você pode fazer 3 ataques por turno.' },
      // Nível 6
      { nivel:6, nome:'Golpes Ki-Aprimorados', nome_en:'Ki-Empowered Strikes', icone:'🌟', desc:'Seus ataques desarmados contam como mágicos para superar resistências e imunidades a dano não mágico.' },
      // Nível 7
      { nivel:7, nome:'Evasão', nome_en:'Evasion', icone:'💨', desc:'Quando sujeito a efeito que pede teste de Destreza (bola de fogo, área de magia): se passar no teste, não sofre dano nenhum; se falhar, sofre apenas metade. Em vez de se proteger, você simplesmente sai do caminho.' },
      { nivel:7, nome:'Serenidade', nome_en:'Stillness of Mind', icone:'🧘', desc:'Você não pode ser enfeitiçado nem amedrontado. Sua mente é uma fortaleza — nada abala sua concentração interior.' },
      // Nível 8
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: aumente 1 atributo em 2 ou 2 atributos em 1 cada. Máximo 20.' },
      // Nível 9
      { nivel:9, nome:'Movimento Sem Armadura Aprimorado', nome_en:'Improved Unarmored Movement', icone:'🏃', desc:'Você pode mover-se sobre superfícies líquidas e paredes verticais sem cair — desde que comece e termine seu turno em superfície sólida. Nível 9 já tinha o aumento de velocidade.' },
      // Nível 10
      { nivel:10, nome:'Pureza do Corpo', nome_en:'Purity of Body', icone:'💚', desc:'Sua maestria do Ki o torna imune a doenças e venenos.' },
      // Nível 11
      { nivel:11, nome:'Visão da Língua do Sol', nome_en:'Tongue of the Sun and Moon', icone:'👁️', desc:'Você pode ler e falar todos os idiomas escritos e falados.' },
      // Nível 12
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 13
      { nivel:13, nome:'Alma do Sol', nome_en:'Diamond Soul', icone:'☀️', desc:'Você pode passar por espaços tão estreitos como 1 centímetro sem se apertar — seu corpo se torna etéreo no plano astral momentaneamente para atravessar.' },
      // Nível 14
      { nivel:14, nome:'Mente de Diamante', nome_en:'Timeless Body', icone:'💎', desc:'Quando fizer um teste de habilidade e não tiver proficiência, você pode gastar 1 Ki para adicionar o seu bônus de proficiência ao teste.' },
      // Nível 15
      { nivel:15, nome:'Corpo Eterno', nome_en:'Timeless Body', icone:'♾️', desc:'Você para de envelhecer biologicamente. Você não pode ser envelhecido por magia. Sua expectativa de vida é indefinida. Não precisa mais comer ou beber (embora ainda possa).' },
      // Nível 16
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 18
      { nivel:18, nome:'Corpo Vazio', nome_en:'Empty Body', icone:'👻', desc:'Ação: gaste 4 Ki para ser Invisível por 1 minuto. Durante esse tempo, você também tem resistência a todos os danos EXCETO dano de força.' },
      // Nível 19
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 20
      { nivel:20, nome:'Ser Perfeito', nome_en:'Perfect Self', icone:'👑', desc:'No início do turno, se você tiver 0 Ki, recupera 4 Ki automaticamente. Você atingiu a perfeição — o Ki nunca o abandona.' },
    ]
  },
  ladino: {
    nome: 'Furtividade & Ardis', nome_en: 'Stealth & Cunning',
    icone: '🗡️',
    cor: '#8050b8',
    habilidades: [
      { nivel:1, nome:'Especialização', nome_en:'Expertise', icone:'🎓', desc:'Dobre o bônus de proficiência em 2 perícias à sua escolha (ou 1 perícia + ferramentas de ladrão). No 6° nível, escolha mais 2 proficiências para ganhar o mesmo benefício.' },
      { nivel:1, nome:'Ataque Furtivo', nome_en:'Sneak Attack', icone:'🗡️', desc:'Uma vez por turno, adicione dados de dano extra ao acertar um ataque com arma de acuidade ou à distância, quando tiver vantagem ou quando um aliado estiver adjacente ao alvo (sem desvantagem). Escala: 1d6 (nv1) → 2d6 (nv3) → 3d6 (nv5) → 4d6 (nv7) → 5d6 (nv9) → 6d6 (nv11) → 7d6 (nv13) → 8d6 (nv15) → 9d6 (nv17) → 10d6 (nv19).' },
      { nivel:1, nome:'Gíria de Ladrão', nome_en:"Thieves' Cant", icone:'🤫', desc:'Você conhece a gíria secreta dos ladrões — transmita mensagens ocultas em conversas aparentemente normais. Também reconhece sinais e símbolos secretos usados por ladrões (área perigosa, território de guilda, alvo fácil, etc.).' },
      { nivel:2, nome:'Ação Ardilosa', nome_en:'Cunning Action', icone:'⚡', desc:'Ação bônus em cada turno durante o combate: use para Disparada, Desengajar ou Esconder.' },
      { nivel:3, nome:'Arquétipo de Ladino', nome_en:'Roguish Archetype', icone:'🎭', desc:'Escolha seu arquétipo. Veja a aba de Subclasse para as habilidades da sua escolha.' },
      { nivel:5, nome:'Esquiva Sobrenatural', nome_en:'Uncanny Dodge', icone:'🌀', desc:'Reação: quando um inimigo que você possa ver o acerta com um ataque, reduza o dano pela metade.' },
      { nivel:7, nome:'Evasão', nome_en:'Evasion', icone:'💨', desc:'Testes de resistência de Destreza contra efeitos em área: nenhum dano se bem-sucedido, metade do dano se falhar.' },
      { nivel:11, nome:'Talento Confiável', nome_en:'Reliable Talent', icone:'🃏', desc:'Em todo teste de habilidade no qual você possa adicionar o bônus de proficiência, trate qualquer resultado de 9 ou menos no d20 como 10.' },
      { nivel:14, nome:'Sentido Cego', nome_en:'Blindsense', icone:'👂', desc:'Se você puder ouvir, você está ciente da localização de qualquer criatura escondida ou invisível a até 3m de você.' },
      { nivel:15, nome:'Mente Escorregadia', nome_en:'Slippery Mind', icone:'🧠', desc:'Você adquire proficiência nos testes de resistência de Sabedoria.' },
      { nivel:18, nome:'Elusivo', nome_en:'Elusive', icone:'🌫️', desc:'Nenhuma jogada de ataque tem vantagem contra você, desde que você não esteja incapacitado.' },
      {
        nivel:20, nome:'Golpe de Sorte', nome_en:'Stroke of Luck', icone:'🍀',
        desc:'Se um ataque seu falhar contra um alvo ao seu alcance, transforme essa falha em um acerto. Ou se falhar em um teste qualquer, trate a rolagem como 20 natural. Recupera em descanso curto ou longo.',
        recarga:'curto', formula:'1', id:'golpe_sorte',
        nota: () => '1 uso por descanso curto ou longo'
      },
    ]
  },
  guerreiro: {
    nome: 'Maestria Marcial', nome_en: 'Martial Mastery',
    icone: '⚔️',
    cor: '#b83828',
    habilidades: [
      // ── Nível 1 ──
      { nivel:1, nome:'Estilo de Combate', nome_en:'Fighting Style', icone:'🛡️', desc:'Escolha um bônus passivo permanente que define seu jeito de lutar. Arquearia: +2 em ataques à distância. Defesa: +1 de CA enquanto usar armadura. Duelo: +2 de dano quando lutar com uma arma numa mão e a outra mão livre. Arma Grande: relance resultados 1 ou 2 no dado de dano de armas de duas mãos. Proteção: reação para impor desvantagem num atacante que mire um aliado adjacente a você (requer escudo). Duas Armas: adicione seu modificador de Força ou Destreza ao dano da arma da mão secundária.' },
      {
        nivel:1, nome:'Retomar Fôlego', nome_en:'Second Wind', icone:'💪',
        desc:'Ação bônus: você se recupera instantaneamente em combate, recuperando 1d10 + seu nível de guerreiro em pontos de vida. É puro instinto e treinamento — não precisa parar para descansar.',
        recarga:'curto', formula:'1', id:'retomar_folego',
        nota: () => '1 uso · descanso curto'
      },
      // ── Nível 2 ──
      {
        nivel:2, nome:'Surto de Ação', nome_en:'Action Surge', icone:'⚡',
        desc:'Uma vez por descanso curto, tome uma ação extra além da ação normal no seu turno. Isso permite atacar duas vezes (com Ataque Extra, quatro vezes!), conjurar e atacar, ou qualquer combinação. A partir do nível 17, você tem 2 usos por descanso curto.',
        recarga:'curto', formula:'surto', id:'surto_acao',
        nota: (nivel) => `${calcularUsos('surto', nivel, 'guerreiro')} uso(s) · descanso curto`
      },
      // ── Nível 3 ──
      { nivel:3, nome:'Arquétipo Marcial', nome_en:'Martial Archetype', icone:'🏛️', desc:'Escolha sua especialização de combate. Veja a aba Subclasse — o arquétipo define se você é um lutador clássico (Campeão), estrategista (Mestre de Batalha), guerreiro mágico (Cavaleiro Arcano) ou outra especialização. Você recebe habilidades nos níveis 3, 7, 10, 15 e 18.' },
      // ── Nível 4 ──
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Nenhum atributo pode ultrapassar 20. O guerreiro é a classe que mais recebe este bônus no jogo — repete nos níveis 6, 8, 12, 14, 16 e 19.' },
      // ── Nível 5 ──
      { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Você pode atacar duas vezes (em vez de uma) sempre que usar a ação Atacar. Isso dobra sua produção de dano em combate. A partir do nível 11, são três ataques; a partir do nível 20, quatro ataques por turno.' },
      // ── Nível 6 ──
      { nivel:6, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: aumente 1 atributo em 2, ou 2 atributos em 1 cada. Máximo 20.' },
      // ── Nível 7 ──
      { nivel:7, nome:'Habilidade do Arquétipo (nível 7)', nome_en:'Martial Archetype Feature (7)', icone:'🏛️', desc:'Seu arquétipo marcial concede uma nova habilidade especializada. Veja a aba Subclasse para os detalhes da sua escolha.' },
      // ── Nível 8 ──
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 atributos em 1 cada. Máximo 20.' },
      // ── Nível 9 ──
      {
        nivel:9, nome:'Indomável', nome_en:'Indomitable', icone:'🔥',
        desc:'Quando você falhar em um teste de resistência, pode optar por refazê-lo — e deve aceitar o novo resultado. Uma ferramenta vital contra magias como Paralisia, Enfeitiçar e Atordoamento. Dois usos a partir do nível 13; três usos a partir do nível 17.',
        recarga:'longo', formula:'indomavel', id:'indomavel',
        nota: (nivel) => `${calcularUsos('indomavel', nivel, 'guerreiro')} uso(s) · descanso longo`
      },
      // ── Nível 10 ──
      { nivel:10, nome:'Habilidade do Arquétipo (nível 10)', nome_en:'Martial Archetype Feature (10)', icone:'🏛️', desc:'Terceira habilidade do seu arquétipo. Veja a aba Subclasse.' },
      // ── Nível 11 ──
      { nivel:11, nome:'Ataque Extra (3×)', nome_en:'Extra Attack (3×)', icone:'⚔️', desc:'Agora você pode atacar três vezes ao usar a ação Atacar. Combinado com Surto de Ação, isso representa até seis ataques em um único turno — o pico do treinamento marcial.' },
      // ── Nível 12 ──
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // ── Nível 13 ──
      { nivel:13, nome:'Indomável (2 usos)', nome_en:'Indomitable (2 uses)', icone:'🔥', desc:'Indomável agora tem 2 usos por descanso longo. Você pode refazer até dois testes de resistência falhos entre cada descanso longo.' },
      // ── Nível 14 ──
      { nivel:14, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // ── Nível 15 ──
      { nivel:15, nome:'Habilidade do Arquétipo (nível 15)', nome_en:'Martial Archetype Feature (15)', icone:'🏛️', desc:'Quarta habilidade do seu arquétipo. Veja a aba Subclasse.' },
      // ── Nível 16 ──
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Sexto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20. O guerreiro tem mais incrementos do que qualquer outra classe.' },
      // ── Nível 17 ──
      { nivel:17, nome:'Surto de Ação (2 usos)', nome_en:'Action Surge (2 uses)', icone:'⚡', desc:'Surto de Ação agora tem 2 usos por descanso curto — você pode tomar duas ações extras em um combate antes de precisar descansar. Combinado com Ataque Extra (3×), isso significa até oito ataques em dois turnos.' },
      { nivel:17, nome:'Indomável (3 usos)', nome_en:'Indomitable (3 uses)', icone:'🔥', desc:'Indomável agora tem 3 usos por descanso longo. Você pode refazer até três testes de resistência falhos por descanso longo.' },
      // ── Nível 18 ──
      { nivel:18, nome:'Habilidade do Arquétipo (nível 18)', nome_en:'Martial Archetype Feature (18)', icone:'🏛️', desc:'Quinta e última habilidade do seu arquétipo. Veja a aba Subclasse.' },
      // ── Nível 19 ──
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Sétimo incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // ── Nível 20 ──
      { nivel:20, nome:'Ataque Extra (4×)', nome_en:'Extra Attack (4×)', icone:'⚔️', desc:'Você pode atacar quatro vezes ao usar a ação Atacar. Com Surto de Ação ativo, isso significa até oito ataques em um único turno — o nível máximo de destruição marcial no jogo.' },
    ]
  },
  paladino: {
    nome: 'Dons Sagrados', nome_en: 'Sacred Gifts',
    icone: '✨',
    cor: '#e8c030',
    habilidades: [
      // Nível 1
      {
        nivel:1, nome:'Sentido Divino', nome_en:'Divine Sense', icone:'👁️',
        desc:'Ação: sinta a presença de celestiais (seres sagrados), corruptores (demônios) e mortos-vivos num raio de 18m. Você sabe o tipo da criatura mas não sua identidade. Também detecta lugares e objetos consagrados ou profanados. Recupera todos os usos após descanso longo.',
        recarga:'longo', formula:'sentido_divino', id:'sentido_divino',
        nota: (nivel) => `${calcularUsos('sentido_divino', nivel, 'paladino')} usos por descanso longo`
      },
      { nivel:1, nome:'Cura pelas Mãos', nome_en:'Lay on Hands', icone:'🙏', desc:'Você possui uma reserva de cura sagrada com PV totais = seu nível × 5. Ação: toque uma criatura e transfira qualquer quantidade de PV da reserva para ela. Alternativamente, gaste 5 PV para curar uma doença ou neutralizar um veneno na criatura (pode curar vários na mesma ação). Não funciona em mortos-vivos e constructos. A reserva se reabastece após descanso longo.' },
      // Nível 2
      { nivel:2, nome:'Estilo de Combate', nome_en:'Fighting Style', icone:'🛡️', desc:'Escolha permanentemente um estilo especializado: Defesa (+1 CA com armadura), Duelo (+2 dano com arma a uma mão), Armas Grandes (relance em dano com armas de duas mãos), ou Proteção (reação: imponha desvantagem num ataque contra aliado adjacente se você tiver escudo).' },
      { nivel:2, nome:'Conjuração', nome_en:'Spellcasting', icone:'📜', desc:'Você aprende a conjurar magias usando Carisma. Prepara magias da lista de paladino diariamente (Carisma + metade do nível, mínimo 1). Seus espaços de magia se recuperam após descanso longo.' },
      {
        nivel:2, nome:'Destruição Divina', nome_en:'Divine Smite', icone:'⚡',
        desc:'Ao acertar um ataque corpo-a-corpo com arma, gaste um espaço de magia para adicionar dano radiante: +2d8 (espaço 1°), +3d8 (2°), +4d8 (3°), +5d8 (4° ou 5°). O dano aumenta +1d8 se o alvo for corruptor ou morto-vivo. Use uma vez por turno.',
        recarga:'longo', formula:'1', id:'destruicao_divina',
        nota: () => '1 uso por descanso longo'
      },
      // Nível 3
      {
        nivel:3, nome:'Canalizar Divindade', nome_en:'Channel Divinity', icone:'☀️',
        desc:'Use um dos poderes especiais do seu Juramento Sagrado. Escolha qual efeito ativar ao usar. Recupera após descanso curto ou longo.',
        recarga:'curto', formula:'canalizar', id:'canalizar_paladino',
        nota: () => '1 uso por descanso curto'
      },
      { nivel:3, nome:'Saúde Divina', nome_en:'Divine Health', icone:'💚', desc:'A magia divina que flui por você torna você completamente imune a doenças. Passivo permanente.' },
      { nivel:3, nome:'Juramento Sagrado', nome_en:'Sacred Oath', icone:'⚜️', desc:'Você faz seu juramento definitivo — escolha sua subclasse (Devoção, Anciões, Vingança, Glória ou Vigilância). Veja a aba Subclasse para as habilidades do juramento, incluindo as Magias de Juramento (sempre preparadas, não contam no limite) e as opções de Canalizar Divindade.' },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Máximo de 20. Repete nos níveis 8, 12, 16 e 19.' },
      // Nível 5
      { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Você pode atacar duas vezes, ao invés de uma, sempre que usar a ação de Atacar.' },
      // Nível 6
      { nivel:6, nome:'Aura de Proteção', nome_en:'Aura of Protection', icone:'🛡️', desc:'Você e todas as criaturas aliadas em até 3m de você ganham um bônus em todos os testes de resistência (salvaguardas) igual ao seu modificador de Carisma (mínimo +1). Você precisa estar consciente. No nível 18, o raio aumenta para 9m.' },
      // Nível 7
      { nivel:7, nome:'Habilidade de Juramento (7°)', nome_en:'Sacred Oath Feature (7)', icone:'⭐', desc:'Sua subclasse concede uma nova habilidade neste nível. Veja a aba Subclasse para detalhes.' },
      // Nível 8
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: aumente 1 atributo em 2, ou 2 atributos em 1 cada. Máximo 20.' },
      // Nível 10
      { nivel:10, nome:'Aura da Coragem', nome_en:'Aura of Courage', icone:'💛', desc:'Você e todas as criaturas aliadas em até 3m de você não podem ser amedrontadas enquanto você estiver consciente. No nível 18, o raio aumenta para 9m.' },
      // Nível 11
      { nivel:11, nome:'Destruição Divina Aprimorada', nome_en:'Improved Divine Smite', icone:'✨', desc:'Todos os seus ataques corpo-a-corpo com arma carregam poder divino automaticamente: cada acerto causa +1d8 de dano radiante extra, sem gastar espaço de magia. Se você também usar Destruição Divina no mesmo ataque, esse d8 se soma ao dano da Destruição.' },
      // Nível 12
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 14
      {
        nivel:14, nome:'Toque Purificador', nome_en:'Cleansing Touch', icone:'🌟',
        desc:'Ação: encerre uma magia que afete você mesmo ou uma criatura voluntária que você toque. Cada uso remove uma magia ativa no alvo escolhido. Recupera após descanso longo.',
        recarga:'longo', formula:'1+mod_CAR', id:'toque_purificador',
        nota: (nivel) => `${calcularUsos('1+mod_CAR', nivel, 'paladino')} usos por descanso longo`
      },
      // Nível 15
      { nivel:15, nome:'Habilidade de Juramento (15°)', nome_en:'Sacred Oath Feature (15)', icone:'⭐', desc:'Sua subclasse concede uma nova habilidade poderosa neste nível. Veja a aba Subclasse para detalhes.' },
      // Nível 16
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 18
      { nivel:18, nome:'Aprimoramentos de Aura', nome_en:'Aura Improvements', icone:'🔆', desc:'As suas duas auras — Aura de Proteção (nível 6) e Aura da Coragem (nível 10) — têm seu raio expandido de 3m para 9m.' },
      // Nível 19
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 20
      { nivel:20, nome:'Habilidade de Juramento (20°)', nome_en:'Sacred Oath Feature (20)', icone:'👑', desc:'Sua subclasse concede sua habilidade final e mais poderosa neste nível — geralmente uma transformação ou poder épico. Veja a aba Subclasse para detalhes.' },
    ]
  },
  clerigo: {
    nome: 'Poderes Divinos', nome_en: 'Divine Powers',
    icone: '☩',
    cor: '#4a80e8',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Conjuração', nome_en:'Spellcasting', icone:'📖',
        desc:'Você lança magias usando Sabedoria. CD = 8 + bônus de prof. + mod. SAB. Começa com 3 truques e espaços de magia que recuperam em descanso longo. Prepara diariamente mod. SAB + nível de clérigo magias (mín. 1). Use um símbolo sagrado como foco.' },
      { nivel:1, nome:'Domínio Divino', nome_en:'Divine Domain', icone:'⛪',
        desc:'Escolha um Domínio (Vida, Luz, Conhecimento, etc.) que define a área de influência do seu deus. Ele concede magias extras sempre preparadas e habilidades únicas nos níveis 1, 2, 6, 8 e 17.' },
      { nivel:1, nome:'Magias de Domínio', nome_en:'Domain Spells', icone:'📜',
        desc:'Seu Domínio concede magias extras que ficam sempre preparadas — não ocupam seu limite diário de preparação.' },
      // Nível 2
      {
        nivel:2, nome:'Canalizar Divindade', nome_en:'Channel Divinity', icone:'✝️',
        desc:'Ação: use energia divina para (1) Expulsar Mortos-Vivos — mortos-vivos visíveis a até 9m testam SAB vs. sua CD; os que falharem fogem por 1 min — ou (2) o poder especial do seu Domínio. Recupera em descanso curto. Usos: 1 (nv1-5), 2 (nv6-17), 3 (nv18+).',
        recarga:'curto', formula:'canalizar', id:'canalizar_clerigo',
        nota: (nivel, classe) => `${calcularUsos('canalizar', nivel, 'clerigo')} uso(s) por descanso curto`
      },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈',
        desc:'Aumente um valor de habilidade em +2 ou dois valores em +1. Não pode ultrapassar 20. Repete nos níveis 8, 12, 16 e 19.' },
      // Nível 5
      { nivel:5, nome:'Destruir Mortos-Vivos', nome_en:'Destroy Undead', icone:'💀',
        desc:'Quando um morto-vivo falhar na salvaguarda de Expulsar Mortos-Vivos, ele é instantaneamente destruído se o Nível de Desafio (ND) dele for baixo o suficiente. ND máximo destruído: nv5 → ND 1/2 · nv8 → ND 1 · nv11 → ND 2 · nv14 → ND 3 · nv17 → ND 4.' },
      // Nível 10
      {
        nivel:10, nome:'Intervenção Divina', nome_en:'Divine Intervention', icone:'🌟',
        desc:'Ação: implore ao seu deus por ajuda. Role d100 — se o resultado for menor ou igual ao seu nível, a divindade intervém com o efeito de qualquer magia de clérigo (o Mestre escolhe). Se intervir, só pode usar novamente após 7 dias. No nível 20, funciona automaticamente.',
        recarga:'longo', formula:'1', id:'intervencao_divina',
        nota: (nivel) => nivel >= 20 ? 'Automática no nv20 · descanso longo' : `Rola d100 ≤ ${nivel} · descanso longo`
      },
      // Nível 20
      { nivel:20, nome:'Intervenção Divina Suprema', nome_en:'Improved Divine Intervention', icone:'✨',
        desc:'Seu pedido de Intervenção Divina funciona automaticamente — sem rolar dados. A divindade sempre responde quando chamada.' },
    ]
  },
  druida: {
    nome: 'Habilidades de Druida', nome_en: 'Druid Features',
    icone: '🌿',
    cor: '#5a9830',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Druídico', nome_en:'Druidic', icone:'🌿', desc:'Você conhece o idioma secreto dos druidas — Druídico. Pode deixar mensagens ocultas na natureza que só outros druidas conseguem reconhecer. Ninguém que não seja druida pode aprender este idioma.' },
      { nivel:1, nome:'Conjuração', nome_en:'Spellcasting', icone:'🔮', desc:'Você conjura magias usando Sabedoria. CD = 8 + bônus de proficiência + mod. SAB. Ataque de magia = bônus de proficiência + mod. SAB. Pode usar um foco druídico (totem, bastão, varinha de teixo) no lugar de componentes materiais.' },
      // Nível 2
      {
        nivel:2, nome:'Forma Selvagem', nome_en:'Wild Shape', icone:'🐺',
        desc:'Ação: transforme-se em um animal que você já observou na natureza. CR máximo cresce com o nível — CR 1/4 (nv2), CR 1/2 (nv4), CR 1 (nv8). Em forma animal você mantém seus PV temporários separados — quando eles chegam a 0 você volta à forma normal com os PV que tinha antes. Usos: 2 por descanso curto.',
        recarga:'curto', formula:'2', id:'forma_selvagem',
        nota: (nivel) => `2 usos · descanso curto · CR máx: ${nivel>=8?'1':nivel>=4?'1/2':'1/4'}`
      },
      { nivel:2, nome:'Círculo Druídico', nome_en:'Druid Circle', icone:'🏛️', desc:'Escolha sua subclasse na aba Subclasse: Círculo da Terra, Círculo da Lua (PHB) ou subclasses do Tasha (Esporos, Estrelas, Fogo Selvagem). As habilidades chegam nos níveis 2, 6, 10 e 14.' },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos ou 2 atributos em 1 cada. Máximo 20. Repete nos níveis 8, 12, 16 e 19.' },
      { nivel:4, nome:'Forma Selvagem Aprimorada (CR 1/2)', nome_en:'Wild Shape Improvement (CR 1/2)', icone:'🐻', desc:'A partir do nível 4, a Forma Selvagem permite animais de CR 1/2 (como um rinoceronte ou cobra venenosa).' },
      // Nível 6 — habilidade da subclasse
      // Nível 8
      { nivel:8, nome:'Forma Selvagem Aprimorada (CR 1)', nome_en:'Wild Shape Improvement (CR 1)', icone:'🦅', desc:'A partir do nível 8, CR máximo sobe para 1 — inclui animais com voo como Águia Gigante, ou predadores poderosos.' },
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 10 — habilidade da subclasse
      // Nível 12
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 14 — habilidade da subclasse
      // Nível 16
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 18
      { nivel:18, nome:'Corpo Intemporal', nome_en:'Timeless Body', icone:'♾️', desc:'Sua conexão com a natureza retarda o envelhecimento — para cada 10 anos que passam, você envelhece apenas 1 biologicamente. Não precisa de comida ou água para sobreviver.' },
      { nivel:18, nome:'Feitiços da Besta', nome_en:'Beast Spells', icone:'🔮', desc:'Você pode conjurar magias mesmo na Forma Selvagem, desde que a forma animal possua boca ou membros capazes de fazer gestos. Combina a força animal com o poder mágico.' },
      // Nível 19
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: 1 atributo +2 ou 2 atributos +1. Máximo 20.' },
      // Nível 20
      { nivel:20, nome:'Arquidruida', nome_en:'Archdruid', icone:'👑', desc:'Você pode usar Forma Selvagem um número ilimitado de vezes. Você se tornou parte intrínseca do ciclo natural — a natureza nunca mais o abandona.' },
    ]
  },
  bardo: {
    nome: 'Habilidades de Bardo', nome_en: 'Bard Features',
    icone: '🎵',
    cor: '#a855c8',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Conjuração', nome_en:'Spellcasting', icone:'🎼', desc:'Você lança magias usando Carisma. CD = 8 + bônus de proficiência + mod. CAR. Modificador de ataque de magia = bônus de proficiência + mod. CAR. Começa com 2 truques e 4 magias de 1° nível. Qualquer instrumento musical pode ser usado como foco de conjuração.' },
      {
        nivel:1, nome:'Inspiração de Bardo', nome_en:'Bardic Inspiration', icone:'🎶',
        desc:'Ação bônus: escolha uma criatura que não seja você em até 18m que consiga ouvi-lo. Ela ganha 1 dado de Inspiração de Bardo (d6 no nível 1; d8 no nível 5; d10 no nível 10; d12 no nível 15). Em até 10 minutos ela pode rolar esse dado e somar a uma jogada de ataque, teste de habilidade ou salvaguarda — depois de rolar o d20 mas antes de saber o resultado.',
        recarga:'longo', formula:'1+mod_CAR', id:'inspiracao_bardo',
        nota: (nivel) => `${calcularUsos('1+mod_CAR', nivel, 'bardo')} usos · ${nivel >= 5 ? 'descanso curto' : 'descanso longo'}`
      },
      // Nível 2
      { nivel:2, nome:'Versatilidade', nome_en:'Jack of All Trades', icone:'🃏', desc:'Adicione metade do seu bônus de proficiência (arredondado para baixo) em qualquer teste de habilidade onde você ainda não tenha proficiência. Exemplo: bônus de prof. +3 → você ganha +1 em perícias desconhecidas.' },
      { nivel:2, nome:'Canção do Descanso', nome_en:'Song of Rest', icone:'🌙', desc:'Ao terminar um descanso curto, você e aliados que gastarem Dados de Vida recuperam PV adicionais tocando ou cantando: 1d6 (nv2–8), 1d8 (nv9–12), 1d10 (nv13–16), 1d12 (nv17+). A criatura precisa ouvi-lo.' },
      // Nível 3
      { nivel:3, nome:'Colégio de Bardo', nome_en:'Bard College', icone:'🏛️', desc:'Escolha sua subclasse na aba Subclasse. Opções: Colégio do Conhecimento, Colégio da Bravura (PHB), Colégio da Criação ou Colégio da Eloquência (Tasha). Você recebe habilidades da subclasse nos níveis 3, 6 e 14.' },
      { nivel:3, nome:'Aptidão', nome_en:'Expertise', icone:'⭐', desc:'Escolha 2 perícias em que você já tem proficiência: o bônus de proficiência é dobrado nesses testes. Exemplo: bônus de prof. +2 e Aptidão em Persuasão → +4 em Persuasão.' },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Máximo de 20. Repete nos níveis 8, 12, 16 e 19.' },
      // Nível 5
      { nivel:5, nome:'Fonte de Inspiração', nome_en:'Font of Inspiration', icone:'🔋', desc:'A partir daqui sua Inspiração de Bardo se recupera em descanso curto também (não só longo). Além disso, o dado de Inspiração sobe para d8 neste nível.' },
      // Nível 6
      { nivel:6, nome:'Canção de Proteção', nome_en:'Countercharm', icone:'🛡️', desc:'Ação: inicie uma performance que dura até o fim do seu próximo turno. Você e aliados em até 9m que consigam ouvi-lo têm vantagem em salvaguardas contra ser amedrontado ou enfeitiçado. Termina se você for incapacitado, silenciado, ou encerrar voluntariamente.' },
      // Nível 8
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: aumente 1 atributo em 2, ou 2 atributos em 1 cada. Máximo 20.' },
      // Nível 10
      { nivel:10, nome:'Inspiração de Bardo (d10)', nome_en:'Bardic Inspiration (d10)', icone:'🎶', desc:'Seu dado de Inspiração sobe para d10 neste nível.' },
      { nivel:10, nome:'Aptidão (mais 2)', nome_en:'Expertise (2 more)', icone:'⭐', desc:'Escolha mais 2 perícias com proficiência: o bônus de proficiência também é dobrado nelas.' },
      { nivel:10, nome:'Segredos Mágicos', nome_en:'Magical Secrets', icone:'📜', desc:'Aprenda 2 magias de QUALQUER classe (incluindo bardo). Devem ser de nível que você possa conjurar, ou truques. Contam como magias de bardo e ficam incluídas no total de magias que você conhece. Aprende mais 2 no nível 14 e mais 2 no nível 18.' },
      // Nível 12
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 15
      { nivel:15, nome:'Inspiração de Bardo (d12)', nome_en:'Bardic Inspiration (d12)', icone:'🎶', desc:'Seu dado de Inspiração atinge o máximo — d12. Suas palavras podem mudar o curso de qualquer evento.' },
      // Nível 16
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 18
      { nivel:18, nome:'Segredos Mágicos (18°)', nome_en:'Magical Secrets (18)', icone:'📜', desc:'Aprenda mais 2 magias de qualquer classe. Terceiro e último grupo de Segredos Mágicos.' },
      // Nível 19
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 20
      { nivel:20, nome:'Inspiração Superior', nome_en:'Superior Inspiration', icone:'👑', desc:'Quando você rolar iniciativa e não tiver nenhum uso de Inspiração de Bardo restante, você recupera 1 uso automaticamente. Nunca começa um combate sem poder inspirar alguém.' },
    ]
  },
  patrulheiro: {
    nome: 'Habilidades de Patrulheiro', nome_en: 'Ranger Features',
    icone: '🏹',
    cor: '#489848',
    habilidades: [
      { nivel:1, nome:'Inimigo Favorito', nome_en:'Favored Enemy', icone:'🎯', desc:'+2 nas jogadas de dano contra o tipo escolhido (bestas, fadas, humanoide, monstruosidades ou mortos-vivos). Vantagem em Sobrevivência para rastrear e em Inteligência para lembrar informações sobre eles. Aprende 1 idioma falado por eles. No nível 6, o bônus de dano sobe para +4 e você escolhe um Inimigo Favorito Maior (aberrações, celestiais, constructos, corruptores, dragões, elementais ou gigantes), ganhando vantagem em saves contra suas magias e habilidades.' },
      { nivel:1, nome:'Explorador Natural', nome_en:'Natural Explorer', icone:'🌿', desc:'Ignora terreno difícil. Vantagem em iniciativa. Vantagem em ataques contra criaturas que ainda não agiram no 1º turno. Durante viagem (1h+): terreno difícil não atrasa o grupo, impossível se perder por meios não-mágicos, permanece alerta ao perigo, move-se furtivamente em ritmo normal (sozinho), encontra o dobro de comida ao forragear, descobre número/tamanho/tempo ao rastrear.' },
      { nivel:2, nome:'Estilo de Luta', icone:'⚔️', desc:'Escolha um estilo permanente: Arquearia (+2 em ataques à distância), Combate com Duas Armas (adicione mod. de habilidade no dano da arma secundária), Defesa (+1 CA com armadura), ou Duelismo (+2 dano com arma a uma mão).' },
      { nivel:3, nome:'Conclave de Patrulheiro', nome_en:'Ranger Conclave', icone:'🐾', desc:'Escolha sua subclasse. Veja a aba de Subclasse para as habilidades da sua escolha.' },
      { nivel:3, nome:'Consciência Primitiva', nome_en:'Primeval Awareness', icone:'🌀', desc:'Gaste 1 espaço de magia: sintonize seus sentidos por 1 minuto por nível do espaço. Detecta presença de Inimigos Favoritos em até 8 km (tipo, quantidade, direção e distância aproximada). Além disso, através de sons e gestos você pode comunicar ideias simples a bestas e compreender seu humor e necessidades básicas (não funciona contra bestas que você atacou nos últimos 10 min).' },
      { nivel:5, nome:'Ataque Extra', nome_en:'Extra Attack', icone:'⚔️', desc:'Ataque duas vezes ao usar a ação Atacar.' },
      { nivel:6, nome:'Inimigo Favorito Maior', nome_en:'Greater Favored Enemy', icone:'🏆', desc:'Escolha um tipo de Inimigo Favorito Maior: aberrações, celestiais, constructos, corruptores, dragões, elementais ou gigantes. Todos os benefícios de Inimigo Favorito se aplicam. Bônus de dano contra todos os inimigos favoritos sobe para +4. Vantagem em saves contra magias e habilidades de Inimigos Maiores.' },
      { nivel:8, nome:'Pés Rápidos', nome_en:'Fleet of Foot', icone:'💨', desc:'Use a ação de Disparada como ação bônus no seu turno.' },
      { nivel:10, nome:'Mimetismo', nome_en:'Hide in Plain Sight', icone:'👁️', desc:'Ao tentar se esconder no turno, pode optar por não se mover. Se ficar imóvel: −10 de penalidade para detectá-lo até o início do próximo turno. Perde o benefício se se mover ou cair no chão.' },
      { nivel:14, nome:'Desaparecer', nome_en:'Vanish', icone:'🌑', desc:'Use a ação de Esconder como ação bônus no turno. Além disso, você não pode ser rastreado por meios não-mágicos, a menos que decida deixar um rastro.' },
      { nivel:18, nome:'Sentidos Selvagens', nome_en:'Feral Senses', icone:'🦁', desc:'Ao atacar uma criatura que não pode ver, a incapacidade de vê-la não impõe desvantagem. Você está ciente da localização de criaturas invisíveis em 9m (desde que não estejam escondidas e você não esteja cego/surdo).' },
      { nivel:20, nome:'Matador de Inimigos', nome_en:'Foe Slayer', icone:'👑', desc:'Uma vez por turno, adicione o modificador de Sabedoria na jogada de ataque OU na jogada de dano de um ataque. Você escolhe antes ou depois da rolagem (mas antes do resultado ser aplicado).' },
    ]
  },
  artifice: {
    nome: 'Habilidades de Artífice',
    nome_en: 'Artificer Features',
    icone: '⚙️',
    cor: '#c87830',
    habilidades: [
      // ── Nível 1 ──────────────────────────────────────────────────────────
      { nivel:1, nome:'Engenharia Mágica', nome_en:'Magical Tinkering', icone:'✨',
        desc:'Com ferramentas de ladrão ou de artesão nas mãos, toque um objeto não mágico Minúsculo (ação) e conceda a ele uma propriedade mágica à sua escolha: emite luz plena (1,5m); reproduz uma mensagem gravada de até 6 s quando tocado; emite um odor ou som inofensivo contínuo; ou gera um efeito visual estático não mágico. A propriedade dura indefinidamente. Você pode afetar no máximo mod. INT objetos ao mesmo tempo (mín. 1).',
        desc_en:"With thieves' tools or artisan's tools in hand, touch a Tiny nonmagical object (action) and give it a magical property of your choice: sheds bright light (5 ft); plays a recorded message of up to 6 seconds when touched; emits an inoffensive odor or nonverbal sound continuously; or creates a static, nonmagical visual effect. The property lasts indefinitely. You can affect a number of objects equal to your Intelligence modifier (minimum 1) at the same time." },
      { nivel:1, nome:'Conjuração', nome_en:'Spellcasting', icone:'🔮',
        desc:'Você canaliza magia através de ferramentas — não gestos convencionais. Deve ter ferramentas de ladrão ou de artesão nas mãos ao conjurar (são o componente M). Inteligência é seu atributo de conjuração. CD de magia = 8 + bônus de prof + mod. INT. Ataque de magia = bônus de prof + mod. INT. Aprende 2 truques da lista de artífice. Prepara magias após descanso longo (mod. INT + metade do nível, arredondado para baixo, mín. 1). Pode conjurar qualquer magia de artífice preparada com descritor Ritual como ritual.',
        desc_en:"You channel magic through tools rather than conventional gestures. You must have thieves' tools or artisan's tools in hand when casting (they serve as your material component). Intelligence is your spellcasting ability. Spell save DC = 8 + proficiency bonus + INT mod. Spell attack modifier = proficiency bonus + INT mod. You learn 2 cantrips from the artificer list. Prepare spells after a long rest (INT mod + half your level, rounded down, minimum 1). You can cast any prepared artificer ritual as a ritual." },
      // ── Nível 2 ──────────────────────────────────────────────────────────
      {
        nivel:2, nome:'Infundir Item', nome_en:'Infuse Item', icone:'🔧',
        desc:'Aprenda infusões de artífice e aplique-as em itens ao terminar um descanso longo — transformando objetos mundanos em itens mágicos. Você começa conhecendo 4 infusões e aprende mais ao subir de nível (veja coluna Infusões Conhecidas). Cada infusão só pode estar em 1 objeto por vez. Se tentar exceder o máximo de itens infundidos, a infusão mais antiga encerra. A infusão desaparece se você morrer (após mod. INT dias, mín. 1) ou substituir o conhecimento dela. Itens infundidos podem ser usados como foco de conjuração.',
        desc_en:'Learn artificer infusions and apply them to items at the end of a long rest — turning mundane objects into magic items. You start knowing 4 infusions and learn more as you level (see Infusions Known column). Each infusion can exist in only 1 object at a time. If you exceed your maximum number of infused items, the oldest infusion ends. An infusion vanishes when you die (after INT mod days, minimum 1) or replace your knowledge of it. Infused items can be used as a spellcasting focus.',
        recarga:'longo', formula:'infusoes', id:'infundir_item',
        nota: (nivel) => `${calcularUsos('infusoes', nivel, 'artifice')} itens infundidos simultaneamente`
      },
      // ── Nível 3 ──────────────────────────────────────────────────────────
      { nivel:3, nome:'Especialização de Artífice', nome_en:'Artificer Specialist', icone:'⚙️',
        desc:'Escolha sua subclasse: Alquimista, Armeiro, Atirador ou Ferreiro de Batalha. Você recebe habilidades nos níveis 3, 5, 9 e 15. Veja a aba Subclasse para os detalhes da sua escolha.',
        desc_en:'Choose your subclass: Alchemist, Armorer, Artillerist, or Battle Smith. You gain features at levels 3, 5, 9, and 15. See the Subclass tab for the details of your choice.' },
      { nivel:3, nome:'A Ferramenta Certa para o Trabalho', nome_en:'The Right Tool for the Job', icone:'🛠️',
        desc:'Com ferramentas de ladrão ou de artesão nas mãos, você pode criar magicamente um conjunto de ferramentas de artesão em um espaço a 1,5m. Requer 1 hora de trabalho ininterrupto (pode coincidir com descanso). As ferramentas não são mágicas e desaparecem quando você usa esta característica novamente.',
        desc_en:"With thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. The work takes 1 uninterrupted hour (which can overlap with a rest). The tools are nonmagical and vanish when you use this feature again." },
      // ── Nível 4 ──────────────────────────────────────────────────────────
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈',
        desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Nenhum atributo pode ultrapassar 20. Repete nos níveis 8, 12, 16 e 19.',
        desc_en:'Increase one ability score by 2, or two ability scores by 1 each. No score can exceed 20. Repeats at levels 8, 12, 16, and 19.' },
      // ── Nível 6 ──────────────────────────────────────────────────────────
      { nivel:6, nome:'Maestria em Ferramenta', nome_en:'Tool Expertise', icone:'🔩',
        desc:'Seu bônus de proficiência é dobrado em qualquer teste de habilidade que use proficiência com uma ferramenta (ferramentas de artesão, ferramentas de ladrão etc.).',
        desc_en:"Your proficiency bonus is doubled for any ability check that uses your proficiency with a tool (artisan's tools, thieves' tools, etc.)." },
      // ── Nível 7 ──────────────────────────────────────────────────────────
      {
        nivel:7, nome:'Lampejo de Genialidade', nome_en:'Flash of Genius', icone:'💡',
        desc:'Quando você ou uma criatura em 9m que você possa ver faz um teste de habilidade ou salvaguarda, você pode usar sua reação para adicionar seu modificador de Inteligência ao resultado. Usos = mod. INT (mín. 1). Recupera no descanso longo.',
        desc_en:'When you or a creature you can see within 30 feet makes an ability check or saving throw, you can use your reaction to add your Intelligence modifier to the roll. Uses = INT mod (minimum 1). Recharges on a long rest.',
        recarga:'longo', formula:'lampejo', id:'lampejo_genialidade',
        nota: (nivel) => `${calcularUsos('lampejo', nivel, 'artifice')} usos · descanso longo`
      },
      // ── Nível 8 ──────────────────────────────────────────────────────────
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈',
        desc:'Segundo incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.',
        desc_en:'Second improvement: increase one ability score by 2, or two by 1 each. Maximum 20.' },
      // ── Nível 10 ─────────────────────────────────────────────────────────
      { nivel:10, nome:'Perito em Itens Mágicos', nome_en:'Magic Item Adept', icone:'💎',
        desc:'Sua compreensão de itens mágicos se aprofunda: você pode se sintonizar com até 4 itens mágicos simultaneamente (em vez dos 3 padrão). Além disso, ao criar um item mágico de raridade comum ou incomum, o processo leva ¼ do tempo normal e custa ½ do valor em ouro.',
        desc_en:'Your understanding of magic items deepens: you can attune to up to 4 magic items simultaneously (instead of the standard 3). In addition, when you craft a common or uncommon magic item, the process takes one-quarter of the normal time and costs half the usual gold.' },
      // ── Nível 11 ─────────────────────────────────────────────────────────
      { nivel:11, nome:'Armazenar Magia', nome_en:'Spell-Storing Item', icone:'🔋',
        desc:'Ao terminar um descanso longo, toque uma arma simples/marcial ou foco de conjuração e armazene nele uma magia de 1° ou 2° círculo da lista de artífice (tempo de conjuração de 1 ação; não precisa estar preparada). Qualquer criatura segurando o objeto pode gastar uma ação para liberar a magia, usando seu modificador de conjuração. Se exigir concentração, a criatura concentra. A magia permanece até ser usada 2×mod.INT vezes (mín. 2) ou até você usar esta característica novamente.',
        desc_en:'When you finish a long rest, touch a simple or martial weapon or a spellcasting focus and store in it a 1st- or 2nd-level artificer spell (casting time of 1 action; need not be prepared). Any creature holding the object can spend an action to release the spell, using your spell save DC and attack bonus. If it requires concentration, the creature concentrates. The spell remains until used 2×INT mod times (minimum 2) or until you use this feature again.' },
      // ── Nível 12 ─────────────────────────────────────────────────────────
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈',
        desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.',
        desc_en:'Third improvement: increase one ability score by 2, or two by 1 each. Maximum 20.' },
      // ── Nível 14 ─────────────────────────────────────────────────────────
      { nivel:14, nome:'Versado em Itens Mágicos', nome_en:'Magic Item Savant', icone:'🌟',
        desc:'Sua habilidade com itens mágicos se aprofunda ainda mais: você pode se sintonizar com até 5 itens mágicos simultaneamente. Você ignora todos os requisitos de classe, raça, magia e nível para se sintonizar com — ou usar — qualquer item mágico.',
        desc_en:'Your skill with magic items deepens further: you can attune to up to 5 magic items simultaneously. You ignore all class, race, spell, and level requirements for attuning to or using any magic item.' },
      // ── Nível 16 ─────────────────────────────────────────────────────────
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈',
        desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.',
        desc_en:'Fourth improvement: increase one ability score by 2, or two by 1 each. Maximum 20.' },
      // ── Nível 18 ─────────────────────────────────────────────────────────
      { nivel:18, nome:'Maestria em Itens Mágicos', nome_en:'Magic Item Master', icone:'👑',
        desc:'Você pode se sintonizar com até 6 itens mágicos simultaneamente.',
        desc_en:'You can attune to up to 6 magic items simultaneously.' },
      // ── Nível 19 ─────────────────────────────────────────────────────────
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈',
        desc:'Quinto e último incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.',
        desc_en:'Fifth and final improvement: increase one ability score by 2, or two by 1 each. Maximum 20.' },
      // ── Nível 20 ─────────────────────────────────────────────────────────
      { nivel:20, nome:'Alma do Artífice', nome_en:"Soul of Artifice", icone:'✨',
        desc:'Você desenvolveu uma conexão mística com seus itens mágicos: ganhe +1 em todas as salvaguardas para cada item mágico com o qual esteja sintonizado. Além disso, se for reduzido a 0 PV mas não morrer imediatamente, você pode usar sua reação para encerrar uma de suas infusões ativas — sendo reduzido a 1 PV em vez de 0.',
        desc_en:'You have developed a profound bond with your magic items: gain +1 to all saving throws for each magic item you are currently attuned to. In addition, if you are reduced to 0 hit points but not killed outright, you can use your reaction to end one of your active infusions — dropping to 1 hit point instead of 0.' },
    ]
  },
  bruxo: {
    nome: 'Habilidades de Bruxo', nome_en: 'Warlock Features',
    icone: '🔮',
    cor: '#7040c8',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Patrono Transcendental', nome_en:'Otherworldly Patron', icone:'👁️', desc:'Você conclui um pacto com um ser sobrenatural de sua escolha: a Arquifada, o Corruptor ou o Grande Antigo (PHB), ou O Insondável e O Gênio (Caldeirão de Tasha). Você recebe habilidades do patrono no 1°, 6°, 10° e 14° nível. Veja a aba Subclasse para os detalhes.' },
      { nivel:1, nome:'Magia de Pacto', nome_en:'Pact Magic', icone:'✨', desc:'Você usa Carisma para conjurar magias. Seus espaços de magia são todos do mesmo nível (cresce com o personagem) e você os recupera após descanso curto ou longo — diferente de outras classes que só recuperam após descanso longo. CD de magia = 8 + prof + CAR. Ataque de magia = prof + CAR.' },
      // Nível 2
      { nivel:2, nome:'Invocações Místicas', nome_en:'Eldritch Invocations', icone:'📜', desc:'Você aprende 2 invocações místicas — poderes permanentes derivados do conhecimento proibido do seu patrono. Exemplos: ver no escuro até 36m (Visão Diabólica), conjurar Detectar Magia à vontade (Visão Mística), ou adicionar seu CAR ao dano de Rajada Mística (Explosão Agonizante). Aprende mais ao subir de nível (total da tabela O Bruxo).' },
      // Nível 3
      {
        nivel:3, nome:'Dádiva do Pacto', nome_en:'Pact Boon', icone:'🎁',
        desc:'Seu patrono lhe presenteia com um dom especial. Escolha uma das três opções: Pacto da Corrente (familiar especial — pode ser diabrete, pseudodragão, quasit ou sprite), Pacto da Lâmina (crie uma arma corpo a corpo mágica em sua mão a qualquer momento, e pode conjurar ataques extras), ou Pacto do Tomo (Livro das Sombras com 3 truques extras de qualquer classe, à vontade). O Caldeirão de Tasha adiciona o Pacto do Talismã.'
      },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Máximo de 20. Repete nos níveis 8, 12, 16 e 19.' },
      // Nível 11
      {
        nivel:11, nome:'Arcana Mística (6°)', nome_en:'Mystic Arcanum (6th level)', icone:'🌟',
        desc:'Seu patrono compartilha um segredo mágico poderoso. Escolha uma magia de bruxo de 6° círculo — você pode conjurá-la uma vez sem gastar espaço de magia. Recupera após descanso longo. Nos níveis seguintes ganha mais: 7° nível de magia (nv 13), 8° (nv 15) e 9° (nv 17).',
        recarga:'longo', formula:'1', id:'arcana_mistica_6',
        nota: () => '1 uso · descanso longo'
      },
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      {
        nivel:13, nome:'Arcana Mística (7°)', nome_en:'Mystic Arcanum (7th level)', icone:'🌟',
        desc:'Você aprende uma magia de bruxo de 7° círculo para conjurar sem espaço de magia uma vez por descanso longo.',
        recarga:'longo', formula:'1', id:'arcana_mistica_7',
        nota: () => '1 uso · descanso longo'
      },
      {
        nivel:15, nome:'Arcana Mística (8°)', nome_en:'Mystic Arcanum (8th level)', icone:'🌟',
        desc:'Você aprende uma magia de bruxo de 8° círculo para conjurar sem espaço de magia uma vez por descanso longo.',
        recarga:'longo', formula:'1', id:'arcana_mistica_8',
        nota: () => '1 uso · descanso longo'
      },
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      {
        nivel:17, nome:'Arcana Mística (9°)', nome_en:'Mystic Arcanum (9th level)', icone:'🌟',
        desc:'Você aprende uma magia de bruxo de 9° círculo para conjurar sem espaço de magia uma vez por descanso longo. O poder máximo do seu patrono está à sua disposição.',
        recarga:'longo', formula:'1', id:'arcana_mistica_9',
        nota: () => '1 uso · descanso longo'
      },
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      {
        nivel:20, nome:'Mestre Místico', nome_en:'Eldritch Master', icone:'👑',
        desc:'Você pode gastar 1 minuto suplicando ao seu patrono para recuperar todos os espaços de magia gastos da sua Magia de Pacto. Após usar, deve terminar um descanso longo antes de fazê-lo novamente.',
        recarga:'longo', formula:'1', id:'mestre_mistico',
        nota: () => '1 uso · descanso longo'
      },
    ]
  },
  feiticeiro: {
    nome: 'Habilidades de Feiticeiro', nome_en: 'Sorcerer Features',
    icone: '✨',
    cor: '#3a8aee',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Conjuração', nome_en:'Spellcasting', icone:'🔮', desc:'Você lança magias usando Carisma como habilidade de conjuração. CD de magia = 8 + bônus de prof. + mod. CAR. Modificador de ataque de magia = bônus de prof. + mod. CAR. Pode usar um foco arcano como foco de conjuração. Começa com 4 truques e 2 magias de 1° nível.' },
      { nivel:1, nome:'Origem de Feitiçaria', nome_en:'Sorcerous Origin', icone:'🌟', desc:'Escolha sua subclasse na aba Subclasse: Linhagem Dracônica ou Magia Selvagem (PHB), ou Mente Aberrante ou Alma Cronométrica (Caldeirão de Tasha). Você recebe habilidades da sua origem nos níveis 1, 6, 14 e 18.' },
      // Nível 2
      {
        nivel:2, nome:'Fonte de Magia (Pontos de Feitiçaria)', nome_en:'Font of Magic', icone:'💎',
        desc:'Você descobriu uma fonte interna de magia representada por Pontos de Feitiçaria (= seu nível de feiticeiro). Eles se recuperam em descanso longo e alimentam a Conjuração Flexível: converta pontos em espaços de magia extras, ou espaços de magia em pontos. Também alimenta a Metamagia.',
        recarga:'longo', formula:'pontos_feiti', id:'pontos_feiticaria',
        nota: (nivel) => nivel >= 2 ? `${nivel} pontos de feitiçaria · descanso longo` : 'Disponível a partir do nível 2'
      },
      { nivel:2, nome:'Conjuração Flexível', nome_en:'Flexible Casting', icone:'🔄', desc:'Com uma ação bônus, converta pontos de feitiçaria em espaços de magia: 1°=2pts, 2°=3pts, 3°=5pts, 4°=6pts, 5°=7pts (máximo 5°). Ou converta um espaço de magia em pontos igual ao nível do espaço. Espaços criados assim desaparecem no próximo descanso longo.' },
      // Nível 3
      { nivel:3, nome:'Metamagia', nome_en:'Metamagic', icone:'🎭', desc:'Você aprende 2 opções de Metamagia — técnicas para distorcer suas magias. Exemplos: Magia Acelerada (ação bônus por 2pts), Magia Cuidadosa (proteger aliados por 1pt), Magia Distante (dobrar alcance por 1pt), Magia Duplicada (2 alvos ao mesmo nível por =pts ao nível), Magia Estendida (dobrar duração por 1pt), Magia Potencializada (re-rolar até mod.CAR dados de dano por 1pt), Magia Sutil (sem componentes verbais/somáticos por 1pt), Magia Aumentada (desvantagem no save por 3pts). Aprende mais nos níveis 10 e 17.' },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Máximo de 20. Repete nos níveis 8, 12, 16 e 19.' },
      // Nível 8
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: aumente 1 atributo em 2, ou 2 atributos em 1 cada. Máximo 20.' },
      // Nível 10
      { nivel:10, nome:'Metamagia Adicional', nome_en:'Additional Metamagic', icone:'🎭', desc:'Você aprende mais uma opção de Metamagia da lista disponível para feiticeiros. Agora possui 3 opções no total.' },
      // Nível 12
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 16
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 17
      { nivel:17, nome:'Metamagia Adicional (2ª)', nome_en:'Additional Metamagic (2nd)', icone:'🎭', desc:'Você aprende mais uma opção de Metamagia. Agora possui 4 opções no total, tornando-se um mestre de distorção mágica.' },
      // Nível 19
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 20
      {
        nivel:20, nome:'Restauração Mística', nome_en:'Sorcerous Restoration', icone:'👑',
        desc:'Sempre que você terminar um descanso curto, recupera automaticamente 4 pontos de feitiçaria. Sua ligação com a fonte interna de magia torna-se praticamente inesgotável.',
        recarga:'curto', formula:'1', id:'restauracao_mistica',
        nota: () => 'Passivo: +4 pts feitiçaria por descanso curto'
      },
    ]
  },
  mago: {
    nome: 'Habilidades de Mago', nome_en: 'Wizard Features',
    icone: '🔮',
    cor: '#7858e8',
    habilidades: [
      // Nível 1
      { nivel:1, nome:'Conjuração', nome_en:'Spellcasting', icone:'✨', desc:'Você lança magias usando Inteligência como habilidade de conjuração. CD de magia = 8 + bônus de proficiência + mod. INT. Modificador de ataque de magia = bônus de proficiência + mod. INT. Pode usar um foco arcano. Começa com 3 truques e 6 magias de 1° círculo no grimório.' },
      { nivel:1, nome:'Grimório', nome_en:'Spellbook', icone:'📗', desc:'Você possui um grimório com 6 magias de 1° círculo à sua escolha. A cada nível de mago, adiciona 2 magias de qualquer círculo que você possa conjurar. Pode copiar magias encontradas nas aventuras (2h e 50po por círculo). Pode conjurar qualquer magia com o descritor "ritual" do seu grimório sem prepará-la, gastando 10 minutos extras.' },
      {
        nivel:1, nome:'Recuperação Arcana', nome_en:'Arcane Recovery', icone:'🔄',
        desc:'Uma vez por dia, após um descanso curto, pode recuperar espaços de magia gastos. Os espaços recuperados, somados, não podem exceder metade do seu nível de mago (arredondado para cima) e nenhum pode ser de 6° círculo ou superior. Ex.: nível 4 → recupera até 2 espaços (ex: um de 2° ou dois de 1°).',
        recarga:'longo', formula:'1', id:'recuperacao_arcana',
        nota: () => '1 uso por dia (recuperado após descanso longo)'
      },
      // Nível 2
      { nivel:2, nome:'Tradição Arcana', nome_en:'Arcane Tradition', icone:'🏫', desc:'Escolha sua subclasse — a escola de magia em que você se especializa. Cada escola concede habilidades especiais nos níveis 2, 6, 10 e 14. Veja a aba de Subclasse para os detalhes da sua escolha.' },
      // Nível 4
      { nivel:4, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Aumente 1 atributo em 2 pontos, ou 2 atributos em 1 ponto cada. Máximo de 20. Repete nos níveis 8, 12, 16 e 19.' },
      // Nível 8
      { nivel:8, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Segundo incremento: aumente 1 atributo em 2, ou 2 atributos em 1 cada. Máximo 20.' },
      // Nível 12
      { nivel:12, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Terceiro incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 16
      { nivel:16, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quarto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 18
      {
        nivel:18, nome:'Dominar Magia', nome_en:'Spell Mastery', icone:'⭐',
        desc:'Escolha uma magia de mago de 1° círculo e uma de 2° círculo do seu grimório. Enquanto as tiver preparadas, pode conjurá-las no nível mínimo sem gastar espaços de magia. Se quiser conjurá-las em nível superior, ainda gasta espaços normalmente.',
        recarga:'longo', formula:'2', id:'dominar_magia',
        nota: () => '2 magias à vontade (1° e 2° círculo, preparadas)'
      },
      // Nível 19
      { nivel:19, nome:'Incremento de Habilidade', nome_en:'Ability Score Improvement', icone:'📈', desc:'Quinto incremento: aumente 1 atributo em 2, ou 2 em 1 cada. Máximo 20.' },
      // Nível 20
      {
        nivel:20, nome:'Assinatura Mágica', nome_en:'Signature Spells', icone:'👑',
        desc:'Escolha duas magias de mago de 3° círculo do seu grimório como sua "assinatura". Você as tem sempre preparadas (sem contar no limite) e pode conjurar cada uma delas uma vez por descanso curto ou longo sem gastar espaços de magia (no nível 3°). Para conjurá-las em nível superior, gasta espaços normalmente.',
        recarga:'curto', formula:'2', id:'assinatura_magica',
        nota: () => '1 conjuração gratuita de cada (2 no total) · descanso curto ou longo'
      },
    ]
  },
};

// Estado dos espaços de magia (inicializado em renderMagias)
let magiaState = {
  slots: [],        // array de {total, usados} por nível de magia (índice 0 = nível 1)
  truques: 0,
  tipo: null,       // 'pleno','meio','terca','bruxo','artifice','nao-conjurador'
  classe: null,
  nivel: 1,
  msgTimeout: null,
};

/* ─── RENDER PRINCIPAL DA SEÇÃO DE MAGIAS ─── */
function renderMagias() {
  const classe = document.getElementById('char-class')?.value || '';
  const nivel  = parseInt(document.getElementById('char-level')?.value) || 1;
  const subclasse = document.getElementById('char-subclass')?.value || '';
  const container = document.getElementById('magias-conteudo');
  if (!container) return;

  // Preserve the currently active tab so language switches don't reset it
  const abaAtivaAntes = container.querySelector('.mag-tab.ativo')?.dataset?.aba || null;

  magiaState.classe = classe;
  magiaState.nivel  = nivel;

  let tipoConj = 'nao-conjurador';
  if (['bardo','clerigo','druida','feiticeiro','mago'].includes(classe)) tipoConj = 'pleno';
  else if (['paladino','patrulheiro'].includes(classe)) tipoConj = 'meio';
  else if (classe === 'bruxo') tipoConj = 'bruxo';
  else if (classe === 'artifice') tipoConj = 'artifice';
  else if (classe === 'guerreiro' && subclasse === 'cavaleiro-arcano' && nivel >= 3) tipoConj = 'terca';
  else if (classe === 'ladino'  && subclasse === 'arcano'            && nivel >= 3) tipoConj = 'terca';

  magiaState.tipo = tipoConj;

  const habClasse = HABILIDADES_ESPECIAIS[classe];
  const habSubclasse = (SUBCLASSE_HABILIDADES[classe] || {})[subclasse];
  const isEN = currentLang === 'en';

  // Montar abas
  const abas = [];
  if (habClasse) abas.push({ id:'habilidades', label: isEN ? '⚔️ Features' : '⚔️ Habilidades' });
  if (habSubclasse) {
    const subNome = (isEN && habSubclasse.nome_en) ? habSubclasse.nome_en : habSubclasse.nome;
    abas.push({ id:'subclasse', label:habSubclasse.icone + ' ' + subNome });
  }
  if (tipoConj !== 'nao-conjurador') {
    abas.push({ id:'magias', label: isEN ? '🔮 Spells & Cantrips' : '🔮 Magias & Truques' });
    abas.push({ id:'espacos', label: isEN ? '✨ Spell Slots' : '✨ Espaços de Magia' });
  }

  let html = `<div class="card" style="margin-bottom:16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
      <span style="font-size:22px;">✨</span>
      <span style="font-family:'Cinzel',serif;font-size:15px;color:var(--accent);font-weight:600;">${isEN ? 'Spells, Powers &amp; Features' : 'Magias, Poderes &amp; Habilidades'}</span>
    </div>
    <p style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);line-height:1.6;">
      ${_magiasBoxExplicativo(tipoConj, classe, nivel)}
    </p>
  </div>`;

  if (abas.length === 0) {
    if (!classe) {
      html += `<div class="card" style="margin-bottom:16px;text-align:center;padding:32px;">
        <div style="font-size:42px;margin-bottom:14px;">🧙</div>
        <div style="font-family:'Cinzel',serif;font-size:14px;color:var(--gold);margin-bottom:10px;letter-spacing:1px;">${isEN ? 'No class selected' : 'Nenhuma classe selecionada'}</div>
        <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);line-height:1.7;">
          ${isEN
            ? 'Go back to <b style="color:var(--text);">Section 1 — Identity</b> and choose your class.<br>Features, spells, and powers will appear here automatically.'
            : 'Volte à <b style="color:var(--text);">Seção 1 — Identidade</b> e escolha sua classe.<br>As habilidades, poderes e magias aparecerão aqui automaticamente.'}
        </div>
      </div>`;
    } else {
      html += `<div class="card" style="margin-bottom:16px;text-align:center;padding:28px;">
        <div style="font-size:36px;margin-bottom:12px;">⚔️</div>
        <div style="font-family:'Cinzel',serif;font-size:14px;color:var(--gold);margin-bottom:8px;">${_classDisplayName(classe)} — ${isEN ? 'Martial Class' : 'Classe Marcial'}</div>
        <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);">${isEN ? 'Your features are martial. No spells available for this class.' : 'Suas habilidades são marciais. Nenhuma magia disponível para esta classe.'}</div>
      </div>`;
    }
    container.innerHTML = html;
    return;
  }

  // Abas de navegação (estilo browser tab)
  html += '<div class="mag-tabs" id="mag-tabs">';
  abas.forEach((a, i) => {
    html += `<button class="mag-tab" onclick="trocarAba('${a.id}')" data-aba="${a.id}">${a.label}</button>`;
  });
  html += '</div>';

  if (habClasse) {
    html += '<div class="mag-tab-panel" id="panel-habilidades">';
    html += _renderHabilidadesAbas(classe, nivel, habClasse, false);
    if (tipoConj === 'nao-conjurador') html += _renderBotoesDescanso('nao-conjurador');
    html += '</div>';
  }

  if (habSubclasse) {
    html += '<div class="mag-tab-panel" id="panel-subclasse">';
    html += _renderHabilidadesAbas(classe, nivel, habSubclasse, true);
    html += '</div>';
  }

  if (tipoConj !== 'nao-conjurador') {
    html += '<div class="mag-tab-panel" id="panel-magias">';
    html += _renderConjuracao(tipoConj, classe, nivel);
    html += '</div>';
    html += '<div class="mag-tab-panel" id="panel-espacos">';
    html += _renderSlotTracker(tipoConj, classe, nivel);
    html += _renderBotoesDescanso(tipoConj);
    html += '</div>';
  }

  container.innerHTML = html;
  _initSlots(tipoConj, classe, nivel);
  _updateAllSlotDisplays();

  // Restore previously active tab (e.g. after language switch); fall back to first tab
  const abaParaAbrir = abaAtivaAntes && abas.find(a => a.id === abaAtivaAntes)
    ? abaAtivaAntes
    : (abas[0]?.id || null);
  if (abaParaAbrir) trocarAba(abaParaAbrir);
}

function trocarAba(abaId) {
  document.querySelectorAll('.mag-tab').forEach(t => t.classList.remove('ativo'));
  document.querySelectorAll('.mag-tab-panel').forEach(p => p.classList.remove('ativo'));
  const tab = document.querySelector('.mag-tab[data-aba="' + abaId + '"]');
  const panel = document.getElementById('panel-' + abaId);
  if (tab) tab.classList.add('ativo');
  if (panel) panel.classList.add('ativo');
}

function _renderBotoesDescanso(tipoConj) {
  const isEN = currentLang === 'en';
  const descMsg = tipoConj === 'bruxo'
    ? (isEN ? 'Warlock recovers spell slots on a <b>short or long rest</b>.' : 'Bruxo recupera espaços em <b>descanso curto ou longo</b>.')
    : tipoConj === 'nao-conjurador'
    ? (isEN ? 'Use the buttons to recover spent charges from tracked features.' : 'Use os botões para recuperar cargas gastas das habilidades rastreadas.')
    : (isEN ? 'Spell slots recover on a <b>long rest</b>. Some features recover on a short rest.' : 'Espaços de magia se recuperam em <b>descanso longo</b>. Algumas habilidades recuperam em descanso curto.');
  const title = isEN ? '— REST — RECOVER RESOURCES —' : '— DESCANSO — RECUPERAR RECURSOS —';
  const labelCurto = isEN ? 'Short Rest' : 'Descanso Curto';
  const labelLongo = isEN ? 'Long Rest' : 'Descanso Longo';
  return `<div class="card" style="margin-bottom:16px;padding:16px;">
    <div style="font-family:'Cinzel',serif;font-size:10px;color:var(--text-dim);margin-bottom:8px;letter-spacing:2px;text-align:center;">${title}</div>
    <p style="font-family:'IM Fell English',serif;font-size:12px;color:var(--text-dim);line-height:1.5;margin-bottom:12px;">${descMsg}</p>
    <div class="rest-btn-row">
      <button class="rest-btn rest-curto" onclick="descansoCurto()"><span>🌙</span> ${labelCurto}</button>
      <button class="rest-btn rest-longo" onclick="descansoLongo()"><span>☀️</span> ${labelLongo}</button>
    </div>
  </div>`;
}

/* ─── SKILL TREE POPOVER (singleton, injected once) ─── */
function _ensureSkillPopover() {
  if (document.getElementById('skill-popover-global')) return;
  const el = document.createElement('div');
  el.id = 'skill-popover-global';
  el.className = 'skill-popover';
  el.innerHTML = `
    <button class="skill-popover-close" onclick="_closeSkillPopover()">✕</button>
    <div class="skill-popover-nome" id="spop-nome"></div>
    <div class="skill-popover-desc" id="spop-desc"></div>
    <div class="skill-popover-meta" id="spop-meta"></div>
    <div class="skill-popover-tracker" id="spop-tracker" style="display:none;"></div>
    <div id="spop-ih" style="display:none;"></div>
  `;
  document.body.appendChild(el);
  document.addEventListener('click', (e) => {
    const pop = document.getElementById('skill-popover-global');
    if (!pop) return;
    if (!pop.contains(e.target) && !e.target.closest('.skill-node')) _closeSkillPopover();
  }, true);
}

function _closeSkillPopover() {
  const pop = document.getElementById('skill-popover-global');
  if (pop) pop.classList.remove('visible');
}

/* ── Estado e lógica do widget de Incremento de Habilidade ── */
const ihState = {};

function _ihTipo(habNome) {
  if (!habNome) return null;
  if (habNome.includes('Incremento de Habilidade')) return 'ih';
  if (habNome.includes('Campeão Primitivo')) return 'campiao';
  return null;
}

function _ihKey(habNome, habNivel) {
  return 'ih_' + habNome.replace(/\s/g, '_') + '_nv' + habNivel;
}

// Retorna atributos base (point buy + racial) SEM nenhum bônus de IH
// Usado pelo widget de IH para exibir cada incremento de forma isolada
function _getBaseSeIH() {
  const raca     = document.getElementById('char-race').value;
  const bonusFix = getRacialBonusAtivo(raca);
  const livreQtd = RACIAL_LIVRE[raca] || 0;
  const base = {};
  ATTRS.forEach(a => {
    const racial = bonusFix.filter(b => b[0] === a).reduce((s,b) => s+b[1], 0);
    let livre = 0;
    for (let i = 0; i < livreQtd; i++) {
      if (racialLivreEscolhas['slot' + i] === a) livre++;
    }
    base[a] = pbValores[a] + racial + livre;
  });
  return base;
}

function _renderIHWidget(habNome, habNivel) {
  const tipo = _ihTipo(habNome);
  if (!tipo) return '';

  const key = _ihKey(habNome, habNivel);
  const ATTRS_LIST = ['FOR','DES','CON','INT','SAB','CAR'];

  const maxPontos    = tipo === 'campiao' ? 8 : 2;
  const maxPorAttr   = tipo === 'campiao' ? 4 : 2;
  const maxValor     = tipo === 'campiao' ? 24 : 20;
  const somenteFOR_CON = tipo === 'campiao';

  if (!ihState[key]) {
    ihState[key] = { FOR:0, DES:0, CON:0, INT:0, SAB:0, CAR:0 };
  }
  const dist = ihState[key];
  const totalGasto = ATTRS_LIST.reduce((s, a) => s + (dist[a] || 0), 0);
  const restantes  = maxPontos - totalGasto;

  // Base pura sem nenhum IH
  const base = _getBaseSeIH();

  // Bônus dos outros IHs (para exibição do valor acumulado e verificação de cap)
  const outrosIH = {};
  ATTRS_LIST.forEach(a => {
    let soma = 0;
    for (const k of Object.keys(ihState)) {
      if (k !== key) soma += ihState[k][a] || 0;
    }
    outrosIH[a] = soma;
  });

  const titulo = tipo === 'ih'
    ? 'Distribuir +2 pontos de atributo'
    : 'Campeão Primitivo — FOR e CON +4';

  // data-ih-key e data-ih-nome/nivel ficam no wrapper para o refresh usar diretamente
  let html = `<div class="spop-ih-wrap" data-ih-key="${key}" data-ih-nome="${habNome.replace(/"/g,'&quot;')}" data-ih-nivel="${habNivel}">
    <div class="spop-ih-title">
      ${titulo}
      <span class="spop-ih-pontos ${restantes === 0 ? 'zerado' : ''}">${restantes} pt${restantes !== 1 ? 's' : ''} restante${restantes !== 1 ? 's' : ''}</span>
    </div>
    <div class="spop-ih-grid">`;

  for (const a of ATTRS_LIST) {
    const bloqueado  = somenteFOR_CON && a !== 'FOR' && a !== 'CON';
    const bonus      = dist[a] || 0;
    const temBonus   = bonus > 0;
    const valorBase  = base[a] || 8;
    const valorTotal = valorBase + outrosIH[a] + bonus;
    const podeMais   = !bloqueado && restantes > 0 && bonus < maxPorAttr && valorTotal < maxValor;
    const podeMenos  = !bloqueado && bonus > 0;

    html += `<div class="spop-ih-attr ${temBonus ? 'tem-bonus' : ''}">
      <span class="spop-ih-attr-sigla">${a}</span>
      <span class="spop-ih-attr-val">${valorBase + outrosIH[a]}${temBonus ? `<span style="color:var(--gold);font-size:10px;">+${bonus}</span>` : ''}</span>
      <span class="spop-ih-attr-bonus">${temBonus ? '= ' + valorTotal : ''}</span>
      <div class="spop-ih-btn-row">
        <button class="spop-ih-attr-plus"
          onclick="_ihAjustar('${key}','${a}',-1)"
          ${!podeMenos ? 'disabled' : ''}>−</button>
        <button class="spop-ih-attr-plus"
          onclick="_ihAjustar('${key}','${a}',1)"
          ${!podeMais ? 'disabled' : ''}>+</button>
      </div>
    </div>`;
  }

  html += `</div>`;
  if (totalGasto > 0) {
    html += `<button class="spop-ih-reset" onclick="_ihReset('${key}')">↺ limpar distribuição</button>`;
  }
  html += `</div>`;
  return html;
}

function _ihAjustar(key, attr, delta) {
  if (!ihState[key]) ihState[key] = { FOR:0, DES:0, CON:0, INT:0, SAB:0, CAR:0 };
  ihState[key][attr] = Math.max(0, (ihState[key][attr] || 0) + delta);
  _ihRefreshWidget();
  renderAtributosFinal();
}

function _ihReset(key) {
  ihState[key] = { FOR:0, DES:0, CON:0, INT:0, SAB:0, CAR:0 };
  _ihRefreshWidget();
  renderAtributosFinal();
}

function _ihRefreshWidget() {
  const ihEl = document.getElementById('spop-ih');
  if (!ihEl) return;
  // Lê nome e nível diretamente do data-attribute gravado no wrapper — sem parse de texto
  const wrap = ihEl.querySelector('[data-ih-key]');
  if (!wrap) return;
  const habNome  = wrap.dataset.ihNome;
  const habNivel = parseInt(wrap.dataset.ihNivel) || 1;
  ihEl.innerHTML = _renderIHWidget(habNome, habNivel);
}

// Soma todos os bônus IH distribuídos — chamada por getValoresFinais
function getIHBonuses() {
  const totais = { FOR:0, DES:0, CON:0, INT:0, SAB:0, CAR:0 };
  for (const key of Object.keys(ihState)) {
    for (const a of Object.keys(totais)) {
      totais[a] += ihState[key][a] || 0;
    }
  }
  return totais;
}

function openSkillNode(nodeEl, hab, nivel, classe) {
  _ensureSkillPopover();
  const isEN = currentLang === 'en';
  const pop = document.getElementById('skill-popover-global');
  const temTracker = hab.id && hab.formula;
  const disponivel = hab.nivel <= nivel;
  const max = (temTracker && disponivel) ? calcularUsos(hab.formula, nivel, classe) : 0;

  const habNome = (isEN && hab.nome_en) ? hab.nome_en : hab.nome;
  const habDesc = (isEN && hab.desc_en) ? hab.desc_en : hab.desc;
  const labelLv = isEN ? 'Lv' : 'Nv';

  // nome
  document.getElementById('spop-nome').innerHTML =
    `${hab.icone ? '<span style="font-size:18px;">' + hab.icone + '</span>' : ''}
     <span>${habNome}</span>
     <span class="skill-popover-nivel">${disponivel ? '✓ ' + labelLv + ' ' + hab.nivel : '🔒 ' + labelLv + ' ' + hab.nivel}</span>`;

  // desc
  document.getElementById('spop-desc').textContent = habDesc;

  // badges meta
  const meta = document.getElementById('spop-meta');
  meta.innerHTML = '';
  if (hab.recarga) {
    const txt = hab.recarga === 'curto'
      ? (isEN ? '🌙 Short Rest' : '🌙 Desc. Curto')
      : (isEN ? '☀️ Long Rest' : '☀️ Desc. Longo');
    meta.innerHTML += `<span class="skill-popover-badge recarga">${txt}</span>`;
  }
  if (temTracker && max > 0) {
    const notaTxt = typeof hab.nota === 'function' ? hab.nota(nivel) : (hab.nota || '');
    meta.innerHTML += `<span class="skill-popover-badge tracker">⚡ ${notaTxt}</span>`;
  }

  // tracker de usos
  const trackerBox = document.getElementById('spop-tracker');
  if (temTracker && disponivel && max > 0) {
    if (!habState[hab.id]) {
      habState[hab.id] = { max, atual: max };
    } else if (habState[hab.id].max !== max) {
      const gastas = habState[hab.id].max - habState[hab.id].atual;
      habState[hab.id].max = max;
      habState[hab.id].atual = Math.max(0, max - gastas);
    }
    trackerBox.style.display = '';
    if (max >= 99) {
      trackerBox.innerHTML = `<span style="font-family:'Cinzel',serif;font-size:12px;color:#a0e890;padding:4px 10px;border:1px solid rgba(100,200,80,0.3);border-radius:6px;">∞ Ilimitado</span>`;
    } else {
      let orbsHtml = `<div class="skill-popover-tracker-row">
        <button class="hab-orb-btn" onclick="habUsarCarga('${hab.id}')">−</button>
        <div style="display:flex;gap:4px;flex-wrap:wrap;" id="hab-orbs-${hab.id}">`;
      for (let i = 0; i < max; i++) {
        orbsHtml += `<div class="hab-orb" id="hab-orb-${hab.id}-${i}"></div>`;
      }
      orbsHtml += `</div>
        <button class="hab-orb-btn" onclick="habRecuperarCarga('${hab.id}')">+</button>
      </div>`;
      trackerBox.innerHTML = orbsHtml;
      setTimeout(() => _updateHabOrbs(hab.id), 0);
    }
  } else {
    trackerBox.style.display = 'none';
    trackerBox.innerHTML = '';
  }

  // widget IH — só aparece se for uma habilidade de incremento e estiver disponível
  const ihEl = document.getElementById('spop-ih');
  if (ihEl) {
    if (disponivel && _ihTipo(hab.nome)) {
      ihEl.style.display = '';
      ihEl.innerHTML = _renderIHWidget(hab.nome, hab.nivel);
    } else {
      ihEl.style.display = 'none';
      ihEl.innerHTML = '';
    }
  }

  // posicionamento
  const rect = nodeEl.getBoundingClientRect();
  pop.style.top = '';
  pop.style.left = '';
  pop.style.right = '';
  pop.style.bottom = '';
  pop.classList.add('visible');

  const pw  = 300;
  const ph  = _ihTipo(hab.nome) ? 440 : 280;
  let top  = rect.bottom + 8;
  let left = rect.left + rect.width / 2 - pw / 2;
  if (left + pw > window.innerWidth - 12) left = window.innerWidth - pw - 12;
  if (left < 12) left = 12;
  if (top + ph > window.innerHeight - 12) top = rect.top - ph - 8;
  if (top < 12) top = 12;
  pop.style.top  = top + 'px';
  pop.style.left = left + 'px';
  pop.style.maxWidth = pw + 'px';
}

function _renderHabilidadesAbas(classe, nivel, habConfig, isSubclasse) {
  _ensureSkillPopover();
  const isEN = currentLang === 'en';
  const habsAll = habConfig.habilidades;
  const dispCount = habsAll.filter(h => h.nivel <= nivel).length;

  // Init tracker state
  for (const h of habsAll) {
    if (h.id && h.formula && h.nivel <= nivel) {
      const max = calcularUsos(h.formula, nivel, classe);
      if (!habState[h.id]) habState[h.id] = { max, atual: max };
    }
  }

  let html = '';

  // Header bar
  const configNome = isEN && habConfig.nome_en ? habConfig.nome_en : habConfig.nome;
  const labelUnlocked = isEN ? 'unlocked at level' : 'desbloqueadas no nível';
  const labelSub = isEN ? 'subclass' : 'subclasse';
  const labelClick = isEN ? 'click a node to see details' : 'clique em um nó para ver detalhes';
  html += `<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:10px 14px;
    background:linear-gradient(135deg,rgba(0,0,0,0.35),rgba(0,0,0,0.1));
    border:1px solid var(--border);border-left:3px solid ${habConfig.cor};border-radius:6px;">
    <span style="font-size:20px;">${habConfig.icone}</span>
    <div>
      <div style="font-family:'Cinzel',serif;font-size:12px;color:${habConfig.cor};font-weight:600;letter-spacing:0.5px;">${configNome}</div>
      <div style="font-family:'IM Fell English',serif;font-size:11px;color:var(--text-dim);font-style:italic;margin-top:1px;">
        ${dispCount} ${isEN ? 'of' : 'de'} ${habsAll.length} ${labelUnlocked} ${nivel}${isSubclasse ? ' — ' + labelSub : ''} · <span style="color:var(--text-dim)">${labelClick}</span>
      </div>
    </div>
  </div>`;

  // Group habilidades by nivel
  const byNivel = {};
  for (const h of habsAll) {
    if (!byNivel[h.nivel]) byNivel[h.nivel] = [];
    byNivel[h.nivel].push(h);
  }
  const niveis = Object.keys(byNivel).map(Number).sort((a,b)=>a-b);

  html += `<div class="skill-tree-wrap"><div class="skill-tree-timeline">`;

  for (const nv of niveis) {
    html += `<div class="skill-level-col">
      <div class="skill-level-label">${isEN ? 'Lv' : 'Nv'} ${nv}</div>`;
    for (const h of byNivel[nv]) {
      const disponivel = h.nivel <= nivel;
      const temTracker = h.id && h.formula;
      const max = (temTracker && disponivel) ? calcularUsos(h.formula, nivel, classe) : 0;

      const hNome = (isEN && h.nome_en) ? h.nome_en : h.nome;

      let nodeClass = 'skill-node';
      if (!disponivel) nodeClass += ' bloqueada';
      else if (temTracker && max > 0) nodeClass += ' tracker-hab';
      else nodeClass += ' disponivel';

      const recargaIcon = h.recarga === 'curto' ? '🌙' : h.recarga === 'longo' ? '☀️' : '';
      const habJson = JSON.stringify({
        nivel: h.nivel, nome: h.nome, icone: h.icone || '',
        desc: h.desc, recarga: h.recarga || '', id: h.id || '', formula: h.formula || ''
      }).replace(/'/g, '&#39;');

      html += `<div class="${nodeClass}"
        onclick="${disponivel ? `_openSkillNodeById(this, '${h.id||''}', '${(h.nome||'')}', ${h.nivel}, '${classe}', ${nivel})` : ''}">
        <div class="skill-node-icon">${h.icone || '⚡'}</div>
        <div class="skill-node-nome">${hNome}</div>
        ${!disponivel ? '<span class="skill-node-lock">🔒</span>' : ''}
        ${recargaIcon && disponivel ? `<span class="skill-node-recarga">${recargaIcon}</span>` : ''}
      </div>`;
    }
    html += `</div>`;
  }

  html += `</div></div>`;

  // Store habilidades on window for popover lookup — done via JS directly (innerHTML doesn't run scripts)
  if (!window._habDataMap) window._habDataMap = {};
  for (const h of habsAll) {
    // Usa id quando existe; caso contrário usa nome+nivel para evitar colisão
    // entre habilidades com mesmo nome em níveis diferentes (ex: Incremento de Habilidade)
    const key = (h.id && h.id !== '') ? h.id : (h.nome + '__nv' + h.nivel);
    window._habDataMap[key] = {
      nivel: h.nivel, nome: h.nome, nome_en: h.nome_en||'', icone: h.icone||'', desc: h.desc,
      desc_en: h.desc_en||'', recarga: h.recarga||'', id: h.id||'', formula: h.formula||'',
      nota: h.nota || null
    };
  }

  return html;
}

function _openSkillNodeById(nodeEl, habId, habNome, habNivel, classe, nivelPersonagem) {
  // Monta a mesma key usada ao gravar: id quando existe, nome+nivel caso contrário
  const mapKey = (habId && habId !== '') ? habId : (habNome + '__nv' + habNivel);
  const habData = (window._habDataMap && window._habDataMap[mapKey]) || null;
  if (!habData) return;
  if (habData.nota && typeof habData.nota === 'string') {
    try { habData.nota = eval('(' + habData.nota + ')'); } catch(e) { habData.nota = null; }
  }
  openSkillNode(nodeEl, habData, nivelPersonagem, classe);
}

function _magiasBoxExplicativo(tipo, classe, nivel) {
  const isEN = currentLang === 'en';
  if (!classe) {
    return isEN
      ? `Choose your <b>class</b> and <b>level</b> in Section 1 — your character's features, spells, and powers will appear here automatically.`
      : `Escolha sua <b>classe</b> e <b>nível</b> na Seção 1 — as habilidades, magias e poderes do seu personagem aparecerão aqui automaticamente.`;
  }
  if (tipo === 'nao-conjurador') {
    return isEN
      ? `<b>${_classDisplayName(classe)}</b> is a martial class. You don't cast spells, but you have powerful features that define your combat style. Use the rest buttons to recover spent charges.`
      : `<b>${_classDisplayName(classe)}</b> é uma classe marcial. Você não conjura magias, mas possui habilidades poderosas que definem seu estilo de combate. Use os botões de descanso para recuperar cargas gastas.`;
  }
  if (tipo === 'bruxo') {
    return isEN
      ? `<b>Warlock</b> uses <em>Pact Magic</em> — all your spell slots are the same level and recover on both <b>short</b> and long rests. At level ${nivel} you have <b>${SLOTS_BRUXO[nivel-1][1]} slot(s) of ${SLOTS_BRUXO[nivel-1][0]}th level</b>.`
      : `<b>Bruxo</b> usa <em>Magia de Pacto</em> — todos seus espaços são do mesmo nível e se recuperam tanto em <b>descanso curto</b> quanto em descanso longo. No nível ${nivel} você tem <b>${SLOTS_BRUXO[nivel-1][1]} espaços de ${SLOTS_BRUXO[nivel-1][0]}º nível</b>.`;
  }
  if (tipo === 'meio') {
    return isEN
      ? `<b>${_classDisplayName(classe)}</b> is a half-caster. Your spell slots recover on a <b>long rest</b>. Your spells use <b>${_atribConj(classe)}</b> as their spellcasting ability.`
      : `<b>${_classDisplayName(classe)}</b> é um meio-conjurador. Seus espaços de magia se recuperam em <b>descanso longo</b>. As magias que você prepara usam <b>${_atribConj(classe)}</b> como atributo.`;
  }
  if (tipo === 'artifice') {
    return isEN
      ? `<b>Artificer</b> infuses magic into objects. Your spell slots recover on a <b>long rest</b>. You use <b>Intelligence</b> to cast spells. In addition to spell slots, you have magical infusions that also renew after a long rest.`
      : `<b>Artífice</b> infunde magia em objetos. Seus espaços se recuperam em <b>descanso longo</b>. Usa <b>Inteligência</b> para conjurar. Além dos espaços, você tem infusões mágicas que se renovam após descanso longo.`;
  }
  return isEN
    ? `<b>${_classDisplayName(classe)}</b> is a full caster. Your spell slots recover on a <b>long rest</b>. Cantrips (<em>0th-level spells</em>) use no slots and can be cast freely.`
    : `<b>${_classDisplayName(classe)}</b> é um conjurador pleno. Seus espaços de magia se recuperam em <b>descanso longo</b>. Truques (<em>magias de 0º nível</em>) não usam espaços e podem ser lançados à vontade.`;
}

function _atribConj(classe) {
  if (currentLang === 'en') {
    const nomesEN = { INT:'Intelligence', SAB:'Wisdom', CAR:'Charisma' };
    const atr = CLASSE_CONJURACAO[classe] || 'INT';
    return nomesEN[atr] || atr;
  }
  const nomes = { INT:'Inteligência', SAB:'Sabedoria', CAR:'Carisma' };
  const atr = CLASSE_CONJURACAO[classe] || 'INT';
  return nomes[atr] || atr;
}

function _classDisplayName(classe) {
  if (currentLang === 'en') {
    return CLASSE_NAMES_EN[classe] || classe;
  }
  const nomes = { artifice:'Artífice',barbaro:'Bárbaro',bardo:'Bardo',bruxo:'Bruxo',clerigo:'Clérigo',druida:'Druida',feiticeiro:'Feiticeiro',guerreiro:'Guerreiro',ladino:'Ladino',mago:'Mago',monge:'Monge',paladino:'Paladino',patrulheiro:'Patrulheiro' };
  return nomes[classe] || classe;
}

/* ─── RENDER HABILIDADES ESPECIAIS ─── */
// Estado dos contadores de habilidades especiais
const habState = {};

function _renderHabilidadesEspeciais(classe, nivel) {
  const hab = HABILIDADES_ESPECIAIS[classe];
  if (!hab) return '';
  const habsDisponiveis = hab.habilidades.filter(h => h.nivel <= nivel);
  if (!habsDisponiveis.length) return '';

  // Inicializa estado dos trackers
  for (const h of habsDisponiveis) {
    if (h.id && h.formula) {
      const max = calcularUsos(h.formula, nivel, classe);
      habState[h.id] = { max, atual: max };
    }
  }

  let html = `<div class="card" style="margin-bottom:16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <span style="font-size:20px;">${hab.icone}</span>
      <span style="font-family:'Cinzel',serif;font-size:14px;color:${hab.cor};font-weight:600;">${hab.nome}</span>
    </div>
    <div style="display:grid;gap:10px;">`;

  for (const h of habsDisponiveis) {
    const temTracker = h.id && h.formula;
    const max = temTracker ? calcularUsos(h.formula, nivel, classe) : 0;
    const iconeRecarga = h.recarga === 'curto'
      ? (currentLang === 'en' ? '🌙 Short Rest' : '🌙 Desc. Curto')
      : h.recarga === 'longo'
        ? (currentLang === 'en' ? '☀️ Long Rest' : '☀️ Desc. Longo')
        : null;

    html += `<div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:12px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;">
          ${h.icone ? `<span style="font-size:16px;">${h.icone}</span>` : ''}
          <span style="font-family:'Cinzel',serif;font-size:13px;color:var(--gold);">${h.nome}</span>
          ${iconeRecarga ? `<span style="font-size:10px;padding:2px 7px;border-radius:10px;background:rgba(255,255,255,0.07);color:var(--text-dim);">${iconeRecarga}</span>` : ''}
          <span style="font-size:10px;padding:2px 7px;border-radius:10px;background:rgba(255,255,255,0.05);color:var(--text-dim);">Nv ${h.nivel}+</span>
        </div>`;

    // Tracker de cargas interativo
    if (temTracker && max > 0) {
      if (max >= 99) {
        html += `<span style="font-family:'Cinzel',serif;font-size:12px;color:#a0e890;padding:4px 10px;border:1px solid rgba(100,200,80,0.3);border-radius:6px;">∞ Ilimitado</span>`;
      } else {
        html += `<div style="display:flex;align-items:center;gap:6px;">
          <button onclick="habUsarCarga('${h.id}')" style="width:26px;height:26px;border-radius:50%;border:1px solid var(--accent);background:rgba(255,255,255,0.05);color:var(--text);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;" title="Gastar 1 uso">−</button>
          <div style="display:flex;gap:4px;" id="hab-orbs-${h.id}">`;
        for (let i = 0; i < max; i++) {
          html += `<div class="hab-orb hab-orb-active" id="hab-orb-${h.id}-${i}" style="--orb-color:${hab.cor};"></div>`;
        }
        html += `</div>
          <button onclick="habRecuperar('${h.id}')" style="width:26px;height:26px;border-radius:50%;border:1px solid var(--gold2);background:rgba(255,255,255,0.05);color:var(--gold);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;" title="Recuperar 1 uso">+</button>
        </div>`;
      }
    }

    html += `</div>`;
    html += `<div style="font-family:'IM Fell English',serif;font-size:12px;color:var(--text-dim);line-height:1.6;">${h.desc}</div>`;

    if (temTracker && max > 0 && h.nota) {
      html += `<div style="font-size:11px;color:${hab.cor};margin-top:4px;opacity:0.8;">${h.nota(nivel, classe)}</div>`;
    }
    html += `</div>`;
  }

  html += `</div></div>`;
  return html;
}

function habUsarCarga(id) {
  const s = habState[id];
  if (!s || s.atual <= 0) return;
  s.atual--;
  _updateHabOrbs(id);
}

function habRecuperarCarga(id) { habRecuperar(id); }

function habRecuperar(id) {
  const s = habState[id];
  if (!s || s.atual >= s.max) return;
  s.atual++;
  _updateHabOrbs(id);
}

function _updateHabOrbs(id) {
  const s = habState[id];
  if (!s) return;
  for (let i = 0; i < s.max; i++) {
    const orb = document.getElementById('hab-orb-' + id + '-' + i);
    if (!orb) continue;
    orb.className = i < s.atual ? 'hab-orb' : 'hab-orb gasto';
  }
}

/* ─── RENDER CONJURAÇÃO ─── */
function _renderConjuracao(tipo, classe, nivel) {
  let html = '';

  const isEN = currentLang === 'en';
  const atribNome = _atribConj(classe);
  const atribKey  = CLASSE_CONJURACAO[classe] || 'INT';
  const modConj   = getModificador(atribKey);
  const profBonus = getProfBonus(nivel);
  const cdMagia   = 8 + profBonus + modConj;
  const ataqueConj = profBonus + modConj;

  const lbl = {
    spellcasting: isEN ? 'SPELLCASTING' : 'CONJURAÇÃO',
    attribute:    isEN ? 'Attribute'    : 'Atributo',
    spellDC:      isEN ? 'Spell Save DC': 'CD de Magia',
    spellAtk:     isEN ? 'Spell Attack' : 'Ataque de Magia',
    cantrips:     isEN ? 'Cantrips Known': 'Truques Conhecidos',
    cantripDesc:  (n) => isEN ? `${n} cantrip${n!==1?'s':''} — no spell slot needed, unlimited use` : `${n} truque${n!==1?'s':''} — sem espaço de magia, uso ilimitado`,
    prepared:     isEN ? 'PREPARED SPELLS' : 'MAGIAS PREPARADAS',
    known:        isEN ? 'SPELLS KNOWN'    : 'MAGIAS CONHECIDAS',
    spellbook:    isEN ? 'WIZARD SPELLBOOK': 'GRIMÓRIO DO MAGO',
    prepNote1:    isEN ? 'You can prepare' : 'Você pode preparar',
    prepNote2:    isEN ? 'spell(s) after each long rest' : 'magia(s) após cada descanso longo',
    domainNote:   isEN ? 'All domain/circle spells are always prepared.' : 'Todas as magias do seu domínio/círculo sempre estão preparadas.',
    warlockNote:  (n) => isEN ? `You know <b style="color:var(--gold);">${n} spells</b> (permanent — don't change with rests).` : `Você conhece <b style="color:var(--gold);">${n} magias</b> de bruxo (permanentes — não mudam com descanso).`,
    knownNote:    (n) => isEN ? `You know <b style="color:var(--gold);">${n} spells</b>.` : `Você conhece <b style="color:var(--gold);">${n} magias</b>.`,
    spellbookNote:(n) => isEN ? `You start with <b style="color:var(--gold);">6 1st-level spells</b> in your spellbook. You add 2 spells per level. You can prepare <b style="color:var(--gold);">${n}</b> spells per day (INT mod + level).` : `Você começa com <b style="color:var(--gold);">6 magias de 1º nível</b> no seu grimório. A cada nível, adiciona 2 magias ao grimório. Você pode preparar <b style="color:var(--gold);">${n}</b> magias por dia (mod. INT + nível).`,
    textareaPrep: isEN ? 'Note your prepared spells here...' : 'Anote aqui suas magias preparadas...',
    textareaKnown:isEN ? 'Note your known spells here...'   : 'Anote aqui suas magias conhecidas...',
    textareaBook: isEN ? 'List your spellbook spells here...' : 'Liste aqui as magias do seu grimório...',
    textareaSpells:isEN? 'Note your spells here...'         : 'Anote aqui suas magias...',
  };

  // Card de stats de conjuração
  html += `<div class="card" style="margin-bottom:16px;">
    <div style="font-family:'Cinzel',serif;font-size:13px;color:var(--accent);margin-bottom:12px;letter-spacing:1px;">📖 ${lbl.spellcasting} — ${_classDisplayName(classe).toUpperCase()}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:14px;">
      <div style="background:var(--infernal);border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${lbl.attribute}</div>
        <div style="font-family:'Cinzel',serif;font-size:16px;color:var(--gold);">${atribNome}</div>
      </div>
      <div style="background:var(--infernal);border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${lbl.spellDC}</div>
        <div style="font-family:'Cinzel',serif;font-size:22px;color:var(--accent);">${cdMagia}</div>
      </div>
      <div style="background:var(--infernal);border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${lbl.spellAtk}</div>
        <div style="font-family:'Cinzel',serif;font-size:22px;color:var(--gold);">${ataqueConj >= 0 ? '+' : ''}${ataqueConj}</div>
      </div>
    </div>`;

  // Truques
  const numTruques = _getTruques(tipo, classe, nivel);
  if (numTruques > 0) {
    html += `<div style="border-top:1px solid var(--border);padding-top:10px;">
      <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">${lbl.cantrips}</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="display:flex;gap:5px;flex-wrap:wrap;">`;
    for (let i = 0; i < numTruques; i++) {
      html += `<div style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.08);border:1.5px solid var(--accent);display:flex;align-items:center;justify-content:center;font-size:12px;" title="${isEN?'Cantrip':'Truque'} ${i+1}">✦</div>`;
    }
    html += `</div>
        <span style="font-family:'IM Fell English',serif;font-size:12px;color:var(--text-dim);">${lbl.cantripDesc(numTruques)}</span>
      </div>
    </div>`;
  }

  html += '</div>'; // fecha card stats

  // Magias preparadas (clérigo, druida, paladino, artífice) ou conhecidas
  if (['clerigo','druida'].includes(classe)) {
    const qtd = Math.max(1, modConj + nivel);
    html += `<div class="card" style="margin-bottom:16px;padding:14px;">
      <div style="font-family:'Cinzel',serif;font-size:12px;color:var(--gold);margin-bottom:8px;">📜 ${lbl.prepared}</div>
      <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);line-height:1.6;">
        ${lbl.prepNote1} <b style="color:var(--gold);">${qtd}</b> ${lbl.prepNote2}
        <span style="font-size:11px;">(${isEN?'mod.':' mod.'} ${atribNome} ${modConj>=0?'+':''}${modConj} + ${isEN?'level':'nível'} ${nivel} = ${qtd})</span>.<br>
        ${lbl.domainNote}
      </div>
      <textarea style="width:100%;margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:6px;padding:10px;color:var(--text);font-family:'IM Fell English',serif;font-size:12px;resize:vertical;min-height:70px;" placeholder="${lbl.textareaPrep}"></textarea>
    </div>`;
  } else if (['paladino','patrulheiro'].includes(classe)) {
    const qtd = Math.max(1, modConj + Math.floor(nivel/2));
    html += `<div class="card" style="margin-bottom:16px;padding:14px;">
      <div style="font-family:'Cinzel',serif;font-size:12px;color:var(--gold);margin-bottom:8px;">📜 ${lbl.prepared}</div>
      <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);line-height:1.6;">
        ${lbl.prepNote1} <b style="color:var(--gold);">${qtd}</b> ${lbl.prepNote2}
        <span style="font-size:11px;">(mod. ${atribNome} ${modConj>=0?'+':''}${modConj} + ½ ${isEN?'level':'nível'} ${Math.floor(nivel/2)} = ${qtd})</span>.
      </div>
      <textarea style="width:100%;margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:6px;padding:10px;color:var(--text);font-family:'IM Fell English',serif;font-size:12px;resize:vertical;min-height:70px;" placeholder="${lbl.textareaPrep}"></textarea>
    </div>`;
  } else if (tipo === 'bruxo') {
    const qtd = MAGIAS_CONHECIDAS_BRUXO[nivel-1];
    html += `<div class="card" style="margin-bottom:16px;padding:14px;">
      <div style="font-family:'Cinzel',serif;font-size:12px;color:var(--gold);margin-bottom:8px;">📜 ${lbl.known}</div>
      <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);">${lbl.warlockNote(qtd)}</div>
      <textarea style="width:100%;margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:6px;padding:10px;color:var(--text);font-family:'IM Fell English',serif;font-size:12px;resize:vertical;min-height:70px;" placeholder="${lbl.textareaKnown}"></textarea>
    </div>`;
  } else if (tipo === 'pleno') {
    const qtdArr = { bardo:MAGIAS_CONHECIDAS_BARDO, feiticeiro:MAGIAS_CONHECIDAS_FEITICEIRO };
    if (qtdArr[classe]) {
      const qtd = qtdArr[classe][nivel-1];
      html += `<div class="card" style="margin-bottom:16px;padding:14px;">
        <div style="font-family:'Cinzel',serif;font-size:12px;color:var(--gold);margin-bottom:8px;">📜 ${lbl.known}</div>
        <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);">${lbl.knownNote(qtd)}</div>
        <textarea style="width:100%;margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:6px;padding:10px;color:var(--text);font-family:'IM Fell English',serif;font-size:12px;resize:vertical;min-height:70px;" placeholder="${lbl.textareaSpells}"></textarea>
      </div>`;
    } else {
      // Mago: grimório
      html += `<div class="card" style="margin-bottom:16px;padding:14px;">
        <div style="font-family:'Cinzel',serif;font-size:12px;color:var(--gold);margin-bottom:8px;">📖 ${lbl.spellbook}</div>
        <div style="font-family:'IM Fell English',serif;font-size:13px;color:var(--text-dim);line-height:1.5;">${lbl.spellbookNote(Math.max(1, modConj + nivel))}</div>
        <textarea style="width:100%;margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:6px;padding:10px;color:var(--text);font-family:'IM Fell English',serif;font-size:12px;resize:vertical;min-height:70px;" placeholder="${lbl.textareaBook}"></textarea>
      </div>`;
    }
  }

  return html;
}

/* ─── SLOT TRACKER (Baldur's Gate 3 style) ─── */
function _renderSlotTracker(tipo, classe, nivel) {
  const slotsInfo = _getSlotsInfo(tipo, classe, nivel);
  if (!slotsInfo.length) return '';

  const isEN = currentLang === 'en';
  const isBruxo = tipo === 'bruxo';
  const recargaTitulo = isBruxo
    ? (isEN ? '⚡ Recovers on Short or Long Rest' : '⚡ Recupera em Descanso Curto ou Longo')
    : (isEN ? '☀️ Recovers on Long Rest'          : '☀️ Recupera em Descanso Longo');
  const corRecarga = isBruxo ? '#70c8a0' : '#e8c030';
  const lblSlots   = isEN ? 'SPELL SLOTS' : 'ESPAÇOS DE MAGIA';
  const lblUsar    = isEN ? 'Use'         : 'Usar';
  const lblCurto   = isEN ? 'Short Rest'  : 'Descanso Curto';
  const lblLongo   = isEN ? 'Long Rest'   : 'Descanso Longo';

  let html = `<div class="card" style="margin-bottom:16px;">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
      <div style="font-family:'Cinzel',serif;font-size:13px;color:var(--accent);letter-spacing:1px;">🔮 ${lblSlots}</div>
      <div style="font-size:11px;color:${corRecarga};">${recargaTitulo}</div>
    </div>
    <div id="slot-tracker-container" style="display:grid;gap:12px;">`;

  for (let i = 0; i < slotsInfo.length; i++) {
    const info = slotsInfo[i];
    const nv = info.nivel;
    const total = info.total;
    if (total <= 0) continue;

    const nvLabel = isEN
      ? (nv === 1 ? '1st level' : nv === 2 ? '2nd level' : nv === 3 ? '3rd level' : nv + 'th level')
      : (nv + 'º nível');
    const lblSlotCount = isEN ? `slots` : `espaços`;

    html += `<div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:10px;padding:12px;" id="slot-row-${nv}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <span style="font-family:'Cinzel',serif;font-size:12px;color:var(--gold);">${nvLabel}</span>
        <span style="font-size:11px;color:var(--text-dim);"><span id="slot-current-${nv}">${total}</span> / ${total} ${lblSlotCount}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <div style="display:flex;gap:5px;flex-wrap:wrap;" id="slot-orbs-${nv}">`;

    for (let j = 0; j < total; j++) {
      html += `<div class="slot-orb slot-orb-active" id="slot-orb-${nv}-${j}" style="--orb-color:${_slotColor(nv)};"></div>`;
    }

    html += `</div>
        <button class="slot-use-btn" onclick="usarSlot(${nv})" id="slot-btn-${nv}" title="${isEN?'Spend 1 '+nvLabel+' slot':'Gastar 1 espaço de '+nvLabel}">
          <span>🔮</span> ${lblUsar}
        </button>
      </div>
    </div>`;
  }

  // Mensagem de estado
  html += `<div id="slot-msg" style="font-family:'IM Fell English',serif;font-size:12px;min-height:18px;text-align:center;transition:all 0.3s;"></div>`;

  // Botões de descanso
  html += `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;">
    <button class="rest-btn rest-curto" onclick="descansoCurto()"><span>🌙</span> ${lblCurto}</button>
    <button class="rest-btn rest-longo" onclick="descansoLongo()"><span>☀️</span> ${lblLongo}</button>
  </div>`;

  html += '</div></div>'; // fecha grid e card
  return html;
}

function _slotColor(nivel) {
  const cores = ['','#c89844','#7eb8d8','#a070d0','#d04060','#e88030','#50c090','#e8c030','#e050d0','#ffffff'];
  return cores[nivel] || '#aaa';
}

function _getSlotsInfo(tipo, classe, nivel) {
  let tabela;
  if (tipo === 'pleno') tabela = SLOTS_PLENO[nivel-1];
  else if (tipo === 'meio') tabela = SLOTS_MEIO[nivel-1];
  else if (tipo === 'terca') tabela = SLOTS_TERCA[nivel-1];
  else if (tipo === 'artifice') tabela = SLOTS_ARTIFICE[nivel-1];
  else if (tipo === 'bruxo') {
    const bInfo = SLOTS_BRUXO[nivel-1];
    return [{ nivel: bInfo[0], total: bInfo[1] }];
  }
  else return [];

  return tabela.map((t, i) => ({ nivel: i+1, total: t })).filter(s => s.total > 0);
}

function _getTruques(tipo, classe, nivel) {
  if (tipo === 'nao-conjurador') return 0;
  const map = { bardo:TRUQUES_BARDO, clerigo:TRUQUES_CLERIGO, druida:TRUQUES_DRUIDA, feiticeiro:TRUQUES_FEITICEIRO, mago:TRUQUES_MAGO, artifice:TRUQUES_ARTIFICE };
  if (map[classe]) return map[classe][nivel-1];
  if (tipo === 'terca') return TRUQUES_TERCA[nivel-1];
  return 0;
}

/* ─── INIT E CONTROLE DE SLOTS ─── */
function _initSlots(tipo, classe, nivel) {
  const slotsInfo = _getSlotsInfo(tipo, classe, nivel);
  magiaState.slots = {};
  for (const s of slotsInfo) {
    magiaState.slots[s.nivel] = { total: s.total, usados: 0 };
  }
}

function _updateAllSlotDisplays() {
  for (const [nv, state] of Object.entries(magiaState.slots)) {
    const disponivel = state.total - state.usados;
    const curr = document.getElementById('slot-current-' + nv);
    if (curr) curr.textContent = disponivel;

    const btn = document.getElementById('slot-btn-' + nv);
    if (btn) btn.disabled = disponivel <= 0;

    for (let j = 0; j < state.total; j++) {
      const orb = document.getElementById('slot-orb-' + nv + '-' + j);
      if (!orb) continue;
      if (j < disponivel) {
        orb.className = 'slot-orb slot-orb-active';
      } else {
        orb.className = 'slot-orb slot-orb-spent';
      }
    }
  }
}

function _showSlotMsg(texto, tipo) {
  const el = document.getElementById('slot-msg');
  if (!el) return;
  const cores = { ok:'#90d870', warn:'#e87040', info:'#70c0e8' };
  el.style.color = cores[tipo] || '#aaa';
  el.textContent = texto;
  clearTimeout(magiaState.msgTimeout);
  magiaState.msgTimeout = setTimeout(() => { if (el) el.textContent = ''; }, 3000);
}

function usarSlot(nivel) {
  const s = magiaState.slots[nivel];
  if (!s) return;
  if (s.usados >= s.total) {
    _showSlotMsg('⚠ Sem espaços de ' + nivel + 'º nível restantes!', 'warn');
    return;
  }
  s.usados++;
  _updateAllSlotDisplays();
  const disp = s.total - s.usados;
  if (disp === 0) {
    _showSlotMsg('Último espaço de ' + nivel + 'º nível usado.', 'warn');
  } else {
    _showSlotMsg('Magia de ' + nivel + 'º lançada. ' + disp + ' espaço(s) restante(s).', 'ok');
  }
}

function descansoCurto() {
  if (magiaState.tipo === 'bruxo') {
    for (const s of Object.values(magiaState.slots)) s.usados = 0;
    _updateAllSlotDisplays();
    _showSlotMsg('🌙 Descanso Curto — espaços de Pacto recuperados!', 'ok');
  } else {
    _showSlotMsg('🌙 Descanso Curto — espaços de magia NÃO se recuperam (apenas descanso longo). Habilidades de recarga curta recuperadas.', 'info');
  }
  // Recupera habilidades com recarga em descanso curto
  const habsCurto = ['ki','forma_selvagem','retomar_folego','surto_acao','canalizar_paladino','canalizar_clerigo','golpe_sorte'];
  for (const id of habsCurto) {
    if (habState[id]) { habState[id].atual = habState[id].max; _updateHabOrbs(id); }
  }
  // Bardo nv5+: Inspiração de Bardo recupera em descanso curto também
  if (magiaState.classe === 'bardo' && magiaState.nivel >= 5 && habState['inspiracao_bardo']) {
    habState['inspiracao_bardo'].atual = habState['inspiracao_bardo'].max;
    _updateHabOrbs('inspiracao_bardo');
  }
}

function descansoLongo() {
  for (const s of Object.values(magiaState.slots)) s.usados = 0;
  _updateAllSlotDisplays();
  // Recupera TODAS as habilidades especiais
  for (const [id, s] of Object.entries(habState)) { s.atual = s.max; _updateHabOrbs(id); }
  _showSlotMsg('☀️ Descanso Longo — todos os recursos recuperados!', 'ok');
}

function getProfBonus(nivel) {
  return Math.ceil(nivel / 4) + 1;
}

function getModificador(attr) {
  const finais = getValoresFinais();
  const val = finais[attr] || 10;
  return Math.floor((val - 10) / 2);
}

/* ═══════════════════════════════════════════════════════════════
   CONTINUAR PARA EQUIPAMENTO
   ═══════════════════════════════════════════════════════════════ */
function continuarEquipamento() {
  const secao = document.getElementById('sec-equipamento');
  const btn = document.getElementById('btn-continuar-4');

  if (btn) btn.style.display = 'none';
  secao.style.display = 'block';

  // Preencher conteúdo
  eqEscolhas = {};
  eqArmasEscolhidas = {};
  renderEquipamentoClasse();
  renderEquipamentoAntecedente();

  // Mostrar botão de salvar
  const btnSalvar = document.getElementById('btn-continuar-5');
  if (btnSalvar) btnSalvar.style.display = 'block';

  // Atualizar progress
  atualizarProgress(5);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      secao.style.opacity = '1';
      secao.style.transform = 'translateY(0)';
    });
  });
  setTimeout(() => { secao.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
}

/* ══════════════════════════════════════════════════════
   BANCO DE ARMAS — PHB Cap.5 (tabelas de armas, p.146–149)
   Fonte confirmada: PHB 5e, Tabela de Armas Simples e Marciais
   ══════════════════════════════════════════════════════ */
const ARMAS_SIMPLES_CORPO = [
  { id:'clava',        nome:'Clava',            dano:'1d4 contundente',   peso:'2 kg',  preco:'1 pc',  props:['Leve'] },
  { id:'adaga',        nome:'Adaga',            dano:'1d4 perfurante',    peso:'0,5 kg',preco:'2 po',  props:['Arremesso (6/18m)','Finesse','Leve','Especial'] },
  { id:'ganbeto',      nome:'Ganbeto',          dano:'1d4 contundente',   peso:'1 kg',  preco:'2 pc',  props:['Leve','Especial'] },
  { id:'machadinha',   nome:'Machadinha',        dano:'1d6 cortante',      peso:'1 kg',  preco:'5 po',  props:['Arremesso (6/18m)','Leve'] },
  { id:'azagaia',      nome:'Azagaia',          dano:'1d6 perfurante',    peso:'1 kg',  preco:'5 pc',  props:['Arremesso (9/36m)'] },
  { id:'martelo-leve', nome:'Martelo Leve',     dano:'1d4 contundente',   peso:'1 kg',  preco:'2 po',  props:['Arremesso (6/18m)','Leve'] },
  { id:'maca',         nome:'Maça',             dano:'1d6 contundente',   peso:'2 kg',  preco:'5 po',  props:[] },
  { id:'basto',        nome:'Bastão',           dano:'1d6 contundente',   peso:'2 kg',  preco:'2 pc',  props:['Versátil (1d8)'] },
  { id:'foice-curta',  nome:'Foice Curta',      dano:'1d4 cortante',      peso:'1 kg',  preco:'1 po',  props:['Leve'] },
  { id:'lança',        nome:'Lança',            dano:'1d6 perfurante',    peso:'1,5 kg',preco:'1 po',  props:['Arremesso (6/18m)','Versátil (1d8)'] },
];
const ARMAS_SIMPLES_DISTANCIA = [
  { id:'besta-leve',   nome:'Besta Leve',       dano:'1d8 perfurante',    peso:'2,5 kg',preco:'25 po', props:['Munição (18/72m)','Recarga','A Duas Mãos'] },
  { id:'dardo',        nome:'Dardo',            dano:'1d4 perfurante',    peso:'0,1 kg',preco:'5 pc',  props:['Arremesso (6/18m)','Finesse'] },
  { id:'funda',        nome:'Funda',            dano:'1d4 contundente',   peso:'—',     preco:'1 pc',  props:['Munição (9/36m)'] },
  { id:'arco-curto',   nome:'Arco Curto',       dano:'1d6 perfurante',    peso:'1 kg',  preco:'25 po', props:['Munição (24/96m)','A Duas Mãos'] },
];
const ARMAS_MARCIAIS_CORPO = [
  { id:'batalha-machado', nome:'Machado de Batalha', dano:'1d8 cortante',   peso:'2 kg',  preco:'10 po', props:['Versátil (1d10)'] },
  { id:'espada-longa',    nome:'Espada Longa',        dano:'1d8 cortante',   peso:'1,5 kg',preco:'15 po', props:['Versátil (1d10)'] },
  { id:'espada-curta',    nome:'Espada Curta',        dano:'1d6 perfurante', peso:'1 kg',  preco:'10 po', props:['Finesse','Leve'] },
  { id:'rapieira',        nome:'Rapieira',            dano:'1d8 perfurante', peso:'1 kg',  preco:'25 po', props:['Finesse'] },
  { id:'sabre',           nome:'Sabre',               dano:'1d6 cortante',   peso:'1,5 kg',preco:'15 po', props:['Finesse','Leve'] },
  { id:'espada-grande',   nome:'Espada Grande',       dano:'2d6 cortante',   peso:'3 kg',  preco:'50 po', props:['Pesada','A Duas Mãos'] },
  { id:'machado-grande',  nome:'Machado Grande',      dano:'1d12 cortante',  peso:'3,5 kg',preco:'30 po', props:['Pesada','A Duas Mãos'] },
  { id:'machadinha-dupla',nome:'Machadinha Dupla',    dano:'1d6 cortante',   peso:'3 kg',  preco:'20 po', props:['Pesada','A Duas Mãos'] },
  { id:'alabarda',        nome:'Alabarda',            dano:'1d10 cortante',  peso:'3 kg',  preco:'20 po', props:['Pesada','Alcance','A Duas Mãos'] },
  { id:'lança-guerra',    nome:'Lança de Guerra',     dano:'1d12 perfurante',peso:'3 kg',  preco:'5 po',  props:['Alcance','A Duas Mãos'] },
  { id:'glaive',          nome:'Glaive',              dano:'1d10 cortante',  peso:'3 kg',  preco:'20 po', props:['Pesada','Alcance','A Duas Mãos'] },
  { id:'maça-guerra',     nome:'Maça de Guerra',      dano:'1d8 contundente',peso:'2 kg',  preco:'15 po', props:['Versátil (1d10)'] },
  { id:'mangual',         nome:'Mangual',             dano:'1d8 contundente',peso:'1 kg',  preco:'10 po', props:[] },
  { id:'pique',           nome:'Pique',               dano:'1d10 perfurante',peso:'4,5 kg',preco:'5 po',  props:['Pesada','Alcance','A Duas Mãos'] },
  { id:'corrente',        nome:'Corrente Espinhosa',  dano:'2d4 perfurante', peso:'3 kg',  preco:'25 po', props:['Pesada','Alcance','A Duas Mãos'] },
  { id:'tridente',        nome:'Tridente',            dano:'1d6 perfurante', peso:'2 kg',  preco:'5 po',  props:['Arremesso (6/18m)','Versátil (1d8)'] },
  { id:'cimitarra',       nome:'Cimitarra',           dano:'1d6 cortante',   peso:'1,5 kg',preco:'25 po', props:['Finesse','Leve'] },
  { id:'espada-bastarda', nome:'Espada Bastarda',     dano:'1d8 cortante',   peso:'3 kg',  preco:'35 po', props:['Especial','Versátil (1d10)'] },
  { id:'lança-longa',     nome:'Lança Longa',         dano:'1d10 perfurante',peso:'3 kg',  preco:'10 po', props:['Pesada','Alcance','Especial','A Duas Mãos'] },
  { id:'lança-curta',     nome:'Lança Curta',         dano:'1d6 perfurante', peso:'1 kg',  preco:'1 po',  props:['Versátil (1d8)'] },
  { id:'martelo-guerra',  nome:'Martelo de Guerra',   dano:'1d8 contundente',peso:'1 kg',  preco:'15 po', props:['Versátil (1d10)'] },
  { id:'garras-tigre',    nome:'Garras de Tigre',     dano:'1d4 cortante',   peso:'—',     preco:'—',     props:['Finesse','Leve','Especial'] },
];
const ARMAS_MARCIAIS_DISTANCIA = [
  { id:'arco-longo',     nome:'Arco Longo',       dano:'1d8 perfurante',   peso:'1 kg',  preco:'50 po', props:['Munição (45/180m)','Pesada','A Duas Mãos'] },
  { id:'arco-comp',      nome:'Arco Composto',     dano:'1d6 perfurante',   peso:'1 kg',  preco:'75 po', props:['Munição (30/120m)','Pesada','A Duas Mãos'] },
  { id:'besta-manual',   nome:'Besta Manual',      dano:'1d6 perfurante',   peso:'1,5 kg',preco:'75 po', props:['Munição (9/36m)','Leve','Recarga'] },
  { id:'besta-pesada',   nome:'Besta Pesada',      dano:'1d10 perfurante',  peso:'4,5 kg',preco:'50 po', props:['Munição (30/120m)','Pesada','Recarga','A Duas Mãos'] },
  { id:'zarabatana',     nome:'Zarabatana',         dano:'1 perfurante',     peso:'0,5 kg',preco:'10 po', props:['Munição (7.5/30m)','Recarga'] },
  { id:'arremesso-rede', nome:'Rede',               dano:'—',               peso:'1,5 kg',preco:'1 po',  props:['Arremesso (1.5/4.5m)','Especial'] },
];

// Proficiências com armas por classe — PHB cap.3
const CLASSE_PROF_ARMAS = {
  artifice:    { tipo:'simples', extras:[] },
  barbaro:     { tipo:'ambas',   extras:[] },
  bardo:       { tipo:'simples', extras:['rapieira','espada-longa','espada-curta','arco-longo'] },
  bruxo:       { tipo:'simples', extras:[] },
  clerigo:     { tipo:'simples', extras:[] }, // varia por domínio; base = simples
  druida:      { tipo:'simples', extras:['cimitarra'] }, // não usa metal, mas cimitarra é exceção PHB
  feiticeiro:  { tipo:'simples', extras:[] },
  guerreiro:   { tipo:'ambas',   extras:[] },
  ladino:      { tipo:'simples', extras:['rapieira','espada-longa','espada-curta','arco-longo','besta-manual'] },
  mago:        { tipo:'none',    extras:['adaga','dardo','funda','besta-leve','basto'] },
  monge:       { tipo:'simples', extras:['espada-curta'] },
  paladino:    { tipo:'ambas',   extras:[] },
  patrulheiro: { tipo:'ambas',   extras:[] },
};

// Instrumentos musicais (bardo)
const INSTRUMENTOS = [
  'Alaúde','Flauta','Cítara','Trompa','Harpa pequena','Pandeiro',
  'Alaúde de guerra','Violino','Cornamusa','Flauta de osso',
  'Trompete','Tambor','Órgão portátil','Shawm',
];
const INSTRUMENTOS_EN = [
  'Lute','Flute','Cittern','Horn','Dulcimer','Tambourine',
  'Viol','Violin','Bagpipes','Bone Flute',
  'Trumpet','Drum','Pan Flute','Shawm',
];

/* ── Bancos de armas EN ── */
const ARMAS_SIMPLES_CORPO_EN = [
  { id:'clava',        nome:'Club',            dano:'1d4 bludgeoning',  peso:'2 lb',   preco:'1 sp',  props:['Light'] },
  { id:'adaga',        nome:'Dagger',          dano:'1d4 piercing',     peso:'1 lb',   preco:'2 gp',  props:['Thrown (20/60ft)','Finesse','Light','Special'] },
  { id:'ganbeto',      nome:'Greatclub',       dano:'1d4 bludgeoning',  peso:'2 lb',   preco:'2 sp',  props:['Light','Special'] },
  { id:'machadinha',   nome:'Handaxe',         dano:'1d6 slashing',     peso:'2 lb',   preco:'5 gp',  props:['Thrown (20/60ft)','Light'] },
  { id:'azagaia',      nome:'Javelin',         dano:'1d6 piercing',     peso:'2 lb',   preco:'5 sp',  props:['Thrown (30/120ft)'] },
  { id:'martelo-leve', nome:'Light Hammer',    dano:'1d4 bludgeoning',  peso:'2 lb',   preco:'2 gp',  props:['Thrown (20/60ft)','Light'] },
  { id:'maca',         nome:'Mace',            dano:'1d6 bludgeoning',  peso:'4 lb',   preco:'5 gp',  props:[] },
  { id:'basto',        nome:'Quarterstaff',    dano:'1d6 bludgeoning',  peso:'4 lb',   preco:'2 sp',  props:['Versatile (1d8)'] },
  { id:'foice-curta',  nome:'Sickle',          dano:'1d4 slashing',     peso:'2 lb',   preco:'1 gp',  props:['Light'] },
  { id:'lança',        nome:'Spear',           dano:'1d6 piercing',     peso:'3 lb',   preco:'1 gp',  props:['Thrown (20/60ft)','Versatile (1d8)'] },
];
const ARMAS_SIMPLES_DISTANCIA_EN = [
  { id:'besta-leve',   nome:'Light Crossbow',  dano:'1d8 piercing',     peso:'5 lb',   preco:'25 gp', props:['Ammunition (80/320ft)','Loading','Two-Handed'] },
  { id:'dardo',        nome:'Dart',            dano:'1d4 piercing',     peso:'0.25 lb',preco:'5 cp',  props:['Finesse','Thrown (20/60ft)'] },
  { id:'funda',        nome:'Sling',           dano:'1d4 bludgeoning',  peso:'—',      preco:'1 sp',  props:['Ammunition (30/120ft)'] },
  { id:'arco-curto',   nome:'Shortbow',        dano:'1d6 piercing',     peso:'2 lb',   preco:'25 gp', props:['Ammunition (80/320ft)','Two-Handed'] },
];
const ARMAS_MARCIAIS_CORPO_EN = [
  { id:'batalha-machado', nome:'Battleaxe',       dano:'1d8 slashing',    peso:'4 lb',   preco:'10 gp', props:['Versatile (1d10)'] },
  { id:'espada-longa',    nome:'Longsword',        dano:'1d8 slashing',    peso:'3 lb',   preco:'15 gp', props:['Versatile (1d10)'] },
  { id:'espada-curta',    nome:'Shortsword',       dano:'1d6 piercing',    peso:'2 lb',   preco:'10 gp', props:['Finesse','Light'] },
  { id:'rapieira',        nome:'Rapier',           dano:'1d8 piercing',    peso:'2 lb',   preco:'25 gp', props:['Finesse'] },
  { id:'sabre',           nome:'Scimitar',         dano:'1d6 slashing',    peso:'3 lb',   preco:'25 gp', props:['Finesse','Light'] },
  { id:'espada-grande',   nome:'Greatsword',       dano:'2d6 slashing',    peso:'6 lb',   preco:'50 gp', props:['Heavy','Two-Handed'] },
  { id:'machado-grande',  nome:'Greataxe',         dano:'1d12 slashing',   peso:'7 lb',   preco:'30 gp', props:['Heavy','Two-Handed'] },
  { id:'machadinha-dupla',nome:'Glaive',           dano:'1d10 slashing',   peso:'6 lb',   preco:'20 gp', props:['Heavy','Two-Handed'] },
  { id:'alabarda',        nome:'Halberd',          dano:'1d10 slashing',   peso:'6 lb',   preco:'20 gp', props:['Heavy','Reach','Two-Handed'] },
  { id:'lança-guerra',    nome:'Lance',            dano:'1d12 piercing',   peso:'6 lb',   preco:'10 gp', props:['Reach','Special'] },
  { id:'glaive',          nome:'Pike',             dano:'1d10 piercing',   peso:'18 lb',  preco:'5 gp',  props:['Heavy','Reach','Two-Handed'] },
  { id:'maça-guerra',     nome:'Warhammer',        dano:'1d8 bludgeoning', peso:'2 lb',   preco:'15 gp', props:['Versatile (1d10)'] },
  { id:'mangual',         nome:'Flail',            dano:'1d8 bludgeoning', peso:'2 lb',   preco:'10 gp', props:[] },
  { id:'pique',           nome:'War Pick',         dano:'1d8 piercing',    peso:'2 lb',   preco:'5 gp',  props:[] },
  { id:'corrente',        nome:'Morningstar',      dano:'1d8 piercing',    peso:'4 lb',   preco:'15 gp', props:[] },
  { id:'tridente',        nome:'Trident',          dano:'1d6 piercing',    peso:'4 lb',   preco:'5 gp',  props:['Thrown (20/60ft)','Versatile (1d8)'] },
  { id:'cimitarra',       nome:'Scimitar',         dano:'1d6 slashing',    peso:'3 lb',   preco:'25 gp', props:['Finesse','Light'] },
  { id:'espada-bastarda', nome:'Bastard Sword',    dano:'1d8 slashing',    peso:'6 lb',   preco:'35 gp', props:['Special','Versatile (1d10)'] },
  { id:'lança-longa',     nome:'Longspear',        dano:'1d10 piercing',   peso:'9 lb',   preco:'10 gp', props:['Heavy','Reach','Special','Two-Handed'] },
  { id:'lança-curta',     nome:'Short Spear',      dano:'1d6 piercing',    peso:'2 lb',   preco:'1 gp',  props:['Versatile (1d8)'] },
  { id:'martelo-guerra',  nome:'Warhammer',        dano:'1d8 bludgeoning', peso:'2 lb',   preco:'15 gp', props:['Versatile (1d10)'] },
  { id:'garras-tigre',    nome:'Tiger Claws',      dano:'1d4 slashing',    peso:'—',      preco:'—',     props:['Finesse','Light','Special'] },
];
const ARMAS_MARCIAIS_DISTANCIA_EN = [
  { id:'arco-longo',     nome:'Longbow',         dano:'1d8 piercing',    peso:'2 lb',   preco:'50 gp', props:['Ammunition (150/600ft)','Heavy','Two-Handed'] },
  { id:'arco-comp',      nome:'Composite Bow',   dano:'1d6 piercing',    peso:'2 lb',   preco:'75 gp', props:['Ammunition (100/400ft)','Heavy','Two-Handed'] },
  { id:'besta-manual',   nome:'Hand Crossbow',   dano:'1d6 piercing',    peso:'3 lb',   preco:'75 gp', props:['Ammunition (30/120ft)','Light','Loading'] },
  { id:'besta-pesada',   nome:'Heavy Crossbow',  dano:'1d10 piercing',   peso:'18 lb',  preco:'50 gp', props:['Ammunition (100/400ft)','Heavy','Loading','Two-Handed'] },
  { id:'zarabatana',     nome:'Blowgun',         dano:'1 piercing',      peso:'1 lb',   preco:'10 gp', props:['Ammunition (25/100ft)','Loading'] },
  { id:'arremesso-rede', nome:'Net',             dano:'—',               peso:'3 lb',   preco:'1 gp',  props:['Thrown (5/15ft)','Special'] },
];

/* Helper: retorna banco de armas localizado */
function getArmasBanco(tipo, categoria) {
  const isEN = currentLang === 'en';
  if (tipo === 'simples') {
    if (categoria === 'corpo') return isEN ? ARMAS_SIMPLES_CORPO_EN : ARMAS_SIMPLES_CORPO;
    return isEN
      ? [...ARMAS_SIMPLES_CORPO_EN, ...ARMAS_SIMPLES_DISTANCIA_EN]
      : [...ARMAS_SIMPLES_CORPO, ...ARMAS_SIMPLES_DISTANCIA];
  }
  if (tipo === 'marcial') {
    if (categoria === 'corpo') return isEN ? ARMAS_MARCIAIS_CORPO_EN : ARMAS_MARCIAIS_CORPO;
    return isEN
      ? [...ARMAS_MARCIAIS_CORPO_EN, ...ARMAS_MARCIAIS_DISTANCIA_EN]
      : [...ARMAS_MARCIAIS_CORPO, ...ARMAS_MARCIAIS_DISTANCIA];
  }
  return [];
}
function getInstrumentos() {
  return currentLang === 'en' ? INSTRUMENTOS_EN : INSTRUMENTOS;
}

/* ═══════════════════════════════════════════════════════
   DETECÇÃO DE OPÇÃO "QUALQUER ARMA X"
   ═══════════════════════════════════════════════════════ */
// Retorna objeto com {tipo, categoria, instrumento} se é escolha livre, ou null
function detectarEscolhaLivre(texto) {
  if (!texto) return null;
  const tl = texto.toLowerCase();

  // ── Simples corpo a corpo ──
  if (tl.includes('qualquer arma simples corpo a corpo') || tl === 'qualquer arma simples corpo a corpo'
   || tl.includes('any simple melee weapon'))
    return { tipo: 'simples', categoria: 'corpo' };

  // ── Simples qualquer (com quantidade) ──
  if (tl.includes('qualquer arma simples à sua escolha') || tl.includes('duas armas simples à sua escolha')
   || tl.includes('two simple weapons of your choice'))
    return { tipo: 'simples', categoria: 'qualquer', qtd: (tl.startsWith('duas') || tl.startsWith('two')) ? 2 : 1 };

  // ── Simples qualquer ──
  if (tl === 'qualquer arma simples' || tl.includes('qualquer arma simples')
   || tl === 'any simple weapon' || tl.includes('any simple weapon'))
    return { tipo: 'simples', categoria: 'qualquer' };

  // ── Marcial corpo a corpo ──
  if (tl.includes('qualquer arma marcial corpo a corpo')
   || tl.includes('any martial melee weapon'))
    return { tipo: 'marcial', categoria: 'corpo' };

  // ── Marcial qualquer ──
  if (tl.includes('qualquer arma marcial') || tl.includes('duas armas marciais') || tl.includes('uma arma marcial')
   || tl.includes('any martial weapon') || tl.includes('two martial weapons') || tl.includes('a martial weapon'))
    return { tipo: 'marcial', categoria: 'qualquer' };

  // ── Instrumento ──
  if (tl.includes('qualquer outro instrumento musical') || tl.includes('instrumento musical')
   || tl.includes('any other musical instrument') || tl.includes('musical instrument'))
    return { tipo: 'instrumento', categoria: 'qualquer' };

  return null;
}

/* ═══════════════════════════════════════════════════════
   PICKER DE ARMA — renderizado inline dentro da .eq-carta
   ═══════════════════════════════════════════════════════ */
function getArmasParaEscolha(tipo, categoria, classe) {
  if (tipo === 'instrumento') return null; // instrumentos tratados separado
  // Usa getArmasBanco que já respeita currentLang
  return getArmasBanco(tipo, categoria);
}

function temProficiencia(armaId, tipo, classe) {
  const cfg = CLASSE_PROF_ARMAS[classe];
  if (!cfg) return false;
  if (cfg.tipo === 'ambas') return true;
  if (cfg.tipo === 'simples' && tipo === 'simples') return true;
  if (cfg.extras && cfg.extras.includes(armaId)) return true;
  return false;
}

// Chave do estado: 'c_{gi}_arma' ou 'c_{gi}_arma_1', 'c_{gi}_arma_2' para duplas
function getChaveArma(chaveBase, slot) {
  return slot ? `${chaveBase}_arma_${slot}` : `${chaveBase}_arma`;
}

/* Renderiza picker de arma inline dentro da carta */
function renderArmaPickerHTML(chaveArma, tipo, categoria, classe, textoOriginal) {
  const armas = getArmasParaEscolha(tipo, categoria, classe);
  if (!armas) return renderInstrumentoPickerHTML(chaveArma, classe);

  const selecionada = eqArmasEscolhidas[chaveArma];
  const [filtroAtual] = [window['_armaFiltro_' + chaveArma] || 'todas'];

  // Filtra por categoria — usa bancos localizados para os IDs baterem em EN e PT
  const corpoSimples  = getArmasBanco('simples', 'corpo');
  const corpoMarcial  = getArmasBanco('marcial', 'corpo');
  const distSimples   = getArmasBanco('simples', 'distancia');
  const distMarcial   = getArmasBanco('marcial', 'distancia');
  const corpoIds = new Set([...corpoSimples.map(a=>a.id), ...corpoMarcial.map(a=>a.id)]);
  const distIds  = new Set([...distSimples.map(a=>a.id),  ...distMarcial.map(a=>a.id)]);

  let armasFiltradas = armas;
  if (filtroAtual === 'corpo') armasFiltradas = armas.filter(a => corpoIds.has(a.id));
  if (filtroAtual === 'distancia') armasFiltradas = armas.filter(a => distIds.has(a.id));

  // Ordenar: com prof primeiro, depois alfabético
  armasFiltradas = [...armasFiltradas].sort((a, b) => {
    const pa = temProficiencia(a.id, tipo, classe) ? 0 : 1;
    const pb = temProficiencia(b.id, tipo, classe) ? 0 : 1;
    if (pa !== pb) return pa - pb;
    return a.nome.localeCompare(b.nome);
  });

  const mostrarFiltros = categoria === 'qualquer' && tipo !== 'instrumento';
  const haTempoCorpo   = armas.some(a => corpoIds.has(a.id));
  const haTempoDistancia = armas.some(a => distIds.has(a.id));

  let html = `<div class="arma-picker-wrap" id="picker-${chaveArma}">
    <div class="arma-picker-titulo">${t('dynWeaponPickTitle')}</div>`;

  if (mostrarFiltros) {
    html += `<div class="arma-picker-filtros">
      <button class="arma-filtro-btn ${filtroAtual==='todas'?'ativo':''}" onclick="setArmaFiltro('${chaveArma}','todas')">${t('dynWeaponAll')}</button>
      ${haTempoCorpo ? `<button class="arma-filtro-btn ${filtroAtual==='corpo'?'ativo':''}" onclick="setArmaFiltro('${chaveArma}','corpo')">${t('dynWeaponMelee')}</button>` : ''}
      ${haTempoDistancia ? `<button class="arma-filtro-btn ${filtroAtual==='distancia'?'ativo':''}" onclick="setArmaFiltro('${chaveArma}','distancia')">${t('dynWeaponRanged')}</button>` : ''}
    </div>`;
  }

  html += `<div class="arma-lista">`;
  armasFiltradas.forEach(arma => {
    const prof = temProficiencia(arma.id, tipo, classe);
    const sel  = selecionada && selecionada.id === arma.id;
    // Usar single-quotes no onclick e escapar o nome com encodeURIComponent para evitar quebra de HTML
    const nomeEscapado = arma.nome.replace(/'/g, "\\'");
    html += `
    <div class="arma-card ${sel ? 'selecionada' : ''} ${!prof ? 'sem-proficiencia' : ''}"
         onclick="escolherArma('${chaveArma}', '${arma.id}', '${nomeEscapado}', '${tipo}')">
      <div class="arma-card-nome">${arma.nome}</div>
      <div class="arma-card-stats">${arma.dano} · ${arma.peso}</div>
      <div class="arma-card-badges">
        <span class="arma-badge ${tipo}">${tipo === 'simples' ? t('dynWeaponSimple') : t('dynWeaponMartial')}</span>
        ${corpoIds.has(arma.id) ? `<span class="arma-badge corpo">${t('dynWeaponMelee')}</span>` : `<span class="arma-badge distancia">${t('dynWeaponRanged')}</span>`}
        ${prof ? `<span class="arma-badge prof">✦ ${t('dynWeaponProf')}</span>` : ''}
        ${arma.props.slice(0,2).map(p=>`<span class="arma-badge corpo">${p}</span>`).join('')}
      </div>
    </div>`;
  });
  html += `</div>`;

  if (selecionada && !temProficiencia(selecionada.id, tipo, classe)) {
    html += `<div class="arma-sem-prof-aviso" style="display:block">
      ${t('dynWeaponNoProfWarning')}
    </div>`;
  }

  html += `</div>`;
  return html;
}

function renderInstrumentoPickerHTML(chaveArma, classe) {
  const selecionado = eqArmasEscolhidas[chaveArma];
  const selecionadoNome = resolverNomeArma(selecionado);
  const instrumentos = getInstrumentos(); // respeita currentLang
  let html = `<div class="arma-picker-wrap" id="picker-${chaveArma}">
    <div class="arma-picker-titulo">${t('dynInstrumentPickTitle')}</div>
    <div class="arma-lista" style="grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));">`;
  instrumentos.forEach(inst => {
    const sel = selecionadoNome && selecionadoNome.toLowerCase() === inst.toLowerCase();
    html += `
    <div class="arma-card ${sel ? 'selecionada' : ''}" onclick="escolherArma('${chaveArma}', '${inst.toLowerCase().replace(/ /g,'_')}', '${inst}', 'instrumento')">
      <div class="arma-card-nome">🎵 ${inst}</div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

function setArmaFiltro(chaveArma, filtro) {
  window['_armaFiltro_' + chaveArma] = filtro;
  renderEquipamentoClasse();
}

function escolherArma(chaveArma, armaId, armaNome, tipo) {
  // Guarda só id e tipo — o nome é resolvido na exibição conforme currentLang
  eqArmasEscolhidas[chaveArma] = { id: armaId, tipo };
  renderEquipamentoClasse();
  renderEquipamentoAntecedente();
}

// Resolve o nome localizado de uma arma/instrumento a partir do id
function resolverNomeArma(entrada) {
  if (!entrada) return null;
  if (entrada.tipo === 'instrumento') {
    // para instrumento, o id é o nome em lowercase com underscores — devolve como está
    return entrada.id.replace(/_/g, ' ');
  }
  // Procura nas listas localizadas
  const todos = [
    ...getArmasBanco('simples', 'qualquer'),
    ...getArmasBanco('marcial', 'qualquer'),
  ];
  const found = todos.find(a => a.id === entrada.id);
  return found ? found.nome : entrada.id;
}

/* ═══════════════════════
   TOOLTIP GLOBAL (position:fixed — não sofre com clip-path dos pais)
   ═══════════════════════ */
(function() {
  const tip = document.getElementById('tooltip-global');

  document.addEventListener('mouseover', function(e) {
    const icon = e.target.closest('.help-icon');
    if (!icon) return;
    const inner = icon.querySelector('.tooltip');
    if (!inner) return;

    tip.textContent = inner.textContent;
    tip.style.display = 'block';
    posicionarTooltip(icon);
  });

  document.addEventListener('mouseout', function(e) {
    const icon = e.target.closest('.help-icon');
    if (!icon) return;
    tip.style.display = 'none';
  });

  document.addEventListener('mousemove', function(e) {
    if (tip.style.display === 'none') return;
    const icon = e.target.closest('.help-icon');
    if (icon) posicionarTooltip(icon);
  });

  function posicionarTooltip(icon) {
    const rect = icon.getBoundingClientRect();
    const tw = 220; // largura do tooltip (CSS)
    const th = tip.offsetHeight || 60;
    const margin = 8;

    // Tenta posicionar acima
    let top = rect.top - th - margin;
    let left = rect.left + rect.width / 2 - tw / 2;

    // Se sai pela esquerda, gruda na borda
    if (left < margin) left = margin;
    // Se sai pela direita, recua
    if (left + tw > window.innerWidth - margin) left = window.innerWidth - tw - margin;
    // Se sai por cima, posiciona abaixo
    if (top < margin) top = rect.bottom + margin;

    tip.style.top  = top  + 'px';
    tip.style.left = left + 'px';
  }
})();

/* ═══════════════════════
   TOGGLE TEMA
   ═══════════════════════ */
let temaClaro = false;
function toggleTema() {
  temaClaro = !temaClaro;
  document.body.classList.toggle('modo-claro', temaClaro);
  document.getElementById('theme-toggle').textContent = temaClaro ? '☾' : '☽';
  document.getElementById('theme-toggle').title = temaClaro ? t('themeToDark') : t('themeToLight');
}

/* ═══════════════════════════════════════════════
   SISTEMA DE TRADUÇÃO — PT ↔ EN
   ═══════════════════════════════════════════════ */
let currentLang = 'pt';

const TRANSLATIONS = {
  pt: {
    siteTitle: 'Character Forge',
    siteSub: 'Criador de Fichas · D&amp;D 5ª Edição',
    nameEmpty: 'Seu personagem ainda não tem nome...',
    step1: 'Identidade', step2: 'Atributos', step3: 'Perícias', step4: 'Equipamento',
    // Section 1
    sec1Title: 'Identidade do Personagem',
    avatarText: 'Clique para<br>adicionar arte',
    lblCharName: 'Nome do Personagem', phCharName: 'Ex: Arathos, Sylvara, Zorn...',
    lblPlayerName: 'Nome do Jogador', phPlayerName: 'Seu nome',
    lblLevel: 'Nível', tipLevel: 'Personagens começam no Nível 1 e sobem até o 20 conforme acumulam experiência em aventuras.',
    lblClass: 'Classe', tipClass: 'A classe define o papel do seu personagem: guerreiro, mago, ladino, curandeiro... É a escolha mais importante na criação.',
    lblRace: 'Raça', tipRace: 'Define traços físicos e habilidades inatas do personagem — como visão no escuro de elfos ou resistência a veneno de anões.',
    lblSubrace: 'Sub-raça', tipSubrace: 'Cada raça possui variações com traços e bônus distintos. Escolha a que melhor representa seu personagem.',
    optChooseSubrace: '— Escolha sua sub-raça —',
    lblDraconicAncestry: 'Ancestral Dracônico', tipDraconicAncestry: 'Define o tipo de dano do seu sopro e sua resistência. Escolha cosmética — não altera atributos.',
    optChooseDraconic: '— Escolha seu ancestral —',
    lblBackground: 'Antecedente', tipBackground: 'De onde seu personagem veio antes de se tornar aventureiro. Concede proficiências, idiomas e equipamentos iniciais.',
    optChoose: '— Escolha —',
    optGroupPHB: 'Livro do Jogador',
    lblSubclass: 'Especialização / Subclasse', tipSubclass: 'Cada classe tem caminhos especializados com habilidades únicas. Alguns são escolhidos no Nível 1, outros no Nível 3.',
    optChooseSpec: '— Escolha sua especialização —',
    lblAlignment: 'Alinhamento', tipAlignment: 'Descreve a postura moral do personagem: bem/mal e ordem/caos. É uma bússola ética, não uma prisão.',
    algLG: 'Leal<br>e Bom', algNG: 'Neutro<br>e Bom', algCG: 'Caótico<br>e Bom',
    algLN: 'Leal<br>e Neutro', algTN: 'Neutro<br>Puro', algCN: 'Caótico<br>e Neutro',
    algLE: 'Leal<br>e Mau', algNE: 'Neutro<br>e Mau', algCE: 'Caótico<br>e Mau',
    lblDeity: 'Divindade (opcional)', tipDeity: 'Personagens religiosos veneram algum deus. Muito importante para Clérigos e Paladinos, mas qualquer um pode ter uma fé.',
    optChooseDeity: '— Escolha uma divindade —', phDeity: 'Ex: Bahamut, Avandra, Lolth...',
    lblAgeHeightWeight: 'Idade · Altura · Peso',
    phAge: 'Idade', phHeight: 'Altura', phWeight: 'Peso',
    lblAppearance: 'Aparência física', phAppearance: 'Olhos dourados, cabelo prateado, chifres curvos, pele azulada...',
    btnContinueAttrs: '✦ &nbsp; Continuar para Atributos &nbsp; ✦',
    // Section 2
    sep2: 'Distribuição de Atributos',
    pbTitle: 'Compra de Pontos', pbBadge: 'POINT BUY — PHB p.13',
    pbRemaining: 'Pontos Restantes',
    pbHint: 'Valor 8–15 antes dos bônus raciais<br><span style="color:var(--accent); font-size:8px;">9→+1 · 10→+1 · 11→+1 · 12→+1 · 13→+1 · 14→+2 · 15→+2</span>',
    attrsTitle: 'Atributos Finais',
    svTitle: 'Salvaguardas',
    combatTitle: 'Combate &amp; Derivados',
    hpLabel: 'Pontos de Vida', hpFormula: 'escolha classe',
    lblCA: 'Classe de Armadura', lblInit: 'Iniciativa',
    lblSpeed: 'Deslocamento', lblProfBonus: 'Bônus de Proficiência', lblSpellDC: 'CD de Magia',
    btnContinueSkills: '✦ &nbsp; Continuar para Perícias &nbsp; ✦',
    // Section 3
    sep3: 'Proficiências em Perícias',
    skillsTitle: 'Perícias',
    skillsRemaining: 'perícias<br>restantes',
    skillsHowTitle: 'Como funciona',
    skillsHowText: 'Escolha as perícias marcadas como disponíveis para sua classe. Perícias do seu <em>antecedente</em> são concedidas automaticamente. Ao ser proficiente, você soma o bônus de proficiência (+<span id="regra-prof">2</span>) ao modificador do atributo.',
    legendProf: 'Proficiente (classe)', legendGranted: 'Concedida (antecedente)', legendNone: 'Não proficiente',
    ppLabel: 'Percepção Passiva', ppSub: '10 + Sabedoria (Percepção)',
    btnContinueEquip: '✦ &nbsp; Continuar para Equipamento &nbsp; ✦',
    btnContinueMagias: '✦ &nbsp; Continuar para Habilidades &amp; Poderes &nbsp; ✦',
    // Section 4
    sep4: 'Equipamento &amp; Personalidade',
    eqClassTitle: 'Sua Mochila de Aventureiro',
    eqIntroText: 'Aqui estão os itens com que seu personagem começa a aventura. Os <strong>garantidos</strong> você já tem. Nas escolhas, <strong>clique na opção que preferir</strong> — não existe certa ou errada!',
    eqChooseClass: 'Escolha sua classe na Seção 1 para ver o equipamento inicial.',
    eqPending: '⚠️ &nbsp; Você ainda tem escolhas pendentes acima',
    eqAntTitle: 'Itens do Antecedente',
    eqAntIntroText: 'Seu antecedente conta a história de <strong>quem você era</strong> antes de virar aventureiro. Esses itens refletem essa vida passada — eles já são seus, sem precisar escolher nada!',
    eqChooseBackground: 'Escolha um antecedente na Seção 1.',
    eqInvTitle: 'Tudo que você leva na aventura',
    eqInvSub: 'Conforme você faz suas escolhas acima, seu inventário completo aparece aqui.',
    eqInvEmpty: 'Selecione classe e antecedente para montar seu inventário...',
    persTitle: 'Quem é você?',
    persIntroText: 'Essas perguntas dão <strong>vida e alma</strong> ao seu personagem. Não há resposta certa — pode ser curto, longo, sério ou divertido. As sugestões abaixo são só ponto de partida!',
    persTrait: 'Traço de Personalidade', tipTrait: 'Como você age, fala ou reage? Um hábito, maneirismo ou jeito de ser único.',
    phTrait: 'Ex: Sempre tenho uma piada na ponta da língua, mesmo na hora errada.',
    persIdeal: 'Ideal', tipIdeal: 'O que você mais valoriza na vida? O princípio que guia suas decisões.',
    phIdeal: 'Ex: Liberdade — nenhuma corrente, seja ela física ou social, deve existir.',
    persBond: 'Vínculo', tipBond: 'O que te prende ao mundo? Uma pessoa, lugar ou causa que você protegeria a qualquer custo.',
    phBond: 'Ex: Preciso proteger a aldeia onde cresci, custe o que custar.',
    persFlaw: 'Fraqueza', tipFlaw: 'Seu ponto fraco. Um medo, vício ou defeito que pode criar problemas para você nas aventuras.',
    phFlaw: 'Ex: Não consigo resistir a uma aposta, por maior que seja o risco.',
    footer: 'Forjador de Heróis · D&D 5e · Livro do Jogador &amp; Caldeirão de Tasha',
    btnSaveExport: 'Salvar &amp; Exportar Personagem',
    saveSummaryTitle: 'Resumo do Personagem',
    saveExportTitle: 'Exportar Ficha',
    btnSavePNG: 'Salvar como imagem (.png)',
    btnSaveHTML: 'Exportar ficha (.html)',
    btnCopyJSON: 'Copiar código de backup',
    btnImport: 'Carregar personagem salvo',
    saveImportTitle: 'Carregar Personagem',
    btnImportConfirm: 'Carregar personagem',
    btnCancel: 'Cancelar',
    // Lang button
    langBtn: '🇺🇸', langTitle: 'Switch to English',
    // Dynamic strings (used by JS functions)
    dynChoose: '— Escolha —',
    dynChooseSpec: '— Escolha sua especialização —',
    dynChooseDeity: '— Escolha uma divindade —',
    dynDeityOther: '✦ Outro (digitar manualmente)',
    dynDeityTypePlaceholder: 'Digite o nome da divindade...',
    dynDeityPlaceholder: 'Ex: Bahamut, Avandra, Lolth...',
    dynDeityLabelCleric: 'Divindade Venerada',
    dynDeityTipCleric: 'Clérigos e Paladinos são diretamente ligados a uma divindade — essa escolha define seus domínios e poderes sagrados.',
    dynDeityLabelPanel: 'Divindade do Panteão (opcional)',
    dynDeityLabel: 'Divindade (opcional)',
    dynDeityTip: 'Personagens religiosos veneram algum deus. Qualquer um pode ter uma fé — não é obrigatório.',
    dynRacialBonus: '⚒ Bônus racial:',
    dynFreeAttrTitle: 'Escolha {n} atributo{s} para receber +1 (não pode repetir)',
    dynSkillSelected: 'selecionada', dynSkillAvail: 'disponível', dynSkillBackground: 'antecedente',
    dynSkillTotal: 'de {n} para escolher',
    dynHPChooseClass: 'escolha classe',
    dynEqChooseClass: 'Escolha sua classe na Seção 1 para ver o equipamento inicial.',
    dynEqChooseBackground: 'Escolha um antecedente na Seção 1.',
    dynEqGuaranteed: 'Itens Garantidos', dynEqChoices: 'Suas Escolhas',
    dynEqYours: '✦ Seu', dynEqChoose: '👆 Escolha', dynEqNoneChosen: '<em style="opacity:0.6">Nenhuma escolhida</em>',
    dynEqYouChoose: '👆 Você escolhe qual',
    dynEqCoins: 'Moedas iniciais:',
    dynEqInvEmpty: 'Selecione classe e antecedente para montar seu inventário...',
    dynEqPending: '⚠️ &nbsp; Você ainda tem escolhas pendentes acima',
    dynAttrGroupPHB: 'Livro do Jogador',
    dynNameEmpty: 'Seu personagem ainda não tem nome...',
    // Weapon picker
    dynWeaponPickTitle: 'Escolha sua arma',
    dynWeaponAll: 'Todas', dynWeaponMelee: 'Corpo a Corpo', dynWeaponRanged: 'À Distância',
    dynWeaponSimple: 'Simples', dynWeaponMartial: 'Marcial', dynWeaponProf: 'Proficiente',
    dynWeaponNoProfWarning: '⚠️ Sua classe não tem proficiência com esta arma — você sofre penalidade de -4 nos ataques.',
    dynInstrumentPickTitle: 'Escolha um Instrumento Musical',
    // Theme toggle
    themeToLight: 'Alternar para tema claro', themeToDark: 'Alternar para tema escuro',
  },
  en: {
    siteTitle: 'Character Forge',
    siteSub: 'Character Sheet Creator · D&amp;D 5th Edition',
    nameEmpty: 'Your character has no name yet...',
    step1: 'Identity', step2: 'Attributes', step3: 'Skills', step4: 'Equipment',
    // Section 1
    sec1Title: 'Character Identity',
    avatarText: 'Click to<br>add artwork',
    lblCharName: 'Character Name', phCharName: 'e.g.: Arathos, Sylvara, Zorn...',
    lblPlayerName: "Player's Name", phPlayerName: 'Your name',
    lblLevel: 'Level', tipLevel: 'Characters start at Level 1 and advance to 20 as they gain experience through adventures.',
    lblClass: 'Class', tipClass: "The class defines your character's role: fighter, wizard, rogue, healer... It is the most important choice at creation.",
    lblRace: 'Race', tipRace: "Defines the character's physical traits and innate abilities — like elven darkvision or dwarven poison resistance.",
    lblSubrace: 'Subrace', tipSubrace: 'Each race has variations with distinct traits and bonuses. Choose the one that best represents your character.',
    optChooseSubrace: '— Choose your subrace —',
    lblDraconicAncestry: 'Draconic Ancestry', tipDraconicAncestry: 'Defines your breath weapon damage type and resistance. Cosmetic choice — does not affect ability scores.',
    optChooseDraconic: '— Choose your ancestor —',
    lblBackground: 'Background', tipBackground: 'Where your character came from before becoming an adventurer. Grants proficiencies, languages, and starting equipment.',
    optChoose: '— Choose —',
    optGroupPHB: "Player's Handbook",
    lblSubclass: 'Subclass / Specialization', tipSubclass: 'Each class has specialized paths with unique abilities. Some are chosen at Level 1, others at Level 3.',
    optChooseSpec: '— Choose your specialization —',
    lblAlignment: 'Alignment', tipAlignment: "Describes the character's moral stance: good/evil and law/chaos. It is an ethical compass, not a prison.",
    algLG: 'Lawful<br>Good', algNG: 'Neutral<br>Good', algCG: 'Chaotic<br>Good',
    algLN: 'Lawful<br>Neutral', algTN: 'True<br>Neutral', algCN: 'Chaotic<br>Neutral',
    algLE: 'Lawful<br>Evil', algNE: 'Neutral<br>Evil', algCE: 'Chaotic<br>Evil',
    lblDeity: 'Deity (optional)', tipDeity: 'Religious characters worship a god. Very important for Clerics and Paladins, but anyone can have a faith.',
    optChooseDeity: '— Choose a deity —', phDeity: 'e.g.: Bahamut, Avandra, Lolth...',
    lblAgeHeightWeight: 'Age · Height · Weight',
    phAge: 'Age', phHeight: 'Height', phWeight: 'Weight',
    lblAppearance: 'Physical Appearance', phAppearance: 'Golden eyes, silver hair, curved horns, blue skin...',
    btnContinueAttrs: '✦ &nbsp; Continue to Attributes &nbsp; ✦',
    // Section 2
    sep2: 'Ability Score Distribution',
    pbTitle: 'Point Buy', pbBadge: 'POINT BUY — PHB p.13',
    pbRemaining: 'Points Remaining',
    pbHint: 'Score 8–15 before racial bonuses<br><span style="color:var(--accent); font-size:8px;">9→+1 · 10→+1 · 11→+1 · 12→+1 · 13→+1 · 14→+2 · 15→+2</span>',
    attrsTitle: 'Final Ability Scores',
    svTitle: 'Saving Throws',
    combatTitle: 'Combat &amp; Derived Stats',
    hpLabel: 'Hit Points', hpFormula: 'choose class',
    lblCA: 'Armor Class', lblInit: 'Initiative',
    lblSpeed: 'Speed', lblProfBonus: 'Proficiency Bonus', lblSpellDC: 'Spell Save DC',
    btnContinueSkills: '✦ &nbsp; Continue to Skills &nbsp; ✦',
    // Section 3
    sep3: 'Skill Proficiencies',
    skillsTitle: 'Skills',
    skillsRemaining: 'skills<br>remaining',
    skillsHowTitle: 'How it works',
    skillsHowText: 'Choose skills marked as available for your class. Your <em>background</em> skills are granted automatically. When proficient, add your proficiency bonus (+<span id="regra-prof">2</span>) to the ability modifier.',
    legendProf: 'Proficient (class)', legendGranted: 'Granted (background)', legendNone: 'Not proficient',
    ppLabel: 'Passive Perception', ppSub: '10 + Wisdom (Perception)',
    btnContinueEquip: '✦ &nbsp; Continue to Equipment &nbsp; ✦',
    btnContinueMagias: '✦ &nbsp; Continue to Abilities &amp; Powers &nbsp; ✦',
    btnContinueEquip: '✦ &nbsp; Continue to Equipment &nbsp; ✦',
    // Section 4
    sep4: 'Equipment &amp; Personality',
    eqClassTitle: "Your Adventurer's Pack",
    eqIntroText: 'Here are the items your character starts the adventure with. The <strong>guaranteed</strong> ones are already yours. For choices, <strong>click whichever option you prefer</strong> — there is no wrong answer!',
    eqChooseClass: 'Choose your class in Section 1 to see starting equipment.',
    eqPending: '⚠️ &nbsp; You still have pending choices above',
    eqAntTitle: 'Background Items',
    eqAntIntroText: 'Your background tells the story of <strong>who you were</strong> before becoming an adventurer. These items reflect that past life — they are already yours, no choices needed!',
    eqChooseBackground: 'Choose a background in Section 1.',
    eqInvTitle: 'Everything you carry on your adventure',
    eqInvSub: 'As you make your choices above, your full inventory will appear here.',
    eqInvEmpty: 'Select a class and background to build your inventory...',
    persTitle: 'Who are you?',
    persIntroText: 'These questions give your character <strong>life and soul</strong>. There is no right answer — short, long, serious, or fun. The suggestions below are just a starting point!',
    persTrait: 'Personality Trait', tipTrait: 'How do you act, speak, or react? A unique habit, mannerism, or way of being.',
    phTrait: 'e.g.: I always have a joke on my lips, even at the worst moment.',
    persIdeal: 'Ideal', tipIdeal: 'What do you value most in life? The principle that guides your decisions.',
    phIdeal: 'e.g.: Freedom — no chain, physical or social, should exist.',
    persBond: 'Bond', tipBond: 'What ties you to the world? A person, place, or cause you would protect at any cost.',
    phBond: 'e.g.: I must protect the village where I grew up, no matter the cost.',
    persFlaw: 'Flaw', tipFlaw: 'Your weak point. A fear, vice, or flaw that can cause trouble on your adventures.',
    phFlaw: "e.g.: I can't resist a wager, no matter how high the stakes.",
    footer: "Hero Forge · D&D 5e · Player's Handbook &amp; Tasha's Cauldron",
    btnSaveExport: 'Save &amp; Export Character',
    saveSummaryTitle: 'Character Summary',
    saveExportTitle: 'Export Sheet',
    btnSavePNG: 'Save as image (.png)',
    btnSaveHTML: 'Export sheet (.html)',
    btnCopyJSON: 'Copy backup code',
    btnImport: 'Load saved character',
    saveImportTitle: 'Load Character',
    btnImportConfirm: 'Load character',
    btnCancel: 'Cancel',
    // Lang button
    langBtn: '🇧🇷', langTitle: 'Alternar para Português',
    // Dynamic strings
    dynChoose: '— Choose —',
    dynChooseSpec: '— Choose your specialization —',
    dynChooseDeity: '— Choose a deity —',
    dynDeityOther: '✦ Other (type manually)',
    dynDeityTypePlaceholder: 'Type the deity name...',
    dynDeityPlaceholder: 'e.g.: Bahamut, Avandra, Lolth...',
    dynDeityLabelCleric: 'Worshipped Deity',
    dynDeityTipCleric: 'Clerics and Paladins are directly tied to a deity — this choice defines their domains and sacred powers.',
    dynDeityLabelPanel: 'Pantheon Deity (optional)',
    dynDeityLabel: 'Deity (optional)',
    dynDeityTip: 'Religious characters worship a god. Anyone can have a faith — it is not mandatory.',
    dynRacialBonus: '⚒ Racial bonus:',
    dynFreeAttrTitle: 'Choose {n} ability score{s} to receive +1 (no repeats)',
    dynSkillSelected: 'selected', dynSkillAvail: 'available', dynSkillBackground: 'background',
    dynSkillTotal: 'of {n} to choose',
    dynHPChooseClass: 'choose class',
    dynEqChooseClass: 'Choose your class in Section 1 to see starting equipment.',
    dynEqChooseBackground: 'Choose a background in Section 1.',
    dynEqGuaranteed: 'Guaranteed Items', dynEqChoices: 'Your Choices',
    dynEqYours: '✦ Yours', dynEqChoose: '👆 Choose', dynEqNoneChosen: '<em style="opacity:0.6">None chosen</em>',
    dynEqYouChoose: '👆 You choose which',
    dynEqCoins: 'Starting coins:',
    dynEqInvEmpty: 'Select a class and background to build your inventory...',
    dynEqPending: '⚠️ &nbsp; You still have pending choices above',
    dynAttrGroupPHB: "Player's Handbook",
    dynNameEmpty: 'Your character has no name yet...',
    // Weapon picker
    dynWeaponPickTitle: 'Choose your weapon',
    dynWeaponAll: 'All', dynWeaponMelee: 'Melee', dynWeaponRanged: 'Ranged',
    dynWeaponSimple: 'Simple', dynWeaponMartial: 'Martial', dynWeaponProf: 'Proficient',
    dynWeaponNoProfWarning: '⚠️ Your class is not proficient with this weapon — you suffer a -4 penalty on attack rolls.',
    dynInstrumentPickTitle: 'Choose a Musical Instrument',
    // Theme toggle
    themeToLight: 'Switch to light theme', themeToDark: 'Switch to dark theme',
  }
};

// Attribute and skill name maps per language
const ATTR_NOMES_EN = { FOR:'Strength', DES:'Dexterity', CON:'Constitution', INT:'Intelligence', SAB:'Wisdom', CAR:'Charisma' };
const PERICIAS_EN = {
  atletismo:'Athletics', acrobacia:'Acrobatics', furtividade:'Stealth', prestidigitacao:'Sleight of Hand',
  arcanismo:'Arcana', historia:'History', investigacao:'Investigation', natureza:'Nature', religiao:'Religion',
  adestrar:'Animal Handling', intuicao:'Insight', medicina:'Medicine', percepcao:'Perception', sobrevivencia:'Survival',
  atuacao:'Performance', enganacao:'Deception', intimidacao:'Intimidation', persuasao:'Persuasion',
};
const CLASSE_NAMES_EN = {
  artifice:'Artificer', barbaro:'Barbarian', bardo:'Bard', bruxo:'Warlock',
  clerigo:'Cleric', druida:'Druid', feiticeiro:'Sorcerer', guerreiro:'Fighter',
  ladino:'Rogue', mago:'Wizard', monge:'Monk', paladino:'Paladin', patrulheiro:'Ranger',
};
const ANTECEDENTE_NOMES_EN = {
  acolito:'Acolyte', artesao:'Guild Artisan', charlatan:'Charlatan', criminoso:'Criminal',
  eremita:'Hermit', entretenedor:'Entertainer', forasteiro:'Outlander', heroi:'Folk Hero',
  marinheiro:'Sailor', nobre:'Noble', sabio:'Sage', soldado:'Soldier',
};
const RACE_NAMES_EN = {
  anao:'Dwarf', elfo:'Elf', halfling:'Halfling', humano:'Human',
  draconato:'Dragonborn', gnomo:'Gnome', 'meio-elfo':'Half-Elf', 'meio-orc':'Half-Orc', tiefling:'Tiefling',
};
const SUBCLASSES_EN = {
  artifice:    [{v:'alquimista',l:'Alchemist'},{v:'armeiro',l:'Armorer'},{v:'atirador',l:'Artillerist'},{v:'ferreiro',l:'Battle Smith'}],
  barbaro:     [{v:'berserker',l:'Path of the Berserker'},{v:'totem',l:'Path of the Totem Warrior'},{v:'besta',l:'Path of the Beast (Tasha\'s)'},{v:'magia-selvagem',l:'Path of Wild Magic (Tasha\'s)'}],
  bardo:       [{v:'conhecimento',l:'College of Lore'},{v:'valor',l:'College of Valor'},{v:'criacao',l:'College of Creation (Tasha\'s)'},{v:'eloquencia',l:'College of Eloquence (Tasha\'s)'}],
  bruxo:       [{v:'arquifada',l:'The Archfey'},{v:'grande-antigo',l:'The Great Old One'},{v:'infernal',l:'The Fiend'},{v:'genio',l:'The Genie (Tasha\'s)'},{v:'insondavel',l:'The Fathomless (Tasha\'s)'}],
  clerigo:     [{v:'vida',l:'Life Domain'},{v:'luz',l:'Light Domain'},{v:'natureza',l:'Nature Domain'},{v:'tempestade',l:'Tempest Domain'},{v:'trapaca',l:'Trickery Domain'},{v:'guerra',l:'War Domain'},{v:'conhecimento',l:'Knowledge Domain'},{v:'morte',l:'Death Domain'},{v:'ordem',l:'Order Domain (Tasha\'s)'},{v:'paz',l:'Peace Domain (Tasha\'s)'},{v:'crepusculo',l:'Twilight Domain (Tasha\'s)'}],
  druida:      [{v:'terra',l:'Circle of the Land'},{v:'lua',l:'Circle of the Moon'},{v:'esporos',l:'Circle of Spores (Tasha\'s)'},{v:'estrelas',l:'Circle of Stars (Tasha\'s)'},{v:'fogo-selvagem',l:'Circle of Wildfire (Tasha\'s)'}],
  feiticeiro:  [{v:'magia-selvagem',l:'Wild Magic'},{v:'draconico',l:'Draconic Bloodline'},{v:'mente-aberrante',l:'Aberrant Mind (Tasha\'s)'},{v:'alma-cronomatica',l:'Clockwork Soul (Tasha\'s)'}],
  guerreiro:   [{v:'campeao',l:'Champion'},{v:'cavaleiro-batalha',l:'Battle Master'},{v:'mestre-batalha',l:'Battle Master'},{v:'cavaleiro-arcano',l:'Eldritch Knight'},{v:'cavaleiro-runa',l:'Rune Knight (Tasha\'s)'},{v:'psi',l:'Psi Warrior (Tasha\'s)'}],
  ladino:      [{v:'assassino',l:'Assassin'},{v:'arcano',l:'Arcane Trickster'},{v:'ladrao',l:'Thief'},{v:'alma-fantasma',l:'Phantom (Tasha\'s)'},{v:'espiao',l:'Soulknife (Tasha\'s)'}],
  mago:        [{v:'abjuracao',l:'School of Abjuration'},{v:'conjuracao',l:'School of Conjuration'},{v:'divinacao',l:'School of Divination'},{v:'encantamento',l:'School of Enchantment'},{v:'evocacao',l:'School of Evocation'},{v:'ilusionismo',l:'School of Illusion'},{v:'necromancia',l:'School of Necromancy'},{v:'transmutacao',l:'School of Transmutation'},{v:'lamina',l:'Bladesinging (Tasha\'s)'},{v:'escribas',l:'Order of Scribes (Tasha\'s)'}],
  monge:       [{v:'quatro-elementos',l:'Way of the Four Elements'},{v:'mao-aberta',l:'Way of the Open Hand'},{v:'sombra',l:'Way of Shadow'},{v:'misericordia',l:'Way of Mercy (Tasha\'s)'},{v:'astral',l:'Way of the Astral Self (Tasha\'s)'}],
  paladino:    [{v:'devocao',l:'Oath of Devotion'},{v:'antiguidade',l:'Oath of the Ancients'},{v:'vinganca',l:'Oath of Vengeance'},{v:'gloria',l:'Oath of Glory (Tasha\'s)'},{v:'conquista',l:'Oath of Conquest'},{v:'redentor',l:'Oath of Redemption'},{v:'sem-juramento',l:'Oathbreaker'}],
  patrulheiro: [{v:'cacador',l:'Hunter'},{v:'senhor-besta',l:'Beast Master'},{v:'exterminador',l:'Gloom Stalker'},{v:'matador',l:'Monster Slayer'},{v:'perseguidor',l:'Fey Wanderer (Tasha\'s)'},{v:'enxame',l:'Swarmkeeper (Tasha\'s)'}],
};

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.pt[key] || key;
}

function applyTranslations() {
  const lang = currentLang;
  // Static elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = t(key);
    if (val !== undefined) el.placeholder = val;
  });
  // Optgroup labels
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-label');
    const val = t(key);
    if (val !== undefined) el.label = val;
  });
  // Name preview if empty
  const preview = document.getElementById('name-preview');
  if (preview && preview.classList.contains('empty')) {
    preview.textContent = t('nameEmpty');
  }
  // hp-formula if still showing placeholder
  const hpFormula = document.getElementById('hp-formula');
  if (hpFormula && (hpFormula.textContent === 'escolha classe' || hpFormula.textContent === 'choose class')) {
    hpFormula.textContent = t('dynHPChooseClass');
  }
  // Class options (select)
  const classSelect = document.getElementById('char-class');
  if (classSelect) {
    const nameMap = lang === 'en' ? CLASSE_NAMES_EN : CLASSE_NAMES;
    classSelect.querySelectorAll('option[value]').forEach(opt => {
      const v = opt.value;
      if (!v) { opt.textContent = t('optChoose'); return; }
      if (nameMap[v]) opt.textContent = nameMap[v];
    });
  }
  // Race options
  const raceSelect = document.getElementById('char-race');
  if (raceSelect) {
    raceSelect.querySelectorAll('option[value]').forEach(opt => {
      const v = opt.value;
      if (!v) { opt.textContent = t('optChoose'); return; }
      if (lang === 'en' && RACE_NAMES_EN[v]) opt.textContent = RACE_NAMES_EN[v];
      else if (lang === 'pt') {
        const ptNames = { anao:'Anão', elfo:'Elfo', halfling:'Halfling', humano:'Humano', draconato:'Draconato', gnomo:'Gnomo', 'meio-elfo':'Meio-Elfo', 'meio-orc':'Meio-Orc', tiefling:'Tiefling' };
        if (ptNames[v]) opt.textContent = ptNames[v];
      }
    });
  }
  // Background options
  const bgSelect = document.getElementById('char-background');
  if (bgSelect) {
    const bgMapPT = { acolito:'Acólito', artesao:'Artesão de Guilda', charlatan:'Charlatão', criminoso:'Criminoso', eremita:'Eremita', entretenedor:'Entretenedor', forasteiro:'Forasteiro', heroi:'Herói do Povo', marinheiro:'Marinheiro', nobre:'Nobre', sabio:'Sábio', soldado:'Soldado' };
    bgSelect.querySelectorAll('option[value]').forEach(opt => {
      const v = opt.value;
      if (!v) { opt.textContent = t('optChoose'); return; }
      const map = lang === 'en' ? ANTECEDENTE_NOMES_EN : bgMapPT;
      if (map[v]) opt.textContent = map[v];
    });
  }
  // Subclass select (first option)
  const subSelect = document.getElementById('char-subclass');
  if (subSelect) {
    const firstOpt = subSelect.querySelector('option[value=""]');
    if (firstOpt) firstOpt.textContent = t('optChooseSpec');
    // Re-render subclass options if a class is selected
    const cls = document.getElementById('char-class').value;
    if (cls) {
      const subs = lang === 'en' ? (SUBCLASSES_EN[cls] || []) : (SUBCLASSES[cls] || []);
      const selected = subSelect.value;
      subSelect.innerHTML = `<option value="">${t('optChooseSpec')}</option>`;
      subs.forEach(s => {
        const o = document.createElement('option');
        o.value = s.v; o.textContent = s.l;
        if (s.v === selected) o.selected = true;
        subSelect.appendChild(o);
      });
    }
  }
  // Subrace select — re-popula com nomes no idioma correto
  const subraceField = document.getElementById('subrace-field');
  if (subraceField && subraceField.style.display !== 'none') {
    renderSubraceField();
  }
  // Draconic ancestry select
  const draconicField = document.getElementById('draconic-field');
  if (draconicField && draconicField.style.display !== 'none') {
    renderDraconicField();
  }
  // Deity first option
  const deitySelect = document.getElementById('deity-select');
  if (deitySelect) {
    const firstOpt = deitySelect.querySelector('option[value=""]');
    if (firstOpt) firstOpt.textContent = t('optChooseDeity');
    const otherOpt = deitySelect.querySelector('option[value="__outro__"]');
    if (otherOpt) otherOpt.textContent = t('dynDeityOther');
  }
  // Lang toggle button
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = t('langBtn');
    langBtn.title = t('langTitle');
  }
  // Theme toggle title
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.title = temaClaro ? t('themeToDark') : t('themeToLight');
  }
  // Skills counter label
  const totalLabel = document.getElementById('pericias-total-label');
  if (totalLabel) {
    const match = totalLabel.textContent.match(/\d+/);
    const n = match ? match[0] : '0';
    totalLabel.textContent = t('dynSkillTotal').replace('{n}', n);
  }
  // Inventory empty message
  const invVazio = document.getElementById('eq-inventario-vazio');
  if (invVazio && invVazio.style.display !== 'none') invVazio.textContent = t('eqInvEmpty');
  // Pending banner
  const pendBanner = document.getElementById('eq-pendente-banner');
  if (pendBanner) pendBanner.innerHTML = t('eqPending');
  // Re-render dynamic sections if already visible
  if (document.getElementById('sec-atributos') && document.getElementById('sec-atributos').style.display !== 'none') {
    renderPointBuy();
    renderAtributosFinal();
    renderCombate();
  }
  if (document.getElementById('sec-pericias') && document.getElementById('sec-pericias').style.display !== 'none') {
    renderPericias();
  }
  if (document.getElementById('sec-equipamento') && document.getElementById('sec-equipamento').style.display !== 'none') {
    renderEquipamentoClasse();
    renderEquipamentoAntecedente();
  }
}

function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
  // Reset the skill data map so it's repopulated in the new language
  if (window._habDataMap) window._habDataMap = {};
  applyTranslations();
  renderMagias();
}

// Helper: get localized attr name
function getAttrNome(key) {
  return currentLang === 'en' ? (ATTR_NOMES_EN[key] || key) : (ATTR_NOMES[key] || key);
}
// Helper: get localized skill name
function getSkillNome(id) {
  return currentLang === 'en' ? (PERICIAS_EN[id] || id) : (PERICIAS.find(p => p.id === id)?.nome || id);
}
// Helper: get localized class name
function getClasseNome(val) {
  return currentLang === 'en' ? (CLASSE_NAMES_EN[val] || val) : (CLASSE_NAMES[val] || val);
}
// Helper: get localized background name
function getAntecedenteNome(val) {
  const en = ANTECEDENTE_NOMES_EN;
  const pt = { acolito:'Acólito', artesao:'Artesão de Guilda', charlatan:'Charlatão', criminoso:'Criminoso', eremita:'Eremita', entretenedor:'Entretenedor', forasteiro:'Forasteiro', heroi:'Herói do Povo', marinheiro:'Marinheiro', nobre:'Nobre', sabio:'Sábio', soldado:'Soldado' };
  return currentLang === 'en' ? (en[val] || val) : (pt[val] || val);
}

// Aplica traduções uma vez ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  applyTranslations();
});

/* ══════════════════════════════════════════════════════
   SALVAR / EXPORTAR / IMPORTAR
   ══════════════════════════════════════════════════════ */

function coletarDadosPersonagem() {
  // Campos de identidade
  const nome        = document.getElementById('char-name')?.value || '';
  const jogador     = document.getElementById('player-name')?.value || '';
  const nivel       = document.getElementById('char-level')?.value || '1';
  const classe      = document.getElementById('char-class')?.value || '';
  const subclasse   = document.getElementById('char-subclass')?.value || '';
  const raca        = document.getElementById('char-race')?.value || '';
  const subraca     = document.getElementById('char-subrace')?.value || '';
  const antecedente = document.getElementById('char-background')?.value || '';
  const divSel      = document.getElementById('deity-select')?.value || '';
  const divFree     = document.getElementById('deity-free')?.value || '';
  const divindade   = divSel && divSel !== '__outro__' ? divSel : divFree;
  const aparencia   = document.getElementById('char-appearance')?.value || '';
  const idade       = document.getElementById('char-age')?.value || '';
  const altura      = document.getElementById('char-height')?.value || '';
  const peso        = document.getElementById('char-weight')?.value || '';
  const ancestral   = document.getElementById('char-ancestral')?.value || '';

  // Personalidade
  const traco    = document.getElementById('eq-traco')?.value || '';
  const ideal    = document.getElementById('eq-ideal')?.value || '';
  const vinculo  = document.getElementById('eq-vinculo')?.value || '';
  const fraqueza = document.getElementById('eq-fraqueza')?.value || '';

  // Avatar (base64)
  const avatarImg = document.getElementById('avatar-box')?.querySelector('img');
  const avatar = avatarImg ? avatarImg.src : '';

  return {
    versao: 'v33',
    meta: { dataSalvo: new Date().toISOString(), idioma: currentLang },
    identidade: { nome, jogador, nivel, classe, subclasse, raca, subraca, antecedente, divindade, aparencia, idade, altura, peso, ancestral },
    alinhamento: selectedAlignment,
    atributos: { ...pbValores },
    racialLivre: { ...racialLivreEscolhas },
    pericias: [...periciasEscolhidas],
    equipamento: { escolhas: { ...eqEscolhas }, armas: { ...eqArmasEscolhidas } },
    personalidade: { traco, ideal, vinculo, fraqueza },
    avatar,
  };
}

function renderSaveSummary() {
  const d = coletarDadosPersonagem();
  const el = document.getElementById('save-summary');
  if (!el) return;
  const campos = [
    { label: t('lblName'),       valor: d.identidade.nome       || '—' },
    { label: t('lblClass'),      valor: getClasseNome(d.identidade.classe) || '—' },
    { label: t('lblRace'),       valor: d.identidade.raca       || '—' },
    { label: t('lblBackground'), valor: getAntecedenteNome(d.identidade.antecedente) || '—' },
    { label: t('lblLevel'),      valor: d.identidade.nivel      || '—' },
    { label: t('lblAlignment'),  valor: d.alinhamento           || '—' },
  ];
  el.innerHTML = campos.map(c => `
    <div class="save-summary-item">
      <div class="save-summary-label">${c.label}</div>
      <div class="save-summary-value">${c.valor}</div>
    </div>`).join('');
}

function continuarSalvar() {
  const btn = document.getElementById('btn-continuar-5');
  if (btn) btn.style.display = 'none';
  const sec = document.getElementById('sec-salvar');
  sec.style.display = 'block';
  renderSaveSummary();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    sec.style.opacity = '1';
    sec.style.transform = 'translateY(0)';
  }));
  setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
}

function setSaveStatus(msg, tipo) {
  const el = document.getElementById('save-status');
  if (!el) return;
  el.textContent = msg;
  el.className = 'save-status' + (tipo ? ' ' + tipo : '');
  setTimeout(() => { if (el.textContent === msg) { el.textContent = ''; el.className = 'save-status'; } }, 3500);
}

/* ── Exportar PNG (ficha como imagem via Canvas) ── */
function exportarPNG() {
  const isEN = currentLang === 'en';
  setSaveStatus(isEN ? '⏳ Generating image...' : '⏳ Gerando imagem...', 'ok');

  // Garante que as fontes estejam carregadas antes de desenhar no canvas
  Promise.all([
    document.fonts.load('bold 30px "Cinzel Decorative"'),
    document.fonts.load('bold 12px "Cinzel"'),
    document.fonts.load('14px "IM Fell English"'),
  ]).then(() => _desenharPNG(isEN))
    .catch(() => _desenharPNG(isEN)); // fallback mesmo se fontes falharem
}

function _desenharPNG(isEN) {
  try {
    const dados  = coletarDadosPersonagem();
    const id     = dados.identidade;
    const finais = getValoresFinais();
    const nivel  = parseInt(id.nivel) || 1;
    const prof   = getProfBonus(nivel);
    const modOf  = a => Math.floor((finais[a] - 10) / 2);
    const modStr = v => (v >= 0 ? '+' : '') + v;
    const hp     = Math.max(1, (CLASSE_HIT_DICE[id.classe] || 8) + modOf('CON'));
    const ca     = 10 + modOf('DES');

    // Cor de acento por classe (lida diretamente do CSS do documento)
    const ACCENTS = {
      artifice:'#c87830', barbaro:'#cc3a1a', bardo:'#a855c8', bruxo:'#7040c8',
      clerigo:'#4a80e8',  druida:'#5a9830',  feiticeiro:'#3a8aee', guerreiro:'#b83828',
      ladino:'#8050b8',   mago:'#7858e8',    monge:'#78a858', paladino:'#e8c030',
      patrulheiro:'#489848',
    };
    const GOLD   = '#c9a84c';
    const accent = ACCENTS[id.classe] || '#7a5c8a';

    // Perícias — usa PERICIAS (nome correto do array) e PERICIAS_EN para tradução
    const listaPericias = PERICIAS.map(p => {
      const temProf = periciasEscolhidas.has(p.id) ||
                      (ANTECEDENTE_PERICIAS[id.antecedente] || []).includes(p.id);
      const mod  = modOf(p.attr) + (temProf ? prof : 0);
      const nome = isEN ? (PERICIAS_EN[p.id] || p.nome) : p.nome;
      return { nome, mod, prof: temProf };
    });

    // Labels de atributos
    const ATTR_LABEL = isEN
      ? { FOR:'STR', DES:'DEX', CON:'CON', INT:'INT', SAB:'WIS', CAR:'CHA' }
      : { FOR:'FOR', DES:'DES', CON:'CON', INT:'INT', SAB:'SAB', CAR:'CAR' };

    const pers = dados.personalidade || {};

    // ── Canvas ──
    const W = 920, H = 1280;
    const canvas  = document.createElement('canvas');
    canvas.width  = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // Helpers
    const hex2rgba = (hex, a) => {
      const r = parseInt(hex.slice(1,3),16);
      const g = parseInt(hex.slice(3,5),16);
      const b = parseInt(hex.slice(5,7),16);
      return `rgba(${r},${g},${b},${a})`;
    };
    const fillRect = (x,y,w,h,fill) => {
      ctx.fillStyle = fill; ctx.fillRect(x,y,w,h);
    };
    const strokeRect = (x,y,w,h,stroke,lw=1) => {
      ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.strokeRect(x+lw/2,y+lw/2,w-lw,h-lw);
    };
    const txt = (t,x,y,font,fill,align='left',maxW=0) => {
      ctx.save();
      ctx.font = font; ctx.fillStyle = fill; ctx.textAlign = align;
      if (maxW) ctx.fillText(String(t), x, y, maxW);
      else      ctx.fillText(String(t), x, y);
      ctx.restore();
    };
    const hline = (x1,y1,x2,col,lw=1) => {
      ctx.save(); ctx.strokeStyle=col; ctx.lineWidth=lw;
      ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y1); ctx.stroke(); ctx.restore();
    };
    const sectionTitle = (t,x,y,w) => {
      txt(t.toUpperCase(), x, y, 'bold 9px Cinzel, sans-serif', accent);
      hline(x, y+5, x+w, accent, 0.6);
    };

    // ── Fundo ──
    fillRect(0,0,W,H,'#0d0a0e');

    // Barra decorativa de topo
    const grad = ctx.createLinearGradient(0,0,W,0);
    grad.addColorStop(0,'transparent');
    grad.addColorStop(0.25, hex2rgba(GOLD,0.3));
    grad.addColorStop(0.5,  hex2rgba(accent,0.6));
    grad.addColorStop(0.75, hex2rgba(GOLD,0.3));
    grad.addColorStop(1,'transparent');
    ctx.fillStyle = grad; ctx.fillRect(0,0,W,3);

    // Faixa lateral esquerda
    fillRect(0,0,3,H,accent);

    // ── HEADER ──
    const nomePersonagem = id.nome || (isEN ? 'Unnamed Hero' : 'Herói Sem Nome');
    txt(nomePersonagem, 28, 52, 'bold 28px "Cinzel Decorative", serif', GOLD, 'left', W-56);

    const classeNome = getClasseNome(id.classe) || '—';
    const racaNome   = id.raca
      ? (isEN ? (RACE_NAMES_EN[id.raca] || id.raca) : id.raca)
      : '—';
    const subNome    = id.subclasse
      ? ' · ' + (isEN
          ? ((SUBCLASSES_EN[id.classe]||[]).find(s=>s.v===id.subclasse)?.l || id.subclasse)
          : id.subclasse)
      : '';
    txt(`${classeNome}${subNome}  ·  ${racaNome}  ·  ${isEN?'Level':'Nível'} ${nivel}  ·  ${id.alinhamento||'—'}`,
        28, 73, '11px Cinzel, sans-serif', '#9a8070', 'left', W-56);

    hline(28, 84, W-28, accent, 0.5);

    let curY = 100;

    // ── ATRIBUTOS ──
    sectionTitle(isEN?'Ability Scores':'Atributos', 28, curY, W-56);
    curY += 14;
    const atW = Math.floor((W - 56) / 6);
    ATTRS.forEach((a, i) => {
      const ax    = 28 + i * atW;
      const isMain = id.classe && (CLASSE_ATTR_PRINCIPAL[id.classe] === a);
      fillRect(ax, curY, atW-4, 72, isMain ? hex2rgba(accent,0.12) : '#140f1a');
      strokeRect(ax, curY, atW-4, 72, isMain ? accent : '#2a1a3a', isMain?1.5:1);
      txt(ATTR_LABEL[a], ax+(atW-4)/2, curY+15,
          '8px Cinzel, sans-serif', isMain?accent:'#9a8070', 'center');
      txt(String(finais[a]), ax+(atW-4)/2, curY+45,
          `bold 24px "Cinzel Decorative", serif`, isMain?GOLD:'#c9a84c', 'center');
      txt(modStr(modOf(a)), ax+(atW-4)/2, curY+63,
          '11px Cinzel, sans-serif', isMain?accent:'#7a5c8a', 'center');
    });
    curY += 86;

    // ── COMBATE ──
    sectionTitle(isEN?'Combat':'Combate', 28, curY, W-56);
    curY += 14;
    const combate = [
      { l: isEN?'Max HP':'HP Máx',            v: String(hp),         c:'#c84040' },
      { l: isEN?'Prof. Bonus':'Bônus Prof',    v: `+${prof}`,         c: GOLD    },
      { l: isEN?'Initiative':'Iniciativa',     v: modStr(modOf('DES')), c:'#4a80e8' },
      { l: isEN?'Armor Class':'Armadura',      v: String(ca),         c:'#60a860' },
      { l: isEN?'Speed':'Deslocamento',        v: isEN?'30 ft':'9m',  c:'#9a8070' },
      { l: isEN?'Hit Die':'Dado de Vida',      v:`d${CLASSE_HIT_DICE[id.classe]||8}`, c:accent },
    ];
    const cW = Math.floor((W-56)/6);
    combate.forEach((c,i) => {
      const cx = 28 + i*cW;
      fillRect(cx, curY, cW-4, 48, '#140f1a');
      strokeRect(cx, curY, cW-4, 48, '#2a1a3a');
      txt(c.l, cx+(cW-4)/2, curY+14, '7px Cinzel, sans-serif', '#9a8070', 'center', cW-8);
      txt(c.v, cx+(cW-4)/2, curY+36, 'bold 17px Cinzel, sans-serif', c.c, 'center');
    });
    curY += 62;

    // ── PERICIAS + INFO (duas colunas) ──
    const PAD   = 28;
    const MID   = Math.floor(W/2) + 8;
    const colW  = MID - PAD - 8;
    const col2W = W - MID - PAD;

    // Coluna esquerda — Perícias
    sectionTitle(isEN?'Skills':'Perícias', PAD, curY, colW);
    let pyL = curY + 16;
    listaPericias.forEach((p,i) => {
      if (i%2===0) fillRect(PAD, pyL-12, colW, 17, 'rgba(255,255,255,0.018)');
      // Marcador de proficiência
      ctx.save();
      ctx.beginPath();
      ctx.arc(PAD+7, pyL-3, 3, 0, Math.PI*2);
      if (p.prof) { ctx.fillStyle = GOLD; ctx.fill(); }
      else        { ctx.strokeStyle = '#3a2a4a'; ctx.lineWidth = 1; ctx.stroke(); }
      ctx.restore();
      txt(p.nome, PAD+16, pyL, '11.5px "IM Fell English", serif',
          p.prof ? '#e8d5b0' : '#7a6a8a', 'left', colW-36);
      txt(modStr(p.mod), PAD+colW, pyL, '10px Cinzel, sans-serif',
          p.prof ? GOLD : '#5a4a6a', 'right');
      pyL += 17;
    });

    // Coluna direita — Info + Personalidade
    let pyR = curY;
    sectionTitle(isEN?'Character Info':'Informações', MID, pyR, col2W);
    pyR += 16;
    const infoItems = [
      { l: isEN?'Background':'Antecedente', v: getAntecedenteNome(id.antecedente)||'—' },
      { l: isEN?'Deity':'Divindade',         v: id.divindade||'—' },
      { l: isEN?'Appearance':'Aparência',     v: id.aparencia||'—' },
    ];
    infoItems.forEach(it => {
      fillRect(MID, pyR, col2W, 36, '#140f1a');
      strokeRect(MID, pyR, col2W, 36, '#2a1a3a');
      txt(it.l, MID+8, pyR+13, '7.5px Cinzel, sans-serif', '#9a8070');
      txt(it.v, MID+8, pyR+28, '12px "IM Fell English", serif', '#e8d5b0', 'left', col2W-16);
      pyR += 40;
    });

    pyR += 8;
    sectionTitle(isEN?'Personality':'Personalidade', MID, pyR, col2W);
    pyR += 16;
    const persItems = [
      { l: isEN?'Trait':'Traço',   v: pers.traco||'—' },
      { l: isEN?'Ideal':'Ideal',   v: pers.ideal||'—' },
      { l: isEN?'Bond':'Vínculo',  v: pers.vinculo||'—' },
      { l: isEN?'Flaw':'Fraqueza', v: pers.fraqueza||'—' },
    ];
    persItems.forEach(it => {
      fillRect(MID, pyR, col2W, 52, '#140f1a');
      strokeRect(MID, pyR, col2W, 52, '#2a1a3a');
      txt(it.l, MID+8, pyR+13, '7.5px Cinzel, sans-serif', '#9a8070');
      // Texto com quebra de linha manual
      ctx.save();
      ctx.font = '12px "IM Fell English", serif';
      ctx.fillStyle = '#e8d5b0';
      ctx.textAlign = 'left';
      const words = String(it.v).split(' ');
      let cur = '', lns = [];
      for (const w of words) {
        const test = cur ? cur+' '+w : w;
        if (ctx.measureText(test).width > col2W-20 && cur) { lns.push(cur); cur=w; }
        else cur = test;
      }
      lns.push(cur);
      lns.slice(0,3).forEach((ln,li) => ctx.fillText(ln, MID+8, pyR+27+li*13, col2W-16));
      ctx.restore();
      pyR += 56;
    });

    // ── RODAPÉ ──
    hline(28, H-24, W-28, '#2a1a3a', 0.5);
    txt(
      `Forjador de Heróis · D&D 5e · ${new Date().toLocaleDateString(isEN?'en-US':'pt-BR')}`,
      W/2, H-10, '8px Cinzel, sans-serif', '#4a3a5a', 'center'
    );

    // ── Download ──
    const nomeArq = (id.nome||'personagem').replace(/[^a-z0-9]/gi,'_').toLowerCase();
    canvas.toBlob(blob => {
      if (!blob) {
        setSaveStatus(isEN?'Error generating image.':'Erro ao gerar imagem.','erro');
        return;
      }
      const url = URL.createObjectURL(blob);
      const a   = document.createElement('a');
      a.href    = url;
      a.download = `${nomeArq}_ficha.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setSaveStatus(isEN?'✦ Image saved!':'✦ Imagem salva com sucesso!', 'ok');
    }, 'image/png');

  } catch(e) {
    console.error('exportarPNG:', e);
    setSaveStatus(currentLang==='en'?'Error generating image.':'Erro ao gerar imagem.','erro');
  }
}

/* ── Copiar JSON para clipboard ── */
function copiarJSON() {
  try {
    const dados = coletarDadosPersonagem();
    const texto = JSON.stringify(dados);
    navigator.clipboard.writeText(texto).then(() => {
      setSaveStatus(currentLang === 'en' ? '✦ Backup code copied!' : '✦ Código de backup copiado!', 'ok');
    }).catch(() => {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = texto; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
      setSaveStatus(currentLang === 'en' ? '✦ Backup code copied!' : '✦ Código de backup copiado!', 'ok');
    });
  } catch(e) {
    setSaveStatus(currentLang === 'en' ? 'Error copying.' : 'Erro ao copiar.', 'erro');
  }
}

/* ── Exportar HTML (ficha renderizada para impressão) ── */
function exportarHTML() {
  try {
    const dados = coletarDadosPersonagem();
    const id = dados.identidade;
    const finais = getValoresFinais();
    const modOf = a => Math.floor((finais[a] - 10) / 2);
    const modStr = v => (v >= 0 ? '+' : '') + v;
    const nivel = parseInt(id.nivel) || 1;
    const prof = getProfBonus(nivel);
    const hp = (CLASSE_HIT_DICE[id.classe] || 8) + modOf('CON');

    const pericias = PERICIAS_CONFIG.map(p => {
      const temProf = periciasEscolhidas.has(p.id) || (ANTECEDENTE_PERICIAS[id.antecedente] || []).includes(p.id);
      const mod = modOf(p.attr) + (temProf ? prof : 0);
      return { nome: p.nome, mod, prof: temProf };
    });

    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Ficha — ${id.nome || 'Personagem'}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;700&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#0d0a0e;color:#e8d5b0;font-family:'IM Fell English',serif;padding:32px;max-width:900px;margin:0 auto}
  h1{font-family:'Cinzel Decorative',serif;color:#c9a84c;font-size:28px;letter-spacing:3px;margin-bottom:4px}
  h2{font-family:'Cinzel',serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#7a5c8a;margin:20px 0 10px;padding-bottom:6px;border-bottom:1px solid #2a1a3a}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
  .card{background:#140f1a;border:1px solid #3a2a3a;padding:14px;margin-bottom:12px}
  .label{font-family:'Cinzel',serif;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a8070;margin-bottom:3px}
  .valor{font-size:15px;color:#e8d5b0}
  .attr-box{background:#140f1a;border:1px solid #3a2a3a;padding:12px;text-align:center}
  .attr-nome{font-family:'Cinzel',serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#9a8070}
  .attr-val{font-family:'Cinzel Decorative',serif;font-size:26px;color:#c9a84c;margin:4px 0}
  .attr-mod{font-size:13px;color:#7a5c8a}
  .per{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #1a1020;font-size:13px}
  .per-prof{color:#c9a84c;font-size:10px;margin-right:6px}
  .gold{color:#c9a84c}
  @media print{body{background:#fff;color:#000} .card{border:1px solid #ccc} h1,h2,.attr-val,.gold{color:#000} .attr-mod,.attr-nome,.label{color:#555}}
</style>
</head>
<body>
<h1>${id.nome || 'Sem Nome'}</h1>
<div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:2px;color:#9a8070;margin-bottom:24px">
  ${getClasseNome(id.classe)||'—'} · ${id.raca||'—'} · Nível ${nivel} · ${id.alinhamento||'—'}
</div>

<h2>Atributos</h2>
<div class="grid3" style="margin-bottom:16px">
${['FOR','DES','CON','INT','SAB','CAR'].map(a=>`
  <div class="attr-box">
    <div class="attr-nome">${a}</div>
    <div class="attr-val">${finais[a]}</div>
    <div class="attr-mod">${modStr(modOf(a))}</div>
  </div>`).join('')}
</div>

<h2>Combate</h2>
<div class="grid3" style="margin-bottom:16px">
  <div class="card"><div class="label">HP Máximo</div><div class="valor gold">${Math.max(1,hp)}</div></div>
  <div class="card"><div class="label">Bônus de Proficiência</div><div class="valor gold">+${prof}</div></div>
  <div class="card"><div class="label">Iniciativa</div><div class="valor gold">${modStr(modOf('DES'))}</div></div>
</div>

<div class="grid2">
<div>
<h2>Perícias</h2>
${pericias.map(p=>`<div class="per"><span>${p.prof?'<span class="per-prof">✦</span>':''}${p.nome}</span><span class="${p.prof?'gold':''}">${modStr(p.mod)}</span></div>`).join('')}
</div>
<div>
<h2>Informações</h2>
<div class="card"><div class="label">Antecedente</div><div class="valor">${getAntecedenteNome(id.antecedente)||'—'}</div></div>
<div class="card"><div class="label">Divindade</div><div class="valor">${id.divindade||'—'}</div></div>
<div class="card"><div class="label">Aparência</div><div class="valor">${id.aparencia||'—'}</div></div>
<h2>Personalidade</h2>
<div class="card"><div class="label">Traço</div><div class="valor">${dados.personalidade.traco||'—'}</div></div>
<div class="card"><div class="label">Ideal</div><div class="valor">${dados.personalidade.ideal||'—'}</div></div>
<div class="card"><div class="label">Vínculo</div><div class="valor">${dados.personalidade.vinculo||'—'}</div></div>
<div class="card"><div class="label">Fraqueza</div><div class="valor">${dados.personalidade.fraqueza||'—'}</div></div>
</div>
</div>
<div style="text-align:center;font-family:'Cinzel',serif;font-size:8px;letter-spacing:2px;color:#9a8070;margin-top:32px;opacity:0.5">
  Forjador de Heróis · D&D 5e · gerado em ${new Date().toLocaleDateString('pt-BR')}
</div>
</body></html>`;

    const nomeArq = (id.nome || 'personagem').replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${nomeArq}_ficha.html`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    setSaveStatus(currentLang === 'en' ? '✦ Character sheet exported!' : '✦ Ficha exportada com sucesso!', 'ok');
  } catch(e) {
    setSaveStatus(currentLang === 'en' ? 'Error exporting sheet.' : 'Erro ao exportar ficha.', 'erro');
  }
}

/* ── Toggle área de importar ── */
function toggleImport() {
  const area = document.getElementById('save-import-area');
  if (!area) return;
  const visivel = area.style.display === 'block';
  area.style.display = visivel ? 'none' : 'block';
  if (!visivel) document.getElementById('save-import-input')?.focus();
}

/* ── Importar personagem do JSON ── */
function importarJSON() {
  const input = document.getElementById('save-import-input');
  if (!input?.value.trim()) {
    setSaveStatus(currentLang === 'en' ? 'Paste your backup code first.' : 'Cole o código de backup primeiro.', 'erro');
    return;
  }
  try {
    const dados = JSON.parse(input.value.trim());
    if (!dados.identidade) throw new Error('formato inválido');

    const id = dados.identidade;
    const set = (elId, v) => { const el = document.getElementById(elId); if (el && v !== undefined && v !== null) el.value = v; };

    // ── 1. Campos básicos de identidade (sem disparar eventos ainda) ──
    set('char-name',       id.nome);
    set('player-name',     id.jogador);
    set('char-level',      id.nivel);
    set('char-race',       id.raca);
    set('char-background', id.antecedente);
    set('char-appearance', id.aparencia);
    set('char-age',        id.idade);
    set('char-height',     id.altura);
    set('char-weight',     id.peso);

    // ── 2. Restaurar atributos ANTES de onClassChange (que os resetaria) ──
    if (dados.atributos) {
      pbValores = { ...dados.atributos };
    }

    // ── 3. Restaurar bônus raciais livres ──
    if (dados.racialLivre) {
      racialLivreEscolhas = { ...dados.racialLivre };
    }

    // ── 4. Restaurar alinhamento ──
    if (dados.alinhamento) {
      selectedAlignment = dados.alinhamento;
    }

    // ── 5. Restaurar perícias ──
    if (dados.pericias) {
      periciasEscolhidas = new Set(dados.pericias);
    }

    // ── 6. Restaurar equipamento ──
    if (dados.equipamento) {
      eqEscolhas      = dados.equipamento.escolhas || {};
      eqArmasEscolhidas = dados.equipamento.armas  || {};
    }

    // ── 7. Restaurar personalidade ──
    if (dados.personalidade) {
      set('eq-traco',    dados.personalidade.traco);
      set('eq-ideal',    dados.personalidade.ideal);
      set('eq-vinculo',  dados.personalidade.vinculo);
      set('eq-fraqueza', dados.personalidade.fraqueza);
    }

    // ── 8. Disparar onRaceChange para popular sub-raça e deity ──
    //    mas salvar e re-aplicar os valores livres porque onRaceChange os reseta
    set('char-race', id.raca);
    onRaceChange();
    racialLivreEscolhas = dados.racialLivre ? { ...dados.racialLivre } : {};

    // Restaurar sub-raça depois que onRaceChange populou o select
    if (id.subraca) set('char-subrace', id.subraca);

    // Restaurar ancestral dracônico se houver
    if (id.ancestral) set('char-ancestral', id.ancestral);

    // Restaurar divindade
    if (id.divindade) {
      const selDeity  = document.getElementById('deity-select');
      const freeDeity = document.getElementById('deity-free');
      if (selDeity) {
        const optExists = [...selDeity.options].some(o => o.value === id.divindade);
        if (optExists) {
          selDeity.value = id.divindade;
          if (freeDeity) freeDeity.value = '';
        } else {
          if (freeDeity) freeDeity.value = id.divindade;
        }
      }
    }

    // ── 9. Disparar onClassChange para popular subclasse select ──
    //    mas proteger atributos e equipamento antes
    const atributosSalvos  = { ...pbValores };
    const eqEscolhasSalvas = { ...eqEscolhas };
    const eqArmasSalvas    = { ...eqArmasEscolhidas };

    set('char-class', id.classe);
    onClassChange(); // popula o <select> de subclasse e aplica tema de cor

    // Re-aplicar o que onClassChange resetou
    pbValores         = atributosSalvos;
    eqEscolhas        = eqEscolhasSalvas;
    eqArmasEscolhidas = eqArmasSalvas;

    // Agora que o select de subclasse está populado, podemos setar o valor
    if (id.subclasse) set('char-subclass', id.subclasse);

    // ── 10. Restaurar alinhamento na UI ──
    document.querySelectorAll('.align-btn').forEach(b => {
      b.classList.toggle('selected', b.getAttribute('onclick')?.includes(`'${dados.alinhamento}'`) || b.getAttribute('onclick')?.includes(`"${dados.alinhamento}"`));
    });

    // ── 11. Restaurar preview do nome ──
    updateNamePreview();

    // ── 12. Restaurar avatar ──
    if (dados.avatar && dados.avatar.startsWith('data:')) {
      const box = document.getElementById('avatar-box');
      const ph  = document.getElementById('avatar-placeholder');
      if (box) {
        if (ph) ph.style.display = 'none';
        let img = box.querySelector('img');
        if (!img) { img = document.createElement('img'); box.appendChild(img); }
        img.src = dados.avatar;
      }
    }

    // ── 13. Revelar seções que tinham dados salvos ──
    // Helper para revelar seção sem animação de scroll
    function revelarSecao(id, btnId) {
      const sec = document.getElementById(id);
      const btn = document.getElementById(btnId);
      if (!sec) return;
      if (btn) btn.style.display = 'none';
      sec.style.display = 'block';
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    }

    // Sempre revela atributos (são preenchidos em qualquer personagem)
    revelarSecao('sec-atributos', 'btn-continuar');
    renderPointBuy(); // renderiza com pbValores já restaurados

    // Revela perícias se havia escolhas salvas
    if (dados.pericias && dados.pericias.length > 0) {
      revelarSecao('sec-pericias', 'btn-continuar-2');
      renderPericias();
    }

    // Revela magias/habilidades se classe estiver definida
    if (id.classe) {
      revelarSecao('sec-magias', 'btn-continuar-3');
      renderMagias();
    }

    // Revela equipamento se havia escolhas salvas
    if (dados.equipamento && (Object.keys(dados.equipamento.escolhas || {}).length > 0 || Object.keys(dados.equipamento.armas || {}).length > 0)) {
      revelarSecao('sec-equipamento', 'btn-continuar-4');
      renderEquipamentoClasse();
      renderEquipamentoAntecedente();
      atualizarInventarioVisual();
    }

    // Atualizar progress steps para o último passo revelado
    const ultimoStep =
      (dados.equipamento && Object.keys(dados.equipamento.escolhas || {}).length > 0) ? 5 :
      id.classe                              ? 4 :
      (dados.pericias && dados.pericias.length > 0) ? 3 : 2;
    atualizarProgress(ultimoStep);

    // ── 14. Mostrar botão salvar e fechar área de import ──
    const btnSalvar = document.getElementById('btn-continuar-5');
    if (btnSalvar) btnSalvar.style.display = 'block';

    toggleImport();
    renderSaveSummary();
    setSaveStatus(currentLang === 'en' ? '✦ Character loaded successfully!' : '✦ Personagem carregado com sucesso!', 'ok');

    // Scroll suave para o topo do personagem
    setTimeout(() => document.getElementById('sec-atributos')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);

  } catch(e) {
    setSaveStatus(currentLang === 'en' ? 'Invalid code. Check and try again.' : 'Código inválido. Verifique e tente novamente.', 'erro');
  }
}
