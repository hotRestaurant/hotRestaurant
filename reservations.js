//Empty array to push all new customers into
var CustomersArray = []

//variables to capture inputs
var name = $("#name-input").val().trim()
var phone =$("#phone-input").val().trim()
var email = $("#email-input").val().trim()
var uniqueId = $("#unique-input").val().trim()

//Constructor function to build new customer from input vars
function CurrentCustomer(name, phone, email, uniqueId) {
   this.name = name;
   this.phone = phone;
   this.email = email;
   this.uniqueId = uniqueId;
}

//on clicking submit creates a new customer objects and pushes it into array
$("submit-button").click(function(){
    var CurrentCustomer = new CurrentCustomer(name, phone, email, uniqueId)
    console.log(CurrentCustomer)
    CustomersArray.push(CurrentCustomer)
  });

