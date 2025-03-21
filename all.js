/* (async () => {
    async function post(endpoint, params){
        return fetch(`/api/v2/${endpoint}`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
            method: "POST"
        }).then(x => x.json());
    }
    
    document.getElementById('sessionButton').addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        if (action === 'enter') {
            
        }
    });
})();
*/

document.write("heelo!");
