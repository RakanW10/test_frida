console.log("Straing ....")
Java.perform(function () {
  var MainActivity = Java.use('sg.vantagepoint.uncrackable1.MainActivity')
  MainActivity.a.implementation = function (arg1) 
  {
    var orig_str = this.a(arg1)
    console.log("Original String: " + orig_str)

    var ret_value = this.a("Haxor")
    return ret_value
  }
})