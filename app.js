const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


function message()
{
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name.value === '' || email.value === '' || msg.value === '')
    {
        danger.style.display = 'block';
    }
    else
    {
        if(email.value.match(regExp)){
            setTimeout(() =>
            { 
                name.value = '';
                email.value = '';
                msg.value = '';
                
            }, 1500)
    
            success.style.display = 'block';
            setTimeout(() =>
            {
                openPopup();
            container.style.display = 'none';
            content.style.display = 'none';
        }, 4000)
    }else{
        danger.style.display = 'block';
    }
        
    }
    setTimeout(() =>
        {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000)
}


hamburger.addEventListener('click', () => 
{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => 
{
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => 
{
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

