var CustomersArray = []

var name = $("#name-input").val().trim()
var phone =$("#phone-input").val().trim()
var email = $("#email-input").val().trim()
var uniqueId = $("#unique-input").val().trim()

function CurrentCustomer(name, phone, email, uniqueId) {
   this.name = name;
   this.phone = phone;
   this.email = email;
   this.uniqueId = uniqueId;
}

$("submit-button").click(function(){
    var CurrentCustomer = new CurrentCustomer(name, phone, email, uniqueId)
    console.log(CurrentCustomer)
    CustomersArray.push(CurrentCustomer)
  });

