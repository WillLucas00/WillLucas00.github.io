gdjs.SettingsCode = {};
gdjs.SettingsCode.GDVolumeSliderObjects1= [];
gdjs.SettingsCode.GDVolumeSliderObjects2= [];
gdjs.SettingsCode.GDVolumeSliderObjects3= [];
gdjs.SettingsCode.GDVolumeNumObjects1= [];
gdjs.SettingsCode.GDVolumeNumObjects2= [];
gdjs.SettingsCode.GDVolumeNumObjects3= [];
gdjs.SettingsCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.SettingsCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.SettingsCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.SettingsCode.GDRightArrowRoundButtonObjects1= [];
gdjs.SettingsCode.GDRightArrowRoundButtonObjects2= [];
gdjs.SettingsCode.GDRightArrowRoundButtonObjects3= [];
gdjs.SettingsCode.GDVolumeObjects1= [];
gdjs.SettingsCode.GDVolumeObjects2= [];
gdjs.SettingsCode.GDVolumeObjects3= [];
gdjs.SettingsCode.GDReturnObjects1= [];
gdjs.SettingsCode.GDReturnObjects2= [];
gdjs.SettingsCode.GDReturnObjects3= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.condition3IsTrue_0 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.SettingsCode.GDRightArrowRoundButtonObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "TotalTime");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TotalTime");
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.SettingsCode.GDLeftArrowRoundButtonObjects1});gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeNum"), gdjs.SettingsCode.GDVolumeNumObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDVolumeNumObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.SettingsCode.GDRightArrowRoundButtonObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
gdjs.SettingsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 100;
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeNum"), gdjs.SettingsCode.GDVolumeNumObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).add(5);
}{for(var i = 0, len = gdjs.SettingsCode.GDVolumeNumObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, gdjs.evtTools.sound.getSoundOnChannelVolume(runtimeScene, 0) + (5));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 0) + (5));
}}

}


{


gdjs.SettingsCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.SettingsCode.GDLeftArrowRoundButtonObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
gdjs.SettingsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeNum"), gdjs.SettingsCode.GDVolumeNumObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(5);
}{for(var i = 0, len = gdjs.SettingsCode.GDVolumeNumObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 0) - (5));
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDVolumeSliderObjects1.length = 0;
gdjs.SettingsCode.GDVolumeSliderObjects2.length = 0;
gdjs.SettingsCode.GDVolumeSliderObjects3.length = 0;
gdjs.SettingsCode.GDVolumeNumObjects1.length = 0;
gdjs.SettingsCode.GDVolumeNumObjects2.length = 0;
gdjs.SettingsCode.GDVolumeNumObjects3.length = 0;
gdjs.SettingsCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.SettingsCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.SettingsCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.SettingsCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.SettingsCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.SettingsCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.SettingsCode.GDVolumeObjects1.length = 0;
gdjs.SettingsCode.GDVolumeObjects2.length = 0;
gdjs.SettingsCode.GDVolumeObjects3.length = 0;
gdjs.SettingsCode.GDReturnObjects1.length = 0;
gdjs.SettingsCode.GDReturnObjects2.length = 0;
gdjs.SettingsCode.GDReturnObjects3.length = 0;

gdjs.SettingsCode.eventsList1(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
