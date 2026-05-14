

const testQuestions = {
  full: [
    { id: 1, correctAnswer: '74', options: ['74', '21', '14', '71'], colorType: 'red-green', subtype: 'red', difficulty: 'easy' },
    { id: 2, correctAnswer: '6', options: ['6', '8', '5', '9'], colorType: 'red-green', subtype: 'green', difficulty: 'easy' },
    { id: 3, correctAnswer: '29', options: ['29', '70', '26', '79'], colorType: 'red-green', subtype: 'red', difficulty: 'medium' },
    { id: 4, correctAnswer: '5', options: ['5', '3', '8', '6'], colorType: 'red-green', subtype: 'green', difficulty: 'medium' },
    { id: 5, correctAnswer: '15', options: ['15', '73', '13', '75'], colorType: 'red-green', subtype: 'red-green', difficulty: 'hard' },
    { id: 6, correctAnswer: '7', options: ['7', '1', '4', '2'], colorType: 'blue-yellow', subtype: 'blue', difficulty: 'easy' },
    { id: 7, correctAnswer: '36', options: ['36', '30', '96', '90'], colorType: 'red-green', subtype: 'green', difficulty: 'medium' },
    { id: 8, correctAnswer: '97', options: ['97', '51', '91', '57'], colorType: 'blue-yellow', subtype: 'yellow', difficulty: 'hard' },
    { id: 9, correctAnswer: '8', options: ['8', '3', '6', '9'], colorType: 'total', subtype: 'total', difficulty: 'easy' },
    { id: 10, correctAnswer: '45', options: ['45', '49', '15', '19'], colorType: 'red-green', subtype: 'red-green', difficulty: 'hard' },
    { id: 11, correctAnswer: '2', options: ['2', '5', '3', '7'], colorType: 'red-green', subtype: 'red', difficulty: 'easy' },
    { id: 12, correctAnswer: '42', options: ['42', '48', '12', '18'], colorType: 'red-green', subtype: 'green', difficulty: 'medium' },
    { id: 13, correctAnswer: '3', options: ['3', '5', '8', '6'], colorType: 'blue-yellow', subtype: 'blue', difficulty: 'easy' },
    { id: 14, correctAnswer: '16', options: ['16', '76', '79', '19'], colorType: 'blue-yellow', subtype: 'yellow', difficulty: 'medium' },
    { id: 15, correctAnswer: '73', options: ['73', '78', '13', '18'], colorType: 'red-green', subtype: 'red-green', difficulty: 'hard' },
    { id: 16, correctAnswer: '58', options: ['58', '53', '28', '23'], colorType: 'red-green', subtype: 'red', difficulty: 'medium' },
    { id: 17, correctAnswer: '18', options: ['18', '73', '78', '13'], colorType: 'blue-yellow', subtype: 'blue-yellow', difficulty: 'hard' },
    { id: 18, correctAnswer: '9', options: ['9', '6', '5', '8'], colorType: 'total', subtype: 'total', difficulty: 'medium' },
    { id: 19, correctAnswer: '26', options: ['26', '21', '76', '71'], colorType: 'red-green', subtype: 'green', difficulty: 'hard' },
    { id: 20, correctAnswer: '4', options: ['4', '7', '1', '9'], colorType: 'red-green', subtype: 'red-green', difficulty: 'easy' }
  ],
  quick: [
    { id: 1, correctAnswer: '74', options: ['74', '21', '14', '71'], colorType: 'red-green', subtype: 'red', difficulty: 'easy' },
    { id: 2, correctAnswer: '6', options: ['6', '8', '5', '9'], colorType: 'red-green', subtype: 'green', difficulty: 'easy' },
    { id: 3, correctAnswer: '7', options: ['7', '1', '4', '2'], colorType: 'blue-yellow', subtype: 'blue', difficulty: 'easy' },
    { id: 4, correctAnswer: '8', options: ['8', '3', '6', '9'], colorType: 'total', subtype: 'total', difficulty: 'easy' },
    { id: 5, correctAnswer: '45', options: ['45', '49', '15', '19'], colorType: 'red-green', subtype: 'red-green', difficulty: 'hard' }
  ],
  'red-green': [
    { id: 1, correctAnswer: '74', options: ['74', '21', '14', '71'], colorType: 'red-green', subtype: 'red', difficulty: 'easy' },
    { id: 2, correctAnswer: '6', options: ['6', '8', '5', '9'], colorType: 'red-green', subtype: 'green', difficulty: 'easy' },
    { id: 3, correctAnswer: '29', options: ['29', '70', '26', '79'], colorType: 'red-green', subtype: 'red', difficulty: 'medium' },
    { id: 4, correctAnswer: '5', options: ['5', '3', '8', '6'], colorType: 'red-green', subtype: 'green', difficulty: 'medium' },
    { id: 5, correctAnswer: '15', options: ['15', '73', '13', '75'], colorType: 'red-green', subtype: 'red-green', difficulty: 'hard' },
    { id: 6, correctAnswer: '36', options: ['36', '30', '96', '90'], colorType: 'red-green', subtype: 'green', difficulty: 'medium' },
    { id: 7, correctAnswer: '2', options: ['2', '5', '3', '7'], colorType: 'red-green', subtype: 'red', difficulty: 'easy' },
    { id: 8, correctAnswer: '42', options: ['42', '48', '12', '18'], colorType: 'red-green', subtype: 'green', difficulty: 'medium' },
    { id: 9, correctAnswer: '73', options: ['73', '78', '13', '18'], colorType: 'red-green', subtype: 'red-green', difficulty: 'hard' },
    { id: 10, correctAnswer: '26', options: ['26', '21', '76', '71'], colorType: 'red-green', subtype: 'green', difficulty: 'hard' }
  ],
  'blue-yellow': [
    { id: 1, correctAnswer: '7', options: ['7', '1', '4', '2'], colorType: 'blue-yellow', subtype: 'blue', difficulty: 'easy' },
    { id: 2, correctAnswer: '97', options: ['97', '51', '91', '57'], colorType: 'blue-yellow', subtype: 'yellow', difficulty: 'hard' },
    { id: 3, correctAnswer: '3', options: ['3', '5', '8', '6'], colorType: 'blue-yellow', subtype: 'blue', difficulty: 'easy' },
    { id: 4, correctAnswer: '16', options: ['16', '76', '79', '19'], colorType: 'blue-yellow', subtype: 'yellow', difficulty: 'medium' },
    { id: 5, correctAnswer: '18', options: ['18', '73', '78', '13'], colorType: 'blue-yellow', subtype: 'blue-yellow', difficulty: 'hard' },
    { id: 6, correctAnswer: '4', options: ['4', '7', '1', '9'], colorType: 'blue-yellow', subtype: 'blue', difficulty: 'easy' },
    { id: 7, correctAnswer: '52', options: ['52', '57', '27', '22'], colorType: 'blue-yellow', subtype: 'yellow', difficulty: 'medium' },
    { id: 8, correctAnswer: '9', options: ['9', '6', '5', '8'], colorType: 'blue-yellow', subtype: 'blue-yellow', difficulty: 'hard' }
  ]
};

const testModes = [
  { id: 'full', name: '全面检测', description: '20道题，全面检测各种色觉异常', icon: '🔬' },
  { id: 'quick', name: '快速筛查', description: '5道题，快速判断是否有色觉问题', icon: '⚡' },
  { id: 'red-green', name: '红绿色盲检测', description: '10道题，专项检测红绿色觉异常', icon: '🔴🟢' },
  { id: 'blue-yellow', name: '蓝黄色盲检测', description: '8道题，专项检测蓝黄色觉异常', icon: '🔵🟡' }
];

let currentMode = 'full';
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="container">
      <div id="startScreen">
        <h1 class="title">色盲自测图谱</h1>
        <p class="subtitle">请选择测试方案</p>
        <div class="modeSelector" id="modeSelector"></div>
        <button class="startBtn" id="startBtn" style="margin-top: 20px;">开始测试</button>
        <button class="knowledgeBtn" id="knowledgeBtn" style="margin-top: 15px;">📚 色盲色弱知识普及</button>
      </div>
      
      <div id="knowledgeScreen" class="knowledgeContainer">
        <div class="knowledgeHeader">
          <h2 class="knowledgeTitle">色盲色弱知识普及</h2>
          <button class="backBtn" id="backBtn">← 返回</button>
        </div>
        <div class="knowledgeTabs" id="knowledgeTabs"></div>
        <div class="knowledgeContent" id="knowledgeContent"></div>
      </div>
      
      <div id="testScreen" class="testContainer">
        <div class="progressBar">
          <div class="progressFill" id="progressFill"></div>
        </div>
        <p class="questionCount" id="questionCount">第 1 / 10 题</p>
        <div class="imageContainer">
          <canvas id="testCanvas" width="300" height="300"></canvas>
        </div>
        <div class="options" id="options"></div>
        <div id="feedback" class="feedback hidden"></div>
        <button id="nextBtn" class="nextBtn hidden">下一题</button>
      </div>
      
      <div id="resultScreen" class="resultContainer">
        <h2 class="resultTitle">测试完成！</h2>
        <div class="scoreDisplay" id="scoreDisplay">8/10</div>
        <div class="diagnosisCard" id="diagnosisCard"></div>
        <div class="evaluation" id="evaluation"></div>
        <button class="restartBtn" id="restartBtn">重新测试</button>
      </div>
    </div>
  `;

  renderModeSelector();
  document.getElementById('startBtn').addEventListener('click', startTest);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('restartBtn').addEventListener('click', restartTest);
  document.getElementById('knowledgeBtn').addEventListener('click', showKnowledge);
  document.getElementById('backBtn').addEventListener('click', hideKnowledge);
}

function renderModeSelector() {
  const selector = document.getElementById('modeSelector');
  selector.innerHTML = testModes.map((mode, index) => `
    <div class="modeCard ${index === 0 ? 'selected' : ''}" data-mode="${mode.id}">
      <div class="modeIcon">${mode.icon}</div>
      <div class="modeName">${mode.name}</div>
      <div class="modeDesc">${mode.description}</div>
    </div>
  `).join('');

  document.querySelectorAll('.modeCard').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.modeCard').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      currentMode = card.dataset.mode;
    });
  });
}

function generateIshiharaCanvas(canvas, question) {
  const ctx = canvas.getContext('2d');
  const centerX = 150;
  const centerY = 150;
  const radius = 140;

  ctx.clearRect(0, 0, 300, 300);

  const bgColors = generateBackgroundColors(question.colorType);
  const fgColors = generateForegroundColors(question.colorType);

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = 300;
  tempCanvas.height = 300;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.font = 'bold 120px Arial';
  tempCtx.textAlign = 'center';
  tempCtx.textBaseline = 'middle';
  tempCtx.fillStyle = 'black';
  tempCtx.fillText(question.correctAnswer, centerX, centerY + 10);

  const imageData = tempCtx.getImageData(0, 0, 300, 300);
  const data = imageData.data;

  const fgPoints = [];
  for (let x = 0; x < 300; x += 3) {
    for (let y = 0; y < 300; y += 3) {
      const index = (y * 300 + x) * 4;
      if (data[index + 3] > 128) {
        const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        if (dist < radius) {
          fgPoints.push({ x, y });
        }
      }
    }
  }

  const bgPoints = [];
  for (let i = 0; i < 1500; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * radius;
    const x = Math.floor(centerX + Math.cos(angle) * dist);
    const y = Math.floor(centerY + Math.sin(angle) * dist);
    const index = (y * 300 + x) * 4;
    if (data[index + 3] <= 128) {
      bgPoints.push({ x, y });
    }
  }

  bgPoints.forEach(point => {
    const dotRadius = 2 + Math.random() * 4;
    ctx.beginPath();
    ctx.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = bgColors[Math.floor(Math.random() * bgColors.length)];
    ctx.fill();
  });

  fgPoints.forEach(point => {
    const dotRadius = 3 + Math.random() * 5;
    ctx.beginPath();
    ctx.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = fgColors[Math.floor(Math.random() * fgColors.length)];
    ctx.fill();
  });
}

function generateBackgroundColors(colorType) {
  switch (colorType) {
    case 'red-green':
      return [
        '#8B7355', '#A0826D', '#B89580', '#C9A87C',
        '#D4B896', '#C4A35A', '#B8956E', '#A68B5B'
      ];
    case 'blue-yellow':
      return [
        '#7B8B6F', '#8F9E7F', '#A3B08F', '#B7C29F',
        '#9E8B7E', '#AE9B8E', '#BEAB9E', '#CEBBAD'
      ];
    case 'total':
      return [
        '#6B6B6B', '#7B7B7B', '#8B8B8B', '#9B9B9B',
        '#ABABAB', '#BBBBBB', '#CBCBCB', '#DBDBDB'
      ];
    default:
      return ['#8B7355', '#A0826D', '#B89580', '#C9A87C'];
  }
}

function generateForegroundColors(colorType) {
  switch (colorType) {
    case 'red-green':
      return [
        '#CD5C5C', '#D2691E', '#DAA520', '#B8860B',
        '#CD853F', '#D2B48C', '#BC8F8F', '#C04000'
      ];
    case 'blue-yellow':
      return [
        '#4169E1', '#1E90FF', '#00BFFF', '#87CEEB',
        '#4682B4', '#5F9EA0', '#6495ED', '#7B68EE'
      ];
    case 'total':
      return [
        '#2F2F2F', '#3F3F3F', '#4F4F4F', '#5F5F5F',
        '#1F1F1F', '#0F0F0F', '#000000', '#1A1A1A'
      ];
    default:
      return ['#CD5C5C', '#D2691E', '#DAA520', '#B8860B'];
  }
}

function startTest() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('testScreen').classList.add('active');

  showQuestion();
}

function showQuestion() {
  const questions = testQuestions[currentMode];
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('questionCount').textContent = `第 ${currentQuestionIndex + 1} / ${questions.length} 题`;

  const canvas = document.getElementById('testCanvas');
  generateIshiharaCanvas(canvas, question);

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'optionBtn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(option));
    optionsContainer.appendChild(btn);
  });

  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
}

function selectAnswer(answer) {
  const questions = testQuestions[currentMode];
  const question = questions[currentQuestionIndex];
  const isCorrect = answer === question.correctAnswer;

  const buttons = document.querySelectorAll('.optionBtn');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === question.correctAnswer) {
      btn.classList.add('correct');
    } else if (btn.textContent === answer && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const feedback = document.getElementById('feedback');
  feedback.classList.remove('hidden');

  if (isCorrect) {
    score++;
    feedback.textContent = '✓ 回答正确！';
    feedback.className = 'feedback correct';
  } else {
    feedback.textContent = `✗ 回答错误！正确答案是 ${question.correctAnswer}`;
    feedback.className = 'feedback wrong';
  }

  userAnswers.push({
    questionId: question.id,
    answer: answer,
    correctAnswer: question.correctAnswer,
    isCorrect: isCorrect,
    colorType: question.colorType,
    subtype: question.subtype,
    difficulty: question.difficulty
  });

  document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  const questions = testQuestions[currentMode];
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const questions = testQuestions[currentMode];
  document.getElementById('testScreen').classList.remove('active');
  document.getElementById('resultScreen').classList.add('active');

  document.getElementById('scoreDisplay').textContent = `${score} / ${questions.length}`;

  const diagnosis = generateDetailedDiagnosis();
  document.getElementById('diagnosisCard').innerHTML = `
    <div class="diagnosisIcon">${diagnosis.icon}</div>
    <div class="diagnosisTitle">${diagnosis.title}</div>
    <div class="diagnosisSeverity">${diagnosis.severity}</div>
  `;
  document.getElementById('diagnosisCard').className = `diagnosisCard ${diagnosis.type}`;

  document.getElementById('evaluation').innerHTML = `
    <h3>详细分析</h3>
    <div class="analysisDetails">
      ${diagnosis.details.map(detail => `
        <div class="analysisItem">
          <span class="analysisLabel">${detail.label}</span>
          <span class="analysisValue">${detail.value}</span>
        </div>
      `).join('')}
    </div>
    <p style="margin-top: 20px;">${diagnosis.description}</p>
    <p style="margin-top: 15px; font-size: 14px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
      ⚠️ 注：此测试仅供参考，不能替代专业医疗诊断。如有疑虑，请咨询专业医生。
    </p>
  `;
}

function generateDetailedDiagnosis() {
  const questions = testQuestions[currentMode];
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  const redGreenAnswers = userAnswers.filter(a => a.colorType === 'red-green');
  const blueYellowAnswers = userAnswers.filter(a => a.colorType === 'blue-yellow');
  const totalAnswers = userAnswers.filter(a => a.colorType === 'total');

  const redGreenWrong = redGreenAnswers.filter(a => !a.isCorrect).length;
  const blueYellowWrong = blueYellowAnswers.filter(a => !a.isCorrect).length;
  const totalWrong = totalAnswers.filter(a => !a.isCorrect).length;

  const redWrong = userAnswers.filter(a => a.subtype === 'red' && !a.isCorrect).length;
  const greenWrong = userAnswers.filter(a => a.subtype === 'green' && !a.isCorrect).length;
  const blueWrong = userAnswers.filter(a => a.subtype === 'blue' && !a.isCorrect).length;
  const yellowWrong = userAnswers.filter(a => a.subtype === 'yellow' && !a.isCorrect).length;

  const easyWrong = userAnswers.filter(a => a.difficulty === 'easy' && !a.isCorrect).length;
  const mediumWrong = userAnswers.filter(a => a.difficulty === 'medium' && !a.isCorrect).length;
  const hardWrong = userAnswers.filter(a => a.difficulty === 'hard' && !a.isCorrect).length;

  let diagnosis = {
    title: '',
    severity: '',
    icon: '',
    type: '',
    description: '',
    details: []
  };

  diagnosis.details.push({ label: '总正确率', value: `${Math.round(percentage)}%` });

  if (redGreenAnswers.length > 0) {
    const rgCorrect = redGreenAnswers.filter(a => a.isCorrect).length;
    const rgPercent = Math.round((rgCorrect / redGreenAnswers.length) * 100);
    diagnosis.details.push({ label: '红绿色系正确率', value: `${rgPercent}%` });
  }

  if (blueYellowAnswers.length > 0) {
    const byCorrect = blueYellowAnswers.filter(a => a.isCorrect).length;
    const byPercent = Math.round((byCorrect / blueYellowAnswers.length) * 100);
    diagnosis.details.push({ label: '蓝黄色系正确率', value: `${byPercent}%` });
  }

  if (percentage >= 85) {
    diagnosis.title = '色觉正常';
    diagnosis.severity = '您的色彩感知能力良好';
    diagnosis.icon = '✅';
    diagnosis.type = 'normal';
    diagnosis.description = '您能够准确分辨各种颜色，色觉功能完全正常。在日常生活和工作中，您可以轻松完成各种需要颜色判断的任务。';
  } else if (percentage >= 65) {
    let issues = [];
    if (redGreenWrong >= 2) {
      if (redWrong > greenWrong) {
        issues.push('轻度红色弱');
      } else if (greenWrong > redWrong) {
        issues.push('轻度绿色弱');
      } else {
        issues.push('轻度红绿色弱');
      }
    }
    if (blueYellowWrong >= 1) {
      if (blueWrong > yellowWrong) {
        issues.push('轻度蓝色弱');
      } else if (yellowWrong > blueWrong) {
        issues.push('轻度黄色弱');
      } else {
        issues.push('轻度蓝黄色弱');
      }
    }

    diagnosis.title = issues.length > 0 ? issues.join(' / ') : '轻度色觉异常';
    diagnosis.severity = '轻度色觉异常';
    diagnosis.icon = '⚠️';
    diagnosis.type = 'mild';
    diagnosis.description = '您在某些特定颜色的分辨上可能存在轻微困难，但这通常不会影响日常生活。在需要精确颜色判断的工作（如设计、美术等）中，建议使用辅助工具或寻求他人帮助。';
  } else if (percentage >= 45) {
    let issues = [];
    if (redGreenWrong >= 3) {
      if (redWrong >= greenWrong) {
        issues.push('红色盲');
      } else {
        issues.push('绿色盲');
      }
    }
    if (blueYellowWrong >= 2) {
      issues.push('蓝黄色盲');
    }

    diagnosis.title = issues.length > 0 ? issues.join(' / ') : '中度色觉异常';
    diagnosis.severity = '中度色觉异常';
    diagnosis.icon = '🔶';
    diagnosis.type = 'moderate';
    diagnosis.description = '您存在较明显的色觉异常，可能会对某些需要颜色判断的工作或活动造成影响。建议咨询专业眼科医生，了解更多关于色觉异常的信息和应对方法。';
  } else {
    if (totalWrong > 0) {
      diagnosis.title = '全色盲';
      diagnosis.severity = '重度色觉异常';
      diagnosis.icon = '🔴';
      diagnosis.type = 'severe';
      diagnosis.description = '您可能存在全色盲或重度色觉异常，世界对您来说可能主要呈现不同亮度的灰色。强烈建议您前往医院眼科进行专业检查和诊断，以便获得更详细的信息和专业建议。';
    } else {
      diagnosis.title = '重度红绿色盲';
      diagnosis.severity = '重度色觉异常';
      diagnosis.icon = '🔴';
      diagnosis.type = 'severe';
      diagnosis.description = '您存在较重的色觉异常，特别是在红绿色系的分辨上可能有明显困难。这可能会对您的职业选择和日常生活产生一定影响。建议您咨询专业眼科医生，了解适合您的职业选择和生活建议。';
    }
  }

  return diagnosis;
}

function restartTest() {
  document.getElementById('resultScreen').classList.remove('active');
  document.getElementById('startScreen').style.display = 'block';
}

const knowledgeData = [
  {
    id: 'overview',
    title: '什么是色盲色弱',
    icon: '👁️',
    content: `
      <h3>基本概念</h3>
      <p><strong>色盲</strong>：指不能分辨某些或全部颜色，是一种严重的色觉障碍。</p>
      <p><strong>色弱</strong>：指分辨颜色的能力降低，比色盲程度轻。</p>
      
      <h3>患病率</h3>
      <p>• 男性红绿色盲/色弱患病率约为 5-8%</p>
      <p>• 女性红绿色盲/色弱患病率约为 0.5-1%</p>
      <p>• 蓝黄色盲罕见，男女患病率相近（约 0.01%）</p>
      <p>• 全色盲极为罕见（约 1/33000）</p>
      
      <h3>为什么男性更容易色盲？</h3>
      <p>红绿色盲的基因位于 X 染色体上，男性只有一条 X 染色体，只要携带致病基因就会表现出色盲；而女性有两条 X 染色体，需要两条都携带致病基因才会表现出色盲，因此患病率远低于男性。</p>
    `
  },
  {
    id: 'causes',
    title: '形成原因',
    icon: '🔬',
    content: `
      <h3>1. 先天性遗传（最常见）</h3>
      <p><strong>遗传方式：</strong></p>
      <p>• 红绿色盲：X 染色体隐性遗传</p>
      <p>• 蓝黄色盲：常染色体显性遗传</p>
      <p>• 全色盲：常染色体隐性遗传</p>
      
      <p><strong>生理机制：</strong></p>
      <p>人眼视网膜有三种视锥细胞，分别对红、绿、蓝三种波长的光敏感。如果某种视锥细胞缺失或功能异常，就会导致相应的色觉障碍。</p>
      
      <h3>2. 后天性因素</h3>
      <p><strong>疾病：</strong></p>
      <p>• 视网膜疾病（如视网膜脱离、黄斑病变）</p>
      <p>• 视神经疾病（如视神经炎、视神经萎缩）</p>
      <p>• 脑部疾病（如脑卒中、脑外伤）</p>
      <p>• 全身性疾病（如糖尿病、维生素缺乏）</p>
      
      <p><strong>药物/化学物质：</strong></p>
      <p>• 某些药物（如洋地黄、乙胺丁醇）</p>
      <p>• 某些化学物质（如二硫化碳、甲醇）</p>
      
      <p><strong>年龄：</strong></p>
      <p>• 老年人晶状体变黄，对蓝色的分辨能力下降</p>
    `
  },
  {
    id: 'types',
    title: '类型及症状',
    icon: '🎨',
    content: `
      <h3>红绿色盲/色弱（最常见）</h3>
      
      <p><strong>🔴 红色盲（Protanopia）：</strong></p>
      <p>• 不能分辨红色和深绿色、蓝色和紫红色、紫色和蓝色</p>
      <p>• 绿色看起来像黄色，红色看起来像暗灰色</p>
      <p>• 对红光的敏感度降低</p>
      
      <p><strong>🟢 绿色盲（Deuteranopia）：</strong></p>
      <p>• 不能分辨淡绿色和深红色、紫色和青蓝色、紫红色和灰色</p>
      <p>• 绿色看起来像暗灰色或淡黄色</p>
      <p>• 是最常见的色盲类型</p>
      
      <p><strong>🔴🟢 红绿色弱：</strong></p>
      <p>• 分辨红绿色的能力降低</p>
      <p>• 在光线不足或颜色相近时更难分辨</p>
      <p>• 程度轻重不一</p>
      
      <h3>蓝黄色盲/色弱（罕见）</h3>
      
      <p><strong>🔵 蓝色盲（Tritanopia）：</strong></p>
      <p>• 不能分辨蓝色和黄色、绿色和蓝绿色、紫色和红色</p>
      <p>• 蓝色看起来像黑色</p>
      
      <p><strong>🟡 蓝黄色弱：</strong></p>
      <p>• 分辨蓝黄色的能力降低</p>
      
      <h3>全色盲（极罕见）</h3>
      <p>• 完全不能分辨任何颜色</p>
      <p>• 世界只有黑白灰不同亮度的区别</p>
      <p>• 常伴有视力低下、畏光、眼球震颤等症状</p>
    `
  },
  {
    id: 'impact',
    title: '生活影响',
    icon: '🏠',
    content: `
      <h3>日常生活</h3>
      <p><strong>交通出行：</strong></p>
      <p>• 分辨红绿灯可能有困难（尤其是红色盲）</p>
      <p>• 建议：记住红绿灯位置（上红下绿），或观察他人行动</p>
      
      <p><strong>穿搭搭配：</strong></p>
      <p>• 红绿色系搭配可能出错</p>
      <p>• 建议：使用配色 APP 辅助，或请家人朋友帮忙参考</p>
      
      <p><strong>饮食：</strong></p>
      <p>• 难以通过颜色判断食物是否新鲜、水果是否成熟</p>
      <p>• 建议：通过手感、气味等其他方式判断</p>
      
      <h3>教育与职业</h3>
      <p><strong>专业限制：</strong></p>
      <p>• 化工、医学、美术、设计、飞行员、驾驶员等专业/职业可能受限</p>
      <p>• 具体要求请参考相关行业标准</p>
      
      <p><strong>学习影响：</strong></p>
      <p>• 彩色图表、地图可能理解困难</p>
      <p>• 建议：提前告知老师，寻求适当调整</p>
      
      <h3>心理影响</h3>
      <p>• 儿童可能因"与众不同"产生自卑心理</p>
      <p>• 家长和老师应给予理解和鼓励</p>
      <p>• 色盲色弱不是"缺陷"，只是一种不同的视觉体验</p>
    `
  },
  {
    id: 'help',
    title: '辅助与治疗',
    icon: '💡',
    content: `
      <h3>辅助工具</h3>
      
      <p><strong>色盲矫正眼镜：</strong></p>
      <p>• 原理：通过特殊镀膜过滤部分波长的光，增加颜色对比度</p>
      <p>• 效果：对红绿色弱/色盲有一定帮助，但不能"治愈"色盲</p>
      <p>• 注意：佩戴后看到的颜色与正常人也有差异，需要适应期</p>
      
      <p><strong>手机 APP 辅助：</strong></p>
      <p>• 颜色识别 APP：拍照后告诉你是什么颜色</p>
      <p>• 配色辅助 APP：帮助选择协调的穿搭色彩</p>
      
      <p><strong>其他辅助：</strong></p>
      <p>• 给衣物、物品做标签标记</p>
      <p>• 使用高对比度的配色方案</p>
      
      <h3>目前能治愈吗？</h3>
      
      <p><strong>先天性色盲色弱：</strong></p>
      <p>• 目前尚无治愈方法</p>
      <p>• 基因治疗正在研究中，已有动物实验成功案例</p>
      <p>• 未来可能通过基因编辑技术治疗</p>
      
      <p><strong>后天性色盲色弱：</strong></p>
      <p>• 针对原发病治疗，部分可能恢复或改善</p>
      <p>• 如药物引起的，停药后可能恢复</p>
      
      <h3>生活建议</h3>
      <p>1. 接纳自己，色盲色弱不影响正常生活</p>
      <p>2. 告知家人朋友，获得理解和帮助</p>
      <p>3. 选择适合自己的专业和职业</p>
      <p>4. 使用辅助工具提高生活质量</p>
      <p>5. 定期检查视力，关注眼部健康</p>
    `
  },
  {
    id: 'faq',
    title: '常见问题',
    icon: '❓',
    content: `
      <h3>Q: 色盲就是看不见颜色吗？</h3>
      <p>A: 不是。绝大多数色盲者能看到颜色，只是难以区分某些颜色（最常见的是红和绿）。只有极少数全色盲者只能看到黑白灰。</p>
      
      <h3>Q: 色盲会遗传吗？</h3>
      <p>A: 会。红绿色盲是 X 染色体隐性遗传，如果父亲是色盲，女儿会成为携带者；母亲是携带者，儿子有 50% 概率是色盲。</p>
      
      <h3>Q: 戴色盲眼镜能通过驾照考试吗？</h3>
      <p>A: 不同地区规定不同。一般来说，只要能正确分辨红绿灯即可，建议咨询当地交管部门。</p>
      
      <h3>Q: 色弱可以当医生吗？</h3>
      <p>A: 视具体专业而定。外科、病理科等对颜色要求高的专业可能受限，建议咨询目标院校或单位。</p>
      
      <h3>Q: 色盲会越来越严重吗？</h3>
      <p>A: 先天性色盲一般不会加重。如果后天出现色觉变化，应及时就医检查，可能是眼部或全身疾病的信号。</p>
      
      <h3>Q: 色盲者能生孩子吗？</h3>
      <p>A: 可以。色盲者生育能力正常，只是孩子有可能遗传色盲（概率取决于配偶是否携带致病基因）。</p>
      
      <h3>Q: 孕妇吃什么能预防孩子色盲？</h3>
      <p>A: 先天性色盲是基因决定的，饮食无法预防。但孕期补充维生素 A 等对胎儿视力发育有好处。</p>
      
      <h3>Q: 为什么我以前能分清的颜色现在分不清了？</h3>
      <p>A: 后天色觉改变需要重视，可能是白内障、青光眼、视网膜病变等眼部疾病，或糖尿病等全身性疾病的表现，建议尽快就医检查。</p>
    `
  }
];

let currentKnowledgeTab = 'overview';

function showKnowledge() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('knowledgeScreen').classList.add('active');
  renderKnowledgeTabs();
  renderKnowledgeContent();
}

function hideKnowledge() {
  document.getElementById('knowledgeScreen').classList.remove('active');
  document.getElementById('startScreen').style.display = 'block';
}

function renderKnowledgeTabs() {
  const tabsContainer = document.getElementById('knowledgeTabs');
  tabsContainer.innerHTML = knowledgeData.map(item => `
    <button class="knowledgeTab ${item.id === currentKnowledgeTab ? 'active' : ''}" data-tab="${item.id}">
      <span class="knowledgeTabIcon">${item.icon}</span>
      <span class="knowledgeTabTitle">${item.title}</span>
    </button>
  `).join('');

  document.querySelectorAll('.knowledgeTab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentKnowledgeTab = tab.dataset.tab;
      renderKnowledgeTabs();
      renderKnowledgeContent();
    });
  });
}

function renderKnowledgeContent() {
  const content = knowledgeData.find(item => item.id === currentKnowledgeTab);
  const contentContainer = document.getElementById('knowledgeContent');
  contentContainer.innerHTML = `
    <div class="knowledgeSection">
      <div class="knowledgeSectionHeader">
        <span class="knowledgeSectionIcon">${content.icon}</span>
        <h3 class="knowledgeSectionTitle">${content.title}</h3>
      </div>
      <div class="knowledgeSectionContent">${content.content}</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', initApp);