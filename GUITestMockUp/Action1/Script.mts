set mySendKeys = CreateObject("WScript.shell")
'starting with my AOS open at 175% zoom
For Iterator = 1 To 4 Step 1

	AIUtil.SetContext Browser("creationtime:=0")

	AIUtil("profile").Click
	AIUtil("input", "Usemame").Type  "Mercury"
	AIUtil("input", "Password").Type  "Mercury"
	AIUtil("button", "SIGN IN").Click
	AIUtil("profile").Click
	AIUtil.FindTextBlock("Sign out").Click
	
	mySendKeys.SendKeys("^-")'reduce zoom
	mySendKeys.SendKeys("^-")
	
Next

