gdjs.Level1Code = {};
gdjs.Level1Code.GDgrassObjects1= [];
gdjs.Level1Code.GDgrassObjects2= [];
gdjs.Level1Code.GDgrassObjects3= [];
gdjs.Level1Code.GDdirtObjects1= [];
gdjs.Level1Code.GDdirtObjects2= [];
gdjs.Level1Code.GDdirtObjects3= [];
gdjs.Level1Code.GDladderObjects1= [];
gdjs.Level1Code.GDladderObjects2= [];
gdjs.Level1Code.GDladderObjects3= [];
gdjs.Level1Code.GDrailObjects1= [];
gdjs.Level1Code.GDrailObjects2= [];
gdjs.Level1Code.GDrailObjects3= [];
gdjs.Level1Code.GDEnemyObjects1= [];
gdjs.Level1Code.GDEnemyObjects2= [];
gdjs.Level1Code.GDEnemyObjects3= [];
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDPlayerObjects3= [];
gdjs.Level1Code.GDscoreObjects1= [];
gdjs.Level1Code.GDscoreObjects2= [];
gdjs.Level1Code.GDscoreObjects3= [];
gdjs.Level1Code.GDspikesObjects1= [];
gdjs.Level1Code.GDspikesObjects2= [];
gdjs.Level1Code.GDspikesObjects3= [];
gdjs.Level1Code.GDcogObjects1= [];
gdjs.Level1Code.GDcogObjects2= [];
gdjs.Level1Code.GDcogObjects3= [];
gdjs.Level1Code.GDbuttonObjects1= [];
gdjs.Level1Code.GDbuttonObjects2= [];
gdjs.Level1Code.GDbuttonObjects3= [];
gdjs.Level1Code.GDEnterDoorObjects1= [];
gdjs.Level1Code.GDEnterDoorObjects2= [];
gdjs.Level1Code.GDEnterDoorObjects3= [];
gdjs.Level1Code.GDlaserObjects1= [];
gdjs.Level1Code.GDlaserObjects2= [];
gdjs.Level1Code.GDlaserObjects3= [];
gdjs.Level1Code.GDhookObjects1= [];
gdjs.Level1Code.GDhookObjects2= [];
gdjs.Level1Code.GDhookObjects3= [];
gdjs.Level1Code.GDlockObjects1= [];
gdjs.Level1Code.GDlockObjects2= [];
gdjs.Level1Code.GDlockObjects3= [];
gdjs.Level1Code.GDExitDoorObjects1= [];
gdjs.Level1Code.GDExitDoorObjects2= [];
gdjs.Level1Code.GDExitDoorObjects3= [];
gdjs.Level1Code.GDLeftObjects1= [];
gdjs.Level1Code.GDLeftObjects2= [];
gdjs.Level1Code.GDLeftObjects3= [];
gdjs.Level1Code.GDRightObjects1= [];
gdjs.Level1Code.GDRightObjects2= [];
gdjs.Level1Code.GDRightObjects3= [];
gdjs.Level1Code.GDinvisibleWallObjects1= [];
gdjs.Level1Code.GDinvisibleWallObjects2= [];
gdjs.Level1Code.GDinvisibleWallObjects3= [];
gdjs.Level1Code.GDGreenFlagObjects1= [];
gdjs.Level1Code.GDGreenFlagObjects2= [];
gdjs.Level1Code.GDGreenFlagObjects3= [];
gdjs.Level1Code.GDhookPointObjects1= [];
gdjs.Level1Code.GDhookPointObjects2= [];
gdjs.Level1Code.GDhookPointObjects3= [];
gdjs.Level1Code.GDTimerObjects1= [];
gdjs.Level1Code.GDTimerObjects2= [];
gdjs.Level1Code.GDTimerObjects3= [];
gdjs.Level1Code.GDObjectsObjects1= [];
gdjs.Level1Code.GDObjectsObjects2= [];
gdjs.Level1Code.GDObjectsObjects3= [];
gdjs.Level1Code.GDTimeElapsedObjects1= [];
gdjs.Level1Code.GDTimeElapsedObjects2= [];
gdjs.Level1Code.GDTimeElapsedObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.condition4IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};
gdjs.Level1Code.condition4IsTrue_1 = {val:false};


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Level1Code.GDscoreObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDscoreObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDscoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level1Code.GDPlayerObjects2.length !== 0 ? gdjs.Level1Code.GDPlayerObjects2[0] : null), true, "", 0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("invisibleWall"), gdjs.Level1Code.GDinvisibleWallObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.Level1Code.GDinvisibleWallObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDinvisibleWallObjects2[i].hide();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level1Code.GDTimerObjects2);
{runtimeScene.getVariables().getFromIndex(1).setNumber(100);
}{for(var i = 0, len = gdjs.Level1Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTimerObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Time");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level1Code.GDTimerObjects2);
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.Level1Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTimerObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDgrassObjects2ObjectsGDgdjs_46Level1Code_46GDdirtObjects2ObjectsGDgdjs_46Level1Code_46GDladderObjects2ObjectsGDgdjs_46Level1Code_46GDrailObjects2ObjectsGDgdjs_46Level1Code_46GDEnemyObjects2ObjectsGDgdjs_46Level1Code_46GDPlayerObjects2ObjectsGDgdjs_46Level1Code_46GDscoreObjects2ObjectsGDgdjs_46Level1Code_46GDspikesObjects2ObjectsGDgdjs_46Level1Code_46GDcogObjects2ObjectsGDgdjs_46Level1Code_46GDbuttonObjects2ObjectsGDgdjs_46Level1Code_46GDEnterDoorObjects2ObjectsGDgdjs_46Level1Code_46GDlaserObjects2ObjectsGDgdjs_46Level1Code_46GDhookObjects2ObjectsGDgdjs_46Level1Code_46GDlockObjects2ObjectsGDgdjs_46Level1Code_46GDExitDoorObjects2ObjectsGDgdjs_46Level1Code_46GDLeftObjects2ObjectsGDgdjs_46Level1Code_46GDRightObjects2ObjectsGDgdjs_46Level1Code_46GDinvisibleWallObjects2ObjectsGDgdjs_46Level1Code_46GDGreenFlagObjects2ObjectsGDgdjs_46Level1Code_46GDhookPointObjects2ObjectsGDgdjs_46Level1Code_46GDTimerObjects2Objects = Hashtable.newFrom({"grass": gdjs.Level1Code.GDgrassObjects2, "dirt": gdjs.Level1Code.GDdirtObjects2, "ladder": gdjs.Level1Code.GDladderObjects2, "rail": gdjs.Level1Code.GDrailObjects2, "Enemy": gdjs.Level1Code.GDEnemyObjects2, "Player": gdjs.Level1Code.GDPlayerObjects2, "score": gdjs.Level1Code.GDscoreObjects2, "spikes": gdjs.Level1Code.GDspikesObjects2, "cog": gdjs.Level1Code.GDcogObjects2, "button": gdjs.Level1Code.GDbuttonObjects2, "EnterDoor": gdjs.Level1Code.GDEnterDoorObjects2, "laser": gdjs.Level1Code.GDlaserObjects2, "hook": gdjs.Level1Code.GDhookObjects2, "lock": gdjs.Level1Code.GDlockObjects2, "ExitDoor": gdjs.Level1Code.GDExitDoorObjects2, "Left": gdjs.Level1Code.GDLeftObjects2, "Right": gdjs.Level1Code.GDRightObjects2, "invisibleWall": gdjs.Level1Code.GDinvisibleWallObjects2, "GreenFlag": gdjs.Level1Code.GDGreenFlagObjects2, "hookPoint": gdjs.Level1Code.GDhookPointObjects2, "Timer": gdjs.Level1Code.GDTimerObjects2});gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Objects"), gdjs.Level1Code.GDObjectsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimeElapsed"), gdjs.Level1Code.GDTimeElapsedObjects2);
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level1Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObjectsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTimeElapsedObjects2[i].hide();
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}

}


{


{
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnterDoor"), gdjs.Level1Code.GDEnterDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("ExitDoor"), gdjs.Level1Code.GDExitDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.Level1Code.GDGreenFlagObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level1Code.GDLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("Objects"), gdjs.Level1Code.GDObjectsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level1Code.GDRightObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimeElapsed"), gdjs.Level1Code.GDTimeElapsedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level1Code.GDTimerObjects2);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Level1Code.GDbuttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("cog"), gdjs.Level1Code.GDcogObjects2);
gdjs.copyArray(runtimeScene.getObjects("dirt"), gdjs.Level1Code.GDdirtObjects2);
gdjs.copyArray(runtimeScene.getObjects("grass"), gdjs.Level1Code.GDgrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level1Code.GDhookObjects2);
gdjs.copyArray(runtimeScene.getObjects("hookPoint"), gdjs.Level1Code.GDhookPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("invisibleWall"), gdjs.Level1Code.GDinvisibleWallObjects2);
gdjs.copyArray(runtimeScene.getObjects("ladder"), gdjs.Level1Code.GDladderObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level1Code.GDlaserObjects2);
gdjs.copyArray(runtimeScene.getObjects("lock"), gdjs.Level1Code.GDlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("rail"), gdjs.Level1Code.GDrailObjects2);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Level1Code.GDscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.Level1Code.GDspikesObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObjectsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTimeElapsedObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObjectsObjects2[i].setString("Number Of Objects on screen: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDgrassObjects2ObjectsGDgdjs_46Level1Code_46GDdirtObjects2ObjectsGDgdjs_46Level1Code_46GDladderObjects2ObjectsGDgdjs_46Level1Code_46GDrailObjects2ObjectsGDgdjs_46Level1Code_46GDEnemyObjects2ObjectsGDgdjs_46Level1Code_46GDPlayerObjects2ObjectsGDgdjs_46Level1Code_46GDscoreObjects2ObjectsGDgdjs_46Level1Code_46GDspikesObjects2ObjectsGDgdjs_46Level1Code_46GDcogObjects2ObjectsGDgdjs_46Level1Code_46GDbuttonObjects2ObjectsGDgdjs_46Level1Code_46GDEnterDoorObjects2ObjectsGDgdjs_46Level1Code_46GDlaserObjects2ObjectsGDgdjs_46Level1Code_46GDhookObjects2ObjectsGDgdjs_46Level1Code_46GDlockObjects2ObjectsGDgdjs_46Level1Code_46GDExitDoorObjects2ObjectsGDgdjs_46Level1Code_46GDLeftObjects2ObjectsGDgdjs_46Level1Code_46GDRightObjects2ObjectsGDgdjs_46Level1Code_46GDinvisibleWallObjects2ObjectsGDgdjs_46Level1Code_46GDGreenFlagObjects2ObjectsGDgdjs_46Level1Code_46GDhookPointObjects2ObjectsGDgdjs_46Level1Code_46GDTimerObjects2Objects)));
}
}{for(var i = 0, len = gdjs.Level1Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTimeElapsedObjects2[i].setString("Time elapsed: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))));
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Objects"), gdjs.Level1Code.GDObjectsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimeElapsed"), gdjs.Level1Code.GDTimeElapsedObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDTimeElapsedObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTimeElapsedObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDObjectsObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObjectsObjects2[i].hide();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8889836);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcogObjects2Objects = Hashtable.newFrom({"cog": gdjs.Level1Code.GDcogObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.Level1Code.GDlaserObjects2});gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "true";
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ES_Laser Shot Synth 1 - SFX Producer.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.Level1Code.GDlaserObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.Level1Code.GDlaserObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects2});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playSound(runtimeScene, "ES_Zombie Growl Pain 4 - SFX Producer.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDspikesObjects2Objects = Hashtable.newFrom({"spikes": gdjs.Level1Code.GDspikesObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.Level1Code.GDGreenFlagObjects1});gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4));
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Climb");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Falling");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("cog"), gdjs.Level1Code.GDcogObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcogObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcogObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDcogObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDcogObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "firerate");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.Level1Code.GDlaserObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlaserObjects2Objects, (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointX("Eye")), (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointY("Eye")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDlaserObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 800, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.Level1Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDlaserObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level1Code.GDlaserObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlaserObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, 400, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDlaserObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level1Code.GDlaserObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlaserObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyObjects2 */
/* Reuse gdjs.Level1Code.GDlaserObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].setAnimationName("Die");
}
}{for(var i = 0, len = gdjs.Level1Code.GDlaserObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.Level1Code.GDspikesObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDspikesObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "false";
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.Level1Code.GDGreenFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory", false);
}
{ //Subevents
gdjs.Level1Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnterDoorObjects2Objects = Hashtable.newFrom({"EnterDoor": gdjs.Level1Code.GDEnterDoorObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlockObjects2Objects = Hashtable.newFrom({"lock": gdjs.Level1Code.GDlockObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Level1Code.GDbuttonObjects1});gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnterDoor"), gdjs.Level1Code.GDEnterDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("lock"), gdjs.Level1Code.GDlockObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
gdjs.Level1Code.condition3IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnterDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition2IsTrue_0.val ) {
{
gdjs.Level1Code.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDlockObjects2Objects, true, runtimeScene, false);
}}
}
}
if (gdjs.Level1Code.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExitDoor"), gdjs.Level1Code.GDExitDoorObjects2);
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setPosition((( gdjs.Level1Code.GDExitDoorObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDExitDoorObjects2[0].getPointX("")),(( gdjs.Level1Code.GDExitDoorObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDExitDoorObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Level1Code.GDbuttonObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDbuttonObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lock"), gdjs.Level1Code.GDlockObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDbuttonObjects1[i].setAnimationName("pressed");
}
}{for(var i = 0, len = gdjs.Level1Code.GDlockObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.Level1Code.GDLeftObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.Level1Code.GDRightObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects2});gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level1Code.GDLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level1Code.GDRightObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDLeftObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDLeftObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDRightObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDRightObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDEnemyObjects2[i].getVariableString(gdjs.Level1Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDEnemyObjects2[k] = gdjs.Level1Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDEnemyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].addPolarForce(0, 150, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDEnemyObjects2[i].getVariableString(gdjs.Level1Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDEnemyObjects2[k] = gdjs.Level1Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDEnemyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].addPolarForce(180, 150, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level1Code.GDLeftObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].returnVariable(gdjs.Level1Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level1Code.GDRightObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].returnVariable(gdjs.Level1Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "false";
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{



}


{



}


{


{
}

}


};gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.Level1Code.GDhookObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.Level1Code.GDhookObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.Level1Code.GDhookObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects1Objects = Hashtable.newFrom({"hook": gdjs.Level1Code.GDhookObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookPointObjects1Objects = Hashtable.newFrom({"hookPoint": gdjs.Level1Code.GDhookPointObjects1});gdjs.Level1Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getVariableString(gdjs.Level1Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "false" ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition2IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7202492);
}
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
gdjs.Level1Code.GDhookObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects2Objects, (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointY("Chest")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 800, 1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].returnVariable(gdjs.Level1Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level1Code.GDhookObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, 400, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
/* Reuse gdjs.Level1Code.GDhookObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects2[i].addForceTowardPosition((( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointY("Chest")), 400, 1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects2[i].returnVariable(gdjs.Level1Code.GDhookObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level1Code.GDhookObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDhookObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDhookObjects2[i].getVariableString(gdjs.Level1Code.GDhookObjects2[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDhookObjects2[k] = gdjs.Level1Code.GDhookObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDhookObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
/* Reuse gdjs.Level1Code.GDhookObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects2[i].addForceTowardPosition((( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointY("Chest")), 800, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level1Code.GDhookObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects2Objects, 70, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDhookObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDhookObjects2[i].getVariableString(gdjs.Level1Code.GDhookObjects2[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDhookObjects2[k] = gdjs.Level1Code.GDhookObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDhookObjects2.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
/* Reuse gdjs.Level1Code.GDhookObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDhookObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].returnVariable(gdjs.Level1Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("false");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.Level1Code.GDhookObjects1);
gdjs.copyArray(runtimeScene.getObjects("hookPoint"), gdjs.Level1Code.GDhookPointObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhookPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
/* Reuse gdjs.Level1Code.GDhookObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].addForceTowardObject((gdjs.Level1Code.GDhookObjects1.length !== 0 ? gdjs.Level1Code.GDhookObjects1[0] : null), 800, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDhookObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level1Code.GDhookObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDhookObjects1[i].returnVariable(gdjs.Level1Code.GDhookObjects1[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


};gdjs.Level1Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList0(runtimeScene);
}


{


gdjs.Level1Code.eventsList2(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


{


gdjs.Level1Code.eventsList7(runtimeScene);
}


{


gdjs.Level1Code.eventsList8(runtimeScene);
}


{


gdjs.Level1Code.eventsList9(runtimeScene);
}


{


gdjs.Level1Code.eventsList10(runtimeScene);
}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDgrassObjects1.length = 0;
gdjs.Level1Code.GDgrassObjects2.length = 0;
gdjs.Level1Code.GDgrassObjects3.length = 0;
gdjs.Level1Code.GDdirtObjects1.length = 0;
gdjs.Level1Code.GDdirtObjects2.length = 0;
gdjs.Level1Code.GDdirtObjects3.length = 0;
gdjs.Level1Code.GDladderObjects1.length = 0;
gdjs.Level1Code.GDladderObjects2.length = 0;
gdjs.Level1Code.GDladderObjects3.length = 0;
gdjs.Level1Code.GDrailObjects1.length = 0;
gdjs.Level1Code.GDrailObjects2.length = 0;
gdjs.Level1Code.GDrailObjects3.length = 0;
gdjs.Level1Code.GDEnemyObjects1.length = 0;
gdjs.Level1Code.GDEnemyObjects2.length = 0;
gdjs.Level1Code.GDEnemyObjects3.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects3.length = 0;
gdjs.Level1Code.GDscoreObjects1.length = 0;
gdjs.Level1Code.GDscoreObjects2.length = 0;
gdjs.Level1Code.GDscoreObjects3.length = 0;
gdjs.Level1Code.GDspikesObjects1.length = 0;
gdjs.Level1Code.GDspikesObjects2.length = 0;
gdjs.Level1Code.GDspikesObjects3.length = 0;
gdjs.Level1Code.GDcogObjects1.length = 0;
gdjs.Level1Code.GDcogObjects2.length = 0;
gdjs.Level1Code.GDcogObjects3.length = 0;
gdjs.Level1Code.GDbuttonObjects1.length = 0;
gdjs.Level1Code.GDbuttonObjects2.length = 0;
gdjs.Level1Code.GDbuttonObjects3.length = 0;
gdjs.Level1Code.GDEnterDoorObjects1.length = 0;
gdjs.Level1Code.GDEnterDoorObjects2.length = 0;
gdjs.Level1Code.GDEnterDoorObjects3.length = 0;
gdjs.Level1Code.GDlaserObjects1.length = 0;
gdjs.Level1Code.GDlaserObjects2.length = 0;
gdjs.Level1Code.GDlaserObjects3.length = 0;
gdjs.Level1Code.GDhookObjects1.length = 0;
gdjs.Level1Code.GDhookObjects2.length = 0;
gdjs.Level1Code.GDhookObjects3.length = 0;
gdjs.Level1Code.GDlockObjects1.length = 0;
gdjs.Level1Code.GDlockObjects2.length = 0;
gdjs.Level1Code.GDlockObjects3.length = 0;
gdjs.Level1Code.GDExitDoorObjects1.length = 0;
gdjs.Level1Code.GDExitDoorObjects2.length = 0;
gdjs.Level1Code.GDExitDoorObjects3.length = 0;
gdjs.Level1Code.GDLeftObjects1.length = 0;
gdjs.Level1Code.GDLeftObjects2.length = 0;
gdjs.Level1Code.GDLeftObjects3.length = 0;
gdjs.Level1Code.GDRightObjects1.length = 0;
gdjs.Level1Code.GDRightObjects2.length = 0;
gdjs.Level1Code.GDRightObjects3.length = 0;
gdjs.Level1Code.GDinvisibleWallObjects1.length = 0;
gdjs.Level1Code.GDinvisibleWallObjects2.length = 0;
gdjs.Level1Code.GDinvisibleWallObjects3.length = 0;
gdjs.Level1Code.GDGreenFlagObjects1.length = 0;
gdjs.Level1Code.GDGreenFlagObjects2.length = 0;
gdjs.Level1Code.GDGreenFlagObjects3.length = 0;
gdjs.Level1Code.GDhookPointObjects1.length = 0;
gdjs.Level1Code.GDhookPointObjects2.length = 0;
gdjs.Level1Code.GDhookPointObjects3.length = 0;
gdjs.Level1Code.GDTimerObjects1.length = 0;
gdjs.Level1Code.GDTimerObjects2.length = 0;
gdjs.Level1Code.GDTimerObjects3.length = 0;
gdjs.Level1Code.GDObjectsObjects1.length = 0;
gdjs.Level1Code.GDObjectsObjects2.length = 0;
gdjs.Level1Code.GDObjectsObjects3.length = 0;
gdjs.Level1Code.GDTimeElapsedObjects1.length = 0;
gdjs.Level1Code.GDTimeElapsedObjects2.length = 0;
gdjs.Level1Code.GDTimeElapsedObjects3.length = 0;

gdjs.Level1Code.eventsList11(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
