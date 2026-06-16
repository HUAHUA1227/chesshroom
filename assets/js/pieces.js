// Chesshroom — 棋子圖鑑 | colorway switch + piece detail modal
(function () {
  'use strict';

  var PIECES = [
    { no: 'I', role: '國王', roleEn: 'King', cn: '靈芝國王', en: 'Reishi / Lingzhi',
      realImg: 'assets/images/king-real.jpg', fantasyImg: 'assets/images/king-fantasy.jpg',
      tag: '多層扇形菌蓋自然長成王冠，王者感來自靈芝本身。',
      desc: '靈芝是一種木質化、扇形菌蓋的多孔菌，常見外型具有層層堆疊的紅褐色菌蓋與年輪狀紋理。它在東亞文化中常被視為長壽、權威與祥瑞的象徵，因此非常適合作為西洋棋中的國王。靈芝國王以粗壯菌柄作為穩重主體，上方多層扇形菌蓋自然形成類似王冠的輪廓 ── 不需要人工皇冠，王者感來自靈芝本身莊重、古老、木質化的形態。',
      qualities: ['莊嚴', '長壽', '權威', '森林之王'],
      features: ['多層扇形菌蓋', '年輪狀紋理', '粗壯木質菌柄', '自然冠狀輪廓'] },
    { no: 'II', role: '皇后', roleEn: 'Queen', cn: '墨汁鬼傘皇后', en: 'Shaggy Ink Cap',
      realImg: 'assets/images/queen-real.jpg', fantasyImg: 'assets/images/queen-fantasy.jpg',
      tag: '長鐘形裙襬與墨滴邊緣，像披著長袍的森林女王。',
      desc: '墨汁鬼傘是一種高挑、鐘形或柱狀菌蓋的蘑菇，成熟時邊緣會逐漸液化成黑色墨汁般的流動感。它的外表有細長纖維與鱗片質感，像披著長袍的森林女王，非常適合表現皇后的優雅、高挑、華麗與流動。菌蓋做成長鐘形裙襬，表面以垂直紋理呈現纖維感，下緣以厚實的墨滴或波浪邊表現長袍的垂墜。',
      qualities: ['優雅', '高挑', '神秘', '流動'],
      features: ['長鐘形菌蓋', '垂直纖維紋', '裙襬垂墜感', '厚實墨滴邊緣'] },
    { no: 'III', role: '主教', roleEn: 'Bishop', cn: '羊肚菌主教', en: 'Morel Mushroom',
      realImg: 'assets/images/bishop-real.jpg', fantasyImg: 'assets/images/bishop-fantasy.jpg',
      tag: '蜂窩狀菌蓋高而略尖，自然神似主教帽 mitre。',
      desc: '羊肚菌最具代表性的特徵是蜂窩狀菌蓋。它的菌蓋高而略尖，表面充滿不規則凹洞與隆起脊線，很自然地讓人聯想到主教帽 mitre。作為主教，它保留高瘦、尖頂的輪廓，並在菌蓋表面加入深凹蜂窩紋理；側面也可加入一條極輕微的縱向凹線，暗示傳統主教棋子上的斜切口，但仍保持菇類的自然感。',
      qualities: ['神秘', '智慧', '儀式感', '自然聖殿'],
      features: ['不規則蜂窩孔洞', '高尖菌蓋', '主教帽輪廓', '厚實隆起脊線'] },
    { no: 'IV', role: '騎士', roleEn: 'Knight', cn: '鹿角靈芝騎士', en: 'Antler Reishi',
      realImg: 'assets/images/knight-real.jpg', fantasyImg: 'assets/images/knight-fantasy.jpg',
      tag: '分枝彎曲成馬頭與馬頸，野性的雕塑感。',
      desc: '鹿角靈芝是靈芝的一種特殊生長型態，菌體會長成細長、分枝、像鹿角或木質枝幹的形狀。它的有機分枝感非常適合表現騎士的動勢與馬頭剪影 ── 不需要直接做成馬，而是讓鹿角靈芝自然彎曲成馬頭與馬頸的輪廓。分枝可以像鹿角、鬃毛或森林枝幹，但必須加粗並與主體融合，避免 3D 列印時斷裂。',
      qualities: ['動態', '野性', '雕塑感', '森林騎士'],
      features: ['馬頭側影輪廓', '彎曲主幹', '鹿角狀分枝', '木質靈芝紋理'] },
    { no: 'V', role: '城堡', roleEn: 'Rook', cn: '牛肝菌城堡', en: 'Porcini Mushroom',
      realImg: 'assets/images/rook-real.jpg', fantasyImg: 'assets/images/rook-fantasy.jpg',
      tag: '厚實菌柄與寬厚菌蓋，天然堡壘般的低重心。',
      desc: '牛肝菌通常有厚實的菌柄與寬大的棕色菌蓋，外型穩重、敦實、低重心。它不像傘菌那樣細薄，而是有一種天然堡壘般的厚重感，非常適合轉化成城堡。粗壯菌柄可作為塔身，寬厚菌蓋則像堡壘頂部；菌蓋邊緣可微妙加入城垛感，但不能做得太像石頭城堡，仍要保留牛肝菌自然的厚帽、粗柄與柔和曲面。',
      qualities: ['穩固', '防禦', '厚重', '堡壘'],
      features: ['粗壯菌柄塔身', '寬厚菌蓋', '低重心', '自然城垛感'] },
    { no: 'VI', role: '小兵', roleEn: 'Pawn', cn: '小圓蘑菇小兵', en: 'Button Mushroom',
      realImg: 'assets/images/pawn-real.jpg', fantasyImg: 'assets/images/pawn-fantasy.jpg',
      tag: '半球形菌蓋、短厚菌柄，整齊可愛、適合大量列印。',
      desc: '小圓蘑菇是最常見、最簡潔的蘑菇形態之一，具有圓潤菌蓋與短厚菌柄。它的輪廓乾淨、穩定、容易辨識，也非常適合大量 3D 列印，因此很適合作為小兵。它不需要過度華麗，只要保留半球形菌蓋、短而穩的菌柄與一致的底座，就能呈現整齊、可愛、成群出現的感覺 ── 像剛從森林棋盤中冒出的小小守衛。',
      qualities: ['簡潔', '可愛', '整齊', '可靠'],
      features: ['半球形菌蓋', '短厚菌柄', '低矮比例', '適合大量列印'] }
  ];

  var PALETTES = {
    real: { pc: '#c9a86a', pcSoft: '#d9c79c', glow: 'rgba(201,168,106,.16)', glow2: 'rgba(180,206,160,.12)', x: '0%',
      label: '寫實菇色配色', desc: '貼近真實菌類的色澤 ── 紅褐、土棕、米白與森林的綠。', tag: '寫實菇色' },
    fantasy: { pc: '#ff6ec7', pcSoft: '#ffb3e6', glow: 'rgba(255,110,199,.22)', glow2: 'rgba(110,235,205,.16)', x: '100%',
      label: '幻想毒菇配色', desc: '幻想中的毒菇 ── 螢光、妖豔，像在暗處發亮的警告色。', tag: '幻想毒菇' }
  };

  var colorway = 'real';

  function applyPalette(cw) {
    var p = PALETTES[cw];
    var root = document.documentElement.style;
    root.setProperty('--pc', p.pc);
    root.setProperty('--pc-soft', p.pcSoft);
    root.setProperty('--glow', p.glow);
    root.setProperty('--glow2', p.glow2);
    root.setProperty('--cw-x', p.x);

    var label = document.querySelector('.colorway__label');
    var desc = document.querySelector('.colorway__desc');
    if (label) label.textContent = p.label;
    if (desc) desc.textContent = p.desc;

    document.querySelectorAll('.colorway__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.cw === cw);
    });

    document.querySelectorAll('.piece-tile').forEach(function (tile, i) {
      var piece = PIECES[i];
      if (!piece) return;
      var img = tile.querySelector('img');
      if (img) img.src = cw === 'fantasy' ? piece.fantasyImg : piece.realImg;
      var cwtag = tile.querySelector('.piece-tile__cwtag');
      if (cwtag) cwtag.textContent = p.tag;
    });

    if (openIndex !== null) renderModal(openIndex);
  }

  function setColorway(cw) {
    colorway = cw;
    applyPalette(cw);
  }

  var openIndex = null;
  var backdrop = document.getElementById('piece-modal');

  function renderModal(i) {
    var piece = PIECES[i];
    if (!piece || !backdrop) return;
    var p = PALETTES[colorway];
    var img = piece && (colorway === 'fantasy' ? piece.fantasyImg : piece.realImg);

    backdrop.querySelector('.modal-visual img').src = img;
    backdrop.querySelector('.modal-visual img').alt = piece.cn;
    backdrop.querySelector('.modal-visual__no').textContent = piece.no;
    backdrop.querySelector('.modal-visual__tag').textContent = p.tag + '・實拍';
    backdrop.querySelector('.modal-text__role').textContent = piece.roleEn + ' · ' + piece.role;
    backdrop.querySelector('.modal-text h2').textContent = piece.cn;
    backdrop.querySelector('.modal-text__en').textContent = piece.en;
    backdrop.querySelector('.modal-text__desc').textContent = piece.desc;

    var qualitiesEl = backdrop.querySelector('.modal-qualities');
    qualitiesEl.innerHTML = '';
    piece.qualities.forEach(function (q) {
      var span = document.createElement('span');
      span.textContent = q;
      qualitiesEl.appendChild(span);
    });

    var featuresEl = backdrop.querySelector('.modal-features');
    featuresEl.innerHTML = '';
    piece.features.forEach(function (f) {
      var div = document.createElement('div');
      var bullet = document.createElement('span');
      bullet.className = 'bullet';
      bullet.textContent = '◆';
      div.appendChild(bullet);
      div.appendChild(document.createTextNode(' ' + f));
      featuresEl.appendChild(div);
    });
  }

  function openModal(i) {
    openIndex = i;
    renderModal(i);
    if (backdrop) backdrop.hidden = false;
  }

  function closeModal() {
    openIndex = null;
    if (backdrop) backdrop.hidden = true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyPalette(colorway);

    document.querySelectorAll('.colorway__btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setColorway(btn.dataset.cw); });
    });

    document.querySelectorAll('.piece-tile').forEach(function (tile) {
      tile.addEventListener('click', function () {
        openModal(parseInt(tile.dataset.index, 10));
      });
    });

    if (backdrop) {
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeModal();
      });
      var closeBtn = backdrop.querySelector('.modal-close');
      if (closeBtn) closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
