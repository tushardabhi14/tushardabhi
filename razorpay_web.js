
function checkoutWithRazorpay(options, onSuccess, onFailure) {

    let rzpOptions;

    try {
        rzpOptions = typeof options === 'string'
            ? JSON.parse(options)
            : options;
    } catch (e) {
        console.error("Razorpay parse error", e);
        onFailure?.("Invalid payment options");
        return;
    }

    rzpOptions.handler = function (response) {
        onSuccess?.(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
        );
    };

    rzpOptions.modal = {
        backdropclose: false,
        escape: false,
        handleback: true,
        ondismiss: function () {
            onFailure?.("Payment cancelled");
        }
    };

    rzpOptions.retry = {
        enabled: true,
        max_count: 2
    };

    rzpOptions.timeout = 300;

    // Better Safari compatibility
    rzpOptions.native_otp = false;

    // Prevent autofill / focus issues on Safari
    rzpOptions.readonly = {
        email: true,
        contact: true,
        name: true
    };

    const openCheckout = () => {

        try {

            // Safari keyboard/focus fix
            document.activeElement?.blur();

            const rzp = new Razorpay(rzpOptions);

            rzp.on('payment.failed', function (response) {

                console.error("Razorpay payment failed", response);

                let msg = "Payment failed";

                if (response?.error?.description) {
                    msg = response.error.description;
                }

                onFailure?.(msg);
            });

            // Safari stability: blur active element to hide keyboard before opening modal
            if (document.activeElement && typeof document.activeElement.blur === 'function') {
                document.activeElement.blur();
            }

            rzp.open();

        } catch (e) {

            console.error("Razorpay init error", e);

            onFailure?.(
                "Unable to open payment gateway"
            );
        }
    };

    if (typeof Razorpay === 'undefined') {

        console.log("Loading Razorpay SDK dynamically");

        const script = document.createElement('script');

        script.src =
            'https://checkout.razorpay.com/v1/checkout.js';

        script.async = true;

        script.onload = function () {

            console.log("Razorpay SDK loaded");

            openCheckout();
        };

        script.onerror = function () {

            console.error("Razorpay SDK load failed");

            onFailure?.(
                "Failed to load payment gateway"
            );
        };

        document.body.appendChild(script);

    } else {

        openCheckout();
    }
}
