
function handleSubmit(){
    $('#git_form').submit(function(){
        event.preventDefault();
        let gitName = $('#git_name').val();
        
        console.log($('#git_name').val());
        let searchList = getRepo(gitName);
       
        $("#landing").html(searchList);

});
}
function getUrl(gitName){
    let url=`https://api.github.com/users/${gitName}/repos`;
    return url;

}
function displayResults(responseJson){
    $('#landing').empty();
    

   $('#landing').append(
    `
    <li><h4>Name : ${responseJson[i].name}</h4>
        <p>The Url: <a href= ${responseJson[i].html_url}>${responseJson[i].html_url}</a><p>
    </li>
    `

   )
}

function getRepo(gitName){
    let url= getUrl(gitName);
    fetch(url)
    .then(respone => {
        if (respone.ok){
            return respone.json();

        }
        throw new Error(respone.message);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(`Whoops can't find that profile.`));
   
}













function loadscript(){
    handleSubmit();
}




$(loadscript);