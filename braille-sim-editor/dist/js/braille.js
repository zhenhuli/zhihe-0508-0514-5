class BrailleEditor {
  constructor() {
    this.canvas = document.getElementById('brailleCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.dots = [false, false, false, false, false, false];
    this.currentEncoding = 'unicode';
    this.history = [];
    this.dotRadius = 25;
    this.dotSpacing = 70;
    this.offsetX = 65;
    this.offsetY = 50;
    this.STORAGE_KEY = 'braille-editor-history';

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadHistoryFromStorage();
    this.render();
    this.updateResult();
  }

  saveHistoryToStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.history));
    } catch (e) {
      console.warn('Failed to save history to localStorage:', e);
    }
  }

  loadHistoryFromStorage() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        this.history = JSON.parse(saved);
        this.updateHistoryDisplay();
      }
    } catch (e) {
      console.warn('Failed to load history from localStorage:', e);
      this.history = [];
    }
  }

  setupEventListeners() {
    this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
    
    document.getElementById('clearBtn').addEventListener('click', () => this.clearDots());
    document.getElementById('addBtn').addEventListener('click', () => this.addToHistory());
    document.getElementById('clearHistoryBtn').addEventListener('click', () => this.clearHistory());
    document.getElementById('encodingSelect').addEventListener('change', (e) => {
      this.currentEncoding = e.target.value;
      this.updateResult();
      this.updateHistoryDisplay();
    });
  }

  handleCanvasClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 6; i++) {
      const dotX = this.getDotX(i);
      const dotY = this.getDotY(i);
      const distance = Math.sqrt((x - dotX) ** 2 + (y - dotY) ** 2);

      if (distance < this.dotRadius + 10) {
        this.dots[i] = !this.dots[i];
        this.render();
        this.updateResult();
        break;
      }
    }
  }

  getDotX(index) {
    const col = index < 3 ? 0 : 1;
    return this.offsetX + col * this.dotSpacing;
  }

  getDotY(index) {
    const row = index % 3;
    return this.offsetY + row * this.dotSpacing;
  }

  render() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(10, 10, width - 20, height - 20, 10);
    ctx.stroke();

    for (let i = 0; i < 6; i++) {
      const x = this.getDotX(i);
      const y = this.getDotY(i);
      const isActive = this.dots[i];

      ctx.beginPath();
      ctx.arc(x, y, this.dotRadius + 5, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? 'rgba(102, 126, 234, 0.15)' : 'rgba(0, 0, 0, 0.03)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, this.dotRadius, 0, Math.PI * 2);
      
      if (isActive) {
        const gradient = ctx.createRadialGradient(x - 8, y - 8, 0, x, y, this.dotRadius);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x - 8, y - 8, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      } else {
        ctx.fillStyle = '#f0f0f0';
        ctx.fill();
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.fillStyle = isActive ? 'white' : '#999';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((i + 1).toString(), x, y);
    }
  }

  clearDots() {
    this.dots = [false, false, false, false, false, false];
    this.render();
    this.updateResult();
  }

  getBrailleCode() {
    return this.dots.map(dot => dot ? '1' : '0').join('');
  }

  getUnicodeBraille() {
    const dotMap = [0, 1, 2, 6, 3, 4, 5, 7];
    let code = 0x2800;
    
    for (let i = 0; i < 6; i++) {
      if (this.dots[i]) {
        code += 1 << dotMap[i];
      }
    }
    
    return String.fromCharCode(code);
  }

  getChineseBraille() {
    const code = this.getBrailleCode();
    const chineseMap = {
      '100000': 'ㄅ', '110000': 'ㄆ', '101000': 'ㄇ', '101100': 'ㄈ',
      '100100': 'ㄉ', '110100': 'ㄊ', '111000': 'ㄋ', '111100': 'ㄌ',
      '010100': 'ㄍ', '011100': 'ㄎ', '011000': 'ㄏ', '100010': 'ㄐ',
      '110010': 'ㄑ', '110110': 'ㄒ', '000100': 'ㄓ', '010000': 'ㄔ',
      '000110': 'ㄕ', '010010': 'ㄖ', '000010': 'ㄗ', '001100': 'ㄘ',
      '001110': 'ㄙ', '100001': 'ㄧ', '001000': 'ㄨ', '001001': 'ㄩ',
      '100110': 'ㄚ', '010110': 'ㄛ', '000001': 'ㄜ', '101010': 'ㄝ',
      '111010': 'ㄞ', '011010': 'ㄟ', '101110': 'ㄠ', '011110': 'ㄡ',
      '001010': 'ㄢ', '010101': 'ㄣ', '010111': 'ㄤ', '001011': 'ㄥ',
      '110001': 'ㄦ', '000101': '啊', '110101': '喔', '100101': '额',
      '000011': '衣', '101001': '乌', '101101': '迂', '001101': '哎'
    };
    
    return chineseMap[code] || null;
  }

  getChineseDoubleBraille() {
    const code = this.getBrailleCode();
    const doubleMap = {
      '100000': 'b', '110000': 'p', '101000': 'm', '101100': 'f',
      '100100': 'd', '110100': 't', '111000': 'n', '111100': 'l',
      '010100': 'g', '011100': 'k', '011000': 'h', '100010': 'j',
      '110010': 'q', '110110': 'x', '000100': 'zh', '010000': 'ch',
      '000110': 'sh', '010010': 'r', '000010': 'z', '001100': 'c',
      '001110': 's', '100001': 'i', '001000': 'u', '001001': 'v',
      '100110': 'a', '010110': 'o', '000001': 'e', '101010': 'ie',
      '111010': 'ai', '011010': 'ei', '101110': 'ao', '011110': 'ou',
      '001010': 'an', '010101': 'en', '010111': 'ang', '001011': 'eng',
      '110001': 'er'
    };
    
    return doubleMap[code] || null;
  }

  translate() {
    switch (this.currentEncoding) {
      case 'unicode':
        return this.getUnicodeBraille();
      case 'chinese':
        return this.getChineseBraille();
      case 'chinese-double':
        return this.getChineseDoubleBraille();
      default:
        return this.getUnicodeBraille();
    }
  }

  updateResult() {
    const brailleCode = this.getBrailleCode();
    const resultChar = document.getElementById('resultChar');
    const brailleCodeEl = document.getElementById('brailleCode');

    brailleCodeEl.textContent = brailleCode;

    const translated = this.translate();
    if (translated) {
      resultChar.innerHTML = `<span class="character">${translated}</span>`;
    } else {
      resultChar.innerHTML = `<span class="empty">未定义字符</span>`;
    }
  }

  addToHistory() {
    const translated = this.translate();
    if (translated) {
      const item = {
        dots: [...this.dots],
        code: this.getBrailleCode(),
        character: translated,
        encoding: this.currentEncoding,
        timestamp: Date.now()
      };
      this.history.unshift(item);
      if (this.history.length > 20) {
        this.history.pop();
      }
      this.updateHistoryDisplay();
      this.saveHistoryToStorage();
    }
  }

  clearHistory() {
    this.history = [];
    this.updateHistoryDisplay();
    this.saveHistoryToStorage();
  }

  updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    this.history.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'history-item';
      div.innerHTML = `
        <span class="braille-char">${item.character}</span>
        <span class="text-char">${item.code}</span>
      `;
      div.addEventListener('click', () => {
        this.dots = [...item.dots];
        this.currentEncoding = item.encoding;
        document.getElementById('encodingSelect').value = item.encoding;
        this.render();
        this.updateResult();
      });
      historyList.appendChild(div);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new BrailleEditor();
});
