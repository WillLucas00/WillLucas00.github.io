gdjs.DevCode = {};
gdjs.DevCode.GDinvincibilityObjects1= [];
gdjs.DevCode.GDinvincibilityObjects2= [];
gdjs.DevCode.GDinvincibilityObjects3= [];
gdjs.DevCode.GDinvinOffObjects1= [];
gdjs.DevCode.GDinvinOffObjects2= [];
gdjs.DevCode.GDinvinOffObjects3= [];
gdjs.DevCode.GDinvinOnObjects1= [];
gdjs.DevCode.GDinvinOnObjects2= [];
gdjs.DevCode.GDinvinOnObjects3= [];
gdjs.DevCode.GDrobotObjects1= [];
gdjs.DevCode.GDrobotObjects2= [];
gdjs.DevCode.GDrobotObjects3= [];
gdjs.DevCode.GDReturnObjects1= [];
gdjs.DevCode.GDReturnObjects2= [];
gdjs.DevCode.GDReturnObjects3= [];
gdjs.DevCode.GDlevelUnlockObjects1= [];
gdjs.DevCode.GDlevelUnlockObjects2= [];
gdjs.DevCode.GDlevelUnlockObjects3= [];
gdjs.DevCode.GDlevelButtonObjects1= [];
gdjs.DevCode.GDlevelButtonObjects2= [];
gdjs.DevCode.GDlevelButtonObjects3= [];
gdjs.DevCode.GDlevelOnOfffffObjects1= [];
gdjs.DevCode.GDlevelOnOfffffObjects2= [];
gdjs.DevCode.GDlevelOnOfffffObjects3= [];
gdjs.DevCode.GDlevelOnOffObjects1= [];
gdjs.DevCode.GDlevelOnOffObjects2= [];
gdjs.DevCode.GDlevelOnOffObjects3= [];

gdjs.DevCode.conditionTrue_0 = {val:false};
gdjs.DevCode.condition0IsTrue_0 = {val:false};
gdjs.DevCode.condition1IsTrue_0 = {val:false};
gdjs.DevCode.condition2IsTrue_0 = {val:false};
gdjs.DevCode.conditionTrue_1 = {val:false};
gdjs.DevCode.condition0IsTrue_1 = {val:false};
gdjs.DevCode.condition1IsTrue_1 = {val:false};
gdjs.DevCode.condition2IsTrue_1 = {val:false};


gdjs.DevCode.mapOfGDgdjs_46DevCode_46GDinvinOnObjects2Objects = Hashtable.newFrom({"invinOn": gdjs.DevCode.GDinvinOnObjects2});gdjs.DevCode.eventsList0 = function(runtimeScene) {

{


gdjs.DevCode.condition0IsTrue_0.val = false;
gdjs.DevCode.condition1IsTrue_0.val = false;
{
gdjs.DevCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "true";
}if ( gdjs.DevCode.condition0IsTrue_0.val ) {
{
gdjs.DevCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}}
if (gdjs.DevCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("invinOn"), gdjs.DevCode.GDinvinOnObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("false");
}{for(var i = 0, len = gdjs.DevCode.GDinvinOnObjects2.length ;i < len;++i) {
    gdjs.DevCode.GDinvinOnObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("true");
}}

}


{


gdjs.DevCode.condition0IsTrue_0.val = false;
gdjs.DevCode.condition1IsTrue_0.val = false;
{
gdjs.DevCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "false";
}if ( gdjs.DevCode.condition0IsTrue_0.val ) {
{
gdjs.DevCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}}
if (gdjs.DevCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("invinOff"), gdjs.DevCode.GDinvinOffObjects2);
gdjs.DevCode.GDinvinOnObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(1).setString("true");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.DevCode.mapOfGDgdjs_46DevCode_46GDinvinOnObjects2Objects, (( gdjs.DevCode.GDinvinOffObjects2.length === 0 ) ? 0 :gdjs.DevCode.GDinvinOffObjects2[0].getPointX("Centre")), (( gdjs.DevCode.GDinvinOffObjects2.length === 0 ) ? 0 :gdjs.DevCode.GDinvinOffObjects2[0].getPointY("Centre")), "");
}{runtimeScene.getVariables().getFromIndex(0).setString("true");
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).setString("false");
}}

}


};gdjs.DevCode.mapOfGDgdjs_46DevCode_46GDlevelOnOffObjects1Objects = Hashtable.newFrom({"levelOnOff": gdjs.DevCode.GDlevelOnOffObjects1});gdjs.DevCode.eventsList1 = function(runtimeScene) {

{


gdjs.DevCode.condition0IsTrue_0.val = false;
gdjs.DevCode.condition1IsTrue_0.val = false;
{
gdjs.DevCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.DevCode.condition0IsTrue_0.val ) {
{
{gdjs.DevCode.conditionTrue_1 = gdjs.DevCode.condition1IsTrue_0;
gdjs.DevCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8707316);
}
}}
if (gdjs.DevCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.DevCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.DevCode.condition0IsTrue_0.val = false;
{
gdjs.DevCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.DevCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.DevCode.condition0IsTrue_0.val = false;
{
gdjs.DevCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
}if (gdjs.DevCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("levelButton"), gdjs.DevCode.GDlevelButtonObjects1);
gdjs.DevCode.GDlevelOnOffObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.DevCode.mapOfGDgdjs_46DevCode_46GDlevelOnOffObjects1Objects, (( gdjs.DevCode.GDlevelButtonObjects1.length === 0 ) ? 0 :gdjs.DevCode.GDlevelButtonObjects1[0].getPointX("Center")), (( gdjs.DevCode.GDlevelButtonObjects1.length === 0 ) ? 0 :gdjs.DevCode.GDlevelButtonObjects1[0].getPointY("Center")), "");
}}

}


};

gdjs.DevCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DevCode.GDinvincibilityObjects1.length = 0;
gdjs.DevCode.GDinvincibilityObjects2.length = 0;
gdjs.DevCode.GDinvincibilityObjects3.length = 0;
gdjs.DevCode.GDinvinOffObjects1.length = 0;
gdjs.DevCode.GDinvinOffObjects2.length = 0;
gdjs.DevCode.GDinvinOffObjects3.length = 0;
gdjs.DevCode.GDinvinOnObjects1.length = 0;
gdjs.DevCode.GDinvinOnObjects2.length = 0;
gdjs.DevCode.GDinvinOnObjects3.length = 0;
gdjs.DevCode.GDrobotObjects1.length = 0;
gdjs.DevCode.GDrobotObjects2.length = 0;
gdjs.DevCode.GDrobotObjects3.length = 0;
gdjs.DevCode.GDReturnObjects1.length = 0;
gdjs.DevCode.GDReturnObjects2.length = 0;
gdjs.DevCode.GDReturnObjects3.length = 0;
gdjs.DevCode.GDlevelUnlockObjects1.length = 0;
gdjs.DevCode.GDlevelUnlockObjects2.length = 0;
gdjs.DevCode.GDlevelUnlockObjects3.length = 0;
gdjs.DevCode.GDlevelButtonObjects1.length = 0;
gdjs.DevCode.GDlevelButtonObjects2.length = 0;
gdjs.DevCode.GDlevelButtonObjects3.length = 0;
gdjs.DevCode.GDlevelOnOfffffObjects1.length = 0;
gdjs.DevCode.GDlevelOnOfffffObjects2.length = 0;
gdjs.DevCode.GDlevelOnOfffffObjects3.length = 0;
gdjs.DevCode.GDlevelOnOffObjects1.length = 0;
gdjs.DevCode.GDlevelOnOffObjects2.length = 0;
gdjs.DevCode.GDlevelOnOffObjects3.length = 0;

gdjs.DevCode.eventsList1(runtimeScene);
return;

}

gdjs['DevCode'] = gdjs.DevCode;
