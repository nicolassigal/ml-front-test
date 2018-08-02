

export function getCurrencySymbol(currency) {
    switch (currency) {
        case 'ARS' :
            return '$';
        default :
            return '$';
    }
}

export function getCondition (condition) {
    switch (condition) {
        case 'new' :
            return 'Nuevo';
        case 'used' :
            return 'Usado';
        default :
            return '';
    }   
}