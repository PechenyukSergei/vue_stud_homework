import axios from 'axios';
const url="https://fakestoreapi.com/products"
export function getData(callback, errorcallback){
    axios.get(url)
        .then(res => {
            //do something
            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if(errorcallback != null){
                errorcallback(err);
            }
        })
}