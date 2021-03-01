gdjs.GameCode = {};
gdjs.GameCode.GDgrassObjects1= [];
gdjs.GameCode.GDgrassObjects2= [];
gdjs.GameCode.GDgrassObjects3= [];
gdjs.GameCode.GDdirtObjects1= [];
gdjs.GameCode.GDdirtObjects2= [];
gdjs.GameCode.GDdirtObjects3= [];
gdjs.GameCode.GDladderObjects1= [];
gdjs.GameCode.GDladderObjects2= [];
gdjs.GameCode.GDladderObjects3= [];
gdjs.GameCode.GDrailObjects1= [];
gdjs.GameCode.GDrailObjects2= [];
gdjs.GameCode.GDrailObjects3= [];
gdjs.GameCode.GDEnemyObjects1= [];
gdjs.GameCode.GDEnemyObjects2= [];
gdjs.GameCode.GDEnemyObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDscoreObjects1= [];
gdjs.GameCode.GDscoreObjects2= [];
gdjs.GameCode.GDscoreObjects3= [];
gdjs.GameCode.GDspikesObjects1= [];
gdjs.GameCode.GDspikesObjects2= [];
gdjs.GameCode.GDspikesObjects3= [];
gdjs.GameCode.GDcogObjects1= [];
gdjs.GameCode.GDcogObjects2= [];
gdjs.GameCode.GDcogObjects3= [];
gdjs.GameCode.GDbuttonObjects1= [];
gdjs.GameCode.GDbuttonObjects2= [];
gdjs.GameCode.GDbuttonObjects3= [];
gdjs.GameCode.GDEnterDoorObjects1= [];
gdjs.GameCode.GDEnterDoorObjects2= [];
gdjs.GameCode.GDEnterDoorObjects3= [];
gdjs.GameCode.GDlaserObjects1= [];
gdjs.GameCode.GDlaserObjects2= [];
gdjs.GameCode.GDlaserObjects3= [];
gdjs.GameCode.GDhookObjects1= [];
gdjs.GameCode.GDhookObjects2= [];
gdjs.GameCode.GDhookObjects3= [];
gdjs.GameCode.GDlockObjects1= [];
gdjs.GameCode.GDlockObjects2= [];
gdjs.GameCode.GDlockObjects3= [];
gdjs.GameCode.GDExitDoorObjects1= [];
gdjs.GameCode.GDExitDoorObjects2= [];
gdjs.GameCode.GDExitDoorObjects3= [];
gdjs.GameCode.GDLeftObjects1= [];
gdjs.GameCode.GDLeftObjects2= [];
gdjs.GameCode.GDLeftObjects3= [];
gdjs.GameCode.GDRightObjects1= [];
gdjs.GameCode.GDRightObjects2= [];
gdjs.GameCode.GDRightObjects3= [];
gdjs.GameCode.GDinvisibleWallObjects1= [];
gdjs.GameCode.GDinvisibleWallObjects2= [];
gdjs.GameCode.GDinvisibleWallObjects3= [];
gdjs.GameCode.GDGreenFlagObjects1= [];
gdjs.GameCode.GDGreenFlagObjects2= [];
gdjs.GameCode.GDGreenFlagObjects3= [];
gdjs.GameCode.GDhookPointObjects1= [];
gdjs.GameCode.GDhookPointObjects2= [];
gdjs.GameCode.GDhookPointObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameCode.GDscoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDscoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDPlayerObjects2.length !== 0 ? gdjs.GameCode.GDPlayerObjects2[0] : null), true, "", 0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("invisibleWall"), gdjs.GameCode.GDinvisibleWallObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.GameCode.GDinvisibleWallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDinvisibleWallObjects2[i].hide();
}
}}

}


{


{
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcogObjects2Objects = Hashtable.newFrom({"cog": gdjs.GameCode.GDcogObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.GameCode.GDlaserObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.GameCode.GDlaserObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.GameCode.GDlaserObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDspikesObjects2Objects = Hashtable.newFrom({"spikes": gdjs.GameCode.GDspikesObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.GameCode.GDGreenFlagObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Climb");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Falling");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("cog"), gdjs.GameCode.GDcogObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcogObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcogObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDcogObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcogObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "firerate");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.GameCode.GDlaserObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlaserObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("Eye")), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("Eye")), "");
}{for(var i = 0, len = gdjs.GameCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlaserObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 800, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.GameCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlaserObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.GameCode.GDlaserObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlaserObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, 400, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDlaserObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.GameCode.GDlaserObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlaserObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
/* Reuse gdjs.GameCode.GDlaserObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].setAnimationName("Die");
}
}{for(var i = 0, len = gdjs.GameCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.GameCode.GDspikesObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDspikesObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "false";
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.GameCode.GDGreenFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory", false);
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnterDoorObjects2Objects = Hashtable.newFrom({"EnterDoor": gdjs.GameCode.GDEnterDoorObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlockObjects2Objects = Hashtable.newFrom({"lock": gdjs.GameCode.GDlockObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.GameCode.GDbuttonObjects1});gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnterDoor"), gdjs.GameCode.GDEnterDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("lock"), gdjs.GameCode.GDlockObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnterDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDlockObjects2Objects, true, runtimeScene, false);
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExitDoor"), gdjs.GameCode.GDExitDoorObjects2);
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setPosition((( gdjs.GameCode.GDExitDoorObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDExitDoorObjects2[0].getPointX("")),(( gdjs.GameCode.GDExitDoorObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDExitDoorObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.GameCode.GDbuttonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbuttonObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lock"), gdjs.GameCode.GDlockObjects1);
{for(var i = 0, len = gdjs.GameCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuttonObjects1[i].setAnimationName("pressed");
}
}{for(var i = 0, len = gdjs.GameCode.GDlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.GameCode.GDLeftObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.GameCode.GDRightObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.GameCode.GDLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.GameCode.GDRightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLeftObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLeftObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDRightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRightObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects2[i].getVariableString(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects2[k] = gdjs.GameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].addPolarForce(0, 150, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects2[i].getVariableString(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects2[k] = gdjs.GameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].addPolarForce(180, 150, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.GameCode.GDLeftObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].returnVariable(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.GameCode.GDRightObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].returnVariable(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "false";
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{



}


{



}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.GameCode.GDhookObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.GameCode.GDhookObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.GameCode.GDhookObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects = Hashtable.newFrom({"hook": gdjs.GameCode.GDhookObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookPointObjects2Objects = Hashtable.newFrom({"hookPoint": gdjs.GameCode.GDhookPointObjects2});gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableString(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "false" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8667212);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDhookObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("Chest")), "");
}{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 800, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.GameCode.GDhookObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, 400, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDhookObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].addForceTowardPosition((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("Chest")), 400, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].returnVariable(gdjs.GameCode.GDhookObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.GameCode.GDhookObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDhookObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDhookObjects2[i].getVariableString(gdjs.GameCode.GDhookObjects2[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDhookObjects2[k] = gdjs.GameCode.GDhookObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDhookObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
/* Reuse gdjs.GameCode.GDhookObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].addForceTowardPosition((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("Chest")), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("Chest")), 800, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.GameCode.GDhookObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects, 70, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDhookObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDhookObjects2[i].getVariableString(gdjs.GameCode.GDhookObjects2[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDhookObjects2[k] = gdjs.GameCode.GDhookObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDhookObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDhookObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("false");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.GameCode.GDhookObjects2);
gdjs.copyArray(runtimeScene.getObjects("hookPoint"), gdjs.GameCode.GDhookPointObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhookPointObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
/* Reuse gdjs.GameCode.GDhookObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForceTowardObject((gdjs.GameCode.GDhookObjects2.length !== 0 ? gdjs.GameCode.GDhookObjects2[0] : null), 800, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDhookObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDhookObjects2[i].returnVariable(gdjs.GameCode.GDhookObjects2[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{


{
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDgrassObjects1.length = 0;
gdjs.GameCode.GDgrassObjects2.length = 0;
gdjs.GameCode.GDgrassObjects3.length = 0;
gdjs.GameCode.GDdirtObjects1.length = 0;
gdjs.GameCode.GDdirtObjects2.length = 0;
gdjs.GameCode.GDdirtObjects3.length = 0;
gdjs.GameCode.GDladderObjects1.length = 0;
gdjs.GameCode.GDladderObjects2.length = 0;
gdjs.GameCode.GDladderObjects3.length = 0;
gdjs.GameCode.GDrailObjects1.length = 0;
gdjs.GameCode.GDrailObjects2.length = 0;
gdjs.GameCode.GDrailObjects3.length = 0;
gdjs.GameCode.GDEnemyObjects1.length = 0;
gdjs.GameCode.GDEnemyObjects2.length = 0;
gdjs.GameCode.GDEnemyObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDscoreObjects1.length = 0;
gdjs.GameCode.GDscoreObjects2.length = 0;
gdjs.GameCode.GDscoreObjects3.length = 0;
gdjs.GameCode.GDspikesObjects1.length = 0;
gdjs.GameCode.GDspikesObjects2.length = 0;
gdjs.GameCode.GDspikesObjects3.length = 0;
gdjs.GameCode.GDcogObjects1.length = 0;
gdjs.GameCode.GDcogObjects2.length = 0;
gdjs.GameCode.GDcogObjects3.length = 0;
gdjs.GameCode.GDbuttonObjects1.length = 0;
gdjs.GameCode.GDbuttonObjects2.length = 0;
gdjs.GameCode.GDbuttonObjects3.length = 0;
gdjs.GameCode.GDEnterDoorObjects1.length = 0;
gdjs.GameCode.GDEnterDoorObjects2.length = 0;
gdjs.GameCode.GDEnterDoorObjects3.length = 0;
gdjs.GameCode.GDlaserObjects1.length = 0;
gdjs.GameCode.GDlaserObjects2.length = 0;
gdjs.GameCode.GDlaserObjects3.length = 0;
gdjs.GameCode.GDhookObjects1.length = 0;
gdjs.GameCode.GDhookObjects2.length = 0;
gdjs.GameCode.GDhookObjects3.length = 0;
gdjs.GameCode.GDlockObjects1.length = 0;
gdjs.GameCode.GDlockObjects2.length = 0;
gdjs.GameCode.GDlockObjects3.length = 0;
gdjs.GameCode.GDExitDoorObjects1.length = 0;
gdjs.GameCode.GDExitDoorObjects2.length = 0;
gdjs.GameCode.GDExitDoorObjects3.length = 0;
gdjs.GameCode.GDLeftObjects1.length = 0;
gdjs.GameCode.GDLeftObjects2.length = 0;
gdjs.GameCode.GDLeftObjects3.length = 0;
gdjs.GameCode.GDRightObjects1.length = 0;
gdjs.GameCode.GDRightObjects2.length = 0;
gdjs.GameCode.GDRightObjects3.length = 0;
gdjs.GameCode.GDinvisibleWallObjects1.length = 0;
gdjs.GameCode.GDinvisibleWallObjects2.length = 0;
gdjs.GameCode.GDinvisibleWallObjects3.length = 0;
gdjs.GameCode.GDGreenFlagObjects1.length = 0;
gdjs.GameCode.GDGreenFlagObjects2.length = 0;
gdjs.GameCode.GDGreenFlagObjects3.length = 0;
gdjs.GameCode.GDhookPointObjects1.length = 0;
gdjs.GameCode.GDhookPointObjects2.length = 0;
gdjs.GameCode.GDhookPointObjects3.length = 0;

gdjs.GameCode.eventsList6(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
