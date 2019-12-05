var user = require('../model/User');
var md5 = require('md5');

async function Login(ObjQuerry) {

    return new Promise((resolve, reject) => {
        var access = "access denied"
        var obj = {};
        obj.userName = "";
        obj.password = "";
        if (ObjQuerry.userName) {
            var obj = {};
            obj.userName = ObjQuerry.userName;
            obj.password = md5(ObjQuerry.password);
            console.log(ObjQuerry.password);
            console.log(md5(obj.password));
        }
        else
            resolve(access);

        user.findOne(obj).exec(function (err, doc) {
            if (err)
                reject(err);
            var access = "access denied"
            if (doc) {
                if (obj.userName)
                    if (doc.userName == obj.userName && doc.password == obj.password)
                        var access = "access granted"
                console.log(doc.userName);
            }
            resolve(access);
        });
    })

}
module.exports = { 'Login': Login }
