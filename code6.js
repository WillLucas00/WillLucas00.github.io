gdjs.placeholderLevelCode = {};
gdjs.placeholderLevelCode.GDtextObjects1= [];
gdjs.placeholderLevelCode.GDtextObjects2= [];

gdjs.placeholderLevelCode.conditionTrue_0 = {val:false};
gdjs.placeholderLevelCode.condition0IsTrue_0 = {val:false};
gdjs.placeholderLevelCode.condition1IsTrue_0 = {val:false};


gdjs.placeholderLevelCode.eventsList0 = function(runtimeScene) {

{


gdjs.placeholderLevelCode.condition0IsTrue_0.val = false;
{
gdjs.placeholderLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.placeholderLevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.placeholderLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.placeholderLevelCode.GDtextObjects1.length = 0;
gdjs.placeholderLevelCode.GDtextObjects2.length = 0;

gdjs.placeholderLevelCode.eventsList0(runtimeScene);
return;

}

gdjs['placeholderLevelCode'] = gdjs.placeholderLevelCode;
