export const pageView = () => {
    window.fbq('track', 'PageView')
  }
  
  // https://developers.facebook.com/docs/facebook-pixel/advanced/
  export const event = (trackerType, name, options = {}) => {
    window.fbq(trackerType, name, options)
  }