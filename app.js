const form = document.getElementById('github-form');
const username = document.getElementById('githubname');
const clearButton = document.getElementById('clear-last-users');
const lastUsers = document.getElementById('last-users');

const github = new Github();
const ui = new UI();
const storage = new Storage();
listeners();

function listeners(){
    form.addEventListener('submit',getData);
    clearButton.addEventListener('click',clearAll);
    document.addEventListener('DOMContentLoaded',getLastUsers);
}

function getData(e){
    let user = username.value.trim();

    if(user === ''){
        ui.showError('Lütfen bir Kullanıcı Adı giriniz!');
    }else{
        github.getRequest(user)
        .then(data => {
            if(data.user.message === 'Not Found'){
                ui.showError('User Not Found');
            }else{
                
                storage.saveNames(user);
                ui.showUserInfo(data.user);
                ui.showRepos(data.repos);
                ui.showLastUsers(storage.getNames());

            }
        })
        .catch(err => ui.showError(err));
           
    }
    
    ui.clearInputField();
    e.preventDefault();
}

function clearAll(){
    storage.clearAllUser();
    ui.showLastUsers(storage.getNames());
}

function getLastUsers(){
    ui.showLastUsers(storage.getNames());
}