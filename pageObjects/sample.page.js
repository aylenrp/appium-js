class Dialog {
    /**
     * Define Elements
     */
    get appBtn() {return $("~App");}
    get alertDialogBtn() {return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');}
    get titleAlertDialog() {return $('//android.widget.TextView[contains(@text, "App/Alert Dialogs")]');}

}
module.exports = new Dialog();