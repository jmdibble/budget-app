// BUDGET CONTROLLER
var budgetController = (function() {
    
    //some code

})()

// UI CONTROLLER
var UIController = (function() {

    //some code

})()

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // TODO
        // Get the field input data
        // Add the item to the budget controller
        // Add the item to the UI
        // Calculate the budget
        // Display the budget on the UI
        console.log('Check')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem()
        }

    })

})(budgetController, UIController)

