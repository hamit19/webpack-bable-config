import Style from '../assets/style/profilePage.css'


const profilePageComponent = () =>  {

    const wrapper = document.createElement('div');

    wrapper.setAttribute('class', Style.profile_wrapper);


    const title = document.createElement('h4')

    title.appendChild(document.createTextNode('This is profile title :)'))

    title.setAttribute('class', Style.profile_title);
    
   

    const body = document.createElement('div');

    body.setAttribute('class', 'body');

    body.appendChild(document.createTextNode('This is a simple profile page for testing css modules in webpack!'))
    

    wrapper.appendChild(title);

    wrapper.appendChild(body);


    return wrapper;


}

document.getElementById('root').appendChild(profilePageComponent())

// export default profilePageComponent();

