const profilePic = 'https://firebasestorage.googleapis.com/v0/b/frogtestapp-9e87a.appspot.com/o/myProfile%2FjaneProfile.jpg?alt=media&token=689211ac-ec67-4c25-9da0-2210e622739b';

export const myProfileStyles = {
    profilePic :{
        backgroundImage: `url(${profilePic})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:150,
        height:150,
        borderRadius: 150
    },
    images:{
        width:'100%',
        height:300,
        objectFit:'cover',
    }
}