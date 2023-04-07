function setText(){
  print(coreString);
  var enteredText = coreString;
  var kt0 = enteredText;
  var kt1 = kt0.replace(/(\r\n|\n|\r)/gm, "");
  keyArray = kt1.split(" ");

  if(keyArray == null){
    keyArray = " ";
  }

  randomInsert();

  mainStory = new Story();
}

function randomInsert(){
  // insert for images - mid
  var r1 = 10;
  for(var r = 0; r<r1; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X1");
  }

  // insert for images - small
  var r2 = 2;
  for(var r = 0; r<r2; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X2");
  }

  // insert for images - tall
  var r3 = 2;
  for(var r = 0; r<r3; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X3");
  }

  // insert for mumbai Type
  var r4 = 1;
  for(var r = 0; r<r4; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X4");
  }

  // insert for drawings
  var r5 = 3;
  for(var r = 0; r<r5; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X5");
  }

  // insert for gifs
  var r6 = 2;
  for(var r = 0; r<r6; r++){
    var insertPoint = round(random(keyArray.length));

    keyArray.splice(insertPoint, 0, "X6");
  }
}

function changeAnimSet(val){
  animSet = val;

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setSliderOne(val){
  sliderA = map(val, 0, 100, 1, 0);

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setSliderTwo(val){
  sliderB = map(val, 0, 100, 0.2, 3);

  for(var n = 0; n < mainStory.entries.length; n++){
    mainStory.entries[n].setAnimSets();
  }
}

function setExportFormat(val){
  exportFormat = val;
}

function setExportRatio(val){
  exportRatio = val;
}

function setExportInvert(val){
  exportInvert = val;

  if(exportInvert == 0){
    bkgdColor = color('#000000');
    foreColor = color('#ffffff');
    gen_cs = gen_csWh;
    gen_title = gen_titleWh;
    gen_arrow = gen_arrowWh;
    gen_apple = gen_appleWh;
  } else if(exportInvert == 1){
    bkgdColor = color('#ffffff');
    foreColor = color('#000000');
    gen_cs = gen_csBl;
    gen_title = gen_titleBl;
    gen_arrow = gen_arrowBl;
    gen_apple = gen_appleBl;
  } else if(exportInvert == 2){
    bkgdColor = color('#000000');
    foreColor = color('#ffffff');
    gen_cs = gen_csWh;
    gen_title = gen_titleWh;
    gen_arrow = gen_arrowWh;
    gen_apple = gen_appleWh;

  }
}

function exportCore(){
  // pgGrad[pgGradSelected] = loadImage("resources/grads/ap_gradientArtboard " + pgGradSelected + ".png");

  if(exportRatio == 0){
    myCanvas = resizeCanvas(1080,1080);
  } else {
    myCanvas = resizeCanvas(1080,1920);
  }
  
  if(exportFormat == 0){
    saveStaticOn = true;
  } else {
    saveMotionOn = true;
    setRecorder();
  }
}

function setRecorder(){
  cwidth = int(width/2) * 2;
  cheight = int(height/2) * 2;

  numFrames = round(map(sliderA, 0, 1, 60, 300));

  pixelDensity(1);

  HME.createH264MP4Encoder().then(enc => {
    encoder = enc;
    encoder.outputFilename = 'TodayAtApple_CreateStory_w' + makerName;
    encoder.pixelDensity = 2;
    encoder.width = cwidth * 1;
    encoder.height = cheight * 1;
    encoder.frameRate = frate;
    encoder.kbps = 50000; // video quality
    encoder.groupOfPictures = 5; // lower if you have fast actions.
    encoder.initialize();
  })
}