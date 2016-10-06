### This is a lightweight javascript shopping system using design patterns

Usage:

`
 <script>
    
    var product = {
            title: "Item 1",
            once_off: 2.23,
            monthly: 3.33
        };
    
      var items = new LineItems();
      items.add(product);

      var cart = new Cart();
      //link the items behavior
      cart.setAddAction(items.add);
      cart.setRemoveAction(items.remove);
      cart.setGetAction(items.get);

      var calculate = new Calculate();
      calculate.setEquation(Equation1);
      calculate.setTaxEquation(TaxEquation1);

      var total = calculate.total([
        items.get(),
        'once_off'
      ]);
      var tax = calculate.tax(total);

      debugger;

  </script>
  `