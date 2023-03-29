function encurtarURL() {
    //validar se o link existe
    let url = document.getElementById("input-url").value;
        if (!url) {
            alert("URL não existe");
        return;
        }
        //headers

        let headers = {
            "Content-Type": "application/json","apiKey":"68723b9ae4954b74a2437487303a324a"
        }

        //dados
        let linkRequest = {
            destination:url,
            domain: { fullName: "rebrand.ly" }
        }

        fetch("https://api.rebrandly.com/v1/links", {
            method: "POST",
            headers: headers ,
            body:JSON.stringify(linkRequest)
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                let inputUrl = document.getElementById("input-url")
                inputUrl.value = json.shortUrl;
            })
 }

 //copiar
    function copiar() {
        let inputUrl = document.getElementById("input-url")
            inputUrl.select()
            inputUrl.setSelectionRange(0,99999)

                navigator.clipboard.writeText(inputUrl.value)
            alert(`URL copiada: ${inputUrl.value}`)
    }