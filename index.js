let todo=[];
let a=0,b=0;
let inp=document.querySelector('.input_task');
let setInput=document.querySelector('.input_task.b');
let bt=document.querySelector('.bt');
let taskList=document.querySelector('.task_list');
const etat=["Inisyal","An kou", "Tèmine"];
let setForm=document.querySelector('.form.b');
setForm.style.visibility='hidden';
setForm.style.marginTop='5px';
let btSet=document.querySelector('.bt.b');
let vf=0;


bt.addEventListener('click',(e)=>{
    if(inp.value===''){
        alert('ou dwe mansyone tach la');
    }else{
        const newTask={
            nom:inp.value,
            etat:"Inisyal"
        }
        todo.push(newTask);
        inp.value='';
        alert('Tach ou a byen anrejistre');
        
        showTask();
        
    }
    
});

inp.addEventListener('change',(ev)=>{
    if(inp.value===''){
        bt.textContent='Ajoute';
    }
});
const showTask=(e)=>{
    taskList.textContent='';
    a=0; b=0;
    for(t in todo){
        let idTask="t"+a;
        a++;
        let idSelect="s"+b;
        b++;
        let div=document.createElement('div');
        let div1=document.createElement('div');
        let div2=document.createElement('div');
        let del=document.createElement('button');
        let modif=document.createElement('button');
        del.textContent="Efase";
        del.setAttribute('class','btdel');

        modif.textContent="Modifye";
        modif.setAttribute('class','btmod')
        div1.setAttribute('class','dvTitle')
        div2.setAttribute('class','dvTask');
        //div---------------------------
        div.setAttribute('class','dvM');
        div.style.padding='4px';
        div.style.marginTop='4px';
        div.style.backgroundColor='#ffaa89';
        div.style.borderRadius='5px';
        //-------------------------------
        let h3=document.createElement('h3');
        h3.setAttribute('id',idTask);
        let sl=document.createElement('select');
        sl.setAttribute('class','sl');
        sl.setAttribute('id',idSelect);
        sl.setAttribute('onchange',"changeStatus("+idTask+","+idSelect+")");
        // --------------------------
        del.setAttribute('onclick','delTask('+idTask+")");
        modif.setAttribute('onclick','setTask('+idTask+")");
        // --------------------------
        for(i in etat){
            let option=document.createElement('option');
            option.textContent=etat[i];
            option.setAttribute('value',etat[i]);
            sl.append(option);
        }
        h3.textContent=todo[t].nom;
        if(todo[t].etat==='Inisyal'){
            h3.setAttribute('style','color:#2889F1');
            sl.selectedIndex=0;
        }else
        if(todo[t].etat==='An kou'){
            h3.setAttribute('style','color:#53c40d');
            sl.selectedIndex=1;
        }else{
            sl.selectedIndex=2;
            h3.setAttribute('style','color:#f11313');    
            }
        div1.append(h3);
        div2.append(sl);
        div2.append(del);
        div2.append(modif);
        div.append(div1);
        div.append(div2);
        taskList.append(div);
    }
   
}

const changeStatus=(idT,idSel)=>{
    const tk=idT;
    const slc=idSel.value;
    switch(slc){
        case 'Inisyal':
            tk.style.color='#2889F1';
            break;
        case 'An kou':
            tk.style.color='#53c40d';
            break;
        default:
            tk.style.color='#f11313';
    }
    for(i in todo){
        if(todo[i]['nom']===tk.innerHTML){
            todo[i]['etat']=slc;
        }
    }
    
}

const setTask=(tk)=>{
    setForm.style.visibility='visible';
    
    setInput.value=tk.innerHTML;
    btSet.addEventListener('click',(e)=>{
        if(setInput.value===''){
            alert('ou dwe bay modifikasyon an');
        }else{
            for(i in todo){
                if(todo[i]['nom']===tk.innerHTML){
                    todo[i]['nom']=setInput.value;
                }
            }
            alert('Tach ou byen modifye');
            setForm.style.visibility='hidden';
            showTask();
        }
       
    });
    
}

const delTask=(tk)=>{
    for(i in todo){
        if(todo[i]['nom']===tk.innerHTML){
          if(confirm('Eske w vle siprime tach sa ?')){
            todo.splice(i,1); 
            setForm.style.visibility='hidden';
            alert('Tach ou a byen siprime');
          }  else{
            alert('ou anile sipresyon tach la');
          }
           break;
        }
    }
    showTask();
}