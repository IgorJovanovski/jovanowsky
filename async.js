// function makeAjax(url) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url,
//             success: resolve,
//             error: reject
//         })
//     })
// }

// makeAjax(`https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json`)
//     .then(res => JSON.parse(res))
//     .then(data => {
//         console.log(data)
//         let pdfTypes = data.filter(el => el.type === "pdf")
//         console.log(pdfTypes)
//         for (let index = 0; index < pdfTypes.length; index++) {
//             const element = pdfTypes[index];
//             setTimeout(() => {
//                 console.log(element.name)
//             }, 1000 * index);

//         }
//     })
//     .catch(error => console.log(error))

// -----------------------------------------------------------------------------------------------------

// fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json')
//     .then(res => res.json())
//     .then(data => {
//         let filterData = data.filter(el => el.type === "pdf")
//         for (let index = 1; index < filterData.length; index++) {
//             const element = filterData[index];
//             setTimeout(() => {
//                 console.log(element.name)
//             }, 1000 * index);


//         }
//     })

//  ------------------------------------------------------------------------------------------

function printName(name, ms = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(name)
        }, ms);
    })
}
