const express = require('express');
const router = express.Router();

// Usage API Root Path
router.get('/', function (_, res) {
    res.send('Advanced Usage API');
});

// Gets list of API products with usage
router.get('/products', function (_, res) {
    var products = require("../json/products_response.json");
    res.status(200).json(products);
});

// Gets date-bucketed usage data, totaled across all API products
router.get('/metrics/date-histogram', function (req, res) {
    if (req.params != null) {
        if (req.query.timeInterval == 'daily') {
            console.log('Daily Metrics Date-Histogram');
            var daily_metrics = require("../json/metrics_datehistogram_daily_response.json");
            res.status(200).json(daily_metrics);
        } else if (req.query.timeInterval == 'monthly') {
            console.log('Monthly Metrics Date-Histogram');
            var monthly_metrics = require("../json/metrics_datehistogram_monthly_response.json");
            res.status(200).json(monthly_metrics);
        }
    }
});

// Gets total API usage during the given time period
router.get('/metrics/products', function (req, res) {
    if (req.params != null) {
        console.log('Total API Usage for a given time period');
        var products_metrics = require("../json/metrics_products_response.json");
        res.status(200).json(products_metrics);
    }
});

// Gets date-bucketed usage data, for the specified API product
router.get('/metrics/products/:apiProductId/date-histogram', function (req, res) {
    if (req.params != null) {
        console.log('API Product Date Histogram');
        var products_daily_metrics = require("../json/metrics_products_datehistogram_response.json");
        res.status(200).json(products_daily_metrics);
    }
});

// Export Route
module.exports = router;
