class slhttp {
    async get(url){
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Status : ${response.status}`);

        }
        const data = await response.json();
        return data;
    }

    async post(url, data){
        const requestOptions ={
            method: 'POST',
            headers : {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, requestOptions)
        if(!response.ok){
            throw new Error(`Status : ${response.status}`);

        }
        const resData = await response.json();
        return resData;
    }

    async put(url, data){
        const requestOptions ={
            method: 'PUT',
            headers : {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, requestOptions)
        if(!response.ok){
            throw new Error(`Status : ${response.status}`);

        }
        const resData = await response.json();
        return resData;
        
    }

    async delete(url){
        const requestOptions ={
            method: 'DELETE',
        };

        const response = await fetch(url,requestOptions)
        if(!response.ok){
            throw new Error(`Status : ${response.status}`);

        }
        const resData = await response.json();
        return resData;
        
    }
}
http = new slhttp();
export default http;