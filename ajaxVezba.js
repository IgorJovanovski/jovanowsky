let myBtn = document.getElementById('btn')
myBtn.addEventListener('click', function () {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class1/students.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let MainDiv = document.getElementById("main")
            let h1Node = document.createElement("h1")
            MainDiv.append(h1Node)
            h1Node.textContent = data.academy;
            let UlNode = document.createElement("ul")
            MainDiv.append(UlNode)
            for (let i = 0; i < data.students.length; i++) {
                let LiNode = document.createElement("li")
                LiNode.textContent = data.students[i];
                UlNode.append(LiNode);
            }
        });


})
