export const navBarStyle = theme => {
    return ({
        containerNav:{
            backgroundColor: '#e38a6f',
        },
        toolbar: {
            padding: '3px 20px 2px 20px',
        },
        logo:{
            marginRight: '50px',
        },
        links:{
            marginRight: '50px',
            fontSize: '2em',
            fontFamily: 'Josefin Sans',
            textDecoration: 'none',
            position: 'relative',
            '&:after':{
                content: '',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                width: '100%',
                height: '3px',
                transform: 'scaleX(0%)',
                backgroundColor: '#20C2F7',
                transition: 'transform 0.3s'
            },
            '&:hover:after':{
                transform: 'scaleX(100%)',
            },
            '&:hover':{
                color: '#20C2F7',
                
            }
        }
    });
}