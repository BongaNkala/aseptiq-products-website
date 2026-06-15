#!/bin/bash

# Function to fix header in a file
fix_header() {
    local file=$1
    echo "Fixing $file..."
    
    # Create new header
    sed -i '/<header>/,/<\/header>/c\
    <header>\
        <div class="container">\
            <div class="logo">\
                <h1>Aseptiq<span>Products</span></h1>\
                <p class="tagline">RSA | Premium Cleaning Solutions</p>\
            </div>\
            <nav>\
                <ul>\
                    <li><a href="index.html">Home</a></li>\
                    <li class="has-dropdown">\
                        <a href="javascript:void(0)">Products</a>\
                        <ul class="dropdown-menu">\
                            <li><a href="index.html#products">📦 All Products</a></li>\
                            <li><a href="combos.html">🔥 Combo Deals</a></li>\
                            <li><a href="specials.html">🎉 Special Offers</a></li>\
                        </ul>\
                    </li>\
                    <li><a href="index.html#about">About</a></li>\
                    <li><a href="index.html#contact">Contact</a></li>\
                </ul>\
            </nav>\
            <div class="header-cart">\
                <button class="cart-icon-header" onclick="toggleCart()">\
                    🛒 <span id="cartCount">0</span>\
                </button>\
            </div>\
        </div>\
    </header>' $file
}

# Fix all files
fix_header "index.html"
fix_header "combos.html"
fix_header "specials.html"

echo "✅ Fixed headers in all files"
