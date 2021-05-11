gdjs.IntroCode = {};
gdjs.IntroCode.GDRobotObjects1= [];
gdjs.IntroCode.GDRobotObjects2= [];
gdjs.IntroCode.GDRobotObjects3= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDTitleObjects3= [];
gdjs.IntroCode.GDObjObjects1= [];
gdjs.IntroCode.GDObjObjects2= [];
gdjs.IntroCode.GDObjObjects3= [];
gdjs.IntroCode.GDRocketObjects1= [];
gdjs.IntroCode.GDRocketObjects2= [];
gdjs.IntroCode.GDRocketObjects3= [];
gdjs.IntroCode.GDpressObjects1= [];
gdjs.IntroCode.GDpressObjects2= [];
gdjs.IntroCode.GDpressObjects3= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sci-Fi Main Menu Screen Theme (Game Sound Effect).mp3", 0, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.IntroCode.eventsList0(runtimeScene);
}


{


{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDRobotObjects1.length = 0;
gdjs.IntroCode.GDRobotObjects2.length = 0;
gdjs.IntroCode.GDRobotObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDObjObjects1.length = 0;
gdjs.IntroCode.GDObjObjects2.length = 0;
gdjs.IntroCode.GDObjObjects3.length = 0;
gdjs.IntroCode.GDRocketObjects1.length = 0;
gdjs.IntroCode.GDRocketObjects2.length = 0;
gdjs.IntroCode.GDRocketObjects3.length = 0;
gdjs.IntroCode.GDpressObjects1.length = 0;
gdjs.IntroCode.GDpressObjects2.length = 0;
gdjs.IntroCode.GDpressObjects3.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
