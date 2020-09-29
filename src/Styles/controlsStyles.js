import home from '../assets/house.svg';
import message from '../assets/message.png';
import search from '../assets/search.png';
import users from '../assets/users.png';
import add from '../assets/add.png';

export const ControlsStyles={
    wrapper:{
        borderTop: 'solid 1px rgba(200,200,200,1)',
        backgroundColor:'white',
        position: 'fixed',
        bottom:0,
        left:0,
        right:0,
        width:'100vw',
        height:50
    },
    home:{
        backgroundImage: `url(${home})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:'10vw',
        height:50
    },
    message:{
        backgroundImage: `url(${message})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'center',
        width:'10vw',
        height:20
    },
    search:{
        backgroundImage: `url(${search})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:'10vw',
        height:20
    },
    users:{
        backgroundImage: `url(${users})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:'10vw',
        height:20
    },
    add:{
        backgroundImage: `url(${add})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:40,
        height:40
    }
}