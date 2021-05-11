gdjs.VictoryCode = {};
gdjs.VictoryCode.GDTextObjects1= [];
gdjs.VictoryCode.GDTextObjects2= [];
gdjs.VictoryCode.GDTextObjects3= [];
gdjs.VictoryCode.GDrobotObjects1= [];
gdjs.VictoryCode.GDrobotObjects2= [];
gdjs.VictoryCode.GDrobotObjects3= [];

gdjs.VictoryCode.conditionTrue_0 = {val:false};
gdjs.VictoryCode.condition0IsTrue_0 = {val:false};
gdjs.VictoryCode.condition1IsTrue_0 = {val:false};


gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.VictoryCode.eventsList1 = function(runtimeScene) {

{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robot"), gdjs.VictoryCode.GDrobotObjects1);
{for(var i = 0, len = gdjs.VictoryCode.GDrobotObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDrobotObjects1[i].setAnimationName("cheer");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sci-Fi Main Menu Screen Theme (Game Sound Effect).mp3", 0, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.VictoryCode.eventsList0(runtimeScene);
}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDTextObjects1.length = 0;
gdjs.VictoryCode.GDTextObjects2.length = 0;
gdjs.VictoryCode.GDTextObjects3.length = 0;
gdjs.VictoryCode.GDrobotObjects1.length = 0;
gdjs.VictoryCode.GDrobotObjects2.length = 0;
gdjs.VictoryCode.GDrobotObjects3.length = 0;

gdjs.VictoryCode.eventsList1(runtimeScene);
return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
