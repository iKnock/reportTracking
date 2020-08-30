module.exports = {
    onSuccess: {
        success: true,
        message: 'Details updated successfully'
    },
    onKebeleNotFound: {
        success: false,
        message: 'Kebele Not Found'
    },    
    onKebeleByRegionNotFound: {
        success: false,
        message: 'No kebele found in this region'
    },
    onKebeleByWoredaNotFound: {
        success: false,
        message: 'No kebele found in this woreda'
    },
    onKebeleByZoneNotFound: {
        success: false,
        message: 'No kebele found in this zone'
    },
    onServerAdminFail: {
        success: false,
        message: 'This area is for admin only'
    },
    onSetVacationSuccess: {
        success: true,
        message: 'Your vacations set successfully.'
    },
    onVacationExist: {
        success: false,
        message: 'You already setup vacation on this date'
    },
    onVacationDelete: {
        success: true,
        message: 'Vacation is deleted successfully.'
    }
};