const button = document.querySelector('#button')

const baseUrl = 'https://f24-deployment-lab.herokuapp.com/'

const buyNow = function() {
    window.location='https://pourri.com/products/heavy-doody'
}

const brokenFunction = () => {
axios.get(baseUrl + '/api/brokenFunction/')
.then(res => {
    const data = res.data;
    alert(data);
}) .catch((err) => {
    
})
}

button.addEventListener('click', buyNow)