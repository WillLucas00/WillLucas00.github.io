gdjs.placeholderLevelCode = {};
gdjs.placeholderLevelCode.GDtextObjects1= [];
gdjs.placeholderLevelCode.GDtextObjects2= [];
gdjs.placeholderLevelCode.GDtextObjects3= [];

gdjs.placeholderLevelCode.conditionTrue_0 = {val:false};
gdjs.placeholderLevelCode.condition0IsTrue_0 = {val:false};
gdjs.placeholderLevelCode.condition1IsTrue_0 = {val:false};


gdjs.placeholderLevelCode.eventsList0 = function(runtimeScene) {

{


gdjs.placeholderLevelCode.condition0IsTrue_0.val = false;
{
gdjs.placeholderLevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.placeholderLevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.placeholderLevelCode.condition0IsTrue_0.val = false;
{
gdjs.placeholderLevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.placeholderLevelCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.placeholderLevelCode.eventsList1 = function(runtimeScene) {

{


gdjs.placeholderLevelCode.condition0IsTrue_0.val = false;
{
gdjs.placeholderLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.placeholderLevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}}

}


{


gdjs.placeholderLevelCode.eventsList0(runtimeScene);
}


{


{
}

}


};

gdjs.placeholderLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.placeholderLevelCode.GDtextObjects1.length = 0;
gdjs.placeholderLevelCode.GDtextObjects2.length = 0;
gdjs.placeholderLevelCode.GDtextObjects3.length = 0;

gdjs.placeholderLevelCode.eventsList1(runtimeScene);
return;

}

gdjs['placeholderLevelCode'] = gdjs.placeholderLevelCode;
