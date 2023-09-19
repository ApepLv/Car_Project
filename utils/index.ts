
export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '03601a2985msh65263f7f7cc1ef6p1616e5jsndbcae43fb76b',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers : headers,
});

const result = await response.json();
return result;
}