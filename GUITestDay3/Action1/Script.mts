'AIUtil("up_triangle", micAnyText, micFromTop, 1).Click
'AIUtil.FindTextBlock("OUR PRODUCTS").Click
'AIUtil.FindTextBlock("CONTACT US").Click
'AIUtil("down_triangle", micAnyText, micFromTop, 2).Click
'AIUtil("down_triangle", micAnyText, micFromTop, 2).Click
'AIUtil("combobox", "").Click

AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize
wait 10
AIUtil("profile").Click
AIUtil("input", "Usemame").Type  "Mercury"
AIUtil("input", "Password").Type  "Mercury"
AIUtil("button", "SIGN IN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click
