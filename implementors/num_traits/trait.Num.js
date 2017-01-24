(function() {var implementors = {};
implementors["ethcore"] = ["impl Num for BigUint","impl Num for BigInt","impl&lt;T&gt; Num for Ratio&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + Integer</span>",];implementors["ethsync"] = ["impl Num for BigUint","impl Num for BigInt","impl&lt;T&gt; Num for Ratio&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + Integer</span>",];implementors["ethcore_rpc"] = ["impl Num for BigUint","impl Num for BigInt","impl&lt;T&gt; Num for Ratio&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + Integer</span>",];implementors["ethcore_dapps"] = ["impl&lt;T&gt; Num for Ratio&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + Integer</span>","impl Num for BigUint","impl Num for BigInt",];implementors["parity"] = ["impl Num for BigUint","impl Num for BigInt","impl&lt;T&gt; Num for Ratio&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + Integer</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
