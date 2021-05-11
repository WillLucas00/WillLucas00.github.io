gdjs.Level_32SelectCode = {};
gdjs.Level_32SelectCode.GDlevelBut4Objects1= [];
gdjs.Level_32SelectCode.GDlevelBut4Objects2= [];
gdjs.Level_32SelectCode.GDlevelBut3Objects1= [];
gdjs.Level_32SelectCode.GDlevelBut3Objects2= [];
gdjs.Level_32SelectCode.GDlevelBut2Objects1= [];
gdjs.Level_32SelectCode.GDlevelBut2Objects2= [];
gdjs.Level_32SelectCode.GDlevelBut1Objects1= [];
gdjs.Level_32SelectCode.GDlevelBut1Objects2= [];
gdjs.Level_32SelectCode.GDlevel4Objects1= [];
gdjs.Level_32SelectCode.GDlevel4Objects2= [];
gdjs.Level_32SelectCode.GDlevel3Objects1= [];
gdjs.Level_32SelectCode.GDlevel3Objects2= [];
gdjs.Level_32SelectCode.GDlevel2Objects1= [];
gdjs.Level_32SelectCode.GDlevel2Objects2= [];
gdjs.Level_32SelectCode.GDlevel1Objects1= [];
gdjs.Level_32SelectCode.GDlevel1Objects2= [];
gdjs.Level_32SelectCode.GDLock4Objects1= [];
gdjs.Level_32SelectCode.GDLock4Objects2= [];
gdjs.Level_32SelectCode.GDLock3Objects1= [];
gdjs.Level_32SelectCode.GDLock3Objects2= [];
gdjs.Level_32SelectCode.GDLock2Objects1= [];
gdjs.Level_32SelectCode.GDLock2Objects2= [];
gdjs.Level_32SelectCode.GDreturnObjects1= [];
gdjs.Level_32SelectCode.GDreturnObjects2= [];
gdjs.Level_32SelectCode.GDLevel3ScoreObjects1= [];
gdjs.Level_32SelectCode.GDLevel3ScoreObjects2= [];
gdjs.Level_32SelectCode.GDLevel2ScoreObjects1= [];
gdjs.Level_32SelectCode.GDLevel2ScoreObjects2= [];
gdjs.Level_32SelectCode.GDLevel4ScoreObjects1= [];
gdjs.Level_32SelectCode.GDLevel4ScoreObjects2= [];
gdjs.Level_32SelectCode.GDLevel1ScoreObjects1= [];
gdjs.Level_32SelectCode.GDLevel1ScoreObjects2= [];
gdjs.Level_32SelectCode.GDCollectedObjects1= [];
gdjs.Level_32SelectCode.GDCollectedObjects2= [];
gdjs.Level_32SelectCode.GDRocketObjects1= [];
gdjs.Level_32SelectCode.GDRocketObjects2= [];
gdjs.Level_32SelectCode.GDNewObjectObjects1= [];
gdjs.Level_32SelectCode.GDNewObjectObjects2= [];

gdjs.Level_32SelectCode.conditionTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition1IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition2IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition3IsTrue_0 = {val:false};


gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut1Objects1Objects = Hashtable.newFrom({"levelBut1": gdjs.Level_32SelectCode.GDlevelBut1Objects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut2Objects1Objects = Hashtable.newFrom({"levelBut2": gdjs.Level_32SelectCode.GDlevelBut2Objects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut3Objects1Objects = Hashtable.newFrom({"levelBut3": gdjs.Level_32SelectCode.GDlevelBut3Objects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut4Objects1Objects = Hashtable.newFrom({"levelBut4": gdjs.Level_32SelectCode.GDlevelBut4Objects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Level_32SelectCode.GDRocketObjects1});gdjs.Level_32SelectCode.eventsList0 = function(runtimeScene) {

{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock2"), gdjs.Level_32SelectCode.GDLock2Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLock2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLock2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 3;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock3"), gdjs.Level_32SelectCode.GDLock3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLock3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLock3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 4;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock4"), gdjs.Level_32SelectCode.GDLock4Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLock4Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLock4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("levelBut1"), gdjs.Level_32SelectCode.GDlevelBut1Objects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Level_32SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("levelBut2"), gdjs.Level_32SelectCode.GDlevelBut2Objects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition2IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level_32SelectCode.condition1IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
}}
}
if (gdjs.Level_32SelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("levelBut3"), gdjs.Level_32SelectCode.GDlevelBut3Objects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition2IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level_32SelectCode.condition1IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 3;
}}
}
if (gdjs.Level_32SelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "placeholderLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("levelBut4"), gdjs.Level_32SelectCode.GDlevelBut4Objects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition2IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDlevelBut4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level_32SelectCode.condition1IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 4;
}}
}
if (gdjs.Level_32SelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "placeholderLevel", false);
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Collected"), gdjs.Level_32SelectCode.GDCollectedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level1Score"), gdjs.Level_32SelectCode.GDLevel1ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level2Score"), gdjs.Level_32SelectCode.GDLevel2ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level3Score"), gdjs.Level_32SelectCode.GDLevel3ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level4Score"), gdjs.Level_32SelectCode.GDLevel4ScoreObjects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevel1ScoreObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevel1ScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevel2ScoreObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevel2ScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevel3ScoreObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevel3ScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))));
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevel4ScoreObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevel4ScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))));
}
}{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCollectedObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCollectedObjects1[i].setString("Total cogs collected (/20) : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 20;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Collected"), gdjs.Level_32SelectCode.GDCollectedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Level_32SelectCode.GDRocketObjects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDRocketObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCollectedObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCollectedObjects1[i].setString("All cogs collected click the rocket to return home!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Level_32SelectCode.GDRocketObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition2IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDRocketObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 20;
}if ( gdjs.Level_32SelectCode.condition1IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.Level_32SelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Game", false);
}}

}


};

gdjs.Level_32SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectCode.GDlevelBut4Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevelBut4Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevelBut3Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevelBut3Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevelBut2Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevelBut2Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevelBut1Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevelBut1Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevel4Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevel4Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevel3Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevel3Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevel2Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevel2Objects2.length = 0;
gdjs.Level_32SelectCode.GDlevel1Objects1.length = 0;
gdjs.Level_32SelectCode.GDlevel1Objects2.length = 0;
gdjs.Level_32SelectCode.GDLock4Objects1.length = 0;
gdjs.Level_32SelectCode.GDLock4Objects2.length = 0;
gdjs.Level_32SelectCode.GDLock3Objects1.length = 0;
gdjs.Level_32SelectCode.GDLock3Objects2.length = 0;
gdjs.Level_32SelectCode.GDLock2Objects1.length = 0;
gdjs.Level_32SelectCode.GDLock2Objects2.length = 0;
gdjs.Level_32SelectCode.GDreturnObjects1.length = 0;
gdjs.Level_32SelectCode.GDreturnObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevel3ScoreObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevel3ScoreObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevel2ScoreObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevel2ScoreObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevel4ScoreObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevel4ScoreObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevel1ScoreObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevel1ScoreObjects2.length = 0;
gdjs.Level_32SelectCode.GDCollectedObjects1.length = 0;
gdjs.Level_32SelectCode.GDCollectedObjects2.length = 0;
gdjs.Level_32SelectCode.GDRocketObjects1.length = 0;
gdjs.Level_32SelectCode.GDRocketObjects2.length = 0;
gdjs.Level_32SelectCode.GDNewObjectObjects1.length = 0;
gdjs.Level_32SelectCode.GDNewObjectObjects2.length = 0;

gdjs.Level_32SelectCode.eventsList0(runtimeScene);
return;

}

gdjs['Level_32SelectCode'] = gdjs.Level_32SelectCode;
