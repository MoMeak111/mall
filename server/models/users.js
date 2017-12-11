/**
 * Created by yinzhengxiang on 2017/11/14.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "orderList":Array,
    "cartList":[{
        "productId":String,
        "productName":String,
        "salePrice":String,
        "productImage":String,
        "checked":String,
        "productNum":String
        }
    ],
    "addressList":[{
        "addressId":String,
        "userName":String,
        "streetName":String,
        "postCode":String,
        "tel":String,
        "isDefault":Boolean
    }]
});


module.exports = mongoose.model("User",userSchema);