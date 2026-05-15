const defaultConfig = {
    mode: 'hard',
    gridSize: 60,
    rows: 10,
    cols: 8,
    borderWidth: 2,
    innerLineWidth: 1,
    lineColor: '#c41e3a',
    paperColor: '#f8f1e5',
    paperTexture: 'light',
    showDiagonal: true,
    showCenterDot: true
};
let config = {
    ...defaultConfig
};
const elements = {
    gridContainer: document.getElementById('gridContainer'),
    paper: document.getElementById('paper'),
    gridSize: document.getElementById('gridSize'),
    gridSizeValue: document.getElementById('gridSizeValue'),
    rows: document.getElementById('rows'),
    rowsValue: document.getElementById('rowsValue'),
    cols: document.getElementById('cols'),
    colsValue: document.getElementById('colsValue'),
    borderWidth: document.getElementById('borderWidth'),
    borderWidthValue: document.getElementById('borderWidthValue'),
    innerLineWidth: document.getElementById('innerLineWidth'),
    innerLineWidthValue: document.getElementById('innerLineWidthValue'),
    lineColor: document.getElementById('lineColor'),
    paperColor: document.getElementById('paperColor'),
    paperTexture: document.getElementById('paperTexture'),
    showDiagonal: document.getElementById('showDiagonal'),
    showCenterDot: document.getElementById('showCenterDot'),
    printBtn: document.getElementById('printBtn'),
    resetBtn: document.getElementById('resetBtn'),
    modeBtns: document.querySelectorAll('.mode-btn')
};
function init() {
    bindEvents();
    applyConfig();
    renderGrid();
}
function bindEvents() {
    elements.gridSize.addEventListener('input', (e)=>{
        config.gridSize = parseInt(e.target.value);
        elements.gridSizeValue.textContent = config.gridSize;
        applyConfig();
        renderGrid();
    });
    elements.rows.addEventListener('input', (e)=>{
        config.rows = parseInt(e.target.value);
        elements.rowsValue.textContent = config.rows;
        applyConfig();
        renderGrid();
    });
    elements.cols.addEventListener('input', (e)=>{
        config.cols = parseInt(e.target.value);
        elements.colsValue.textContent = config.cols;
        applyConfig();
        renderGrid();
    });
    elements.borderWidth.addEventListener('input', (e)=>{
        config.borderWidth = parseFloat(e.target.value);
        elements.borderWidthValue.textContent = config.borderWidth;
        applyConfig();
        renderGrid();
    });
    elements.innerLineWidth.addEventListener('input', (e)=>{
        config.innerLineWidth = parseFloat(e.target.value);
        elements.innerLineWidthValue.textContent = config.innerLineWidth;
        applyConfig();
        renderGrid();
    });
    elements.lineColor.addEventListener('input', (e)=>{
        config.lineColor = e.target.value;
        applyConfig();
        renderGrid();
    });
    elements.paperColor.addEventListener('input', (e)=>{
        config.paperColor = e.target.value;
        applyConfig();
    });
    elements.paperTexture.addEventListener('change', (e)=>{
        config.paperTexture = e.target.value;
        applyConfig();
    });
    elements.showDiagonal.addEventListener('change', (e)=>{
        config.showDiagonal = e.target.checked;
        renderGrid();
    });
    elements.showCenterDot.addEventListener('change', (e)=>{
        config.showCenterDot = e.target.checked;
        renderGrid();
    });
    elements.modeBtns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            elements.modeBtns.forEach((b)=>b.classList.remove('active'));
            btn.classList.add('active');
            config.mode = btn.dataset.mode;
            applyModePreset();
            applyConfig();
            renderGrid();
        });
    });
    elements.printBtn.addEventListener('click', ()=>{
        window.print();
    });
    elements.resetBtn.addEventListener('click', ()=>{
        config = {
            ...defaultConfig
        };
        applyConfig();
        renderGrid();
        updateUIValues();
    });
}
function applyModePreset() {
    if (config.mode === 'hard') {
        config.gridSize = 40;
        config.rows = 15;
        config.cols = 12;
        config.borderWidth = 1.5;
        config.innerLineWidth = 0.8;
    } else {
        config.gridSize = 80;
        config.rows = 8;
        config.cols = 6;
        config.borderWidth = 2.5;
        config.innerLineWidth = 1.2;
    }
}
function updateUIValues() {
    elements.gridSize.value = config.gridSize;
    elements.gridSizeValue.textContent = config.gridSize;
    elements.rows.value = config.rows;
    elements.rowsValue.textContent = config.rows;
    elements.cols.value = config.cols;
    elements.colsValue.textContent = config.cols;
    elements.borderWidth.value = config.borderWidth;
    elements.borderWidthValue.textContent = config.borderWidth;
    elements.innerLineWidth.value = config.innerLineWidth;
    elements.innerLineWidthValue.textContent = config.innerLineWidth;
    elements.lineColor.value = config.lineColor;
    elements.paperColor.value = config.paperColor;
    elements.paperTexture.value = config.paperTexture;
    elements.showDiagonal.checked = config.showDiagonal;
    elements.showCenterDot.checked = config.showCenterDot;
}
function applyConfig() {
    elements.paper.style.backgroundColor = config.paperColor;
    elements.paper.className = 'paper';
    if (config.paperTexture === 'light') elements.paper.classList.add('texture-light');
    else if (config.paperTexture === 'heavy') elements.paper.classList.add('texture-heavy');
}
function renderGrid() {
    elements.gridContainer.innerHTML = '';
    elements.gridContainer.style.gridTemplateColumns = `repeat(${config.cols}, ${config.gridSize}px)`;
    elements.gridContainer.style.gridTemplateRows = `repeat(${config.rows}, ${config.gridSize}px)`;
    const totalCells = config.rows * config.cols;
    for(let i = 0; i < totalCells; i++){
        const cell = createGridCell(i);
        elements.gridContainer.appendChild(cell);
    }
}
function createGridCell(index) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.style.width = `${config.gridSize}px`;
    cell.style.height = `${config.gridSize}px`;
    cell.style.borderColor = config.lineColor;
    const row = Math.floor(index / config.cols);
    const col = index % config.cols;
    let borderTop = config.borderWidth;
    let borderRight = config.borderWidth;
    let borderBottom = config.borderWidth;
    let borderLeft = config.borderWidth;
    if (row > 0) borderTop = config.innerLineWidth;
    if (col < config.cols - 1) borderRight = config.innerLineWidth;
    if (row < config.rows - 1) borderBottom = config.innerLineWidth;
    if (col > 0) borderLeft = config.innerLineWidth;
    cell.style.borderWidth = `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`;
    const innerGrid = document.createElement('div');
    innerGrid.className = 'inner-grid';
    innerGrid.style.color = config.lineColor;
    const horizontal = document.createElement('div');
    horizontal.className = 'horizontal';
    horizontal.style.height = `${config.innerLineWidth}px`;
    const vertical = document.createElement('div');
    vertical.className = 'vertical';
    vertical.style.width = `${config.innerLineWidth}px`;
    innerGrid.appendChild(horizontal);
    innerGrid.appendChild(vertical);
    if (config.showDiagonal) {
        const diagonal = document.createElement('div');
        diagonal.className = 'diagonal';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('preserveAspectRatio', 'none');
        const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttribute('x1', '0');
        line1.setAttribute('y1', '0');
        line1.setAttribute('x2', '100');
        line1.setAttribute('y2', '100');
        line1.setAttribute('stroke-width', config.innerLineWidth * 2);
        const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttribute('x1', '100');
        line2.setAttribute('y1', '0');
        line2.setAttribute('x2', '0');
        line2.setAttribute('y2', '100');
        line2.setAttribute('stroke-width', config.innerLineWidth * 2);
        svg.appendChild(line1);
        svg.appendChild(line2);
        diagonal.appendChild(svg);
        innerGrid.appendChild(diagonal);
    }
    if (config.showCenterDot) {
        const centerDot = document.createElement('div');
        centerDot.className = 'center-dot';
        innerGrid.appendChild(centerDot);
    }
    cell.appendChild(innerGrid);
    return cell;
}
document.addEventListener('DOMContentLoaded', init);

//# sourceMappingURL=calligraphy-grid-paper.8f0c9192.js.map
