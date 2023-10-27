//creatind token and saving in cookie

const sendToken=(user,statusCode,res)=>{
    const token = user.getJWTToken();
    // console.log(`$toekns is ${token}`)

    //saving cookie
    res.status(statusCode).cookie("token",token,{expires: new Date(Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000),httpOnly:true,sameSite:'none',path:'/famous-zabaione-78119e.netlify.app', secure:true}).json({
        success:true,
        user,
        token,
    });
};
module.exports=sendToken;
