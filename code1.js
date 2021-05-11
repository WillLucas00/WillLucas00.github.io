gdjs.StartCode = {};
gdjs.StartCode.GDmovementObjects1= [];
gdjs.StartCode.GDmovementObjects2= [];
gdjs.StartCode.GDmovementObjects3= [];
gdjs.StartCode.GDrobotWalkObjects1= [];
gdjs.StartCode.GDrobotWalkObjects2= [];
gdjs.StartCode.GDrobotWalkObjects3= [];
gdjs.StartCode.GDWeaponObjects1= [];
gdjs.StartCode.GDWeaponObjects2= [];
gdjs.StartCode.GDWeaponObjects3= [];
gdjs.StartCode.GDrobotShootObjects1= [];
gdjs.StartCode.GDrobotShootObjects2= [];
gdjs.StartCode.GDrobotShootObjects3= [];
gdjs.StartCode.GDlaserObjects1= [];
gdjs.StartCode.GDlaserObjects2= [];
gdjs.StartCode.GDlaserObjects3= [];
gdjs.StartCode.GDzombieObjects1= [];
gdjs.StartCode.GDzombieObjects2= [];
gdjs.StartCode.GDzombieObjects3= [];
gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDStartObjects2= [];
gdjs.StartCode.GDStartObjects3= [];
gdjs.StartCode.GDDevObjects1= [];
gdjs.StartCode.GDDevObjects2= [];
gdjs.StartCode.GDDevObjects3= [];
gdjs.StartCode.GDGrappleObjects1= [];
gdjs.StartCode.GDGrappleObjects2= [];
gdjs.StartCode.GDGrappleObjects3= [];
gdjs.StartCode.GDhookObjects1= [];
gdjs.StartCode.GDhookObjects2= [];
gdjs.StartCode.GDhookObjects3= [];
gdjs.StartCode.GDhookPointObjects1= [];
gdjs.StartCode.GDhookPointObjects2= [];
gdjs.StartCode.GDhookPointObjects3= [];
gdjs.StartCode.GDSettingsObjects1= [];
gdjs.StartCode.GDSettingsObjects2= [];
gdjs.StartCode.GDSettingsObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.StartCode.GDlaserObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.StartCode.GDlaserObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDzombieObjects1Objects = Hashtable.newFrom({"zombie": gdjs.StartCode.GDzombieObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.StartCode.GDSettingsObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("robotWalk"), gdjs.StartCode.GDrobotWalkObjects1);
{for(var i = 0, len = gdjs.StartCode.GDrobotWalkObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDrobotWalkObjects1[i].setAnimationName("walk");
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "firerate");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotShoot"), gdjs.StartCode.GDrobotShootObjects1);
gdjs.copyArray(runtimeScene.getObjects("zombie"), gdjs.StartCode.GDzombieObjects1);
gdjs.StartCode.GDlaserObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDlaserObjects1Objects, (( gdjs.StartCode.GDrobotShootObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDrobotShootObjects1[0].getPointX("Eye")), (( gdjs.StartCode.GDrobotShootObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDrobotShootObjects1[0].getPointY("Eye")), "");
}{for(var i = 0, len = gdjs.StartCode.GDlaserObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDlaserObjects1[i].addForceTowardPosition((( gdjs.StartCode.GDzombieObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDzombieObjects1[0].getPointX("Target")), (( gdjs.StartCode.GDzombieObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDzombieObjects1[0].getPointY("Target")), 800, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.StartCode.GDlaserObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDlaserObjects1[i].rotateTowardPosition((( gdjs.StartCode.GDzombieObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDzombieObjects1[0].getPointX("Target")), (( gdjs.StartCode.GDzombieObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDzombieObjects1[0].getPointY("Target")), 0, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.StartCode.GDlaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("zombie"), gdjs.StartCode.GDzombieObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDlaserObjects1Objects, gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDzombieObjects1Objects, false, runtimeScene, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDlaserObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDlaserObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDlaserObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dev", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.StartCode.GDSettingsObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDSettingsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{


gdjs.StartCode.eventsList0(runtimeScene);
}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDmovementObjects1.length = 0;
gdjs.StartCode.GDmovementObjects2.length = 0;
gdjs.StartCode.GDmovementObjects3.length = 0;
gdjs.StartCode.GDrobotWalkObjects1.length = 0;
gdjs.StartCode.GDrobotWalkObjects2.length = 0;
gdjs.StartCode.GDrobotWalkObjects3.length = 0;
gdjs.StartCode.GDWeaponObjects1.length = 0;
gdjs.StartCode.GDWeaponObjects2.length = 0;
gdjs.StartCode.GDWeaponObjects3.length = 0;
gdjs.StartCode.GDrobotShootObjects1.length = 0;
gdjs.StartCode.GDrobotShootObjects2.length = 0;
gdjs.StartCode.GDrobotShootObjects3.length = 0;
gdjs.StartCode.GDlaserObjects1.length = 0;
gdjs.StartCode.GDlaserObjects2.length = 0;
gdjs.StartCode.GDlaserObjects3.length = 0;
gdjs.StartCode.GDzombieObjects1.length = 0;
gdjs.StartCode.GDzombieObjects2.length = 0;
gdjs.StartCode.GDzombieObjects3.length = 0;
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDStartObjects3.length = 0;
gdjs.StartCode.GDDevObjects1.length = 0;
gdjs.StartCode.GDDevObjects2.length = 0;
gdjs.StartCode.GDDevObjects3.length = 0;
gdjs.StartCode.GDGrappleObjects1.length = 0;
gdjs.StartCode.GDGrappleObjects2.length = 0;
gdjs.StartCode.GDGrappleObjects3.length = 0;
gdjs.StartCode.GDhookObjects1.length = 0;
gdjs.StartCode.GDhookObjects2.length = 0;
gdjs.StartCode.GDhookObjects3.length = 0;
gdjs.StartCode.GDhookPointObjects1.length = 0;
gdjs.StartCode.GDhookPointObjects2.length = 0;
gdjs.StartCode.GDhookPointObjects3.length = 0;
gdjs.StartCode.GDSettingsObjects1.length = 0;
gdjs.StartCode.GDSettingsObjects2.length = 0;
gdjs.StartCode.GDSettingsObjects3.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
