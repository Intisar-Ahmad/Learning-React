import { useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({
        "base": "USD",
        "rates": {
            "EUR": 0.92,
            "GBP": 0.78,
            "JPY": 148.36,
            "AUD": 1.52,
            "CAD": 1.34,
            "INR": 83.12,
            "PKR": 280.50,
            "CNY": 7.15,
            "SAR": 3.75,
            "AED": 3.67
        }})
}

export default useCurrencyInfo;