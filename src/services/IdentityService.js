class IdentifyService {
    identifyAsync = async (name, identityCode) => {
        const appCode = 'd8b727965752409da8ba14a19de2e432';
        const baseUrl = 'http://idcard.market.alicloudapi.com/lianzhuo/idcard';
        const requestUrl = encodeURI(baseUrl+`?cardno=${identityCode}&name=${name}`);
        console.log(requestUrl);
        let response = await fetch(requestUrl,{
            method:'GET',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                Authorization:'APPCODE '+ appCode
            }
        });
        console.log(response);
    }
}

export default new IdentifyService();