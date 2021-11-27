
// btn.addEventListener('click', function () {
//     console.log('fdfdfd');
//     try {
//         fetch('https://reqres.in/api/unknown', {
//             method: 'GET',
//             headers: 'application/JSON'
//         })
//         .then(function(response) {
//             console.log(response.status); // Will show you the status
//             if (!response.status != 200) {
//                 throw new Error("error");
//             }
//             return response.json();
//         })
//         .catch(err =>{
//             console.log(err)
//         });


//     } catch (error) {
//         console.log(error);
//     }
// })
let img = document.getElementById('success');
async function renderPage1() {
    try {
        fetch('https://reqres.in/api/unknown/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(function(response) {
            console.log(response.json().data); // Will show you the status
            if (response.status == 200) {
                img.src = 'https://smallbusinessify.com/wp-content/uploads/2018/09/What-does-Success-Mean-to-You.jpg';
            } else {
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/2198px-Error.svg.png';
            
            }
            return response.json();
            
        })
        .catch(err =>{
            console.log(err)
        });


    } catch (error) {
        console.log(error);
    }
}
renderPage1();