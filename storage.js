class Storage{
    

    saveNames(name){
        
        let usernames ;
        // let flag = false;
        if(localStorage.getItem('usernames') === null){
            usernames = [];
        }else{
            usernames = JSON.parse(localStorage.getItem('usernames'));
        }

        usernames.forEach((element,index) => {
            if(element === name){
                flag = true;
                usernames.splice(index,1);                
            }
        });
        usernames.push(name);

        // if(flag === false){
        //     usernames.push(name);
        // }else{
        //     usernames.push(name)
        // }

        localStorage.setItem('usernames',JSON.stringify(usernames));
        
    }
    getNames(){
        let usernames;
        if(localStorage.getItem('usernames') === null){
            usernames = [];
        }else{
            usernames = JSON.parse(localStorage.getItem('usernames'));
        }
        return usernames;
    }

    clearAllUser(){
        localStorage.clear('usernames');
    }

}