module.exports = {
    //Bien penser à relancer watch Gulp quand modification sur ce fichier
    purge: ['./src/**/*.vue'],
    darkMode: 'class',
    theme: {
        minHeight: {
            '10vh': '10vh',
            '20vh': '20vh',
            '25vh': '25vh',
            '30vh': '30vh',
            '40vh': '40vh',
            '50vh': '50vh',
            '60vh': '60vh',
            '70vh': '70vh',
            '80vh': '80vh',
            '90vh': '90vh',
            '1r': '1rem',
            '2r': '2rem',
            '3r': '3rem',
            '4r': '4rem',
            '5r': '5rem',
            '6r': '6rem',
            '7r': '7rem',
            '8r': '8rem',
            '9r': '9rem',
            '10r': '10rem',
            '15r': '15rem',
            '24r': '24rem',
            '48r': '48rem'
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            customWhite: '2px 4px 7px 0px rgba(230,230,230,1)',
            customRed: '2px 4px 7px 0px rgba(189, 30, 81, 1)',
            customGreen: '2px 4px 7px 0px rgba(149, 217, 120, 1)',
            customBlue: '2px 4px 7px 0px rgba(72, 147, 189, 1)',
            customYellow: '2px 4px 7px 0px rgba(241, 184, 20, 1)',
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            2: '2px',
            4: '4px',
            8: '8px',
            '.1r': '.1rem',
            '.2r': '.2rem',
            '.3r': '.3rem',
            '.4r': '.4rem',
            '.5r': '.5rem',
            '.6r': '.6rem',
            '.7r': '.7rem',
            '.8r': '.8rem',
            '.9r': '.9rem',
            '1r': '1rem',
            '2r': '2rem',
            '3r': '3rem',
            '4r': '4rem',
            '5r': '5rem',
            '6r': '6rem',
            '7r': '7rem',
            '8r': '8rem',
            '9r': '9rem',
            '10r': '10rem',
            '11r': '11rem',
            '12r': '12rem',
            '13r': '13rem',
            '14r': '14rem',
            '15r': '15rem',
        },
        zIndex: {
            '1000': '1000',
            '2000': '2000',
            '3000': '3000',
            '4000': '4000',
            '5000': '5000',
            '6000': '6000',
            '7000': '7000',
            '8000': '8000',
            '9000': '9000',
            '10000': '10000',
            '11000': '11000',

        },
        extend: {
            transitionProperty: {
                'dark': 'dark'
            },
            // Ma palette de couleur
            colors: {
                myDark: {
                    100: '#141516',
                    200: '#1D1F20',
                    300: '#27292B',
                    400: '#303336',
                    500: '#2c3135'
                },
                myWhite: 'whitesmoke',
                myGray: {
                    500: '#e7e4df'
                },
                myRed: {
                    500: '#bd1e51'
                },
                myYellow: {
                    500: '#f1b814'
                },
                myGreen: {
                    500: '#95d978'
                },
                myBlue: {
                    500: '#4893bd',
                    900: '#0B171E'
                }
            },
            // Les fonts BeVietnam du plus fin au plus gras
            fontFamily: {
                beVietnam1: ['beVietnam1', 'serif'],
                beVietnam2: ['beVietnam2', 'serif'],
                beVietnam3: ['beVietnam3', 'serif'],
                beVietnam4: ['beVietnam4', 'serif'],
                beVietnam5: ['beVietnam5', 'serif'],
                beVietnam6: ['beVietnam6', 'serif'],
                beVietnam7: ['beVietnam7', 'serif'],
            },
            // Les spacers perso notemment vh vw
            spacing: {
                '10vh': '10vh',
                '20vh': '20vh',
                '25vh': '25vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh',
                'headmin': 'calc(100vh - 6rem)',
                'headmin+': 'calc(100vh - 4.75rem)',
                '100+': 'calc(100% + 1%)',
                'screen+': 'calc(100vh + 2rem)'
            }
        },
    },
    variants: {
        extend: {

            // on rajoute la possibilité d'agir sur la propriété display avec dark:
            display: ['dark'],
            boxShadow: ['dark'],
            transitionProperty: ['dark', 'hover']
        },
    },
    plugins: [],
}