
export const depositMoney = (amount:number) => {
    return (dispatch:any) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney= (amount:number) => {
    return (dispatch:any) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const getGeoLocation = (geo:any) => {
    
    return (dispatch:any) => {

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position:any) => {
                
                 //return { lat: position.coords.latitude, lng: position.coords.longitude };
                 geo = { lat: position.coords.latitude, lng: position.coords.longitude };
                 // alert(JSON.stringify(geo));
                 dispatch({
                    type: "geocode",
                    payload: geo
                 })
                
             });
         }
     
        
    }
}