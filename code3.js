gdjs.DeathCode = {};
gdjs.DeathCode.GDTextObjects1= [];
gdjs.DeathCode.GDTextObjects2= [];
gdjs.DeathCode.GDrobotObjects1= [];
gdjs.DeathCode.GDrobotObjects2= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDTextObjects1.length = 0;
gdjs.DeathCode.GDTextObjects2.length = 0;
gdjs.DeathCode.GDrobotObjects1.length = 0;
gdjs.DeathCode.GDrobotObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
