$(document).ready(function() {
    const storeItems = [
        {
            name: 'TV',
            price: 800.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Phone',
            price: 700.00,
            inStock: false,
            details: '5G'
        },
        {
            name: 'Game Console',
            price: 300.00,
            inStock: true,
            details: 'The latest and greatest'
        },
        {
            name: 'Laptop',
            price: 1200.00,
            inStock: true,
            details: '16GB RAM 1TB SSD'
        },
        {
            name: 'Smart Watch',
            price: 200.00,
            inStock: false,
            details: 'Counts your steps'
        },
        {
            name: 'Headphones',
            price: 100.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Keyboard',
            price: 100.00,
            inStock: true,
            details: 'Types for you'
        },
        {
            name: 'HDMI Cord',
            price: 100.00,
            inStock: true,
            details: 'HDMI to USB type C'
        },
        {
            name: 'Monitor',
            price: 300.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Speaker',
            price: 200.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Video Game',
            price: 60.00,
            inStock: true,
            details: 'Enjoy for hours'
        },
    ];
    function createProductDiv(product) {
      if (product.inStock) {
        var productDiv = $("<div class='product'></div>");
        var priceDiv = $("<div class='price'></div>");
        var nameDiv = $("<div class='name'></div>");
        var detailsDiv = $("<div class='details'></div>");
        priceDiv.text("$" + product.price.toFixed(2));
        nameDiv.text(product.name);
        detailsDiv.text(product.details);
        productDiv.append(priceDiv);
        productDiv.append(nameDiv);
        productDiv.append(detailsDiv);
        $("#products").append(productDiv);
      }
    }
  
    $.each(storeItems, function(index, product) {
      createProductDiv(product);
    });
  
    $("#dark-mode-btn").click(function() {
      $("body").toggleClass("dark-mode");
    });
  
  });
  