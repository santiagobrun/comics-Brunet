export const itemCountStyle = theme => {
    return ({
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '30px',
            '& > h5':{
                display: 'flex',
                justifyContent: 'center'
            },
            '& > div':{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > button':{
                    alignSelf: 'center',
                    fontSize: '1.2em',
                    borderRadius: '20px',
                    backgroundColor: '#991433',
                    color: 'white',
                    marginBottom: '10px',
                    border: 'none',
                    fontFamily: '',
                    fontweight: 'bold',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease',
                    '&:hover':{
                        opacity: '0.8',
                        backgroundColor: '#991433'
                    },
                },
                '& > h4':{
                    paddingBottom: '8px',
                    margin: '10px',
                    fontSize: '1.1em',
                }
            },
            '& > button':{
                alignSelf: 'center',
                fontSize: '1.2em',
                borderRadius: '20px',
                backgroundColor: '#991433',
                color: 'white',
                padding: '0.5em 1em',
                marginBottom: '10px',
                border: 'none',
                fontFamily: '',
                fontweight: 'bold',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
                '& > span':{
                    textTransform: 'capitalize'
                },
                '&:hover':{
                    opacity: '0.8',
                    backgroundColor: '#44af79'
                }
            }
        }
    });
};