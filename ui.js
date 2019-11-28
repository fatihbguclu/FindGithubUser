class UI{
    constructor(){
        this.profileDiv = document.getElementById('profile');
        this.repoDiv = document.getElementById('repos');
        this.lastUsers = document.getElementById('last-users');
        this.username = document.getElementById('githubname');
        this.cardBody = document.querySelector('.card-body');
    }
    
    clearInputField(){
        this.username.value = '';
    }

    showUserInfo(userData){
        this.profileDiv.innerHTML = `
        
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${userData.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${userData.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${userData.name}</strong></div>
             <hr>
             <div id="bio">${userData.blog}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${userData.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${userData.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${userData.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${userData.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${userData.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${userData.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>            
        
        
        `;
    }

    showRepos(repos){
        this.repoDiv.innerHTML = '';
        if(repos.length === 0){
            this.repoDiv.innerHTML = `<p>Don't Have Repos`;
        }else{
            for(let i = repos.length-1 ; i>repos.length-6; i--){    

                this.repoDiv.innerHTML += `
                
                <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                            
                            <a href="${repos[i].html_url}" target = "_blank" id = "repoName"><span>${repos[i].name}</span></a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repos[i].stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repos[i].forks_count}</span>
                            </button>
                
                        </div>
                    </div>
                </div>            
                
                `;
            }
        }
        
    }

    showError(message){
        
        const div = document.createElement('div');
        
        div.className = 'alert alert-danger';
        div.textContent = message;
        
        this.cardBody.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);

    }

    showLastUsers(usernames){
        this.lastUsers.innerHTML = '';
        console.log(usernames);
        if(usernames.length < 6){
            usernames.forEach((name) => {
                this.lastUsers.innerHTML += `
            
                    <li class="list-group-item">${name}</li>
            
                `;
            })
        }else{
            for(let i = usernames.length-1; i>usernames.length-6; i--){
                this.lastUsers.innerHTML += `
                    <li class="list-group-item">${usernames[i]}</li>
                `;
            }
        }
    }
}