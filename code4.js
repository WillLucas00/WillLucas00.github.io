gdjs.DeathCode = {};
gdjs.DeathCode.GDTextObjects1= [];
gdjs.DeathCode.GDTextObjects2= [];
gdjs.DeathCode.GDTextObjects3= [];
gdjs.DeathCode.GDrobotObjects1= [];
gdjs.DeathCode.GDrobotObjects2= [];
gdjs.DeathCode.GDrobotObjects3= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.DeathCode.eventsList1 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sci-Fi Main Menu Screen Theme (Game Sound Effect).mp3", 0, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.DeathCode.eventsList0(runtimeScene);
}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDTextObjects1.length = 0;
gdjs.DeathCode.GDTextObjects2.length = 0;
gdjs.DeathCode.GDTextObjects3.length = 0;
gdjs.DeathCode.GDrobotObjects1.length = 0;
gdjs.DeathCode.GDrobotObjects2.length = 0;
gdjs.DeathCode.GDrobotObjects3.length = 0;

gdjs.DeathCode.eventsList1(runtimeScene);
return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
