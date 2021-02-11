var cm = new CodeMirror.fromTextArea(document.getElementById("editor"), {
  autoRefresh:true,
  scrollbarStyle:'overlay',
  lineNumbers: true,
  tabSize: 4,
  mode:'scheme',
  theme:'night',
  gutters: ["CodeMirror-linenumbers", "breakpoints"],
  autoCloseBrackets: true,
  matchBrackets:true,
  styleActiveLine: {nonEmpty: true},
  onChange: function (cm) {
    window.max.outlet.apply(window.max, ["toSave"].concat(cm.getValue()));
},
  styleActiveSelected: true,
  extraKeys: {
    "Esc": function(cm) {
      cm.setOption("fullScreen", !cm.getOption("fullScreen"));
    },
    "Alt-Enter": () => {
      var cur = cm.getCursor().line;
      var arr = cm.getValue().split("\n");
      var txt = '', start = 0, stop = 0;
      for (i = 0; i < arr.length; i++) {
          t = arr[i].trim();
          len = t.length;
          if (!start) {
              if (!len) txt = '';
              if (i == cur) start = 1;
          }
          if (!stop) {
              if (start && !len) stop = 1;
              else if (len) txt += t + "\n";
          }
      }
      getBlock(cur, arr);
      window.max.outlet.apply(window.max, ["toMax"].concat(txt)) //! send the content of txt to the outlet of JWEB
    }
  }
});




// set the size of the editor
cm.setSize(600, 600);


function getBlock(pos , arr){
  currentPos = pos;
  array = arr;
  out = [];
  while(array[currentPos] !== "" && currentPos >= 0){
    currentPos --;
  }
  out.push(currentPos+1);
  currentPos = pos;
  while(array[currentPos] !== "" && array[currentPos] !== undefined){
    currentPos ++;
  }
  out.push(currentPos-1);
  for (var i =out[0]; i<=out[1];i++){
    blink(i);
  }
}


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
