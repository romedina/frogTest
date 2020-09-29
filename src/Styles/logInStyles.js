import logInBackground from '../assets/mainBackground.png';

export const logInStyles = {
    container:{ 
        backgroundImage: `url(${logInBackground})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height: '100vh'
    },
    gridContainer:{
        height: '100vh'
    },
    buttonWrapper:{
        backgroundColor:'white',
        width: '100vw',
        padding: '10px 10px',
    },
    register:{
        border:'solid 2px black',
        backgroundColor: 'black',
        color:'white',
        fontWeight: 'bold',
        cursor:'pointer'
    },
    login:{
        border:'solid 2px black',
        fontWeight:'bold',
        cursor:'pointer'
    },
    link:{
        textDecoration:'none'
    }

}