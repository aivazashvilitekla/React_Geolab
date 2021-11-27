async function renderPage1() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
        let data = await response.json();


        var div = document.createElement("div");
        div.id = "parent";
        document.body.appendChild(div);
        
        const dataArr = data.map((obj) => {
            var innerDiv = document.createElement("div");
            
            div.appendChild(innerDiv);
            

            var userId = document.createElement("h3");
            userId.innerText = obj.userId + '.' + obj.id;
            
            var title = document.createElement("h2");
            title.innerText = obj.title;
            var body = document.createElement("p");
            body.innerText = obj.body;

            
            innerDiv.appendChild(userId);
            innerDiv.appendChild(title);
            innerDiv.appendChild(body);
        })
    } catch (error) {
        console.log(error);
    }
}
renderPage1();