const weights = {
    Placement:3,
    Result:2,
    Event:1
};

function calculate(notification){

    const score =
        weights[notification.Type] * 1000000000000 +
        new Date(notification.Timestamp).getTime();

    return score;
}

module.exports = calculate;
notifications.sort((a,b)=>{

return calculate(b)-calculate(a);

});
const top = notifications.slice(0,n);
