import axios from "axios";

var data=[]

const coins =["bitcoin","litecoin","ethereum","shiba-inu","dogecoin","matic-network","binancecoin","tether","solana","decentraland"];

async function getData (){
    data = [];
    for (var coin in coins){
    await axios
    .get('https://api.coingecko.com/api/v3/coins/'+ coins[coin])
    .then(res =>{
    data = [...data,res.data];
    //console.log(coin);
    })
    .catch(error =>{
    console.log(error)
    });
    
    }

    //console.log(data.length);

    return data;
}

export default getData;






