module.exports = {
    onSuccess: {
      success: true,
      message: 'Details updated successfully'
    },
    onRegionNotFound: {
      success: false,
      message: 'Region Not Found'
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