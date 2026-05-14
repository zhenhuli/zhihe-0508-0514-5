let u={full:[{id:1,correctAnswer:"74",options:["74","21","14","71"],colorType:"red-green",subtype:"red",difficulty:"easy"},{id:2,correctAnswer:"6",options:["6","8","5","9"],colorType:"red-green",subtype:"green",difficulty:"easy"},{id:3,correctAnswer:"29",options:["29","70","26","79"],colorType:"red-green",subtype:"red",difficulty:"medium"},{id:4,correctAnswer:"5",options:["5","3","8","6"],colorType:"red-green",subtype:"green",difficulty:"medium"},{id:5,correctAnswer:"15",options:["15","73","13","75"],colorType:"red-green",subtype:"red-green",difficulty:"hard"},{id:6,correctAnswer:"7",options:["7","1","4","2"],colorType:"blue-yellow",subtype:"blue",difficulty:"easy"},{id:7,correctAnswer:"36",options:["36","30","96","90"],colorType:"red-green",subtype:"green",difficulty:"medium"},{id:8,correctAnswer:"97",options:["97","51","91","57"],colorType:"blue-yellow",subtype:"yellow",difficulty:"hard"},{id:9,correctAnswer:"8",options:["8","3","6","9"],colorType:"total",subtype:"total",difficulty:"easy"},{id:10,correctAnswer:"45",options:["45","49","15","19"],colorType:"red-green",subtype:"red-green",difficulty:"hard"},{id:11,correctAnswer:"2",options:["2","5","3","7"],colorType:"red-green",subtype:"red",difficulty:"easy"},{id:12,correctAnswer:"42",options:["42","48","12","18"],colorType:"red-green",subtype:"green",difficulty:"medium"},{id:13,correctAnswer:"3",options:["3","5","8","6"],colorType:"blue-yellow",subtype:"blue",difficulty:"easy"},{id:14,correctAnswer:"16",options:["16","76","79","19"],colorType:"blue-yellow",subtype:"yellow",difficulty:"medium"},{id:15,correctAnswer:"73",options:["73","78","13","18"],colorType:"red-green",subtype:"red-green",difficulty:"hard"},{id:16,correctAnswer:"58",options:["58","53","28","23"],colorType:"red-green",subtype:"red",difficulty:"medium"},{id:17,correctAnswer:"18",options:["18","73","78","13"],colorType:"blue-yellow",subtype:"blue-yellow",difficulty:"hard"},{id:18,correctAnswer:"9",options:["9","6","5","8"],colorType:"total",subtype:"total",difficulty:"medium"},{id:19,correctAnswer:"26",options:["26","21","76","71"],colorType:"red-green",subtype:"green",difficulty:"hard"},{id:20,correctAnswer:"4",options:["4","7","1","9"],colorType:"red-green",subtype:"red-green",difficulty:"easy"}],quick:[{id:1,correctAnswer:"74",options:["74","21","14","71"],colorType:"red-green",subtype:"red",difficulty:"easy"},{id:2,correctAnswer:"6",options:["6","8","5","9"],colorType:"red-green",subtype:"green",difficulty:"easy"},{id:3,correctAnswer:"7",options:["7","1","4","2"],colorType:"blue-yellow",subtype:"blue",difficulty:"easy"},{id:4,correctAnswer:"8",options:["8","3","6","9"],colorType:"total",subtype:"total",difficulty:"easy"},{id:5,correctAnswer:"45",options:["45","49","15","19"],colorType:"red-green",subtype:"red-green",difficulty:"hard"}],"red-green":[{id:1,correctAnswer:"74",options:["74","21","14","71"],colorType:"red-green",subtype:"red",difficulty:"easy"},{id:2,correctAnswer:"6",options:["6","8","5","9"],colorType:"red-green",subtype:"green",difficulty:"easy"},{id:3,correctAnswer:"29",options:["29","70","26","79"],colorType:"red-green",subtype:"red",difficulty:"medium"},{id:4,correctAnswer:"5",options:["5","3","8","6"],colorType:"red-green",subtype:"green",difficulty:"medium"},{id:5,correctAnswer:"15",options:["15","73","13","75"],colorType:"red-green",subtype:"red-green",difficulty:"hard"},{id:6,correctAnswer:"36",options:["36","30","96","90"],colorType:"red-green",subtype:"green",difficulty:"medium"},{id:7,correctAnswer:"2",options:["2","5","3","7"],colorType:"red-green",subtype:"red",difficulty:"easy"},{id:8,correctAnswer:"42",options:["42","48","12","18"],colorType:"red-green",subtype:"green",difficulty:"medium"},{id:9,correctAnswer:"73",options:["73","78","13","18"],colorType:"red-green",subtype:"red-green",difficulty:"hard"},{id:10,correctAnswer:"26",options:["26","21","76","71"],colorType:"red-green",subtype:"green",difficulty:"hard"}],"blue-yellow":[{id:1,correctAnswer:"7",options:["7","1","4","2"],colorType:"blue-yellow",subtype:"blue",difficulty:"easy"},{id:2,correctAnswer:"97",options:["97","51","91","57"],colorType:"blue-yellow",subtype:"yellow",difficulty:"hard"},{id:3,correctAnswer:"3",options:["3","5","8","6"],colorType:"blue-yellow",subtype:"blue",difficulty:"easy"},{id:4,correctAnswer:"16",options:["16","76","79","19"],colorType:"blue-yellow",subtype:"yellow",difficulty:"medium"},{id:5,correctAnswer:"18",options:["18","73","78","13"],colorType:"blue-yellow",subtype:"blue-yellow",difficulty:"hard"},{id:6,correctAnswer:"4",options:["4","7","1","9"],colorType:"blue-yellow",subtype:"blue",difficulty:"easy"},{id:7,correctAnswer:"52",options:["52","57","27","22"],colorType:"blue-yellow",subtype:"yellow",difficulty:"medium"},{id:8,correctAnswer:"9",options:["9","6","5","8"],colorType:"blue-yellow",subtype:"blue-yellow",difficulty:"hard"}]},e=[{id:"full",name:"全面检测",description:"20道题，全面检测各种色觉异常",icon:"🔬"},{id:"quick",name:"快速筛查",description:"5道题，快速判断是否有色觉问题",icon:"⚡"},{id:"red-green",name:"红绿色盲检测",description:"10道题，专项检测红绿色觉异常",icon:"🔴🟢"},{id:"blue-yellow",name:"蓝黄色盲检测",description:"8道题，专项检测蓝黄色觉异常",icon:"🔵🟡"}],t="full",F=0,n=0,o=[];function r(){F=0,n=0,o=[],document.getElementById("startScreen").style.display="none",document.getElementById("testScreen").classList.add("active"),i()}function i(){let e=u[t],r=e[F],i=(F+1)/e.length*100;document.getElementById("progressFill").style.width=`${i}%`,document.getElementById("questionCount").textContent=`\u{7B2C} ${F+1} / ${e.length} \u{9898}`,function(u,e){let t=u.getContext("2d");t.clearRect(0,0,300,300);let F=function(u){switch(u){case"red-green":return["#8B7355","#A0826D","#B89580","#C9A87C","#D4B896","#C4A35A","#B8956E","#A68B5B"];case"blue-yellow":return["#7B8B6F","#8F9E7F","#A3B08F","#B7C29F","#9E8B7E","#AE9B8E","#BEAB9E","#CEBBAD"];case"total":return["#6B6B6B","#7B7B7B","#8B8B8B","#9B9B9B","#ABABAB","#BBBBBB","#CBCBCB","#DBDBDB"];default:return["#8B7355","#A0826D","#B89580","#C9A87C"]}}(e.colorType),n=function(u){switch(u){case"red-green":return["#CD5C5C","#D2691E","#DAA520","#B8860B","#CD853F","#D2B48C","#BC8F8F","#C04000"];case"blue-yellow":return["#4169E1","#1E90FF","#00BFFF","#87CEEB","#4682B4","#5F9EA0","#6495ED","#7B68EE"];case"total":return["#2F2F2F","#3F3F3F","#4F4F4F","#5F5F5F","#1F1F1F","#0F0F0F","#000000","#1A1A1A"];default:return["#CD5C5C","#D2691E","#DAA520","#B8860B"]}}(e.colorType),o=document.createElement("canvas");o.width=300,o.height=300;let r=o.getContext("2d");r.font="bold 120px Arial",r.textAlign="center",r.textBaseline="middle",r.fillStyle="black",r.fillText(e.correctAnswer,150,160);let i=r.getImageData(0,0,300,300).data,s=[];for(let u=0;u<300;u+=3)for(let e=0;e<300;e+=3)i[(300*e+u)*4+3]>128&&140>Math.sqrt((u-150)**2+(e-150)**2)&&s.push({x:u,y:e});let l=[];for(let u=0;u<1500;u++){let u=Math.random()*Math.PI*2,e=140*Math.random(),t=Math.floor(150+Math.cos(u)*e),F=Math.floor(150+Math.sin(u)*e);i[(300*F+t)*4+3]<=128&&l.push({x:t,y:F})}l.forEach(u=>{let e=2+4*Math.random();t.beginPath(),t.arc(u.x,u.y,e,0,2*Math.PI),t.fillStyle=F[Math.floor(Math.random()*F.length)],t.fill()}),s.forEach(u=>{let e=3+5*Math.random();t.beginPath(),t.arc(u.x,u.y,e,0,2*Math.PI),t.fillStyle=n[Math.floor(Math.random()*n.length)],t.fill()})}(document.getElementById("testCanvas"),r);let s=document.getElementById("options");s.innerHTML="",[...r.options].sort(()=>Math.random()-.5).forEach(e=>{let r=document.createElement("button");r.className="optionBtn",r.textContent=e,r.addEventListener("click",()=>{var r;let i,s,l;return s=(r=e)===(i=u[t][F]).correctAnswer,document.querySelectorAll(".optionBtn").forEach(u=>{u.disabled=!0,u.textContent===i.correctAnswer?u.classList.add("correct"):u.textContent!==r||s||u.classList.add("wrong")}),void((l=document.getElementById("feedback")).classList.remove("hidden"),s?(n++,l.textContent="✓ 回答正确！",l.className="feedback correct"):(l.textContent=`\u{2717} \u{56DE}\u{7B54}\u{9519}\u{8BEF}\u{FF01}\u{6B63}\u{786E}\u{7B54}\u{6848}\u{662F} ${i.correctAnswer}`,l.className="feedback wrong"),o.push({questionId:i.id,answer:r,correctAnswer:i.correctAnswer,isCorrect:s,colorType:i.colorType,subtype:i.subtype,difficulty:i.difficulty}),document.getElementById("nextBtn").classList.remove("hidden"))}),s.appendChild(r)}),document.getElementById("feedback").classList.add("hidden"),document.getElementById("nextBtn").classList.add("hidden")}function s(){let e,r,s=u[t];++F<s.length?i():(e=u[t],document.getElementById("testScreen").classList.remove("active"),document.getElementById("resultScreen").classList.add("active"),document.getElementById("scoreDisplay").textContent=`${n} / ${e.length}`,r=function(){let e=u[t].length,F=n/e*100,r=o.filter(u=>"red-green"===u.colorType),i=o.filter(u=>"blue-yellow"===u.colorType),s=o.filter(u=>"total"===u.colorType),l=r.filter(u=>!u.isCorrect).length,d=i.filter(u=>!u.isCorrect).length,E=s.filter(u=>!u.isCorrect).length,c=o.filter(u=>"red"===u.subtype&&!u.isCorrect).length,p=o.filter(u=>"green"===u.subtype&&!u.isCorrect).length,C=o.filter(u=>"blue"===u.subtype&&!u.isCorrect).length,B=o.filter(u=>"yellow"===u.subtype&&!u.isCorrect).length;o.filter(u=>"easy"===u.difficulty&&!u.isCorrect).length,o.filter(u=>"medium"===u.difficulty&&!u.isCorrect).length,o.filter(u=>"hard"===u.difficulty&&!u.isCorrect).length;let a={title:"",severity:"",icon:"",type:"",description:"",details:[]};if(a.details.push({label:"总正确率",value:`${Math.round(F)}%`}),r.length>0){let u=Math.round(r.filter(u=>u.isCorrect).length/r.length*100);a.details.push({label:"红绿色系正确率",value:`${u}%`})}if(i.length>0){let u=Math.round(i.filter(u=>u.isCorrect).length/i.length*100);a.details.push({label:"蓝黄色系正确率",value:`${u}%`})}if(F>=85)a.title="色觉正常",a.severity="您的色彩感知能力良好",a.icon="✅",a.type="normal",a.description="您能够准确分辨各种颜色，色觉功能完全正常。在日常生活和工作中，您可以轻松完成各种需要颜色判断的任务。";else if(F>=65){let u=[];l>=2&&(c>p?u.push("轻度红色弱"):p>c?u.push("轻度绿色弱"):u.push("轻度红绿色弱")),d>=1&&(C>B?u.push("轻度蓝色弱"):B>C?u.push("轻度黄色弱"):u.push("轻度蓝黄色弱")),a.title=u.length>0?u.join(" / "):"轻度色觉异常",a.severity="轻度色觉异常",a.icon="⚠️",a.type="mild",a.description="您在某些特定颜色的分辨上可能存在轻微困难，但这通常不会影响日常生活。在需要精确颜色判断的工作（如设计、美术等）中，建议使用辅助工具或寻求他人帮助。"}else if(F>=45){let u=[];l>=3&&(c>=p?u.push("红色盲"):u.push("绿色盲")),d>=2&&u.push("蓝黄色盲"),a.title=u.length>0?u.join(" / "):"中度色觉异常",a.severity="中度色觉异常",a.icon="🔶",a.type="moderate",a.description="您存在较明显的色觉异常，可能会对某些需要颜色判断的工作或活动造成影响。建议咨询专业眼科医生，了解更多关于色觉异常的信息和应对方法。"}else E>0?(a.title="全色盲",a.severity="重度色觉异常",a.icon="🔴",a.type="severe",a.description="您可能存在全色盲或重度色觉异常，世界对您来说可能主要呈现不同亮度的灰色。强烈建议您前往医院眼科进行专业检查和诊断，以便获得更详细的信息和专业建议。"):(a.title="重度红绿色盲",a.severity="重度色觉异常",a.icon="🔴",a.type="severe",a.description="您存在较重的色觉异常，特别是在红绿色系的分辨上可能有明显困难。这可能会对您的职业选择和日常生活产生一定影响。建议您咨询专业眼科医生，了解适合您的职业选择和生活建议。");return a}(),document.getElementById("diagnosisCard").innerHTML=`
    <div class="diagnosisIcon">${r.icon}</div>
    <div class="diagnosisTitle">${r.title}</div>
    <div class="diagnosisSeverity">${r.severity}</div>
  `,document.getElementById("diagnosisCard").className=`diagnosisCard ${r.type}`,document.getElementById("evaluation").innerHTML=`
    <h3>\u{8BE6}\u{7EC6}\u{5206}\u{6790}</h3>
    <div class="analysisDetails">
      ${r.details.map(u=>`
        <div class="analysisItem">
          <span class="analysisLabel">${u.label}</span>
          <span class="analysisValue">${u.value}</span>
        </div>
      `).join("")}
    </div>
    <p style="margin-top: 20px;">${r.description}</p>
    <p style="margin-top: 15px; font-size: 14px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
      \u{26A0}\u{FE0F} \u{6CE8}\u{FF1A}\u{6B64}\u{6D4B}\u{8BD5}\u{4EC5}\u{4F9B}\u{53C2}\u{8003}\u{FF0C}\u{4E0D}\u{80FD}\u{66FF}\u{4EE3}\u{4E13}\u{4E1A}\u{533B}\u{7597}\u{8BCA}\u{65AD}\u{3002}\u{5982}\u{6709}\u{7591}\u{8651}\u{FF0C}\u{8BF7}\u{54A8}\u{8BE2}\u{4E13}\u{4E1A}\u{533B}\u{751F}\u{3002}
    </p>
  `)}function l(){document.getElementById("resultScreen").classList.remove("active"),document.getElementById("startScreen").style.display="block"}let d=[{id:"overview",title:"什么是色盲色弱",icon:"👁️",content:`
      <h3>\u{57FA}\u{672C}\u{6982}\u{5FF5}</h3>
      <p><strong>\u{8272}\u{76F2}</strong>\u{FF1A}\u{6307}\u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{67D0}\u{4E9B}\u{6216}\u{5168}\u{90E8}\u{989C}\u{8272}\u{FF0C}\u{662F}\u{4E00}\u{79CD}\u{4E25}\u{91CD}\u{7684}\u{8272}\u{89C9}\u{969C}\u{788D}\u{3002}</p>
      <p><strong>\u{8272}\u{5F31}</strong>\u{FF1A}\u{6307}\u{5206}\u{8FA8}\u{989C}\u{8272}\u{7684}\u{80FD}\u{529B}\u{964D}\u{4F4E}\u{FF0C}\u{6BD4}\u{8272}\u{76F2}\u{7A0B}\u{5EA6}\u{8F7B}\u{3002}</p>
      
      <h3>\u{60A3}\u{75C5}\u{7387}</h3>
      <p>\u{2022} \u{7537}\u{6027}\u{7EA2}\u{7EFF}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{60A3}\u{75C5}\u{7387}\u{7EA6}\u{4E3A} 5-8%</p>
      <p>\u{2022} \u{5973}\u{6027}\u{7EA2}\u{7EFF}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{60A3}\u{75C5}\u{7387}\u{7EA6}\u{4E3A} 0.5-1%</p>
      <p>\u{2022} \u{84DD}\u{9EC4}\u{8272}\u{76F2}\u{7F55}\u{89C1}\u{FF0C}\u{7537}\u{5973}\u{60A3}\u{75C5}\u{7387}\u{76F8}\u{8FD1}\u{FF08}\u{7EA6} 0.01%\u{FF09}</p>
      <p>\u{2022} \u{5168}\u{8272}\u{76F2}\u{6781}\u{4E3A}\u{7F55}\u{89C1}\u{FF08}\u{7EA6} 1/33000\u{FF09}</p>
      
      <h3>\u{4E3A}\u{4EC0}\u{4E48}\u{7537}\u{6027}\u{66F4}\u{5BB9}\u{6613}\u{8272}\u{76F2}\u{FF1F}</h3>
      <p>\u{7EA2}\u{7EFF}\u{8272}\u{76F2}\u{7684}\u{57FA}\u{56E0}\u{4F4D}\u{4E8E} X \u{67D3}\u{8272}\u{4F53}\u{4E0A}\u{FF0C}\u{7537}\u{6027}\u{53EA}\u{6709}\u{4E00}\u{6761} X \u{67D3}\u{8272}\u{4F53}\u{FF0C}\u{53EA}\u{8981}\u{643A}\u{5E26}\u{81F4}\u{75C5}\u{57FA}\u{56E0}\u{5C31}\u{4F1A}\u{8868}\u{73B0}\u{51FA}\u{8272}\u{76F2}\u{FF1B}\u{800C}\u{5973}\u{6027}\u{6709}\u{4E24}\u{6761} X \u{67D3}\u{8272}\u{4F53}\u{FF0C}\u{9700}\u{8981}\u{4E24}\u{6761}\u{90FD}\u{643A}\u{5E26}\u{81F4}\u{75C5}\u{57FA}\u{56E0}\u{624D}\u{4F1A}\u{8868}\u{73B0}\u{51FA}\u{8272}\u{76F2}\u{FF0C}\u{56E0}\u{6B64}\u{60A3}\u{75C5}\u{7387}\u{8FDC}\u{4F4E}\u{4E8E}\u{7537}\u{6027}\u{3002}</p>
    `},{id:"causes",title:"形成原因",icon:"🔬",content:`
      <h3>1. \u{5148}\u{5929}\u{6027}\u{9057}\u{4F20}\u{FF08}\u{6700}\u{5E38}\u{89C1}\u{FF09}</h3>
      <p><strong>\u{9057}\u{4F20}\u{65B9}\u{5F0F}\u{FF1A}</strong></p>
      <p>\u{2022} \u{7EA2}\u{7EFF}\u{8272}\u{76F2}\u{FF1A}X \u{67D3}\u{8272}\u{4F53}\u{9690}\u{6027}\u{9057}\u{4F20}</p>
      <p>\u{2022} \u{84DD}\u{9EC4}\u{8272}\u{76F2}\u{FF1A}\u{5E38}\u{67D3}\u{8272}\u{4F53}\u{663E}\u{6027}\u{9057}\u{4F20}</p>
      <p>\u{2022} \u{5168}\u{8272}\u{76F2}\u{FF1A}\u{5E38}\u{67D3}\u{8272}\u{4F53}\u{9690}\u{6027}\u{9057}\u{4F20}</p>
      
      <p><strong>\u{751F}\u{7406}\u{673A}\u{5236}\u{FF1A}</strong></p>
      <p>\u{4EBA}\u{773C}\u{89C6}\u{7F51}\u{819C}\u{6709}\u{4E09}\u{79CD}\u{89C6}\u{9525}\u{7EC6}\u{80DE}\u{FF0C}\u{5206}\u{522B}\u{5BF9}\u{7EA2}\u{3001}\u{7EFF}\u{3001}\u{84DD}\u{4E09}\u{79CD}\u{6CE2}\u{957F}\u{7684}\u{5149}\u{654F}\u{611F}\u{3002}\u{5982}\u{679C}\u{67D0}\u{79CD}\u{89C6}\u{9525}\u{7EC6}\u{80DE}\u{7F3A}\u{5931}\u{6216}\u{529F}\u{80FD}\u{5F02}\u{5E38}\u{FF0C}\u{5C31}\u{4F1A}\u{5BFC}\u{81F4}\u{76F8}\u{5E94}\u{7684}\u{8272}\u{89C9}\u{969C}\u{788D}\u{3002}</p>
      
      <h3>2. \u{540E}\u{5929}\u{6027}\u{56E0}\u{7D20}</h3>
      <p><strong>\u{75BE}\u{75C5}\u{FF1A}</strong></p>
      <p>\u{2022} \u{89C6}\u{7F51}\u{819C}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{89C6}\u{7F51}\u{819C}\u{8131}\u{79BB}\u{3001}\u{9EC4}\u{6591}\u{75C5}\u{53D8}\u{FF09}</p>
      <p>\u{2022} \u{89C6}\u{795E}\u{7ECF}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{89C6}\u{795E}\u{7ECF}\u{708E}\u{3001}\u{89C6}\u{795E}\u{7ECF}\u{840E}\u{7F29}\u{FF09}</p>
      <p>\u{2022} \u{8111}\u{90E8}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{8111}\u{5352}\u{4E2D}\u{3001}\u{8111}\u{5916}\u{4F24}\u{FF09}</p>
      <p>\u{2022} \u{5168}\u{8EAB}\u{6027}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{7CD6}\u{5C3F}\u{75C5}\u{3001}\u{7EF4}\u{751F}\u{7D20}\u{7F3A}\u{4E4F}\u{FF09}</p>
      
      <p><strong>\u{836F}\u{7269}/\u{5316}\u{5B66}\u{7269}\u{8D28}\u{FF1A}</strong></p>
      <p>\u{2022} \u{67D0}\u{4E9B}\u{836F}\u{7269}\u{FF08}\u{5982}\u{6D0B}\u{5730}\u{9EC4}\u{3001}\u{4E59}\u{80FA}\u{4E01}\u{9187}\u{FF09}</p>
      <p>\u{2022} \u{67D0}\u{4E9B}\u{5316}\u{5B66}\u{7269}\u{8D28}\u{FF08}\u{5982}\u{4E8C}\u{786B}\u{5316}\u{78B3}\u{3001}\u{7532}\u{9187}\u{FF09}</p>
      
      <p><strong>\u{5E74}\u{9F84}\u{FF1A}</strong></p>
      <p>\u{2022} \u{8001}\u{5E74}\u{4EBA}\u{6676}\u{72B6}\u{4F53}\u{53D8}\u{9EC4}\u{FF0C}\u{5BF9}\u{84DD}\u{8272}\u{7684}\u{5206}\u{8FA8}\u{80FD}\u{529B}\u{4E0B}\u{964D}</p>
    `},{id:"types",title:"类型及症状",icon:"🎨",content:`
      <h3>\u{7EA2}\u{7EFF}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{FF08}\u{6700}\u{5E38}\u{89C1}\u{FF09}</h3>
      
      <p><strong>\u{1F534} \u{7EA2}\u{8272}\u{76F2}\u{FF08}Protanopia\u{FF09}\u{FF1A}</strong></p>
      <p>\u{2022} \u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{7EA2}\u{8272}\u{548C}\u{6DF1}\u{7EFF}\u{8272}\u{3001}\u{84DD}\u{8272}\u{548C}\u{7D2B}\u{7EA2}\u{8272}\u{3001}\u{7D2B}\u{8272}\u{548C}\u{84DD}\u{8272}</p>
      <p>\u{2022} \u{7EFF}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{9EC4}\u{8272}\u{FF0C}\u{7EA2}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{6697}\u{7070}\u{8272}</p>
      <p>\u{2022} \u{5BF9}\u{7EA2}\u{5149}\u{7684}\u{654F}\u{611F}\u{5EA6}\u{964D}\u{4F4E}</p>
      
      <p><strong>\u{1F7E2} \u{7EFF}\u{8272}\u{76F2}\u{FF08}Deuteranopia\u{FF09}\u{FF1A}</strong></p>
      <p>\u{2022} \u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{6DE1}\u{7EFF}\u{8272}\u{548C}\u{6DF1}\u{7EA2}\u{8272}\u{3001}\u{7D2B}\u{8272}\u{548C}\u{9752}\u{84DD}\u{8272}\u{3001}\u{7D2B}\u{7EA2}\u{8272}\u{548C}\u{7070}\u{8272}</p>
      <p>\u{2022} \u{7EFF}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{6697}\u{7070}\u{8272}\u{6216}\u{6DE1}\u{9EC4}\u{8272}</p>
      <p>\u{2022} \u{662F}\u{6700}\u{5E38}\u{89C1}\u{7684}\u{8272}\u{76F2}\u{7C7B}\u{578B}</p>
      
      <p><strong>\u{1F534}\u{1F7E2} \u{7EA2}\u{7EFF}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5206}\u{8FA8}\u{7EA2}\u{7EFF}\u{8272}\u{7684}\u{80FD}\u{529B}\u{964D}\u{4F4E}</p>
      <p>\u{2022} \u{5728}\u{5149}\u{7EBF}\u{4E0D}\u{8DB3}\u{6216}\u{989C}\u{8272}\u{76F8}\u{8FD1}\u{65F6}\u{66F4}\u{96BE}\u{5206}\u{8FA8}</p>
      <p>\u{2022} \u{7A0B}\u{5EA6}\u{8F7B}\u{91CD}\u{4E0D}\u{4E00}</p>
      
      <h3>\u{84DD}\u{9EC4}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{FF08}\u{7F55}\u{89C1}\u{FF09}</h3>
      
      <p><strong>\u{1F535} \u{84DD}\u{8272}\u{76F2}\u{FF08}Tritanopia\u{FF09}\u{FF1A}</strong></p>
      <p>\u{2022} \u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{84DD}\u{8272}\u{548C}\u{9EC4}\u{8272}\u{3001}\u{7EFF}\u{8272}\u{548C}\u{84DD}\u{7EFF}\u{8272}\u{3001}\u{7D2B}\u{8272}\u{548C}\u{7EA2}\u{8272}</p>
      <p>\u{2022} \u{84DD}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{9ED1}\u{8272}</p>
      
      <p><strong>\u{1F7E1} \u{84DD}\u{9EC4}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5206}\u{8FA8}\u{84DD}\u{9EC4}\u{8272}\u{7684}\u{80FD}\u{529B}\u{964D}\u{4F4E}</p>
      
      <h3>\u{5168}\u{8272}\u{76F2}\u{FF08}\u{6781}\u{7F55}\u{89C1}\u{FF09}</h3>
      <p>\u{2022} \u{5B8C}\u{5168}\u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{4EFB}\u{4F55}\u{989C}\u{8272}</p>
      <p>\u{2022} \u{4E16}\u{754C}\u{53EA}\u{6709}\u{9ED1}\u{767D}\u{7070}\u{4E0D}\u{540C}\u{4EAE}\u{5EA6}\u{7684}\u{533A}\u{522B}</p>
      <p>\u{2022} \u{5E38}\u{4F34}\u{6709}\u{89C6}\u{529B}\u{4F4E}\u{4E0B}\u{3001}\u{754F}\u{5149}\u{3001}\u{773C}\u{7403}\u{9707}\u{98A4}\u{7B49}\u{75C7}\u{72B6}</p>
    `},{id:"impact",title:"生活影响",icon:"🏠",content:`
      <h3>\u{65E5}\u{5E38}\u{751F}\u{6D3B}</h3>
      <p><strong>\u{4EA4}\u{901A}\u{51FA}\u{884C}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5206}\u{8FA8}\u{7EA2}\u{7EFF}\u{706F}\u{53EF}\u{80FD}\u{6709}\u{56F0}\u{96BE}\u{FF08}\u{5C24}\u{5176}\u{662F}\u{7EA2}\u{8272}\u{76F2}\u{FF09}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{8BB0}\u{4F4F}\u{7EA2}\u{7EFF}\u{706F}\u{4F4D}\u{7F6E}\u{FF08}\u{4E0A}\u{7EA2}\u{4E0B}\u{7EFF}\u{FF09}\u{FF0C}\u{6216}\u{89C2}\u{5BDF}\u{4ED6}\u{4EBA}\u{884C}\u{52A8}</p>
      
      <p><strong>\u{7A7F}\u{642D}\u{642D}\u{914D}\u{FF1A}</strong></p>
      <p>\u{2022} \u{7EA2}\u{7EFF}\u{8272}\u{7CFB}\u{642D}\u{914D}\u{53EF}\u{80FD}\u{51FA}\u{9519}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{4F7F}\u{7528}\u{914D}\u{8272} APP \u{8F85}\u{52A9}\u{FF0C}\u{6216}\u{8BF7}\u{5BB6}\u{4EBA}\u{670B}\u{53CB}\u{5E2E}\u{5FD9}\u{53C2}\u{8003}</p>
      
      <p><strong>\u{996E}\u{98DF}\u{FF1A}</strong></p>
      <p>\u{2022} \u{96BE}\u{4EE5}\u{901A}\u{8FC7}\u{989C}\u{8272}\u{5224}\u{65AD}\u{98DF}\u{7269}\u{662F}\u{5426}\u{65B0}\u{9C9C}\u{3001}\u{6C34}\u{679C}\u{662F}\u{5426}\u{6210}\u{719F}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{901A}\u{8FC7}\u{624B}\u{611F}\u{3001}\u{6C14}\u{5473}\u{7B49}\u{5176}\u{4ED6}\u{65B9}\u{5F0F}\u{5224}\u{65AD}</p>
      
      <h3>\u{6559}\u{80B2}\u{4E0E}\u{804C}\u{4E1A}</h3>
      <p><strong>\u{4E13}\u{4E1A}\u{9650}\u{5236}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5316}\u{5DE5}\u{3001}\u{533B}\u{5B66}\u{3001}\u{7F8E}\u{672F}\u{3001}\u{8BBE}\u{8BA1}\u{3001}\u{98DE}\u{884C}\u{5458}\u{3001}\u{9A7E}\u{9A76}\u{5458}\u{7B49}\u{4E13}\u{4E1A}/\u{804C}\u{4E1A}\u{53EF}\u{80FD}\u{53D7}\u{9650}</p>
      <p>\u{2022} \u{5177}\u{4F53}\u{8981}\u{6C42}\u{8BF7}\u{53C2}\u{8003}\u{76F8}\u{5173}\u{884C}\u{4E1A}\u{6807}\u{51C6}</p>
      
      <p><strong>\u{5B66}\u{4E60}\u{5F71}\u{54CD}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5F69}\u{8272}\u{56FE}\u{8868}\u{3001}\u{5730}\u{56FE}\u{53EF}\u{80FD}\u{7406}\u{89E3}\u{56F0}\u{96BE}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{63D0}\u{524D}\u{544A}\u{77E5}\u{8001}\u{5E08}\u{FF0C}\u{5BFB}\u{6C42}\u{9002}\u{5F53}\u{8C03}\u{6574}</p>
      
      <h3>\u{5FC3}\u{7406}\u{5F71}\u{54CD}</h3>
      <p>\u{2022} \u{513F}\u{7AE5}\u{53EF}\u{80FD}\u{56E0}"\u{4E0E}\u{4F17}\u{4E0D}\u{540C}"\u{4EA7}\u{751F}\u{81EA}\u{5351}\u{5FC3}\u{7406}</p>
      <p>\u{2022} \u{5BB6}\u{957F}\u{548C}\u{8001}\u{5E08}\u{5E94}\u{7ED9}\u{4E88}\u{7406}\u{89E3}\u{548C}\u{9F13}\u{52B1}</p>
      <p>\u{2022} \u{8272}\u{76F2}\u{8272}\u{5F31}\u{4E0D}\u{662F}"\u{7F3A}\u{9677}"\u{FF0C}\u{53EA}\u{662F}\u{4E00}\u{79CD}\u{4E0D}\u{540C}\u{7684}\u{89C6}\u{89C9}\u{4F53}\u{9A8C}</p>
    `},{id:"help",title:"辅助与治疗",icon:"💡",content:`
      <h3>\u{8F85}\u{52A9}\u{5DE5}\u{5177}</h3>
      
      <p><strong>\u{8272}\u{76F2}\u{77EB}\u{6B63}\u{773C}\u{955C}\u{FF1A}</strong></p>
      <p>\u{2022} \u{539F}\u{7406}\u{FF1A}\u{901A}\u{8FC7}\u{7279}\u{6B8A}\u{9540}\u{819C}\u{8FC7}\u{6EE4}\u{90E8}\u{5206}\u{6CE2}\u{957F}\u{7684}\u{5149}\u{FF0C}\u{589E}\u{52A0}\u{989C}\u{8272}\u{5BF9}\u{6BD4}\u{5EA6}</p>
      <p>\u{2022} \u{6548}\u{679C}\u{FF1A}\u{5BF9}\u{7EA2}\u{7EFF}\u{8272}\u{5F31}/\u{8272}\u{76F2}\u{6709}\u{4E00}\u{5B9A}\u{5E2E}\u{52A9}\u{FF0C}\u{4F46}\u{4E0D}\u{80FD}"\u{6CBB}\u{6108}"\u{8272}\u{76F2}</p>
      <p>\u{2022} \u{6CE8}\u{610F}\u{FF1A}\u{4F69}\u{6234}\u{540E}\u{770B}\u{5230}\u{7684}\u{989C}\u{8272}\u{4E0E}\u{6B63}\u{5E38}\u{4EBA}\u{4E5F}\u{6709}\u{5DEE}\u{5F02}\u{FF0C}\u{9700}\u{8981}\u{9002}\u{5E94}\u{671F}</p>
      
      <p><strong>\u{624B}\u{673A} APP \u{8F85}\u{52A9}\u{FF1A}</strong></p>
      <p>\u{2022} \u{989C}\u{8272}\u{8BC6}\u{522B} APP\u{FF1A}\u{62CD}\u{7167}\u{540E}\u{544A}\u{8BC9}\u{4F60}\u{662F}\u{4EC0}\u{4E48}\u{989C}\u{8272}</p>
      <p>\u{2022} \u{914D}\u{8272}\u{8F85}\u{52A9} APP\u{FF1A}\u{5E2E}\u{52A9}\u{9009}\u{62E9}\u{534F}\u{8C03}\u{7684}\u{7A7F}\u{642D}\u{8272}\u{5F69}</p>
      
      <p><strong>\u{5176}\u{4ED6}\u{8F85}\u{52A9}\u{FF1A}</strong></p>
      <p>\u{2022} \u{7ED9}\u{8863}\u{7269}\u{3001}\u{7269}\u{54C1}\u{505A}\u{6807}\u{7B7E}\u{6807}\u{8BB0}</p>
      <p>\u{2022} \u{4F7F}\u{7528}\u{9AD8}\u{5BF9}\u{6BD4}\u{5EA6}\u{7684}\u{914D}\u{8272}\u{65B9}\u{6848}</p>
      
      <h3>\u{76EE}\u{524D}\u{80FD}\u{6CBB}\u{6108}\u{5417}\u{FF1F}</h3>
      
      <p><strong>\u{5148}\u{5929}\u{6027}\u{8272}\u{76F2}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{76EE}\u{524D}\u{5C1A}\u{65E0}\u{6CBB}\u{6108}\u{65B9}\u{6CD5}</p>
      <p>\u{2022} \u{57FA}\u{56E0}\u{6CBB}\u{7597}\u{6B63}\u{5728}\u{7814}\u{7A76}\u{4E2D}\u{FF0C}\u{5DF2}\u{6709}\u{52A8}\u{7269}\u{5B9E}\u{9A8C}\u{6210}\u{529F}\u{6848}\u{4F8B}</p>
      <p>\u{2022} \u{672A}\u{6765}\u{53EF}\u{80FD}\u{901A}\u{8FC7}\u{57FA}\u{56E0}\u{7F16}\u{8F91}\u{6280}\u{672F}\u{6CBB}\u{7597}</p>
      
      <p><strong>\u{540E}\u{5929}\u{6027}\u{8272}\u{76F2}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{9488}\u{5BF9}\u{539F}\u{53D1}\u{75C5}\u{6CBB}\u{7597}\u{FF0C}\u{90E8}\u{5206}\u{53EF}\u{80FD}\u{6062}\u{590D}\u{6216}\u{6539}\u{5584}</p>
      <p>\u{2022} \u{5982}\u{836F}\u{7269}\u{5F15}\u{8D77}\u{7684}\u{FF0C}\u{505C}\u{836F}\u{540E}\u{53EF}\u{80FD}\u{6062}\u{590D}</p>
      
      <h3>\u{751F}\u{6D3B}\u{5EFA}\u{8BAE}</h3>
      <p>1. \u{63A5}\u{7EB3}\u{81EA}\u{5DF1}\u{FF0C}\u{8272}\u{76F2}\u{8272}\u{5F31}\u{4E0D}\u{5F71}\u{54CD}\u{6B63}\u{5E38}\u{751F}\u{6D3B}</p>
      <p>2. \u{544A}\u{77E5}\u{5BB6}\u{4EBA}\u{670B}\u{53CB}\u{FF0C}\u{83B7}\u{5F97}\u{7406}\u{89E3}\u{548C}\u{5E2E}\u{52A9}</p>
      <p>3. \u{9009}\u{62E9}\u{9002}\u{5408}\u{81EA}\u{5DF1}\u{7684}\u{4E13}\u{4E1A}\u{548C}\u{804C}\u{4E1A}</p>
      <p>4. \u{4F7F}\u{7528}\u{8F85}\u{52A9}\u{5DE5}\u{5177}\u{63D0}\u{9AD8}\u{751F}\u{6D3B}\u{8D28}\u{91CF}</p>
      <p>5. \u{5B9A}\u{671F}\u{68C0}\u{67E5}\u{89C6}\u{529B}\u{FF0C}\u{5173}\u{6CE8}\u{773C}\u{90E8}\u{5065}\u{5EB7}</p>
    `},{id:"faq",title:"常见问题",icon:"❓",content:`
      <h3>Q: \u{8272}\u{76F2}\u{5C31}\u{662F}\u{770B}\u{4E0D}\u{89C1}\u{989C}\u{8272}\u{5417}\u{FF1F}</h3>
      <p>A: \u{4E0D}\u{662F}\u{3002}\u{7EDD}\u{5927}\u{591A}\u{6570}\u{8272}\u{76F2}\u{8005}\u{80FD}\u{770B}\u{5230}\u{989C}\u{8272}\u{FF0C}\u{53EA}\u{662F}\u{96BE}\u{4EE5}\u{533A}\u{5206}\u{67D0}\u{4E9B}\u{989C}\u{8272}\u{FF08}\u{6700}\u{5E38}\u{89C1}\u{7684}\u{662F}\u{7EA2}\u{548C}\u{7EFF}\u{FF09}\u{3002}\u{53EA}\u{6709}\u{6781}\u{5C11}\u{6570}\u{5168}\u{8272}\u{76F2}\u{8005}\u{53EA}\u{80FD}\u{770B}\u{5230}\u{9ED1}\u{767D}\u{7070}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{76F2}\u{4F1A}\u{9057}\u{4F20}\u{5417}\u{FF1F}</h3>
      <p>A: \u{4F1A}\u{3002}\u{7EA2}\u{7EFF}\u{8272}\u{76F2}\u{662F} X \u{67D3}\u{8272}\u{4F53}\u{9690}\u{6027}\u{9057}\u{4F20}\u{FF0C}\u{5982}\u{679C}\u{7236}\u{4EB2}\u{662F}\u{8272}\u{76F2}\u{FF0C}\u{5973}\u{513F}\u{4F1A}\u{6210}\u{4E3A}\u{643A}\u{5E26}\u{8005}\u{FF1B}\u{6BCD}\u{4EB2}\u{662F}\u{643A}\u{5E26}\u{8005}\u{FF0C}\u{513F}\u{5B50}\u{6709} 50% \u{6982}\u{7387}\u{662F}\u{8272}\u{76F2}\u{3002}</p>
      
      <h3>Q: \u{6234}\u{8272}\u{76F2}\u{773C}\u{955C}\u{80FD}\u{901A}\u{8FC7}\u{9A7E}\u{7167}\u{8003}\u{8BD5}\u{5417}\u{FF1F}</h3>
      <p>A: \u{4E0D}\u{540C}\u{5730}\u{533A}\u{89C4}\u{5B9A}\u{4E0D}\u{540C}\u{3002}\u{4E00}\u{822C}\u{6765}\u{8BF4}\u{FF0C}\u{53EA}\u{8981}\u{80FD}\u{6B63}\u{786E}\u{5206}\u{8FA8}\u{7EA2}\u{7EFF}\u{706F}\u{5373}\u{53EF}\u{FF0C}\u{5EFA}\u{8BAE}\u{54A8}\u{8BE2}\u{5F53}\u{5730}\u{4EA4}\u{7BA1}\u{90E8}\u{95E8}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{5F31}\u{53EF}\u{4EE5}\u{5F53}\u{533B}\u{751F}\u{5417}\u{FF1F}</h3>
      <p>A: \u{89C6}\u{5177}\u{4F53}\u{4E13}\u{4E1A}\u{800C}\u{5B9A}\u{3002}\u{5916}\u{79D1}\u{3001}\u{75C5}\u{7406}\u{79D1}\u{7B49}\u{5BF9}\u{989C}\u{8272}\u{8981}\u{6C42}\u{9AD8}\u{7684}\u{4E13}\u{4E1A}\u{53EF}\u{80FD}\u{53D7}\u{9650}\u{FF0C}\u{5EFA}\u{8BAE}\u{54A8}\u{8BE2}\u{76EE}\u{6807}\u{9662}\u{6821}\u{6216}\u{5355}\u{4F4D}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{76F2}\u{4F1A}\u{8D8A}\u{6765}\u{8D8A}\u{4E25}\u{91CD}\u{5417}\u{FF1F}</h3>
      <p>A: \u{5148}\u{5929}\u{6027}\u{8272}\u{76F2}\u{4E00}\u{822C}\u{4E0D}\u{4F1A}\u{52A0}\u{91CD}\u{3002}\u{5982}\u{679C}\u{540E}\u{5929}\u{51FA}\u{73B0}\u{8272}\u{89C9}\u{53D8}\u{5316}\u{FF0C}\u{5E94}\u{53CA}\u{65F6}\u{5C31}\u{533B}\u{68C0}\u{67E5}\u{FF0C}\u{53EF}\u{80FD}\u{662F}\u{773C}\u{90E8}\u{6216}\u{5168}\u{8EAB}\u{75BE}\u{75C5}\u{7684}\u{4FE1}\u{53F7}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{76F2}\u{8005}\u{80FD}\u{751F}\u{5B69}\u{5B50}\u{5417}\u{FF1F}</h3>
      <p>A: \u{53EF}\u{4EE5}\u{3002}\u{8272}\u{76F2}\u{8005}\u{751F}\u{80B2}\u{80FD}\u{529B}\u{6B63}\u{5E38}\u{FF0C}\u{53EA}\u{662F}\u{5B69}\u{5B50}\u{6709}\u{53EF}\u{80FD}\u{9057}\u{4F20}\u{8272}\u{76F2}\u{FF08}\u{6982}\u{7387}\u{53D6}\u{51B3}\u{4E8E}\u{914D}\u{5076}\u{662F}\u{5426}\u{643A}\u{5E26}\u{81F4}\u{75C5}\u{57FA}\u{56E0}\u{FF09}\u{3002}</p>
      
      <h3>Q: \u{5B55}\u{5987}\u{5403}\u{4EC0}\u{4E48}\u{80FD}\u{9884}\u{9632}\u{5B69}\u{5B50}\u{8272}\u{76F2}\u{FF1F}</h3>
      <p>A: \u{5148}\u{5929}\u{6027}\u{8272}\u{76F2}\u{662F}\u{57FA}\u{56E0}\u{51B3}\u{5B9A}\u{7684}\u{FF0C}\u{996E}\u{98DF}\u{65E0}\u{6CD5}\u{9884}\u{9632}\u{3002}\u{4F46}\u{5B55}\u{671F}\u{8865}\u{5145}\u{7EF4}\u{751F}\u{7D20} A \u{7B49}\u{5BF9}\u{80CE}\u{513F}\u{89C6}\u{529B}\u{53D1}\u{80B2}\u{6709}\u{597D}\u{5904}\u{3002}</p>
      
      <h3>Q: \u{4E3A}\u{4EC0}\u{4E48}\u{6211}\u{4EE5}\u{524D}\u{80FD}\u{5206}\u{6E05}\u{7684}\u{989C}\u{8272}\u{73B0}\u{5728}\u{5206}\u{4E0D}\u{6E05}\u{4E86}\u{FF1F}</h3>
      <p>A: \u{540E}\u{5929}\u{8272}\u{89C9}\u{6539}\u{53D8}\u{9700}\u{8981}\u{91CD}\u{89C6}\u{FF0C}\u{53EF}\u{80FD}\u{662F}\u{767D}\u{5185}\u{969C}\u{3001}\u{9752}\u{5149}\u{773C}\u{3001}\u{89C6}\u{7F51}\u{819C}\u{75C5}\u{53D8}\u{7B49}\u{773C}\u{90E8}\u{75BE}\u{75C5}\u{FF0C}\u{6216}\u{7CD6}\u{5C3F}\u{75C5}\u{7B49}\u{5168}\u{8EAB}\u{6027}\u{75BE}\u{75C5}\u{7684}\u{8868}\u{73B0}\u{FF0C}\u{5EFA}\u{8BAE}\u{5C3D}\u{5FEB}\u{5C31}\u{533B}\u{68C0}\u{67E5}\u{3002}</p>
    `}],E="overview";function c(){document.getElementById("startScreen").style.display="none",document.getElementById("knowledgeScreen").classList.add("active"),function u(){document.getElementById("knowledgeTabs").innerHTML=d.map(u=>`
    <button class="knowledgeTab ${u.id===E?"active":""}" data-tab="${u.id}">
      <span class="knowledgeTabIcon">${u.icon}</span>
      <span class="knowledgeTabTitle">${u.title}</span>
    </button>
  `).join(""),document.querySelectorAll(".knowledgeTab").forEach(e=>{e.addEventListener("click",()=>{E=e.dataset.tab,u(),C()})})}(),C()}function p(){document.getElementById("knowledgeScreen").classList.remove("active"),document.getElementById("startScreen").style.display="block"}function C(){let u=d.find(u=>u.id===E);document.getElementById("knowledgeContent").innerHTML=`
    <div class="knowledgeSection">
      <div class="knowledgeSectionHeader">
        <span class="knowledgeSectionIcon">${u.icon}</span>
        <h3 class="knowledgeSectionTitle">${u.title}</h3>
      </div>
      <div class="knowledgeSectionContent">${u.content}</div>
    </div>
  `}document.addEventListener("DOMContentLoaded",function(){document.getElementById("app").innerHTML=`
    <div class="container">
      <div id="startScreen">
        <h1 class="title">\u{8272}\u{76F2}\u{81EA}\u{6D4B}\u{56FE}\u{8C31}</h1>
        <p class="subtitle">\u{8BF7}\u{9009}\u{62E9}\u{6D4B}\u{8BD5}\u{65B9}\u{6848}</p>
        <div class="modeSelector" id="modeSelector"></div>
        <button class="startBtn" id="startBtn" style="margin-top: 20px;">\u{5F00}\u{59CB}\u{6D4B}\u{8BD5}</button>
        <button class="knowledgeBtn" id="knowledgeBtn" style="margin-top: 15px;">\u{1F4DA} \u{8272}\u{76F2}\u{8272}\u{5F31}\u{77E5}\u{8BC6}\u{666E}\u{53CA}</button>
      </div>
      
      <div id="knowledgeScreen" class="knowledgeContainer">
        <div class="knowledgeHeader">
          <h2 class="knowledgeTitle">\u{8272}\u{76F2}\u{8272}\u{5F31}\u{77E5}\u{8BC6}\u{666E}\u{53CA}</h2>
          <button class="backBtn" id="backBtn">\u{2190} \u{8FD4}\u{56DE}</button>
        </div>
        <div class="knowledgeTabs" id="knowledgeTabs"></div>
        <div class="knowledgeContent" id="knowledgeContent"></div>
      </div>
      
      <div id="testScreen" class="testContainer">
        <div class="progressBar">
          <div class="progressFill" id="progressFill"></div>
        </div>
        <p class="questionCount" id="questionCount">\u{7B2C} 1 / 10 \u{9898}</p>
        <div class="imageContainer">
          <canvas id="testCanvas" width="300" height="300"></canvas>
        </div>
        <div class="options" id="options"></div>
        <div id="feedback" class="feedback hidden"></div>
        <button id="nextBtn" class="nextBtn hidden">\u{4E0B}\u{4E00}\u{9898}</button>
      </div>
      
      <div id="resultScreen" class="resultContainer">
        <h2 class="resultTitle">\u{6D4B}\u{8BD5}\u{5B8C}\u{6210}\u{FF01}</h2>
        <div class="scoreDisplay" id="scoreDisplay">8/10</div>
        <div class="diagnosisCard" id="diagnosisCard"></div>
        <div class="evaluation" id="evaluation"></div>
        <button class="restartBtn" id="restartBtn">\u{91CD}\u{65B0}\u{6D4B}\u{8BD5}</button>
      </div>
    </div>
  `,document.getElementById("modeSelector").innerHTML=e.map((u,e)=>`
    <div class="modeCard ${0===e?"selected":""}" data-mode="${u.id}">
      <div class="modeIcon">${u.icon}</div>
      <div class="modeName">${u.name}</div>
      <div class="modeDesc">${u.description}</div>
    </div>
  `).join(""),document.querySelectorAll(".modeCard").forEach(u=>{u.addEventListener("click",()=>{document.querySelectorAll(".modeCard").forEach(u=>u.classList.remove("selected")),u.classList.add("selected"),t=u.dataset.mode})}),document.getElementById("startBtn").addEventListener("click",r),document.getElementById("nextBtn").addEventListener("click",s),document.getElementById("restartBtn").addEventListener("click",l),document.getElementById("knowledgeBtn").addEventListener("click",c),document.getElementById("backBtn").addEventListener("click",p)});
//# sourceMappingURL=color-blind-test-web.73c679a1.js.map
