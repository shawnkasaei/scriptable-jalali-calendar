/*
    JALALI CALENDAR WIDGET v0.0.1 coded by shayankasaei
    GitHub:https://github.com/shayankasaei/scriptable-jalali-calendar-widget
*/

//VARIABLES
//Configuring --> the name of weekdays and months in format of a list
//you can change any of them to anything u like
//DO NOT change the sequences
let week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
let months = new Array("Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand")
//End of configuration

//DO NOT touch the following list it is used by EnNum(n)
let persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

//Configuring --> gradient color profiles
//change colors hex codes if you wish
let darkMode = false  //true to enable dark mode
		      //for best results, use it with ios dark mode turned on)
let gradient = new LinearGradient()
gradient.locations = [0, 1]
if (darkMode){
	gradient.colors = [
	    new Color("2D2E30"),
	    new Color("2C2C2E")
	]
} else {
	gradient.colors = [
	    new Color("FFFFFF"),
	    new Color("FFFFFF")
	]
}
//End of configuration


//MAIN
//DO NOT touch anything unless you know what you are doing
let widget = await createWidget()

if (config.runsInWidget) {
  Script.setWidget(widget)
  Script.complete()
} else {
  widget.presentSmall()
}

async function createWidget() {
	let widget = new ListWidget()

  widget.backgroundGradient = gradient
  widget.setPadding(20, 20, 20, 20)

	let date = new Date()
  let persianDate = date.toLocaleDateString('fa-IR').split("/")

  let day = widget.addText(week[date.getDay()])
  day.leftAlignText()
	day.font = Font.mediumMonospacedSystemFont(13)

	let dayOfMonth = widget.addText(EnNum(persianDate[2]))
	dayOfMonth.leftAlignText()
	dayOfMonth.font = Font.mediumMonospacedSystemFont(40)

  widget.addSpacer(25)

  let monthYear = widget.addText(months[parseInt(EnNum(persianDate[1]) - 1)] + ", " + EnNum(persianDate[0]))
	monthYear.leftAlignText()
	monthYear.font = Font.mediumMonospacedSystemFont(13)

	date = date.toString().split(" ")
	date = date[1] + " " + date[2] + ", " + date[3]
	date = widget.addText(date)
	date.leftAlignText()
	date.font = Font.mediumMonospacedSystemFont(13)

	return widget
}
//End of main program

//FUNCTIONS
//number 0 --> name: EnNumb
//         --> input: a persian number (STRING)
//         --> Description: turns any persian number into
//             its english equivalent
function EnNum(n){
	var res = ""
	for (var i = 0; i < n.length; i++) {
       res += persianNumbers.indexOf(n[i])
    }
	return res
}
// End of definition
