var form;
var allTasks;
var db1;
var taskName;
var input,button,title;
var ToDo;
var Object;
//var pos=30;
//var taskName2;

function setup() {
    createCanvas(20,20);
    database=firebase.database(); 

    title=createElement("h1");
    title.html("TO DO LIST");
    title.position(430,30);
    
    input=createInput("Enter a Task");
    input.position(470,150);
    
    button=createButton("Add Task");
    button.position(650,150);
    button.mousePressed(submitData);
    
    retrieveData();  
}

function draw() {
    background("white");  
}

function submitData(){
    var data={
      taskName: input.value()
    }
    var db=database.ref("ToDo");
    db.push(data);
    //console.log(data);
}

function retrieveData(){
    database.ref("ToDo").on("value",function(data){
      var list=selectAll(".list");
      var i;
      for(var j=0;j<list.length;j++){
        list[j].remove();    
        delete1.remove();
      }

      ToDo=data.val();
      // console.log(ToDo);
      
      var key=Object.keys(ToDo);
      //console.log(key);
      
      for( i=0;i<key.length;i++){
        var k=key[i];
        var task1=ToDo[k].taskName;
        // console.log(task1);
        console.log(task1)
        var display=createElement("li",task1);
        display.class("list");
       // console.log(display);

        //for delete button
         var delete1 =createButton("DELETE");
    delete1.mousePressed(()=>{
      database.ref("ToDo/"+k).remove();
       
      

     // console.log(keys[i]);
   }) 
         
      }

  });
  
   
}
 function clearTasks(){
 
 }
