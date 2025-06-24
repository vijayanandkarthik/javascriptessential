let isauthenticated = false;
let userrole = "admin";
let authenticationstatus = isauthenticated? "authenticated": "not authenticated"
let isloggedin = true;
let accesslevel;

if(isloggedin){
if(userrole == "admin"){
    accesslevel = "Full access granted!"
}
else if (userrole == "manager"){
    accesslevel = "Limited access!";
}
else{
    accesslevel = "No access granted!"
}}
else{
    accesslevel ="Not permitted , please First Login with ur crendtials"
}
console.log("ACCESS LEVEL:",accesslevel);
console.log("authenticationstatus:",authenticationstatus);

