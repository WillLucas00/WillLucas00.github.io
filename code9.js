gdjs.End_32GameCode = {};
gdjs.End_32GameCode.GDRocketObjects1= [];
gdjs.End_32GameCode.GDRocketObjects2= [];
gdjs.End_32GameCode.GDRocketObjects3= [];
gdjs.End_32GameCode.GDPlanetObjects1= [];
gdjs.End_32GameCode.GDPlanetObjects2= [];
gdjs.End_32GameCode.GDPlanetObjects3= [];
gdjs.End_32GameCode.GDmadeHomeObjects1= [];
gdjs.End_32GameCode.GDmadeHomeObjects2= [];
gdjs.End_32GameCode.GDmadeHomeObjects3= [];
gdjs.End_32GameCode.GDReturnObjects1= [];
gdjs.End_32GameCode.GDReturnObjects2= [];
gdjs.End_32GameCode.GDReturnObjects3= [];
gdjs.End_32GameCode.GDRobotsObjects1= [];
gdjs.End_32GameCode.GDRobotsObjects2= [];
gdjs.End_32GameCode.GDRobotsObjects3= [];

gdjs.End_32GameCode.conditionTrue_0 = {val:false};
gdjs.End_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.End_32GameCode.condition1IsTrue_0 = {val:false};


gdjs.End_32GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.End_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.End_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.End_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.End_32GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.End_32GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.End_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.End_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Final Fantasy VII - Victory Fanfare [HQ].mp3", 0, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.End_32GameCode.eventsList0(runtimeScene);
}


{


gdjs.End_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.End_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.End_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}}

}


};

gdjs.End_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32GameCode.GDRocketObjects1.length = 0;
gdjs.End_32GameCode.GDRocketObjects2.length = 0;
gdjs.End_32GameCode.GDRocketObjects3.length = 0;
gdjs.End_32GameCode.GDPlanetObjects1.length = 0;
gdjs.End_32GameCode.GDPlanetObjects2.length = 0;
gdjs.End_32GameCode.GDPlanetObjects3.length = 0;
gdjs.End_32GameCode.GDmadeHomeObjects1.length = 0;
gdjs.End_32GameCode.GDmadeHomeObjects2.length = 0;
gdjs.End_32GameCode.GDmadeHomeObjects3.length = 0;
gdjs.End_32GameCode.GDReturnObjects1.length = 0;
gdjs.End_32GameCode.GDReturnObjects2.length = 0;
gdjs.End_32GameCode.GDReturnObjects3.length = 0;
gdjs.End_32GameCode.GDRobotsObjects1.length = 0;
gdjs.End_32GameCode.GDRobotsObjects2.length = 0;
gdjs.End_32GameCode.GDRobotsObjects3.length = 0;

gdjs.End_32GameCode.eventsList1(runtimeScene);
return;

}

gdjs['End_32GameCode'] = gdjs.End_32GameCode;
