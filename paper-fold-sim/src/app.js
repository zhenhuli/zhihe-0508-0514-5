class PaperFoldSimulator {
    constructor() {
        this.paper = document.getElementById('paper');
        this.stepDescription = document.getElementById('stepDescription');
        this.currentFoldType = null;
        this.currentStep = 0;
        this.isPlaying = false;
        this.playInterval = null;
        
        this.foldSteps = {
            square: [
                { class: '', desc: '初始状态：一张完整的正方形纸张，显示中心线参考' },
                { class: 'fold-v', desc: '第一步：沿垂直中心线向左对折，可以看到纸张真正翻折的动画效果' },
                { class: 'fold-v fold-h', desc: '第二步：沿水平中心线向上对折，形成四分之一大小的正方形' }
            ],
            triangle: [
                { class: '', desc: '初始状态：一张完整的正方形纸张' },
                { class: 'fold-v', desc: '第一步：垂直对折，形成长方形' },
                { class: 'fold-v fold-h', desc: '第二步：水平对折，形成小正方形' },
                { class: 'fold-dia', desc: '第三步：沿对角线折叠，形成三角形' }
            ],
            multi: [
                { class: '', desc: '初始状态：准备进行多层翻折演示' },
                { class: 'fold-v', desc: '第一步：垂直对折，左半部分向右翻折' },
                { class: 'fold-v fold-h', desc: '第二步：水平对折，上半部分向下翻折' },
                { class: 'fold-both', desc: '第三步：多层叠加完成，展示最终折叠效果' }
            ]
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateStepInfo();
    }
    
    bindEvents() {
        document.querySelectorAll('[data-fold]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectFoldType(e.target.dataset.fold);
            });
        });
        
        document.getElementById('prevStep').addEventListener('click', () => {
            this.prevStep();
        });
        
        document.getElementById('nextStep').addEventListener('click', () => {
            this.nextStep();
        });
        
        document.getElementById('reset').addEventListener('click', () => {
            this.reset();
        });
        
        document.getElementById('playAll').addEventListener('click', () => {
            this.playAll();
        });
        
        document.getElementById('pause').addEventListener('click', () => {
            this.pause();
        });
    }
    
    selectFoldType(type) {
        this.currentFoldType = type;
        this.currentStep = 0;
        this.applyStep();
        this.updateStepInfo();
    }
    
    applyStep() {
        if (!this.currentFoldType) return;
        
        const step = this.foldSteps[this.currentFoldType][this.currentStep];
        this.paper.className = 'paper';
        if (step.class) {
            const classes = step.class.split(' ');
            classes.forEach(cls => {
                if (cls) this.paper.classList.add(cls);
            });
        }
    }
    
    updateStepInfo() {
        if (!this.currentFoldType) {
            this.stepDescription.textContent = '点击折叠类型开始演示';
            return;
        }
        
        const step = this.foldSteps[this.currentFoldType][this.currentStep];
        const total = this.foldSteps[this.currentFoldType].length;
        this.stepDescription.textContent = `[${this.currentStep + 1}/${total}] ${step.desc}`;
    }
    
    nextStep() {
        if (!this.currentFoldType) return;
        
        const maxStep = this.foldSteps[this.currentFoldType].length - 1;
        if (this.currentStep < maxStep) {
            this.currentStep++;
            this.applyStep();
            this.updateStepInfo();
        }
    }
    
    prevStep() {
        if (!this.currentFoldType) return;
        
        if (this.currentStep > 0) {
            this.currentStep--;
            this.applyStep();
            this.updateStepInfo();
        }
    }
    
    reset() {
        this.pause();
        this.currentStep = 0;
        this.applyStep();
        this.updateStepInfo();
    }
    
    playAll() {
        if (!this.currentFoldType || this.isPlaying) return;
        
        this.isPlaying = true;
        this.playInterval = setInterval(() => {
            const maxStep = this.foldSteps[this.currentFoldType].length - 1;
            if (this.currentStep < maxStep) {
                this.nextStep();
            } else {
                this.pause();
            }
        }, 2000);
    }
    
    pause() {
        this.isPlaying = false;
        if (this.playInterval) {
            clearInterval(this.playInterval);
            this.playInterval = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PaperFoldSimulator();
});