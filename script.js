var cm = new CodeMirror.fromTextArea(document.getElementById("editor"), {
  autoRefresh:true,
  scrollbarStyle:'overlay',
  lineNumbers: true,
  tabSize: 4,
  mode:'scheme',
  theme:'panda-syntax',
  gutters: ["CodeMirror-linenumbers", "breakpoints"],
  autoCloseBrackets: true,
  matchBrackets:true,
  styleActiveLine: {nonEmpty: true},
  onChange: function (cm) {
    window.max.outlet.apply(window.max, ["toSave"].concat(cm.getValue()));
},
  styleActiveSelected: true,
  extraKeys: {
    "Alt-Enter": () => {

      var cur = cm.getCursor().line + 1;
      var curCh = cm.getCursor().ch;
      var arr = cm.getValue().split("\n");

      var expressions = [];
      var counter = 0;
      var startLine, endLine, startChar, endChar;
      arr.forEach((item, index) => {
        for (var i = 0; i<item.length;i++){
          if (item[i] == ";"){
            break;
          }else{


            if (item[i] == "("){
              if(counter == 0){
                startLine= index+1 ;
                startChar =  i ;
              }

                counter++;


            }
            else if (item[i] == ")"){
              counter--;
              if (counter == 0){
                endLine= index+1 ;
                endChar =  i+1;
                var newExp = {startLine: startLine,
                                  startChar: startChar,
                                  endLine: endLine,
                                  endChar: endChar};
                expressions.push(newExp);
              }
            }
          }
        }


      });

      var evalOut = "";
      expressions.forEach((item, i) => {
        if (cur >= item.startLine && cur <= item.endLine){
            for (var k = expressions[i].startLine-1;k<expressions[i].endLine;k++){

              evalOut += arr[k] + "\n";
            }
            for (var j = item.startLine-1; j<item.endLine; j++){
              blink(j);
            }

        }
      });


     window.max.outlet.apply(window.max, ["toMax"].concat(evalOut)) //! send the content of txt to the outlet of JWEB
    }
  }
});

parinferCodeMirror.init(cm, 'smart');




// set the size of the editor
cm.setSize(600, 600);


cm.setOption("fullScreen", !cm.getOption("fullScreen"));


const timer = ms => new Promise(res => setTimeout(res, ms))

async function blink (n) {
  for (var i = 0; i < 2; i++) {
    if (i==0){cm.addLineClass(n, 'wrap', 'eval');}else{cm.removeLineClass(n, 'wrap', 'eval');}
    await timer(500);
  }
}







   (function() {
     window.max.bindInlet("textIn", setValue);
     window.max.bindInlet("textOut", getValue);

     initialize();



function setValue(txt){
  cm.setValue(txt);
}
function getValue(){
    window.max.outlet.apply(window.max, ["toSave"].concat(cm.getValue()));
}

   })();
