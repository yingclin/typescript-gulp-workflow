var Customer = (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    return Customer;
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//# sourceMappingURL=customer.js.map