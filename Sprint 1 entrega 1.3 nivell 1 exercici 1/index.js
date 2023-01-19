const hasCovid = true;
const covid = new Promise((resolve, reject) => {
    if(!hasCovid) {
        const covidSymptoms = {
            fever: 'I have a fever',
            headache: true,
            cough: 'I cough a lot'
        }
        resolve(covidSymptoms);
    } else {
        reject(new Error('Covid test showed a negative result. Everything OK.'))
    }
});

covid
    .then( res => {
        console.log('Covid test showed a positive result. Off to quarantine you go.');
        console.log(res);
    })
    .catch( err => {
        console.log(err.message);
    })

