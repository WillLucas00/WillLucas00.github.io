gdjs.Level2Code = {};
gdjs.Level2Code.GDinvisibleWallObjects1= [];
gdjs.Level2Code.GDinvisibleWallObjects2= [];
gdjs.Level2Code.GDinvisibleWallObjects3= [];
gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDPlayerObjects3= [];
gdjs.Level2Code.GDrailObjects1= [];
gdjs.Level2Code.GDrailObjects2= [];
gdjs.Level2Code.GDrailObjects3= [];
gdjs.Level2Code.GDspikesObjects1= [];
gdjs.Level2Code.GDspikesObjects2= [];
gdjs.Level2Code.GDspikesObjects3= [];
gdjs.Level2Code.GDcogObjects1= [];
gdjs.Level2Code.GDcogObjects2= [];
gdjs.Level2Code.GDcogObjects3= [];
gdjs.Level2Code.GDhookObjects1= [];
gdjs.Level2Code.GDhookObjects2= [];
gdjs.Level2Code.GDhookObjects3= [];
gdjs.Level2Code.GDTimeElapsedObjects1= [];
gdjs.Level2Code.GDTimeElapsedObjects2= [];
gdjs.Level2Code.GDTimeElapsedObjects3= [];
gdjs.Level2Code.GDGreenFlagObjects1= [];
gdjs.Level2Code.GDGreenFlagObjects2= [];
gdjs.Level2Code.GDGreenFlagObjects3= [];
gdjs.Level2Code.GDscoreObjects1= [];
gdjs.Level2Code.GDscoreObjects2= [];
gdjs.Level2Code.GDscoreObjects3= [];
gdjs.Level2Code.GDhookPointObjects1= [];
gdjs.Level2Code.GDhookPointObjects2= [];
gdjs.Level2Code.GDhookPointObjects3= [];
gdjs.Level2Code.GDObjectsObjects1= [];
gdjs.Level2Code.GDObjectsObjects2= [];
gdjs.Level2Code.GDObjectsObjects3= [];
gdjs.Level2Code.GDlaserObjects1= [];
gdjs.Level2Code.GDlaserObjects2= [];
gdjs.Level2Code.GDlaserObjects3= [];
gdjs.Level2Code.GDTimerObjects1= [];
gdjs.Level2Code.GDTimerObjects2= [];
gdjs.Level2Code.GDTimerObjects3= [];
gdjs.Level2Code.GDgrassObjects1= [];
gdjs.Level2Code.GDgrassObjects2= [];
gdjs.Level2Code.GDgrassObjects3= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};
gdjs.Level2Code.condition3IsTrue_1 = {val:false};


gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDinvisibleWallObjects2ObjectsGDgdjs_46Level2Code_46GDPlayerObjects2ObjectsGDgdjs_46Level2Code_46GDrailObjects2ObjectsGDgdjs_46Level2Code_46GDspikesObjects2ObjectsGDgdjs_46Level2Code_46GDcogObjects2ObjectsGDgdjs_46Level2Code_46GDhookObjects2ObjectsGDgdjs_46Level2Code_46GDGreenFlagObjects2ObjectsGDgdjs_46Level2Code_46GDscoreObjects2ObjectsGDgdjs_46Level2Code_46GDhookPointObjects2ObjectsGDgdjs_46Level2Code_46GDlaserObjects2ObjectsGDgdjs_46Level2Code_46GDTimerObjects2ObjectsGDgdjs_46Level2Code_46GDgrassObjects2Objects = Hashtable.newFrom({"invisibleWall": gdjs.Level2Code.GDinvisibleWallObjects2, "Player": gdjs.Level2Code.GDPlayerObjects2, "rail": gdjs.Level2Code.GDrailObjects2, "spikes": gdjs.Level2Code.GDspikesObjects2, "cog": gdjs.Level2Code.GDcogObjects2, "hook": gdjs.Level2Code.GDhookObjects2, "GreenFlag": gdjs.Level2Code.GDGreenFlagObjects2, "score": gdjs.Level2Code.GDscoreObjects2, "hookPoint": gdjs.Level2Code.GDhookPointObjects2, "laser": gdjs.Level2Code.GDlaserObjects2, "Timer": gdjs.Level2Code.GDTimerObjects2, "grass": gdjs.Level2Code.GDgrassObjects2});gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Objects"), gdjs.Level2Code.GDObjectsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimeElapsed"), gdjs.Level2Code.GDTimeElapsedObjects2);
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level2Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDObjectsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level2Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDTimeElapsedObjects2[i].hide();
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}

}


{


{
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}

}


};gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.Level2Code.GDGreenFlagObjects2);
gdjs.copyArray(runtimeScene.getObjects("Objects"), gdjs.Level2Code.GDObjectsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimeElapsed"), gdjs.Level2Code.GDTimeElapsedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level2Code.GDTimerObjects2);
gdjs.copyArray(runtimeScene.getObjects("cog"), gdjs.Level2Code.GDcogObjects2);
gdjs.copyArray(runtimeScene.getObjects("grass"), gdjs.Level2Code.GDgrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level2Code.GDhookObjects2);
gdjs.copyArray(runtimeScene.getObjects("hookPoint"), gdjs.Level2Code.GDhookPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("invisibleWall"), gdjs.Level2Code.GDinvisibleWallObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level2Code.GDlaserObjects2);
gdjs.copyArray(runtimeScene.getObjects("rail"), gdjs.Level2Code.GDrailObjects2);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Level2Code.GDscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.Level2Code.GDspikesObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDObjectsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDTimeElapsedObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDObjectsObjects2[i].setString("Number Of Objects in scene: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.pickedObjectsCount(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDinvisibleWallObjects2ObjectsGDgdjs_46Level2Code_46GDPlayerObjects2ObjectsGDgdjs_46Level2Code_46GDrailObjects2ObjectsGDgdjs_46Level2Code_46GDspikesObjects2ObjectsGDgdjs_46Level2Code_46GDcogObjects2ObjectsGDgdjs_46Level2Code_46GDhookObjects2ObjectsGDgdjs_46Level2Code_46GDGreenFlagObjects2ObjectsGDgdjs_46Level2Code_46GDscoreObjects2ObjectsGDgdjs_46Level2Code_46GDhookPointObjects2ObjectsGDgdjs_46Level2Code_46GDlaserObjects2ObjectsGDgdjs_46Level2Code_46GDTimerObjects2ObjectsGDgdjs_46Level2Code_46GDgrassObjects2Objects)));
}
}{for(var i = 0, len = gdjs.Level2Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDTimeElapsedObjects2[i].setString("Time elapsed: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))));
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Objects"), gdjs.Level2Code.GDObjectsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimeElapsed"), gdjs.Level2Code.GDTimeElapsedObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDTimeElapsedObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level2Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDObjectsObjects2[i].hide();
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9589212);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.Level2Code.GDhookObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.Level2Code.GDhookObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.Level2Code.GDhookObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects1Objects = Hashtable.newFrom({"hook": gdjs.Level2Code.GDhookObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookPointObjects1Objects = Hashtable.newFrom({"hookPoint": gdjs.Level2Code.GDhookPointObjects1});gdjs.Level2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getVariableString(gdjs.Level2Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "false" ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition2IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9531148);
}
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
gdjs.Level2Code.GDhookObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects2Objects, (( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointY("Chest")), "");
}{for(var i = 0, len = gdjs.Level2Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 800, 1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].returnVariable(gdjs.Level2Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level2Code.GDhookObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, 400, true);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
/* Reuse gdjs.Level2Code.GDhookObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects2[i].addForceTowardPosition((( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointY("Chest")), 400, 1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects2[i].returnVariable(gdjs.Level2Code.GDhookObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level2Code.GDhookObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDhookObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDhookObjects2[i].getVariableString(gdjs.Level2Code.GDhookObjects2[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDhookObjects2[k] = gdjs.Level2Code.GDhookObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDhookObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
/* Reuse gdjs.Level2Code.GDhookObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects2[i].addForceTowardPosition((( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointY("Chest")), 800, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level2Code.GDhookObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects2Objects, 70, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDhookObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDhookObjects2[i].getVariableString(gdjs.Level2Code.GDhookObjects2[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDhookObjects2[k] = gdjs.Level2Code.GDhookObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDhookObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
/* Reuse gdjs.Level2Code.GDhookObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].returnVariable(gdjs.Level2Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("false");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level2Code.GDhookObjects1);
gdjs.copyArray(runtimeScene.getObjects("hookPoint"), gdjs.Level2Code.GDhookPointObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhookPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
/* Reuse gdjs.Level2Code.GDhookObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].addForceTowardObject((gdjs.Level2Code.GDhookObjects1.length !== 0 ? gdjs.Level2Code.GDhookObjects1[0] : null), 800, 0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDhookObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level2Code.GDhookObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDhookObjects1[i].returnVariable(gdjs.Level2Code.GDhookObjects1[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


};gdjs.Level2Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.Level2Code.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Level2Code.GDscoreObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDscoreObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDscoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level2Code.GDPlayerObjects2.length !== 0 ? gdjs.Level2Code.GDPlayerObjects2[0] : null), true, "", 0);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("invisibleWall"), gdjs.Level2Code.GDinvisibleWallObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.Level2Code.GDinvisibleWallObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDinvisibleWallObjects2[i].hide();
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level2Code.GDTimerObjects2);
{runtimeScene.getVariables().getFromIndex(1).setNumber(100);
}{for(var i = 0, len = gdjs.Level2Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDTimerObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Time");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level2Code.GDTimerObjects2);
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.Level2Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDTimerObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDcogObjects2Objects = Hashtable.newFrom({"cog": gdjs.Level2Code.GDcogObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.Level2Code.GDlaserObjects2});gdjs.Level2Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "true";
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ES_Laser Shot Synth 1 - SFX Producer.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.Level2Code.GDlaserObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.Level2Code.GDlaserObjects2});gdjs.Level2Code.mapOf = Hashtable.newFrom({});gdjs.Level2Code.eventsList6 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playSound(runtimeScene, "ES_Zombie Growl Pain 4 - SFX Producer.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDspikesObjects2Objects = Hashtable.newFrom({"spikes": gdjs.Level2Code.GDspikesObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.Level2Code.GDGreenFlagObjects1});gdjs.Level2Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 3;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.Level2Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Climb");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Falling");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("cog"), gdjs.Level2Code.GDcogObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDcogObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDcogObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDcogObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDcogObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "firerate");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.Level2Code.GDlaserObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDlaserObjects2Objects, (( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointX("Eye")), (( gdjs.Level2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerObjects2[0].getPointY("Eye")), "");
}{for(var i = 0, len = gdjs.Level2Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDlaserObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 800, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.Level2Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDlaserObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level2Code.GDlaserObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDlaserObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, 400, true);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDlaserObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level2Code.GDlaserObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDlaserObjects2 */
{}{for(var i = 0, len = gdjs.Level2Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}{}
{ //Subevents
gdjs.Level2Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.Level2Code.GDspikesObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDspikesObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "false";
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.Level2Code.GDGreenFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory", false);
}
{ //Subevents
gdjs.Level2Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Level2Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level2Code.eventsList1(runtimeScene);
}


{


gdjs.Level2Code.eventsList2(runtimeScene);
}


{


gdjs.Level2Code.eventsList3(runtimeScene);
}


{


gdjs.Level2Code.eventsList4(runtimeScene);
}


{


gdjs.Level2Code.eventsList8(runtimeScene);
}


{


{
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDinvisibleWallObjects1.length = 0;
gdjs.Level2Code.GDinvisibleWallObjects2.length = 0;
gdjs.Level2Code.GDinvisibleWallObjects3.length = 0;
gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDrailObjects1.length = 0;
gdjs.Level2Code.GDrailObjects2.length = 0;
gdjs.Level2Code.GDrailObjects3.length = 0;
gdjs.Level2Code.GDspikesObjects1.length = 0;
gdjs.Level2Code.GDspikesObjects2.length = 0;
gdjs.Level2Code.GDspikesObjects3.length = 0;
gdjs.Level2Code.GDcogObjects1.length = 0;
gdjs.Level2Code.GDcogObjects2.length = 0;
gdjs.Level2Code.GDcogObjects3.length = 0;
gdjs.Level2Code.GDhookObjects1.length = 0;
gdjs.Level2Code.GDhookObjects2.length = 0;
gdjs.Level2Code.GDhookObjects3.length = 0;
gdjs.Level2Code.GDTimeElapsedObjects1.length = 0;
gdjs.Level2Code.GDTimeElapsedObjects2.length = 0;
gdjs.Level2Code.GDTimeElapsedObjects3.length = 0;
gdjs.Level2Code.GDGreenFlagObjects1.length = 0;
gdjs.Level2Code.GDGreenFlagObjects2.length = 0;
gdjs.Level2Code.GDGreenFlagObjects3.length = 0;
gdjs.Level2Code.GDscoreObjects1.length = 0;
gdjs.Level2Code.GDscoreObjects2.length = 0;
gdjs.Level2Code.GDscoreObjects3.length = 0;
gdjs.Level2Code.GDhookPointObjects1.length = 0;
gdjs.Level2Code.GDhookPointObjects2.length = 0;
gdjs.Level2Code.GDhookPointObjects3.length = 0;
gdjs.Level2Code.GDObjectsObjects1.length = 0;
gdjs.Level2Code.GDObjectsObjects2.length = 0;
gdjs.Level2Code.GDObjectsObjects3.length = 0;
gdjs.Level2Code.GDlaserObjects1.length = 0;
gdjs.Level2Code.GDlaserObjects2.length = 0;
gdjs.Level2Code.GDlaserObjects3.length = 0;
gdjs.Level2Code.GDTimerObjects1.length = 0;
gdjs.Level2Code.GDTimerObjects2.length = 0;
gdjs.Level2Code.GDTimerObjects3.length = 0;
gdjs.Level2Code.GDgrassObjects1.length = 0;
gdjs.Level2Code.GDgrassObjects2.length = 0;
gdjs.Level2Code.GDgrassObjects3.length = 0;

gdjs.Level2Code.eventsList9(runtimeScene);
return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
