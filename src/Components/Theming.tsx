import React from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
    background: '#F5E4DD',
    card: 'rgba(243, 244, 246, 0.8)',
    text: '#1E1E1E',
    main:'#644328',
    button:'#2B2320'    
};

const Theming = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default Theming;
